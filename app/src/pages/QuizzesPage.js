import { CenterContainer } from "../components/Container"
import { Header } from "../components/Header"
import { QuizBoard } from "../components/Quizboard"
import logo from "../math.jpg"

export default function QuizzesPage() {
    return (
        <CenterContainer>
            <Header>
                Quiz Progress
            </Header>
            <CenterContainer style={`grid-cols-2 w-3/5 h-3/5 m-20 gap-10`}>
                <img src={logo} alt="Logo"/>
                <QuizBoard question={`Which of the following is divisible by 4?`}
                    option1={`1`}
                    option2={`12`}
                    option3={`123`}
                    option4={`1234`} />
            </CenterContainer>
        </CenterContainer>
    )
}