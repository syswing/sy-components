import React, { CSSProperties } from 'react';
export interface YlTabProps {
    tabArrs: Array<string>;
    callback: Function;
    style?: CSSProperties;
    itemStyle?: CSSProperties;
    styleNo?: 1 | 2 | 3 | 4 | 5;
}
declare const YlTab: React.FC<YlTabProps>;
export default YlTab;
