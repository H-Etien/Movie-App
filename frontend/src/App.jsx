import "./App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Home />
        </>
    );
}

function Text({ display }) {
    return (
        <div>
            <p>{display}</p>
        </div>
    );
}

export default App;
