import{d as r,am as u,B as l,o as _,b as d,w as n,G as e}from"./framework.C2HaFJdx.js";const f=r({__name:"searchFormItems",setup(b){const s=u([{label:"文本框",name:"textInput",type:"text"},{label:"数字框",name:"numberInput",type:"number"},{label:"下拉框",name:"selectInput",type:"select",options:[{label:"选项一",value:"option1"},{label:"选项一",value:"option2"}]},{label:"日期框",name:"dateInput",type:"date"},{label:"时间框",name:"timeInput",type:"time"},{label:"插槽",name:"slotInput",type:"slot",scopedSlots:"dept"}]);return(i,h)=>{const t=l("el-option"),p=l("el-select"),m=l("s-search-form");return _(),d(m,{items:s,showColon:""},{dept:n(({item:a,values:o})=>[e(p,{modelValue:o[a.name],"onUpdate:modelValue":c=>o[a.name]=c,style:{width:"100%"},placeholder:"所属单位",clearable:""},{default:n(()=>[e(t,{label:"研发部",value:"研发部"}),e(t,{label:"市场部",value:"市场部"}),e(t,{label:"技术部",value:"技术部"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1},8,["items"])}}});export{f as default};
