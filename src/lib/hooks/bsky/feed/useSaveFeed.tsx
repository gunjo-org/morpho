import { useState } from "react";
import { SavedFeed } from "../../../../../types/feed";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { togglePinFeed, toggleSaveFeed } from "@/lib/api/bsky/feed";
import toast from "react-hot-toast";
import { getAgentFromClient } from "@/lib/api/bsky/agent";

interface Props {
  feedItem: SavedFeed;
}

export default function useSaveFeed(props: Props) {
  const { feedItem } = props;
  const [isPinned, setIsPinned] = useState(feedItem.pinned);
  const queryClient = useQueryClient();

  const updatePinnedFeeds = (mode: "pin" | "unpin") => {
    queryClient.setQueryData(["savedFeeds"], (oldData: any) => {
      return oldData.map((feed: SavedFeed) => {
        if (feed.cid === feedItem.cid) {
          return {
            ...feed,
            pinned: mode === "pin" ? true : false,
          };
        }
        return feed;
      });
    });
  };

  const updateSavedFeeds = (mode: "remove" | "add") => {
    queryClient.setQueryData(["savedFeeds"], (oldData: any) => {
      if (mode === "remove") {
        return oldData.filter((feed: SavedFeed) => feed.cid !== feedItem.cid);
      }

      if (mode === "add") {
        return [...oldData, feedItem];
      }
    });
  };

  const togglePin = useMutation({
    mutationKey: ["savedFeeds"],
    mutationFn: async () => {
      const isCurrentlyPinned = feedItem.pinned;
      // optimistically update to the new state
      setIsPinned(!isCurrentlyPinned);
      updatePinnedFeeds(isCurrentlyPinned ? "unpin" : "pin");

      try {
        const agent = await getAgentFromClient();
        await togglePinFeed(agent, feedItem.uri);
      } catch (error) {
        // revert to the old state in case of an error
        updatePinnedFeeds(isCurrentlyPinned ? "pin" : "unpin");
        setIsPinned(isCurrentlyPinned);
      }
    },
    onError: () => {
      toast.error(`Could not ${feedItem.pinned ? "unpin" : "pin"} feed`, {
        id: "Feed item pin error",
      });
    },
  });

  const deleteFeed = useMutation({
    mutationKey: ["savedFeeds"],
    mutationFn: async () => {
      updateSavedFeeds("remove");
      try {
        const agent = await getAgentFromClient();
        await toggleSaveFeed(agent, feedItem.uri);
      } catch (error) {
        updateSavedFeeds("add");
      }
    },
    onError: () => {
      toast.error(`Could not delete feed`, { id: "Feed item deletion error" });
    },
  });

  const saveFeed = useMutation({
    mutationKey: ["savedFeeds"],
    mutationFn: async () => {
      updateSavedFeeds("add");
      try {
        const agent = await getAgentFromClient();
        await toggleSaveFeed(agent, feedItem.uri);
      } catch (error) {
        updateSavedFeeds("remove");
      }
    },
    onError: () => {
      toast.error(`Could not save feed`, { id: "Feed item save error" });
    },
  });

  return {
    isPinned,
    togglePin,
    saveFeed,
    deleteFeed,
  };
}
