import { CSSProperties } from 'react';
export interface SlideTabProps {
    tabArrs: string[];
    style?: CSSProperties;
    callback?: Function;
    tabFontSize?: number;
    tabMargin?: number;
}
declare const _default: (props: SlideTabProps) => JSX.Element;
export default _default;
