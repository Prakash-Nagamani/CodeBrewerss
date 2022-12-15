import React from "react";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import MainData from "./admin/adminDashboard/MainData";
import StartingPage from "./welcome/StartingPage";
import Quiz from "./admin/adminDashboard/components/Quiz/Quiz";
import Login from "./utils/Login";
import Logout from "./utils/Logout";
import Results from "./utils/Results";
import AttemptExam from "./utils/AttemptExam";
import History from "./admin/adminDashboard/components/Quiz/History";
import Fb from "./utils/Fb";
import Ques from "./admin/adminDashboard/components/questions/Ques";
import Gather from "./admin/adminDashboard/Gather";
import DisplayQuiz from "./admin/adminDashboard/components/Quiz/DisplayQuiz";
import BeforeDisplay from "./admin/adminDashboard/components/Quiz/BeforeDisplay";
import PreEditForm from "./admin/adminDashboard/components/Quiz/form/PreEditForm";
import StartQuiz from "./Users/results/Quiz/StartQuiz";
import Studentsign from "./welcome/Studentsign";
import Create from "./utils/Create";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <StartingPage />
      </Route>
      <Route exact path="/results">
        <Results />
      </Route>
      <Route exact path="/attemptQuiz/:id/:name">
        <StartQuiz />
      </Route>
      <Route exact path="/:id/quiz/:count/:name">
        <Ques />
      </Route>
      <Route exact path="/beforeQuizDisplay">
        <BeforeDisplay />
      </Route>

      <Route exact path="/:id/adminDashBoard">
        <MainData />
      </Route>
      <Route exact path="/:id/GatherData">
        <Gather />
      </Route>
      <Route exact path="/:id/adminDashBoard/createquiz">
        <Quiz />
      </Route>
      <Route exact path="/:id/history">
        <History />
      </Route>
      <Route exact path="/results">
        <Studentsign />
      </Route>
      <Route exact path="/attempt">
        <Studentsign />
      </Route>

      <Route exact path="/:id/logout">
        <Logout />
      </Route>
      <Route exact path="/:id/editQuiz">
        <PreEditForm />
      </Route>

      <Route exact path="/:id/adminDashBoard/editquiz">
        <Create />
      </Route>

      <Route exact path="/admin/login">
        <Login />
      </Route>

      <Route exact path="/Fb">
        <Fb />
      </Route>
    </Switch>
  );
}

export default App;
