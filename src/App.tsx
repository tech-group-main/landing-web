import {Navbar} from "./components/Navbar.tsx";
import {Main} from "./components/Main/Main.tsx";
import {About} from "./components/About/About.tsx";
import {Services} from "./components/Services/Services.tsx";
import {Contact} from "./components/Contact/Contact.tsx";
import {Case} from "./components/Cases/Case.tsx";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function App() {
    return (
        <div>
            <Navbar/>
            <Main/>
            <About/>
            <Services/>
            <Case/>
            <Contact/>
        </div>
    )
}

export default App
