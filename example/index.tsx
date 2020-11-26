import React from "react";
import ReactDOM from "react-dom";
// import { Table, Tab,Loadings,Buttons } from "../dist/main.js";
import { Table, Tab,Loadings,Buttons } from "../src/index";
import Card from './Card'
import Toys from '../src/Toys'
const warpper = { width: 300,marginBottom:20,marginLeft:100,float:'left',background:'#000' } as React.CSSProperties
// const alarm = [
//   {system:'FAS系统',device:'',deviceNum:'',description:'01号门禁报警',time:'',level:'一级'},
//   {system:'BAS系统',device:'',deviceNum:'',description:'信号名称',time:'',level:'二级'},
// ]
ReactDOM.render(
  <>
    <Card title="表格组件" styles={{
      ...warpper,
      // ...{display:'flex'}
    }}>
      <>
        <div>
        <Table
          source={[
            { name: "苹果", count: 123, sale: 555 },
            { name: "香蕉", count: 234, sale: 666 },
            { name: "菠萝", count: 123, sale: 666 },
            { name: "梨", count: 445, sale: 666, edit: "阿斯蒂芬" },
          ]}
          cols={[
            { dataIndex: "name", title: "名称" },
            { dataIndex: "count", title: "数量" },
            { dataIndex: "sale", title: "销售额", unit: "元" },
            {
              dataIndex: "edit",
              title: "编辑",
              render: (content: any) => {
                return <button>{content}</button>;
              },
            },
          ]}
          rank={"count"}
        />
        </div>
      </>
    </Card>
    <Card title="Tab切换" styles={warpper} contentStyles={{
      width:250
    }}>
      <>
        <Tab tabArrs={['测试1','测试2']} callback={(e:any) => console.log(e)} style={{background:'#fff',margin:'1rem 0'}}/>
        <Tab styleNo={4} tabArrs={['测试1','测试2']} callback={(e:any) => console.log(e)} style={{background:'#fff',margin:'1rem 0'}}/>
        <Tab styleNo={5} tabArrs={['测试1','测试2']} callback={(e:any) => console.log(e)} style={{background:'#fff',margin:'1rem 0'}}/>
        <Tab styleNo={3} tabArrs={['测试1','测试2']} callback={(e:any) => console.log(e)} style={{background:'#fff',margin:'1rem 0'}}/>
      </>
    </Card>
    <Card title="弹性加载中" styles={warpper}>
      <Loadings.Elastic primaryColor='#ff0081'/>
    </Card>
    <Card title="冒泡按钮" styles={warpper}>
      <Buttons.Bubbly  
        primaryColor='#000'
      >点击查看效果</Buttons.Bubbly>
    </Card>
    <Card title="更多按钮" styles={warpper}>
      <Buttons.More text="hover更多"/>
    </Card>
    <Card title="Among Us" styles={warpper}>
      <Toys.AmongUs.Connect/>
    </Card>
  </>,
  document.getElementById("root")
);
