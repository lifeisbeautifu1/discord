export enum ServerEvents {
  FRIEND_REQUEST_CREATE = "friendrequest.create",
  FRIEND_REQUEST_CANCEL = "friendrequest.cancel",
  FRIEND_REQUEST_ACCEPTED = "friendrequest.accepted",
  FRIEND_REQUEST_REJECTED = "friendrequest.rejected",
  FRIEND_REMOVED = "friend.removed",
  CONVERSATION_CREATE = "conversation.create",
  MESSAGE_CREATE = "message.create",
  MESSAGE_DELETE = "message.delete",
  MESSAGE_UPDATE = "message.update",
}

export enum ClientEvents {
  GET_ONLINE_FRIENDS = "getOnlineFriends",
  TYPING_START = "typingStart",
  TYPING_END = "typingEnd",
}

export enum WebsocketEvents {
  FRIEND_REQUEST_RECEIVED = "onFriendRequestReceived",
  FRIEND_REQUEST_CANCELLED = "onFriendRequestCancelled",
  FRIEND_REQUEST_ACCEPTED = "onFriendRequestAccepted",
  FRIEND_REQUEST_REJECTED = "onFriendRequestRejected",
  FRIEND_REMOVED = "onFriendRemoved",
  CONVERSATION_CREATED = "onConversation",
  MESSAGE_CREATED = "onMessage",
  MESSAGE_DELETE = "onMessageDelete",
  MESSAGE_UPDATE = "onMessageUpdate",
  ON_TYPING_START = "onTypingStart",
  ON_TYPING_END = "onTypingEnd",
}

export enum Routes {
  AUTH = "auth",
  USERS = "users",
  FRIENDS = "friends",
  FRIEND_REQUESTS = "friends/requests",
  UPLOAD = "upload",
  CONVERSATIONS = "conversations",
  MESSAGES = "conversations/:id/messages",
}
