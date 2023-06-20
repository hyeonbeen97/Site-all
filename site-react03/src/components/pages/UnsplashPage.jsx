import Contents from "../layout/Contents";

import React, { useEffect, useState } from "react";

import ContTitle from "../layout/ContTitle";
import UnsplashSearch from "../unsplash/UnsplashSearch";
import UnsplashSlider from "../unsplash/UnsplashSlider";
import UnsplashTag from "../unsplash/UnsplashTag";
import UnsplashCont from "../unsplash/UnsplashCont";

const UnsplashPage = () => {
    const [images, setImages] = useState([]);

    const search = async (query) => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        await fetch(
            `https://api.unsplash.com/search/photos?client_id=q4jTUmJ2a6QDkRQyd2bInVsO-8Qz82CM8FWqW8l-jMk&per_page=30&query=${query}`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setImages(result.results))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            "https://api.unsplash.com/photos?client_id=q4jTUmJ2a6QDkRQyd2bInVsO-8Qz82CM8FWqW8l-jMk&per_page=30",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setImages(result))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <Contents>
                <ContTitle title="Unsplash" />
                <UnsplashSlider />
                <UnsplashSearch onSearch={search} />
                <UnsplashTag />
                <UnsplashCont images={images} />
            </Contents>
        </>
    );
};

export default UnsplashPage;
