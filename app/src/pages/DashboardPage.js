import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { BasicButton } from "../components/Button";
import { CenterContainer } from "../components/Container";

export const DashboardPage = () => {
    return (
        <CenterContainer>
            <Header>
                Dashboard
            </Header>
            <BasicButton>
                <Link to="/quiz">
                    Quizzes
                </Link>
            </BasicButton>
        </CenterContainer>
    )
}