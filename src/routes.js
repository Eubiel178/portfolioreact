import { 
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

import AboutMe from "./components/Cards/AboutMe/AboutMe";
import Formation from "./components/Cards/Formation/Formation";
import Experience from "./components/Cards/Experience/Experience";
import Contact from "./components/Cards/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";

function routes() {
    return(
        <Router>

            <Routes>
                <Route path="/aboutme" element={<AboutMe/>}/>

                <Route path="/formation" element={<Formation/>}/>

                <Route path="/experience" element={<Experience/>}/>

                <Route path="/" element={<Contact/>}/>
            </Routes>

            <NavBar/>
        </Router>
    )
}

export default routes