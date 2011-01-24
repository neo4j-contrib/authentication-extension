/*
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(aO,I){function a0(){if(!ah.isReady){try{M.documentElement.doScroll("left")
}catch(c){setTimeout(a0,1);
return
}ah.ready()
}}function E(s,c){c.src?ah.ajax({url:c.src,async:false,dataType:"script"}):ah.globalEval(c.text||c.textContent||c.innerHTML||"");
c.parentNode&&c.parentNode.removeChild(c)
}function ap(s,c,K,F,G,w){var A=s.length;
if(typeof c==="object"){for(var J in c){ap(s,J,c[J],F,G,K)
}return s
}if(K!==I){F=!w&&F&&ah.isFunction(K);
for(J=0;
J<A;
J++){G(s[J],c,F?K.call(s[J],J,G(s[J],c)):K,w)
}return s
}return A?G(s[0],c):I
}function aF(){return(new Date).getTime()
}function ao(){return false
}function am(){return true
}function aK(s,c,w){w[0].type=s;
return ah.event.handle.apply(c,w)
}function ag(O){var N,L=[],J=[],K=arguments,F,G,s,A,w,c;
G=ah.data(this,"events");
if(!(O.liveFired===this||!G||!G.live||O.button&&O.type==="click")){O.liveFired=this;
var P=G.live.slice(0);
for(A=0;
A<P.length;
A++){G=P[A];
G.origType.replace(az,"")===O.type?J.push(G.selector):P.splice(A--,1)
}F=ah(O.target).closest(J,O.currentTarget);
w=0;
for(c=F.length;
w<c;
w++){for(A=0;
A<P.length;
A++){G=P[A];
if(F[w].selector===G.selector){s=F[w].elem;
J=null;
if(G.preType==="mouseenter"||G.preType==="mouseleave"){J=ah(O.relatedTarget).closest(G.selector)[0]
}if(!J||J!==s){L.push({elem:s,handleObj:G})
}}}}w=0;
for(c=L.length;
w<c;
w++){F=L[w];
O.currentTarget=F.elem;
O.data=F.handleObj.data;
O.handleObj=F.handleObj;
if(F.handleObj.origHandler.apply(F.elem,K)===false){N=false;
break
}}return N
}}function z(s,c){return"live."+(s&&s!=="*"?s+".":"")+c.replace(/\./g,"`").replace(/ /g,"&")
}function l(c){return !c||!c.parentNode||c.parentNode.nodeType===11
}function bj(s,c){var w=0;
c.each(function(){if(this.nodeName===(s[w]&&s[w].nodeName)){var G=ah.data(s[w++]),J=ah.data(this,G);
if(G=G&&G.events){delete J.handle;
J.events={};
for(var A in G){for(var F in G[A]){ah.event.add(this,A,G[A][F],G[A][F].data)
}}}}})
}function a3(s,c,G){var A,F,w;
c=c&&c[0]?c[0].ownerDocument||c[0]:M;
if(s.length===1&&typeof s[0]==="string"&&s[0].length<512&&c===M&&!aP.test(s[0])&&(ah.support.checkClone||!ak.test(s[0]))){F=true;
if(w=ah.fragments[s[0]]){if(w!==1){A=w
}}}if(!A){A=c.createDocumentFragment();
ah.clean(s,c,A,G)
}if(F){ah.fragments[s[0]]=w?A:1
}return{fragment:A,cacheable:F}
}function aC(s,c){var w={};
ah.each(D.concat.apply([],D.slice(0,c)),function(){w[this]=s
});
return w
}function o(c){return"scrollTo" in c&&c.document?c:c.nodeType===9?c.defaultView||c.parentWindow:false
}var ah=function(s,c){return new ah.fn.init(s,c)
},p=aO.jQuery,d=aO.$,M=aO.document,at,a7=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,aT=/^.[^:#\[\.,]*$/,an=/\S/,H=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,q=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,ax=navigator.userAgent,b=false,av=[],aB,a1=Object.prototype.toString,aV=Object.prototype.hasOwnProperty,ay=Array.prototype.push,au=Array.prototype.slice,a6=Array.prototype.indexOf;
ah.fn=ah.prototype={init:function(s,c){var A,w;
if(!s){return this
}if(s.nodeType){this.context=this[0]=s;
this.length=1;
return this
}if(s==="body"&&!c){this.context=M;
this[0]=M.body;
this.selector="body";
this.length=1;
return this
}if(typeof s==="string"){if((A=a7.exec(s))&&(A[1]||!c)){if(A[1]){w=c?c.ownerDocument||c:M;
if(s=q.exec(s)){if(ah.isPlainObject(c)){s=[M.createElement(s[1])];
ah.fn.attr.call(s,c,true)
}else{s=[w.createElement(s[1])]
}}else{s=a3([A[1]],[w]);
s=(s.cacheable?s.fragment.cloneNode(true):s.fragment).childNodes
}return ah.merge(this,s)
}else{if(c=M.getElementById(A[2])){if(c.id!==A[2]){return at.find(s)
}this.length=1;
this[0]=c
}this.context=M;
this.selector=s;
return this
}}else{if(!c&&/^\w+$/.test(s)){this.selector=s;
this.context=M;
s=M.getElementsByTagName(s);
return ah.merge(this,s)
}else{return !c||c.jquery?(c||at).find(s):ah(c).find(s)
}}}else{if(ah.isFunction(s)){return at.ready(s)
}}if(s.selector!==I){this.selector=s.selector;
this.context=s.context
}return ah.makeArray(s,this)
},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length
},toArray:function(){return au.call(this,0)
},get:function(c){return c==null?this.toArray():c<0?this.slice(c)[0]:this[c]
},pushStack:function(s,c,A){var w=ah();
ah.isArray(s)?ay.apply(w,s):ah.merge(w,s);
w.prevObject=this;
w.context=this.context;
if(c==="find"){w.selector=this.selector+(this.selector?" ":"")+A
}else{if(c){w.selector=this.selector+"."+c+"("+A+")"
}}return w
},each:function(s,c){return ah.each(this,s,c)
},ready:function(c){ah.bindReady();
if(ah.isReady){c.call(M,ah)
}else{av&&av.push(c)
}return this
},eq:function(c){return c===-1?this.slice(c):this.slice(c,+c+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(au.apply(this,arguments),"slice",au.call(arguments).join(","))
},map:function(c){return this.pushStack(ah.map(this,function(s,w){return c.call(s,w,s)
}))
},end:function(){return this.prevObject||ah(null)
},push:ay,sort:[].sort,splice:[].splice};
ah.fn.init.prototype=ah.fn;
ah.extend=ah.fn.extend=function(){var s=arguments[0]||{},c=1,K=arguments.length,F=false,G,w,A,J;
if(typeof s==="boolean"){F=s;
s=arguments[1]||{};
c=2
}if(typeof s!=="object"&&!ah.isFunction(s)){s={}
}if(K===c){s=this;
--c
}for(;
c<K;
c++){if((G=arguments[c])!=null){for(w in G){A=s[w];
J=G[w];
if(s!==J){if(F&&J&&(ah.isPlainObject(J)||ah.isArray(J))){A=A&&(ah.isPlainObject(A)||ah.isArray(A))?A:ah.isArray(J)?[]:{};
s[w]=ah.extend(F,A,J)
}else{if(J!==I){s[w]=J
}}}}}}return s
};
ah.extend({noConflict:function(c){aO.$=d;
if(c){aO.jQuery=p
}return ah
},isReady:false,ready:function(){if(!ah.isReady){if(!M.body){return setTimeout(ah.ready,13)
}ah.isReady=true;
if(av){for(var s,c=0;
s=av[c++];
){s.call(M,ah)
}av=null
}ah.fn.triggerHandler&&ah(M).triggerHandler("ready")
}},bindReady:function(){if(!b){b=true;
if(M.readyState==="complete"){return ah.ready()
}if(M.addEventListener){M.addEventListener("DOMContentLoaded",aB,false);
aO.addEventListener("load",ah.ready,false)
}else{if(M.attachEvent){M.attachEvent("onreadystatechange",aB);
aO.attachEvent("onload",ah.ready);
var s=false;
try{s=aO.frameElement==null
}catch(c){}M.documentElement.doScroll&&s&&a0()
}}}},isFunction:function(c){return a1.call(c)==="[object Function]"
},isArray:function(c){return a1.call(c)==="[object Array]"
},isPlainObject:function(s){if(!s||a1.call(s)!=="[object Object]"||s.nodeType||s.setInterval){return false
}if(s.constructor&&!aV.call(s,"constructor")&&!aV.call(s.constructor.prototype,"isPrototypeOf")){return false
}var c;
for(c in s){}return c===I||aV.call(s,c)
},isEmptyObject:function(s){for(var c in s){return false
}return true
},error:function(c){throw c
},parseJSON:function(c){if(typeof c!=="string"||!c){return null
}c=ah.trim(c);
if(/^[\],:{}\s]*$/.test(c.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return aO.JSON&&aO.JSON.parse?aO.JSON.parse(c):(new Function("return "+c))()
}else{ah.error("Invalid JSON: "+c)
}},noop:function(){},globalEval:function(s){if(s&&an.test(s)){var c=M.getElementsByTagName("head")[0]||M.documentElement,w=M.createElement("script");
w.type="text/javascript";
if(ah.support.scriptEval){w.appendChild(M.createTextNode(s))
}else{w.text=s
}c.insertBefore(w,c.firstChild);
c.removeChild(w)
}},nodeName:function(s,c){return s.nodeName&&s.nodeName.toUpperCase()===c.toUpperCase()
},each:function(s,c,J){var F,G=0,w=s.length,A=w===I||ah.isFunction(s);
if(J){if(A){for(F in s){if(c.apply(s[F],J)===false){break
}}}else{for(;
G<w;
){if(c.apply(s[G++],J)===false){break
}}}}else{if(A){for(F in s){if(c.call(s[F],F,s[F])===false){break
}}}else{for(J=s[0];
G<w&&c.call(J,G,J)!==false;
J=s[++G]){}}}return s
},trim:function(c){return(c||"").replace(H,"")
},makeArray:function(s,c){c=c||[];
if(s!=null){s.length==null||typeof s==="string"||ah.isFunction(s)||typeof s!=="function"&&s.setInterval?ay.call(c,s):ah.merge(c,s)
}return c
},inArray:function(s,c){if(c.indexOf){return c.indexOf(s)
}for(var A=0,w=c.length;
A<w;
A++){if(c[A]===s){return A
}}return -1
},merge:function(s,c){var F=s.length,w=0;
if(typeof c.length==="number"){for(var A=c.length;
w<A;
w++){s[F++]=c[w]
}}else{for(;
c[w]!==I;
){s[F++]=c[w++]
}}s.length=F;
return s
},grep:function(s,c,G){for(var A=[],F=0,w=s.length;
F<w;
F++){!G!==!c(s[F],F)&&A.push(s[F])
}return A
},map:function(s,c,J){for(var F=[],G,w=0,A=s.length;
w<A;
w++){G=c(s[w],w,J);
if(G!=null){F[F.length]=G
}}return F.concat.apply([],F)
},guid:1,proxy:function(s,c,w){if(arguments.length===2){if(typeof c==="string"){w=s;
s=w[c];
c=I
}else{if(c&&!ah.isFunction(c)){w=c;
c=I
}}}if(!c&&s){c=function(){return s.apply(w||this,arguments)
}
}if(s){c.guid=s.guid=s.guid||c.guid||ah.guid++
}return c
},uaMatch:function(c){c=c.toLowerCase();
c=/(webkit)[ \/]([\w.]+)/.exec(c)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(c)||/(msie) ([\w.]+)/.exec(c)||!/compatible/.test(c)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(c)||[];
return{browser:c[1]||"",version:c[2]||"0"}
},browser:{}});
ax=ah.uaMatch(ax);
if(ax.browser){ah.browser[ax.browser]=true;
ah.browser.version=ax.version
}if(ah.browser.webkit){ah.browser.safari=true
}if(a6){ah.inArray=function(s,c){return a6.call(c,s)
}
}at=ah(M);
if(M.addEventListener){aB=function(){M.removeEventListener("DOMContentLoaded",aB,false);
ah.ready()
}
}else{if(M.attachEvent){aB=function(){if(M.readyState==="complete"){M.detachEvent("onreadystatechange",aB);
ah.ready()
}}
}}(function(){ah.support={};
var L=M.documentElement,K=M.createElement("script"),J=M.createElement("div"),F="script"+aF();
J.style.display="none";
J.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var G=J.getElementsByTagName("*"),w=J.getElementsByTagName("a")[0];
if(!(!G||!G.length||!w)){ah.support={leadingWhitespace:J.firstChild.nodeType===3,tbody:!J.getElementsByTagName("tbody").length,htmlSerialize:!!J.getElementsByTagName("link").length,style:/red/.test(w.getAttribute("style")),hrefNormalized:w.getAttribute("href")==="/a",opacity:/^0.55$/.test(w.style.opacity),cssFloat:!!w.style.cssFloat,checkOn:J.getElementsByTagName("input")[0].value==="on",optSelected:M.createElement("select").appendChild(M.createElement("option")).selected,parentNode:J.removeChild(J.appendChild(M.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};
K.type="text/javascript";
try{K.appendChild(M.createTextNode("window."+F+"=1;"))
}catch(A){}L.insertBefore(K,L.firstChild);
if(aO[F]){ah.support.scriptEval=true;
delete aO[F]
}try{delete K.test
}catch(c){ah.support.deleteExpando=false
}L.removeChild(K);
if(J.attachEvent&&J.fireEvent){J.attachEvent("onclick",function s(){ah.support.noCloneEvent=false;
J.detachEvent("onclick",s)
});
J.cloneNode(true).fireEvent("onclick")
}J=M.createElement("div");
J.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";
L=M.createDocumentFragment();
L.appendChild(J.firstChild);
ah.support.checkClone=L.cloneNode(true).cloneNode(true).lastChild.checked;
ah(function(){var N=M.createElement("div");
N.style.width=N.style.paddingLeft="1px";
M.body.appendChild(N);
ah.boxModel=ah.support.boxModel=N.offsetWidth===2;
M.body.removeChild(N).style.display="none"
});
L=function(N){var P=M.createElement("div");
N="on"+N;
var O=N in P;
if(!O){P.setAttribute(N,"return;");
O=typeof P[N]==="function"
}return O
};
ah.support.submitBubbles=L("submit");
ah.support.changeBubbles=L("change");
L=K=J=G=w=null
}})();
ah.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};
var aH="jQuery"+aF(),e=0,aS={};
ah.extend({cache:{},expando:aH,noData:{embed:true,object:true,applet:true},data:function(s,c,F){if(!(s.nodeName&&ah.noData[s.nodeName.toLowerCase()])){s=s==aO?aS:s;
var w=s[aH],A=ah.cache;
if(!w&&typeof c==="string"&&F===I){return null
}w||(w=++e);
if(typeof c==="object"){s[aH]=w;
A[w]=ah.extend(true,{},c)
}else{if(!A[w]){s[aH]=w;
A[w]={}
}}s=A[w];
if(F!==I){s[c]=F
}return typeof c==="string"?s[c]:s
}},removeData:function(s,c){if(!(s.nodeName&&ah.noData[s.nodeName.toLowerCase()])){s=s==aO?aS:s;
var F=s[aH],w=ah.cache,A=w[F];
if(c){if(A){delete A[c];
ah.isEmptyObject(A)&&ah.removeData(s)
}}else{if(ah.support.deleteExpando){delete s[ah.expando]
}else{s.removeAttribute&&s.removeAttribute(ah.expando)
}delete w[F]
}}}});
ah.fn.extend({data:function(s,c){if(typeof s==="undefined"&&this.length){return ah.data(this[0])
}else{if(typeof s==="object"){return this.each(function(){ah.data(this,s)
})
}}var A=s.split(".");
A[1]=A[1]?"."+A[1]:"";
if(c===I){var w=this.triggerHandler("getData"+A[1]+"!",[A[0]]);
if(w===I&&this.length){w=ah.data(this[0],s)
}return w===I&&A[1]?this.data(A[0]):w
}else{return this.trigger("setData"+A[1]+"!",[A[0],c]).each(function(){ah.data(this,s,c)
})
}},removeData:function(c){return this.each(function(){ah.removeData(this,c)
})
}});
ah.extend({queue:function(s,c,A){if(s){c=(c||"fx")+"queue";
var w=ah.data(s,c);
if(!A){return w||[]
}if(!w||ah.isArray(A)){w=ah.data(s,c,ah.makeArray(A))
}else{w.push(A)
}return w
}},dequeue:function(s,c){c=c||"fx";
var A=ah.queue(s,c),w=A.shift();
if(w==="inprogress"){w=A.shift()
}if(w){c==="fx"&&A.unshift("inprogress");
w.call(s,function(){ah.dequeue(s,c)
})
}}});
ah.fn.extend({queue:function(s,c){if(typeof s!=="string"){c=s;
s="fx"
}if(c===I){return ah.queue(this[0],s)
}return this.each(function(){var w=ah.queue(this,s,c);
s==="fx"&&w[0]!=="inprogress"&&ah.dequeue(this,s)
})
},dequeue:function(c){return this.each(function(){ah.dequeue(this,c)
})
},delay:function(s,c){s=ah.fx?ah.fx.speeds[s]||s:s;
c=c||"fx";
return this.queue(c,function(){var w=this;
setTimeout(function(){ah.dequeue(w,c)
},s)
})
},clearQueue:function(c){return this.queue(c||"fx",[])
}});
var be=/[\n\t]/g,U=/\s+/,a8=/\r/g,aM=/href|src|style/,aU=/(button|input)/i,aw=/(button|input|object|select|textarea)/i,S=/^(a|area)$/i,aY=/radio|checkbox/;
ah.fn.extend({attr:function(s,c){return ap(this,s,c,true,ah.attr)
},removeAttr:function(c){return this.each(function(){ah.attr(this,c,"");
this.nodeType===1&&this.removeAttribute(c)
})
},addClass:function(L){if(ah.isFunction(L)){return this.each(function(O){var N=ah(this);
N.addClass(L.call(this,O,N.attr("class")))
})
}if(L&&typeof L==="string"){for(var K=(L||"").split(U),J=0,F=this.length;
J<F;
J++){var G=this[J];
if(G.nodeType===1){if(G.className){for(var w=" "+G.className+" ",A=G.className,c=0,s=K.length;
c<s;
c++){if(w.indexOf(" "+K[c]+" ")<0){A+=" "+K[c]
}}G.className=ah.trim(A)
}else{G.className=L
}}}}return this
},removeClass:function(s){if(ah.isFunction(s)){return this.each(function(L){var N=ah(this);
N.removeClass(s.call(this,L,N.attr("class")))
})
}if(s&&typeof s==="string"||s===I){for(var c=(s||"").split(U),K=0,F=this.length;
K<F;
K++){var G=this[K];
if(G.nodeType===1&&G.className){if(s){for(var w=(" "+G.className+" ").replace(be," "),A=0,J=c.length;
A<J;
A++){w=w.replace(" "+c[A]+" "," ")
}G.className=ah.trim(w)
}else{G.className=""
}}}}return this
},toggleClass:function(s,c){var A=typeof s,w=typeof c==="boolean";
if(ah.isFunction(s)){return this.each(function(G){var F=ah(this);
F.toggleClass(s.call(this,G,F.attr("class"),c),c)
})
}return this.each(function(){if(A==="string"){for(var K,G=0,J=ah(this),L=c,F=s.split(U);
K=F[G++];
){L=w?L:!J.hasClass(K);
J[L?"addClass":"removeClass"](K)
}}else{if(A==="undefined"||A==="boolean"){this.className&&ah.data(this,"__className__",this.className);
this.className=this.className||s===false?"":ah.data(this,"__className__")||""
}}})
},hasClass:function(s){s=" "+s+" ";
for(var c=0,w=this.length;
c<w;
c++){if((" "+this[c].className+" ").replace(be," ").indexOf(s)>-1){return true
}}return false
},val:function(s){if(s===I){var c=this[0];
if(c){if(ah.nodeName(c,"option")){return(c.attributes.value||{}).specified?c.value:c.text
}if(ah.nodeName(c,"select")){var K=c.selectedIndex,F=[],G=c.options;
c=c.type==="select-one";
if(K<0){return null
}var w=c?K:0;
for(K=c?K+1:G.length;
w<K;
w++){var A=G[w];
if(A.selected){s=ah(A).val();
if(c){return s
}F.push(s)
}}return F
}if(aY.test(c.type)&&!ah.support.checkOn){return c.getAttribute("value")===null?"on":c.value
}return(c.value||"").replace(a8,"")
}return I
}var J=ah.isFunction(s);
return this.each(function(L){var P=ah(this),O=s;
if(this.nodeType===1){if(J){O=s.call(this,L,P.val())
}if(typeof O==="number"){O+=""
}if(ah.isArray(O)&&aY.test(this.type)){this.checked=ah.inArray(P.val(),O)>=0
}else{if(ah.nodeName(this,"select")){var N=ah.makeArray(O);
ah("option",this).each(function(){this.selected=ah.inArray(ah(this).val(),N)>=0
});
if(!N.length){this.selectedIndex=-1
}}else{this.value=O
}}}})
}});
ah.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(s,c,G,A){if(!s||s.nodeType===3||s.nodeType===8){return I
}if(A&&c in ah.attrFn){return ah(s)[c](G)
}A=s.nodeType!==1||!ah.isXMLDoc(s);
var F=G!==I;
c=A&&ah.props[c]||c;
if(s.nodeType===1){var w=aM.test(c);
if(c in s&&A&&!w){if(F){c==="type"&&aU.test(s.nodeName)&&s.parentNode&&ah.error("type property can't be changed");
s[c]=G
}if(ah.nodeName(s,"form")&&s.getAttributeNode(c)){return s.getAttributeNode(c).nodeValue
}if(c==="tabIndex"){return(c=s.getAttributeNode("tabIndex"))&&c.specified?c.value:aw.test(s.nodeName)||S.test(s.nodeName)&&s.href?0:I
}return s[c]
}if(!ah.support.style&&A&&c==="style"){if(F){s.style.cssText=""+G
}return s.style.cssText
}F&&s.setAttribute(c,""+G);
s=!ah.support.hrefNormalized&&A&&w?s.getAttribute(c,2):s.getAttribute(c);
return s===null?I:s
}return ah.style(s,c,G)
}});
var az=/\.(.*)$/,r=function(c){return c.replace(/[^\w\s\.\|`]/g,function(s){return"\\"+s
})
};
ah.event={add:function(P,O,L,J){if(!(P.nodeType===3||P.nodeType===8)){if(P.setInterval&&P!==aO&&!P.frameElement){P=aO
}var K,F;
if(L.handler){K=L;
L=K.handler
}if(!L.guid){L.guid=ah.guid++
}if(F=ah.data(P)){var G=F.events=F.events||{},s=F.handle;
if(!s){F.handle=s=function(){return typeof ah!=="undefined"&&!ah.event.triggered?ah.event.handle.apply(s.elem,arguments):I
}
}s.elem=P;
O=O.split(" ");
for(var A,w=0,c;
A=O[w++];
){F=K?ah.extend({},K):{handler:L,data:J};
if(A.indexOf(".")>-1){c=A.split(".");
A=c.shift();
F.namespace=c.slice(0).sort().join(".")
}else{c=[];
F.namespace=""
}F.type=A;
F.guid=L.guid;
var Q=G[A],N=ah.event.special[A]||{};
if(!Q){Q=G[A]=[];
if(!N.setup||N.setup.call(P,J,c,s)===false){if(P.addEventListener){P.addEventListener(A,s,false)
}else{P.attachEvent&&P.attachEvent("on"+A,s)
}}}if(N.add){N.add.call(P,F);
if(!F.handler.guid){F.handler.guid=L.guid
}}Q.push(F);
ah.event.global[A]=true
}P=null
}}},global:{},remove:function(R,Q,O,L){if(!(R.nodeType===3||R.nodeType===8)){var N,J=0,K,A,G,F,c,T,P=ah.data(R),s=P&&P.events;
if(P&&s){if(Q&&Q.type){O=Q.handler;
Q=Q.type
}if(!Q||typeof Q==="string"&&Q.charAt(0)==="."){Q=Q||"";
for(N in s){ah.event.remove(R,N+Q)
}}else{for(Q=Q.split(" ");
N=Q[J++];
){F=N;
K=N.indexOf(".")<0;
A=[];
if(!K){A=N.split(".");
N=A.shift();
G=new RegExp("(^|\\.)"+ah.map(A.slice(0).sort(),r).join("\\.(?:.*\\.)?")+"(\\.|$)")
}if(c=s[N]){if(O){F=ah.event.special[N]||{};
for(w=L||0;
w<c.length;
w++){T=c[w];
if(O.guid===T.guid){if(K||G.test(T.namespace)){L==null&&c.splice(w--,1);
F.remove&&F.remove.call(R,T)
}if(L!=null){break
}}}if(c.length===0||L!=null&&c.length===1){if(!F.teardown||F.teardown.call(R,A)===false){aG(R,N,P.handle)
}delete s[N]
}}else{for(var w=0;
w<c.length;
w++){T=c[w];
if(K||G.test(T.namespace)){ah.event.remove(R,F,T.handler,w);
c.splice(w--,1)
}}}}}if(ah.isEmptyObject(s)){if(Q=P.handle){Q.elem=null
}delete P.events;
delete P.handle;
ah.isEmptyObject(P)&&ah.removeData(R)
}}}}},trigger:function(N,L,K,G){var J=N.type||N;
if(!G){N=typeof N==="object"?N[aH]?N:ah.extend(ah.Event(J),N):ah.Event(J);
if(J.indexOf("!")>=0){N.type=J=J.slice(0,-1);
N.exclusive=true
}if(!K){N.stopPropagation();
ah.event.global[J]&&ah.each(ah.cache,function(){this.events&&this.events[J]&&ah.event.trigger(N,L,this.handle.elem)
})
}if(!K||K.nodeType===3||K.nodeType===8){return I
}N.result=I;
N.target=K;
L=ah.makeArray(L);
L.unshift(N)
}N.currentTarget=K;
(G=ah.data(K,"handle"))&&G.apply(K,L);
G=K.parentNode||K.ownerDocument;
try{if(!(K&&K.nodeName&&ah.noData[K.nodeName.toLowerCase()])){if(K["on"+J]&&K["on"+J].apply(K,L)===false){N.result=false
}}}catch(A){}if(!N.isPropagationStopped()&&G){ah.event.trigger(N,L,G,true)
}else{if(!N.isDefaultPrevented()){G=N.target;
var F,c=ah.nodeName(G,"a")&&J==="click",w=ah.event.special[J]||{};
if((!w._default||w._default.call(K,N)===false)&&!c&&!(G&&G.nodeName&&ah.noData[G.nodeName.toLowerCase()])){try{if(G[J]){if(F=G["on"+J]){G["on"+J]=null
}ah.event.triggered=true;
G[J]()
}}catch(s){}if(F){G["on"+J]=F
}ah.event.triggered=false
}}}},handle:function(s){var c,J,F,G;
s=arguments[0]=ah.event.fix(s||aO.event);
s.currentTarget=this;
c=s.type.indexOf(".")<0&&!s.exclusive;
if(!c){J=s.type.split(".");
s.type=J.shift();
F=new RegExp("(^|\\.)"+J.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")
}G=ah.data(this,"events");
J=G[s.type];
if(G&&J){J=J.slice(0);
G=0;
for(var w=J.length;
G<w;
G++){var A=J[G];
if(c||F.test(A.namespace)){s.handler=A.handler;
s.data=A.data;
s.handleObj=A;
A=A.handler.apply(this,arguments);
if(A!==I){s.result=A;
if(A===false){s.preventDefault();
s.stopPropagation()
}}if(s.isImmediatePropagationStopped()){break
}}}}return s.result
},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(s){if(s[aH]){return s
}var c=s;
s=ah.Event(c);
for(var A=this.props.length,w;
A;
){w=this.props[--A];
s[w]=c[w]
}if(!s.target){s.target=s.srcElement||M
}if(s.target.nodeType===3){s.target=s.target.parentNode
}if(!s.relatedTarget&&s.fromElement){s.relatedTarget=s.fromElement===s.target?s.toElement:s.fromElement
}if(s.pageX==null&&s.clientX!=null){c=M.documentElement;
A=M.body;
s.pageX=s.clientX+(c&&c.scrollLeft||A&&A.scrollLeft||0)-(c&&c.clientLeft||A&&A.clientLeft||0);
s.pageY=s.clientY+(c&&c.scrollTop||A&&A.scrollTop||0)-(c&&c.clientTop||A&&A.clientTop||0)
}if(!s.which&&(s.charCode||s.charCode===0?s.charCode:s.keyCode)){s.which=s.charCode||s.keyCode
}if(!s.metaKey&&s.ctrlKey){s.metaKey=s.ctrlKey
}if(!s.which&&s.button!==I){s.which=s.button&1?1:s.button&2?3:s.button&4?2:0
}return s
},guid:100000000,proxy:ah.proxy,special:{ready:{setup:ah.bindReady,teardown:ah.noop},live:{add:function(c){ah.event.add(this,c.origType,ah.extend({},c,{handler:ag}))
},remove:function(s){var c=true,w=s.origType.replace(az,"");
ah.each(ah.data(this,"events").live||[],function(){if(w===this.origType.replace(az,"")){return c=false
}});
c&&ah.event.remove(this,s.origType,ag)
}},beforeunload:{setup:function(s,c,w){if(this.setInterval){this.onbeforeunload=w
}return false
},teardown:function(s,c){if(this.onbeforeunload===c){this.onbeforeunload=null
}}}}};
var aG=M.removeEventListener?function(s,c,w){s.removeEventListener(c,w,false)
}:function(s,c,w){s.detachEvent("on"+c,w)
};
ah.Event=function(c){if(!this.preventDefault){return new ah.Event(c)
}if(c&&c.type){this.originalEvent=c;
this.type=c.type
}else{this.type=c
}this.timeStamp=aF();
this[aH]=true
};
ah.Event.prototype={preventDefault:function(){this.isDefaultPrevented=am;
var c=this.originalEvent;
if(c){c.preventDefault&&c.preventDefault();
c.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=am;
var c=this.originalEvent;
if(c){c.stopPropagation&&c.stopPropagation();
c.cancelBubble=true
}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=am;
this.stopPropagation()
},isDefaultPrevented:ao,isPropagationStopped:ao,isImmediatePropagationStopped:ao};
var ae=function(s){var c=s.relatedTarget;
try{for(;
c&&c!==this;
){c=c.parentNode
}if(c!==this){s.type=s.data;
ah.event.handle.apply(this,arguments)
}}catch(w){}},x=function(c){c.type=c.data;
ah.event.handle.apply(this,arguments)
};
ah.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(s,c){ah.event.special[s]={setup:function(w){ah.event.add(this,c,w&&w.selector?x:ae,s)
},teardown:function(w){ah.event.remove(this,c,w&&w.selector?x:ae)
}}
});
if(!ah.support.submitBubbles){ah.event.special.submit={setup:function(){if(this.nodeName.toLowerCase()!=="form"){ah.event.add(this,"click.specialSubmit",function(s){var c=s.target,w=c.type;
if((w==="submit"||w==="image")&&ah(c).closest("form").length){return aK("submit",this,arguments)
}});
ah.event.add(this,"keypress.specialSubmit",function(s){var c=s.target,w=c.type;
if((w==="text"||w==="password")&&ah(c).closest("form").length&&s.keyCode===13){return aK("submit",this,arguments)
}})
}else{return false
}},teardown:function(){ah.event.remove(this,".specialSubmit")
}}
}if(!ah.support.changeBubbles){var t=/textarea|input|select/i,g,j=function(s){var c=s.type,w=s.value;
if(c==="radio"||c==="checkbox"){w=s.checked
}else{if(c==="select-multiple"){w=s.selectedIndex>-1?ah.map(s.options,function(A){return A.selected
}).join("-"):""
}else{if(s.nodeName.toLowerCase()==="select"){w=s.selectedIndex
}}}return w
},bd=function(s,c){var F=s.target,w,A;
if(!(!t.test(F.nodeName)||F.readOnly)){w=ah.data(F,"_change_data");
A=j(F);
if(s.type!=="focusout"||F.type!=="radio"){ah.data(F,"_change_data",A)
}if(!(w===I||A===w)){if(w!=null||A){s.type="change";
return ah.event.trigger(s,c,F)
}}}};
ah.event.special.change={filters:{focusout:bd,click:function(s){var c=s.target,w=c.type;
if(w==="radio"||w==="checkbox"||c.nodeName.toLowerCase()==="select"){return bd.call(this,s)
}},keydown:function(s){var c=s.target,w=c.type;
if(s.keyCode===13&&c.nodeName.toLowerCase()!=="textarea"||s.keyCode===32&&(w==="checkbox"||w==="radio")||w==="select-multiple"){return bd.call(this,s)
}},beforeactivate:function(c){c=c.target;
ah.data(c,"_change_data",j(c))
}},setup:function(){if(this.type==="file"){return false
}for(var c in g){ah.event.add(this,c+".specialChange",g[c])
}return t.test(this.nodeName)
},teardown:function(){ah.event.remove(this,".specialChange");
return t.test(this.nodeName)
}};
g=ah.event.special.change.filters
}M.addEventListener&&ah.each({focus:"focusin",blur:"focusout"},function(s,c){function w(A){A=ah.event.fix(A);
A.type=c;
return ah.event.handle.call(this,A)
}ah.event.special[c]={setup:function(){this.addEventListener(s,w,true)
},teardown:function(){this.removeEventListener(s,w,true)
}}
});
ah.each(["bind","one"],function(s,c){ah.fn[c]=function(K,F,G){if(typeof K==="object"){for(var w in K){this[c](w,F,K[w],G)
}return this
}if(ah.isFunction(F)){G=F;
F=I
}var A=c==="one"?ah.proxy(G,function(L){ah(this).unbind(L,A);
return G.apply(this,arguments)
}):G;
if(K==="unload"&&c!=="one"){this.one(K,F,G)
}else{w=0;
for(var J=this.length;
w<J;
w++){ah.event.add(this[w],K,A,F)
}}return this
}
});
ah.fn.extend({unbind:function(s,c){if(typeof s==="object"&&!s.preventDefault){for(var A in s){this.unbind(A,s[A])
}}else{A=0;
for(var w=this.length;
A<w;
A++){ah.event.remove(this[A],s,c)
}}return this
},delegate:function(s,c,A,w){return this.live(c,A,w,s)
},undelegate:function(s,c,w){return arguments.length===0?this.unbind("live"):this.die(c,null,w,s)
},trigger:function(s,c){return this.each(function(){ah.event.trigger(s,c,this)
})
},triggerHandler:function(s,c){if(this[0]){s=ah.Event(s);
s.preventDefault();
s.stopPropagation();
ah.event.trigger(s,c,this[0]);
return s.result
}},toggle:function(s){for(var c=arguments,w=1;
w<c.length;
){ah.proxy(s,c[w++])
}return this.click(ah.proxy(s,function(A){var F=(ah.data(this,"lastToggle"+s.guid)||0)%w;
ah.data(this,"lastToggle"+s.guid,F+1);
A.preventDefault();
return c[F].apply(this,arguments)||false
}))
},hover:function(s,c){return this.mouseenter(s).mouseleave(c||s)
}});
var bh={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};
ah.each(["live","die"],function(s,c){ah.fn[c]=function(O,L,N,J){var K,A=0,G,F,w=J||this.selector,P=J?this:ah(this.context);
if(ah.isFunction(L)){N=L;
L=I
}for(O=(O||"").split(" ");
(K=O[A++])!=null;
){J=az.exec(K);
G="";
if(J){G=J[0];
K=K.replace(az,"")
}if(K==="hover"){O.push("mouseenter"+G,"mouseleave"+G)
}else{F=K;
if(K==="focus"||K==="blur"){O.push(bh[K]+G);
K+=G
}else{K=(bh[K]||K)+G
}c==="live"?P.each(function(){ah.event.add(this,z(K,w),{data:L,selector:w,handler:N,origType:K,origHandler:N,preType:F})
}):P.unbind(z(K,w),N)
}}return this
}
});
ah.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(s,c){ah.fn[c]=function(w){return w?this.bind(c,w):this.trigger(c)
};
if(ah.attrFn){ah.attrFn[c]=true
}});
aO.attachEvent&&!aO.addEventListener&&aO.attachEvent("onunload",function(){for(var s in ah.cache){if(ah.cache[s].handle){try{ah.event.remove(ah.cache[s].handle.elem)
}catch(c){}}}});
(function(){function W(ab){for(var aa="",Z,Y=0;
ab[Y];
Y++){Z=ab[Y];
if(Z.nodeType===3||Z.nodeType===4){aa+=Z.nodeValue
}else{if(Z.nodeType!==8){aa+=W(Z.childNodes)
}}}return aa
}function V(bb,ba,ab,aa,Y,Z){Y=0;
for(var bm=aa.length;
Y<bm;
Y++){var bn=aa[Y];
if(bn){bn=bn[bb];
for(var bl=false;
bn;
){if(bn.sizcache===ab){bl=aa[bn.sizset];
break
}if(bn.nodeType===1&&!Z){bn.sizcache=ab;
bn.sizset=Y
}if(bn.nodeName.toLowerCase()===ba){bl=bn;
break
}bn=bn[bb]
}aa[Y]=bl
}}}function T(bb,ba,ab,aa,Y,Z){Y=0;
for(var bm=aa.length;
Y<bm;
Y++){var bn=aa[Y];
if(bn){bn=bn[bb];
for(var bl=false;
bn;
){if(bn.sizcache===ab){bl=aa[bn.sizset];
break
}if(bn.nodeType===1){if(!Z){bn.sizcache=ab;
bn.sizset=Y
}if(typeof ba!=="string"){if(bn===ba){bl=true;
break
}}else{if(N.filter(ba,[bn]).length>0){bl=bn;
break
}}}bn=bn[bb]
}aa[Y]=bl
}}}var Q=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,R=0,O=Object.prototype.toString,P=false,K=true;
[0,0].sort(function(){K=false;
return 0
});
var N=function(bm,bl,ba,ab){ba=ba||[];
var Z=bl=bl||M;
if(bl.nodeType!==1&&bl.nodeType!==9){return[]
}if(!bm||typeof bm!=="string"){return ba
}for(var aa=[],br,bs,bo,bb,bq=true,bn=s(bl),bp=bm;
(Q.exec(""),br=Q.exec(bp))!==null;
){bp=br[3];
aa.push(br[1]);
if(br[2]){bb=br[3];
break
}}if(aa.length>1&&G.exec(bm)){if(aa.length===2&&L.relative[aa[0]]){bs=X(aa[0]+aa[1],bl)
}else{for(bs=L.relative[aa[0]]?[bl]:N(aa.shift(),bl);
aa.length;
){bm=aa.shift();
if(L.relative[bm]){bm+=aa.shift()
}bs=X(bm,bs)
}}}else{if(!ab&&aa.length>1&&bl.nodeType===9&&!bn&&L.match.ID.test(aa[0])&&!L.match.ID.test(aa[aa.length-1])){br=N.find(aa.shift(),bl,bn);
bl=br.expr?N.filter(br.expr,br.set)[0]:br.set[0]
}if(bl){br=ab?{expr:aa.pop(),set:c(ab)}:N.find(aa.pop(),aa.length===1&&(aa[0]==="~"||aa[0]==="+")&&bl.parentNode?bl.parentNode:bl,bn);
bs=br.expr?N.filter(br.expr,br.set):br.set;
if(aa.length>0){bo=c(bs)
}else{bq=false
}for(;
aa.length;
){var Y=aa.pop();
br=Y;
if(L.relative[Y]){br=aa.pop()
}else{Y=""
}if(br==null){br=bl
}L.relative[Y](bo,br,bn)
}}else{bo=[]
}}bo||(bo=bs);
bo||N.error(Y||bm);
if(O.call(bo)==="[object Array]"){if(bq){if(bl&&bl.nodeType===1){for(bm=0;
bo[bm]!=null;
bm++){if(bo[bm]&&(bo[bm]===true||bo[bm].nodeType===1&&A(bl,bo[bm]))){ba.push(bs[bm])
}}}else{for(bm=0;
bo[bm]!=null;
bm++){bo[bm]&&bo[bm].nodeType===1&&ba.push(bs[bm])
}}}else{ba.push.apply(ba,bo)
}}else{c(bo,ba)
}if(bb){N(bb,Z,ba,ab);
N.uniqueSort(ba)
}return ba
};
N.uniqueSort=function(Z){if(J){P=K;
Z.sort(J);
if(P){for(var Y=1;
Y<Z.length;
Y++){Z[Y]===Z[Y-1]&&Z.splice(Y--,1)
}}}return Z
};
N.matches=function(Z,Y){return N(Z,null,null,Y)
};
N.find=function(bb,ba,ab){var aa,Y;
if(!bb){return[]
}for(var Z=0,bm=L.order.length;
Z<bm;
Z++){var bn=L.order[Z];
if(Y=L.leftMatch[bn].exec(bb)){var bl=Y[1];
Y.splice(1,1);
if(bl.substr(bl.length-1)!=="\\"){Y[1]=(Y[1]||"").replace(/\\/g,"");
aa=L.find[bn](Y,ba,ab);
if(aa!=null){bb=bb.replace(L.match[bn],"");
break
}}}}aa||(aa=ba.getElementsByTagName("*"));
return{set:aa,expr:bb}
};
N.filter=function(bn,bm,bb,ab){for(var Z=bn,aa=[],bt=bm,bu,bq,bl=bm&&bm[0]&&s(bm[0]);
bn&&bm.length;
){for(var bs in L.filter){if((bu=L.leftMatch[bs].exec(bn))!=null&&bu[2]){var bo=L.filter[bs],br,Y;
Y=bu[1];
bq=false;
bu.splice(1,1);
if(Y.substr(Y.length-1)!=="\\"){if(bt===aa){aa=[]
}if(L.preFilter[bs]){if(bu=L.preFilter[bs](bu,bt,bb,aa,ab,bl)){if(bu===true){continue
}}else{bq=br=true
}}if(bu){for(var ba=0;
(Y=bt[ba])!=null;
ba++){if(Y){br=bo(Y,bu,ba,bt);
var bp=ab^!!br;
if(bb&&br!=null){if(bp){bq=true
}else{bt[ba]=false
}}else{if(bp){aa.push(Y);
bq=true
}}}}}if(br!==I){bb||(bt=aa);
bn=bn.replace(L.match[bs],"");
if(!bq){return[]
}break
}}}}if(bn===Z){if(bq==null){N.error(bn)
}else{break
}}Z=bn
}return bt
};
N.error=function(Y){throw"Syntax error, unrecognized expression: "+Y
};
var L=N.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(Y){return Y.getAttribute("href")
}},relative:{"+":function(ab,aa){var Z=typeof aa==="string",Y=Z&&!/\W/.test(aa);
Z=Z&&!Y;
if(Y){aa=aa.toLowerCase()
}Y=0;
for(var ba=ab.length,bb;
Y<ba;
Y++){if(bb=ab[Y]){for(;
(bb=bb.previousSibling)&&bb.nodeType!==1;
){}ab[Y]=Z||bb&&bb.nodeName.toLowerCase()===aa?bb||false:bb===aa
}}Z&&N.filter(aa,ab,true)
},">":function(ab,aa){var Z=typeof aa==="string";
if(Z&&!/\W/.test(aa)){aa=aa.toLowerCase();
for(var Y=0,ba=ab.length;
Y<ba;
Y++){var bb=ab[Y];
if(bb){Z=bb.parentNode;
ab[Y]=Z.nodeName.toLowerCase()===aa?Z:false
}}}else{Y=0;
for(ba=ab.length;
Y<ba;
Y++){if(bb=ab[Y]){ab[Y]=Z?bb.parentNode:bb.parentNode===aa
}}Z&&N.filter(aa,ab,true)
}},"":function(ab,aa,Z){var Y=R++,ba=T;
if(typeof aa==="string"&&!/\W/.test(aa)){var bb=aa=aa.toLowerCase();
ba=V
}ba("parentNode",aa,Y,ab,bb,Z)
},"~":function(ab,aa,Z){var Y=R++,ba=T;
if(typeof aa==="string"&&!/\W/.test(aa)){var bb=aa=aa.toLowerCase();
ba=V
}ba("previousSibling",aa,Y,ab,bb,Z)
}},find:{ID:function(aa,Z,Y){if(typeof Z.getElementById!=="undefined"&&!Y){return(aa=Z.getElementById(aa[1]))?[aa]:[]
}},NAME:function(ab,aa){if(typeof aa.getElementsByName!=="undefined"){var Z=[];
aa=aa.getElementsByName(ab[1]);
for(var Y=0,ba=aa.length;
Y<ba;
Y++){aa[Y].getAttribute("name")===ab[1]&&Z.push(aa[Y])
}return Z.length===0?null:Z
}},TAG:function(Z,Y){return Y.getElementsByTagName(Z[1])
}},preFilter:{CLASS:function(ba,ab,Z,Y,bb,bl){ba=" "+ba[1].replace(/\\/g,"")+" ";
if(bl){return ba
}bl=0;
for(var aa;
(aa=ab[bl])!=null;
bl++){if(aa){if(bb^(aa.className&&(" "+aa.className+" ").replace(/[\t\n]/g," ").indexOf(ba)>=0)){Z||Y.push(aa)
}else{if(Z){ab[bl]=false
}}}}return false
},ID:function(Y){return Y[1].replace(/\\/g,"")
},TAG:function(Y){return Y[1].toLowerCase()
},CHILD:function(Z){if(Z[1]==="nth"){var Y=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(Z[2]==="even"&&"2n"||Z[2]==="odd"&&"2n+1"||!/\D/.test(Z[2])&&"0n+"+Z[2]||Z[2]);
Z[2]=Y[1]+(Y[2]||1)-0;
Z[3]=Y[3]-0
}Z[0]=R++;
return Z
},ATTR:function(ab,aa,Z,Y,ba,bb){aa=ab[1].replace(/\\/g,"");
if(!bb&&L.attrMap[aa]){ab[1]=L.attrMap[aa]
}if(ab[2]==="~="){ab[4]=" "+ab[4]+" "
}return ab
},PSEUDO:function(ab,aa,Z,Y,ba){if(ab[1]==="not"){if((Q.exec(ab[3])||"").length>1||/^\w/.test(ab[3])){ab[3]=N(ab[3],null,null,aa)
}else{ab=N.filter(ab[3],aa,Z,true^ba);
Z||Y.push.apply(Y,ab);
return false
}}else{if(L.match.POS.test(ab[0])||L.match.CHILD.test(ab[0])){return true
}}return ab
},POS:function(Y){Y.unshift(true);
return Y
}},filters:{enabled:function(Y){return Y.disabled===false&&Y.type!=="hidden"
},disabled:function(Y){return Y.disabled===true
},checked:function(Y){return Y.checked===true
},selected:function(Y){return Y.selected===true
},parent:function(Y){return !!Y.firstChild
},empty:function(Y){return !Y.firstChild
},has:function(aa,Z,Y){return !!N(Y[3],aa).length
},header:function(Y){return/h\d/i.test(Y.nodeName)
},text:function(Y){return"text"===Y.type
},radio:function(Y){return"radio"===Y.type
},checkbox:function(Y){return"checkbox"===Y.type
},file:function(Y){return"file"===Y.type
},password:function(Y){return"password"===Y.type
},submit:function(Y){return"submit"===Y.type
},image:function(Y){return"image"===Y.type
},reset:function(Y){return"reset"===Y.type
},button:function(Y){return"button"===Y.type||Y.nodeName.toLowerCase()==="button"
},input:function(Y){return/input|select|textarea|button/i.test(Y.nodeName)
}},setFilters:{first:function(Z,Y){return Y===0
},last:function(ab,aa,Z,Y){return aa===Y.length-1
},even:function(Z,Y){return Y%2===0
},odd:function(Z,Y){return Y%2===1
},lt:function(aa,Z,Y){return Z<Y[3]-0
},gt:function(aa,Z,Y){return Z>Y[3]-0
},nth:function(aa,Z,Y){return Y[3]-0===Z
},eq:function(aa,Z,Y){return Y[3]-0===Z
}},filter:{PSEUDO:function(ab,aa,Z,Y){var ba=aa[1],bb=L.filters[ba];
if(bb){return bb(ab,Z,aa,Y)
}else{if(ba==="contains"){return(ab.textContent||ab.innerText||W([ab])||"").indexOf(aa[3])>=0
}else{if(ba==="not"){aa=aa[3];
Z=0;
for(Y=aa.length;
Z<Y;
Z++){if(aa[Z]===ab){return false
}}return true
}else{N.error("Syntax error, unrecognized expression: "+ba)
}}}},CHILD:function(ba,ab){var Z=ab[1],Y=ba;
switch(Z){case"only":case"first":for(;
Y=Y.previousSibling;
){if(Y.nodeType===1){return false
}}if(Z==="first"){return true
}Y=ba;
case"last":for(;
Y=Y.nextSibling;
){if(Y.nodeType===1){return false
}}return true;
case"nth":Z=ab[2];
var bb=ab[3];
if(Z===1&&bb===0){return true
}ab=ab[0];
var bl=ba.parentNode;
if(bl&&(bl.sizcache!==ab||!ba.nodeIndex)){var aa=0;
for(Y=bl.firstChild;
Y;
Y=Y.nextSibling){if(Y.nodeType===1){Y.nodeIndex=++aa
}}bl.sizcache=ab
}ba=ba.nodeIndex-bb;
return Z===0?ba===0:ba%Z===0&&ba/Z>=0
}},ID:function(Z,Y){return Z.nodeType===1&&Z.getAttribute("id")===Y
},TAG:function(Z,Y){return Y==="*"&&Z.nodeType===1||Z.nodeName.toLowerCase()===Y
},CLASS:function(Z,Y){return(" "+(Z.className||Z.getAttribute("class"))+" ").indexOf(Y)>-1
},ATTR:function(ab,aa){var Z=aa[1];
ab=L.attrHandle[Z]?L.attrHandle[Z](ab):ab[Z]!=null?ab[Z]:ab.getAttribute(Z);
Z=ab+"";
var Y=aa[2];
aa=aa[4];
return ab==null?Y==="!=":Y==="="?Z===aa:Y==="*="?Z.indexOf(aa)>=0:Y==="~="?(" "+Z+" ").indexOf(aa)>=0:!aa?Z&&ab!==false:Y==="!="?Z!==aa:Y==="^="?Z.indexOf(aa)===0:Y==="$="?Z.substr(Z.length-aa.length)===aa:Y==="|="?Z===aa||Z.substr(0,aa.length+1)===aa+"-":false
},POS:function(ab,aa,Z,Y){var ba=L.setFilters[aa[2]];
if(ba){return ba(ab,Z,aa,Y)
}}}},G=L.match.POS;
for(var w in L.match){L.match[w]=new RegExp(L.match[w].source+/(?![^\[]*\])(?![^\(]*\))/.source);
L.leftMatch[w]=new RegExp(/(^(?:.|\r|\n)*?)/.source+L.match[w].source.replace(/\\(\d+)/g,function(Z,Y){return"\\"+(Y-0+1)
}))
}var c=function(Z,Y){Z=Array.prototype.slice.call(Z,0);
if(Y){Y.push.apply(Y,Z);
return Y
}return Z
};
try{Array.prototype.slice.call(M.documentElement.childNodes,0)
}catch(F){c=function(ab,aa){aa=aa||[];
if(O.call(ab)==="[object Array]"){Array.prototype.push.apply(aa,ab)
}else{if(typeof ab.length==="number"){for(var Z=0,Y=ab.length;
Z<Y;
Z++){aa.push(ab[Z])
}}else{for(Z=0;
ab[Z];
Z++){aa.push(ab[Z])
}}}return aa
}
}var J;
if(M.documentElement.compareDocumentPosition){J=function(Z,Y){if(!Z.compareDocumentPosition||!Y.compareDocumentPosition){if(Z==Y){P=true
}return Z.compareDocumentPosition?-1:1
}Z=Z.compareDocumentPosition(Y)&4?-1:Z===Y?0:1;
if(Z===0){P=true
}return Z
}
}else{if("sourceIndex" in M.documentElement){J=function(Z,Y){if(!Z.sourceIndex||!Y.sourceIndex){if(Z==Y){P=true
}return Z.sourceIndex?-1:1
}Z=Z.sourceIndex-Y.sourceIndex;
if(Z===0){P=true
}return Z
}
}else{if(M.createRange){J=function(ab,aa){if(!ab.ownerDocument||!aa.ownerDocument){if(ab==aa){P=true
}return ab.ownerDocument?-1:1
}var Z=ab.ownerDocument.createRange(),Y=aa.ownerDocument.createRange();
Z.setStart(ab,0);
Z.setEnd(ab,0);
Y.setStart(aa,0);
Y.setEnd(aa,0);
ab=Z.compareBoundaryPoints(Range.START_TO_END,Y);
if(ab===0){P=true
}return ab
}
}}}(function(){var aa=M.createElement("div"),Z="script"+(new Date).getTime();
aa.innerHTML="<a name='"+Z+"'/>";
var Y=M.documentElement;
Y.insertBefore(aa,Y.firstChild);
if(M.getElementById(Z)){L.find.ID=function(ab,ba,bb){if(typeof ba.getElementById!=="undefined"&&!bb){return(ba=ba.getElementById(ab[1]))?ba.id===ab[1]||typeof ba.getAttributeNode!=="undefined"&&ba.getAttributeNode("id").nodeValue===ab[1]?[ba]:I:[]
}};
L.filter.ID=function(ab,ba){var bb=typeof ab.getAttributeNode!=="undefined"&&ab.getAttributeNode("id");
return ab.nodeType===1&&bb&&bb.nodeValue===ba
}
}Y.removeChild(aa);
Y=aa=null
})();
(function(){var Y=M.createElement("div");
Y.appendChild(M.createComment(""));
if(Y.getElementsByTagName("*").length>0){L.find.TAG=function(ab,aa){aa=aa.getElementsByTagName(ab[1]);
if(ab[1]==="*"){ab=[];
for(var Z=0;
aa[Z];
Z++){aa[Z].nodeType===1&&ab.push(aa[Z])
}aa=ab
}return aa
}
}Y.innerHTML="<a href='#'></a>";
if(Y.firstChild&&typeof Y.firstChild.getAttribute!=="undefined"&&Y.firstChild.getAttribute("href")!=="#"){L.attrHandle.href=function(Z){return Z.getAttribute("href",2)
}
}Y=null
})();
M.querySelectorAll&&function(){var aa=N,Z=M.createElement("div");
Z.innerHTML="<p class='TEST'></p>";
if(!(Z.querySelectorAll&&Z.querySelectorAll(".TEST").length===0)){N=function(ab,bl,bm,ba){bl=bl||M;
if(!ba&&bl.nodeType===9&&!s(bl)){try{return c(bl.querySelectorAll(ab),bm)
}catch(bb){}}return aa(ab,bl,bm,ba)
};
for(var Y in aa){N[Y]=aa[Y]
}Z=null
}}();
(function(){var Y=M.createElement("div");
Y.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!(!Y.getElementsByClassName||Y.getElementsByClassName("e").length===0)){Y.lastChild.className="e";
if(Y.getElementsByClassName("e").length!==1){L.order.splice(1,0,"CLASS");
L.find.CLASS=function(ab,aa,Z){if(typeof aa.getElementsByClassName!=="undefined"&&!Z){return aa.getElementsByClassName(ab[1])
}};
Y=null
}}})();
var A=M.compareDocumentPosition?function(Z,Y){return !!(Z.compareDocumentPosition(Y)&16)
}:function(Z,Y){return Z!==Y&&(Z.contains?Z.contains(Y):true)
},s=function(Y){return(Y=(Y?Y.ownerDocument||Y:0).documentElement)?Y.nodeName!=="HTML":false
},X=function(ab,aa){var Z=[],Y="",ba;
for(aa=aa.nodeType?[aa]:aa;
ba=L.match.PSEUDO.exec(ab);
){Y+=ba[0];
ab=ab.replace(L.match.PSEUDO,"")
}ab=L.relative[ab]?ab+"*":ab;
ba=0;
for(var bb=aa.length;
ba<bb;
ba++){N(ab,aa[ba],Z)
}return N.filter(Y,Z)
};
ah.find=N;
ah.expr=N.selectors;
ah.expr[":"]=ah.expr.filters;
ah.unique=N.uniqueSort;
ah.text=W;
ah.isXMLDoc=s;
ah.contains=A
})();
var f=/Until$/,a9=/^(?:parents|prevUntil|prevAll)/,aW=/,/;
au=Array.prototype.slice;
var aL=function(s,c,A){if(ah.isFunction(c)){return ah.grep(s,function(G,F){return !!c.call(G,F,G)===A
})
}else{if(c.nodeType){return ah.grep(s,function(F){return F===c===A
})
}else{if(typeof c==="string"){var w=ah.grep(s,function(F){return F.nodeType===1
});
if(aT.test(c)){return ah.filter(c,w,!A)
}else{c=ah.filter(c,w)
}}}}return ah.grep(s,function(F){return ah.inArray(F,c)>=0===A
})
};
ah.fn.extend({find:function(s){for(var c=this.pushStack("","find",s),J=0,F=0,G=this.length;
F<G;
F++){J=c.length;
ah.find(s,this[F],c);
if(F>0){for(var w=J;
w<c.length;
w++){for(var A=0;
A<J;
A++){if(c[A]===c[w]){c.splice(w--,1);
break
}}}}}return c
},has:function(s){var c=ah(s);
return this.filter(function(){for(var A=0,w=c.length;
A<w;
A++){if(ah.contains(this,c[A])){return true
}}})
},not:function(c){return this.pushStack(aL(this,c,false),"not",c)
},filter:function(c){return this.pushStack(aL(this,c,true),"filter",c)
},is:function(c){return !!c&&ah.filter(c,this).length>0
},closest:function(L,K){if(ah.isArray(L)){var J=[],F=this[0],G,w={},A;
if(F&&L.length){G=0;
for(var c=L.length;
G<c;
G++){A=L[G];
w[A]||(w[A]=ah.expr.match.POS.test(A)?ah(A,K||this.context):A)
}for(;
F&&F.ownerDocument&&F!==K;
){for(A in w){G=w[A];
if(G.jquery?G.index(F)>-1:ah(F).is(G)){J.push({selector:A,elem:F});
delete w[A]
}}F=F.parentNode
}}return J
}var s=ah.expr.match.POS.test(L)?ah(L,K||this.context):null;
return this.map(function(O,N){for(;
N&&N.ownerDocument&&N!==K;
){if(s?s.index(N)>-1:ah(N).is(L)){return N
}N=N.parentNode
}return null
})
},index:function(c){if(!c||typeof c==="string"){return ah.inArray(this[0],c?ah(c):this.parent().children())
}return ah.inArray(c.jquery?c[0]:c,this)
},add:function(s,c){s=typeof s==="string"?ah(s,c||this.context):ah.makeArray(s);
c=ah.merge(this.get(),s);
return this.pushStack(l(s[0])||l(c[0])?c:ah.unique(c))
},andSelf:function(){return this.add(this.prevObject)
}});
ah.each({parent:function(c){return(c=c.parentNode)&&c.nodeType!==11?c:null
},parents:function(c){return ah.dir(c,"parentNode")
},parentsUntil:function(s,c,w){return ah.dir(s,"parentNode",w)
},next:function(c){return ah.nth(c,2,"nextSibling")
},prev:function(c){return ah.nth(c,2,"previousSibling")
},nextAll:function(c){return ah.dir(c,"nextSibling")
},prevAll:function(c){return ah.dir(c,"previousSibling")
},nextUntil:function(s,c,w){return ah.dir(s,"nextSibling",w)
},prevUntil:function(s,c,w){return ah.dir(s,"previousSibling",w)
},siblings:function(c){return ah.sibling(c.parentNode.firstChild,c)
},children:function(c){return ah.sibling(c.firstChild)
},contents:function(c){return ah.nodeName(c,"iframe")?c.contentDocument||c.contentWindow.document:ah.makeArray(c.childNodes)
}},function(s,c){ah.fn[s]=function(F,w){var A=ah.map(this,c,F);
f.test(s)||(w=F);
if(w&&typeof w==="string"){A=ah.filter(w,A)
}A=this.length>1?ah.unique(A):A;
if((this.length>1||aW.test(w))&&a9.test(s)){A=A.reverse()
}return this.pushStack(A,s,au.call(arguments).join(","))
}
});
ah.extend({filter:function(s,c,w){if(w){s=":not("+s+")"
}return ah.find.matches(s,c)
},dir:function(s,c,A){var w=[];
for(s=s[c];
s&&s.nodeType!==9&&(A===I||s.nodeType!==1||!ah(s).is(A));
){s.nodeType===1&&w.push(s);
s=s[c]
}return w
},nth:function(s,c,A){c=c||1;
for(var w=0;
s;
s=s[A]){if(s.nodeType===1&&++w===c){break
}}return s
},sibling:function(s,c){for(var w=[];
s;
s=s.nextSibling){s.nodeType===1&&s!==c&&w.push(s)
}return w
}});
var ai=/ jQuery\d+="(?:\d+|null)"/g,ar=/^\s+/,B=/(<([\w:]+)[^>]*?)\/>/g,aD=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,m=/<([\w:]+)/,ac=/<tbody/i,u=/<|&#?\w+;/,aP=/<script|<object|<embed|<option|<style/i,ak=/checked\s*(?:[^=]|=\s*.checked.)/i,bk=function(s,c,w){return aD.test(w)?s:c+"></"+w+">"
},aJ={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};
aJ.optgroup=aJ.option;
aJ.tbody=aJ.tfoot=aJ.colgroup=aJ.caption=aJ.thead;
aJ.th=aJ.td;
if(!ah.support.htmlSerialize){aJ._default=[1,"div<div>","</div>"]
}ah.fn.extend({text:function(c){if(ah.isFunction(c)){return this.each(function(s){var w=ah(this);
w.text(c.call(this,s,w.text()))
})
}if(typeof c!=="object"&&c!==I){return this.empty().append((this[0]&&this[0].ownerDocument||M).createTextNode(c))
}return ah.text(this)
},wrapAll:function(s){if(ah.isFunction(s)){return this.each(function(w){ah(this).wrapAll(s.call(this,w))
})
}if(this[0]){var c=ah(s,this[0].ownerDocument).eq(0).clone(true);
this[0].parentNode&&c.insertBefore(this[0]);
c.map(function(){for(var w=this;
w.firstChild&&w.firstChild.nodeType===1;
){w=w.firstChild
}return w
}).append(this)
}return this
},wrapInner:function(c){if(ah.isFunction(c)){return this.each(function(s){ah(this).wrapInner(c.call(this,s))
})
}return this.each(function(){var s=ah(this),w=s.contents();
w.length?w.wrapAll(c):s.append(c)
})
},wrap:function(c){return this.each(function(){ah(this).wrapAll(c)
})
},unwrap:function(){return this.parent().each(function(){ah.nodeName(this,"body")||ah(this).replaceWith(this.childNodes)
}).end()
},append:function(){return this.domManip(arguments,true,function(c){this.nodeType===1&&this.appendChild(c)
})
},prepend:function(){return this.domManip(arguments,true,function(c){this.nodeType===1&&this.insertBefore(c,this.firstChild)
})
},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(s){this.parentNode.insertBefore(s,this)
})
}else{if(arguments.length){var c=ah(arguments[0]);
c.push.apply(c,this.toArray());
return this.pushStack(c,"before",arguments)
}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(s){this.parentNode.insertBefore(s,this.nextSibling)
})
}else{if(arguments.length){var c=this.pushStack(this,"after",arguments);
c.push.apply(c,ah(arguments[0]).toArray());
return c
}}},remove:function(s,c){for(var A=0,w;
(w=this[A])!=null;
A++){if(!s||ah.filter(s,[w]).length){if(!c&&w.nodeType===1){ah.cleanData(w.getElementsByTagName("*"));
ah.cleanData([w])
}w.parentNode&&w.parentNode.removeChild(w)
}}return this
},empty:function(){for(var s=0,c;
(c=this[s])!=null;
s++){for(c.nodeType===1&&ah.cleanData(c.getElementsByTagName("*"));
c.firstChild;
){c.removeChild(c.firstChild)
}}return this
},clone:function(s){var c=this.map(function(){if(!ah.support.noCloneEvent&&!ah.isXMLDoc(this)){var A=this.outerHTML,w=this.ownerDocument;
if(!A){A=w.createElement("div");
A.appendChild(this.cloneNode(true));
A=A.innerHTML
}return ah.clean([A.replace(ai,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(ar,"")],w)[0]
}else{return this.cloneNode(true)
}});
if(s===true){bj(this,c);
bj(this.find("*"),c.find("*"))
}return c
},html:function(s){if(s===I){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(ai,""):null
}else{if(typeof s==="string"&&!aP.test(s)&&(ah.support.leadingWhitespace||!ar.test(s))&&!aJ[(m.exec(s)||["",""])[1].toLowerCase()]){s=s.replace(B,bk);
try{for(var c=0,A=this.length;
c<A;
c++){if(this[c].nodeType===1){ah.cleanData(this[c].getElementsByTagName("*"));
this[c].innerHTML=s
}}}catch(w){this.empty().append(s)
}}else{ah.isFunction(s)?this.each(function(J){var F=ah(this),G=F.html();
F.empty().append(function(){return s.call(this,J,G)
})
}):this.empty().append(s)
}}return this
},replaceWith:function(c){if(this[0]&&this[0].parentNode){if(ah.isFunction(c)){return this.each(function(s){var A=ah(this),w=A.html();
A.replaceWith(c.call(this,s,w))
})
}if(typeof c!=="string"){c=ah(c).detach()
}return this.each(function(){var s=this.nextSibling,w=this.parentNode;
ah(this).remove();
s?ah(s).before(c):ah(w).append(c)
})
}else{return this.pushStack(ah(ah.isFunction(c)?c():c),"replaceWith",c)
}},detach:function(c){return this.remove(c,true)
},domManip:function(O,N,L){function J(P){return ah.nodeName(P,"table")?P.getElementsByTagName("tbody")[0]||P.appendChild(P.ownerDocument.createElement("tbody")):P
}var K,F,G=O[0],s=[],A;
if(!ah.support.checkClone&&arguments.length===3&&typeof G==="string"&&ak.test(G)){return this.each(function(){ah(this).domManip(O,N,L,true)
})
}if(ah.isFunction(G)){return this.each(function(P){var Q=ah(this);
O[0]=G.call(this,P,N?Q.html():I);
Q.domManip(O,N,L)
})
}if(this[0]){K=G&&G.parentNode;
K=ah.support.parentNode&&K&&K.nodeType===11&&K.childNodes.length===this.length?{fragment:K}:a3(O,this,s);
A=K.fragment;
if(F=A.childNodes.length===1?(A=A.firstChild):A.firstChild){N=N&&ah.nodeName(F,"tr");
for(var w=0,c=this.length;
w<c;
w++){L.call(N?J(this[w],F):this[w],w>0||K.cacheable||this.length>1?A.cloneNode(true):A)
}}s.length&&ah.each(s,E)
}return this
}});
ah.fragments={};
ah.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,c){ah.fn[s]=function(J){var F=[];
J=ah(J);
var G=this.length===1&&this[0].parentNode;
if(G&&G.nodeType===11&&G.childNodes.length===1&&J.length===1){J[c](this[0]);
return this
}else{G=0;
for(var w=J.length;
G<w;
G++){var A=(G>0?this.clone(true):this).get();
ah.fn[c].apply(ah(J[G]),A);
F=F.concat(A)
}return this.pushStack(F,s,J.selector)
}}
});
ah.extend({clean:function(O,N,L,J){N=N||M;
if(typeof N.createElement==="undefined"){N=N.ownerDocument||N[0]&&N[0].ownerDocument||M
}for(var K=[],F=0,G;
(G=O[F])!=null;
F++){if(typeof G==="number"){G+=""
}if(G){if(typeof G==="string"&&!u.test(G)){G=N.createTextNode(G)
}else{if(typeof G==="string"){G=G.replace(B,bk);
var s=(m.exec(G)||["",""])[1].toLowerCase(),A=aJ[s]||aJ._default,w=A[0],c=N.createElement("div");
for(c.innerHTML=A[1]+G+A[2];
w--;
){c=c.lastChild
}if(!ah.support.tbody){w=ac.test(G);
s=s==="table"&&!w?c.firstChild&&c.firstChild.childNodes:A[1]==="<table>"&&!w?c.childNodes:[];
for(A=s.length-1;
A>=0;
--A){ah.nodeName(s[A],"tbody")&&!s[A].childNodes.length&&s[A].parentNode.removeChild(s[A])
}}!ah.support.leadingWhitespace&&ar.test(G)&&c.insertBefore(N.createTextNode(ar.exec(G)[0]),c.firstChild);
G=c.childNodes
}}if(G.nodeType){K.push(G)
}else{K=ah.merge(K,G)
}}}if(L){for(F=0;
K[F];
F++){if(J&&ah.nodeName(K[F],"script")&&(!K[F].type||K[F].type.toLowerCase()==="text/javascript")){J.push(K[F].parentNode?K[F].parentNode.removeChild(K[F]):K[F])
}else{K[F].nodeType===1&&K.splice.apply(K,[F+1,0].concat(ah.makeArray(K[F].getElementsByTagName("script"))));
L.appendChild(K[F])
}}}return K
},cleanData:function(L){for(var K,J,F=ah.cache,G=ah.event.special,w=ah.support.deleteExpando,A=0,c;
(c=L[A])!=null;
A++){if(J=c[ah.expando]){K=F[J];
if(K.events){for(var s in K.events){G[s]?ah.event.remove(c,s):aG(c,s,K.handle)
}}if(w){delete c[ah.expando]
}else{c.removeAttribute&&c.removeAttribute(ah.expando)
}delete F[J]
}}}});
var h=/z-?index|font-?weight|opacity|zoom|line-?height/i,a4=/alpha\([^)]*\)/,aQ=/opacity=([^)]*)/,aE=/float/i,ad=/-([a-z])/ig,bf=/([A-Z])/g,aZ=/^-?\d+(?:px)?$/i,aI=/^-?\d/,af={position:"absolute",visibility:"hidden",display:"block"},y=["Left","Right"],k=["Top","Bottom"],bi=M.defaultView&&M.defaultView.getComputedStyle,al=ah.support.cssFloat?"cssFloat":"styleFloat",v=function(s,c){return c.toUpperCase()
};
ah.fn.css=function(s,c){return ap(this,s,c,true,function(F,w,A){if(A===I){return ah.curCSS(F,w)
}if(typeof A==="number"&&!h.test(w)){A+="px"
}ah.style(F,w,A)
})
};
ah.extend({style:function(s,c,F){if(!s||s.nodeType===3||s.nodeType===8){return I
}if((c==="width"||c==="height")&&parseFloat(F)<0){F=I
}var w=s.style||s,A=F!==I;
if(!ah.support.opacity&&c==="opacity"){if(A){w.zoom=1;
c=parseInt(F,10)+""==="NaN"?"":"alpha(opacity="+F*100+")";
s=w.filter||ah.curCSS(s,"filter")||"";
w.filter=a4.test(s)?s.replace(a4,c):c
}return w.filter&&w.filter.indexOf("opacity=")>=0?parseFloat(aQ.exec(w.filter)[1])/100+"":""
}if(aE.test(c)){c=al
}c=c.replace(ad,v);
if(A){w[c]=F
}return w[c]
},css:function(s,c,J,F){if(c==="width"||c==="height"){var G,w=c==="width"?y:k;
function A(){G=c==="width"?s.offsetWidth:s.offsetHeight;
F!=="border"&&ah.each(w,function(){F||(G-=parseFloat(ah.curCSS(s,"padding"+this,true))||0);
if(F==="margin"){G+=parseFloat(ah.curCSS(s,"margin"+this,true))||0
}else{G-=parseFloat(ah.curCSS(s,"border"+this+"Width",true))||0
}})
}s.offsetWidth!==0?A():ah.swap(s,af,A);
return Math.max(0,Math.round(G))
}return ah.curCSS(s,c,J)
},curCSS:function(s,c,G){var A,F=s.style;
if(!ah.support.opacity&&c==="opacity"&&s.currentStyle){A=aQ.test(s.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";
return A===""?"1":A
}if(aE.test(c)){c=al
}if(!G&&F&&F[c]){A=F[c]
}else{if(bi){if(aE.test(c)){c="float"
}c=c.replace(bf,"-$1").toLowerCase();
F=s.ownerDocument.defaultView;
if(!F){return null
}if(s=F.getComputedStyle(s,null)){A=s.getPropertyValue(c)
}if(c==="opacity"&&A===""){A="1"
}}else{if(s.currentStyle){G=c.replace(ad,v);
A=s.currentStyle[c]||s.currentStyle[G];
if(!aZ.test(A)&&aI.test(A)){c=F.left;
var w=s.runtimeStyle.left;
s.runtimeStyle.left=s.currentStyle.left;
F.left=G==="fontSize"?"1em":A||0;
A=F.pixelLeft+"px";
F.left=c;
s.runtimeStyle.left=w
}}}}return A
},swap:function(s,c,F){var w={};
for(var A in c){w[A]=s.style[A];
s.style[A]=c[A]
}F.call(s);
for(A in c){s.style[A]=w[A]
}}});
if(ah.expr&&ah.expr.filters){ah.expr.filters.hidden=function(s){var c=s.offsetWidth,A=s.offsetHeight,w=s.nodeName.toLowerCase()==="tr";
return c===0&&A===0&&!w?true:c>0&&A>0&&!w?false:ah.curCSS(s,"display")==="none"
};
ah.expr.filters.visible=function(c){return !ah.expr.filters.hidden(c)
}
}var a2=aF(),aN=/<script(.|\s)*?\/script>/gi,aj=/select|textarea/i,C=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,aA=/=\?(&|$)/,i=/\?/,n=/(\?|&)_=.*?(&|$)/,a=/^(\w+:)?\/\/([^\/?#]+)/,a5=/%20/g,aR=ah.fn.load;
ah.fn.extend({load:function(s,c,G){if(typeof s!=="string"){return aR.call(this,s)
}else{if(!this.length){return this
}}var A=s.indexOf(" ");
if(A>=0){var F=s.slice(A,s.length);
s=s.slice(0,A)
}A="GET";
if(c){if(ah.isFunction(c)){G=c;
c=null
}else{if(typeof c==="object"){c=ah.param(c,ah.ajaxSettings.traditional);
A="POST"
}}}var w=this;
ah.ajax({url:s,type:A,dataType:"html",data:c,complete:function(J,K){if(K==="success"||K==="notmodified"){w.html(F?ah("<div />").append(J.responseText.replace(aN,"")).find(F):J.responseText)
}G&&w.each(G,[J.responseText,K,J])
}});
return this
},serialize:function(){return ah.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?ah.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||aj.test(this.nodeName)||C.test(this.type))
}).map(function(s,c){s=ah(this).val();
return s==null?null:ah.isArray(s)?ah.map(s,function(w){return{name:c.name,value:w}
}):{name:c.name,value:s}
}).get()
}});
ah.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(s,c){ah.fn[c]=function(w){return this.bind(c,w)
}
});
ah.extend({get:function(s,c,A,w){if(ah.isFunction(c)){w=w||A;
A=c;
c=null
}return ah.ajax({type:"GET",url:s,data:c,success:A,dataType:w})
},getScript:function(s,c){return ah.get(s,null,c,"script")
},getJSON:function(s,c,w){return ah.get(s,c,w,"json")
},post:function(s,c,A,w){if(ah.isFunction(c)){w=w||A;
A=c;
c={}
}return ah.ajax({type:"POST",url:s,data:c,success:A,dataType:w})
},ajaxSetup:function(c){ah.extend(ah.ajaxSettings,c)
},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:aO.XMLHttpRequest&&(aO.location.protocol!=="file:"||!aO.ActiveXObject)?function(){return new aO.XMLHttpRequest
}:function(){try{return new aO.ActiveXObject("Microsoft.XMLHTTP")
}catch(c){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(aa){function Z(){X.success&&X.success.call(P,K,R,s);
X.global&&W("ajaxSuccess",[s,X])
}function Y(){X.complete&&X.complete.call(P,s,R);
X.global&&W("ajaxComplete",[s,X]);
X.global&&!--ah.active&&ah.event.trigger("ajaxStop")
}function W(ba,bb){(X.context?ah(X.context):ah.event).trigger(ba,bb)
}var X=ah.extend(true,{},ah.ajaxSettings,aa),Q,R,K,P=aa&&aa.context||X,L=X.type.toUpperCase();
if(X.data&&X.processData&&typeof X.data!=="string"){X.data=ah.param(X.data,X.traditional)
}if(X.dataType==="jsonp"){if(L==="GET"){aA.test(X.url)||(X.url+=(i.test(X.url)?"&":"?")+(X.jsonp||"callback")+"=?")
}else{if(!X.data||!aA.test(X.data)){X.data=(X.data?X.data+"&":"")+(X.jsonp||"callback")+"=?"
}}X.dataType="json"
}if(X.dataType==="json"&&(X.data&&aA.test(X.data)||aA.test(X.url))){Q=X.jsonpCallback||"jsonp"+a2++;
if(X.data){X.data=(X.data+"").replace(aA,"="+Q+"$1")
}X.url=X.url.replace(aA,"="+Q+"$1");
X.dataType="script";
aO[Q]=aO[Q]||function(ba){K=ba;
Z();
Y();
aO[Q]=I;
try{delete aO[Q]
}catch(bb){}c&&c.removeChild(F)
}
}if(X.dataType==="script"&&X.cache===null){X.cache=false
}if(X.cache===false&&L==="GET"){var G=aF(),w=X.url.replace(n,"$1_="+G+"$2");
X.url=w+(w===X.url?(i.test(X.url)?"&":"?")+"_="+G:"")
}if(X.data&&L==="GET"){X.url+=(i.test(X.url)?"&":"?")+X.data
}X.global&&!ah.active++&&ah.event.trigger("ajaxStart");
G=(G=a.exec(X.url))&&(G[1]&&G[1]!==location.protocol||G[2]!==location.host);
if(X.dataType==="script"&&L==="GET"&&G){var c=M.getElementsByTagName("head")[0]||M.documentElement,F=M.createElement("script");
F.src=X.url;
if(X.scriptCharset){F.charset=X.scriptCharset
}if(!Q){var J=false;
F.onload=F.onreadystatechange=function(){if(!J&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){J=true;
Z();
Y();
F.onload=F.onreadystatechange=null;
c&&F.parentNode&&c.removeChild(F)
}}
}c.insertBefore(F,c.firstChild);
return I
}var A=false,s=X.xhr();
if(s){X.username?s.open(L,X.url,X.async,X.username,X.password):s.open(L,X.url,X.async);
try{if(X.data||aa&&aa.contentType){s.setRequestHeader("Content-Type",X.contentType)
}if(X.ifModified){ah.lastModified[X.url]&&s.setRequestHeader("If-Modified-Since",ah.lastModified[X.url]);
ah.etag[X.url]&&s.setRequestHeader("If-None-Match",ah.etag[X.url])
}G||s.setRequestHeader("X-Requested-With","XMLHttpRequest");
s.setRequestHeader("Accept",X.dataType&&X.accepts[X.dataType]?X.accepts[X.dataType]+", */*":X.accepts._default)
}catch(ab){}if(X.beforeSend&&X.beforeSend.call(P,s,X)===false){X.global&&!--ah.active&&ah.event.trigger("ajaxStop");
s.abort();
return false
}X.global&&W("ajaxSend",[s,X]);
var V=s.onreadystatechange=function(bb){if(!s||s.readyState===0||bb==="abort"){A||Y();
A=true;
if(s){s.onreadystatechange=ah.noop
}}else{if(!A&&s&&(s.readyState===4||bb==="timeout")){A=true;
s.onreadystatechange=ah.noop;
R=bb==="timeout"?"timeout":!ah.httpSuccess(s)?"error":X.ifModified&&ah.httpNotModified(s,X.url)?"notmodified":"success";
var bl;
if(R==="success"){try{K=ah.httpData(s,X.dataType,X)
}catch(ba){R="parsererror";
bl=ba
}}if(R==="success"||R==="notmodified"){Q||Z()
}else{ah.handleError(X,s,R,bl)
}Y();
bb==="timeout"&&s.abort();
if(X.async){s=null
}}}};
try{var T=s.abort;
s.abort=function(){s&&T.call(s);
V("abort")
}
}catch(O){}X.async&&X.timeout>0&&setTimeout(function(){s&&!A&&V("timeout")
},X.timeout);
try{s.send(L==="POST"||L==="PUT"||L==="DELETE"?X.data:null)
}catch(N){ah.handleError(X,s,null,N);
Y()
}X.async||V();
return s
}},handleError:function(s,c,A,w){if(s.error){s.error.call(s.context||s,c,A,w)
}if(s.global){(s.context?ah(s.context):ah.event).trigger("ajaxError",[c,s,w])
}},active:0,httpSuccess:function(s){try{return !s.status&&location.protocol==="file:"||s.status>=200&&s.status<300||s.status===304||s.status===1223||s.status===0
}catch(c){}return false
},httpNotModified:function(s,c){var A=s.getResponseHeader("Last-Modified"),w=s.getResponseHeader("Etag");
if(A){ah.lastModified[c]=A
}if(w){ah.etag[c]=w
}return s.status===304||s.status===0
},httpData:function(s,c,F){var w=s.getResponseHeader("content-type")||"",A=c==="xml"||!c&&w.indexOf("xml")>=0;
s=A?s.responseXML:s.responseText;
A&&s.documentElement.nodeName==="parsererror"&&ah.error("parsererror");
if(F&&F.dataFilter){s=F.dataFilter(s,c)
}if(typeof s==="string"){if(c==="json"||!c&&w.indexOf("json")>=0){s=ah.parseJSON(s)
}else{if(c==="script"||!c&&w.indexOf("javascript")>=0){ah.globalEval(s)
}}}return s
},param:function(s,c){function G(J,K){if(ah.isArray(K)){ah.each(K,function(L,N){c||/\[\]$/.test(J)?A(J,N):G(J+"["+(typeof N==="object"||ah.isArray(N)?L:"")+"]",N)
})
}else{!c&&K!=null&&typeof K==="object"?ah.each(K,function(L,N){G(J+"["+L+"]",N)
}):A(J,K)
}}function A(J,K){K=ah.isFunction(K)?K():K;
F[F.length]=encodeURIComponent(J)+"="+encodeURIComponent(K)
}var F=[];
if(c===I){c=ah.ajaxSettings.traditional
}if(ah.isArray(s)||s.jquery){ah.each(s,function(){A(this.name,this.value)
})
}else{for(var w in s){G(w,s[w])
}}return F.join("&").replace(a5,"+")
}});
var bg={},bc=/toggle|show|hide/,aX=/^([+-]=)?([\d+-.]+)(.*)$/,aq,D=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
ah.fn.extend({show:function(s,c){if(s||s===0){return this.animate(aC("show",3),s,c)
}else{s=0;
for(c=this.length;
s<c;
s++){var F=ah.data(this[s],"olddisplay");
this[s].style.display=F||"";
if(ah.css(this[s],"display")==="none"){F=this[s].nodeName;
var w;
if(bg[F]){w=bg[F]
}else{var A=ah("<"+F+" />").appendTo("body");
w=A.css("display");
if(w==="none"){w="block"
}A.remove();
bg[F]=w
}ah.data(this[s],"olddisplay",w)
}}s=0;
for(c=this.length;
s<c;
s++){this[s].style.display=ah.data(this[s],"olddisplay")||""
}return this
}},hide:function(s,c){if(s||s===0){return this.animate(aC("hide",3),s,c)
}else{s=0;
for(c=this.length;
s<c;
s++){var w=ah.data(this[s],"olddisplay");
!w&&w!=="none"&&ah.data(this[s],"olddisplay",ah.css(this[s],"display"))
}s=0;
for(c=this.length;
s<c;
s++){this[s].style.display="none"
}return this
}},_toggle:ah.fn.toggle,toggle:function(s,c){var w=typeof s==="boolean";
if(ah.isFunction(s)&&ah.isFunction(c)){this._toggle.apply(this,arguments)
}else{s==null||w?this.each(function(){var A=w?s:ah(this).is(":hidden");
ah(this)[A?"show":"hide"]()
}):this.animate(aC("toggle",3),s,c)
}return this
},fadeTo:function(s,c,w){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:c},s,w)
},animate:function(s,c,F,w){var A=ah.speed(c,F,w);
if(ah.isEmptyObject(s)){return this.each(A.complete)
}return this[A.queue===false?"each":"queue"](function(){var J=ah.extend({},A),K,L=this.nodeType===1&&ah(this).is(":hidden"),G=this;
for(K in s){var N=K.replace(ad,v);
if(K!==N){s[N]=s[K];
delete s[K];
K=N
}if(s[K]==="hide"&&L||s[K]==="show"&&!L){return J.complete.call(this)
}if((K==="height"||K==="width")&&this.style){J.display=ah.css(this,"display");
J.overflow=this.style.overflow
}if(ah.isArray(s[K])){(J.specialEasing=J.specialEasing||{})[K]=s[K][1];
s[K]=s[K][0]
}}if(J.overflow!=null){this.style.overflow="hidden"
}J.curAnim=ah.extend({},s);
ah.each(s,function(P,O){var T=new ah.fx(G,J,P);
if(bc.test(O)){T[O==="toggle"?L?"show":"hide":O](s)
}else{var R=aX.exec(O),V=T.cur(true)||0;
if(R){O=parseFloat(R[2]);
var Q=R[3]||"px";
if(Q!=="px"){G.style[P]=(O||1)+Q;
V=(O||1)/T.cur(true)*V;
G.style[P]=V+Q
}if(R[1]){O=(R[1]==="-="?-1:1)*O+V
}T.custom(V,O,Q)
}else{T.custom(V,O,"")
}}});
return true
})
},stop:function(s,c){var w=ah.timers;
s&&this.queue([]);
this.each(function(){for(var A=w.length-1;
A>=0;
A--){if(w[A].elem===this){c&&w[A](true);
w.splice(A,1)
}}});
c||this.dequeue();
return this
}});
ah.each({slideDown:aC("show",1),slideUp:aC("hide",1),slideToggle:aC("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(s,c){ah.fn[s]=function(A,w){return this.animate(c,A,w)
}
});
ah.extend({speed:function(s,c,A){var w=s&&typeof s==="object"?s:{complete:A||!A&&c||ah.isFunction(s)&&s,duration:s,easing:A&&c||c&&!ah.isFunction(c)&&c};
w.duration=ah.fx.off?0:typeof w.duration==="number"?w.duration:ah.fx.speeds[w.duration]||ah.fx.speeds._default;
w.old=w.complete;
w.complete=function(){w.queue!==false&&ah(this).dequeue();
ah.isFunction(w.old)&&w.old.call(this)
};
return w
},easing:{linear:function(s,c,A,w){return A+w*s
},swing:function(s,c,A,w){return(-Math.cos(s*Math.PI)/2+0.5)*w+A
}},timers:[],fx:function(s,c,w){this.options=c;
this.elem=s;
this.prop=w;
if(!c.orig){c.orig={}
}}});
ah.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);
(ah.fx.step[this.prop]||ah.fx.step._default)(this);
if((this.prop==="height"||this.prop==="width")&&this.elem.style){this.elem.style.display="block"
}},cur:function(c){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}return(c=parseFloat(ah.css(this.elem,this.prop,c)))&&c>-10000?c:parseFloat(ah.curCSS(this.elem,this.prop))||0
},custom:function(s,c,F){function w(G){return A.step(G)
}this.startTime=aF();
this.start=s;
this.end=c;
this.unit=F||this.unit||"px";
this.now=this.start;
this.pos=this.state=0;
var A=this;
w.elem=this.elem;
if(w()&&ah.timers.push(w)&&!aq){aq=setInterval(ah.fx.tick,13)
}},show:function(){this.options.orig[this.prop]=ah.style(this.elem,this.prop);
this.options.show=true;
this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());
ah(this.elem).show()
},hide:function(){this.options.orig[this.prop]=ah.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)
},step:function(s){var c=aF(),F=true;
if(s||c>=this.options.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
for(var w in this.options.curAnim){if(this.options.curAnim[w]!==true){F=false
}}if(F){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;
s=ah.data(this.elem,"olddisplay");
this.elem.style.display=s?s:this.options.display;
if(ah.css(this.elem,"display")==="none"){this.elem.style.display="block"
}}this.options.hide&&ah(this.elem).hide();
if(this.options.hide||this.options.show){for(var A in this.options.curAnim){ah.style(this.elem,A,this.options.orig[A])
}}this.options.complete.call(this.elem)
}return false
}else{A=c-this.startTime;
this.state=A/this.options.duration;
s=this.options.easing||(ah.easing.swing?"swing":"linear");
this.pos=ah.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||s](this.state,A,0,1,this.options.duration);
this.now=this.start+(this.end-this.start)*this.pos;
this.update()
}return true
}};
ah.extend(ah.fx,{tick:function(){for(var s=ah.timers,c=0;
c<s.length;
c++){s[c]()||s.splice(c--,1)
}s.length||ah.fx.stop()
},stop:function(){clearInterval(aq);
aq=null
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(c){ah.style(c.elem,"opacity",c.now)
},_default:function(c){if(c.elem.style&&c.elem.style[c.prop]!=null){c.elem.style[c.prop]=(c.prop==="width"||c.prop==="height"?Math.max(0,c.now):c.now)+c.unit
}else{c.elem[c.prop]=c.now
}}}});
if(ah.expr&&ah.expr.filters){ah.expr.filters.animated=function(c){return ah.grep(ah.timers,function(s){return c===s.elem
}).length
}
}ah.fn.offset="getBoundingClientRect" in M.documentElement?function(s){var c=this[0];
if(s){return this.each(function(F){ah.offset.setOffset(this,s,F)
})
}if(!c||!c.ownerDocument){return null
}if(c===c.ownerDocument.body){return ah.offset.bodyOffset(c)
}var A=c.getBoundingClientRect(),w=c.ownerDocument;
c=w.body;
w=w.documentElement;
return{top:A.top+(self.pageYOffset||ah.support.boxModel&&w.scrollTop||c.scrollTop)-(w.clientTop||c.clientTop||0),left:A.left+(self.pageXOffset||ah.support.boxModel&&w.scrollLeft||c.scrollLeft)-(w.clientLeft||c.clientLeft||0)}
}:function(N){var L=this[0];
if(N){return this.each(function(O){ah.offset.setOffset(this,N,O)
})
}if(!L||!L.ownerDocument){return null
}if(L===L.ownerDocument.body){return ah.offset.bodyOffset(L)
}ah.offset.initialize();
var K=L.offsetParent,G=L,J=L.ownerDocument,A,F=J.documentElement,c=J.body;
G=(J=J.defaultView)?J.getComputedStyle(L,null):L.currentStyle;
for(var w=L.offsetTop,s=L.offsetLeft;
(L=L.parentNode)&&L!==c&&L!==F;
){if(ah.offset.supportsFixedPosition&&G.position==="fixed"){break
}A=J?J.getComputedStyle(L,null):L.currentStyle;
w-=L.scrollTop;
s-=L.scrollLeft;
if(L===K){w+=L.offsetTop;
s+=L.offsetLeft;
if(ah.offset.doesNotAddBorder&&!(ah.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(L.nodeName))){w+=parseFloat(A.borderTopWidth)||0;
s+=parseFloat(A.borderLeftWidth)||0
}G=K;
K=L.offsetParent
}if(ah.offset.subtractsBorderForOverflowNotVisible&&A.overflow!=="visible"){w+=parseFloat(A.borderTopWidth)||0;
s+=parseFloat(A.borderLeftWidth)||0
}G=A
}if(G.position==="relative"||G.position==="static"){w+=c.offsetTop;
s+=c.offsetLeft
}if(ah.offset.supportsFixedPosition&&G.position==="fixed"){w+=Math.max(F.scrollTop,c.scrollTop);
s+=Math.max(F.scrollLeft,c.scrollLeft)
}return{top:w,left:s}
};
ah.offset={initialize:function(){var s=M.body,c=M.createElement("div"),G,A,F,w=parseFloat(ah.curCSS(s,"marginTop",true))||0;
ah.extend(c.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});
c.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
s.insertBefore(c,s.firstChild);
G=c.firstChild;
A=G.firstChild;
F=G.nextSibling.firstChild.firstChild;
this.doesNotAddBorder=A.offsetTop!==5;
this.doesAddBorderForTableAndCells=F.offsetTop===5;
A.style.position="fixed";
A.style.top="20px";
this.supportsFixedPosition=A.offsetTop===20||A.offsetTop===15;
A.style.position=A.style.top="";
G.style.overflow="hidden";
G.style.position="relative";
this.subtractsBorderForOverflowNotVisible=A.offsetTop===-5;
this.doesNotIncludeMarginInBodyOffset=s.offsetTop!==w;
s.removeChild(c);
ah.offset.initialize=ah.noop
},bodyOffset:function(s){var c=s.offsetTop,w=s.offsetLeft;
ah.offset.initialize();
if(ah.offset.doesNotIncludeMarginInBodyOffset){c+=parseFloat(ah.curCSS(s,"marginTop",true))||0;
w+=parseFloat(ah.curCSS(s,"marginLeft",true))||0
}return{top:c,left:w}
},setOffset:function(s,c,J){if(/static/.test(ah.curCSS(s,"position"))){s.style.position="relative"
}var F=ah(s),G=F.offset(),w=parseInt(ah.curCSS(s,"top",true),10)||0,A=parseInt(ah.curCSS(s,"left",true),10)||0;
if(ah.isFunction(c)){c=c.call(s,J,G)
}J={top:c.top-G.top+w,left:c.left-G.left+A};
"using" in c?c.using.call(s,J):F.css(J)
}};
ah.fn.extend({position:function(){if(!this[0]){return null
}var s=this[0],c=this.offsetParent(),A=this.offset(),w=/^body|html$/i.test(c[0].nodeName)?{top:0,left:0}:c.offset();
A.top-=parseFloat(ah.curCSS(s,"marginTop",true))||0;
A.left-=parseFloat(ah.curCSS(s,"marginLeft",true))||0;
w.top+=parseFloat(ah.curCSS(c[0],"borderTopWidth",true))||0;
w.left+=parseFloat(ah.curCSS(c[0],"borderLeftWidth",true))||0;
return{top:A.top-w.top,left:A.left-w.left}
},offsetParent:function(){return this.map(function(){for(var c=this.offsetParent||M.body;
c&&!/^body|html$/i.test(c.nodeName)&&ah.css(c,"position")==="static";
){c=c.offsetParent
}return c
})
}});
ah.each(["Left","Top"],function(s,c){var w="scroll"+c;
ah.fn[w]=function(F){var G=this[0],A;
if(!G){return null
}if(F!==I){return this.each(function(){if(A=o(this)){A.scrollTo(!s?F:ah(A).scrollLeft(),s?F:ah(A).scrollTop())
}else{this[w]=F
}})
}else{return(A=o(G))?"pageXOffset" in A?A[s?"pageYOffset":"pageXOffset"]:ah.support.boxModel&&A.document.documentElement[w]||A.document.body[w]:G[w]
}}
});
ah.each(["Height","Width"],function(s,c){var w=c.toLowerCase();
ah.fn["inner"+c]=function(){return this[0]?ah.css(this[0],w,false,"padding"):null
};
ah.fn["outer"+c]=function(A){return this[0]?ah.css(this[0],w,false,A?"margin":"border"):null
};
ah.fn[w]=function(A){var F=this[0];
if(!F){return A==null?null:this
}if(ah.isFunction(A)){return this.each(function(G){var J=ah(this);
J[w](A.call(this,G,J[w]()))
})
}return"scrollTo" in F&&F.document?F.document.compatMode==="CSS1Compat"&&F.document.documentElement["client"+c]||F.document.body["client"+c]:F.nodeType===9?Math.max(F.documentElement["client"+c],F.body["scroll"+c],F.documentElement["scroll"+c],F.body["offset"+c],F.documentElement["offset"+c]):A===I?ah.css(F,w):this.css(w,typeof A==="string"?A:A+"px")
}
});
aO.jQuery=aO.$=ah
})(window);
if(!this.JSON){this.JSON={}
}(function(){function l(b){return b<10?"0"+b:b
}function o(b){p.lastIndex=0;
return p.test(b)?'"'+b.replace(p,function(f){var c=r[f];
return typeof c==="string"?c:"\\u"+("0000"+f.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+b+'"'
}function m(b,f){var c,d,g,j,i=h,e,a=f[b];
if(a&&typeof a==="object"&&typeof a.toJSON==="function"){a=a.toJSON(b)
}if(typeof k==="function"){a=k.call(f,b,a)
}switch(typeof a){case"string":return o(a);
case"number":return isFinite(a)?String(a):"null";
case"boolean":case"null":return String(a);
case"object":if(!a){return"null"
}h+=n;
e=[];
if(Object.prototype.toString.apply(a)==="[object Array]"){j=a.length;
for(c=0;
c<j;
c+=1){e[c]=m(c,a)||"null"
}g=e.length===0?"[]":h?"[\n"+h+e.join(",\n"+h)+"\n"+i+"]":"["+e.join(",")+"]";
h=i;
return g
}if(k&&typeof k==="object"){j=k.length;
for(c=0;
c<j;
c+=1){d=k[c];
if(typeof d==="string"){if(g=m(d,a)){e.push(o(d)+(h?": ":":")+g)
}}}}else{for(d in a){if(Object.hasOwnProperty.call(a,d)){if(g=m(d,a)){e.push(o(d)+(h?": ":":")+g)
}}}}g=e.length===0?"{}":h?"{\n"+h+e.join(",\n"+h)+"\n"+i+"}":"{"+e.join(",")+"}";
h=i;
return g
}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+l(this.getUTCMonth()+1)+"-"+l(this.getUTCDate())+"T"+l(this.getUTCHours())+":"+l(this.getUTCMinutes())+":"+l(this.getUTCSeconds())+"Z":null
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()
}
}var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,h,n,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},k;
if(typeof JSON.stringify!=="function"){JSON.stringify=function(b,f,c){var d;
n=h="";
if(typeof c==="number"){for(d=0;
d<c;
d+=1){n+=" "
}}else{if(typeof c==="string"){n=c
}}if((k=f)&&typeof f!=="function"&&(typeof f!=="object"||typeof f.length!=="number")){throw Error("JSON.stringify")
}return m("",{"":b})
}
}if(typeof JSON.parse!=="function"){JSON.parse=function(b,f){function c(g,j){var i,e,a=g[j];
if(a&&typeof a==="object"){for(i in a){if(Object.hasOwnProperty.call(a,i)){e=c(a,i);
if(e!==undefined){a[i]=e
}else{delete a[i]
}}}}return f.call(g,j,a)
}var d;
b=String(b);
q.lastIndex=0;
if(q.test(b)){b=b.replace(q,function(g){return"\\u"+("0000"+g.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){d=eval("("+b+")");
return typeof f==="function"?c({"":d},""):d
}throw new SyntaxError("JSON.parse")
}
}})();
if(window.jQuery&&!window.jQuery.createTemplate){(function(jQuery){var Template=function(s,includes,settings){this._tree=[];
this._param={};
this._includes=null;
this._templates={};
this._templates_code={};
this.settings=jQuery.extend({disallow_functions:false,filter_data:true,filter_params:false,runnable_functions:false,clone_data:true,clone_params:true},settings);
this.f_cloneData=(this.settings.f_cloneData!==undefined)?(this.settings.f_cloneData):(TemplateUtils.cloneData);
this.f_escapeString=(this.settings.f_escapeString!==undefined)?(this.settings.f_escapeString):(TemplateUtils.escapeHTML);
this.splitTemplates(s,includes);
if(s){this.setTemplate(this._templates_code.MAIN,includes,this.settings)
}this._templates_code=null
};
Template.prototype.version="0.7.8";
Template.DEBUG_MODE=true;
Template.prototype.splitTemplates=function(s,includes){var reg=/\{#template *(\w*?)( .*)*\}/g;
var iter,tname,se;
var lastIndex=null;
var _template_settings=[];
while((iter=reg.exec(s))!=null){lastIndex=reg.lastIndex;
tname=iter[1];
se=s.indexOf("{#/template "+tname+"}",lastIndex);
if(se==-1){throw new Error('jTemplates: Template "'+tname+'" is not closed.')
}this._templates_code[tname]=s.substring(lastIndex,se);
_template_settings[tname]=TemplateUtils.optionToObject(iter[2])
}if(lastIndex===null){this._templates_code.MAIN=s;
return
}for(var i in this._templates_code){if(i!="MAIN"){this._templates[i]=new Template()
}}for(var i in this._templates_code){if(i!="MAIN"){this._templates[i].setTemplate(this._templates_code[i],jQuery.extend({},includes||{},this._templates||{}),jQuery.extend({},this.settings,_template_settings[i]));
this._templates_code[i]=null
}}};
Template.prototype.setTemplate=function(s,includes,settings){if(s==undefined){this._tree.push(new TextNode("",1,this));
return
}s=s.replace(/[\n\r]/g,"");
s=s.replace(/\{\*.*?\*\}/g,"");
this._includes=jQuery.extend({},this._templates||{},includes||{});
this.settings=new Object(settings);
var node=this._tree;
var op=s.match(/\{#.*?\}/g);
var ss=0,se=0;
var e;
var literalMode=0;
var elseif_level=0;
for(var i=0,l=(op)?(op.length):(0);
i<l;
++i){var this_op=op[i];
if(literalMode){se=s.indexOf("{#/literal}");
if(se==-1){throw new Error("jTemplates: No end of literal.")
}if(se>ss){node.push(new TextNode(s.substring(ss,se),1,this))
}ss=se+11;
literalMode=0;
i=jQuery.inArray("{#/literal}",op);
continue
}se=s.indexOf(this_op,ss);
if(se>ss){node.push(new TextNode(s.substring(ss,se),literalMode,this))
}var ppp=this_op.match(/\{#([\w\/]+).*?\}/);
var op_=RegExp.$1;
switch(op_){case"elseif":++elseif_level;
node.switchToElse();
case"if":e=new opIF(this_op,node);
node.push(e);
node=e;
break;
case"else":node.switchToElse();
break;
case"/if":while(elseif_level){node=node.getParent();
--elseif_level
}case"/for":case"/foreach":node=node.getParent();
break;
case"foreach":e=new opFOREACH(this_op,node,this);
node.push(e);
node=e;
break;
case"for":e=opFORFactory(this_op,node,this);
node.push(e);
node=e;
break;
case"continue":case"break":node.push(new JTException(op_));
break;
case"include":node.push(new Include(this_op,this._includes));
break;
case"param":node.push(new UserParam(this_op));
break;
case"cycle":node.push(new Cycle(this_op));
break;
case"ldelim":node.push(new TextNode("{",1,this));
break;
case"rdelim":node.push(new TextNode("}",1,this));
break;
case"literal":literalMode=1;
break;
case"/literal":if(Template.DEBUG_MODE){throw new Error("jTemplates: Missing begin of literal.")
}break;
default:if(Template.DEBUG_MODE){throw new Error("jTemplates: unknown tag: "+op_+".")
}}ss=se+this_op.length
}if(s.length>ss){node.push(new TextNode(s.substr(ss),literalMode,this))
}};
Template.prototype.get=function(d,param,element,deep){++deep;
var $T=d,_param1,_param2;
if(this.settings.clone_data){$T=this.f_cloneData(d,{escapeData:(this.settings.filter_data&&deep==1),noFunc:this.settings.disallow_functions},this.f_escapeString)
}if(!this.settings.clone_params){_param1=this._param;
_param2=param
}else{_param1=this.f_cloneData(this._param,{escapeData:(this.settings.filter_params),noFunc:false},this.f_escapeString);
_param2=this.f_cloneData(param,{escapeData:(this.settings.filter_params&&deep==1),noFunc:false},this.f_escapeString)
}var $P=jQuery.extend({},_param1,_param2);
var $Q=(element!=undefined)?(element):({});
$Q.version=this.version;
var ret="";
for(var i=0,l=this._tree.length;
i<l;
++i){ret+=this._tree[i].get($T,$P,$Q,deep)
}--deep;
return ret
};
Template.prototype.setParam=function(name,value){this._param[name]=value
};
TemplateUtils=function(){};
TemplateUtils.escapeHTML=function(txt){return txt.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")
};
TemplateUtils.cloneData=function(d,filter,f_escapeString){if(d==null){return d
}switch(d.constructor){case Object:var o={};
for(var i in d){o[i]=TemplateUtils.cloneData(d[i],filter,f_escapeString)
}if(!filter.noFunc){if(d.hasOwnProperty("toString")){o.toString=d.toString
}}return o;
case Array:var o=[];
for(var i=0,l=d.length;
i<l;
++i){o[i]=TemplateUtils.cloneData(d[i],filter,f_escapeString)
}return o;
case String:return(filter.escapeData)?(f_escapeString(d)):(d);
case Function:if(filter.noFunc){if(Template.DEBUG_MODE){throw new Error("jTemplates: Functions are not allowed.")
}else{return undefined
}}default:return d
}};
TemplateUtils.optionToObject=function(optionText){if(optionText===null||optionText===undefined){return{}
}var o=optionText.split(/[= ]/);
if(o[0]===""){o.shift()
}var obj={};
for(var i=0,l=o.length;
i<l;
i+=2){obj[o[i]]=o[i+1]
}return obj
};
var TextNode=function(val,literalMode,template){this._value=val;
this._literalMode=literalMode;
this._template=template
};
TextNode.prototype.get=function(d,param,element,deep){var __t=this._value;
if(!this._literalMode){var __template=this._template;
var $T=d;
var $P=param;
var $Q=element;
__t=__t.replace(/\{(.*?)\}/g,function(__0,__1){try{var __tmp=eval(__1);
if(typeof __tmp=="function"){if(__template.settings.disallow_functions||!__template.settings.runnable_functions){return""
}else{__tmp=__tmp($T,$P,$Q)
}}return(__tmp===undefined)?(""):(String(__tmp))
}catch(e){if(Template.DEBUG_MODE){if(e instanceof JTException){e.type="subtemplate"
}throw e
}return""
}})
}return __t
};
var opIF=function(oper,par){this._parent=par;
oper.match(/\{#(?:else)*if (.*?)\}/);
this._cond=RegExp.$1;
this._onTrue=[];
this._onFalse=[];
this._currentState=this._onTrue
};
opIF.prototype.push=function(e){this._currentState.push(e)
};
opIF.prototype.getParent=function(){return this._parent
};
opIF.prototype.switchToElse=function(){this._currentState=this._onFalse
};
opIF.prototype.get=function(d,param,element,deep){var $T=d;
var $P=param;
var $Q=element;
var ret="";
try{var tab=(eval(this._cond))?(this._onTrue):(this._onFalse);
for(var i=0,l=tab.length;
i<l;
++i){ret+=tab[i].get(d,param,element,deep)
}}catch(e){if(Template.DEBUG_MODE||(e instanceof JTException)){throw e
}}return ret
};
opFORFactory=function(oper,par,template){if(oper.match(/\{#for (\w+?) *= *(\S+?) +to +(\S+?) *(?:step=(\S+?))*\}/)){oper="{#foreach opFORFactory.funcIterator as "+RegExp.$1+" begin="+(RegExp.$2||0)+" end="+(RegExp.$3||-1)+" step="+(RegExp.$4||1)+" extData=$T}";
return new opFOREACH(oper,par,template)
}else{throw new Error('jTemplates: Operator failed "find": '+oper)
}};
opFORFactory.funcIterator=function(i){return i
};
var opFOREACH=function(oper,par,template){this._parent=par;
this._template=template;
oper.match(/\{#foreach (.+?) as (\w+?)( .+)*\}/);
this._arg=RegExp.$1;
this._name=RegExp.$2;
this._option=RegExp.$3||null;
this._option=TemplateUtils.optionToObject(this._option);
this._onTrue=[];
this._onFalse=[];
this._currentState=this._onTrue
};
opFOREACH.prototype.push=function(e){this._currentState.push(e)
};
opFOREACH.prototype.getParent=function(){return this._parent
};
opFOREACH.prototype.switchToElse=function(){this._currentState=this._onFalse
};
opFOREACH.prototype.get=function(d,param,element,deep){try{var $T=d;
var $P=param;
var $Q=element;
var fcount=eval(this._arg);
var key=[];
var mode=typeof fcount;
if(mode=="object"){var arr=[];
jQuery.each(fcount,function(k,v){key.push(k);
arr.push(v)
});
fcount=arr
}var extData=(this._option.extData!==undefined)?(eval(this._option.extData)):(($T!=null)?($T):({}));
var s=Number(eval(this._option.begin)||0),e;
var step=Number(eval(this._option.step)||1);
if(mode!="function"){e=fcount.length
}else{if(this._option.end===undefined||this._option.end===null){e=Number.MAX_VALUE
}else{e=Number(eval(this._option.end))+((step>0)?(1):(-1))
}}var ret="";
var i,l;
if(this._option.count){var tmp=s+Number(eval(this._option.count));
e=(tmp>e)?(e):(tmp)
}if((e>s&&step>0)||(e<s&&step<0)){var iteration=0;
var _total=(mode!="function")?(Math.ceil((e-s)/step)):undefined;
var ckey,cval;
for(;
((step>0)?(s<e):(s>e));
s+=step,++iteration){ckey=key[s];
if(mode!="function"){cval=fcount[s]
}else{cval=fcount(s);
if(cval===undefined||cval===null){break
}}if((typeof cval=="function")&&(this._template.settings.disallow_functions||!this._template.settings.runnable_functions)){continue
}if((mode=="object")&&(ckey in Object)){continue
}var prevValue=extData[this._name];
extData[this._name]=cval;
extData[this._name+"$index"]=s;
extData[this._name+"$iteration"]=iteration;
extData[this._name+"$first"]=(iteration==0);
extData[this._name+"$last"]=(s+step>=e);
extData[this._name+"$total"]=_total;
extData[this._name+"$key"]=(ckey!==undefined&&ckey.constructor==String)?(this._template.f_escapeString(ckey)):(ckey);
extData[this._name+"$typeof"]=typeof cval;
for(i=0,l=this._onTrue.length;
i<l;
++i){try{ret+=this._onTrue[i].get(extData,param,element,deep)
}catch(ex){if(ex instanceof JTException){switch(ex.type){case"continue":i=l;
break;
case"break":i=l;
s=e;
break;
default:throw e
}}else{throw e
}}}delete extData[this._name+"$index"];
delete extData[this._name+"$iteration"];
delete extData[this._name+"$first"];
delete extData[this._name+"$last"];
delete extData[this._name+"$total"];
delete extData[this._name+"$key"];
delete extData[this._name+"$typeof"];
delete extData[this._name];
extData[this._name]=prevValue
}}else{for(i=0,l=this._onFalse.length;
i<l;
++i){ret+=this._onFalse[i].get($T,param,element,deep)
}}return ret
}catch(e){if(Template.DEBUG_MODE||(e instanceof JTException)){throw e
}return""
}};
var JTException=function(type){this.type=type
};
JTException.prototype=Error;
JTException.prototype.get=function(d){throw this
};
var Include=function(oper,includes){oper.match(/\{#include (.*?)(?: root=(.*?))?\}/);
this._template=includes[RegExp.$1];
if(this._template==undefined){if(Template.DEBUG_MODE){throw new Error("jTemplates: Cannot find include: "+RegExp.$1)
}}this._root=RegExp.$2
};
Include.prototype.get=function(d,param,element,deep){var $T=d;
var $P=param;
try{return this._template.get(eval(this._root),param,element,deep)
}catch(e){if(Template.DEBUG_MODE||(e instanceof JTException)){throw e
}}return""
};
var UserParam=function(oper){oper.match(/\{#param name=(\w*?) value=(.*?)\}/);
this._name=RegExp.$1;
this._value=RegExp.$2
};
UserParam.prototype.get=function(d,param,element,deep){var $T=d;
var $P=param;
var $Q=element;
try{param[this._name]=eval(this._value)
}catch(e){if(Template.DEBUG_MODE||(e instanceof JTException)){throw e
}param[this._name]=undefined
}return""
};
var Cycle=function(oper){oper.match(/\{#cycle values=(.*?)\}/);
this._values=eval(RegExp.$1);
this._length=this._values.length;
if(this._length<=0){throw new Error("jTemplates: cycle has no elements")
}this._index=0;
this._lastSessionID=-1
};
Cycle.prototype.get=function(d,param,element,deep){var sid=jQuery.data(element,"jTemplateSID");
if(sid!=this._lastSessionID){this._lastSessionID=sid;
this._index=0
}var i=this._index++%this._length;
return this._values[i]
};
jQuery.fn.setTemplate=function(s,includes,settings){if(s.constructor===Template){return jQuery(this).each(function(){jQuery.data(this,"jTemplate",s);
jQuery.data(this,"jTemplateSID",0)
})
}else{return jQuery(this).each(function(){jQuery.data(this,"jTemplate",new Template(s,includes,settings));
jQuery.data(this,"jTemplateSID",0)
})
}};
jQuery.fn.setTemplateURL=function(url_,includes,settings){var s=jQuery.ajax({url:url_,async:false}).responseText;
return jQuery(this).setTemplate(s,includes,settings)
};
jQuery.fn.setTemplateElement=function(elementName,includes,settings){var s=jQuery("#"+elementName).val();
if(s==null){s=jQuery("#"+elementName).html();
s=s.replace(/&lt;/g,"<").replace(/&gt;/g,">")
}s=jQuery.trim(s);
s=s.replace(/^<\!\[CDATA\[([\s\S]*)\]\]>$/im,"$1");
s=s.replace(/^<\!--([\s\S]*)-->$/im,"$1");
return jQuery(this).setTemplate(s,includes,settings)
};
jQuery.fn.hasTemplate=function(){var count=0;
jQuery(this).each(function(){if(jQuery.getTemplate(this)){++count
}});
return count
};
jQuery.fn.removeTemplate=function(){jQuery(this).processTemplateStop();
return jQuery(this).each(function(){jQuery.removeData(this,"jTemplate")
})
};
jQuery.fn.setParam=function(name,value){return jQuery(this).each(function(){var t=jQuery.getTemplate(this);
if(t===undefined){if(Template.DEBUG_MODE){throw new Error("jTemplates: Template is not defined.")
}else{return
}}t.setParam(name,value)
})
};
jQuery.fn.processTemplate=function(d,param){return jQuery(this).each(function(){var t=jQuery.getTemplate(this);
if(t===undefined){if(Template.DEBUG_MODE){throw new Error("jTemplates: Template is not defined.")
}else{return
}}jQuery.data(this,"jTemplateSID",jQuery.data(this,"jTemplateSID")+1);
jQuery(this).html(t.get(d,param,this,0))
})
};
jQuery.fn.processTemplateURL=function(url_,param,options){var that=this;
options=jQuery.extend({type:"GET",async:true,cache:false},options);
jQuery.ajax({url:url_,type:options.type,data:options.data,dataFilter:options.dataFilter,async:options.async,cache:options.cache,timeout:options.timeout,dataType:"json",success:function(d){var r=jQuery(that).processTemplate(d,param);
if(options.on_success){options.on_success(r)
}},error:options.on_error,complete:options.on_complete});
return this
};
var Updater=function(url,param,interval,args,objs,options){this._url=url;
this._param=param;
this._interval=interval;
this._args=args;
this.objs=objs;
this.timer=null;
this._options=options||{};
var that=this;
jQuery(objs).each(function(){jQuery.data(this,"jTemplateUpdater",that)
});
this.run()
};
Updater.prototype.run=function(){this.detectDeletedNodes();
if(this.objs.length==0){return
}var that=this;
jQuery.getJSON(this._url,this._args,function(d){var r=jQuery(that.objs).processTemplate(d,that._param);
if(that._options.on_success){that._options.on_success(r)
}});
this.timer=setTimeout(function(){that.run()
},this._interval)
};
Updater.prototype.detectDeletedNodes=function(){this.objs=jQuery.grep(this.objs,function(o){if(jQuery.browser.msie){var n=o.parentNode;
while(n&&n!=document){n=n.parentNode
}return n!=null
}else{return o.parentNode!=null
}})
};
jQuery.fn.processTemplateStart=function(url,param,interval,args,options){return new Updater(url,param,interval,args,this,options)
};
jQuery.fn.processTemplateStop=function(){return jQuery(this).each(function(){var updater=jQuery.data(this,"jTemplateUpdater");
if(updater==null){return
}var that=this;
updater.objs=jQuery.grep(updater.objs,function(o){return o!=that
});
jQuery.removeData(this,"jTemplateUpdater")
})
};
jQuery.extend({createTemplate:function(s,includes,settings){return new Template(s,includes,settings)
},createTemplateURL:function(url_,includes,settings){var s=jQuery.ajax({url:url_,async:false}).responseText;
return new Template(s,includes,settings)
},getTemplate:function(element){return jQuery.data(element,"jTemplate")
},processTemplateToText:function(template,data,parameter){return template.get(data,parameter,undefined,0)
},jTemplatesDebugMode:function(value){Template.DEBUG_MODE=value
}})
})(jQuery)
};
(function(F,V){var ac,Y=Array.prototype.slice,R=decodeURIComponent,ak=F.param,ai,Z,K,aj=F.bbq=F.bbq||{},T,L,ab,ag=F.event.special,ah="hashchange",U="querystring",P="fragment",H="elemUrlAttr",ae="location",aa="href",N="src",I=/^.*\?|#.*$/g,J=/^.*\#/,ad,Q={};
function M(a){return typeof a==="string"
}function S(a){var b=Y.call(arguments,1);
return function(){return a.apply(this,b.concat(Y.call(arguments)))
}
}function X(a){return a.replace(/^[^#]*#?(.*)$/,"$1")
}function W(a){return a.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")
}function af(h,c,j,g,i){var a,d,e,b,f;
if(g!==ac){e=j.match(h?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);
f=e[3]||"";
if(i===2&&M(g)){d=g.replace(h?J:I,"")
}else{b=Z(e[2]);
g=M(g)?Z[h?P:U](g):g;
d=i===2?g:i===1?F.extend({},g,b):F.extend({},b,g);
d=ak(d);
if(h){d=d.replace(ad,R)
}}a=e[1]+(h?"#":d||!e[1]?"?":"")+d+f
}else{a=c(j!==ac?j:V[ae][aa])
}return a
}ak[U]=S(af,0,W);
ak[P]=ai=S(af,1,X);
ai.noEscape=function(a){a=a||"";
var b=F.map(a.split(""),encodeURIComponent);
ad=new RegExp(b.join("|"),"g")
};
ai.noEscape(",/");
F.deparam=Z=function(a,d){var b={},c={"true":!0,"false":!1,"null":null};
F.each(a.replace(/\+/g," ").split("&"),function(k,f){var l=f.split("="),g=R(l[0]),m,h=b,j=0,e=g.split("]["),i=e.length-1;
if(/\[/.test(e[0])&&/\]$/.test(e[i])){e[i]=e[i].replace(/\]$/,"");
e=e.shift().split("[").concat(e);
i=e.length-1
}else{i=0
}if(l.length===2){m=R(l[1]);
if(d){m=m&&!isNaN(m)?+m:m==="undefined"?ac:c[m]!==ac?c[m]:m
}if(i){for(;
j<=i;
j++){g=e[j]===""?h.length:e[j];
h=h[g]=j<i?h[g]||(e[j+1]&&isNaN(e[j+1])?{}:[]):m
}}else{if(F.isArray(b[g])){b[g].push(m)
}else{if(b[g]!==ac){b[g]=[b[g],m]
}else{b[g]=m
}}}}else{if(g){b[g]=d?ac:""
}}});
return b
};
function G(a,c,b){if(c===ac||typeof c==="boolean"){b=c;
c=ak[a?P:U]()
}else{c=M(c)?c.replace(a?J:I,""):c
}return Z(c,b)
}Z[U]=S(G,0);
Z[P]=K=S(G,1);
F[H]||(F[H]=function(a){return F.extend(Q,a)
})({a:aa,base:aa,iframe:N,img:N,input:N,form:"action",link:aa,script:N});
ab=F[H];
function O(a,c,b,d){if(!M(b)&&typeof b!=="object"){d=b;
b=c;
c=ac
}return this.each(function(){var e=F(this),g=c||ab()[(this.nodeName||"").toLowerCase()]||"",f=g&&e.attr(g)||"";
e.attr(g,ak[a](f,b,d))
})
}F.fn[U]=S(O,U);
F.fn[P]=S(O,P);
aj.pushState=T=function(a,d){if(M(a)&&/^#/.test(a)&&d===ac){d=2
}var b=a!==ac,c=ai(V[ae][aa],b?a:{},b?d:2);
V[ae][aa]=c+(/#/.test(c)?"":"#")
};
aj.getState=L=function(b,a){return b===ac||typeof b==="boolean"?K(b):K(a)[b]
};
aj.removeState=function(b){var a={};
if(b!==ac){a=L();
F.each(F.isArray(b)?b:arguments,function(c,d){delete a[d]
})
}T(a,2)
};
ag[ah]=F.extend(ag[ah],{add:function(c){var a;
function b(d){var e=d[P]=ai();
d.getState=function(g,f){return g===ac||typeof g==="boolean"?Z(e,g):Z(e,f)[g]
};
a.apply(this,arguments)
}if(F.isFunction(c)){a=c;
return b
}else{a=c.handler;
c.handler=b
}}})
})(jQuery,this);
(function(p,q,x){var o,n=p.event.special,w="location",v="hashchange",m="href",t=p.browser,s=document.documentMode,r=t.msie&&(s===x||s<8),u="on"+v in q&&!r;
function y(a){a=a||q[w][m];
return a.replace(/^[^#]*#?(.*)$/,"$1")
}p[v+"Delay"]=100;
n[v]=p.extend(n[v],{setup:function(){if(u){return false
}p(o.start)
},teardown:function(){if(u){return false
}p(o.stop)
}});
o=(function(){var a={},b,f,e,c;
function d(){e=c=function(g){return g
};
if(r){f=p('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;
c=function(){return y(f.document[w][m])
};
e=function(g,i){if(g!==i){var h=f.document;
h.open().close();
h[w].hash="#"+g
}};
e(y())
}}a.start=function(){if(b){return
}var g=y();
e||d();
(function h(){var i=y(),j=c(g);
if(i!==g){e(g=i,j);
p(q).trigger(v)
}else{if(j!==g){q[w][m]=q[w][m].replace(/#.*/,"")+"#"+j
}}b=setTimeout(h,p[v+"Delay"])
})()
};
a.stop=function(){if(!f){b&&clearTimeout(b);
b=0
}};
return a
})()
})(jQuery,this);
(function(){jQuery.color={};
jQuery.color.make=function(f,e,c,d){var b={};
b.r=f||0;
b.g=e||0;
b.b=c||0;
b.a=d!=null?d:1;
b.add=function(j,h){for(var g=0;
g<j.length;
++g){b[j.charAt(g)]+=h
}return b.normalize()
};
b.scale=function(j,h){for(var g=0;
g<j.length;
++g){b[j.charAt(g)]*=h
}return b.normalize()
};
b.toString=function(){if(b.a>=1){return"rgb("+[b.r,b.g,b.b].join(",")+")"
}else{return"rgba("+[b.r,b.g,b.b,b.a].join(",")+")"
}};
b.normalize=function(){function g(j,k,h){return k<j?j:(k>h?h:k)
}b.r=g(0,parseInt(b.r),255);
b.g=g(0,parseInt(b.g),255);
b.b=g(0,parseInt(b.b),255);
b.a=g(0,b.a,1);
return b
};
b.clone=function(){return jQuery.color.make(b.r,b.b,b.g,b.a)
};
return b.normalize()
};
jQuery.color.extract=function(d,c){var b;
do{b=d.css(c).toLowerCase();
if(b!=""&&b!="transparent"){break
}d=d.parent()
}while(!jQuery.nodeName(d.get(0),"body"));
if(b=="rgba(0, 0, 0, 0)"){b="transparent"
}return jQuery.color.parse(b)
};
jQuery.color.parse=function(b){var e,c=jQuery.color.make;
if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)){return c(parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10))
}if(e=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(b)){return c(parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10),parseFloat(e[4]))
}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)){return c(parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55)
}if(e=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(b)){return c(parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55,parseFloat(e[4]))
}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)){return c(parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16))
}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)){return c(parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16))
}var d=jQuery.trim(b).toLowerCase();
if(d=="transparent"){return c(255,255,255,0)
}else{e=a[d];
return c(e[0],e[1],e[2])
}};
var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}
})();
(function(b){function c(aT,ai,ag,aD){var at=[],aX={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:0.85},xaxis:{mode:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:false},yaxis:{autoscaleMargin:0.02},x2axis:{autoscaleMargin:null},y2axis:{autoscaleMargin:0.02},series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff"},lines:{lineWidth:2,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false},shadowSize:3},grid:{show:true,aboveData:false,color:"#545454",backgroundColor:null,tickColor:"rgba(0,0,0,0.15)",labelMargin:5,borderWidth:2,borderColor:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},hooks:{}},ar=null,ah=null,af=null,ae=null,A=null,aM={xaxis:{},yaxis:{},x2axis:{},y2axis:{}},aZ={left:0,right:0,top:0,bottom:0},aG=0,aq=0,az=0,aL=0,aw={processOptions:[],processRawData:[],processDatapoints:[],draw:[],bindEvents:[],drawOverlay:[]},aB=this;
aB.setData=aY;
aB.setupGrid=aU;
aB.draw=C;
aB.getPlaceholder=function(){return aT
};
aB.getCanvas=function(){return ar
};
aB.getPlotOffset=function(){return aZ
};
aB.width=function(){return az
};
aB.height=function(){return aL
};
aB.offset=function(){var d=af.offset();
d.left+=aZ.left;
d.top+=aZ.top;
return d
};
aB.getData=function(){return at
};
aB.getAxes=function(){return aM
};
aB.getOptions=function(){return aX
};
aB.highlight=ad;
aB.unhighlight=aH;
aB.triggerRedrawOverlay=aO;
aB.pointOffset=function(d){return{left:parseInt(an(d,"xaxis").p2c(+d.x)+aZ.left),top:parseInt(an(d,"yaxis").p2c(+d.y)+aZ.top)}
};
aB.hooks=aw;
a2(aB);
aN(ag);
a1();
aY(ai);
aU();
C();
aa();
function ac(d,f){f=[aB].concat(f);
for(var e=0;
e<d.length;
++e){d[e].apply(this,f)
}}function a2(){for(var e=0;
e<aD.length;
++e){var d=aD[e];
d.init(aB);
if(d.options){b.extend(true,aX,d.options)
}}}function aN(e){b.extend(true,aX,e);
if(aX.grid.borderColor==null){aX.grid.borderColor=aX.grid.color
}if(aX.xaxis.noTicks&&aX.xaxis.ticks==null){aX.xaxis.ticks=aX.xaxis.noTicks
}if(aX.yaxis.noTicks&&aX.yaxis.ticks==null){aX.yaxis.ticks=aX.yaxis.noTicks
}if(aX.grid.coloredAreas){aX.grid.markings=aX.grid.coloredAreas
}if(aX.grid.coloredAreasColor){aX.grid.markingsColor=aX.grid.coloredAreasColor
}if(aX.lines){b.extend(true,aX.series.lines,aX.lines)
}if(aX.points){b.extend(true,aX.series.points,aX.points)
}if(aX.bars){b.extend(true,aX.series.bars,aX.bars)
}if(aX.shadowSize){aX.series.shadowSize=aX.shadowSize
}for(var d in aw){if(aX.hooks[d]&&aX.hooks[d].length){aw[d]=aw[d].concat(aX.hooks[d])
}}ac(aw.processOptions,[aX])
}function aY(d){at=av(d);
am();
aS()
}function av(d){var f=[];
for(var g=0;
g<d.length;
++g){var e=b.extend(true,{},aX.series);
if(d[g].data){e.data=d[g].data;
delete d[g].data;
b.extend(true,e,d[g]);
d[g].data=e.data
}else{e.data=d[g]
}f.push(e)
}return f
}function an(d,f){var e=d[f];
if(!e||e==1){return aM[f]
}if(typeof e=="number"){return aM[f.charAt(0)+e+f.slice(1)]
}return e
}function am(){var o;
var h=at.length,f=[],q=[];
for(o=0;
o<at.length;
++o){var l=at[o].color;
if(l!=null){--h;
if(typeof l=="number"){q.push(l)
}else{f.push(b.color.parse(at[o].color))
}}}for(o=0;
o<q.length;
++o){h=Math.max(h,q[o]+1)
}var e=[],p=0;
o=0;
while(e.length<h){var m;
if(aX.colors.length==o){m=b.color.make(100,100,100)
}else{m=b.color.parse(aX.colors[o])
}var d=p%2==1?-1:1;
m.scale("rgb",1+d*Math.ceil(p/2)*0.2);
e.push(m);
++o;
if(o>=aX.colors.length){o=0;
++p
}}var n=0,g;
for(o=0;
o<at.length;
++o){g=at[o];
if(g.color==null){g.color=e[n].toString();
++n
}else{if(typeof g.color=="number"){g.color=e[g.color].toString()
}}if(g.lines.show==null){var j,k=true;
for(j in g){if(g[j].show){k=false;
break
}}if(k){g.lines.show=true
}}g.xaxis=an(g,"xaxis");
g.yaxis=an(g,"yaxis")
}}function aS(){var k=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY,d,f,g,l,v,p,e,j,r,s,w,x,D,n;
for(w in aM){aM[w].datamin=k;
aM[w].datamax=q;
aM[w].used=false
}function t(I,G,H){if(G<I.datamin){I.datamin=G
}if(H>I.datamax){I.datamax=H
}}for(d=0;
d<at.length;
++d){p=at[d];
p.datapoints={points:[]};
ac(aw.processRawData,[p,p.data,p.datapoints])
}for(d=0;
d<at.length;
++d){p=at[d];
var y=p.data,E=p.datapoints.format;
if(!E){E=[];
E.push({x:true,number:true,required:true});
E.push({y:true,number:true,required:true});
if(p.bars.show){E.push({y:true,number:true,required:false,defaultValue:0})
}p.datapoints.format=E
}if(p.datapoints.pointsize!=null){continue
}if(p.datapoints.pointsize==null){p.datapoints.pointsize=E.length
}j=p.datapoints.pointsize;
e=p.datapoints.points;
insertSteps=p.lines.show&&p.lines.steps;
p.xaxis.used=p.yaxis.used=true;
for(f=g=0;
f<y.length;
++f,g+=j){n=y[f];
var u=n==null;
if(!u){for(l=0;
l<j;
++l){x=n[l];
D=E[l];
if(D){if(D.number&&x!=null){x=+x;
if(isNaN(x)){x=null
}}if(x==null){if(D.required){u=true
}if(D.defaultValue!=null){x=D.defaultValue
}}}e[g+l]=x
}}if(u){for(l=0;
l<j;
++l){x=e[g+l];
if(x!=null){D=E[l];
if(D.x){t(p.xaxis,x,x)
}if(D.y){t(p.yaxis,x,x)
}}e[g+l]=null
}}else{if(insertSteps&&g>0&&e[g-j]!=null&&e[g-j]!=e[g]&&e[g-j+1]!=e[g+1]){for(l=0;
l<j;
++l){e[g+j+l]=e[g+l]
}e[g+1]=e[g-j+1];
g+=j
}}}}for(d=0;
d<at.length;
++d){p=at[d];
ac(aw.processDatapoints,[p,p.datapoints])
}for(d=0;
d<at.length;
++d){p=at[d];
e=p.datapoints.points,j=p.datapoints.pointsize;
var o=k,h=k,m=q,F=q;
for(f=0;
f<e.length;
f+=j){if(e[f]==null){continue
}for(l=0;
l<j;
++l){x=e[f+l];
D=E[l];
if(!D){continue
}if(D.x){if(x<o){o=x
}if(x>m){m=x
}}if(D.y){if(x<h){h=x
}if(x>F){F=x
}}}}if(p.bars.show){var z=p.bars.align=="left"?0:-p.bars.barWidth/2;
if(p.bars.horizontal){h+=z;
F+=z+p.bars.barWidth
}else{o+=z;
m+=z+p.bars.barWidth
}}t(p.xaxis,o,m);
t(p.yaxis,h,F)
}for(w in aM){if(aM[w].datamin==k){aM[w].datamin=null
}if(aM[w].datamax==q){aM[w].datamax=null
}}}function a1(){function d(f,g){var e=document.createElement("canvas");
e.width=f;
e.height=g;
if(b.browser.msie){e=window.G_vmlCanvasManager.initElement(e)
}return e
}aG=aT.width();
aq=aT.height();
aT.html("");
if(aT.css("position")=="static"){aT.css("position","relative")
}if(aG<=0||aq<=0){throw"Invalid dimensions for plot, width = "+aG+", height = "+aq
}if(b.browser.msie){window.G_vmlCanvasManager.init_(document)
}ar=b(d(aG,aq)).appendTo(aT).get(0);
ae=ar.getContext("2d");
ah=b(d(aG,aq)).css({position:"absolute",left:0,top:0}).appendTo(aT).get(0);
A=ah.getContext("2d");
A.stroke()
}function aa(){af=b([ah,ar]);
if(aX.grid.hoverable){af.mousemove(aE)
}if(aX.grid.clickable){af.click(a0)
}ac(aw.bindEvents,[af])
}function aU(){function f(j,h){function n(p){return p
}var k,o,m=h.transform||n,l=h.inverseTransform;
if(j==aM.xaxis||j==aM.x2axis){k=j.scale=az/(m(j.max)-m(j.min));
o=m(j.min);
if(m==n){j.p2c=function(p){return(p-o)*k
}
}else{j.p2c=function(p){return(m(p)-o)*k
}
}if(!l){j.c2p=function(p){return o+p/k
}
}else{j.c2p=function(p){return l(o+p/k)
}
}}else{k=j.scale=aL/(m(j.max)-m(j.min));
o=m(j.max);
if(m==n){j.p2c=function(p){return(o-p)*k
}
}else{j.p2c=function(p){return(o-m(p))*k
}
}if(!l){j.c2p=function(p){return o-p/k
}
}else{j.c2p=function(p){return l(o-p/k)
}
}}}function d(k,h){var l,j=[],m;
k.labelWidth=h.labelWidth;
k.labelHeight=h.labelHeight;
if(k==aM.xaxis||k==aM.x2axis){if(k.labelWidth==null){k.labelWidth=aG/(k.ticks.length>0?k.ticks.length:1)
}if(k.labelHeight==null){j=[];
for(l=0;
l<k.ticks.length;
++l){m=k.ticks[l].label;
if(m){j.push('<div class="tickLabel" style="float:left;width:'+k.labelWidth+'px">'+m+"</div>")
}}if(j.length>0){var n=b('<div style="position:absolute;top:-10000px;width:10000px;font-size:smaller">'+j.join("")+'<div style="clear:left"></div></div>').appendTo(aT);
k.labelHeight=n.height();
n.remove()
}}}else{if(k.labelWidth==null||k.labelHeight==null){for(l=0;
l<k.ticks.length;
++l){m=k.ticks[l].label;
if(m){j.push('<div class="tickLabel">'+m+"</div>")
}}if(j.length>0){var n=b('<div style="position:absolute;top:-10000px;font-size:smaller">'+j.join("")+"</div>").appendTo(aT);
if(k.labelWidth==null){k.labelWidth=n.width()
}if(k.labelHeight==null){k.labelHeight=n.find("div").height()
}n.remove()
}}}if(k.labelWidth==null){k.labelWidth=0
}if(k.labelHeight==null){k.labelHeight=0
}}function e(){var h=aX.grid.borderWidth;
for(i=0;
i<at.length;
++i){h=Math.max(h,2*(at[i].points.radius+at[i].points.lineWidth/2))
}aZ.left=aZ.right=aZ.top=aZ.bottom=h;
var j=aX.grid.labelMargin+aX.grid.borderWidth;
if(aM.xaxis.labelHeight>0){aZ.bottom=Math.max(h,aM.xaxis.labelHeight+j)
}if(aM.yaxis.labelWidth>0){aZ.left=Math.max(h,aM.yaxis.labelWidth+j)
}if(aM.x2axis.labelHeight>0){aZ.top=Math.max(h,aM.x2axis.labelHeight+j)
}if(aM.y2axis.labelWidth>0){aZ.right=Math.max(h,aM.y2axis.labelWidth+j)
}az=aG-aZ.left-aZ.right;
aL=aq-aZ.bottom-aZ.top
}var g;
for(g in aM){ax(aM[g],aX[g])
}if(aX.grid.show){for(g in aM){aC(aM[g],aX[g]);
aP(aM[g],aX[g]);
d(aM[g],aX[g])
}e()
}else{aZ.left=aZ.right=aZ.top=aZ.bottom=0;
az=aG;
aL=aq
}for(g in aM){f(aM[g],aX[g])
}if(aX.grid.show){aW()
}B()
}function ax(g,d){var h=+(d.min!=null?d.min:g.datamin),k=+(d.max!=null?d.max:g.datamax),e=k-h;
if(e==0){var j=k==0?1:0.01;
if(d.min==null){h-=j
}if(d.max==null||d.min!=null){k+=j
}}else{var f=d.autoscaleMargin;
if(f!=null){if(d.min==null){h-=e*f;
if(h<0&&g.datamin!=null&&g.datamin>=0){h=0
}}if(d.max==null){k+=e*f;
if(k>0&&g.datamax!=null&&g.datamax<=0){k=0
}}}}g.min=h;
g.max=k
}function aC(r,o){var s;
if(typeof o.ticks=="number"&&o.ticks>0){s=o.ticks
}else{if(r==aM.xaxis||r==aM.x2axis){s=0.3*Math.sqrt(aG)
}else{s=0.3*Math.sqrt(aq)
}}var j=(r.max-r.min)/s,g,n,l,k,p,d,e;
if(o.mode=="time"){var m={second:1000,minute:60*1000,hour:60*60*1000,day:24*60*60*1000,month:30*24*60*60*1000,year:365.2425*24*60*60*1000};
var h=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[0.25,"month"],[0.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]];
var t=0;
if(o.minTickSize!=null){if(typeof o.tickSize=="number"){t=o.tickSize
}else{t=o.minTickSize[0]*m[o.minTickSize[1]]
}}for(p=0;
p<h.length-1;
++p){if(j<(h[p][0]*m[h[p][1]]+h[p+1][0]*m[h[p+1][1]])/2&&h[p][0]*m[h[p][1]]>=t){break
}}g=h[p][0];
l=h[p][1];
if(l=="year"){d=Math.pow(10,Math.floor(Math.log(j/m.year)/Math.LN10));
e=(j/m.year)/d;
if(e<1.5){g=1
}else{if(e<3){g=2
}else{if(e<7.5){g=5
}else{g=10
}}}g*=d
}if(o.tickSize){g=o.tickSize[0];
l=o.tickSize[1]
}n=function(v){var E=[],G=v.tickSize[0],D=v.tickSize[1],F=new Date(v.min);
var w=G*m[D];
if(D=="second"){F.setUTCSeconds(a(F.getUTCSeconds(),G))
}if(D=="minute"){F.setUTCMinutes(a(F.getUTCMinutes(),G))
}if(D=="hour"){F.setUTCHours(a(F.getUTCHours(),G))
}if(D=="month"){F.setUTCMonth(a(F.getUTCMonth(),G))
}if(D=="year"){F.setUTCFullYear(a(F.getUTCFullYear(),G))
}F.setUTCMilliseconds(0);
if(w>=m.minute){F.setUTCSeconds(0)
}if(w>=m.hour){F.setUTCMinutes(0)
}if(w>=m.day){F.setUTCHours(0)
}if(w>=m.day*4){F.setUTCDate(1)
}if(w>=m.year){F.setUTCMonth(0)
}var y=0,z=Number.NaN,u;
do{u=z;
z=F.getTime();
E.push({v:z,label:v.tickFormatter(z,v)});
if(D=="month"){if(G<1){F.setUTCDate(1);
var x=F.getTime();
F.setUTCMonth(F.getUTCMonth()+1);
var H=F.getTime();
F.setTime(z+y*m.hour+(H-x)*G);
y=F.getUTCHours();
F.setUTCHours(0)
}else{F.setUTCMonth(F.getUTCMonth()+G)
}}else{if(D=="year"){F.setUTCFullYear(F.getUTCFullYear()+G)
}else{F.setTime(z+w)
}}}while(z<v.max&&z!=u);
return E
};
k=function(z,w){var u=new Date(z);
if(o.timeformat!=null){return b.plot.formatDate(u,o.timeformat,o.monthNames)
}var y=w.tickSize[0]*m[w.tickSize[1]];
var x=w.max-w.min;
var v=(o.twelveHourClock)?" %p":"";
if(y<m.minute){fmt="%h:%M:%S"+v
}else{if(y<m.day){if(x<2*m.day){fmt="%h:%M"+v
}else{fmt="%b %d %h:%M"+v
}}else{if(y<m.month){fmt="%b %d"
}else{if(y<m.year){if(x<m.year){fmt="%b"
}else{fmt="%b %y"
}}else{fmt="%y"
}}}}return b.plot.formatDate(u,fmt,o.monthNames)
}
}else{var f=o.tickDecimals;
var q=-Math.floor(Math.log(j)/Math.LN10);
if(f!=null&&q>f){q=f
}d=Math.pow(10,-q);
e=j/d;
if(e<1.5){g=1
}else{if(e<3){g=2;
if(e>2.25&&(f==null||q+1<=f)){g=2.5;
++q
}}else{if(e<7.5){g=5
}else{g=10
}}}g*=d;
if(o.minTickSize!=null&&g<o.minTickSize){g=o.minTickSize
}if(o.tickSize!=null){g=o.tickSize
}r.tickDecimals=Math.max(0,(f!=null)?f:q);
n=function(x){var v=[];
var u=a(x.min,x.tickSize),y=0,z=Number.NaN,w;
do{w=z;
z=u+y*x.tickSize;
v.push({v:z,label:x.tickFormatter(z,x)});
++y
}while(z<x.max&&z!=w);
return v
};
k=function(v,u){return v.toFixed(u.tickDecimals)
}
}r.tickSize=l?[g,l]:g;
r.tickGenerator=n;
if(b.isFunction(o.tickFormatter)){r.tickFormatter=function(v,u){return""+o.tickFormatter(v,u)
}
}else{r.tickFormatter=k
}}function aP(f,d){f.ticks=[];
if(!f.used){return
}if(d.ticks==null){f.ticks=f.tickGenerator(f)
}else{if(typeof d.ticks=="number"){if(d.ticks>0){f.ticks=f.tickGenerator(f)
}}else{if(d.ticks){var e=d.ticks;
if(b.isFunction(e)){e=e({min:f.min,max:f.max})
}var g,k;
for(g=0;
g<e.length;
++g){var j=null;
var h=e[g];
if(typeof h=="object"){k=h[0];
if(h.length>1){j=h[1]
}}else{k=h
}if(j==null){j=f.tickFormatter(k,f)
}f.ticks[g]={v:k,label:j}
}}}}if(d.autoscaleMargin!=null&&f.ticks.length>0){if(d.min==null){f.min=Math.min(f.min,f.ticks[0].v)
}if(d.max==null&&f.ticks.length>1){f.max=Math.max(f.max,f.ticks[f.ticks.length-1].v)
}}}function C(){ae.clearRect(0,0,aG,aq);
var d=aX.grid;
if(d.show&&!d.aboveData){ao()
}for(var e=0;
e<at.length;
++e){al(at[e])
}ac(aw.draw,[ae]);
if(d.show&&d.aboveData){ao()
}}function au(k,d){var g=d+"axis",l=d+"2axis",h,e,f,j;
if(k[g]){h=aM[g];
e=k[g].from;
f=k[g].to
}else{if(k[l]){h=aM[l];
e=k[l].from;
f=k[l].to
}else{h=aM[g];
e=k[d+"1"];
f=k[d+"2"]
}}if(e!=null&&f!=null&&e>f){return{from:f,to:e,axis:h}
}return{from:e,to:f,axis:h}
}function ao(){var g;
ae.save();
ae.translate(aZ.left,aZ.top);
if(aX.grid.backgroundColor){ae.fillStyle=ap(aX.grid.backgroundColor,aL,0,"rgba(255, 255, 255, 0)");
ae.fillRect(0,0,az,aL)
}var k=aX.grid.markings;
if(k){if(b.isFunction(k)){k=k({xmin:aM.xaxis.min,xmax:aM.xaxis.max,ymin:aM.yaxis.min,ymax:aM.yaxis.max,xaxis:aM.xaxis,yaxis:aM.yaxis,x2axis:aM.x2axis,y2axis:aM.y2axis})
}for(g=0;
g<k.length;
++g){var l=k[g],e=au(l,"x"),h=au(l,"y");
if(e.from==null){e.from=e.axis.min
}if(e.to==null){e.to=e.axis.max
}if(h.from==null){h.from=h.axis.min
}if(h.to==null){h.to=h.axis.max
}if(e.to<e.axis.min||e.from>e.axis.max||h.to<h.axis.min||h.from>h.axis.max){continue
}e.from=Math.max(e.from,e.axis.min);
e.to=Math.min(e.to,e.axis.max);
h.from=Math.max(h.from,h.axis.min);
h.to=Math.min(h.to,h.axis.max);
if(e.from==e.to&&h.from==h.to){continue
}e.from=e.axis.p2c(e.from);
e.to=e.axis.p2c(e.to);
h.from=h.axis.p2c(h.from);
h.to=h.axis.p2c(h.to);
if(e.from==e.to||h.from==h.to){ae.beginPath();
ae.strokeStyle=l.color||aX.grid.markingsColor;
ae.lineWidth=l.lineWidth||aX.grid.markingsLineWidth;
ae.moveTo(e.from,h.from);
ae.lineTo(e.to,h.to);
ae.stroke()
}else{ae.fillStyle=l.color||aX.grid.markingsColor;
ae.fillRect(e.from,h.to,e.to-e.from,h.from-h.to)
}}}ae.lineWidth=1;
ae.strokeStyle=aX.grid.tickColor;
ae.beginPath();
var j,f=aM.xaxis;
for(g=0;
g<f.ticks.length;
++g){j=f.ticks[g].v;
if(j<=f.min||j>=aM.xaxis.max){continue
}ae.moveTo(Math.floor(f.p2c(j))+ae.lineWidth/2,0);
ae.lineTo(Math.floor(f.p2c(j))+ae.lineWidth/2,aL)
}f=aM.yaxis;
for(g=0;
g<f.ticks.length;
++g){j=f.ticks[g].v;
if(j<=f.min||j>=f.max){continue
}ae.moveTo(0,Math.floor(f.p2c(j))+ae.lineWidth/2);
ae.lineTo(az,Math.floor(f.p2c(j))+ae.lineWidth/2)
}f=aM.x2axis;
for(g=0;
g<f.ticks.length;
++g){j=f.ticks[g].v;
if(j<=f.min||j>=f.max){continue
}ae.moveTo(Math.floor(f.p2c(j))+ae.lineWidth/2,-5);
ae.lineTo(Math.floor(f.p2c(j))+ae.lineWidth/2,5)
}f=aM.y2axis;
for(g=0;
g<f.ticks.length;
++g){j=f.ticks[g].v;
if(j<=f.min||j>=f.max){continue
}ae.moveTo(az-5,Math.floor(f.p2c(j))+ae.lineWidth/2);
ae.lineTo(az+5,Math.floor(f.p2c(j))+ae.lineWidth/2)
}ae.stroke();
if(aX.grid.borderWidth){var d=aX.grid.borderWidth;
ae.lineWidth=d;
ae.strokeStyle=aX.grid.borderColor;
ae.strokeRect(-d/2,-d/2,az+d,aL+d)
}ae.restore()
}function aW(){aT.find(".tickLabels").remove();
var f=['<div class="tickLabels" style="font-size:smaller;color:'+aX.grid.color+'">'];
function d(h,g){for(var j=0;
j<h.ticks.length;
++j){var k=h.ticks[j];
if(!k.label||k.v<h.min||k.v>h.max){continue
}f.push(g(k,h))
}}var e=aX.grid.labelMargin+aX.grid.borderWidth;
d(aM.xaxis,function(h,g){return'<div style="position:absolute;top:'+(aZ.top+aL+e)+"px;left:"+Math.round(aZ.left+g.p2c(h.v)-g.labelWidth/2)+"px;width:"+g.labelWidth+'px;text-align:center" class="tickLabel">'+h.label+"</div>"
});
d(aM.yaxis,function(h,g){return'<div style="position:absolute;top:'+Math.round(aZ.top+g.p2c(h.v)-g.labelHeight/2)+"px;right:"+(aZ.right+az+e)+"px;width:"+g.labelWidth+'px;text-align:right" class="tickLabel">'+h.label+"</div>"
});
d(aM.x2axis,function(h,g){return'<div style="position:absolute;bottom:'+(aZ.bottom+aL+e)+"px;left:"+Math.round(aZ.left+g.p2c(h.v)-g.labelWidth/2)+"px;width:"+g.labelWidth+'px;text-align:center" class="tickLabel">'+h.label+"</div>"
});
d(aM.y2axis,function(h,g){return'<div style="position:absolute;top:'+Math.round(aZ.top+g.p2c(h.v)-g.labelHeight/2)+"px;left:"+(aZ.left+az+e)+"px;width:"+g.labelWidth+'px;text-align:left" class="tickLabel">'+h.label+"</div>"
});
f.push("</div>");
aT.append(f.join(""))
}function al(d){if(d.lines.show){a3(d)
}if(d.bars.show){aR(d)
}if(d.points.show){aQ(d)
}}function a3(g){function h(q,p,x,l,m){var y=q.points,w=q.pointsize,s=null,t=null;
ae.beginPath();
for(var r=w;
r<y.length;
r+=w){var u=y[r-w],n=y[r-w+1],v=y[r],o=y[r+1];
if(u==null||v==null){continue
}if(n<=o&&n<m.min){if(o<m.min){continue
}u=(m.min-n)/(o-n)*(v-u)+u;
n=m.min
}else{if(o<=n&&o<m.min){if(n<m.min){continue
}v=(m.min-n)/(o-n)*(v-u)+u;
o=m.min
}}if(n>=o&&n>m.max){if(o>m.max){continue
}u=(m.max-n)/(o-n)*(v-u)+u;
n=m.max
}else{if(o>=n&&o>m.max){if(n>m.max){continue
}v=(m.max-n)/(o-n)*(v-u)+u;
o=m.max
}}if(u<=v&&u<l.min){if(v<l.min){continue
}n=(l.min-u)/(v-u)*(o-n)+n;
u=l.min
}else{if(v<=u&&v<l.min){if(u<l.min){continue
}o=(l.min-u)/(v-u)*(o-n)+n;
v=l.min
}}if(u>=v&&u>l.max){if(v>l.max){continue
}n=(l.max-u)/(v-u)*(o-n)+n;
u=l.max
}else{if(v>=u&&v>l.max){if(u>l.max){continue
}o=(l.max-u)/(v-u)*(o-n)+n;
v=l.max
}}if(u!=s||n!=t){ae.moveTo(l.p2c(u)+p,m.p2c(n)+x)
}s=v;
t=o;
ae.lineTo(l.p2c(v)+p,m.p2c(o)+x)
}ae.stroke()
}function f(r,D,m){var z=r.points,x=r.pointsize,w=Math.min(Math.max(0,m.min),m.max),o,t=0,l=false;
for(var s=x;
s<z.length;
s+=x){var u=z[s-x],n=z[s-x+1],v=z[s],p=z[s+1];
if(l&&u!=null&&v==null){ae.lineTo(D.p2c(t),m.p2c(w));
ae.fill();
l=false;
continue
}if(u==null||v==null){continue
}if(u<=v&&u<D.min){if(v<D.min){continue
}n=(D.min-u)/(v-u)*(p-n)+n;
u=D.min
}else{if(v<=u&&v<D.min){if(u<D.min){continue
}p=(D.min-u)/(v-u)*(p-n)+n;
v=D.min
}}if(u>=v&&u>D.max){if(v>D.max){continue
}n=(D.max-u)/(v-u)*(p-n)+n;
u=D.max
}else{if(v>=u&&v>D.max){if(u>D.max){continue
}p=(D.max-u)/(v-u)*(p-n)+n;
v=D.max
}}if(!l){ae.beginPath();
ae.moveTo(D.p2c(u),m.p2c(w));
l=true
}if(n>=m.max&&p>=m.max){ae.lineTo(D.p2c(u),m.p2c(m.max));
ae.lineTo(D.p2c(v),m.p2c(m.max));
t=v;
continue
}else{if(n<=m.min&&p<=m.min){ae.lineTo(D.p2c(u),m.p2c(m.min));
ae.lineTo(D.p2c(v),m.p2c(m.min));
t=v;
continue
}}var y=u,q=v;
if(n<=p&&n<m.min&&p>=m.min){u=(m.min-n)/(p-n)*(v-u)+u;
n=m.min
}else{if(p<=n&&p<m.min&&n>=m.min){v=(m.min-n)/(p-n)*(v-u)+u;
p=m.min
}}if(n>=p&&n>m.max&&p<=m.max){u=(m.max-n)/(p-n)*(v-u)+u;
n=m.max
}else{if(p>=n&&p>m.max&&n<=m.max){v=(m.max-n)/(p-n)*(v-u)+u;
p=m.max
}}if(u!=y){if(n<=m.min){o=m.min
}else{o=m.max
}ae.lineTo(D.p2c(y),m.p2c(o));
ae.lineTo(D.p2c(u),m.p2c(o))
}ae.lineTo(D.p2c(u),m.p2c(n));
ae.lineTo(D.p2c(v),m.p2c(p));
if(v!=q){if(p<=m.min){o=m.min
}else{o=m.max
}ae.lineTo(D.p2c(v),m.p2c(o));
ae.lineTo(D.p2c(q),m.p2c(o))
}t=Math.max(v,q)
}if(l){ae.lineTo(D.p2c(t),m.p2c(w));
ae.fill()
}}ae.save();
ae.translate(aZ.left,aZ.top);
ae.lineJoin="round";
var e=g.lines.lineWidth,k=g.shadowSize;
if(e>0&&k>0){ae.lineWidth=k;
ae.strokeStyle="rgba(0,0,0,0.1)";
var d=Math.PI/18;
h(g.datapoints,Math.sin(d)*(e/2+k/2),Math.cos(d)*(e/2+k/2),g.xaxis,g.yaxis);
ae.lineWidth=k/2;
h(g.datapoints,Math.sin(d)*(e/2+k/4),Math.cos(d)*(e/2+k/4),g.xaxis,g.yaxis)
}ae.lineWidth=e;
ae.strokeStyle=g.color;
var j=aj(g.lines,g.color,0,aL);
if(j){ae.fillStyle=j;
f(g.datapoints,g.xaxis,g.yaxis)
}if(e>0){h(g.datapoints,0,0,g.xaxis,g.yaxis)
}ae.restore()
}function aQ(f){function d(r,s,k,u,q,m,n){var l=r.points,v=r.pointsize;
for(var t=0;
t<l.length;
t+=v){var o=l[t],p=l[t+1];
if(o==null||o<m.min||o>m.max||p<n.min||p>n.max){continue
}ae.beginPath();
ae.arc(m.p2c(o),n.p2c(p)+u,s,0,q,false);
if(k){ae.fillStyle=k;
ae.fill()
}ae.stroke()
}}ae.save();
ae.translate(aZ.left,aZ.top);
var e=f.lines.lineWidth,h=f.shadowSize,j=f.points.radius;
if(e>0&&h>0){var g=h/2;
ae.lineWidth=g;
ae.strokeStyle="rgba(0,0,0,0.1)";
d(f.datapoints,j,null,g+g/2,Math.PI,f.xaxis,f.yaxis);
ae.strokeStyle="rgba(0,0,0,0.2)";
d(f.datapoints,j,null,g/2,Math.PI,f.xaxis,f.yaxis)
}ae.lineWidth=e;
ae.strokeStyle=f.color;
d(f.datapoints,j,aj(f.points,f.color),0,2*Math.PI,f.xaxis,f.yaxis);
ae.restore()
}function ak(l,m,x,q,h,t,v,n,o,d,g){var u,e,p,j,s,w,k,r,f;
if(g){r=w=k=true;
s=false;
u=x;
e=l;
j=m+q;
p=m+h;
if(e<u){f=e;
e=u;
u=f;
s=true;
w=false
}}else{s=w=k=true;
r=false;
u=l+q;
e=l+h;
p=x;
j=m;
if(j<p){f=j;
j=p;
p=f;
r=true;
k=false
}}if(e<n.min||u>n.max||j<o.min||p>o.max){return
}if(u<n.min){u=n.min;
s=false
}if(e>n.max){e=n.max;
w=false
}if(p<o.min){p=o.min;
r=false
}if(j>o.max){j=o.max;
k=false
}u=n.p2c(u);
p=o.p2c(p);
e=n.p2c(e);
j=o.p2c(j);
if(v){d.beginPath();
d.moveTo(u,p);
d.lineTo(u,j);
d.lineTo(e,j);
d.lineTo(e,p);
d.fillStyle=v(p,j);
d.fill()
}if(s||w||k||r){d.beginPath();
d.moveTo(u,p+t);
if(s){d.lineTo(u,j+t)
}else{d.moveTo(u,j+t)
}if(k){d.lineTo(e,j+t)
}else{d.moveTo(e,j+t)
}if(w){d.lineTo(e,p+t)
}else{d.moveTo(e,p+t)
}if(r){d.lineTo(u,p+t)
}else{d.moveTo(u,p+t)
}d.stroke()
}}function aR(e){function f(n,o,l,q,m,j,k){var h=n.points,r=n.pointsize;
for(var p=0;
p<h.length;
p+=r){if(h[p]==null){continue
}ak(h[p],h[p+1],h[p+2],o,l,q,m,j,k,ae,e.bars.horizontal)
}}ae.save();
ae.translate(aZ.left,aZ.top);
ae.lineWidth=e.bars.lineWidth;
ae.strokeStyle=e.color;
var g=e.bars.align=="left"?0:-e.bars.barWidth/2;
var d=e.bars.fill?function(j,h){return aj(e.bars,e.color,j,h)
}:null;
f(e.datapoints,g,g+e.bars.barWidth,0,d,e.xaxis,e.yaxis);
ae.restore()
}function aj(g,j,h,e){var f=g.fill;
if(!f){return null
}if(g.fillColor){return ap(g.fillColor,h,e,j)
}var d=b.color.parse(j);
d.a=typeof f=="number"?f:0.4;
d.normalize();
return d.toString()
}function B(){aT.find(".legend").remove();
if(!aX.legend.show){return
}var n=[],p=false,g=aX.legend.labelFormatter,h,l;
for(i=0;
i<at.length;
++i){h=at[i];
l=h.label;
if(!l){continue
}if(i%aX.legend.noColumns==0){if(p){n.push("</tr>")
}n.push("<tr>");
p=true
}if(g){l=g(l,h)
}n.push('<td class="legendColorBox"><div style="border:1px solid '+aX.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+h.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+l+"</td>")
}if(p){n.push("</tr>")
}if(n.length==0){return
}var j='<table style="font-size:smaller;color:'+aX.grid.color+'">'+n.join("")+"</table>";
if(aX.legend.container!=null){b(aX.legend.container).html(j)
}else{var m="",e=aX.legend.position,d=aX.legend.margin;
if(d[0]==null){d=[d,d]
}if(e.charAt(0)=="n"){m+="top:"+(d[1]+aZ.top)+"px;"
}else{if(e.charAt(0)=="s"){m+="bottom:"+(d[1]+aZ.bottom)+"px;"
}}if(e.charAt(1)=="e"){m+="right:"+(d[0]+aZ.right)+"px;"
}else{if(e.charAt(1)=="w"){m+="left:"+(d[0]+aZ.left)+"px;"
}}var k=b('<div class="legend">'+j.replace('style="','style="position:absolute;'+m+";")+"</div>").appendTo(aT);
if(aX.legend.backgroundOpacity!=0){var o=aX.legend.backgroundColor;
if(o==null){o=aX.grid.backgroundColor;
if(o&&typeof o=="string"){o=b.color.parse(o)
}else{o=b.color.extract(k,"background-color")
}o.a=1;
o=o.toString()
}var f=k.children();
b('<div style="position:absolute;width:'+f.width()+"px;height:"+f.height()+"px;"+m+"background-color:"+o+';"> </div>').prependTo(k).css("opacity",aX.legend.backgroundOpacity)
}}}var aI=[],ay=null;
function ab(p,r,u){var j=aX.grid.mouseActiveRadius,x=j*j+1,z=null,f=false,E,G;
for(E=0;
E<at.length;
++E){if(!u(at[E])){continue
}var h=at[E],q=h.xaxis,s=h.yaxis,F=h.datapoints.points,d=h.datapoints.pointsize,g=q.c2p(p),k=s.c2p(r),v=j/q.scale,w=j/s.scale;
if(h.lines.show||h.points.show){for(G=0;
G<F.length;
G+=d){var n=F[G],o=F[G+1];
if(n==null){continue
}if(n-g>v||n-g<-v||o-k>w||o-k<-w){continue
}var l=Math.abs(q.p2c(n)-p),m=Math.abs(s.p2c(o)-r),e=l*l+m*m;
if(e<=x){x=e;
z=[E,G/d]
}}}if(h.bars.show&&!z){var t=h.bars.align=="left"?0:-h.bars.barWidth/2,D=t+h.bars.barWidth;
for(G=0;
G<F.length;
G+=d){var n=F[G],o=F[G+1],y=F[G+2];
if(n==null){continue
}if(at[E].bars.horizontal?(g<=Math.max(y,n)&&g>=Math.min(y,n)&&k>=o+t&&k<=o+D):(g>=n+t&&g<=n+D&&k>=Math.min(y,o)&&k<=Math.max(y,o))){z=[E,G/d]
}}}}if(z){E=z[0];
G=z[1];
d=at[E].datapoints.pointsize;
return{datapoint:at[E].datapoints.points.slice(G*d,(G+1)*d),dataIndex:G,series:at[E],seriesIndex:E}
}return null
}function aE(d){if(aX.grid.hoverable){aA("plothover",d,function(e){return e.hoverable!=false
})
}}function a0(d){aA("plotclick",d,function(e){return e.clickable!=false
})
}function aA(e,f,d){var n=af.offset(),h={pageX:f.pageX,pageY:f.pageY},k=f.pageX-n.left-aZ.left,m=f.pageY-n.top-aZ.top;
if(aM.xaxis.used){h.x=aM.xaxis.c2p(k)
}if(aM.yaxis.used){h.y=aM.yaxis.c2p(m)
}if(aM.x2axis.used){h.x2=aM.x2axis.c2p(k)
}if(aM.y2axis.used){h.y2=aM.y2axis.c2p(m)
}var g=ab(k,m,d);
if(g){g.pageX=parseInt(g.series.xaxis.p2c(g.datapoint[0])+n.left+aZ.left);
g.pageY=parseInt(g.series.yaxis.p2c(g.datapoint[1])+n.top+aZ.top)
}if(aX.grid.autoHighlight){for(var l=0;
l<aI.length;
++l){var j=aI[l];
if(j.auto==e&&!(g&&j.series==g.series&&j.point==g.datapoint)){aH(j.series,j.point)
}}if(g){ad(g.series,g.datapoint,e)
}}aT.trigger(e,[h,g])
}function aO(){if(!ay){ay=setTimeout(aJ,30)
}}function aJ(){ay=null;
A.save();
A.clearRect(0,0,aG,aq);
A.translate(aZ.left,aZ.top);
var d,e;
for(d=0;
d<aI.length;
++d){e=aI[d];
if(e.series.bars.show){aF(e.series,e.point)
}else{aK(e.series,e.point)
}}A.restore();
ac(aw.drawOverlay,[A])
}function ad(e,g,d){if(typeof e=="number"){e=at[e]
}if(typeof g=="number"){g=e.data[g]
}var f=aV(e,g);
if(f==-1){aI.push({series:e,point:g,auto:d});
aO()
}else{if(!d){aI[f].auto=false
}}}function aH(d,f){if(d==null&&f==null){aI=[];
aO()
}if(typeof d=="number"){d=at[d]
}if(typeof f=="number"){f=d.data[f]
}var e=aV(d,f);
if(e!=-1){aI.splice(e,1);
aO()
}}function aV(e,d){for(var g=0;
g<aI.length;
++g){var f=aI[g];
if(f.series==e&&f.point[0]==d[0]&&f.point[1]==d[1]){return g
}}return -1
}function aK(h,j){var k=j[0],d=j[1],e=h.xaxis,f=h.yaxis;
if(k<e.min||k>e.max||d<f.min||d>f.max){return
}var g=h.points.radius+h.points.lineWidth/2;
A.lineWidth=g;
A.strokeStyle=b.color.parse(h.color).scale("a",0.5).toString();
var l=1.5*g;
A.beginPath();
A.arc(e.p2c(k),f.p2c(d),l,0,2*Math.PI,false);
A.stroke()
}function aF(d,g){A.lineWidth=d.bars.lineWidth;
A.strokeStyle=b.color.parse(d.color).scale("a",0.5).toString();
var e=b.color.parse(d.color).scale("a",0.5).toString();
var f=d.bars.align=="left"?0:-d.bars.barWidth/2;
ak(g[0],g[1],g[2]||0,f,f+d.bars.barWidth,0,function(){return e
},d.xaxis,d.yaxis,A,d.bars.horizontal)
}function ap(j,k,e,g){if(typeof j=="string"){return j
}else{var f=ae.createLinearGradient(0,e,0,k);
for(var h=0,l=j.colors.length;
h<l;
++h){var d=j.colors[h];
if(typeof d!="string"){d=b.color.parse(g).scale("rgb",d.brightness);
d.a*=d.opacity;
d=d.toString()
}f.addColorStop(h/(l-1),d)
}return f
}}}b.plot=function(d,f,g){var e=new c(b(d),f,g,b.plot.plugins);
return e
};
b.plot.plugins=[];
b.plot.formatDate=function(k,n,l){var f=function(o){o=""+o;
return o.length==1?"0"+o:o
};
var d=[];
var e=false;
var g=k.getUTCHours();
var j=g<12;
if(l==null){l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
}if(n.search(/%p|%P/)!=-1){if(g>12){g=g-12
}else{if(g==0){g=12
}}}for(var m=0;
m<n.length;
++m){var h=n.charAt(m);
if(e){switch(h){case"h":h=""+g;
break;
case"H":h=f(g);
break;
case"M":h=f(k.getUTCMinutes());
break;
case"S":h=f(k.getUTCSeconds());
break;
case"d":h=""+k.getUTCDate();
break;
case"m":h=""+(k.getUTCMonth()+1);
break;
case"y":h=""+k.getUTCFullYear();
break;
case"b":h=""+l[k.getUTCMonth()];
break;
case"p":h=(j)?("am"):("pm");
break;
case"P":h=(j)?("AM"):("PM");
break
}d.push(h);
e=false
}else{if(h=="%"){e=true
}else{d.push(h)
}}}return d.join("")
};
function a(d,e){return e*Math.floor(d/e)
}})(jQuery);
(function(c){var b=c.browser.msie&&parseInt(c.browser.version)==6&&typeof window.XMLHttpRequest!="object",d=null,a=[];
c.modal=function(f,e){return c.modal.impl.init(f,e)
};
c.modal.close=function(){c.modal.impl.close()
};
c.fn.modal=function(e){return c.modal.impl.init(this,e)
};
c.modal.defaults={appendTo:"body",focus:true,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:false,autoPosition:true,zIndex:1000,close:true,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:true,overlayClose:false,position:null,persist:false,modal:true,onOpen:null,onShow:null,onClose:null};
c.modal.impl={o:null,d:{},init:function(g,e){var f=this;
if(f.d.data){return false
}d=c.browser.msie&&!c.boxModel;
f.o=c.extend({},c.modal.defaults,e);
f.zIndex=f.o.zIndex;
f.occb=false;
if(typeof g=="object"){g=g instanceof jQuery?g:c(g);
f.d.placeholder=false;
if(g.parent().parent().size()>0){g.before(c("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"}));
f.d.placeholder=true;
f.display=g.css("display");
if(!f.o.persist){f.d.orig=g.clone(true)
}}}else{if(typeof g=="string"||typeof g=="number"){g=c("<div></div>").html(g)
}else{alert("SimpleModal Error: Unsupported data type: "+typeof g);
return f
}}f.create(g);
g=null;
f.open();
if(c.isFunction(f.o.onShow)){f.o.onShow.apply(f,[f.d])
}return f
},create:function(f){var e=this;
a=e.getDimensions();
if(e.o.modal&&b){e.d.iframe=c('<iframe src="javascript:false;"></iframe>').css(c.extend(e.o.iframeCss,{display:"none",opacity:0,position:"fixed",height:a[0],width:a[1],zIndex:e.o.zIndex,top:0,left:0})).appendTo(e.o.appendTo)
}e.d.overlay=c("<div></div>").attr("id",e.o.overlayId).addClass("simplemodal-overlay").css(c.extend(e.o.overlayCss,{display:"none",opacity:e.o.opacity/100,height:e.o.modal?a[0]:0,width:e.o.modal?a[1]:0,position:"fixed",left:0,top:0,zIndex:e.o.zIndex+1})).appendTo(e.o.appendTo);
e.d.container=c("<div></div>").attr("id",e.o.containerId).addClass("simplemodal-container").css(c.extend(e.o.containerCss,{display:"none",position:"fixed",zIndex:e.o.zIndex+2})).append(e.o.close&&e.o.closeHTML?c(e.o.closeHTML).addClass(e.o.closeClass):"").appendTo(e.o.appendTo);
e.d.wrap=c("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(e.d.container);
e.d.data=f.attr("id",f.attr("id")||e.o.dataId).addClass("simplemodal-data").css(c.extend(e.o.dataCss,{display:"none"})).appendTo("body");
f=null;
e.setContainerDimensions();
e.d.data.appendTo(e.d.wrap);
if(b||d){e.fixIE()
}},bindEvents:function(){var e=this;
c("."+e.o.closeClass).bind("click.simplemodal",function(f){f.preventDefault();
e.close()
});
if(e.o.modal&&e.o.close&&e.o.overlayClose){e.d.overlay.bind("click.simplemodal",function(f){f.preventDefault();
e.close()
})
}c(document).bind("keydown.simplemodal",function(f){if(e.o.modal&&e.o.focus&&f.keyCode==9){e.watchTab(f)
}else{if((e.o.close&&e.o.escClose)&&f.keyCode==27){f.preventDefault();
e.close()
}}});
c(window).bind("resize.simplemodal",function(){a=e.getDimensions();
e.setContainerDimensions(true);
if(b||d){e.fixIE()
}else{if(e.o.modal){e.d.iframe&&e.d.iframe.css({height:a[0],width:a[1]});
e.d.overlay.css({height:a[0],width:a[1]})
}}})
},unbindEvents:function(){c("."+this.o.closeClass).unbind("click.simplemodal");
c(document).unbind("keydown.simplemodal");
c(window).unbind("resize.simplemodal");
this.d.overlay.unbind("click.simplemodal")
},fixIE:function(){var e=this,f=e.o.position;
c.each([e.d.iframe||null,!e.o.modal?null:e.d.overlay,e.d.container],function(r,k){if(k){var p="document.body.clientHeight",u="document.body.clientWidth",w="document.body.scrollHeight",t="document.body.scrollLeft",n="document.body.scrollTop",j="document.body.scrollWidth",h="document.documentElement.clientHeight",q="document.documentElement.clientWidth",o="document.documentElement.scrollLeft",x="document.documentElement.scrollTop",y=k[0].style;
y.position="absolute";
if(r<2){y.removeExpression("height");
y.removeExpression("width");
y.setExpression("height",""+w+" > "+p+" ? "+w+" : "+p+' + "px"');
y.setExpression("width",""+j+" > "+u+" ? "+j+" : "+u+' + "px"')
}else{var m,g;
if(f&&f.constructor==Array){var v=f[0]?typeof f[0]=="number"?f[0].toString():f[0].replace(/px/,""):k.css("top").replace(/px/,"");
m=v.indexOf("%")==-1?v+" + (t = "+x+" ? "+x+" : "+n+') + "px"':parseInt(v.replace(/%/,""))+" * (("+h+" || "+p+") / 100) + (t = "+x+" ? "+x+" : "+n+') + "px"';
if(f[1]){var l=typeof f[1]=="number"?f[1].toString():f[1].replace(/px/,"");
g=l.indexOf("%")==-1?l+" + (t = "+o+" ? "+o+" : "+t+') + "px"':parseInt(l.replace(/%/,""))+" * (("+q+" || "+u+") / 100) + (t = "+o+" ? "+o+" : "+t+') + "px"'
}}else{m="("+h+" || "+p+") / 2 - (this.offsetHeight / 2) + (t = "+x+" ? "+x+" : "+n+') + "px"';
g="("+q+" || "+u+") / 2 - (this.offsetWidth / 2) + (t = "+o+" ? "+o+" : "+t+') + "px"'
}y.removeExpression("top");
y.removeExpression("left");
y.setExpression("top",m);
y.setExpression("left",g)
}}})
},focus:function(h){var f=this,g=h||"first";
var e=c(":input:enabled:visible:"+g,f.d.wrap);
e.length>0?e.focus():f.d.wrap.focus()
},getDimensions:function(){var f=c(window);
var e=c.browser.opera&&c.browser.version>"9.5"&&c.fn.jquery<="1.2.6"?document.documentElement.clientHeight:c.browser.opera&&c.browser.version<"9.5"&&c.fn.jquery>"1.2.6"?window.innerHeight:f.height();
return[e,f.width()]
},getVal:function(e){return e=="auto"?0:e.indexOf("%")>0?e:parseInt(e.replace(/px/,""))
},setContainerDimensions:function(h){var j=this;
if(!h||(h&&j.o.autoResize)){var i=c.browser.opera?j.d.container.height():j.getVal(j.d.container.css("height")),e=c.browser.opera?j.d.container.width():j.getVal(j.d.container.css("width")),k=j.d.data.outerHeight(true),g=j.d.data.outerWidth(true);
var f=j.o.maxHeight&&j.o.maxHeight<a[0]?j.o.maxHeight:a[0],l=j.o.maxWidth&&j.o.maxWidth<a[1]?j.o.maxWidth:a[1];
if(!i){if(!k){i=j.o.minHeight
}else{if(k>f){i=f
}else{if(k<j.o.minHeight){i=j.o.minHeight
}else{i=k
}}}}else{i=i>f?f:i
}if(!e){if(!g){e=j.o.minWidth
}else{if(g>l){e=l
}else{if(g<j.o.minWidth){e=j.o.minWidth
}else{e=g
}}}}else{e=e>l?l:e
}j.d.container.css({height:i,width:e});
if(k>i||g>e){j.d.wrap.css({overflow:"auto"})
}}if(j.o.autoPosition){j.setPosition()
}},setPosition:function(){var f=this,h,g,i=(a[0]/2)-(f.d.container.outerHeight(true)/2),e=(a[1]/2)-(f.d.container.outerWidth(true)/2);
if(f.o.position&&Object.prototype.toString.call(f.o.position)==="[object Array]"){h=f.o.position[0]||i;
g=f.o.position[1]||e
}else{h=i;
g=e
}f.d.container.css({left:g,top:h})
},watchTab:function(g){var f=this;
if(c(g.target).parents(".simplemodal-container").length>0){f.inputs=c(":input:enabled:visible:first, :input:enabled:visible:last",f.d.data[0]);
if((!g.shiftKey&&g.target==f.inputs[f.inputs.length-1])||(g.shiftKey&&g.target==f.inputs[0])||f.inputs.length==0){g.preventDefault();
var h=g.shiftKey?"last":"first";
setTimeout(function(){f.focus(h)
},10)
}}else{g.preventDefault();
setTimeout(function(){f.focus()
},10)
}},open:function(){var e=this;
e.d.iframe&&e.d.iframe.show();
if(c.isFunction(e.o.onOpen)){e.o.onOpen.apply(e,[e.d])
}else{e.d.overlay.show();
e.d.container.show();
e.d.data.show()
}e.focus();
e.bindEvents()
},close:function(){var e=this;
if(!e.d.data){return false
}e.unbindEvents();
if(c.isFunction(e.o.onClose)&&!e.occb){e.occb=true;
e.o.onClose.apply(e,[e.d])
}else{if(e.d.placeholder){var f=c("#simplemodal-placeholder");
if(e.o.persist){f.replaceWith(e.d.data.removeClass("simplemodal-data").css("display",e.display))
}else{e.d.data.hide().remove();
f.replaceWith(e.d.orig)
}}else{e.d.data.hide().remove()
}e.d.container.hide().remove();
e.d.overlay.hide().remove();
e.d.iframe&&e.d.iframe.hide().remove();
e.d={}
}}}
})(jQuery);
(function(){var s=this;
var q=s._;
var b={};
var i=Array.prototype,A=Object.prototype;
var r=i.slice,v=i.unshift,u=A.toString,n=A.hasOwnProperty;
var l=i.forEach,h=i.map,y=i.reduce,e=i.reduceRight,k=i.filter,a=i.every,x=i.some,t=i.indexOf,f=i.lastIndexOf,c=Array.isArray,z=Object.keys;
var B=function(C){return new g(C)
};
if(typeof module!=="undefined"&&module.exports){module.exports=B;
B._=B
}else{s._=B
}B.VERSION="1.1.3";
var d=B.each=B.forEach=function(I,G,F){var H;
if(l&&I.forEach===l){I.forEach(G,F)
}else{if(B.isNumber(I.length)){for(var E=0,C=I.length;
E<C;
E++){if(G.call(F,I[E],E,I)===b){return
}}}else{for(var D in I){if(n.call(I,D)){if(G.call(F,I[D],D,I)===b){return
}}}}}};
B.map=function(F,E,D){if(h&&F.map===h){return F.map(E,D)
}var C=[];
d(F,function(I,G,H){C[C.length]=E.call(D,I,G,H)
});
return C
};
B.reduce=B.foldl=B.inject=function(G,F,C,E){var D=C!==void 0;
if(y&&G.reduce===y){if(E){F=B.bind(F,E)
}return D?G.reduce(F,C):G.reduce(F)
}d(G,function(J,H,I){if(!D&&H===0){C=J
}else{C=F.call(E,C,J,H,I)
}});
return C
};
B.reduceRight=B.foldr=function(F,E,C,D){if(e&&F.reduceRight===e){if(D){E=B.bind(E,D)
}return C!==void 0?F.reduceRight(E,C):F.reduceRight(E)
}var G=(B.isArray(F)?F.slice():B.toArray(F)).reverse();
return B.reduce(G,E,C,D)
};
B.find=B.detect=function(F,E,D){var C;
o(F,function(I,G,H){if(E.call(D,I,G,H)){C=I;
return true
}});
return C
};
B.filter=B.select=function(F,E,D){if(k&&F.filter===k){return F.filter(E,D)
}var C=[];
d(F,function(I,G,H){if(E.call(D,I,G,H)){C[C.length]=I
}});
return C
};
B.reject=function(F,E,D){var C=[];
d(F,function(I,G,H){if(!E.call(D,I,G,H)){C[C.length]=I
}});
return C
};
B.every=B.all=function(F,E,D){E=E||B.identity;
if(a&&F.every===a){return F.every(E,D)
}var C=true;
d(F,function(I,G,H){if(!(C=C&&E.call(D,I,G,H))){return b
}});
return C
};
var o=B.some=B.any=function(F,E,D){E=E||B.identity;
if(x&&F.some===x){return F.some(E,D)
}var C=false;
d(F,function(I,G,H){if(C=E.call(D,I,G,H)){return b
}});
return C
};
B.include=B.contains=function(E,D){if(t&&E.indexOf===t){return E.indexOf(D)!=-1
}var C=false;
o(E,function(F){if(C=F===D){return true
}});
return C
};
B.invoke=function(D,E){var C=r.call(arguments,2);
return B.map(D,function(F){return(E?F[E]:F).apply(F,C)
})
};
B.pluck=function(D,C){return B.map(D,function(E){return E[C]
})
};
B.max=function(F,E,D){if(!E&&B.isArray(F)){return Math.max.apply(Math,F)
}var C={computed:-Infinity};
d(F,function(J,G,I){var H=E?E.call(D,J,G,I):J;
H>=C.computed&&(C={value:J,computed:H})
});
return C.value
};
B.min=function(F,E,D){if(!E&&B.isArray(F)){return Math.min.apply(Math,F)
}var C={computed:Infinity};
d(F,function(J,G,I){var H=E?E.call(D,J,G,I):J;
H<C.computed&&(C={value:J,computed:H})
});
return C.value
};
B.sortBy=function(E,D,C){return B.pluck(B.map(E,function(H,F,G){return{value:H,criteria:D.call(C,H,F,G)}
}).sort(function(I,H){var G=I.criteria,F=H.criteria;
return G<F?-1:G>F?1:0
}),"value")
};
B.sortedIndex=function(H,G,E){E=E||B.identity;
var C=0,F=H.length;
while(C<F){var D=(C+F)>>1;
E(H[D])<E(G)?C=D+1:F=D
}return C
};
B.toArray=function(C){if(!C){return[]
}if(C.toArray){return C.toArray()
}if(B.isArray(C)){return C
}if(B.isArguments(C)){return r.call(C)
}return B.values(C)
};
B.size=function(C){return B.toArray(C).length
};
B.first=B.head=function(E,D,C){return D&&!C?r.call(E,0,D):E[0]
};
B.rest=B.tail=function(E,C,D){return r.call(E,B.isUndefined(C)||D?1:C)
};
B.last=function(C){return C[C.length-1]
};
B.compact=function(C){return B.filter(C,function(D){return !!D
})
};
B.flatten=function(C){return B.reduce(C,function(D,E){if(B.isArray(E)){return D.concat(B.flatten(E))
}D[D.length]=E;
return D
},[])
};
B.without=function(D){var C=r.call(arguments,1);
return B.filter(D,function(E){return !B.include(C,E)
})
};
B.uniq=B.unique=function(D,C){return B.reduce(D,function(E,G,F){if(0==F||(C===true?B.last(E)!=G:!B.include(E,G))){E[E.length]=G
}return E
},[])
};
B.intersect=function(D){var C=r.call(arguments,1);
return B.filter(B.uniq(D),function(E){return B.every(C,function(F){return B.indexOf(F,E)>=0
})
})
};
B.zip=function(){var C=r.call(arguments);
var F=B.max(B.pluck(C,"length"));
var E=new Array(F);
for(var D=0;
D<F;
D++){E[D]=B.pluck(C,""+D)
}return E
};
B.indexOf=function(F,E){if(t&&F.indexOf===t){return F.indexOf(E)
}for(var D=0,C=F.length;
D<C;
D++){if(F[D]===E){return D
}}return -1
};
B.lastIndexOf=function(E,D){if(f&&E.lastIndexOf===f){return E.lastIndexOf(D)
}var C=E.length;
while(C--){if(E[C]===D){return C
}}return -1
};
B.range=function(J,G,H){var F=r.call(arguments),I=F.length<=1,J=I?0:F[0],G=I?F[0]:F[1],H=F[2]||1,D=Math.max(Math.ceil((G-J)/H),0),C=0,E=new Array(D);
while(C<D){E[C++]=J;
J+=H
}return E
};
B.bind=function(D,E){var C=r.call(arguments,2);
return function(){return D.apply(E||{},C.concat(r.call(arguments)))
}
};
B.bindAll=function(D){var C=r.call(arguments,1);
if(C.length==0){C=B.functions(D)
}d(C,function(E){D[E]=B.bind(D[E],D)
});
return D
};
B.memoize=function(E,D){var C={};
D=D||B.identity;
return function(){var F=D.apply(this,arguments);
return F in C?C[F]:(C[F]=E.apply(this,arguments))
}
};
B.delay=function(D,E){var C=r.call(arguments,2);
return setTimeout(function(){return D.apply(D,C)
},E)
};
B.defer=function(C){return B.delay.apply(B,[C,1].concat(r.call(arguments,1)))
};
var w=function(D,F,C){var E;
return function(){var H=this,G=arguments;
var I=function(){E=null;
D.apply(H,G)
};
if(C){clearTimeout(E)
}if(C||!E){E=setTimeout(I,F)
}}
};
B.throttle=function(C,D){return w(C,D,false)
};
B.debounce=function(C,D){return w(C,D,true)
};
B.wrap=function(C,D){return function(){var E=[C].concat(r.call(arguments));
return D.apply(D,E)
}
};
B.compose=function(){var C=r.call(arguments);
return function(){var D=r.call(arguments);
for(var E=C.length-1;
E>=0;
E--){D=[C[E].apply(this,D)]
}return D[0]
}
};
B.keys=z||function(E){if(B.isArray(E)){return B.range(0,E.length)
}var D=[];
for(var C in E){if(n.call(E,C)){D[D.length]=C
}}return D
};
B.values=function(C){return B.map(C,B.identity)
};
B.functions=B.methods=function(C){return B.filter(B.keys(C),function(D){return B.isFunction(C[D])
}).sort()
};
B.extend=function(C){d(r.call(arguments,1),function(D){for(var E in D){C[E]=D[E]
}});
return C
};
B.clone=function(C){return B.isArray(C)?C.slice():B.extend({},C)
};
B.tap=function(D,C){C(D);
return D
};
B.isEqual=function(D,C){if(D===C){return true
}var G=typeof(D),I=typeof(C);
if(G!=I){return false
}if(D==C){return true
}if((!D&&C)||(D&&!C)){return false
}if(D.isEqual){return D.isEqual(C)
}if(B.isDate(D)&&B.isDate(C)){return D.getTime()===C.getTime()
}if(B.isNaN(D)&&B.isNaN(C)){return false
}if(B.isRegExp(D)&&B.isRegExp(C)){return D.source===C.source&&D.global===C.global&&D.ignoreCase===C.ignoreCase&&D.multiline===C.multiline
}if(G!=="object"){return false
}if(D.length&&(D.length!==C.length)){return false
}var E=B.keys(D),H=B.keys(C);
if(E.length!=H.length){return false
}for(var F in D){if(!(F in C)||!B.isEqual(D[F],C[F])){return false
}}return true
};
B.isEmpty=function(D){if(B.isArray(D)||B.isString(D)){return D.length===0
}for(var C in D){if(n.call(D,C)){return false
}}return true
};
B.isElement=function(C){return !!(C&&C.nodeType==1)
};
B.isArray=c||function(C){return !!(C&&C.concat&&C.unshift&&!C.callee)
};
B.isArguments=function(C){return !!(C&&C.callee)
};
B.isFunction=function(C){return !!(C&&C.constructor&&C.call&&C.apply)
};
B.isString=function(C){return !!(C===""||(C&&C.charCodeAt&&C.substr))
};
B.isNumber=function(C){return !!(C===0||(C&&C.toExponential&&C.toFixed))
};
B.isNaN=function(C){return u.call(C)==="[object Number]"&&isNaN(C)
};
B.isBoolean=function(C){return C===true||C===false
};
B.isDate=function(C){return !!(C&&C.getTimezoneOffset&&C.setUTCFullYear)
};
B.isRegExp=function(C){return !!(C&&C.test&&C.exec&&(C.ignoreCase||C.ignoreCase===false))
};
B.isNull=function(C){return C===null
};
B.isUndefined=function(C){return C===void 0
};
B.noConflict=function(){s._=q;
return this
};
B.identity=function(C){return C
};
B.times=function(F,E,D){for(var C=0;
C<F;
C++){E.call(D,C)
}};
B.mixin=function(C){d(B.functions(C),function(D){p(D,B[D]=C[D])
})
};
var j=0;
B.uniqueId=function(C){var D=j++;
return C?C+D:D
};
B.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g};
B.template=function(F,E){var G=B.templateSettings;
var C="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+F.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(G.interpolate,function(H,I){return"',"+I.replace(/\\'/g,"'")+",'"
}).replace(G.evaluate||null,function(H,I){return"');"+I.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"
}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";
var D=new Function("obj",C);
return E?D(E):D
};
var g=function(C){this._wrapped=C
};
B.prototype=g.prototype;
var m=function(D,C){return C?B(D).chain():D
};
var p=function(C,D){g.prototype[C]=function(){var E=r.call(arguments);
v.call(E,this._wrapped);
return m(D.apply(B,E),this._chain)
}
};
B.mixin(B);
d(["pop","push","reverse","shift","sort","splice","unshift"],function(C){var D=i[C];
g.prototype[C]=function(){D.apply(this._wrapped,arguments);
return m(this._wrapped,this._chain)
}
});
d(["concat","join","slice"],function(C){var D=i[C];
g.prototype[C]=function(){return m(D.apply(this._wrapped,arguments),this._chain)
}
});
g.prototype.chain=function(){this._chain=true;
return this
};
g.prototype.value=function(){return this._wrapped
}
})();
/*
 * Copyright (c) 2002-2010 "Neo Technology,"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var neo4j=neo4j||{};
neo4j.services=neo4j.services||{};
neo4j.cachedFunction=function(f,g,h){var c=null;
var d=null;
var e=h||false;
var i=false;
var a=[];
return function b(){var j=arguments[g];
if(i){j.apply(d,c)
}else{if(a.length==0){arguments[g]=function(){d=this;
c=arguments;
i=true;
for(var k in a){a[k].apply(d,c)
}a=[];
if(e){setTimeout(function(){i=false
},e)
}};
f.apply(this,arguments)
}a.push(j)
}}
};
neo4j.log=function(){if(window.console&&typeof(window.console.log)==="function"){console.log.apply(this,arguments)
}};
neo4j.proxy=function(b,a){return jQuery.proxy(b,a)
};
neo4j.Events=function(a){this.uniqueNamespaceCount=0;
this.handlers={};
this.context=a||{}
};
neo4j.Events.prototype.createUniqueNamespace=function(){return"uniq#"+(this.uniqueNamespaceCount++)
};
neo4j.Events.prototype.bind=function(a,b){if(typeof(this.handlers[a])==="undefined"){this.handlers[a]=[]
}this.handlers[a].push(b)
};
neo4j.Events.prototype.trigger=function(b,d){if(typeof(this.handlers[b])!=="undefined"){var d=d||{};
var e=this.handlers[b];
var c=$.extend({key:b,data:d},this.context);
for(var a=0,f=e.length;
a<f;
a++){setTimeout((function(g){return function(){try{g(c)
}catch(h){neo4j.log("Event handler for event "+b+" threw exception.",h)
}}
})(e[a]),0)
}}};
neo4j.events=new neo4j.Events();
neo4j.jqueryWebProvider={ajax:function(g,c,e,f,b,d){if(typeof(e)==="function"){b=f;
f=e;
e=null
}var d=d||5000,a=function(i){try{if(i.status===200){return f(null)
}}catch(j){}if(typeof(b)==="function"){try{if(i.status===0){b({connectionLost:true},i)
}else{var h=JSON.parse(i.responseText);
b(h,i)
}}catch(j){b({},i)
}}else{neo4j.log(i)
}};
setTimeout((function(l,i,j,k,h){if(j===null||j==="null"){j=""
}else{j=JSON.stringify(j)
}return function(){if(neo4j.Web.isCrossDomain(i)&&window.XDomainRequest){if(typeof(h)==="function"){h("Cross-domain requests are available in IE, but are not yet implemented in neo4js.")
}}else{var n=false,m=$.ajax({url:i,type:l,data:j,timeout:d,cache:false,processData:false,success:function(p,o,q){if(q.status===0){a(q)
}else{k.apply(this,arguments)
}},contentType:"application/json",error:a,dataType:"json"})
}}
})(g,c,e,f,b),0)
}};
neo4j.Web=function(){var a=neo4j.jqueryWebProvider;
return{get:function(c,d,e,b){return neo4j.Web.ajax("GET",c,d,e,b)
},post:function(c,d,e,b){return neo4j.Web.ajax("POST",c,d,e,b)
},put:function(c,d,e,b){return neo4j.Web.ajax("PUT",c,d,e,b)
},del:function(c,d,e,b){return neo4j.Web.ajax("DELETE",c,d,e,b)
},ajax:function(f,c,d,e,b){if(typeof(d)==="function"&&e){e=neo4j.Web.wrapFailureCallback(e)
}else{if(typeof(b)==="function"){b=neo4j.Web.wrapFailureCallback(b)
}}return a.ajax(f,c,d,e,b)
},isCrossDomain:function(c){if(c){var b=c.indexOf("://");
if(b===-1||b>7){return false
}else{return c.substring(b+3).split("/",1)[0]!==window.location.host
}}else{return false
}},setWebProvider:function(b){a=b
},replace:function(b,c){for(var d in c){b=b.replace("{"+d+"}",c[d])
}return b
},wrapFailureCallback:function(b){return function(c,d){if(c&&c.connectionLost){neo4j.events.trigger("web.connection.failed",[d]);
b.apply(this,arguments)
}else{if(typeof(b)==="function"){b.apply(this,arguments)
}}}
}}
}();
neo4j.Service=function(){};
neo4j.Service.resourceFactory=function(d){var f=d.urlArgs||[];
var c=f.length;
var g=d.after?d.after:function(h,i){i(h)
};
var e=d.before?d.before:function(i,h){i.apply(this,h)
};
var b=d.errorHandler?d.errorHandler:function(i,h){i({message:"An error occurred, please see attached error object.",error:h})
};
var a=function(){g=neo4j.proxy(g,this);
b=neo4j.proxy(b,this);
if(c>0){var k={};
for(var j=0;
j<c;
j++){k[f[j]]=arguments[j]
}var h=neo4j.Web.replace(this.resources[d.resource],k)
}else{var h=this.resources[d.resource]
}var l=null;
var m=function(){};
if(arguments.length>c){if(typeof(arguments[arguments.length-1])==="function"){m=arguments[arguments.length-1]
}if((arguments.length-1)>c){l=arguments[arguments.length-2]
}}if(l!==null){neo4j.Web.ajax(d.method,h,l,function(i){g(i,m)
},function(i){b(m,i)
})
}else{neo4j.Web.ajax(d.method,h,function(i){g(i,m)
},function(i){b(m,i)
})
}};
return function(){this.serviceMethodPreflight(function(){e.call(this,neo4j.proxy(a,this),arguments)
},arguments)
}
};
neo4j.Service.prototype.initialized=false;
neo4j.Service.prototype.available=null;
neo4j.Service.prototype.resources=null;
neo4j.Service.prototype.__init__=function(a){this.callsWaiting=[];
this.loadServiceDefinition=neo4j.cachedFunction(this.loadServiceDefinition,0);
this.events=new neo4j.Events();
this.bind=neo4j.proxy(this.events.bind,this.events);
this.trigger=neo4j.proxy(this.events.trigger,this.events);
this.db=a;
this.db.bind("services.loaded",neo4j.proxy(function(){if(!this.initialized){this.setNotAvailable()
}},this))
};
neo4j.Service.prototype.handleWaitingCalls=function(){for(var b=0,a=this.callsWaiting.length;
b<a;
b++){try{this.serviceMethodPreflight(this.callsWaiting[b].method,this.callsWaiting[b].args)
}catch(c){neo4j.log(c)
}}};
neo4j.Service.prototype.loadServiceDefinition=function(a){this.get("/",neo4j.proxy(function(b){this.resources=b.resources;
this.trigger("service.definition.loaded",b);
a(b)
},this))
};
neo4j.Service.prototype.makeAvailable=function(a){this.initialized=true;
this.available=true;
this.url=a;
this.handleWaitingCalls()
};
neo4j.Service.prototype.setNotAvailable=function(){this.initialized=true;
this.available=false;
this.handleWaitingCalls()
};
neo4j.Service.prototype.get=function(c,b,d,a){neo4j.Web.get(this.url+c,b,d,a)
};
neo4j.Service.prototype.del=function(c,b,d,a){neo4j.Web.del(this.url+c,b,d,a)
};
neo4j.Service.prototype.post=function(c,b,d,a){neo4j.Web.post(this.url+c,b,d,a)
};
neo4j.Service.prototype.put=function(c,b,d,a){neo4j.Web.put(this.url+c,b,d,a)
};
neo4j.Service.prototype.serviceMethodPreflight=function(b,a){if(this.available===false){throw new Error("The service you are accessing is not available for this server.")
}else{if(!this.initialized){this.callsWaiting.push({method:b,args:a});
return
}}a=a||[];
if(this.resources!==null){b.apply(this,a)
}else{this.loadServiceDefinition(neo4j.proxy(function(){b.apply(this,a)
},this))
}};
neo4j.GraphDatabaseHeartbeat=function(a){this.db=a;
this.monitor=a.manage.monitor;
this.listeners={};
this.idCounter=0;
this.listenerCounter=0;
this.timespan={year:1000*60*60*24*365,month:1000*60*60*24*31,week:1000*60*60*24*7,day:1000*60*60*24,hours:1000*60*60*6,minutes:1000*60*35};
this.startTimestamp=(new Date()).getTime()-this.timespan.year;
this.endTimestamp=this.startTimestamp+1;
this.timestamps=[];
this.data={};
this.isPolling=false;
this.processMonitorData=neo4j.proxy(this.processMonitorData,this);
this.beat=neo4j.proxy(this.beat,this);
this.waitForPulse=neo4j.proxy(this.waitForPulse,this);
setInterval(this.beat,2000)
};
neo4j.GraphDatabaseHeartbeat.prototype.addListener=function(a){this.listenerCounter++;
this.listeners[this.idCounter++]=a;
return this.idCounter
};
neo4j.GraphDatabaseHeartbeat.prototype.removeListener=function(b){var c=false;
if(typeof(b)==="function"){for(var a in this.listeners){if(this.listeners[a]===b){delete this.listeners[a];
c;
break
}}}else{if(this.listeners[b]){delete this.listeners[b];
c=true
}}if(c){this.listenerCounter--
}};
neo4j.GraphDatabaseHeartbeat.prototype.getCachedData=function(){return{timestamps:this.timestamps,data:this.data,endTimestamp:this.endTimestamp,startTimestamp:this.startTimestamp}
};
neo4j.GraphDatabaseHeartbeat.prototype.beat=function(){if(this.listenerCounter>0&&!this.isPolling&&this.monitor.available){this.isPolling=true;
this.monitor.getDataFrom(this.endTimestamp,this.processMonitorData)
}};
neo4j.GraphDatabaseHeartbeat.prototype.processMonitorData=function(d){this.isPolling=false;
if(d&&!d.error){var a=this.findDataBoundaries(d);
if(a.dataEnd>=0){this.endTimestamp=d.timestamps[a.dataEnd];
var e=d.timestamps.splice(a.dataStart,a.dataEnd-a.dataStart);
this.timestamps=this.timestamps.concat(e);
var c={};
for(var b in d.data){c[b]=d.data[b].splice(a.dataStart,a.dataEnd-a.dataStart);
if(typeof(this.data[b])==="undefined"){this.data[b]=[]
}this.data[b]=this.data[b].concat(c[b])
}var f={server:this.server,newData:{data:c,timestamps:e,end_time:this.endTimestamp,start_time:d.start_time},allData:this.getCachedData()};
this.callListeners(f)
}else{this.adjustRequestedTimespan()
}}};
neo4j.GraphDatabaseHeartbeat.prototype.waitForPulse=function(b){var a=this.waitForPulse;
this.db.get("",function(c){if(c===null){setTimeout(function(){a(b)
},4000)
}else{b(true)
}},function(c){setTimeout(function(){a(b)
},4000)
})
};
neo4j.GraphDatabaseHeartbeat.prototype.adjustRequestedTimespan=function(a){var b=(new Date()).getTime()-this.endTimestamp;
if(b>=this.timespan.year){this.endTimestamp=(new Date()).getTime()-this.timespan.month;
this.beat()
}else{if(b>=this.timespan.month){this.endTimestamp=(new Date()).getTime()-this.timespan.week;
this.beat()
}else{if(b>=this.timespan.week){this.endTimestamp=(new Date()).getTime()-this.timespan.day;
this.beat()
}else{if(b>=this.timespan.day){this.endTimestamp=(new Date()).getTime()-this.timespan.hours;
this.beat()
}else{if(b>=this.timespan.day){this.endTimestamp=(new Date()).getTime()-this.timespan.minutes;
this.beat()
}}}}}};
neo4j.GraphDatabaseHeartbeat.prototype.findDataBoundaries=function(d){var c=this.getFirstKey(d);
var a=-1,b=-1;
if(c){for(a=d.timestamps.length-1;
a>=0;
a--){if(typeof(d.data[c][a])==="number"){break
}}for(b=0;
b<=a;
b++){if(typeof(d.data[c][b])==="number"){break
}}}return{dataStart:b,dataEnd:a}
};
neo4j.GraphDatabaseHeartbeat.prototype.callListeners=function(b){for(var a in this.listeners){setTimeout(function(c){return function(){c(b)
}
}(this.listeners[a]),0)
}};
neo4j.GraphDatabaseHeartbeat.prototype.getFirstKey=function(a){if(typeof(a)==="object"){for(var b in a.data){break
}}return b?b:null
};
neo4j.models=neo4j.models||{};
neo4j.models.JMXBean=function(a){this.parse(a)
};
neo4j.models.JMXBean.prototype.parse=function(a){var b=this.parseName(a.name);
this.domain=b.domain;
delete (b.domain);
this.properties=b;
this.attributes=a.attributes;
this.description=a.description;
this.jmxName=a.name
};
neo4j.models.JMXBean.prototype.getName=function(a){if(this.properties.name){return this.properties.name
}else{for(var b in this.properties){return this.properties[b]
}}return this.domain
};
neo4j.models.JMXBean.prototype.parseName=function(d){var g=d.split(":"),c,f,b={};
f=g[0];
g=g[1].split(",");
for(var e=0,a=g.length;
e<a;
e++){c=g[e].split("=");
b[c[0]]=c[1]
}b.domain=f;
return b
};
neo4j.models.JMXBean.prototype.getAttribute=function(b){var d=b.toLowerCase();
for(var c=0,a=this.attributes.length;
c<a;
c++){if(this.attributes[c].name.toLowerCase()===d){return this.attributes[c]
}}return null
};
neo4j.services.BackupService=function(a){this.__init__(a)
};
neo4j.services.BackupService.prototype=new neo4j.Service();
neo4j.services.BackupService.prototype.triggerManual=neo4j.Service.resourceFactory({resource:"trigger_manual",method:"POST",errorHandler:function(b,a){if(a.exception=="NoBackupFoundationException"){b(false)
}}});
neo4j.services.BackupService.prototype.triggerManualFoundation=neo4j.Service.resourceFactory({resource:"trigger_manual_foundation",method:"POST"});
neo4j.services.BackupService.prototype.getJobs=neo4j.Service.resourceFactory({resource:"jobs",method:"GET"});
neo4j.services.BackupService.prototype.getJob=function(b,a){this.getJobs(function(c){for(var d in c.jobList){if(c.jobList[d].id==b){a(c.jobList[d]);
return
}}a(null)
})
};
neo4j.services.BackupService.prototype.deleteJob=neo4j.Service.resourceFactory({resource:"job",method:"DELETE",urlArgs:["id"]});
neo4j.services.BackupService.prototype.triggerJobFoundation=neo4j.Service.resourceFactory({resource:"trigger_job_foundation",method:"POST",urlArgs:["id"]});
neo4j.services.BackupService.prototype.setJob=neo4j.Service.resourceFactory({resource:"jobs",method:"PUT"});
neo4j.services.ConfigService=function(a){this.__init__(a)
};
neo4j.services.ConfigService.prototype=new neo4j.Service();
neo4j.services.ConfigService.prototype.getProperties=neo4j.Service.resourceFactory({resource:"properties",method:"GET",before:function(c,a){var b=a[0];
c(function(f){var e={};
for(var d in f){e[f[d].key]=f[d]
}b(e)
})
}});
neo4j.services.ConfigService.prototype.getProperty=function(a,b){this.getProperties(function(c){for(var d in c){if(d===a){b(c[d]);
return
}}b(null)
})
};
neo4j.services.ConfigService.prototype.setProperties=neo4j.Service.resourceFactory({resource:"properties",method:"POST",before:function(e,a){var c=[];
var d;
for(var b in a[0]){d={key:b,value:a[0][b]};
c.push(d);
this.db.trigger("config.property.set",d)
}e(c,a[1])
}});
neo4j.services.ConfigService.prototype.setProperty=function(a,c,d){var b={};
b[a]=c;
this.setProperties(b,d)
};
neo4j.services.ImportService=function(a){this.__init__(a)
};
neo4j.services.ImportService.prototype=new neo4j.Service();
neo4j.services.ImportService.prototype.fromUrl=neo4j.Service.resourceFactory({resource:"import_from_url",method:"POST",before:function(b,a){b({url:a[0]},a[1])
}});
neo4j.services.ImportService.prototype.getUploadUrl=function(a){this.serviceMethodPreflight(function(b){b(this.resources.import_from_file)
},arguments)
};
neo4j.services.ExportService=function(a){this.__init__(a)
};
neo4j.services.ExportService.prototype=new neo4j.Service();
neo4j.services.ExportService.prototype.all=neo4j.Service.resourceFactory({resource:"export_all",method:"POST"});
neo4j.services.ConsoleService=function(a){this.__init__(a)
};
neo4j.services.ConsoleService.prototype=new neo4j.Service();
neo4j.services.ConsoleService.prototype.exec=neo4j.Service.resourceFactory({resource:"exec",method:"POST",before:function(b,a){b({command:a[0],engine:a[1]},a[2])
}});
neo4j.services.JmxService=function(a){this.__init__(a);
this.kernelInstance=neo4j.cachedFunction(this.kernelInstance,0,2000)
};
neo4j.services.JmxService.prototype=new neo4j.Service();
neo4j.services.JmxService.prototype.getDomains=neo4j.Service.resourceFactory({resource:"domains",method:"GET"});
neo4j.services.JmxService.prototype.getDomain=neo4j.Service.resourceFactory({resource:"domain",method:"GET",urlArgs:["domain"],after:function(d,e){var c=[];
for(var b=0,a=d.beans;
b<a;
b++){c.push(new neo4j.models.JMXBean(d.beans[b]))
}d.beans=c;
e(d)
}});
neo4j.services.JmxService.prototype.getBean=neo4j.Service.resourceFactory({resource:"bean",method:"GET",urlArgs:["domain","objectName"],before:function(c,a){if(a[0]==="neo4j"){var b=this;
this.kernelInstance(function(d){a[0]="org.neo4j";
a[1]=escape(d+",name="+a[1]);
c.apply(this,a)
})
}else{a[0]=escape(a[0]);
a[1]=escape(a[1]);
c.apply(this,a)
}},after:function(a,b){if(a.length>0){b(new neo4j.models.JMXBean(a[0]))
}else{b(null)
}}});
neo4j.services.JmxService.prototype.query=neo4j.Service.resourceFactory({resource:"query",method:"POST",after:function(d,e){var c=[];
for(var b=0,a=d.length;
b<a;
b++){c.push(new neo4j.models.JMXBean(d[b]))
}e(c)
}});
neo4j.services.JmxService.prototype.kernelInstance=function(a){this.serviceMethodPreflight(function(c){var b=this.resources.kernelquery;
neo4j.Web.get(b,function(e){var d=e?e.split(":")[1].split(",")[0]:null;
c(d)
})
},[a])
};
neo4j.services.LifecycleService=function(a){this.__init__(a)
};
neo4j.services.LifecycleService.prototype=new neo4j.Service();
neo4j.services.LifecycleService.prototype.getStatus=neo4j.Service.resourceFactory({resource:"status",method:"GET"});
neo4j.services.LifecycleService.prototype.start=neo4j.Service.resourceFactory({resource:"start",method:"POST"});
neo4j.services.LifecycleService.prototype.stop=neo4j.Service.resourceFactory({resource:"stop",method:"POST"});
neo4j.services.LifecycleService.prototype.restart=neo4j.Service.resourceFactory({resource:"restart",method:"POST"});
neo4j.services.MonitorService=function(a){this.__init__(a)
};
neo4j.services.MonitorService.prototype=new neo4j.Service();
neo4j.services.MonitorService.prototype.getData=neo4j.Service.resourceFactory({resource:"latest_data",method:"GET"});
neo4j.services.MonitorService.prototype.getDataFrom=neo4j.Service.resourceFactory({resource:"data_from",method:"GET",urlArgs:["start"]});
neo4j.services.MonitorService.prototype.getDataBetween=neo4j.Service.resourceFactory({resource:"data_period",method:"GET",urlArgs:["start","stop"]});
neo4j.GraphDatabaseManager=function(a){this.db=a;
this.url=a.manageUrl;
this.backup=new neo4j.services.BackupService(a);
this.config=new neo4j.services.ConfigService(a);
this.importing=new neo4j.services.ImportService(a);
this.exporting=new neo4j.services.ExportService(a);
this.console=new neo4j.services.ConsoleService(a);
this.jmx=new neo4j.services.JmxService(a);
this.lifecycle=new neo4j.services.LifecycleService(a);
this.monitor=new neo4j.services.MonitorService(a);
this.discoverServices()
};
neo4j.GraphDatabaseManager.prototype.servicesLoaded=function(){return(this.services)?true:false
};
neo4j.GraphDatabaseManager.prototype.availableServices=function(){if(this.services){if(!this.serviceNames){this.serviceNames=[];
for(var a in this.services){this.serviceNames.push(a)
}}return this.serviceNames
}else{throw new Error("Service definition has not been loaded yet.")
}};
neo4j.GraphDatabaseManager.prototype.discoverServices=function(){neo4j.Web.get(this.url,neo4j.proxy(function(b){this.services=b.services;
for(var a in b.services){if(this[a]){this[a].makeAvailable(b.services[a])
}}this.db.trigger("services.loaded")
},this),neo4j.proxy(function(a){throw new Error("Unable to fetch service descriptions for server "+this.url)
},this))
};
neo4j.GraphDatabase=function(b,a){this.url=b;
this.manageUrl=a||null;
this.events=new neo4j.Events({db:this});
this.bind=neo4j.proxy(this.events.bind,this.events);
this.trigger=neo4j.proxy(this.events.trigger,this.events);
this.manage=new neo4j.GraphDatabaseManager(this);
this.heartbeat=new neo4j.GraphDatabaseHeartbeat(this)
};
neo4j.GraphDatabase.prototype.get=function(c,b,d,a){neo4j.Web.get(this.url+c,b,d,a)
};
neo4j.GraphDatabase.prototype.del=function(c,b,d,a){neo4j.Web.del(this.url+c,b,d,a)
};
neo4j.GraphDatabase.prototype.post=function(c,b,d,a){neo4j.Web.post(this.url+c,b,d,a)
};
neo4j.GraphDatabase.prototype.put=function(c,b,d,a){neo4j.Web.put(this.url+c,b,d,a)
};
neo4j.GraphDatabase.prototype.stripUrlBase=function(a){if(typeof(a)==="undefined"||a.indexOf("://")==-1){return a
}if(a.indexOf(this.url)===0){return a.substring(this.url.length)
}else{if(a.indexOf(this.manageUrl)===0){return a.substring(this.manageUrl.length)
}else{return a.substring(a.indexOf("/",8))
}}};
neo4j.GraphDatabase.prototype.toJSONString=function(){return{url:this.url,manageUrl:this.manageUrl}
};

var wa=wa||{};
wa.htmlEscape=function(a){return wa.replaceAll(a,[[/&/g,"&amp;"],[/</g,"&lt;"],[/>/g,"&gt;"],[/"/g,"&quot"],[/'/g,"&#x27"],[/\//g,"&#x2F"]])
};
wa.replaceAll=function(d,c){for(var b=0,a=c.length;
b<a;
b++){d=d.replace(c[b][0],c[b][1])
}return d
};
wa.events=new neo4j.Events();
wa.trigger=neo4j.proxy(wa.events.trigger,wa.events);
wa.bind=neo4j.proxy(wa.events.bind,wa.events);
wa.PropertyStorage=function(a){this.cache={};
this.storageUrl=a
};
wa.PropertyStorage.prototype.get=function(c,a){if(typeof(this.cache[c])==="undefined"){var b=this.cache;
neo4j.Web.get(this.storageUrl+c,(function(e,d){return function(g){var f=g==="undefined"?undefined:typeof(g)==="string"?JSON.parse(g):g;
b[e]=f;
d(e,f)
}
})(c,a))
}else{value(this.cache[c])
}};
wa.PropertyStorage.prototype.set=function(c,d,a){var b=this.cache;
neo4j.Web.post(this.storageUrl+c,d,(function(e,f,g){return function(){b[f]=g;
if(typeof(e)==="function"){e()
}}
})(a,c,d))
};
wa.prop=new wa.PropertyStorage("../db/manage/properties/");
wa.Servers=(function(){var d="http://"+document.domain+":9999/";
var i="db/manage/";
var j={};
var h=null;
var b=false;
var a=false;
function f(){var k=$.bbq.getState("s");
e.setCurrentServer(k)
}function g(){b=true;
wa.trigger("servers.loaded",j);
if(h){wa.trigger("servers.current.changed",{current:j[h]})
}}$(window).bind("hashchange",f);
wa.prop.get("neo4j-servers",function(l,k){if(a===false&&(k===null||k===undefined)){a=true;
neo4j.Web.get(i,function(){var o=new neo4j.GraphDatabase(d,i);
j={};
j[document.domain]=o;
g();
c()
},function(){j={};
c()
})
}else{var n=false;
var m;
for(var l in k){m=k[l];
if(m.name){n=true;
if(m.adminUrl==="/admin/server/"){m.adminUrl="/db/manage/"
}j[m.name]=new neo4j.GraphDatabase(m.restUrl,m.adminUrl)
}else{j[l]=new neo4j.GraphDatabase(m.url,m.manageUrl)
}}g()
}});
function c(){var l={};
for(var k in j){l[k]={url:j[k].url,manageUrl:j[k].manageUrl}
}wa.prop.set("neo4j-servers",l)
}var e={isLoaded:function(){return b
},getServers:function(){return j
},getServer:function(k){if(j[k]){return j[k]
}else{return null
}},getServerKey:function(l){for(var k in j){if(j[k].url===l.url){return k
}}return null
},getCurrentServer:function(){return wa.Servers.getServer(h)
},setCurrentServer:function(l){if(typeof(l)==="object"){var k=wa.Servers.getServerKey(l)
}else{var k=l
}if(k!==h){h=k;
if(j[k]){wa.trigger("servers.current.changed",{current:j[h]})
}}},setServer:function(l,m,k){j[l]=new neo4j.GraphDatabase(m,k);
wa.trigger("servers.changed",{servers:j});
c()
},removeServer:function(k){if(j[k]){delete (j[k]);
wa.trigger("servers.changed",{servers:j});
c()
}}};
f();
return e
})();
wa.ServerSelector=(function(b){var a={};
a.reload=function(){var g=wa.Servers.getServers();
var f=wa.Servers.getCurrentServer();
if(f==null){for(var d in g){b.bbq.pushState({s:d});
return
}}var e=b("#mor_servers ul.mor_servers_list");
e.empty();
for(var d in g){var c="";
if(g[d]!==f){e.append('<li><a class="'+c+'" href="/index.html#p=morpheus.monitor&s='+d+'">'+d+"</a></li>")
}else{b("#mor_servers_current").html(d)
}}e.append('<li><a href="#" class="mor_servers_list_manage">Manage servers</a></li>');
b("ul.mor_servers_list").addClass("hidden")
};
wa.bind("init",function(){if(wa.Servers.isLoaded()){a.reload()
}else{wa.bind("servers.loaded",function(c){a.reload()
})
}wa.bind("servers.current.changed",function(){a.reload()
});
wa.bind("servers.changed",function(){a.reload()
})
});
b("a.mor_servers_list_manage").live("click",function(c){c.preventDefault();
b("ul.mor_servers_list").addClass("hidden");
wa.ui.Dialog.showUsingTemplate("Manage servers","templates/manageServers.tp",wa.Servers.getServers())
});
b("#mor_servers_add_button").live("click",function(e){e.preventDefault();
var d=b("#mor_servers_add_name").val();
var f=b("#mor_servers_add_dataUrl").val();
var c=b("#mor_servers_add_manageUrl").val();
if(d.length<1){b("#mor_servers_add_name").addClass("error")
}else{b("#mor_servers_add_name").removeClass("error")
}if(f.length<1){b("#mor_servers_add_dataUrl").addClass("error")
}else{b("#mor_servers_add_dataUrl").removeClass("error")
}if(c.length<1){b("#mor_servers_add_manageUrl").addClass("error")
}else{b("#mor_servers_add_manageUrl").removeClass("error")
}if(f.length>0&&d.length>0&&c.length>0){wa.Servers.setServer(d,f,c);
wa.ui.Dialog.updateTemplateContext(wa.Servers.getServers())
}});
b("#mor_servers_current").live("click",function(c){b("ul.mor_servers_list").toggleClass("hidden");
c.preventDefault()
});
b("a.mor_servers_remove_button").live("click",function(d){d.preventDefault();
var c=b(d.target).closest("tr").find("td.mor_servers_name").html();
wa.Servers.removeServer(c);
wa.ui.Dialog.updateTemplateContext(wa.Servers.getServers())
});
return{}
})(jQuery);
wa.FormValidator=(function(b){var a={not_empty:function(c){return typeof(c)==="string"&&c.length>0
}};
return{validateField:function(e,d,c){var e=b(e);
d=typeof(d)==="function"?d:a[d];
if(!d(e.val(),e)){e.addClass("error");
return false
}else{e.removeClass("error");
return true
}},validateFields:function(e){var f=true;
for(var d=0,c=e.length;
d<c;
d++){if(!wa.FormValidator.validateField(e[d].field,e[d].validator,e[d].errorMessage)){f=false
}}return f
}}
})(jQuery);
(function(){var a=false;
neo4j.events.bind("web.connection.failed",function(c,b){if(!a){if(wa.Servers.getCurrentServer()!==null){a=true;
wa.ui.Loading.show("Server connection lost","Attempting to re-establish connection..");
wa.Servers.getCurrentServer().heartbeat.waitForPulse(function(){wa.ui.Loading.hide();
a=false
})
}else{wa.ui.ErrorBox.showError("Unknown connection problem.")
}}})
})();
wa.ui=wa.ui||{};
wa.ui.Dialog=(function(b){var a={};
a.showImpl=function(){b("#mor_dialog_content").modal({overlayId:"mor_dialog_overlay",containerId:"mor_dialog_container",closeHTML:null,minHeight:80,opacity:65,position:["100",],overlayClose:true});
a.adjustHeight()
};
a.adjustHeight=function(){setTimeout(function(){var c=b("#mor_dialog_container");
var d=b("#mor_dialog_data",c).height()+b("#mor_dialog_title",c).height()+30;
c.css({height:d,top:"100px"})
},10)
};
return{show:function(e,d,c){a.cb=c;
b("#mor_dialog_title").html(e);
b("#mor_dialog_data").html(d);
a.showImpl()
},showUsingTemplate:function(f,e,d,c){c=typeof(d)==="function"?d:c;
a.cb=c;
b("#mor_dialog_title").html(f);
b("#mor_dialog_data").setTemplateURL(e);
b("#mor_dialog_data").processTemplate(d||{});
a.showImpl()
},updateTemplateContext:function(c){b("#mor_dialog_data").processTemplate(c||{});
a.adjustHeight()
},close:function(){b.modal.close()
}}
})(jQuery);
wa.ui.Loading=(function(b){var a={};
a.container=null;
a.showImpl=function(){b("#mor_loading_content").modal({overlayId:"mor_loading_overlay",containerId:"mor_loading_container",closeHTML:null,minHeight:80,opacity:65,position:["100",],overlayClose:false})
};
return{show:function(e,d,c){a.cb=c;
b("#mor_loading_title").html(e);
b("#mor_loading_message").html(d);
a.showImpl()
},hide:function(){b.modal.close()
}}
})(jQuery);
wa.ui.Pages=(function(b){var a={};
a.DEFAULT_PAGE="dashboard";
a.pages={};
a.currentPage=null;
a.pageRoot=null;
a.init=function(){a.pageRoot=b("#mor_pages");
for(key in a.pages){a.pageRoot.append(a.pages[key].element);
a.pages[key].element.hide()
}b(window).bind("hashchange",a.hashchange);
a.showPage(b.bbq.getState("p"))
};
a.showPage=function(c){if(typeof(a.pages[c])!=="undefined"){if(a.currentPage===c){return
}if(a.currentPage!==null){a.pages[a.currentPage].element.hide()
}a.currentPage=c;
a.pages[c].element.show();
wa.ui.MainMenu.setCurrentPage(c);
wa.trigger("ui.page.changed",c)
}else{if(c!==a.DEFAULT_PAGE){b.bbq.pushState({p:a.DEFAULT_PAGE})
}else{for(c in a.pages){b.bbq.pushState({p:c});
break
}}}};
a.hashchange=function(c){var d=b.bbq.getState("p");
a.showPage(d)
};
return{init:a.init,add:function(c,d){a.pages[c]={obj:d,element:d.getPage()};
if(a.pageRoot!==null){a.pageRoot.append(a.pages[c].element);
a.pages[c].element.hide()
}}}
})(jQuery);
wa.ui.Helpers=function(){return{init:function(){$("a.mor_module_foldout_trigger").live("click",function(a){a.preventDefault();
$(".mor_module_foldout_content",$(a.target).closest(".mor_module_foldout")).toggleClass("visible")
})
}}
}();
wa.ui.MainMenu=(function(b){var a={};
a.container=null;
a.currentPage=null;
a.menuItems=[];
a.perspective="";
a.init=function(){a.container=b("#mor_mainmenu");
a.container.setTemplateURL("templates/mainmenu.tp");
a.render();
b(window).bind("hashchange",a.hashchange)
};
a.render=function(){if(a.container!==null){var c=[];
if(wa.Servers.getCurrentServer()){if(!wa.Servers.getCurrentServer().manage.servicesLoaded()){wa.Servers.getCurrentServer().bind("services.loaded",a.render)
}else{c=wa.Servers.getCurrentServer().manage.availableServices()
}}var f,d=[];
for(var e in a.menuItems){f=a.menuItems[e];
if(a.itemRequirementsFulfilled(f,c)){d.push(f)
}}a.container.processTemplate({items:d,urlAppend:a.getExtraUrlParams()})
}};
a.itemRequirementsFulfilled=function(e,c){if(b.inArray("all",e.perspectives)!==-1||b.inArray(a.perspective,e.perspectives)!==-1){if(e.requiredServices.length>0){for(var d in e.requiredServices){if(b.inArray(e.requiredServices[d],c)===-1){return false
}}}return true
}return false
};
a.setCurrentPage=function(e){for(var d=0,c=a.menuItems.length;
d<c;
d++){if(a.menuItems[d].page===e){a.menuItems[d].isCurrent=true
}else{a.menuItems[d].isCurrent=false
}}a.render()
};
a.update=function(c,f){for(var d in a.menuItems){if(a.menuItems[d].name===c){for(var e in f){a.menuItems[d][e]=f[e]
}}}a.render()
};
a.getSetClass=function(c){return"menuset-"+c
};
a.hashchange=function(c){a.render()
};
a.getExtraUrlParams=function(){var c=b.deparam.fragment();
delete (c.p);
return"&"+b.param.fragment("",c).substring(1)
};
wa.bind("servers.current.changed",function(c){if(c.data.current){wa.ui.MainMenu.setPerspective("server")
}});
return{init:a.init,add:function(f){var e=f.label;
var i=f.pageKey;
var h=f.data||{};
var j=f.perspectives||["all"];
var c=f.requiredServices||[];
var d=f.index||0;
var g=a.menuItems.length;
while(a.menuItems[g-1]!=undefined&&a.menuItems[g-1].index>d){g--
}a.menuItems.splice(g,0,{label:e,page:i,data:h,perspectives:j,requiredServices:c,urlAppend:"",index:d});
a.render()
},update:a.update,setCurrentPage:a.setCurrentPage,setPerspective:function(c){if(a.perspective!==c){a.perspective=c;
a.render()
}}}
})(jQuery);
wa.ui.ErrorBox=function(){var a={};
return{showError:function(b,d){var d=d||5000;
if(typeof(a[b])!=="undefined"){var c=a[b],e=c.count<5?(++c.count):"5+";
clearTimeout(c.timeout);
$(".mor_error_count",c.elem).html("("+e+")");
$(".mor_error_count",c.elem).show();
c.timeout=setTimeout((function(f){return function(){wa.ui.ErrorBox.hideError(f)
}
})(b),d)
}else{a[b]={msg:b,count:1,elem:$("<li>"+b+"<span class='mor_error_count' style='display:none;'>(1)</span></li>"),timeout:setTimeout((function(f){return function(){wa.ui.ErrorBox.hideError(f)
}
})(b),d)};
$("#mor_errors").append(a[b].elem)
}},hideError:function(b){if(typeof(a[b])!=="undefined"){a[b].elem.remove();
delete (a[b])
}}}
}();
wa.widgets=wa.widgets||{};
wa.widgets.LifecycleWidget=function(d,b){var c={};
c.template=b||"templates/widgets/LifecycleWidget.tp";
c.element=false;
c.status="UNKOWN";
c.watingForResponse=false;
c.server=d?d:false;
c.getWidget=function(){return c.element
};
c.start=function(e){if(c.status!=="RUNNING"){c.serverAction("start","Starting server..")
}if(e&&e.preventDefault){e.preventDefault()
}};
c.stop=function(e){if(c.status!=="STOPPED"){c.serverAction("stop","Stopping server..")
}if(e){e.preventDefault()
}};
c.restart=function(e){c.serverAction("restart","Restarting server..");
if(e){e.preventDefault()
}};
c.check=function(e){if(c.server){c.enable();
c.serverAction("getStatus",c.statusElement.html(),"GET")
}else{c.disable();
c.statusElement.html("N/A")
}if(e&&e.preventDefault){e.preventDefault()
}};
c.disable=function(){c.buttons.start.hide();
c.buttons.stop.hide();
c.buttons.restart.hide()
};
c.enable=function(){c.buttons.start.show();
c.buttons.stop.show();
c.buttons.restart.show()
};
c.serverAction=function(g,f,e){var e=e||"POST";
if(!c.watingForResponse){c.statusElement.html(f);
c.watingForResponse=true;
$("ul.mor_lifecycle_actions a").addClass("disabled");
c.server.manage.lifecycle[g](function(h){c.watingForResponse=false;
c.setStatus(h.current_status)
})
}};
c.setStatus=function(e){c.status=e;
if(c.statusActions[e]){c.statusActions[e]()
}};
c.statusActions={RUNNING:function(){c.statusElement.html("Running");
var e=$("div.mor_lifecycle");
e.addClass("mor_lifecycle_running");
e.removeClass("mor_lifecycle_stopped");
$("ul.mor_lifecycle_actions a").removeClass("disabled");
$("ul.mor_lifecycle_actions a.mor_lifecycle_start").addClass("disabled")
},STOPPED:function(){c.statusElement.html("Stopped");
var e=$("div.mor_lifecycle");
e.addClass("mor_lifecycle_stopped");
e.removeClass("mor_lifecycle_running");
$("ul.mor_lifecycle_actions a").removeClass("disabled");
$("ul.mor_lifecycle_actions a.mor_lifecycle_stop").addClass("disabled");
$("ul.mor_lifecycle_actions a.mor_lifecycle_restart").addClass("disabled")
}};
var a=$("<div></div>");
a.setTemplateURL(c.template);
a.processTemplate({domain:d.domain});
c.element=a.children();
c.buttons={};
c.buttons.start=$(".mor_lifecycle_start",c.element);
c.buttons.restart=$(".mor_lifecycle_restart",c.element);
c.buttons.stop=$(".mor_lifecycle_stop",c.element);
c.statusElement=$(".mor_lifecycle_status",c.element);
c.buttons.start.click(c.start);
c.buttons.restart.click(c.restart);
c.buttons.stop.click(c.stop);
c.check();
c.api={init:c.init,check:c.check,stop:c.stop,start:c.start,restart:c.restart,getWidget:c.getWidget,render:c.getWidget};
return c.api
};
wa.components=wa.components||{};
wa.components.dashboard=wa.components.dashboard||{};
wa.components.dashboard.Dashboard=(function(b){var a={};
a.basePage=b("<div></div>");
a.ui={};
a.uiLoaded=false;
a.server=null;
a.kernelInfo=null;
a.visible=false;
a.valueTrackers=[];
a.charts=[];
a.visibleChart=null;
a.api={getPage:function(){return a.basePage
},pageChanged:function(c){if(c.data==="dashboard"){a.visible=true;
if(a.uiLoaded===false){a.uiLoaded=true;
a.basePage.setTemplateURL("templates/components/monitor/index.tp");
a.server=wa.Servers.getCurrentServer();
if(a.server){a.reload()
}}else{a.runMonitors()
}}else{a.visible=false;
a.haltMonitors()
}},serverChanged:function(c){if(a.server!=wa.Servers.getCurrentServer()){a.server=wa.Servers.getCurrentServer();
if(a.visible===true){a.reload()
}}},init:function(){}};
a.reload=function(){a.destroyMonitors();
var c=wa.Servers.getCurrentServer();
if(c){c.manage.jmx.getBean("neo4j","Kernel",function(d){a.kernelInfo=d;
a.render();
a.loadMonitors(c);
b("#mor_monitor_lifecycle").empty()
})
}else{a.render()
}};
a.render=function(){a.basePage.processTemplate({server:a.server,kernelInfo:a.kernelInfo})
};
a.destroyMonitors=function(){a.haltMonitors();
a.valueTrackers=[];
a.charts=[]
};
a.haltMonitors=function(){for(var d=0,c=a.charts.length;
d<c;
d++){a.charts[d].stopDrawing()
}for(var d=0,c=a.valueTrackers.length;
d<c;
d++){a.valueTrackers[d].stopPolling()
}};
a.runMonitors=function(){if(a.visibleChart!==null){a.visibleChart.startDrawing()
}for(var d=0,c=a.valueTrackers.length;
d<c;
d++){a.valueTrackers[d].startPolling()
}};
a.loadMonitors=function(f){var j=b("#mor_monitor_valuetrackers"),g=b("#mor_monitor_primitives_chart"),h=b("#mor_monitor_memory_chart"),i=wa.components.dashboard.PrimitiveCountWidget(f),c=wa.components.dashboard.DiskUsageWidget(f),e=wa.components.dashboard.CacheWidget(f);
var d=wa.components.dashboard.MonitorChart(f,{label:"Primitive entitites",data:{node_count:{label:"Nodes"},relationship_count:{label:"Relationships"},property_count:{label:"Properties"}}});
var k=wa.components.dashboard.MonitorChart(f,{label:"Heap memory usage",data:{memory_usage_percent:{label:"Heap memory usage"}},yaxis:{min:0,max:100},series:{lines:{show:true,fill:true,fillColor:"#4f848f"}},tooltipValueFormatter:function(l){return Math.floor(l)+"%"
}});
a.valueTrackers.push(i);
a.valueTrackers.push(c);
a.valueTrackers.push(e);
a.charts.push(d);
a.charts.push(k);
a.primitivesChart=d;
a.visibleChart=a.primitivesChart;
a.memoryChart=k;
j.append(i.render());
j.append(c.render());
j.append(e.render());
g.append(d.render());
h.append(k.render());
d.startDrawing()
};
b("#mor_monitor_memory_chart_tab").live("click",function(c){c.preventDefault();
b(c.target).parent().addClass("current");
b("#mor_monitor_primitives_chart_tab").parent().removeClass("current");
a.primitivesChart.stopDrawing();
b("#mor_monitor_primitives_chart").hide();
b("#mor_monitor_memory_chart").show();
a.memoryChart.startDrawing();
a.visibleChart=a.memoryChart
});
b("#mor_monitor_primitives_chart_tab").live("click",function(c){c.preventDefault();
b(c.target).parent().addClass("current");
b("#mor_monitor_memory_chart_tab").parent().removeClass("current");
a.memoryChart.stopDrawing();
b("#mor_monitor_memory_chart").hide();
b("#mor_monitor_primitives_chart").show();
a.primitivesChart.startDrawing();
a.visibleChart=a.primitivesChart
});
return a.api
})(jQuery);
wa.ui.Pages.add("dashboard",wa.components.dashboard.Dashboard);
wa.ui.MainMenu.add({label:"Dashboard",pageKey:"dashboard",index:0,requiredServices:["monitor"],perspectives:["server"]});
wa.bind("init",wa.components.dashboard.Dashboard.init);
wa.bind("ui.page.changed",wa.components.dashboard.Dashboard.pageChanged);
wa.bind("servers.current.changed",wa.components.dashboard.Dashboard.serverChanged);
wa.components.dashboard.PrimitiveCountWidget=function(c,a){var b={};
b.server=c;
b.tracker=null;
b.ui=$("<div class='mor_module mor_span-3'></div>");
b.api={render:function(){if(!b.uiLoaded){b.uiLoaded=true;
b.ui.setTemplateURL("templates/components/monitor/PrimitiveCountWidget.tp")
}if(!b.runnning){b.api.startPolling()
}return b.ui
},stopPolling:function(){b.tracker.stop();
b.running=false
},startPolling:function(){b.tracker.run();
b.running=true
}};
b.extractor=function(e){var f={};
for(var g=0,d=e.attributes.length;
g<d;
g++){f[e.attributes[g].name]=e.attributes[g]
}return f
};
b.valueChanged=function(d){b.data=d;
if(b.uiLoaded){b.ui.processTemplate({data:b.data.value})
}return true
};
b.tracker=wa.components.dashboard.JmxValueTracker(b.server,"neo4j","Primitive count",b.extractor,b.valueChanged,a||10000);
return b.api
};
wa.components.dashboard.JmxValueTracker=function(f,c,g,e,a,b){var d={};
d.polling_interval=b||10000;
d.max_polling_interval=d.polling_interval*10;
d.actual_polling_interval=d.polling_interval;
d.callback=a;
d.extractor=e;
d.beanDomain=c;
d.beanName=g;
d.jmx=f.manage.jmx;
d.prevValue=null;
d.api={run:function(){d.poll()
},stop:function(){d.stopIssued=true
}};
d.poll=function(){d.jmx.getBean(c,g,function(h){if(h){var j=d.extractor(h);
if(j!==d.prevValue){d.prevValue=j;
var i=d.callback({value:j,bean:h,beanName:d.beanName});
if(i){d.actual_polling_interval=d.polling_interval
}else{return
}}else{if(d.actual_polling_interval>=d.max_polling_interval){d.actual_polling_interval=d.max_polling_interval
}else{d.actual_polling_interval*=2
}}}if(!d.stopIssued){setTimeout(d.poll,d.actual_polling_interval)
}})
};
return d.api
};
wa.components.dashboard.DiskUsageWidget=function(c,a){var b={};
b.server=c;
b.tracker=null;
b.ui=$("<div class='mor_module mor_span-3'></div>");
b.api={render:function(){if(!b.uiLoaded){b.uiLoaded=true;
b.ui.setTemplateURL("templates/components/monitor/DiskUsageWidget.tp")
}if(!b.runnning){b.api.startPolling()
}return b.ui
},stopPolling:function(){b.tracker.stop();
b.running=false
},startPolling:function(){b.tracker.run();
b.running=true
}};
b.extractor=function(e){var f={};
for(var g=0,d=e.attributes.length;
g<d;
g++){f[e.attributes[g].name]=e.attributes[g]
}return f
};
b.valueChanged=function(d){b.data=d;
if(b.uiLoaded){b.ui.processTemplate({data:b.data.value})
}return true
};
b.tracker=wa.components.dashboard.JmxValueTracker(b.server,"neo4j","Store file sizes",b.extractor,b.valueChanged,a||10000);
return b.api
};
wa.components.dashboard.CacheWidget=function(c,a){var b={};
b.server=c;
b.tracker=null;
b.ui=$("<div class='mor_module mor_span-3'></div>");
b.api={render:function(){if(!b.uiLoaded){b.uiLoaded=true;
b.ui.setTemplateURL("templates/components/monitor/CacheWidget.tp")
}if(!b.runnning){b.api.startPolling()
}return b.ui
},stopPolling:function(){b.tracker.stop();
b.running=false
},startPolling:function(){b.tracker.run();
b.running=true
}};
b.extractor=function(e){var f={};
for(var g=0,d=e.attributes.length;
g<d;
g++){f[e.attributes[g].name]=e.attributes[g]
}return f
};
b.valueChanged=function(d){b.data=d;
if(b.uiLoaded){b.ui.processTemplate({data:b.data.value})
}return true
};
b.tracker=wa.components.dashboard.JmxValueTracker(b.server,"neo4j","Cache",b.extractor,b.valueChanged,a||10000);
return b.api
};
wa.components.dashboard.monitorChartCounter=0;
wa.components.dashboard.MonitorChart=function(e,c){var d={};
d.settings={label:"",xaxis:{mode:"time",timeformat:"%H:%M:%S"},yaxis:{},height:200,data:[],series:{},tooltipValueFormatter:function(f){return f
},colors:["#326a75","#4f848f","#a0c2c8","#00191e"]};
var c=c||{};
$.extend(true,d.settings,c);
d.series=[];
for(var b in d.settings.data){d.settings.data[b].key=b;
d.series.push(d.settings.data[b])
}d.server=e;
d.containerId="mor_monitor_chart_"+wa.components.dashboard.monitorChartCounter++;
d.controlsClass=d.containerId+"_controls";
d.zoom={year:{id:d.containerId+"_zoom_0",xSpan:1000*60*60*24*365,timeformat:"%d/%m %y"},month:{id:d.containerId+"_zoom_1",xSpan:1000*60*60*24*30,timeformat:"%d/%m"},week:{id:d.containerId+"_zoom_2",xSpan:1000*60*60*24*7,timeformat:"%d/%m"},day:{id:d.containerId+"_zoom_3",xSpan:1000*60*60*24,timeformat:"%H:%M"},six_hours:{id:d.containerId+"_zoom_4",xSpan:1000*60*60*6,timeformat:"%H:%M"},thirty_minutes:{id:d.containerId+"_zoom_5",xSpan:1000*60*30,timeformat:"%H:%M"}};
var a="<ul class='mor_module_actions'>";
a+="<li><a class='"+d.controlsClass+"' href='#' id='"+d.zoom.year.id+"'>Year</a></li>";
a+="<li><a class='"+d.controlsClass+"' href='#' id='"+d.zoom.month.id+"'>Month</a></li>";
a+="<li><a class='"+d.controlsClass+"' href='#' id='"+d.zoom.week.id+"'>Week</a></li>";
a+="<li><a class='"+d.controlsClass+"' href='#' id='"+d.zoom.day.id+"'>Day</a></li>";
a+="<li><a class='"+d.controlsClass+"' href='#' id='"+d.zoom.six_hours.id+"'>6 hours</a></li>";
a+="<li class='current'><a class='"+d.controlsClass+"' href='#' id='"+d.zoom.thirty_minutes.id+"'>30 minutes</a></li>";
a+="</ul><div class='break'></div>";
d.container=$("<div>"+a+"<div class='mor_chart_container'><div style='height:"+d.settings.height+"px;' id='"+d.containerId+"'></div></div></div>");
d.drawing=false;
d.currentZoom="thirty_minutes";
d.currentData=[];
d.api={render:function(){return d.container
},startDrawing:function(){if(!d.drawing){d.drawing=true
}d.draw(e.heartbeat.getCachedData())
},stopDrawing:function(){d.drawing=false
}};
d.draw=function(f){if(f.timestamps.length>0){d.settings.xaxis.min=d.convertToLocalTimestamp(f.timestamps[f.timestamps.length-1])-d.zoom[d.currentZoom].xSpan;
d.settings.xaxis.timeformat=d.zoom[d.currentZoom].timeformat
}$.plot($("#"+d.containerId),d.parseData(f),{xaxis:d.settings.xaxis,yaxis:d.settings.yaxis,grid:{hoverable:true},legend:{position:"nw"},series:d.settings.series,colors:d.settings.colors})
};
d.convertToLocalTimestamp=function(f){return f-(new Date()).getTimezoneOffset()*60*1000
};
d.parseData=function(m){var g=[];
var k=d.series.length;
for(var j=0;
j<k;
j++){g[j]={data:[]};
$.extend(true,g[j],d.settings.data[d.series[j].key])
}for(var h=0,f=m.timestamps.length;
h<f;
h++){for(var j=0;
j<k;
j++){g[j].data.push([d.convertToLocalTimestamp(m.timestamps[h]),m.data[d.series[j].key][h]])
}}return g
};
d.showTooltip=function(f,h,g){$('<div id="mor_chart_tooltip">'+g+"</div>").css({position:"absolute",display:"none",top:h+5,left:f+5,border:"1px solid #a1a8a9",padding:"2px","background-color":"#f6f6f6",opacity:0.8}).appendTo("body").fadeIn(100)
};
d.removeTooltip=function(){$("#mor_chart_tooltip").remove();
d.previousHoverPoint=null
};
d.zeroPad=function(f){f=f+"";
if(f.length==1){return"0"+f
}else{return f
}};
for(var b in d.zoom){$("#"+d.zoom[b].id).live("click",(function(f){return function(g){g.preventDefault();
d.currentZoom=f;
$("."+d.controlsClass).parent().removeClass("current");
$("#"+d.zoom[f].id).parent().addClass("current");
d.draw(e.heartbeat.getCachedData())
}
})(b))
}e.heartbeat.addListener(function(f){if(d.drawing){d.draw(f.allData)
}});
d.previousHoverPoint=null;
$("#"+d.containerId).live("plothover",function(h,j,g){if(g){if(d.previousHoverPoint!=g.datapoint){d.previousHoverPoint=g.datapoint;
$("#mor_chart_tooltip").remove();
var f=new Date(g.datapoint[0]),i=g.datapoint[1];
i=d.settings.tooltipValueFormatter(i);
d.showTooltip(g.pageX,g.pageY,"<span><b>"+g.series.label+":</b> "+i+"</span><br /><span style='font-size:12px;'>"+d.zeroPad(f.getUTCDate())+"/"+d.zeroPad(f.getUTCMonth())+" - "+d.zeroPad(f.getUTCHours())+":"+d.zeroPad(f.getUTCMinutes())+":"+d.zeroPad(f.getUTCSeconds())+"</span>")
}}else{d.removeTooltip()
}});
$("#"+d.containerId).live("mouseout",d.removeTooltip);
$("#mor_chart_tooltip").live("mouseout",d.removeTooltip);
return d.api
};
wa.components.jmx=wa.components.jmx||{};
wa.components.jmx.Jmx=(function(c){var b={},a="org.neo4j";
b.basePage=c("<div></div>");
b.ui={};
b.uiLoaded=false;
b.jmxData=null;
b.currentBean=null;
b.visible=false;
b.api={getPage:function(){return b.basePage
},findBean:function(e,d){var f=b.api.parseBeanName(e);
var g=wa.Servers.getCurrentServer();
if(!g){d([]);
return
}g.manage.jmx.getBean(f.domain,f.name,(function(h){return function(i){h(i)
}
})(d))
},parseBeanName:function(e){var d=e.split(":");
return{domain:d[0],name:d[1]}
},pageChanged:function(d){if(d.data==="jmx"){b.visible=true;
if(b.uiLoaded===false){b.basePage.setTemplateURL("templates/components/monitor/jmx.tp")
}var e=wa.Servers.getCurrentServer();
if(e){b.loadJMXDomains(b.server)
}}else{b.visible=false
}},init:function(){c(window).bind("hashchange",b.hashchange);
b.hashchange()
}};
b.loadJMXDomains=function(){var d=wa.Servers.getCurrentServer();
if(d){d.manage.jmx.query(["*:*"],function(h){b.jmxData=[];
for(var g=0,f=h.length;
g<f;
g++){var e=h[g];
b.getDomain(e.domain).beans.push(e)
}b.render()
})
}};
b.getDomain=function(e){for(var d in b.jmxData){if(b.jmxData[d].name===e){return b.jmxData[d]
}}var f={name:e,beans:[]};
b.jmxData.push(f);
return f
};
b.hashchange=function(d){var e=c.bbq.getState("jmxbean");
if(typeof(e)!=="undefined"&&(b.currentBean===null||e!==b.currentBean.name)){b.api.findBean(e,function(f){if(f){b.currentBean=f;
b.render()
}})
}};
b.render=function(){if(b.visible){if(b.jmxData!==null){jmxData=b.jmxData.sort(function(e,d){if(e.name===a){return -1
}else{if(d.name===a){return 1
}}return 0
})
}else{jmxData=[]
}b.basePage.processTemplate({jmx:jmxData,server:b.server,bean:b.currentBean})
}};
c(".mor_monitor_jmxbean_button").live("click",function(d){setTimeout((function(e){return function(){c.bbq.pushState({jmxbean:c(".bean-name",e.target.parentNode).val()})
}
})(d),0);
d.preventDefault()
});
wa.bind("servers.current.changed",function(){b.jmxData=null;
if(b.visible===true){b.loadJMXDomains()
}});
return b.api
})(jQuery);
wa.ui.Pages.add("jmx",wa.components.jmx.Jmx);
wa.ui.MainMenu.add({label:"Server info",pageKey:"jmx",index:7,requiredServices:["jmx"],perspectives:["server"]});
wa.bind("init",wa.components.jmx.Jmx.init);
wa.bind("ui.page.changed",wa.components.jmx.Jmx.pageChanged);
wa.components.backup=wa.components.backup||{};
wa.components.backup.parseJobData=function(f){if(f!=null){for(var d=0,b=f.jobList.length;
d<b;
d++){var e=f.jobList[d];
if(e.log.latestSuccess==null){e.readableLatestSuccess="Never"
}else{var c=new Date().getTime();
var g=(c-e.log.latestSuccess.timestamp)/1000;
var a="";
if(g>60*60*24*2){a=Math.floor(g/(60*60*24))+" days ago"
}else{if(g>60*60*24){a="One day and "+Math.floor((g-60*60*24)/(60*60))+" hours ago"
}else{if(g>60*60){a=Math.floor(g/(60*60))+" hours ago"
}else{if(g>60){a=Math.floor(g/60)+" minutes ago"
}else{a="Less than a minute ago"
}}}}e.readableLatestSuccess=a
}if(e.log.entries.length>0&&e.log.entries[0].type==="ERROR"){e.error={message:e.log.entries[0].message,timestamp:e.log.entries[0].timestamp,code:e.log.entries[0].code}
}else{e.error=false
}}}return f
};
wa.components.backup.Backup=(function(d){var b={};
b.basePage=d("<div></div>");
b.ui={};
b.uiLoaded=false;
b.serverChanged=false;
b.schedule=null;
b.currentBackupPath="";
b.prevAction=null;
b.visible=false;
b.api={getPage:function(){return b.basePage
},pageChanged:function(e){if(e.data==="backup"){b.visible=true;
if(b.uiLoaded===false){b.uiLoaded=true;
b.basePage.setTemplateURL("templates/components/backup/index.tp");
b.render();
b.loadBackupData()
}else{if(b.serverChanged){b.serverChanged=false;
b.render();
b.loadBackupData()
}}}else{b.visible=false
}},serverChanged:function(e){b.currentBackupPath="";
if(b.visible===true){b.loadBackupData();
b.render()
}else{b.serverChanged=true
}},init:function(){b.loadBackupData()
}};
function a(){return wa.Servers.getCurrentServer().manage
}b.render=function(){b.basePage.processTemplate({server:b.server});
delete (b.ui.jobList)
};
b.loadBackupData=function(){var e=wa.Servers.getCurrentServer();
if(e){e.manage.config.getProperty("general.backup.path",function(f){b.currentBackupPath=f.value;
b.updateUiBackupPath()
});
c()
}};
b.updateUiBackupPath=function(){d(".mor_backup_path").val(b.currentBackupPath);
d("button.mor_backup_setpathbutton").attr("disabled","disabled");
b.hideStatus();
if(b.currentBackupPath.length>0){d("button.mor_backup_triggerbutton").removeAttr("disabled")
}else{d("button.mor_backup_triggerbutton").attr("disabled","disabled")
}};
b.updateBackupJobUi=function(e){if(!b.ui.jobList){b.ui.jobList=d("ul.mor_backup_job_list");
b.ui.jobList.setTemplateURL("templates/components/backup/schedule.tp")
}var e=wa.components.backup.parseJobData(e);
b.ui.jobList.processTemplate({jobs:e.jobList})
};
b.showStatus=function(e){d("p.mor_backup_status").html(e);
d("p.mor_backup_status").show();
d("div.mor_backup_foundationbox").hide()
};
b.hideStatus=function(){d("p.mor_backup_status").hide();
d("div.mor_backup_foundationbox").hide()
};
function c(){if(b.visible){var e=wa.Servers.getCurrentServer();
if(e&&e.manage.backup.available){e.manage.backup.getJobs(b.updateBackupJobUi)
}}}d("input.mor_backup_path").live("keyup",function(f){var e=d(f.target);
if(e.val().trim()===b.currentBackupPath){d("button.mor_backup_setpathbutton").attr("disabled","disabled");
if(b.currentBackupPath.length>0){d("button.mor_backup_triggerbutton").removeAttr("disabled")
}}else{d("button.mor_backup_setpathbutton").removeAttr("disabled");
d("button.mor_backup_triggerbutton").attr("disabled","disabled")
}});
d("button.mor_backup_setpathbutton").live("click",function(e){d("input.mor_backup_path").attr("disabled","disabled");
var f=wa.Servers.getCurrentServer();
f.manage.config.setProperty("general.backup.path",d("input.mor_backup_path").val(),function(g){d("input.mor_backup_path").removeAttr("disabled");
b.currentBackupPath=d("input.mor_backup_path").val();
b.updateUiBackupPath()
})
});
d("button.mor_backup_triggerbutton").live("click",function(e){var f=wa.Servers.getCurrentServer();
b.showStatus("Performing backup..");
d("button.mor_backup_triggerbutton").attr("disabled","disabled");
f.manage.backup.triggerManual(function(g){if(g!==false){b.showStatus("Backup successful!");
d("button.mor_backup_triggerbutton").removeAttr("disabled")
}else{d("p.mor_backup_status").hide();
d("button.mor_backup_triggerbutton").attr("disabled","disabled");
d("div.mor_backup_foundationbox").show()
}})
});
d("button.mor_backup_foundation_triggerbutton").live("click",function(e){if(confirm("This will DESTROY any files in '"+b.currentBackupPath+"', are you sure?")){var f=wa.Servers.getCurrentServer();
b.showStatus("Creating foundation..");
f.manage.backup.triggerManualFoundation(function(g){b.showStatus("Foundation successful! Your database is now ready for online backups.");
d("button.mor_backup_triggerbutton").removeAttr("disabled")
})
}});
d("button.mor_backup_add_job").live("click",function(e){wa.ui.Dialog.showUsingTemplate("New backup job","templates/components/backup/job.tp")
});
d("button.mor_job_dialog_save").live("click",function(h){var e=[{field:"input.mor_job_dialog_name",validator:"not_empty"},{field:"input.mor_job_dialog_path",validator:"not_empty"},{field:"input.mor_job_dialog_cronexp",validator:"not_empty"}];
if(wa.FormValidator.validateFields(e)){var g=d("input.mor_job_dialog_name").val();
var k=d("input.mor_job_dialog_path").val();
var i=d("input.mor_job_dialog_cronexp").val();
var f=d("input.mor_job_dialog_auto-foundation:checked").length>0;
var l=d("input.mor_job_dialog_id").val();
l=l.length>0?l:null;
var j=wa.Servers.getCurrentServer();
j.manage.backup.setJob({name:g,backupPath:k,cronExpression:i,autoFoundation:f,id:l},function(){j.manage.backup.getJobs(b.updateBackupJobUi)
});
wa.ui.Dialog.close()
}});
d("button.mor_backup_job_edit").live("click",function(e){var f=wa.Servers.getCurrentServer();
f.manage.backup.getJob(d(e.target).closest("li.mor_backup_job").find(".mor_backup_job_id_value").val(),function(g){neo4j.log(g);
wa.ui.Dialog.showUsingTemplate("Edit backup job","components/morpheus.backup/templates/job.tp",g)
})
});
d("button.mor_backup_job_delete").live("click",function(e){if(confirm("Are you sure you want to delete the backup job?")){var f=wa.Servers.getCurrentServer();
f.manage.backup.deleteJob(d(e.target).closest("li.mor_backup_job").find(".mor_backup_job_id_value").val(),c)
}});
d("button.mor_backup_job_create_foundation").live("click",function(e){var g=d(e.target).closest("li.mor_backup_job").find(".mor_backup_job_id_value").val();
var f=wa.Servers.getCurrentServer();
f.manage.backup.getJob(g,function(h){if(h&&confirm("This will delete any current backup in "+h.backupPath+". Are you sure?")){d(".mor_backup_job_info").html("Creating foundation..");
d(".mor_backup_job_info").show();
f.manage.backup.triggerJobFoundation(h.id,function(i){d(".mor_backup_job_info").html("Successfully created foundation.");
setTimeout(function(){d(".mor_backup_job_info").hide()
},2000)
})
}})
});
setInterval(c,5000);
return b.api
})(jQuery);
wa.ui.Pages.add("backup",wa.components.backup.Backup);
wa.ui.MainMenu.add({label:"Backup",pageKey:"backup",index:4,requiredServices:["backup"],perspectives:["server"]});
wa.bind("init",wa.components.backup.Backup.init);
wa.bind("ui.page.changed",wa.components.backup.Backup.pageChanged);
wa.bind("servers.current.changed",wa.components.backup.Backup.serverChanged);
wa.components.console=wa.components.console||{};
wa.components.console.Console=(function(c){var b={};
b.basePage=c("<div></div>");
b.ui={};
b.uiLoaded=false;
b.visible=false;
b.consoleElement=null;
b.history=[];
b.currentHistoryIndex=-1;
function a(){return wa.Servers.getCurrentServer().manage.console
}b.api={getPage:function(){return b.basePage
},pageChanged:function(d){if(d.data==="console"){b.visible=true;
if(b.uiLoaded===false){b.uiLoaded=true;
b.basePage.setTemplateURL("templates/components/console/index.tp");
b.render()
}b.focusOnInputElement()
}else{b.visible=false
}},evaluate:function(e,d){var d=d||b.evalCallback;
b.writeConsoleLine(e,null,"console-input");
if(e.length>0){b.api.pushHistory(b.consoleInput.val())
}b.hideInput();
a().exec(e,"awesome",(function(g,f){return function(h){f(g,h);
b.showInput()
}
})(e,d))
},init:function(){},pushHistory:function(d){b.history.push(d);
b.currentHistoryIndex=b.history.length-1
},prevHistory:function(){if(b.currentHistoryIndex>=0&&b.history.length>b.currentHistoryIndex){b.currentHistoryIndex--;
return b.history[b.currentHistoryIndex+1]
}else{if(b.history.length>0){return b.history[0]
}else{return""
}}},nextHistory:function(){if(b.history.length>(b.currentHistoryIndex+1)){b.currentHistoryIndex++;
return b.history[b.currentHistoryIndex]
}else{return""
}}};
b.render=function(){b.basePage.processTemplate({server:b.server});
b.consoleWrap=c(".mor_console_wrap");
b.consoleElement=c("#mor_console");
b.consoleInputWrap=c("#mor_console_input_wrap");
b.consoleInput=c("#mor_console_input")
};
b.hideInput=function(){c("#mor_console_input").hide()
};
b.showInput=function(){c("#mor_console_input").show()
};
b.focusOnInputElement=function(){c("#mor_console_input").focus()
};
b.evalCallback=function(e,d){b.writeConsoleLine(d,"==&gt; ")
};
b.writeConsoleLine=function(d,e,f){var e=e||"&gt; ";
var f=f||"";
b.consoleInputWrap.before(c("<p> "+e+wa.htmlEscape(d)+"</p>").addClass(f));
b.consoleWrap[0].scrollTop=b.consoleWrap[0].scrollHeight
};
c("#mor_console_input").live("keyup",function(d){if(d.keyCode===13){b.api.evaluate(b.consoleInput.val());
b.consoleInput.val("")
}else{if(d.keyCode===38){b.consoleInput.val(b.api.prevHistory())
}else{if(d.keyCode===40){b.consoleInput.val(b.api.nextHistory())
}}}});
c("#mor_console").live("click",function(d){if(d.target.id==="mor_console"){b.focusOnInputElement()
}});
return b.api
})(jQuery);
wa.ui.Pages.add("console",wa.components.console.Console);
wa.ui.MainMenu.add({label:"Console",pageKey:"console",index:2,requiredServices:["console"],perspectives:["server"]});
wa.bind("ui.page.changed",wa.components.console.Console.pageChanged);
wa.components.config=wa.components.config||{};
wa.components.config.Config=(function(d){var c={};
c.basePage=d("<div></div>");
c.ui={};
c.uiLoaded=false;
c.uiNeedsUpdate=true;
c.server=null;
c.config=null;
c.loadingConfig=false;
c.pendingConfigRequests=[];
c.visible=false;
c.getPage=function(){return c.basePage
};
c.pageChanged=function(g){if(g.data==="config"){c.visible=true;
if(c.uiLoaded===false){c.uiLoaded=true;
c.basePage.setTemplateURL("templates/components/config/index.tp")
}if(c.config!==null){c.render()
}}else{c.visible=false
}};
c.getUncommittedChanges=function(g){var g=g||{};
var i={};
for(var h in c.config){if(c.config[h].newValue!==undefined&&(!g.excludeType||c.config[h].type!==g.excludeType)){i[h]=c.config[h].newValue
}}return i
};
c.allChangesCommitted=function(g){var g=g||{};
for(var h in c.config){if(c.config[h].newValue!==undefined&&(!g.excludeType||c.config[h].type!==g.excludeType)){c.config[h].value=c.config[h].newValue;
delete (c.config[h].newValue)
}}d(".mor_config_value",c.basePage).removeClass("uncommitted")
};
c.updateSaveButtonState=function(){if(b()){d("input#mor_setting_save",c.basePage).removeAttr("disabled")
}else{d("input#mor_setting_save",c.basePage).attr("disabled","disabled")
}};
function b(){for(var g in c.getUncommittedChanges({excludeType:"DB_CREATION_PROPERTY"})){return true
}return false
}function a(){c.loadingConfig=true;
e(function(h){c.config={};
for(var g in h){c.config[h[g].key]=h[g]
}for(var g in c.pendingConfigRequests){c.pendingConfigRequests[g].cb(c.config[c.pendingConfigRequests[g].key])
}c.render();
c.loadingConfig=false
})
}c.render=function(){if(c.uiLoaded){var i=[],g=[],k=[],j=[];
for(var h in c.config){if(c.config[h].hidden!==true){if(c.config[h].type==="DB_CREATION_PROPERTY"){g.push(c.config[h])
}else{if(c.config[h].type==="JVM_ARGUMENT"){k.push(c.config[h])
}else{if(c.config[h].type==="GENERAL_PROPERTY"){j.push(c.config[h])
}else{i.push(c.config[h])
}}}}}c.basePage.processTemplate({config:i,jvm_config:k,advanced_config:g,server:c.server})
}};
c.configValueChanged=function(i){var h=d(i.target);
var g=h.attr("name");
if(c.config[g]!==undefined){if(h.attr("type")==="checkbox"){if(h.attr("checked")){var j=c.config[g].definition.values[0].value
}else{if(c.config[g].definition.values.length>1){var j=c.config[g].definition.values[1].value
}else{var j=""
}}}else{var j=h.val()
}if(j!==c.config[g].value){c.config[g].newValue=j;
h.addClass("uncommitted")
}else{delete (c.config[g].newValue);
h.removeClass("uncommitted")
}c.updateSaveButtonState()
}};
function e(g){wa.Servers.getCurrentServer().manage.config.getProperties(g)
}function f(g,h){wa.Servers.getCurrentServer().manage.config.setProperties(g,h)
}d(".mor_config_value").live("keyup",c.configValueChanged);
d(".mor_config_value").live("change",c.configValueChanged);
d(".mor_config_value").live("click",c.configValueChanged);
d("#mor_setting_save").live("click",function(){if(b()){var g=c.getUncommittedChanges({excludeType:"DB_CREATION_PROPERTY"});
wa.ui.Loading.show("Hold on..","Waiting for changes to be applied..");
d("input",c.basePage).attr("disabled","disabled");
f(g,function(h){setTimeout(function(){wa.Servers.getCurrentServer().heartbeat.waitForPulse(function(){wa.ui.Loading.hide();
window.location.reload()
})
},100)
})
}});
wa.bind("servers.current.changed",a);
return{getPage:c.getPage,pageChanged:c.pageChanged}
})(jQuery);
wa.ui.Pages.add("config",wa.components.config.Config);
wa.ui.MainMenu.add({label:"Configuration",pageKey:"config",index:3,requiredServices:["config"],perspectives:["server"]});
wa.bind("ui.page.changed",wa.components.config.Config.pageChanged);
wa.components.io=wa.components.io||{};
wa.components.io.GraphIO=(function(b){var a={};
a.basePage=b("<div></div>");
a.uiLoaded=false;
a.uploadUrl="";
a.render=function(){if(a.uiLoaded){a.basePage.processTemplate({uploadUrl:a.uploadUrl})
}};
a.pageChanged=function(c){if(c.data==="io"){if(a.uiLoaded===false){a.uiLoaded=true;
a.basePage.setTemplateURL("templates/components/io/index.tp");
a.render()
}}};
wa.bind("ui.page.changed",a.pageChanged);
wa.bind("servers.current.changed",function(c){var d=wa.Servers.getCurrentServer();
d.manage.importing.getUploadUrl(function(e){a.uploadUrl=e;
a.render()
})
});
return{getPage:function(){return a.basePage
}}
})(jQuery);
wa.ui.Pages.add("io",wa.components.io.GraphIO);
wa.ui.MainMenu.add({label:"Import / Export",pageKey:"io",index:8,requiredServices:["importing","exporting"],perspectives:["server"]});
wa.components.io.ExportSupport=(function(b){var a={};
b("button.mor_io_export_button").live("click",function(c){c.preventDefault();
b(".mor_io_export_error_wrap").hide();
b(".mor_io_export_button_wrap").hide();
b(".mor_io_export_progress_wrap").show();
var d=wa.Servers.getCurrentServer();
d.manage.exporting.all(function(f){b(".mor_io_export_button_wrap").show();
b(".mor_io_export_progress_wrap").hide();
var e=f.url;
window.open(e,"Neo4j export download","")
})
});
return{}
})(jQuery);
wa.components.io.ImportSupport=(function(b){var a={};
b("button.mor_io_urlImport_button").live("click",function(d){d.preventDefault();
var c=b(".mor_io_urlImport_url").val();
b(".mor_io_urlImport_url").val("");
if(c.length>0){b(".mor_io_urlImport_error_wrap").hide();
b(".mor_io_urlImport_button_wrap").hide();
b(".mor_io_urlImport_progress_wrap").show();
var e=wa.Servers.getCurrentServer();
e.manage.importing.fromUrl(c,function(f){b(".mor_io_urlImport_button_wrap").show();
b(".mor_io_urlImport_progress_wrap").hide()
})
}});
b("input.mor_io_fileImport_button").live("click",function(c){b("input.mor_io_fileImport_redirect").val(location.href);
b(".mor_io_fileImport_button_wrap").hide();
b(".mor_io_fileImport_progress_wrap").show()
});
return{}
})(jQuery);
wa.components.data=wa.components.data||{};
wa.components.data.PropertiesToListManager=(function(b){var a={};
a.listFields=["name"];
a.setFieldString=function(f){a.listFields=[];
var c=f.split(",");
for(var e=0,d=c.length;
e<d;
e++){a.listFields.push(b.trim(c[e]))
}wa.trigger("data.listnames.changed")
};
b("#mor_data_listfields_button").live("click",function(d){d.preventDefault();
var c=b("#mor_data_listfields").val();
a.setFieldString(c);
wa.Servers.getCurrentServer().manage.config.setProperty("general.data.listfields",c)
});
return{getListFields:function(){return a.listFields
},serverChanged:function(c){wa.Servers.getCurrentServer().manage.config.getProperty("general.data.listfields",function(d){a.setFieldString(d.value)
})
}}
})(jQuery);
wa.bind("servers.current.changed",wa.components.data.PropertiesToListManager.serverChanged);
wa.components.data.DataBrowser=(function(b){var a={};
a.basePage=b("<div></div>");
a.ui={};
a.propertiesToListManager=wa.components.data.PropertiesToListManager;
a.uiLoaded=false;
a.server=null;
a.visible=false;
a.dataUrl=null;
a.currentItem=null;
a.currentRelatedNodePage=0;
a.relatedNodesPerPage=10;
a.api={getPage:function(){return a.basePage
},pageChanged:function(c){if(c.data==="data"){a.visible=true;
if(a.uiLoaded===false){a.uiLoaded=true;
a.basePage.setTemplateURL("templates/components/data/index.tp");
a.reload()
}}else{a.visible=false
}},serverChanged:function(c){a.server=c.data.server;
if(a.visible===true){a.reload()
}},init:function(){wa.bind("data.listnames.changed",a.listNamesChanged);
b(window).bind("hashchange",a.hashchange);
a.hashchange()
},setDataUrl:function(c){b.bbq.pushState({dataurl:a.stripUrlBase(c)})
},getServer:function(){return wa.Servers.getCurrentServer()
},getItem:function(){return a.currentItem
},reload:function(){var c=wa.Servers.getCurrentServer();
if(c){if(typeof(a.dataUrl)!=="undefined"&&a.dataUrl!==null){c.get(a.dataUrl,function(d){a.currentRelatedNodePage=0;
if(d!==null){a.currentItem=d;
a.currentItem.fields=a.extractFields([a.currentItem]);
a.currentItem.isNode=a.dataUrl.indexOf("node")==0?true:false;
a.currentItem.isRelationship=a.dataUrl.indexOf("relationship")==0?true:false;
a.notFound=false;
if(a.currentItem.isNode){a.currentItem.relationships={fields:a.propertiesToListManager.getListFields(),data:[]}
}a.render();
if(a.currentItem.isNode){a.reloadRelations()
}else{if(a.currentItem.isRelationship){a.reloadRelationshipNodes()
}}}else{a.currentItem=false;
a.notFound=true;
a.render()
}},function(d){a.currentItem=false;
a.notFound=true;
a.render()
})
}else{a.api.setDataUrl("node/0")
}}else{a.render()
}}};
a.reload=a.api.reload;
a.reloadRelations=function(){var d=a.dataUrl+"/relationships/all";
var c=wa.Servers.getCurrentServer();
c.get(d,function(g){for(var f=0,e=g.length;
f<e;
f++){if(a.currentItem.self===g[f].start){g[f].otherNode=g[f].end;
g[f].direction="FROM"
}else{g[f].otherNode=g[f].start;
g[f].direction="TO"
}}a.currentItem.relationships.data=g;
a.currentItem.relationships.nodes={};
a.render();
a.reloadRelatedNodes()
})
};
a.reloadRelatedNodes=function(){var e=a.dataUrl+"/traverse/node";
var c={"max depth":1};
var d=wa.Servers.getCurrentServer();
d.post(e,c,function(h){a.currentItem.relationships.nodes=nodes={};
for(var g=0,f=h.length;
g<f;
g++){nodes[h[g].self]=h[g]
}a.render()
})
};
a.reloadRelationshipNodes=function(){var d=a.stripUrlBase(a.currentItem.start);
var c=a.stripUrlBase(a.currentItem.end);
var e=wa.Servers.getCurrentServer();
e.get(d,function(f){a.currentItem.startNode=f;
a.currentItem.startNode.fields=a.extractFields([f]);
a.render()
});
e.get(c,function(f){a.currentItem.endNode=f;
a.currentItem.endNode.fields=a.extractFields([f]);
a.render()
})
};
a.render=function(){var c=a.currentItem?a.currentItem:{isNode:false,isRelationship:false};
a.addPaginationMetaData(c);
a.basePage.processTemplate({server:a.server,dataUrl:a.dataUrl,item:c,notFound:a.notFound===true?true:false})
};
a.addPaginationMetaData=function(e){var g=e.isNode?e.relationships.data.length:0;
var d=a.currentRelatedNodePage*a.relatedNodesPerPage;
var c=d+a.relatedNodesPerPage-1;
var f=Math.ceil(g/a.relatedNodesPerPage);
if(c>=g){c=g-1
}if(!e.relationships){e.relationships={}
}e.relationships.pagination={relatedNodeStartIndex:d,relatedNodeStopIndex:c,relatedNodePage:a.currentRelatedNodePage,relatedNodePageCount:f>0?f:1,relatedNodesPerPage:a.relatedNodesPerPage}
};
a.listNamesChanged=function(c){if(a.currentItem&&a.currentItem.relationships){a.currentItem.relationships.fields=a.propertiesToListManager.getListFields();
a.render()
}};
a.hashchange=function(d){var c=b.bbq.getState("dataurl");
if(c!==a.dataUrl){a.dataUrl=c;
a.reload()
}};
a.extractFields=function(g){var j={};
for(var f=0,c=g.length;
f<c;
f++){for(var e in g[f].data){j[e]=true
}}var h=[];
for(var d in j){h.push(d)
}return h
};
a.stripUrlBase=function(c){var d=wa.Servers.getCurrentServer();
return d.stripUrlBase(c)
};
b("a.mor_data_url_button").live("click",function(c){c.preventDefault();
a.api.setDataUrl(b(c.target).attr("href"))
});
b("button.mor_data_refresh_button").live("click",function(c){c.preventDefault();
a.reload()
});
b("input.mor_data_get_node_button").live("click",function(c){c.preventDefault();
a.api.setDataUrl("node/"+b("#mor_data_get_id_input").val())
});
b("input.mor_data_get_relationship_button").live("click",function(c){c.preventDefault();
a.api.setDataUrl("relationship/"+b("#mor_data_get_id_input").val())
});
b("button.mor_data_reference_node_button").live("click",function(c){c.preventDefault();
a.api.setDataUrl("node/0")
});
b("a.mor_data_paginate_next").live("click",function(d){d.preventDefault();
if(a.currentItem&&a.currentItem.isNode){var c=a.currentItem.relationships.data.length;
if(a.currentRelatedNodePage*a.relatedNodesPerPage+a.relatedNodesPerPage<c){a.currentRelatedNodePage++;
a.render()
}}});
b("a.mor_data_paginate_previous").live("click",function(c){c.preventDefault();
if(a.currentItem&&a.currentItem.isNode){if(a.currentRelatedNodePage>0){a.currentRelatedNodePage--;
a.render()
}}});
return a.api
})(jQuery);
wa.ui.Pages.add("data",wa.components.data.DataBrowser);
wa.ui.MainMenu.add({label:"Data",pageKey:"data",index:1,perspectives:["server"]});
wa.bind("init",wa.components.data.DataBrowser.init);
wa.bind("ui.page.changed",wa.components.data.DataBrowser.pageChanged);
wa.bind("servers.current.changed",wa.components.data.DataBrowser.serverChanged);
wa.components.data.PropertyEditor=(function(b){var a={};
a.currentEditKey=null;
a.dataCore=wa.components.data.DataBrowser;
a.propertyUrl=function(c){var d=a.dataCore.getItem();
return d.property.replace("{key}",c)
};
a.addProperty=function(e){e.preventDefault();
var d=b(e.target).parent().parent().find(".mor_data_property_template");
var c=d.clone();
c.removeClass("mor_data_property_template");
d.before(c);
c.show();
c.find("input.mor_data_key_input").focus()
};
a.removeProperty=function(d){d.preventDefault();
if(confirm("Are you sure?")){var c=a.getKey(d.target);
if(c!==null){a.showSavingSaveButton();
neo4j.Web.del(a.propertyUrl(c),a.showSavedSaveButton)
}else{a.showSavedSaveButton()
}b(d.target).closest("ul").remove()
}};
a.propertyValueChanged=function(d){var c=a.getKey(d.target);
var e=b(d.target).val();
if(c!==null){a.showSavingSaveButton();
neo4j.Web.put(a.propertyUrl(c),e,a.showSavedSaveButton)
}else{a.showSavedSaveButton()
}};
a.propertyKeyChanged=function(d){var f=a.currentEditKey;
var c=b(d.target).val();
var e=a.getValue(d.target);
if(c!=f&&e!==null){a.showSavingSaveButton();
if(f!==null&&f.length>0){neo4j.Web.del(a.propertyUrl(f),a.showSavedSaveButton)
}neo4j.Web.put(a.propertyUrl(c),e,a.showSavedSaveButton)
}};
a.propertyFieldFocused=function(d){a.unfocusFields();
var c=b(d.target);
c.addClass("focused");
if(c.hasClass("mor_data_key_input")){a.currentEditKey=c.val()
}else{a.currentEditKey=a.getKey(c)
}};
a.unfocusFields=function(c){b("input.mor_data_value_input, input.mor_data_key_input").removeClass("focused")
};
a.getKey=function(c){var d=b(c).closest("ul").find("input.mor_data_key_input").val();
if(d.length>0){return d
}else{return null
}};
a.getValue=function(c){var d=b(c).closest("ul").find("input.mor_data_value_input").val();
if(d.length>0){return d
}else{return null
}};
a.showUnsavedSaveButton=function(){b("button.mor_data_save").removeAttr("disabled");
b("button.mor_data_save").html("Not saved")
};
a.showSavedSaveButton=function(){b("button.mor_data_save").attr("disabled","disabled");
b("button.mor_data_save").html("Saved")
};
a.showSavingSaveButton=function(){b("button.mor_data_save").attr("disabled","disabled");
b("button.mor_data_save").html("Saving..")
};
b("button.mor_data_add_property").live("click",a.addProperty);
b("a.mor_data_remove_property").live("click",a.removeProperty);
b("input.mor_data_value_input, input.mor_data_key_input").live("focus",a.propertyFieldFocused);
b("input.mor_data_value_input, input.mor_data_key_input").live("blur",a.unfocusFields);
b("input.mor_data_value_input").live("change",a.propertyValueChanged);
b("input.mor_data_key_input").live("change",a.propertyKeyChanged);
b("input.mor_data_value_input, input.mor_data_key_input").live("keypress",a.showUnsavedSaveButton);
return{}
})(jQuery);
wa.components.data.NodeManager=(function(b){var a={};
a.dataCore=wa.components.data.DataBrowser;
a.server=function(){return a.dataCore.getServer()
};
a.addNode=function(c){c.preventDefault();
a.server().post("node",{},function(e){var d=e.self;
d=d.substring(a.server().url.length);
b.bbq.pushState({dataurl:d})
})
};
a.deleteItem=function(c){c.preventDefault();
if(confirm("Are you sure?")){neo4j.Web.del(a.dataCore.getItem().self,function(d){b.bbq.pushState({dataurl:"node/0"})
})
}};
b(".mor_data_add_node_button").live("click",a.addNode);
b(".mor_data_delete_node_button").live("click",a.deleteItem);
return{}
})(jQuery);
wa.components.data.RelationshipManager=(function(b){var a={};
a.dataCore=wa.components.data.DataBrowser;
a.server=function(){return a.dataCore.getServer()
};
a.addRelatiohship=function(c){c.preventDefault();
wa.ui.Dialog.showUsingTemplate("New relationship","templates/components/data/new_relationship.tp",{fromNode:a.dataCore.getItem()},a.dialogLoaded)
};
a.saveNewRelationship=function(d){d.preventDefault();
var f=b("#mor_data_relationship_dialog_from").val();
var c=b("#mor_data_relationship_dialog_type").val();
var e=b("#mor_data_relationship_dialog_to").val();
if(f.indexOf("://")){f=f.substring(f.lastIndexOf("/")+1)
}if(!e.indexOf("://")){e=a.server().url+e
}if(e===f){wa.ui.ErrorBox.showError("You cannot create self-relationships.")
}else{a.server().post("node/"+f+"/relationships",{to:e,data:{},type:c},function(g){wa.components.data.DataBrowser.reload();
wa.ui.Dialog.close()
})
}};
a.dialogLoaded=function(){var c=a.dataCore.getItem().self;
c=c.substring(c.lastIndexOf("/")+1);
b("#mor_data_relationship_dialog_from").val(c)
};
a.deleteItem=function(c){c.preventDefault();
if(confirm("Are you sure?")){neo4j.Web.del(a.dataCore.getItem().self,function(d){b.bbq.pushState({dataurl:"node/0"})
})
}};
b(".mor_data_delete_relationship_button").live("click",a.deleteItem);
b(".mor_data_add_relationship").live("click",a.addRelatiohship);
b(".mor_data_relationship_dialog_save").live("click",a.saveNewRelationship);
return{}
})(jQuery);
$(function(){$.jTemplatesDebugMode(false);
wa.ui.MainMenu.init();
wa.ui.Pages.init();
wa.ui.Helpers.init();
wa.trigger("init")
});
