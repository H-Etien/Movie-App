import { useMovieContext } from "../../contexts/MovieContext";

import "../css/Favorites.css";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <>
                <div className="favorites-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="favorites-empty">
                    <h2>Pas de film favoris</h2>
                    <p>Ajoutez vos films préférés</p>
                </div>
            </>
        );
    }
};

export default Favorites;
