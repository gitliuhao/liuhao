(function(z){
var mI=function(){z.al.call(this,{use:["autoload","dataPagingSource"]})};var nI=function(){z.Q.call(this);this.Fh="roundtable";this.Ok=z.oh};
var oI=function(){var a=(0,window.$)(".roundtable-profile"),b=(0,window.$)(".share",a),c=b.data("token");if(b.length){var d=window.location.protocol+"//"+window.location.host+"/roundtable/"+c;z.mD(b.get(0),"roundtable",c,d).g("trackRequested",function(a){a.label="roundtable";z.zi(a)})}(0,window.$)(".follow",a).click(z.Oq(function(){var b=this;(0,z.KG)(b,"roundtable",function(c){(0,window.$)(".label",b).text(c?"取消关注":"关注");var d=(0,window.$)(".followers .count",a);c=Number(d.data("count"))+(c?1:-1);
d.length&&(c=Math.max(c,0),d.text(c).data("count",c))},["button-success","button-cancel"])}))};var pI=function(a){this.bv=a;a.activityUrl="";qI(this)};
var qI=function(a){function b(a,b){var c;c=c||"slug";return{source:a,filter:function(a){return a.filter(function(a){return b.every(function(b){return b[c]!==a[c]})})},select:function(a){b.push(a);return""}}}a=a.bv;var c=a.roundtable;Object.assign(a,{topicsSuggestOpitons:b("/r/ac/topics",c.topics),organizationsSuggestOpitons:b("/r/ac/topics",c.organizations),presentersSuggestOpitons:b("/r/ac/users",c.presenters),guestsSuggestOpitons:b("/r/ac/users",c.guests)})};
var rI=function(a,b){var c={xe:5,className:"ui-suggest",Kh:"row",$F:200};z.Mb(c,b||{});var d=c.render;d&&(c.ld=z.r,c.render=function(a,b){!1!==d.apply(this,arguments)&&(a.$e=Array.from(z.So(a.Kh,b)),a.$e.forEach(function(a){a.id=z.Yg(z.Xg.ba())}))});z.$s.call(this,a,c);var f=this.M;f.className=c.className;f.Kh=c.Kh;f.zp=c.$F};
var sI=function(a,b){return function(c,d,f){(0,window.$)(d).datetimepicker({autoclose:!0,forceParse:!1,format:"yyyy 年 m 月 d 日 hh:ii",startDate:new Date,language:"zh-CN"});b(function(){(0,window.$)(d).datetimepicker("update",new Date(a(f.ngModel)(c)))})}};
var tI=function(){return{scope:{id:"@id",avatar:"\x3davatar"},link:function(a,b){var c=new z.tz(4,a.id,"xl");c.w(b);c.addEventListener("success",function(){a.$apply(function(){var b=c.getData(),f=a.avatar,g=b.url.split(".").slice(-1)[0];f.id=b.id;f.url=b.url;f.template=f.template.replace(/.\w+$/,"."+g)})})}}};
var uI=function(a){return{scope:{options:"\x3dsuggestOptions"},link:function(b,c,d){var f,g;d={EW:'\x3cdiv class\x3d"row"\x3e\x3cimg class\x3d"avatar" src\x3d"[[avatar | avatarUrl]]"\x3e\x3cspan class\x3d"name"\x3e[[name]]\x3c/span\x3e\x3c/div\x3e',$F:100,source:d.source,Ui:c.parent()[0],render:function(a,b,c){b.innerHTML=c.map(function(a){return g(a.data)}).join("")}};g=a(d.EW);window.angular.extend(d,b.options);d.select&&(d.select=function(a){return function(c){return b.$apply(function(){return a(c)})}}(d.select));
f=new rI(c[0],d);return b.$on("destroy",function(){return f.H()})}}};var vI=function(){return function(a,b){return"string"===typeof a?a:a.template.replace("{id}",a.id).replace("{size}",b||"xs")}};var wI=function(a){a.startSymbol("[[").endSymbol("]]")};var xI=function(){nI.call(this);this.Ok=z.oh};
var yI=function(a){var b=a.Ok;(0,window.$)(".feeds.pending-questions").on("click",".add",function(){var a=(0,window.$)(this).data("token"),d=(0,window.$)(this).closest(".item");window.$.post("/roundtable/"+b.slug,{action:"approve_question",url_token:a}).then(function(a){a.success?d.fadeOut(function(){d.remove()}):z.V.message(a.message||"提交失败")})}).on("click",".remove",function(){var a=(0,window.$)(this).data("token"),d=(0,window.$)(this).closest(".item");window.$.post("/roundtable/"+b.slug,{action:"ignore_question",
url_token:a}).then(function(a){a.success?d.fadeOut(function(){d.remove()}):z.V.message(a.message||"提交失败")})})};var zI=function(a){var b=a.Ok;(0,window.$)(".feeds.pending-activities").on("click",".remove",function(){var a=(0,window.$)(this).data(),d=(0,window.$)(this).closest(".item");window.$.post("/roundtable/"+b.slug,{action:"remove_pending_activity",type:a.type,url_token:a.token}).then(function(a){a.success?d.fadeOut(function(){d.remove()}):z.V.message(a.message||"提交失败")})})};z.y(mI,z.Cl);
mI.prototype.On=function(){return z.Ye('\x3cbutton class\x3d"feeds-loading"\x3e\x3cspan\x3e更多\x3c/span\x3e\x3c/button\x3e')};mI.prototype.mv=function(a){this.Kc&&(z.of(this.Kc.firstChild,a?"努力加载中...":"更多"),z.U.enable(this.Kc,"loading",a))};z.y(nI,z.Q);nI.prototype.init=function(){z.NG.L(this);this.w(window.document.body);this.Iz();this.wt();oI();var a=(0,window.$)(".rt-comment-box")[0];if(a){var b=new z.lC(this.Ok.id,"roundtable");this.L(b);b.w(a)}};nI.prototype.Iz=function(){this.Ok&&(0,z.OG)("roundtable",this.Ok.slug,"read");this.o().g(this,"click!",function(a){"comment"===a.namespace&&a.Ic.fill("label","roundtable").fill("category",this.Fh)})};
nI.prototype.wt=function(){var a=this;(0,window.$)("[data-paging]").each(function(){var b=new mI;b.use("childConstructor",{factory:function(a){a=z.TD(a);a.Nx="sprite-global-icon-fold-round-default";a.nC="sprite-global-icon-fold-round-white";return a}});null!==this.getAttribute("data-navigable")&&b.use("shortcut",{items:"\x3e.item"});a.L(b);b.w(this)})};pI.$inject=["$scope"];pI.prototype.removeTag=function(a,b){a.splice(z.kb(a,b),1)};pI.prototype.moveupTag=function(a,b){var c=z.kb(a,b);0<c&&(a.splice(c,1),a.splice(c-1,0,b))};pI.prototype.onActvityUrlChange=function(){var a=this.bv,b=a.activityUrl,c=a.roundtable.activityUrls;b&&-1===z.kb(c,b)&&(c.push(b),a.activityUrl="")};
pI.prototype.submit=function(a,b){var c="create"===b,d={roundtable:JSON.stringify(a)};if(c&&3>a.activityUrls.length)return z.V.message("请至少添加三条动态");window.$.post(window.location.pathname+window.location.search,d).then(function(c){c.success?"create"===b?(z.V.message(c.message||"活动创建成功，请等待审核"),(0,window.setTimeout)(function(){window.location.href="/roundtable"},3E3)):(z.V.message(c.message||"活动修改成功"),(0,window.setTimeout)(function(){window.location.href="/roundtable/"+a.slug},3E3)):z.V.message(c.message||
"提交失败")})};z.y(rI,z.$s);sI.$inject=["$parse","$timeout"];uI.$inject=["$interpolate"];wI.$inject=["$interpolateProvider"];z.y(xI,nI);xI.prototype.init=function(){z.NG.L(this);this.w(window.document.body);this.Re();yI(this);zI(this);oI();this.wt()};
xI.prototype.Re=function(){var a=(0,window.$)(".add-pending-activities-form");if(a.length){var b=(0,window.$)(".url",a),c=(0,window.$)(".time",a);c.datetimepicker({autoclose:!0,forceParse:!1,format:"yyyy 年 m 月 d 日 hh:ii",startDate:new Date,language:"zh-CN"}).datetimepicker("update",new Date);var d=this.Ok;a.submit(function(a){function g(a){a.success?(z.V.message("添加成功"),(0,window.setTimeout)(function(){window.location.reload()},3E3)):z.V.message(a.message||"提交失败")}a.preventDefault();if(!b.val())return z.V.message("回答或问题地址必须填写");
if(!c.val())return z.V.message("发布时间必须填写");a=(a=b.val().match(/\/question\/\d+\/answer\/(\d+)/))&&a[1];var h=b.val().match(/\/question\/(\d+)/),h=h&&h[1];a?window.$.post("/roundtable/"+d.slug,{action:"add_pending_activity",publish_time:c.val(),type:"answer",url_token:a},g):h?window.$.post("/roundtable/"+d.slug,{action:"add_pending_activity",publish_time:c.val(),type:"question",url_token:h},g):z.V.message("回答或问题地址不正确")})}};z.x("ZH.entryRb",function(){(new nI).init()});z.x("ZH.entryRbEdit",function(){var a=window.angular.module("roundtableApp",[]);a.controller("RoundtableFormCtrl",pI);a.directive("uiAvatarEditor",tI);a.directive("uiSuggest",uI);a.directive("uiTimepicker",sI);a.filter("avatarUrl",vI);a.config(wI);window.angular.bootstrap(window.document.body,["roundtableApp"])});z.x("ZH.entryRbPending",function(){(new xI).init()});z.lg("page-roundtable");}).call(this, __z_z__);
//# sourceURL=/static/revved/-/js/closure/page-roundtable.9e6eb407.js