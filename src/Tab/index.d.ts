import React, { CSSProperties } from 'react';
export interface YlTabProps {
    tabArrs: Array<string>;
    callback: Function;
    style?: CSSProperties;
    itemStyle?: CSSProperties;
}
declare const YlTab: React.FC<YlTabProps>;
export default YlTab;
