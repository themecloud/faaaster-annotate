(()=>{var Oe,T,$t,Xo,ne,Ut,Bt,Wt,at,Re,ke,Vt,ct,it,st,Yo,Me={},Fe=[],Ko=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ze=Array.isArray;function Z(e,t){for(var n in t)e[n]=t[n];return e}function ft(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Go(e,t,n){var o,i,r,s={};for(r in t)r=="key"?o=t[r]:r=="ref"?i=t[r]:s[r]=t[r];if(arguments.length>2&&(s.children=arguments.length>3?Oe.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return De(e,s,o,i,null)}function De(e,t,n,o,i){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i==null?++$t:i,__i:-1,__u:0};return i==null&&T.vnode!=null&&T.vnode(r),r}function oe(e){return e.children}function Le(e,t){this.props=e,this.context=t}function fe(e,t){if(t==null)return e.__?fe(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?fe(e):null}function Jo(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,o=[],i=[],r=Z({},t);r.__v=t.__v+1,T.vnode&&T.vnode(r),ut(e.__P,r,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,o,n==null?fe(t):n,!!(32&t.__u),i),r.__v=t.__v,r.__.__k[r.__i]=r,Xt(o,r,i),t.__e=t.__=null,r.__e!=n&&jt(r)}}function jt(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),jt(e)}function Ot(e){(!e.__d&&(e.__d=!0)&&ne.push(e)&&!Ue.__r++||Ut!=T.debounceRendering)&&((Ut=T.debounceRendering)||Bt)(Ue)}function Ue(){try{for(var e,t=1;ne.length;)ne.length>t&&ne.sort(Wt),e=ne.shift(),t=ne.length,Jo(e)}finally{ne.length=Ue.__r=0}}function qt(e,t,n,o,i,r,s,l,u,f,p){var c,g,h,w,x,C,_,k=o&&o.__k||Fe,M=t.length;for(u=Qo(n,t,k,u,M),c=0;c<M;c++)(h=n.__k[c])!=null&&(g=h.__i!=-1&&k[h.__i]||Me,h.__i=c,C=ut(e,h,g,i,r,s,l,u,f,p),w=h.__e,h.ref&&g.ref!=h.ref&&(g.ref&&pt(g.ref,null,h),p.push(h.ref,h.__c||w,h)),x==null&&w!=null&&(x=w),(_=!!(4&h.__u))||g.__k===h.__k?(u=Nt(h,u,e,_),_&&g.__e&&(g.__e=null)):typeof h.type=="function"&&C!==void 0?u=C:w&&(u=w.nextSibling),h.__u&=-7);return n.__e=x,u}function Qo(e,t,n,o,i){var r,s,l,u,f,p=n.length,c=p,g=0;for(e.__k=new Array(i),r=0;r<i;r++)(s=t[r])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[r]=De(null,s,null,null,null):ze(s)?s=e.__k[r]=De(oe,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[r]=De(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[r]=s,u=r+g,s.__=e,s.__b=e.__b+1,l=null,(f=s.__i=Zo(s,n,u,c))!=-1&&(c--,(l=n[f])&&(l.__u|=2)),l==null||l.__v==null?(f==-1&&(i>p?g--:i<p&&g++),typeof s.type!="function"&&(s.__u|=4)):f!=u&&(f==u-1?g--:f==u+1?g++:(f>u?g--:g++,s.__u|=4))):e.__k[r]=null;if(c)for(r=0;r<p;r++)(l=n[r])!=null&&!(2&l.__u)&&(l.__e==o&&(o=fe(l)),Kt(l,l));return o}function Nt(e,t,n,o){var i,r;if(typeof e.type=="function"){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=Nt(i[r],t,n,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=fe(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Zo(e,t,n,o){var i,r,s,l=e.key,u=e.type,f=t[n],p=f!=null&&(2&f.__u)==0;if(f===null&&l==null||p&&l==f.key&&u==f.type)return n;if(o>(p?1:0)){for(i=n-1,r=n+1;i>=0||r<t.length;)if((f=t[s=i>=0?i--:r++])!=null&&!(2&f.__u)&&l==f.key&&u==f.type)return s}return-1}function zt(e,t,n){t[0]=="-"?e.setProperty(t,n==null?"":n):e[t]=n==null?"":typeof n!="number"||Ko.test(t)?n:n+"px"}function Pe(e,t,n,o,i){var r,s;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||zt(e.style,t,"");if(n)for(t in n)o&&n[t]==o[t]||zt(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")r=t!=(t=t.replace(Vt,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o?n[ke]=o[ke]:(n[ke]=ct,e.addEventListener(t,r?st:it,r)):e.removeEventListener(t,r?st:it,r);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ht(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[Re]==null)t[Re]=ct++;else if(t[Re]<n[ke])return;return n(T.event?T.event(t):t)}}}function ut(e,t,n,o,i,r,s,l,u,f){var p,c,g,h,w,x,C,_,k,M,F,$,N,D,L,E=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),r=[l=t.__e=n.__e]),(p=T.__b)&&p(t);e:if(typeof E=="function")try{if(_=t.props,k=E.prototype&&E.prototype.render,M=(p=E.contextType)&&o[p.__c],F=p?M?M.props.value:p.__:o,n.__c?C=(c=t.__c=n.__c).__=c.__E:(k?t.__c=c=new E(_,F):(t.__c=c=new Le(_,F),c.constructor=E,c.render=tr),M&&M.sub(c),c.state||(c.state={}),c.__n=o,g=c.__d=!0,c.__h=[],c._sb=[]),k&&c.__s==null&&(c.__s=c.state),k&&E.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Z({},c.__s)),Z(c.__s,E.getDerivedStateFromProps(_,c.__s))),h=c.props,w=c.state,c.__v=t,g)k&&E.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),k&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(k&&E.getDerivedStateFromProps==null&&_!==h&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(_,F),t.__v==n.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(_,c.__s,F)===!1){t.__v!=n.__v&&(c.props=_,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(V){V&&(V.__=t)}),Fe.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&s.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(_,c.__s,F),k&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(h,w,x)})}if(c.context=F,c.props=_,c.__P=e,c.__e=!1,$=T.__r,N=0,k)c.state=c.__s,c.__d=!1,$&&$(t),p=c.render(c.props,c.state,c.context),Fe.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,$&&$(t),p=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++N<25);c.state=c.__s,c.getChildContext!=null&&(o=Z(Z({},o),c.getChildContext())),k&&!g&&c.getSnapshotBeforeUpdate!=null&&(x=c.getSnapshotBeforeUpdate(h,w)),D=p!=null&&p.type===oe&&p.key==null?Yt(p.props.children):p,l=qt(e,ze(D)?D:[D],t,n,o,i,r,s,l,u,f),c.base=t.__e,t.__u&=-161,c.__h.length&&s.push(c),C&&(c.__E=c.__=null)}catch(V){if(t.__v=null,u||r!=null)if(V.then){for(t.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;r[r.indexOf(l)]=null,t.__e=l}else{for(L=r.length;L--;)ft(r[L]);lt(t)}else t.__e=n.__e,t.__k=n.__k,V.then||lt(t);T.__e(V,t,n)}else r==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=er(n.__e,t,n,o,i,r,s,u,f);return(p=T.diffed)&&p(t),128&t.__u?void 0:l}function lt(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(lt))}function Xt(e,t,n){for(var o=0;o<n.length;o++)pt(n[o],n[++o],n[++o]);T.__c&&T.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(r){r.call(i)})}catch(r){T.__e(r,i.__v)}})}function Yt(e){return typeof e!="object"||e==null||e.__b>0?e:ze(e)?e.map(Yt):e.constructor!==void 0?null:Z({},e)}function er(e,t,n,o,i,r,s,l,u){var f,p,c,g,h,w,x,C=n.props||Me,_=t.props,k=t.type;if(k=="svg"?i="http://www.w3.org/2000/svg":k=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r!=null){for(f=0;f<r.length;f++)if((h=r[f])&&"setAttribute"in h==!!k&&(k?h.localName==k:h.nodeType==3)){e=h,r[f]=null;break}}if(e==null){if(k==null)return document.createTextNode(_);e=document.createElementNS(i,k,_.is&&_),l&&(T.__m&&T.__m(t,r),l=!1),r=null}if(k==null)C===_||l&&e.data==_||(e.data=_);else{if(r=k=="textarea"&&_.defaultValue!=null?null:r&&Oe.call(e.childNodes),!l&&r!=null)for(C={},f=0;f<e.attributes.length;f++)C[(h=e.attributes[f]).name]=h.value;for(f in C)h=C[f],f=="dangerouslySetInnerHTML"?c=h:f=="children"||f in _||f=="value"&&"defaultValue"in _||f=="checked"&&"defaultChecked"in _||Pe(e,f,null,h,i);for(f in _)h=_[f],f=="children"?g=h:f=="dangerouslySetInnerHTML"?p=h:f=="value"?w=h:f=="checked"?x=h:l&&typeof h!="function"||C[f]===h||Pe(e,f,h,C[f],i);if(p)l||c&&(p.__html==c.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(c&&(e.innerHTML=""),qt(t.type=="template"?e.content:e,ze(g)?g:[g],t,n,o,k=="foreignObject"?"http://www.w3.org/1999/xhtml":i,r,s,r?r[0]:n.__k&&fe(n,0),l,u),r!=null)for(f=r.length;f--;)ft(r[f]);l&&k!="textarea"||(f="value",k=="progress"&&w==null?e.removeAttribute("value"):w!=null&&(w!==e[f]||k=="progress"&&!w||k=="option"&&w!=C[f])&&Pe(e,f,w,C[f],i),f="checked",x!=null&&x!=e[f]&&Pe(e,f,x,C[f],i))}return e}function pt(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(i){T.__e(i,n)}}function Kt(e,t,n){var o,i;if(T.unmount&&T.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||pt(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){T.__e(r,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&Kt(o[i],t,n||typeof e.type!="function");n||ft(e.__e),e.__c=e.__=e.__e=void 0}function tr(e,t,n){return this.constructor(e,n)}function Gt(e,t,n){var o,i,r,s;t==document&&(t=document.documentElement),T.__&&T.__(e,t),i=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],s=[],ut(t,e=(!o&&n||t).__k=Go(oe,null,[e]),i||Me,Me,t.namespaceURI,!o&&n?[n]:i?null:t.firstChild?Oe.call(t.childNodes):null,r,!o&&n?n:i?i.__e:t.firstChild,o,s),Xt(r,e,s)}Oe=Fe.slice,T={__e:function(e,t,n,o){for(var i,r,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),s=i.__d),s)return i.__E=i}catch(l){e=l}throw e}},$t=0,Xo=function(e){return e!=null&&e.constructor===void 0},Le.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Z({},this.state),typeof e=="function"&&(e=e(Z({},n),this.props)),e&&Z(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ot(this))},Le.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ot(this))},Le.prototype.render=oe,ne=[],Bt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Wt=function(e,t){return e.__v.__b-t.__v.__b},Ue.__r=0,at=Math.random().toString(8),Re="__d"+at,ke="__a"+at,Vt=/(PointerCapture)$|Capture$/i,ct=0,it=Ht(!1),st=Ht(!0),Yo=0;var Se,A,dt,Jt,Ce=0,an=[],R=T,Qt=R.__b,Zt=R.__r,en=R.diffed,tn=R.__c,nn=R.unmount,on=R.__;function ht(e,t){R.__h&&R.__h(A,e,Ce||t),Ce=0;var n=A.__H||(A.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function v(e){return Ce=1,nr(ln,e)}function nr(e,t,n){var o=ht(Se++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):ln(void 0,t),function(l){var u=o.__N?o.__N[0]:o.__[0],f=o.t(u,l);u!==f&&(o.__N=[f,o.__[1]],o.__c.setState({}))}],o.__c=A,!A.__f)){var i=function(l,u,f){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(g){return g.__c});if(p.every(function(g){return!g.__N}))return!r||r.call(this,l,u,f);var c=o.__c.props!==l;return p.some(function(g){if(g.__N){var h=g.__[0];g.__=g.__N,g.__N=void 0,h!==g.__[0]&&(c=!0)}}),r&&r.call(this,l,u,f)||c};A.__f=!0;var r=A.shouldComponentUpdate,s=A.componentWillUpdate;A.componentWillUpdate=function(l,u,f){if(this.__e){var p=r;r=void 0,i(l,u,f),r=p}s&&s.call(this,l,u,f)},A.shouldComponentUpdate=i}return o.__N||o.__}function B(e,t){var n=ht(Se++,3);!R.__s&&sn(n.__H,t)&&(n.__=e,n.u=t,A.__H.__h.push(n))}function U(e){return Ce=5,$e(function(){return{current:e}},[])}function $e(e,t){var n=ht(Se++,7);return sn(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function G(e,t){return Ce=8,$e(function(){return e},t)}function or(){for(var e;e=an.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(He),t.__h.some(mt),t.__h=[]}catch(n){t.__h=[],R.__e(n,e.__v)}}}R.__b=function(e){A=null,Qt&&Qt(e)},R.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),on&&on(e,t)},R.__r=function(e){Zt&&Zt(e),Se=0;var t=(A=e.__c).__H;t&&(dt===A?(t.__h=[],A.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(He),t.__h.some(mt),t.__h=[],Se=0)),dt=A},R.diffed=function(e){en&&en(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(an.push(t)!==1&&Jt===R.requestAnimationFrame||((Jt=R.requestAnimationFrame)||rr)(or)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),dt=A=null},R.__c=function(e,t){t.some(function(n){try{n.__h.some(He),n.__h=n.__h.filter(function(o){return!o.__||mt(o)})}catch(o){t.some(function(i){i.__h&&(i.__h=[])}),t=[],R.__e(o,n.__v)}}),tn&&tn(e,t)},R.unmount=function(e){nn&&nn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(o){try{He(o)}catch(i){t=i}}),n.__H=void 0,t&&R.__e(t,n.__v))};var rn=typeof requestAnimationFrame=="function";function rr(e){var t,n=function(){clearTimeout(o),rn&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);rn&&(t=requestAnimationFrame(n))}function He(e){var t=A,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),A=t}function mt(e){var t=A;e.__c=e.__(),A=t}function sn(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function ln(e,t){return typeof t=="function"?t(e):t}var ee=typeof window!="undefined"&&window.appConfig?window.appConfig:{},O={locale:ee.locale||"en_US",lang:(ee.locale||"").toLowerCase().startsWith("fr")?"fr":"en",wpUser:ee.user||null,wpEmail:ee.email||null,forcedAnnotate:ee.annotate,disabled:ee.disabled,restBase:(ee.restBase||"/wp-json").replace(/\/$/,""),pollInterval:typeof ee.pollInterval=="number"?ee.pollInterval:15e3},ue=window.location.pathname.replace(/\//g,"%%"),cn=(window.location.host+window.location.pathname).replace(/\//g,"-").replace(/\./g,"-"),J=[{value:"Nouveau",key:"new",color:"#f43f5e"},{value:"En cours",key:"progress",color:"#3b82f6"},{value:"\xC0 valider",key:"review",color:"#f59e0b"},{value:"Valid\xE9",key:"done",color:"#10b981"}],gt="Nouveau";function pe(e){return J.find(t=>t.value===e)||J[0]}var fn="faaaster-annotate";function ar(e){let t=document.cookie.split("; ").find(n=>n.startsWith(e+"="));return t?t.slice(e.length+1):void 0}function ir(e,t,n){let o="";if(n){let i=new Date;i.setTime(i.getTime()+n*24*60*60*1e3),o="; expires="+i.toUTCString()}document.cookie=e+"="+(t||"")+o+"; path=/"}function un(){let e=ar(fn),t={};if(e)try{t=JSON.parse(e)}catch{t={}}return{username:t.username||!1,email:t.email||!1,annotateMode:t.annotateMode===!0,showIntro:t.showIntro!==!1,disabled:t.disabled===!0}}function _t(e){ir(fn,JSON.stringify(e),30)}var re=O.restBase+"/annotate/v1";async function pn(e){let t=await fetch(e,{headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error("HTTP "+t.status);return t.json()}async function yt(){let e=await pn(re+"/annotations/?url="+ue);return Array.isArray(e)&&e.length>0?e:(e=await pn(re+"/annotations/?url="+cn),Array.isArray(e)?e:[])}async function xt(){let e=await fetch(re+"/annotations/?scope=site",{headers:{"Content-Type":"application/json"}});if(!e.ok)throw Be(e.status);let t=await e.json();return Array.isArray(t)?t:[]}function Be(e){let t=new Error("HTTP "+e);return t.unsupported=e===404||e===405||e===410||e===501,t}async function dn(e){let t=await fetch(re+"/annotation/?url="+ue,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Be(t.status);return t.json()}async function mn(e){let t=await fetch(re+"/annotation/?url="+ue+"&id="+encodeURIComponent(e),{method:"DELETE"});if(!t.ok)throw Be(t.status);return t.json()}async function We(e){let t=new FormData;t.append("file",e,e.name);let n=await fetch(re+"/upload/?url="+ue,{method:"POST",body:t});if(!n.ok)throw Be(n.status);return n.json()}async function hn(e){let t=await fetch(re+"/proxy/?url="+ue,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("HTTP "+t.status);return t.json()}async function gn(e,t){try{await fetch(re+"/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,email:t})})}catch{}}function sr(){return window.crypto&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}function _n(e,t,n,o){let i=new Date().toISOString(),r={type:"TextualBody",purpose:n,value:e,creator:{id:t.email||t.name,name:t.name},created:i,modified:i};return o&&o.length&&(r.attachments=o),r}function yn({text:e,creator:t,anchor:n,attachments:o}){return{"@context":"http://www.w3.org/ns/anno.jsonld",type:"Annotation",id:"#"+sr(),body:[_n(e,t,"commenting",o),{type:"TextualBody",purpose:"tagging",value:gt}],target:{source:window.location.href,selector:[{type:"CssSelector",value:n.selector},{type:"FragmentSelector",conformsTo:"http://www.w3.org/TR/media-frags/",value:`xywh=percent:${n.relX.toFixed(4)},${n.relY.toFixed(4)},0,0`},...n.text?[{type:"TextQuoteSelector",exact:n.text}]:[]]},meta:{kind:"pin",fixed:n.fixed,viewport:{w:window.innerWidth,h:window.innerHeight},ua:navigator.userAgent}}}function xn(e,t,n,o){let i=e.body.slice(),r=i.findIndex(l=>l.purpose==="tagging"),s=_n(t,n,"commenting",o);return r===-1?i.push(s):i.splice(r,0,s),{...e,body:Cn(i)}}function bn(e,t){let n=!1,o=e.body.map(i=>i.purpose==="tagging"&&!n?(n=!0,{...i,value:t,modified:new Date().toISOString()}):i);return n||o.push({type:"TextualBody",purpose:"tagging",value:t}),{...e,body:Cn(o)}}function vn(e,t){return{...e,meta:{...e.meta||{},screenshot:t}}}function ae(e){let t=e.creator||{};return(t.id||t.name||"?")+"|"+(e.created||"")}function wn(e,t,n){return{...e,body:e.body.map(o=>o.purpose==="commenting"&&ae(o)===t?{...o,value:n,modified:new Date().toISOString()}:o)}}function kn(e,t){return{...e,body:e.body.filter(n=>!(n.purpose==="commenting"&&ae(n)===t))}}function Sn(e,t){return!t||!e.creator?!1:e.creator.id===t.email||!e.creator.id&&e.creator.name===t.name}function Cn(e){return e.length&&e[0].purpose==="commenting"&&(e=e.slice(),e[0]={...e[0],modified:new Date().toISOString()}),e}function je(e){return(e.body||[]).filter(t=>t.purpose==="commenting")}function ie(e){let t=(e.body||[]).find(n=>n.purpose==="tagging");return t?t.value:gt}function En(e){let t=(e.body||[])[0];return t&&t.creator?t.creator:{name:"?"}}function qe(e){let t=(e.body||[])[0]||{};return t.modified||t.created||0}function Ve(e){return((e.body||[])[0]||{}).created||0}function de(e){let t=e.slice().sort((n,o)=>new Date(Ve(n))-new Date(Ve(o)));return t.forEach((n,o)=>{n.index=o+1}),t}function Tn(e){return(e.body||[]).filter(t=>t.purpose==="commenting")}function In(e){return(e.body||[]).find(t=>t.purpose==="tagging")||null}function lr(e,t,n,o){let i=new Map;for(let r of[...t,...n]){let s=ae(r);if(o.has(e+"::"+s))continue;let l=i.get(s);(!l||new Date(r.modified||r.created||0)>new Date(l.modified||l.created||0))&&i.set(s,r)}return Array.from(i.values()).sort((r,s)=>new Date(r.created||0)-new Date(s.created||0))}function cr(e,t,n){let o=In(e),i=In(t);if(!o)return i;if(!i)return o;if(o.value===i.value)return i;let r=o.modified||o.created,s=i.modified||i.created;return r&&s?new Date(r)>new Date(s)?o:i:n?i:o}function fr(e,t,n,o){let i=lr(t.id,Tn(e),Tn(t),o),r=cr(e,t,n),s={...e.meta||{},...t.meta||{},screenshot:t.meta&&t.meta.screenshot||e.meta&&e.meta.screenshot||void 0};s.screenshot||delete s.screenshot;let l=t.number!=null?t.number:e.number;return{...t,number:l,meta:s,body:r?[...i,r]:i}}function An(e,t,n,o,i){let r=i||new Set,s=new Map;for(let l of e)!l||!l.id||o.has(l.id)||s.set(l.id,l);for(let l of t){let u=s.get(l.id);u?s.set(l.id,fr(u,l,n.has(l.id),r)):n.has(l.id)&&s.set(l.id,l)}return de(Array.from(s.values()))}function Pn(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let n=document.implementation.createHTMLDocument(),o=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(o),n.body.appendChild(i),t&&(o.href=t),i.href=e,i.href}var Rn=(()=>{let e=0,t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function K(e){let t=[];for(let n=0,o=e.length;n<o;n++)t.push(e[n]);return t}var me=null;function Xe(e={}){return me||(e.includeStyleProperties?(me=e.includeStyleProperties,me):(me=K(window.getComputedStyle(document.documentElement)),me))}function Ne(e,t){let o=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return o?parseFloat(o.replace("px","")):0}function ur(e){let t=Ne(e,"border-left-width"),n=Ne(e,"border-right-width");return e.clientWidth+t+n}function pr(e){let t=Ne(e,"border-top-width"),n=Ne(e,"border-bottom-width");return e.clientHeight+t+n}function bt(e,t={}){let n=t.width||ur(e),o=t.height||pr(e);return{width:n,height:o}}function Dn(){let e,t;try{t=process}catch{}let n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}var q=16384;function Ln(e){(e.width>q||e.height>q)&&(e.width>q&&e.height>q?e.width>e.height?(e.height*=q/e.width,e.width=q):(e.width*=q/e.height,e.height=q):e.width>q?(e.height*=q/e.width,e.width=q):(e.width*=q/e.height,e.height=q))}function he(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>{o.decode().then(()=>{requestAnimationFrame(()=>t(o))})},o.onerror=n,o.crossOrigin="anonymous",o.decoding="async",o.src=e})}async function dr(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function Mn(e,t,n){let o="http://www.w3.org/2000/svg",i=document.createElementNS(o,"svg"),r=document.createElementNS(o,"foreignObject");return i.setAttribute("width",`${t}`),i.setAttribute("height",`${n}`),i.setAttribute("viewBox",`0 0 ${t} ${n}`),r.setAttribute("width","100%"),r.setAttribute("height","100%"),r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("externalResourcesRequired","true"),i.appendChild(r),r.appendChild(e),dr(i)}var H=(e,t)=>{if(e instanceof t)return!0;let n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||H(n,t)};function mr(e){let t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function hr(e,t){return Xe(t).map(n=>{let o=e.getPropertyValue(n),i=e.getPropertyPriority(n);return`${n}: ${o}${i?" !important":""};`}).join(" ")}function gr(e,t,n,o){let i=`.${e}:${t}`,r=n.cssText?mr(n):hr(n,o);return document.createTextNode(`${i}{${r}}`)}function Fn(e,t,n,o){let i=window.getComputedStyle(e,n),r=i.getPropertyValue("content");if(r===""||r==="none")return;let s=Rn();try{t.className=`${t.className} ${s}`}catch{return}let l=document.createElement("style");l.appendChild(gr(s,n,i,o)),t.appendChild(l)}function Un(e,t,n){Fn(e,t,":before",n),Fn(e,t,":after",n)}var On="application/font-woff",zn="image/jpeg",_r={woff:On,woff2:On,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:zn,jpeg:zn,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function yr(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function ge(e){let t=yr(e).toLowerCase();return _r[t]||""}function xr(e){return e.split(/,/)[1]}function Ee(e){return e.search(/^(data:)/)!==-1}function wt(e,t){return`data:${t};base64,${e}`}async function kt(e,t,n){let o=await fetch(e,t);if(o.status===404)throw new Error(`Resource "${o.url}" not found`);let i=await o.blob();return new Promise((r,s)=>{let l=new FileReader;l.onerror=s,l.onloadend=()=>{try{r(n({res:o,result:l.result}))}catch(u){s(u)}},l.readAsDataURL(i)})}var vt={};function br(e,t,n){let o=e.replace(/\?.*/,"");return n&&(o=e),/ttf|otf|eot|woff2?/i.test(o)&&(o=o.replace(/.*\//,"")),t?`[${t}]${o}`:o}async function _e(e,t,n){let o=br(e,t,n.includeQueryParams);if(vt[o]!=null)return vt[o];n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let i;try{let r=await kt(e,n.fetchRequestInit,({res:s,result:l})=>(t||(t=s.headers.get("Content-Type")||""),xr(l)));i=wt(r,t)}catch(r){i=n.imagePlaceholder||"";let s=`Failed to fetch resource: ${e}`;r&&(s=typeof r=="string"?r:r.message),s&&console.warn(s)}return vt[o]=i,i}async function vr(e){let t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):he(t)}async function wr(e,t){if(e.currentSrc){let r=document.createElement("canvas"),s=r.getContext("2d");r.width=e.clientWidth,r.height=e.clientHeight,s==null||s.drawImage(e,0,0,r.width,r.height);let l=r.toDataURL();return he(l)}let n=e.poster,o=ge(n),i=await _e(n,o,t);return he(i)}async function kr(e,t){var n;try{if(!((n=e==null?void 0:e.contentDocument)===null||n===void 0)&&n.body)return await Te(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function Sr(e,t){return H(e,HTMLCanvasElement)?vr(e):H(e,HTMLVideoElement)?wr(e,t):H(e,HTMLIFrameElement)?kr(e,t):e.cloneNode(Hn(e))}var Cr=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT",Hn=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SVG";async function Er(e,t,n){var o,i;if(Hn(t))return t;let r=[];return Cr(e)&&e.assignedNodes?r=K(e.assignedNodes()):H(e,HTMLIFrameElement)&&(!((o=e.contentDocument)===null||o===void 0)&&o.body)?r=K(e.contentDocument.body.childNodes):r=K(((i=e.shadowRoot)!==null&&i!==void 0?i:e).childNodes),r.length===0||H(e,HTMLVideoElement)||await r.reduce((s,l)=>s.then(()=>Te(l,n)).then(u=>{u&&t.appendChild(u)}),Promise.resolve()),t}function Tr(e,t,n){let o=t.style;if(!o)return;let i=window.getComputedStyle(e);i.cssText?(o.cssText=i.cssText,o.transformOrigin=i.transformOrigin):Xe(n).forEach(r=>{let s=i.getPropertyValue(r);r==="font-size"&&s.endsWith("px")&&(s=`${Math.floor(parseFloat(s.substring(0,s.length-2)))-.1}px`),H(e,HTMLIFrameElement)&&r==="display"&&s==="inline"&&(s="block"),r==="d"&&t.getAttribute("d")&&(s=`path(${t.getAttribute("d")})`),o.setProperty(r,s,i.getPropertyPriority(r))})}function Ir(e,t){H(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),H(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function Ar(e,t){if(H(e,HTMLSelectElement)){let n=t,o=Array.from(n.children).find(i=>e.value===i.getAttribute("value"));o&&o.setAttribute("selected","")}}function Pr(e,t,n){return H(t,Element)&&(Tr(e,t,n),Un(e,t,n),Ir(e,t),Ar(e,t)),t}async function Rr(e,t){let n=e.querySelectorAll?e.querySelectorAll("use"):[];if(n.length===0)return e;let o={};for(let r=0;r<n.length;r++){let l=n[r].getAttribute("xlink:href");if(l){let u=e.querySelector(l),f=document.querySelector(l);!u&&f&&!o[l]&&(o[l]=await Te(f,t,!0))}}let i=Object.values(o);if(i.length){let r="http://www.w3.org/1999/xhtml",s=document.createElementNS(r,"svg");s.setAttribute("xmlns",r),s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.overflow="hidden",s.style.display="none";let l=document.createElementNS(r,"defs");s.appendChild(l);for(let u=0;u<i.length;u++)l.appendChild(i[u]);e.appendChild(s)}return e}async function Te(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(o=>Sr(o,t)).then(o=>Er(e,o,t)).then(o=>Pr(e,o,t)).then(o=>Rr(o,t))}var $n=/url\((['"]?)([^'"]+?)\1\)/g,Dr=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Lr=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Mr(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function Fr(e){let t=[];return e.replace($n,(n,o,i)=>(t.push(i),n)),t.filter(n=>!Ee(n))}async function Ur(e,t,n,o,i){try{let r=n?Pn(t,n):t,s=ge(t),l;if(i){let u=await i(r);l=wt(u,s)}else l=await _e(r,s,o);return e.replace(Mr(t),`$1${l}$3`)}catch{}return e}function Or(e,{preferredFontFormat:t}){return t?e.replace(Lr,n=>{for(;;){let[o,,i]=Dr.exec(n)||[];if(!i)return"";if(i===t)return`src: ${o};`}}):e}function St(e){return e.search($n)!==-1}async function Ye(e,t,n){if(!St(e))return e;let o=Or(e,n);return Fr(o).reduce((r,s)=>r.then(l=>Ur(l,s,t,n)),Promise.resolve(o))}async function ye(e,t,n){var o;let i=(o=t.style)===null||o===void 0?void 0:o.getPropertyValue(e);if(i){let r=await Ye(i,null,n);return t.style.setProperty(e,r,t.style.getPropertyPriority(e)),!0}return!1}async function zr(e,t){await ye("background",e,t)||await ye("background-image",e,t),await ye("mask",e,t)||await ye("-webkit-mask",e,t)||await ye("mask-image",e,t)||await ye("-webkit-mask-image",e,t)}async function Hr(e,t){let n=H(e,HTMLImageElement);if(!(n&&!Ee(e.src))&&!(H(e,SVGImageElement)&&!Ee(e.href.baseVal)))return;let o=n?e.src:e.href.baseVal,i=await _e(o,ge(o),t);await new Promise((r,s)=>{e.onload=r,e.onerror=t.onImageErrorHandler?(...u)=>{try{r(t.onImageErrorHandler(...u))}catch(f){s(f)}}:s;let l=e;l.decode&&(l.decode=r),l.loading==="lazy"&&(l.loading="eager"),n?(e.srcset="",e.src=i):e.href.baseVal=i})}async function $r(e,t){let o=K(e.childNodes).map(i=>Ct(i,t));await Promise.all(o).then(()=>e)}async function Ct(e,t){H(e,Element)&&(await zr(e,t),await Hr(e,t),await $r(e,t))}function Bn(e,t){let{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);let o=t.style;return o!=null&&Object.keys(o).forEach(i=>{n[i]=o[i]}),e}var Wn={};async function Vn(e){let t=Wn[e];if(t!=null)return t;let o=await(await fetch(e)).text();return t={url:e,cssText:o},Wn[e]=t,t}async function jn(e,t){let n=e.cssText,o=/url\(["']?([^"')]+)["']?\)/g,r=(n.match(/url\([^)]+\)/g)||[]).map(async s=>{let l=s.replace(o,"$1");return l.startsWith("https://")||(l=new URL(l,e.url).href),kt(l,t.fetchRequestInit,({result:u})=>(n=n.replace(s,`url(${u})`),[s,u]))});return Promise.all(r).then(()=>n)}function qn(e){if(e==null)return[];let t=[],n=/(\/\*[\s\S]*?\*\/)/gi,o=e.replace(n,""),i=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let u=i.exec(o);if(u===null)break;t.push(u[0])}o=o.replace(i,"");let r=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,s="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",l=new RegExp(s,"gi");for(;;){let u=r.exec(o);if(u===null){if(u=l.exec(o),u===null)break;r.lastIndex=l.lastIndex}else l.lastIndex=r.lastIndex;t.push(u[0])}return t}async function Br(e,t){let n=[],o=[];return e.forEach(i=>{if("cssRules"in i)try{K(i.cssRules||[]).forEach((r,s)=>{if(r.type===CSSRule.IMPORT_RULE){let l=s+1,u=r.href,f=Vn(u).then(p=>jn(p,t)).then(p=>qn(p).forEach(c=>{try{i.insertRule(c,c.startsWith("@import")?l+=1:i.cssRules.length)}catch(g){console.error("Error inserting rule from remote css",{rule:c,error:g})}})).catch(p=>{console.error("Error loading remote css",p.toString())});o.push(f)}})}catch(r){let s=e.find(l=>l.href==null)||document.styleSheets[0];i.href!=null&&o.push(Vn(i.href).then(l=>jn(l,t)).then(l=>qn(l).forEach(u=>{s.insertRule(u,s.cssRules.length)})).catch(l=>{console.error("Error loading remote stylesheet",l)})),console.error("Error inlining remote css file",r)}}),Promise.all(o).then(()=>(e.forEach(i=>{if("cssRules"in i)try{K(i.cssRules||[]).forEach(r=>{n.push(r)})}catch(r){console.error(`Error while reading CSS rules from ${i.href}`,r)}}),n))}function Wr(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>St(t.style.getPropertyValue("src")))}async function Vr(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");let n=K(e.ownerDocument.styleSheets),o=await Br(n,t);return Wr(o)}function Nn(e){return e.trim().replace(/["']/g,"")}function jr(e){let t=new Set;function n(o){(o.style.fontFamily||getComputedStyle(o).fontFamily).split(",").forEach(r=>{t.add(Nn(r))}),Array.from(o.children).forEach(r=>{r instanceof HTMLElement&&n(r)})}return n(e),t}async function Xn(e,t){let n=await Vr(e,t),o=jr(e);return(await Promise.all(n.filter(r=>o.has(Nn(r.style.fontFamily))).map(r=>{let s=r.parentStyleSheet?r.parentStyleSheet.href:null;return Ye(r.cssText,s,t)}))).join(`
`)}async function Yn(e,t){let n=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await Xn(e,t);if(n){let o=document.createElement("style"),i=document.createTextNode(n);o.appendChild(i),e.firstChild?e.insertBefore(o,e.firstChild):e.appendChild(o)}}async function qr(e,t={}){let{width:n,height:o}=bt(e,t),i=await Te(e,t,!0);return await Yn(i,t),await Ct(i,t),Bn(i,t),await Mn(i,n,o)}async function Kn(e,t={}){let{width:n,height:o}=bt(e,t),i=await qr(e,t),r=await he(i),s=document.createElement("canvas"),l=s.getContext("2d"),u=t.pixelRatio||Dn(),f=t.canvasWidth||n,p=t.canvasHeight||o;return s.width=f*u,s.height=p*u,t.skipAutoScale||Ln(s),s.style.width=`${f}`,s.style.height=`${p}`,t.backgroundColor&&(l.fillStyle=t.backgroundColor,l.fillRect(0,0,s.width,s.height)),l.drawImage(r,0,0,s.width,s.height),s}var Nr="faaaster-annotate-root",Xr=800,Gn=.65,Yr=12e3;function Kr(e,t){return Promise.race([e,new Promise((n,o)=>setTimeout(()=>o(new Error("capture timeout")),t))])}function Gr(e){return new Promise((t,n)=>{e.toBlob(o=>{if(o&&o.type==="image/webp")return t(o);e.toBlob(i=>i?t(i):n(new Error("encode failed")),"image/jpeg",Gn)},"image/webp",Gn)})}function Jr(e,t,n){let o=Math.max(9,e.canvas.width*.014);e.save(),e.beginPath(),e.arc(t,n,o+2,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.28)",e.fill(),e.beginPath(),e.arc(t,n,o,0,Math.PI*2),e.fillStyle="#ffffff",e.fill(),e.beginPath(),e.arc(t,n,o-Math.max(2,o*.3),0,Math.PI*2),e.fillStyle="#f43f5e",e.fill(),e.restore()}async function Jn(e){let t=Math.min(1,Xr/window.innerWidth),n=window.scrollX,o=window.scrollY,i=null;if(e&&e.el&&e.el.getBoundingClientRect){let f=e.el.getBoundingClientRect();(f.width||f.height)&&(i={x:f.left+f.width*(e.relX==null?.5:e.relX),y:f.top+f.height*(e.relY==null?.5:e.relY)})}let r=await Kr(Kn(document.body,{pixelRatio:t,filter:f=>!(f.id===Nr||f.id==="wpadminbar"),backgroundColor:"#ffffff"}),Yr),s=document.createElement("canvas");s.width=Math.round(window.innerWidth*t),s.height=Math.round(window.innerHeight*t);let l=s.getContext("2d");return l.fillStyle="#ffffff",l.fillRect(0,0,s.width,s.height),l.drawImage(r,Math.round(n*t),Math.round(o*t),s.width,s.height,0,0,s.width,s.height),i&&Jr(l,i.x*t,i.y*t),{blob:await Gr(s),width:s.width,height:s.height}}var Qr="faaaster-annotate-root";function Zn(e){return window.CSS&&CSS.escape?CSS.escape(e):e.replace(/([^a-zA-Z0-9_-])/g,"\\$1")}function Zr(e){try{return document.querySelectorAll("#"+Zn(e)).length===1}catch{return!1}}function ea(e){return!(!e||e.length>64||/\d{4,}/.test(e)||/^(ember|react|radix|aria)-/.test(e))}function ta(e){let t=e.tagName.toLowerCase(),n=e.parentElement;if(!n)return t;let o=Array.from(n.children).filter(i=>i.tagName===e.tagName);return o.length===1?t:`${t}:nth-of-type(${o.indexOf(e)+1})`}function na(e){let t=[],n=e;for(;n&&n.nodeType===Node.ELEMENT_NODE&&n!==document.documentElement;){if(n.id&&ea(n.id)&&Zr(n.id))return t.unshift("#"+Zn(n.id)),t.join(" > ");if(n===document.body)return t.unshift("body"),t.join(" > ");t.unshift(ta(n)),n=n.parentElement}return t.unshift("html"),t.join(" > ")}function Et(e){let t=e;for(;t&&t.nodeType===Node.ELEMENT_NODE;){let n=window.getComputedStyle(t).position;if(n==="fixed"||n==="sticky")return!0;t=t.parentElement}return!1}function oa(e){return((e.innerText||e.textContent||"").trim()||e.getAttribute("aria-label")||e.getAttribute("alt")||e.getAttribute("title")||"").replace(/\s+/g," ").trim().slice(0,80)}function eo(e,t,n){let o=e.getBoundingClientRect();return{selector:na(e),relX:o.width?(t-o.left)/o.width:.5,relY:o.height?(n-o.top)/o.height:.5,fixed:Et(e),text:oa(e)}}function Qn(e){let t=/percent:([\d.]+),([\d.]+)/.exec(e||"");return t?{relX:parseFloat(t[1]),relY:parseFloat(t[2])}:null}function ra(e){let n=(e.target||{}).selector;return n?Array.isArray(n)?n:[n]:[]}function aa(e){let t=(e||"").replace(/\s+/g," ").trim();if(!t)return null;let o=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(i){return i.parentElement&&i.parentElement.closest("#"+Qr)?NodeFilter.FILTER_REJECT:(i.textContent||"").replace(/\s+/g," ").includes(t)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}}).nextNode();return o?o.parentElement:null}function Tt(e){let t=ra(e),n=t.find(r=>r.type==="CssSelector"),o=t.find(r=>r.type==="FragmentSelector");if(n&&o){let r=Qn(o.value),s=null;try{s=document.querySelector(n.value)}catch{s=null}if(s&&r)return{el:s,relX:r.relX,relY:r.relY,fixed:Et(s),legacy:!1}}let i=t.find(r=>r.type==="TextQuoteSelector");if(i&&i.exact){let r=aa(i.exact.trim());if(r){let s=o?Qn(o.value):null;return{el:r,relX:s?s.relX:.5,relY:s?s.relY:.5,fixed:Et(r),legacy:!0}}}return null}function to(e){let t=e.el.getBoundingClientRect();return!t.width&&!t.height?null:{x:t.left+t.width*e.relX,y:t.top+t.height*e.relY}}var no={fr:{annotate:"Commenter",navigate:"Naviguer",tasks:"Annotations",hidePins:"Masquer les \xE9pingles",showPins:"Afficher les \xE9pingles",quit:"D\xE9sactiver l'outil",introTitle:"Feedback visuel",introText:"Activez le mode Commenter puis cliquez n'importe o\xF9 sur la page pour laisser une annotation.",gotIt:"Compris",loginTitle:"Identifiez-vous",loginText:"Votre nom et votre email seront associ\xE9s \xE0 vos annotations.",username:"Nom",email:"Email",validate:"Valider",invalidEmail:"Veuillez saisir une adresse email valide",placeholderComment:"D\xE9crivez votre retour\u2026",placeholderReply:"R\xE9pondre\u2026",send:"Envoyer",cancel:"Annuler",delete:"Supprimer",deleteConfirm:"Supprimer cette annotation et ses r\xE9ponses ?",resolve:"Marquer comme valid\xE9",reopen:"Rouvrir",empty:"Aucune annotation sur cette page.",emptyFiltered:"Aucune annotation pour ce filtre.",all:"Toutes",reply:"r\xE9ponse",replies:"r\xE9ponses",notLocated:"Annotation non localisable sur la page",legacyText:"Texte annot\xE9",attach:"Joindre un fichier",uploading:"Envoi en cours\u2026",fileTooBig:"Fichier trop volumineux (5 Mo max)",fileType:"Type de fichier non autoris\xE9",uploadUnavailable:"L'envoi de fichiers n'est pas encore disponible sur cette instance",uploadFailed:"\xC9chec de l'envoi du fichier",removeFile:"Retirer",screenshot:"Contexte \xE0 la cr\xE9ation",copyLink:"Copier le lien",linkCopied:"Lien copi\xE9 !",details:"D\xE9tails techniques",edit:"Modifier",save:"Enregistrer",deleteComment:"Supprimer ce commentaire ?",thisPage:"Cette page",wholeSite:"Tout le site",otherPage:"Voir sur la page",above:"au-dessus",below:"en dessous",edited:"modifi\xE9",status:{new:"\xC0 traiter",progress:"En cours",review:"\xC0 valider",done:"Valid\xE9"},timeAgo:{now:"\xE0 l'instant",m:"min",h:"h",d:"j",w:"sem",mo:"mois"}},en:{annotate:"Comment",navigate:"Browse",tasks:"Annotations",hidePins:"Hide pins",showPins:"Show pins",quit:"Disable the tool",introTitle:"Visual feedback",introText:"Switch to Comment mode, then click anywhere on the page to leave an annotation.",gotIt:"Got it",loginTitle:"Identify yourself",loginText:"Your name and email will be attached to your annotations.",username:"Name",email:"Email",validate:"Confirm",invalidEmail:"Please enter a valid email address",placeholderComment:"Describe your feedback\u2026",placeholderReply:"Reply\u2026",send:"Send",cancel:"Cancel",delete:"Delete",deleteConfirm:"Delete this annotation and its replies?",resolve:"Mark as resolved",reopen:"Reopen",empty:"No annotations on this page yet.",emptyFiltered:"No annotations match this filter.",all:"All",reply:"reply",replies:"replies",notLocated:"Annotation could not be located on the page",legacyText:"Annotated text",attach:"Attach a file",uploading:"Uploading\u2026",fileTooBig:"File too large (5 MB max)",fileType:"File type not allowed",uploadUnavailable:"File upload is not available on this instance yet",uploadFailed:"File upload failed",removeFile:"Remove",screenshot:"Context at creation",copyLink:"Copy link",linkCopied:"Link copied!",details:"Technical details",edit:"Edit",save:"Save",deleteComment:"Delete this comment?",thisPage:"This page",wholeSite:"Whole site",otherPage:"Open on page",above:"above",below:"below",edited:"edited",status:{new:"To do",progress:"In progress",review:"To review",done:"Resolved"},timeAgo:{now:"just now",m:"min",h:"h",d:"d",w:"wk",mo:"mo"}}},d=no[O.lang]||no.en;function xe(e){let t=J.find(n=>n.value===e);return t?d.status[t.key]:e}var ia=0,di=Array.isArray;function a(e,t,n,o,i,r){t||(t={});var s,l,u=t;if("ref"in u)for(l in u={},t)l=="ref"?s=t[l]:u[l]=t[l];var f={type:e,props:u,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ia,__i:-1,__u:0,__source:i,__self:r};if(typeof e=="function"&&(s=e.defaultProps))for(l in s)u[l]===void 0&&(u[l]=s[l]);return T.vnode&&T.vnode(f),f}var P={width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},be=()=>a("svg",{...P,children:a("path",{d:"M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5 8.38 8.38 0 0 1 8.5 8.5z"})}),oo=()=>a("svg",{...P,children:a("path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z"})}),ro=()=>a("svg",{...P,children:[a("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"}),a("circle",{cx:"12",cy:"12",r:"3"})]}),ao=()=>a("svg",{...P,children:[a("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),a("path",{d:"M6.61 6.61A13.53 13.53 0 0 0 2 12s3.5 8 10 8a9.74 9.74 0 0 0 5.39-1.61"}),a("line",{x1:"2",y1:"2",x2:"22",y2:"22"})]}),io=()=>a("svg",{...P,children:[a("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),a("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),a("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),a("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),a("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),a("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),so=()=>a("svg",{...P,children:[a("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),a("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),se=()=>a("svg",{...P,children:[a("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Ke=()=>a("svg",{...P,width:"16",height:"16",children:[a("polyline",{points:"3 6 5 6 21 6"}),a("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),ve=()=>a("svg",{...P,width:"16",height:"16",children:[a("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),a("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),lo=()=>a("svg",{...P,width:"15",height:"15",children:[a("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),a("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),co=()=>a("svg",{...P,width:"15",height:"15",children:[a("circle",{cx:"12",cy:"12",r:"10"}),a("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),a("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),fo=()=>a("svg",{...P,width:"13",height:"13",children:a("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})}),Ge=()=>a("svg",{...P,width:"15",height:"15",children:a("polyline",{points:"20 6 9 17 4 12"})}),uo=()=>a("svg",{...P,width:"15",height:"15",children:a("polyline",{points:"6 9 12 15 18 9"})}),po=()=>a("svg",{...P,width:"14",height:"14",children:[a("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),a("polyline",{points:"5 12 12 5 19 12"})]}),mo=()=>a("svg",{...P,width:"14",height:"14",children:[a("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a("polyline",{points:"19 12 12 19 5 12"})]}),ho=()=>a("svg",{...P,width:"13",height:"13",children:[a("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),a("polyline",{points:"15 3 21 3 21 9"}),a("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),go=()=>a("svg",{...P,width:"13",height:"13",children:[a("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),a("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),a("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),_o=()=>a("svg",{...P,width:"13",height:"13",children:[a("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",ry:"2"}),a("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),yo=()=>a("svg",{...P,width:"13",height:"13",children:[a("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),a("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),xo=()=>a("svg",{...P,width:"14",height:"14",children:[a("circle",{cx:"12",cy:"12",r:"10"}),a("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"})]});function bo({mode:e,onMode:t,pinsVisible:n,onTogglePins:o,sidebarOpen:i,onToggleSidebar:r,count:s,loading:l,onDisable:u}){return a("div",{class:"fa-toolbar",role:"toolbar","aria-label":"Faaaster annotate",children:[a("div",{class:"fa-toolbar-modes",children:[a("button",{type:"button",class:"fa-mode-btn"+(e==="comment"?" fa-active":""),onClick:()=>t("comment"),title:d.annotate,children:[a(be,{}),a("span",{children:d.annotate})]}),a("button",{type:"button",class:"fa-mode-btn"+(e==="browse"?" fa-active":""),onClick:()=>t("browse"),title:d.navigate,children:[a(oo,{}),a("span",{children:d.navigate})]})]}),a("div",{class:"fa-toolbar-sep"}),a("button",{type:"button",class:"fa-icon-btn",onClick:o,title:n?d.hidePins:d.showPins,children:n?a(ro,{}):a(ao,{})}),a("button",{type:"button",class:"fa-icon-btn"+(i?" fa-active":""),onClick:r,title:d.tasks,children:[a(io,{}),l?a("span",{class:"fa-badge fa-badge-loading"}):s>0&&a("span",{class:"fa-badge",children:s})]}),a("div",{class:"fa-toolbar-sep"}),a("button",{type:"button",class:"fa-icon-btn fa-quit",onClick:u,title:d.quit,children:a(so,{})})]})}var vo="faaaster-annotate-root";function wo(e,t){let n=document.elementsFromPoint(e,t);for(let o of n)if(!(o.id===vo||o.closest("#"+vo))&&o!==document.documentElement)return o;return document.body}function ko({active:e,onPick:t}){let[n,o]=v(null),i=U(null);return B(()=>{e||o(null)},[e]),e?a("div",{ref:i,class:"fa-capture",onMouseMove:l=>{let u=wo(l.clientX,l.clientY);if(!u||u===document.body||u===document.documentElement){o(null);return}let f=u.getBoundingClientRect();o({left:f.left,top:f.top,width:f.width,height:f.height})},onMouseLeave:()=>o(null),onClick:l=>{l.preventDefault(),l.stopPropagation();let u=wo(l.clientX,l.clientY);u&&t(u,l.clientX,l.clientY,eo(u,l.clientX,l.clientY))},children:n&&n.width>0&&a("div",{class:"fa-highlight",style:{left:n.left+"px",top:n.top+"px",width:n.width+"px",height:n.height+"px"}})}):null}function So({annotations:e,positions:t,openId:n,onOpen:o,draftPos:i}){return a("div",{class:"fa-pins",children:[e.map(r=>{var f,p;let s=t[r.id];if(!s)return null;let l=pe(ie(r)),u=l.key==="done";return a("button",{type:"button",class:"fa-pin"+(r.id===n?" fa-pin-open":"")+(u?" fa-pin-done":""),style:{left:s.x+"px",top:s.y+"px","--fa-pin-color":l.color},onClick:c=>{c.stopPropagation(),o(r.id)},title:"#"+((f=r.number)!=null?f:r.index),children:a("span",{children:(p=r.number)!=null?p:r.index})},r.id)}),i&&a("div",{class:"fa-pin fa-pin-draft",style:{left:i.x+"px",top:i.y+"px"},children:a("span",{children:"+"})})]})}function Co(e){if(!e)return null;let t="?";/edg\//i.test(e)?t="Edge":/opr\//i.test(e)?t="Opera":/chrome|crios/i.test(e)?t="Chrome":/firefox|fxios/i.test(e)?t="Firefox":/safari/i.test(e)&&(t="Safari");let n="?";return/windows/i.test(e)?n="Windows":/iphone|ipad|ipod/i.test(e)?n="iOS":/mac os/i.test(e)?n="macOS":/android/i.test(e)?n="Android":/linux/i.test(e)&&(n="Linux"),{browser:t,os:n}}function Eo(e){let t=e&&e.viewport&&e.viewport.w;return t?t<640?"mobile":t<1024?"tablet":"desktop":null}function Je(e){let t=new Date(e);if(isNaN(t))return"";let n=Math.max(0,Date.now()-t.getTime()),o=Math.floor(n/6e4);if(o<1)return d.timeAgo.now;if(o<60)return o+" "+d.timeAgo.m;let i=Math.floor(o/60);if(i<24)return i+" "+d.timeAgo.h;let r=Math.floor(i/24);if(r<7)return r+" "+d.timeAgo.d;let s=Math.floor(r/7);return s<5?s+" "+d.timeAgo.w:Math.floor(r/30)+" "+d.timeAgo.mo}function Qe(e,t){let n=new Date(e);return isNaN(n)?"":n.toLocaleString(t.replace("_","-"))}function Ze(e){let t=window.innerWidth,n=window.innerHeight;if(t<640)return null;let o=e.x+20;o+320>t-12&&(o=e.x-20-320),o<12&&(o=12);let i=Math.max(12,Math.min(e.y-24,n-400));return{left:o+"px",top:i+"px"}}var sa=5*1024*1024,la="image/*,.pdf,.zip",ca=/^(image\/|application\/pdf$|application\/(x-)?zip)/;function fa(e){return e>=1024*1024?(e/(1024*1024)).toFixed(1)+" Mo":Math.max(1,Math.round(e/1024))+" Ko"}function et(e){let[t,n]=v([]),[o,i]=v(!1),[r,s]=v(null),l=U(null);return{files:t,busy:o,error:r,pick:()=>l.current&&l.current.click(),remove:h=>n(w=>w.filter(x=>x!==h)),reset:()=>{n([]),s(null)},input:a("input",{ref:l,type:"file",multiple:!0,accept:la,style:{display:"none"},onChange:async h=>{let w=Array.from(h.target.files||[]);h.target.value="",s(null);for(let x of w){if(x.size>sa){s(d.fileTooBig);continue}if(!ca.test(x.type)){s(d.fileType);continue}i(!0);try{let C=await We(x);n(_=>[..._,C])}catch(C){C.unsupported?(s(d.uploadUnavailable),e&&e()):s(d.uploadFailed)}i(!1)}}})}}var Ie=()=>a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:a("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"})});function tt({files:e,onRemove:t}){return e.length?a("div",{class:"fa-attach-chips",children:e.map(n=>a("span",{class:"fa-attach-chip",title:n.name,children:[n.type&&n.type.startsWith("image/")&&a("img",{src:n.url,alt:""}),a("span",{class:"fa-attach-name",children:n.name}),a("button",{type:"button",onClick:()=>t(n),title:d.removeFile,children:a(se,{})})]},n.url))}):null}function To({attachments:e}){if(!e||!e.length)return null;let t=e.filter(o=>o.type&&o.type.startsWith("image/")),n=e.filter(o=>!o.type||!o.type.startsWith("image/"));return a("div",{class:"fa-attachments",children:[t.length>0&&a("div",{class:"fa-attach-thumbs",children:t.map(o=>a("a",{href:o.url,target:"_blank",rel:"noopener",title:o.name,children:a("img",{src:o.url,alt:o.name,loading:"lazy"})},o.url))}),n.map(o=>a("a",{class:"fa-attach-file",href:o.url,target:"_blank",rel:"noopener",children:[a(Ie,{}),a("span",{class:"fa-attach-name",children:o.name}),o.size>0&&a("span",{class:"fa-attach-size",children:fa(o.size)})]},o.url))]})}function ua(e){return(e||"?").split(/\s+/).map(t=>t[0]).slice(0,2).join("").toUpperCase()}function nt({comments:e,identity:t,onEdit:n,onDeleteComment:o}){let[i,r]=v(null),[s,l]=v(""),u=p=>{r(ae(p)),l(p.value)},f=p=>{let c=s.trim();c&&c!==p.value&&n(ae(p),c),r(null)};return a("div",{class:"fa-thread-comments",children:e.map((p,c)=>{let g=ae(p),h=Sn(p,t),w=p.modified&&p.created&&p.modified!==p.created;return a("div",{class:"fa-comment",children:[a("span",{class:"fa-avatar",children:ua(p.creator&&p.creator.name)}),a("div",{class:"fa-comment-main",children:[a("div",{class:"fa-comment-meta",children:[a("span",{class:"fa-comment-author",children:p.creator&&p.creator.name||"?"}),a("time",{title:Qe(p.modified||p.created,O.locale),children:[Je(p.modified||p.created),w&&i!==g?" \xB7 "+d.edited:""]}),h&&i!==g&&a("span",{class:"fa-comment-tools",children:[a("button",{type:"button",title:d.edit,onClick:()=>u(p),children:a(fo,{})}),c>0&&a("button",{type:"button",title:d.delete,onClick:()=>{window.confirm(d.deleteComment)&&o(g)},children:a(Ke,{})})]})]}),i===g?a("div",{class:"fa-comment-edit",children:[a("textarea",{class:"fa-textarea",rows:2,value:s,onInput:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),f(p)),x.key==="Escape"&&r(null)}}),a("div",{class:"fa-comment-edit-actions",children:[a("button",{type:"button",title:d.cancel,onClick:()=>r(null),children:a(se,{})}),a("button",{type:"button",class:"fa-edit-save",title:d.save,onClick:()=>f(p),children:a(Ge,{})})]})]}):a("div",{class:"fa-comment-text",children:p.value}),a(To,{attachments:p.attachments})]})]},g)})})}function It({meta:e}){let t=Eo(e);if(!t)return null;let n=e.viewport.w+"\xD7"+e.viewport.h;return a("span",{class:"fa-device",title:n,children:t==="mobile"?a(yo,{}):t==="tablet"?a(_o,{}):a(go,{})})}function pa(e){return window.location.origin+window.location.pathname+window.location.search+"#fa="+encodeURIComponent(e.id)}function da({annotation:e}){let t=e.meta||{},n=Co(t.ua),o=[];n&&o.push([d.details,n.browser+" \xB7 "+n.os]),t.viewport&&o.push(["Viewport",t.viewport.w+"\xD7"+t.viewport.h]);let i=Ve(e);return i&&o.push(["\u{1F4C5}",Qe(i,O.locale)]),o.length?a("div",{class:"fa-info-panel",children:[a(It,{meta:t}),o.map(([r,s])=>a("span",{title:r,children:s},r))]}):null}function Io({annotation:e,pos:t,identity:n,onReply:o,onStatus:i,onDelete:r,onEditComment:s,onDeleteComment:l,onClose:u,uploadsEnabled:f,onUploadUnsupported:p}){var L;let[c,g]=v(""),[h,w]=v(!1),[x,C]=v(!1),_=et(p),k=je(e),M=ie(e),F=e.meta&&e.meta.screenshot,$=Ze(t),N=()=>{let E=c.trim();!E||_.busy||(o(E,_.files),g(""),_.reset())},D=()=>{navigator.clipboard.writeText(pa(e)).then(()=>{C(!0),setTimeout(()=>C(!1),1500)}).catch(()=>{})};return a("div",{class:($?"fa-popover":"fa-popover fa-sheet")+" fa-thread",style:$||void 0,children:[a("div",{class:"fa-thread-header",children:[a("span",{class:"fa-thread-index",style:{"--fa-pin-color":pe(M).color},children:(L=e.number)!=null?L:e.index}),a("select",{class:"fa-status-select",value:M,onChange:E=>i(E.target.value),children:J.map(E=>a("option",{value:E.value,children:xe(E.value)},E.value))}),a("button",{type:"button",class:"fa-icon-btn fa-small"+(x?" fa-copied":""),onClick:D,title:x?d.linkCopied:d.copyLink,children:x?a(Ge,{}):a(lo,{})}),a("button",{type:"button",class:"fa-icon-btn fa-small"+(h?" fa-active":""),onClick:()=>w(!h),title:d.details,children:a(co,{})}),a("button",{type:"button",class:"fa-icon-btn fa-small",onClick:r,title:d.delete,children:a(Ke,{})}),a("button",{type:"button",class:"fa-icon-btn fa-small",onClick:u,title:"\u2715",children:a(se,{})})]}),h&&a(da,{annotation:e}),F&&a("a",{class:"fa-screenshot",href:F.url,target:"_blank",rel:"noopener",title:d.screenshot,children:a("img",{src:F.url,alt:d.screenshot,loading:"lazy"})}),a(nt,{comments:k,identity:n,onEdit:s,onDeleteComment:l}),a(tt,{files:_.files,onRemove:_.remove}),_.error&&a("p",{class:"fa-error",children:_.error}),a("div",{class:"fa-thread-reply",children:[f&&a("button",{type:"button",class:"fa-icon-btn fa-small"+(_.busy?" fa-busy":""),onClick:_.pick,disabled:_.busy,title:_.busy?d.uploading:d.attach,children:a(Ie,{})}),_.input,a("textarea",{class:"fa-textarea",rows:1,placeholder:d.placeholderReply,value:c,onInput:E=>g(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),N())}}),a("button",{type:"button",class:"fa-btn fa-btn-primary fa-btn-round",disabled:!c.trim()||_.busy,onClick:N,title:d.send,children:a(ve,{})})]})]})}function Ao({pos:e,onSubmit:t,onCancel:n,uploadsEnabled:o,onUploadUnsupported:i}){let[r,s]=v(""),l=U(null),u=et(i),f=Ze(e);B(()=>{l.current&&l.current.focus()},[]);let p=()=>{let c=r.trim();c&&!u.busy&&t(c,u.files)};return a("div",{class:f?"fa-popover":"fa-popover fa-sheet",style:f||void 0,children:[a("textarea",{ref:l,class:"fa-textarea",rows:3,placeholder:d.placeholderComment,value:r,onInput:c=>s(c.target.value),onKeyDown:c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&p()}}),a(tt,{files:u.files,onRemove:u.remove}),u.error&&a("p",{class:"fa-error",children:u.error}),a("div",{class:"fa-popover-actions",children:[o&&a("button",{type:"button",class:"fa-icon-btn fa-small"+(u.busy?" fa-busy":""),onClick:u.pick,disabled:u.busy,title:u.busy?d.uploading:d.attach,children:a(Ie,{})}),u.input,a("span",{class:"fa-actions-spacer"}),a("button",{type:"button",class:"fa-btn fa-btn-ghost",onClick:n,children:d.cancel}),a("button",{type:"button",class:"fa-btn fa-btn-primary",disabled:!r.trim()||u.busy,onClick:p,children:[a(ve,{}),d.send]})]})]})}function At(e){return e?e.replace(/%%/g,"/"):""}function ma({onReply:e}){let[t,n]=v(""),o=()=>{let i=t.trim();i&&(e(i),n(""))};return a("div",{class:"fa-thread-reply",children:[a("textarea",{class:"fa-textarea",rows:1,placeholder:d.placeholderReply,value:t,onInput:i=>n(i.target.value),onKeyDown:i=>{i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),o())}}),a("button",{type:"button",class:"fa-btn fa-btn-primary fa-btn-round",disabled:!t.trim(),onClick:o,title:d.send,children:a(ve,{})})]})}function Po({open:e,annotations:t,positions:n,activeId:o,identity:i,onSelect:r,onReply:s,onStatus:l,onEditComment:u,onDeleteComment:f,onClose:p}){let[c,g]=v("all"),[h,w]=v(null),[x,C]=v("page"),[_,k]=v(!1),[M,F]=v(null),$=U(!1);B(()=>{!e||$.current||($.current=!0,xt().then(b=>{F(b),k(!0)}).catch(()=>k(!1)))},[e]),B(()=>{x!=="site"||!_||xt().then(F).catch(()=>C("page"))},[x,_]);let N=x==="site"&&Array.isArray(M),D=N?M:t,L=D.slice().sort((b,X)=>new Date(qe(X))-new Date(qe(b))),E=c==="all"?L:L.filter(b=>ie(b)===c),V={all:D.length};for(let b of J)V[b.value]=D.filter(X=>ie(X)===b.value).length;return a("aside",{class:"fa-sidebar"+(e?" fa-sidebar-open":""),children:[a("div",{class:"fa-sidebar-header",children:[a("h2",{children:d.tasks}),_&&a("div",{class:"fa-scope",children:[a("button",{type:"button",class:x==="page"?"fa-scope-active":"",onClick:()=>C("page"),children:d.thisPage}),a("button",{type:"button",class:x==="site"?"fa-scope-active":"",onClick:()=>C("site"),children:d.wholeSite})]}),a("button",{type:"button",class:"fa-icon-btn fa-small",onClick:p,children:a(se,{})})]}),a("div",{class:"fa-filters",children:[a("button",{type:"button",class:"fa-chip"+(c==="all"?" fa-chip-active":""),onClick:()=>g("all"),children:[d.all," ",a("b",{children:V.all})]}),J.map(b=>a("button",{type:"button",class:"fa-chip"+(c===b.value?" fa-chip-active":""),style:{"--fa-chip-color":b.color},onClick:()=>g(b.value),children:[xe(b.value)," ",a("b",{children:V[b.value]})]},b.value))]}),a("ul",{class:"fa-list",children:[E.length===0&&a("li",{class:"fa-empty",children:D.length===0?d.empty:d.emptyFiltered}),E.map(b=>{var Ae;let X=je(b),we=Math.max(0,X.length-1),te=pe(ie(b)),W=N&&b.url&&At(b.url)!==window.location.pathname,le=!W&&!!n[b.id],Q=h===b.id,Y=b.meta&&b.meta.screenshot;return a("li",{class:Q?"fa-expanded":"",children:[a("div",{class:"fa-item"+(b.id===o?" fa-item-active":"")+(le||W?"":" fa-item-unlocated"),children:[a("button",{type:"button",class:"fa-item-main",title:le||W?"":d.notLocated,onClick:()=>{W?window.location.href=At(b.url)+"#fa="+encodeURIComponent(b.id):le?r(b.id):w(Q?null:b.id)},children:[a("span",{class:"fa-item-pin",style:{"--fa-pin-color":te.color},children:(Ae=b.number)!=null?Ae:b.index}),a("span",{class:"fa-item-body",children:[a("span",{class:"fa-item-text",children:(X[0]||{}).value||""}),W&&a("span",{class:"fa-item-page",children:[a(ho,{})," ",At(b.url)||"/"]}),a("span",{class:"fa-item-meta",children:[a("b",{children:En(b).name}),a("span",{children:"\xB7"}),a("time",{children:Je(qe(b))}),we>0&&a("span",{class:"fa-item-replies",children:[a(be,{})," ",we]}),a(It,{meta:b.meta}),!le&&!W&&a(xo,{})]})]}),a("span",{class:"fa-item-status",style:{"--fa-chip-color":te.color},children:xe(te.value)})]}),a("button",{type:"button",class:"fa-item-chevron"+(Q?" fa-open":""),onClick:()=>w(Q?null:b.id),title:Q?"\u2212":"+",children:a(uo,{})})]}),Q&&a("div",{class:"fa-item-detail",children:[!W&&a("select",{class:"fa-status-select",value:te.value,onChange:j=>l(b.id,j.target.value),children:J.map(j=>a("option",{value:j.value,children:xe(j.value)},j.value))}),Y&&a("a",{class:"fa-screenshot",href:Y.url,target:"_blank",rel:"noopener",title:d.screenshot,children:a("img",{src:Y.url,alt:d.screenshot,loading:"lazy"})}),a(nt,{comments:X,identity:W?null:i,onEdit:(j,ot)=>u(b.id,j,ot),onDeleteComment:j=>f(b.id,j)}),!W&&a(ma,{onReply:j=>s(b.id,j,[])})]})]},b.id)})]})]})}var ha=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function Ro({onLogin:e,onCancel:t}){let[n,o]=v(""),[i,r]=v(""),[s,l]=v(null);return a("div",{class:"fa-modal-backdrop",onClick:t,children:a("form",{class:"fa-modal",onClick:f=>f.stopPropagation(),onSubmit:f=>{if(f.preventDefault(),!ha.test(i)){l(d.invalidEmail);return}e(n.trim(),i.trim())},children:[a("h3",{children:d.loginTitle}),a("p",{children:d.loginText}),a("label",{children:[d.username,a("input",{type:"text",required:!0,value:n,onInput:f=>o(f.target.value)})]}),a("label",{children:[d.email,a("input",{type:"email",required:!0,value:i,onInput:f=>r(f.target.value)})]}),s&&a("p",{class:"fa-error",children:s}),a("div",{class:"fa-popover-actions",children:[a("button",{type:"button",class:"fa-btn fa-btn-ghost",onClick:t,children:d.cancel}),a("button",{type:"submit",class:"fa-btn fa-btn-primary",disabled:!n.trim()||!i.trim(),children:d.validate})]})]})})}function Do({onDismiss:e}){return a("div",{class:"fa-intro",children:[a("span",{class:"fa-intro-icon",children:a(be,{})}),a("div",{class:"fa-intro-body",children:[a("b",{children:d.introTitle}),a("p",{children:d.introText})]}),a("button",{type:"button",class:"fa-btn fa-btn-primary",onClick:e,children:d.gotIt})]})}function Lo({positions:e}){let t=Object.entries(e).filter(([r,s])=>r!=="__draft"&&s),n=t.filter(([,r])=>r.y<0),o=t.filter(([,r])=>r.y>window.innerHeight),i=(r,s)=>{if(!r.length)return;let l=r.reduce((u,f)=>s==="up"?f[1].y>u[1].y?f:u:f[1].y<u[1].y?f:u);window.scrollBy({top:l[1].y-window.innerHeight/2,behavior:"smooth"})};return!n.length&&!o.length?null:a(oe,{children:[n.length>0&&a("button",{type:"button",class:"fa-offscreen fa-offscreen-top",onClick:()=>i(n,"up"),title:n.length+" "+d.above,children:[a(po,{}),n.length]}),o.length>0&&a("button",{type:"button",class:"fa-offscreen fa-offscreen-bottom",onClick:()=>i(o,"down"),title:o.length+" "+d.below,children:[a(mo,{}),o.length]})]})}function ga(){let e=un(),t=O.wpUser&&O.wpEmail?{name:O.wpUser,email:O.wpEmail}:e.username&&e.email?{name:e.username,email:e.email}:null,n=O.forcedAnnotate==="true"?"comment":O.forcedAnnotate==="false"?"browse":e.annotateMode?"comment":"browse";return{cookie:e,identity:t,mode:n}}function _a(e,t){let[n,o]=v({}),i=U(new Map),r=U(0),s=G(()=>{r.current=0;let u=i.current,f={};for(let p of e){let c=u.get(p.id);(c===void 0||c&&!c.el.isConnected)&&(c=Tt(p),u.set(p.id,c));let g=c?to(c):null;f[p.id]=g?{...g,legacy:c.legacy}:null}if(t){let p=t.el.isConnected?t.el.getBoundingClientRect():null;f.__draft=p?{x:p.left+p.width*t.anchor.relX,y:p.top+p.height*t.anchor.relY}:null}o(f)},[e,t]),l=G(()=>{r.current||(r.current=requestAnimationFrame(s))},[s]);return B(()=>{i.current=new Map,s()},[s]),B(()=>{window.addEventListener("scroll",l,{capture:!0,passive:!0}),window.addEventListener("resize",l);let u=new MutationObserver(l);u.observe(document.body,{subtree:!0,childList:!0,attributes:!0});let f=new ResizeObserver(l);return f.observe(document.body),()=>{window.removeEventListener("scroll",l,{capture:!0}),window.removeEventListener("resize",l),u.disconnect(),f.disconnect(),r.current&&cancelAnimationFrame(r.current)}},[l]),n}function Mo(){let e=$e(ga,[]),[t,n]=v([]),[o,i]=v(!0),[r,s]=v(e.mode),[l,u]=v(e.identity),[f,p]=v(!0),[c,g]=v(!1),[h,w]=v(null),[x,C]=v(null),[_,k]=v(!1),[M,F]=v(e.cookie.showIntro),[$,N]=v(!0),D=_a(t,x);B(()=>{_t({username:l?l.name:!1,email:l?l.email:!1,annotateMode:r==="comment",showIntro:M,disabled:!1})},[l,r,M]),B(()=>{yt().then(m=>n(de(m))).catch(m=>console.error("[faaaster-annotate] load failed",m)).finally(()=>i(!1))},[]),B(()=>{let m=y=>{y.key==="Escape"&&(x?C(null):h?w(null):c&&g(!1))};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[x,h,c]);let L=U(t);L.current=t;let E=U(new Set),V=U(new Set),b=U(new Set),X=U(Promise.resolve()),we=U(!0),te=G(m=>{let y=m(L.current);L.current=y,n(y)},[]),W=G(async()=>{let m=await yt(),y=An(m,L.current,E.current,V.current,b.current);JSON.stringify(y)!==JSON.stringify(L.current)&&(L.current=y,n(y))},[]),le=G(async()=>{try{await W()}catch{}await hn(L.current)},[W]),Q=G(async m=>{if(we.current)try{if(m.type==="delete")await mn(m.id);else{let y=L.current.find(S=>S.id===m.id);if(y){let S=await dn(y);S&&S.number!=null&&te(I=>I.map(z=>z.id===m.id&&z.number!==S.number?{...z,number:S.number}:z))}}return}catch(y){if(!y.unsupported)throw y;we.current=!1}await le()},[le]),Y=G((m,y)=>{te(m),y.type==="delete"?V.current.add(y.id):E.current.add(y.id),X.current=X.current.then(()=>Q(y)).catch(S=>console.error("[faaaster-annotate] save failed",S))},[te,Q]);B(()=>{if(!O.pollInterval)return;let m=setInterval(()=>{document.visibilityState==="visible"&&(X.current=X.current.then(()=>W().catch(()=>{})))},O.pollInterval);return()=>clearInterval(m)},[W]);let Ae=G(()=>l?!0:(k(!0),!1),[l]),j=m=>{s(m),C(null),m==="comment"?(F(!1),l||k(!0)):w(null)},ot=(m,y,S,I)=>{Ae()&&(w(null),C({el:m,anchor:I}))},zo=G((m,y)=>{Jn(y).then(({blob:S,width:I,height:z})=>{let Vo=S.type==="image/webp"?"webp":"jpg",jo=new File([S],"capture-"+m.replace("#","")+"."+Vo,{type:S.type});return We(jo).then(qo=>{Y(No=>No.map(rt=>rt.id===m?vn(rt,{url:qo.url,w:I,h:z}):rt),{type:"upsert",id:m})})}).catch(S=>{S&&S.unsupported?N(!1):console.warn("[faaaster-annotate] screenshot skipped",S)})},[Y]),Ho=(m,y)=>{if(!x||!l)return;let S=yn({text:m,creator:l,anchor:x.anchor,attachments:y}),I=x.el?{el:x.el,relX:x.anchor.relX,relY:x.anchor.relY}:null;C(null),Y(z=>de([...z,S]),{type:"upsert",id:S.id}),w(S.id),$&&zo(S.id,I)},Pt=(m,y,S)=>{l&&Y(I=>I.map(z=>z.id===m?xn(z,y,l,S):z),{type:"upsert",id:m})},Rt=(m,y)=>{Y(S=>S.map(I=>I.id===m?bn(I,y):I),{type:"upsert",id:m})},$o=m=>{window.confirm(d.deleteConfirm)&&(w(null),Y(y=>de(y.filter(S=>S.id!==m)),{type:"delete",id:m}))},Dt=(m,y,S)=>{Y(I=>I.map(z=>z.id===m?wn(z,y,S):z),{type:"upsert",id:m})},Lt=(m,y)=>{b.current.add(m+"::"+y),Y(S=>S.map(I=>I.id===m?kn(I,y):I),{type:"upsert",id:m})},Bo=(m,y)=>{u({name:m,email:y}),k(!1),gn(m,y)},Mt=m=>{window.innerWidth<640&&g(!1);let y=t.find(I=>I.id===m);if(!y)return;let S=Tt(y);S&&(S.el.scrollIntoView({behavior:"smooth",block:"center"}),p(!0),window.setTimeout(()=>w(m),350))};B(()=>{if(o)return;let m=/#fa=([^&]+)/.exec(window.location.hash);if(!m)return;let y=decodeURIComponent(m[1]);L.current.find(S=>S.id===y)&&Mt(y)},[o]);let Wo=()=>{_t({username:l?l.name:!1,email:l?l.email:!1,annotateMode:!1,showIntro:!1,disabled:!0});let m=new URL(window.location.href);m.searchParams.delete("t"),window.location.href=m.href},ce=t.find(m=>m.id===h),Ft=h?D[h]:null;return a("div",{class:"fa-root",children:[a(ko,{active:r==="comment"&&!x&&!_,onPick:ot}),f&&a(So,{annotations:t,positions:D,openId:h,onOpen:m=>{C(null),w(m===h?null:m)},draftPos:x?D.__draft:null}),x&&D.__draft&&a(Ao,{pos:D.__draft,onSubmit:Ho,onCancel:()=>C(null),uploadsEnabled:$,onUploadUnsupported:()=>N(!1)}),ce&&Ft&&a(Io,{annotation:ce,pos:Ft,identity:l,onReply:(m,y)=>Pt(ce.id,m,y),onStatus:m=>Rt(ce.id,m),onDelete:()=>$o(ce.id),onEditComment:(m,y)=>Dt(ce.id,m,y),onDeleteComment:m=>Lt(ce.id,m),onClose:()=>w(null),uploadsEnabled:$,onUploadUnsupported:()=>N(!1)}),f&&a(Lo,{positions:D}),a(Po,{open:c,annotations:t,positions:D,activeId:h,identity:l,onSelect:Mt,onReply:Pt,onStatus:Rt,onEditComment:Dt,onDeleteComment:Lt,onClose:()=>g(!1)}),M&&r!=="comment"&&a(Do,{onDismiss:()=>F(!1)}),_&&a(Ro,{onLogin:Bo,onCancel:()=>{k(!1),s("browse")}}),a(bo,{mode:r,onMode:j,pinsVisible:f,onTogglePins:()=>p(!f),sidebarOpen:c,onToggleSidebar:()=>g(!c),count:t.length,loading:o,onDisable:Wo})]})}var Fo=`/* All styles live inside the shadow root \u2014 they cannot leak into the page,
   and the page theme cannot leak in. */

:host {
  all: initial;
  position: fixed;
  inset: 0;
  z-index: 2147483000;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  line-height: 1.45;
  color: #1f2330;
  --fa-accent: #4f46e5;
  --fa-accent-dark: #4338ca;
  --fa-surface: #ffffff;
  --fa-border: #e5e7eb;
  --fa-muted: #6b7280;
  --fa-shadow: 0 10px 30px rgba(17, 24, 39, 0.18), 0 2px 8px rgba(17, 24, 39, 0.1);
  --fa-radius: 12px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  font: inherit;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
}

/* ---------- capture overlay ---------- */

.fa-capture {
  position: fixed;
  inset: 0;
  pointer-events: auto;
  cursor: crosshair;
}

.fa-highlight {
  position: fixed;
  pointer-events: none;
  border: 2px solid var(--fa-accent);
  border-radius: 4px;
  background: rgba(79, 70, 229, 0.08);
  transition: all 60ms linear;
}

/* ---------- pins ---------- */

.fa-pins {
  position: fixed;
  inset: 0;
  pointer-events: none;
}

.fa-pin {
  position: fixed;
  pointer-events: auto;
  width: 30px;
  height: 30px;
  transform: translate(-50%, -100%);
  background: var(--fa-pin-color, var(--fa-accent));
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 50% 50% 50% 0;
  box-shadow: 0 3px 10px rgba(17, 24, 39, 0.35);
  transition: transform 120ms ease;
}

.fa-pin:hover,
.fa-pin-open {
  transform: translate(-50%, -100%) scale(1.18);
  z-index: 2;
}

.fa-pin-done {
  opacity: 0.55;
}

.fa-pin-draft {
  background: var(--fa-accent);
  animation: fa-pop 160ms ease;
}

@keyframes fa-pop {
  from {
    transform: translate(-50%, -100%) scale(0.4);
  }
  to {
    transform: translate(-50%, -100%) scale(1);
  }
}

/* ---------- popover (composer & thread) ---------- */

.fa-popover {
  position: fixed;
  pointer-events: auto;
  width: 320px;
  background: var(--fa-surface);
  border-radius: var(--fa-radius);
  box-shadow: var(--fa-shadow);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: fa-fade 140ms ease;
}

@keyframes fa-fade {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.fa-sheet {
  left: 12px !important;
  right: 12px;
  bottom: 84px;
  width: auto;
  max-height: 60vh;
}

.fa-textarea {
  width: 100%;
  resize: vertical;
  border: 1px solid var(--fa-border);
  border-radius: 8px;
  padding: 8px 10px;
  font: inherit;
  color: inherit;
  background: #fff;
  min-height: 38px;
}

.fa-textarea:focus {
  outline: 2px solid var(--fa-accent);
  outline-offset: -1px;
  border-color: transparent;
}

.fa-popover-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.fa-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  padding: 7px 14px;
  font-weight: 600;
  font-size: 13px;
}

.fa-btn-primary {
  background: var(--fa-accent);
  color: #fff;
}

.fa-btn-primary:hover {
  background: var(--fa-accent-dark);
}

.fa-btn-primary:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.fa-btn-ghost {
  color: var(--fa-muted);
}

.fa-btn-ghost:hover {
  background: #f3f4f6;
}

.fa-btn-round {
  padding: 8px;
  border-radius: 50%;
}

.fa-actions-spacer {
  flex: 1;
}

/* ---------- attachments ---------- */

.fa-attach-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.fa-attach-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  border: 1px solid var(--fa-border);
  border-radius: 8px;
  padding: 3px 6px;
  font-size: 12px;
  color: var(--fa-muted);
  background: #f9fafb;
}

.fa-attach-chip img {
  width: 22px;
  height: 22px;
  object-fit: cover;
  border-radius: 4px;
}

.fa-attach-chip button {
  display: flex;
  color: var(--fa-muted);
}

.fa-attach-chip button:hover {
  color: #ef4444;
}

.fa-attach-chip button svg {
  width: 12px;
  height: 12px;
}

.fa-attach-name {
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fa-attachments {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 6px;
}

.fa-attach-thumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.fa-attach-thumbs img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--fa-border);
  display: block;
}

.fa-attach-thumbs a:hover img {
  border-color: var(--fa-accent);
}

.fa-attach-file {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--fa-accent);
  text-decoration: none;
  border: 1px solid var(--fa-border);
  border-radius: 8px;
  padding: 4px 8px;
  background: #f9fafb;
}

.fa-attach-file:hover {
  border-color: var(--fa-accent);
}

.fa-attach-size {
  color: var(--fa-muted);
}

.fa-busy {
  opacity: 0.5;
  animation: fa-pulse 0.8s infinite alternate;
}

/* ---------- screenshot ---------- */

.fa-screenshot {
  display: block;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--fa-border);
  line-height: 0;
}

.fa-screenshot img {
  width: 100%;
  max-height: 110px;
  object-fit: cover;
  object-position: top;
  display: block;
}

.fa-screenshot:hover {
  border-color: var(--fa-accent);
}

/* ---------- thread ---------- */

.fa-thread-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.fa-thread-index {
  flex: none;
  width: 24px;
  height: 24px;
  border-radius: 50% 50% 50% 0;
  background: var(--fa-pin-color, var(--fa-accent));
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fa-status-select {
  flex: 1;
  border: 1px solid var(--fa-border);
  border-radius: 8px;
  padding: 5px 8px;
  font: inherit;
  font-size: 13px;
  background: #fff;
  color: inherit;
  cursor: pointer;
}

.fa-thread-comments {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 40vh;
  overflow-y: auto;
  padding: 2px 0;
}

.fa-comment {
  display: flex;
  gap: 8px;
}

.fa-avatar {
  flex: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #eef2ff;
  color: var(--fa-accent);
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fa-comment-main {
  flex: 1;
  min-width: 0;
}

.fa-comment-meta {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.fa-comment-author {
  font-weight: 600;
  font-size: 13px;
}

.fa-comment-meta time {
  color: var(--fa-muted);
  font-size: 12px;
}

.fa-comment-text {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 13px;
  color: #374151;
}

.fa-thread-reply {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.fa-thread-reply .fa-textarea {
  flex: 1;
}

.fa-info-panel {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--fa-muted);
  background: #f9fafb;
  border: 1px solid var(--fa-border);
  border-radius: 8px;
  padding: 6px 8px;
}

.fa-device {
  display: inline-flex;
  align-items: center;
  color: var(--fa-muted);
}

.fa-copied {
  color: #10b981 !important;
}

.fa-comment-tools {
  display: none;
  gap: 2px;
  margin-left: auto;
}

.fa-comment:hover .fa-comment-tools {
  display: inline-flex;
}

.fa-comment-tools button {
  display: flex;
  padding: 2px;
  color: var(--fa-muted);
  border-radius: 4px;
}

.fa-comment-tools button:hover {
  color: var(--fa-accent);
  background: #eef2ff;
}

.fa-comment-edit {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  margin-top: 2px;
}

.fa-comment-edit .fa-textarea {
  flex: 1;
  font-size: 13px;
}

.fa-comment-edit-actions {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.fa-comment-edit-actions button {
  display: flex;
  padding: 4px;
  border-radius: 6px;
  color: var(--fa-muted);
}

.fa-comment-edit-actions button:hover {
  background: #f3f4f6;
}

.fa-comment-edit-actions .fa-edit-save {
  color: #fff;
  background: var(--fa-accent);
}

.fa-comment-edit-actions .fa-edit-save:hover {
  background: var(--fa-accent-dark);
}

/* ---------- offscreen indicators ---------- */

.fa-offscreen {
  position: fixed;
  pointer-events: auto;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
  background: var(--fa-surface);
  color: var(--fa-accent);
  font-size: 12px;
  font-weight: 700;
  border-radius: 999px;
  box-shadow: var(--fa-shadow);
  padding: 5px 10px;
}

.fa-offscreen:hover {
  background: #eef2ff;
}

.fa-offscreen-top {
  top: 12px;
}

.fa-offscreen-bottom {
  bottom: 72px;
}

/* ---------- toolbar ---------- */

.fa-toolbar {
  position: fixed;
  pointer-events: auto;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--fa-surface);
  border-radius: 999px;
  box-shadow: var(--fa-shadow);
  padding: 6px;
}

.fa-toolbar-modes {
  display: flex;
  background: #f3f4f6;
  border-radius: 999px;
  padding: 3px;
}

.fa-mode-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 13px;
  color: var(--fa-muted);
}

.fa-mode-btn.fa-active {
  background: var(--fa-accent);
  color: #fff;
  box-shadow: 0 1px 4px rgba(17, 24, 39, 0.25);
}

.fa-toolbar-sep {
  width: 1px;
  height: 22px;
  background: var(--fa-border);
}

.fa-icon-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: var(--fa-muted);
}

.fa-icon-btn:hover {
  background: #f3f4f6;
  color: #1f2330;
}

.fa-icon-btn.fa-active {
  color: var(--fa-accent);
  background: #eef2ff;
}

.fa-icon-btn.fa-small {
  width: 28px;
  height: 28px;
}

.fa-quit:hover {
  color: #ef4444;
  background: #fef2f2;
}

.fa-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  background: var(--fa-accent);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}

.fa-badge-loading {
  background: var(--fa-muted);
  animation: fa-pulse 1s infinite alternate;
}

@keyframes fa-pulse {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* ---------- sidebar ---------- */

.fa-sidebar {
  position: fixed;
  pointer-events: auto;
  top: 0;
  right: 0;
  bottom: 0;
  width: 340px;
  max-width: 100vw;
  background: var(--fa-surface);
  box-shadow: var(--fa-shadow);
  display: flex;
  flex-direction: column;
  transform: translateX(105%);
  transition: transform 200ms ease;
}

.fa-sidebar-open {
  transform: none;
}

.fa-sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--fa-border);
}

.fa-sidebar-header h2 {
  font-size: 16px;
  font-weight: 700;
}

.fa-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--fa-border);
}

.fa-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: 1px solid var(--fa-border);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  color: var(--fa-muted);
}

.fa-chip b {
  color: var(--fa-chip-color, var(--fa-accent));
}

.fa-chip-active {
  border-color: var(--fa-chip-color, var(--fa-accent));
  color: var(--fa-chip-color, var(--fa-accent));
  background: color-mix(in srgb, var(--fa-chip-color, var(--fa-accent)) 8%, white);
}

.fa-list {
  flex: 1;
  overflow-y: auto;
  list-style: none;
}

.fa-empty {
  padding: 24px 16px;
  color: var(--fa-muted);
  text-align: center;
}

.fa-item {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid #f3f4f6;
}

.fa-item-main {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  text-align: left;
  padding: 12px 0 12px 16px;
}

.fa-item-chevron {
  flex: none;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: var(--fa-muted);
}

.fa-item-chevron svg {
  transition: transform 150ms ease;
}

.fa-item-chevron.fa-open svg {
  transform: rotate(180deg);
}

.fa-item-chevron:hover {
  color: var(--fa-accent);
}

.fa-item-detail {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 16px 14px;
  border-bottom: 1px solid #f3f4f6;
  background: #fcfcfd;
}

.fa-item-detail .fa-thread-comments {
  max-height: none;
}

.fa-item-page {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--fa-accent);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fa-scope {
  display: flex;
  background: #f3f4f6;
  border-radius: 999px;
  padding: 2px;
  font-size: 11px;
}

.fa-scope button {
  padding: 4px 10px;
  border-radius: 999px;
  font-weight: 600;
  color: var(--fa-muted);
}

.fa-scope .fa-scope-active {
  background: #fff;
  color: var(--fa-accent);
  box-shadow: 0 1px 3px rgba(17, 24, 39, 0.15);
}

.fa-item:hover {
  background: #f9fafb;
}

.fa-item-active {
  background: #eef2ff;
}

.fa-item-unlocated {
  opacity: 0.55;
  cursor: default;
}

.fa-item-pin {
  flex: none;
  width: 24px;
  height: 24px;
  border-radius: 50% 50% 50% 0;
  background: var(--fa-pin-color, var(--fa-accent));
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fa-item-body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.fa-item-text {
  font-size: 13px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fa-item-meta {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: var(--fa-muted);
}

.fa-item-replies {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.fa-item-replies svg {
  width: 12px;
  height: 12px;
}

.fa-item-status {
  flex: none;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--fa-chip-color);
  border: 1px solid color-mix(in srgb, var(--fa-chip-color) 40%, white);
  background: color-mix(in srgb, var(--fa-chip-color) 8%, white);
  border-radius: 6px;
  padding: 2px 6px;
  margin-top: 2px;
}

/* ---------- modal ---------- */

.fa-modal-backdrop {
  position: fixed;
  inset: 0;
  pointer-events: auto;
  background: rgba(17, 24, 39, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.fa-modal {
  width: 360px;
  max-width: 100%;
  background: var(--fa-surface);
  border-radius: var(--fa-radius);
  box-shadow: var(--fa-shadow);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fa-modal h3 {
  font-size: 16px;
}

.fa-modal p {
  color: var(--fa-muted);
  font-size: 13px;
}

.fa-modal label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
}

.fa-modal input {
  border: 1px solid var(--fa-border);
  border-radius: 8px;
  padding: 8px 10px;
  font: inherit;
}

.fa-modal input:focus {
  outline: 2px solid var(--fa-accent);
  outline-offset: -1px;
}

.fa-error {
  color: #ef4444;
  font-size: 12px;
}

/* ---------- intro ---------- */

.fa-intro {
  position: fixed;
  pointer-events: auto;
  bottom: 84px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 12px;
  width: 420px;
  max-width: calc(100vw - 24px);
  background: var(--fa-surface);
  border-radius: var(--fa-radius);
  box-shadow: var(--fa-shadow);
  padding: 14px;
}

.fa-intro-icon {
  flex: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #eef2ff;
  color: var(--fa-accent);
  display: flex;
  align-items: center;
  justify-content: center;
}

.fa-intro-body {
  flex: 1;
}

.fa-intro-body p {
  color: var(--fa-muted);
  font-size: 12px;
}

/* ---------- mobile ---------- */

@media (max-width: 639px) {
  .fa-mode-btn span {
    display: none;
  }

  .fa-mode-btn {
    padding: 6px 12px;
  }

  .fa-sidebar {
    width: 100vw;
  }

  .fa-pin {
    width: 32px;
    height: 32px;
  }
}
`;var Uo="faaaster-annotate-root";function Oo(){if(document.getElementById(Uo)||window!==window.top)return;let e=document.createElement("div");e.id=Uo,document.body.appendChild(e);let t=e.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=Fo,t.appendChild(n);let o=document.createElement("div");o.className="fa-app",t.appendChild(o),Gt(a(Mo,{}),o)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Oo):Oo();})();
