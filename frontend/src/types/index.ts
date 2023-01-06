export type User = {
  id: string;
  email: string;
  username: string;
  u_name: string;
  emailVerified: string | null;
  image: string | null;
} | null;

export type Errors = {
  email?: string;
  username?: string;
  password?: string;
  token?: string;
} | null;

export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = {
  email: string;
  username: string;
  password: string;
};

export type FriendRequest = {
  id: string;
  senderId: string;
  receiverId: string;
  sender: User;
  receiver: User;
  status: "pending" | "accepted" | "rejected";
};

export type Friend = {
  id: string;
  sender: User;
  receiver: User;
};
