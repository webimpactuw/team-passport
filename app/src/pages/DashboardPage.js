import { Header } from "../components/Header";
import { CenterContainer } from "../components/Container";
import Sidebar from "./Sidebar";

export default function DashboardPage() {
    return (
        <main>
            <CenterContainer>
                <Header>
                    Dashboard
                </Header>
            </CenterContainer>
            <Sidebar />
            <div className="container">
                <section className="flex">
                    <img src="" alt="" />
                    <p></p>
                </section>
            </div>
        </main>
// import { IconButton } from "../components/Button";
// import { CenterContainer } from "../components/Container";
// import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// export default function DashboardPage() {
//     return (
//         <CenterContainer>
//             <Link to="/quiz">
//                 <IconButton icon={faClipboardQuestion}/>
//             </Link>
//         </CenterContainer>
    )
}