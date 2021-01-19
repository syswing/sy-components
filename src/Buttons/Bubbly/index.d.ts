import React from "react";
export interface BubblyProps {
    children: React.ReactChild;
    styles?: React.CSSProperties | undefined;
    primaryColor?: string | undefined;
}
declare const Bubbly: ({ children, styles, primaryColor }: {
    children: React.ReactChild;
    styles?: React.CSSProperties | undefined;
    primaryColor?: string | undefined;
}) => JSX.Element;
export default Bubbly;
