(()=>{var Ue,E,Ht,qo,te,Mt,$t,Wt,rt,Pe,ke,Bt,lt,at,it,No,Le={},Fe=[],Ko=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Oe=Array.isArray;function Z(e,t){for(var n in t)e[n]=t[n];return e}function ct(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Xo(e,t,n){var o,a,r,s={};for(r in t)r=="key"?o=t[r]:r=="ref"?a=t[r]:s[r]=t[r];if(arguments.length>2&&(s.children=arguments.length>3?Ue.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return Re(e,s,o,a,null)}function Re(e,t,n,o,a){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a==null?++Ht:a,__i:-1,__u:0};return a==null&&E.vnode!=null&&E.vnode(r),r}function ne(e){return e.children}function De(e,t){this.props=e,this.context=t}function fe(e,t){if(t==null)return e.__?fe(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?fe(e):null}function Yo(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,o=[],a=[],r=Z({},t);r.__v=t.__v+1,E.vnode&&E.vnode(r),ft(e.__P,r,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,o,n==null?fe(t):n,!!(32&t.__u),a),r.__v=t.__v,r.__.__k[r.__i]=r,Nt(o,r,a),t.__e=t.__=null,r.__e!=n&&Vt(r)}}function Vt(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Vt(e)}function Ut(e){(!e.__d&&(e.__d=!0)&&te.push(e)&&!Me.__r++||Mt!=E.debounceRendering)&&((Mt=E.debounceRendering)||$t)(Me)}function Me(){try{for(var e,t=1;te.length;)te.length>t&&te.sort(Wt),e=te.shift(),t=te.length,Yo(e)}finally{te.length=Me.__r=0}}function jt(e,t,n,o,a,r,s,l,f,u,p){var c,g,h,w,x,C,y,k=o&&o.__k||Fe,L=t.length;for(f=Go(n,t,k,f,L),c=0;c<L;c++)(h=n.__k[c])!=null&&(g=h.__i!=-1&&k[h.__i]||Le,h.__i=c,C=ft(e,h,g,a,r,s,l,f,u,p),w=h.__e,h.ref&&g.ref!=h.ref&&(g.ref&&ut(g.ref,null,h),p.push(h.ref,h.__c||w,h)),x==null&&w!=null&&(x=w),(y=!!(4&h.__u))||g.__k===h.__k?(f=qt(h,f,e,y),y&&g.__e&&(g.__e=null)):typeof h.type=="function"&&C!==void 0?f=C:w&&(f=w.nextSibling),h.__u&=-7);return n.__e=x,f}function Go(e,t,n,o,a){var r,s,l,f,u,p=n.length,c=p,g=0;for(e.__k=new Array(a),r=0;r<a;r++)(s=t[r])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[r]=Re(null,s,null,null,null):Oe(s)?s=e.__k[r]=Re(ne,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[r]=Re(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[r]=s,f=r+g,s.__=e,s.__b=e.__b+1,l=null,(u=s.__i=Jo(s,n,f,c))!=-1&&(c--,(l=n[u])&&(l.__u|=2)),l==null||l.__v==null?(u==-1&&(a>p?g--:a<p&&g++),typeof s.type!="function"&&(s.__u|=4)):u!=f&&(u==f-1?g--:u==f+1?g++:(u>f?g--:g++,s.__u|=4))):e.__k[r]=null;if(c)for(r=0;r<p;r++)(l=n[r])!=null&&!(2&l.__u)&&(l.__e==o&&(o=fe(l)),Xt(l,l));return o}function qt(e,t,n,o){var a,r;if(typeof e.type=="function"){for(a=e.__k,r=0;a&&r<a.length;r++)a[r]&&(a[r].__=e,t=qt(a[r],t,n,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=fe(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Jo(e,t,n,o){var a,r,s,l=e.key,f=e.type,u=t[n],p=u!=null&&(2&u.__u)==0;if(u===null&&l==null||p&&l==u.key&&f==u.type)return n;if(o>(p?1:0)){for(a=n-1,r=n+1;a>=0||r<t.length;)if((u=t[s=a>=0?a--:r++])!=null&&!(2&u.__u)&&l==u.key&&f==u.type)return s}return-1}function Ot(e,t,n){t[0]=="-"?e.setProperty(t,n==null?"":n):e[t]=n==null?"":typeof n!="number"||Ko.test(t)?n:n+"px"}function Ae(e,t,n,o,a){var r,s;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Ot(e.style,t,"");if(n)for(t in n)o&&n[t]==o[t]||Ot(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")r=t!=(t=t.replace(Bt,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o?n[ke]=o[ke]:(n[ke]=lt,e.addEventListener(t,r?it:at,r)):e.removeEventListener(t,r?it:at,r);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function zt(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[Pe]==null)t[Pe]=lt++;else if(t[Pe]<n[ke])return;return n(E.event?E.event(t):t)}}}function ft(e,t,n,o,a,r,s,l,f,u){var p,c,g,h,w,x,C,y,k,L,F,H,q,R,S,O=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(f=!!(32&n.__u),r=[l=t.__e=n.__e]),(p=E.__b)&&p(t);e:if(typeof O=="function")try{if(y=t.props,k=O.prototype&&O.prototype.render,L=(p=O.contextType)&&o[p.__c],F=p?L?L.props.value:p.__:o,n.__c?C=(c=t.__c=n.__c).__=c.__E:(k?t.__c=c=new O(y,F):(t.__c=c=new De(y,F),c.constructor=O,c.render=Zo),L&&L.sub(c),c.state||(c.state={}),c.__n=o,g=c.__d=!0,c.__h=[],c._sb=[]),k&&c.__s==null&&(c.__s=c.state),k&&O.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Z({},c.__s)),Z(c.__s,O.getDerivedStateFromProps(y,c.__s))),h=c.props,w=c.state,c.__v=t,g)k&&O.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),k&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(k&&O.getDerivedStateFromProps==null&&y!==h&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,F),t.__v==n.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,F)===!1){t.__v!=n.__v&&(c.props=y,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(B){B&&(B.__=t)}),Fe.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&s.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,F),k&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(h,w,x)})}if(c.context=F,c.props=y,c.__P=e,c.__e=!1,H=E.__r,q=0,k)c.state=c.__s,c.__d=!1,H&&H(t),p=c.render(c.props,c.state,c.context),Fe.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,H&&H(t),p=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++q<25);c.state=c.__s,c.getChildContext!=null&&(o=Z(Z({},o),c.getChildContext())),k&&!g&&c.getSnapshotBeforeUpdate!=null&&(x=c.getSnapshotBeforeUpdate(h,w)),R=p!=null&&p.type===ne&&p.key==null?Kt(p.props.children):p,l=jt(e,Oe(R)?R:[R],t,n,o,a,r,s,l,f,u),c.base=t.__e,t.__u&=-161,c.__h.length&&s.push(c),C&&(c.__E=c.__=null)}catch(B){if(t.__v=null,f||r!=null)if(B.then){for(t.__u|=f?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;r[r.indexOf(l)]=null,t.__e=l}else{for(S=r.length;S--;)ct(r[S]);st(t)}else t.__e=n.__e,t.__k=n.__k,B.then||st(t);E.__e(B,t,n)}else r==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Qo(n.__e,t,n,o,a,r,s,f,u);return(p=E.diffed)&&p(t),128&t.__u?void 0:l}function st(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(st))}function Nt(e,t,n){for(var o=0;o<n.length;o++)ut(n[o],n[++o],n[++o]);E.__c&&E.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(r){r.call(a)})}catch(r){E.__e(r,a.__v)}})}function Kt(e){return typeof e!="object"||e==null||e.__b>0?e:Oe(e)?e.map(Kt):e.constructor!==void 0?null:Z({},e)}function Qo(e,t,n,o,a,r,s,l,f){var u,p,c,g,h,w,x,C=n.props||Le,y=t.props,k=t.type;if(k=="svg"?a="http://www.w3.org/2000/svg":k=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),r!=null){for(u=0;u<r.length;u++)if((h=r[u])&&"setAttribute"in h==!!k&&(k?h.localName==k:h.nodeType==3)){e=h,r[u]=null;break}}if(e==null){if(k==null)return document.createTextNode(y);e=document.createElementNS(a,k,y.is&&y),l&&(E.__m&&E.__m(t,r),l=!1),r=null}if(k==null)C===y||l&&e.data==y||(e.data=y);else{if(r=k=="textarea"&&y.defaultValue!=null?null:r&&Ue.call(e.childNodes),!l&&r!=null)for(C={},u=0;u<e.attributes.length;u++)C[(h=e.attributes[u]).name]=h.value;for(u in C)h=C[u],u=="dangerouslySetInnerHTML"?c=h:u=="children"||u in y||u=="value"&&"defaultValue"in y||u=="checked"&&"defaultChecked"in y||Ae(e,u,null,h,a);for(u in y)h=y[u],u=="children"?g=h:u=="dangerouslySetInnerHTML"?p=h:u=="value"?w=h:u=="checked"?x=h:l&&typeof h!="function"||C[u]===h||Ae(e,u,h,C[u],a);if(p)l||c&&(p.__html==c.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(c&&(e.innerHTML=""),jt(t.type=="template"?e.content:e,Oe(g)?g:[g],t,n,o,k=="foreignObject"?"http://www.w3.org/1999/xhtml":a,r,s,r?r[0]:n.__k&&fe(n,0),l,f),r!=null)for(u=r.length;u--;)ct(r[u]);l&&k!="textarea"||(u="value",k=="progress"&&w==null?e.removeAttribute("value"):w!=null&&(w!==e[u]||k=="progress"&&!w||k=="option"&&w!=C[u])&&Ae(e,u,w,C[u],a),u="checked",x!=null&&x!=e[u]&&Ae(e,u,x,C[u],a))}return e}function ut(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(a){E.__e(a,n)}}function Xt(e,t,n){var o,a;if(E.unmount&&E.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||ut(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){E.__e(r,t)}o.base=o.__P=null}if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&Xt(o[a],t,n||typeof e.type!="function");n||ct(e.__e),e.__c=e.__=e.__e=void 0}function Zo(e,t,n){return this.constructor(e,n)}function Yt(e,t,n){var o,a,r,s;t==document&&(t=document.documentElement),E.__&&E.__(e,t),a=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],s=[],ft(t,e=(!o&&n||t).__k=Xo(ne,null,[e]),a||Le,Le,t.namespaceURI,!o&&n?[n]:a?null:t.firstChild?Ue.call(t.childNodes):null,r,!o&&n?n:a?a.__e:t.firstChild,o,s),Nt(r,e,s)}Ue=Fe.slice,E={__e:function(e,t,n,o){for(var a,r,s;t=t.__;)if((a=t.__c)&&!a.__)try{if((r=a.constructor)&&r.getDerivedStateFromError!=null&&(a.setState(r.getDerivedStateFromError(e)),s=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,o||{}),s=a.__d),s)return a.__E=a}catch(l){e=l}throw e}},Ht=0,qo=function(e){return e!=null&&e.constructor===void 0},De.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Z({},this.state),typeof e=="function"&&(e=e(Z({},n),this.props)),e&&Z(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ut(this))},De.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ut(this))},De.prototype.render=ne,te=[],$t=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Wt=function(e,t){return e.__v.__b-t.__v.__b},Me.__r=0,rt=Math.random().toString(8),Pe="__d"+rt,ke="__a"+rt,Bt=/(PointerCapture)$|Capture$/i,lt=0,at=zt(!1),it=zt(!0),No=0;var Ce,I,pt,Gt,Se=0,rn=[],P=E,Jt=P.__b,Qt=P.__r,Zt=P.diffed,en=P.__c,tn=P.unmount,nn=P.__;function mt(e,t){P.__h&&P.__h(I,e,Se||t),Se=0;var n=I.__H||(I.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function v(e){return Se=1,er(sn,e)}function er(e,t,n){var o=mt(Ce++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):sn(void 0,t),function(l){var f=o.__N?o.__N[0]:o.__[0],u=o.t(f,l);f!==u&&(o.__N=[u,o.__[1]],o.__c.setState({}))}],o.__c=I,!I.__f)){var a=function(l,f,u){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(g){return g.__c});if(p.every(function(g){return!g.__N}))return!r||r.call(this,l,f,u);var c=o.__c.props!==l;return p.some(function(g){if(g.__N){var h=g.__[0];g.__=g.__N,g.__N=void 0,h!==g.__[0]&&(c=!0)}}),r&&r.call(this,l,f,u)||c};I.__f=!0;var r=I.shouldComponentUpdate,s=I.componentWillUpdate;I.componentWillUpdate=function(l,f,u){if(this.__e){var p=r;r=void 0,a(l,f,u),r=p}s&&s.call(this,l,f,u)},I.shouldComponentUpdate=a}return o.__N||o.__}function $(e,t){var n=mt(Ce++,3);!P.__s&&an(n.__H,t)&&(n.__=e,n.u=t,I.__H.__h.push(n))}function M(e){return Se=5,He(function(){return{current:e}},[])}function He(e,t){var n=mt(Ce++,7);return an(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Y(e,t){return Se=8,He(function(){return e},t)}function tr(){for(var e;e=rn.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(ze),t.__h.some(dt),t.__h=[]}catch(n){t.__h=[],P.__e(n,e.__v)}}}P.__b=function(e){I=null,Jt&&Jt(e)},P.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),nn&&nn(e,t)},P.__r=function(e){Qt&&Qt(e),Ce=0;var t=(I=e.__c).__H;t&&(pt===I?(t.__h=[],I.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(ze),t.__h.some(dt),t.__h=[],Ce=0)),pt=I},P.diffed=function(e){Zt&&Zt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(rn.push(t)!==1&&Gt===P.requestAnimationFrame||((Gt=P.requestAnimationFrame)||nr)(tr)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),pt=I=null},P.__c=function(e,t){t.some(function(n){try{n.__h.some(ze),n.__h=n.__h.filter(function(o){return!o.__||dt(o)})}catch(o){t.some(function(a){a.__h&&(a.__h=[])}),t=[],P.__e(o,n.__v)}}),en&&en(e,t)},P.unmount=function(e){tn&&tn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(o){try{ze(o)}catch(a){t=a}}),n.__H=void 0,t&&P.__e(t,n.__v))};var on=typeof requestAnimationFrame=="function";function nr(e){var t,n=function(){clearTimeout(o),on&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);on&&(t=requestAnimationFrame(n))}function ze(e){var t=I,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),I=t}function dt(e){var t=I;e.__c=e.__(),I=t}function an(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function sn(e,t){return typeof t=="function"?t(e):t}var ee=typeof window!="undefined"&&window.appConfig?window.appConfig:{},U={locale:ee.locale||"en_US",lang:(ee.locale||"").toLowerCase().startsWith("fr")?"fr":"en",wpUser:ee.user||null,wpEmail:ee.email||null,forcedAnnotate:ee.annotate,disabled:ee.disabled,restBase:(ee.restBase||"/wp-json").replace(/\/$/,""),pollInterval:typeof ee.pollInterval=="number"?ee.pollInterval:15e3},ue=window.location.pathname.replace(/\//g,"%%"),ln=(window.location.host+window.location.pathname).replace(/\//g,"-").replace(/\./g,"-"),G=[{value:"Nouveau",key:"new",color:"#f43f5e"},{value:"En cours",key:"progress",color:"#3b82f6"},{value:"\xC0 valider",key:"review",color:"#f59e0b"},{value:"Valid\xE9",key:"done",color:"#10b981"}],ht="Nouveau";function pe(e){return G.find(t=>t.value===e)||G[0]}var cn="faaaster-annotate";function or(e){let t=document.cookie.split("; ").find(n=>n.startsWith(e+"="));return t?t.slice(e.length+1):void 0}function rr(e,t,n){let o="";if(n){let a=new Date;a.setTime(a.getTime()+n*24*60*60*1e3),o="; expires="+a.toUTCString()}document.cookie=e+"="+(t||"")+o+"; path=/"}function fn(){let e=or(cn),t={};if(e)try{t=JSON.parse(e)}catch{t={}}return{username:t.username||!1,email:t.email||!1,annotateMode:t.annotateMode===!0,showIntro:t.showIntro!==!1,disabled:t.disabled===!0}}function gt(e){rr(cn,JSON.stringify(e),30)}var oe=U.restBase+"/annotate/v1";async function un(e){let t=await fetch(e,{headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error("HTTP "+t.status);return t.json()}async function _t(){let e=await un(oe+"/annotations/?url="+ue);return Array.isArray(e)&&e.length>0?e:(e=await un(oe+"/annotations/?url="+ln),Array.isArray(e)?e:[])}async function yt(){let e=await fetch(oe+"/annotations/?scope=site",{headers:{"Content-Type":"application/json"}});if(!e.ok)throw $e(e.status);let t=await e.json();return Array.isArray(t)?t:[]}function $e(e){let t=new Error("HTTP "+e);return t.unsupported=e===404||e===405||e===410||e===501,t}async function pn(e){let t=await fetch(oe+"/annotation/?url="+ue,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw $e(t.status);return t.json()}async function dn(e){let t=await fetch(oe+"/annotation/?url="+ue+"&id="+encodeURIComponent(e),{method:"DELETE"});if(!t.ok)throw $e(t.status);return t.json()}async function We(e){let t=new FormData;t.append("file",e,e.name);let n=await fetch(oe+"/upload/?url="+ue,{method:"POST",body:t});if(!n.ok)throw $e(n.status);return n.json()}async function mn(e){let t=await fetch(oe+"/proxy/?url="+ue,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("HTTP "+t.status);return t.json()}async function hn(e,t){try{await fetch(oe+"/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,email:t})})}catch{}}function ar(){return window.crypto&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}function gn(e,t,n,o){let a=new Date().toISOString(),r={type:"TextualBody",purpose:n,value:e,creator:{id:t.email||t.name,name:t.name},created:a,modified:a};return o&&o.length&&(r.attachments=o),r}function _n({text:e,creator:t,anchor:n,attachments:o}){return{"@context":"http://www.w3.org/ns/anno.jsonld",type:"Annotation",id:"#"+ar(),body:[gn(e,t,"commenting",o),{type:"TextualBody",purpose:"tagging",value:ht}],target:{source:window.location.href,selector:[{type:"CssSelector",value:n.selector},{type:"FragmentSelector",conformsTo:"http://www.w3.org/TR/media-frags/",value:`xywh=percent:${n.relX.toFixed(4)},${n.relY.toFixed(4)},0,0`}]},meta:{kind:"pin",fixed:n.fixed,viewport:{w:window.innerWidth,h:window.innerHeight},ua:navigator.userAgent}}}function yn(e,t,n,o){let a=e.body.slice(),r=a.findIndex(l=>l.purpose==="tagging"),s=gn(t,n,"commenting",o);return r===-1?a.push(s):a.splice(r,0,s),{...e,body:Cn(a)}}function xn(e,t){let n=!1,o=e.body.map(a=>a.purpose==="tagging"&&!n?(n=!0,{...a,value:t,modified:new Date().toISOString()}):a);return n||o.push({type:"TextualBody",purpose:"tagging",value:t}),{...e,body:Cn(o)}}function bn(e,t){return{...e,meta:{...e.meta||{},screenshot:t}}}function re(e){let t=e.creator||{};return(t.id||t.name||"?")+"|"+(e.created||"")}function vn(e,t,n){return{...e,body:e.body.map(o=>o.purpose==="commenting"&&re(o)===t?{...o,value:n,modified:new Date().toISOString()}:o)}}function wn(e,t){return{...e,body:e.body.filter(n=>!(n.purpose==="commenting"&&re(n)===t))}}function kn(e,t){return!t||!e.creator?!1:e.creator.id===t.email||!e.creator.id&&e.creator.name===t.name}function Cn(e){return e.length&&e[0].purpose==="commenting"&&(e=e.slice(),e[0]={...e[0],modified:new Date().toISOString()}),e}function Ve(e){return(e.body||[]).filter(t=>t.purpose==="commenting")}function ae(e){let t=(e.body||[]).find(n=>n.purpose==="tagging");return t?t.value:ht}function Sn(e){let t=(e.body||[])[0];return t&&t.creator?t.creator:{name:"?"}}function je(e){let t=(e.body||[])[0]||{};return t.modified||t.created||0}function Be(e){return((e.body||[])[0]||{}).created||0}function de(e){let t=e.slice().sort((n,o)=>new Date(Be(n))-new Date(Be(o)));return t.forEach((n,o)=>{n.index=o+1}),t}function En(e){return(e.body||[]).filter(t=>t.purpose==="commenting")}function Tn(e){return(e.body||[]).find(t=>t.purpose==="tagging")||null}function ir(e,t,n,o){let a=new Map;for(let r of[...t,...n]){let s=re(r);if(o.has(e+"::"+s))continue;let l=a.get(s);(!l||new Date(r.modified||r.created||0)>new Date(l.modified||l.created||0))&&a.set(s,r)}return Array.from(a.values()).sort((r,s)=>new Date(r.created||0)-new Date(s.created||0))}function sr(e,t,n){let o=Tn(e),a=Tn(t);if(!o)return a;if(!a)return o;if(o.value===a.value)return a;let r=o.modified||o.created,s=a.modified||a.created;return r&&s?new Date(r)>new Date(s)?o:a:n?a:o}function lr(e,t,n,o){let a=ir(t.id,En(e),En(t),o),r=sr(e,t,n),s={...e.meta||{},...t.meta||{},screenshot:t.meta&&t.meta.screenshot||e.meta&&e.meta.screenshot||void 0};return s.screenshot||delete s.screenshot,{...t,meta:s,body:r?[...a,r]:a}}function In(e,t,n,o,a){let r=a||new Set,s=new Map;for(let l of e)!l||!l.id||o.has(l.id)||s.set(l.id,l);for(let l of t){let f=s.get(l.id);f?s.set(l.id,lr(f,l,n.has(l.id),r)):n.has(l.id)&&s.set(l.id,l)}return de(Array.from(s.values()))}function An(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let n=document.implementation.createHTMLDocument(),o=n.createElement("base"),a=n.createElement("a");return n.head.appendChild(o),n.body.appendChild(a),t&&(o.href=t),a.href=e,a.href}var Pn=(()=>{let e=0,t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function X(e){let t=[];for(let n=0,o=e.length;n<o;n++)t.push(e[n]);return t}var me=null;function Ne(e={}){return me||(e.includeStyleProperties?(me=e.includeStyleProperties,me):(me=X(window.getComputedStyle(document.documentElement)),me))}function qe(e,t){let o=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return o?parseFloat(o.replace("px","")):0}function cr(e){let t=qe(e,"border-left-width"),n=qe(e,"border-right-width");return e.clientWidth+t+n}function fr(e){let t=qe(e,"border-top-width"),n=qe(e,"border-bottom-width");return e.clientHeight+t+n}function xt(e,t={}){let n=t.width||cr(e),o=t.height||fr(e);return{width:n,height:o}}function Rn(){let e,t;try{t=process}catch{}let n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}var j=16384;function Dn(e){(e.width>j||e.height>j)&&(e.width>j&&e.height>j?e.width>e.height?(e.height*=j/e.width,e.width=j):(e.width*=j/e.height,e.height=j):e.width>j?(e.height*=j/e.width,e.width=j):(e.width*=j/e.height,e.height=j))}function he(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>{o.decode().then(()=>{requestAnimationFrame(()=>t(o))})},o.onerror=n,o.crossOrigin="anonymous",o.decoding="async",o.src=e})}async function ur(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function Ln(e,t,n){let o="http://www.w3.org/2000/svg",a=document.createElementNS(o,"svg"),r=document.createElementNS(o,"foreignObject");return a.setAttribute("width",`${t}`),a.setAttribute("height",`${n}`),a.setAttribute("viewBox",`0 0 ${t} ${n}`),r.setAttribute("width","100%"),r.setAttribute("height","100%"),r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("externalResourcesRequired","true"),a.appendChild(r),r.appendChild(e),ur(a)}var z=(e,t)=>{if(e instanceof t)return!0;let n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||z(n,t)};function pr(e){let t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function dr(e,t){return Ne(t).map(n=>{let o=e.getPropertyValue(n),a=e.getPropertyPriority(n);return`${n}: ${o}${a?" !important":""};`}).join(" ")}function mr(e,t,n,o){let a=`.${e}:${t}`,r=n.cssText?pr(n):dr(n,o);return document.createTextNode(`${a}{${r}}`)}function Fn(e,t,n,o){let a=window.getComputedStyle(e,n),r=a.getPropertyValue("content");if(r===""||r==="none")return;let s=Pn();try{t.className=`${t.className} ${s}`}catch{return}let l=document.createElement("style");l.appendChild(mr(s,n,a,o)),t.appendChild(l)}function Mn(e,t,n){Fn(e,t,":before",n),Fn(e,t,":after",n)}var Un="application/font-woff",On="image/jpeg",hr={woff:Un,woff2:Un,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:On,jpeg:On,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function gr(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function ge(e){let t=gr(e).toLowerCase();return hr[t]||""}function _r(e){return e.split(/,/)[1]}function Ee(e){return e.search(/^(data:)/)!==-1}function vt(e,t){return`data:${t};base64,${e}`}async function wt(e,t,n){let o=await fetch(e,t);if(o.status===404)throw new Error(`Resource "${o.url}" not found`);let a=await o.blob();return new Promise((r,s)=>{let l=new FileReader;l.onerror=s,l.onloadend=()=>{try{r(n({res:o,result:l.result}))}catch(f){s(f)}},l.readAsDataURL(a)})}var bt={};function yr(e,t,n){let o=e.replace(/\?.*/,"");return n&&(o=e),/ttf|otf|eot|woff2?/i.test(o)&&(o=o.replace(/.*\//,"")),t?`[${t}]${o}`:o}async function _e(e,t,n){let o=yr(e,t,n.includeQueryParams);if(bt[o]!=null)return bt[o];n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let a;try{let r=await wt(e,n.fetchRequestInit,({res:s,result:l})=>(t||(t=s.headers.get("Content-Type")||""),_r(l)));a=vt(r,t)}catch(r){a=n.imagePlaceholder||"";let s=`Failed to fetch resource: ${e}`;r&&(s=typeof r=="string"?r:r.message),s&&console.warn(s)}return bt[o]=a,a}async function xr(e){let t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):he(t)}async function br(e,t){if(e.currentSrc){let r=document.createElement("canvas"),s=r.getContext("2d");r.width=e.clientWidth,r.height=e.clientHeight,s==null||s.drawImage(e,0,0,r.width,r.height);let l=r.toDataURL();return he(l)}let n=e.poster,o=ge(n),a=await _e(n,o,t);return he(a)}async function vr(e,t){var n;try{if(!((n=e==null?void 0:e.contentDocument)===null||n===void 0)&&n.body)return await Te(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function wr(e,t){return z(e,HTMLCanvasElement)?xr(e):z(e,HTMLVideoElement)?br(e,t):z(e,HTMLIFrameElement)?vr(e,t):e.cloneNode(zn(e))}var kr=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT",zn=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SVG";async function Cr(e,t,n){var o,a;if(zn(t))return t;let r=[];return kr(e)&&e.assignedNodes?r=X(e.assignedNodes()):z(e,HTMLIFrameElement)&&(!((o=e.contentDocument)===null||o===void 0)&&o.body)?r=X(e.contentDocument.body.childNodes):r=X(((a=e.shadowRoot)!==null&&a!==void 0?a:e).childNodes),r.length===0||z(e,HTMLVideoElement)||await r.reduce((s,l)=>s.then(()=>Te(l,n)).then(f=>{f&&t.appendChild(f)}),Promise.resolve()),t}function Sr(e,t,n){let o=t.style;if(!o)return;let a=window.getComputedStyle(e);a.cssText?(o.cssText=a.cssText,o.transformOrigin=a.transformOrigin):Ne(n).forEach(r=>{let s=a.getPropertyValue(r);r==="font-size"&&s.endsWith("px")&&(s=`${Math.floor(parseFloat(s.substring(0,s.length-2)))-.1}px`),z(e,HTMLIFrameElement)&&r==="display"&&s==="inline"&&(s="block"),r==="d"&&t.getAttribute("d")&&(s=`path(${t.getAttribute("d")})`),o.setProperty(r,s,a.getPropertyPriority(r))})}function Er(e,t){z(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),z(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function Tr(e,t){if(z(e,HTMLSelectElement)){let n=t,o=Array.from(n.children).find(a=>e.value===a.getAttribute("value"));o&&o.setAttribute("selected","")}}function Ir(e,t,n){return z(t,Element)&&(Sr(e,t,n),Mn(e,t,n),Er(e,t),Tr(e,t)),t}async function Ar(e,t){let n=e.querySelectorAll?e.querySelectorAll("use"):[];if(n.length===0)return e;let o={};for(let r=0;r<n.length;r++){let l=n[r].getAttribute("xlink:href");if(l){let f=e.querySelector(l),u=document.querySelector(l);!f&&u&&!o[l]&&(o[l]=await Te(u,t,!0))}}let a=Object.values(o);if(a.length){let r="http://www.w3.org/1999/xhtml",s=document.createElementNS(r,"svg");s.setAttribute("xmlns",r),s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.overflow="hidden",s.style.display="none";let l=document.createElementNS(r,"defs");s.appendChild(l);for(let f=0;f<a.length;f++)l.appendChild(a[f]);e.appendChild(s)}return e}async function Te(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(o=>wr(o,t)).then(o=>Cr(e,o,t)).then(o=>Ir(e,o,t)).then(o=>Ar(o,t))}var Hn=/url\((['"]?)([^'"]+?)\1\)/g,Pr=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Rr=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Dr(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function Lr(e){let t=[];return e.replace(Hn,(n,o,a)=>(t.push(a),n)),t.filter(n=>!Ee(n))}async function Fr(e,t,n,o,a){try{let r=n?An(t,n):t,s=ge(t),l;if(a){let f=await a(r);l=vt(f,s)}else l=await _e(r,s,o);return e.replace(Dr(t),`$1${l}$3`)}catch{}return e}function Mr(e,{preferredFontFormat:t}){return t?e.replace(Rr,n=>{for(;;){let[o,,a]=Pr.exec(n)||[];if(!a)return"";if(a===t)return`src: ${o};`}}):e}function kt(e){return e.search(Hn)!==-1}async function Ke(e,t,n){if(!kt(e))return e;let o=Mr(e,n);return Lr(o).reduce((r,s)=>r.then(l=>Fr(l,s,t,n)),Promise.resolve(o))}async function ye(e,t,n){var o;let a=(o=t.style)===null||o===void 0?void 0:o.getPropertyValue(e);if(a){let r=await Ke(a,null,n);return t.style.setProperty(e,r,t.style.getPropertyPriority(e)),!0}return!1}async function Ur(e,t){await ye("background",e,t)||await ye("background-image",e,t),await ye("mask",e,t)||await ye("-webkit-mask",e,t)||await ye("mask-image",e,t)||await ye("-webkit-mask-image",e,t)}async function Or(e,t){let n=z(e,HTMLImageElement);if(!(n&&!Ee(e.src))&&!(z(e,SVGImageElement)&&!Ee(e.href.baseVal)))return;let o=n?e.src:e.href.baseVal,a=await _e(o,ge(o),t);await new Promise((r,s)=>{e.onload=r,e.onerror=t.onImageErrorHandler?(...f)=>{try{r(t.onImageErrorHandler(...f))}catch(u){s(u)}}:s;let l=e;l.decode&&(l.decode=r),l.loading==="lazy"&&(l.loading="eager"),n?(e.srcset="",e.src=a):e.href.baseVal=a})}async function zr(e,t){let o=X(e.childNodes).map(a=>Ct(a,t));await Promise.all(o).then(()=>e)}async function Ct(e,t){z(e,Element)&&(await Ur(e,t),await Or(e,t),await zr(e,t))}function $n(e,t){let{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);let o=t.style;return o!=null&&Object.keys(o).forEach(a=>{n[a]=o[a]}),e}var Wn={};async function Bn(e){let t=Wn[e];if(t!=null)return t;let o=await(await fetch(e)).text();return t={url:e,cssText:o},Wn[e]=t,t}async function Vn(e,t){let n=e.cssText,o=/url\(["']?([^"')]+)["']?\)/g,r=(n.match(/url\([^)]+\)/g)||[]).map(async s=>{let l=s.replace(o,"$1");return l.startsWith("https://")||(l=new URL(l,e.url).href),wt(l,t.fetchRequestInit,({result:f})=>(n=n.replace(s,`url(${f})`),[s,f]))});return Promise.all(r).then(()=>n)}function jn(e){if(e==null)return[];let t=[],n=/(\/\*[\s\S]*?\*\/)/gi,o=e.replace(n,""),a=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let f=a.exec(o);if(f===null)break;t.push(f[0])}o=o.replace(a,"");let r=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,s="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",l=new RegExp(s,"gi");for(;;){let f=r.exec(o);if(f===null){if(f=l.exec(o),f===null)break;r.lastIndex=l.lastIndex}else l.lastIndex=r.lastIndex;t.push(f[0])}return t}async function Hr(e,t){let n=[],o=[];return e.forEach(a=>{if("cssRules"in a)try{X(a.cssRules||[]).forEach((r,s)=>{if(r.type===CSSRule.IMPORT_RULE){let l=s+1,f=r.href,u=Bn(f).then(p=>Vn(p,t)).then(p=>jn(p).forEach(c=>{try{a.insertRule(c,c.startsWith("@import")?l+=1:a.cssRules.length)}catch(g){console.error("Error inserting rule from remote css",{rule:c,error:g})}})).catch(p=>{console.error("Error loading remote css",p.toString())});o.push(u)}})}catch(r){let s=e.find(l=>l.href==null)||document.styleSheets[0];a.href!=null&&o.push(Bn(a.href).then(l=>Vn(l,t)).then(l=>jn(l).forEach(f=>{s.insertRule(f,s.cssRules.length)})).catch(l=>{console.error("Error loading remote stylesheet",l)})),console.error("Error inlining remote css file",r)}}),Promise.all(o).then(()=>(e.forEach(a=>{if("cssRules"in a)try{X(a.cssRules||[]).forEach(r=>{n.push(r)})}catch(r){console.error(`Error while reading CSS rules from ${a.href}`,r)}}),n))}function $r(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>kt(t.style.getPropertyValue("src")))}async function Wr(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");let n=X(e.ownerDocument.styleSheets),o=await Hr(n,t);return $r(o)}function qn(e){return e.trim().replace(/["']/g,"")}function Br(e){let t=new Set;function n(o){(o.style.fontFamily||getComputedStyle(o).fontFamily).split(",").forEach(r=>{t.add(qn(r))}),Array.from(o.children).forEach(r=>{r instanceof HTMLElement&&n(r)})}return n(e),t}async function Nn(e,t){let n=await Wr(e,t),o=Br(e);return(await Promise.all(n.filter(r=>o.has(qn(r.style.fontFamily))).map(r=>{let s=r.parentStyleSheet?r.parentStyleSheet.href:null;return Ke(r.cssText,s,t)}))).join(`
`)}async function Kn(e,t){let n=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await Nn(e,t);if(n){let o=document.createElement("style"),a=document.createTextNode(n);o.appendChild(a),e.firstChild?e.insertBefore(o,e.firstChild):e.appendChild(o)}}async function Vr(e,t={}){let{width:n,height:o}=xt(e,t),a=await Te(e,t,!0);return await Kn(a,t),await Ct(a,t),$n(a,t),await Ln(a,n,o)}async function Xn(e,t={}){let{width:n,height:o}=xt(e,t),a=await Vr(e,t),r=await he(a),s=document.createElement("canvas"),l=s.getContext("2d"),f=t.pixelRatio||Rn(),u=t.canvasWidth||n,p=t.canvasHeight||o;return s.width=u*f,s.height=p*f,t.skipAutoScale||Dn(s),s.style.width=`${u}`,s.style.height=`${p}`,t.backgroundColor&&(l.fillStyle=t.backgroundColor,l.fillRect(0,0,s.width,s.height)),l.drawImage(r,0,0,s.width,s.height),s}var jr="faaaster-annotate-root",qr=800,Yn=.65,Nr=12e3;function Kr(e,t){return Promise.race([e,new Promise((n,o)=>setTimeout(()=>o(new Error("capture timeout")),t))])}function Xr(e){return new Promise((t,n)=>{e.toBlob(o=>{if(o&&o.type==="image/webp")return t(o);e.toBlob(a=>a?t(a):n(new Error("encode failed")),"image/jpeg",Yn)},"image/webp",Yn)})}async function Gn(){let e=Math.min(1,qr/window.innerWidth),t=window.scrollX,n=window.scrollY,o=await Kr(Xn(document.body,{pixelRatio:e,filter:l=>!(l.id===jr||l.id==="wpadminbar"),backgroundColor:"#ffffff"}),Nr),a=document.createElement("canvas");a.width=Math.round(window.innerWidth*e),a.height=Math.round(window.innerHeight*e);let r=a.getContext("2d");return r.fillStyle="#ffffff",r.fillRect(0,0,a.width,a.height),r.drawImage(o,Math.round(t*e),Math.round(n*e),a.width,a.height,0,0,a.width,a.height),{blob:await Xr(a),width:a.width,height:a.height}}var Yr="faaaster-annotate-root";function Jn(e){return window.CSS&&CSS.escape?CSS.escape(e):e.replace(/([^a-zA-Z0-9_-])/g,"\\$1")}function Gr(e){try{return document.querySelectorAll("#"+Jn(e)).length===1}catch{return!1}}function Jr(e){return!(!e||e.length>64||/\d{4,}/.test(e)||/^(ember|react|radix|aria)-/.test(e))}function Qr(e){let t=e.tagName.toLowerCase(),n=e.parentElement;if(!n)return t;let o=Array.from(n.children).filter(a=>a.tagName===e.tagName);return o.length===1?t:`${t}:nth-of-type(${o.indexOf(e)+1})`}function Zr(e){let t=[],n=e;for(;n&&n.nodeType===Node.ELEMENT_NODE&&n!==document.documentElement;){if(n.id&&Jr(n.id)&&Gr(n.id))return t.unshift("#"+Jn(n.id)),t.join(" > ");if(n===document.body)return t.unshift("body"),t.join(" > ");t.unshift(Qr(n)),n=n.parentElement}return t.unshift("html"),t.join(" > ")}function St(e){let t=e;for(;t&&t.nodeType===Node.ELEMENT_NODE;){let n=window.getComputedStyle(t).position;if(n==="fixed"||n==="sticky")return!0;t=t.parentElement}return!1}function Qn(e,t,n){let o=e.getBoundingClientRect();return{selector:Zr(e),relX:o.width?(t-o.left)/o.width:.5,relY:o.height?(n-o.top)/o.height:.5,fixed:St(e)}}function ea(e){let t=/percent:([\d.]+),([\d.]+)/.exec(e||"");return t?{relX:parseFloat(t[1]),relY:parseFloat(t[2])}:null}function ta(e){let n=(e.target||{}).selector;return n?Array.isArray(n)?n:[n]:[]}function na(e){if(!e)return null;let n=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(o){return o.parentElement&&o.parentElement.closest("#"+Yr)?NodeFilter.FILTER_REJECT:o.textContent.includes(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}}).nextNode();return n?n.parentElement:null}function Et(e){let t=ta(e),n=t.find(r=>r.type==="CssSelector"),o=t.find(r=>r.type==="FragmentSelector");if(n&&o){let r=ea(o.value),s=null;try{s=document.querySelector(n.value)}catch{s=null}if(s&&r)return{el:s,relX:r.relX,relY:r.relY,fixed:St(s),legacy:!1}}let a=t.find(r=>r.type==="TextQuoteSelector");if(a&&a.exact){let r=na(a.exact.trim());if(r)return{el:r,relX:.5,relY:.5,fixed:St(r),legacy:!0}}return null}function Zn(e){let t=e.el.getBoundingClientRect();return!t.width&&!t.height?null:{x:t.left+t.width*e.relX,y:t.top+t.height*e.relY}}var eo={fr:{annotate:"Commenter",navigate:"Naviguer",tasks:"Annotations",hidePins:"Masquer les \xE9pingles",showPins:"Afficher les \xE9pingles",quit:"D\xE9sactiver l'outil",introTitle:"Feedback visuel",introText:"Activez le mode Commenter puis cliquez n'importe o\xF9 sur la page pour laisser une annotation.",gotIt:"Compris",loginTitle:"Identifiez-vous",loginText:"Votre nom et votre email seront associ\xE9s \xE0 vos annotations.",username:"Nom",email:"Email",validate:"Valider",invalidEmail:"Veuillez saisir une adresse email valide",placeholderComment:"D\xE9crivez votre retour\u2026",placeholderReply:"R\xE9pondre\u2026",send:"Envoyer",cancel:"Annuler",delete:"Supprimer",deleteConfirm:"Supprimer cette annotation et ses r\xE9ponses ?",resolve:"Marquer comme valid\xE9",reopen:"Rouvrir",empty:"Aucune annotation sur cette page.",emptyFiltered:"Aucune annotation pour ce filtre.",all:"Toutes",reply:"r\xE9ponse",replies:"r\xE9ponses",notLocated:"Annotation non localisable sur la page",legacyText:"Texte annot\xE9",attach:"Joindre un fichier",uploading:"Envoi en cours\u2026",fileTooBig:"Fichier trop volumineux (5 Mo max)",fileType:"Type de fichier non autoris\xE9",uploadUnavailable:"L'envoi de fichiers n'est pas encore disponible sur cette instance",uploadFailed:"\xC9chec de l'envoi du fichier",removeFile:"Retirer",screenshot:"Contexte \xE0 la cr\xE9ation",copyLink:"Copier le lien",linkCopied:"Lien copi\xE9 !",details:"D\xE9tails techniques",edit:"Modifier",save:"Enregistrer",deleteComment:"Supprimer ce commentaire ?",thisPage:"Cette page",wholeSite:"Tout le site",otherPage:"Voir sur la page",above:"au-dessus",below:"en dessous",edited:"modifi\xE9",status:{new:"\xC0 traiter",progress:"En cours",review:"\xC0 valider",done:"Valid\xE9"},timeAgo:{now:"\xE0 l'instant",m:"min",h:"h",d:"j",w:"sem",mo:"mois"}},en:{annotate:"Comment",navigate:"Browse",tasks:"Annotations",hidePins:"Hide pins",showPins:"Show pins",quit:"Disable the tool",introTitle:"Visual feedback",introText:"Switch to Comment mode, then click anywhere on the page to leave an annotation.",gotIt:"Got it",loginTitle:"Identify yourself",loginText:"Your name and email will be attached to your annotations.",username:"Name",email:"Email",validate:"Confirm",invalidEmail:"Please enter a valid email address",placeholderComment:"Describe your feedback\u2026",placeholderReply:"Reply\u2026",send:"Send",cancel:"Cancel",delete:"Delete",deleteConfirm:"Delete this annotation and its replies?",resolve:"Mark as resolved",reopen:"Reopen",empty:"No annotations on this page yet.",emptyFiltered:"No annotations match this filter.",all:"All",reply:"reply",replies:"replies",notLocated:"Annotation could not be located on the page",legacyText:"Annotated text",attach:"Attach a file",uploading:"Uploading\u2026",fileTooBig:"File too large (5 MB max)",fileType:"File type not allowed",uploadUnavailable:"File upload is not available on this instance yet",uploadFailed:"File upload failed",removeFile:"Remove",screenshot:"Context at creation",copyLink:"Copy link",linkCopied:"Link copied!",details:"Technical details",edit:"Edit",save:"Save",deleteComment:"Delete this comment?",thisPage:"This page",wholeSite:"Whole site",otherPage:"Open on page",above:"above",below:"below",edited:"edited",status:{new:"To do",progress:"In progress",review:"To review",done:"Resolved"},timeAgo:{now:"just now",m:"min",h:"h",d:"d",w:"wk",mo:"mo"}}},d=eo[U.lang]||eo.en;function xe(e){let t=G.find(n=>n.value===e);return t?d.status[t.key]:e}var oa=0,fi=Array.isArray;function i(e,t,n,o,a,r){t||(t={});var s,l,f=t;if("ref"in f)for(l in f={},t)l=="ref"?s=t[l]:f[l]=t[l];var u={type:e,props:f,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--oa,__i:-1,__u:0,__source:a,__self:r};if(typeof e=="function"&&(s=e.defaultProps))for(l in s)f[l]===void 0&&(f[l]=s[l]);return E.vnode&&E.vnode(u),u}var A={width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},be=()=>i("svg",{...A,children:i("path",{d:"M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5 8.38 8.38 0 0 1 8.5 8.5z"})}),to=()=>i("svg",{...A,children:i("path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z"})}),no=()=>i("svg",{...A,children:[i("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"}),i("circle",{cx:"12",cy:"12",r:"3"})]}),oo=()=>i("svg",{...A,children:[i("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),i("path",{d:"M6.61 6.61A13.53 13.53 0 0 0 2 12s3.5 8 10 8a9.74 9.74 0 0 0 5.39-1.61"}),i("line",{x1:"2",y1:"2",x2:"22",y2:"22"})]}),ro=()=>i("svg",{...A,children:[i("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),i("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),i("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),i("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),i("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),i("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),ao=()=>i("svg",{...A,children:[i("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),i("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),ie=()=>i("svg",{...A,children:[i("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Xe=()=>i("svg",{...A,width:"16",height:"16",children:[i("polyline",{points:"3 6 5 6 21 6"}),i("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),ve=()=>i("svg",{...A,width:"16",height:"16",children:[i("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),i("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),io=()=>i("svg",{...A,width:"15",height:"15",children:[i("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),i("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),so=()=>i("svg",{...A,width:"15",height:"15",children:[i("circle",{cx:"12",cy:"12",r:"10"}),i("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),i("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),lo=()=>i("svg",{...A,width:"13",height:"13",children:i("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})}),Ye=()=>i("svg",{...A,width:"15",height:"15",children:i("polyline",{points:"20 6 9 17 4 12"})}),co=()=>i("svg",{...A,width:"15",height:"15",children:i("polyline",{points:"6 9 12 15 18 9"})}),fo=()=>i("svg",{...A,width:"14",height:"14",children:[i("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),i("polyline",{points:"5 12 12 5 19 12"})]}),uo=()=>i("svg",{...A,width:"14",height:"14",children:[i("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i("polyline",{points:"19 12 12 19 5 12"})]}),po=()=>i("svg",{...A,width:"13",height:"13",children:[i("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),i("polyline",{points:"15 3 21 3 21 9"}),i("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),mo=()=>i("svg",{...A,width:"13",height:"13",children:[i("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),i("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),i("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),ho=()=>i("svg",{...A,width:"13",height:"13",children:[i("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",ry:"2"}),i("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),go=()=>i("svg",{...A,width:"13",height:"13",children:[i("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),i("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),_o=()=>i("svg",{...A,width:"14",height:"14",children:[i("circle",{cx:"12",cy:"12",r:"10"}),i("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"})]});function yo({mode:e,onMode:t,pinsVisible:n,onTogglePins:o,sidebarOpen:a,onToggleSidebar:r,count:s,loading:l,onDisable:f}){return i("div",{class:"fa-toolbar",role:"toolbar","aria-label":"Faaaster annotate",children:[i("div",{class:"fa-toolbar-modes",children:[i("button",{type:"button",class:"fa-mode-btn"+(e==="comment"?" fa-active":""),onClick:()=>t("comment"),title:d.annotate,children:[i(be,{}),i("span",{children:d.annotate})]}),i("button",{type:"button",class:"fa-mode-btn"+(e==="browse"?" fa-active":""),onClick:()=>t("browse"),title:d.navigate,children:[i(to,{}),i("span",{children:d.navigate})]})]}),i("div",{class:"fa-toolbar-sep"}),i("button",{type:"button",class:"fa-icon-btn",onClick:o,title:n?d.hidePins:d.showPins,children:n?i(no,{}):i(oo,{})}),i("button",{type:"button",class:"fa-icon-btn"+(a?" fa-active":""),onClick:r,title:d.tasks,children:[i(ro,{}),l?i("span",{class:"fa-badge fa-badge-loading"}):s>0&&i("span",{class:"fa-badge",children:s})]}),i("div",{class:"fa-toolbar-sep"}),i("button",{type:"button",class:"fa-icon-btn fa-quit",onClick:f,title:d.quit,children:i(ao,{})})]})}var xo="faaaster-annotate-root";function bo(e,t){let n=document.elementsFromPoint(e,t);for(let o of n)if(!(o.id===xo||o.closest("#"+xo))&&o!==document.documentElement)return o;return document.body}function vo({active:e,onPick:t}){let[n,o]=v(null),a=M(null);return $(()=>{e||o(null)},[e]),e?i("div",{ref:a,class:"fa-capture",onMouseMove:l=>{let f=bo(l.clientX,l.clientY);if(!f||f===document.body||f===document.documentElement){o(null);return}let u=f.getBoundingClientRect();o({left:u.left,top:u.top,width:u.width,height:u.height})},onMouseLeave:()=>o(null),onClick:l=>{l.preventDefault(),l.stopPropagation();let f=bo(l.clientX,l.clientY);f&&t(f,l.clientX,l.clientY,Qn(f,l.clientX,l.clientY))},children:n&&n.width>0&&i("div",{class:"fa-highlight",style:{left:n.left+"px",top:n.top+"px",width:n.width+"px",height:n.height+"px"}})}):null}function wo({annotations:e,positions:t,openId:n,onOpen:o,draftPos:a}){return i("div",{class:"fa-pins",children:[e.map(r=>{let s=t[r.id];if(!s)return null;let l=pe(ae(r)),f=l.key==="done";return i("button",{type:"button",class:"fa-pin"+(r.id===n?" fa-pin-open":"")+(f?" fa-pin-done":""),style:{left:s.x+"px",top:s.y+"px","--fa-pin-color":l.color},onClick:u=>{u.stopPropagation(),o(r.id)},title:"#"+r.index,children:i("span",{children:r.index})},r.id)}),a&&i("div",{class:"fa-pin fa-pin-draft",style:{left:a.x+"px",top:a.y+"px"},children:i("span",{children:"+"})})]})}function ko(e){if(!e)return null;let t="?";/edg\//i.test(e)?t="Edge":/opr\//i.test(e)?t="Opera":/chrome|crios/i.test(e)?t="Chrome":/firefox|fxios/i.test(e)?t="Firefox":/safari/i.test(e)&&(t="Safari");let n="?";return/windows/i.test(e)?n="Windows":/iphone|ipad|ipod/i.test(e)?n="iOS":/mac os/i.test(e)?n="macOS":/android/i.test(e)?n="Android":/linux/i.test(e)&&(n="Linux"),{browser:t,os:n}}function Co(e){let t=e&&e.viewport&&e.viewport.w;return t?t<640?"mobile":t<1024?"tablet":"desktop":null}function Ge(e){let t=new Date(e);if(isNaN(t))return"";let n=Math.max(0,Date.now()-t.getTime()),o=Math.floor(n/6e4);if(o<1)return d.timeAgo.now;if(o<60)return o+" "+d.timeAgo.m;let a=Math.floor(o/60);if(a<24)return a+" "+d.timeAgo.h;let r=Math.floor(a/24);if(r<7)return r+" "+d.timeAgo.d;let s=Math.floor(r/7);return s<5?s+" "+d.timeAgo.w:Math.floor(r/30)+" "+d.timeAgo.mo}function Je(e,t){let n=new Date(e);return isNaN(n)?"":n.toLocaleString(t.replace("_","-"))}function Qe(e){let t=window.innerWidth,n=window.innerHeight;if(t<640)return null;let o=e.x+20;o+320>t-12&&(o=e.x-20-320),o<12&&(o=12);let a=Math.max(12,Math.min(e.y-24,n-400));return{left:o+"px",top:a+"px"}}var ra=5*1024*1024,aa="image/*,.pdf,.zip",ia=/^(image\/|application\/pdf$|application\/(x-)?zip)/;function sa(e){return e>=1024*1024?(e/(1024*1024)).toFixed(1)+" Mo":Math.max(1,Math.round(e/1024))+" Ko"}function Ze(e){let[t,n]=v([]),[o,a]=v(!1),[r,s]=v(null),l=M(null);return{files:t,busy:o,error:r,pick:()=>l.current&&l.current.click(),remove:h=>n(w=>w.filter(x=>x!==h)),reset:()=>{n([]),s(null)},input:i("input",{ref:l,type:"file",multiple:!0,accept:aa,style:{display:"none"},onChange:async h=>{let w=Array.from(h.target.files||[]);h.target.value="",s(null);for(let x of w){if(x.size>ra){s(d.fileTooBig);continue}if(!ia.test(x.type)){s(d.fileType);continue}a(!0);try{let C=await We(x);n(y=>[...y,C])}catch(C){C.unsupported?(s(d.uploadUnavailable),e&&e()):s(d.uploadFailed)}a(!1)}}})}}var Ie=()=>i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:i("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"})});function et({files:e,onRemove:t}){return e.length?i("div",{class:"fa-attach-chips",children:e.map(n=>i("span",{class:"fa-attach-chip",title:n.name,children:[n.type&&n.type.startsWith("image/")&&i("img",{src:n.url,alt:""}),i("span",{class:"fa-attach-name",children:n.name}),i("button",{type:"button",onClick:()=>t(n),title:d.removeFile,children:i(ie,{})})]},n.url))}):null}function So({attachments:e}){if(!e||!e.length)return null;let t=e.filter(o=>o.type&&o.type.startsWith("image/")),n=e.filter(o=>!o.type||!o.type.startsWith("image/"));return i("div",{class:"fa-attachments",children:[t.length>0&&i("div",{class:"fa-attach-thumbs",children:t.map(o=>i("a",{href:o.url,target:"_blank",rel:"noopener",title:o.name,children:i("img",{src:o.url,alt:o.name,loading:"lazy"})},o.url))}),n.map(o=>i("a",{class:"fa-attach-file",href:o.url,target:"_blank",rel:"noopener",children:[i(Ie,{}),i("span",{class:"fa-attach-name",children:o.name}),o.size>0&&i("span",{class:"fa-attach-size",children:sa(o.size)})]},o.url))]})}function la(e){return(e||"?").split(/\s+/).map(t=>t[0]).slice(0,2).join("").toUpperCase()}function tt({comments:e,identity:t,onEdit:n,onDeleteComment:o}){let[a,r]=v(null),[s,l]=v(""),f=p=>{r(re(p)),l(p.value)},u=p=>{let c=s.trim();c&&c!==p.value&&n(re(p),c),r(null)};return i("div",{class:"fa-thread-comments",children:e.map((p,c)=>{let g=re(p),h=kn(p,t),w=p.modified&&p.created&&p.modified!==p.created;return i("div",{class:"fa-comment",children:[i("span",{class:"fa-avatar",children:la(p.creator&&p.creator.name)}),i("div",{class:"fa-comment-main",children:[i("div",{class:"fa-comment-meta",children:[i("span",{class:"fa-comment-author",children:p.creator&&p.creator.name||"?"}),i("time",{title:Je(p.modified||p.created,U.locale),children:[Ge(p.modified||p.created),w&&a!==g?" \xB7 "+d.edited:""]}),h&&a!==g&&i("span",{class:"fa-comment-tools",children:[i("button",{type:"button",title:d.edit,onClick:()=>f(p),children:i(lo,{})}),c>0&&i("button",{type:"button",title:d.delete,onClick:()=>{window.confirm(d.deleteComment)&&o(g)},children:i(Xe,{})})]})]}),a===g?i("div",{class:"fa-comment-edit",children:[i("textarea",{class:"fa-textarea",rows:2,value:s,onInput:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),u(p)),x.key==="Escape"&&r(null)}}),i("div",{class:"fa-comment-edit-actions",children:[i("button",{type:"button",title:d.cancel,onClick:()=>r(null),children:i(ie,{})}),i("button",{type:"button",class:"fa-edit-save",title:d.save,onClick:()=>u(p),children:i(Ye,{})})]})]}):i("div",{class:"fa-comment-text",children:p.value}),i(So,{attachments:p.attachments})]})]},g)})})}function Tt({meta:e}){let t=Co(e);if(!t)return null;let n=e.viewport.w+"\xD7"+e.viewport.h;return i("span",{class:"fa-device",title:n,children:t==="mobile"?i(go,{}):t==="tablet"?i(ho,{}):i(mo,{})})}function ca(e){return window.location.origin+window.location.pathname+window.location.search+"#fa="+encodeURIComponent(e.id)}function fa({annotation:e}){let t=e.meta||{},n=ko(t.ua),o=[];n&&o.push([d.details,n.browser+" \xB7 "+n.os]),t.viewport&&o.push(["Viewport",t.viewport.w+"\xD7"+t.viewport.h]);let a=Be(e);return a&&o.push(["\u{1F4C5}",Je(a,U.locale)]),o.length?i("div",{class:"fa-info-panel",children:[i(Tt,{meta:t}),o.map(([r,s])=>i("span",{title:r,children:s},r))]}):null}function Eo({annotation:e,pos:t,identity:n,onReply:o,onStatus:a,onDelete:r,onEditComment:s,onDeleteComment:l,onClose:f,uploadsEnabled:u,onUploadUnsupported:p}){let[c,g]=v(""),[h,w]=v(!1),[x,C]=v(!1),y=Ze(p),k=Ve(e),L=ae(e),F=e.meta&&e.meta.screenshot,H=Qe(t),q=()=>{let S=c.trim();!S||y.busy||(o(S,y.files),g(""),y.reset())},R=()=>{navigator.clipboard.writeText(ca(e)).then(()=>{C(!0),setTimeout(()=>C(!1),1500)}).catch(()=>{})};return i("div",{class:(H?"fa-popover":"fa-popover fa-sheet")+" fa-thread",style:H||void 0,children:[i("div",{class:"fa-thread-header",children:[i("span",{class:"fa-thread-index",style:{"--fa-pin-color":pe(L).color},children:e.index}),i("select",{class:"fa-status-select",value:L,onChange:S=>a(S.target.value),children:G.map(S=>i("option",{value:S.value,children:xe(S.value)},S.value))}),i("button",{type:"button",class:"fa-icon-btn fa-small"+(x?" fa-copied":""),onClick:R,title:x?d.linkCopied:d.copyLink,children:x?i(Ye,{}):i(io,{})}),i("button",{type:"button",class:"fa-icon-btn fa-small"+(h?" fa-active":""),onClick:()=>w(!h),title:d.details,children:i(so,{})}),i("button",{type:"button",class:"fa-icon-btn fa-small",onClick:r,title:d.delete,children:i(Xe,{})}),i("button",{type:"button",class:"fa-icon-btn fa-small",onClick:f,title:"\u2715",children:i(ie,{})})]}),h&&i(fa,{annotation:e}),F&&i("a",{class:"fa-screenshot",href:F.url,target:"_blank",rel:"noopener",title:d.screenshot,children:i("img",{src:F.url,alt:d.screenshot,loading:"lazy"})}),i(tt,{comments:k,identity:n,onEdit:s,onDeleteComment:l}),i(et,{files:y.files,onRemove:y.remove}),y.error&&i("p",{class:"fa-error",children:y.error}),i("div",{class:"fa-thread-reply",children:[u&&i("button",{type:"button",class:"fa-icon-btn fa-small"+(y.busy?" fa-busy":""),onClick:y.pick,disabled:y.busy,title:y.busy?d.uploading:d.attach,children:i(Ie,{})}),y.input,i("textarea",{class:"fa-textarea",rows:1,placeholder:d.placeholderReply,value:c,onInput:S=>g(S.target.value),onKeyDown:S=>{S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),q())}}),i("button",{type:"button",class:"fa-btn fa-btn-primary fa-btn-round",disabled:!c.trim()||y.busy,onClick:q,title:d.send,children:i(ve,{})})]})]})}function To({pos:e,onSubmit:t,onCancel:n,uploadsEnabled:o,onUploadUnsupported:a}){let[r,s]=v(""),l=M(null),f=Ze(a),u=Qe(e);$(()=>{l.current&&l.current.focus()},[]);let p=()=>{let c=r.trim();c&&!f.busy&&t(c,f.files)};return i("div",{class:u?"fa-popover":"fa-popover fa-sheet",style:u||void 0,children:[i("textarea",{ref:l,class:"fa-textarea",rows:3,placeholder:d.placeholderComment,value:r,onInput:c=>s(c.target.value),onKeyDown:c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&p()}}),i(et,{files:f.files,onRemove:f.remove}),f.error&&i("p",{class:"fa-error",children:f.error}),i("div",{class:"fa-popover-actions",children:[o&&i("button",{type:"button",class:"fa-icon-btn fa-small"+(f.busy?" fa-busy":""),onClick:f.pick,disabled:f.busy,title:f.busy?d.uploading:d.attach,children:i(Ie,{})}),f.input,i("span",{class:"fa-actions-spacer"}),i("button",{type:"button",class:"fa-btn fa-btn-ghost",onClick:n,children:d.cancel}),i("button",{type:"button",class:"fa-btn fa-btn-primary",disabled:!r.trim()||f.busy,onClick:p,children:[i(ve,{}),d.send]})]})]})}function It(e){return e?e.replace(/%%/g,"/"):""}function ua({onReply:e}){let[t,n]=v(""),o=()=>{let a=t.trim();a&&(e(a),n(""))};return i("div",{class:"fa-thread-reply",children:[i("textarea",{class:"fa-textarea",rows:1,placeholder:d.placeholderReply,value:t,onInput:a=>n(a.target.value),onKeyDown:a=>{a.key==="Enter"&&!a.shiftKey&&(a.preventDefault(),o())}}),i("button",{type:"button",class:"fa-btn fa-btn-primary fa-btn-round",disabled:!t.trim(),onClick:o,title:d.send,children:i(ve,{})})]})}function Io({open:e,annotations:t,positions:n,activeId:o,identity:a,onSelect:r,onReply:s,onStatus:l,onEditComment:f,onDeleteComment:u,onClose:p}){let[c,g]=v("all"),[h,w]=v(null),[x,C]=v("page"),[y,k]=v(!1),[L,F]=v(null),H=M(!1);$(()=>{!e||H.current||(H.current=!0,yt().then(b=>{F(b),k(!0)}).catch(()=>k(!1)))},[e]),$(()=>{x!=="site"||!y||yt().then(F).catch(()=>C("page"))},[x,y]);let q=x==="site"&&Array.isArray(L),R=q?L:t,S=R.slice().sort((b,N)=>new Date(je(N))-new Date(je(b))),O=c==="all"?S:S.filter(b=>ae(b)===c),B={all:R.length};for(let b of G)B[b.value]=R.filter(N=>ae(N)===b.value).length;return i("aside",{class:"fa-sidebar"+(e?" fa-sidebar-open":""),children:[i("div",{class:"fa-sidebar-header",children:[i("h2",{children:d.tasks}),y&&i("div",{class:"fa-scope",children:[i("button",{type:"button",class:x==="page"?"fa-scope-active":"",onClick:()=>C("page"),children:d.thisPage}),i("button",{type:"button",class:x==="site"?"fa-scope-active":"",onClick:()=>C("site"),children:d.wholeSite})]}),i("button",{type:"button",class:"fa-icon-btn fa-small",onClick:p,children:i(ie,{})})]}),i("div",{class:"fa-filters",children:[i("button",{type:"button",class:"fa-chip"+(c==="all"?" fa-chip-active":""),onClick:()=>g("all"),children:[d.all," ",i("b",{children:B.all})]}),G.map(b=>i("button",{type:"button",class:"fa-chip"+(c===b.value?" fa-chip-active":""),style:{"--fa-chip-color":b.color},onClick:()=>g(b.value),children:[xe(b.value)," ",i("b",{children:B[b.value]})]},b.value))]}),i("ul",{class:"fa-list",children:[O.length===0&&i("li",{class:"fa-empty",children:R.length===0?d.empty:d.emptyFiltered}),O.map(b=>{let N=Ve(b),we=Math.max(0,N.length-1),se=pe(ae(b)),W=q&&b.url&&It(b.url)!==window.location.pathname,le=!W&&!!n[b.id],J=h===b.id,K=b.meta&&b.meta.screenshot;return i("li",{class:J?"fa-expanded":"",children:[i("div",{class:"fa-item"+(b.id===o?" fa-item-active":"")+(le||W?"":" fa-item-unlocated"),children:[i("button",{type:"button",class:"fa-item-main",title:le||W?"":d.notLocated,onClick:()=>{W?window.location.href=It(b.url)+"#fa="+encodeURIComponent(b.id):le?r(b.id):w(J?null:b.id)},children:[i("span",{class:"fa-item-pin",style:{"--fa-pin-color":se.color},children:b.index}),i("span",{class:"fa-item-body",children:[i("span",{class:"fa-item-text",children:(N[0]||{}).value||""}),W&&i("span",{class:"fa-item-page",children:[i(po,{})," ",It(b.url)||"/"]}),i("span",{class:"fa-item-meta",children:[i("b",{children:Sn(b).name}),i("span",{children:"\xB7"}),i("time",{children:Ge(je(b))}),we>0&&i("span",{class:"fa-item-replies",children:[i(be,{})," ",we]}),i(Tt,{meta:b.meta}),!le&&!W&&i(_o,{})]})]}),i("span",{class:"fa-item-status",style:{"--fa-chip-color":se.color},children:xe(se.value)})]}),i("button",{type:"button",class:"fa-item-chevron"+(J?" fa-open":""),onClick:()=>w(J?null:b.id),title:J?"\u2212":"+",children:i(co,{})})]}),J&&i("div",{class:"fa-item-detail",children:[!W&&i("select",{class:"fa-status-select",value:se.value,onChange:V=>l(b.id,V.target.value),children:G.map(V=>i("option",{value:V.value,children:xe(V.value)},V.value))}),K&&i("a",{class:"fa-screenshot",href:K.url,target:"_blank",rel:"noopener",title:d.screenshot,children:i("img",{src:K.url,alt:d.screenshot,loading:"lazy"})}),i(tt,{comments:N,identity:W?null:a,onEdit:(V,nt)=>f(b.id,V,nt),onDeleteComment:V=>u(b.id,V)}),!W&&i(ua,{onReply:V=>s(b.id,V,[])})]})]},b.id)})]})]})}var pa=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function Ao({onLogin:e,onCancel:t}){let[n,o]=v(""),[a,r]=v(""),[s,l]=v(null);return i("div",{class:"fa-modal-backdrop",onClick:t,children:i("form",{class:"fa-modal",onClick:u=>u.stopPropagation(),onSubmit:u=>{if(u.preventDefault(),!pa.test(a)){l(d.invalidEmail);return}e(n.trim(),a.trim())},children:[i("h3",{children:d.loginTitle}),i("p",{children:d.loginText}),i("label",{children:[d.username,i("input",{type:"text",required:!0,value:n,onInput:u=>o(u.target.value)})]}),i("label",{children:[d.email,i("input",{type:"email",required:!0,value:a,onInput:u=>r(u.target.value)})]}),s&&i("p",{class:"fa-error",children:s}),i("div",{class:"fa-popover-actions",children:[i("button",{type:"button",class:"fa-btn fa-btn-ghost",onClick:t,children:d.cancel}),i("button",{type:"submit",class:"fa-btn fa-btn-primary",disabled:!n.trim()||!a.trim(),children:d.validate})]})]})})}function Po({onDismiss:e}){return i("div",{class:"fa-intro",children:[i("span",{class:"fa-intro-icon",children:i(be,{})}),i("div",{class:"fa-intro-body",children:[i("b",{children:d.introTitle}),i("p",{children:d.introText})]}),i("button",{type:"button",class:"fa-btn fa-btn-primary",onClick:e,children:d.gotIt})]})}function Ro({positions:e}){let t=Object.entries(e).filter(([r,s])=>r!=="__draft"&&s),n=t.filter(([,r])=>r.y<0),o=t.filter(([,r])=>r.y>window.innerHeight),a=(r,s)=>{if(!r.length)return;let l=r.reduce((f,u)=>s==="up"?u[1].y>f[1].y?u:f:u[1].y<f[1].y?u:f);window.scrollBy({top:l[1].y-window.innerHeight/2,behavior:"smooth"})};return!n.length&&!o.length?null:i(ne,{children:[n.length>0&&i("button",{type:"button",class:"fa-offscreen fa-offscreen-top",onClick:()=>a(n,"up"),title:n.length+" "+d.above,children:[i(fo,{}),n.length]}),o.length>0&&i("button",{type:"button",class:"fa-offscreen fa-offscreen-bottom",onClick:()=>a(o,"down"),title:o.length+" "+d.below,children:[i(uo,{}),o.length]})]})}function da(){let e=fn(),t=U.wpUser&&U.wpEmail?{name:U.wpUser,email:U.wpEmail}:e.username&&e.email?{name:e.username,email:e.email}:null,n=U.forcedAnnotate==="true"?"comment":U.forcedAnnotate==="false"?"browse":e.annotateMode?"comment":"browse";return{cookie:e,identity:t,mode:n}}function ma(e,t){let[n,o]=v({}),a=M(new Map),r=M(0),s=Y(()=>{r.current=0;let f=a.current,u={};for(let p of e){let c=f.get(p.id);(c===void 0||c&&!c.el.isConnected)&&(c=Et(p),f.set(p.id,c));let g=c?Zn(c):null;u[p.id]=g?{...g,legacy:c.legacy}:null}if(t){let p=t.el.isConnected?t.el.getBoundingClientRect():null;u.__draft=p?{x:p.left+p.width*t.anchor.relX,y:p.top+p.height*t.anchor.relY}:null}o(u)},[e,t]),l=Y(()=>{r.current||(r.current=requestAnimationFrame(s))},[s]);return $(()=>{a.current=new Map,s()},[s]),$(()=>{window.addEventListener("scroll",l,{capture:!0,passive:!0}),window.addEventListener("resize",l);let f=new MutationObserver(l);f.observe(document.body,{subtree:!0,childList:!0,attributes:!0});let u=new ResizeObserver(l);return u.observe(document.body),()=>{window.removeEventListener("scroll",l,{capture:!0}),window.removeEventListener("resize",l),f.disconnect(),u.disconnect(),r.current&&cancelAnimationFrame(r.current)}},[l]),n}function Do(){let e=He(da,[]),[t,n]=v([]),[o,a]=v(!0),[r,s]=v(e.mode),[l,f]=v(e.identity),[u,p]=v(!0),[c,g]=v(!1),[h,w]=v(null),[x,C]=v(null),[y,k]=v(!1),[L,F]=v(e.cookie.showIntro),[H,q]=v(!0),R=ma(t,x);$(()=>{gt({username:l?l.name:!1,email:l?l.email:!1,annotateMode:r==="comment",showIntro:L,disabled:!1})},[l,r,L]),$(()=>{_t().then(m=>n(de(m))).catch(m=>console.error("[faaaster-annotate] load failed",m)).finally(()=>a(!1))},[]),$(()=>{let m=_=>{_.key==="Escape"&&(x?C(null):h?w(null):c&&g(!1))};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[x,h,c]);let S=M(t);S.current=t;let O=M(new Set),B=M(new Set),b=M(new Set),N=M(Promise.resolve()),we=M(!0),se=Y(m=>{let _=m(S.current);S.current=_,n(_)},[]),W=Y(async()=>{let m=await _t(),_=In(m,S.current,O.current,B.current,b.current);JSON.stringify(_)!==JSON.stringify(S.current)&&(S.current=_,n(_))},[]),le=Y(async()=>{try{await W()}catch{}await mn(S.current)},[W]),J=Y(async m=>{if(we.current)try{if(m.type==="delete")await dn(m.id);else{let _=S.current.find(T=>T.id===m.id);_&&await pn(_)}return}catch(_){if(!_.unsupported)throw _;we.current=!1}await le()},[le]),K=Y((m,_)=>{se(m),_.type==="delete"?B.current.add(_.id):O.current.add(_.id),N.current=N.current.then(()=>J(_)).catch(T=>console.error("[faaaster-annotate] save failed",T))},[se,J]);$(()=>{if(!U.pollInterval)return;let m=setInterval(()=>{document.visibilityState==="visible"&&(N.current=N.current.then(()=>W().catch(()=>{})))},U.pollInterval);return()=>clearInterval(m)},[W]);let V=Y(()=>l?!0:(k(!0),!1),[l]),nt=m=>{s(m),C(null),m==="comment"?(F(!1),l||k(!0)):w(null)},Uo=(m,_,T,D)=>{V()&&(w(null),C({el:m,anchor:D}))},Oo=Y(m=>{Gn().then(({blob:_,width:T,height:D})=>{let Q=_.type==="image/webp"?"webp":"jpg",Bo=new File([_],"capture-"+m.replace("#","")+"."+Q,{type:_.type});return We(Bo).then(Vo=>{K(jo=>jo.map(ot=>ot.id===m?bn(ot,{url:Vo.url,w:T,h:D}):ot),{type:"upsert",id:m})})}).catch(_=>{_&&_.unsupported?q(!1):console.warn("[faaaster-annotate] screenshot skipped",_)})},[K]),zo=(m,_)=>{if(!x||!l)return;let T=_n({text:m,creator:l,anchor:x.anchor,attachments:_});C(null),K(D=>de([...D,T]),{type:"upsert",id:T.id}),w(T.id),H&&Oo(T.id)},At=(m,_,T)=>{l&&K(D=>D.map(Q=>Q.id===m?yn(Q,_,l,T):Q),{type:"upsert",id:m})},Pt=(m,_)=>{K(T=>T.map(D=>D.id===m?xn(D,_):D),{type:"upsert",id:m})},Ho=m=>{window.confirm(d.deleteConfirm)&&(w(null),K(_=>de(_.filter(T=>T.id!==m)),{type:"delete",id:m}))},Rt=(m,_,T)=>{K(D=>D.map(Q=>Q.id===m?vn(Q,_,T):Q),{type:"upsert",id:m})},Dt=(m,_)=>{b.current.add(m+"::"+_),K(T=>T.map(D=>D.id===m?wn(D,_):D),{type:"upsert",id:m})},$o=(m,_)=>{f({name:m,email:_}),k(!1),hn(m,_)},Lt=m=>{window.innerWidth<640&&g(!1);let _=t.find(D=>D.id===m);if(!_)return;let T=Et(_);T&&(T.el.scrollIntoView({behavior:"smooth",block:"center"}),p(!0),window.setTimeout(()=>w(m),350))};$(()=>{if(o)return;let m=/#fa=([^&]+)/.exec(window.location.hash);if(!m)return;let _=decodeURIComponent(m[1]);S.current.find(T=>T.id===_)&&Lt(_)},[o]);let Wo=()=>{gt({username:l?l.name:!1,email:l?l.email:!1,annotateMode:!1,showIntro:!1,disabled:!0});let m=new URL(window.location.href);m.searchParams.delete("t"),window.location.href=m.href},ce=t.find(m=>m.id===h),Ft=h?R[h]:null;return i("div",{class:"fa-root",children:[i(vo,{active:r==="comment"&&!x&&!y,onPick:Uo}),u&&i(wo,{annotations:t,positions:R,openId:h,onOpen:m=>{C(null),w(m===h?null:m)},draftPos:x?R.__draft:null}),x&&R.__draft&&i(To,{pos:R.__draft,onSubmit:zo,onCancel:()=>C(null),uploadsEnabled:H,onUploadUnsupported:()=>q(!1)}),ce&&Ft&&i(Eo,{annotation:ce,pos:Ft,identity:l,onReply:(m,_)=>At(ce.id,m,_),onStatus:m=>Pt(ce.id,m),onDelete:()=>Ho(ce.id),onEditComment:(m,_)=>Rt(ce.id,m,_),onDeleteComment:m=>Dt(ce.id,m),onClose:()=>w(null),uploadsEnabled:H,onUploadUnsupported:()=>q(!1)}),u&&i(Ro,{positions:R}),i(Io,{open:c,annotations:t,positions:R,activeId:h,identity:l,onSelect:Lt,onReply:At,onStatus:Pt,onEditComment:Rt,onDeleteComment:Dt,onClose:()=>g(!1)}),L&&r!=="comment"&&i(Po,{onDismiss:()=>F(!1)}),y&&i(Ao,{onLogin:$o,onCancel:()=>{k(!1),s("browse")}}),i(yo,{mode:r,onMode:nt,pinsVisible:u,onTogglePins:()=>p(!u),sidebarOpen:c,onToggleSidebar:()=>g(!c),count:t.length,loading:o,onDisable:Wo})]})}var Lo=`/* All styles live inside the shadow root \u2014 they cannot leak into the page,
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
`;var Fo="faaaster-annotate-root";function Mo(){if(document.getElementById(Fo)||window!==window.top)return;let e=document.createElement("div");e.id=Fo,document.body.appendChild(e);let t=e.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=Lo,t.appendChild(n);let o=document.createElement("div");o.className="fa-app",t.appendChild(o),Yt(i(Do,{}),o)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Mo):Mo();})();
