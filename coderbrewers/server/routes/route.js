import express from "express";
import bodyParser from "body-parser";
import {
  createAdmin,
  createQuiz,
  getQuizzes,
  getQuestions,
  getUsers,
  findAdminById,
  updateAdminPost,
  findQuizById,
  createQuestion,
  updateQuiz,
  deleteQuestion,
  deleteQuiz,
  getSingleQuiz,
  getSingleQuestion,
  findQuizByObjId,
} from "../controller/control";

const router = express.Router();
router.post("/adminLogin", createAdmin);
router.get("/getQuizzes", getQuizzes);
router.get("/getQuestions", getQuestions);
router.get("/getSingleQuiz/:id", getSingleQuiz);
router.get("/getSingleQuestion/:id", getSingleQuestion);
router.get("/getUsers", getUsers);
router.patch("/updateAdmin/:id", updateAdminPost);
router.patch("/updateQuiz/:id", updateQuiz);
router.get("/findAdmin/:id", findAdminById);
router.get("/findQuiz/:name", findQuizById);
router.get("/findQuizObjId/:id", findQuizByObjId);
router.post("/createQuiz", createQuiz);
router.post("/createQuestion", createQuestion);
router.delete("/deleteQuestion/:id", deleteQuestion);
router.delete("/deleteQuiz/:id", deleteQuiz);
