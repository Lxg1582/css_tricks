(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{266:function(e,t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=a.util.type(e);switch(t=t||{},n){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];var s={};for(var i in t[a.util.objId(e)]=s,e)e.hasOwnProperty(i)&&(s[i]=a.util.clone(e[i],t));return s;case"Array":if(t[a.util.objId(e)])return t[a.util.objId(e)];s=[];return t[a.util.objId(e)]=s,e.forEach(function(e,n){s[n]=a.util.clone(e,t)}),s}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var s in t)n[s]=t[s];return n},insertBefore:function(e,t,n,s){var i=(s=s||a.languages)[e];if(2==arguments.length){for(var r in n=arguments[1])n.hasOwnProperty(r)&&(i[r]=n[r]);return i}var l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var r in n)n.hasOwnProperty(r)&&(l[r]=n[r]);l[o]=i[o]}return a.languages.DFS(a.languages,function(t,n){n===s[e]&&t!=e&&(this[t]=l)}),s[e]=l},DFS:function(e,t,n,s){for(var i in s=s||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||s[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||s[a.util.objId(e[i])]||(s[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,s)):(s[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,s)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var s={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",s);for(var i,r=s.elements||e.querySelectorAll(s.selector),l=0;i=r[l++];)a.highlightElement(i,!0===t,s.callback)},highlightElement:function(t,s,i){for(var r,l,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),l=a.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&(o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r));var u={element:t,language:r,grammar:l,code:t.textContent};if(a.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(a.hooks.run("before-highlight",u),u.element.textContent=u.code,a.hooks.run("after-highlight",u)),void a.hooks.run("complete",u);if(a.hooks.run("before-highlight",u),s&&n.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u.highlightedCode=e.data,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(u.element),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=a.highlight(u.code,u.grammar,u.language),a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(t),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),s.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,s,i,r,l){var o=a.Token;for(var u in n)if(n.hasOwnProperty(u)&&n[u]){if(u==l)return;var c=n[u];c="Array"===a.util.type(c)?c:[c];for(var g=0;g<c.length;++g){var d=c[g],p=d.inside,h=!!d.lookbehind,f=!!d.greedy,m=0,y=d.alias;if(f&&!d.pattern.global){var v=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,v+"g")}d=d.pattern||d;for(var b=s,k=i;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof o)){if(f&&b!=t.length-1){if(d.lastIndex=k,!(A=d.exec(e)))break;for(var C=A.index+(h?A[1].length:0),j=A.index+A[0].length,x=b,F=k,I=t.length;x<I&&(F<j||!t[x].type&&!t[x-1].greedy);++x)C>=(F+=t[x].length)&&(++b,k=F);if(t[b]instanceof o)continue;_=x-b,w=e.slice(k,F),A.index-=k}else{d.lastIndex=0;var A=d.exec(w),_=1}if(A){h&&(m=A[1]?A[1].length:0);j=(C=A.index+m)+(A=A[0].slice(m)).length;var S=w.slice(0,C),N=w.slice(j),P=[b,_];S&&(++b,k+=S.length,P.push(S));var $=new o(u,p?a.tokenize(A,p):A,y,A,f);if(P.push($),N&&P.push(N),Array.prototype.splice.apply(t,P),1!=_&&a.matchGrammar(e,t,n,b,k,!0,u),r)break}else if(r)break}}}}},tokenize:function(e,t,n){var s=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return a.matchGrammar(e,s,t,0,0,!1),s},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var s,i=0;s=n[i++];)s(t)}}},s=a.Token=function(e,t,n,a,s){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!s};if(s.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return s.stringify(n,t,e)}).join("");var i={type:e.type,content:s.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var r="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}a.hooks.run("wrap",i);var l=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(l?" "+l:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),s=t.language,i=t.code,r=t.immediateClose;n.postMessage(a.highlight(i,a.languages[s],s)),r&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),a.languages.javascript["template-string"].inside.interpolation.inside.rest=a.languages.javascript,a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,s=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(t.className.match(r)||[,""])[1]),!n){var l=(s.match(/\.(\w+)$/)||[,""])[1];n=e[l]||l}var o=document.createElement("code");o.className="language-"+n,t.textContent="",o.textContent="Loading…",t.appendChild(o);var u=new XMLHttpRequest;u.open("GET",s,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(o.textContent=u.responseText,a.highlightElement(o)):u.status>=400?o.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:o.textContent="✖ Error: File does not exist or is empty")},u.send(null)}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))},288:function(e,t,n){},349:function(e,t,n){"use strict";var a=n(288);n.n(a).a},400:function(e,t,n){"use strict";n.r(t);var a=n(266),s=n.n(a),i={name:"grid2",data:function(){return{value:["start","end","center","stretch"],value2:["start","end","center","stretch","space-around","space-between","space-evenly"],justifyContent:"start",alignContent:"start",justifyItems:"stretch",alignItems:"stretch",gridItem:[{colum:"1/2",row:"1/2"},{colum:"2/3",row:"1/2"},{colum:"1/2",row:"2/3"},{colum:"2/3",row:"2/3"}]}},watch:{justifyItems:function(){this.updateItemsCss()},alignItems:function(){this.updateItemsCss()},justifyContent:function(){this.updateContentCss()},alignContent:function(){this.updateContentCss()}},methods:{updateItemsCss:function(){this.$refs.placeItems.innerHTML=s.a.highlight("place-items: ".concat(this.alignItems==this.justifyItems?"".concat(this.alignItems):"".concat(this.alignItems," ").concat(this.justifyItems),";"),s.a.languages.css)},updateContentCss:function(){this.$refs.placeContent.innerHTML=s.a.highlight("place-content: ".concat(this.alignContent==this.justifyContent?"".concat(this.alignContent):"".concat(this.alignContent," ").concat(this.justifyContent),";"),s.a.languages.css)}},mounted:function(){this.updateContentCss(),this.updateItemsCss()}},r=(n(349),n(1)),l=Object(r.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid2-container"},[n("div",{staticClass:"grid-wrapper",style:{justifyItems:e.justifyItems,alignItems:e.alignItems,justifyContent:e.justifyContent,alignContent:e.alignContent}},e._l(e.gridItem,function(t,a){return n("div",{key:a,staticClass:"grid-item",style:{gridColumn:t.column,gridRow:t.row}},[e._v("\n      gird-item"+e._s(a+1)+"\n    ")])})),e._v(" "),n("pre",{staticClass:"language-css"},[n("code",{ref:"placeItems"})]),e._v(" "),n("div",{staticClass:"key-value"},[n("span",{staticClass:"key"},[e._v("justify-items:")]),e._v(" "),n("div",e._l(e.value,function(t,a){return n("el-radio",{key:a,attrs:{label:t},model:{value:e.justifyItems,callback:function(t){e.justifyItems=t},expression:"justifyItems"}})}))]),e._v(" "),n("div",{staticClass:"key-value"},[n("span",{staticClass:"key"},[e._v("align-items:")]),e._v(" "),n("div",e._l(e.value,function(t,a){return n("el-radio",{key:a,attrs:{label:t},model:{value:e.alignItems,callback:function(t){e.alignItems=t},expression:"alignItems"}})}))]),e._v(" "),n("pre",{staticClass:"language-css"},[n("code",{ref:"placeContent"})]),e._v(" "),n("div",{staticClass:"key-value"},[n("span",{staticClass:"key"},[e._v("justify-content:")]),e._v(" "),n("div",e._l(e.value2,function(t,a){return n("el-radio",{key:a,attrs:{label:t},model:{value:e.justifyContent,callback:function(t){e.justifyContent=t},expression:"justifyContent"}})}))]),e._v(" "),n("div",{staticClass:"key-value"},[n("span",{staticClass:"key"},[e._v("align-content:")]),e._v(" "),n("div",e._l(e.value2,function(t,a){return n("el-radio",{key:a,attrs:{label:t},model:{value:e.alignContent,callback:function(t){e.alignContent=t},expression:"alignContent"}})}))])])},[],!1,null,null,null);l.options.__file="grid2.vue";t.default=l.exports}}]);