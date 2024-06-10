type Inbox = {
  name: string;
  isGroup: boolean;
  isNewMessage: boolean;
  chatGroup: Array<ChatGroup>;
};

type ChatGroup = {
  date: string;
  chats: Array<Chat>;
};

type Chat = {
  date: string;
  isMe: boolean;
  isRead: boolean;
  name: string;
  chat: string;
};
