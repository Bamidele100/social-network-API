// const { Schema, model } = require('mongoose');
// // const moment = require('moment');

// const UserSchema = new Schema({
//     username: {
//         type: String,
//         unique: true,
//         required: true,
//         trimmed: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
//     },
//     thoughts: [
//         {
//             type: Schema.Types.ObjectId,
//             referencing: 'Thought'
//         }
//     ],
//     friends: [
//         {
//             type: Schema.Types.ObjectId,
//             referencing: 'User'
//         }
//     ]
// },
//     {
//         toJSON: {
//             virtuals: true
//         },
//         id: false
//     }
// );
// UserSchema.virtual('friendCount').get(function () {
//     return this.friends.length;
// });

// // create the User model using the UserSchema
// const User = model('User', UserSchema);

// // export the User model
// module.exports = User;


const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Your email was Wrong,please enter a valid email address",]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought"
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    ]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

// Create the model user using the userSchema
const User = model("User", userSchema);
module.exports = User;