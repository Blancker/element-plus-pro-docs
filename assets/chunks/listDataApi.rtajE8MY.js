import{d as p,p as d,B as s,o as u,c as _,G as r,w as n,a as f,j as y,t as x,F as k}from"./framework.C2HaFJdx.js";const w=p({__name:"listDataApi",setup(D){const o=d(),l=()=>{const t=new Array(5).fill(0).map((e,a)=>({id:`key${a+1}`,text:`列表项${a+1}`}));return new Promise(e=>{setTimeout(()=>{e({data:t})},1e3)})},i=()=>{var t;(t=o.value)==null||t.reload(!0)};return(t,e)=>{const a=s("el-button"),c=s("s-list");return u(),_(k,null,[r(a,{style:{"margin-bottom":".5rem"},type:"primary",onClick:i},{default:n(()=>e[0]||(e[0]=[f("刷新数据")])),_:1}),r(c,{ref_key:"listRef",ref:o,dataSource:l,autoload:"",hasSerial:"",border:""},{itemRender:n(({record:m})=>[y("div",null,x(m.text),1)]),_:1},512)],64)}}});export{w as default};
