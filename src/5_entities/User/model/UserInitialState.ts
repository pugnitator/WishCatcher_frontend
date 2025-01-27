import IUser from "./IUser"

interface UserInitialState {
    currentUser: IUser | null,
};

const userInitialState: UserInitialState = {
    currentUser: null,
};

export default userInitialState;