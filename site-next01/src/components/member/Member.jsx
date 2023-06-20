import Image from "next/image";
import Link from "next/link";
import React from "react";

const memberText = [
    {
        img: "/assets/images/member/member02.jpg",
        title: "라파엘 나달",
        desc: "(Rafael Nadal)",
        a: "자세히보기",
    },
    {
        img: "/assets/images/member/member01.jpg",
        title: "로저 페더러",
        desc: "(Roger Federer)",
        a: "자세히보기",
    },
    {
        img: "/assets/images/member/member03.jpg",
        title: "노바크 조코비치",
        desc: "Novak Djokovic)",
        a: "자세히보기",
    },
];
function Memberintro({ img, title, desc, a }) {
    return (
        <div className="member">
            <figure className="member__header">
                <Image width={300} height={400} src={img} alt="이미지" />
            </figure>
            <div className="member__body">
                <h4 className="title">{title}</h4>
                <p className="desc">{desc}</p>
                <Link href="/" className="btn">
                    {a}
                </Link>
            </div>
        </div>
    );
}

function Member() {
    return (
        <section
            id="memberSection"
            className="member__wrap core3 section center"
        >
            <h3>세계적인 선수 소개</h3>
            <p>세계적으로 인정받는 테니스 선수</p>
            <div className="member__inner container">
                {memberText.map((text, index) => (
                    <Memberintro
                        key={index}
                        img={text.img}
                        title={text.title}
                        desc={text.desc}
                        a={text.a}
                    />
                ))}
            </div>
        </section>
    );
}
export default Member;
