(()=>{var Oe,T,$t,qo,ne,Ut,Wt,Bt,at,Re,ke,Vt,ct,it,st,No,Fe={},Me=[],Ko=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ze=Array.isArray;function Z(e,t){for(var n in t)e[n]=t[n];return e}function ft(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Xo(e,t,n){var o,a,r,s={};for(r in t)r=="key"?o=t[r]:r=="ref"?a=t[r]:s[r]=t[r];if(arguments.length>2&&(s.children=arguments.length>3?Oe.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return De(e,s,o,a,null)}function De(e,t,n,o,a){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a==null?++$t:a,__i:-1,__u:0};return a==null&&T.vnode!=null&&T.vnode(r),r}function oe(e){return e.children}function Le(e,t){this.props=e,this.context=t}function fe(e,t){if(t==null)return e.__?fe(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?fe(e):null}function Yo(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,o=[],a=[],r=Z({},t);r.__v=t.__v+1,T.vnode&&T.vnode(r),ut(e.__P,r,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,o,n==null?fe(t):n,!!(32&t.__u),a),r.__v=t.__v,r.__.__k[r.__i]=r,Kt(o,r,a),t.__e=t.__=null,r.__e!=n&&jt(r)}}function jt(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),jt(e)}function Ot(e){(!e.__d&&(e.__d=!0)&&ne.push(e)&&!Ue.__r++||Ut!=T.debounceRendering)&&((Ut=T.debounceRendering)||Wt)(Ue)}function Ue(){try{for(var e,t=1;ne.length;)ne.length>t&&ne.sort(Bt),e=ne.shift(),t=ne.length,Yo(e)}finally{ne.length=Ue.__r=0}}function qt(e,t,n,o,a,r,s,l,u,f,p){var c,g,h,w,b,C,y,k=o&&o.__k||Me,F=t.length;for(u=Go(n,t,k,u,F),c=0;c<F;c++)(h=n.__k[c])!=null&&(g=h.__i!=-1&&k[h.__i]||Fe,h.__i=c,C=ut(e,h,g,a,r,s,l,u,f,p),w=h.__e,h.ref&&g.ref!=h.ref&&(g.ref&&pt(g.ref,null,h),p.push(h.ref,h.__c||w,h)),b==null&&w!=null&&(b=w),(y=!!(4&h.__u))||g.__k===h.__k?(u=Nt(h,u,e,y),y&&g.__e&&(g.__e=null)):typeof h.type=="function"&&C!==void 0?u=C:w&&(u=w.nextSibling),h.__u&=-7);return n.__e=b,u}function Go(e,t,n,o,a){var r,s,l,u,f,p=n.length,c=p,g=0;for(e.__k=new Array(a),r=0;r<a;r++)(s=t[r])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[r]=De(null,s,null,null,null):ze(s)?s=e.__k[r]=De(oe,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[r]=De(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[r]=s,u=r+g,s.__=e,s.__b=e.__b+1,l=null,(f=s.__i=Jo(s,n,u,c))!=-1&&(c--,(l=n[f])&&(l.__u|=2)),l==null||l.__v==null?(f==-1&&(a>p?g--:a<p&&g++),typeof s.type!="function"&&(s.__u|=4)):f!=u&&(f==u-1?g--:f==u+1?g++:(f>u?g--:g++,s.__u|=4))):e.__k[r]=null;if(c)for(r=0;r<p;r++)(l=n[r])!=null&&!(2&l.__u)&&(l.__e==o&&(o=fe(l)),Yt(l,l));return o}function Nt(e,t,n,o){var a,r;if(typeof e.type=="function"){for(a=e.__k,r=0;a&&r<a.length;r++)a[r]&&(a[r].__=e,t=Nt(a[r],t,n,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=fe(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Jo(e,t,n,o){var a,r,s,l=e.key,u=e.type,f=t[n],p=f!=null&&(2&f.__u)==0;if(f===null&&l==null||p&&l==f.key&&u==f.type)return n;if(o>(p?1:0)){for(a=n-1,r=n+1;a>=0||r<t.length;)if((f=t[s=a>=0?a--:r++])!=null&&!(2&f.__u)&&l==f.key&&u==f.type)return s}return-1}function zt(e,t,n){t[0]=="-"?e.setProperty(t,n==null?"":n):e[t]=n==null?"":typeof n!="number"||Ko.test(t)?n:n+"px"}function Pe(e,t,n,o,a){var r,s;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||zt(e.style,t,"");if(n)for(t in n)o&&n[t]==o[t]||zt(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")r=t!=(t=t.replace(Vt,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o?n[ke]=o[ke]:(n[ke]=ct,e.addEventListener(t,r?st:it,r)):e.removeEventListener(t,r?st:it,r);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ht(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[Re]==null)t[Re]=ct++;else if(t[Re]<n[ke])return;return n(T.event?T.event(t):t)}}}function ut(e,t,n,o,a,r,s,l,u,f){var p,c,g,h,w,b,C,y,k,F,M,H,N,D,L,S=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),r=[l=t.__e=n.__e]),(p=T.__b)&&p(t);e:if(typeof S=="function")try{if(y=t.props,k=S.prototype&&S.prototype.render,F=(p=S.contextType)&&o[p.__c],M=p?F?F.props.value:p.__:o,n.__c?C=(c=t.__c=n.__c).__=c.__E:(k?t.__c=c=new S(y,M):(t.__c=c=new Le(y,M),c.constructor=S,c.render=Zo),F&&F.sub(c),c.state||(c.state={}),c.__n=o,g=c.__d=!0,c.__h=[],c._sb=[]),k&&c.__s==null&&(c.__s=c.state),k&&S.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Z({},c.__s)),Z(c.__s,S.getDerivedStateFromProps(y,c.__s))),h=c.props,w=c.state,c.__v=t,g)k&&S.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),k&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(k&&S.getDerivedStateFromProps==null&&y!==h&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,M),t.__v==n.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,M)===!1){t.__v!=n.__v&&(c.props=y,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(V){V&&(V.__=t)}),Me.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&s.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,M),k&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(h,w,b)})}if(c.context=M,c.props=y,c.__P=e,c.__e=!1,H=T.__r,N=0,k)c.state=c.__s,c.__d=!1,H&&H(t),p=c.render(c.props,c.state,c.context),Me.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,H&&H(t),p=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++N<25);c.state=c.__s,c.getChildContext!=null&&(o=Z(Z({},o),c.getChildContext())),k&&!g&&c.getSnapshotBeforeUpdate!=null&&(b=c.getSnapshotBeforeUpdate(h,w)),D=p!=null&&p.type===oe&&p.key==null?Xt(p.props.children):p,l=qt(e,ze(D)?D:[D],t,n,o,a,r,s,l,u,f),c.base=t.__e,t.__u&=-161,c.__h.length&&s.push(c),C&&(c.__E=c.__=null)}catch(V){if(t.__v=null,u||r!=null)if(V.then){for(t.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;r[r.indexOf(l)]=null,t.__e=l}else{for(L=r.length;L--;)ft(r[L]);lt(t)}else t.__e=n.__e,t.__k=n.__k,V.then||lt(t);T.__e(V,t,n)}else r==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Qo(n.__e,t,n,o,a,r,s,u,f);return(p=T.diffed)&&p(t),128&t.__u?void 0:l}function lt(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(lt))}function Kt(e,t,n){for(var o=0;o<n.length;o++)pt(n[o],n[++o],n[++o]);T.__c&&T.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(r){r.call(a)})}catch(r){T.__e(r,a.__v)}})}function Xt(e){return typeof e!="object"||e==null||e.__b>0?e:ze(e)?e.map(Xt):e.constructor!==void 0?null:Z({},e)}function Qo(e,t,n,o,a,r,s,l,u){var f,p,c,g,h,w,b,C=n.props||Fe,y=t.props,k=t.type;if(k=="svg"?a="http://www.w3.org/2000/svg":k=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),r!=null){for(f=0;f<r.length;f++)if((h=r[f])&&"setAttribute"in h==!!k&&(k?h.localName==k:h.nodeType==3)){e=h,r[f]=null;break}}if(e==null){if(k==null)return document.createTextNode(y);e=document.createElementNS(a,k,y.is&&y),l&&(T.__m&&T.__m(t,r),l=!1),r=null}if(k==null)C===y||l&&e.data==y||(e.data=y);else{if(r=k=="textarea"&&y.defaultValue!=null?null:r&&Oe.call(e.childNodes),!l&&r!=null)for(C={},f=0;f<e.attributes.length;f++)C[(h=e.attributes[f]).name]=h.value;for(f in C)h=C[f],f=="dangerouslySetInnerHTML"?c=h:f=="children"||f in y||f=="value"&&"defaultValue"in y||f=="checked"&&"defaultChecked"in y||Pe(e,f,null,h,a);for(f in y)h=y[f],f=="children"?g=h:f=="dangerouslySetInnerHTML"?p=h:f=="value"?w=h:f=="checked"?b=h:l&&typeof h!="function"||C[f]===h||Pe(e,f,h,C[f],a);if(p)l||c&&(p.__html==c.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(c&&(e.innerHTML=""),qt(t.type=="template"?e.content:e,ze(g)?g:[g],t,n,o,k=="foreignObject"?"http://www.w3.org/1999/xhtml":a,r,s,r?r[0]:n.__k&&fe(n,0),l,u),r!=null)for(f=r.length;f--;)ft(r[f]);l&&k!="textarea"||(f="value",k=="progress"&&w==null?e.removeAttribute("value"):w!=null&&(w!==e[f]||k=="progress"&&!w||k=="option"&&w!=C[f])&&Pe(e,f,w,C[f],a),f="checked",b!=null&&b!=e[f]&&Pe(e,f,b,C[f],a))}return e}function pt(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(a){T.__e(a,n)}}function Yt(e,t,n){var o,a;if(T.unmount&&T.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||pt(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){T.__e(r,t)}o.base=o.__P=null}if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&Yt(o[a],t,n||typeof e.type!="function");n||ft(e.__e),e.__c=e.__=e.__e=void 0}function Zo(e,t,n){return this.constructor(e,n)}function Gt(e,t,n){var o,a,r,s;t==document&&(t=document.documentElement),T.__&&T.__(e,t),a=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],s=[],ut(t,e=(!o&&n||t).__k=Xo(oe,null,[e]),a||Fe,Fe,t.namespaceURI,!o&&n?[n]:a?null:t.firstChild?Oe.call(t.childNodes):null,r,!o&&n?n:a?a.__e:t.firstChild,o,s),Kt(r,e,s)}Oe=Me.slice,T={__e:function(e,t,n,o){for(var a,r,s;t=t.__;)if((a=t.__c)&&!a.__)try{if((r=a.constructor)&&r.getDerivedStateFromError!=null&&(a.setState(r.getDerivedStateFromError(e)),s=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,o||{}),s=a.__d),s)return a.__E=a}catch(l){e=l}throw e}},$t=0,qo=function(e){return e!=null&&e.constructor===void 0},Le.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Z({},this.state),typeof e=="function"&&(e=e(Z({},n),this.props)),e&&Z(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ot(this))},Le.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ot(this))},Le.prototype.render=oe,ne=[],Wt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Bt=function(e,t){return e.__v.__b-t.__v.__b},Ue.__r=0,at=Math.random().toString(8),Re="__d"+at,ke="__a"+at,Vt=/(PointerCapture)$|Capture$/i,ct=0,it=Ht(!1),st=Ht(!0),No=0;var Ce,A,dt,Jt,Se=0,an=[],R=T,Qt=R.__b,Zt=R.__r,en=R.diffed,tn=R.__c,nn=R.unmount,on=R.__;function ht(e,t){R.__h&&R.__h(A,e,Se||t),Se=0;var n=A.__H||(A.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function v(e){return Se=1,er(ln,e)}function er(e,t,n){var o=ht(Ce++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):ln(void 0,t),function(l){var u=o.__N?o.__N[0]:o.__[0],f=o.t(u,l);u!==f&&(o.__N=[f,o.__[1]],o.__c.setState({}))}],o.__c=A,!A.__f)){var a=function(l,u,f){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(g){return g.__c});if(p.every(function(g){return!g.__N}))return!r||r.call(this,l,u,f);var c=o.__c.props!==l;return p.some(function(g){if(g.__N){var h=g.__[0];g.__=g.__N,g.__N=void 0,h!==g.__[0]&&(c=!0)}}),r&&r.call(this,l,u,f)||c};A.__f=!0;var r=A.shouldComponentUpdate,s=A.componentWillUpdate;A.componentWillUpdate=function(l,u,f){if(this.__e){var p=r;r=void 0,a(l,u,f),r=p}s&&s.call(this,l,u,f)},A.shouldComponentUpdate=a}return o.__N||o.__}function $(e,t){var n=ht(Ce++,3);!R.__s&&sn(n.__H,t)&&(n.__=e,n.u=t,A.__H.__h.push(n))}function U(e){return Se=5,$e(function(){return{current:e}},[])}function $e(e,t){var n=ht(Ce++,7);return sn(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function G(e,t){return Se=8,$e(function(){return e},t)}function tr(){for(var e;e=an.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(He),t.__h.some(mt),t.__h=[]}catch(n){t.__h=[],R.__e(n,e.__v)}}}R.__b=function(e){A=null,Qt&&Qt(e)},R.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),on&&on(e,t)},R.__r=function(e){Zt&&Zt(e),Ce=0;var t=(A=e.__c).__H;t&&(dt===A?(t.__h=[],A.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(He),t.__h.some(mt),t.__h=[],Ce=0)),dt=A},R.diffed=function(e){en&&en(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(an.push(t)!==1&&Jt===R.requestAnimationFrame||((Jt=R.requestAnimationFrame)||nr)(tr)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),dt=A=null},R.__c=function(e,t){t.some(function(n){try{n.__h.some(He),n.__h=n.__h.filter(function(o){return!o.__||mt(o)})}catch(o){t.some(function(a){a.__h&&(a.__h=[])}),t=[],R.__e(o,n.__v)}}),tn&&tn(e,t)},R.unmount=function(e){nn&&nn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(o){try{He(o)}catch(a){t=a}}),n.__H=void 0,t&&R.__e(t,n.__v))};var rn=typeof requestAnimationFrame=="function";function nr(e){var t,n=function(){clearTimeout(o),rn&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);rn&&(t=requestAnimationFrame(n))}function He(e){var t=A,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),A=t}function mt(e){var t=A;e.__c=e.__(),A=t}function sn(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function ln(e,t){return typeof t=="function"?t(e):t}var ee=typeof window!="undefined"&&window.appConfig?window.appConfig:{},O={locale:ee.locale||"en_US",lang:(ee.locale||"").toLowerCase().startsWith("fr")?"fr":"en",wpUser:ee.user||null,wpEmail:ee.email||null,forcedAnnotate:ee.annotate,disabled:ee.disabled,restBase:(ee.restBase||"/wp-json").replace(/\/$/,""),pollInterval:typeof ee.pollInterval=="number"?ee.pollInterval:15e3},ue=window.location.pathname.replace(/\//g,"%%"),cn=(window.location.host+window.location.pathname).replace(/\//g,"-").replace(/\./g,"-"),J=[{value:"Nouveau",key:"new",color:"#f43f5e"},{value:"En cours",key:"progress",color:"#3b82f6"},{value:"\xC0 valider",key:"review",color:"#f59e0b"},{value:"Valid\xE9",key:"done",color:"#10b981"}],gt="Nouveau";function pe(e){return J.find(t=>t.value===e)||J[0]}var fn="faaaster-annotate";function or(e){let t=document.cookie.split("; ").find(n=>n.startsWith(e+"="));return t?t.slice(e.length+1):void 0}function rr(e,t,n){let o="";if(n){let a=new Date;a.setTime(a.getTime()+n*24*60*60*1e3),o="; expires="+a.toUTCString()}document.cookie=e+"="+(t||"")+o+"; path=/"}function un(){let e=or(fn),t={};if(e)try{t=JSON.parse(e)}catch{t={}}return{username:t.username||!1,email:t.email||!1,annotateMode:t.annotateMode===!0,showIntro:t.showIntro!==!1,disabled:t.disabled===!0}}function _t(e){rr(fn,JSON.stringify(e),30)}var re=O.restBase+"/annotate/v1";async function pn(e){let t=await fetch(e,{headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error("HTTP "+t.status);return t.json()}async function yt(){let e=await pn(re+"/annotations/?url="+ue);return Array.isArray(e)&&e.length>0?e:(e=await pn(re+"/annotations/?url="+cn),Array.isArray(e)?e:[])}async function xt(){let e=await fetch(re+"/annotations/?scope=site",{headers:{"Content-Type":"application/json"}});if(!e.ok)throw We(e.status);let t=await e.json();return Array.isArray(t)?t:[]}function We(e){let t=new Error("HTTP "+e);return t.unsupported=e===404||e===405||e===410||e===501,t}async function dn(e){let t=await fetch(re+"/annotation/?url="+ue,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw We(t.status);return t.json()}async function mn(e){let t=await fetch(re+"/annotation/?url="+ue+"&id="+encodeURIComponent(e),{method:"DELETE"});if(!t.ok)throw We(t.status);return t.json()}async function Be(e){let t=new FormData;t.append("file",e,e.name);let n=await fetch(re+"/upload/?url="+ue,{method:"POST",body:t});if(!n.ok)throw We(n.status);return n.json()}async function hn(e){let t=await fetch(re+"/proxy/?url="+ue,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("HTTP "+t.status);return t.json()}async function gn(e,t){try{await fetch(re+"/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,email:t})})}catch{}}function ar(){return window.crypto&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}function _n(e,t,n,o){let a=new Date().toISOString(),r={type:"TextualBody",purpose:n,value:e,creator:{id:t.email||t.name,name:t.name},created:a,modified:a};return o&&o.length&&(r.attachments=o),r}function yn({text:e,creator:t,anchor:n,attachments:o}){return{"@context":"http://www.w3.org/ns/anno.jsonld",type:"Annotation",id:"#"+ar(),body:[_n(e,t,"commenting",o),{type:"TextualBody",purpose:"tagging",value:gt}],target:{source:window.location.href,selector:[{type:"CssSelector",value:n.selector},{type:"FragmentSelector",conformsTo:"http://www.w3.org/TR/media-frags/",value:`xywh=percent:${n.relX.toFixed(4)},${n.relY.toFixed(4)},0,0`}]},meta:{kind:"pin",fixed:n.fixed,viewport:{w:window.innerWidth,h:window.innerHeight},ua:navigator.userAgent}}}function xn(e,t,n,o){let a=e.body.slice(),r=a.findIndex(l=>l.purpose==="tagging"),s=_n(t,n,"commenting",o);return r===-1?a.push(s):a.splice(r,0,s),{...e,body:Sn(a)}}function bn(e,t){let n=!1,o=e.body.map(a=>a.purpose==="tagging"&&!n?(n=!0,{...a,value:t,modified:new Date().toISOString()}):a);return n||o.push({type:"TextualBody",purpose:"tagging",value:t}),{...e,body:Sn(o)}}function vn(e,t){return{...e,meta:{...e.meta||{},screenshot:t}}}function ae(e){let t=e.creator||{};return(t.id||t.name||"?")+"|"+(e.created||"")}function wn(e,t,n){return{...e,body:e.body.map(o=>o.purpose==="commenting"&&ae(o)===t?{...o,value:n,modified:new Date().toISOString()}:o)}}function kn(e,t){return{...e,body:e.body.filter(n=>!(n.purpose==="commenting"&&ae(n)===t))}}function Cn(e,t){return!t||!e.creator?!1:e.creator.id===t.email||!e.creator.id&&e.creator.name===t.name}function Sn(e){return e.length&&e[0].purpose==="commenting"&&(e=e.slice(),e[0]={...e[0],modified:new Date().toISOString()}),e}function je(e){return(e.body||[]).filter(t=>t.purpose==="commenting")}function ie(e){let t=(e.body||[]).find(n=>n.purpose==="tagging");return t?t.value:gt}function En(e){let t=(e.body||[])[0];return t&&t.creator?t.creator:{name:"?"}}function qe(e){let t=(e.body||[])[0]||{};return t.modified||t.created||0}function Ve(e){return((e.body||[])[0]||{}).created||0}function de(e){let t=e.slice().sort((n,o)=>new Date(Ve(n))-new Date(Ve(o)));return t.forEach((n,o)=>{n.index=o+1}),t}function Tn(e){return(e.body||[]).filter(t=>t.purpose==="commenting")}function In(e){return(e.body||[]).find(t=>t.purpose==="tagging")||null}function ir(e,t,n,o){let a=new Map;for(let r of[...t,...n]){let s=ae(r);if(o.has(e+"::"+s))continue;let l=a.get(s);(!l||new Date(r.modified||r.created||0)>new Date(l.modified||l.created||0))&&a.set(s,r)}return Array.from(a.values()).sort((r,s)=>new Date(r.created||0)-new Date(s.created||0))}function sr(e,t,n){let o=In(e),a=In(t);if(!o)return a;if(!a)return o;if(o.value===a.value)return a;let r=o.modified||o.created,s=a.modified||a.created;return r&&s?new Date(r)>new Date(s)?o:a:n?a:o}function lr(e,t,n,o){let a=ir(t.id,Tn(e),Tn(t),o),r=sr(e,t,n),s={...e.meta||{},...t.meta||{},screenshot:t.meta&&t.meta.screenshot||e.meta&&e.meta.screenshot||void 0};s.screenshot||delete s.screenshot;let l=t.number!=null?t.number:e.number;return{...t,number:l,meta:s,body:r?[...a,r]:a}}function An(e,t,n,o,a){let r=a||new Set,s=new Map;for(let l of e)!l||!l.id||o.has(l.id)||s.set(l.id,l);for(let l of t){let u=s.get(l.id);u?s.set(l.id,lr(u,l,n.has(l.id),r)):n.has(l.id)&&s.set(l.id,l)}return de(Array.from(s.values()))}function Pn(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let n=document.implementation.createHTMLDocument(),o=n.createElement("base"),a=n.createElement("a");return n.head.appendChild(o),n.body.appendChild(a),t&&(o.href=t),a.href=e,a.href}var Rn=(()=>{let e=0,t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function Y(e){let t=[];for(let n=0,o=e.length;n<o;n++)t.push(e[n]);return t}var me=null;function Ke(e={}){return me||(e.includeStyleProperties?(me=e.includeStyleProperties,me):(me=Y(window.getComputedStyle(document.documentElement)),me))}function Ne(e,t){let o=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return o?parseFloat(o.replace("px","")):0}function cr(e){let t=Ne(e,"border-left-width"),n=Ne(e,"border-right-width");return e.clientWidth+t+n}function fr(e){let t=Ne(e,"border-top-width"),n=Ne(e,"border-bottom-width");return e.clientHeight+t+n}function bt(e,t={}){let n=t.width||cr(e),o=t.height||fr(e);return{width:n,height:o}}function Dn(){let e,t;try{t=process}catch{}let n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}var q=16384;function Ln(e){(e.width>q||e.height>q)&&(e.width>q&&e.height>q?e.width>e.height?(e.height*=q/e.width,e.width=q):(e.width*=q/e.height,e.height=q):e.width>q?(e.height*=q/e.width,e.width=q):(e.width*=q/e.height,e.height=q))}function he(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>{o.decode().then(()=>{requestAnimationFrame(()=>t(o))})},o.onerror=n,o.crossOrigin="anonymous",o.decoding="async",o.src=e})}async function ur(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function Fn(e,t,n){let o="http://www.w3.org/2000/svg",a=document.createElementNS(o,"svg"),r=document.createElementNS(o,"foreignObject");return a.setAttribute("width",`${t}`),a.setAttribute("height",`${n}`),a.setAttribute("viewBox",`0 0 ${t} ${n}`),r.setAttribute("width","100%"),r.setAttribute("height","100%"),r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("externalResourcesRequired","true"),a.appendChild(r),r.appendChild(e),ur(a)}var z=(e,t)=>{if(e instanceof t)return!0;let n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||z(n,t)};function pr(e){let t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function dr(e,t){return Ke(t).map(n=>{let o=e.getPropertyValue(n),a=e.getPropertyPriority(n);return`${n}: ${o}${a?" !important":""};`}).join(" ")}function mr(e,t,n,o){let a=`.${e}:${t}`,r=n.cssText?pr(n):dr(n,o);return document.createTextNode(`${a}{${r}}`)}function Mn(e,t,n,o){let a=window.getComputedStyle(e,n),r=a.getPropertyValue("content");if(r===""||r==="none")return;let s=Rn();try{t.className=`${t.className} ${s}`}catch{return}let l=document.createElement("style");l.appendChild(mr(s,n,a,o)),t.appendChild(l)}function Un(e,t,n){Mn(e,t,":before",n),Mn(e,t,":after",n)}var On="application/font-woff",zn="image/jpeg",hr={woff:On,woff2:On,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:zn,jpeg:zn,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function gr(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function ge(e){let t=gr(e).toLowerCase();return hr[t]||""}function _r(e){return e.split(/,/)[1]}function Ee(e){return e.search(/^(data:)/)!==-1}function wt(e,t){return`data:${t};base64,${e}`}async function kt(e,t,n){let o=await fetch(e,t);if(o.status===404)throw new Error(`Resource "${o.url}" not found`);let a=await o.blob();return new Promise((r,s)=>{let l=new FileReader;l.onerror=s,l.onloadend=()=>{try{r(n({res:o,result:l.result}))}catch(u){s(u)}},l.readAsDataURL(a)})}var vt={};function yr(e,t,n){let o=e.replace(/\?.*/,"");return n&&(o=e),/ttf|otf|eot|woff2?/i.test(o)&&(o=o.replace(/.*\//,"")),t?`[${t}]${o}`:o}async function _e(e,t,n){let o=yr(e,t,n.includeQueryParams);if(vt[o]!=null)return vt[o];n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let a;try{let r=await kt(e,n.fetchRequestInit,({res:s,result:l})=>(t||(t=s.headers.get("Content-Type")||""),_r(l)));a=wt(r,t)}catch(r){a=n.imagePlaceholder||"";let s=`Failed to fetch resource: ${e}`;r&&(s=typeof r=="string"?r:r.message),s&&console.warn(s)}return vt[o]=a,a}async function xr(e){let t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):he(t)}async function br(e,t){if(e.currentSrc){let r=document.createElement("canvas"),s=r.getContext("2d");r.width=e.clientWidth,r.height=e.clientHeight,s==null||s.drawImage(e,0,0,r.width,r.height);let l=r.toDataURL();return he(l)}let n=e.poster,o=ge(n),a=await _e(n,o,t);return he(a)}async function vr(e,t){var n;try{if(!((n=e==null?void 0:e.contentDocument)===null||n===void 0)&&n.body)return await Te(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function wr(e,t){return z(e,HTMLCanvasElement)?xr(e):z(e,HTMLVideoElement)?br(e,t):z(e,HTMLIFrameElement)?vr(e,t):e.cloneNode(Hn(e))}var kr=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT",Hn=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SVG";async function Cr(e,t,n){var o,a;if(Hn(t))return t;let r=[];return kr(e)&&e.assignedNodes?r=Y(e.assignedNodes()):z(e,HTMLIFrameElement)&&(!((o=e.contentDocument)===null||o===void 0)&&o.body)?r=Y(e.contentDocument.body.childNodes):r=Y(((a=e.shadowRoot)!==null&&a!==void 0?a:e).childNodes),r.length===0||z(e,HTMLVideoElement)||await r.reduce((s,l)=>s.then(()=>Te(l,n)).then(u=>{u&&t.appendChild(u)}),Promise.resolve()),t}function Sr(e,t,n){let o=t.style;if(!o)return;let a=window.getComputedStyle(e);a.cssText?(o.cssText=a.cssText,o.transformOrigin=a.transformOrigin):Ke(n).forEach(r=>{let s=a.getPropertyValue(r);r==="font-size"&&s.endsWith("px")&&(s=`${Math.floor(parseFloat(s.substring(0,s.length-2)))-.1}px`),z(e,HTMLIFrameElement)&&r==="display"&&s==="inline"&&(s="block"),r==="d"&&t.getAttribute("d")&&(s=`path(${t.getAttribute("d")})`),o.setProperty(r,s,a.getPropertyPriority(r))})}function Er(e,t){z(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),z(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function Tr(e,t){if(z(e,HTMLSelectElement)){let n=t,o=Array.from(n.children).find(a=>e.value===a.getAttribute("value"));o&&o.setAttribute("selected","")}}function Ir(e,t,n){return z(t,Element)&&(Sr(e,t,n),Un(e,t,n),Er(e,t),Tr(e,t)),t}async function Ar(e,t){let n=e.querySelectorAll?e.querySelectorAll("use"):[];if(n.length===0)return e;let o={};for(let r=0;r<n.length;r++){let l=n[r].getAttribute("xlink:href");if(l){let u=e.querySelector(l),f=document.querySelector(l);!u&&f&&!o[l]&&(o[l]=await Te(f,t,!0))}}let a=Object.values(o);if(a.length){let r="http://www.w3.org/1999/xhtml",s=document.createElementNS(r,"svg");s.setAttribute("xmlns",r),s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.overflow="hidden",s.style.display="none";let l=document.createElementNS(r,"defs");s.appendChild(l);for(let u=0;u<a.length;u++)l.appendChild(a[u]);e.appendChild(s)}return e}async function Te(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(o=>wr(o,t)).then(o=>Cr(e,o,t)).then(o=>Ir(e,o,t)).then(o=>Ar(o,t))}var $n=/url\((['"]?)([^'"]+?)\1\)/g,Pr=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Rr=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Dr(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function Lr(e){let t=[];return e.replace($n,(n,o,a)=>(t.push(a),n)),t.filter(n=>!Ee(n))}async function Fr(e,t,n,o,a){try{let r=n?Pn(t,n):t,s=ge(t),l;if(a){let u=await a(r);l=wt(u,s)}else l=await _e(r,s,o);return e.replace(Dr(t),`$1${l}$3`)}catch{}return e}function Mr(e,{preferredFontFormat:t}){return t?e.replace(Rr,n=>{for(;;){let[o,,a]=Pr.exec(n)||[];if(!a)return"";if(a===t)return`src: ${o};`}}):e}function Ct(e){return e.search($n)!==-1}async function Xe(e,t,n){if(!Ct(e))return e;let o=Mr(e,n);return Lr(o).reduce((r,s)=>r.then(l=>Fr(l,s,t,n)),Promise.resolve(o))}async function ye(e,t,n){var o;let a=(o=t.style)===null||o===void 0?void 0:o.getPropertyValue(e);if(a){let r=await Xe(a,null,n);return t.style.setProperty(e,r,t.style.getPropertyPriority(e)),!0}return!1}async function Ur(e,t){await ye("background",e,t)||await ye("background-image",e,t),await ye("mask",e,t)||await ye("-webkit-mask",e,t)||await ye("mask-image",e,t)||await ye("-webkit-mask-image",e,t)}async function Or(e,t){let n=z(e,HTMLImageElement);if(!(n&&!Ee(e.src))&&!(z(e,SVGImageElement)&&!Ee(e.href.baseVal)))return;let o=n?e.src:e.href.baseVal,a=await _e(o,ge(o),t);await new Promise((r,s)=>{e.onload=r,e.onerror=t.onImageErrorHandler?(...u)=>{try{r(t.onImageErrorHandler(...u))}catch(f){s(f)}}:s;let l=e;l.decode&&(l.decode=r),l.loading==="lazy"&&(l.loading="eager"),n?(e.srcset="",e.src=a):e.href.baseVal=a})}async function zr(e,t){let o=Y(e.childNodes).map(a=>St(a,t));await Promise.all(o).then(()=>e)}async function St(e,t){z(e,Element)&&(await Ur(e,t),await Or(e,t),await zr(e,t))}function Wn(e,t){let{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);let o=t.style;return o!=null&&Object.keys(o).forEach(a=>{n[a]=o[a]}),e}var Bn={};async function Vn(e){let t=Bn[e];if(t!=null)return t;let o=await(await fetch(e)).text();return t={url:e,cssText:o},Bn[e]=t,t}async function jn(e,t){let n=e.cssText,o=/url\(["']?([^"')]+)["']?\)/g,r=(n.match(/url\([^)]+\)/g)||[]).map(async s=>{let l=s.replace(o,"$1");return l.startsWith("https://")||(l=new URL(l,e.url).href),kt(l,t.fetchRequestInit,({result:u})=>(n=n.replace(s,`url(${u})`),[s,u]))});return Promise.all(r).then(()=>n)}function qn(e){if(e==null)return[];let t=[],n=/(\/\*[\s\S]*?\*\/)/gi,o=e.replace(n,""),a=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let u=a.exec(o);if(u===null)break;t.push(u[0])}o=o.replace(a,"");let r=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,s="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",l=new RegExp(s,"gi");for(;;){let u=r.exec(o);if(u===null){if(u=l.exec(o),u===null)break;r.lastIndex=l.lastIndex}else l.lastIndex=r.lastIndex;t.push(u[0])}return t}async function Hr(e,t){let n=[],o=[];return e.forEach(a=>{if("cssRules"in a)try{Y(a.cssRules||[]).forEach((r,s)=>{if(r.type===CSSRule.IMPORT_RULE){let l=s+1,u=r.href,f=Vn(u).then(p=>jn(p,t)).then(p=>qn(p).forEach(c=>{try{a.insertRule(c,c.startsWith("@import")?l+=1:a.cssRules.length)}catch(g){console.error("Error inserting rule from remote css",{rule:c,error:g})}})).catch(p=>{console.error("Error loading remote css",p.toString())});o.push(f)}})}catch(r){let s=e.find(l=>l.href==null)||document.styleSheets[0];a.href!=null&&o.push(Vn(a.href).then(l=>jn(l,t)).then(l=>qn(l).forEach(u=>{s.insertRule(u,s.cssRules.length)})).catch(l=>{console.error("Error loading remote stylesheet",l)})),console.error("Error inlining remote css file",r)}}),Promise.all(o).then(()=>(e.forEach(a=>{if("cssRules"in a)try{Y(a.cssRules||[]).forEach(r=>{n.push(r)})}catch(r){console.error(`Error while reading CSS rules from ${a.href}`,r)}}),n))}function $r(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>Ct(t.style.getPropertyValue("src")))}async function Wr(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");let n=Y(e.ownerDocument.styleSheets),o=await Hr(n,t);return $r(o)}function Nn(e){return e.trim().replace(/["']/g,"")}function Br(e){let t=new Set;function n(o){(o.style.fontFamily||getComputedStyle(o).fontFamily).split(",").forEach(r=>{t.add(Nn(r))}),Array.from(o.children).forEach(r=>{r instanceof HTMLElement&&n(r)})}return n(e),t}async function Kn(e,t){let n=await Wr(e,t),o=Br(e);return(await Promise.all(n.filter(r=>o.has(Nn(r.style.fontFamily))).map(r=>{let s=r.parentStyleSheet?r.parentStyleSheet.href:null;return Xe(r.cssText,s,t)}))).join(`
`)}async function Xn(e,t){let n=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await Kn(e,t);if(n){let o=document.createElement("style"),a=document.createTextNode(n);o.appendChild(a),e.firstChild?e.insertBefore(o,e.firstChild):e.appendChild(o)}}async function Vr(e,t={}){let{width:n,height:o}=bt(e,t),a=await Te(e,t,!0);return await Xn(a,t),await St(a,t),Wn(a,t),await Fn(a,n,o)}async function Yn(e,t={}){let{width:n,height:o}=bt(e,t),a=await Vr(e,t),r=await he(a),s=document.createElement("canvas"),l=s.getContext("2d"),u=t.pixelRatio||Dn(),f=t.canvasWidth||n,p=t.canvasHeight||o;return s.width=f*u,s.height=p*u,t.skipAutoScale||Ln(s),s.style.width=`${f}`,s.style.height=`${p}`,t.backgroundColor&&(l.fillStyle=t.backgroundColor,l.fillRect(0,0,s.width,s.height)),l.drawImage(r,0,0,s.width,s.height),s}var jr="faaaster-annotate-root",qr=800,Gn=.65,Nr=12e3;function Kr(e,t){return Promise.race([e,new Promise((n,o)=>setTimeout(()=>o(new Error("capture timeout")),t))])}function Xr(e){return new Promise((t,n)=>{e.toBlob(o=>{if(o&&o.type==="image/webp")return t(o);e.toBlob(a=>a?t(a):n(new Error("encode failed")),"image/jpeg",Gn)},"image/webp",Gn)})}async function Jn(){let e=Math.min(1,qr/window.innerWidth),t=window.scrollX,n=window.scrollY,o=await Kr(Yn(document.body,{pixelRatio:e,filter:l=>!(l.id===jr||l.id==="wpadminbar"),backgroundColor:"#ffffff"}),Nr),a=document.createElement("canvas");a.width=Math.round(window.innerWidth*e),a.height=Math.round(window.innerHeight*e);let r=a.getContext("2d");return r.fillStyle="#ffffff",r.fillRect(0,0,a.width,a.height),r.drawImage(o,Math.round(t*e),Math.round(n*e),a.width,a.height,0,0,a.width,a.height),{blob:await Xr(a),width:a.width,height:a.height}}var Yr="faaaster-annotate-root";function Qn(e){return window.CSS&&CSS.escape?CSS.escape(e):e.replace(/([^a-zA-Z0-9_-])/g,"\\$1")}function Gr(e){try{return document.querySelectorAll("#"+Qn(e)).length===1}catch{return!1}}function Jr(e){return!(!e||e.length>64||/\d{4,}/.test(e)||/^(ember|react|radix|aria)-/.test(e))}function Qr(e){let t=e.tagName.toLowerCase(),n=e.parentElement;if(!n)return t;let o=Array.from(n.children).filter(a=>a.tagName===e.tagName);return o.length===1?t:`${t}:nth-of-type(${o.indexOf(e)+1})`}function Zr(e){let t=[],n=e;for(;n&&n.nodeType===Node.ELEMENT_NODE&&n!==document.documentElement;){if(n.id&&Jr(n.id)&&Gr(n.id))return t.unshift("#"+Qn(n.id)),t.join(" > ");if(n===document.body)return t.unshift("body"),t.join(" > ");t.unshift(Qr(n)),n=n.parentElement}return t.unshift("html"),t.join(" > ")}function Et(e){let t=e;for(;t&&t.nodeType===Node.ELEMENT_NODE;){let n=window.getComputedStyle(t).position;if(n==="fixed"||n==="sticky")return!0;t=t.parentElement}return!1}function Zn(e,t,n){let o=e.getBoundingClientRect();return{selector:Zr(e),relX:o.width?(t-o.left)/o.width:.5,relY:o.height?(n-o.top)/o.height:.5,fixed:Et(e)}}function ea(e){let t=/percent:([\d.]+),([\d.]+)/.exec(e||"");return t?{relX:parseFloat(t[1]),relY:parseFloat(t[2])}:null}function ta(e){let n=(e.target||{}).selector;return n?Array.isArray(n)?n:[n]:[]}function na(e){if(!e)return null;let n=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(o){return o.parentElement&&o.parentElement.closest("#"+Yr)?NodeFilter.FILTER_REJECT:o.textContent.includes(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}}).nextNode();return n?n.parentElement:null}function Tt(e){let t=ta(e),n=t.find(r=>r.type==="CssSelector"),o=t.find(r=>r.type==="FragmentSelector");if(n&&o){let r=ea(o.value),s=null;try{s=document.querySelector(n.value)}catch{s=null}if(s&&r)return{el:s,relX:r.relX,relY:r.relY,fixed:Et(s),legacy:!1}}let a=t.find(r=>r.type==="TextQuoteSelector");if(a&&a.exact){let r=na(a.exact.trim());if(r)return{el:r,relX:.5,relY:.5,fixed:Et(r),legacy:!0}}return null}function eo(e){let t=e.el.getBoundingClientRect();return!t.width&&!t.height?null:{x:t.left+t.width*e.relX,y:t.top+t.height*e.relY}}var to={fr:{annotate:"Commenter",navigate:"Naviguer",tasks:"Annotations",hidePins:"Masquer les \xE9pingles",showPins:"Afficher les \xE9pingles",quit:"D\xE9sactiver l'outil",introTitle:"Feedback visuel",introText:"Activez le mode Commenter puis cliquez n'importe o\xF9 sur la page pour laisser une annotation.",gotIt:"Compris",loginTitle:"Identifiez-vous",loginText:"Votre nom et votre email seront associ\xE9s \xE0 vos annotations.",username:"Nom",email:"Email",validate:"Valider",invalidEmail:"Veuillez saisir une adresse email valide",placeholderComment:"D\xE9crivez votre retour\u2026",placeholderReply:"R\xE9pondre\u2026",send:"Envoyer",cancel:"Annuler",delete:"Supprimer",deleteConfirm:"Supprimer cette annotation et ses r\xE9ponses ?",resolve:"Marquer comme valid\xE9",reopen:"Rouvrir",empty:"Aucune annotation sur cette page.",emptyFiltered:"Aucune annotation pour ce filtre.",all:"Toutes",reply:"r\xE9ponse",replies:"r\xE9ponses",notLocated:"Annotation non localisable sur la page",legacyText:"Texte annot\xE9",attach:"Joindre un fichier",uploading:"Envoi en cours\u2026",fileTooBig:"Fichier trop volumineux (5 Mo max)",fileType:"Type de fichier non autoris\xE9",uploadUnavailable:"L'envoi de fichiers n'est pas encore disponible sur cette instance",uploadFailed:"\xC9chec de l'envoi du fichier",removeFile:"Retirer",screenshot:"Contexte \xE0 la cr\xE9ation",copyLink:"Copier le lien",linkCopied:"Lien copi\xE9 !",details:"D\xE9tails techniques",edit:"Modifier",save:"Enregistrer",deleteComment:"Supprimer ce commentaire ?",thisPage:"Cette page",wholeSite:"Tout le site",otherPage:"Voir sur la page",above:"au-dessus",below:"en dessous",edited:"modifi\xE9",status:{new:"\xC0 traiter",progress:"En cours",review:"\xC0 valider",done:"Valid\xE9"},timeAgo:{now:"\xE0 l'instant",m:"min",h:"h",d:"j",w:"sem",mo:"mois"}},en:{annotate:"Comment",navigate:"Browse",tasks:"Annotations",hidePins:"Hide pins",showPins:"Show pins",quit:"Disable the tool",introTitle:"Visual feedback",introText:"Switch to Comment mode, then click anywhere on the page to leave an annotation.",gotIt:"Got it",loginTitle:"Identify yourself",loginText:"Your name and email will be attached to your annotations.",username:"Name",email:"Email",validate:"Confirm",invalidEmail:"Please enter a valid email address",placeholderComment:"Describe your feedback\u2026",placeholderReply:"Reply\u2026",send:"Send",cancel:"Cancel",delete:"Delete",deleteConfirm:"Delete this annotation and its replies?",resolve:"Mark as resolved",reopen:"Reopen",empty:"No annotations on this page yet.",emptyFiltered:"No annotations match this filter.",all:"All",reply:"reply",replies:"replies",notLocated:"Annotation could not be located on the page",legacyText:"Annotated text",attach:"Attach a file",uploading:"Uploading\u2026",fileTooBig:"File too large (5 MB max)",fileType:"File type not allowed",uploadUnavailable:"File upload is not available on this instance yet",uploadFailed:"File upload failed",removeFile:"Remove",screenshot:"Context at creation",copyLink:"Copy link",linkCopied:"Link copied!",details:"Technical details",edit:"Edit",save:"Save",deleteComment:"Delete this comment?",thisPage:"This page",wholeSite:"Whole site",otherPage:"Open on page",above:"above",below:"below",edited:"edited",status:{new:"To do",progress:"In progress",review:"To review",done:"Resolved"},timeAgo:{now:"just now",m:"min",h:"h",d:"d",w:"wk",mo:"mo"}}},d=to[O.lang]||to.en;function xe(e){let t=J.find(n=>n.value===e);return t?d.status[t.key]:e}var oa=0,fi=Array.isArray;function i(e,t,n,o,a,r){t||(t={});var s,l,u=t;if("ref"in u)for(l in u={},t)l=="ref"?s=t[l]:u[l]=t[l];var f={type:e,props:u,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--oa,__i:-1,__u:0,__source:a,__self:r};if(typeof e=="function"&&(s=e.defaultProps))for(l in s)u[l]===void 0&&(u[l]=s[l]);return T.vnode&&T.vnode(f),f}var P={width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},be=()=>i("svg",{...P,children:i("path",{d:"M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5 8.38 8.38 0 0 1 8.5 8.5z"})}),no=()=>i("svg",{...P,children:i("path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z"})}),oo=()=>i("svg",{...P,children:[i("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"}),i("circle",{cx:"12",cy:"12",r:"3"})]}),ro=()=>i("svg",{...P,children:[i("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),i("path",{d:"M6.61 6.61A13.53 13.53 0 0 0 2 12s3.5 8 10 8a9.74 9.74 0 0 0 5.39-1.61"}),i("line",{x1:"2",y1:"2",x2:"22",y2:"22"})]}),ao=()=>i("svg",{...P,children:[i("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),i("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),i("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),i("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),i("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),i("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),io=()=>i("svg",{...P,children:[i("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),i("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),se=()=>i("svg",{...P,children:[i("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Ye=()=>i("svg",{...P,width:"16",height:"16",children:[i("polyline",{points:"3 6 5 6 21 6"}),i("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),ve=()=>i("svg",{...P,width:"16",height:"16",children:[i("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),i("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),so=()=>i("svg",{...P,width:"15",height:"15",children:[i("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),i("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),lo=()=>i("svg",{...P,width:"15",height:"15",children:[i("circle",{cx:"12",cy:"12",r:"10"}),i("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),i("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),co=()=>i("svg",{...P,width:"13",height:"13",children:i("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})}),Ge=()=>i("svg",{...P,width:"15",height:"15",children:i("polyline",{points:"20 6 9 17 4 12"})}),fo=()=>i("svg",{...P,width:"15",height:"15",children:i("polyline",{points:"6 9 12 15 18 9"})}),uo=()=>i("svg",{...P,width:"14",height:"14",children:[i("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),i("polyline",{points:"5 12 12 5 19 12"})]}),po=()=>i("svg",{...P,width:"14",height:"14",children:[i("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i("polyline",{points:"19 12 12 19 5 12"})]}),mo=()=>i("svg",{...P,width:"13",height:"13",children:[i("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),i("polyline",{points:"15 3 21 3 21 9"}),i("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),ho=()=>i("svg",{...P,width:"13",height:"13",children:[i("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),i("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),i("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),go=()=>i("svg",{...P,width:"13",height:"13",children:[i("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",ry:"2"}),i("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),_o=()=>i("svg",{...P,width:"13",height:"13",children:[i("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),i("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),yo=()=>i("svg",{...P,width:"14",height:"14",children:[i("circle",{cx:"12",cy:"12",r:"10"}),i("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"})]});function xo({mode:e,onMode:t,pinsVisible:n,onTogglePins:o,sidebarOpen:a,onToggleSidebar:r,count:s,loading:l,onDisable:u}){return i("div",{class:"fa-toolbar",role:"toolbar","aria-label":"Faaaster annotate",children:[i("div",{class:"fa-toolbar-modes",children:[i("button",{type:"button",class:"fa-mode-btn"+(e==="comment"?" fa-active":""),onClick:()=>t("comment"),title:d.annotate,children:[i(be,{}),i("span",{children:d.annotate})]}),i("button",{type:"button",class:"fa-mode-btn"+(e==="browse"?" fa-active":""),onClick:()=>t("browse"),title:d.navigate,children:[i(no,{}),i("span",{children:d.navigate})]})]}),i("div",{class:"fa-toolbar-sep"}),i("button",{type:"button",class:"fa-icon-btn",onClick:o,title:n?d.hidePins:d.showPins,children:n?i(oo,{}):i(ro,{})}),i("button",{type:"button",class:"fa-icon-btn"+(a?" fa-active":""),onClick:r,title:d.tasks,children:[i(ao,{}),l?i("span",{class:"fa-badge fa-badge-loading"}):s>0&&i("span",{class:"fa-badge",children:s})]}),i("div",{class:"fa-toolbar-sep"}),i("button",{type:"button",class:"fa-icon-btn fa-quit",onClick:u,title:d.quit,children:i(io,{})})]})}var bo="faaaster-annotate-root";function vo(e,t){let n=document.elementsFromPoint(e,t);for(let o of n)if(!(o.id===bo||o.closest("#"+bo))&&o!==document.documentElement)return o;return document.body}function wo({active:e,onPick:t}){let[n,o]=v(null),a=U(null);return $(()=>{e||o(null)},[e]),e?i("div",{ref:a,class:"fa-capture",onMouseMove:l=>{let u=vo(l.clientX,l.clientY);if(!u||u===document.body||u===document.documentElement){o(null);return}let f=u.getBoundingClientRect();o({left:f.left,top:f.top,width:f.width,height:f.height})},onMouseLeave:()=>o(null),onClick:l=>{l.preventDefault(),l.stopPropagation();let u=vo(l.clientX,l.clientY);u&&t(u,l.clientX,l.clientY,Zn(u,l.clientX,l.clientY))},children:n&&n.width>0&&i("div",{class:"fa-highlight",style:{left:n.left+"px",top:n.top+"px",width:n.width+"px",height:n.height+"px"}})}):null}function ko({annotations:e,positions:t,openId:n,onOpen:o,draftPos:a}){return i("div",{class:"fa-pins",children:[e.map(r=>{var f,p;let s=t[r.id];if(!s)return null;let l=pe(ie(r)),u=l.key==="done";return i("button",{type:"button",class:"fa-pin"+(r.id===n?" fa-pin-open":"")+(u?" fa-pin-done":""),style:{left:s.x+"px",top:s.y+"px","--fa-pin-color":l.color},onClick:c=>{c.stopPropagation(),o(r.id)},title:"#"+((f=r.number)!=null?f:r.index),children:i("span",{children:(p=r.number)!=null?p:r.index})},r.id)}),a&&i("div",{class:"fa-pin fa-pin-draft",style:{left:a.x+"px",top:a.y+"px"},children:i("span",{children:"+"})})]})}function Co(e){if(!e)return null;let t="?";/edg\//i.test(e)?t="Edge":/opr\//i.test(e)?t="Opera":/chrome|crios/i.test(e)?t="Chrome":/firefox|fxios/i.test(e)?t="Firefox":/safari/i.test(e)&&(t="Safari");let n="?";return/windows/i.test(e)?n="Windows":/iphone|ipad|ipod/i.test(e)?n="iOS":/mac os/i.test(e)?n="macOS":/android/i.test(e)?n="Android":/linux/i.test(e)&&(n="Linux"),{browser:t,os:n}}function So(e){let t=e&&e.viewport&&e.viewport.w;return t?t<640?"mobile":t<1024?"tablet":"desktop":null}function Je(e){let t=new Date(e);if(isNaN(t))return"";let n=Math.max(0,Date.now()-t.getTime()),o=Math.floor(n/6e4);if(o<1)return d.timeAgo.now;if(o<60)return o+" "+d.timeAgo.m;let a=Math.floor(o/60);if(a<24)return a+" "+d.timeAgo.h;let r=Math.floor(a/24);if(r<7)return r+" "+d.timeAgo.d;let s=Math.floor(r/7);return s<5?s+" "+d.timeAgo.w:Math.floor(r/30)+" "+d.timeAgo.mo}function Qe(e,t){let n=new Date(e);return isNaN(n)?"":n.toLocaleString(t.replace("_","-"))}function Ze(e){let t=window.innerWidth,n=window.innerHeight;if(t<640)return null;let o=e.x+20;o+320>t-12&&(o=e.x-20-320),o<12&&(o=12);let a=Math.max(12,Math.min(e.y-24,n-400));return{left:o+"px",top:a+"px"}}var ra=5*1024*1024,aa="image/*,.pdf,.zip",ia=/^(image\/|application\/pdf$|application\/(x-)?zip)/;function sa(e){return e>=1024*1024?(e/(1024*1024)).toFixed(1)+" Mo":Math.max(1,Math.round(e/1024))+" Ko"}function et(e){let[t,n]=v([]),[o,a]=v(!1),[r,s]=v(null),l=U(null);return{files:t,busy:o,error:r,pick:()=>l.current&&l.current.click(),remove:h=>n(w=>w.filter(b=>b!==h)),reset:()=>{n([]),s(null)},input:i("input",{ref:l,type:"file",multiple:!0,accept:aa,style:{display:"none"},onChange:async h=>{let w=Array.from(h.target.files||[]);h.target.value="",s(null);for(let b of w){if(b.size>ra){s(d.fileTooBig);continue}if(!ia.test(b.type)){s(d.fileType);continue}a(!0);try{let C=await Be(b);n(y=>[...y,C])}catch(C){C.unsupported?(s(d.uploadUnavailable),e&&e()):s(d.uploadFailed)}a(!1)}}})}}var Ie=()=>i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:i("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"})});function tt({files:e,onRemove:t}){return e.length?i("div",{class:"fa-attach-chips",children:e.map(n=>i("span",{class:"fa-attach-chip",title:n.name,children:[n.type&&n.type.startsWith("image/")&&i("img",{src:n.url,alt:""}),i("span",{class:"fa-attach-name",children:n.name}),i("button",{type:"button",onClick:()=>t(n),title:d.removeFile,children:i(se,{})})]},n.url))}):null}function Eo({attachments:e}){if(!e||!e.length)return null;let t=e.filter(o=>o.type&&o.type.startsWith("image/")),n=e.filter(o=>!o.type||!o.type.startsWith("image/"));return i("div",{class:"fa-attachments",children:[t.length>0&&i("div",{class:"fa-attach-thumbs",children:t.map(o=>i("a",{href:o.url,target:"_blank",rel:"noopener",title:o.name,children:i("img",{src:o.url,alt:o.name,loading:"lazy"})},o.url))}),n.map(o=>i("a",{class:"fa-attach-file",href:o.url,target:"_blank",rel:"noopener",children:[i(Ie,{}),i("span",{class:"fa-attach-name",children:o.name}),o.size>0&&i("span",{class:"fa-attach-size",children:sa(o.size)})]},o.url))]})}function la(e){return(e||"?").split(/\s+/).map(t=>t[0]).slice(0,2).join("").toUpperCase()}function nt({comments:e,identity:t,onEdit:n,onDeleteComment:o}){let[a,r]=v(null),[s,l]=v(""),u=p=>{r(ae(p)),l(p.value)},f=p=>{let c=s.trim();c&&c!==p.value&&n(ae(p),c),r(null)};return i("div",{class:"fa-thread-comments",children:e.map((p,c)=>{let g=ae(p),h=Cn(p,t),w=p.modified&&p.created&&p.modified!==p.created;return i("div",{class:"fa-comment",children:[i("span",{class:"fa-avatar",children:la(p.creator&&p.creator.name)}),i("div",{class:"fa-comment-main",children:[i("div",{class:"fa-comment-meta",children:[i("span",{class:"fa-comment-author",children:p.creator&&p.creator.name||"?"}),i("time",{title:Qe(p.modified||p.created,O.locale),children:[Je(p.modified||p.created),w&&a!==g?" \xB7 "+d.edited:""]}),h&&a!==g&&i("span",{class:"fa-comment-tools",children:[i("button",{type:"button",title:d.edit,onClick:()=>u(p),children:i(co,{})}),c>0&&i("button",{type:"button",title:d.delete,onClick:()=>{window.confirm(d.deleteComment)&&o(g)},children:i(Ye,{})})]})]}),a===g?i("div",{class:"fa-comment-edit",children:[i("textarea",{class:"fa-textarea",rows:2,value:s,onInput:b=>l(b.target.value),onKeyDown:b=>{b.key==="Enter"&&!b.shiftKey&&(b.preventDefault(),f(p)),b.key==="Escape"&&r(null)}}),i("div",{class:"fa-comment-edit-actions",children:[i("button",{type:"button",title:d.cancel,onClick:()=>r(null),children:i(se,{})}),i("button",{type:"button",class:"fa-edit-save",title:d.save,onClick:()=>f(p),children:i(Ge,{})})]})]}):i("div",{class:"fa-comment-text",children:p.value}),i(Eo,{attachments:p.attachments})]})]},g)})})}function It({meta:e}){let t=So(e);if(!t)return null;let n=e.viewport.w+"\xD7"+e.viewport.h;return i("span",{class:"fa-device",title:n,children:t==="mobile"?i(_o,{}):t==="tablet"?i(go,{}):i(ho,{})})}function ca(e){return window.location.origin+window.location.pathname+window.location.search+"#fa="+encodeURIComponent(e.id)}function fa({annotation:e}){let t=e.meta||{},n=Co(t.ua),o=[];n&&o.push([d.details,n.browser+" \xB7 "+n.os]),t.viewport&&o.push(["Viewport",t.viewport.w+"\xD7"+t.viewport.h]);let a=Ve(e);return a&&o.push(["\u{1F4C5}",Qe(a,O.locale)]),o.length?i("div",{class:"fa-info-panel",children:[i(It,{meta:t}),o.map(([r,s])=>i("span",{title:r,children:s},r))]}):null}function To({annotation:e,pos:t,identity:n,onReply:o,onStatus:a,onDelete:r,onEditComment:s,onDeleteComment:l,onClose:u,uploadsEnabled:f,onUploadUnsupported:p}){var L;let[c,g]=v(""),[h,w]=v(!1),[b,C]=v(!1),y=et(p),k=je(e),F=ie(e),M=e.meta&&e.meta.screenshot,H=Ze(t),N=()=>{let S=c.trim();!S||y.busy||(o(S,y.files),g(""),y.reset())},D=()=>{navigator.clipboard.writeText(ca(e)).then(()=>{C(!0),setTimeout(()=>C(!1),1500)}).catch(()=>{})};return i("div",{class:(H?"fa-popover":"fa-popover fa-sheet")+" fa-thread",style:H||void 0,children:[i("div",{class:"fa-thread-header",children:[i("span",{class:"fa-thread-index",style:{"--fa-pin-color":pe(F).color},children:(L=e.number)!=null?L:e.index}),i("select",{class:"fa-status-select",value:F,onChange:S=>a(S.target.value),children:J.map(S=>i("option",{value:S.value,children:xe(S.value)},S.value))}),i("button",{type:"button",class:"fa-icon-btn fa-small"+(b?" fa-copied":""),onClick:D,title:b?d.linkCopied:d.copyLink,children:b?i(Ge,{}):i(so,{})}),i("button",{type:"button",class:"fa-icon-btn fa-small"+(h?" fa-active":""),onClick:()=>w(!h),title:d.details,children:i(lo,{})}),i("button",{type:"button",class:"fa-icon-btn fa-small",onClick:r,title:d.delete,children:i(Ye,{})}),i("button",{type:"button",class:"fa-icon-btn fa-small",onClick:u,title:"\u2715",children:i(se,{})})]}),h&&i(fa,{annotation:e}),M&&i("a",{class:"fa-screenshot",href:M.url,target:"_blank",rel:"noopener",title:d.screenshot,children:i("img",{src:M.url,alt:d.screenshot,loading:"lazy"})}),i(nt,{comments:k,identity:n,onEdit:s,onDeleteComment:l}),i(tt,{files:y.files,onRemove:y.remove}),y.error&&i("p",{class:"fa-error",children:y.error}),i("div",{class:"fa-thread-reply",children:[f&&i("button",{type:"button",class:"fa-icon-btn fa-small"+(y.busy?" fa-busy":""),onClick:y.pick,disabled:y.busy,title:y.busy?d.uploading:d.attach,children:i(Ie,{})}),y.input,i("textarea",{class:"fa-textarea",rows:1,placeholder:d.placeholderReply,value:c,onInput:S=>g(S.target.value),onKeyDown:S=>{S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),N())}}),i("button",{type:"button",class:"fa-btn fa-btn-primary fa-btn-round",disabled:!c.trim()||y.busy,onClick:N,title:d.send,children:i(ve,{})})]})]})}function Io({pos:e,onSubmit:t,onCancel:n,uploadsEnabled:o,onUploadUnsupported:a}){let[r,s]=v(""),l=U(null),u=et(a),f=Ze(e);$(()=>{l.current&&l.current.focus()},[]);let p=()=>{let c=r.trim();c&&!u.busy&&t(c,u.files)};return i("div",{class:f?"fa-popover":"fa-popover fa-sheet",style:f||void 0,children:[i("textarea",{ref:l,class:"fa-textarea",rows:3,placeholder:d.placeholderComment,value:r,onInput:c=>s(c.target.value),onKeyDown:c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&p()}}),i(tt,{files:u.files,onRemove:u.remove}),u.error&&i("p",{class:"fa-error",children:u.error}),i("div",{class:"fa-popover-actions",children:[o&&i("button",{type:"button",class:"fa-icon-btn fa-small"+(u.busy?" fa-busy":""),onClick:u.pick,disabled:u.busy,title:u.busy?d.uploading:d.attach,children:i(Ie,{})}),u.input,i("span",{class:"fa-actions-spacer"}),i("button",{type:"button",class:"fa-btn fa-btn-ghost",onClick:n,children:d.cancel}),i("button",{type:"button",class:"fa-btn fa-btn-primary",disabled:!r.trim()||u.busy,onClick:p,children:[i(ve,{}),d.send]})]})]})}function At(e){return e?e.replace(/%%/g,"/"):""}function ua({onReply:e}){let[t,n]=v(""),o=()=>{let a=t.trim();a&&(e(a),n(""))};return i("div",{class:"fa-thread-reply",children:[i("textarea",{class:"fa-textarea",rows:1,placeholder:d.placeholderReply,value:t,onInput:a=>n(a.target.value),onKeyDown:a=>{a.key==="Enter"&&!a.shiftKey&&(a.preventDefault(),o())}}),i("button",{type:"button",class:"fa-btn fa-btn-primary fa-btn-round",disabled:!t.trim(),onClick:o,title:d.send,children:i(ve,{})})]})}function Ao({open:e,annotations:t,positions:n,activeId:o,identity:a,onSelect:r,onReply:s,onStatus:l,onEditComment:u,onDeleteComment:f,onClose:p}){let[c,g]=v("all"),[h,w]=v(null),[b,C]=v("page"),[y,k]=v(!1),[F,M]=v(null),H=U(!1);$(()=>{!e||H.current||(H.current=!0,xt().then(x=>{M(x),k(!0)}).catch(()=>k(!1)))},[e]),$(()=>{b!=="site"||!y||xt().then(M).catch(()=>C("page"))},[b,y]);let N=b==="site"&&Array.isArray(F),D=N?F:t,L=D.slice().sort((x,K)=>new Date(qe(K))-new Date(qe(x))),S=c==="all"?L:L.filter(x=>ie(x)===c),V={all:D.length};for(let x of J)V[x.value]=D.filter(K=>ie(K)===x.value).length;return i("aside",{class:"fa-sidebar"+(e?" fa-sidebar-open":""),children:[i("div",{class:"fa-sidebar-header",children:[i("h2",{children:d.tasks}),y&&i("div",{class:"fa-scope",children:[i("button",{type:"button",class:b==="page"?"fa-scope-active":"",onClick:()=>C("page"),children:d.thisPage}),i("button",{type:"button",class:b==="site"?"fa-scope-active":"",onClick:()=>C("site"),children:d.wholeSite})]}),i("button",{type:"button",class:"fa-icon-btn fa-small",onClick:p,children:i(se,{})})]}),i("div",{class:"fa-filters",children:[i("button",{type:"button",class:"fa-chip"+(c==="all"?" fa-chip-active":""),onClick:()=>g("all"),children:[d.all," ",i("b",{children:V.all})]}),J.map(x=>i("button",{type:"button",class:"fa-chip"+(c===x.value?" fa-chip-active":""),style:{"--fa-chip-color":x.color},onClick:()=>g(x.value),children:[xe(x.value)," ",i("b",{children:V[x.value]})]},x.value))]}),i("ul",{class:"fa-list",children:[S.length===0&&i("li",{class:"fa-empty",children:D.length===0?d.empty:d.emptyFiltered}),S.map(x=>{var Ae;let K=je(x),we=Math.max(0,K.length-1),te=pe(ie(x)),W=N&&x.url&&At(x.url)!==window.location.pathname,le=!W&&!!n[x.id],Q=h===x.id,X=x.meta&&x.meta.screenshot;return i("li",{class:Q?"fa-expanded":"",children:[i("div",{class:"fa-item"+(x.id===o?" fa-item-active":"")+(le||W?"":" fa-item-unlocated"),children:[i("button",{type:"button",class:"fa-item-main",title:le||W?"":d.notLocated,onClick:()=>{W?window.location.href=At(x.url)+"#fa="+encodeURIComponent(x.id):le?r(x.id):w(Q?null:x.id)},children:[i("span",{class:"fa-item-pin",style:{"--fa-pin-color":te.color},children:(Ae=x.number)!=null?Ae:x.index}),i("span",{class:"fa-item-body",children:[i("span",{class:"fa-item-text",children:(K[0]||{}).value||""}),W&&i("span",{class:"fa-item-page",children:[i(mo,{})," ",At(x.url)||"/"]}),i("span",{class:"fa-item-meta",children:[i("b",{children:En(x).name}),i("span",{children:"\xB7"}),i("time",{children:Je(qe(x))}),we>0&&i("span",{class:"fa-item-replies",children:[i(be,{})," ",we]}),i(It,{meta:x.meta}),!le&&!W&&i(yo,{})]})]}),i("span",{class:"fa-item-status",style:{"--fa-chip-color":te.color},children:xe(te.value)})]}),i("button",{type:"button",class:"fa-item-chevron"+(Q?" fa-open":""),onClick:()=>w(Q?null:x.id),title:Q?"\u2212":"+",children:i(fo,{})})]}),Q&&i("div",{class:"fa-item-detail",children:[!W&&i("select",{class:"fa-status-select",value:te.value,onChange:j=>l(x.id,j.target.value),children:J.map(j=>i("option",{value:j.value,children:xe(j.value)},j.value))}),X&&i("a",{class:"fa-screenshot",href:X.url,target:"_blank",rel:"noopener",title:d.screenshot,children:i("img",{src:X.url,alt:d.screenshot,loading:"lazy"})}),i(nt,{comments:K,identity:W?null:a,onEdit:(j,ot)=>u(x.id,j,ot),onDeleteComment:j=>f(x.id,j)}),!W&&i(ua,{onReply:j=>s(x.id,j,[])})]})]},x.id)})]})]})}var pa=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function Po({onLogin:e,onCancel:t}){let[n,o]=v(""),[a,r]=v(""),[s,l]=v(null);return i("div",{class:"fa-modal-backdrop",onClick:t,children:i("form",{class:"fa-modal",onClick:f=>f.stopPropagation(),onSubmit:f=>{if(f.preventDefault(),!pa.test(a)){l(d.invalidEmail);return}e(n.trim(),a.trim())},children:[i("h3",{children:d.loginTitle}),i("p",{children:d.loginText}),i("label",{children:[d.username,i("input",{type:"text",required:!0,value:n,onInput:f=>o(f.target.value)})]}),i("label",{children:[d.email,i("input",{type:"email",required:!0,value:a,onInput:f=>r(f.target.value)})]}),s&&i("p",{class:"fa-error",children:s}),i("div",{class:"fa-popover-actions",children:[i("button",{type:"button",class:"fa-btn fa-btn-ghost",onClick:t,children:d.cancel}),i("button",{type:"submit",class:"fa-btn fa-btn-primary",disabled:!n.trim()||!a.trim(),children:d.validate})]})]})})}function Ro({onDismiss:e}){return i("div",{class:"fa-intro",children:[i("span",{class:"fa-intro-icon",children:i(be,{})}),i("div",{class:"fa-intro-body",children:[i("b",{children:d.introTitle}),i("p",{children:d.introText})]}),i("button",{type:"button",class:"fa-btn fa-btn-primary",onClick:e,children:d.gotIt})]})}function Do({positions:e}){let t=Object.entries(e).filter(([r,s])=>r!=="__draft"&&s),n=t.filter(([,r])=>r.y<0),o=t.filter(([,r])=>r.y>window.innerHeight),a=(r,s)=>{if(!r.length)return;let l=r.reduce((u,f)=>s==="up"?f[1].y>u[1].y?f:u:f[1].y<u[1].y?f:u);window.scrollBy({top:l[1].y-window.innerHeight/2,behavior:"smooth"})};return!n.length&&!o.length?null:i(oe,{children:[n.length>0&&i("button",{type:"button",class:"fa-offscreen fa-offscreen-top",onClick:()=>a(n,"up"),title:n.length+" "+d.above,children:[i(uo,{}),n.length]}),o.length>0&&i("button",{type:"button",class:"fa-offscreen fa-offscreen-bottom",onClick:()=>a(o,"down"),title:o.length+" "+d.below,children:[i(po,{}),o.length]})]})}function da(){let e=un(),t=O.wpUser&&O.wpEmail?{name:O.wpUser,email:O.wpEmail}:e.username&&e.email?{name:e.username,email:e.email}:null,n=O.forcedAnnotate==="true"?"comment":O.forcedAnnotate==="false"?"browse":e.annotateMode?"comment":"browse";return{cookie:e,identity:t,mode:n}}function ma(e,t){let[n,o]=v({}),a=U(new Map),r=U(0),s=G(()=>{r.current=0;let u=a.current,f={};for(let p of e){let c=u.get(p.id);(c===void 0||c&&!c.el.isConnected)&&(c=Tt(p),u.set(p.id,c));let g=c?eo(c):null;f[p.id]=g?{...g,legacy:c.legacy}:null}if(t){let p=t.el.isConnected?t.el.getBoundingClientRect():null;f.__draft=p?{x:p.left+p.width*t.anchor.relX,y:p.top+p.height*t.anchor.relY}:null}o(f)},[e,t]),l=G(()=>{r.current||(r.current=requestAnimationFrame(s))},[s]);return $(()=>{a.current=new Map,s()},[s]),$(()=>{window.addEventListener("scroll",l,{capture:!0,passive:!0}),window.addEventListener("resize",l);let u=new MutationObserver(l);u.observe(document.body,{subtree:!0,childList:!0,attributes:!0});let f=new ResizeObserver(l);return f.observe(document.body),()=>{window.removeEventListener("scroll",l,{capture:!0}),window.removeEventListener("resize",l),u.disconnect(),f.disconnect(),r.current&&cancelAnimationFrame(r.current)}},[l]),n}function Lo(){let e=$e(da,[]),[t,n]=v([]),[o,a]=v(!0),[r,s]=v(e.mode),[l,u]=v(e.identity),[f,p]=v(!0),[c,g]=v(!1),[h,w]=v(null),[b,C]=v(null),[y,k]=v(!1),[F,M]=v(e.cookie.showIntro),[H,N]=v(!0),D=ma(t,b);$(()=>{_t({username:l?l.name:!1,email:l?l.email:!1,annotateMode:r==="comment",showIntro:F,disabled:!1})},[l,r,F]),$(()=>{yt().then(m=>n(de(m))).catch(m=>console.error("[faaaster-annotate] load failed",m)).finally(()=>a(!1))},[]),$(()=>{let m=_=>{_.key==="Escape"&&(b?C(null):h?w(null):c&&g(!1))};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[b,h,c]);let L=U(t);L.current=t;let S=U(new Set),V=U(new Set),x=U(new Set),K=U(Promise.resolve()),we=U(!0),te=G(m=>{let _=m(L.current);L.current=_,n(_)},[]),W=G(async()=>{let m=await yt(),_=An(m,L.current,S.current,V.current,x.current);JSON.stringify(_)!==JSON.stringify(L.current)&&(L.current=_,n(_))},[]),le=G(async()=>{try{await W()}catch{}await hn(L.current)},[W]),Q=G(async m=>{if(we.current)try{if(m.type==="delete")await mn(m.id);else{let _=L.current.find(E=>E.id===m.id);if(_){let E=await dn(_);E&&E.number!=null&&te(I=>I.map(B=>B.id===m.id&&B.number!==E.number?{...B,number:E.number}:B))}}return}catch(_){if(!_.unsupported)throw _;we.current=!1}await le()},[le]),X=G((m,_)=>{te(m),_.type==="delete"?V.current.add(_.id):S.current.add(_.id),K.current=K.current.then(()=>Q(_)).catch(E=>console.error("[faaaster-annotate] save failed",E))},[te,Q]);$(()=>{if(!O.pollInterval)return;let m=setInterval(()=>{document.visibilityState==="visible"&&(K.current=K.current.then(()=>W().catch(()=>{})))},O.pollInterval);return()=>clearInterval(m)},[W]);let Ae=G(()=>l?!0:(k(!0),!1),[l]),j=m=>{s(m),C(null),m==="comment"?(M(!1),l||k(!0)):w(null)},ot=(m,_,E,I)=>{Ae()&&(w(null),C({el:m,anchor:I}))},Oo=G(m=>{Jn().then(({blob:_,width:E,height:I})=>{let B=_.type==="image/webp"?"webp":"jpg",Bo=new File([_],"capture-"+m.replace("#","")+"."+B,{type:_.type});return Be(Bo).then(Vo=>{X(jo=>jo.map(rt=>rt.id===m?vn(rt,{url:Vo.url,w:E,h:I}):rt),{type:"upsert",id:m})})}).catch(_=>{_&&_.unsupported?N(!1):console.warn("[faaaster-annotate] screenshot skipped",_)})},[X]),zo=(m,_)=>{if(!b||!l)return;let E=yn({text:m,creator:l,anchor:b.anchor,attachments:_});C(null),X(I=>de([...I,E]),{type:"upsert",id:E.id}),w(E.id),H&&Oo(E.id)},Pt=(m,_,E)=>{l&&X(I=>I.map(B=>B.id===m?xn(B,_,l,E):B),{type:"upsert",id:m})},Rt=(m,_)=>{X(E=>E.map(I=>I.id===m?bn(I,_):I),{type:"upsert",id:m})},Ho=m=>{window.confirm(d.deleteConfirm)&&(w(null),X(_=>de(_.filter(E=>E.id!==m)),{type:"delete",id:m}))},Dt=(m,_,E)=>{X(I=>I.map(B=>B.id===m?wn(B,_,E):B),{type:"upsert",id:m})},Lt=(m,_)=>{x.current.add(m+"::"+_),X(E=>E.map(I=>I.id===m?kn(I,_):I),{type:"upsert",id:m})},$o=(m,_)=>{u({name:m,email:_}),k(!1),gn(m,_)},Ft=m=>{window.innerWidth<640&&g(!1);let _=t.find(I=>I.id===m);if(!_)return;let E=Tt(_);E&&(E.el.scrollIntoView({behavior:"smooth",block:"center"}),p(!0),window.setTimeout(()=>w(m),350))};$(()=>{if(o)return;let m=/#fa=([^&]+)/.exec(window.location.hash);if(!m)return;let _=decodeURIComponent(m[1]);L.current.find(E=>E.id===_)&&Ft(_)},[o]);let Wo=()=>{_t({username:l?l.name:!1,email:l?l.email:!1,annotateMode:!1,showIntro:!1,disabled:!0});let m=new URL(window.location.href);m.searchParams.delete("t"),window.location.href=m.href},ce=t.find(m=>m.id===h),Mt=h?D[h]:null;return i("div",{class:"fa-root",children:[i(wo,{active:r==="comment"&&!b&&!y,onPick:ot}),f&&i(ko,{annotations:t,positions:D,openId:h,onOpen:m=>{C(null),w(m===h?null:m)},draftPos:b?D.__draft:null}),b&&D.__draft&&i(Io,{pos:D.__draft,onSubmit:zo,onCancel:()=>C(null),uploadsEnabled:H,onUploadUnsupported:()=>N(!1)}),ce&&Mt&&i(To,{annotation:ce,pos:Mt,identity:l,onReply:(m,_)=>Pt(ce.id,m,_),onStatus:m=>Rt(ce.id,m),onDelete:()=>Ho(ce.id),onEditComment:(m,_)=>Dt(ce.id,m,_),onDeleteComment:m=>Lt(ce.id,m),onClose:()=>w(null),uploadsEnabled:H,onUploadUnsupported:()=>N(!1)}),f&&i(Do,{positions:D}),i(Ao,{open:c,annotations:t,positions:D,activeId:h,identity:l,onSelect:Ft,onReply:Pt,onStatus:Rt,onEditComment:Dt,onDeleteComment:Lt,onClose:()=>g(!1)}),F&&r!=="comment"&&i(Ro,{onDismiss:()=>M(!1)}),y&&i(Po,{onLogin:$o,onCancel:()=>{k(!1),s("browse")}}),i(xo,{mode:r,onMode:j,pinsVisible:f,onTogglePins:()=>p(!f),sidebarOpen:c,onToggleSidebar:()=>g(!c),count:t.length,loading:o,onDisable:Wo})]})}var Fo=`/* All styles live inside the shadow root \u2014 they cannot leak into the page,
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
`;var Mo="faaaster-annotate-root";function Uo(){if(document.getElementById(Mo)||window!==window.top)return;let e=document.createElement("div");e.id=Mo,document.body.appendChild(e);let t=e.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=Fo,t.appendChild(n);let o=document.createElement("div");o.className="fa-app",t.appendChild(o),Gt(i(Lo,{}),o)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Uo):Uo();})();
