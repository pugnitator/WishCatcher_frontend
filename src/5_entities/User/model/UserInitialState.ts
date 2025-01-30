import IUser from "./IUser";

interface UserInitialState {
  isLogin: boolean;
  currentUser: IUser | null;
}

const userInitialState: UserInitialState = {
  isLogin: false,
  currentUser: null,
  // isLogin: true,
  // currentUser: {
  //   id: "111",
  //   login: "login",
  //   name: "Ameli",
  //   birthday: "10.11.1987",
  // },
};

export default userInitialState;
