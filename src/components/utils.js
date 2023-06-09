import {
  AllInboxOutlined,
  Delete,
  Drafts,
  MailOutline,
  Report,
} from "@mui/icons-material";

export const listMapping = {
  allMail: {
    id: "allMail",
    text: "All Mail",
    icon: AllInboxOutlined,
  },
  inbox: {
    id: "inbox",
    text: "Inbox",
    icon: MailOutline,
  },
  draft: {
    id: "draft",
    text: "Draft",
    icon: Drafts,
  },
  spam: {
    id: "spam",
    text: "Spam",
    icon: Report,
  },
  trash: {
    id: "trash",
    text: "Trash",
    icon: Delete,
  },
};

export const tagColourMap = {
  inbox: "#000075",
  draft: "#FFA500",
  spam: "#FF2E2E",
  trash: "#5C5CFF",
};
