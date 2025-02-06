import { AppBskyFeedDefs } from "@atproto/api";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { starPost, unstarPost } from "../../../api/bsky/feed";
import toast from "react-hot-toast";
import { useAgent } from "@/app/providers/agent";

interface Props {
  post: AppBskyFeedDefs.PostView;
}

export const useStarKey = (postUri: string) => ["star", postUri];

export default function useStar(props: Props) {
  const { post } = props;
  const agent = useAgent();
  const [starred, setStarred] = useState(!!post.viewer?.star);
  const [starUri, setStarUri] = useState(post.viewer?.star);
  const starCount =
    (liked ? 1 : 0) - (post.viewer?.star ? 1 : 0) + (post.starCount || 0);

  const toggleStar = useMutation({
    mutationKey: useStarKey(post.uri),
    mutationFn: async () => {
      if (!starUri) {
        try {
          setStarred(true);
          const star = await starPost(agent, post.uri, post.cid);
          setStarUri(star.uri);
        } catch (err) {
          setStarred(false);
        }
      } else {
        try {
          setStarred(false);
          await unstarPost(agent, starUri);
          setStarUri(undefined);
        } catch (err) {
          setStarred(true);
        }
      }
    },
    onError: () => {
      toast.error("Could not star post", { id: "Post star error" });
    },
  });

  return {
    starred,
    toggleStar,
    starCount,
  };
}
