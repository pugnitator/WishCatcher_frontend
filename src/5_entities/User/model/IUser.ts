export default interface IUser {
    id: string;
    login: string;
    name?: string;
    birthday?: string;
    friends?: Array<string>;
}

/*
Модель на беке
const User = new mongoose.Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    birthday: {type: Date},
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});
*/