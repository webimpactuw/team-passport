import { TextButton } from "../components/Button"
import { CenterContainer } from "../components/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import logo from "../math.jpg"
import { useState } from "react"

const quizData = [
    {
        question: "Which of the following is divisible by 4?",
        options: ["1", "12", "123", "1234"],
        answer: "12",
        img: logo
    },
    {
        question: "Which of the following is divisible by 4?",
        options: ["1234", "123", "12", "1"],
        answer: "12",
        img: logo
    },
    {
        question: "Which of the following is divisible by 4?",
        options: ["1", "12", "123", "1234"],
        answer: "12",
        img: logo
    }
]

export default function QuizzesPage() {
    const [progress, setProgress] = useState(0);
    const [answer, setAnswer] = useState("");
    const [tries, setTries] = useState(0);

    const optionClick = (option) => {
        setAnswer(option);
    }

    const backClick = (option) => {
        if (progress > 0) {
            setProgress(progress - 1);
            setAnswer("");
        }
    }

    const checkClick = () => {
        setTries(tries + 1);
        if (answer === quizData[progress].answer) {
            if (progress < quizData.length - 1) {
                setProgress(progress + 1);
                setAnswer("");
            }
        }
    }

    return (
        <CenterContainer>
            <div className = "w-2/3 m-8 flex justify-between">
                <progress value = {progress / quizData.length} className="w-11/12"/>
                <FontAwesomeIcon icon = {faStar} className="text-yellow-400 fa-xl"/>
            </div>
            <CenterContainer style={`grid-cols-2 w-2/3 h-3/5 m-12 gap-10`}>
                <img src={quizData[progress].img} alt=""/>
                <CenterContainer style={`text-xl`}>
                    {quizData[progress].question}
                    <CenterContainer style={`w-full`}>
                        {quizData[progress].options.map((option) => (
                            <TextButton option={option} onClick={() => optionClick(option)} style={answer === option ? `w-full bg-blue-500 text-white` : `w-full bg-cyan-300`}/>
                        ))}
                    </CenterContainer>
                </CenterContainer>
            </CenterContainer>
            <div className = "w-2/3 flex justify-between">
                <TextButton option = "Back" onClick={backClick} style = {`w-40 bg-cyan-300`}/>
                <TextButton option = "Check" onClick={checkClick} style = {`w-40 bg-cyan-300`}/>
            </div>
        </CenterContainer>
    )
}