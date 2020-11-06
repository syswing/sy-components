import React from "react";
declare const Card: ({ styles, children, title, contentStyles }: {
    styles: {
        float?: string;
        display?: string;
    };
    children: React.ReactChild;
    title?: string | undefined;
    contentStyles?: React.CSSProperties | undefined;
}) => JSX.Element;
export default Card;
