import MovieCard from "../components/MovieCard";
import { useState } from "react";

const Home = () => {
    const [searchQuery, setsearchQuery] = useState("");

    const movies = [
        { id: 1, title: "first cine", release_date: 2024 },
        { id: 2, title: "second cine", release_date: 2008 },
        { id: 3, title: "3 cine", release_date: 2009 },
    ];

    const handleSearch = () => {};

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

                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
