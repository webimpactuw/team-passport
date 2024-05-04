import { TextButton } from "../components/Button"
import { CenterContainer } from "../components/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { QuizBoard } from "../components/Quizboard"
import logo from "../math.jpg"

export default function QuizzesPage() {
    return (
        <CenterContainer>
            <div className = "w-2/3 m-8 flex justify-between">
                <progress value = {0.5} className="w-11/12"/>
                <FontAwesomeIcon icon = {faStar} className="text-yellow-400 fa-xl"/>
            </div>
            <CenterContainer style={`grid-cols-2 w-2/3 h-3/5 m-12 gap-10`}>
                <img src={logo} alt="Logo"/>
                <QuizBoard question={`Which of the following is divisible by 4?`}
                    option1={`1`}
                    option2={`12`}
                    option3={`123`}
                    option4={`1234`} />
            </CenterContainer>
            <div className = "w-2/3 flex justify-between">
                <TextButton option = "Back" style = {`w-40 bg-cyan-300`}/>
                <TextButton option = "Check" style = {`w-40 bg-cyan-300`}/>
            </div>
        </CenterContainer>
    )
}