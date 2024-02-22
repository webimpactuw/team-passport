import { BasicButton } from "../components/Button"
import { CenterContainer } from "../components/Container"
import { Header } from "../components/Header"

export const QuizzesPage = () => {
    return (
        <CenterContainer>
            <Header>
                Quizzes
            </Header>
            <div className="grid grid-cols-4">
                <BasicButton> 1 </BasicButton>
                <BasicButton> 2 </BasicButton>
                <BasicButton> 3 </BasicButton>
                <BasicButton> 4 </BasicButton>
            </div>
        </CenterContainer>
    )
}