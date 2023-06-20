import Image from "next/image";
import Link from "next/link";
import React from "react";

const youtubeItem = [
    {
        img: "/assets/images/youtube/x1.PNG",
        title: "코딩 애플",
        num: "dkelkt442",
    },
    {
        img: "/assets/images/youtube/x2.PNG",
        title: "코딩 애플",
        num: "dkelkt442",
    },
    {
        img: "/assets/images/youtube/x3.PNG",
        title: "코딩 애플",
        num: "dkelkt442",
    },
    {
        img: "/assets/images/youtube/x4.PNG",
        title: "코딩 애플",
        num: "dkelkt442",
    },
];

function YoutubeDesc({ img, num, title }) {
    return (
        <div>
            <Image width={400} height={300} src={img} alt="" />
            <h3>{title}</h3>
            <p>{num}</p>
        </div>
    );
}

function YoutubeSection(props) {
    return (
        <section id="youtubeSection" className="youtube__wrap core3 section">
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>개발자 추천 유튜브</h3>
                    <p>
                        더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
                        <br />
                        구독과 좋아요! 부탁드립니다.
                    </p>
                    <Link href="/">자세히 보기</Link>
                </div>
                <div className="youtube__item">
                    {youtubeItem.map((text, index) => (
                        <YoutubeDesc
                            key={index}
                            img={text.img}
                            title={text.title}
                            num={text.titlnume}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default YoutubeSection;
