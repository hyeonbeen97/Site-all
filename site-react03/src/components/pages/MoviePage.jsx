import React, { useEffect, useState } from "react";

import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import MovieSearch from "../movie/MovieSearch";
import MovieSlider from "../movie/MovieSlider";
import MovieTag from "../movie/MovieTag";
import MovieCont from "../movie/MovieCont";

const MoviePage = () => {
    const [movies, setMovies] = useState([]);

    const search = async (query) => {
        await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=f22d90235c82917f921235081ed9bb8e&query=${query}`
        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=f22d90235c82917f921235081ed9bb8e"
        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <Contents>
                <ContTitle title="Movie" />
                <MovieSlider movies={movies} />
                <MovieSearch onSearch={search} />
                <MovieTag />
                <MovieCont movies={movies} />
            </Contents>
        </>
    );
};

export default MoviePage;
