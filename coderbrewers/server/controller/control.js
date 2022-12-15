import mongoose from "mongoose";
import QuizData from "../models/quiz.js";
import AdminData from "../models/admin.js";
import questionData from "../models/questions.js";
import userData from "../models/user.js";
export const getUsers = async (req, res) => {
  try {
    const postdata = await userData.find();
    console.log(postdata);
    res.status(200).json(postdata);
  } catch (error) {
    window.alert(`Error Occurred ${error.message}`);
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

export const getQuizzes = async (req, res) => {
  try {
    const postQuiz = await QuizData.find();
    console.log(postQuiz);
    res.status(200).json(postQuiz);
  } catch (error) {
    window.alert(`Error Occurred ${error.message}`);
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

export const getQuestions = async (req, res) => {
  try {
    const postdata = await questionData.find();
    console.log(postdata);
    res.status(200).json(postdata);
  } catch (error) {
    window.alert(`Error Occurred ${error.message}`);
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};
export const createQuiz = async (req, res) => {
  const data = req.body;

  const newQuiz = new QuizData(data);
  try {
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createQuestion = async (req, res) => {
  const data = req.body;
  // console.log(data);
  const newQuestion = new questionData(data);

  try {
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createAdmin = async (req, res) => {
  const data = req.body;
  console.log(data);
  const newAdmin = new AdminData(data);
  await newAdmin
    .save()
    .then(() => {
      res.status(201).json(newAdmin);
    })
    .catch((err) => {
      // res.redirect(`/${data.userId}/GatherData`);
      res.status(409).json({ message: err.message });
    });
};

export const findAdminById = async (req, res) => {
  const { id } = req.params;
  AdminData.find({ userId: id })
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};
export const findQuizById = async (req, res) => {
  const { name } = req.params;
  QuizData.find({ name: name })
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};
export const findQuizByObjId = async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  QuizData.findById(_id)
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};

export const updateAdminPost = async (req, res) => {
  const { id } = req.params;
  const { isLogged } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = {
    isLogged,
    _id: id,
  };

  await AdminData.findByIdAndUpdate(id, updatedPost);

  res.json(updatedPost);
};

export const updateQuiz = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  console.log(body);

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedQuiz = body;

  await QuizData.findByIdAndUpdate(id, updatedQuiz, { new: true });

  res.json(updatedQuiz);
};

export const deleteQuiz = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await QuizData.findByIdAndRemove(id);

  res.json({ message: "Quiz deleted successfully." });
};

export const deleteQuestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await questionData.findByIdAndRemove(id);

  res.json({ message: "Question deleted successfully." });
};

export const getSingleQuiz = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send("Invalid Object Id");
  }
  const currentPost = await QuizData.findById(id);
  res.json(currentPost);
};
export const getSingleQuestion = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send("Invalid Object Id");
  }
  const currentPost = await questionData.findById(id);
  res.json(currentPost);
};
