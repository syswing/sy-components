import { CSSProperties } from 'react';
interface SlideTabProps {
    tabArrs: string[];
    style?: CSSProperties;
    callback?: Function;
    tabFontSize?: number;
    tabMargin?: number;
}
declare const SlideTab: (props: SlideTabProps) => JSX.Element;
export default SlideTab;
