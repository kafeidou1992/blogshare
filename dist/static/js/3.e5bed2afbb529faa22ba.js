webpackJsonp([3],{Ql0O:function(t,e){},WJpN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("irTq"),a={data:function(){return{title:"",content:"",description:"",atIndex:!1,blogid:null}},computed:{disable:function(){return!(this.title.length<=100&&this.description.length<=500&&this.content.length<=1e4)}},created:function(){this.blogid=this.$route.params.blogid,this.getData()},methods:{getData:function(){var t=this;i.a.detail(this.blogid).then(function(e){console.log(e),t.blogid=e.data.id,t.title=e.data.title,t.content=e.data.content,t.description=e.data.description,t.atIndex=e.data.atIndex})},onsave:function(){var t=this;this.disable||i.a.edit({blogid:this.blogid,title:this.title,content:this.content,description:this.description,atIndex:!1===this.atIndex?"false":this.atIndex}).then(function(e){t.$message.success(e.msg),t.$router.push({name:"detail",params:{blogid:e.data.id}})}).catch(function(t){console.log(t)})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"edit"}},[n("h2",[t._v("编辑文章")]),t._v(" "),n("div",{staticClass:"title"},[n("h3",[t._v("文章标题")]),t._v(" "),n("el-input",{attrs:{type:"textarea",rows:"1",placeholder:"请输入标题"},model:{value:t.title,callback:function(e){t.title="string"==typeof e?e.trim():e},expression:"title"}}),t._v(" "),n("div",{staticClass:"tip"},[n("span",{class:{err:t.title.length>100}},[t._v(t._s(t.title.length)+"/100")])])],1),t._v(" "),n("div",{staticClass:"description"},[n("h3",[t._v("内容简介")]),t._v(" "),n("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"请输入简介"},model:{value:t.description,callback:function(e){t.description="string"==typeof e?e.trim():e},expression:"description"}}),t._v(" "),n("div",{staticClass:"tip"},[n("span",{class:{err:t.description.length>500}},[t._v(t._s(t.description.length)+"/500")])])],1),t._v(" "),n("div",{staticClass:"content"},[n("h3",[t._v("文章内容")]),t._v(" "),n("el-input",{attrs:{type:"textarea",rows:"20",placeholder:"请输入内容,支持markdown语法"},model:{value:t.content,callback:function(e){t.content="string"==typeof e?e.trim():e},expression:"content"}}),t._v(" "),n("div",{staticClass:"tip"},[n("span",{class:{err:t.content.length>1e4}},[t._v(t._s(t.content.length)+"/10000")])])],1),t._v(" "),n("div",{staticClass:"atIndex"},[n("label",{attrs:{for:"atIndex"}},[t._v("是否展示到首页")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.atIndex,expression:"atIndex"}],attrs:{id:"atIndex",type:"checkbox"},domProps:{checked:Array.isArray(t.atIndex)?t._i(t.atIndex,null)>-1:t.atIndex},on:{change:function(e){var n=t.atIndex,i=e.target,a=!!i.checked;if(Array.isArray(n)){var s=t._i(n,null);i.checked?s<0&&(t.atIndex=n.concat([null])):s>-1&&(t.atIndex=n.slice(0,s).concat(n.slice(s+1)))}else t.atIndex=a}}})]),t._v(" "),n("el-button",{class:{disable:t.disable},on:{click:t.onsave}},[t._v("保存")])],1)},staticRenderFns:[]};var l=n("VU/8")(a,s,!1,function(t){n("Ql0O")},"data-v-a4735680",null);e.default=l.exports}});
//# sourceMappingURL=3.e5bed2afbb529faa22ba.js.map