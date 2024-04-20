import { IconButton } from "../components/Button";
import { CenterContainer } from "../components/Container";
import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function DashboardPage() {
    return (
        <CenterContainer>
            <Link to="/quiz">
                <IconButton icon={faClipboardQuestion}/>
            </Link>
        </CenterContainer>
    )
}