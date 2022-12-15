import axios from "axios";

const url = "http://localhost:4000/createQuiz";

export const createPost = (newPost) => axios.post(url, newPost);
export const createAdmin = (newAdmin) =>
  axios.post("http://localhost:4000/createAdmin", newAdmin);

export const createQuestion = (newAdmin) =>
  axios.post("http://localhost:4000/createQuestion", newAdmin);

export const fetchUsers = () => axios.get("http://localhost:4000/getUsers");

export const fetchQuizzes = () => axios.get("http://localhost:4000/getQuizzes");

export const getAdminId = (id) =>
  axios.get(`http://localhost:4000/findAdmin/${id}`);

export const getQuizId = (name) =>
  axios.get(`http://localhost:4000/findQuiz/${name}`);

export const fetchQuestions = () =>
  axios.get("http://localhost:4000/getQuestions");

export const fetchSingleQuiz = (id) =>
  axios.get(`http://localhost:4000/getSingleQuiz/${id}`);

export const fetchSingleQuestion = (id) =>
  axios.get(`http://localhost:4000/getSingleQuestion/${id}`);

export const updateAdminStatus = (id, updatedPost) =>
  axios.patch(`http://localhost:4000/updateQuiz/${id}`, updatedPost);

export const updateQuiz = (id, updatedQuiz) =>
  axios.patch(`http://localhost:4000/updateQuiz/${id}`, updatedQuiz);

export const deleteQuiz = (id) =>
  axios.delete(`http://localhost:4000/deleteQuiz/${id}`);

export const deleteQuestion = (id) =>
  axios.delete(`http://localhost:4000/deleteQuestion/${id}`);
