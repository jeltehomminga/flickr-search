(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports={photoCard:"PhotoCard_photoCard__1mobB",picture:"PhotoCard_picture__85hCO","image-container":"PhotoCard_image-container__2Mw_i"}},29:function(e,t,n){e.exports={photoGallery:"Gallery_photoGallery__3ZEpo"}},33:function(e,t,n){e.exports=n(66)},38:function(e,t,n){},39:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),i=(n(38),n(6)),s=n(7),l=n(12),u=n(9),h=n(11),p=(n(39),n(17)),m=n(27),d=n(2),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isHidden:!0},n.setImageSrc=function(e){n.setState({isHidden:!1})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.photo,n=t.title,a=t.index,c=t.farm,r=t.id,i=t.server,s=t.secret,l="https://farm".concat(c,".staticflickr.com/").concat(i,"/").concat(r,"_").concat(s);return o.a.createElement(o.a.Fragment,null,this.props.photo&&o.a.createElement("div",{className:p.photoCard,style:{visibility:"".concat(this.state.isHidden?"hidden":"visible")}},o.a.createElement(m.LazyLoadComponent,{threshold:a<7?500:300},o.a.createElement("div",{className:"image-container"},o.a.createElement("picture",{className:p.picture,onLoad:function(){return e.setImageSrc()}},o.a.createElement("source",{media:"(min-width: 1050px)",srcSet:"".concat(l,"_b.jpg")}),o.a.createElement("source",{media:"(min-width: 780px)",srcSet:"".concat(l,"_z.jpg")}),o.a.createElement("img",{src:"".concat(l,"_n.jpg"),alt:"flickr-pic"}),o.a.createElement("div",null,o.a.createElement("p",null,n)))))))}}]),t}(a.Component),E=Object(d.b)(function(e){return{photos:e.photos.photo}})(f),b=n(29),g=Object(d.b)(function(e){return{photos:e.photos.photo}})(function(e){return o.a.createElement("div",{className:b.photoGallery},e.photos&&e.photos.map(function(e,t){return o.a.createElement(E,{index:t,photo:e,key:"card-photo-".concat(t)})}))}),_=n(30),v=n.n(_),O=n(31),j=Object(d.b)(function(e){return{searchInput:e.searchInput}},function(e){return{handleInputChange:function(t){console.log("handle input change happening "),e({type:"SEARCH",value:t.target.value}),v()({method:"get",url:"".concat("https://api.flickr.com/services/rest/","?method=").concat(t.target.value?"flickr.photos.search":"flickr.photos.getRecent","&api_key=").concat("630045465dfbe44cc0e3c96b20164ccb","&tags=").concat(t.target.value,"&sort=relevance&safe_search=1&format=json&nojsoncallback=1")}).then(function(t){e({type:"PHOTOS",photos:t.data.photos})})}}})(function(e){return o.a.createElement(O.DebounceInput,{debounceTimeout:500,className:"searchBox",name:"searchInput",onChange:e.handleInputChange})}),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",null,o.a.createElement(j,null),o.a.createElement("h1",null,"Flickr search"))),o.a.createElement(g,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(32),k=n.n(y),C=n(20),I=n(10),S={photos:[],searchInput:""},N=Object(I.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(console.log("reducer",t),t.type){case"SEARCH":return Object(C.a)({},e,{searchInput:t.value});case"PHOTOS":return Object(C.a)({},e,{photos:t.photos});default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());k.a.config(),r.a.render(o.a.createElement(d.a,{store:N},o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.b81c7169.chunk.js.map