import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import {
  createQuiz,
  createAdmin,
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
} from "./controller/control.js";

// const express = require("express");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/createQuiz", createQuiz);
app.use("/createQuestion", createQuestion);
app.use("/createAdmin", createAdmin);
app.use("/getQuizzes", getQuizzes);
app.use("/getSingleQuiz/:id", getSingleQuiz);
app.use("/getSingleQuestion/:id", getSingleQuestion);
app.use("/getQuestions", getQuestions);
app.use("/findAdmin/:id", findAdminById);
app.use("/findQuiz/:name", findQuizById);
app.use("/getUsers", getUsers);
app.use("/updateAdmin/:id", updateAdminPost);
app.use("/updateQuiz/:id", updateQuiz);
app.use("/deleteQuestion/:id", deleteQuestion);
app.use("/deleteQuiz/:id", deleteQuiz);

app.use("/findQuizObjId/:id", findQuizByObjId);

const CONNECTION_URL =
  "mongodb+srv://template_1:zTTdKEkAaEigk5L8@cluster0.9pmld.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
