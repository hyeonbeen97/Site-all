import React from "react";

import Youtube from "@/components/youtube/Youtube";
import Unsplash from "@/components/unsplash/Unsplash";
import Movie from "@/components/movie/Movie";
import Slider from "@/components/Slider/Slider";
import Member from "@/components/member/Member";
import Intro from "@/components/intro/Intro";
import Portfolio from "@/components/portfolio/Portfolio";

const Home = () => {
    return (
        <>
            <Slider />
            <Intro />
            <Member />
            <Portfolio />
            <Youtube />
            <Unsplash />
            <Movie />
        </>
    );
};
export default Home;
