export const GROUPABLE_NOTIFICATIONS = ["star", "follow", "repost"];

export const MAX_AUTHORS_SHOWN = 6;

export const NOTIFICATION_FILTER: {
  label: string;
  value: NotificationReason | "all";
}[] = [
  { label: "All", value: "all" },
<<<<<<< HEAD
  { label: "Star", value: "star" },
=======
  { label: "Like", value: "like" },
>>>>>>> parent of 9448c0c (edit path)
  { label: "Follow", value: "follow" },
  { label: "Repost", value: "repost" },
  { label: "Quote", value: "quote" },
  { label: "Reply", value: "reply" },
];
