import{d,p as m,B as t,o as r,b as p,w as c,G as u}from"./framework.C2HaFJdx.js";const V=d({__name:"dynamicListSortable",setup(i){const a=m([{id:"111",name:"张三"}]);return(_,o)=>{const n=t("el-input"),l=t("s-dynamic-list");return r(),p(l,{dataSource:a.value,"onUpdate:dataSource":o[0]||(o[0]=e=>a.value=e),sortable:"",border:""},{itemRender:c(({record:e})=>[u(n,{modelValue:e.name,"onUpdate:modelValue":s=>e.name=s,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["dataSource"])}}});export{V as default};
