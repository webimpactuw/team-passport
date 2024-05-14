import { TextButton } from "./Button"
import { CenterContainer } from "./Container"

export function QuizBoard({question, options, optionClick}) {

    return (
        <CenterContainer style={`text-xl`}>
            {question}
            <CenterContainer style={`w-full`}>
                {options.map((option) => (
                    <TextButton option={option} onClick={() => optionClick(option)} style={`w-full bg-blue-500 text-white`}/>
                ))}
            </CenterContainer>
        </CenterContainer>
    )
}