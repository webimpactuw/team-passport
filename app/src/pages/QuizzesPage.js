import { QuizBoard } from "../components/Quizboard"

export default function QuizzesPage() {
    return (
        <QuizBoard question={`Which of the following is divisible by 4?`}
            option1={`1`}
            option2={`12`}
            option3={`123`}
            option4={`1234`} />
    )
}