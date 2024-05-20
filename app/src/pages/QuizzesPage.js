import { TextButton } from "../components/Button";
import { CenterContainer } from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import logo from "../math.jpg";
import { useState, useEffect, useCallback } from "react";
import Sidebar from "../components/Sidebar";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCnC8d1Qg1dsdr8YlcBWh0WpeDtRzll6vs",
  authDomain: "passport-24121.firebaseapp.com",
  databaseURL: "https://passport-24121-default-rtdb.firebaseio.com",
  projectId: "passport-24121",
  storageBucket: "passport-24121.appspot.com",
  messagingSenderId: "681461392478",
  appId: "1:681461392478:web:3ee00a215354dae4c700cf"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const questionList = ref(db, "questions");

export default function QuizzesPage() {
  const [progress, setProgress] = useState(0);
  const [answer, setAnswer] = useState("");
  const [tries, setTries] = useState(0);
  const [mainQuestion, setMainQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answerStatus, setAnswerStatus] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [nextClicked, setNextClicked] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const loadQuestion = useCallback((index) => {
    const question = questions[index];
    if (question) {
      setMainQuestion(question.question);
      setAnswers(question.answers);
      setCorrectAnswer(question.correct_answer);
    }
  }, [questions]);

  useEffect(() => {
    const unsubscribe = onValue(questionList, (snapshot) => {
      const questionsArray = snapshot.val();
      if (questionsArray) {
        const questions = Object.values(questionsArray);
        setQuestions(questions);
        if (nextClicked) {
          // Adjust progress to go from 0 to a maximum of 38
          setProgress((prevProgress) => (prevProgress + 1) % 39);
          setNextClicked(false);
        } else {
          loadQuestion(progress);
        }
      }
    });

    return () => unsubscribe();
  }, [nextClicked, progress, loadQuestion]);

  const optionClick = (option) => {
    setAnswer(option);
  };

  const backClick = () => {
    if (progress > 0) {
      setProgress(progress - 1);
      setAnswer("");
      setAnswerStatus(null);
    }
  };

  const checkClick = () => {
    setTries(tries + 1);
    if (answer === correctAnswer) {
      setAnswerStatus("correct");
      setTimeout(() => {
        setAnswerStatus(null);
        setAnsweredQuestions((prev) => prev + 1);
      }, 1000);
    } else {
      setAnswerStatus("incorrect");
    }
  };

  const nextClick = () => {
    setNextClicked(true);
  };

  return (
    <main className="flex">
      <Sidebar />
      <CenterContainer>
        <div className="w-2/3 m-8 flex justify-between">
          {/* Display progress out of a maximum of 38 */}
          <progress value={progress} max="38" className="w-11/12" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 fa-xl" />
        </div>
        <CenterContainer style={`grid-cols-2 w-2/3 h-3/5 m-12 gap-10`}>
          <img src={logo} alt="" />
          <CenterContainer style={`text-xl`}>
            {mainQuestion}
            <CenterContainer style={`w-full`}>
              {answers.map((option, index) => (
                <TextButton
                  key={index}
                  option={option}
                  onClick={() => optionClick(option)}
                  style={
                    answer === option
                      ? answerStatus === "correct"
                        ? `w-full bg-green-500 text-white`
                        : answerStatus === "incorrect"
                        ? `w-full bg-red-500 text-white`
                        : `w-full bg-blue-500 text-white`
                      : `w-full bg-cyan-300`
                  }
                />
              ))}
            </CenterContainer>
          </CenterContainer>
        </CenterContainer>
        <div className="w-2/3 flex justify-between">
          <TextButton option="Back" onClick={backClick} style={`w-40 bg-cyan-300`} />
          <TextButton option="Check" onClick={checkClick} style={`w-40 bg-cyan-300`} />
          <TextButton option="Next" onClick={nextClick} style={`w-40 bg-cyan-300`} />
        </div>
        {/* Display the number of questions answered */}
        <div className="w-2/3 flex justify-center mt-4">
          <p>Questions Answered: {answeredQuestions}</p>
        </div>
      </CenterContainer>
    </main>
  );
}
