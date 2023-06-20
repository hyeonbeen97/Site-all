import Image from "next/image";
import Link from "next/link";
import React from "react";
const movieItem = [
    {
        img: "/assets/images/movie/movies01-1.PNG",
        title: "코딩 애플",
        num: "dkelkt442",
    },
    {
        img: "/assets/images/movie/movies01.PNG",
        title: "코딩 애플",
        num: "dkelkt442",
    },
    {
        img: "/assets/images/movie/movies03-1.PNG",
        title: "코딩 애플",
        num: "dkelkt442",
    },
    {
        img: "/assets/images/movie/movies04.PNG",
        title: "코딩 애플",
        num: "dkelkt442",
    },
    {
        img: "/assets/images/movie/movies03.PNG",
        title: "코딩 애플",
        num: "dkelkt442",
    },
    {
        img: "/assets/images/movie/movies03-1.PNG",
        title: "코딩 애플",
        num: "dkelkt442",
    },
];

function MovieDesc({ img, num, title }) {
    return (
        <div>
            <Image width={150} height={300} src={img} alt="#" />
            <h3>{title}</h3>
            <p>{num}</p>
        </div>
    );
}

function MovieSection() {
    return (
        <section id="moviesSection" className="'movies__wrap core3 section'">
            <div className="movies__inner container">
                <div className="movies__text">
                    <h3>개발자 추천 영화</h3>
                    <p>
                        더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
                        <br />
                        구독과 좋아요! 부탁드립니다.
                    </p>
                    <Link href="/">자세히 보기</Link>
                </div>
                <div className="movies__item">
                    {movieItem.map((text, index) => (
                        <MovieDesc key={index} img={text.img} />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default MovieSection;
