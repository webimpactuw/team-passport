import { CenterContainer } from "../components/Container";
import Sidebar from "./Sidebar";

export default function LandingPage() {
    return (
        <main className="flex">
            <Sidebar />
            <CenterContainer>
                <h1 className="m-20 text-6xl">Passport</h1>
                <section className="flex m-20">
                    <div className="contentCard border-2 border-gray-200 w-96 h-80 mr-20">
                        <img src="" alt="" />
                    </div>
                    <h2 className="text-xl w-80">Your <strong>budget-friendly</strong> option to travel and learn about the world</h2>
                    <div>
                        <button></button>
                        <button></button>
                    </div>
                </section>
                <section className="flex m-20">
                    <h2 className="text-xl w-80">
                        Learning other cultures around the world without being physically present?
                        <br />
                        <em>Nothing is impossible</em>
                    </h2>
                    <div className="contentCard border-2 border-gray-200 w-96 h-80 ml-20">
                        <img src="" alt="" />
                    </div>                
                </section>
                <section className="flex m-20">
                    <div className="contentCard border-2 border-gray-200 w-96 h-80 mr-20">
                        <img src="" alt="" />
                    </div>                    
                    <h2 className="text-xl w-80">
                        Have you ever traveled to a place but learned nothing about its culture?
                        <br />
                        It's never too late to learn with us! :&#x29;</h2>
                </section>
            </CenterContainer>
        </main>
        
    )
}