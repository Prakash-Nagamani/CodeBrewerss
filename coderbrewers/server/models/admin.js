import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    default: "",
  },
  displayName: {
    type: String,
    default: "",
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
  quizzes: [String],
  isLogged: {
    type: Boolean,
    default: true,
  },
});

var AdminData = mongoose.model("Admin", adminSchema);

export default AdminData;
