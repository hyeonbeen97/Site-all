import React, { useRef } from "react";

const UnsplashSearch = ({ onSearch }) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };
    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };
    const onClick = () => {
        handleSearch();
    };
    return (
        <div className="unsplash__search container">
            <h2 className="blind">검색하기</h2>
            <input
                ref={inputRef}
                onKeyPress={onKeyPress}
                type="search"
                placeholder="이미지 검색하기"
            />
            <button type="submit" onClick={onClick}>
                검색
            </button>
        </div>
    );
};

export default UnsplashSearch;
