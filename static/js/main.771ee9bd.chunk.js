(this.webpackJsonppharma=this.webpackJsonppharma||[]).push([[0],{166:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(44),i=n.n(c),o=(n(166),n(102)),s=n(17),u=n(260),l=n(279),d=n(275),j=n.p+"static/media/bgLogin.059c3243.png",p=n(16),h=n(14),b=n.n(h),x=n(18),v=n(12),f=n(268),O=n(284),m=n(280),g=n(91),y=n.p+"static/media/logo.c44ec830.png",k=n(274);var w=n(1),C=r.a.createContext({userData:{token:{accessToken:null},user:{role:null}},onSetUserData:function(){},productData:[],setProductData:function(){}}),S=function(e){var t=e.children,n=function(){var e=Object(a.useState)(function(){var e=sessionStorage.getItem("token");return JSON.parse(e)}()),t=Object(v.a)(e,2),n=t[0],r=t[1];return{setToken:function(e){sessionStorage.setItem("token",JSON.stringify(e)),r(e)},token:n}}(),r=n.token,c=n.setToken,i=Object(a.useState)(r),o=Object(v.a)(i,2),u=o[0],l=o[1],d=Object(a.useState)([]),j=Object(v.a)(d,2),p=j[0],h=j[1],b=Object(s.g)();Object(a.useEffect)((function(){var e;l(r),(null===r||void 0===r||null===(e=r.token)||void 0===e?void 0:e.accessToken)?b.push("/pharma"):b.push("/auth")}),[r,b]);var x={userData:u,onSetUserData:function(e){c(e)},setProductData:h,productData:p};return Object(w.jsx)(C.Provider,{value:x,children:t})},q=n(86),I=n.n(q),D="https://mvrpharma.com//api/";function T(e){return z.apply(this,arguments)}function z(){return(z=Object(x.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.next=3,I.a.post(D+"login",{email:n,password:a}).catch((function(){}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return A.apply(this,arguments)}function A(){return(A=Object(x.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(D+t,{headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)}}).catch((function(){}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t,n){return F.apply(this,arguments)}function F(){return(F=Object(x.a)(b.a.mark((function e(t,n,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post(D+t,a,{headers:{Authorization:"Bearer ".concat(n)}}).catch((function(){}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=n(23),E=n(3),M=n(5),W=n(293),B=n(295),R=n(256),G=n(106),L=n(292),J=n(294),V=n(291),Y=n(267),H=n(286),Q=n(258),K=n(290),X=n(257),Z=n(278),$=n(285),_=n(282),ee=n(129),te=n.n(ee),ne=n(254),ae=a.forwardRef((function(e,t){return Object(w.jsx)(ne.a,Object(U.a)({direction:"up",ref:t},e))}));function re(e){var t=e.open,n=void 0!==t&&t,a=e.handleClose,r=void 0===a?function(){}:a,c=e.handleAddRow,i=void 0===c?function(){}:c,o=e.title,s=void 0===o?"":o,u=e.page,l=void 0===u?"product":u,d=e.renderItem,j=void 0===d?function(){}:d;return Object(w.jsxs)(Z.a,{fullScreen:!0,open:n,onClose:r,TransitionComponent:ae,children:[Object(w.jsx)($.a,{sx:{position:"relative"},children:Object(w.jsxs)(_.a,{children:[Object(w.jsx)(H.a,{edge:"start",color:"inherit",onClick:r,"aria-label":"close",children:Object(w.jsx)(te.a,{})}),Object(w.jsx)(g.a,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:s}),"issue"===l&&Object(w.jsx)(K.a,{variant:"contained",onClick:r,sx:{mr:1},children:"Print & Issue"}),"product"!==l&&Object(w.jsx)(K.a,{variant:"contained",onClick:i,sx:{mr:1},children:"Add row"}),Object(w.jsx)(K.a,{variant:"contained",onClick:function(){return r("submit")},children:l.indexOf("product")>-1?"Submit":"issue"===l?"Issue":"Send Req"})]})}),j()]})}var ce=Object(M.a)(R.a)((function(e){var t,n=e.theme;return t={},Object(E.a)(t,"&.".concat(G.a.head),{backgroundColor:n.palette.primary.main,color:n.palette.common.white,fontSize:15,fontWeight:"bold",textAlign:"right",height:60}),Object(E.a)(t,"&.".concat(G.a.body),{fontSize:12}),t})),ie=Object(M.a)(V.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.secondary.main},"&:last-child td, &:last-child th":{border:0}}})),oe=[{prodName:"",intendNo:"",userName:"",createdAt:""}],se={outletUserId:"",requests:[{productId:"",quantity:""}]};var ue=n(259),le=Object(M.a)(R.a)((function(e){var t,n=e.theme;return t={},Object(E.a)(t,"&.".concat(G.a.head),{backgroundColor:n.palette.primary.main,color:n.palette.common.white,fontSize:15,fontWeight:"bold",textAlign:"right",height:60}),Object(E.a)(t,"&.".concat(G.a.body),{fontSize:12}),t})),de=Object(M.a)(V.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.secondary.main},"&:last-child td, &:last-child th":{border:0}}})),je=[{name:"",hsnCode:"",purchaseUnit:"",conversionUnit:"",unit:"",purchaseDept:"",itemCategory:"",itemType:"",itemSubType:"",itemNature:"",inStockCount:"",batch:"",packing:"",expiry:""}],pe=[{prodName:"LACOSAM 100",batch:"",packing:"",expiry:"",stockCount:"60"}];var he=Object(M.a)(R.a)((function(e){var t,n=e.theme;return t={},Object(E.a)(t,"&.".concat(G.a.head),{backgroundColor:n.palette.primary.main,color:n.palette.common.white,fontSize:15,fontWeight:"bold",textAlign:"right",height:60}),Object(E.a)(t,"&.".concat(G.a.body),{fontSize:12}),t})),be=Object(M.a)(V.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.secondary.main},"&:last-child td, &:last-child th":{border:0}}})),xe=[{prodName:"",intendNo:"",createdAt:""}],ve={requests:[{productId:"",quantity:""}]};var fe=[{name:"Store",state:"pageCollapse",views:[{path:"/Products",name:"Products",secondaryNavbar:!0,component:function(){var e,t,n,r,c=a.useContext(C),i=c.userData,o=c.setProductData,s=null!==(e=null===i||void 0===i||null===(t=i.token)||void 0===t?void 0:t.accessToken)&&void 0!==e?e:"",u=3===(null!==(n=null===i||void 0===i||null===(r=i.user)||void 0===r?void 0:r.role)&&void 0!==n?n:3),l=u?pe:je,d=a.useState("product"),j=Object(v.a)(d,2),h=j[0],O=j[1],g=a.useState(!1),y=Object(v.a)(g,2),k=y[0],S=y[1],q=a.useState(l),I=Object(v.a)(q,2),D=I[0],T=I[1],z=a.useState(l),A=Object(v.a)(z,2),F=A[0],U=A[1],E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("product"===e){var n=F[t],a=n.name,r=void 0===a?"":a,c=n.hsnCode,i=void 0===c?"":c,o=n.purchaseUnit,s=void 0===o?"":o,u=n.conversionUnit,l=void 0===u?"":u,d=n.unit,j=void 0===d?"":d,p=n.purchaseDept,h=void 0===p?"":p,b=n.itemCategory,x=void 0===b?"":b,v=n.itemType,f=void 0===v?"":v,m=n.itemSubType,g=void 0===m?"":m,y=n.itemNature,k=void 0===y?"":y,w=n.inStockCount,C=void 0===w?"":w,q=n.batch,I=void 0===q?"":q,D=n.packing,z=void 0===D?"":D,P=n.expiry,A=void 0===P?"":P;T([{name:r,hsnCode:i,purchaseUnit:s,conversionUnit:l,unit:j,purchaseDept:h,itemCategory:x,itemType:f,itemSubType:g,itemNature:k,inStockCount:C,batch:I,packing:z,expiry:A}])}O(e),S(!0)},M=function(){var e=Object(x.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P("list-products",s);case 3:if(t=e.sent,!u){e.next=10;break}return e.next=7,P("list-stocks",s);case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=[];case 11:n=e.t0,u?(null===n||void 0===n?void 0:n.data)&&U(null===n||void 0===n?void 0:n.data):(null===t||void 0===t?void 0:t.data)&&U(null===t||void 0===t?void 0:t.data),(null===t||void 0===t?void 0:t.data)&&o(null===t||void 0===t?void 0:t.data),e.next=18;break;case 16:e.prev=16,e.t1=e.catch(0);case 18:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();a.useEffect((function(){M()}),[]);var R=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={products:D},e.next=4,N("add-product",s,t);case 4:return e.next=6,M();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={products:D[0]},e.next=4,N("edit-product",s,t);case 4:return e.next=6,M();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(x.a)(b.a.mark((function e(){var t,n=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("submit"!==(t=n.length>0&&void 0!==n[0]?n[0]:"")||"products"!==h){e.next=8;break}return e.next=4,R().catch((function(){}));case 4:T(Object(p.a)(l)),S(!1),e.next=17;break;case 8:if("submit"!==t||"product"!==h){e.next=15;break}return e.next=11,G().catch((function(){}));case 11:T(Object(p.a)(l)),S(!1),e.next=17;break;case 15:T(Object(p.a)(l)),S(!1);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(x.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P("delete-product/"+t,s);case 3:return e.next=5,M();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(m.a,{sx:{width:"100%"},children:[Object(w.jsx)(re,{open:k,handleAddRow:function(){var e=Object(p.a)(D);e.push({name:"",hsnCode:"",purchaseUnit:"",conversionUnit:"",unit:"",purchaseDept:"",itemCategory:"",itemType:"",itemSubType:"",itemNature:"",inStockCount:"",batch:"",packing:"",expiry:""}),console.log(e),T(e)},handleClose:Y,title:"product"===h?"Edit Product":"Add Products",page:h,renderItem:function(){return D.map((function(e,t){return Object(w.jsxs)(m.a,{sx:{"& .MuiTextField-root":{m:2}},validate:!0,autoComplete:"off",children:[Object.keys(e).map((function(n,a){var r;return Object(w.jsx)(f.a,{required:!0,label:n,type:"name"===n?"search":"text",size:"small",value:null!==(r=e[n])&&void 0!==r?r:"",placeholder:"expiry"===n?"DD/MM/YYYY":"",onChange:function(e){return function(e,t,n){var a=Object(p.a)(D);a[t][n]=e.currentTarget.value,T(a)}(e,t,n)}},a)})),Object(w.jsx)(H.a,{color:"primary",onClick:function(){return e=t,D.splice(e,1),void T(Object(p.a)(D));var e},sx:{position:"absolute",right:5},children:Object(w.jsx)(X.a,{})}),Object(w.jsx)(Q.a,{})]},t)}))}}),Object(w.jsx)(L.a,{children:Object(w.jsxs)(W.a,{sx:{minWidth:700},size:"small","aria-label":"a dense table",children:[Object(w.jsx)(J.a,{children:Object(w.jsxs)(V.a,{children:[!u&&Object(w.jsx)(le,{children:Object(w.jsx)(K.a,{onClick:function(){return E("products")},variant:"contained",children:"Add"})}),Object.keys(l[0]).map((function(e,t){return Object(w.jsx)(le,{component:"th",children:e},t)}))]})}),Object(w.jsx)(B.a,{children:F.map((function(e,t){return Object(w.jsxs)(de,{children:[!u&&Object(w.jsxs)(le,{component:"th",scope:"row",children:[Object(w.jsx)(H.a,{color:"primary",onClick:function(){return E("product",t)},children:Object(w.jsx)(ue.a,{})}),Object(w.jsx)(H.a,{color:"primary",onClick:function(){return(null===e||void 0===e?void 0:e.id)&&Z(null===e||void 0===e?void 0:e.id)},children:Object(w.jsx)(X.a,{})})]}),Object.keys(l[0]).map((function(t,n){return Object(w.jsx)(le,{align:"right",children:e[t]},n)}))]},t)}))})]})})]})},layout:"/Pharma"},{path:"/IssueGoods",name:"Issue Goods",secondaryNavbar:!0,component:function(){var e,t,n=a.useContext(C),r=n.userData,c=n.productData,i=null!==(e=null===r||void 0===r||null===(t=r.token)||void 0===t?void 0:t.accessToken)&&void 0!==e?e:"",o=a.useState(se),s=Object(v.a)(o,2),u=s[0],l=s[1],d=a.useState(oe),j=Object(v.a)(d,2),p=j[0],h=j[1],O=a.useState([]),g=Object(v.a)(O,2),y=g[0],k=g[1],S=a.useState(!1),q=Object(v.a)(S,2),I=q[0],D=q[1],T=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P("list-stocks-requests",i);case 3:(null===(t=e.sent)||void 0===t?void 0:t.data)&&h(null===t||void 0===t?void 0:t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P("outlet-users",i);case 3:(null===(t=e.sent)||void 0===t?void 0:t.data)&&k(null===t||void 0===t?void 0:t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();a.useEffect((function(){T(),z()}),[]);var A=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=u,e.next=4,N("add-product-to-outlet",i,t);case 4:return e.next=6,T();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(x.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P("issue-request-product/"+t,i);case 3:return e.next=5,T();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(x.a)(b.a.mark((function e(){var t=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("submit"!==(t.length>0&&void 0!==t[0]?t[0]:"")){e.next=4;break}return e.next=4,A().catch((function(){}));case 4:l(se),D(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)(m.a,{sx:{width:"100%"},children:[Object(w.jsx)(re,{open:I,handleAddRow:function(){var e=Object(U.a)({},u);e.requests.push({productId:"",quantity:""}),l(e)},handleClose:E,renderItem:function(){var e,t=function(e,t,n){"productId"===n&&console.warn(e);var a=Object(U.a)({},u);-1===t?a.outletUserId=e:"productId"===n?a.requests[t].productId=e:a.requests[t][n]=e.target.value,l(a)};return Object(w.jsxs)(m.a,{component:"form",sx:{"& .MuiTextField-root":{m:2}},validate:!0,autoComplete:"off",children:[Object(w.jsx)(Y.a,{sx:{width:"15%"},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,n){return(null===n||void 0===n?void 0:n.id)&&t(null===n||void 0===n?void 0:n.id,-1,"outletUserId")},options:null===y||void 0===y?void 0:y.map((function(e){return{label:e.name,id:e.id}})),renderInput:function(e){return Object(w.jsx)(f.a,Object(U.a)(Object(U.a)({},e),{},{label:"Outlet User",size:"small"}))}}),null===u||void 0===u||null===(e=u.requests)||void 0===e?void 0:e.map((function(e,n){var a;return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(w.jsx)(Y.a,{sx:{width:"15%",mr:2},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,a){return(null===a||void 0===a?void 0:a.id)&&t(null===a||void 0===a?void 0:a.id,n,"productId")},options:null===c||void 0===c?void 0:c.map((function(e,t){return{label:e.name+" "+e.id,id:e.id}})),renderInput:function(e){return Object(w.jsx)(f.a,Object(U.a)(Object(U.a)({},e),{},{label:"Product",size:"small"}))}}),Object(w.jsx)(f.a,{required:!0,label:"Quantity",type:"search",size:"small",value:null!==(a=e.quantity)&&void 0!==a?a:"",onChange:function(e){return t(e,n,"quantity")}}),Object(w.jsx)(H.a,{color:"primary",onClick:function(){return function(e){var t=Object(U.a)({},u);t.requests.splice(e,1),l(t)}(n)},sx:{position:"absolute",right:5},children:Object(w.jsx)(X.a,{})})]}),Object(w.jsx)(Q.a,{})]},n)}))]})},title:"Issue Goods",page:"issue"}),Object(w.jsx)(m.a,{sx:{bgcolor:"#FBF7F0",p:2,display:"flex",justifyContent:"end"},children:Object(w.jsx)(K.a,{variant:"outlined",onClick:function(){D(!0)},children:"New issue"})}),Object(w.jsx)(L.a,{children:Object(w.jsxs)(W.a,{sx:{minWidth:700},stickyHeader:!0,"aria-label":"sticky table",children:[Object(w.jsx)(J.a,{children:Object(w.jsxs)(V.a,{children:[Object(w.jsx)(ce,{align:"right",children:"Status"}),Object.keys(oe[0]).map((function(e,t){return Object(w.jsx)(ce,{align:"right",children:e},t)}))]})}),Object(w.jsx)(B.a,{children:p.map((function(e,t){return Object(w.jsxs)(ie,{children:[Object(w.jsx)(ce,{align:"right",children:"requested"===(null===e||void 0===e?void 0:e.requestStatus)?Object(w.jsx)(K.a,{variant:"contained",onClick:function(){return F(null===e||void 0===e?void 0:e.id)},children:"Accept"}):null===e||void 0===e?void 0:e.requestStatus}),Object.keys(oe[0]).map((function(t,n){return Object(w.jsx)(ce,{align:"right",children:e[t]},n)}))]},t)}))})]})})]})},layout:"/Pharma"},{path:"/StoreIndent",name:"Store Indent",secondaryNavbar:!0,component:function(){var e,t,n=a.useContext(C),r=n.userData,c=n.productData,i=null!==(e=null===r||void 0===r||null===(t=r.token)||void 0===t?void 0:t.accessToken)&&void 0!==e?e:"",o=a.useState(ve),s=Object(v.a)(o,2),u=s[0],l=s[1],d=a.useState(xe),j=Object(v.a)(d,2),p=j[0],h=j[1],O=a.useState(!1),g=Object(v.a)(O,2),y=g[0],k=g[1],S=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P("list-stocks-requests-outlet",i);case 3:(null===(t=e.sent)||void 0===t?void 0:t.data)&&h(null===t||void 0===t?void 0:t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();a.useEffect((function(){S()}),[]);var q=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=u,e.next=4,N("request-product-by-outlet",i,t);case 4:return e.next=6,S();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(x.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=u,e.next=4,P("request-product-delivered/"+t,i,n);case 4:return e.next=6,S();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(x.a)(b.a.mark((function e(){var t=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("submit"!==(t.length>0&&void 0!==t[0]?t[0]:"")){e.next=4;break}return e.next=4,q().catch((function(){}));case 4:l(ve),k(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)(m.a,{sx:{width:"100%"},children:[Object(w.jsx)(re,{open:y,handleAddRow:function(){var e=Object(U.a)({},u);e.requests.push({productId:"",quantity:""}),l(e)},handleClose:D,renderItem:function(){var e,t=function(e,t,n){var a=Object(U.a)({},u);"productId"===n?a.requests[t].productId=e:a.requests[t][n]=e.target.value,l(a)};return Object(w.jsx)(m.a,{component:"form",sx:{"& .MuiTextField-root":{m:2}},validate:!0,autoComplete:"off",children:null===u||void 0===u||null===(e=u.requests)||void 0===e?void 0:e.map((function(e,n){var a;return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(w.jsx)(Y.a,{sx:{width:"15%",mr:2},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,a){return(null===a||void 0===a?void 0:a.id)&&t(null===a||void 0===a?void 0:a.id,n,"productId")},options:null===c||void 0===c?void 0:c.map((function(e,t){return{label:e.name+" "+e.id,id:e.id}})),renderInput:function(e){return Object(w.jsx)(f.a,Object(U.a)(Object(U.a)({},e),{},{label:"Product",size:"small"}))}}),Object(w.jsx)(f.a,{required:!0,label:"Quantity",type:"search",size:"small",value:null!==(a=e.quantity)&&void 0!==a?a:"",onChange:function(e){return t(e,n,"quantity")}}),Object(w.jsx)(H.a,{color:"primary",onClick:function(){return function(e){var t=Object(U.a)({},u);t.requests.splice(e,1),l(t)}(n)},sx:{position:"absolute",right:5},children:Object(w.jsx)(X.a,{})})]}),Object(w.jsx)(Q.a,{})]},n)}))})},title:"Store Indent",page:"indent"}),Object(w.jsx)(m.a,{sx:{bgcolor:"#FBF7F0",p:2,display:"flex",justifyContent:"end"},children:Object(w.jsx)(K.a,{variant:"outlined",onClick:function(){k(!0)},children:"Request"})}),Object(w.jsx)(L.a,{children:Object(w.jsxs)(W.a,{sx:{minWidth:700},stickyHeader:!0,"aria-label":"sticky table",children:[Object(w.jsx)(J.a,{children:Object(w.jsxs)(V.a,{children:[Object(w.jsx)(he,{align:"right",children:"Status"}),Object.keys(xe[0]).map((function(e,t){return Object(w.jsx)(he,{align:"right",children:e},t)}))]})}),Object(w.jsx)(B.a,{children:p.map((function(e,t){return Object(w.jsxs)(be,{children:[Object(w.jsx)(he,{align:"right",children:"issued"===(null===e||void 0===e?void 0:e.requestStatus)?Object(w.jsx)(K.a,{variant:"contained",onClick:function(){return I(null===e||void 0===e?void 0:e.id)},children:"Delivered"}):null===e||void 0===e?void 0:e.requestStatus}),Object.keys(xe[0]).map((function(t,n){return Object(w.jsx)(he,{align:"right",children:e[t]},n)}))]},t)}))})]})})]})},layout:"/Pharma"}]},{name:"Departments",state:"pageCollapse",views:[{path:"/Departments",name:"Departments",secondaryNavbar:!0,component:function(){return Object(w.jsx)("div",{})},layout:"/Pharma"}]},{path:"/signin",name:"Sign In",component:function(){var e=a.useState({email:"",password:""}),t=Object(v.a)(e,2),n=t[0],r=t[1],c=a.useState(!1),i=Object(v.a)(c,2),o=i[0],s=i[1],u=a.useContext(C).onSetUserData,l=function(){var e=Object(x.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,T(n);case 4:(a=e.sent)&&u(a.data),s(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.warn("s"),s(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{n[t]=e.target.value,r.apply(void 0,Object(p.a)(n))}catch(a){}};return Object(w.jsxs)(m.a,{sx:{my:8,mx:10,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(w.jsx)("img",{src:y,alt:"",style:{width:250,height:120,marginBottom:20}}),Object(w.jsx)(g.a,{component:"h1",variant:"h5",color:"primary",sx:{alignSelf:"flex-Start"},children:"Login"}),Object(w.jsxs)(m.a,{component:"form",noValidate:!1,sx:{mt:1},children:[Object(w.jsx)(f.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",type:"email",autoFocus:!0,onChange:function(e){return j(e,"email")}}),Object(w.jsx)(f.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){return j(e,"password")},autoComplete:"current-password"}),Object(w.jsx)(k.a,{type:"submit",loading:o,variant:"outlined",fullWidth:!0,sx:{mt:2,mb:2,height:50},onClick:l,children:"Sign In"}),Object(w.jsx)(d.a,{container:!0,children:Object(w.jsx)(d.a,{item:!0,xs:!0,children:Object(w.jsx)(O.a,{href:"#",variant:"body2",children:"Forgot password?"})})})]})]})},layout:"/auth"}];function Oe(){return Object(w.jsxs)(d.a,{container:!0,component:"main",sx:{height:"100vh"},children:[Object(w.jsx)(u.a,{}),Object(w.jsx)(d.a,{item:!0,xs:!1,sm:4,md:6,sx:{backgroundImage:"url(".concat(j,")"),backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(w.jsx)(d.a,{item:!0,xs:12,sm:8,md:6,component:l.a,elevation:6,square:!0,children:"/auth/full-screen-maps"!==window.location.pathname?Object(w.jsxs)(s.d,{children:[function e(t){return t.map((function(t,n){return t.state?e(t.views):"/auth"===t.layout?Object(w.jsx)(s.b,{path:t.layout+t.path,component:t.component},n):null}))}(fe),Object(w.jsx)(s.a,{from:"/auth",to:"/auth/signin"})]}):null})]})}var me=n(283),ge=n(281),ye=n(271),ke=n(265),we=n(266),Ce=n(273),Se=n(287),qe=n(137),Ie=n(107),De=n.n(Ie),Te=n(132),ze=n.n(Te),Pe=n(133),Ae=n.n(Pe),Ne=n(134),Fe=n.n(Ne);function Ue(){var e,t,n=a.useContext(C).userData,r=null!==(e=null===n||void 0===n||null===(t=n.user)||void 0===t?void 0:t.name)&&void 0!==e?e:3,c=a.useState(null),i=Object(v.a)(c,2),o=i[0],u=i[1],l=a.useState(null),d=Object(v.a)(l,2),j=d[0],p=d[1],h=Object(s.g)(),b=Boolean(o),x=Boolean(j),f=function(e){u(e.currentTarget)},O=function(){p(null)},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";"SignOut"===e&&(h.push("/auth/"),sessionStorage.clear()),u(null),O()},k="primary-search-account-menu",S=Object(w.jsx)(qe.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:k,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:y,children:Object(w.jsx)(Se.a,{onClick:function(){return y("SignOut")},children:"Sign Out"})}),q="primary-search-account-menu-mobile",I=Object(w.jsxs)(qe.a,{anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},id:q,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:O,children:[Object(w.jsxs)(Se.a,{children:[Object(w.jsx)(H.a,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:Object(w.jsx)(Ce.a,{badgeContent:4,color:"error",children:Object(w.jsx)(ze.a,{})})}),Object(w.jsx)("p",{children:"Messages"})]}),Object(w.jsxs)(Se.a,{children:[Object(w.jsx)(H.a,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:Object(w.jsx)(Ce.a,{badgeContent:17,color:"error",children:Object(w.jsx)(Ae.a,{})})}),Object(w.jsx)("p",{children:"Notifications"})]}),Object(w.jsxs)(Se.a,{onClick:f,children:[Object(w.jsx)(H.a,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(w.jsx)(De.a,{})}),Object(w.jsx)("p",{children:"Profile"})]})]});return Object(w.jsxs)(m.a,{sx:{flexGrow:1},children:[Object(w.jsx)($.a,{position:"fixed",sx:{width:"calc(100% - ".concat(240,"px)"),mr:"".concat(240,"px")},color:"default",children:Object(w.jsxs)(_.a,{children:[Object(w.jsx)(m.a,{sx:{flexGrow:1}}),Object(w.jsx)(m.a,{sx:{display:{xs:"none",md:"flex"}},children:Object(w.jsxs)(H.a,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":k,"aria-haspopup":"true",onClick:f,color:"inherit",children:[Object(w.jsx)(De.a,{}),Object(w.jsx)(g.a,{sx:{ml:1},children:r})]})}),Object(w.jsx)(m.a,{sx:{display:{xs:"flex",md:"none"}},children:Object(w.jsx)(H.a,{size:"large","aria-label":"show more","aria-controls":q,"aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit",children:Object(w.jsx)(Fe.a,{})})})]})}),I,S]})}var Ee=n(272),Me=n(288),We=n(289),Be=n(135),Re=n.n(Be);function Ge(e){var t=e.children,n=e.title;e.active;return Object(w.jsx)("div",{children:Object(w.jsxs)(Ee.a,{elevation:0,sx:{bgcolor:"rgba(31, 160, 132, 0.03)",borderRadius:0},defaultExpanded:!0,children:[Object(w.jsx)(Me.a,{expandIcon:Object(w.jsx)(Re.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(w.jsx)(g.a,{style:{fontWeight:"bold"},children:n})}),Object(w.jsx)(We.a,{children:t})]})})}var Le=n(261),Je=n(262),Ve=n(263),Ye=n(264);function He(e){var t,n,r=e.children,c=e.routes,i=a.useContext(C).userData,o=3===(null!==(t=null===i||void 0===i||null===(n=i.user)||void 0===n?void 0:n.role)&&void 0!==t?t:3),l=a.useState(1),d=Object(v.a)(l,2),j=d[0],p=d[1],h=Object(s.g)(),b=function(e,t){return 0===e?0===t?Object(w.jsx)(Le.a,{}):1===t?Object(w.jsx)(Je.a,{}):Object(w.jsx)(Ve.a,{}):Object(w.jsx)(Ye.a,{})};return Object(w.jsxs)(m.a,{sx:{display:"flex"},children:[Object(w.jsx)(u.a,{}),Object(w.jsx)(Ue,{}),Object(w.jsx)(m.a,{component:"main",sx:{display:"flex",width:window.innerWidth-240,height:window.innerHeight-64,mt:8},children:r}),Object(w.jsxs)(me.a,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box",bgcolor:"rgba(31, 160, 132, 0.1)"}},variant:"permanent",anchor:"right",children:[Object(w.jsx)(_.a,{style:{justifyContent:"center"},children:Object(w.jsx)("img",{src:y,alt:"",style:{width:120,height:60}})}),c.map((function(e,t){return(null===e||void 0===e?void 0:e.layout)?null:Object(w.jsx)(Ge,{active:0===t,title:null===e||void 0===e?void 0:e.name,children:Object(w.jsx)(ge.a,{children:null===e||void 0===e?void 0:e.views.map((function(e,n){return o&&"Issue Goods"===e.name?null:o||"Store Indent"!==e.name?Object(w.jsxs)(ye.a,{button:!0,selected:j===e.layout+e.path,onClick:function(){return function(e){p(e),h.push(e)}(e.layout+e.path)},children:[Object(w.jsx)(ke.a,{children:b(t,n)}),Object(w.jsx)(we.a,{primary:null===e||void 0===e?void 0:e.name})]},null===e||void 0===e?void 0:e.name):null}))})},t)}))]})]})}var Qe=function(){return Object(w.jsx)(He,{routes:fe,children:"/Pharma/full-screen-maps"!==window.location.pathname?Object(w.jsxs)(s.d,{children:[function e(t){return t.map((function(t,n){return t.state?e(t.views):"/Pharma"===t.layout?Object(w.jsx)(s.b,{path:t.layout+t.path,component:t.component},n):null}))}(fe),Object(w.jsx)(s.a,{from:"/Pharma",to:"/Pharma/Products"})]}):null})},Ke=(n(196),n(136)),Xe=n(276),Ze=function(e){var t=e.children,n=Object(Ke.a)({palette:{primary:{light:"#757ce8",main:"#1FA084",dark:"rgba(255,255,255,0.1)",contrastText:"#fff"},secondary:{light:"#ff7961",main:"rgba(31, 160, 132, 0.1)",dark:"#ba000d",contrastText:"#000"}}});return Object(w.jsx)(Xe.a,{theme:n,children:t})};var $e=function(){return Object(w.jsx)(Ze,{children:Object(w.jsx)(o.a,{children:Object(w.jsx)(s.d,{children:Object(w.jsxs)(S,{children:[Object(w.jsx)(s.b,{path:"/auth",component:Oe}),Object(w.jsx)(s.b,{path:"/pharma",component:Qe}),Object(w.jsx)(s.a,{from:"/",to:"/pharma/Store/Products"})]})})})})},_e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,296)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)($e,{})}),document.getElementById("root")),_e()}},[[197,1,2]]]);
//# sourceMappingURL=main.771ee9bd.chunk.js.map