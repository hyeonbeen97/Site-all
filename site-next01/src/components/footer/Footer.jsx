import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";

const footerMenu = [
    {
        title: "사이트",
        links: [
            { label: "웹표준 사이트", url: "/" },
            { label: "웹표준 사이트", url: "/" },
            { label: "웹표준 사이트", url: "/" },
            { label: "웹표준 사이트", url: "/" },
        ],
    },
    {
        title: "유형",
        links: [
            { label: "이미지 유형", url: "/" },
            { label: "카드 유형", url: "/" },
            { label: "이미지/텍스트 유형", url: "/" },
            { label: "배너 유형", url: "/" },
            { label: "텍스트 유형", url: "/" },
            { label: "푸터 유형", url: "/" },
        ],
    },
    {
        title: "스크립트",
        links: [
            { label: "검색 이펙트", url: "/" },
            { label: "퀴즈 이팩트", url: "/" },
            { label: "마우스 이펙트", url: "/" },
            { label: "슬라이드 이펙트", url: "/" },
            { label: "패럴랙스 이펙트", url: "/" },
            { label: "게임 이펙트", url: "/" },
        ],
    },
    {
        title: "레퍼런스",
        links: [
            { label: "CSS", url: "/" },
            { label: "FONTS", url: "/" },
            { label: "HTML", url: "/" },
            { label: "JAVASCRIPT", url: "/" },
            { label: "REACT", url: "/" },
        ],
    },
];

const Footer = () => {
    return (
        <footer
            id="footer"
            role="contentinfo"
            className="footer__wrap score5 bg-blue mt50 "
        >
            <div className="footer__inner score5">
                <div className="footer__text">
                    <h5>KIMHYEONBEEN</h5>
                    <p>
                        질문 환영 : 환영: <br />
                        궁금한 사항은 메일로 연락주세요!
                        <Link href="mail to:esansi@naver.com">
                            esansi@naver.com
                        </Link>
                    </p>
                    <ul className="sns">
                        <li>
                            <Link href="/">
                                <span className="ir">페이스북</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="ir">인스타</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="ir">유투브</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="ir">깃</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__menu">
                    {footerMenu.map((menu, index) => (
                        <div key={index}>
                            <h4>{menu.title}</h4>
                            <ul>
                                {menu.links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.url}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="footer__right">
                    Copyright 2023. All Rights Reserved. - Designed by
                    KIMHYEONBEEN
                </div>
            </div>
        </footer>
    );
};

export default Footer;
