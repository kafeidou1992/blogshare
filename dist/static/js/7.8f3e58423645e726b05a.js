webpackJsonp([7],{"5JZZ":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("irTq"),r={data:function(){return{blogs:[],total:0,page:1}},computed:{user:function(){return this.$store.getters.user}},watch:{$route:function(t,a){this.getData(parseInt(this.$route.query.page)||1)}},created:function(){this.getData(parseInt(this.$route.query.page)||1)},methods:{getData:function(t){var a=this;s.a.getlist({page:t,atIndex:!0}).then(function(t){console.log(t),a.blogs=t.data,a.total=t.total,a.page=t.page})},pageChange:function(t){this.$router.push({path:"/",query:{page:t}})}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"index"}},[e("section",t._l(t.blogs,function(a){return e("div",{key:a.id,staticClass:"items"},[t.user&&t.user.id===a.user.id?[e("router-link",{attrs:{to:"/my"}},[e("div",{staticClass:"author"},[e("img",{staticClass:"avatar",attrs:{src:a.user.avatar,alt:a.user.username}}),t._v(" "),e("div",{staticClass:"name"},[t._v(t._s(a.user.username))])])])]:[e("router-link",{attrs:{to:{name:"user",params:{userid:a.user.id}}}},[e("div",{staticClass:"author"},[e("img",{staticClass:"avatar",attrs:{src:a.user.avatar,alt:a.user.username}}),t._v(" "),e("div",{staticClass:"name"},[t._v(t._s(a.user.username))])])])],t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title clearfix"},[e("router-link",{attrs:{to:{name:"detail",params:{blogid:a.id}}}},[e("h3",[t._v(t._s(a.title))])]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t._f("fixtime")(a.updatedAt)))])],1),t._v(" "),e("router-link",{attrs:{to:{name:"detail",params:{blogid:a.id}}}},[e("p",[t._v(t._s(a.description))])])],1)],2)})),t._v(" "),e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total,"current-page":t.page},on:{"current-change":t.pageChange}})],1)])},staticRenderFns:[]};var n=e("VU/8")(r,i,!1,function(t){e("hPCX")},"data-v-1bfa4049",null);a.default=n.exports},hPCX:function(t,a){}});
//# sourceMappingURL=7.8f3e58423645e726b05a.js.map