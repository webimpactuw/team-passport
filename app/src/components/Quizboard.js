import { TextButton } from "./Button"
import { CenterContainer } from "./Container"

export function QuizBoard({question, option1, option2, option3, option4}) {
    return (
        <CenterContainer style={`text-xl`}>
            {question}
            <CenterContainer>
                <TextButton option = {option1}/>
                <TextButton option = {option2}/>
                <TextButton option = {option3}/>
                <TextButton option = {option4}/>
            </CenterContainer>
        </CenterContainer>
    )
}