import{d as s,am as r,p as l,B as p,o as d,b as m}from"./framework.C2HaFJdx.js";const _=s({__name:"sortTableBase",setup(c){const o=r([{prop:"name",label:"姓名"},{prop:"phone",label:"电话"},{prop:"date",label:"日期"}]),e=l([{id:"111",name:"张三",phone:"17611111111",date:"2024-07-01"},{id:"222",name:"李四",phone:"17622222222",date:"2024-07-02"},{id:"333",name:"王五",phone:"17633333333",date:"2024-07-03"}]);return(u,a)=>{const t=p("s-sort-table");return d(),m(t,{columns:o,dataSource:e.value,"onUpdate:dataSource":a[0]||(a[0]=n=>e.value=n),border:""},null,8,["columns","dataSource"])}}});export{_ as default};
