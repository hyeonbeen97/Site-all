import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";

const MovieImg = ({ movie }) => {
    return (
        <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
            />
        </a>
    );
};

const MovieSlider = ({ movies }) => {
    return (
        <div className="movie__slider">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={30}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination]}
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index}>
                        <MovieImg movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieSlider;
