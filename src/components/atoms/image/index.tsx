import React from "react";

interface ImageProps {
    imgSrc: string;
}

const Image = ({imgSrc}: ImageProps) => {
    return (
        <img src={imgSrc} alt="img" />
    )
}

export default Image;