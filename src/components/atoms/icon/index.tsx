import React from "react";

interface IconProps {
    imgSrc: string;
}

const Icon = ({imgSrc}: IconProps) => {
    return (
        <img src={imgSrc} alt="icon" />
    )
}

export default Icon;