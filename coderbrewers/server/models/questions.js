import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  name: {
    type: String,
    default: "No Text available",
  },
  question_Description: {
    type: String,
    default: "",
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },
  option4: {
    type: String,
    required: true,
  },
  selectedFile: String,

  solution: {
    type: String,
    required: true,
  },
  tags: [String],
  quiz_id: {
    type: String,
    default: "",
  },
});

var questionData = mongoose.model("questionData", questionSchema);

export default questionData;
