(function(a9,ax){function o(){if(!az.isReady){try{ap.documentElement.doScroll("left")
}catch(c){setTimeout(o,1);
return
}az.ready()
}}function k(s,c){c.src?az.ajax({url:c.src,async:false,dataType:"script"}):az.globalEval(c.text||c.textContent||c.innerHTML||"");
c.parentNode&&c.parentNode.removeChild(c)
}function aH(s,K,w,F,A,c){var G=s.length;
if(typeof K==="object"){for(var J in K){aH(s,J,K[J],F,A,w)
}return s
}if(w!==ax){F=!c&&F&&az.isFunction(w);
for(J=0;
J<G;
J++){A(s[J],K,F?w.call(s[J],J,A(s[J],K)):w,c)
}return s
}return G?A(s[0],K):ax
}function bj(){return(new Date).getTime()
}function aE(){return false
}function a6(){return true
}function M(s,c,w){w[0].type=s;
return az.event.handle.apply(c,w)
}function aW(w){var c,J=[],G=[],F=arguments,N,s,L,P,A,K;
s=az.data(this,"events");
if(!(w.liveFired===this||!s||!s.live||w.button&&w.type==="click")){w.liveFired=this;
var O=s.live.slice(0);
for(P=0;
P<O.length;
P++){s=O[P];
s.origType.replace(aU,"")===w.type?G.push(s.selector):O.splice(P--,1)
}N=az(w.target).closest(G,w.currentTarget);
A=0;
for(K=N.length;
A<K;
A++){for(P=0;
P<O.length;
P++){s=O[P];
if(N[A].selector===s.selector){L=N[A].elem;
G=null;
if(s.preType==="mouseenter"||s.preType==="mouseleave"){G=az(w.relatedTarget).closest(s.selector)[0]
}if(!G||G!==L){J.push({elem:L,handleObj:s})
}}}}A=0;
for(K=J.length;
A<K;
A++){N=J[A];
w.currentTarget=N.elem;
w.data=N.handleObj.data;
w.handleObj=N.handleObj;
if(N.handleObj.origHandler.apply(N.elem,F)===false){c=false;
break
}}return c
}}function aT(s,c){return"live."+(s&&s!=="*"?s+".":"")+c.replace(/\./g,"`").replace(/ /g,"&")
}function af(c){return !c||!c.parentNode||c.parentNode.nodeType===11
}function D(s,c){var w=0;
c.each(function(){if(this.nodeName===(s[w]&&s[w].nodeName)){var F=az.data(s[w++]),G=az.data(this,F);
if(F=F&&F.events){delete G.handle;
G.events={};
for(var J in F){for(var A in F[J]){az.event.add(this,J,F[J][A],F[J][A].data)
}}}}})
}function bd(s,w,A){var F,G,c;
w=w&&w[0]?w[0].ownerDocument||w[0]:ap;
if(s.length===1&&typeof s[0]==="string"&&s[0].length<512&&w===ap&&!au.test(s[0])&&(az.support.checkClone||!t.test(s[0]))){G=true;
if(c=az.fragments[s[0]]){if(c!==1){F=c
}}}if(!F){F=w.createDocumentFragment();
az.clean(s,w,F,A)
}if(G){az.fragments[s[0]]=c?F:1
}return{fragment:F,cacheable:G}
}function aS(s,c){var w={};
az.each(aL.concat.apply([],aL.slice(0,c)),function(){w[this]=s
});
return w
}function a7(c){return"scrollTo" in c&&c.document?c:c.nodeType===9?c.defaultView||c.parentWindow:false
}var az=function(s,c){return new az.fn.init(s,c)
},U=a9.jQuery,a0=a9.$,ap=a9.document,a,aJ=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,l=/^.[^:#\[\.,]*$/,aA=/\S/,n=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,aV=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,ah=navigator.userAgent,y=false,aQ=[],bh,z=Object.prototype.toString,v=Object.prototype.hasOwnProperty,r=Array.prototype.push,aK=Array.prototype.slice,aI=Array.prototype.indexOf;
az.fn=az.prototype={init:function(A,w){var s,c;
if(!A){return this
}if(A.nodeType){this.context=this[0]=A;
this.length=1;
return this
}if(A==="body"&&!w){this.context=ap;
this[0]=ap.body;
this.selector="body";
this.length=1;
return this
}if(typeof A==="string"){if((s=aJ.exec(A))&&(s[1]||!w)){if(s[1]){c=w?w.ownerDocument||w:ap;
if(A=aV.exec(A)){if(az.isPlainObject(w)){A=[ap.createElement(A[1])];
az.fn.attr.call(A,w,true)
}else{A=[c.createElement(A[1])]
}}else{A=bd([s[1]],[c]);
A=(A.cacheable?A.fragment.cloneNode(true):A.fragment).childNodes
}return az.merge(this,A)
}else{if(w=ap.getElementById(s[2])){if(w.id!==s[2]){return a.find(A)
}this.length=1;
this[0]=w
}this.context=ap;
this.selector=A;
return this
}}else{if(!w&&/^\w+$/.test(A)){this.selector=A;
this.context=ap;
A=ap.getElementsByTagName(A);
return az.merge(this,A)
}else{return !w||w.jquery?(w||a).find(A):az(w).find(A)
}}}else{if(az.isFunction(A)){return a.ready(A)
}}if(A.selector!==ax){this.selector=A.selector;
this.context=A.context
}return az.makeArray(A,this)
},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length
},toArray:function(){return aK.call(this,0)
},get:function(c){return c==null?this.toArray():c<0?this.slice(c)[0]:this[c]
},pushStack:function(A,w,s){var c=az();
az.isArray(A)?r.apply(c,A):az.merge(c,A);
c.prevObject=this;
c.context=this.context;
if(w==="find"){c.selector=this.selector+(this.selector?" ":"")+s
}else{if(w){c.selector=this.selector+"."+w+"("+s+")"
}}return c
},each:function(s,c){return az.each(this,s,c)
},ready:function(c){az.bindReady();
if(az.isReady){c.call(ap,az)
}else{aQ&&aQ.push(c)
}return this
},eq:function(c){return c===-1?this.slice(c):this.slice(c,+c+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(aK.apply(this,arguments),"slice",aK.call(arguments).join(","))
},map:function(c){return this.pushStack(az.map(this,function(w,s){return c.call(w,s,w)
}))
},end:function(){return this.prevObject||az(null)
},push:r,sort:[].sort,splice:[].splice};
az.fn.init.prototype=az.fn;
az.extend=az.fn.extend=function(){var s=arguments[0]||{},K=1,w=arguments.length,F=false,A,c,G,J;
if(typeof s==="boolean"){F=s;
s=arguments[1]||{};
K=2
}if(typeof s!=="object"&&!az.isFunction(s)){s={}
}if(w===K){s=this;
--K
}for(;
K<w;
K++){if((A=arguments[K])!=null){for(c in A){G=s[c];
J=A[c];
if(s!==J){if(F&&J&&(az.isPlainObject(J)||az.isArray(J))){G=G&&(az.isPlainObject(G)||az.isArray(G))?G:az.isArray(J)?[]:{};
s[c]=az.extend(F,G,J)
}else{if(J!==ax){s[c]=J
}}}}}}return s
};
az.extend({noConflict:function(c){a9.$=a0;
if(c){a9.jQuery=U
}return az
},isReady:false,ready:function(){if(!az.isReady){if(!ap.body){return setTimeout(az.ready,13)
}az.isReady=true;
if(aQ){for(var s,c=0;
s=aQ[c++];
){s.call(ap,az)
}aQ=null
}az.fn.triggerHandler&&az(ap).triggerHandler("ready")
}},bindReady:function(){if(!y){y=true;
if(ap.readyState==="complete"){return az.ready()
}if(ap.addEventListener){ap.addEventListener("DOMContentLoaded",bh,false);
a9.addEventListener("load",az.ready,false)
}else{if(ap.attachEvent){ap.attachEvent("onreadystatechange",bh);
a9.attachEvent("onload",az.ready);
var s=false;
try{s=a9.frameElement==null
}catch(c){}ap.documentElement.doScroll&&s&&o()
}}}},isFunction:function(c){return z.call(c)==="[object Function]"
},isArray:function(c){return z.call(c)==="[object Array]"
},isPlainObject:function(s){if(!s||z.call(s)!=="[object Object]"||s.nodeType||s.setInterval){return false
}if(s.constructor&&!v.call(s,"constructor")&&!v.call(s.constructor.prototype,"isPrototypeOf")){return false
}var c;
for(c in s){}return c===ax||v.call(s,c)
},isEmptyObject:function(s){for(var c in s){return false
}return true
},error:function(c){throw c
},parseJSON:function(c){if(typeof c!=="string"||!c){return null
}c=az.trim(c);
if(/^[\],:{}\s]*$/.test(c.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return a9.JSON&&a9.JSON.parse?a9.JSON.parse(c):(new Function("return "+c))()
}else{az.error("Invalid JSON: "+c)
}},noop:function(){},globalEval:function(s){if(s&&aA.test(s)){var c=ap.getElementsByTagName("head")[0]||ap.documentElement,w=ap.createElement("script");
w.type="text/javascript";
if(az.support.scriptEval){w.appendChild(ap.createTextNode(s))
}else{w.text=s
}c.insertBefore(w,c.firstChild);
c.removeChild(w)
}},nodeName:function(s,c){return s.nodeName&&s.nodeName.toUpperCase()===c.toUpperCase()
},each:function(s,w,J){var F,A=0,c=s.length,G=c===ax||az.isFunction(s);
if(J){if(G){for(F in s){if(w.apply(s[F],J)===false){break
}}}else{for(;
A<c;
){if(w.apply(s[A++],J)===false){break
}}}}else{if(G){for(F in s){if(w.call(s[F],F,s[F])===false){break
}}}else{for(J=s[0];
A<c&&w.call(J,A,J)!==false;
J=s[++A]){}}}return s
},trim:function(c){return(c||"").replace(n,"")
},makeArray:function(s,c){c=c||[];
if(s!=null){s.length==null||typeof s==="string"||az.isFunction(s)||typeof s!=="function"&&s.setInterval?r.call(c,s):az.merge(c,s)
}return c
},inArray:function(A,w){if(w.indexOf){return w.indexOf(A)
}for(var s=0,c=w.length;
s<c;
s++){if(w[s]===A){return s
}}return -1
},merge:function(s,w){var F=s.length,c=0;
if(typeof w.length==="number"){for(var A=w.length;
c<A;
c++){s[F++]=w[c]
}}else{for(;
w[c]!==ax;
){s[F++]=w[c++]
}}s.length=F;
return s
},grep:function(s,w,A){for(var F=[],G=0,c=s.length;
G<c;
G++){!A!==!w(s[G],G)&&F.push(s[G])
}return F
},map:function(s,w,J){for(var F=[],A,c=0,G=s.length;
c<G;
c++){A=w(s[c],c,J);
if(A!=null){F[F.length]=A
}}return F.concat.apply([],F)
},guid:1,proxy:function(s,c,w){if(arguments.length===2){if(typeof c==="string"){w=s;
s=w[c];
c=ax
}else{if(c&&!az.isFunction(c)){w=c;
c=ax
}}}if(!c&&s){c=function(){return s.apply(w||this,arguments)
}
}if(s){c.guid=s.guid=s.guid||c.guid||az.guid++
}return c
},uaMatch:function(c){c=c.toLowerCase();
c=/(webkit)[ \/]([\w.]+)/.exec(c)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(c)||/(msie) ([\w.]+)/.exec(c)||!/compatible/.test(c)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(c)||[];
return{browser:c[1]||"",version:c[2]||"0"}
},browser:{}});
ah=az.uaMatch(ah);
if(ah.browser){az.browser[ah.browser]=true;
az.browser.version=ah.version
}if(az.browser.webkit){az.browser.safari=true
}if(aI){az.inArray=function(s,c){return aI.call(c,s)
}
}a=az(ap);
if(ap.addEventListener){bh=function(){ap.removeEventListener("DOMContentLoaded",bh,false);
az.ready()
}
}else{if(ap.attachEvent){bh=function(){if(ap.readyState==="complete"){ap.detachEvent("onreadystatechange",bh);
az.ready()
}}
}}(function(){az.support={};
var L=ap.documentElement,K=ap.createElement("script"),J=ap.createElement("div"),F="script"+bj();
J.style.display="none";
J.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var G=J.getElementsByTagName("*"),s=J.getElementsByTagName("a")[0];
if(!(!G||!G.length||!s)){az.support={leadingWhitespace:J.firstChild.nodeType===3,tbody:!J.getElementsByTagName("tbody").length,htmlSerialize:!!J.getElementsByTagName("link").length,style:/red/.test(s.getAttribute("style")),hrefNormalized:s.getAttribute("href")==="/a",opacity:/^0.55$/.test(s.style.opacity),cssFloat:!!s.style.cssFloat,checkOn:J.getElementsByTagName("input")[0].value==="on",optSelected:ap.createElement("select").appendChild(ap.createElement("option")).selected,parentNode:J.removeChild(J.appendChild(ap.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};
K.type="text/javascript";
try{K.appendChild(ap.createTextNode("window."+F+"=1;"))
}catch(A){}L.insertBefore(K,L.firstChild);
if(a9[F]){az.support.scriptEval=true;
delete a9[F]
}try{delete K.test
}catch(c){az.support.deleteExpando=false
}L.removeChild(K);
if(J.attachEvent&&J.fireEvent){J.attachEvent("onclick",function w(){az.support.noCloneEvent=false;
J.detachEvent("onclick",w)
});
J.cloneNode(true).fireEvent("onclick")
}J=ap.createElement("div");
J.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";
L=ap.createDocumentFragment();
L.appendChild(J.firstChild);
az.support.checkClone=L.cloneNode(true).cloneNode(true).lastChild.checked;
az(function(){var N=ap.createElement("div");
N.style.width=N.style.paddingLeft="1px";
ap.body.appendChild(N);
az.boxModel=az.support.boxModel=N.offsetWidth===2;
ap.body.removeChild(N).style.display="none"
});
L=function(N){var P=ap.createElement("div");
N="on"+N;
var O=N in P;
if(!O){P.setAttribute(N,"return;");
O=typeof P[N]==="function"
}return O
};
az.support.submitBubbles=L("submit");
az.support.changeBubbles=L("change");
L=K=J=G=s=null
}})();
az.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};
var ai="jQuery"+bj(),ad=0,h={};
az.extend({cache:{},expando:ai,noData:{embed:true,object:true,applet:true},data:function(s,w,F){if(!(s.nodeName&&az.noData[s.nodeName.toLowerCase()])){s=s==a9?h:s;
var c=s[ai],A=az.cache;
if(!c&&typeof w==="string"&&F===ax){return null
}c||(c=++ad);
if(typeof w==="object"){s[ai]=c;
A[c]=az.extend(true,{},w)
}else{if(!A[c]){s[ai]=c;
A[c]={}
}}s=A[c];
if(F!==ax){s[w]=F
}return typeof w==="string"?s[w]:s
}},removeData:function(s,w){if(!(s.nodeName&&az.noData[s.nodeName.toLowerCase()])){s=s==a9?h:s;
var F=s[ai],c=az.cache,A=c[F];
if(w){if(A){delete A[w];
az.isEmptyObject(A)&&az.removeData(s)
}}else{if(az.support.deleteExpando){delete s[az.expando]
}else{s.removeAttribute&&s.removeAttribute(az.expando)
}delete c[F]
}}}});
az.fn.extend({data:function(A,w){if(typeof A==="undefined"&&this.length){return az.data(this[0])
}else{if(typeof A==="object"){return this.each(function(){az.data(this,A)
})
}}var s=A.split(".");
s[1]=s[1]?"."+s[1]:"";
if(w===ax){var c=this.triggerHandler("getData"+s[1]+"!",[s[0]]);
if(c===ax&&this.length){c=az.data(this[0],A)
}return c===ax&&s[1]?this.data(s[0]):c
}else{return this.trigger("setData"+s[1]+"!",[s[0],w]).each(function(){az.data(this,A,w)
})
}},removeData:function(c){return this.each(function(){az.removeData(this,c)
})
}});
az.extend({queue:function(A,w,s){if(A){w=(w||"fx")+"queue";
var c=az.data(A,w);
if(!s){return c||[]
}if(!c||az.isArray(s)){c=az.data(A,w,az.makeArray(s))
}else{c.push(s)
}return c
}},dequeue:function(A,w){w=w||"fx";
var s=az.queue(A,w),c=s.shift();
if(c==="inprogress"){c=s.shift()
}if(c){w==="fx"&&s.unshift("inprogress");
c.call(A,function(){az.dequeue(A,w)
})
}}});
az.fn.extend({queue:function(s,c){if(typeof s!=="string"){c=s;
s="fx"
}if(c===ax){return az.queue(this[0],s)
}return this.each(function(){var w=az.queue(this,s,c);
s==="fx"&&w[0]!=="inprogress"&&az.dequeue(this,s)
})
},dequeue:function(c){return this.each(function(){az.dequeue(this,c)
})
},delay:function(s,c){s=az.fx?az.fx.speeds[s]||s:s;
c=c||"fx";
return this.queue(c,function(){var w=this;
setTimeout(function(){az.dequeue(w,c)
},s)
})
},clearQueue:function(c){return this.queue(c||"fx",[])
}});
var aq=/[\n\t]/g,aj=/\s+/,aM=/\r/g,b=/href|src|style/,p=/(button|input)/i,ae=/(button|input|object|select|textarea)/i,a8=/^(a|area)$/i,aR=/radio|checkbox/;
az.fn.extend({attr:function(s,c){return aH(this,s,c,true,az.attr)
},removeAttr:function(c){return this.each(function(){az.attr(this,c,"");
this.nodeType===1&&this.removeAttribute(c)
})
},addClass:function(L){if(az.isFunction(L)){return this.each(function(O){var N=az(this);
N.addClass(L.call(this,O,N.attr("class")))
})
}if(L&&typeof L==="string"){for(var K=(L||"").split(aj),J=0,F=this.length;
J<F;
J++){var G=this[J];
if(G.nodeType===1){if(G.className){for(var s=" "+G.className+" ",A=G.className,c=0,w=K.length;
c<w;
c++){if(s.indexOf(" "+K[c]+" ")<0){A+=" "+K[c]
}}G.className=az.trim(A)
}else{G.className=L
}}}}return this
},removeClass:function(s){if(az.isFunction(s)){return this.each(function(N){var L=az(this);
L.removeClass(s.call(this,N,L.attr("class")))
})
}if(s&&typeof s==="string"||s===ax){for(var K=(s||"").split(aj),w=0,F=this.length;
w<F;
w++){var A=this[w];
if(A.nodeType===1&&A.className){if(s){for(var c=(" "+A.className+" ").replace(aq," "),G=0,J=K.length;
G<J;
G++){c=c.replace(" "+K[G]+" "," ")
}A.className=az.trim(c)
}else{A.className=""
}}}}return this
},toggleClass:function(A,w){var s=typeof A,c=typeof w==="boolean";
if(az.isFunction(A)){return this.each(function(G){var F=az(this);
F.toggleClass(A.call(this,G,F.attr("class"),w),w)
})
}return this.each(function(){if(s==="string"){for(var K,G=0,J=az(this),L=w,F=A.split(aj);
K=F[G++];
){L=c?L:!J.hasClass(K);
J[L?"addClass":"removeClass"](K)
}}else{if(s==="undefined"||s==="boolean"){this.className&&az.data(this,"__className__",this.className);
this.className=this.className||A===false?"":az.data(this,"__className__")||""
}}})
},hasClass:function(s){s=" "+s+" ";
for(var c=0,w=this.length;
c<w;
c++){if((" "+this[c].className+" ").replace(aq," ").indexOf(s)>-1){return true
}}return false
},val:function(s){if(s===ax){var K=this[0];
if(K){if(az.nodeName(K,"option")){return(K.attributes.value||{}).specified?K.value:K.text
}if(az.nodeName(K,"select")){var w=K.selectedIndex,F=[],A=K.options;
K=K.type==="select-one";
if(w<0){return null
}var c=K?w:0;
for(w=K?w+1:A.length;
c<w;
c++){var G=A[c];
if(G.selected){s=az(G).val();
if(K){return s
}F.push(s)
}}return F
}if(aR.test(K.type)&&!az.support.checkOn){return K.getAttribute("value")===null?"on":K.value
}return(K.value||"").replace(aM,"")
}return ax
}var J=az.isFunction(s);
return this.each(function(P){var O=az(this),N=s;
if(this.nodeType===1){if(J){N=s.call(this,P,O.val())
}if(typeof N==="number"){N+=""
}if(az.isArray(N)&&aR.test(this.type)){this.checked=az.inArray(O.val(),N)>=0
}else{if(az.nodeName(this,"select")){var L=az.makeArray(N);
az("option",this).each(function(){this.selected=az.inArray(az(this).val(),L)>=0
});
if(!L.length){this.selectedIndex=-1
}}else{this.value=N
}}}})
}});
az.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(s,w,A,F){if(!s||s.nodeType===3||s.nodeType===8){return ax
}if(F&&w in az.attrFn){return az(s)[w](A)
}F=s.nodeType!==1||!az.isXMLDoc(s);
var G=A!==ax;
w=F&&az.props[w]||w;
if(s.nodeType===1){var c=b.test(w);
if(w in s&&F&&!c){if(G){w==="type"&&p.test(s.nodeName)&&s.parentNode&&az.error("type property can't be changed");
s[w]=A
}if(az.nodeName(s,"form")&&s.getAttributeNode(w)){return s.getAttributeNode(w).nodeValue
}if(w==="tabIndex"){return(w=s.getAttributeNode("tabIndex"))&&w.specified?w.value:ae.test(s.nodeName)||a8.test(s.nodeName)&&s.href?0:ax
}return s[w]
}if(!az.support.style&&F&&w==="style"){if(G){s.style.cssText=""+A
}return s.style.cssText
}G&&s.setAttribute(w,""+A);
s=!az.support.hrefNormalized&&F&&c?s.getAttribute(w,2):s.getAttribute(w);
return s===null?ax:s
}return az.style(s,w,A)
}});
var aU=/\.(.*)$/,an=function(c){return c.replace(/[^\w\s\.\|`]/g,function(s){return"\\"+s
})
};
az.event={add:function(G,s,K,P){if(!(G.nodeType===3||G.nodeType===8)){if(G.setInterval&&G!==a9&&!G.frameElement){G=a9
}var J,O;
if(K.handler){J=K;
K=J.handler
}if(!K.guid){K.guid=az.guid++
}if(O=az.data(G)){var F=O.events=O.events||{},c=O.handle;
if(!c){O.handle=c=function(){return typeof az!=="undefined"&&!az.event.triggered?az.event.handle.apply(c.elem,arguments):ax
}
}c.elem=G;
s=s.split(" ");
for(var A,w=0,L;
A=s[w++];
){O=J?az.extend({},J):{handler:K,data:P};
if(A.indexOf(".")>-1){L=A.split(".");
A=L.shift();
O.namespace=L.slice(0).sort().join(".")
}else{L=[];
O.namespace=""
}O.type=A;
O.guid=K.guid;
var Q=F[A],N=az.event.special[A]||{};
if(!Q){Q=F[A]=[];
if(!N.setup||N.setup.call(G,P,L,c)===false){if(G.addEventListener){G.addEventListener(A,c,false)
}else{G.attachEvent&&G.attachEvent("on"+A,c)
}}}if(N.add){N.add.call(G,O);
if(!O.handler.guid){O.handler.guid=K.guid
}}Q.push(O);
az.event.global[A]=true
}G=null
}}},global:{},remove:function(c,J,s,T){if(!(c.nodeType===3||c.nodeType===8)){var A,G=0,N,F,L,Q,O,w,R=az.data(c),P=R&&R.events;
if(R&&P){if(J&&J.type){s=J.handler;
J=J.type
}if(!J||typeof J==="string"&&J.charAt(0)==="."){J=J||"";
for(A in P){az.event.remove(c,A+J)
}}else{for(J=J.split(" ");
A=J[G++];
){Q=A;
N=A.indexOf(".")<0;
F=[];
if(!N){F=A.split(".");
A=F.shift();
L=new RegExp("(^|\\.)"+az.map(F.slice(0).sort(),an).join("\\.(?:.*\\.)?")+"(\\.|$)")
}if(O=P[A]){if(s){Q=az.event.special[A]||{};
for(K=T||0;
K<O.length;
K++){w=O[K];
if(s.guid===w.guid){if(N||L.test(w.namespace)){T==null&&O.splice(K--,1);
Q.remove&&Q.remove.call(c,w)
}if(T!=null){break
}}}if(O.length===0||T!=null&&O.length===1){if(!Q.teardown||Q.teardown.call(c,F)===false){E(c,A,R.handle)
}delete P[A]
}}else{for(var K=0;
K<O.length;
K++){w=O[K];
if(N||L.test(w.namespace)){az.event.remove(c,Q,w.handler,K);
O.splice(K--,1)
}}}}}if(az.isEmptyObject(P)){if(J=R.handle){J.elem=null
}delete R.events;
delete R.handle;
az.isEmptyObject(R)&&az.removeData(c)
}}}}},trigger:function(A,N,c,K){var F=A.type||A;
if(!K){A=typeof A==="object"?A[ai]?A:az.extend(az.Event(F),A):az.Event(F);
if(F.indexOf("!")>=0){A.type=F=F.slice(0,-1);
A.exclusive=true
}if(!c){A.stopPropagation();
az.event.global[F]&&az.each(az.cache,function(){this.events&&this.events[F]&&az.event.trigger(A,N,this.handle.elem)
})
}if(!c||c.nodeType===3||c.nodeType===8){return ax
}A.result=ax;
A.target=c;
N=az.makeArray(N);
N.unshift(A)
}A.currentTarget=c;
(K=az.data(c,"handle"))&&K.apply(c,N);
K=c.parentNode||c.ownerDocument;
try{if(!(c&&c.nodeName&&az.noData[c.nodeName.toLowerCase()])){if(c["on"+F]&&c["on"+F].apply(c,N)===false){A.result=false
}}}catch(w){}if(!A.isPropagationStopped()&&K){az.event.trigger(A,N,K,true)
}else{if(!A.isDefaultPrevented()){K=A.target;
var J,s=az.nodeName(K,"a")&&F==="click",L=az.event.special[F]||{};
if((!L._default||L._default.call(c,A)===false)&&!s&&!(K&&K.nodeName&&az.noData[K.nodeName.toLowerCase()])){try{if(K[F]){if(J=K["on"+F]){K["on"+F]=null
}az.event.triggered=true;
K[F]()
}}catch(G){}if(J){K["on"+F]=J
}az.event.triggered=false
}}}},handle:function(s){var w,J,F,A;
s=arguments[0]=az.event.fix(s||a9.event);
s.currentTarget=this;
w=s.type.indexOf(".")<0&&!s.exclusive;
if(!w){J=s.type.split(".");
s.type=J.shift();
F=new RegExp("(^|\\.)"+J.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")
}A=az.data(this,"events");
J=A[s.type];
if(A&&J){J=J.slice(0);
A=0;
for(var c=J.length;
A<c;
A++){var G=J[A];
if(w||F.test(G.namespace)){s.handler=G.handler;
s.data=G.data;
s.handleObj=G;
G=G.handler.apply(this,arguments);
if(G!==ax){s.result=G;
if(G===false){s.preventDefault();
s.stopPropagation()
}}if(s.isImmediatePropagationStopped()){break
}}}}return s.result
},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(A){if(A[ai]){return A
}var w=A;
A=az.Event(w);
for(var s=this.props.length,c;
s;
){c=this.props[--s];
A[c]=w[c]
}if(!A.target){A.target=A.srcElement||ap
}if(A.target.nodeType===3){A.target=A.target.parentNode
}if(!A.relatedTarget&&A.fromElement){A.relatedTarget=A.fromElement===A.target?A.toElement:A.fromElement
}if(A.pageX==null&&A.clientX!=null){w=ap.documentElement;
s=ap.body;
A.pageX=A.clientX+(w&&w.scrollLeft||s&&s.scrollLeft||0)-(w&&w.clientLeft||s&&s.clientLeft||0);
A.pageY=A.clientY+(w&&w.scrollTop||s&&s.scrollTop||0)-(w&&w.clientTop||s&&s.clientTop||0)
}if(!A.which&&(A.charCode||A.charCode===0?A.charCode:A.keyCode)){A.which=A.charCode||A.keyCode
}if(!A.metaKey&&A.ctrlKey){A.metaKey=A.ctrlKey
}if(!A.which&&A.button!==ax){A.which=A.button&1?1:A.button&2?3:A.button&4?2:0
}return A
},guid:100000000,proxy:az.proxy,special:{ready:{setup:az.bindReady,teardown:az.noop},live:{add:function(c){az.event.add(this,c.origType,az.extend({},c,{handler:aW}))
},remove:function(s){var c=true,w=s.origType.replace(aU,"");
az.each(az.data(this,"events").live||[],function(){if(w===this.origType.replace(aU,"")){return c=false
}});
c&&az.event.remove(this,s.origType,aW)
}},beforeunload:{setup:function(s,c,w){if(this.setInterval){this.onbeforeunload=w
}return false
},teardown:function(s,c){if(this.onbeforeunload===c){this.onbeforeunload=null
}}}}};
var E=ap.removeEventListener?function(s,c,w){s.removeEventListener(c,w,false)
}:function(s,c,w){s.detachEvent("on"+c,w)
};
az.Event=function(c){if(!this.preventDefault){return new az.Event(c)
}if(c&&c.type){this.originalEvent=c;
this.type=c.type
}else{this.type=c
}this.timeStamp=bj();
this[ai]=true
};
az.Event.prototype={preventDefault:function(){this.isDefaultPrevented=a6;
var c=this.originalEvent;
if(c){c.preventDefault&&c.preventDefault();
c.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=a6;
var c=this.originalEvent;
if(c){c.stopPropagation&&c.stopPropagation();
c.cancelBubble=true
}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=a6;
this.stopPropagation()
},isDefaultPrevented:aE,isPropagationStopped:aE,isImmediatePropagationStopped:aE};
var ar=function(s){var c=s.relatedTarget;
try{for(;
c&&c!==this;
){c=c.parentNode
}if(c!==this){s.type=s.data;
az.event.handle.apply(this,arguments)
}}catch(w){}},H=function(c){c.type=c.data;
az.event.handle.apply(this,arguments)
};
az.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(s,c){az.event.special[s]={setup:function(w){az.event.add(this,c,w&&w.selector?H:ar,s)
},teardown:function(w){az.event.remove(this,c,w&&w.selector?H:ar)
}}
});
if(!az.support.submitBubbles){az.event.special.submit={setup:function(){if(this.nodeName.toLowerCase()!=="form"){az.event.add(this,"click.specialSubmit",function(s){var c=s.target,w=c.type;
if((w==="submit"||w==="image")&&az(c).closest("form").length){return M("submit",this,arguments)
}});
az.event.add(this,"keypress.specialSubmit",function(s){var c=s.target,w=c.type;
if((w==="text"||w==="password")&&az(c).closest("form").length&&s.keyCode===13){return M("submit",this,arguments)
}})
}else{return false
}},teardown:function(){az.event.remove(this,".specialSubmit")
}}
}if(!az.support.changeBubbles){var a3=/textarea|input|select/i,aZ,C=function(s){var c=s.type,w=s.value;
if(c==="radio"||c==="checkbox"){w=s.checked
}else{if(c==="select-multiple"){w=s.selectedIndex>-1?az.map(s.options,function(A){return A.selected
}).join("-"):""
}else{if(s.nodeName.toLowerCase()==="select"){w=s.selectedIndex
}}}return w
},j=function(s,w){var F=s.target,c,A;
if(!(!a3.test(F.nodeName)||F.readOnly)){c=az.data(F,"_change_data");
A=C(F);
if(s.type!=="focusout"||F.type!=="radio"){az.data(F,"_change_data",A)
}if(!(c===ax||A===c)){if(c!=null||A){s.type="change";
return az.event.trigger(s,w,F)
}}}};
az.event.special.change={filters:{focusout:j,click:function(s){var c=s.target,w=c.type;
if(w==="radio"||w==="checkbox"||c.nodeName.toLowerCase()==="select"){return j.call(this,s)
}},keydown:function(s){var c=s.target,w=c.type;
if(s.keyCode===13&&c.nodeName.toLowerCase()!=="textarea"||s.keyCode===32&&(w==="checkbox"||w==="radio")||w==="select-multiple"){return j.call(this,s)
}},beforeactivate:function(c){c=c.target;
az.data(c,"_change_data",C(c))
}},setup:function(){if(this.type==="file"){return false
}for(var c in aZ){az.event.add(this,c+".specialChange",aZ[c])
}return a3.test(this.nodeName)
},teardown:function(){az.event.remove(this,".specialChange");
return a3.test(this.nodeName)
}};
aZ=az.event.special.change.filters
}ap.addEventListener&&az.each({focus:"focusin",blur:"focusout"},function(s,c){function w(A){A=az.event.fix(A);
A.type=c;
return az.event.handle.call(this,A)
}az.event.special[c]={setup:function(){this.addEventListener(s,w,true)
},teardown:function(){this.removeEventListener(s,w,true)
}}
});
az.each(["bind","one"],function(s,c){az.fn[c]=function(K,A,G){if(typeof K==="object"){for(var w in K){this[c](w,A,K[w],G)
}return this
}if(az.isFunction(A)){G=A;
A=ax
}var F=c==="one"?az.proxy(G,function(L){az(this).unbind(L,F);
return G.apply(this,arguments)
}):G;
if(K==="unload"&&c!=="one"){this.one(K,A,G)
}else{w=0;
for(var J=this.length;
w<J;
w++){az.event.add(this[w],K,F,A)
}}return this
}
});
az.fn.extend({unbind:function(A,w){if(typeof A==="object"&&!A.preventDefault){for(var s in A){this.unbind(s,A[s])
}}else{s=0;
for(var c=this.length;
s<c;
s++){az.event.remove(this[s],A,w)
}}return this
},delegate:function(A,w,s,c){return this.live(w,s,c,A)
},undelegate:function(s,c,w){return arguments.length===0?this.unbind("live"):this.die(c,null,w,s)
},trigger:function(s,c){return this.each(function(){az.event.trigger(s,c,this)
})
},triggerHandler:function(s,c){if(this[0]){s=az.Event(s);
s.preventDefault();
s.stopPropagation();
az.event.trigger(s,c,this[0]);
return s.result
}},toggle:function(s){for(var c=arguments,w=1;
w<c.length;
){az.proxy(s,c[w++])
}return this.click(az.proxy(s,function(F){var A=(az.data(this,"lastToggle"+s.guid)||0)%w;
az.data(this,"lastToggle"+s.guid,A+1);
F.preventDefault();
return c[A].apply(this,arguments)||false
}))
},hover:function(s,c){return this.mouseenter(s).mouseleave(c||s)
}});
var aF={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};
az.each(["live","die"],function(s,c){az.fn[c]=function(N,K,L,G){var J,P=0,A,w,F=G||this.selector,O=G?this:az(this.context);
if(az.isFunction(K)){L=K;
K=ax
}for(N=(N||"").split(" ");
(J=N[P++])!=null;
){G=aU.exec(J);
A="";
if(G){A=G[0];
J=J.replace(aU,"")
}if(J==="hover"){N.push("mouseenter"+A,"mouseleave"+A)
}else{w=J;
if(J==="focus"||J==="blur"){N.push(aF[J]+A);
J+=A
}else{J=(aF[J]||J)+A
}c==="live"?O.each(function(){az.event.add(this,aT(J,F),{data:K,selector:F,handler:L,origType:J,origHandler:L,preType:w})
}):O.unbind(aT(J,F),L)
}}return this
}
});
az.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(s,c){az.fn[c]=function(w){return w?this.bind(c,w):this.trigger(c)
};
if(az.attrFn){az.attrFn[c]=true
}});
a9.attachEvent&&!a9.addEventListener&&a9.attachEvent("onunload",function(){for(var s in az.cache){if(az.cache[s].handle){try{az.event.remove(az.cache[s].handle.elem)
}catch(c){}}}});
(function(){function W(ab){for(var aa="",Y,Z=0;
ab[Z];
Z++){Y=ab[Z];
if(Y.nodeType===3||Y.nodeType===4){aa+=Y.nodeValue
}else{if(Y.nodeType!==8){aa+=W(Y.childNodes)
}}}return aa
}function V(bb,ba,ab,aa,Y,Z){Y=0;
for(var bl=aa.length;
Y<bl;
Y++){var bn=aa[Y];
if(bn){bn=bn[bb];
for(var bm=false;
bn;
){if(bn.sizcache===ab){bm=aa[bn.sizset];
break
}if(bn.nodeType===1&&!Z){bn.sizcache=ab;
bn.sizset=Y
}if(bn.nodeName.toLowerCase()===ba){bm=bn;
break
}bn=bn[bb]
}aa[Y]=bm
}}}function T(bb,ba,ab,aa,Y,Z){Y=0;
for(var bl=aa.length;
Y<bl;
Y++){var bn=aa[Y];
if(bn){bn=bn[bb];
for(var bm=false;
bn;
){if(bn.sizcache===ab){bm=aa[bn.sizset];
break
}if(bn.nodeType===1){if(!Z){bn.sizcache=ab;
bn.sizset=Y
}if(typeof ba!=="string"){if(bn===ba){bm=true;
break
}}else{if(N.filter(ba,[bn]).length>0){bm=bn;
break
}}}bn=bn[bb]
}aa[Y]=bm
}}}var Q=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,R=0,O=Object.prototype.toString,P=false,K=true;
[0,0].sort(function(){K=false;
return 0
});
var N=function(Z,ba,bp,ab){bp=bp||[];
var bm=ba=ba||ap;
if(ba.nodeType!==1&&ba.nodeType!==9){return[]
}if(!Z||typeof Z!=="string"){return bp
}for(var bq=[],aa,bo,bn,bs,br=true,bb=A(ba),Y=Z;
(Q.exec(""),aa=Q.exec(Y))!==null;
){Y=aa[3];
bq.push(aa[1]);
if(aa[2]){bs=aa[3];
break
}}if(bq.length>1&&w.exec(Z)){if(bq.length===2&&L.relative[bq[0]]){bo=X(bq[0]+bq[1],ba)
}else{for(bo=L.relative[bq[0]]?[ba]:N(bq.shift(),ba);
bq.length;
){Z=bq.shift();
if(L.relative[Z]){Z+=bq.shift()
}bo=X(Z,bo)
}}}else{if(!ab&&bq.length>1&&ba.nodeType===9&&!bb&&L.match.ID.test(bq[0])&&!L.match.ID.test(bq[bq.length-1])){aa=N.find(bq.shift(),ba,bb);
ba=aa.expr?N.filter(aa.expr,aa.set)[0]:aa.set[0]
}if(ba){aa=ab?{expr:bq.pop(),set:c(ab)}:N.find(bq.pop(),bq.length===1&&(bq[0]==="~"||bq[0]==="+")&&ba.parentNode?ba.parentNode:ba,bb);
bo=aa.expr?N.filter(aa.expr,aa.set):aa.set;
if(bq.length>0){bn=c(bo)
}else{br=false
}for(;
bq.length;
){var bl=bq.pop();
aa=bl;
if(L.relative[bl]){aa=bq.pop()
}else{bl=""
}if(aa==null){aa=ba
}L.relative[bl](bn,aa,bb)
}}else{bn=[]
}}bn||(bn=bo);
bn||N.error(bl||Z);
if(O.call(bn)==="[object Array]"){if(br){if(ba&&ba.nodeType===1){for(Z=0;
bn[Z]!=null;
Z++){if(bn[Z]&&(bn[Z]===true||bn[Z].nodeType===1&&F(ba,bn[Z]))){bp.push(bo[Z])
}}}else{for(Z=0;
bn[Z]!=null;
Z++){bn[Z]&&bn[Z].nodeType===1&&bp.push(bo[Z])
}}}else{bp.push.apply(bp,bn)
}}else{c(bn,bp)
}if(bs){N(bs,bm,bp,ab);
N.uniqueSort(bp)
}return bp
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
}for(var Z=0,bl=L.order.length;
Z<bl;
Z++){var bn=L.order[Z];
if(Y=L.leftMatch[bn].exec(bb)){var bm=Y[1];
Y.splice(1,1);
if(bm.substr(bm.length-1)!=="\\"){Y[1]=(Y[1]||"").replace(/\\/g,"");
aa=L.find[bn](Y,ba,ab);
if(aa!=null){bb=bb.replace(L.match[bn],"");
break
}}}}aa||(aa=ba.getElementsByTagName("*"));
return{set:aa,expr:bb}
};
N.filter=function(bp,bu,bm,ba){for(var bs=bp,bb=[],Z=bu,bq,bt,bo=bu&&bu[0]&&A(bu[0]);
bp&&bu.length;
){for(var bn in L.filter){if((bq=L.leftMatch[bn].exec(bp))!=null&&bq[2]){var br=L.filter[bn],ab,aa;
aa=bq[1];
bt=false;
bq.splice(1,1);
if(aa.substr(aa.length-1)!=="\\"){if(Z===bb){bb=[]
}if(L.preFilter[bn]){if(bq=L.preFilter[bn](bq,Z,bm,bb,ba,bo)){if(bq===true){continue
}}else{bt=ab=true
}}if(bq){for(var bl=0;
(aa=Z[bl])!=null;
bl++){if(aa){ab=br(aa,bq,bl,Z);
var Y=ba^!!ab;
if(bm&&ab!=null){if(Y){bt=true
}else{Z[bl]=false
}}else{if(Y){bb.push(aa);
bt=true
}}}}}if(ab!==ax){bm||(Z=bb);
bp=bp.replace(L.match[bn],"");
if(!bt){return[]
}break
}}}}if(bp===bs){if(bt==null){N.error(bp)
}else{break
}}bs=bp
}return Z
};
N.error=function(Y){throw"Syntax error, unrecognized expression: "+Y
};
var L=N.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(Y){return Y.getAttribute("href")
}},relative:{"+":function(ab,aa){var Y=typeof aa==="string",Z=Y&&!/\W/.test(aa);
Y=Y&&!Z;
if(Z){aa=aa.toLowerCase()
}Z=0;
for(var bb=ab.length,ba;
Z<bb;
Z++){if(ba=ab[Z]){for(;
(ba=ba.previousSibling)&&ba.nodeType!==1;
){}ab[Z]=Y||ba&&ba.nodeName.toLowerCase()===aa?ba||false:ba===aa
}}Y&&N.filter(aa,ab,true)
},">":function(ab,aa){var Y=typeof aa==="string";
if(Y&&!/\W/.test(aa)){aa=aa.toLowerCase();
for(var Z=0,bb=ab.length;
Z<bb;
Z++){var ba=ab[Z];
if(ba){Y=ba.parentNode;
ab[Z]=Y.nodeName.toLowerCase()===aa?Y:false
}}}else{Z=0;
for(bb=ab.length;
Z<bb;
Z++){if(ba=ab[Z]){ab[Z]=Y?ba.parentNode:ba.parentNode===aa
}}Y&&N.filter(aa,ab,true)
}},"":function(ab,aa,Y){var Z=R++,bb=T;
if(typeof aa==="string"&&!/\W/.test(aa)){var ba=aa=aa.toLowerCase();
bb=V
}bb("parentNode",aa,Z,ab,ba,Y)
},"~":function(ab,aa,Y){var Z=R++,bb=T;
if(typeof aa==="string"&&!/\W/.test(aa)){var ba=aa=aa.toLowerCase();
bb=V
}bb("previousSibling",aa,Z,ab,ba,Y)
}},find:{ID:function(Z,aa,Y){if(typeof aa.getElementById!=="undefined"&&!Y){return(Z=aa.getElementById(Z[1]))?[Z]:[]
}},NAME:function(aa,Y){if(typeof Y.getElementsByName!=="undefined"){var ab=[];
Y=Y.getElementsByName(aa[1]);
for(var ba=0,Z=Y.length;
ba<Z;
ba++){Y[ba].getAttribute("name")===aa[1]&&ab.push(Y[ba])
}return ab.length===0?null:ab
}},TAG:function(Z,Y){return Y.getElementsByTagName(Z[1])
}},preFilter:{CLASS:function(ba,ab,aa,Y,bl,bb){ba=" "+ba[1].replace(/\\/g,"")+" ";
if(bb){return ba
}bb=0;
for(var Z;
(Z=ab[bb])!=null;
bb++){if(Z){if(bl^(Z.className&&(" "+Z.className+" ").replace(/[\t\n]/g," ").indexOf(ba)>=0)){aa||Y.push(Z)
}else{if(aa){ab[bb]=false
}}}}return false
},ID:function(Y){return Y[1].replace(/\\/g,"")
},TAG:function(Y){return Y[1].toLowerCase()
},CHILD:function(Z){if(Z[1]==="nth"){var Y=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(Z[2]==="even"&&"2n"||Z[2]==="odd"&&"2n+1"||!/\D/.test(Z[2])&&"0n+"+Z[2]||Z[2]);
Z[2]=Y[1]+(Y[2]||1)-0;
Z[3]=Y[3]-0
}Z[0]=R++;
return Z
},ATTR:function(ab,aa,Y,Z,bb,ba){aa=ab[1].replace(/\\/g,"");
if(!ba&&L.attrMap[aa]){ab[1]=L.attrMap[aa]
}if(ab[2]==="~="){ab[4]=" "+ab[4]+" "
}return ab
},PSEUDO:function(aa,Y,ab,ba,Z){if(aa[1]==="not"){if((Q.exec(aa[3])||"").length>1||/^\w/.test(aa[3])){aa[3]=N(aa[3],null,null,Y)
}else{aa=N.filter(aa[3],Y,ab,true^Z);
ab||ba.push.apply(ba,aa);
return false
}}else{if(L.match.POS.test(aa[0])||L.match.CHILD.test(aa[0])){return true
}}return aa
},POS:function(Y){Y.unshift(true);
return Y
}},filters:{enabled:function(Y){return Y.disabled===false&&Y.type!=="hidden"
},disabled:function(Y){return Y.disabled===true
},checked:function(Y){return Y.checked===true
},selected:function(Y){return Y.selected===true
},parent:function(Y){return !!Y.firstChild
},empty:function(Y){return !Y.firstChild
},has:function(Z,aa,Y){return !!N(Y[3],Z).length
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
},last:function(ab,aa,Y,Z){return aa===Z.length-1
},even:function(Z,Y){return Y%2===0
},odd:function(Z,Y){return Y%2===1
},lt:function(Z,aa,Y){return aa<Y[3]-0
},gt:function(Z,aa,Y){return aa>Y[3]-0
},nth:function(Z,aa,Y){return Y[3]-0===aa
},eq:function(Z,aa,Y){return Y[3]-0===aa
}},filter:{PSEUDO:function(ab,aa,Y,Z){var bb=aa[1],ba=L.filters[bb];
if(ba){return ba(ab,Y,aa,Z)
}else{if(bb==="contains"){return(ab.textContent||ab.innerText||W([ab])||"").indexOf(aa[3])>=0
}else{if(bb==="not"){aa=aa[3];
Y=0;
for(Z=aa.length;
Y<Z;
Y++){if(aa[Y]===ab){return false
}}return true
}else{N.error("Syntax error, unrecognized expression: "+bb)
}}}},CHILD:function(ba,ab){var aa=ab[1],Y=ba;
switch(aa){case"only":case"first":for(;
Y=Y.previousSibling;
){if(Y.nodeType===1){return false
}}if(aa==="first"){return true
}Y=ba;
case"last":for(;
Y=Y.nextSibling;
){if(Y.nodeType===1){return false
}}return true;
case"nth":aa=ab[2];
var bl=ab[3];
if(aa===1&&bl===0){return true
}ab=ab[0];
var bb=ba.parentNode;
if(bb&&(bb.sizcache!==ab||!ba.nodeIndex)){var Z=0;
for(Y=bb.firstChild;
Y;
Y=Y.nextSibling){if(Y.nodeType===1){Y.nodeIndex=++Z
}}bb.sizcache=ab
}ba=ba.nodeIndex-bl;
return aa===0?ba===0:ba%aa===0&&ba/aa>=0
}},ID:function(Z,Y){return Z.nodeType===1&&Z.getAttribute("id")===Y
},TAG:function(Z,Y){return Y==="*"&&Z.nodeType===1||Z.nodeName.toLowerCase()===Y
},CLASS:function(Z,Y){return(" "+(Z.className||Z.getAttribute("class"))+" ").indexOf(Y)>-1
},ATTR:function(ab,aa){var Y=aa[1];
ab=L.attrHandle[Y]?L.attrHandle[Y](ab):ab[Y]!=null?ab[Y]:ab.getAttribute(Y);
Y=ab+"";
var Z=aa[2];
aa=aa[4];
return ab==null?Z==="!=":Z==="="?Y===aa:Z==="*="?Y.indexOf(aa)>=0:Z==="~="?(" "+Y+" ").indexOf(aa)>=0:!aa?Y&&ab!==false:Z==="!="?Y!==aa:Z==="^="?Y.indexOf(aa)===0:Z==="$="?Y.substr(Y.length-aa.length)===aa:Z==="|="?Y===aa||Y.substr(0,aa.length+1)===aa+"-":false
},POS:function(aa,Y,ab,ba){var Z=L.setFilters[Y[2]];
if(Z){return Z(aa,ab,Y,ba)
}}}},w=L.match.POS;
for(var s in L.match){L.match[s]=new RegExp(L.match[s].source+/(?![^\[]*\])(?![^\(]*\))/.source);
L.leftMatch[s]=new RegExp(/(^(?:.|\r|\n)*?)/.source+L.match[s].source.replace(/\\(\d+)/g,function(Z,Y){return"\\"+(Y-0+1)
}))
}var c=function(Z,Y){Z=Array.prototype.slice.call(Z,0);
if(Y){Y.push.apply(Y,Z);
return Y
}return Z
};
try{Array.prototype.slice.call(ap.documentElement.childNodes,0)
}catch(G){c=function(ab,aa){aa=aa||[];
if(O.call(ab)==="[object Array]"){Array.prototype.push.apply(aa,ab)
}else{if(typeof ab.length==="number"){for(var Y=0,Z=ab.length;
Y<Z;
Y++){aa.push(ab[Y])
}}else{for(Y=0;
ab[Y];
Y++){aa.push(ab[Y])
}}}return aa
}
}var J;
if(ap.documentElement.compareDocumentPosition){J=function(Z,Y){if(!Z.compareDocumentPosition||!Y.compareDocumentPosition){if(Z==Y){P=true
}return Z.compareDocumentPosition?-1:1
}Z=Z.compareDocumentPosition(Y)&4?-1:Z===Y?0:1;
if(Z===0){P=true
}return Z
}
}else{if("sourceIndex" in ap.documentElement){J=function(Z,Y){if(!Z.sourceIndex||!Y.sourceIndex){if(Z==Y){P=true
}return Z.sourceIndex?-1:1
}Z=Z.sourceIndex-Y.sourceIndex;
if(Z===0){P=true
}return Z
}
}else{if(ap.createRange){J=function(ab,aa){if(!ab.ownerDocument||!aa.ownerDocument){if(ab==aa){P=true
}return ab.ownerDocument?-1:1
}var Y=ab.ownerDocument.createRange(),Z=aa.ownerDocument.createRange();
Y.setStart(ab,0);
Y.setEnd(ab,0);
Z.setStart(aa,0);
Z.setEnd(aa,0);
ab=Y.compareBoundaryPoints(Range.START_TO_END,Z);
if(ab===0){P=true
}return ab
}
}}}(function(){var Z=ap.createElement("div"),aa="script"+(new Date).getTime();
Z.innerHTML="<a name='"+aa+"'/>";
var Y=ap.documentElement;
Y.insertBefore(Z,Y.firstChild);
if(ap.getElementById(aa)){L.find.ID=function(bb,ab,ba){if(typeof ab.getElementById!=="undefined"&&!ba){return(ab=ab.getElementById(bb[1]))?ab.id===bb[1]||typeof ab.getAttributeNode!=="undefined"&&ab.getAttributeNode("id").nodeValue===bb[1]?[ab]:ax:[]
}};
L.filter.ID=function(bb,ab){var ba=typeof bb.getAttributeNode!=="undefined"&&bb.getAttributeNode("id");
return bb.nodeType===1&&ba&&ba.nodeValue===ab
}
}Y.removeChild(Z);
Y=Z=null
})();
(function(){var Y=ap.createElement("div");
Y.appendChild(ap.createComment(""));
if(Y.getElementsByTagName("*").length>0){L.find.TAG=function(aa,ab){ab=ab.getElementsByTagName(aa[1]);
if(aa[1]==="*"){aa=[];
for(var Z=0;
ab[Z];
Z++){ab[Z].nodeType===1&&aa.push(ab[Z])
}ab=aa
}return ab
}
}Y.innerHTML="<a href='#'></a>";
if(Y.firstChild&&typeof Y.firstChild.getAttribute!=="undefined"&&Y.firstChild.getAttribute("href")!=="#"){L.attrHandle.href=function(Z){return Z.getAttribute("href",2)
}
}Y=null
})();
ap.querySelectorAll&&function(){var Z=N,aa=ap.createElement("div");
aa.innerHTML="<p class='TEST'></p>";
if(!(aa.querySelectorAll&&aa.querySelectorAll(".TEST").length===0)){N=function(bm,ab,bl,bb){ab=ab||ap;
if(!bb&&ab.nodeType===9&&!A(ab)){try{return c(ab.querySelectorAll(bm),bl)
}catch(ba){}}return Z(bm,ab,bl,bb)
};
for(var Y in Z){N[Y]=Z[Y]
}aa=null
}}();
(function(){var Y=ap.createElement("div");
Y.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!(!Y.getElementsByClassName||Y.getElementsByClassName("e").length===0)){Y.lastChild.className="e";
if(Y.getElementsByClassName("e").length!==1){L.order.splice(1,0,"CLASS");
L.find.CLASS=function(aa,ab,Z){if(typeof ab.getElementsByClassName!=="undefined"&&!Z){return ab.getElementsByClassName(aa[1])
}};
Y=null
}}})();
var F=ap.compareDocumentPosition?function(Z,Y){return !!(Z.compareDocumentPosition(Y)&16)
}:function(Z,Y){return Z!==Y&&(Z.contains?Z.contains(Y):true)
},A=function(Y){return(Y=(Y?Y.ownerDocument||Y:0).documentElement)?Y.nodeName!=="HTML":false
},X=function(ab,aa){var Y=[],Z="",bb;
for(aa=aa.nodeType?[aa]:aa;
bb=L.match.PSEUDO.exec(ab);
){Z+=bb[0];
ab=ab.replace(L.match.PSEUDO,"")
}ab=L.relative[ab]?ab+"*":ab;
bb=0;
for(var ba=aa.length;
bb<ba;
bb++){N(ab,aa[bb],Y)
}return N.filter(Z,Y)
};
az.find=N;
az.expr=N.selectors;
az.expr[":"]=az.expr.filters;
az.unique=N.uniqueSort;
az.text=W;
az.isXMLDoc=A;
az.contains=F
})();
var aG=/Until$/,a1=/^(?:parents|prevUntil|prevAll)/,aC=/,/;
aK=Array.prototype.slice;
var bi=function(A,w,s){if(az.isFunction(w)){return az.grep(A,function(G,F){return !!w.call(G,F,G)===s
})
}else{if(w.nodeType){return az.grep(A,function(F){return F===w===s
})
}else{if(typeof w==="string"){var c=az.grep(A,function(F){return F.nodeType===1
});
if(l.test(w)){return az.filter(w,c,!s)
}else{w=az.filter(w,c)
}}}}return az.grep(A,function(F){return az.inArray(F,w)>=0===s
})
};
az.fn.extend({find:function(s){for(var w=this.pushStack("","find",s),J=0,F=0,A=this.length;
F<A;
F++){J=w.length;
az.find(s,this[F],w);
if(F>0){for(var c=J;
c<w.length;
c++){for(var G=0;
G<J;
G++){if(w[G]===w[c]){w.splice(c--,1);
break
}}}}}return w
},has:function(s){var c=az(s);
return this.filter(function(){for(var A=0,w=c.length;
A<w;
A++){if(az.contains(this,c[A])){return true
}}})
},not:function(c){return this.pushStack(bi(this,c,false),"not",c)
},filter:function(c){return this.pushStack(bi(this,c,true),"filter",c)
},is:function(c){return !!c&&az.filter(c,this).length>0
},closest:function(L,K){if(az.isArray(L)){var J=[],F=this[0],G,s={},A;
if(F&&L.length){G=0;
for(var c=L.length;
G<c;
G++){A=L[G];
s[A]||(s[A]=az.expr.match.POS.test(A)?az(A,K||this.context):A)
}for(;
F&&F.ownerDocument&&F!==K;
){for(A in s){G=s[A];
if(G.jquery?G.index(F)>-1:az(F).is(G)){J.push({selector:A,elem:F});
delete s[A]
}}F=F.parentNode
}}return J
}var w=az.expr.match.POS.test(L)?az(L,K||this.context):null;
return this.map(function(O,N){for(;
N&&N.ownerDocument&&N!==K;
){if(w?w.index(N)>-1:az(N).is(L)){return N
}N=N.parentNode
}return null
})
},index:function(c){if(!c||typeof c==="string"){return az.inArray(this[0],c?az(c):this.parent().children())
}return az.inArray(c.jquery?c[0]:c,this)
},add:function(s,c){s=typeof s==="string"?az(s,c||this.context):az.makeArray(s);
c=az.merge(this.get(),s);
return this.pushStack(af(s[0])||af(c[0])?c:az.unique(c))
},andSelf:function(){return this.add(this.prevObject)
}});
az.each({parent:function(c){return(c=c.parentNode)&&c.nodeType!==11?c:null
},parents:function(c){return az.dir(c,"parentNode")
},parentsUntil:function(s,c,w){return az.dir(s,"parentNode",w)
},next:function(c){return az.nth(c,2,"nextSibling")
},prev:function(c){return az.nth(c,2,"previousSibling")
},nextAll:function(c){return az.dir(c,"nextSibling")
},prevAll:function(c){return az.dir(c,"previousSibling")
},nextUntil:function(s,c,w){return az.dir(s,"nextSibling",w)
},prevUntil:function(s,c,w){return az.dir(s,"previousSibling",w)
},siblings:function(c){return az.sibling(c.parentNode.firstChild,c)
},children:function(c){return az.sibling(c.firstChild)
},contents:function(c){return az.nodeName(c,"iframe")?c.contentDocument||c.contentWindow.document:az.makeArray(c.childNodes)
}},function(s,c){az.fn[s]=function(F,w){var A=az.map(this,c,F);
aG.test(s)||(w=F);
if(w&&typeof w==="string"){A=az.filter(w,A)
}A=this.length>1?az.unique(A):A;
if((this.length>1||aC.test(w))&&a1.test(s)){A=A.reverse()
}return this.pushStack(A,s,aK.call(arguments).join(","))
}
});
az.extend({filter:function(s,c,w){if(w){s=":not("+s+")"
}return az.find.matches(s,c)
},dir:function(A,w,s){var c=[];
for(A=A[w];
A&&A.nodeType!==9&&(s===ax||A.nodeType!==1||!az(A).is(s));
){A.nodeType===1&&c.push(A);
A=A[w]
}return c
},nth:function(A,w,s){w=w||1;
for(var c=0;
A;
A=A[s]){if(A.nodeType===1&&++c===w){break
}}return A
},sibling:function(s,c){for(var w=[];
s;
s=s.nextSibling){s.nodeType===1&&s!==c&&w.push(s)
}return w
}});
var aP=/ jQuery\d+="(?:\d+|null)"/g,aY=/^\s+/,ak=/(<([\w:]+)[^>]*?)\/>/g,e=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,al=/<([\w:]+)/,aO=/<tbody/i,aX=/<|&#?\w+;/,au=/<script|<object|<embed|<option|<style/i,t=/checked\s*(?:[^=]|=\s*.checked.)/i,bf=function(s,c,w){return e.test(w)?s:c+"></"+w+">"
},i={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};
i.optgroup=i.option;
i.tbody=i.tfoot=i.colgroup=i.caption=i.thead;
i.th=i.td;
if(!az.support.htmlSerialize){i._default=[1,"div<div>","</div>"]
}az.fn.extend({text:function(c){if(az.isFunction(c)){return this.each(function(w){var s=az(this);
s.text(c.call(this,w,s.text()))
})
}if(typeof c!=="object"&&c!==ax){return this.empty().append((this[0]&&this[0].ownerDocument||ap).createTextNode(c))
}return az.text(this)
},wrapAll:function(s){if(az.isFunction(s)){return this.each(function(w){az(this).wrapAll(s.call(this,w))
})
}if(this[0]){var c=az(s,this[0].ownerDocument).eq(0).clone(true);
this[0].parentNode&&c.insertBefore(this[0]);
c.map(function(){for(var w=this;
w.firstChild&&w.firstChild.nodeType===1;
){w=w.firstChild
}return w
}).append(this)
}return this
},wrapInner:function(c){if(az.isFunction(c)){return this.each(function(s){az(this).wrapInner(c.call(this,s))
})
}return this.each(function(){var w=az(this),s=w.contents();
s.length?s.wrapAll(c):w.append(c)
})
},wrap:function(c){return this.each(function(){az(this).wrapAll(c)
})
},unwrap:function(){return this.parent().each(function(){az.nodeName(this,"body")||az(this).replaceWith(this.childNodes)
}).end()
},append:function(){return this.domManip(arguments,true,function(c){this.nodeType===1&&this.appendChild(c)
})
},prepend:function(){return this.domManip(arguments,true,function(c){this.nodeType===1&&this.insertBefore(c,this.firstChild)
})
},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(s){this.parentNode.insertBefore(s,this)
})
}else{if(arguments.length){var c=az(arguments[0]);
c.push.apply(c,this.toArray());
return this.pushStack(c,"before",arguments)
}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(s){this.parentNode.insertBefore(s,this.nextSibling)
})
}else{if(arguments.length){var c=this.pushStack(this,"after",arguments);
c.push.apply(c,az(arguments[0]).toArray());
return c
}}},remove:function(A,w){for(var s=0,c;
(c=this[s])!=null;
s++){if(!A||az.filter(A,[c]).length){if(!w&&c.nodeType===1){az.cleanData(c.getElementsByTagName("*"));
az.cleanData([c])
}c.parentNode&&c.parentNode.removeChild(c)
}}return this
},empty:function(){for(var s=0,c;
(c=this[s])!=null;
s++){for(c.nodeType===1&&az.cleanData(c.getElementsByTagName("*"));
c.firstChild;
){c.removeChild(c.firstChild)
}}return this
},clone:function(s){var c=this.map(function(){if(!az.support.noCloneEvent&&!az.isXMLDoc(this)){var A=this.outerHTML,w=this.ownerDocument;
if(!A){A=w.createElement("div");
A.appendChild(this.cloneNode(true));
A=A.innerHTML
}return az.clean([A.replace(aP,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(aY,"")],w)[0]
}else{return this.cloneNode(true)
}});
if(s===true){D(this,c);
D(this.find("*"),c.find("*"))
}return c
},html:function(A){if(A===ax){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(aP,""):null
}else{if(typeof A==="string"&&!au.test(A)&&(az.support.leadingWhitespace||!aY.test(A))&&!i[(al.exec(A)||["",""])[1].toLowerCase()]){A=A.replace(ak,bf);
try{for(var w=0,s=this.length;
w<s;
w++){if(this[w].nodeType===1){az.cleanData(this[w].getElementsByTagName("*"));
this[w].innerHTML=A
}}}catch(c){this.empty().append(A)
}}else{az.isFunction(A)?this.each(function(J){var F=az(this),G=F.html();
F.empty().append(function(){return A.call(this,J,G)
})
}):this.empty().append(A)
}}return this
},replaceWith:function(c){if(this[0]&&this[0].parentNode){if(az.isFunction(c)){return this.each(function(s){var A=az(this),w=A.html();
A.replaceWith(c.call(this,s,w))
})
}if(typeof c!=="string"){c=az(c).detach()
}return this.each(function(){var w=this.nextSibling,s=this.parentNode;
az(this).remove();
w?az(w).before(c):az(s).append(c)
})
}else{return this.pushStack(az(az.isFunction(c)?c():c),"replaceWith",c)
}},detach:function(c){return this.remove(c,true)
},domManip:function(w,A,K){function F(P){return az.nodeName(P,"table")?P.getElementsByTagName("tbody")[0]||P.appendChild(P.ownerDocument.createElement("tbody")):P
}var s,L,c=w[0],J=[],N;
if(!az.support.checkClone&&arguments.length===3&&typeof c==="string"&&t.test(c)){return this.each(function(){az(this).domManip(w,A,K,true)
})
}if(az.isFunction(c)){return this.each(function(Q){var P=az(this);
w[0]=c.call(this,Q,A?P.html():ax);
P.domManip(w,A,K)
})
}if(this[0]){s=c&&c.parentNode;
s=az.support.parentNode&&s&&s.nodeType===11&&s.childNodes.length===this.length?{fragment:s}:bd(w,this,J);
N=s.fragment;
if(L=N.childNodes.length===1?(N=N.firstChild):N.firstChild){A=A&&az.nodeName(L,"tr");
for(var O=0,G=this.length;
O<G;
O++){K.call(A?F(this[O],L):this[O],O>0||s.cacheable||this.length>1?N.cloneNode(true):N)
}}J.length&&az.each(J,k)
}return this
}});
az.fragments={};
az.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,c){az.fn[s]=function(A){var J=[];
A=az(A);
var w=this.length===1&&this[0].parentNode;
if(w&&w.nodeType===11&&w.childNodes.length===1&&A.length===1){A[c](this[0]);
return this
}else{w=0;
for(var F=A.length;
w<F;
w++){var G=(w>0?this.clone(true):this).get();
az.fn[c].apply(az(A[w]),G);
J=J.concat(G)
}return this.pushStack(J,s,A.selector)
}}
});
az.extend({clean:function(w,A,K,F){A=A||ap;
if(typeof A.createElement==="undefined"){A=A.ownerDocument||A[0]&&A[0].ownerDocument||ap
}for(var s=[],L=0,c;
(c=w[L])!=null;
L++){if(typeof c==="number"){c+=""
}if(c){if(typeof c==="string"&&!aX.test(c)){c=A.createTextNode(c)
}else{if(typeof c==="string"){c=c.replace(ak,bf);
var J=(al.exec(c)||["",""])[1].toLowerCase(),N=i[J]||i._default,O=N[0],G=A.createElement("div");
for(G.innerHTML=N[1]+c+N[2];
O--;
){G=G.lastChild
}if(!az.support.tbody){O=aO.test(c);
J=J==="table"&&!O?G.firstChild&&G.firstChild.childNodes:N[1]==="<table>"&&!O?G.childNodes:[];
for(N=J.length-1;
N>=0;
--N){az.nodeName(J[N],"tbody")&&!J[N].childNodes.length&&J[N].parentNode.removeChild(J[N])
}}!az.support.leadingWhitespace&&aY.test(c)&&G.insertBefore(A.createTextNode(aY.exec(c)[0]),G.firstChild);
c=G.childNodes
}}if(c.nodeType){s.push(c)
}else{s=az.merge(s,c)
}}}if(K){for(L=0;
s[L];
L++){if(F&&az.nodeName(s[L],"script")&&(!s[L].type||s[L].type.toLowerCase()==="text/javascript")){F.push(s[L].parentNode?s[L].parentNode.removeChild(s[L]):s[L])
}else{s[L].nodeType===1&&s.splice.apply(s,[L+1,0].concat(az.makeArray(s[L].getElementsByTagName("script"))));
K.appendChild(s[L])
}}}return s
},cleanData:function(L){for(var K,J,F=az.cache,G=az.event.special,s=az.support.deleteExpando,A=0,c;
(c=L[A])!=null;
A++){if(J=c[az.expando]){K=F[J];
if(K.events){for(var w in K.events){G[w]?az.event.remove(c,w):E(c,w,K.handle)
}}if(s){delete c[az.expando]
}else{c.removeAttribute&&c.removeAttribute(az.expando)
}delete F[J]
}}}});
var u=/z-?index|font-?weight|opacity|zoom|line-?height/i,ac=/alpha\([^)]*\)/,aD=/opacity=([^)]*)/,ao=/float/i,av=/-([a-z])/ig,m=/([A-Z])/g,ay=/^-?\d+(?:px)?$/i,I=/^-?\d/,g={position:"absolute",visibility:"hidden",display:"block"},bg=["Left","Right"],a5=["Top","Bottom"],a2=ap.defaultView&&ap.defaultView.getComputedStyle,d=az.support.cssFloat?"cssFloat":"styleFloat",S=function(s,c){return c.toUpperCase()
};
az.fn.css=function(s,c){return aH(this,s,c,true,function(F,w,A){if(A===ax){return az.curCSS(F,w)
}if(typeof A==="number"&&!u.test(w)){A+="px"
}az.style(F,w,A)
})
};
az.extend({style:function(s,w,F){if(!s||s.nodeType===3||s.nodeType===8){return ax
}if((w==="width"||w==="height")&&parseFloat(F)<0){F=ax
}var c=s.style||s,A=F!==ax;
if(!az.support.opacity&&w==="opacity"){if(A){c.zoom=1;
w=parseInt(F,10)+""==="NaN"?"":"alpha(opacity="+F*100+")";
s=c.filter||az.curCSS(s,"filter")||"";
c.filter=ac.test(s)?s.replace(ac,w):w
}return c.filter&&c.filter.indexOf("opacity=")>=0?parseFloat(aD.exec(c.filter)[1])/100+"":""
}if(ao.test(w)){w=d
}w=w.replace(av,S);
if(A){c[w]=F
}return c[w]
},css:function(s,w,J,F){if(w==="width"||w==="height"){var A,c=w==="width"?bg:a5;
function G(){A=w==="width"?s.offsetWidth:s.offsetHeight;
F!=="border"&&az.each(c,function(){F||(A-=parseFloat(az.curCSS(s,"padding"+this,true))||0);
if(F==="margin"){A+=parseFloat(az.curCSS(s,"margin"+this,true))||0
}else{A-=parseFloat(az.curCSS(s,"border"+this+"Width",true))||0
}})
}s.offsetWidth!==0?G():az.swap(s,g,G);
return Math.max(0,Math.round(A))
}return az.curCSS(s,w,J)
},curCSS:function(s,w,A){var F,G=s.style;
if(!az.support.opacity&&w==="opacity"&&s.currentStyle){F=aD.test(s.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";
return F===""?"1":F
}if(ao.test(w)){w=d
}if(!A&&G&&G[w]){F=G[w]
}else{if(a2){if(ao.test(w)){w="float"
}w=w.replace(m,"-$1").toLowerCase();
G=s.ownerDocument.defaultView;
if(!G){return null
}if(s=G.getComputedStyle(s,null)){F=s.getPropertyValue(w)
}if(w==="opacity"&&F===""){F="1"
}}else{if(s.currentStyle){A=w.replace(av,S);
F=s.currentStyle[w]||s.currentStyle[A];
if(!ay.test(F)&&I.test(F)){w=G.left;
var c=s.runtimeStyle.left;
s.runtimeStyle.left=s.currentStyle.left;
G.left=A==="fontSize"?"1em":F||0;
F=G.pixelLeft+"px";
G.left=w;
s.runtimeStyle.left=c
}}}}return F
},swap:function(s,w,F){var c={};
for(var A in w){c[A]=s.style[A];
s.style[A]=w[A]
}F.call(s);
for(A in w){s.style[A]=c[A]
}}});
if(az.expr&&az.expr.filters){az.expr.filters.hidden=function(A){var w=A.offsetWidth,s=A.offsetHeight,c=A.nodeName.toLowerCase()==="tr";
return w===0&&s===0&&!c?true:w>0&&s>0&&!c?false:az.curCSS(A,"display")==="none"
};
az.expr.filters.visible=function(c){return !az.expr.filters.hidden(c)
}
}var B=bj(),ag=/<script(.|\s)*?\/script>/gi,aB=/select|textarea/i,f=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,be=/=\?(&|$)/,x=/\?/,bc=/(\?|&)_=.*?(&|$)/,aw=/^(\w+:)?\/\/([^\/?#]+)/,at=/%20/g,a4=az.fn.load;
az.fn.extend({load:function(s,w,A){if(typeof s!=="string"){return a4.call(this,s)
}else{if(!this.length){return this
}}var F=s.indexOf(" ");
if(F>=0){var G=s.slice(F,s.length);
s=s.slice(0,F)
}F="GET";
if(w){if(az.isFunction(w)){A=w;
w=null
}else{if(typeof w==="object"){w=az.param(w,az.ajaxSettings.traditional);
F="POST"
}}}var c=this;
az.ajax({url:s,type:F,dataType:"html",data:w,complete:function(J,K){if(K==="success"||K==="notmodified"){c.html(G?az("<div />").append(J.responseText.replace(ag,"")).find(G):J.responseText)
}A&&c.each(A,[J.responseText,K,J])
}});
return this
},serialize:function(){return az.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?az.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||aB.test(this.nodeName)||f.test(this.type))
}).map(function(s,c){s=az(this).val();
return s==null?null:az.isArray(s)?az.map(s,function(w){return{name:c.name,value:w}
}):{name:c.name,value:s}
}).get()
}});
az.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(s,c){az.fn[c]=function(w){return this.bind(c,w)
}
});
az.extend({get:function(A,w,s,c){if(az.isFunction(w)){c=c||s;
s=w;
w=null
}return az.ajax({type:"GET",url:A,data:w,success:s,dataType:c})
},getScript:function(s,c){return az.get(s,null,c,"script")
},getJSON:function(s,c,w){return az.get(s,c,w,"json")
},post:function(A,w,s,c){if(az.isFunction(w)){c=c||s;
s=w;
w={}
}return az.ajax({type:"POST",url:A,data:w,success:s,dataType:c})
},ajaxSetup:function(c){az.extend(az.ajaxSettings,c)
},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:a9.XMLHttpRequest&&(a9.location.protocol!=="file:"||!a9.ActiveXObject)?function(){return new a9.XMLHttpRequest
}:function(){try{return new a9.ActiveXObject("Microsoft.XMLHTTP")
}catch(c){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(Z){function T(){Q.success&&Q.success.call(J,F,L,Y);
Q.global&&V("ajaxSuccess",[Y,Q])
}function X(){Q.complete&&Q.complete.call(J,Y,L);
Q.global&&V("ajaxComplete",[Y,Q]);
Q.global&&!--az.active&&az.event.trigger("ajaxStop")
}function V(bb,ba){(Q.context?az(Q.context):az.event).trigger(bb,ba)
}var Q=az.extend(true,{},az.ajaxSettings,Z),P,L,F,J=Z&&Z.context||Q,K=Q.type.toUpperCase();
if(Q.data&&Q.processData&&typeof Q.data!=="string"){Q.data=az.param(Q.data,Q.traditional)
}if(Q.dataType==="jsonp"){if(K==="GET"){be.test(Q.url)||(Q.url+=(x.test(Q.url)?"&":"?")+(Q.jsonp||"callback")+"=?")
}else{if(!Q.data||!be.test(Q.data)){Q.data=(Q.data?Q.data+"&":"")+(Q.jsonp||"callback")+"=?"
}}Q.dataType="json"
}if(Q.dataType==="json"&&(Q.data&&be.test(Q.data)||be.test(Q.url))){P=Q.jsonpCallback||"jsonp"+B++;
if(Q.data){Q.data=(Q.data+"").replace(be,"="+P+"$1")
}Q.url=Q.url.replace(be,"="+P+"$1");
Q.dataType="script";
a9[P]=a9[P]||function(bb){F=bb;
T();
X();
a9[P]=ax;
try{delete a9[P]
}catch(ba){}ab&&ab.removeChild(aa)
}
}if(Q.dataType==="script"&&Q.cache===null){Q.cache=false
}if(Q.cache===false&&K==="GET"){var c=bj(),s=Q.url.replace(bc,"$1_="+c+"$2");
Q.url=s+(s===Q.url?(x.test(Q.url)?"&":"?")+"_="+c:"")
}if(Q.data&&K==="GET"){Q.url+=(x.test(Q.url)?"&":"?")+Q.data
}Q.global&&!az.active++&&az.event.trigger("ajaxStart");
c=(c=aw.exec(Q.url))&&(c[1]&&c[1]!==location.protocol||c[2]!==location.host);
if(Q.dataType==="script"&&K==="GET"&&c){var ab=ap.getElementsByTagName("head")[0]||ap.documentElement,aa=ap.createElement("script");
aa.src=Q.url;
if(Q.scriptCharset){aa.charset=Q.scriptCharset
}if(!P){var w=false;
aa.onload=aa.onreadystatechange=function(){if(!w&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){w=true;
T();
X();
aa.onload=aa.onreadystatechange=null;
ab&&aa.parentNode&&ab.removeChild(aa)
}}
}ab.insertBefore(aa,ab.firstChild);
return ax
}var A=false,Y=Q.xhr();
if(Y){Q.username?Y.open(K,Q.url,Q.async,Q.username,Q.password):Y.open(K,Q.url,Q.async);
try{if(Q.data||Z&&Z.contentType){Y.setRequestHeader("Content-Type",Q.contentType)
}if(Q.ifModified){az.lastModified[Q.url]&&Y.setRequestHeader("If-Modified-Since",az.lastModified[Q.url]);
az.etag[Q.url]&&Y.setRequestHeader("If-None-Match",az.etag[Q.url])
}c||Y.setRequestHeader("X-Requested-With","XMLHttpRequest");
Y.setRequestHeader("Accept",Q.dataType&&Q.accepts[Q.dataType]?Q.accepts[Q.dataType]+", */*":Q.accepts._default)
}catch(W){}if(Q.beforeSend&&Q.beforeSend.call(J,Y,Q)===false){Q.global&&!--az.active&&az.event.trigger("ajaxStop");
Y.abort();
return false
}Q.global&&V("ajaxSend",[Y,Q]);
var O=Y.onreadystatechange=function(bb){if(!Y||Y.readyState===0||bb==="abort"){A||X();
A=true;
if(Y){Y.onreadystatechange=az.noop
}}else{if(!A&&Y&&(Y.readyState===4||bb==="timeout")){A=true;
Y.onreadystatechange=az.noop;
L=bb==="timeout"?"timeout":!az.httpSuccess(Y)?"error":Q.ifModified&&az.httpNotModified(Y,Q.url)?"notmodified":"success";
var ba;
if(L==="success"){try{F=az.httpData(Y,Q.dataType,Q)
}catch(bl){L="parsererror";
ba=bl
}}if(L==="success"||L==="notmodified"){P||T()
}else{az.handleError(Q,Y,L,ba)
}X();
bb==="timeout"&&Y.abort();
if(Q.async){Y=null
}}}};
try{var R=Y.abort;
Y.abort=function(){Y&&R.call(Y);
O("abort")
}
}catch(N){}Q.async&&Q.timeout>0&&setTimeout(function(){Y&&!A&&O("timeout")
},Q.timeout);
try{Y.send(K==="POST"||K==="PUT"||K==="DELETE"?Q.data:null)
}catch(G){az.handleError(Q,Y,null,G);
X()
}Q.async||O();
return Y
}},handleError:function(A,w,s,c){if(A.error){A.error.call(A.context||A,w,s,c)
}if(A.global){(A.context?az(A.context):az.event).trigger("ajaxError",[w,A,c])
}},active:0,httpSuccess:function(s){try{return !s.status&&location.protocol==="file:"||s.status>=200&&s.status<300||s.status===304||s.status===1223||s.status===0
}catch(c){}return false
},httpNotModified:function(A,w){var s=A.getResponseHeader("Last-Modified"),c=A.getResponseHeader("Etag");
if(s){az.lastModified[w]=s
}if(c){az.etag[w]=c
}return A.status===304||A.status===0
},httpData:function(s,w,F){var c=s.getResponseHeader("content-type")||"",A=w==="xml"||!w&&c.indexOf("xml")>=0;
s=A?s.responseXML:s.responseText;
A&&s.documentElement.nodeName==="parsererror"&&az.error("parsererror");
if(F&&F.dataFilter){s=F.dataFilter(s,w)
}if(typeof s==="string"){if(w==="json"||!w&&c.indexOf("json")>=0){s=az.parseJSON(s)
}else{if(w==="script"||!w&&c.indexOf("javascript")>=0){az.globalEval(s)
}}}return s
},param:function(s,w){function A(J,K){if(az.isArray(K)){az.each(K,function(N,L){w||/\[\]$/.test(J)?F(J,L):A(J+"["+(typeof L==="object"||az.isArray(L)?N:"")+"]",L)
})
}else{!w&&K!=null&&typeof K==="object"?az.each(K,function(N,L){A(J+"["+N+"]",L)
}):F(J,K)
}}function F(J,K){K=az.isFunction(K)?K():K;
G[G.length]=encodeURIComponent(J)+"="+encodeURIComponent(K)
}var G=[];
if(w===ax){w=az.ajaxSettings.traditional
}if(az.isArray(s)||s.jquery){az.each(s,function(){F(this.name,this.value)
})
}else{for(var c in s){A(c,s[c])
}}return G.join("&").replace(at,"+")
}});
var q={},am=/toggle|show|hide/,bk=/^([+-]=)?([\d+-.]+)(.*)$/,aN,aL=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
az.fn.extend({show:function(s,w){if(s||s===0){return this.animate(aS("show",3),s,w)
}else{s=0;
for(w=this.length;
s<w;
s++){var F=az.data(this[s],"olddisplay");
this[s].style.display=F||"";
if(az.css(this[s],"display")==="none"){F=this[s].nodeName;
var c;
if(q[F]){c=q[F]
}else{var A=az("<"+F+" />").appendTo("body");
c=A.css("display");
if(c==="none"){c="block"
}A.remove();
q[F]=c
}az.data(this[s],"olddisplay",c)
}}s=0;
for(w=this.length;
s<w;
s++){this[s].style.display=az.data(this[s],"olddisplay")||""
}return this
}},hide:function(s,c){if(s||s===0){return this.animate(aS("hide",3),s,c)
}else{s=0;
for(c=this.length;
s<c;
s++){var w=az.data(this[s],"olddisplay");
!w&&w!=="none"&&az.data(this[s],"olddisplay",az.css(this[s],"display"))
}s=0;
for(c=this.length;
s<c;
s++){this[s].style.display="none"
}return this
}},_toggle:az.fn.toggle,toggle:function(s,c){var w=typeof s==="boolean";
if(az.isFunction(s)&&az.isFunction(c)){this._toggle.apply(this,arguments)
}else{s==null||w?this.each(function(){var A=w?s:az(this).is(":hidden");
az(this)[A?"show":"hide"]()
}):this.animate(aS("toggle",3),s,c)
}return this
},fadeTo:function(s,c,w){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:c},s,w)
},animate:function(s,w,F,c){var A=az.speed(w,F,c);
if(az.isEmptyObject(s)){return this.each(A.complete)
}return this[A.queue===false?"each":"queue"](function(){var G=az.extend({},A),J,K=this.nodeType===1&&az(this).is(":hidden"),N=this;
for(J in s){var L=J.replace(av,S);
if(J!==L){s[L]=s[J];
delete s[J];
J=L
}if(s[J]==="hide"&&K||s[J]==="show"&&!K){return G.complete.call(this)
}if((J==="height"||J==="width")&&this.style){G.display=az.css(this,"display");
G.overflow=this.style.overflow
}if(az.isArray(s[J])){(G.specialEasing=G.specialEasing||{})[J]=s[J][1];
s[J]=s[J][0]
}}if(G.overflow!=null){this.style.overflow="hidden"
}G.curAnim=az.extend({},s);
az.each(s,function(P,O){var T=new az.fx(N,G,P);
if(am.test(O)){T[O==="toggle"?K?"show":"hide":O](s)
}else{var R=bk.exec(O),V=T.cur(true)||0;
if(R){O=parseFloat(R[2]);
var Q=R[3]||"px";
if(Q!=="px"){N.style[P]=(O||1)+Q;
V=(O||1)/T.cur(true)*V;
N.style[P]=V+Q
}if(R[1]){O=(R[1]==="-="?-1:1)*O+V
}T.custom(V,O,Q)
}else{T.custom(V,O,"")
}}});
return true
})
},stop:function(s,c){var w=az.timers;
s&&this.queue([]);
this.each(function(){for(var A=w.length-1;
A>=0;
A--){if(w[A].elem===this){c&&w[A](true);
w.splice(A,1)
}}});
c||this.dequeue();
return this
}});
az.each({slideDown:aS("show",1),slideUp:aS("hide",1),slideToggle:aS("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(s,c){az.fn[s]=function(A,w){return this.animate(c,A,w)
}
});
az.extend({speed:function(A,w,s){var c=A&&typeof A==="object"?A:{complete:s||!s&&w||az.isFunction(A)&&A,duration:A,easing:s&&w||w&&!az.isFunction(w)&&w};
c.duration=az.fx.off?0:typeof c.duration==="number"?c.duration:az.fx.speeds[c.duration]||az.fx.speeds._default;
c.old=c.complete;
c.complete=function(){c.queue!==false&&az(this).dequeue();
az.isFunction(c.old)&&c.old.call(this)
};
return c
},easing:{linear:function(A,w,s,c){return s+c*A
},swing:function(A,w,s,c){return(-Math.cos(A*Math.PI)/2+0.5)*c+s
}},timers:[],fx:function(s,c,w){this.options=c;
this.elem=s;
this.prop=w;
if(!c.orig){c.orig={}
}}});
az.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);
(az.fx.step[this.prop]||az.fx.step._default)(this);
if((this.prop==="height"||this.prop==="width")&&this.elem.style){this.elem.style.display="block"
}},cur:function(c){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}return(c=parseFloat(az.css(this.elem,this.prop,c)))&&c>-10000?c:parseFloat(az.curCSS(this.elem,this.prop))||0
},custom:function(s,w,F){function c(G){return A.step(G)
}this.startTime=bj();
this.start=s;
this.end=w;
this.unit=F||this.unit||"px";
this.now=this.start;
this.pos=this.state=0;
var A=this;
c.elem=this.elem;
if(c()&&az.timers.push(c)&&!aN){aN=setInterval(az.fx.tick,13)
}},show:function(){this.options.orig[this.prop]=az.style(this.elem,this.prop);
this.options.show=true;
this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());
az(this.elem).show()
},hide:function(){this.options.orig[this.prop]=az.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)
},step:function(s){var w=bj(),F=true;
if(s||w>=this.options.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
for(var c in this.options.curAnim){if(this.options.curAnim[c]!==true){F=false
}}if(F){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;
s=az.data(this.elem,"olddisplay");
this.elem.style.display=s?s:this.options.display;
if(az.css(this.elem,"display")==="none"){this.elem.style.display="block"
}}this.options.hide&&az(this.elem).hide();
if(this.options.hide||this.options.show){for(var A in this.options.curAnim){az.style(this.elem,A,this.options.orig[A])
}}this.options.complete.call(this.elem)
}return false
}else{A=w-this.startTime;
this.state=A/this.options.duration;
s=this.options.easing||(az.easing.swing?"swing":"linear");
this.pos=az.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||s](this.state,A,0,1,this.options.duration);
this.now=this.start+(this.end-this.start)*this.pos;
this.update()
}return true
}};
az.extend(az.fx,{tick:function(){for(var s=az.timers,c=0;
c<s.length;
c++){s[c]()||s.splice(c--,1)
}s.length||az.fx.stop()
},stop:function(){clearInterval(aN);
aN=null
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(c){az.style(c.elem,"opacity",c.now)
},_default:function(c){if(c.elem.style&&c.elem.style[c.prop]!=null){c.elem.style[c.prop]=(c.prop==="width"||c.prop==="height"?Math.max(0,c.now):c.now)+c.unit
}else{c.elem[c.prop]=c.now
}}}});
if(az.expr&&az.expr.filters){az.expr.filters.animated=function(c){return az.grep(az.timers,function(s){return c===s.elem
}).length
}
}az.fn.offset="getBoundingClientRect" in ap.documentElement?function(A){var w=this[0];
if(A){return this.each(function(F){az.offset.setOffset(this,A,F)
})
}if(!w||!w.ownerDocument){return null
}if(w===w.ownerDocument.body){return az.offset.bodyOffset(w)
}var s=w.getBoundingClientRect(),c=w.ownerDocument;
w=c.body;
c=c.documentElement;
return{top:s.top+(self.pageYOffset||az.support.boxModel&&c.scrollTop||w.scrollTop)-(c.clientTop||w.clientTop||0),left:s.left+(self.pageXOffset||az.support.boxModel&&c.scrollLeft||w.scrollLeft)-(c.clientLeft||w.clientLeft||0)}
}:function(A){var N=this[0];
if(A){return this.each(function(O){az.offset.setOffset(this,A,O)
})
}if(!N||!N.ownerDocument){return null
}if(N===N.ownerDocument.body){return az.offset.bodyOffset(N)
}az.offset.initialize();
var c=N.offsetParent,K=N,F=N.ownerDocument,w,J=F.documentElement,s=F.body;
K=(F=F.defaultView)?F.getComputedStyle(N,null):N.currentStyle;
for(var L=N.offsetTop,G=N.offsetLeft;
(N=N.parentNode)&&N!==s&&N!==J;
){if(az.offset.supportsFixedPosition&&K.position==="fixed"){break
}w=F?F.getComputedStyle(N,null):N.currentStyle;
L-=N.scrollTop;
G-=N.scrollLeft;
if(N===c){L+=N.offsetTop;
G+=N.offsetLeft;
if(az.offset.doesNotAddBorder&&!(az.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(N.nodeName))){L+=parseFloat(w.borderTopWidth)||0;
G+=parseFloat(w.borderLeftWidth)||0
}K=c;
c=N.offsetParent
}if(az.offset.subtractsBorderForOverflowNotVisible&&w.overflow!=="visible"){L+=parseFloat(w.borderTopWidth)||0;
G+=parseFloat(w.borderLeftWidth)||0
}K=w
}if(K.position==="relative"||K.position==="static"){L+=s.offsetTop;
G+=s.offsetLeft
}if(az.offset.supportsFixedPosition&&K.position==="fixed"){L+=Math.max(J.scrollTop,s.scrollTop);
G+=Math.max(J.scrollLeft,s.scrollLeft)
}return{top:L,left:G}
};
az.offset={initialize:function(){var s=ap.body,w=ap.createElement("div"),A,F,G,c=parseFloat(az.curCSS(s,"marginTop",true))||0;
az.extend(w.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});
w.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
s.insertBefore(w,s.firstChild);
A=w.firstChild;
F=A.firstChild;
G=A.nextSibling.firstChild.firstChild;
this.doesNotAddBorder=F.offsetTop!==5;
this.doesAddBorderForTableAndCells=G.offsetTop===5;
F.style.position="fixed";
F.style.top="20px";
this.supportsFixedPosition=F.offsetTop===20||F.offsetTop===15;
F.style.position=F.style.top="";
A.style.overflow="hidden";
A.style.position="relative";
this.subtractsBorderForOverflowNotVisible=F.offsetTop===-5;
this.doesNotIncludeMarginInBodyOffset=s.offsetTop!==c;
s.removeChild(w);
az.offset.initialize=az.noop
},bodyOffset:function(s){var c=s.offsetTop,w=s.offsetLeft;
az.offset.initialize();
if(az.offset.doesNotIncludeMarginInBodyOffset){c+=parseFloat(az.curCSS(s,"marginTop",true))||0;
w+=parseFloat(az.curCSS(s,"marginLeft",true))||0
}return{top:c,left:w}
},setOffset:function(s,w,J){if(/static/.test(az.curCSS(s,"position"))){s.style.position="relative"
}var F=az(s),A=F.offset(),c=parseInt(az.curCSS(s,"top",true),10)||0,G=parseInt(az.curCSS(s,"left",true),10)||0;
if(az.isFunction(w)){w=w.call(s,J,A)
}J={top:w.top-A.top+c,left:w.left-A.left+G};
"using" in w?w.using.call(s,J):F.css(J)
}};
az.fn.extend({position:function(){if(!this[0]){return null
}var A=this[0],w=this.offsetParent(),s=this.offset(),c=/^body|html$/i.test(w[0].nodeName)?{top:0,left:0}:w.offset();
s.top-=parseFloat(az.curCSS(A,"marginTop",true))||0;
s.left-=parseFloat(az.curCSS(A,"marginLeft",true))||0;
c.top+=parseFloat(az.curCSS(w[0],"borderTopWidth",true))||0;
c.left+=parseFloat(az.curCSS(w[0],"borderLeftWidth",true))||0;
return{top:s.top-c.top,left:s.left-c.left}
},offsetParent:function(){return this.map(function(){for(var c=this.offsetParent||ap.body;
c&&!/^body|html$/i.test(c.nodeName)&&az.css(c,"position")==="static";
){c=c.offsetParent
}return c
})
}});
az.each(["Left","Top"],function(s,c){var w="scroll"+c;
az.fn[w]=function(F){var G=this[0],A;
if(!G){return null
}if(F!==ax){return this.each(function(){if(A=a7(this)){A.scrollTo(!s?F:az(A).scrollLeft(),s?F:az(A).scrollTop())
}else{this[w]=F
}})
}else{return(A=a7(G))?"pageXOffset" in A?A[s?"pageYOffset":"pageXOffset"]:az.support.boxModel&&A.document.documentElement[w]||A.document.body[w]:G[w]
}}
});
az.each(["Height","Width"],function(s,c){var w=c.toLowerCase();
az.fn["inner"+c]=function(){return this[0]?az.css(this[0],w,false,"padding"):null
};
az.fn["outer"+c]=function(A){return this[0]?az.css(this[0],w,false,A?"margin":"border"):null
};
az.fn[w]=function(F){var A=this[0];
if(!A){return F==null?null:this
}if(az.isFunction(F)){return this.each(function(G){var J=az(this);
J[w](F.call(this,G,J[w]()))
})
}return"scrollTo" in A&&A.document?A.document.compatMode==="CSS1Compat"&&A.document.documentElement["client"+c]||A.document.body["client"+c]:A.nodeType===9?Math.max(A.documentElement["client"+c],A.body["scroll"+c],A.documentElement["scroll"+c],A.body["offset"+c],A.documentElement["offset"+c]):F===ax?az.css(A,w):this.css(w,typeof F==="string"?F:F+"px")
}
});
a9.jQuery=a9.$=az
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
(function(F,ad){var M,ai=Array.prototype.slice,O=decodeURIComponent,X=F.param,G,N,K,J=F.bbq=F.bbq||{},Y,S,ac,aj=F.event.special,R="hashchange",U="querystring",H="fragment",af="elemUrlAttr",ah="location",L="href",Q="src",ag=/^.*\?|#.*$/g,ae=/^.*\#/,P,aa={};
function al(a){return typeof a==="string"
}function T(a){var b=ai.call(arguments,1);
return function(){return a.apply(this,b.concat(ai.call(arguments)))
}
}function Z(a){return a.replace(/^[^#]*#?(.*)$/,"$1")
}function W(a){return a.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")
}function ak(h,c,j,g,i){var a,d,e,b,f;
if(g!==M){e=j.match(h?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);
f=e[3]||"";
if(i===2&&al(g)){d=g.replace(h?ae:ag,"")
}else{b=N(e[2]);
g=al(g)?N[h?H:U](g):g;
d=i===2?g:i===1?F.extend({},g,b):F.extend({},b,g);
d=X(d);
if(h){d=d.replace(P,O)
}}a=e[1]+(h?"#":d||!e[1]?"?":"")+d+f
}else{a=c(j!==M?j:ad[ah][L])
}return a
}X[U]=T(ak,0,W);
X[H]=G=T(ak,1,Z);
G.noEscape=function(a){a=a||"";
var b=F.map(a.split(""),encodeURIComponent);
P=new RegExp(b.join("|"),"g")
};
G.noEscape(",/");
F.deparam=N=function(c,b){var d={},a={"true":!0,"false":!1,"null":null};
F.each(c.replace(/\+/g," ").split("&"),function(k,f){var l=f.split("="),g=O(l[0]),m,h=d,j=0,e=g.split("]["),i=e.length-1;
if(/\[/.test(e[0])&&/\]$/.test(e[i])){e[i]=e[i].replace(/\]$/,"");
e=e.shift().split("[").concat(e);
i=e.length-1
}else{i=0
}if(l.length===2){m=O(l[1]);
if(b){m=m&&!isNaN(m)?+m:m==="undefined"?M:a[m]!==M?a[m]:m
}if(i){for(;
j<=i;
j++){g=e[j]===""?h.length:e[j];
h=h[g]=j<i?h[g]||(e[j+1]&&isNaN(e[j+1])?{}:[]):m
}}else{if(F.isArray(d[g])){d[g].push(m)
}else{if(d[g]!==M){d[g]=[d[g],m]
}else{d[g]=m
}}}}else{if(g){d[g]=b?M:""
}}});
return d
};
function I(a,c,b){if(c===M||typeof c==="boolean"){b=c;
c=X[a?H:U]()
}else{c=al(c)?c.replace(a?ae:ag,""):c
}return N(c,b)
}N[U]=T(I,0);
N[H]=K=T(I,1);
F[af]||(F[af]=function(a){return F.extend(aa,a)
})({a:L,base:L,iframe:Q,img:Q,input:Q,form:"action",link:L,script:Q});
ac=F[af];
function V(c,a,d,b){if(!al(d)&&typeof d!=="object"){b=d;
d=a;
a=M
}return this.each(function(){var e=F(this),g=a||ac()[(this.nodeName||"").toLowerCase()]||"",f=g&&e.attr(g)||"";
e.attr(g,X[c](f,d,b))
})
}F.fn[U]=T(V,U);
F.fn[H]=T(V,H);
J.pushState=Y=function(c,b){if(al(c)&&/^#/.test(c)&&b===M){b=2
}var d=c!==M,a=G(ad[ah][L],d?c:{},d?b:2);
ad[ah][L]=a+(/#/.test(a)?"":"#")
};
J.getState=S=function(b,a){return b===M||typeof b==="boolean"?K(b):K(a)[b]
};
J.removeState=function(b){var a={};
if(b!==M){a=S();
F.each(F.isArray(b)?b:arguments,function(c,d){delete a[d]
})
}Y(a,2)
};
aj[R]=F.extend(aj[R],{add:function(c){var a;
function b(d){var e=d[H]=G();
d.getState=function(g,f){return g===M||typeof g==="boolean"?N(e,g):N(e,f)[g]
};
a.apply(this,arguments)
}if(F.isFunction(c)){a=c;
return b
}else{a=c.handler;
c.handler=b
}}})
})(jQuery,this);
(function(u,x,q){var p,n=u.event.special,w="location",v="hashchange",m="href",s=u.browser,o=document.documentMode,y=s.msie&&(o===q||o<8),t="on"+v in x&&!y;
function r(a){a=a||x[w][m];
return a.replace(/^[^#]*#?(.*)$/,"$1")
}u[v+"Delay"]=100;
n[v]=u.extend(n[v],{setup:function(){if(t){return false
}u(p.start)
},teardown:function(){if(t){return false
}u(p.stop)
}});
p=(function(){var d={},e,c,b,f;
function a(){b=f=function(g){return g
};
if(y){c=u('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;
f=function(){return r(c.document[w][m])
};
b=function(g,i){if(g!==i){var h=c.document;
h.open().close();
h[w].hash="#"+g
}};
b(r())
}}d.start=function(){if(e){return
}var g=r();
b||a();
(function h(){var i=r(),j=f(g);
if(i!==g){b(g=i,j);
u(x).trigger(v)
}else{if(j!==g){x[w][m]=x[w][m].replace(/#.*/,"")+"#"+j
}}e=setTimeout(h,u[v+"Delay"])
})()
};
d.stop=function(){if(!c){e&&clearTimeout(e);
e=0
}};
return d
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
(function(b){function c(av,ao,aP,aq){var a6=[],aF={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:0.85},xaxis:{mode:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:false},yaxis:{autoscaleMargin:0.02},x2axis:{autoscaleMargin:null},y2axis:{autoscaleMargin:0.02},series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff"},lines:{lineWidth:2,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false},shadowSize:3},grid:{show:true,aboveData:false,color:"#545454",backgroundColor:null,tickColor:"rgba(0,0,0,0.15)",labelMargin:5,borderWidth:2,borderColor:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},hooks:{}},a9=null,a3=null,aH=null,at=null,an=null,aS={xaxis:{},yaxis:{},x2axis:{},y2axis:{}},aD={left:0,right:0,top:0,bottom:0},d=0,aO=0,aR=0,aW=0,aN={processOptions:[],processRawData:[],processDatapoints:[],draw:[],bindEvents:[],drawOverlay:[]},aE=this;
aE.setData=a5;
aE.setupGrid=ar;
aE.draw=e;
aE.getPlaceholder=function(){return av
};
aE.getCanvas=function(){return a9
};
aE.getPlotOffset=function(){return aD
};
aE.width=function(){return aR
};
aE.height=function(){return aW
};
aE.offset=function(){var g=aH.offset();
g.left+=aD.left;
g.top+=aD.top;
return g
};
aE.getData=function(){return a6
};
aE.getAxes=function(){return aS
};
aE.getOptions=function(){return aF
};
aE.highlight=aw;
aE.unhighlight=A;
aE.triggerRedrawOverlay=ba;
aE.pointOffset=function(g){return{left:parseInt(bd(g,"xaxis").p2c(+g.x)+aD.left),top:parseInt(bd(g,"yaxis").p2c(+g.y)+aD.top)}
};
aE.hooks=aN;
aC(aE);
B(aP);
a1();
a5(ao);
ar();
e();
aG();
function aV(g,j){j=[aE].concat(j);
for(var h=0;
h<g.length;
++h){g[h].apply(this,j)
}}function aC(){for(var g=0;
g<aq.length;
++g){var h=aq[g];
h.init(aE);
if(h.options){b.extend(true,aF,h.options)
}}}function B(g){b.extend(true,aF,g);
if(aF.grid.borderColor==null){aF.grid.borderColor=aF.grid.color
}if(aF.xaxis.noTicks&&aF.xaxis.ticks==null){aF.xaxis.ticks=aF.xaxis.noTicks
}if(aF.yaxis.noTicks&&aF.yaxis.ticks==null){aF.yaxis.ticks=aF.yaxis.noTicks
}if(aF.grid.coloredAreas){aF.grid.markings=aF.grid.coloredAreas
}if(aF.grid.coloredAreasColor){aF.grid.markingsColor=aF.grid.coloredAreasColor
}if(aF.lines){b.extend(true,aF.series.lines,aF.lines)
}if(aF.points){b.extend(true,aF.series.points,aF.points)
}if(aF.bars){b.extend(true,aF.series.bars,aF.bars)
}if(aF.shadowSize){aF.series.shadowSize=aF.shadowSize
}for(var h in aN){if(aF.hooks[h]&&aF.hooks[h].length){aN[h]=aN[h].concat(aF.hooks[h])
}}aV(aN.processOptions,[aF])
}function a5(g){a6=aT(g);
a7();
a2()
}function aT(h){var k=[];
for(var g=0;
g<h.length;
++g){var j=b.extend(true,{},aF.series);
if(h[g].data){j.data=h[g].data;
delete h[g].data;
b.extend(true,j,h[g]);
h[g].data=j.data
}else{j.data=h[g]
}k.push(j)
}return k
}function bd(g,j){var h=g[j];
if(!h||h==1){return aS[j]
}if(typeof h=="number"){return aS[j.charAt(0)+h+j.slice(1)]
}return h
}function a7(){var k;
var j=a6.length,o=[],q=[];
for(k=0;
k<a6.length;
++k){var h=a6[k].color;
if(h!=null){--j;
if(typeof h=="number"){q.push(h)
}else{o.push(b.color.parse(a6[k].color))
}}}for(k=0;
k<q.length;
++k){j=Math.max(j,q[k]+1)
}var t=[],l=0;
k=0;
while(t.length<j){var s;
if(aF.colors.length==k){s=b.color.make(100,100,100)
}else{s=b.color.parse(aF.colors[k])
}var g=l%2==1?-1:1;
s.scale("rgb",1+g*Math.ceil(l/2)*0.2);
t.push(s);
++k;
if(k>=aF.colors.length){k=0;
++l
}}var r=0,n;
for(k=0;
k<a6.length;
++k){n=a6[k];
if(n.color==null){n.color=t[r].toString();
++r
}else{if(typeof n.color=="number"){n.color=t[n.color].toString()
}}if(n.lines.show==null){var p,m=true;
for(p in n){if(n[p].show){m=false;
break
}}if(m){n.lines.show=true
}}n.xaxis=bd(n,"xaxis");
n.yaxis=bd(n,"yaxis")
}}function a2(){var r=Number.POSITIVE_INFINITY,j=Number.NEGATIVE_INFINITY,m,s,h,y,l,u,E,p,x,g,v,I,D,t;
for(v in aS){aS[v].datamin=r;
aS[v].datamax=j;
aS[v].used=false
}function n(L,J,K){if(J<L.datamin){L.datamin=J
}if(K>L.datamax){L.datamax=K
}}for(m=0;
m<a6.length;
++m){u=a6[m];
u.datapoints={points:[]};
aV(aN.processRawData,[u,u.data,u.datapoints])
}for(m=0;
m<a6.length;
++m){u=a6[m];
var G=u.data,F=u.datapoints.format;
if(!F){F=[];
F.push({x:true,number:true,required:true});
F.push({y:true,number:true,required:true});
if(u.bars.show){F.push({y:true,number:true,required:false,defaultValue:0})
}u.datapoints.format=F
}if(u.datapoints.pointsize!=null){continue
}if(u.datapoints.pointsize==null){u.datapoints.pointsize=F.length
}p=u.datapoints.pointsize;
E=u.datapoints.points;
insertSteps=u.lines.show&&u.lines.steps;
u.xaxis.used=u.yaxis.used=true;
for(s=h=0;
s<G.length;
++s,h+=p){t=G[s];
var q=t==null;
if(!q){for(y=0;
y<p;
++y){I=t[y];
D=F[y];
if(D){if(D.number&&I!=null){I=+I;
if(isNaN(I)){I=null
}}if(I==null){if(D.required){q=true
}if(D.defaultValue!=null){I=D.defaultValue
}}}E[h+y]=I
}}if(q){for(y=0;
y<p;
++y){I=E[h+y];
if(I!=null){D=F[y];
if(D.x){n(u.xaxis,I,I)
}if(D.y){n(u.yaxis,I,I)
}}E[h+y]=null
}}else{if(insertSteps&&h>0&&E[h-p]!=null&&E[h-p]!=E[h]&&E[h-p+1]!=E[h+1]){for(y=0;
y<p;
++y){E[h+p+y]=E[h+y]
}E[h+1]=E[h-p+1];
h+=p
}}}}for(m=0;
m<a6.length;
++m){u=a6[m];
aV(aN.processDatapoints,[u,u.datapoints])
}for(m=0;
m<a6.length;
++m){u=a6[m];
E=u.datapoints.points,p=u.datapoints.pointsize;
var w=r,k=r,o=j,H=j;
for(s=0;
s<E.length;
s+=p){if(E[s]==null){continue
}for(y=0;
y<p;
++y){I=E[s+y];
D=F[y];
if(!D){continue
}if(D.x){if(I<w){w=I
}if(I>o){o=I
}}if(D.y){if(I<k){k=I
}if(I>H){H=I
}}}}if(u.bars.show){var z=u.bars.align=="left"?0:-u.bars.barWidth/2;
if(u.bars.horizontal){k+=z;
H+=z+u.bars.barWidth
}else{w+=z;
o+=z+u.bars.barWidth
}}n(u.xaxis,w,o);
n(u.yaxis,k,H)
}for(v in aS){if(aS[v].datamin==r){aS[v].datamin=null
}if(aS[v].datamax==j){aS[v].datamax=null
}}}function a1(){function g(j,k){var h=document.createElement("canvas");
h.width=j;
h.height=k;
if(b.browser.msie){h=window.G_vmlCanvasManager.initElement(h)
}return h
}d=av.width();
aO=av.height();
av.html("");
if(av.css("position")=="static"){av.css("position","relative")
}if(d<=0||aO<=0){throw"Invalid dimensions for plot, width = "+d+", height = "+aO
}if(b.browser.msie){window.G_vmlCanvasManager.init_(document)
}a9=b(g(d,aO)).appendTo(av).get(0);
at=a9.getContext("2d");
a3=b(g(d,aO)).css({position:"absolute",left:0,top:0}).appendTo(av).get(0);
an=a3.getContext("2d");
an.stroke()
}function aG(){aH=b([a3,a9]);
if(aF.grid.hoverable){aH.mousemove(bb)
}if(aF.grid.clickable){aH.click(ay)
}aV(aN.bindEvents,[aH])
}function ar(){function k(p,o){function m(s){return s
}var q,n,l=o.transform||m,r=o.inverseTransform;
if(p==aS.xaxis||p==aS.x2axis){q=p.scale=aR/(l(p.max)-l(p.min));
n=l(p.min);
if(l==m){p.p2c=function(s){return(s-n)*q
}
}else{p.p2c=function(s){return(l(s)-n)*q
}
}if(!r){p.c2p=function(s){return n+s/q
}
}else{p.c2p=function(s){return r(n+s/q)
}
}}else{q=p.scale=aW/(l(p.max)-l(p.min));
n=l(p.max);
if(l==m){p.p2c=function(s){return(n-s)*q
}
}else{p.p2c=function(s){return(n-l(s))*q
}
}if(!r){p.c2p=function(s){return n-s/q
}
}else{p.c2p=function(s){return r(n-s/q)
}
}}}function h(n,l){var o,m=[],p;
n.labelWidth=l.labelWidth;
n.labelHeight=l.labelHeight;
if(n==aS.xaxis||n==aS.x2axis){if(n.labelWidth==null){n.labelWidth=d/(n.ticks.length>0?n.ticks.length:1)
}if(n.labelHeight==null){m=[];
for(o=0;
o<n.ticks.length;
++o){p=n.ticks[o].label;
if(p){m.push('<div class="tickLabel" style="float:left;width:'+n.labelWidth+'px">'+p+"</div>")
}}if(m.length>0){var q=b('<div style="position:absolute;top:-10000px;width:10000px;font-size:smaller">'+m.join("")+'<div style="clear:left"></div></div>').appendTo(av);
n.labelHeight=q.height();
q.remove()
}}}else{if(n.labelWidth==null||n.labelHeight==null){for(o=0;
o<n.ticks.length;
++o){p=n.ticks[o].label;
if(p){m.push('<div class="tickLabel">'+p+"</div>")
}}if(m.length>0){var q=b('<div style="position:absolute;top:-10000px;font-size:smaller">'+m.join("")+"</div>").appendTo(av);
if(n.labelWidth==null){n.labelWidth=q.width()
}if(n.labelHeight==null){n.labelHeight=q.find("div").height()
}q.remove()
}}}if(n.labelWidth==null){n.labelWidth=0
}if(n.labelHeight==null){n.labelHeight=0
}}function j(){var l=aF.grid.borderWidth;
for(i=0;
i<a6.length;
++i){l=Math.max(l,2*(a6[i].points.radius+a6[i].points.lineWidth/2))
}aD.left=aD.right=aD.top=aD.bottom=l;
var m=aF.grid.labelMargin+aF.grid.borderWidth;
if(aS.xaxis.labelHeight>0){aD.bottom=Math.max(l,aS.xaxis.labelHeight+m)
}if(aS.yaxis.labelWidth>0){aD.left=Math.max(l,aS.yaxis.labelWidth+m)
}if(aS.x2axis.labelHeight>0){aD.top=Math.max(l,aS.x2axis.labelHeight+m)
}if(aS.y2axis.labelWidth>0){aD.right=Math.max(l,aS.y2axis.labelWidth+m)
}aR=d-aD.left-aD.right;
aW=aO-aD.bottom-aD.top
}var g;
for(g in aS){C(aS[g],aF[g])
}if(aF.grid.show){for(g in aS){aZ(aS[g],aF[g]);
az(aS[g],aF[g]);
h(aS[g],aF[g])
}j()
}else{aD.left=aD.right=aD.top=aD.bottom=0;
aR=d;
aW=aO
}for(g in aS){k(aS[g],aF[g])
}if(aF.grid.show){aU()
}bc()
}function C(n,k){var g=+(k.min!=null?k.min:n.datamin),j=+(k.max!=null?k.max:n.datamax),l=j-g;
if(l==0){var h=j==0?1:0.01;
if(k.min==null){g-=h
}if(k.max==null||k.min!=null){j+=h
}}else{var m=k.autoscaleMargin;
if(m!=null){if(k.min==null){g-=l*m;
if(g<0&&n.datamin!=null&&n.datamin>=0){g=0
}}if(k.max==null){j+=l*m;
if(j>0&&n.datamax!=null&&n.datamax<=0){j=0
}}}}n.min=g;
n.max=j
}function aZ(l,u){var q;
if(typeof u.ticks=="number"&&u.ticks>0){q=u.ticks
}else{if(l==aS.xaxis||l==aS.x2axis){q=0.3*Math.sqrt(d)
}else{q=0.3*Math.sqrt(aO)
}}var o=(l.max-l.min)/q,t,n,v,w,j,h,k;
if(u.mode=="time"){var p={second:1000,minute:60*1000,hour:60*60*1000,day:24*60*60*1000,month:30*24*60*60*1000,year:365.2425*24*60*60*1000};
var m=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[0.25,"month"],[0.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]];
var g=0;
if(u.minTickSize!=null){if(typeof u.tickSize=="number"){g=u.tickSize
}else{g=u.minTickSize[0]*p[u.minTickSize[1]]
}}for(j=0;
j<m.length-1;
++j){if(o<(m[j][0]*p[m[j][1]]+m[j+1][0]*p[m[j+1][1]])/2&&m[j][0]*p[m[j][1]]>=g){break
}}t=m[j][0];
v=m[j][1];
if(v=="year"){h=Math.pow(10,Math.floor(Math.log(o/p.year)/Math.LN10));
k=(o/p.year)/h;
if(k<1.5){t=1
}else{if(k<3){t=2
}else{if(k<7.5){t=5
}else{t=10
}}}t*=h
}if(u.tickSize){t=u.tickSize[0];
v=u.tickSize[1]
}n=function(H){var G=[],D=H.tickSize[0],z=H.tickSize[1],K=new Date(H.min);
var y=D*p[z];
if(z=="second"){K.setUTCSeconds(a(K.getUTCSeconds(),D))
}if(z=="minute"){K.setUTCMinutes(a(K.getUTCMinutes(),D))
}if(z=="hour"){K.setUTCHours(a(K.getUTCHours(),D))
}if(z=="month"){K.setUTCMonth(a(K.getUTCMonth(),D))
}if(z=="year"){K.setUTCFullYear(a(K.getUTCFullYear(),D))
}K.setUTCMilliseconds(0);
if(y>=p.minute){K.setUTCSeconds(0)
}if(y>=p.hour){K.setUTCMinutes(0)
}if(y>=p.day){K.setUTCHours(0)
}if(y>=p.day*4){K.setUTCDate(1)
}if(y>=p.year){K.setUTCMonth(0)
}var x=0,F=Number.NaN,I;
do{I=F;
F=K.getTime();
G.push({v:F,label:H.tickFormatter(F,H)});
if(z=="month"){if(D<1){K.setUTCDate(1);
var E=K.getTime();
K.setUTCMonth(K.getUTCMonth()+1);
var J=K.getTime();
K.setTime(F+x*p.hour+(J-E)*D);
x=K.getUTCHours();
K.setUTCHours(0)
}else{K.setUTCMonth(K.getUTCMonth()+D)
}}else{if(z=="year"){K.setUTCFullYear(K.getUTCFullYear()+D)
}else{K.setTime(F+y)
}}}while(F<H.max&&F!=I);
return G
};
w=function(F,z){var x=new Date(F);
if(u.timeformat!=null){return b.plot.formatDate(x,u.timeformat,u.monthNames)
}var E=z.tickSize[0]*p[z.tickSize[1]];
var D=z.max-z.min;
var y=(u.twelveHourClock)?" %p":"";
if(E<p.minute){fmt="%h:%M:%S"+y
}else{if(E<p.day){if(D<2*p.day){fmt="%h:%M"+y
}else{fmt="%b %d %h:%M"+y
}}else{if(E<p.month){fmt="%b %d"
}else{if(E<p.year){if(D<p.year){fmt="%b"
}else{fmt="%b %y"
}}else{fmt="%y"
}}}}return b.plot.formatDate(x,fmt,u.monthNames)
}
}else{var s=u.tickDecimals;
var r=-Math.floor(Math.log(o)/Math.LN10);
if(s!=null&&r>s){r=s
}h=Math.pow(10,-r);
k=o/h;
if(k<1.5){t=1
}else{if(k<3){t=2;
if(k>2.25&&(s==null||r+1<=s)){t=2.5;
++r
}}else{if(k<7.5){t=5
}else{t=10
}}}t*=h;
if(u.minTickSize!=null&&t<u.minTickSize){t=u.minTickSize
}if(u.tickSize!=null){t=u.tickSize
}l.tickDecimals=Math.max(0,(s!=null)?s:r);
n=function(D){var y=[];
var x=a(D.min,D.tickSize),E=0,F=Number.NaN,z;
do{z=F;
F=x+E*D.tickSize;
y.push({v:F,label:D.tickFormatter(F,D)});
++E
}while(F<D.max&&F!=z);
return y
};
w=function(y,x){return y.toFixed(x.tickDecimals)
}
}l.tickSize=v?[t,v]:t;
l.tickGenerator=n;
if(b.isFunction(u.tickFormatter)){l.tickFormatter=function(y,x){return""+u.tickFormatter(y,x)
}
}else{l.tickFormatter=w
}}function az(m,k){m.ticks=[];
if(!m.used){return
}if(k.ticks==null){m.ticks=m.tickGenerator(m)
}else{if(typeof k.ticks=="number"){if(k.ticks>0){m.ticks=m.tickGenerator(m)
}}else{if(k.ticks){var l=k.ticks;
if(b.isFunction(l)){l=l({min:m.min,max:m.max})
}var n,j;
for(n=0;
n<l.length;
++n){var h=null;
var g=l[n];
if(typeof g=="object"){j=g[0];
if(g.length>1){h=g[1]
}}else{j=g
}if(h==null){h=m.tickFormatter(j,m)
}m.ticks[n]={v:j,label:h}
}}}}if(k.autoscaleMargin!=null&&m.ticks.length>0){if(k.min==null){m.min=Math.min(m.min,m.ticks[0].v)
}if(k.max==null&&m.ticks.length>1){m.max=Math.max(m.max,m.ticks[m.ticks.length-1].v)
}}}function e(){at.clearRect(0,0,d,aO);
var h=aF.grid;
if(h.show&&!h.aboveData){a4()
}for(var g=0;
g<a6.length;
++g){ax(a6[g])
}aV(aN.draw,[at]);
if(h.show&&h.aboveData){a4()
}}function aX(o,h){var l=h+"axis",g=h+"2axis",m,j,k,n;
if(o[l]){m=aS[l];
j=o[l].from;
k=o[l].to
}else{if(o[g]){m=aS[g];
j=o[g].from;
k=o[g].to
}else{m=aS[l];
j=o[h+"1"];
k=o[h+"2"]
}}if(j!=null&&k!=null&&j>k){return{from:k,to:j,axis:m}
}return{from:j,to:k,axis:m}
}function a4(){var l;
at.save();
at.translate(aD.left,aD.top);
if(aF.grid.backgroundColor){at.fillStyle=a8(aF.grid.backgroundColor,aW,0,"rgba(255, 255, 255, 0)");
at.fillRect(0,0,aR,aW)
}var o=aF.grid.markings;
if(o){if(b.isFunction(o)){o=o({xmin:aS.xaxis.min,xmax:aS.xaxis.max,ymin:aS.yaxis.min,ymax:aS.yaxis.max,xaxis:aS.xaxis,yaxis:aS.yaxis,x2axis:aS.x2axis,y2axis:aS.y2axis})
}for(l=0;
l<o.length;
++l){var g=o[l],j=aX(g,"x"),m=aX(g,"y");
if(j.from==null){j.from=j.axis.min
}if(j.to==null){j.to=j.axis.max
}if(m.from==null){m.from=m.axis.min
}if(m.to==null){m.to=m.axis.max
}if(j.to<j.axis.min||j.from>j.axis.max||m.to<m.axis.min||m.from>m.axis.max){continue
}j.from=Math.max(j.from,j.axis.min);
j.to=Math.min(j.to,j.axis.max);
m.from=Math.max(m.from,m.axis.min);
m.to=Math.min(m.to,m.axis.max);
if(j.from==j.to&&m.from==m.to){continue
}j.from=j.axis.p2c(j.from);
j.to=j.axis.p2c(j.to);
m.from=m.axis.p2c(m.from);
m.to=m.axis.p2c(m.to);
if(j.from==j.to||m.from==m.to){at.beginPath();
at.strokeStyle=g.color||aF.grid.markingsColor;
at.lineWidth=g.lineWidth||aF.grid.markingsLineWidth;
at.moveTo(j.from,m.from);
at.lineTo(j.to,m.to);
at.stroke()
}else{at.fillStyle=g.color||aF.grid.markingsColor;
at.fillRect(j.from,m.to,j.to-j.from,m.from-m.to)
}}}at.lineWidth=1;
at.strokeStyle=aF.grid.tickColor;
at.beginPath();
var n,k=aS.xaxis;
for(l=0;
l<k.ticks.length;
++l){n=k.ticks[l].v;
if(n<=k.min||n>=aS.xaxis.max){continue
}at.moveTo(Math.floor(k.p2c(n))+at.lineWidth/2,0);
at.lineTo(Math.floor(k.p2c(n))+at.lineWidth/2,aW)
}k=aS.yaxis;
for(l=0;
l<k.ticks.length;
++l){n=k.ticks[l].v;
if(n<=k.min||n>=k.max){continue
}at.moveTo(0,Math.floor(k.p2c(n))+at.lineWidth/2);
at.lineTo(aR,Math.floor(k.p2c(n))+at.lineWidth/2)
}k=aS.x2axis;
for(l=0;
l<k.ticks.length;
++l){n=k.ticks[l].v;
if(n<=k.min||n>=k.max){continue
}at.moveTo(Math.floor(k.p2c(n))+at.lineWidth/2,-5);
at.lineTo(Math.floor(k.p2c(n))+at.lineWidth/2,5)
}k=aS.y2axis;
for(l=0;
l<k.ticks.length;
++l){n=k.ticks[l].v;
if(n<=k.min||n>=k.max){continue
}at.moveTo(aR-5,Math.floor(k.p2c(n))+at.lineWidth/2);
at.lineTo(aR+5,Math.floor(k.p2c(n))+at.lineWidth/2)
}at.stroke();
if(aF.grid.borderWidth){var h=aF.grid.borderWidth;
at.lineWidth=h;
at.strokeStyle=aF.grid.borderColor;
at.strokeRect(-h/2,-h/2,aR+h,aW+h)
}at.restore()
}function aU(){av.find(".tickLabels").remove();
var j=['<div class="tickLabels" style="font-size:smaller;color:'+aF.grid.color+'">'];
function g(l,k){for(var m=0;
m<l.ticks.length;
++m){var n=l.ticks[m];
if(!n.label||n.v<l.min||n.v>l.max){continue
}j.push(k(n,l))
}}var h=aF.grid.labelMargin+aF.grid.borderWidth;
g(aS.xaxis,function(l,k){return'<div style="position:absolute;top:'+(aD.top+aW+h)+"px;left:"+Math.round(aD.left+k.p2c(l.v)-k.labelWidth/2)+"px;width:"+k.labelWidth+'px;text-align:center" class="tickLabel">'+l.label+"</div>"
});
g(aS.yaxis,function(l,k){return'<div style="position:absolute;top:'+Math.round(aD.top+k.p2c(l.v)-k.labelHeight/2)+"px;right:"+(aD.right+aR+h)+"px;width:"+k.labelWidth+'px;text-align:right" class="tickLabel">'+l.label+"</div>"
});
g(aS.x2axis,function(l,k){return'<div style="position:absolute;bottom:'+(aD.bottom+aW+h)+"px;left:"+Math.round(aD.left+k.p2c(l.v)-k.labelWidth/2)+"px;width:"+k.labelWidth+'px;text-align:center" class="tickLabel">'+l.label+"</div>"
});
g(aS.y2axis,function(l,k){return'<div style="position:absolute;top:'+Math.round(aD.top+k.p2c(l.v)-k.labelHeight/2)+"px;left:"+(aD.left+aR+h)+"px;width:"+k.labelWidth+'px;text-align:left" class="tickLabel">'+l.label+"</div>"
});
j.push("</div>");
av.append(j.join(""))
}function ax(g){if(g.lines.show){aL(g)
}if(g.bars.show){aY(g)
}if(g.points.show){ap(g)
}}function aL(n){function g(z,t,o,q,s){var w=z.points,p=z.pointsize,r=null,u=null;
at.beginPath();
for(var x=p;
x<w.length;
x+=p){var y=w[x-p],D=w[x-p+1],E=w[x],v=w[x+1];
if(y==null||E==null){continue
}if(D<=v&&D<s.min){if(v<s.min){continue
}y=(s.min-D)/(v-D)*(E-y)+y;
D=s.min
}else{if(v<=D&&v<s.min){if(D<s.min){continue
}E=(s.min-D)/(v-D)*(E-y)+y;
v=s.min
}}if(D>=v&&D>s.max){if(v>s.max){continue
}y=(s.max-D)/(v-D)*(E-y)+y;
D=s.max
}else{if(v>=D&&v>s.max){if(D>s.max){continue
}E=(s.max-D)/(v-D)*(E-y)+y;
v=s.max
}}if(y<=E&&y<q.min){if(E<q.min){continue
}D=(q.min-y)/(E-y)*(v-D)+D;
y=q.min
}else{if(E<=y&&E<q.min){if(y<q.min){continue
}v=(q.min-y)/(E-y)*(v-D)+D;
E=q.min
}}if(y>=E&&y>q.max){if(E>q.max){continue
}D=(q.max-y)/(E-y)*(v-D)+D;
y=q.max
}else{if(E>=y&&E>q.max){if(y>q.max){continue
}v=(q.max-y)/(E-y)*(v-D)+D;
E=q.max
}}if(y!=r||D!=u){at.moveTo(q.p2c(y)+t,s.p2c(D)+o)
}r=E;
u=v;
at.lineTo(q.p2c(E)+t,s.p2c(v)+o)
}at.stroke()
}function m(v,o,D){var x=v.points,y=v.pointsize,r=Math.min(Math.max(0,D.min),D.max),F,G=0,p=false;
for(var u=y;
u<x.length;
u+=y){var z=x[u-y],t=x[u-y+1],w=x[u],q=x[u+1];
if(p&&z!=null&&w==null){at.lineTo(o.p2c(G),D.p2c(r));
at.fill();
p=false;
continue
}if(z==null||w==null){continue
}if(z<=w&&z<o.min){if(w<o.min){continue
}t=(o.min-z)/(w-z)*(q-t)+t;
z=o.min
}else{if(w<=z&&w<o.min){if(z<o.min){continue
}q=(o.min-z)/(w-z)*(q-t)+t;
w=o.min
}}if(z>=w&&z>o.max){if(w>o.max){continue
}t=(o.max-z)/(w-z)*(q-t)+t;
z=o.max
}else{if(w>=z&&w>o.max){if(z>o.max){continue
}q=(o.max-z)/(w-z)*(q-t)+t;
w=o.max
}}if(!p){at.beginPath();
at.moveTo(o.p2c(z),D.p2c(r));
p=true
}if(t>=D.max&&q>=D.max){at.lineTo(o.p2c(z),D.p2c(D.max));
at.lineTo(o.p2c(w),D.p2c(D.max));
G=w;
continue
}else{if(t<=D.min&&q<=D.min){at.lineTo(o.p2c(z),D.p2c(D.min));
at.lineTo(o.p2c(w),D.p2c(D.min));
G=w;
continue
}}var E=z,s=w;
if(t<=q&&t<D.min&&q>=D.min){z=(D.min-t)/(q-t)*(w-z)+z;
t=D.min
}else{if(q<=t&&q<D.min&&t>=D.min){w=(D.min-t)/(q-t)*(w-z)+z;
q=D.min
}}if(t>=q&&t>D.max&&q<=D.max){z=(D.max-t)/(q-t)*(w-z)+z;
t=D.max
}else{if(q>=t&&q>D.max&&t<=D.max){w=(D.max-t)/(q-t)*(w-z)+z;
q=D.max
}}if(z!=E){if(t<=D.min){F=D.min
}else{F=D.max
}at.lineTo(o.p2c(E),D.p2c(F));
at.lineTo(o.p2c(z),D.p2c(F))
}at.lineTo(o.p2c(z),D.p2c(t));
at.lineTo(o.p2c(w),D.p2c(q));
if(w!=s){if(q<=D.min){F=D.min
}else{F=D.max
}at.lineTo(o.p2c(w),D.p2c(F));
at.lineTo(o.p2c(s),D.p2c(F))
}G=Math.max(w,s)
}if(p){at.lineTo(o.p2c(G),D.p2c(r));
at.fill()
}}at.save();
at.translate(aD.left,aD.top);
at.lineJoin="round";
var l=n.lines.lineWidth,j=n.shadowSize;
if(l>0&&j>0){at.lineWidth=j;
at.strokeStyle="rgba(0,0,0,0.1)";
var k=Math.PI/18;
g(n.datapoints,Math.sin(k)*(l/2+j/2),Math.cos(k)*(l/2+j/2),n.xaxis,n.yaxis);
at.lineWidth=j/2;
g(n.datapoints,Math.sin(k)*(l/2+j/4),Math.cos(k)*(l/2+j/4),n.xaxis,n.yaxis)
}at.lineWidth=l;
at.strokeStyle=n.color;
var h=aB(n.lines,n.color,0,aW);
if(h){at.fillStyle=h;
m(n.datapoints,n.xaxis,n.yaxis)
}if(l>0){g(n.datapoints,0,0,n.xaxis,n.yaxis)
}at.restore()
}function ap(m){function k(x,y,q,o,w,r,u){var s=x.points,p=x.pointsize;
for(var n=0;
n<s.length;
n+=p){var t=s[n],v=s[n+1];
if(t==null||t<r.min||t>r.max||v<u.min||v>u.max){continue
}at.beginPath();
at.arc(r.p2c(t),u.p2c(v)+o,y,0,w,false);
if(q){at.fillStyle=q;
at.fill()
}at.stroke()
}}at.save();
at.translate(aD.left,aD.top);
var l=m.lines.lineWidth,h=m.shadowSize,j=m.points.radius;
if(l>0&&h>0){var g=h/2;
at.lineWidth=g;
at.strokeStyle="rgba(0,0,0,0.1)";
k(m.datapoints,j,null,g+g/2,Math.PI,m.xaxis,m.yaxis);
at.strokeStyle="rgba(0,0,0,0.2)";
k(m.datapoints,j,null,g/2,Math.PI,m.xaxis,m.yaxis)
}at.lineWidth=l;
at.strokeStyle=m.color;
k(m.datapoints,j,aB(m.points,m.color),0,2*Math.PI,m.xaxis,m.yaxis);
at.restore()
}function aM(y,o,h,s,l,n,z,j,t,w,g){var q,D,k,v,r,m,p,u,x;
if(g){u=m=p=true;
r=false;
q=h;
D=y;
v=o+s;
k=o+l;
if(D<q){x=D;
D=q;
q=x;
r=true;
m=false
}}else{r=m=p=true;
u=false;
q=y+s;
D=y+l;
k=h;
v=o;
if(v<k){x=v;
v=k;
k=x;
u=true;
p=false
}}if(D<j.min||q>j.max||v<t.min||k>t.max){return
}if(q<j.min){q=j.min;
r=false
}if(D>j.max){D=j.max;
m=false
}if(k<t.min){k=t.min;
u=false
}if(v>t.max){v=t.max;
p=false
}q=j.p2c(q);
k=t.p2c(k);
D=j.p2c(D);
v=t.p2c(v);
if(z){w.beginPath();
w.moveTo(q,k);
w.lineTo(q,v);
w.lineTo(D,v);
w.lineTo(D,k);
w.fillStyle=z(k,v);
w.fill()
}if(r||m||p||u){w.beginPath();
w.moveTo(q,k+n);
if(r){w.lineTo(q,v+n)
}else{w.moveTo(q,v+n)
}if(p){w.lineTo(D,v+n)
}else{w.moveTo(D,v+n)
}if(m){w.lineTo(D,k+n)
}else{w.moveTo(D,k+n)
}if(u){w.lineTo(q,k+n)
}else{w.moveTo(q,k+n)
}w.stroke()
}}function aY(j){function k(l,m,t,o,u,r,s){var q=l.points,p=l.pointsize;
for(var n=0;
n<q.length;
n+=p){if(q[n]==null){continue
}aM(q[n],q[n+1],q[n+2],m,t,o,u,r,s,at,j.bars.horizontal)
}}at.save();
at.translate(aD.left,aD.top);
at.lineWidth=j.bars.lineWidth;
at.strokeStyle=j.color;
var g=j.bars.align=="left"?0:-j.bars.barWidth/2;
var h=j.bars.fill?function(m,l){return aB(j.bars,j.color,m,l)
}:null;
k(j.datapoints,g,g+j.bars.barWidth,0,h,j.xaxis,j.yaxis);
at.restore()
}function aB(g,j,h,l){var m=g.fill;
if(!m){return null
}if(g.fillColor){return a8(g.fillColor,h,l,j)
}var k=b.color.parse(j);
k.a=typeof m=="number"?m:0.4;
k.normalize();
return k.toString()
}function bc(){av.find(".legend").remove();
if(!aF.legend.show){return
}var m=[],o=false,q=aF.legend.labelFormatter,h,p;
for(i=0;
i<a6.length;
++i){h=a6[i];
p=h.label;
if(!p){continue
}if(i%aF.legend.noColumns==0){if(o){m.push("</tr>")
}m.push("<tr>");
o=true
}if(q){p=q(p,h)
}m.push('<td class="legendColorBox"><div style="border:1px solid '+aF.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+h.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+p+"</td>")
}if(o){m.push("</tr>")
}if(m.length==0){return
}var j='<table style="font-size:smaller;color:'+aF.grid.color+'">'+m.join("")+"</table>";
if(aF.legend.container!=null){b(aF.legend.container).html(j)
}else{var k="",s=aF.legend.position,l=aF.legend.margin;
if(l[0]==null){l=[l,l]
}if(s.charAt(0)=="n"){k+="top:"+(l[1]+aD.top)+"px;"
}else{if(s.charAt(0)=="s"){k+="bottom:"+(l[1]+aD.bottom)+"px;"
}}if(s.charAt(1)=="e"){k+="right:"+(l[0]+aD.right)+"px;"
}else{if(s.charAt(1)=="w"){k+="left:"+(l[0]+aD.left)+"px;"
}}var n=b('<div class="legend">'+j.replace('style="','style="position:absolute;'+k+";")+"</div>").appendTo(av);
if(aF.legend.backgroundOpacity!=0){var r=aF.legend.backgroundColor;
if(r==null){r=aF.grid.backgroundColor;
if(r&&typeof r=="string"){r=b.color.parse(r)
}else{r=b.color.extract(n,"background-color")
}r.a=1;
r=r.toString()
}var g=n.children();
b('<div style="position:absolute;width:'+g.width()+"px;height:"+g.height()+"px;"+k+"background-color:"+r+';"> </div>').prependTo(n).css("opacity",aF.legend.backgroundOpacity)
}}}var a0=[],aK=null;
function aJ(o,G,s){var u=aF.grid.mouseActiveRadius,m=u*u+1,h=null,w=false,l,I;
for(l=0;
l<a6.length;
++l){if(!s(a6[l])){continue
}var r=a6[l],q=r.xaxis,F=r.yaxis,k=r.datapoints.points,g=r.datapoints.pointsize,E=q.c2p(o),D=F.c2p(G),H=u/q.scale,p=u/F.scale;
if(r.lines.show||r.points.show){for(I=0;
I<k.length;
I+=g){var j=k[I],n=k[I+1];
if(j==null){continue
}if(j-E>H||j-E<-H||n-D>p||n-D<-p){continue
}var z=Math.abs(q.p2c(j)-o),y=Math.abs(F.p2c(n)-G),v=z*z+y*y;
if(v<=m){m=v;
h=[l,I/g]
}}}if(r.bars.show&&!h){var t=r.bars.align=="left"?0:-r.bars.barWidth/2,J=t+r.bars.barWidth;
for(I=0;
I<k.length;
I+=g){var j=k[I],n=k[I+1],x=k[I+2];
if(j==null){continue
}if(a6[l].bars.horizontal?(E<=Math.max(x,j)&&E>=Math.min(x,j)&&D>=n+t&&D<=n+J):(E>=j+t&&E<=j+J&&D>=Math.min(x,n)&&D<=Math.max(x,n))){h=[l,I/g]
}}}}if(h){l=h[0];
I=h[1];
g=a6[l].datapoints.pointsize;
return{datapoint:a6[l].datapoints.points.slice(I*g,(I+1)*g),dataIndex:I,series:a6[l],seriesIndex:l}
}return null
}function bb(g){if(aF.grid.hoverable){aI("plothover",g,function(h){return h.hoverable!=false
})
}}function ay(g){aI("plotclick",g,function(h){return h.clickable!=false
})
}function aI(o,p,m){var q=aH.offset(),g={pageX:p.pageX,pageY:p.pageY},n=p.pageX-q.left-aD.left,l=p.pageY-q.top-aD.top;
if(aS.xaxis.used){g.x=aS.xaxis.c2p(n)
}if(aS.yaxis.used){g.y=aS.yaxis.c2p(l)
}if(aS.x2axis.used){g.x2=aS.x2axis.c2p(n)
}if(aS.y2axis.used){g.y2=aS.y2axis.c2p(l)
}var k=aJ(n,l,m);
if(k){k.pageX=parseInt(k.series.xaxis.p2c(k.datapoint[0])+q.left+aD.left);
k.pageY=parseInt(k.series.yaxis.p2c(k.datapoint[1])+q.top+aD.top)
}if(aF.grid.autoHighlight){for(var j=0;
j<a0.length;
++j){var h=a0[j];
if(h.auto==o&&!(k&&h.series==k.series&&h.point==k.datapoint)){A(h.series,h.point)
}}if(k){aw(k.series,k.datapoint,o)
}}av.trigger(o,[g,k])
}function ba(){if(!aK){aK=setTimeout(aA,30)
}}function aA(){aK=null;
an.save();
an.clearRect(0,0,d,aO);
an.translate(aD.left,aD.top);
var h,g;
for(h=0;
h<a0.length;
++h){g=a0[h];
if(g.series.bars.show){f(g.series,g.point)
}else{aQ(g.series,g.point)
}}an.restore();
aV(aN.drawOverlay,[an])
}function aw(j,g,h){if(typeof j=="number"){j=a6[j]
}if(typeof g=="number"){g=j.data[g]
}var k=au(j,g);
if(k==-1){a0.push({series:j,point:g,auto:h});
ba()
}else{if(!h){a0[k].auto=false
}}}function A(g,j){if(g==null&&j==null){a0=[];
ba()
}if(typeof g=="number"){g=a6[g]
}if(typeof j=="number"){j=g.data[j]
}var h=au(g,j);
if(h!=-1){a0.splice(h,1);
ba()
}}function au(j,h){for(var g=0;
g<a0.length;
++g){var k=a0[g];
if(k.series==j&&k.point[0]==h[0]&&k.point[1]==h[1]){return g
}}return -1
}function aQ(m,n){var o=n[0],h=n[1],j=m.xaxis,k=m.yaxis;
if(o<j.min||o>j.max||h<k.min||h>k.max){return
}var l=m.points.radius+m.points.lineWidth/2;
an.lineWidth=l;
an.strokeStyle=b.color.parse(m.color).scale("a",0.5).toString();
var g=1.5*l;
an.beginPath();
an.arc(j.p2c(o),k.p2c(h),g,0,2*Math.PI,false);
an.stroke()
}function f(h,g){an.lineWidth=h.bars.lineWidth;
an.strokeStyle=b.color.parse(h.color).scale("a",0.5).toString();
var j=b.color.parse(h.color).scale("a",0.5).toString();
var k=h.bars.align=="left"?0:-h.bars.barWidth/2;
aM(g[0],g[1],g[2]||0,k,k+h.bars.barWidth,0,function(){return j
},h.xaxis,h.yaxis,an,h.bars.horizontal)
}function a8(n,o,j,l){if(typeof n=="string"){return n
}else{var k=at.createLinearGradient(0,j,0,o);
for(var m=0,g=n.colors.length;
m<g;
++m){var h=n.colors[m];
if(typeof h!="string"){h=b.color.parse(l).scale("rgb",h.brightness);
h.a*=h.opacity;
h=h.toString()
}k.addColorStop(m/(g-1),h)
}return k
}}}b.plot=function(f,d,e){var g=new c(b(f),d,e,b.plot.plugins);
return g
};
b.plot.plugins=[];
b.plot.formatDate=function(n,f,d){var j=function(o){o=""+o;
return o.length==1?"0"+o:o
};
var g=[];
var h=false;
var k=n.getUTCHours();
var m=k<12;
if(d==null){d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
}if(f.search(/%p|%P/)!=-1){if(k>12){k=k-12
}else{if(k==0){k=12
}}}for(var e=0;
e<f.length;
++e){var l=f.charAt(e);
if(h){switch(l){case"h":l=""+k;
break;
case"H":l=j(k);
break;
case"M":l=j(n.getUTCMinutes());
break;
case"S":l=j(n.getUTCSeconds());
break;
case"d":l=""+n.getUTCDate();
break;
case"m":l=""+(n.getUTCMonth()+1);
break;
case"y":l=""+n.getUTCFullYear();
break;
case"b":l=""+d[n.getUTCMonth()];
break;
case"p":l=(m)?("am"):("pm");
break;
case"P":l=(m)?("AM"):("PM");
break
}g.push(l);
h=false
}else{if(l=="%"){h=true
}else{g.push(l)
}}}return g.join("")
};
function a(d,e){return e*Math.floor(d/e)
}})(jQuery);
(function(a){var d=a.browser.msie&&parseInt(a.browser.version)==6&&typeof window.XMLHttpRequest!="object",b=null,c=[];
a.modal=function(f,e){return a.modal.impl.init(f,e)
};
a.modal.close=function(){a.modal.impl.close()
};
a.fn.modal=function(e){return a.modal.impl.init(this,e)
};
a.modal.defaults={appendTo:"body",focus:true,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:false,autoPosition:true,zIndex:1000,close:true,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:true,overlayClose:false,position:null,persist:false,modal:true,onOpen:null,onShow:null,onClose:null};
a.modal.impl={o:null,d:{},init:function(g,e){var f=this;
if(f.d.data){return false
}b=a.browser.msie&&!a.boxModel;
f.o=a.extend({},a.modal.defaults,e);
f.zIndex=f.o.zIndex;
f.occb=false;
if(typeof g=="object"){g=g instanceof jQuery?g:a(g);
f.d.placeholder=false;
if(g.parent().parent().size()>0){g.before(a("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"}));
f.d.placeholder=true;
f.display=g.css("display");
if(!f.o.persist){f.d.orig=g.clone(true)
}}}else{if(typeof g=="string"||typeof g=="number"){g=a("<div></div>").html(g)
}else{alert("SimpleModal Error: Unsupported data type: "+typeof g);
return f
}}f.create(g);
g=null;
f.open();
if(a.isFunction(f.o.onShow)){f.o.onShow.apply(f,[f.d])
}return f
},create:function(f){var e=this;
c=e.getDimensions();
if(e.o.modal&&d){e.d.iframe=a('<iframe src="javascript:false;"></iframe>').css(a.extend(e.o.iframeCss,{display:"none",opacity:0,position:"fixed",height:c[0],width:c[1],zIndex:e.o.zIndex,top:0,left:0})).appendTo(e.o.appendTo)
}e.d.overlay=a("<div></div>").attr("id",e.o.overlayId).addClass("simplemodal-overlay").css(a.extend(e.o.overlayCss,{display:"none",opacity:e.o.opacity/100,height:e.o.modal?c[0]:0,width:e.o.modal?c[1]:0,position:"fixed",left:0,top:0,zIndex:e.o.zIndex+1})).appendTo(e.o.appendTo);
e.d.container=a("<div></div>").attr("id",e.o.containerId).addClass("simplemodal-container").css(a.extend(e.o.containerCss,{display:"none",position:"fixed",zIndex:e.o.zIndex+2})).append(e.o.close&&e.o.closeHTML?a(e.o.closeHTML).addClass(e.o.closeClass):"").appendTo(e.o.appendTo);
e.d.wrap=a("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(e.d.container);
e.d.data=f.attr("id",f.attr("id")||e.o.dataId).addClass("simplemodal-data").css(a.extend(e.o.dataCss,{display:"none"})).appendTo("body");
f=null;
e.setContainerDimensions();
e.d.data.appendTo(e.d.wrap);
if(d||b){e.fixIE()
}},bindEvents:function(){var e=this;
a("."+e.o.closeClass).bind("click.simplemodal",function(f){f.preventDefault();
e.close()
});
if(e.o.modal&&e.o.close&&e.o.overlayClose){e.d.overlay.bind("click.simplemodal",function(f){f.preventDefault();
e.close()
})
}a(document).bind("keydown.simplemodal",function(f){if(e.o.modal&&e.o.focus&&f.keyCode==9){e.watchTab(f)
}else{if((e.o.close&&e.o.escClose)&&f.keyCode==27){f.preventDefault();
e.close()
}}});
a(window).bind("resize.simplemodal",function(){c=e.getDimensions();
e.setContainerDimensions(true);
if(d||b){e.fixIE()
}else{if(e.o.modal){e.d.iframe&&e.d.iframe.css({height:c[0],width:c[1]});
e.d.overlay.css({height:c[0],width:c[1]})
}}})
},unbindEvents:function(){a("."+this.o.closeClass).unbind("click.simplemodal");
a(document).unbind("keydown.simplemodal");
a(window).unbind("resize.simplemodal");
this.d.overlay.unbind("click.simplemodal")
},fixIE:function(){var e=this,f=e.o.position;
a.each([e.d.iframe||null,!e.o.modal?null:e.d.overlay,e.d.container],function(r,v){if(v){var g="document.body.clientHeight",y="document.body.clientWidth",l="document.body.scrollHeight",j="document.body.scrollLeft",w="document.body.scrollTop",t="document.body.scrollWidth",k="document.documentElement.clientHeight",u="document.documentElement.clientWidth",q="document.documentElement.scrollLeft",p="document.documentElement.scrollTop",o=v[0].style;
o.position="absolute";
if(r<2){o.removeExpression("height");
o.removeExpression("width");
o.setExpression("height",""+l+" > "+g+" ? "+l+" : "+g+' + "px"');
o.setExpression("width",""+t+" > "+y+" ? "+t+" : "+y+' + "px"')
}else{var x,h;
if(f&&f.constructor==Array){var m=f[0]?typeof f[0]=="number"?f[0].toString():f[0].replace(/px/,""):v.css("top").replace(/px/,"");
x=m.indexOf("%")==-1?m+" + (t = "+p+" ? "+p+" : "+w+') + "px"':parseInt(m.replace(/%/,""))+" * (("+k+" || "+g+") / 100) + (t = "+p+" ? "+p+" : "+w+') + "px"';
if(f[1]){var n=typeof f[1]=="number"?f[1].toString():f[1].replace(/px/,"");
h=n.indexOf("%")==-1?n+" + (t = "+q+" ? "+q+" : "+j+') + "px"':parseInt(n.replace(/%/,""))+" * (("+u+" || "+y+") / 100) + (t = "+q+" ? "+q+" : "+j+') + "px"'
}}else{x="("+k+" || "+g+") / 2 - (this.offsetHeight / 2) + (t = "+p+" ? "+p+" : "+w+') + "px"';
h="("+u+" || "+y+") / 2 - (this.offsetWidth / 2) + (t = "+q+" ? "+q+" : "+j+') + "px"'
}o.removeExpression("top");
o.removeExpression("left");
o.setExpression("top",x);
o.setExpression("left",h)
}}})
},focus:function(f){var h=this,e=f||"first";
var g=a(":input:enabled:visible:"+e,h.d.wrap);
g.length>0?g.focus():h.d.wrap.focus()
},getDimensions:function(){var f=a(window);
var e=a.browser.opera&&a.browser.version>"9.5"&&a.fn.jquery<="1.2.6"?document.documentElement.clientHeight:a.browser.opera&&a.browser.version<"9.5"&&a.fn.jquery>"1.2.6"?window.innerHeight:f.height();
return[e,f.width()]
},getVal:function(e){return e=="auto"?0:e.indexOf("%")>0?e:parseInt(e.replace(/px/,""))
},setContainerDimensions:function(l){var g=this;
if(!l||(l&&g.o.autoResize)){var k=a.browser.opera?g.d.container.height():g.getVal(g.d.container.css("height")),j=a.browser.opera?g.d.container.width():g.getVal(g.d.container.css("width")),f=g.d.data.outerHeight(true),h=g.d.data.outerWidth(true);
var i=g.o.maxHeight&&g.o.maxHeight<c[0]?g.o.maxHeight:c[0],e=g.o.maxWidth&&g.o.maxWidth<c[1]?g.o.maxWidth:c[1];
if(!k){if(!f){k=g.o.minHeight
}else{if(f>i){k=i
}else{if(f<g.o.minHeight){k=g.o.minHeight
}else{k=f
}}}}else{k=k>i?i:k
}if(!j){if(!h){j=g.o.minWidth
}else{if(h>e){j=e
}else{if(h<g.o.minWidth){j=g.o.minWidth
}else{j=h
}}}}else{j=j>e?e:j
}g.d.container.css({height:k,width:j});
if(f>k||h>j){g.d.wrap.css({overflow:"auto"})
}}if(g.o.autoPosition){g.setPosition()
}},setPosition:function(){var i=this,f,e,g=(c[0]/2)-(i.d.container.outerHeight(true)/2),h=(c[1]/2)-(i.d.container.outerWidth(true)/2);
if(i.o.position&&Object.prototype.toString.call(i.o.position)==="[object Array]"){f=i.o.position[0]||g;
e=i.o.position[1]||h
}else{f=g;
e=h
}i.d.container.css({left:e,top:f})
},watchTab:function(f){var e=this;
if(a(f.target).parents(".simplemodal-container").length>0){e.inputs=a(":input:enabled:visible:first, :input:enabled:visible:last",e.d.data[0]);
if((!f.shiftKey&&f.target==e.inputs[e.inputs.length-1])||(f.shiftKey&&f.target==e.inputs[0])||e.inputs.length==0){f.preventDefault();
var g=f.shiftKey?"last":"first";
setTimeout(function(){e.focus(g)
},10)
}}else{f.preventDefault();
setTimeout(function(){e.focus()
},10)
}},open:function(){var e=this;
e.d.iframe&&e.d.iframe.show();
if(a.isFunction(e.o.onOpen)){e.o.onOpen.apply(e,[e.d])
}else{e.d.overlay.show();
e.d.container.show();
e.d.data.show()
}e.focus();
e.bindEvents()
},close:function(){var e=this;
if(!e.d.data){return false
}e.unbindEvents();
if(a.isFunction(e.o.onClose)&&!e.occb){e.occb=true;
e.o.onClose.apply(e,[e.d])
}else{if(e.d.placeholder){var f=a("#simplemodal-placeholder");
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
(function(){var t=this;
var r=t._;
var d={};
var j=Array.prototype,A=Object.prototype;
var c=j.slice,k=j.unshift,v=A.toString,p=A.hasOwnProperty;
var x=j.forEach,h=j.map,z=j.reduce,f=j.reduceRight,w=j.filter,b=j.every,n=j.some,g=j.indexOf,i=j.lastIndexOf,s=Array.isArray,B=Object.keys;
var a=function(C){return new u(C)
};
if(typeof module!=="undefined"&&module.exports){module.exports=a;
a._=a
}else{t._=a
}a.VERSION="1.1.3";
var e=a.each=a.forEach=function(F,D,C){var E;
if(x&&F.forEach===x){F.forEach(D,C)
}else{if(a.isNumber(F.length)){for(var I=0,G=F.length;
I<G;
I++){if(D.call(C,F[I],I,F)===d){return
}}}else{for(var H in F){if(p.call(F,H)){if(D.call(C,F[H],H,F)===d){return
}}}}}};
a.map=function(D,C,F){if(h&&D.map===h){return D.map(C,F)
}var E=[];
e(D,function(I,G,H){E[E.length]=C.call(F,I,G,H)
});
return E
};
a.reduce=a.foldl=a.inject=function(E,D,F,C){var G=F!==void 0;
if(z&&E.reduce===z){if(C){D=a.bind(D,C)
}return G?E.reduce(D,F):E.reduce(D)
}e(E,function(J,H,I){if(!G&&H===0){F=J
}else{F=D.call(C,F,J,H,I)
}});
return F
};
a.reduceRight=a.foldr=function(D,C,F,G){if(f&&D.reduceRight===f){if(G){C=a.bind(C,G)
}return F!==void 0?D.reduceRight(C,F):D.reduceRight(C)
}var E=(a.isArray(D)?D.slice():a.toArray(D)).reverse();
return a.reduce(E,C,F,G)
};
a.find=a.detect=function(D,C,F){var E;
y(D,function(I,G,H){if(C.call(F,I,G,H)){E=I;
return true
}});
return E
};
a.filter=a.select=function(D,C,F){if(w&&D.filter===w){return D.filter(C,F)
}var E=[];
e(D,function(I,G,H){if(C.call(F,I,G,H)){E[E.length]=I
}});
return E
};
a.reject=function(D,C,F){var E=[];
e(D,function(I,G,H){if(!C.call(F,I,G,H)){E[E.length]=I
}});
return E
};
a.every=a.all=function(D,C,F){C=C||a.identity;
if(b&&D.every===b){return D.every(C,F)
}var E=true;
e(D,function(I,G,H){if(!(E=E&&C.call(F,I,G,H))){return d
}});
return E
};
var y=a.some=a.any=function(D,C,F){C=C||a.identity;
if(n&&D.some===n){return D.some(C,F)
}var E=false;
e(D,function(I,G,H){if(E=C.call(F,I,G,H)){return d
}});
return E
};
a.include=a.contains=function(E,D){if(g&&E.indexOf===g){return E.indexOf(D)!=-1
}var C=false;
y(E,function(F){if(C=F===D){return true
}});
return C
};
a.invoke=function(D,E){var C=c.call(arguments,2);
return a.map(D,function(F){return(E?F[E]:F).apply(F,C)
})
};
a.pluck=function(D,C){return a.map(D,function(E){return E[C]
})
};
a.max=function(D,C,F){if(!C&&a.isArray(D)){return Math.max.apply(Math,D)
}var E={computed:-Infinity};
e(D,function(J,G,I){var H=C?C.call(F,J,G,I):J;
H>=E.computed&&(E={value:J,computed:H})
});
return E.value
};
a.min=function(D,C,F){if(!C&&a.isArray(D)){return Math.min.apply(Math,D)
}var E={computed:Infinity};
e(D,function(J,G,I){var H=C?C.call(F,J,G,I):J;
H<E.computed&&(E={value:J,computed:H})
});
return E.value
};
a.sortBy=function(E,D,C){return a.pluck(a.map(E,function(H,F,G){return{value:H,criteria:D.call(C,H,F,G)}
}).sort(function(I,H){var G=I.criteria,F=H.criteria;
return G<F?-1:G>F?1:0
}),"value")
};
a.sortedIndex=function(H,G,E){E=E||a.identity;
var C=0,F=H.length;
while(C<F){var D=(C+F)>>1;
E(H[D])<E(G)?C=D+1:F=D
}return C
};
a.toArray=function(C){if(!C){return[]
}if(C.toArray){return C.toArray()
}if(a.isArray(C)){return C
}if(a.isArguments(C)){return c.call(C)
}return a.values(C)
};
a.size=function(C){return a.toArray(C).length
};
a.first=a.head=function(E,D,C){return D&&!C?c.call(E,0,D):E[0]
};
a.rest=a.tail=function(E,C,D){return c.call(E,a.isUndefined(C)||D?1:C)
};
a.last=function(C){return C[C.length-1]
};
a.compact=function(C){return a.filter(C,function(D){return !!D
})
};
a.flatten=function(C){return a.reduce(C,function(E,D){if(a.isArray(D)){return E.concat(a.flatten(D))
}E[E.length]=D;
return E
},[])
};
a.without=function(D){var C=c.call(arguments,1);
return a.filter(D,function(E){return !a.include(C,E)
})
};
a.uniq=a.unique=function(D,C){return a.reduce(D,function(E,G,F){if(0==F||(C===true?a.last(E)!=G:!a.include(E,G))){E[E.length]=G
}return E
},[])
};
a.intersect=function(D){var C=c.call(arguments,1);
return a.filter(a.uniq(D),function(E){return a.every(C,function(F){return a.indexOf(F,E)>=0
})
})
};
a.zip=function(){var E=c.call(arguments);
var D=a.max(a.pluck(E,"length"));
var C=new Array(D);
for(var F=0;
F<D;
F++){C[F]=a.pluck(E,""+F)
}return C
};
a.indexOf=function(D,C){if(g&&D.indexOf===g){return D.indexOf(C)
}for(var F=0,E=D.length;
F<E;
F++){if(D[F]===C){return F
}}return -1
};
a.lastIndexOf=function(E,D){if(i&&E.lastIndexOf===i){return E.lastIndexOf(D)
}var C=E.length;
while(C--){if(E[C]===D){return C
}}return -1
};
a.range=function(D,I,J){var H=c.call(arguments),C=H.length<=1,D=C?0:H[0],I=C?H[0]:H[1],J=H[2]||1,F=Math.max(Math.ceil((I-D)/J),0),E=0,G=new Array(F);
while(E<F){G[E++]=D;
D+=J
}return G
};
a.bind=function(D,E){var C=c.call(arguments,2);
return function(){return D.apply(E||{},C.concat(c.call(arguments)))
}
};
a.bindAll=function(D){var C=c.call(arguments,1);
if(C.length==0){C=a.functions(D)
}e(C,function(E){D[E]=a.bind(D[E],D)
});
return D
};
a.memoize=function(E,D){var C={};
D=D||a.identity;
return function(){var F=D.apply(this,arguments);
return F in C?C[F]:(C[F]=E.apply(this,arguments))
}
};
a.delay=function(D,E){var C=c.call(arguments,2);
return setTimeout(function(){return D.apply(D,C)
},E)
};
a.defer=function(C){return a.delay.apply(a,[C,1].concat(c.call(arguments,1)))
};
var l=function(F,D,E){var C;
return function(){var H=this,G=arguments;
var I=function(){C=null;
F.apply(H,G)
};
if(E){clearTimeout(C)
}if(E||!C){C=setTimeout(I,D)
}}
};
a.throttle=function(C,D){return l(C,D,false)
};
a.debounce=function(C,D){return l(C,D,true)
};
a.wrap=function(C,D){return function(){var E=[C].concat(c.call(arguments));
return D.apply(D,E)
}
};
a.compose=function(){var C=c.call(arguments);
return function(){var E=c.call(arguments);
for(var D=C.length-1;
D>=0;
D--){E=[C[D].apply(this,E)]
}return E[0]
}
};
a.keys=B||function(E){if(a.isArray(E)){return a.range(0,E.length)
}var D=[];
for(var C in E){if(p.call(E,C)){D[D.length]=C
}}return D
};
a.values=function(C){return a.map(C,a.identity)
};
a.functions=a.methods=function(C){return a.filter(a.keys(C),function(D){return a.isFunction(C[D])
}).sort()
};
a.extend=function(C){e(c.call(arguments,1),function(E){for(var D in E){C[D]=E[D]
}});
return C
};
a.clone=function(C){return a.isArray(C)?C.slice():a.extend({},C)
};
a.tap=function(D,C){C(D);
return D
};
a.isEqual=function(H,G){if(H===G){return true
}var D=typeof(H),F=typeof(G);
if(D!=F){return false
}if(H==G){return true
}if((!H&&G)||(H&&!G)){return false
}if(H.isEqual){return H.isEqual(G)
}if(a.isDate(H)&&a.isDate(G)){return H.getTime()===G.getTime()
}if(a.isNaN(H)&&a.isNaN(G)){return false
}if(a.isRegExp(H)&&a.isRegExp(G)){return H.source===G.source&&H.global===G.global&&H.ignoreCase===G.ignoreCase&&H.multiline===G.multiline
}if(D!=="object"){return false
}if(H.length&&(H.length!==G.length)){return false
}var I=a.keys(H),E=a.keys(G);
if(I.length!=E.length){return false
}for(var C in H){if(!(C in G)||!a.isEqual(H[C],G[C])){return false
}}return true
};
a.isEmpty=function(D){if(a.isArray(D)||a.isString(D)){return D.length===0
}for(var C in D){if(p.call(D,C)){return false
}}return true
};
a.isElement=function(C){return !!(C&&C.nodeType==1)
};
a.isArray=s||function(C){return !!(C&&C.concat&&C.unshift&&!C.callee)
};
a.isArguments=function(C){return !!(C&&C.callee)
};
a.isFunction=function(C){return !!(C&&C.constructor&&C.call&&C.apply)
};
a.isString=function(C){return !!(C===""||(C&&C.charCodeAt&&C.substr))
};
a.isNumber=function(C){return !!(C===0||(C&&C.toExponential&&C.toFixed))
};
a.isNaN=function(C){return v.call(C)==="[object Number]"&&isNaN(C)
};
a.isBoolean=function(C){return C===true||C===false
};
a.isDate=function(C){return !!(C&&C.getTimezoneOffset&&C.setUTCFullYear)
};
a.isRegExp=function(C){return !!(C&&C.test&&C.exec&&(C.ignoreCase||C.ignoreCase===false))
};
a.isNull=function(C){return C===null
};
a.isUndefined=function(C){return C===void 0
};
a.noConflict=function(){t._=r;
return this
};
a.identity=function(C){return C
};
a.times=function(D,C,F){for(var E=0;
E<D;
E++){C.call(F,E)
}};
a.mixin=function(C){e(a.functions(C),function(D){q(D,a[D]=C[D])
})
};
var m=0;
a.uniqueId=function(C){var D=m++;
return C?C+D:D
};
a.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g};
a.template=function(D,C){var E=a.templateSettings;
var F="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+D.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(E.interpolate,function(H,I){return"',"+I.replace(/\\'/g,"'")+",'"
}).replace(E.evaluate||null,function(H,I){return"');"+I.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"
}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";
var G=new Function("obj",F);
return C?G(C):G
};
var u=function(C){this._wrapped=C
};
a.prototype=u.prototype;
var o=function(D,C){return C?a(D).chain():D
};
var q=function(C,D){u.prototype[C]=function(){var E=c.call(arguments);
k.call(E,this._wrapped);
return o(D.apply(a,E),this._chain)
}
};
a.mixin(a);
e(["pop","push","reverse","shift","sort","splice","unshift"],function(C){var D=j[C];
u.prototype[C]=function(){D.apply(this._wrapped,arguments);
return o(this._wrapped,this._chain)
}
});
e(["concat","join","slice"],function(C){var D=j[C];
u.prototype[C]=function(){return o(D.apply(this._wrapped,arguments),this._chain)
}
});
u.prototype.chain=function(){this._chain=true;
return this
};
u.prototype.value=function(){return this._wrapped
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
wa.replaceAll=function(b,a){for(var d=0,c=a.length;
d<c;
d++){b=b.replace(a[d][0],a[d][1])
}return b
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
wa.PropertyStorage.prototype.set=function(a,b,c){var d=this.cache;
neo4j.Web.post(this.storageUrl+a,b,(function(e,f,g){return function(){d[f]=g;
if(typeof(e)==="function"){e()
}}
})(c,a,b))
};
wa.prop=new wa.PropertyStorage("/db/manage/properties/");
wa.Servers=(function(){var f="http://"+document.domain+":9999/";
var a="db/manage/";
var b={};
var j=null;
var d=false;
var c=false;
function h(){var k=$.bbq.getState("s");
g.setCurrentServer(k)
}function i(){d=true;
wa.trigger("servers.loaded",b);
if(j){wa.trigger("servers.current.changed",{current:b[j]})
}}$(window).bind("hashchange",h);
wa.prop.get("neo4j-servers",function(k,n){if(c===false&&(n===null||n===undefined)){c=true;
neo4j.Web.get(a,function(){var o=new neo4j.GraphDatabase(f,a);
b={};
b[document.domain]=o;
i();
e()
},function(){b={};
e()
})
}else{var m=false;
var l;
for(var k in n){l=n[k];
if(l.name){m=true;
if(l.adminUrl==="/admin/server/"){l.adminUrl="/db/manage/"
}b[l.name]=new neo4j.GraphDatabase(l.restUrl,l.adminUrl)
}else{b[k]=new neo4j.GraphDatabase(l.url,l.manageUrl)
}}i()
}});
function e(){var l={};
for(var k in b){l[k]={url:b[k].url,manageUrl:b[k].manageUrl}
}wa.prop.set("neo4j-servers",l)
}var g={isLoaded:function(){return d
},getServers:function(){return b
},getServer:function(k){if(b[k]){return b[k]
}else{return null
}},getServerKey:function(l){for(var k in b){if(b[k].url===l.url){return k
}}return null
},getCurrentServer:function(){return wa.Servers.getServer(j)
},setCurrentServer:function(l){if(typeof(l)==="object"){var k=wa.Servers.getServerKey(l)
}else{var k=l
}if(k!==j){j=k;
if(b[k]){wa.trigger("servers.current.changed",{current:b[j]})
}}},setServer:function(l,m,k){b[l]=new neo4j.GraphDatabase(m,k);
wa.trigger("servers.changed",{servers:b});
e()
},removeServer:function(k){if(b[k]){delete (b[k]);
wa.trigger("servers.changed",{servers:b});
e()
}}};
h();
return g
})();
wa.ServerSelector=(function(b){var a={};
a.reload=function(){var e=wa.Servers.getServers();
var d=wa.Servers.getCurrentServer();
if(d==null){for(var g in e){b.bbq.pushState({s:g});
return
}}var c=b("#mor_servers ul.mor_servers_list");
c.empty();
for(var g in e){var f="";
if(e[g]!==d){c.append('<li><a class="'+f+'" href="/index.html#p=morpheus.monitor&s='+g+'">'+g+"</a></li>")
}else{b("#mor_servers_current").html(g)
}}c.append('<li><a href="#" class="mor_servers_list_manage">Manage servers</a></li>');
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
b("#mor_servers_add_button").live("click",function(c){c.preventDefault();
var f=b("#mor_servers_add_name").val();
var d=b("#mor_servers_add_dataUrl").val();
var e=b("#mor_servers_add_manageUrl").val();
if(f.length<1){b("#mor_servers_add_name").addClass("error")
}else{b("#mor_servers_add_name").removeClass("error")
}if(d.length<1){b("#mor_servers_add_dataUrl").addClass("error")
}else{b("#mor_servers_add_dataUrl").removeClass("error")
}if(e.length<1){b("#mor_servers_add_manageUrl").addClass("error")
}else{b("#mor_servers_add_manageUrl").removeClass("error")
}if(d.length>0&&f.length>0&&e.length>0){wa.Servers.setServer(f,d,e);
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
}},validateFields:function(c){var d=true;
for(var f=0,e=c.length;
f<e;
f++){if(!wa.FormValidator.validateField(c[f].field,c[f].validator,c[f].errorMessage)){d=false
}}return d
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
},showUsingTemplate:function(d,c,f,e){e=typeof(f)==="function"?f:e;
a.cb=e;
b("#mor_dialog_title").html(d);
b("#mor_dialog_data").setTemplateURL(c);
b("#mor_dialog_data").processTemplate(f||{});
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
a.render=function(){if(a.container!==null){var e=[];
if(wa.Servers.getCurrentServer()){if(!wa.Servers.getCurrentServer().manage.servicesLoaded()){wa.Servers.getCurrentServer().bind("services.loaded",a.render)
}else{e=wa.Servers.getCurrentServer().manage.availableServices()
}}var d,f=[];
for(var c in a.menuItems){d=a.menuItems[c];
if(a.itemRequirementsFulfilled(d,e)){f.push(d)
}}a.container.processTemplate({items:f,urlAppend:a.getExtraUrlParams()})
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
a.update=function(e,d){for(var f in a.menuItems){if(a.menuItems[f].name===e){for(var c in d){a.menuItems[f][c]=d[c]
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
return{init:a.init,add:function(d){var g=d.label;
var c=d.pageKey;
var j=d.data||{};
var i=d.perspectives||["all"];
var h=d.requiredServices||[];
var f=d.index||0;
var e=a.menuItems.length;
while(a.menuItems[e-1]!=undefined&&a.menuItems[e-1].index>f){e--
}a.menuItems.splice(e,0,{label:g,page:c,data:j,perspectives:i,requiredServices:h,urlAppend:"",index:f});
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
wa.widgets.LifecycleWidget=function(b,d){var a={};
a.template=d||"templates/widgets/LifecycleWidget.tp";
a.element=false;
a.status="UNKOWN";
a.watingForResponse=false;
a.server=b?b:false;
a.getWidget=function(){return a.element
};
a.start=function(e){if(a.status!=="RUNNING"){a.serverAction("start","Starting server..")
}if(e&&e.preventDefault){e.preventDefault()
}};
a.stop=function(e){if(a.status!=="STOPPED"){a.serverAction("stop","Stopping server..")
}if(e){e.preventDefault()
}};
a.restart=function(e){a.serverAction("restart","Restarting server..");
if(e){e.preventDefault()
}};
a.check=function(e){if(a.server){a.enable();
a.serverAction("getStatus",a.statusElement.html(),"GET")
}else{a.disable();
a.statusElement.html("N/A")
}if(e&&e.preventDefault){e.preventDefault()
}};
a.disable=function(){a.buttons.start.hide();
a.buttons.stop.hide();
a.buttons.restart.hide()
};
a.enable=function(){a.buttons.start.show();
a.buttons.stop.show();
a.buttons.restart.show()
};
a.serverAction=function(g,f,e){var e=e||"POST";
if(!a.watingForResponse){a.statusElement.html(f);
a.watingForResponse=true;
$("ul.mor_lifecycle_actions a").addClass("disabled");
a.server.manage.lifecycle[g](function(h){a.watingForResponse=false;
a.setStatus(h.current_status)
})
}};
a.setStatus=function(e){a.status=e;
if(a.statusActions[e]){a.statusActions[e]()
}};
a.statusActions={RUNNING:function(){a.statusElement.html("Running");
var e=$("div.mor_lifecycle");
e.addClass("mor_lifecycle_running");
e.removeClass("mor_lifecycle_stopped");
$("ul.mor_lifecycle_actions a").removeClass("disabled");
$("ul.mor_lifecycle_actions a.mor_lifecycle_start").addClass("disabled")
},STOPPED:function(){a.statusElement.html("Stopped");
var e=$("div.mor_lifecycle");
e.addClass("mor_lifecycle_stopped");
e.removeClass("mor_lifecycle_running");
$("ul.mor_lifecycle_actions a").removeClass("disabled");
$("ul.mor_lifecycle_actions a.mor_lifecycle_stop").addClass("disabled");
$("ul.mor_lifecycle_actions a.mor_lifecycle_restart").addClass("disabled")
}};
var c=$("<div></div>");
c.setTemplateURL(a.template);
c.processTemplate({domain:b.domain});
a.element=c.children();
a.buttons={};
a.buttons.start=$(".mor_lifecycle_start",a.element);
a.buttons.restart=$(".mor_lifecycle_restart",a.element);
a.buttons.stop=$(".mor_lifecycle_stop",a.element);
a.statusElement=$(".mor_lifecycle_status",a.element);
a.buttons.start.click(a.start);
a.buttons.restart.click(a.restart);
a.buttons.stop.click(a.stop);
a.check();
a.api={init:a.init,check:a.check,stop:a.stop,start:a.start,restart:a.restart,getWidget:a.getWidget,render:a.getWidget};
return a.api
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
b.extractor=function(g){var d={};
for(var e=0,f=g.attributes.length;
e<f;
e++){d[g.attributes[e].name]=g.attributes[e]
}return d
};
b.valueChanged=function(d){b.data=d;
if(b.uiLoaded){b.ui.processTemplate({data:b.data.value})
}return true
};
b.tracker=wa.components.dashboard.JmxValueTracker(b.server,"neo4j","Primitive count",b.extractor,b.valueChanged,a||10000);
return b.api
};
wa.components.dashboard.JmxValueTracker=function(g,d,a,f,b,c){var e={};
e.polling_interval=c||10000;
e.max_polling_interval=e.polling_interval*10;
e.actual_polling_interval=e.polling_interval;
e.callback=b;
e.extractor=f;
e.beanDomain=d;
e.beanName=a;
e.jmx=g.manage.jmx;
e.prevValue=null;
e.api={run:function(){e.poll()
},stop:function(){e.stopIssued=true
}};
e.poll=function(){e.jmx.getBean(d,a,function(h){if(h){var j=e.extractor(h);
if(j!==e.prevValue){e.prevValue=j;
var i=e.callback({value:j,bean:h,beanName:e.beanName});
if(i){e.actual_polling_interval=e.polling_interval
}else{return
}}else{if(e.actual_polling_interval>=e.max_polling_interval){e.actual_polling_interval=e.max_polling_interval
}else{e.actual_polling_interval*=2
}}}if(!e.stopIssued){setTimeout(e.poll,e.actual_polling_interval)
}})
};
return e.api
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
b.extractor=function(g){var d={};
for(var e=0,f=g.attributes.length;
e<f;
e++){d[g.attributes[e].name]=g.attributes[e]
}return d
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
b.extractor=function(g){var d={};
for(var e=0,f=g.attributes.length;
e<f;
e++){d[g.attributes[e].name]=g.attributes[e]
}return d
};
b.valueChanged=function(d){b.data=d;
if(b.uiLoaded){b.ui.processTemplate({data:b.data.value})
}return true
};
b.tracker=wa.components.dashboard.JmxValueTracker(b.server,"neo4j","Cache",b.extractor,b.valueChanged,a||10000);
return b.api
};
wa.components.dashboard.monitorChartCounter=0;
wa.components.dashboard.MonitorChart=function(b,e){var a={};
a.settings={label:"",xaxis:{mode:"time",timeformat:"%H:%M:%S"},yaxis:{},height:200,data:[],series:{},tooltipValueFormatter:function(f){return f
},colors:["#326a75","#4f848f","#a0c2c8","#00191e"]};
var e=e||{};
$.extend(true,a.settings,e);
a.series=[];
for(var d in a.settings.data){a.settings.data[d].key=d;
a.series.push(a.settings.data[d])
}a.server=b;
a.containerId="mor_monitor_chart_"+wa.components.dashboard.monitorChartCounter++;
a.controlsClass=a.containerId+"_controls";
a.zoom={year:{id:a.containerId+"_zoom_0",xSpan:1000*60*60*24*365,timeformat:"%d/%m %y"},month:{id:a.containerId+"_zoom_1",xSpan:1000*60*60*24*30,timeformat:"%d/%m"},week:{id:a.containerId+"_zoom_2",xSpan:1000*60*60*24*7,timeformat:"%d/%m"},day:{id:a.containerId+"_zoom_3",xSpan:1000*60*60*24,timeformat:"%H:%M"},six_hours:{id:a.containerId+"_zoom_4",xSpan:1000*60*60*6,timeformat:"%H:%M"},thirty_minutes:{id:a.containerId+"_zoom_5",xSpan:1000*60*30,timeformat:"%H:%M"}};
var c="<ul class='mor_module_actions'>";
c+="<li><a class='"+a.controlsClass+"' href='#' id='"+a.zoom.year.id+"'>Year</a></li>";
c+="<li><a class='"+a.controlsClass+"' href='#' id='"+a.zoom.month.id+"'>Month</a></li>";
c+="<li><a class='"+a.controlsClass+"' href='#' id='"+a.zoom.week.id+"'>Week</a></li>";
c+="<li><a class='"+a.controlsClass+"' href='#' id='"+a.zoom.day.id+"'>Day</a></li>";
c+="<li><a class='"+a.controlsClass+"' href='#' id='"+a.zoom.six_hours.id+"'>6 hours</a></li>";
c+="<li class='current'><a class='"+a.controlsClass+"' href='#' id='"+a.zoom.thirty_minutes.id+"'>30 minutes</a></li>";
c+="</ul><div class='break'></div>";
a.container=$("<div>"+c+"<div class='mor_chart_container'><div style='height:"+a.settings.height+"px;' id='"+a.containerId+"'></div></div></div>");
a.drawing=false;
a.currentZoom="thirty_minutes";
a.currentData=[];
a.api={render:function(){return a.container
},startDrawing:function(){if(!a.drawing){a.drawing=true
}a.draw(b.heartbeat.getCachedData())
},stopDrawing:function(){a.drawing=false
}};
a.draw=function(f){if(f.timestamps.length>0){a.settings.xaxis.min=a.convertToLocalTimestamp(f.timestamps[f.timestamps.length-1])-a.zoom[a.currentZoom].xSpan;
a.settings.xaxis.timeformat=a.zoom[a.currentZoom].timeformat
}$.plot($("#"+a.containerId),a.parseData(f),{xaxis:a.settings.xaxis,yaxis:a.settings.yaxis,grid:{hoverable:true},legend:{position:"nw"},series:a.settings.series,colors:a.settings.colors})
};
a.convertToLocalTimestamp=function(f){return f-(new Date()).getTimezoneOffset()*60*1000
};
a.parseData=function(f){var h=[];
var j=a.series.length;
for(var i=0;
i<j;
i++){h[i]={data:[]};
$.extend(true,h[i],a.settings.data[a.series[i].key])
}for(var g=0,k=f.timestamps.length;
g<k;
g++){for(var i=0;
i<j;
i++){h[i].data.push([a.convertToLocalTimestamp(f.timestamps[g]),f.data[a.series[i].key][g]])
}}return h
};
a.showTooltip=function(f,h,g){$('<div id="mor_chart_tooltip">'+g+"</div>").css({position:"absolute",display:"none",top:h+5,left:f+5,border:"1px solid #a1a8a9",padding:"2px","background-color":"#f6f6f6",opacity:0.8}).appendTo("body").fadeIn(100)
};
a.removeTooltip=function(){$("#mor_chart_tooltip").remove();
a.previousHoverPoint=null
};
a.zeroPad=function(f){f=f+"";
if(f.length==1){return"0"+f
}else{return f
}};
for(var d in a.zoom){$("#"+a.zoom[d].id).live("click",(function(f){return function(g){g.preventDefault();
a.currentZoom=f;
$("."+a.controlsClass).parent().removeClass("current");
$("#"+a.zoom[f].id).parent().addClass("current");
a.draw(b.heartbeat.getCachedData())
}
})(d))
}b.heartbeat.addListener(function(f){if(a.drawing){a.draw(f.allData)
}});
a.previousHoverPoint=null;
$("#"+a.containerId).live("plothover",function(f,h,j){if(j){if(a.previousHoverPoint!=j.datapoint){a.previousHoverPoint=j.datapoint;
$("#mor_chart_tooltip").remove();
var i=new Date(j.datapoint[0]),g=j.datapoint[1];
g=a.settings.tooltipValueFormatter(g);
a.showTooltip(j.pageX,j.pageY,"<span><b>"+j.series.label+":</b> "+g+"</span><br /><span style='font-size:12px;'>"+a.zeroPad(i.getUTCDate())+"/"+a.zeroPad(i.getUTCMonth())+" - "+a.zeroPad(i.getUTCHours())+":"+a.zeroPad(i.getUTCMinutes())+":"+a.zeroPad(i.getUTCSeconds())+"</span>")
}}else{a.removeTooltip()
}});
$("#"+a.containerId).live("mouseout",a.removeTooltip);
$("#mor_chart_tooltip").live("mouseout",a.removeTooltip);
return a.api
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
},findBean:function(g,f){var d=b.api.parseBeanName(g);
var e=wa.Servers.getCurrentServer();
if(!e){f([]);
return
}e.manage.jmx.getBean(d.domain,d.name,(function(h){return function(i){h(i)
}
})(f))
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
if(d){d.manage.jmx.query(["*:*"],function(e){b.jmxData=[];
for(var h=0,g=e.length;
h<g;
h++){var f=e[h];
b.getDomain(f.domain).beans.push(f)
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
wa.components.backup.parseJobData=function(g){if(g!=null){for(var e=0,c=g.jobList.length;
e<c;
e++){var f=g.jobList[e];
if(f.log.latestSuccess==null){f.readableLatestSuccess="Never"
}else{var d=new Date().getTime();
var a=(d-f.log.latestSuccess.timestamp)/1000;
var b="";
if(a>60*60*24*2){b=Math.floor(a/(60*60*24))+" days ago"
}else{if(a>60*60*24){b="One day and "+Math.floor((a-60*60*24)/(60*60))+" hours ago"
}else{if(a>60*60){b=Math.floor(a/(60*60))+" hours ago"
}else{if(a>60){b=Math.floor(a/60)+" minutes ago"
}else{b="Less than a minute ago"
}}}}f.readableLatestSuccess=b
}if(f.log.entries.length>0&&f.log.entries[0].type==="ERROR"){f.error={message:f.log.entries[0].message,timestamp:f.log.entries[0].timestamp,code:f.log.entries[0].code}
}else{f.error=false
}}}return g
};
wa.components.backup.Backup=(function(b){var d={};
d.basePage=b("<div></div>");
d.ui={};
d.uiLoaded=false;
d.serverChanged=false;
d.schedule=null;
d.currentBackupPath="";
d.prevAction=null;
d.visible=false;
d.api={getPage:function(){return d.basePage
},pageChanged:function(e){if(e.data==="backup"){d.visible=true;
if(d.uiLoaded===false){d.uiLoaded=true;
d.basePage.setTemplateURL("templates/components/backup/index.tp");
d.render();
d.loadBackupData()
}else{if(d.serverChanged){d.serverChanged=false;
d.render();
d.loadBackupData()
}}}else{d.visible=false
}},serverChanged:function(e){d.currentBackupPath="";
if(d.visible===true){d.loadBackupData();
d.render()
}else{d.serverChanged=true
}},init:function(){d.loadBackupData()
}};
function c(){return wa.Servers.getCurrentServer().manage
}d.render=function(){d.basePage.processTemplate({server:d.server});
delete (d.ui.jobList)
};
d.loadBackupData=function(){var e=wa.Servers.getCurrentServer();
if(e){e.manage.config.getProperty("general.backup.path",function(f){d.currentBackupPath=f.value;
d.updateUiBackupPath()
});
a()
}};
d.updateUiBackupPath=function(){b(".mor_backup_path").val(d.currentBackupPath);
b("button.mor_backup_setpathbutton").attr("disabled","disabled");
d.hideStatus();
if(d.currentBackupPath.length>0){b("button.mor_backup_triggerbutton").removeAttr("disabled")
}else{b("button.mor_backup_triggerbutton").attr("disabled","disabled")
}};
d.updateBackupJobUi=function(e){if(!d.ui.jobList){d.ui.jobList=b("ul.mor_backup_job_list");
d.ui.jobList.setTemplateURL("templates/components/backup/schedule.tp")
}var e=wa.components.backup.parseJobData(e);
d.ui.jobList.processTemplate({jobs:e.jobList})
};
d.showStatus=function(e){b("p.mor_backup_status").html(e);
b("p.mor_backup_status").show();
b("div.mor_backup_foundationbox").hide()
};
d.hideStatus=function(){b("p.mor_backup_status").hide();
b("div.mor_backup_foundationbox").hide()
};
function a(){if(d.visible){var e=wa.Servers.getCurrentServer();
if(e&&e.manage.backup.available){e.manage.backup.getJobs(d.updateBackupJobUi)
}}}b("input.mor_backup_path").live("keyup",function(f){var e=b(f.target);
if(e.val().trim()===d.currentBackupPath){b("button.mor_backup_setpathbutton").attr("disabled","disabled");
if(d.currentBackupPath.length>0){b("button.mor_backup_triggerbutton").removeAttr("disabled")
}}else{b("button.mor_backup_setpathbutton").removeAttr("disabled");
b("button.mor_backup_triggerbutton").attr("disabled","disabled")
}});
b("button.mor_backup_setpathbutton").live("click",function(e){b("input.mor_backup_path").attr("disabled","disabled");
var f=wa.Servers.getCurrentServer();
f.manage.config.setProperty("general.backup.path",b("input.mor_backup_path").val(),function(g){b("input.mor_backup_path").removeAttr("disabled");
d.currentBackupPath=b("input.mor_backup_path").val();
d.updateUiBackupPath()
})
});
b("button.mor_backup_triggerbutton").live("click",function(e){var f=wa.Servers.getCurrentServer();
d.showStatus("Performing backup..");
b("button.mor_backup_triggerbutton").attr("disabled","disabled");
f.manage.backup.triggerManual(function(g){if(g!==false){d.showStatus("Backup successful!");
b("button.mor_backup_triggerbutton").removeAttr("disabled")
}else{b("p.mor_backup_status").hide();
b("button.mor_backup_triggerbutton").attr("disabled","disabled");
b("div.mor_backup_foundationbox").show()
}})
});
b("button.mor_backup_foundation_triggerbutton").live("click",function(e){if(confirm("This will DESTROY any files in '"+d.currentBackupPath+"', are you sure?")){var f=wa.Servers.getCurrentServer();
d.showStatus("Creating foundation..");
f.manage.backup.triggerManualFoundation(function(g){d.showStatus("Foundation successful! Your database is now ready for online backups.");
b("button.mor_backup_triggerbutton").removeAttr("disabled")
})
}});
b("button.mor_backup_add_job").live("click",function(e){wa.ui.Dialog.showUsingTemplate("New backup job","templates/components/backup/job.tp")
});
b("button.mor_job_dialog_save").live("click",function(l){var g=[{field:"input.mor_job_dialog_name",validator:"not_empty"},{field:"input.mor_job_dialog_path",validator:"not_empty"},{field:"input.mor_job_dialog_cronexp",validator:"not_empty"}];
if(wa.FormValidator.validateFields(g)){var k=b("input.mor_job_dialog_name").val();
var f=b("input.mor_job_dialog_path").val();
var j=b("input.mor_job_dialog_cronexp").val();
var i=b("input.mor_job_dialog_auto-foundation:checked").length>0;
var e=b("input.mor_job_dialog_id").val();
e=e.length>0?e:null;
var h=wa.Servers.getCurrentServer();
h.manage.backup.setJob({name:k,backupPath:f,cronExpression:j,autoFoundation:i,id:e},function(){h.manage.backup.getJobs(d.updateBackupJobUi)
});
wa.ui.Dialog.close()
}});
b("button.mor_backup_job_edit").live("click",function(e){var f=wa.Servers.getCurrentServer();
f.manage.backup.getJob(b(e.target).closest("li.mor_backup_job").find(".mor_backup_job_id_value").val(),function(g){neo4j.log(g);
wa.ui.Dialog.showUsingTemplate("Edit backup job","components/morpheus.backup/templates/job.tp",g)
})
});
b("button.mor_backup_job_delete").live("click",function(e){if(confirm("Are you sure you want to delete the backup job?")){var f=wa.Servers.getCurrentServer();
f.manage.backup.deleteJob(b(e.target).closest("li.mor_backup_job").find(".mor_backup_job_id_value").val(),a)
}});
b("button.mor_backup_job_create_foundation").live("click",function(e){var g=b(e.target).closest("li.mor_backup_job").find(".mor_backup_job_id_value").val();
var f=wa.Servers.getCurrentServer();
f.manage.backup.getJob(g,function(h){if(h&&confirm("This will delete any current backup in "+h.backupPath+". Are you sure?")){b(".mor_backup_job_info").html("Creating foundation..");
b(".mor_backup_job_info").show();
f.manage.backup.triggerJobFoundation(h.id,function(i){b(".mor_backup_job_info").html("Successfully created foundation.");
setTimeout(function(){b(".mor_backup_job_info").hide()
},2000)
})
}})
});
setInterval(a,5000);
return d.api
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
}c.render=function(){if(c.uiLoaded){var g=[],j=[],i=[],h=[];
for(var k in c.config){if(c.config[k].hidden!==true){if(c.config[k].type==="DB_CREATION_PROPERTY"){j.push(c.config[k])
}else{if(c.config[k].type==="JVM_ARGUMENT"){i.push(c.config[k])
}else{if(c.config[k].type==="GENERAL_PROPERTY"){h.push(c.config[k])
}else{g.push(c.config[k])
}}}}}c.basePage.processTemplate({config:g,jvm_config:i,advanced_config:j,server:c.server})
}};
c.configValueChanged=function(g){var j=d(g.target);
var i=j.attr("name");
if(c.config[i]!==undefined){if(j.attr("type")==="checkbox"){if(j.attr("checked")){var h=c.config[i].definition.values[0].value
}else{if(c.config[i].definition.values.length>1){var h=c.config[i].definition.values[1].value
}else{var h=""
}}}else{var h=j.val()
}if(h!==c.config[i].value){c.config[i].newValue=h;
j.addClass("uncommitted")
}else{delete (c.config[i].newValue);
j.removeClass("uncommitted")
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
a.setFieldString=function(d){a.listFields=[];
var e=d.split(",");
for(var c=0,f=e.length;
c<f;
c++){a.listFields.push(b.trim(e[c]))
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
a.addPaginationMetaData=function(c){var e=c.isNode?c.relationships.data.length:0;
var g=a.currentRelatedNodePage*a.relatedNodesPerPage;
var f=g+a.relatedNodesPerPage-1;
var d=Math.ceil(e/a.relatedNodesPerPage);
if(f>=e){f=e-1
}if(!c.relationships){c.relationships={}
}c.relationships.pagination={relatedNodeStartIndex:g,relatedNodeStopIndex:f,relatedNodePage:a.currentRelatedNodePage,relatedNodePageCount:d>0?d:1,relatedNodesPerPage:a.relatedNodesPerPage}
};
a.listNamesChanged=function(c){if(a.currentItem&&a.currentItem.relationships){a.currentItem.relationships.fields=a.propertiesToListManager.getListFields();
a.render()
}};
a.hashchange=function(d){var c=b.bbq.getState("dataurl");
if(c!==a.dataUrl){a.dataUrl=c;
a.reload()
}};
a.extractFields=function(d){var c={};
for(var j=0,h=d.length;
j<h;
j++){for(var g in d[j].data){c[g]=true
}}var f=[];
for(var e in c){f.push(e)
}return f
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
a.propertyKeyChanged=function(f){var d=a.currentEditKey;
var e=b(f.target).val();
var c=a.getValue(f.target);
if(e!=d&&c!==null){a.showSavingSaveButton();
if(d!==null&&d.length>0){neo4j.Web.del(a.propertyUrl(d),a.showSavedSaveButton)
}neo4j.Web.put(a.propertyUrl(e),c,a.showSavedSaveButton)
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
a.server().post("node",{},function(d){var e=d.self;
e=e.substring(a.server().url.length);
b.bbq.pushState({dataurl:e})
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
a.saveNewRelationship=function(f){f.preventDefault();
var d=b("#mor_data_relationship_dialog_from").val();
var e=b("#mor_data_relationship_dialog_type").val();
var c=b("#mor_data_relationship_dialog_to").val();
if(d.indexOf("://")){d=d.substring(d.lastIndexOf("/")+1)
}if(!c.indexOf("://")){c=a.server().url+c
}if(c===d){wa.ui.ErrorBox.showError("You cannot create self-relationships.")
}else{a.server().post("node/"+d+"/relationships",{to:c,data:{},type:e},function(g){wa.components.data.DataBrowser.reload();
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
