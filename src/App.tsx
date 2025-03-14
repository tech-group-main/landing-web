import {Navbar} from "./components/Navbar.tsx";
import {Main} from "./components/Main/Main.tsx";
import {About} from "./components/About/About.tsx";
import {Services} from "./components/Services/Services.tsx";
import {Contact} from "./components/Contact/Contact.tsx";
import {Footer} from "./components/Footer/Footer.tsx";

function App() {
    return (
        <div>
            <Navbar/>
            <Main/>
            <About/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
