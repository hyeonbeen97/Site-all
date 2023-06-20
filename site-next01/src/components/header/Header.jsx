import Link from "next/link";
import React from "react";
import styles from "./header.module.css";

const links = [
    {
        id: 1,
        title: "소개",
        url: "/intro",
    },
    {
        id: 2,
        title: "멤버",
        url: "/member",
    },
    {
        id: 3,
        title: "포트폴리오",
        url: "/port",
    },
    {
        id: 4,
        title: "유튜브",
        url: "/youtube",
    },
    {
        id: 5,
        title: "이미지",
        url: "/unsplash",
    },
    {
        id: 6,
        title: "영화",
        url: "/movie",
    },
];

function Linkdesc({ id, title, url }) {
    return (
        <li key={id}>
            <Link href={url}>{title}</Link>
        </li>
    );
}

const Header = () => {
    return (
        <header
            id="header"
            className="header__wrap score5 bg-blue"
            role="heading"
            aria-level="1"
        >
            <div className={styles.header__inner}>
                <div className={styles.header__logo}>
                    <Link href="/">
                        HB<em>site</em>
                    </Link>
                </div>
                <div className={styles.header__nav} role="navigation">
                    <ul>
                        {links.map((link, index) => (
                            <Linkdesc
                                key={index}
                                id={link.id}
                                title={link.title}
                                url={link.url}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
