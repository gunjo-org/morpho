import { ThreadViewResult } from "../../../types/feed";

export const THREAD_VIEW_PREFS: ThreadViewResult = {
  sort: "newest",
  prioritizeFollowedUsers: true,
  lab_treeViewEnabled: false,
};

export const THREAD_VIEW_OPTIONS = [
  { value: "oldest", label: "Oldest replies first" },
  { value: "newest", label: "Newest replies first" },
  { value: "most-stars", label: "Most-starred replies first" },
  { value: "random", label: "Random replies" },
];
