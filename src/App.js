import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Featured from "./components/Featured";

function App() {
    return (
        <div className="select-none">
            <header>
                <Navbar/>
                <Landing/>
            </header>
            <Featured />
        </div>
    );
}

export default App;
