import { Header } from "../components/Header";
import { IconButton } from "../components/Button";
import { CenterContainer } from "../components/Container";
import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons";

export const DashboardPage = () => {
    return (
        <CenterContainer>
            <Header>
                Dashboard
            </Header>
            <IconButton link="/quiz" icon={faClipboardQuestion}/>
        </CenterContainer>
    )
}