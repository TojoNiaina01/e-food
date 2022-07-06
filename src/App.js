import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="select-none">
            <header>
                <Navbar/>
                <Landing/>
            </header>
            <Featured/>
            <Footer/>
        </div>
    );
}

export default App;
