import React from 'react';
import {Link} from 'react-router-dom'


const memberText = [
    {
        img: './assets/images/member/member02.jpg',
        title: '라파엘 나달',
        desc: '(Rafael Nadal)',
        a: '자세히보기',
    },
    {
        img: './assets/images/member/member01.jpg',
        title: '로저 페더러',
        desc: '(Roger Federer)',
        a: '자세히보기',
    },
    {
        img: './assets/images/member/member03.jpg',
        title: '노바크 조코비치',
        desc: 'Novak Djokovic)',
        a: '자세히보기',
    },
];
function Memberintro({ img, title, desc, a }) {
    return (
        <div className="member">
            <figure className="member__header">
                <img src={img} alt="색을 고르는 법" />
            </figure>
            <div className="member__body">
                <h4 className="title">{title}</h4>
                <p className="desc">{desc}</p>
                <Link to="/" className="btn">
                    {a}
                </Link>
            </div>
        </div>
    );
}

function Member(props) {
    return (
        <section id="memberSection" className={props.attr}>
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
