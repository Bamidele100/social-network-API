// const { Schema, model, Types } = require('mongoose');
// const moment = require('moment');

// const reactionSchema = new Schema({
//     reactionId: {
//         type: Schema.Types.ObjectId,
//         default: () => new Types.ObjectId()
//     },
//     reactionBody: {
//         type: String,
//         required: true,
//         maxlength: 280
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//         get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
//     }
// },
//     {
//         toJSON: {
//             virtuals: true,
//             getters: true
//         },
//         id: false
//     }
// );

// const thoughtSchema = new Schema({
//     thoughtText: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//         get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     reactions: [reactionSchema]
// },

//     {
//         toJSON: {
//             virtuals: true,
//             getters: true
//         },
//         id: false
//     }
// );

// thoughtSchema.virtual('reactionCount').get(function () {
//     return this.reactions.length;
// });

// // create the Thought model using the ThoughtSchema
// const Thought = model('Thought', thoughtSchema);

// // export the Thought model
// module.exports = Thought;


const {Schema, model, Types} = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal),
      },
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );

// `thoughtText`,`createdAt`,`username`,`reactions`
const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal),
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
  );


//   Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
  
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });
  
  const Thought = model("Thought", thoughtSchema);
  
  module.exports = Thought;