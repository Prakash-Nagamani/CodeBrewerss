import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "open",
    required: true,
    unique: true,
  },
  author_id: {
    type: String,
    default: "Open to All",
  },
  participants: [String],
  mode: {
    type: Boolean,
    default: false,
  },

  participants_count: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 1,
  },
  questions: [String],
  questions_count: {
    default: 0,
    type: Number,
  },
  start_date: {
    type: Date,
    default: new Date(),
  },
  end_date: {
    type: Date,
    default: new Date(),
  },
  display_result: {
    type: Boolean,
    default: false,
  },
  flagged_count: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  notes: {
    type: String,
    default: "",
  },
});

var QuizData = mongoose.model("QuizData", quizSchema);

export default QuizData;
