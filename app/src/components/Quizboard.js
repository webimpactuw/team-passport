import { TextButton } from "./Button"
import { CenterContainer } from "./Container"

export function QuizBoard({question, option1, option2, option3, option4}) {
    return (
        <CenterContainer style={`text-xl`}>
            {question}
            <CenterContainer style={`w-full`}>
                <TextButton option = {option1} style = {`w-full bg-blue-500 text-white`}/>
                <TextButton option = {option2} style = {`w-full bg-blue-500 text-white`}/>
                <TextButton option = {option3} style = {`w-full bg-blue-500 text-white`}/>
                <TextButton option = {option4} style = {`w-full bg-blue-500 text-white`}/>
            </CenterContainer>
        </CenterContainer>
    )
}