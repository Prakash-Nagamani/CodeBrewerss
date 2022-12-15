import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    default: "rookie",
  },
  userId: {
    type: String,
    default: "0",
  },
  quizzes: [String],
  isBlocked: {
    type: Boolean,
    default: false,
  },
  history: {
    ans: [
      {
        marks: String,
        quizId: String,
      },
    ],
  },
  dob: {
    type: Date,
    required: true,
  },
  attempted_quizzes: [String],
});

var userData = mongoose.model("userData", userSchema);

export default userData;
