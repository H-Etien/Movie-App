import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

const Home = () => {
    const [searchQuery, setsearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [reloadPopularMovie, setReloadPopularMovie] = useState(true);

    useEffect(() => {
        if (!reloadPopularMovie) return;

        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
                setError(false);
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, [reloadPopularMovie]);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            setReloadPopularMovie(true);
            return;
        }
        setReloadPopularMovie(false);
        if (loading) return;

        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(false);
        } catch {
            setError("Film introuvable");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="Search for movies ..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setsearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>

                {error && (
                    <div className="error-message">Echec de téléchargement</div>
                )}
                {loading ? (
                    <div className="loading">En attente ...</div>
                ) : (
                    <div className="movies-grid">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
