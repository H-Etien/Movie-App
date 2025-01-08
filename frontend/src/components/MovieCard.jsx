import "../css/MoviesCard.css";
import { useMovieContext } from "../../contexts/MovieContext";

const MovieCard = ({ movie }) => {
    const { isFavorite, addToFavorites, removeFromFavorites } =
        useMovieContext();

    const favorite = isFavorite(movie.id);

    function onClickFavorite(e) {
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie.id);
        }
    }
    const release_date_year = movie.release_date.split("-")[0];
    const release_date_month = movie.release_date.split("-")[1];
    const release_date_day = movie.release_date.split("-")[2];
    const release_date_DMY =
        release_date_day + "/" + release_date_month + "/" + release_date_year;

    return (
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    {movie.poster_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                    ) : (
                        <img src="no-picture-movie.jpg" alt={movie.title} />
                    )}

                    <div className="movie-overlay">
                        <button
                            className={`favorite-btn ${
                                favorite ? "active" : ""
                            }`}
                            onClick={onClickFavorite}
                        >
                            ♥
                        </button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{release_date_DMY}</p>
                </div>
            </div>
        </>
    );
};

export default MovieCard;
