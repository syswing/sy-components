import React from "react";
import ReactDOM from "react-dom";
// import { Table, Tab,Loadings,Buttons } from "../dist/main.js";
import { Table, Tab,Loadings,Buttons } from "../src/index";
import Card from './Card'
import Toys from '../src/Toys'
const warpper = { width: 300,marginBottom:20,marginLeft:100,float:'left',background:'#000' } as React.CSSProperties
const alarm = [
  {system:'FAS系统',device:'',deviceNum:'',description:'01号门禁报警',time:'',level:'一级'},
  {system:'BAS系统',device:'',deviceNum:'',description:'信号名称',time:'',level:'二级'},
]
ReactDOM.render(
  <>
    <Card title="表格组件" styles={{
      ...warpper,
      // ...{display:'flex'}
    }}>
      <>
        <div>
        <Table
          styles={{
            width:'27.23vw',
            fontSize:'1.527vh'
          }}
          LineHeight={66}
          source={alarm}
          cols={[
            {dataIndex:'system',title:'所属系统'},
            {dataIndex:'device',title:'设备名称'},
            {dataIndex:'deviceNum',title:'设备编号'},
            {dataIndex:'description',title:'描述'},
            {dataIndex:'time',title:'时间'},
            {dataIndex:'level',title:'级别'}
          ]}
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
      <Loadings.Elastic/>
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
