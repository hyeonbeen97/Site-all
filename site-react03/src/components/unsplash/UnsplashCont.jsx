import React from "react";

const UnslpashImg = ({ image }) => {
    return (
        <li>
            <a href={`https://unsplash.com/photos/${image.id}`}>
                <img src={image.urls.regular} alt={image.alt_description} />
            </a>
        </li>
    );
};

const UnsplashCont = ({ images }) => {
    return (
        <div className="unsplash__cont container">
            <ul>
                {images.map((image, index) => (
                    <UnslpashImg key={index} image={image} />
                ))}
            </ul>
        </div>
    );
};

export default UnsplashCont;
