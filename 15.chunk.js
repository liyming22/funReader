(window.webpackJsonp=window.webpackJsonp||[]).push([[15,25],{100:function(n,t,a){"use strict";a.r(t);var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ul",{directives:[{name:"show",rawName:"v-show",value:n.books.length,expression:"books.length"}],attrs:{id:"book-list"}},n._l(n.books,function(t){return a("router-link",{key:t._id,attrs:{to:{name:"bookinfo",params:{id:t._id,book:t}},tag:"li"}},[a("div",{staticClass:"book-cover"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.staticPath+t.cover,expression:"staticPath + book.cover"}]})]),n._v(" "),a("div",{staticClass:"book-info"},[a("h3",{staticClass:"book-title"},[n._v(n._s(t.title))]),n._v(" "),a("h4",{staticClass:"book-author"},[n._v("作者："+n._s(t.author))]),n._v(" "),a("p",{staticClass:"book-des",staticStyle:{"-webkit-box-orient":"vertical"}},[n._v(n._s(t.shortIntro))]),n._v(" "),t.minorCate?a("span",{staticClass:"book-cate"},[n._v(n._s(t.minorCate))]):n._e()])])}),1)};e._withStripped=!0;var o={name:"List",props:{books:Array},data:function(){return{staticPath:"http://statics.zhuishushenqi.com",listData:this.books}}},i=(a(131),a(11)),c=Object(i.a)(o,e,[],!1,null,"771368fc",null);c.options.__file="src/components/common/List.vue";t.default=c.exports},121:function(n,t,a){"use strict";a.r(t);var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",[a("van-nav-bar",{attrs:{fixed:!0,title:"排行榜","left-arrow":""},on:{"click-left":n.onClickLeft}}),n._v(" "),a("div",{staticClass:"wrapper"},[a("van-tabs",{staticClass:"sexual-card",attrs:{type:"card"},on:{click:n.changeSexual}},n._l(n.rankingTitle,function(t,e){return a("van-tab",{key:e,attrs:{title:t.name}},[a("van-tabs",{attrs:{id:"ranking-tab"},on:{click:n.changeCate}},n._l(n.cateSet[t.id],function(t,e){return a("van-tab",{key:e},[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[n._v("\n                "+n._s(t.title)+"\n              ")]),n._v(" "),a("List",{directives:[{name:"show",rawName:"v-show",value:n.bookList,expression:"bookList"}],attrs:{books:n.bookList}})],1)}),1)],1)}),1)],1)],1)};e._withStripped=!0;var o=a(15),i=a.n(o),c=a(19),r=a.n(c),s=a(125),l=a.n(s),d=a(14),f={name:"Rank",components:{List:a(100).default},data:function(){return{rankingTitle:[{name:"男生频道",id:"male",index:0},{name:"女生频道",id:"female",index:0}],cateSet:{},bookSet:[],queryMap:{},currentTab:"male",cateList:[],bookList:[]}},methods:l()({},Object(d.b)(["fetchRankCategory","fetchRank"]),{getList:function(){var n=r()(i.a.mark(function n(t){var a,e,o;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.fetchRank(t);case 2:a=n.sent,e=a.books,this.bookList=e,this.queryMap.set(t,this.bookSet.length),o={_id:t,books:this.bookList},this.bookSet.push(o);case 8:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}(),initList:function(){this.getList(this.cateSet[this.currentTab][0]._id)},changeSexual:function(n){console.log(n),this.currentTab=this.rankingTitle[n].id,this.initList()},changeCate:function(n){console.log(n);var t=this.cateSet[this.currentTab][n]._id;if(this.queryMap.has(t)){var a=this.queryMap.get(t);this.bookList=this.bookSet[a].books}else this.getList(t)},onClickLeft:function(){this.$router.go(-1)}}),created:function(){var n=r()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(this.queryMap=new Map,this.cateSet=this.$store.state.cateSet,!Object.keys(this.cateSet).length){n.next=6;break}n.t0=this.cateSet,n.next=9;break;case 6:return n.next=8,this.fetchRankCategory();case 8:n.t0=n.sent;case 9:this.cateSet=n.t0,console.log(this.cateSet),this.initList();case 12:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},b=(a(195),a(11)),h=Object(b.a)(f,e,[],!1,null,"5588b8cf",null);h.options.__file="src/components/Rank/Rank.vue";t.default=h.exports},125:function(n,t,a){var e=a(3);n.exports=function(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),o.forEach(function(t){e(n,t,a[t])})}return n}},128:function(n,t,a){var e=a(132);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);(0,a(5).default)("cc266184",e,!1,{})},131:function(n,t,a){"use strict";var e=a(128);a.n(e).a},132:function(n,t,a){(n.exports=a(4)(!1)).push([n.i,".fl[data-v-771368fc] {\n  display: flex;\n}\n.clearfix[data-v-771368fc]::after {\n  display: block;\n  width: 0;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n  content: '.';\n}\n.wrapper[data-v-771368fc] {\n  padding: 0 .5em;\n}\n.icon[data-v-771368fc] {\n  width: 1em;\n  height: 1em;\n  vertical-align: -.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n.second-title[data-v-771368fc] {\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  line-height: 50px;\n}\n.second-title span[data-v-771368fc]:nth-child(1) {\n    font: 400 18px/50px 'Microsoft Yahei';\n    color: #5b5c5e;\n}\n.second-title span[data-v-771368fc]:nth-child(2) {\n    color: #9c9ba3;\n}\n.default[data-v-771368fc] {\n  background: #f7f7f7;\n}\n.night[data-v-771368fc] {\n  background: #000;\n  color: #646464;\n}\n.creamy-white[data-v-771368fc] {\n  background: #f8f3dd;\n}\n.bean-green[data-v-771368fc] {\n  background: #c2dfcd;\n}\n.light-pink[data-v-771368fc] {\n  background: #f6dad9;\n}\n.dark[data-v-771368fc] {\n  background: #262a2d;\n}\n.night[data-v-771368fc] {\n  color: rgba(255, 255, 255, 0.5);\n  background: #1a1a1a;\n}\n.tag[data-v-771368fc] {\n  padding: .2em .7em;\n  color: #fff;\n  border-radius: .1em;\n  margin-bottom: .6em;\n  font-size: 1.4em;\n  margin-left: .4em;\n}\n.tag[data-v-771368fc]:nth-child(1n) {\n  background: burlywood;\n}\n.tag[data-v-771368fc]:nth-child(2n) {\n  background: cadetblue;\n}\n.tag[data-v-771368fc]:nth-child(3n) {\n  background: coral;\n}\n.tag[data-v-771368fc]:nth-child(4n) {\n  background: cornflowerblue;\n}\n#book-list li[data-v-771368fc] {\n  position: relative;\n  display: flex;\n  height: 120px;\n  margin-top: 1em;\n}\n#book-list img[data-v-771368fc] {\n  width: 90px;\n  height: 120px;\n}\n#book-list .book-info[data-v-771368fc] {\n  position: relative;\n  text-align: left;\n  padding-left: .8em;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n#book-list .book-info .book-title[data-v-771368fc] {\n    font: bolder 18px/30px 'SimHei', 'Microsoft Yahei';\n}\n#book-list .book-info .book-author[data-v-771368fc] {\n    font: 300 14px/26px 'Microsoft Yahei';\n    color: #f60;\n    margin: 0;\n}\n#book-list .book-info .book-des[data-v-771368fc] {\n    display: -webkit-box;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    -webkit-line-clamp: 3;\n    font: lighter 12px/18px 'SimSun', 'NSimSun', 'FangSong', 'Microsoft Yahei';\n    color: #999;\n}\n#book-list .book-info .book-cate[data-v-771368fc] {\n    display: block;\n    position: absolute;\n    right: 0;\n    top: 28px;\n    padding: 4px;\n    text-align: center;\n    font: 600 12px 'Microsoft Yahei';\n    border: 1px solid #ccc;\n    border-radius: 5px;\n}\n",""])},168:function(n,t,a){var e=a(196);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);(0,a(5).default)("31fddd55",e,!1,{})},195:function(n,t,a){"use strict";var e=a(168);a.n(e).a},196:function(n,t,a){(n.exports=a(4)(!1)).push([n.i,".fl[data-v-5588b8cf] {\n  display: flex;\n}\n.clearfix[data-v-5588b8cf]::after {\n  display: block;\n  width: 0;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n  content: '.';\n}\n.wrapper[data-v-5588b8cf] {\n  padding: 0 .5em;\n}\n.icon[data-v-5588b8cf] {\n  width: 1em;\n  height: 1em;\n  vertical-align: -.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n.second-title[data-v-5588b8cf] {\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  line-height: 50px;\n}\n.second-title span[data-v-5588b8cf]:nth-child(1) {\n    font: 400 18px/50px 'Microsoft Yahei';\n    color: #5b5c5e;\n}\n.second-title span[data-v-5588b8cf]:nth-child(2) {\n    color: #9c9ba3;\n}\n.default[data-v-5588b8cf] {\n  background: #f7f7f7;\n}\n.night[data-v-5588b8cf] {\n  background: #000;\n  color: #646464;\n}\n.creamy-white[data-v-5588b8cf] {\n  background: #f8f3dd;\n}\n.bean-green[data-v-5588b8cf] {\n  background: #c2dfcd;\n}\n.light-pink[data-v-5588b8cf] {\n  background: #f6dad9;\n}\n.dark[data-v-5588b8cf] {\n  background: #262a2d;\n}\n.night[data-v-5588b8cf] {\n  color: rgba(255, 255, 255, 0.5);\n  background: #1a1a1a;\n}\n.tag[data-v-5588b8cf] {\n  padding: .2em .7em;\n  color: #fff;\n  border-radius: .1em;\n  margin-bottom: .6em;\n  font-size: 1.4em;\n  margin-left: .4em;\n}\n.tag[data-v-5588b8cf]:nth-child(1n) {\n  background: burlywood;\n}\n.tag[data-v-5588b8cf]:nth-child(2n) {\n  background: cadetblue;\n}\n.tag[data-v-5588b8cf]:nth-child(3n) {\n  background: coral;\n}\n.tag[data-v-5588b8cf]:nth-child(4n) {\n  background: cornflowerblue;\n}\n.sexual-card[data-v-5588b8cf] {\n  margin-top: 46px;\n}\n",""])}}]);