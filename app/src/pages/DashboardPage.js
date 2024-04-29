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
    )
}