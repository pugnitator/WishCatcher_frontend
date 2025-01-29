enum WishState{
    'free' = '0',
    'reserved' = '1',
    'presented' = '2',
}

export default interface IWish {
    id: string;
    name: string;
    state: WishState;
    giftURL?: string;
    comment?: string;
    tags: [string];
    ownerId: string;
    reservedBy: string;
}

/*
Wish на бэке:

const Wish = new mongoose.Schema({
    name: {type: 'String', required: true},
    state: {type: 'String', 
        enum: {
            values: ['free', 'reserved', 'presented'],
            message: `{VALUE} is not supported`,
        },
        default: 'free',
        // required: true,
    },
    giftURL: {type: 'String'},
    comment: {type: 'String'},
    tags: [String],
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    reservedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});
*/