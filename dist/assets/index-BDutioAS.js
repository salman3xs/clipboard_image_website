(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))g(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const y of p.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&g(y)}).observe(document,{childList:!0,subtree:!0});function i(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function g(u){if(u.ep)return;u.ep=!0;const p=i(u);fetch(u.href,p)}})();var B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Q(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var N={exports:{}};(function(w){var _=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var i=function(g){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,y={},s={manual:g.Prism&&g.Prism.manual,disableWorkerMessageHandler:g.Prism&&g.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof F?new F(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++p}),a.__id},clone:function a(e,t){t=t||{};var n,r;switch(s.util.type(e)){case"Object":if(r=s.util.objId(e),t[r])return t[r];n={},t[r]=n;for(var o in e)e.hasOwnProperty(o)&&(n[o]=a(e[o],t));return n;case"Array":return r=s.util.objId(e),t[r]?t[r]:(n=[],t[r]=n,e.forEach(function(c,l){n[l]=a(c,t)}),n);default:return e}},getLanguage:function(a){for(;a;){var e=u.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(u,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var t in e)if(e[t].src==a)return e[t]}return null}},isActive:function(a,e,t){for(var n="no-"+e;a;){var r=a.classList;if(r.contains(e))return!0;if(r.contains(n))return!1;a=a.parentElement}return!!t}},languages:{plain:y,plaintext:y,text:y,txt:y,extend:function(a,e){var t=s.util.clone(s.languages[a]);for(var n in e)t[n]=e[n];return t},insertBefore:function(a,e,t,n){n=n||s.languages;var r=n[a],o={};for(var c in r)if(r.hasOwnProperty(c)){if(c==e)for(var l in t)t.hasOwnProperty(l)&&(o[l]=t[l]);t.hasOwnProperty(c)||(o[c]=r[c])}var f=n[a];return n[a]=o,s.languages.DFS(s.languages,function(m,k){k===f&&m!=a&&(this[m]=o)}),o},DFS:function a(e,t,n,r){r=r||{};var o=s.util.objId;for(var c in e)if(e.hasOwnProperty(c)){t.call(e,c,e[c],n||c);var l=e[c],f=s.util.type(l);f==="Object"&&!r[o(l)]?(r[o(l)]=!0,a(l,t,null,r)):f==="Array"&&!r[o(l)]&&(r[o(l)]=!0,a(l,t,c,r))}}},plugins:{},highlightAll:function(a,e){s.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,t){var n={callback:t,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),s.hooks.run("before-all-elements-highlight",n);for(var r=0,o;o=n.elements[r++];)s.highlightElement(o,e===!0,n.callback)},highlightElement:function(a,e,t){var n=s.util.getLanguage(a),r=s.languages[n];s.util.setLanguage(a,n);var o=a.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(o,n);var c=a.textContent,l={element:a,language:n,grammar:r,code:c};function f(k){l.highlightedCode=k,s.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,s.hooks.run("after-highlight",l),s.hooks.run("complete",l),t&&t.call(l.element)}if(s.hooks.run("before-sanity-check",l),o=l.element.parentElement,o&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!l.code){s.hooks.run("complete",l),t&&t.call(l.element);return}if(s.hooks.run("before-highlight",l),!l.grammar){f(s.util.encode(l.code));return}if(e&&g.Worker){var m=new Worker(s.filename);m.onmessage=function(k){f(k.data)},m.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else f(s.highlight(l.code,l.grammar,l.language))},highlight:function(a,e,t){var n={code:a,grammar:e,language:t};if(s.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=s.tokenize(n.code,n.grammar),s.hooks.run("after-tokenize",n),F.stringify(s.util.encode(n.tokens),n.language)},tokenize:function(a,e){var t=e.rest;if(t){for(var n in t)e[n]=t[n];delete e.rest}var r=new P;return E(r,r.head,a),I(a,r,e,r.head,0),L(r)},hooks:{all:{},add:function(a,e){var t=s.hooks.all;t[a]=t[a]||[],t[a].push(e)},run:function(a,e){var t=s.hooks.all[a];if(!(!t||!t.length))for(var n=0,r;r=t[n++];)r(e)}},Token:F};g.Prism=s;function F(a,e,t,n){this.type=a,this.content=e,this.alias=t,this.length=(n||"").length|0}F.stringify=function a(e,t){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(f){n+=a(f,t)}),n}var r={type:e.type,content:a(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},o=e.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(r.classes,o):r.classes.push(o)),s.hooks.run("wrap",r);var c="";for(var l in r.attributes)c+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+c+">"+r.content+"</"+r.tag+">"};function C(a,e,t,n){a.lastIndex=e;var r=a.exec(t);if(r&&n&&r[1]){var o=r[1].length;r.index+=o,r[0]=r[0].slice(o)}return r}function I(a,e,t,n,r,o){for(var c in t)if(!(!t.hasOwnProperty(c)||!t[c])){var l=t[c];l=Array.isArray(l)?l:[l];for(var f=0;f<l.length;++f){if(o&&o.cause==c+","+f)return;var m=l[f],k=m.inside,q=!!m.lookbehind,U=!!m.greedy,X=m.alias;if(U&&!m.pattern.global){var Y=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,Y+"g")}for(var W=m.pattern||m,b=n.next,x=r;b!==e.tail&&!(o&&x>=o.reach);x+=b.value.length,b=b.next){var $=b.value;if(e.length>a.length)return;if(!($ instanceof F)){var O=1,A;if(U){if(A=C(W,x,a,q),!A||A.index>=a.length)break;var D=A.index,J=A.index+A[0].length,S=x;for(S+=b.value.length;D>=S;)b=b.next,S+=b.value.length;if(S-=b.value.length,x=S,b.value instanceof F)continue;for(var T=b;T!==e.tail&&(S<J||typeof T.value=="string");T=T.next)O++,S+=T.value.length;O--,$=a.slice(x,S),A.index-=x}else if(A=C(W,0,$,q),!A)continue;var D=A.index,M=A[0],j=$.slice(0,D),Z=$.slice(D+M.length),G=x+$.length;o&&G>o.reach&&(o.reach=G);var z=b.prev;j&&(z=E(e,z,j),x+=j.length),R(e,z,O);var K=new F(c,k?s.tokenize(M,k):M,X,M);if(b=E(e,z,K),Z&&E(e,b,Z),O>1){var H={cause:c+","+f,reach:G};I(a,e,t,b.prev,x,H),o&&H.reach>o.reach&&(o.reach=H.reach)}}}}}}function P(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function E(a,e,t){var n=e.next,r={value:t,prev:e,next:n};return e.next=r,n.prev=r,a.length++,r}function R(a,e,t){for(var n=e.next,r=0;r<t&&n!==a.tail;r++)n=n.next;e.next=n,n.prev=e,a.length-=r}function L(a){for(var e=[],t=a.head.next;t!==a.tail;)e.push(t.value),t=t.next;return e}if(!g.document)return g.addEventListener&&(s.disableWorkerMessageHandler||g.addEventListener("message",function(a){var e=JSON.parse(a.data),t=e.language,n=e.code,r=e.immediateClose;g.postMessage(s.highlight(n,s.languages[t],t)),r&&g.close()},!1)),s;var h=s.util.currentScript();h&&(s.filename=h.src,h.hasAttribute("data-manual")&&(s.manual=!0));function d(){s.manual||s.highlightAll()}if(!s.manual){var v=document.readyState;v==="loading"||v==="interactive"&&h&&h.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return s}(_);w.exports&&(w.exports=i),typeof B<"u"&&(B.Prism=i),i.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(g){g.type==="entity"&&(g.attributes.title=g.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(u,p){var y={};y["language-"+p]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[p]},y.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:y}};s["language-"+p]={pattern:/[\s\S]+/,inside:i.languages[p]};var F={};F[u]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return u}),"i"),lookbehind:!0,greedy:!0,inside:s},i.languages.insertBefore("markup","cdata",F)}}),Object.defineProperty(i.languages.markup.tag,"addAttribute",{value:function(g,u){i.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+g+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:i.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,function(g){var u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;g.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+u.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},g.languages.css.atrule.inside.rest=g.languages.css;var p=g.languages.markup;p&&(p.tag.addInlined("style","css"),p.tag.addAttribute("style","css"))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),i.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),i.languages.markup&&(i.languages.markup.tag.addInlined("script","javascript"),i.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),i.languages.js=i.languages.javascript,function(){if(typeof i>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var g="Loading…",u=function(h,d){return"✖ Error "+h+" while fetching file: "+d},p="✖ Error: File does not exist or is empty",y={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",F="loading",C="loaded",I="failed",P="pre[data-src]:not(["+s+'="'+C+'"]):not(['+s+'="'+F+'"])';function E(h,d,v){var a=new XMLHttpRequest;a.open("GET",h,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?d(a.responseText):a.status>=400?v(u(a.status,a.statusText)):v(p))},a.send(null)}function R(h){var d=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(h||"");if(d){var v=Number(d[1]),a=d[2],e=d[3];return a?e?[v,Number(e)]:[v,void 0]:[v,v]}}i.hooks.add("before-highlightall",function(h){h.selector+=", "+P}),i.hooks.add("before-sanity-check",function(h){var d=h.element;if(d.matches(P)){h.code="",d.setAttribute(s,F);var v=d.appendChild(document.createElement("CODE"));v.textContent=g;var a=d.getAttribute("data-src"),e=h.language;if(e==="none"){var t=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=y[t]||t}i.util.setLanguage(v,e),i.util.setLanguage(d,e);var n=i.plugins.autoloader;n&&n.loadLanguages(e),E(a,function(r){d.setAttribute(s,C);var o=R(d.getAttribute("data-range"));if(o){var c=r.split(/\r\n?|\n/g),l=o[0],f=o[1]==null?c.length:o[1];l<0&&(l+=c.length),l=Math.max(0,Math.min(l-1,c.length)),f<0&&(f+=c.length),f=Math.max(0,Math.min(f,c.length)),r=c.slice(l,f).join(`
`),d.hasAttribute("data-start")||d.setAttribute("data-start",String(l+1))}v.textContent=r,i.highlightElement(v)},function(r){d.setAttribute(s,I),v.textContent=r})}}),i.plugins.fileHighlight={highlight:function(d){for(var v=(d||document).querySelectorAll(P),a=0,e;e=v[a++];)i.highlightElement(e)}};var L=!1;i.fileHighlight=function(){L||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),L=!0),i.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(N);var V=N.exports;const ee=Q(V);document.querySelector("#app").innerHTML=`
  <header class="header">
    <div class="container header-content">
      <div class="logo">
        <h1>Clipboard Image</h1>
      </div>
      <nav>
        <a href="https://pub.dev/packages/clipboad_image" class="button">Get Started</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <h2>Seamless Clipboard Image Handling for Flutter</h2>
      <p>A powerful Flutter plugin that enables easy pasting of images across platforms.</p>
    </div>
  </section>

  <section class="demo">
    <div class="container">
      <h2 class="section-title">See It In Action</h2>
      <p class="section-description">Watch how easily you can paste images from clipboard in your Flutter app</p>
      <div class="demo-container">
        <img src="https://github.com/salman3xs/clipboard_image/blob/main/assets/ios_demo.gif?raw=true" alt="Clipboard Image Demo" class="demo-gif">
      </div>
    </div>
  </section>

  <section class="features" id="features">
    <div class="container">
      <h2 class="section-title">Key Features</h2>
      <p class="section-description">Everything you need for clipboard image operations in your Flutter app</p>
      
      <div class="features-grid">
        <div class="feature-card">
          <img src="https://api.iconify.design/material-symbols:content-paste.svg" alt="Paste Feature">
          <h3>Paste Images</h3>
          <p>Retrieve images from clipboard effortlessly</p>
        </div>
        <div class="feature-card">
          <img src="https://api.iconify.design/material-symbols:devices.svg" alt="Cross-platform">
          <h3>Cross-platform</h3>
          <p>Works seamlessly on iOS and Android platforms</p>
        </div>
      </div>
    </div>
  </section>

  <section class="code-section">
    <div class="container">
      <h2 class="section-title">Usage Examples</h2>
      <p class="section-description">Simple and intuitive API for clipboard operations</p>
      
      <div class="code-block">
        <pre><code class="language-dart">// Paste image from clipboard
final image = await ClipboardImage.paste();
if (image != null) {
  // Use the image
  print('Image size: \${image.width}x\${image.height}');
}</code></pre>
      </div>
    </div>
  </section>

  <section class="installation">
    <div class="container">
      <h2 class="section-title">Installation</h2>
      <p class="section-description">Add clipboard_image to your pubspec.yaml</p>
      
      <div class="code-block">
        <pre><code class="language-yaml">dependencies:
  clipboard_image: ^1.0.0</code></pre>
      </div>
    </div>
  </section>

  <section class="compatibility">
    <div class="container">
      <h2 class="section-title">Platform Compatibility</h2>
      <p class="section-description">Supported platforms and features</p>
      
      <div class="platform-grid">
        <div class="platform-card">
          <h3>iOS</h3>
          <p>✓ Paste</p>
        </div>
        <div class="platform-card">
          <h3>Android</h3>
          <p>✓ Paste</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-links">
        <h3>Documentation</h3>
        <ul>
          <li><a href="https://pub.dev/packages/clipboad_image#usage">API Reference</a></li>
          <li><a href="https://pub.dev/packages/clipboad_image/example">Examples</a></li>
          <li><a href="https://pub.dev/packages/clipboad_image">Getting Started</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h3>Resources</h3>
        <ul>
          <li><a href="https://github.com/salman3xs/clipboard_image">GitHub</a></li>
          <li><a href="https://pub.dev/packages/clipboad_image">pub.dev</a></li>
          <li><a href="https://pub.dev/packages/clipboad_image/changelog">Changelog</a></li>
        </ul>
      </div>
    </div>
  </footer>
`;ee.highlightAll();
