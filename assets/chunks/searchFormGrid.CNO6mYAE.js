import{d as v,p as m,am as y,B as o,o as u,c as d,G as l,w as a,F as _,C as h}from"./framework.C2HaFJdx.js";const F=v({__name:"searchFormGrid",setup(C){const n=m(3),s=m(8),c=y([{label:"字段1",name:"field1",type:"text"},{label:"字段2",name:"field2",type:"text"},{label:"字段3",name:"field3",type:"text"},{label:"字段4",name:"field4",type:"text"},{label:"字段5",name:"field5",type:"text"},{label:"字段6",name:"field6",type:"text"}]);return(V,t)=>{const p=o("el-radio"),i=o("el-radio-group"),r=o("s-form-item"),f=o("el-slider"),b=o("s-form"),x=o("s-search-form");return u(),d(_,null,[l(b,{labelWidth:120,column:2,showColon:""},{default:a(()=>[l(r,{label:"表单项列数"},{default:a(()=>[l(i,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e)},{default:a(()=>[(u(),d(_,null,h([2,3,4,6],e=>l(p,{key:e,label:e,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),l(r,{label:"表单项间距"},{default:a(()=>[l(f,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),style:{margin:"0 10px"},min:0,max:50},null,8,["modelValue"])]),_:1})]),_:1}),l(x,{items:c,column:n.value,gutter:s.value,showColon:""},null,8,["items","column","gutter"])],64)}}});export{F as default};
