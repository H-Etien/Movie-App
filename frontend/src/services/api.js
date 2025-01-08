import { MOVIE_API_KEY } from "../../env.js";

const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const url_popularMovie = `${BASE_URL}/movie/popular?api_key=${MOVIE_API_KEY}&language=fr-BE&region=bE`;
    const response = await fetch(url_popularMovie, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2Q3NzJmZWI1NjQ5ODg3MTJkMTY5OTBiN2M3NTExNCIsIm5iZiI6MTczNjI2MTgzNC43ODIsInN1YiI6IjY3N2Q0MGNhNWM3MzhlMWMyMjY2OThhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rR24vxNaFP0WZrKuSjwTDurbhO2Hb8pGh3aPBnLba8E",
        },
    });
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const url_searchMovie = `${BASE_URL}/search/movie?api_key=${MOVIE_API_KEY}&query=${encodeURIComponent(
        query
    )}`;

    const response = await fetch(url_searchMovie, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2Q3NzJmZWI1NjQ5ODg3MTJkMTY5OTBiN2M3NTExNCIsIm5iZiI6MTczNjI2MTgzNC43ODIsInN1YiI6IjY3N2Q0MGNhNWM3MzhlMWMyMjY2OThhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rR24vxNaFP0WZrKuSjwTDurbhO2Hb8pGh3aPBnLba8E",
        },
    });

    const data = await response.json();
    return data.results;
};
