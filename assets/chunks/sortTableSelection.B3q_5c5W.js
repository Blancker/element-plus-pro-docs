import{d as x,p as l,am as C,h as R,B as t,o as y,c as V,G as o,w as a,a as m,F as g}from"./framework.C2HaFJdx.js";const S=x({__name:"sortTableSelection",setup(h){const n=l("checkbox"),r=l([]),u=l([]),_=C([{prop:"name",label:"姓名"},{prop:"phone",label:"电话"},{prop:"date",label:"日期"}]),c=l([{id:"111",name:"张三",phone:"17611111111",date:"2024-07-01"},{id:"222",name:"李四",phone:"17622222222",date:"2024-07-02"},{id:"333",name:"王五",phone:"17633333333",date:"2024-07-03"}]),i=R(()=>({type:n.value,selectedRows:r.value,selectedRowKeys:u.value,onChange:s=>{r.value=s.selectedRows,u.value=s.selectedRowKeys}}));return(s,e)=>{const p=t("el-radio"),f=t("el-radio-group"),v=t("s-form-item"),b=t("s-form"),w=t("s-sort-table");return y(),V(g,null,[o(b,{labelWidth:"120px",showColon:""},{default:a(()=>[o(v,{label:"选择器类型"},{default:a(()=>[o(f,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=d=>n.value=d)},{default:a(()=>[o(p,{value:"checkbox"},{default:a(()=>e[2]||(e[2]=[m("多选")])),_:1}),o(p,{value:"radio"},{default:a(()=>e[3]||(e[3]=[m("单选")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(w,{columns:_,dataSource:c.value,"onUpdate:dataSource":e[1]||(e[1]=d=>c.value=d),selection:i.value,border:""},null,8,["columns","dataSource","selection"])],64)}}});export{S as default};
