import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");

        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movieId) => {
        setFavorites((prev) => {
            return [...prev, movieId];
        });
    };

    const removeFromFavorites = (movieId) => {
        setFavorites((prev) => {
            return prev.filter((movie_id) => movie_id !== movieId);
        });
    };

    const isFavorite = (movieId) => {
        return favorites.some((movie_id) => movie_id === movieId);
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    };

    return (
        <>
            <MovieContext.Provider value={value}>
                {children}
            </MovieContext.Provider>
        </>
    );
};
