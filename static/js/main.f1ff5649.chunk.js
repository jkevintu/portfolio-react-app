(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/default-project-pic.d5428f73.png"},25:function(e,t,n){e.exports=n(72)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},70:function(e,t,n){e.exports=n.p+"static/media/Montserrat-Regular.ee653992.ttf"},71:function(e,t,n){e.exports=n.p+"static/media/Montserrat-Bold.ade91f47.ttf"},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(22),c=n.n(l),o=(n(30),n(11)),s=n(1),i=n(6),m=n(7),u=n(9),p=n(8),E={display:"flex",color:"white",textDecoration:"none",lineHeight:"24px",fontSize:"calc(10px + 1vmin)",padding:"0 20px"},d={textDecoration:"underline"},h=function(e,t){var n=Object.assign({},E);return t.hover&&Object.assign(n,d),n},g=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hover:!1},a.props=e,a}return Object(m.a)(n,[{key:"toggleHover",value:function(e){this.setState({hover:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("a",{href:this.props.href,style:h(this.props,this.state),onMouseEnter:function(){return e.toggleHover(!0)},onMouseLeave:function(){return e.toggleHover(!1)}},r.a.createElement("div",null,this.props.children))}}]),n}(r.a.Component),v={width:"100%",padding:"14px 0",display:"flex",flexDirection:"row",justifyContent:"flex-end",position:"absolute"},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{href:"/app#about"},"about"),r.a.createElement(g,{href:"/app#projects"},"projects"),r.a.createElement(g,{href:"/app#designs"},"designs"))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{href:"/app"},"X"))};function A(e){return r.a.createElement("header",{className:"header",style:v},function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?f():b()}(e.isHomePage))}function j(e){return r.a.createElement("div",{className:"layout"},r.a.createElement(A,{isHomePage:!0}),e.children)}var N={minHeight:"100vh",background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAOElEQVQIW2MUFBT8//79ewYQALLBNIjP6OLiApe4d+8eg5KSEsPZs2chEiAGSIB4CZgdKDpwWQ4A7Mc2AV5T93AAAAAASUVORK5CYII=) repeat",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white"},k=function(e){var t="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAOElEQVQIW2MUFBT8//79ewYQALLBNIjP6OLiApe4d+8eg5KSEsPZs2chEiAGSIB4CZgdKDpwWQ4A7Mc2AV5T93AAAAAASUVORK5CYII=) repeat";return e&&(t="url(".concat(e,") center center / cover")),{height:"670px",maxHeight:"75vh",background:t,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",textShadow:"1px 1px #888"}},w={padding:"0 40px"};function x(e){return r.a.createElement("div",null,r.a.createElement("div",{style:e.isHomePage?N:k(e.heroImgUrl)},e.isHomePage?r.a.createElement("code",{style:w},"Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them."):e.children))}n(31);var O=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;Object(i.a)(this,n),(a=t.call(this,e)).state={hover:!1},a.props=e;var r=e.className,l=void 0===r?"":r;return a.classes="section "+l,a}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.sectionId,className:this.classes},this.props.children)}}]),n}(r.a.Component),S=(n(32),n(23)),y=n.n(S),I=function(e){if(e.hover)return"hover"},C=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hover:!1},a.props=e,a}return Object(m.a)(n,[{key:"toggleHover",value:function(e){this.setState({hover:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"image-item",onMouseEnter:function(){return e.toggleHover(!0)},onMouseLeave:function(){return e.toggleHover(!1)}},r.a.createElement(o.b,{to:this.props.url||"#"},r.a.createElement("div",{className:"image-item-name-wrapper"},this.props.name,function(e){if(e.subName)return r.a.createElement("div",{className:"image-item-subname"},e.subName)}(this.props)),r.a.createElement("img",{className:I(this.state),src:this.props.imgSrc||y.a,alt:this.props.name})))}}]),n}(r.a.Component),H=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),console.log("bbb")}},{key:"render",value:function(){return null}}]),n}(r.a.Component);function B(){return r.a.createElement(j,null,r.a.createElement(H,null),r.a.createElement(x,{isHomePage:!0}),r.a.createElement(O,{sectionId:"about"},r.a.createElement("h2",null,"About"),r.a.createElement("code",null,r.a.createElement("strong",null,"J.Kevin Tu"),r.a.createElement("br",null),"Frontend Developer / Consultant",r.a.createElement("br",null),"-----------------------------------",r.a.createElement("br",null),"HTML/CSS",r.a.createElement("br",null),"Javascript (Vue, React, Angular)",r.a.createElement("br",null),"UI/UX/Branding (Photoshop, Sktech)",r.a.createElement("br",null),"SEO, SEM, Google Analytics",r.a.createElement("br",null),"508 Compliance",r.a.createElement("br",null)),r.a.createElement("p",{className:"about-links"},r.a.createElement("a",{href:"mailto:ktu@jkevintu.com"},"ktu@jkevintu.com"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.linkedin.com/in/jkevintu"},">> linkedin"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/jkevintu"},">> Github"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://stackoverflow.com/users/527376/ktu"},">> Stackoverflow"))),r.a.createElement(O,null,r.a.createElement("hr",null)),r.a.createElement(O,{sectionId:"projects"},r.a.createElement("h2",null,"Projects"),r.a.createElement("div",{className:"section-items"},r.a.createElement(C,{name:"Gamer Sensei",subName:"ecommerce",url:"/app/gamer-sensei"}),r.a.createElement(C,{name:"Liaison",subName:"508 Compliance"}))),r.a.createElement(O,null,r.a.createElement("hr",null)),r.a.createElement(O,{sectionId:"designs"},r.a.createElement("h2",null,"Designs"),r.a.createElement("div",{className:"section-items"},r.a.createElement(C,{name:"Posters",url:"/app/posters"}),r.a.createElement(C,{name:"Event Banner",url:"/app/event-banner"}))))}function M(e){return r.a.createElement("div",{className:"project-layout"},r.a.createElement(A,{isHomePage:!1}),e.children)}n(38);function P(e){return r.a.createElement("div",{className:"section-project-desc"},e.children,function(e){return e.linkText&&e.linkUrl?r.a.createElement("div",{className:"section-project-desc-button-wrapper"},r.a.createElement(o.b,{to:e.linkUrl},r.a.createElement("button",{className:"section-project-desc-button"},e.linkText))):null}(e))}function U(e){return r.a.createElement(M,null,r.a.createElement(H,null),r.a.createElement(x,{isHomePage:!1},r.a.createElement("h1",null,"Gamer Sensei"),r.a.createElement("sub",null,"ecommerce platform redesign")),r.a.createElement(O,{className:"flex"},r.a.createElement(P,{linkText:"Launch Website",linkUrl:"https://gamersensei.com/senseis/searches"},r.a.createElement("p",{className:"project-major-desc"},"Next generation eSports coaching: design and reimagine ecommerce experience")),r.a.createElement(P,null,r.a.createElement("div",{className:"desc-wrapper"},r.a.createElement("div",{className:"desc-title"},"Role"),r.a.createElement("div",{className:"desc-content"},"Web consultant / Sr.Frontend Engineer",r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("div",{className:"desc-title"},"Time Frame"),r.a.createElement("div",{className:"desc-content"},"Sep 2016 - Oct 2017"),r.a.createElement("br",null),r.a.createElement("div",{className:"desc-title"},"Languages"),r.a.createElement("div",{className:"desc-content"},"AngularJS / Ruby on Rails")))))}var D=function(){return r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/app/gamer-sensei",component:U}),r.a.createElement(s.a,{path:"/app",component:B})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(39),n(70),n(71);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.f1ff5649.chunk.js.map