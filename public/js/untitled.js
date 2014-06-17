/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

//! moment.js
//! version : 2.6.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {

    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = "2.6.0",
        // the global-scope this is NOT the global object in Node.js
        globalScope = typeof global !== 'undefined' ? global : this,
        oldGlobalMoment,
        round = Math.round,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for language config files
        languages = {},

        // moment internal properties
        momentProperties = {
            _isAMomentObject: null,
            _i : null,
            _f : null,
            _l : null,
            _strict : null,
            _isUTC : null,
            _offset : null,  // optional. Combine with _isUTC
            _pf : null,
            _lang : null  // optional
        },

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        parseTokenOrdinal = /\d{1,2}/,

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.lang().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.lang().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.lang().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.lang().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.lang().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ":" + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];

    // Pick the first defined of two or three arguments. dfl comes from
    // default.
    function dfl(a, b, c) {
        switch (arguments.length) {
            case 2: return a != null ? a : b;
            case 3: return a != null ? a : b != null ? b : c;
            default: throw new Error("Implement me");
        }
    }

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        function printMsg() {
            if (moment.suppressDeprecationWarnings === false &&
                    typeof console !== 'undefined' && console.warn) {
                console.warn("Deprecation warning: " + msg);
            }
        }
        return extend(function () {
            if (firstTime) {
                printMsg();
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.lang().ordinal(func.call(this, a), period);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Language() {

    }

    // Moment prototype object
    function Moment(config) {
        checkOverflow(config);
        extend(this, config);
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (b.hasOwnProperty(i)) {
                a[i] = b[i];
            }
        }

        if (b.hasOwnProperty("toString")) {
            a.toString = b.toString;
        }

        if (b.hasOwnProperty("valueOf")) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function cloneMoment(m) {
        var result = {}, i;
        for (i in m) {
            if (m.hasOwnProperty(i) && momentProperties.hasOwnProperty(i)) {
                result[i] = m[i];
            }
        }

        return result;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    // helper function for _.addTime and _.subtractTime
    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return  Object.prototype.toString.call(input) === '[object Date]' ||
                input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (inputObject.hasOwnProperty(prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment.fn._lang[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment.fn._lang, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 23 ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0;
            }
        }
        return m._isValid;
    }

    function normalizeLanguage(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function makeAs(input, model) {
        return model._isUTC ? moment(input).zone(model._offset || 0) :
            moment(input).local();
    }

    /************************************
        Languages
    ************************************/


    extend(Language.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        },

        _months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                if (!this._monthsParse[i]) {
                    mom = moment.utc([2000, i]);
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LT : "h:mm A",
            L : "MM/DD/YYYY",
            LL : "MMMM D YYYY",
            LLL : "MMMM D YYYY LT",
            LLLL : "dddd, MMMM D YYYY LT"
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom) : output;
        },

        _relativeTime : {
            future : "in %s",
            past : "%s ago",
            s : "a few seconds",
            m : "a minute",
            mm : "%d minutes",
            h : "an hour",
            hh : "%d hours",
            d : "a day",
            dd : "%d days",
            M : "a month",
            MM : "%d months",
            y : "a year",
            yy : "%d years"
        },
        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },
        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace("%d", number);
        },
        _ordinal : "%d",

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    // Loads a language definition into the `languages` cache.  The function
    // takes a key and optionally values.  If not in the browser and no values
    // are provided, it will load the language file module.  As a convenience,
    // this function also returns the language values.
    function loadLang(key, values) {
        values.abbr = key;
        if (!languages[key]) {
            languages[key] = new Language();
        }
        languages[key].set(values);
        return languages[key];
    }

    // Remove a language from the `languages` cache. Mostly useful in tests.
    function unloadLang(key) {
        delete languages[key];
    }

    // Determines which language definition to use and returns it.
    //
    // With no parameters, it will return the global language.  If you
    // pass in a language key, such as 'en', it will return the
    // definition for 'en', so long as 'en' has already been loaded using
    // moment.lang.
    function getLangDefinition(key) {
        var i = 0, j, lang, next, split,
            get = function (k) {
                if (!languages[k] && hasModule) {
                    try {
                        require('./lang/' + k);
                    } catch (e) { }
                }
                return languages[k];
            };

        if (!key) {
            return moment.fn._lang;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            lang = get(key);
            if (lang) {
                return lang;
            }
            key = [key];
        }

        //pick the language from the array
        //try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
        //substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
        while (i < key.length) {
            split = normalizeLanguage(key[i]).split('-');
            j = split.length;
            next = normalizeLanguage(key[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                lang = get(split.slice(0, j).join('-'));
                if (lang) {
                    return lang;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return moment.fn._lang;
    }

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = "";
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {

        if (!m.isValid()) {
            return m.lang().invalidDate();
        }

        format = expandFormat(format, m.lang());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, lang) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return lang.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) { return parseTokenOneDigit; }
            /* falls through */
        case 'SS':
            if (strict) { return parseTokenTwoDigits; }
            /* falls through */
        case 'SSS':
            if (strict) { return parseTokenThreeDigits; }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return getLangDefinition(config._l)._meridiemParse;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return parseTokenOrdinal;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), "i"));
            return a;
        }
    }

    function timezoneMinutesFromString(string) {
        string = string || "";
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? -minutes : minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = getLangDefinition(config._l).monthsParse(input);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(input, 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = getLangDefinition(config._l).isPM(input);
            break;
        // 24 HOUR
        case 'H' : // fall through to hh
        case 'HH' : // fall through to hh
        case 'h' : // fall through to hh
        case 'hh' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = timezoneMinutesFromString(input);
            break;
        // WEEKDAY - human
        case 'dd':
        case 'ddd':
        case 'dddd':
            a = getLangDefinition(config._l).weekdaysParse(input);
            // if we didn't get a weekday name, mark the date as invalid
            if (a != null) {
                config._w = config._w || {};
                config._w['d'] = a;
            } else {
                config._pf.invalidWeekday = input;
            }
            break;
        // WEEK, WEEK DAY - numeric
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = toInt(input);
            }
            break;
        case 'gg':
        case 'GG':
            config._w = config._w || {};
            config._w[token] = moment.parseTwoDigitYear(input);
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, lang;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1);
        } else {
            lang = getLangDefinition(config._l);
            dow = lang._week.dow;
            doy = lang._week.doy;

            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // add the offsets to the time to be parsed so that we can have a clean array for checking isValid
        input[HOUR] += toInt((config._tzm || 0) / 60);
        input[MINUTE] += toInt((config._tzm || 0) % 60);

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var lang = getLangDefinition(config._l),
            string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, lang).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // handle am pm
        if (config._isPm && config._a[HOUR] < 12) {
            config._a[HOUR] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[HOUR] === 12) {
            config._a[HOUR] = 0;
        }

        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = extend({}, config);
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function makeDateFromString(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be "T" or undefined
                    config._f = isoDates[i][0] + (match[6] || " ");
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += "Z";
            }
            makeDateFromStringAndFormat(config);
        }
        else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDateFromInput(config) {
        var input = config._i,
            matched = aspNetJsonRegex.exec(input);

        if (input === undefined) {
            config._d = new Date();
        } else if (matched) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = input.slice(0);
            dateFromConfig(config);
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, language) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = language.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
        return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(milliseconds, withoutSuffix, lang) {
        var seconds = round(Math.abs(milliseconds) / 1000),
            minutes = round(seconds / 60),
            hours = round(minutes / 60),
            days = round(hours / 24),
            years = round(days / 365),
            args = seconds < 45 && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < 45 && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < 22 && ['hh', hours] ||
                days === 1 && ['d'] ||
                days <= 25 && ['dd', days] ||
                days <= 45 && ['M'] ||
                days < 345 && ['MM', round(days / 30)] ||
                years === 1 && ['y'] || ['yy', years];
        args[2] = withoutSuffix;
        args[3] = milliseconds > 0;
        args[4] = lang;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add('d', daysToDayOfWeek);
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f;

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = getLangDefinition().preparse(input);
        }

        if (moment.isMoment(input)) {
            config = cloneMoment(input);

            config._d = new Date(+input._d);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        return new Moment(config);
    }

    moment = function (input, format, lang, strict) {
        var c;

        if (typeof(lang) === "boolean") {
            strict = lang;
            lang = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = lang;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
            "moment construction falls back to js Date. This is " +
            "discouraged and will be removed in upcoming major " +
            "release. Please refer to " +
            "https://github.com/moment/moment/issues/1407 for more info.",
            function (config) {
        config._d = new Date(config._i);
    });

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return moment();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    moment.min = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    };

    moment.max = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    };

    // creating with utc
    moment.utc = function (input, format, lang, strict) {
        var c;

        if (typeof(lang) === "boolean") {
            strict = lang;
            lang = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = lang;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === "-") ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === "-") ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && input.hasOwnProperty('_lang')) {
            ret._lang = input._lang;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function will load languages and then set the global language.  If
    // no arguments are passed in, it will simply return the current global
    // language key.
    moment.lang = function (key, values) {
        var r;
        if (!key) {
            return moment.fn._lang._abbr;
        }
        if (values) {
            loadLang(normalizeLanguage(key), values);
        } else if (values === null) {
            unloadLang(key);
            key = 'en';
        } else if (!languages[key]) {
            getLangDefinition(key);
        }
        r = moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
        return r._abbr;
    };

    // returns language data
    moment.langData = function (key) {
        if (key && key._lang && key._lang._abbr) {
            key = key._lang._abbr;
        }
        return getLangDefinition(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null &&  obj.hasOwnProperty('_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d + ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().lang('en').format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {

            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function () {
            return this.zone(0);
        },

        local : function () {
            this.zone(0);
            this._isUTC = false;
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.lang().postformat(output);
        },

        add : function (input, val) {
            var dur;
            // switch args to support add('s', 1) and add(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, 1);
            return this;
        },

        subtract : function (input, val) {
            var dur;
            // switch args to support subtract('s', 1) and subtract(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, -1);
            return this;
        },

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month') {
                // average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                // adjust by taking difference in days, average number of days
                // and dst in the given months.
                output += ((this - moment(this).startOf('month')) -
                        (that - moment(that).startOf('month'))) / diff;
                // same as above but with zones, to negate all dst
                output -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4 / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that);
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function () {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're zone'd or not.
            var sod = makeAs(moment(), this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.lang().calendar(format, this));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.lang());
                return this.add({ d : input - day });
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf: function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            return this.startOf(units).add((units === 'isoWeek' ? 'week' : units), 1).subtract('ms', 1);
        },

        isAfter: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) > +moment(input).startOf(units);
        },

        isBefore: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) < +moment(input).startOf(units);
        },

        isSame: function (input, units) {
            units = units || 'ms';
            return +this.clone().startOf(units) === +makeAs(input, this).startOf(units);
        },

        min: deprecate(
                 "moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",
                 function (other) {
                     other = moment.apply(null, arguments);
                     return other < this ? this : other;
                 }
         ),

        max: deprecate(
                "moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",
                function (other) {
                    other = moment.apply(null, arguments);
                    return other > this ? this : other;
                }
        ),

        // keepTime = true means only change the timezone, without affecting
        // the local hour. So 5:31:26 +0300 --[zone(2, true)]--> 5:31:26 +0200
        // It is possible that 5:31:26 doesn't exist int zone +0200, so we
        // adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        zone : function (input, keepTime) {
            var offset = this._offset || 0;
            if (input != null) {
                if (typeof input === "string") {
                    input = timezoneMinutesFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                this._offset = input;
                this._isUTC = true;
                if (offset !== input) {
                    if (!keepTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(offset - input, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }
            } else {
                return this._isUTC ? offset : this._d.getTimezoneOffset();
            }
            return this;
        },

        zoneAbbr : function () {
            return this._isUTC ? "UTC" : "";
        },

        zoneName : function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
        },

        parseZone : function () {
            if (this._tzm) {
                this.zone(this._tzm);
            } else if (typeof this._i === 'string') {
                this.zone(this._i);
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).zone();
            }

            return (this.zone() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return input == null ? year : this.add("y", (input - year));
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add("y", (input - year));
        },

        week : function (input) {
            var week = this.lang().week(this);
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.lang()._week.dow) % 7;
            return input == null ? weekday : this.add("d", input - weekday);
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this._lang._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                this[units](value);
            }
            return this;
        },

        // If passed a language key, it will set the language for this
        // instance.  Otherwise, it will return the language configuration
        // variables for this instance.
        lang : function (key) {
            if (key === undefined) {
                return this._lang;
            } else {
                this._lang = getLangDefinition(key);
                return this;
            }
        }
    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.lang().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate("dates accessor is deprecated. Use date instead.", makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate("years accessor is deprecated. Use year instead.", makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    /************************************
        Duration Prototype
    ************************************/


    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);
            data.days = days % 30;

            months += absRound(days / 30);
            data.months = months % 12;

            years = absRound(months / 12);
            data.years = years;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var difference = +this,
                output = relativeTime(difference, !withSuffix, this.lang());

            if (withSuffix) {
                output = this.lang().pastFuture(difference, output);
            }

            return this.lang().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            units = normalizeUnits(units);
            return this['as' + units.charAt(0).toUpperCase() + units.slice(1) + 's']();
        },

        lang : moment.fn.lang,

        toIsoString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        }
    });

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    function makeDurationAsGetter(name, factor) {
        moment.duration.fn['as' + name] = function () {
            return +this / factor;
        };
    }

    for (i in unitMillisecondFactors) {
        if (unitMillisecondFactors.hasOwnProperty(i)) {
            makeDurationAsGetter(i, unitMillisecondFactors[i]);
            makeDurationGetter(i.toLowerCase());
        }
    }

    makeDurationAsGetter('Weeks', 6048e5);
    moment.duration.fn.asMonths = function () {
        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12;
    };


    /************************************
        Default Lang
    ************************************/


    // Set default language, other languages will inherit from English.
    moment.lang('en', {
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    /* EMBED_LANGUAGES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    "Accessing Moment through the global scope is " +
                    "deprecated, and will be removed in an upcoming " +
                    "release.",
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === "function" && define.amd) {
        define("moment", function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);

/*
Version 3.0.0
=========================================================
bootstrap-datetimepicker.js
https://github.com/Eonasdan/bootstrap-datetimepicker
=========================================================
The MIT License (MIT)

Copyright (c) 2014 Jonathan Peterson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
!function(e){if("function"==typeof define&&define.amd)define(["jquery","moment"],e)
else{if(!jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first"
if(!moment)throw"bootstrap-datetimepicker requires moment.js to be loaded first"
e(jQuery,moment)}}(function(e,t){if(void 0===t)throw alert("momentjs is requried"),Error("momentjs is required")
var a=0,o=t,n=function(t,n){var s={pickDate:!0,pickTime:!0,useMinutes:!0,useSeconds:!1,useCurrent:!0,minuteStepping:1,minDate:new o({y:1900}),maxDate:(new o).add(100,"y"),showToday:!0,collapse:!0,language:"en",defaultDate:"",disabledDates:!1,enabledDates:!1,icons:{},useStrict:!1,direction:"auto",sideBySide:!1,daysOfWeekDisabled:!1},d={time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down"},r=this,c=function(){var i,c=!1
if(r.options=e.extend({},s,n),r.options.icons=e.extend({},d,r.options.icons),r.element=e(t),l(),!r.options.pickTime&&!r.options.pickDate)throw Error("Must choose at least one picker")
if(r.id=a++,o.lang(r.options.language),r.date=o(),r.unset=!1,r.isInput=r.element.is("input"),r.component=!1,r.element.hasClass("input-group")&&(r.component=r.element.find(0==r.element.find(".datepickerbutton").size()?"[class^='input-group-']":".datepickerbutton")),r.format=r.options.format,i=o()._lang._longDateFormat,r.format||(r.format=r.options.pickDate?i.L:"",r.options.pickDate&&r.options.pickTime&&(r.format+=" "),r.format+=r.options.pickTime?i.LT:"",r.options.useSeconds&&(~i.LT.indexOf(" A")?r.format=r.format.split(" A")[0]+":ss A":r.format+=":ss")),r.use24hours=r.format.toLowerCase().indexOf("a")<1,r.component&&(c=r.component.find("span")),r.options.pickTime&&c&&c.addClass(r.options.icons.time),r.options.pickDate&&c&&(c.removeClass(r.options.icons.time),c.addClass(r.options.icons.date)),r.widget=e(W()).appendTo("body"),r.options.useSeconds&&!r.use24hours&&r.widget.width(300),r.minViewMode=r.options.minViewMode||0,"string"==typeof r.minViewMode)switch(r.minViewMode){case"months":r.minViewMode=1
break
case"years":r.minViewMode=2
break
default:r.minViewMode=0}if(r.viewMode=r.options.viewMode||0,"string"==typeof r.viewMode)switch(r.viewMode){case"months":r.viewMode=1
break
case"years":r.viewMode=2
break
default:r.viewMode=0}if(r.options.disabledDates=j(r.options.disabledDates),r.options.enabledDates=j(r.options.enabledDates),r.startViewMode=r.viewMode,r.setMinDate(r.options.minDate),r.setMaxDate(r.options.maxDate),g(),w(),k(),b(),y(),h(),P(),V(),""!==r.options.defaultDate&&""==p().val()&&r.setValue(r.options.defaultDate),1!==r.options.minuteStepping){var m=r.options.minuteStepping
r.date.minutes(Math.round(r.date.minutes()/m)*m%60).seconds(0)}},p=function(){return r.isInput?r.element:dateStr=r.element.find("input")},l=function(){var e
e=(r.element.is("input"),r.element.data()),void 0!==e.dateFormat&&(r.options.format=e.dateFormat),void 0!==e.datePickdate&&(r.options.pickDate=e.datePickdate),void 0!==e.datePicktime&&(r.options.pickTime=e.datePicktime),void 0!==e.dateUseminutes&&(r.options.useMinutes=e.dateUseminutes),void 0!==e.dateUseseconds&&(r.options.useSeconds=e.dateUseseconds),void 0!==e.dateUsecurrent&&(r.options.useCurrent=e.dateUsecurrent),void 0!==e.dateMinutestepping&&(r.options.minuteStepping=e.dateMinutestepping),void 0!==e.dateMindate&&(r.options.minDate=e.dateMindate),void 0!==e.dateMaxdate&&(r.options.maxDate=e.dateMaxdate),void 0!==e.dateShowtoday&&(r.options.showToday=e.dateShowtoday),void 0!==e.dateCollapse&&(r.options.collapse=e.dateCollapse),void 0!==e.dateLanguage&&(r.options.language=e.dateLanguage),void 0!==e.dateDefaultdate&&(r.options.defaultDate=e.dateDefaultdate),void 0!==e.dateDisableddates&&(r.options.disabledDates=e.dateDisableddates),void 0!==e.dateEnableddates&&(r.options.enabledDates=e.dateEnableddates),void 0!==e.dateIcons&&(r.options.icons=e.dateIcons),void 0!==e.dateUsestrict&&(r.options.useStrict=e.dateUsestrict),void 0!==e.dateDirection&&(r.options.direction=e.dateDirection),void 0!==e.dateSidebyside&&(r.options.sideBySide=e.dateSidebyside)},m=function(){var t="absolute",i=r.component?r.component.offset():r.element.offset(),a=e(window)
r.width=r.component?r.component.outerWidth():r.element.outerWidth(),i.top=i.top+r.element.outerHeight()
var o
"up"===r.options.direction?o="top":"bottom"===r.options.direction?o="bottom":"auto"===r.options.direction&&(o=i.top+r.widget.height()>a.height()+a.scrollTop()&&r.widget.height()+r.element.outerHeight()<i.top?"top":"bottom"),"top"===o?(i.top-=r.widget.height()+r.element.outerHeight()+15,r.widget.addClass("top").removeClass("bottom")):(i.top+=1,r.widget.addClass("bottom").removeClass("top")),void 0!==r.options.width&&r.widget.width(r.options.width),"left"===r.options.orientation&&(r.widget.addClass("left-oriented"),i.left=i.left-r.widget.width()+20),Y()&&(t="fixed",i.top-=a.scrollTop(),i.left-=a.scrollLeft()),a.width()<i.left+r.widget.outerWidth()?(i.right=a.width()-i.left-r.width,i.left="auto",r.widget.addClass("pull-right")):(i.right="auto",r.widget.removeClass("pull-right")),r.widget.css({position:t,top:i.top,left:i.left,right:i.right})},u=function(e,t){o(r.date).isSame(o(e))||(r.element.trigger({type:"dp.change",date:o(r.date),oldDate:o(e)}),"change"!==t&&r.element.change())},f=function(e){r.element.trigger({type:"dp.error",date:o(e)})},h=function(e){o.lang(r.options.language)
var t=e
t||(t=p().val(),t&&(r.date=o(t,r.format,r.options.useStrict)),r.date||(r.date=o())),r.viewDate=o(r.date).startOf("month"),v(),D()},g=function(){o.lang(r.options.language)
var t,i=e("<tr>"),a=o.weekdaysMin()
if(0==o()._lang._week.dow)for(t=0;7>t;t++)i.append('<th class="dow">'+a[t]+"</th>")
else for(t=1;8>t;t++)i.append(7==t?'<th class="dow">'+a[0]+"</th>":'<th class="dow">'+a[t]+"</th>")
r.widget.find(".datepicker-days thead").append(i)},w=function(){o.lang(r.options.language)
for(var e="",t=0,i=o.monthsShort();12>t;)e+='<span class="month">'+i[t++]+"</span>"
r.widget.find(".datepicker-months td").append(e)},v=function(){o.lang(r.options.language)
var t,i,a,n,s,d,c,p,l=r.viewDate.year(),m=r.viewDate.month(),u=r.options.minDate.year(),f=r.options.minDate.month(),h=r.options.maxDate.year(),g=r.options.maxDate.month(),w=[],v=o.months()
for(r.widget.find(".datepicker-days").find(".disabled").removeClass("disabled"),r.widget.find(".datepicker-months").find(".disabled").removeClass("disabled"),r.widget.find(".datepicker-years").find(".disabled").removeClass("disabled"),r.widget.find(".datepicker-days th:eq(1)").text(v[m]+" "+l),t=o(r.viewDate).subtract("months",1),d=t.daysInMonth(),t.date(d).startOf("week"),(l==u&&f>=m||u>l)&&r.widget.find(".datepicker-days th:eq(0)").addClass("disabled"),(l==h&&m>=g||l>h)&&r.widget.find(".datepicker-days th:eq(2)").addClass("disabled"),i=o(t).add(42,"d");t.isBefore(i);){if(t.weekday()===o().startOf("week").weekday()&&(a=e("<tr>"),w.push(a)),n="",t.year()<l||t.year()==l&&t.month()<m?n+=" old":(t.year()>l||t.year()==l&&t.month()>m)&&(n+=" new"),t.isSame(o({y:r.date.year(),M:r.date.month(),d:r.date.date()}))&&(n+=" active"),(N(t)||!U(t))&&(n+=" disabled"),r.options.showToday===!0&&t.isSame(o(),"day")&&(n+=" today"),r.options.daysOfWeekDisabled)for(s in r.options.daysOfWeekDisabled)if(t.day()==r.options.daysOfWeekDisabled[s]){n+=" disabled"
break}a.append('<td class="day'+n+'">'+t.date()+"</td>"),t.add(1,"d")}for(r.widget.find(".datepicker-days tbody").empty().append(w),p=r.date.year(),v=r.widget.find(".datepicker-months").find("th:eq(1)").text(l).end().find("span").removeClass("active"),p===l&&v.eq(r.date.month()).addClass("active"),u>p-1&&r.widget.find(".datepicker-months th:eq(0)").addClass("disabled"),p+1>h&&r.widget.find(".datepicker-months th:eq(2)").addClass("disabled"),s=0;12>s;s++)l==u&&f>s||u>l?e(v[s]).addClass("disabled"):(l==h&&s>g||l>h)&&e(v[s]).addClass("disabled")
for(w="",l=10*parseInt(l/10,10),c=r.widget.find(".datepicker-years").find("th:eq(1)").text(l+"-"+(l+9)).end().find("td"),r.widget.find(".datepicker-years").find("th").removeClass("disabled"),u>l&&r.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled"),l+9>h&&r.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled"),l-=1,s=-1;11>s;s++)w+='<span class="year'+(-1===s||10===s?" old":"")+(p===l?" active":"")+(u>l||l>h?" disabled":"")+'">'+l+"</span>",l+=1
c.html(w)},k=function(){o.lang(r.options.language)
var e,t,i,a=r.widget.find(".timepicker .timepicker-hours table"),n=""
if(a.parent().hide(),r.use24hours)for(e=0,t=0;6>t;t+=1){for(n+="<tr>",i=0;4>i;i+=1)n+='<td class="hour">'+F(""+e)+"</td>",e++
n+="</tr>"}else for(e=1,t=0;3>t;t+=1){for(n+="<tr>",i=0;4>i;i+=1)n+='<td class="hour">'+F(""+e)+"</td>",e++
n+="</tr>"}a.html(n)},b=function(){var e,t,i=r.widget.find(".timepicker .timepicker-minutes table"),a="",o=0,n=r.options.minuteStepping
for(i.parent().hide(),1==n&&(n=5),e=0;e<Math.ceil(60/n/4);e++){for(a+="<tr>",t=0;4>t;t+=1)60>o?(a+='<td class="minute">'+F(""+o)+"</td>",o+=n):a+="<td></td>"
a+="</tr>"}i.html(a)},y=function(){var e,t,i=r.widget.find(".timepicker .timepicker-seconds table"),a="",o=0
for(i.parent().hide(),e=0;3>e;e++){for(a+="<tr>",t=0;4>t;t+=1)a+='<td class="second">'+F(""+o)+"</td>",o+=5
a+="</tr>"}i.html(a)},D=function(){if(r.date){var e=r.widget.find(".timepicker span[data-time-component]"),t=r.date.hours(),i="AM"
r.use24hours||(t>=12&&(i="PM"),0===t?t=12:12!=t&&(t%=12),r.widget.find(".timepicker [data-action=togglePeriod]").text(i)),e.filter("[data-time-component=hours]").text(F(t)),e.filter("[data-time-component=minutes]").text(F(r.date.minutes())),e.filter("[data-time-component=seconds]").text(F(r.date.second()))}},M=function(t){t.stopPropagation(),t.preventDefault(),r.unset=!1
var i,a,n,s,d=e(t.target).closest("span, td, th"),c=o(r.date)
if(1===d.length&&!d.is(".disabled"))switch(d[0].nodeName.toLowerCase()){case"th":switch(d[0].className){case"switch":P(1)
break
case"prev":case"next":n=B.modes[r.viewMode].navStep,"prev"===d[0].className&&(n=-1*n),r.viewDate.add(n,B.modes[r.viewMode].navFnc),v()}break
case"span":d.is(".month")?(i=d.parent().find("span").index(d),r.viewDate.month(i)):(a=parseInt(d.text(),10)||0,r.viewDate.year(a)),r.viewMode===r.minViewMode&&(r.date=o({y:r.viewDate.year(),M:r.viewDate.month(),d:r.viewDate.date(),h:r.date.hours(),m:r.date.minutes(),s:r.date.seconds()}),u(c,t.type),O()),P(-1),v()
break
case"td":d.is(".day")&&(s=parseInt(d.text(),10)||1,i=r.viewDate.month(),a=r.viewDate.year(),d.is(".old")?0===i?(i=11,a-=1):i-=1:d.is(".new")&&(11==i?(i=0,a+=1):i+=1),r.date=o({y:a,M:i,d:s,h:r.date.hours(),m:r.date.minutes(),s:r.date.seconds()}),r.viewDate=o({y:a,M:i,d:Math.min(28,s)}),v(),O(),u(c,t.type))}},x={incrementHours:function(){L("add","hours",1)},incrementMinutes:function(){L("add","minutes",r.options.minuteStepping)},incrementSeconds:function(){L("add","seconds",1)},decrementHours:function(){L("subtract","hours",1)},decrementMinutes:function(){L("subtract","minutes",r.options.minuteStepping)},decrementSeconds:function(){L("subtract","seconds",1)},togglePeriod:function(){var e=r.date.hours()
e>=12?e-=12:e+=12,r.date.hours(e)},showPicker:function(){r.widget.find(".timepicker > div:not(.timepicker-picker)").hide(),r.widget.find(".timepicker .timepicker-picker").show()},showHours:function(){r.widget.find(".timepicker .timepicker-picker").hide(),r.widget.find(".timepicker .timepicker-hours").show()},showMinutes:function(){r.widget.find(".timepicker .timepicker-picker").hide(),r.widget.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){r.widget.find(".timepicker .timepicker-picker").hide(),r.widget.find(".timepicker .timepicker-seconds").show()},selectHour:function(t){var i=r.widget.find(".timepicker [data-action=togglePeriod]").text(),a=parseInt(e(t.target).text(),10)
"PM"==i&&(a+=12),r.date.hours(a),x.showPicker.call(r)},selectMinute:function(t){r.date.minutes(parseInt(e(t.target).text(),10)),x.showPicker.call(r)},selectSecond:function(t){r.date.seconds(parseInt(e(t.target).text(),10)),x.showPicker.call(r)}},S=function(t){var i=o(r.date),a=e(t.currentTarget).data("action"),n=x[a].apply(r,arguments)
return T(t),r.date||(r.date=o({y:1970})),O(),D(),u(i,t.type),n},T=function(e){e.stopPropagation(),e.preventDefault()},C=function(t){o.lang(r.options.language)
var i=e(t.target),a=o(r.date),n=o(i.val(),r.format,r.options.useStrict)
n.isValid()&&!N(n)&&U(n)?(h(),r.setValue(n),u(a,t.type),O()):(r.viewDate=a,u(a,t.type),f(n),r.unset=!0)},P=function(e){e&&(r.viewMode=Math.max(r.minViewMode,Math.min(2,r.viewMode+e)))
B.modes[r.viewMode].clsName
r.widget.find(".datepicker > div").hide().filter(".datepicker-"+B.modes[r.viewMode].clsName).show()},V=function(){var t,i,a,o,n
r.widget.on("click",".datepicker *",e.proxy(M,this)),r.widget.on("click","[data-action]",e.proxy(S,this)),r.widget.on("mousedown",e.proxy(T,this)),r.options.pickDate&&r.options.pickTime&&r.widget.on("click.togglePicker",".accordion-toggle",function(s){if(s.stopPropagation(),t=e(this),i=t.closest("ul"),a=i.find(".in"),o=i.find(".collapse:not(.in)"),a&&a.length){if(n=a.data("collapse"),n&&n.date-transitioning)return
a.collapse("hide"),o.collapse("show"),t.find("span").toggleClass(r.options.icons.time+" "+r.options.icons.date),r.element.find(".input-group-addon span").toggleClass(r.options.icons.time+" "+r.options.icons.date)}}),r.isInput?r.element.on({focus:e.proxy(r.show,this),change:e.proxy(C,this),blur:e.proxy(r.hide,this)}):(r.element.on({change:e.proxy(C,this)},"input"),r.component?r.component.on("click",e.proxy(r.show,this)):r.element.on("click",e.proxy(r.show,this)))},q=function(){e(window).on("resize.datetimepicker"+r.id,e.proxy(m,this)),r.isInput||e(document).on("mousedown.datetimepicker"+r.id,e.proxy(r.hide,this))},I=function(){r.widget.off("click",".datepicker *",r.click),r.widget.off("click","[data-action]"),r.widget.off("mousedown",r.stopEvent),r.options.pickDate&&r.options.pickTime&&r.widget.off("click.togglePicker"),r.isInput?r.element.off({focus:r.show,change:r.change}):(r.element.off({change:r.change},"input"),r.component?r.component.off("click",r.show):r.element.off("click",r.show))},H=function(){e(window).off("resize.datetimepicker"+r.id),r.isInput||e(document).off("mousedown.datetimepicker"+r.id)},Y=function(){if(r.element){var t,i=r.element.parents(),a=!1
for(t=0;t<i.length;t++)if("fixed"==e(i[t]).css("position")){a=!0
break}return a}return!1},O=function(){o.lang(r.options.language)
var e=""
r.unset||(e=o(r.date).format(r.format)),p().val(e),r.element.data("date",e),r.options.pickTime||r.hide()},L=function(e,t,i){o.lang(r.options.language)
var a
return"add"==e?(a=o(r.date),23==a.hours()&&a.add(i,t),a.add(i,t)):a=o(r.date).subtract(i,t),N(o(a.subtract(i,t)))||N(a)?void f(a.format(r.format)):("add"==e?r.date.add(i,t):r.date.subtract(i,t),void(r.unset=!1))},N=function(e){return o.lang(r.options.language),e.isAfter(r.options.maxDate)||e.isBefore(r.options.minDate)?!0:r.options.disabledDates===!1?!1:r.options.disabledDates[o(e).format("YYYY-MM-DD")]===!0},U=function(e){return o.lang(r.options.language),r.options.enabledDates===!1?!0:r.options.enabledDates[o(e).format("YYYY-MM-DD")]===!0},j=function(e){var t={},a=0
for(i=0;i<e.length;i++)dDate=o(e[i]),dDate.isValid()&&(t[dDate.format("YYYY-MM-DD")]=!0,a++)
return a>0?t:!1},F=function(e){return e=""+e,e.length>=2?e:"0"+e},W=function(){if(r.options.pickDate&&r.options.pickTime){var e=""
return e='<div class="bootstrap-datetimepicker-widget'+(r.options.sideBySide?" timepicker-sbs":"")+' dropdown-menu" style="z-index:9999 !important;">',e+=r.options.sideBySide?'<div class="row"><div class="col-sm-6 datepicker">'+B.template+'</div><div class="col-sm-6 timepicker">'+E.getTemplate()+"</div></div>":'<ul class="list-unstyled"><li'+(r.options.collapse?' class="collapse in"':"")+'><div class="datepicker">'+B.template+'</div></li><li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="'+r.options.icons.time+'"></span></a></li><li'+(r.options.collapse?' class="collapse"':"")+'><div class="timepicker">'+E.getTemplate()+"</div></li></ul>",e+="</div>"}return r.options.pickTime?'<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="timepicker">'+E.getTemplate()+"</div></div>":'<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="datepicker">'+B.template+"</div></div>"},B={modes:[{clsName:"days",navFnc:"month",navStep:1},{clsName:"months",navFnc:"year",navStep:1},{clsName:"years",navFnc:"year",navStep:10}],headTemplate:'<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>'},E={hourTemplate:'<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"></span>',minuteTemplate:'<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',secondTemplate:'<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"></span>'}
B.template='<div class="datepicker-days"><table class="table-condensed">'+B.headTemplate+'<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">'+B.headTemplate+B.contTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+B.headTemplate+B.contTemplate+"</table></div>",E.getTemplate=function(){return'<div class="timepicker-picker"><table class="table-condensed"><tr><td><a href="#" class="btn" data-action="incrementHours"><span class="'+r.options.icons.up+'"></span></a></td><td class="separator"></td><td>'+(r.options.useMinutes?'<a href="#" class="btn" data-action="incrementMinutes"><span class="'+r.options.icons.up+'"></span></a>':"")+"</td>"+(r.options.useSeconds?'<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="'+r.options.icons.up+'"></span></a></td>':"")+(r.use24hours?"":'<td class="separator"></td>')+"</tr><tr><td>"+E.hourTemplate+'</td> <td class="separator">:</td><td>'+(r.options.useMinutes?E.minuteTemplate:'<span class="timepicker-minute">00</span>')+"</td> "+(r.options.useSeconds?'<td class="separator">:</td><td>'+E.secondTemplate+"</td>":"")+(r.use24hours?"":'<td class="separator"></td><td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>')+'</tr><tr><td><a href="#" class="btn" data-action="decrementHours"><span class="'+r.options.icons.down+'"></span></a></td><td class="separator"></td><td>'+(r.options.useMinutes?'<a href="#" class="btn" data-action="decrementMinutes"><span class="'+r.options.icons.down+'"></span></a>':"")+"</td>"+(r.options.useSeconds?'<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="'+r.options.icons.down+'"></span></a></td>':"")+(r.use24hours?"":'<td class="separator"></td>')+'</tr></table></div><div class="timepicker-hours" data-action="selectHour"><table class="table-condensed"></table></div><div class="timepicker-minutes" data-action="selectMinute"><table class="table-condensed"></table></div>'+(r.options.useSeconds?'<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>':"")},r.destroy=function(){I(),H(),r.widget.remove(),r.element.removeData("DateTimePicker"),r.component&&r.component.removeData("DateTimePicker")},r.show=function(e){if(r.options.useCurrent&&""==p().val())if(1!==r.options.minuteStepping){var t=o(),i=r.options.minuteStepping
t.minutes(Math.round(t.minutes()/i)*i%60).seconds(0),r.setValue(t.format(r.format))}else r.setValue(o().format(r.format))
r.widget.show(),r.height=r.component?r.component.outerHeight():r.element.outerHeight(),m(),r.element.trigger({type:"dp.show",date:o(r.date)}),q(),e&&T(e)},r.disable=function(){var e=r.element.find("input")
e.prop("disabled")||(e.prop("disabled",!0),I())},r.enable=function(){var e=r.element.find("input")
e.prop("disabled")&&(e.prop("disabled",!1),V())},r.hide=function(t){if(!t||!e(t.target).is(r.element.attr("id"))){var i,a,n=r.widget.find(".collapse")
for(i=0;i<n.length;i++)if(a=n.eq(i).data("collapse"),a&&a.date-transitioning)return
r.widget.hide(),r.viewMode=r.startViewMode,P(),r.element.trigger({type:"dp.hide",date:o(r.date)}),H()}},r.setValue=function(e){o.lang(r.options.language),e?r.unset=!1:(r.unset=!0,O()),o.isMoment(e)||(e=o(e,r.format)),e.isValid()?(r.date=e,O(),r.viewDate=o({y:r.date.year(),M:r.date.month()}),v(),D()):f(e)},r.getDate=function(){return r.unset?null:r.date},r.setDate=function(e){var t=o(r.date)
r.setValue(e?e:null),u(t,"function")},r.setDisabledDates=function(e){r.options.disabledDates=j(e),r.viewDate&&h()},r.setEnabledDates=function(e){r.options.enabledDates=j(e),r.viewDate&&h()},r.setMaxDate=function(e){void 0!=e&&(r.options.maxDate=o(e),r.viewDate&&h())},r.setMinDate=function(e){void 0!=e&&(r.options.minDate=o(e),r.viewDate&&h())},c()}
e.fn.datetimepicker=function(t){return this.each(function(){var i=e(this),a=i.data("DateTimePicker")
a||i.data("DateTimePicker",new n(this,t))})}});

// moment.js language configuration
// language : danish (da)
// author : Ulrik Nielsen : https://github.com/mrbase

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory(window.moment); // Browser global
    }
}(function (moment) {
    return moment.lang('da', {
        months : "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
        monthsShort : "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays : "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort : "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin : "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat : {
            LT : "HH:mm",
            L : "DD/MM/YYYY",
            LL : "D MMMM YYYY",
            LLL : "D MMMM YYYY LT",
            LLLL : "dddd D. MMMM, YYYY LT"
        },
        calendar : {
            sameDay : '[I dag kl.] LT',
            nextDay : '[I morgen kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[I går kl.] LT',
            lastWeek : '[sidste] dddd [kl] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : "om %s",
            past : "%s siden",
            s : "få sekunder",
            m : "et minut",
            mm : "%d minutter",
            h : "en time",
            hh : "%d timer",
            d : "en dag",
            dd : "%d dage",
            M : "en måned",
            MM : "%d måneder",
            y : "et år",
            yy : "%d år"
        },
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));


    (function() {
      var triggerBttn = document.getElementById( 'trigger-overlay' ),
        overlay = document.querySelector( 'div.overlay' ),
        closeBttn = overlay.querySelector( 'button.overlay-close' );
        transEndEventNames = {
          'WebkitTransition': 'webkitTransitionEnd',
          'MozTransition': 'transitionend',
          'OTransition': 'oTransitionEnd',
          'msTransition': 'MSTransitionEnd',
          'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        support = { transitions : Modernizr.csstransitions };

      function toggleOverlay() {
        if( classie.has( overlay, 'open' ) ) {
          classie.remove( overlay, 'open' );
          classie.add( overlay, 'close' );
          var onEndTransitionFn = function( ev ) {
            if( support.transitions ) {
              if( ev.propertyName !== 'visibility' ) return;
              this.removeEventListener( transEndEventName, onEndTransitionFn );
            }
            classie.remove( overlay, 'close' );
          };
          if( support.transitions ) {
            overlay.addEventListener( transEndEventName, onEndTransitionFn );
          }
          else {
            onEndTransitionFn();
          }
        }
        else if( !classie.has( overlay, 'close' ) ) {
          classie.add( overlay, 'open' );
        }
      }

      triggerBttn.addEventListener( 'click', toggleOverlay );
      closeBttn.addEventListener( 'click', toggleOverlay );
    })();

    var group = $('#fadeInGroup');

    group.hide();
    var radios = $('input:radio');
    radios.change(function() {
      var value = $(this).val();
      $('#choice').html(value);
      group.fadeIn(2000);
    });

    $(function () {
      $('#timePicker').datetimepicker({
              pickDate: true,                 //en/disables the date picker
              pickTime: true,                 //en/disables the time picker
              useCurrent: false,               //when true, picker will set the value to the current date/time
              useMinutes: false,               //en/disables the minutes picker
              useSeconds: false,
              showToday: true,
              language: 'da',
              icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down",

              }
            });
    });

    $("#tryitForm").submit(function(e) {
      e.preventDefault();

        $('.form-group').removeClass('has-error'); // remove the error class
        $('.help-block').remove(); // remove the error text


        var url = "/orders/create"; // the script where you handle the form input.
        var form = $('#tryitForm');
        var info = $('#infoBox');

        $('#loadingImage').show();
        $(":submit").attr("disabled", true);


        $.ajax({
         type: "POST",
         dataType: 'json',
         url: url,
               data: form.serialize(), // serializes the form's elements.
               success: function(data) {
                $('#loadingImage').hide();

                $(":submit").attr("disabled", false);

                if (!data.success) {
                  if (data.error.activity_title) {
                        $('#activityGroup').addClass('has-error'); // add the error class to show red input
                        $('#activityGroup').append('<div class="help-block">' + data.error.activity_title + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.date) {
                        $('#dateGroup').addClass('has-error'); // add the error class to show red input
                        $('#dateGroup').append('<div class="help-block">' + data.error.date + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.firstName) {
                        $('#fnameGroup').addClass('has-error'); // add the error class to show red input
                        $('#fnameGroup').append('<div class="help-block">' + data.error.firstName + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.lastName) {
                        $('#lnameGroup').addClass('has-error'); // add the error class to show red input
                        $('#lnameGroup').append('<div class="help-block">' + data.error.lastName + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.email) {
                        $('#emailGroup').addClass('has-error'); // add the error class to show red input
                        $('#emailGroup').append('<div class="help-block">' + data.error.email + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.streetName) {
                        $('#streetGroup').addClass('has-error'); // add the error class to show red input
                        $('#streetGroup').append('<div class="help-block">' + data.error.streetName + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.zip) {
                        $('#zipGroup').addClass('has-error'); // add the error class to show red input
                        $('#zipGroup').append('<div class="help-block">' + data.error.zip + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.city) {
                        $('#cityGroup').addClass('has-error'); // add the error class to show red input
                        $('#cityGroup').append('<div class="help-block">' + data.error.city + '</div>'); // add the actual error message under our input
                      }
                      if (data.error.participants) {
                        $('#participantsGroup').addClass('has-error'); // add the error class to show red input
                        $('#participantsGroup').append('<div class="help-block">' + data.error.participants + '</div>'); // add the actual error message under our input
                      }
                    } else {
                      form.addClass('form-after-submit').html("<h1><i class='fa fa-check-circle' style='color: #37BC9B; font-size: 70px;'></i><br>Tak for din bestilling.</h1><p class='lead'>Vi vender tilbage indenfor 24 timer, hvis du har yderligere spørgsmål er du velkommen til at <a href='#'>kontakte</a> os.</p>");
                      $('form-after-submit').fadeIn("slow");
                      form.scrollTo();
                    }

                  },
                  error: function(){}
                });
  });

    /*!
 * Jasny Bootstrap v3.1.0 (http://jasny.github.com/bootstrap)
 * Copyright 2011-2014 Arnold Daniels.
 * Licensed under Apache-2.0 (https://github.com/jasny/bootstrap/blob/master/LICENSE)
 */

 +function(a){"use strict";var b=window.navigator.appName=="Microsoft Internet Explorer",c=function(b,c){this.$element=a(b),this.$input=this.$element.find(":file");if(this.$input.length===0)return;this.name=this.$input.attr("name")||c.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),this.$hidden.length===0&&(this.$hidden=a('<input type="hidden">').insertBefore(this.$input)),this.$preview=this.$element.find(".fileinput-preview");var d=this.$preview.css("height");this.$preview.css("display")!=="inline"&&d!=="0px"&&d!=="none"&&this.$preview.css("line-height",d),this.original={exists:this.$element.hasClass("fileinput-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.listen()};c.prototype.listen=function(){this.$input.on("change.bs.fileinput",a.proxy(this.change,this)),a(this.$input[0].form).on("reset.bs.fileinput",a.proxy(this.reset,this)),this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput",a.proxy(this.trigger,this)),this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput",a.proxy(this.clear,this))},c.prototype.change=function(b){var c=b.target.files===undefined?b.target&&b.target.value?[{name:b.target.value.replace(/^.+\\/,"")}]:[]:b.target.files;b.stopPropagation();if(c.length===0){this.clear();return}this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);var d=c[0];if(this.$preview.length>0&&(typeof d.type!="undefined"?d.type.match(/^image\/(gif|png|jpeg)$/):d.name.match(/\.(gif|png|jpe?g)$/i))&&typeof FileReader!="undefined"){var e=new FileReader,f=this.$preview,g=this.$element;e.onload=function(b){var e=a("<img>");e[0].src=b.target.result,c[0].result=b.target.result,g.find(".fileinput-filename").text(d.name),f.css("max-height")!="none"&&e.css("max-height",parseInt(f.css("max-height"),10)-parseInt(f.css("padding-top"),10)-parseInt(f.css("padding-bottom"),10)-parseInt(f.css("border-top"),10)-parseInt(f.css("border-bottom"),10)),f.html(e),g.addClass("fileinput-exists").removeClass("fileinput-new"),g.trigger("change.bs.fileinput",c)},e.readAsDataURL(d)}else this.$element.find(".fileinput-filename").text(d.name),this.$preview.text(d.name),this.$element.addClass("fileinput-exists").removeClass("fileinput-new"),this.$element.trigger("change.bs.fileinput")},c.prototype.clear=function(a){a&&a.preventDefault(),this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name","");if(b){var c=this.$input.clone(!0);this.$input.after(c),this.$input.remove(),this.$input=c}else this.$input.val("");this.$preview.html(""),this.$element.find(".fileinput-filename").text(""),this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),a!==undefined&&(this.$input.trigger("change"),this.$element.trigger("clear.bs.fileinput"))},c.prototype.reset=function(){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.$element.find(".fileinput-filename").text(""),this.original.exists?this.$element.addClass("fileinput-exists").removeClass("fileinput-new"):this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),this.$element.trigger("reset.bs.fileinput")},c.prototype.trigger=function(a){this.$input.trigger("click"),a.preventDefault()};var d=a.fn.fileinput;a.fn.fileinput=function(b){return this.each(function(){var d=a(this),e=d.data("bs.fileinput");e||d.data("bs.fileinput",e=new c(this,b)),typeof b=="string"&&e[b]()})},a.fn.fileinput.Constructor=c,a.fn.fileinput.noConflict=function(){return a.fn.fileinput=d,this},a(document).on("click.fileinput.data-api",'[data-provides="fileinput"]',function(b){var c=a(this);if(c.data("bs.fileinput"))return;c.fileinput(c.data());var d=a(b.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');d.length>0&&(b.preventDefault(),d.trigger("click.bs.fileinput"))})}(window.jQuery)

 /**
  * @name Owl Carousel - code name Phenix
  * @author Bartosz Wojciechowski
  * @release 2014
  * Licensed under MIT
  *
  * @version 2.0.0-beta.1.9
  * @versionNotes Not compatibile with Owl Carousel <2.0.0
  */

 /*

 {0,0}
  )_)
  ""

 To do:

 * Lazy Load Icon
 * prevent animationend bubling
 * itemsScaleUp
 * Test Zepto

 Callback events list:

 onInitBefore
 onInitAfter
 onResponsiveBefore
 onResponsiveAfter
 onTransitionStart
 onTransitionEnd
 onTouchStart
 onTouchEnd
 onChangeState
 onLazyLoaded
 onVideoPlay
 onVideoStop

 Custom events list:

 next.owl
 prev.owl
 goTo.owl
 jumpTo.owl
 addItem.owl
 removeItem.owl
 refresh.owl
 play.owl
 stop.owl
 stopVideo.owl

 */


 ;(function ( $, window, document, undefined ) {

   var defaults = {
     items:				3,
     loop:				false,
     center:				false,

     mouseDrag:			true,
     touchDrag:			true,
     pullDrag: 			true,
     freeDrag:			false,

     margin:				0,
     stagePadding:		0,

     merge:				false,
     mergeFit:			true,
     autoWidth:			false,
     autoHeight:			false,

     startPosition:		0,
     URLhashListener:	false,

     nav: 				false,
     navRewind:			true,
     navText: 			['prev','next'],
     slideBy:			1,
     dots: 				true,
     dotsEach:			false,
     dotData:			false,

     lazyLoad:			false,
     lazyContent:		false,

     autoplay:			false,
     autoplayTimeout:	5000,
     autoplayHoverPause:	false,

     smartSpeed:			250,
     fluidSpeed:			false,
     autoplaySpeed:		false,
     navSpeed:			false,
     dotsSpeed:			false,
     dragEndSpeed:		false,

     responsive: 		{},
     responsiveRefreshRate : 200,
     responsiveBaseElement: window,
     responsiveClass:	false,

     video:				false,
     videoHeight:		false,
     videoWidth:			false,

     animateOut:			false,
     animateIn:			false,

     fallbackEasing:		'swing',

     callbacks:			true,
     info: 				false,

     nestedItemSelector:	false,
     itemElement:		'div',
     stageElement:		'div',

     navContainer: 		false,
     dotsContainer: 		false,

     //Classes and Names
     themeClass: 		'owl-theme',
     baseClass:			'owl-carousel',
     itemClass:			'owl-item',
     centerClass:		'center',
     activeClass: 		'active',
     navContainerClass:	'owl-nav',
     navClass:			['owl-prev','owl-next'],
     controlsClass:		'owl-controls',
     dotClass: 			'owl-dot',
     dotsClass:			'owl-dots',
     autoHeightClass:	'owl-height'

   };

   // Reference to DOM elements
   // Those with $ sign are jQuery objects

   var dom = {
     el:			null,	// main element
     $el:		null,	// jQuery main element
     stage:		null,	// stage
     $stage:		null,	// jQuery stage
     oStage:		null,	// outer stage
     $oStage:	null,	// $ outer stage
     $items:		null,	// all items, clones and originals included
     $oItems:	null,	// original items
     $cItems:	null,	// cloned items only
     $cc:		null,
     $navPrev:	null,
     $navNext:	null,
     $page:		null,
     $nav:		null,
     $content:	null
   };

   /**
    * Variables
    * @since 2.0.0
    */

   // Only for development process

   // Widths

   var width = {
     el:			0,
     stage:		0,
     item:		0,
     prevWindow:	0,
     cloneLast:  0
   };

   // Numbers

   var num = {
     items:				0,
     oItems: 			0,
     cItems:				0,
     active:				0,
     merged:				[],
     nav:				[],
     allPages:			0
   };

   // Positions

   var pos = {
     start:		0,
     max:		0,
     maxValue:	0,
     prev:		0,
     current:	0,
     currentAbs:	0,
     currentPage:0,
     stage:		0,
     items:		[],
     lsCurrent:	0
   };

   // Drag/Touches

   var drag = {
     start:		0,
     startX:		0,
     startY:		0,
     current:	0,
     currentX:	0,
     currentY:	0,
     offsetX:	0,
     offsetY:	0,
     distance:	null,
     startTime:	0,
     endTime:	0,
     updatedX:	0,
     targetEl:	null
   };

   // Speeds

   var speed = {
     onDragEnd: 	300,
     nav:		300,
     css2speed:	0

   };

   // States

   var state = {
     isTouch:		false,
     isScrolling:	false,
     isSwiping:		false,
     direction:		false,
     inMotion:		false,
     autoplay:		false,
     lazyContent:	false
   };

   // Event functions references

   var e = {
     _onDragStart:	null,
     _onDragMove:	null,
     _onDragEnd:		null,
     _transitionEnd: null,
     _resizer:		null,
     _responsiveCall:null,
     _goToLoop:		null,
     _checkVisibile: null,
     _autoplay:		null,
     _pause:			null,
     _play:			null,
     _stop:			null
   };

   function Owl( element, options ) {

     // add basic Owl information to dom element

     element.owlCarousel = {
       'name':		'Owl Carousel',
       'author':	'Bartosz Wojciechowski',
       'version':	'2.0.0-beta.1.9',
       'released':	'14.05.2014'
     };

     // Attach variables to object
     // Only for development process

     this.options = 		$.extend( {}, defaults, options);
     this._options =		$.extend( {}, defaults, options);
     this.dom =			$.extend( {}, dom);
     this.width =		$.extend( {}, width);
     this.num =			$.extend( {}, num);
     this.pos =			$.extend( {}, pos);
     this.drag =			$.extend( {}, drag);
     this.speed =		$.extend( {}, speed);
     this.state =		$.extend( {}, state);
     this.e =			$.extend( {}, e);

     this.dom.el =		element;
     this.dom.$el =		$(element);
     this.init();
   }

   /**
    * init
    * @since 2.0.0
    */

   Owl.prototype.init = function(){

     this.fireCallback('onInitBefore');

     //Add base class
     if(!this.dom.$el.hasClass(this.options.baseClass)){
       this.dom.$el.addClass(this.options.baseClass);
     }

     //Add theme class
     if(!this.dom.$el.hasClass(this.options.themeClass)){
       this.dom.$el.addClass(this.options.themeClass);
     }

     //Add theme class
     if(this.options.rtl){
       this.dom.$el.addClass('owl-rtl');
     }

     // Check support
     this.browserSupport();

     // Sort responsive items in array
     this.sortOptions();

     // Update options.items on given size
     this.setResponsiveOptions();

     if(this.options.autoWidth && this.state.imagesLoaded !== true){
       var imgs = this.dom.$el.find('img');
       var nestedSelector = this.options.nestedItemSelector ? '.'+this.options.nestedItemSelector : undefined;
       var width = this.dom.$el.children(nestedSelector).width();

       if(imgs.length && width <= 0){
         this.preloadAutoWidthImages(imgs);
         return false;
       }
     }

     // Get and store window width
     // iOS safari likes to trigger unnecessary resize event
     this.width.prevWindow = this.windowWidth();

     // create stage object
     this.createStage();

     // Append local content
     this.fetchContent();

     // attach generic events
     this.eventsCall();

     // attach custom control events
     this.addCustomEvents();

     // attach generic events
     this.internalEvents();

     this.dom.$el.addClass('owl-loading');
     this.refresh(true);
     this.dom.$el.removeClass('owl-loading').addClass('owl-loaded');
     this.fireCallback('onInitAfter');
   };

   /**
    * sortOptions
    * @desc Sort responsive sizes
    * @since 2.0.0
    */

   Owl.prototype.sortOptions = function(){

     var resOpt = this.options.responsive;
     this.responsiveSorted = {};
     var keys = [],
     i, j, k;
     for (i in resOpt){
       keys.push(i);
     }

     keys = keys.sort(function (a, b) {return a - b;});

     for (j = 0; j < keys.length; j++){
       k = keys[j];
       this.responsiveSorted[k] = resOpt[k];
     }

   };

   /**
    * setResponsiveOptions
    * @since 2.0.0
    */

   Owl.prototype.setResponsiveOptions = function(){
     if(this.options.responsive === false){return false;}

     var width = this.windowWidth();
     var resOpt = this.options.responsive;
     var i,j,k, minWidth;

     // overwrite non resposnive options
     for(k in this._options){
       if(k !== 'responsive'){
         this.options[k] = this._options[k];
       }
     }

     // find responsive width
     for (i in this.responsiveSorted){
       if(i<= width){
         minWidth = i;
         // set responsive options
         for(j in this.responsiveSorted[minWidth]){
           this.options[j] = this.responsiveSorted[minWidth][j];
         }

       }
     }
     this.num.breakpoint = minWidth;

     // Responsive Class
     if(this.options.responsiveClass){
       this.dom.$el.attr('class',
         function(i, c){
         return c.replace(/\b owl-responsive-\S+/g, '');
       }).addClass('owl-responsive-'+minWidth);
     }


   };

   /**
    * optionsLogic
    * @desc Update option logic if necessery
    * @since 2.0.0
    */

   Owl.prototype.optionsLogic = function(){
     // Toggle Center class
     this.dom.$el.toggleClass('owl-center',this.options.center);

     // Scroll per - 'page' option will scroll per visible items number
     // You can set this to any other number below visible items.
     if(this.options.slideBy && this.options.slideBy === 'page'){
       this.options.slideBy = this.options.items;
     } else if(this.options.slideBy > this.options.items){
       this.options.slideBy = this.options.items;
     }

     // if items number is less than in body
     if(this.options.loop && this.num.oItems < this.options.items){
       this.options.loop = false;
     }

     if(this.num.oItems <= this.options.items && !this.options.center){
       this.options.navRewind = false;
     }

     if(this.options.autoWidth){
       this.options.stagePadding = false;
       this.options.dotsEach = 1;
       this.options.merge = false;
     }
     if(this.state.lazyContent){
       this.options.loop = false;
       this.options.merge = false;
       this.options.dots = false;
       this.options.freeDrag = false;
       this.options.lazyContent = true;
     }

     if((this.options.animateIn || this.options.animateOut) && this.options.items === 1 && this.support3d){
       this.state.animate = true;
     } else {this.state.animate = false;}

   };

   /**
    * createStage
    * @desc Create stage and Outer-stage elements
    * @since 2.0.0
    */

   Owl.prototype.createStage = function(){
     var oStage = document.createElement('div');
     var stage = document.createElement(this.options.stageElement);

     oStage.className = 'owl-stage-outer';
     stage.className = 'owl-stage';

     oStage.appendChild(stage);
     this.dom.el.appendChild(oStage);

     this.dom.oStage = oStage;
     this.dom.$oStage = $(oStage);
     this.dom.stage = stage;
     this.dom.$stage = $(stage);

     oStage = null;
     stage = null;
   };

   /**
    * createItem
    * @desc Create item container
    * @since 2.0.0
    */

   Owl.prototype.createItem = function(){
     var item = document.createElement(this.options.itemElement);
     item.className = this.options.itemClass;
     return item;
   };

   /**
    * fetchContent
    * @since 2.0.0
    */

   Owl.prototype.fetchContent = function(extContent){
     if(extContent){
       this.dom.$content = (extContent instanceof jQuery) ? extContent : $(extContent);
     }
     else if(this.options.nestedItemSelector){
       this.dom.$content= this.dom.$el.find('.'+this.options.nestedItemSelector).not('.owl-stage-outer');
     }
     else {
       this.dom.$content= this.dom.$el.children().not('.owl-stage-outer');
     }
     // content length
     this.num.oItems = this.dom.$content.length;

     // init Structure
     if(this.num.oItems !== 0){
       this.initStructure();
     }
   };


   /**
    * initStructure
    * @param [refresh] - if refresh and not lazyContent then dont create normal structure
    * @since 2.0.0
    */

   Owl.prototype.initStructure = function(){

     // lazyContent needs at least 3*items

     if(this.options.lazyContent && this.num.oItems >= this.options.items*3){
       this.state.lazyContent = true;
     } else {
       this.state.lazyContent = false;
     }

     if(this.state.lazyContent){

       // start position
       this.pos.currentAbs = this.options.items;

       //remove lazy content from DOM
       this.dom.$content.remove();

     } else {
       // create normal structure
       this.createNormalStructure();
     }
   };

   /**
    * createNormalStructure
    * @desc Create normal structure for small/mid weight content
    * @since 2.0.0
    */

   Owl.prototype.createNormalStructure = function(){
     for(var i = 0; i < this.num.oItems; i++){
       // fill 'owl-item' with content
       var item = this.fillItem(this.dom.$content,i);
       // append into stage
       this.dom.$stage.append(item);
     }
     this.dom.$content = null;
   };

   /**
    * createCustomStructure
    * @since 2.0.0
    */

   Owl.prototype.createCustomStructure = function(howManyItems){
     for(var i = 0; i < howManyItems; i++){
       var emptyItem = this.createItem();
       var item = $(emptyItem);

       this.setData(item,false);
       this.dom.$stage.append(item);
     }
   };

   /**
    * createLazyContentStructure
    * @desc Create lazyContent structure for large content and better mobile experience
    * @since 2.0.0
    */

   Owl.prototype.createLazyContentStructure = function(refresh){
     if(!this.state.lazyContent){return false;}

     // prevent recreate - to do
     if(refresh && this.dom.$stage.children().length === this.options.items*3){
       return false;
     }
     // remove items from stage
     this.dom.$stage.empty();

     // create custom structure
     this.createCustomStructure(3*this.options.items);
   };

   /**
    * fillItem
    * @desc Fill empty item container with provided content
    * @since 2.0.0
    * @param [content] - string/$dom - passed owl-item
    * @param [i] - index in jquery object
    * return $ new object
    */

   Owl.prototype.fillItem = function(content,i){
     var emptyItem = this.createItem();
     var c = content[i] || content;
     // set item data
     var traversed = this.traversContent(c);
     this.setData(emptyItem,false,traversed);
     return $(emptyItem).append(c);
   };

   /**
    * traversContent
    * @since 2.0.0
    * @param [c] - content
    * return object
    */

   Owl.prototype.traversContent = function(c){
     var $c = $(c), dotValue, hashValue;
     if(this.options.dotData){
       dotValue = $c.find('[data-dot]').andSelf().data('dot');
     }
     // update URL hash
     if(this.options.URLhashListener){
       hashValue = $c.find('[data-hash]').andSelf().data('hash');
     }
     return {
       dot : dotValue || false,
       hash : hashValue  || false
     };
   };


   /**
    * setData
    * @desc Set item jQuery Data
    * @since 2.0.0
    * @param [item] - dom - passed owl-item
    * @param [cloneObj] - $dom - passed clone item
    */


   Owl.prototype.setData = function(item,cloneObj,traversed){
     var dot,hash;
     if(traversed){
       dot = traversed.dot;
       hash = traversed.hash;
     }
     var itemData = {
       index:		false,
       indexAbs:	false,
       posLeft:	false,
       clone:		false,
       active:		false,
       loaded:		false,
       lazyLoad:	false,
       current:	false,
       width:		false,
       center:		false,
       page:		false,
       hasVideo:	false,
       playVideo:	false,
       dot:		dot,
       hash:		hash
     };

     // copy itemData to cloned item

     if(cloneObj){
       itemData = $.extend({}, itemData, cloneObj.data('owl-item'));
     }

     $(item).data('owl-item', itemData);
   };

   /**
    * updateLocalContent
    * @since 2.0.0
    */

   Owl.prototype.updateLocalContent = function(){
     this.dom.$oItems = this.dom.$stage.find('.'+this.options.itemClass).filter(function(){
       return $(this).data('owl-item').clone === false;
     });

     this.num.oItems = this.dom.$oItems.length;
     //update index on original items

     for(var k = 0; k<this.num.oItems; k++){
       var item = this.dom.$oItems.eq(k);
       item.data('owl-item').index = k;
     }
   };

   /**
    * checkVideoLinks
    * @desc Check if for any videos links
    * @since 2.0.0
    */

   Owl.prototype.checkVideoLinks = function(){
     if(!this.options.video){return false;}
     var videoEl,item;

     for(var i = 0; i<this.num.items; i++){

       item = this.dom.$items.eq(i);
       if(item.data('owl-item').hasVideo){
         continue;
       }

       videoEl = item.find('.owl-video');
       if(videoEl.length){
         this.state.hasVideos = true;
         this.dom.$items.eq(i).data('owl-item').hasVideo = true;
         videoEl.css('display','none');
         this.getVideoInfo(videoEl,item);
       }
     }
   };

   /**
    * getVideoInfo
    * @desc Get Video ID and Type (YouTube/Vimeo only)
    * @since 2.0.0
    */

   Owl.prototype.getVideoInfo = function(videoEl,item){

     var info, type, id,
       vimeoId = videoEl.data('vimeo-id'),
       youTubeId = videoEl.data('youtube-id'),
       width = videoEl.data('width') || this.options.videoWidth,
       height = videoEl.data('height') || this.options.videoHeight,
       url = videoEl.attr('href');

     if(vimeoId){
       type = 'vimeo';
       id = vimeoId;
     } else if(youTubeId){
       type = 'youtube';
       id = youTubeId;
     } else if(url){
       id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

       if (id[3].indexOf('youtu') > -1) {
         type = 'youtube';
       } else if (id[3].indexOf('vimeo') > -1) {
         type = 'vimeo';
       }
       id = id[6];
     } else {
       throw new Error('Missing video link.');
     }

     item.data('owl-item').videoType = type;
     item.data('owl-item').videoId = id;
     item.data('owl-item').videoWidth = width;
     item.data('owl-item').videoHeight = height;

     info = {
       type: type,
       id: id
     };

     // Check dimensions
     var dimensions = width && height ? 'style="width:'+width+'px;height:'+height+'px;"' : '';

     // wrap video content into owl-video-wrapper div
     videoEl.wrap('<div class="owl-video-wrapper"'+dimensions+'></div>');

     this.createVideoTn(videoEl,info);
   };

   /**
    * createVideoTn
    * @desc Create Video Thumbnail
    * @since 2.0.0
    */

   Owl.prototype.createVideoTn = function(videoEl,info){

     var tnLink,icon,height;
     var customTn = videoEl.find('img');
     var srcType = 'src';
     var lazyClass = '';
     var that = this;

     if(this.options.lazyLoad){
       srcType = 'data-src';
       lazyClass = 'owl-lazy';
     }

     // Custom thumbnail

     if(customTn.length){
       addThumbnail(customTn.attr(srcType));
       customTn.remove();
       return false;
     }

     function addThumbnail(tnPath){
       icon = '<div class="owl-video-play-icon"></div>';

       if(that.options.lazyLoad){
         tnLink = '<div class="owl-video-tn '+ lazyClass +'" '+ srcType +'="'+ tnPath +'"></div>';
       } else{
         tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + tnPath + ')"></div>';
       }
       videoEl.after(tnLink);
       videoEl.after(icon);
     }

     if(info.type === 'youtube'){
       var path = "http://img.youtube.com/vi/"+ info.id +"/hqdefault.jpg";
       addThumbnail(path);
     } else
     if(info.type === 'vimeo'){
       $.ajax({
         type:'GET',
         url: 'http://vimeo.com/api/v2/video/' + info.id + '.json',
         jsonp: 'callback',
         dataType: 'jsonp',
         success: function(data){
           var path = data[0].thumbnail_large;
           addThumbnail(path);
           if(that.options.loop){
             that.updateItemState();
           }
         }
       });
     }
   };

   /**
    * stopVideo
    * @since 2.0.0
    */

   Owl.prototype.stopVideo = function(){
     this.fireCallback('onVideoStop');
     var item = this.dom.$items.eq(this.state.videoPlayIndex);
     item.find('.owl-video-frame').remove();
     item.removeClass('owl-video-playing');
     this.state.videoPlay = false;
   };

   /**
    * playVideo
    * @since 2.0.0
    */

   Owl.prototype.playVideo = function(ev){
     this.fireCallback('onVideoPlay');

     if(this.state.videoPlay){
       this.stopVideo();
     }
     var videoLink,videoWrap,
       target = $(ev.target || ev.srcElement),
       item = target.closest('.'+this.options.itemClass);

     var videoType = item.data('owl-item').videoType,
       id = item.data('owl-item').videoId,
       width = item.data('owl-item').videoWidth || Math.floor(item.data('owl-item').width - this.options.margin),
       height = item.data('owl-item').videoHeight || this.dom.$stage.height();

     if(videoType === 'youtube'){
       videoLink = "<iframe width=\""+ width +"\" height=\""+ height +"\" src=\"http://www.youtube.com/embed/" + id + "?autoplay=1&v=" + id + "\" frameborder=\"0\" allowfullscreen></iframe>";
     } else if(videoType === 'vimeo'){
       videoLink = '<iframe src="http://player.vimeo.com/video/'+ id +'?autoplay=1" width="'+ width +'" height="'+ height +'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
     }

     item.addClass('owl-video-playing');
     this.state.videoPlay = true;
     this.state.videoPlayIndex = item.data('owl-item').indexAbs;

     videoWrap = $('<div style="height:'+ height +'px; width:'+ width +'px" class="owl-video-frame">' + videoLink + '</div>');
     target.after(videoWrap);
   };

   /**
    * loopClone
    * @desc Make a clones for infinity loop
    * @since 2.0.0
    */

   Owl.prototype.loopClone = function(){
     if(!this.options.loop || this.state.lazyContent || this.num.oItems < this.options.items){return false;}

     var firstClone,	lastClone, i,
       num	=		this.options.items,
       lastNum =	this.num.oItems-1;

     // if neighbour margin then add one more duplicat
     if(this.options.stagePadding && this.options.items === 1){
       num+=1;
     }
     this.num.cItems = num * 2;

     for(i = 0; i < num; i++){
       // Clone item
       var first =		this.dom.$oItems.eq(i).clone(true,true);
       var last =		this.dom.$oItems.eq(lastNum-i).clone(true,true);
       firstClone = 	$(first[0]).addClass('cloned');
       lastClone = 	$(last[0]).addClass('cloned');

       // set clone data
       // Somehow data has reference to same data id in cash

       this.setData(firstClone[0],first);
       this.setData(lastClone[0],last);

       firstClone.data('owl-item').clone = true;
       lastClone.data('owl-item').clone = true;

       this.dom.$stage.append(firstClone);
       this.dom.$stage.prepend(lastClone);

       firstClone = lastClone = null;
     }

     this.dom.$cItems = this.dom.$stage.find('.'+this.options.itemClass).filter(function(){
       return $(this).data('owl-item').clone === true;
     });
   };

   /**
    * reClone
    * @desc Update Cloned elements
    * @since 2.0.0
    */

   Owl.prototype.reClone = function(){
     // remove cloned items
     if(this.dom.$cItems !== null){ // && (this.num.oItems !== 0 && this.num.oItems <= this.options.items)){
       this.dom.$cItems.remove();
       this.dom.$cItems = null;
       this.num.cItems = 0;
     }

     if(!this.options.loop){
       return;
     }
     // generete new elements
     this.loopClone();
   };

   /**
    * calculate
    * @desc Update item index data
    * @since 2.0.0
    */

   Owl.prototype.calculate = function(){

     var i,j,k,dist,posLeft=0,fullWidth=0;

     // element width minus neighbour
     this.width.el = this.dom.$el.width() - (this.options.stagePadding*2);

     //to check
     this.width.view = this.dom.$el.width();

     // calculate width minus addition margins
     var elMinusMargin = this.width.el - (this.options.margin * (this.options.items === 1 ? 0 : this.options.items -1));

     // calculate element width and item width
     this.width.el =  	this.width.el + this.options.margin;
     this.width.item = 	((elMinusMargin / this.options.items) + this.options.margin).toFixed(3);

     this.dom.$items = 	this.dom.$stage.find('.owl-item');
     this.num.items = 	this.dom.$items.length;

     //change to autoWidths
     if(this.options.autoWidth){
       this.dom.$items.css('width','');
     }

     // Set grid array
     this.pos.items = 	[];
     this.num.merged = 	[];
     this.num.nav = 		[];

     // item distances
     if(this.options.rtl){
       dist = this.options.center ? -((this.width.el)/2) : 0;
     } else {
       dist = this.options.center ? (this.width.el)/2 : 0;
     }

     this.width.mergeStage = 0;

     // Calculate items positions
     for(i = 0; i<this.num.items; i++){

       // check merged items

       if(this.options.merge){
         var mergeNumber = this.dom.$items.eq(i).find('[data-merge]').attr('data-merge') || 1;
         if(this.options.mergeFit && mergeNumber > this.options.items){
           mergeNumber = this.options.items;
         }
         this.num.merged.push(parseInt(mergeNumber));
         this.width.mergeStage += this.width.item * this.num.merged[i];
       } else {
         this.num.merged.push(1);
       }

       // Array based on merged items used by dots and navigation
       if(this.options.loop){
         if(i>=this.num.cItems/2 && i<this.num.cItems/2+this.num.oItems){
           this.num.nav.push(this.num.merged[i]);
         }
       } else {
         this.num.nav.push(this.num.merged[i]);
       }

       var iWidth = this.width.item * this.num.merged[i];

       // autoWidth item size
       if(this.options.autoWidth){
         iWidth = this.dom.$items.eq(i).width() + this.options.margin;
         if(this.options.rtl){
           this.dom.$items[i].style.marginLeft = this.options.margin + 'px';
         } else {
           this.dom.$items[i].style.marginRight = this.options.margin + 'px';
         }

       }
       // push item position into array
       this.pos.items.push(dist);

       // update item data
       this.dom.$items.eq(i).data('owl-item').posLeft = posLeft;
       this.dom.$items.eq(i).data('owl-item').width = iWidth;

       // dist starts from middle of stage if center
       // posLeft always starts from 0
       if(this.options.rtl){
         dist += iWidth;
         posLeft += iWidth;
       } else{
         dist -= iWidth;
         posLeft -= iWidth;
       }

       fullWidth -= Math.abs(iWidth);

       // update position if center
       if(this.options.center){
         this.pos.items[i] = !this.options.rtl ? this.pos.items[i] - (iWidth/2) : this.pos.items[i] + (iWidth/2);
       }
     }

     if(this.options.autoWidth){
       this.width.stage = this.options.center ? Math.abs(fullWidth) : Math.abs(dist);
     } else {
       this.width.stage = Math.abs(fullWidth);
     }

     //update indexAbs on all items
     var allItems = this.num.oItems + this.num.cItems;

     for(j = 0; j< allItems; j++){
       this.dom.$items.eq(j).data('owl-item').indexAbs = j;
     }

     // Set Min and Max
     this.setMinMax();

     // Recalculate grid
     this.setSizes();
   };

   /**
    * setMinMax
    * @since 2.0.0
    */

   Owl.prototype.setMinMax = function(){

     // set Min
     var minimum = this.dom.$oItems.eq(0).data('owl-item').indexAbs;
     this.pos.min = 0;
     this.pos.minValue = this.pos.items[minimum];

     // set max position
     if(!this.options.loop){
       this.pos.max = this.num.oItems-1;
     }

     if(this.options.loop){
       this.pos.max = this.num.oItems+this.options.items;
     }

     if(!this.options.loop && !this.options.center){
       this.pos.max = this.num.oItems-this.options.items;
     }

     if(this.options.loop && this.options.center){
       this.pos.max = this.num.oItems+this.options.items;
     }

     //set max value
     this.pos.maxValue = this.pos.items[this.pos.max];

     //Max for autoWidth content
     if((!this.options.loop && !this.options.center && this.options.autoWidth) || (this.options.merge && !this.options.center) ){
       var revert = this.options.rtl ? 1 : -1;
       for (i = 0; i < this.pos.items.length; i++) {
         if( (this.pos.items[i] * revert) < this.width.stage-this.width.el ){
           this.pos.max = i+1;
         }
       }
       this.pos.maxValue = this.options.rtl ? this.width.stage-this.width.el : -(this.width.stage-this.width.el);
       this.pos.items[this.pos.max] = this.pos.maxValue;
     }

     // Set loop boundries
     if(this.options.center){
       this.pos.loop = this.pos.items[0]-this.pos.items[this.num.oItems];
     } else {
       this.pos.loop = -this.pos.items[this.num.oItems];
     }

     //if is less items
     if(this.num.oItems < this.options.items && !this.options.center){
       this.pos.max = 0;
       this.pos.maxValue = this.pos.items[0];
     }
   };

   /**
    * setSizes
    * @desc Set sizes on elements (from collectData function)
    * @since 2.0.0
    */

   Owl.prototype.setSizes = function(){

     // show neighbours
     if(this.options.stagePadding !== false){
       this.dom.oStage.style.paddingLeft = 	this.options.stagePadding + 'px';
       this.dom.oStage.style.paddingRight = 	this.options.stagePadding + 'px';
     }

     // CRAZY FIX!!! Doublecheck this!
     //if(this.width.stagePrev > this.width.stage){
     if(this.options.rtl){
       window.setTimeout(function(){
         this.dom.stage.style.width = this.width.stage + 'px';
       }.bind(this),0);
     } else{
       this.dom.stage.style.width = this.width.stage + 'px';
     }

     for(var i=0; i<this.num.items; i++){

       // Set items width
       if(!this.options.autoWidth){
         this.dom.$items[i].style.width = this.width.item - (this.options.margin) + 'px';
       }
       // add margin
       if(this.options.rtl){
         this.dom.$items[i].style.marginLeft = this.options.margin + 'px';
       } else {
         this.dom.$items[i].style.marginRight = this.options.margin + 'px';
       }

       if(this.num.merged[i] !== 1 && !this.options.autoWidth){
         this.dom.$items[i].style.width = (this.width.item * this.num.merged[i]) - (this.options.margin) + 'px';
       }
     }

     // save prev stage size
     this.width.stagePrev = this.width.stage;
   };

   /**
    * responsive
    * @desc Responsive function update all data by calling refresh()
    * @since 2.0.0
    */

   Owl.prototype.responsive = function(){

     if(!this.num.oItems){return false;}
     // If El width hasnt change then stop responsive
     var elChanged = this.isElWidthChanged();
     if(!elChanged){return false;}

     // if Vimeo Fullscreen mode
     var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
     if(fullscreenElement){
       if($(fullscreenElement.parentNode).hasClass('owl-video-frame')){
         this.setSpeed(0);
         this.state.isFullScreen = true;
       }
     }

     if(fullscreenElement && this.state.isFullScreen && this.state.videoPlay){
       return false;
     }

     // Comming back from fullscreen
     if(this.state.isFullScreen){
       this.state.isFullScreen = false;
       return false;
     }

     // check full screen mode and window orientation
     if (this.state.videoPlay) {
       if(this.state.orientation !== window.orientation){
         this.state.orientation = window.orientation;
         return false;
       }
     }

     this.fireCallback('onResponsiveBefore');
     this.state.responsive = true;
     this.refresh();
     this.state.responsive = false;
     this.fireCallback('onResponsiveAfter');
   };

   /**
    * refresh
    * @desc Refresh method is basically collection of functions that are responsible for Owl responsive functionality
    * @since 2.0.0
    */

   Owl.prototype.refresh = function(init){

     if(this.state.videoPlay){
       this.stopVideo();
     }

     // Update Options for given width
     this.setResponsiveOptions();

     //set lazy structure
     this.createLazyContentStructure(true);

     // update info about local content
     this.updateLocalContent();

     // udpate options
     this.optionsLogic();

     // if no items then stop
     if(this.num.oItems === 0){
       if(this.dom.$page !== null){
         this.dom.$page.hide();
       }
       return false;
     }

     // Hide and Show methods helps here to set a proper widths.
     // This prevents Scrollbar to be calculated in stage width
     this.dom.$stage.addClass('owl-refresh');

     // Remove clones and generate new ones
     this.reClone();

     // calculate
     this.calculate();

     //aaaand show.
     this.dom.$stage.removeClass('owl-refresh');

     // to do
     // lazyContent last position on refresh
     if(this.state.lazyContent){
       this.pos.currentAbs = this.options.items;
     }

     this.initPosition(init);

     // jump to last position
     if(!this.state.lazyContent && !init){
       this.jumpTo(this.pos.current,false); // fix that
     }

     //Check for videos ( YouTube and Vimeo currently supported)
     this.checkVideoLinks();

     this.updateItemState();

     // Update controls
     this.rebuildDots();

     this.updateControls();

     // update drag events
     //this.updateEvents();

     // update autoplay
     this.autoplay();

     this.autoHeight();

     this.state.orientation = window.orientation;

     this.watchVisibility();
   };

   /**
    * updateItemState
    * @desc Update information about current state of items (visibile, hidden, active, etc.)
    * @since 2.0.0
    */

   Owl.prototype.updateItemState = function(update){

     if(this.state.lazyContent){
       this.updateLazyContent(update);
     }

     if(this.options.center){
       this.dom.$items.eq(this.pos.currentAbs)
       .addClass(this.options.centerClass)
       .data('owl-item').center = true;
     }
     if(this.options.lazyLoad){
       this.lazyLoad();
     }
   };

   /**
    * updateActiveItems
    * @since 2.0.0
    */


   Owl.prototype.updateActiveItems = function(){
     var i,j,item,ipos,iwidth,wpos,stage,outsideView,foundCurrent;
     // clear states
     for(i = 0; i<this.num.items; i++){
       this.dom.$items.eq(i).data('owl-item').active = false;
       this.dom.$items.eq(i).data('owl-item').current = false;
       this.dom.$items.eq(i).removeClass(this.options.activeClass).removeClass(this.options.centerClass);
     }

     this.num.active = 0;
     stageX = this.pos.stage;
     view = this.options.rtl ? this.width.view : -this.width.view;

     for(j = 0; j<this.num.items; j++){

         item = this.dom.$items.eq(j);
         ipos = item.data('owl-item').posLeft;
         iwidth = item.data('owl-item').width;
         outsideView = this.options.rtl ? ipos + iwidth : ipos - iwidth;

       if( (this.op(ipos,'<=',stageX) && (this.op(ipos,'>',stageX + view))) ||
         (this.op(outsideView,'<',stageX) && this.op(outsideView,'>',stageX + view))
         ){

         this.num.active++;

         if(this.options.freeDrag && !foundCurrent){
           foundCurrent = true;
           this.pos.current = item.data('owl-item').index;
           this.pos.currentAbs = item.data('owl-item').indexAbs;
         }

         item.data('owl-item').active = true;
         item.data('owl-item').current = true;
         item.addClass(this.options.activeClass);

         if(!this.options.lazyLoad){
           item.data('owl-item').loaded = true;
         }
         if(this.options.loop && (this.options.lazyLoad || this.options.center)){
           this.updateClonedItemsState(item.data('owl-item').index);
         }
       }
     }
   };

   /**
    * updateClonedItemsState
    * @desc Set current state on sibilings items for lazyLoad and center
    * @since 2.0.0
    */

   Owl.prototype.updateClonedItemsState = function(activeIndex){

     //find cloned center
     var center, $el,i;
     if(this.options.center){
       center = this.dom.$items.eq(this.pos.currentAbs).data('owl-item').index;
     }

     for(i = 0; i<this.num.items; i++){
       $el = this.dom.$items.eq(i);
       if( $el.data('owl-item').index === activeIndex ){
         $el.data('owl-item').current = true;
         if($el.data('owl-item').index === center ){
           $el.addClass(this.options.centerClass);
         }
       }
     }
   };

   /**
    * updateLazyPosition
    * @desc Set current state on sibilings items for lazyLoad and center
    * @since 2.0.0
    */

   Owl.prototype.updateLazyPosition = function(){
     var jumpTo = this.pos.goToLazyContent || 0;

     this.pos.lcMovedBy = Math.abs(this.options.items - this.pos.currentAbs);

     if(this.options.items < this.pos.currentAbs ){
       this.pos.lcCurrent += this.pos.currentAbs - this.options.items;
       this.state.lcDirection = 'right';
     } else if(this.options.items > this.pos.currentAbs ){
       this.pos.lcCurrent -= this.options.items - this.pos.currentAbs;
       this.state.lcDirection = 'left';
     }

     this.pos.lcCurrent = jumpTo !== 0 ? jumpTo : this.pos.lcCurrent;

     if(this.pos.lcCurrent >= this.dom.$content.length){
       this.pos.lcCurrent = this.pos.lcCurrent-this.dom.$content.length;
     } else if(this.pos.lcCurrent < -this.dom.$content.length+1){
       this.pos.lcCurrent = this.pos.lcCurrent+this.dom.$content.length;
     }

     if(this.options.startPosition>0){
       this.pos.lcCurrent = this.options.startPosition;
       this._options.startPosition = this.options.startPosition = 0;
     }

     this.pos.lcCurrentAbs = this.pos.lcCurrent < 0 ? this.pos.lcCurrent+this.dom.$content.length : this.pos.lcCurrent;

   };

   /**
    * updateLazyContent
    * @param [update] - boolean - update call by content manipulations
    * @since 2.0.0
    */

   Owl.prototype.updateLazyContent = function(update){

     if(this.pos.lcCurrent === undefined){
       this.pos.lcCurrent = 0;
       this.pos.current = this.pos.currentAbs = this.options.items;
     }


     if(!update){
       this.updateLazyPosition();
     }
     var i,j,item,contentPos,content,freshItem,freshData;

     this.pos.current = this.pos.currentAbs = this.options.items;
     this.setSpeed(0);

     if(this.state.lcDirection !== false){
       for(i = 0; i<this.pos.lcMovedBy; i++){

         if(this.state.lcDirection === 'right'){
           item = this.dom.$stage.find('.owl-item').eq(0);
           item.appendTo(this.dom.$stage);
         }
         if(this.state.lcDirection === 'left'){
           item = this.dom.$stage.find('.owl-item').eq(-1);
           item.prependTo(this.dom.$stage);
         }
         item.data('owl-item').active = false;
       }
     }

     // recollect
     this.dom.$items = this.dom.$stage.find('.owl-item');

     for(j = 0; j<this.num.items; j++){

       // to do
       //this.dom.$items.eq(j).removeClass(this.options.centerClass);

       // get Content
       contentPos = this.pos.lcCurrent + j - this.options.items;// + this.options.startPosition;

       if(contentPos >= this.dom.$content.length){
         contentPos = contentPos - this.dom.$content.length;
       }
       if(contentPos < -this.dom.$content.length){
         contentPos = contentPos + this.dom.$content.length;
       }

       content = this.dom.$content.eq(contentPos);
       freshItem = this.dom.$items.eq(j);
       freshData = freshItem.data('owl-item');

       if(freshData.active === false || this.pos.goToLazyContent !== 0 || update === true){

         freshItem.empty();
         freshItem.append(content.clone(true,true));
         freshData.active = true;
         freshData.current = true;
         if(!this.options.lazyLoad){
           freshData.loaded = true;
         } else {
           freshData.loaded = false;
         }
       }
     }
     this.animStage(this.pos.items[this.options.items]);
     this.pos.goToLazyContent = 0;

   };

   /**
    * eventsCall
    * @desc Save internal event references and add event based functions like transitionEnd,responsive etc.
    * @since 2.0.0
    */

   Owl.prototype.eventsCall = function(){
     // Save events references
     this.e._onDragStart =	function(e){this.onDragStart(e);		}.bind(this);
     this.e._onDragMove =	function(e){this.onDragMove(e);			}.bind(this);
     this.e._onDragEnd =		function(e){this.onDragEnd(e);			}.bind(this);
     this.e._transitionEnd =	function(e){this.transitionEnd(e);		}.bind(this);
     this.e._resizer =		function(){this.responsiveTimer();		}.bind(this);
     this.e._responsiveCall =function(){this.responsive();			}.bind(this);
     this.e._preventClick =	function(e){this.preventClick(e);		}.bind(this);
     this.e._goToHash =		function(){this.goToHash();				}.bind(this);
     this.e._goToPage =		function(e){this.goToPage(e);			}.bind(this);
     this.e._ap = 			function(){this.autoplay();				}.bind(this);
     this.e._play = 			function(){this.play();					}.bind(this);
     this.e._pause = 		function(){this.pause();				}.bind(this);
     this.e._playVideo = 	function(e){this.playVideo(e);			}.bind(this);

     this.e._navNext = function(e){
       if($(e.target).hasClass('disabled')){return false;}
       e.preventDefault();
       this.next();
     }.bind(this);

     this.e._navPrev = function(e){
       if($(e.target).hasClass('disabled')){return false;}
       e.preventDefault();
       this.prev();
     }.bind(this);

   };

   /**
    * responsiveTimer
    * @desc Check Window resize event with 200ms delay / this.options.responsiveRefreshRate
    * @since 2.0.0
    */

   Owl.prototype.responsiveTimer = function(){
     if(this.windowWidth() === this.width.prevWindow){
       return false;
     }
     window.clearInterval(this.e._autoplay);
     window.clearTimeout(this.resizeTimer);
     this.resizeTimer = window.setTimeout(this.e._responsiveCall, this.options.responsiveRefreshRate);
     this.width.prevWindow = this.windowWidth();
   };

   /**
    * internalEvents
    * @desc Checks for touch/mouse drag options and add necessery event handlers.
    * @since 2.0.0
    */

   Owl.prototype.internalEvents = function(){
     var isTouch = isTouchSupport();
     var isTouchIE = isTouchSupportIE();

     if(isTouch && !isTouchIE){
       this.dragType = ['touchstart','touchmove','touchend','touchcancel'];
     } else if(isTouch && isTouchIE){
       this.dragType = ['MSPointerDown','MSPointerMove','MSPointerUp','MSPointerCancel'];
     } else {
       this.dragType = ['mousedown','mousemove','mouseup'];
     }

     if( (isTouch || isTouchIE) && this.options.touchDrag){
       //touch cancel event
       this.on(document, this.dragType[3], this.e._onDragEnd);

     } else {
       // firefox startdrag fix - addeventlistener doesnt work here :/
       this.dom.$stage.on('dragstart', function() {return false;});

       if(this.options.mouseDrag){
         //disable text select
         this.dom.stage.onselectstart = function(){return false;};
       } else {
         // enable text select
         this.dom.$el.addClass('owl-text-select-on');
       }
     }

     // Video Play Button event delegation
     this.dom.$stage.on(this.dragType[2], '.owl-video-play-icon', this.e._playVideo);

     if(this.options.URLhashListener){
       this.on(window, 'hashchange', this.e._goToHash, false);
     }

     if(this.options.autoplayHoverPause){
       var that = this;
       this.dom.$stage.on('mouseover', this.e._pause );
       this.dom.$stage.on('mouseleave', this.e._ap );
     }

     // Catch transitionEnd event
     if(this.transitionEndVendor){
       this.on(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd, false);
     }

     // Responsive
     if(this.options.responsive !== false){
       this.on(window, 'resize', this.e._resizer, false);
     }

     this.updateEvents();
   };

   /**
    * updateEvents
    * @since 2.0.0
    */

   Owl.prototype.updateEvents = function(){

     if(this.options.touchDrag && (this.dragType[0] === 'touchstart' || this.dragType[0] === 'MSPointerDown')){
       this.on(this.dom.stage, this.dragType[0], this.e._onDragStart,false);
     } else if(this.options.mouseDrag && this.dragType[0] === 'mousedown'){
       this.on(this.dom.stage, this.dragType[0], this.e._onDragStart,false);

     } else {
       this.off(this.dom.stage, this.dragType[0], this.e._onDragStart);
     }
   };

   /**
    * onDragStart
    * @desc touchstart/mousedown event
    * @since 2.0.0
    */

   Owl.prototype.onDragStart = function(event){
     var ev = event.originalEvent || event || window.event;
     // prevent right click
     if (ev.which === 3) {
       return false;
     }

     if(this.dragType[0] === 'mousedown'){
       this.dom.$stage.addClass('owl-grab');
     }

     this.fireCallback('onTouchStart');
     this.drag.startTime = new Date().getTime();
     this.setSpeed(0);
     this.state.isTouch = true;
     this.state.isScrolling = false;
     this.state.isSwiping = false;
     this.drag.distance = 0;

     // if is 'touchstart'
     var isTouchEvent = ev.type === 'touchstart';
     var pageX = isTouchEvent ? event.targetTouches[0].pageX : (ev.pageX || ev.clientX);
     var pageY = isTouchEvent ? event.targetTouches[0].pageY : (ev.pageY || ev.clientY);

     //get stage position left
     this.drag.offsetX = this.dom.$stage.position().left - this.options.stagePadding;
     this.drag.offsetY = this.dom.$stage.position().top;

     if(this.options.rtl){
       this.drag.offsetX = this.dom.$stage.position().left + this.width.stage - this.width.el + this.options.margin;
     }

     //catch position // ie to fix
     if(this.state.inMotion && this.support3d){
       var animatedPos = this.getTransformProperty();
       this.drag.offsetX = animatedPos;
       this.animStage(animatedPos);
     } else if(this.state.inMotion && !this.support3d ){
       this.state.inMotion = false;
       return false;
     }

     this.drag.startX = pageX - this.drag.offsetX;
     this.drag.startY = pageY - this.drag.offsetY;

     this.drag.start = pageX - this.drag.startX;
     this.drag.targetEl = ev.target || ev.srcElement;
     this.drag.updatedX = this.drag.start;

     // to do/check
     //prevent links and images dragging;
     //this.drag.targetEl.draggable = false;

     this.on(document, this.dragType[1], this.e._onDragMove, false);
     this.on(document, this.dragType[2], this.e._onDragEnd, false);
   };

   /**
    * onDragMove
    * @desc touchmove/mousemove event
    * @since 2.0.0
    */

   Owl.prototype.onDragMove = function(event){
     if (!this.state.isTouch){
       return;
     }

     if (this.state.isScrolling){
       return;
     }

     var neighbourItemWidth=0;
     var ev = event.originalEvent || event || window.event;

     // if is 'touchstart'
     var isTouchEvent = ev.type == 'touchmove';
     var pageX = isTouchEvent ? ev.targetTouches[0].pageX : (ev.pageX || ev.clientX);
     var pageY = isTouchEvent ? ev.targetTouches[0].pageY : (ev.pageY || ev.clientY);

     // Drag Direction
     this.drag.currentX = pageX - this.drag.startX;
     this.drag.currentY = pageY - this.drag.startY;
     this.drag.distance = this.drag.currentX - this.drag.offsetX;

     // Check move direction
     if (this.drag.distance < 0) {
       this.state.direction = this.options.rtl ? 'right' : 'left';
     } else if(this.drag.distance > 0){
       this.state.direction = this.options.rtl ? 'left' : 'right';
     }
     // Loop
     if(this.options.loop){
       if(this.op(this.drag.currentX, '>', this.pos.minValue) && this.state.direction === 'right' ){
         this.drag.currentX -= this.pos.loop;
       }else if(this.op(this.drag.currentX, '<', this.pos.maxValue) && this.state.direction === 'left' ){
         this.drag.currentX += this.pos.loop;
       }
     } else {
       // pull
       var minValue = this.options.rtl ? this.pos.maxValue : this.pos.minValue;
       var maxValue = this.options.rtl ? this.pos.minValue : this.pos.maxValue;
       var pull = this.options.pullDrag ? this.drag.distance / 5 : 0;
       this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
     }



     // Lock browser if swiping horizontal

     if ((this.drag.distance > 8 || this.drag.distance < -8)) {
       if (ev.preventDefault !== undefined) {
         ev.preventDefault();
       } else {
         ev.returnValue = false;
       }
       this.state.isSwiping = true;
     }

     this.drag.updatedX = this.drag.currentX;

     // Lock Owl if scrolling
     if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
        this.state.isScrolling = true;
        this.drag.updatedX = this.drag.start;
     }

     this.animStage(this.drag.updatedX);
   };

   /**
    * onDragEnd
    * @desc touchend/mouseup event
    * @since 2.0.0
    */

   Owl.prototype.onDragEnd = function(event){
     if (!this.state.isTouch){
       return;
     }
     if(this.dragType[0] === 'mousedown'){
       this.dom.$stage.removeClass('owl-grab');
     }

     this.fireCallback('onTouchEnd');

     //prevent links and images dragging;
     //this.drag.targetEl.draggable = true;

     //remove drag event listeners

     this.state.isTouch = false;
     this.state.isScrolling = false;
     this.state.isSwiping = false;

     //to check
     if(this.drag.distance === 0 && this.state.inMotion !== true){
       this.state.inMotion = false;
       return false;
     }

     // prevent clicks while scrolling

     this.drag.endTime = new Date().getTime();
     var compareTimes = this.drag.endTime - this.drag.startTime;
     var distanceAbs = Math.abs(this.drag.distance);

     //to test
     if(distanceAbs > 3 || compareTimes > 300){
       this.removeClick(this.drag.targetEl);
     }

     var closest = this.closest(this.drag.updatedX);

     this.setSpeed(this.options.dragEndSpeed, false, true);
     this.animStage(this.pos.items[closest]);

     //if pullDrag is off then fire transitionEnd event manually when stick to border
     if(!this.options.pullDrag && this.drag.updatedX === this.pos.items[closest]){
       this.transitionEnd();
     }

     this.drag.distance = 0;

     this.off(document, this.dragType[1], this.e._onDragMove);
     this.off(document, this.dragType[2], this.e._onDragEnd);
   };

   /**
    * removeClick
    * @desc Attach preventClick function to disable link while swipping
    * @since 2.0.0
    * @param [target] - clicked dom element
    */

   Owl.prototype.removeClick = function(target){
     this.drag.targetEl = target;
     $(target).on('click.preventClick', this.e._preventClick);
     // to make sure click is removed:
     window.setTimeout(function(){
       $(target).off('click.preventClick');
     },300);
   };

   /**
    * preventClick
    * @desc Add preventDefault for any link and then remove removeClick event hanlder
    * @since 2.0.0
    */

   Owl.prototype.preventClick = function(ev){
     if(ev.preventDefault) {
       ev.preventDefault();
     }else {
       ev.returnValue = false;
     }
     if(ev.stopPropagation){
       ev.stopPropagation();
     }
     $(ev.target).off('click.preventClick')
   };

   /**
    * getTransformProperty
    * @desc catch stage position while animate (only css3)
    * @since 2.0.0
    */

   Owl.prototype.getTransformProperty = function(){
     var transform = window.getComputedStyle(this.dom.stage, null).getPropertyValue(this.vendorName + 'transform');
     //var transform = this.dom.$stage.css(this.vendorName + 'transform')
     transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
     var matrix3d = transform.length === 16;

     return matrix3d !== true ? transform[4] : transform[12];
   };

   /**
    * closest
    * @desc Get closest item after touchend/mouseup
    * @since 2.0.0
    * @param [x] - curent position in pixels
    * return position in pixels
    */

   Owl.prototype.closest = function(x){
     var newX = 0,
       pull = 30;

     if(!this.options.freeDrag){
       // Check closest item
       for(var i = 0; i< this.num.items; i++){
         if(x > this.pos.items[i]-pull && x < this.pos.items[i]+pull){
           newX = i;
         }else if(this.op(x,'<',this.pos.items[i]) && this.op(x,'>',this.pos.items[i+1 || this.pos.items[i] - this.width.el]) ){
           newX = this.state.direction === 'left' ? i+1 : i;
         }
       }
     }
     //non loop boundries
     if(!this.options.loop){
       if(this.op(x,'>',this.pos.minValue)){
         newX = x = this.pos.min;
       } else if(this.op(x,'<',this.pos.maxValue)){
         newX = x = this.pos.max;
       }
     }

     if(!this.options.freeDrag){
       // set positions
       this.pos.currentAbs = newX;
       this.pos.current = this.dom.$items.eq(newX).data('owl-item').index;
     } else {
       this.updateItemState();
       return x;
     }

     return newX;
   };

   /**
    * animStage
    * @desc animate stage position (both css3/css2) and perform onChange functions/events
    * @since 2.0.0
    * @param [x] - curent position in pixels
    */

   Owl.prototype.animStage = function(pos){

     // if speed is 0 the set inMotion to false
     if(this.speed.current !== 0 && this.pos.currentAbs !== this.pos.min){
       this.fireCallback('onTransitionStart');
       this.state.inMotion = true;
     }

     var posX = this.pos.stage = pos,
       style = this.dom.stage.style;

     if(this.support3d){
       translate = 'translate3d(' + posX + 'px'+',0px, 0px)';
       style[this.transformVendor] = translate;
     } else if(this.state.isTouch){
       style.left = posX+'px';
     } else {
       this.dom.$stage.animate({left: posX},this.speed.css2speed, this.options.fallbackEasing, function(){
         if(this.state.inMotion){
           this.transitionEnd();
         }
       }.bind(this));
     }

     this.onChange();
   };

   /**
    * updatePosition
    * @desc Update current positions
    * @since 2.0.0
    * @param [pos] - number - new position
    */

   Owl.prototype.updatePosition = function(pos){

     // if no items then stop
     if(this.num.oItems === 0){return false;}
     // to do
     //if(pos > this.num.items){pos = 0;}
     if(pos === undefined){return false;}

     //pos - new current position
     var nextPos = pos;
     this.pos.prev = this.pos.currentAbs;

     if(this.state.revert){
       this.pos.current = this.dom.$items.eq(nextPos).data('owl-item').index;
       this.pos.currentAbs = nextPos;
       return;
     }

     if(!this.options.loop){
       if(this.options.navRewind){
         nextPos = nextPos > this.pos.max ? this.pos.min : (nextPos < 0 ? this.pos.max : nextPos);
       } else {
         nextPos = nextPos > this.pos.max ? this.pos.max : (nextPos <= 0 ? 0 : nextPos);
       }
     } else {
       nextPos = nextPos >= this.num.oItems ? this.num.oItems-1 : nextPos;
     }

     this.pos.current = this.dom.$oItems.eq(nextPos).data('owl-item').index;
     this.pos.currentAbs = this.dom.$oItems.eq(nextPos).data('owl-item').indexAbs;

   };

   /**
    * setSpeed
    * @since 2.0.0
    * @param [speed] - number
    * @param [pos] - number - next position - use this param to calculate smartSpeed
    * @param [drag] - boolean - if drag is true then smart speed is disabled
    * return speed
    */

   Owl.prototype.setSpeed = function(speed,pos,drag) {
     var s = speed,
       nextPos = pos;

     if((s === false && s !== 0 && drag !== true) || s === undefined){

       //Double check this
       // var nextPx = this.pos.items[nextPos];
       // var currPx = this.pos.stage
       // var diff = Math.abs(nextPx-currPx);
       // var s = diff/1
       // if(s>1000){
       // 	s = 1000;
       // }

       var diff = Math.abs(nextPos - this.pos.prev);
       diff = diff === 0 ? 1 : diff;
       if(diff>6){diff = 6;}
       s = diff * this.options.smartSpeed;
     }

     if(s === false && drag === true){
       s = this.options.smartSpeed;
     }

     if(s === 0){s=0;}

     if(this.support3d){
       var style = this.dom.stage.style;
       style.webkitTransitionDuration = style.MsTransitionDuration = style.msTransitionDuration = style.MozTransitionDuration = style.OTransitionDuration = style.transitionDuration = (s / 1000) + 's';
     } else{
       this.speed.css2speed = s;
     }
     this.speed.current = s;
     return s;
   };

   /**
    * jumpTo
    * @since 2.0.0
    * @param [pos] - number - next position - use this param to calculate smartSpeed
    * @param [update] - boolean - if drag is true then smart speed is disabled
    */

   Owl.prototype.jumpTo = function(pos,update){
     if(this.state.lazyContent){
       this.pos.goToLazyContent = pos;
     }
     this.updatePosition(pos);
     this.setSpeed(0);
     this.animStage(this.pos.items[this.pos.currentAbs]);
     if(update !== true){
       this.updateItemState();
     }
   };

   /**
    * goTo
    * @since 2.0.0
    * @param [pos] - number
    * @param [speed] - speed in ms
    * @param [speed] - speed in ms
    */

   Owl.prototype.goTo = function(pos,speed){
     if(this.state.lazyContent && this.state.inMotion){
       return false;
     }

     this.updatePosition(pos);

     if(this.state.animate){speed = 0;}
     this.setSpeed(speed,this.pos.currentAbs);

     if(this.state.animate){this.animate();}
     this.animStage(this.pos.items[this.pos.currentAbs]);

   };

   /**
    * next
    * @since 2.0.0
    */

   Owl.prototype.next = function(optionalSpeed){
     var s = optionalSpeed || this.options.navSpeed;
     if(this.options.loop && !this.state.lazyContent){
       this.goToLoop(this.options.slideBy, s);
     }else{
       this.goTo(this.pos.current + this.options.slideBy, s);
     }
   };

   /**
    * prev
    * @since 2.0.0
    */

   Owl.prototype.prev = function(optionalSpeed){
     var s = optionalSpeed || this.options.navSpeed;
     if(this.options.loop && !this.state.lazyContent){
       this.goToLoop(-this.options.slideBy, s);
     }else{
       this.goTo(this.pos.current-this.options.slideBy, s);
     }
   };

   /**
    * goToLoop
    * @desc Go to given position if loop is enabled - used only internal
    * @since 2.0.0
    * @param [distance] - number -how far to go
    * @param [speed] - number - speed in ms
    */

   Owl.prototype.goToLoop = function(distance,speed){

     var revert = this.pos.currentAbs,
       prevPosition = this.pos.currentAbs,
       newPosition = this.pos.currentAbs + distance,
       direction = prevPosition - newPosition < 0 ? true : false;

     this.state.revert = true;

     if(newPosition < this.options.items && direction === false){

       this.state.bypass = true;
       revert = this.num.items - (this.options.items-prevPosition) - this.options.items;
       this.jumpTo(revert,true);

     } else if(newPosition >= this.num.items - this.options.items && direction === true ){

       this.state.bypass = true;
       revert = prevPosition - this.num.oItems;
       this.jumpTo(revert,true);

     }
     window.clearTimeout(this.e._goToLoop);
     this.e._goToLoop = window.setTimeout(function(){
       this.state.bypass = false;
       this.goTo(revert + distance, speed);
       this.state.revert = false;

     }.bind(this), 30);
   };

   /**
    * initPosition
    * @since 2.0.0
    */

   Owl.prototype.initPosition = function(init){

     if( !this.dom.$oItems || !init || this.state.lazyContent ){return false;}
     var pos = this.options.startPosition;

     if(this.options.startPosition === 'URLHash'){
       pos = this.options.startPosition = this.hashPosition();
     } else if(typeof this.options.startPosition !== Number && !this.options.center){
       this.options.startPosition = 0;
     }
     this.dom.oStage.scrollLeft = 0;
     this.jumpTo(pos,true);
   };

   /**
    * goToHash
    * @since 2.0.0
    */

   Owl.prototype.goToHash = function(){
     var pos = this.hashPosition();
     if(pos === false){
       pos = 0;
     }
     this.dom.oStage.scrollLeft = 0;
     this.goTo(pos,this.options.navSpeed);
   };

   /**
    * hashPosition
    * @desc Find hash in URL then look into items to find contained ID
    * @since 2.0.0
    * return hashPos - number of item
    */

   Owl.prototype.hashPosition = function(){
     var hash = window.location.hash.substring(1),
       hashPos;
     if(hash === ""){return false;}

     for(var i=0;i<this.num.oItems; i++){
       if(hash === this.dom.$oItems.eq(i).data('owl-item').hash){
         hashPos = i;
       }
     }
     return hashPos;
   };

   /**
    * Autoplay
    * @since 2.0.0
    */

   Owl.prototype.autoplay = function(){
     if(this.options.autoplay && !this.state.videoPlay){
       window.clearInterval(this.e._autoplay);
       this.e._autoplay = window.setInterval(this.e._play, this.options.autoplayTimeout);
     } else {
       window.clearInterval(this.e._autoplay);
       this.state.autoplay=false;
     }
   };

   /**
    * play
    * @param [timeout] - Integrer
    * @param [speed] - Integrer
    * @since 2.0.0
    */

   Owl.prototype.play = function(timeout, speed){

     // if tab is inactive - doesnt work in <IE10
     if(document.hidden === true){return false;}

     // overwrite default options (custom options are always priority)
     if(!this.options.autoplay){
       this._options.autoplay = this.options.autoplay = true;
       this._options.autoplayTimeout = this.options.autoplayTimeout = timeout || this.options.autoplayTimeout || 4000;
       this._options.autoplaySpeed = speed || this.options.autoplaySpeed;
     }

     if(this.options.autoplay === false || this.state.isTouch || this.state.isScrolling || this.state.isSwiping || this.state.inMotion){
       window.clearInterval(this.e._autoplay);
       return false;
     }

     if(!this.options.loop && this.pos.current >= this.pos.max){
       window.clearInterval(this.e._autoplay);
       this.goTo(0);
     } else {
       this.next(this.options.autoplaySpeed);
     }
     this.state.autoplay=true;
   };

   /**
    * stop
    * @since 2.0.0
    */

   Owl.prototype.stop = function(){
     this._options.autoplay = this.options.autoplay = false;
     this.state.autoplay = false;
     window.clearInterval(this.e._autoplay);
   };

   Owl.prototype.pause = function(){
     window.clearInterval(this.e._autoplay);
   };

   /**
    * transitionEnd
    * @desc event used by css3 animation end and $.animate callback like transitionEnd,responsive etc.
    * @since 2.0.0
    */

   Owl.prototype.transitionEnd = function(event){

     // if css2 animation then event object is undefined
     if(event !== undefined){
       event.stopPropagation();

       // Catch only owl-stage transitionEnd event
       var eventTarget = event.target || event.srcElement || event.originalTarget;
       if(eventTarget !== this.dom.stage){
         return false;
       }
     }

     this.state.inMotion = false;
     this.updateItemState();
     this.autoplay();
     this.fireCallback('onTransitionEnd');
   };

   /**
    * isElWidthChanged
    * @desc Check if element width has changed
    * @since 2.0.0
    */

   Owl.prototype.isElWidthChanged = function(){
     var newElWidth = 	this.dom.$el.width() - this.options.stagePadding,//to check
       prevElWidth = 	this.width.el + this.options.margin;
     return newElWidth !== prevElWidth;
   };

   /**
    * windowWidth
    * @desc Get Window/responsiveBaseElement width
    * @since 2.0.0
    */

   Owl.prototype.windowWidth = function() {
     if(this.options.responsiveBaseElement !== window){
       this.width.window =  $(this.options.responsiveBaseElement).width();
     } else if (window.innerWidth){
       this.width.window = window.innerWidth;
     } else if (document.documentElement && document.documentElement.clientWidth){
       this.width.window = document.documentElement.clientWidth;
     }
     return this.width.window;
   };

   /**
    * Controls
    * @desc Calls controls container, navigation and dots creator
    * @since 2.0.0
    */

   Owl.prototype.controls = function(){
     var cc = document.createElement('div');
     cc.className = this.options.controlsClass;
     this.dom.$el.append(cc);
     this.dom.$cc = $(cc);
   };

   /**
    * updateControls
    * @since 2.0.0
    */

   Owl.prototype.updateControls = function(){

     if(this.dom.$cc === null && (this.options.nav || this.options.dots)){
       if(!this.options.navContainer || !this.options.dotsContainer){
         this.controls();
       }
     }

     if(this.dom.$nav === null && this.options.nav){
       this.createNavigation();
     }

     if(this.dom.$page === null && this.options.dots){
       this.createDots();
     }

     if(this.dom.$nav !== null){
       if(this.options.nav){
         this.dom.$nav.show();
         this.updateNavigation();
       } else {
         this.dom.$nav.hide();
       }
     }

     if(this.dom.$page !== null){
       if(this.options.dots){
         this.dom.$page.show();
         this.updateDots();
       } else {
         this.dom.$page.hide();
       }
     }
   };

   /**
    * createNavigation
    * @since 2.0.0
    */

   Owl.prototype.createNavigation = function(){

     var cc = this.options.navContainer ? $(this.options.navContainer).get(0) : this.dom.$cc.get(0);

     // Create nav container
     var nav = document.createElement('div');
     nav.className = this.options.navContainerClass;
     cc.appendChild(nav);

     // Create left and right buttons
     var navPrev = document.createElement('div'),
       navNext = document.createElement('div');

     navPrev.className = this.options.navClass[0];
     navNext.className = this.options.navClass[1];

     nav.appendChild(navPrev);
     nav.appendChild(navNext);

     this.dom.$nav = $(nav);
     this.dom.$navPrev = $(navPrev).html(this.options.navText[0]);
     this.dom.$navNext = $(navNext).html(this.options.navText[1]);

     // add events to do
     //this.on(navPrev, this.dragType[2], this.e._navPrev, false);
     //this.on(navNext, this.dragType[2], this.e._navNext, false);

     //FF fix?
     this.dom.$nav.on(this.dragType[2], '.'+this.options.navClass[0], this.e._navPrev);
     this.dom.$nav.on(this.dragType[2], '.'+this.options.navClass[1], this.e._navNext);
   };

   /**
    * createNavigation
    * @since 2.0.0
    * @param [cc] - dom element - Controls Container
    */

   Owl.prototype.createDots = function(){

     var cc = this.options.dotsContainer ? $(this.options.dotsContainer).get(0) : this.dom.$cc.get(0);

     // Create dots container
     var page = document.createElement('div');
     page.className = this.options.dotsClass;
     cc.appendChild(page);

     // save reference
     this.dom.$page = $(page);

     // add events
     //this.on(page, this.dragType[2], this.e._goToPage, false);

     // FF fix? To test!
     var that = this;
     this.dom.$page.on(this.dragType[2], '.'+this.options.dotClass, goToPage);

     function goToPage(e){
       e.preventDefault();
       var page = $(this).data('page');
       that.goTo(page,that.options.dotsSpeed);
     }
     // build dots
     this.rebuildDots();
   };

   /**
    * rebuildDots
    * @since 2.0.0
    */

   Owl.prototype.rebuildDots = function(){
     if(this.dom.$page === null){return false;}
     var each, dot, span, counter = 0, last = 0, i, page=0, roundPages = 0;

     each = this.options.dotsEach || this.options.items;

     // display full dots if center
     if(this.options.center || this.options.dotData){
       each = 1;
     }

     // clear dots
     this.dom.$page.html('');

     for(i = 0; i < this.num.nav.length; i++){

       if(counter >= each || counter === 0){

         dot = document.createElement('div');
         dot.className = this.options.dotClass;
         span = document.createElement('span');
         dot.appendChild(span);
         var $dot = $(dot);

         if(this.options.dotData){
           $dot.html(this.dom.$oItems.eq(i).data('owl-item').dot);
         }

         $dot.data('page',page);
         $dot.data('goToPage',roundPages);

         this.dom.$page.append(dot);

         counter = 0;
         roundPages++;
       }

       this.dom.$oItems.eq(i).data('owl-item').page = roundPages-1;

       //add merged items
       counter += this.num.nav[i];
       page++;
     }
     // find rest of dots
     if(!this.options.loop && !this.options.center){
       for(var j = this.num.nav.length-1; j >= 0; j--){
         last += this.num.nav[j];
         this.dom.$oItems.eq(j).data('owl-item').page = roundPages-1;
         if(last >= each){
           break;
         }
       }
     }

     this.num.allPages = roundPages-1;
   };

   /**
    * updateDots
    * @since 2.0.0
    */

   Owl.prototype.updateDots = function(){
     var dots = this.dom.$page.children();
     var itemIndex = this.dom.$oItems.eq(this.pos.current).data('owl-item').page;

     for(var i = 0; i < dots.length; i++){
       var dotPage = dots.eq(i).data('goToPage');

       if(dotPage===itemIndex){
         this.pos.currentPage = i;
         dots.eq(i).addClass('active');
       }else{
         dots.eq(i).removeClass('active');
       }
     }
   };

   /**
    * updateNavigation
    * @since 2.0.0
    */

   Owl.prototype.updateNavigation = function(){

     var isNav = this.options.nav;

     this.dom.$navNext.toggleClass('disabled',!isNav);
     this.dom.$navPrev.toggleClass('disabled',!isNav);

     if(!this.options.loop && isNav && !this.options.navRewind){

       if(this.pos.current <= 0){
         this.dom.$navPrev.addClass('disabled');
       }
       if(this.pos.current >= this.pos.max){
         this.dom.$navNext.addClass('disabled');
       }
     }
   };

   Owl.prototype.insertContent = function(content){
     this.dom.$stage.empty();
     this.fetchContent(content);
     this.refresh();
   };

   /**
    * addItem - Add an item
    * @since 2.0.0
    * @param [content] - dom element / string '<div>content</div>'
    * @param [pos] - number - position
    */

   Owl.prototype.addItem = function(content,pos){
     pos = pos || 0;

     if(this.state.lazyContent){
       this.dom.$content = this.dom.$content.add($(content));
       this.updateItemState(true);
     } else {
       // wrap content
       var item = this.fillItem(content);
       // if carousel is empty then append item
       if(this.dom.$oItems.length === 0){
         this.dom.$stage.append(item);
       } else {
         // append item
         var it = this.dom.$oItems.eq(pos);
         if(pos !== -1){it.before(item);} else {it.after(item);}
       }
       // update and calculate carousel
       this.refresh();
     }

   };

   /**
    * removeItem - Remove an Item
    * @since 2.0.0
    * @param [pos] - number - position
    */

   Owl.prototype.removeItem = function(pos){
     if(this.state.lazyContent){
       this.dom.$content.splice(pos,1);
       this.updateItemState(true);
     } else {
       this.dom.$oItems.eq(pos).remove();
       this.refresh();
     }
   };

   /**
    * addCustomEvents
    * @desc Add custom events by jQuery .on method
    * @since 2.0.0
    */

   Owl.prototype.addCustomEvents = function(){

     this.e.next = function(e,s){this.next(s);			}.bind(this);
     this.e.prev = function(e,s){this.prev(s);			}.bind(this);
     this.e.goTo = function(e,p,s){this.goTo(p,s);		}.bind(this);
     this.e.jumpTo = function(e,p){this.jumpTo(p);		}.bind(this);
     this.e.addItem = function(e,c,p){this.addItem(c,p);	}.bind(this);
     this.e.removeItem = function(e,p){this.removeItem(p);}.bind(this);
     this.e.refresh = function(e){this.refresh();		}.bind(this);
     this.e.destroy = function(e){this.destroy();		}.bind(this);
     this.e.autoHeight = function(e){this.autoHeight(true);}.bind(this);
     this.e.stop = function(){this.stop();				}.bind(this);
     this.e.play = function(e,t,s){this.play(t,s);		}.bind(this);
     this.e.insertContent = function(e,d){this.insertContent(d);	}.bind(this);

     this.dom.$el.on('next.owl',this.e.next);
     this.dom.$el.on('prev.owl',this.e.prev);
     this.dom.$el.on('goTo.owl',this.e.goTo);
     this.dom.$el.on('jumpTo.owl',this.e.jumpTo);
     this.dom.$el.on('addItem.owl',this.e.addItem);
     this.dom.$el.on('removeItem.owl',this.e.removeItem);
     this.dom.$el.on('destroy.owl',this.e.destroy);
     this.dom.$el.on('refresh.owl',this.e.refresh);
     this.dom.$el.on('autoHeight.owl',this.e.autoHeight);
     this.dom.$el.on('play.owl',this.e.play);
     this.dom.$el.on('stop.owl',this.e.stop);
     this.dom.$el.on('stopVideo.owl',this.e.stop);
     this.dom.$el.on('insertContent.owl',this.e.insertContent);

   };

   /**
    * on
    * @desc On method for adding internal events
    * @since 2.0.0
    */

   Owl.prototype.on = function (element, event, listener, capture) {

     if (element.addEventListener) {
       element.addEventListener(event, listener, capture);
     }
     else if (element.attachEvent) {
       element.attachEvent('on' + event, listener);
     }
   };

   /**
    * off
    * @desc Off method for removing internal events
    * @since 2.0.0
    */

   Owl.prototype.off = function (element, event, listener, capture) {
     if (element.removeEventListener) {
       element.removeEventListener(event, listener, capture);
     }
     else if (element.detachEvent) {
       element.detachEvent('on' + event, listener);
     }
   };

   /**
    * fireCallback
    * @since 2.0.0
    * @param event - string - event name
    * @param data - object - additional options - to do
    */

   Owl.prototype.fireCallback = function(event, data){
     if(!this.options.callbacks){return;}

     if (typeof this.options[event] === 'function') {
       this.options[event].apply(this,[this.dom.el,this.info,event]);
     }

     if(this.dom.el.dispatchEvent){

       // dispatch event
       var evt = document.createEvent('CustomEvent');

       //evt.initEvent(event, false, true );
       evt.initCustomEvent(event, true, true, data);
       return this.dom.el.dispatchEvent(evt);

     } else if (!this.dom.el.dispatchEvent){

       //	There is no clean solution for custom events name in <=IE8
       //	But if you know better way, please let me know :)
       return this.dom.$el.trigger(event);
     }
   };

   /**
    * watchVisibility
    * @desc check if el is visible - handy if Owl is inside hidden content (tabs etc.)
    * @since 2.0.0
    */

   Owl.prototype.watchVisibility = function(){

     // test on zepto
     if(!isElVisible(this.dom.el)) {
       this.dom.$el.addClass('owl-hidden');
       window.clearInterval(this.e._checkVisibile);
       this.e._checkVisibile = window.setInterval(checkVisible.bind(this),500);
     }

     function isElVisible(el) {
         return el.offsetWidth > 0 && el.offsetHeight > 0;
     }

     function checkVisible(){
       if (isElVisible(this.dom.el)) {
         this.dom.$el.removeClass('owl-hidden');
         this.refresh();
         window.clearInterval(this.e._checkVisibile);
       }
     }
   };

   /**
    * onChange
    * @since 2.0.0
    */

   Owl.prototype.onChange = function(){

     if(!this.state.isTouch && !this.state.bypass && !this.state.responsive ){

       if (this.options.nav || this.options.dots) {
         this.updateControls();
       }
       this.autoHeight();

       this.fireCallback('onChangeState');
     }

     if(!this.state.isTouch && !this.state.bypass){

       if(!this.state.lazyContent){
         this.updateActiveItems();
       }

       // set Status to do
       this.storeInfo();

       // stopVideo
       if(this.state.videoPlay){
         this.stopVideo();
       }
     }
   };

   /**
    * storeInfo
    * store basic information about current states
    * @since 2.0.0
    */

   Owl.prototype.storeInfo = function(){
     var currentPosition = this.state.lazyContent ? this.pos.lcCurrentAbs || 0 : this.pos.current;
     var allItems = this.state.lazyContent ? this.dom.$content.length-1 : this.num.oItems;

     this.info = {
       items: 			this.options.items,
       allItems:		allItems,
       currentPosition:currentPosition,
       currentPage:	this.pos.currentPage,
       allPages:		this.num.allPages,
       autoplay:		this.state.autoplay,
       windowWidth:	this.width.window,
       elWidth:		this.width.el,
       breakpoint:		this.num.breakpoint
     };

     if (typeof this.options.info === 'function') {
       this.options.info.apply(this,[this.info,this.dom.el]);
     }
   };

   /**
    * autoHeight
    * @since 2.0.0
    */

   Owl.prototype.autoHeight = function(callback){
      if(this.options.autoHeight !== true && callback !== true){
       return false;
     }
     if(!this.dom.$oStage.hasClass(this.options.autoHeightClass)){
       this.dom.$oStage.addClass(this.options.autoHeightClass);
     }

     var loaded = this.dom.$items.eq(this.pos.currentAbs);
     var stage = this.dom.$oStage;
     var iterations = 0;

     var isLoaded = window.setInterval(function() {
       iterations += 1;
       if(loaded.data('owl-item').loaded){
         stage.height(loaded.height() + 'px');
         clearInterval(isLoaded);
       } else if(iterations === 500){
         clearInterval(isLoaded);
       }
     }, 100);
   };

   /**
    * preloadAutoWidthImages
    * @desc still to test
    * @since 2.0.0
    */

   Owl.prototype.preloadAutoWidthImages = function(imgs){
     var loaded = 0;
     var that = this;
     imgs.each(function(i,el){
       var $el = $(el);
       var img = new Image();

       img.onload = function(){
         loaded++;
         $el.attr('src',img.src);
         $el.css('opacity',1);
         if(loaded >= imgs.length){
           that.state.imagesLoaded = true;
           that.init();
         }
       }

       img.src = $el.attr('src') ||  $el.attr('data-src') || $el.attr('data-src-retina');;
     })
   };

   /**
    * lazyLoad
    * @desc lazyLoad images
    * @since 2.0.0
    */

   Owl.prototype.lazyLoad = function(){
     var attr = isRetina() ? 'data-src-retina' : 'data-src';
     var src, img,i;

     for(i = 0; i < this.num.items; i++){
       var $item = this.dom.$items.eq(i);

       if( $item.data('owl-item').current === true && $item.data('owl-item').loaded === false){
         img = $item.find('.owl-lazy');
         src = img.attr(attr);
         src = src || img.attr('data-src');
         if(src){
           img.css('opacity','0');
           this.preload(img,$item);
         }
       }
     }
   };

   /**
    * preload
    * @since 2.0.0
    */

    Owl.prototype.preload = function(images,$item){
     var that = this; // fix this later

     images.each(function(i,el){
       var $el = $(el);
       var img = new Image();
       var srcType = isRetina() ? $el.attr('data-src-retina') : $el.attr('data-src');
       var srcType = srcType || $el.attr('data-src');

       img.onload = function(){

         $item.data('owl-item').loaded = true;
         if($el.is('img')){
           $el.attr('src',img.src);
         }else{
           $el.css('background-image','url(' + img.src + ')');
         }

         $el.css('opacity',1);
         that.fireCallback('onLazyLoaded');
       };
       img.src = srcType;
     });
    };

   /**
    * animate
    * @since 2.0.0
    */

    Owl.prototype.animate = function(){

     var prevItem = this.dom.$items.eq(this.pos.prev),
       prevPos = Math.abs(prevItem.data('owl-item').width) * this.pos.prev,
       currentItem = this.dom.$items.eq(this.pos.currentAbs),
       currentPos = Math.abs(currentItem.data('owl-item').width) * this.pos.currentAbs;

     if(this.pos.currentAbs === this.pos.prev){
       return false;
     }

     var pos = currentPos - prevPos;
     var tIn = this.options.animateIn;
     var tOut = this.options.animateOut;
     var that = this;

     removeStyles = function(){
       $(this).css({
                 "left" : ""
             })
             .removeClass('animated owl-animated-out owl-animated-in')
             .removeClass(tIn)
             .removeClass(tOut);

             that.transitionEnd();
         };

     if(tOut){
       prevItem
       .css({
         "left" : pos + "px"
       })
       .addClass('animated owl-animated-out '+tOut)
       .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeStyles);
     }

     if(tIn){
       currentItem
       .addClass('animated owl-animated-in '+tIn)
       .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeStyles);
     }
    };

   /**
    * destroy
    * @desc Remove Owl structure and events :(
    * @since 2.0.0
    */

   Owl.prototype.destroy = function(){

     window.clearInterval(this.e._autoplay);

     if(this.dom.$el.hasClass(this.options.themeClass)){
       this.dom.$el.removeClass(this.options.themeClass);
     }

     if(this.options.responsive !== false){
       this.off(window, 'resize', this.e._resizer);
     }

     if(this.transitionEndVendor){
       this.off(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd);
     }

     if(this.options.mouseDrag || this.options.touchDrag){
       this.off(this.dom.stage, this.dragType[0], this.e._onDragStart);
       if(this.options.mouseDrag){
         this.off(document, this.dragType[3], this.e._onDragStart);
       }
       if(this.options.mouseDrag){
         this.dom.$stage.off('dragstart', function() {return false;});
         this.dom.stage.onselectstart = function(){};
       }
     }

     if(this.options.URLhashListener){
       this.off(window, 'hashchange', this.e._goToHash);
     }

     this.dom.$el.off('next.owl',this.e.next);
     this.dom.$el.off('prev.owl',this.e.prev);
     this.dom.$el.off('goTo.owl',this.e.goTo);
     this.dom.$el.off('jumpTo.owl',this.e.jumpTo);
     this.dom.$el.off('addItem.owl',this.e.addItem);
     this.dom.$el.off('removeItem.owl',this.e.removeItem);
     this.dom.$el.off('refresh.owl',this.e.refresh);
     this.dom.$el.off('autoHeight.owl',this.e.autoHeight);
     this.dom.$el.off('play.owl',this.e.play);
     this.dom.$el.off('stop.owl',this.e.stop);
     this.dom.$el.off('stopVideo.owl',this.e.stop);
     this.dom.$stage.off('click',this.e._playVideo);

     if(this.dom.$cc !== null){
       this.dom.$cc.remove();
     }
     if(this.dom.$cItems !== null){
       this.dom.$cItems.remove();
     }
     this.e = null;
     this.dom.$el.data('owlCarousel',null);
     delete this.dom.el.owlCarousel;

     this.dom.$stage.unwrap();
     this.dom.$items.unwrap();
     this.dom.$items.contents().unwrap();
     this.dom = null;
   };

   /**
    * Opertators
    * @desc Used to calculate RTL
    * @param [a] - Number - left side
    * @param [o] - String - operator
    * @param [b] - Number - right side
    * @since 2.0.0
    */

   Owl.prototype.op = function(a,o,b){
     var rtl = this.options.rtl;
     switch(o) {
       case '<':
         return rtl ? a > b : a < b;
       case '>':
         return rtl ? a < b : a > b;
       case '>=':
         return rtl ? a <= b : a >= b;
       case '<=':
         return rtl ? a >= b : a <= b;
       default:
         break;
     }
   };

   /**
    * Opertators
    * @desc Used to calculate RTL
    * @since 2.0.0
    */

   Owl.prototype.browserSupport = function(){
     this.support3d = isPerspective();

     if(this.support3d){
       this.transformVendor = isTransform();

       // take transitionend event name by detecting transition
       var endVendors = ['transitionend','webkitTransitionEnd','transitionend','oTransitionEnd'];
       this.transitionEndVendor = endVendors[isTransition()];

       // take vendor name from transform name
       this.vendorName = this.transformVendor.replace(/Transform/i,'');
       this.vendorName = this.vendorName !== '' ? '-'+this.vendorName.toLowerCase()+'-' : '';
     }

     this.state.orientation = window.orientation;
   };

   // Pivate methods

   // CSS detection;
   function isStyleSupported(array){
     var p,s,fake = document.createElement('div'),list = array;
     for(p in list){
       s = list[p];
       if(typeof fake.style[s] !== 'undefined'){
         fake = null;
         return [s,p];
       }
     }
     return [false];
   }

   function isTransition(){
     return isStyleSupported(['transition','WebkitTransition','MozTransition','OTransition'])[1];
   }

   function isTransform() {
     return isStyleSupported(['transform','WebkitTransform','MozTransform','OTransform','msTransform'])[0];
   }

   function isPerspective(){
     return isStyleSupported(['perspective','webkitPerspective','MozPerspective','OPerspective','MsPerspective'])[0];
   }

   function isTouchSupport(){
     return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
   }

   function isTouchSupportIE(){
     return window.navigator.msPointerEnabled;
   }

   function isRetina(){
     return window.devicePixelRatio > 1;
   }

   $.fn.owlCarousel = function ( options ) {
     return this.each(function () {
       if (!$(this).data('owlCarousel')) {
         $(this).data( 'owlCarousel',
         new Owl( this, options ));
       }
     });

   };

 })( window.Zepto || window.jQuery, window,  document );

 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 //The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

 if (!Function.prototype.bind) {
   Function.prototype.bind = function (oThis) {
   if (typeof this !== 'function') {
     // closest thing possible to the ECMAScript 5 internal IsCallable function
     throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
   }

   var aArgs = Array.prototype.slice.call(arguments, 1),
     fToBind = this,
     fNOP = function () {},
     fBound = function () {
       return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
     };
   fNOP.prototype = this.prototype;
   fBound.prototype = new fNOP();
   return fBound;
   };
 }

 $(document).ready(function() {

   var owl = $("#owl-carousel");

   owl.owlCarousel({
     items: 1,
     margin: 10,
     lazyLoad: true,
     merge: true,
     mouseDrag: true,
     responsive:{
       480:{
         items:2
       },

       678:{
         items:3
       },

       960:{
         items:5
       }
     }
   });

 });
