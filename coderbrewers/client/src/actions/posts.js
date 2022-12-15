import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH,
} from "../constants/actionTypes.js";

import * as api from "../api/index.js";

export const createQuiz = (quiz) => async (dispatch) => {
  try {
    const { data } = await api.createPost(quiz);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAdmin = (admin) => async (dispatch) => {
  try {
    const { data } = await api.createAdmin(admin);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(admin._id);
    window.location.replace(
      `http://localhost:3000/#/${admin.userId}/GatherData`
    );

    console.log("record already exists");
  }
};
export const createQuestion = (question) => async (dispatch) => {
  try {
    const { data } = await api.createQuestion(question);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("record already exists");
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getQuizzes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchQuizzes();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchQuestions();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAdminStatus = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateAdminStatus(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateQuiz = (id, quiz) => async (dispatch) => {
  try {
    const { data } = await api.updateQuiz(id, quiz);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAdminId = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.getAdminId(id);

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getQuizId = (name) => async (dispatch) => {
  try {
    const { data } = await api.getQuizId(name);

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteQuiz = (id) => async (dispatch) => {
  try {
    await api.deleteQuiz(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteQuestion = (id) => async (dispatch) => {
  try {
    await api.deleteQuestion(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getSingleQuiz = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleQuiz(id);

    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log("actions", error.message);
  }
};

export const getSingleQuestion = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleQuestion(id);

    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log("actions", error.message);
  }
};
