(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"61uB":function(e,t,n){"use strict";n("bWfx"),n("2Spj"),n("/SS/"),n("hHhE"),n("V+eJ"),n("rE2o"),n("ioFf"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n("q1tI"),i=(o=u)&&o.__esModule?o:{default:o};var c={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},s=2,m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.reCalculateColumnCount=n.reCalculateColumnCount.bind(n),n.reCalculateColumnCountDebounce=n.reCalculateColumnCountDebounce.bind(n);var o=void 0;return o=n.props.breakpointCols&&n.props.breakpointCols.default?n.props.breakpointCols.default:parseInt(n.props.breakpointCols)||s,n.state={columnCount:o},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":r(t))&&(t={default:parseInt(t)||s});var n=1/0,o=t.default||s;for(var a in t){var l=parseInt(a);l>0&&e<=l&&l<n&&(n=l,o=t[a])}o=Math.max(1,parseInt(o)||1),this.state.columnCount!==o&&this.setState({columnCount:o})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),n=[].concat(this.props.children||[]),o=0;o<n.length;o++){var a=o%e;t[a]||(t[a]=[]),t[a].push(n[o])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,n=e.columnAttrs,o=void 0===n?{}:n,r=e.columnClassName,l=this.itemsInColumns(),u=100/l.length+"%",c=r;"string"!=typeof c&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===c&&(c="my-masonry-grid_column"));var s=a({},t,o,{style:a({},o.style,{width:u}),className:c});return l.map((function(e,t){return i.default.createElement("div",a({},s,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),n=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),o=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(o="my-masonry-grid")),i.default.createElement("div",a({},n,{className:o}),this.renderColumns())}}]),t}(i.default.Component);m.defaultProps=c,t.default=m},"Jru+":function(e,t,n){e.exports=n.p+"static/head-90b26611465df02a85d74a7655b3474e.jpeg"},"tJ/O":function(e,t,n){"use strict";n.r(t),n.d(t,"blogListQuery",(function(){return v}));n("a1Th"),n("Btvt");var o=n("q1tI"),a=n.n(o),r=n("Wbzz"),l=n("Kvkj"),u=n("mve2"),i=n.n(u),c=n("IP2g"),s=n("wHSu"),m=n("61uB"),p=n.n(m),d=n("HTD6"),f=n("Jru+"),C=n.n(f);t.default=function(e){var t=e.data,n=e.location,o=e.pageContext,u=Object(d.a)(),m=o.currentPage,f=o.numPages,v=t.allMarkdownRemark.edges.filter((function(e){return!!e.node.frontmatter.date})).map((function(e){return a.a.createElement(l.b,{key:e.node.id,post:e.node,location:n})})),y=1===m,b=f===m,h=2===m?"/":"/page/"+(m-1).toString(),w="/page/"+(m+1);return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.c,{title:"Home",site:u,featuredImage:C.a}),a.a.createElement(l.d,{title:"Posts"}),a.a.createElement(p.a,{breakpointCols:{default:3,1160:2,780:1},className:i.a.myMasonryGrid,columnClassName:i.a.myMasonryGrid_column},v),a.a.createElement("div",{className:i.a.navigateContainer},!y&&a.a.createElement(r.Link,{to:h,rel:"prev","aria-label":"previous page",className:i.a.navigate},a.a.createElement(c.a,{icon:s.a})),!b&&a.a.createElement(r.Link,{to:w,rel:"next","aria-label":"next page",className:i.a.navigate},a.a.createElement(c.a,{icon:s.b}))))};var v="2932040878"}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-f457e998ade4e2bfd18d.js.map