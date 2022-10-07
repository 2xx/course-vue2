"use strict";(self["webpackChunkedu_boss_fed"]=self["webpackChunkedu_boss_fed"]||[]).push([[516],{8102:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{model:e.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"菜单名称"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"菜单路径"}},[a("el-input",{model:{value:e.formData.href,callback:function(t){e.$set(e.formData,"href",t)},expression:"formData.href"}})],1),a("el-form-item",{attrs:{label:"上级菜单"}},[a("el-select",{attrs:{placeholder:"请选择父级菜单"},model:{value:e.formData.parentId,callback:function(t){e.$set(e.formData,"parentId",t)},expression:"formData.parentId"}},[a("el-option",{attrs:{label:"顶层菜单",value:-1}}),e._l(e.topMenus,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],2)],1),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1),a("el-form-item",{attrs:{label:"图标名称"}},[a("el-input",{model:{value:e.formData.icon,callback:function(t){e.$set(e.formData,"icon",t)},expression:"formData.icon"}})],1),a("el-form-item",{attrs:{label:"是否显示"}},[a("el-radio-group",{model:{value:e.formData.shown,callback:function(t){e.$set(e.formData,"shown",t)},expression:"formData.shown"}},[a("el-radio",{attrs:{label:!0}},[e._v("是")]),a("el-radio",{attrs:{label:!1}},[e._v("否")])],1)],1),a("el-form-item",{attrs:{label:"排序"}},[a("el-input",{model:{value:e.formData.orderNum,callback:function(t){e.$set(e.formData,"orderNum",t)},expression:"formData.orderNum"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即"+e._s(e.msg))]),a("el-button",[e._v("取消")])],1)],1)},o=[],n=a(3858),s={name:"MenuCreateOrEdit",data(){return{isCreate:!0,formData:{id:void 0,parentId:-1,name:"",href:"",icon:"",orderNum:0,description:"",shown:!0},topMenus:[]}},created(){this.isCreate=!this.$route.params.id,this.loadEditMenuInfo()},computed:{msg(){return this.isCreate?"添加":"更新"}},methods:{onSubmit(){(0,n.lj)(this.formData).then((e=>{e.data.data?(this.$message.success(`${this.msg}菜单成功!`),this.$router.push({name:"menus"})):this.$message.error(`${this.msg}菜单失败`)}))},loadEditMenuInfo(){const{id:e=-1}=this.$route.params;(0,n.kJ)(e).then((e=>{if("000000"===e.data.code){const{menuInfo:t,parentMenuList:a}=e.data.data;Object.assign(this.formData,t),this.topMenus=a}else this.$message.error("获取编辑菜单信息失败")}))}}},l=s,i=a(1001),m=(0,i.Z)(l,r,o,!1,null,"7189d434",null),u=m.exports},3858:function(e,t,a){a.d(t,{RD:function(){return s},kJ:function(){return l},lj:function(){return n},xz:function(){return o}});var r=a(5972);const o=()=>(0,r.Z)({method:"GET",url:"/boss/menu/getAll"}),n=e=>(0,r.Z)({method:"POST",url:"/boss/menu/saveOrUpdate",data:e}),s=(e=0)=>(0,r.Z)({method:"DELETE",url:`/boss/menu/${e}`}),l=e=>(0,r.Z)({method:"GET",url:"/boss/menu/getEditMenuInfo",params:{id:e}})}}]);