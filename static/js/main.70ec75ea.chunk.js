(this.webpackJsonppharma=this.webpackJsonppharma||[]).push([[0],{166:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(44),i=n.n(c),o=(n(166),n(102)),s=n(17),u=n(260),l=n(279),d=n(275),p=n.p+"static/media/bgLogin.059c3243.png",j=n(16),h=n(14),b=n.n(h),x=n(18),v=n(12),f=n(268),O=n(284),m=n(280),g=n(91),y=n.p+"static/media/logo.c44ec830.png",k=n(274);var w=n(1),C=r.a.createContext({userData:{token:{accessToken:null},user:{role:null}},onSetUserData:function(){},productData:[],setProductData:function(){}}),S=function(e){var t=e.children,n=function(){var e=Object(a.useState)(function(){var e=sessionStorage.getItem("token");return JSON.parse(e)}()),t=Object(v.a)(e,2),n=t[0],r=t[1];return{setToken:function(e){sessionStorage.setItem("token",JSON.stringify(e)),r(e)},token:n}}(),r=n.token,c=n.setToken,i=Object(a.useState)(r),o=Object(v.a)(i,2),u=o[0],l=o[1],d=Object(a.useState)([]),p=Object(v.a)(d,2),j=p[0],h=p[1],b=Object(s.g)();Object(a.useEffect)((function(){var e;l(r),(null===r||void 0===r||null===(e=r.token)||void 0===e?void 0:e.accessToken)?b.push("/pharma"):b.push("/auth")}),[r,b]);var x={userData:u,onSetUserData:function(e){c(e)},setProductData:h,productData:j};return Object(w.jsx)(C.Provider,{value:x,children:t})},I=n(86),q=n.n(I),D="https://mvrpharma.com/api/";function P(e){return T.apply(this,arguments)}function T(){return(T=Object(x.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.next=3,q.a.post(D+"login",{email:n,password:a}).catch((function(){}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t){return N.apply(this,arguments)}function N(){return(N=Object(x.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get(D+t,{headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)}}).catch((function(){}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t,n){return E.apply(this,arguments)}function E(){return(E=Object(x.a)(b.a.mark((function e(t,n,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.post(D+t,a,{headers:{Authorization:"Bearer ".concat(n)}}).catch((function(){}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=n(23),F=n(3),B=n(5),W=n(293),M=n(295),R=n(256),G=n(106),H=n(292),J=n(294),L=n(291),V=n(267),Y=n(286),Q=n(258),K=n(290),X=n(257),Z=n(278),$=n(285),_=n(282),ee=n(129),te=n.n(ee),ne=n(254),ae=a.forwardRef((function(e,t){return Object(w.jsx)(ne.a,Object(U.a)({direction:"up",ref:t},e))}));function re(e){var t=e.open,n=void 0!==t&&t,a=e.handleClose,r=void 0===a?function(){}:a,c=e.handleAddRow,i=void 0===c?function(){}:c,o=e.title,s=void 0===o?"":o,u=e.page,l=void 0===u?"product":u,d=e.renderItem,p=void 0===d?function(){}:d;return Object(w.jsxs)(Z.a,{fullScreen:!0,open:n,onClose:r,TransitionComponent:ae,children:[Object(w.jsx)($.a,{sx:{position:"relative"},children:Object(w.jsxs)(_.a,{children:[Object(w.jsx)(Y.a,{edge:"start",color:"inherit",onClick:r,"aria-label":"close",children:Object(w.jsx)(te.a,{})}),Object(w.jsx)(g.a,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:s}),"issue"===l&&Object(w.jsx)(K.a,{variant:"contained",onClick:r,sx:{mr:1},children:"Print & Issue"}),"product"!==l&&Object(w.jsx)(K.a,{variant:"contained",onClick:i,sx:{mr:1},children:"Add row"}),Object(w.jsx)(K.a,{variant:"contained",onClick:function(){return r("submit")},children:l.indexOf("product")>-1?"Submit":"issue"===l?"Issue":"Send Req"})]})}),p()]})}var ce=Object(B.a)(R.a)((function(e){var t,n=e.theme;return t={},Object(F.a)(t,"&.".concat(G.a.head),{backgroundColor:n.palette.primary.main,color:n.palette.common.white,fontSize:15,fontWeight:"bold",textAlign:"right",height:60}),Object(F.a)(t,"&.".concat(G.a.body),{fontSize:12}),t})),ie=Object(B.a)(L.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.secondary.main},"&:last-child td, &:last-child th":{border:0}}})),oe=[{prodName:"",intendNo:"",userName:"",createdAt:""}],se={outletUserId:"",requests:[{productId:"",quantity:""}]},ue=[{Product:"",IntendNo:"",Outlet:"",CreatedAt:""}];var le=n(259);var de=Object(B.a)(R.a)((function(e){var t,n=e.theme;return t={},Object(F.a)(t,"&.".concat(G.a.head),{backgroundColor:n.palette.primary.main,color:n.palette.common.white,fontSize:15,fontWeight:"bold",textAlign:"right",height:60}),Object(F.a)(t,"&.".concat(G.a.body),{fontSize:12}),t})),pe=Object(B.a)(L.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.secondary.main},"&:last-child td, &:last-child th":{border:0}}})),je=[{name:"",hsnCode:"",purchaseUnit:"",conversionUnit:"",unit:"",purchaseDept:"",itemCategory:"",itemType:"",itemSubType:"",itemNature:"",inStockCount:"",batch:"",packing:"",expiry:""}],he=[{Name:"",HSN:"",PUnit:"",CUnit:"",Unit:"",PDept:"",Category:"",Type:"",SubType:"",Nature:"",Stock:"",Batch:"",Packing:"",Expiry:""}],be=[{prodName:"",batch:"",packing:"",expiry:"",stockCount:""}],xe=[{Product:"",Batch:"",Packing:"",Expiry:"",Stock:""}];var ve=Object(B.a)(R.a)((function(e){var t,n=e.theme;return t={},Object(F.a)(t,"&.".concat(G.a.head),{backgroundColor:n.palette.primary.main,color:n.palette.common.white,fontSize:15,fontWeight:"bold",textAlign:"right",height:60}),Object(F.a)(t,"&.".concat(G.a.body),{fontSize:12}),t})),fe=Object(B.a)(L.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.secondary.main},"&:last-child td, &:last-child th":{border:0}}})),Oe=[{prodName:"",intendNo:"",createdAt:""}],me=[{Product:"",IntendNo:"",CreatedAt:""}],ge={requests:[{productId:"",quantity:""}]};var ye=[{name:"Store",state:"pageCollapse",views:[{path:"/Products",name:"Items",secondaryNavbar:!0,component:function(){var e,t,n,r,c=a.useContext(C),i=c.userData,o=c.setProductData,s=null!==(e=null===i||void 0===i||null===(t=i.token)||void 0===t?void 0:t.accessToken)&&void 0!==e?e:"",u=3===(null!==(n=null===i||void 0===i||null===(r=i.user)||void 0===r?void 0:r.role)&&void 0!==n?n:3),l=u?be:je,d=u?xe:he,p=a.useState("product"),h=Object(v.a)(p,2),O=h[0],g=h[1],y=a.useState(!1),k=Object(v.a)(y,2),S=k[0],I=k[1],q=a.useState(l),D=Object(v.a)(q,2),P=D[0],T=D[1],N=a.useState(l),E=Object(v.a)(N,2),U=E[0],F=E[1],B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("product"===e){var n=U[t],a=n.name,r=void 0===a?"":a,c=n.hsnCode,i=void 0===c?"":c,o=n.purchaseUnit,s=void 0===o?"":o,u=n.conversionUnit,l=void 0===u?"":u,d=n.unit,p=void 0===d?"":d,j=n.purchaseDept,h=void 0===j?"":j,b=n.itemCategory,x=void 0===b?"":b,v=n.itemType,f=void 0===v?"":v,O=n.itemSubType,m=void 0===O?"":O,y=n.itemNature,k=void 0===y?"":y,w=n.inStockCount,C=void 0===w?"":w,S=n.batch,q=void 0===S?"":S,D=n.packing,P=void 0===D?"":D,z=n.expiry,N=void 0===z?"":z;T([{name:r,hsnCode:i,purchaseUnit:s,conversionUnit:l,unit:p,purchaseDept:h,itemCategory:x,itemType:f,itemSubType:m,itemNature:k,inStockCount:C,batch:q,packing:P,expiry:N}])}g(e),I(!0)},R=function(){var e=Object(x.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z("list-products",s);case 3:if(t=e.sent,!u){e.next=10;break}return e.next=7,z("list-stocks",s);case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=[];case 11:n=e.t0,u?(null===n||void 0===n?void 0:n.data)&&F(null===n||void 0===n?void 0:n.data):(null===t||void 0===t?void 0:t.data)&&F(null===t||void 0===t?void 0:t.data),(null===t||void 0===t?void 0:t.data)&&o(null===t||void 0===t?void 0:t.data),e.next=18;break;case 16:e.prev=16,e.t1=e.catch(0);case 18:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();a.useEffect((function(){R()}),[]);var G=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={products:P},e.next=4,A("add-product",s,t);case 4:return e.next=6,R();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={products:P[0]},e.next=4,A("edit-product",s,t);case 4:return e.next=6,R();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(x.a)(b.a.mark((function e(){var t,n=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("submit"!==(t=n.length>0&&void 0!==n[0]?n[0]:"")||"products"!==O){e.next=8;break}return e.next=4,G().catch((function(){}));case 4:T(Object(j.a)(l)),I(!1),e.next=17;break;case 8:if("submit"!==t||"product"!==O){e.next=15;break}return e.next=11,V().catch((function(){}));case 11:T(Object(j.a)(l)),I(!1),e.next=17;break;case 15:T(Object(j.a)(l)),I(!1);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(x.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z("delete-product/"+t,s);case 3:return e.next=5,R();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(m.a,{sx:{width:"100%"},children:[Object(w.jsx)(re,{open:S,handleAddRow:function(){var e=Object(j.a)(P);e.push({name:"",hsnCode:"",purchaseUnit:"",conversionUnit:"",unit:"",purchaseDept:"",itemCategory:"",itemType:"",itemSubType:"",itemNature:"",inStockCount:"",batch:"",packing:"",expiry:""}),console.log(e),T(e)},handleClose:Z,title:"product"===O?"Edit Product":"Add Products",page:O,renderItem:function(){return P.map((function(e,t){return Object(w.jsxs)(m.a,{sx:{"& .MuiTextField-root":{m:2}},validate:!0,autoComplete:"off",children:[Object.keys(e).map((function(n,a){var r;return Object(w.jsx)(f.a,{required:!0,label:n,type:"name"===n?"search":"text",size:"small",value:null!==(r=e[n])&&void 0!==r?r:"",placeholder:"expiry"===n?"DD/MM/YYYY":"",onChange:function(e){return function(e,t,n){var a=Object(j.a)(P);a[t][n]=e.currentTarget.value,T(a)}(e,t,n)}},a)})),Object(w.jsx)(Y.a,{color:"primary",onClick:function(){return e=t,P.splice(e,1),void T(Object(j.a)(P));var e},sx:{position:"absolute",right:5},children:Object(w.jsx)(X.a,{})}),Object(w.jsx)(Q.a,{})]},t)}))}}),Object(w.jsx)(H.a,{children:Object(w.jsxs)(W.a,{sx:{minWidth:700},size:"small","aria-label":"a dense table",children:[Object(w.jsx)(J.a,{children:Object(w.jsxs)(L.a,{children:[!u&&Object(w.jsx)(de,{children:Object(w.jsx)(K.a,{onClick:function(){return B("products")},variant:"contained",children:"Add"})}),Object.keys(d[0]).map((function(e,t){return Object(w.jsx)(de,{component:"th",children:(n=e,n.charAt(0).toUpperCase()+n.slice(1))},t);var n}))]})}),Object(w.jsx)(M.a,{children:U.map((function(e,t){return Object(w.jsxs)(pe,{children:[!u&&Object(w.jsxs)(de,{component:"th",scope:"row",children:[Object(w.jsx)(Y.a,{color:"primary",onClick:function(){return B("product",t)},children:Object(w.jsx)(le.a,{})}),Object(w.jsx)(Y.a,{color:"primary",onClick:function(){return(null===e||void 0===e?void 0:e.id)&&$(null===e||void 0===e?void 0:e.id)},children:Object(w.jsx)(X.a,{})})]}),Object.keys(l[0]).map((function(t,n){return Object(w.jsx)(de,{align:"right",children:e[t]},n)}))]},t)}))})]})})]})},layout:"/Pharma"},{path:"/IssueGoods",name:"Issue Goods",secondaryNavbar:!0,component:function(){var e,t,n=a.useContext(C),r=n.userData,c=n.productData,i=null!==(e=null===r||void 0===r||null===(t=r.token)||void 0===t?void 0:t.accessToken)&&void 0!==e?e:"",o=a.useState(se),s=Object(v.a)(o,2),u=s[0],l=s[1],d=a.useState(oe),p=Object(v.a)(d,2),j=p[0],h=p[1],O=a.useState([]),g=Object(v.a)(O,2),y=g[0],k=g[1],S=a.useState(!1),I=Object(v.a)(S,2),q=I[0],D=I[1],P=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z("list-stocks-requests",i);case 3:(null===(t=e.sent)||void 0===t?void 0:t.data)&&h(null===t||void 0===t?void 0:t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z("outlet-users",i);case 3:(null===(t=e.sent)||void 0===t?void 0:t.data)&&k(null===t||void 0===t?void 0:t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();a.useEffect((function(){P(),T()}),[]);var N=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=u,e.next=4,A("add-product-to-outlet",i,t);case 4:return e.next=6,P();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(x.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z("issue-request-product/"+t,i);case 3:return e.next=5,P();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(x.a)(b.a.mark((function e(){var t=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("submit"!==(t.length>0&&void 0!==t[0]?t[0]:"")){e.next=4;break}return e.next=4,N().catch((function(){}));case 4:l(se),D(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)(m.a,{sx:{width:"100%"},children:[Object(w.jsx)(re,{open:q,handleAddRow:function(){var e=Object(U.a)({},u);e.requests.push({productId:"",quantity:""}),l(e)},handleClose:F,renderItem:function(){var e,t=function(e,t,n){"productId"===n&&console.warn(e);var a=Object(U.a)({},u);-1===t?a.outletUserId=e:"productId"===n?a.requests[t].productId=e:a.requests[t][n]=e.target.value,l(a)};return Object(w.jsxs)(m.a,{component:"form",sx:{"& .MuiTextField-root":{m:2}},validate:!0,autoComplete:"off",children:[Object(w.jsx)(V.a,{sx:{width:"15%"},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,n){return(null===n||void 0===n?void 0:n.id)&&t(null===n||void 0===n?void 0:n.id,-1,"outletUserId")},options:null===y||void 0===y?void 0:y.map((function(e){return{label:e.name,id:e.id}})),renderInput:function(e){return Object(w.jsx)(f.a,Object(U.a)(Object(U.a)({},e),{},{label:"Outlet User",size:"small"}))}}),null===u||void 0===u||null===(e=u.requests)||void 0===e?void 0:e.map((function(e,n){var a;return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(w.jsx)(V.a,{sx:{width:"15%",mr:2},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,a){return(null===a||void 0===a?void 0:a.id)&&t(null===a||void 0===a?void 0:a.id,n,"productId")},options:null===c||void 0===c?void 0:c.map((function(e,t){return{label:e.name+" "+e.id,id:e.id}})),renderInput:function(e){return Object(w.jsx)(f.a,Object(U.a)(Object(U.a)({},e),{},{label:"Product",size:"small"}))}}),Object(w.jsx)(f.a,{required:!0,label:"Quantity",type:"search",size:"small",value:null!==(a=e.quantity)&&void 0!==a?a:"",onChange:function(e){return t(e,n,"quantity")}}),Object(w.jsx)(Y.a,{color:"primary",onClick:function(){return function(e){var t=Object(U.a)({},u);t.requests.splice(e,1),l(t)}(n)},sx:{position:"absolute",right:5},children:Object(w.jsx)(X.a,{})})]}),Object(w.jsx)(Q.a,{})]},n)}))]})},title:"Issue Goods",page:"issue"}),Object(w.jsx)(m.a,{sx:{bgcolor:"#FBF7F0",p:2,display:"flex",justifyContent:"end"},children:Object(w.jsx)(K.a,{variant:"outlined",onClick:function(){D(!0)},children:"New issue"})}),Object(w.jsx)(H.a,{children:Object(w.jsxs)(W.a,{sx:{minWidth:700},stickyHeader:!0,"aria-label":"sticky table",children:[Object(w.jsx)(J.a,{children:Object(w.jsxs)(L.a,{children:[Object(w.jsx)(ce,{align:"right",children:"Status"}),Object.keys(ue[0]).map((function(e,t){return Object(w.jsx)(ce,{align:"right",children:e},t)}))]})}),Object(w.jsx)(M.a,{children:j.map((function(e,t){return Object(w.jsxs)(ie,{children:[Object(w.jsx)(ce,{align:"right",children:"requested"===(null===e||void 0===e?void 0:e.requestStatus)?Object(w.jsx)(K.a,{variant:"contained",onClick:function(){return E(null===e||void 0===e?void 0:e.id)},children:"Accept"}):null===e||void 0===e?void 0:e.requestStatus}),Object.keys(oe[0]).map((function(t,n){return Object(w.jsx)(ce,{align:"right",children:e[t]},n)}))]},t)}))})]})})]})},layout:"/Pharma"},{path:"/StoreIndent",name:"Store Indent",secondaryNavbar:!0,component:function(){var e,t,n=a.useContext(C),r=n.userData,c=n.productData,i=null!==(e=null===r||void 0===r||null===(t=r.token)||void 0===t?void 0:t.accessToken)&&void 0!==e?e:"",o=a.useState(ge),s=Object(v.a)(o,2),u=s[0],l=s[1],d=a.useState(Oe),p=Object(v.a)(d,2),j=p[0],h=p[1],O=a.useState(!1),g=Object(v.a)(O,2),y=g[0],k=g[1],S=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z("list-stocks-requests-outlet",i);case 3:(null===(t=e.sent)||void 0===t?void 0:t.data)&&h(null===t||void 0===t?void 0:t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();a.useEffect((function(){S()}),[]);var I=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=u,e.next=4,A("request-product-by-outlet",i,t);case 4:return e.next=6,S();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(x.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=u,e.next=4,z("request-product-delivered/"+t,i,n);case 4:return e.next=6,S();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(x.a)(b.a.mark((function e(){var t=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("submit"!==(t.length>0&&void 0!==t[0]?t[0]:"")){e.next=4;break}return e.next=4,I().catch((function(){}));case 4:l(ge),k(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)(m.a,{sx:{width:"100%"},children:[Object(w.jsx)(re,{open:y,handleAddRow:function(){var e=Object(U.a)({},u);e.requests.push({productId:"",quantity:""}),l(e)},handleClose:D,renderItem:function(){var e,t=function(e,t,n){var a=Object(U.a)({},u);"productId"===n?a.requests[t].productId=e:a.requests[t][n]=e.target.value,l(a)};return Object(w.jsx)(m.a,{component:"form",sx:{"& .MuiTextField-root":{m:2}},validate:!0,autoComplete:"off",children:null===u||void 0===u||null===(e=u.requests)||void 0===e?void 0:e.map((function(e,n){var a;return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(w.jsx)(V.a,{sx:{width:"15%",mr:2},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,a){return(null===a||void 0===a?void 0:a.id)&&t(null===a||void 0===a?void 0:a.id,n,"productId")},options:null===c||void 0===c?void 0:c.map((function(e,t){return{label:e.name+" "+e.id,id:e.id}})),renderInput:function(e){return Object(w.jsx)(f.a,Object(U.a)(Object(U.a)({},e),{},{label:"Product",size:"small"}))}}),Object(w.jsx)(f.a,{required:!0,label:"Quantity",type:"search",size:"small",value:null!==(a=e.quantity)&&void 0!==a?a:"",onChange:function(e){return t(e,n,"quantity")}}),Object(w.jsx)(Y.a,{color:"primary",onClick:function(){return function(e){var t=Object(U.a)({},u);t.requests.splice(e,1),l(t)}(n)},sx:{position:"absolute",right:5},children:Object(w.jsx)(X.a,{})})]}),Object(w.jsx)(Q.a,{})]},n)}))})},title:"Store Indent",page:"indent"}),Object(w.jsx)(m.a,{sx:{bgcolor:"#FBF7F0",p:2,display:"flex",justifyContent:"end"},children:Object(w.jsx)(K.a,{variant:"outlined",onClick:function(){k(!0)},children:"Request"})}),Object(w.jsx)(H.a,{children:Object(w.jsxs)(W.a,{sx:{minWidth:700},stickyHeader:!0,"aria-label":"sticky table",children:[Object(w.jsx)(J.a,{children:Object(w.jsxs)(L.a,{children:[Object(w.jsx)(ve,{align:"right",children:"Status"}),Object.keys(me[0]).map((function(e,t){return Object(w.jsx)(ve,{align:"right",children:e},t)}))]})}),Object(w.jsx)(M.a,{children:j.map((function(e,t){return Object(w.jsxs)(fe,{children:[Object(w.jsx)(ve,{align:"right",children:"issued"===(null===e||void 0===e?void 0:e.requestStatus)?Object(w.jsx)(K.a,{variant:"contained",onClick:function(){return q(null===e||void 0===e?void 0:e.id)},children:"Delivered"}):null===e||void 0===e?void 0:e.requestStatus}),Object.keys(Oe[0]).map((function(t,n){return Object(w.jsx)(ve,{align:"right",children:e[t]},n)}))]},t)}))})]})})]})},layout:"/Pharma"}]},{name:"Departments",state:"pageCollapse",views:[{path:"/Departments",name:"Departments",secondaryNavbar:!0,component:function(){return Object(w.jsx)("div",{})},layout:"/Pharma"}]},{path:"/signin",name:"Sign In",component:function(){var e=a.useState({email:"",password:""}),t=Object(v.a)(e,2),n=t[0],r=t[1],c=a.useState(!1),i=Object(v.a)(c,2),o=i[0],s=i[1],u=a.useContext(C).onSetUserData,l=function(){var e=Object(x.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,P(n);case 4:(a=e.sent)&&u(a.data),s(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.warn("s"),s(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{n[t]=e.target.value,r.apply(void 0,Object(j.a)(n))}catch(a){}};return Object(w.jsxs)(m.a,{sx:{my:8,mx:10,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(w.jsx)("img",{src:y,alt:"",style:{width:250,height:120,marginBottom:20}}),Object(w.jsx)(g.a,{component:"h1",variant:"h5",color:"primary",sx:{alignSelf:"flex-Start"},children:"Login"}),Object(w.jsxs)(m.a,{component:"form",noValidate:!1,sx:{mt:1},children:[Object(w.jsx)(f.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",type:"email",autoFocus:!0,onChange:function(e){return p(e,"email")}}),Object(w.jsx)(f.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){return p(e,"password")},autoComplete:"current-password"}),Object(w.jsx)(k.a,{type:"submit",loading:o,variant:"outlined",fullWidth:!0,sx:{mt:2,mb:2,height:50},onClick:l,children:"Sign In"}),Object(w.jsx)(d.a,{container:!0,children:Object(w.jsx)(d.a,{item:!0,xs:!0,children:Object(w.jsx)(O.a,{href:"#",variant:"body2",children:"Forgot password?"})})})]})]})},layout:"/auth"}];function ke(){return Object(w.jsxs)(d.a,{container:!0,component:"main",sx:{height:"100vh"},children:[Object(w.jsx)(u.a,{}),Object(w.jsx)(d.a,{item:!0,xs:!1,sm:4,md:6,sx:{backgroundImage:"url(".concat(p,")"),backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(w.jsx)(d.a,{item:!0,xs:12,sm:8,md:6,component:l.a,elevation:6,square:!0,children:"/auth/full-screen-maps"!==window.location.pathname?Object(w.jsxs)(s.d,{children:[function e(t){return t.map((function(t,n){return t.state?e(t.views):"/auth"===t.layout?Object(w.jsx)(s.b,{path:t.layout+t.path,component:t.component},n):null}))}(ye),Object(w.jsx)(s.a,{from:"/auth",to:"/auth/signin"})]}):null})]})}var we=n(283),Ce=n(281),Se=n(271),Ie=n(265),qe=n(266),De=n(273),Pe=n(287),Te=n(137),ze=n(107),Ne=n.n(ze),Ae=n(132),Ee=n.n(Ae),Ue=n(133),Fe=n.n(Ue),Be=n(134),We=n.n(Be);function Me(){var e,t,n=a.useContext(C).userData,r=null!==(e=null===n||void 0===n||null===(t=n.user)||void 0===t?void 0:t.name)&&void 0!==e?e:3,c=a.useState(null),i=Object(v.a)(c,2),o=i[0],u=i[1],l=a.useState(null),d=Object(v.a)(l,2),p=d[0],j=d[1],h=Object(s.g)(),b=Boolean(o),x=Boolean(p),f=function(e){u(e.currentTarget)},O=function(){j(null)},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";"SignOut"===e&&(h.push("/auth/"),sessionStorage.clear()),u(null),O()},k="primary-search-account-menu",S=Object(w.jsx)(Te.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:k,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:y,children:Object(w.jsx)(Pe.a,{onClick:function(){return y("SignOut")},children:"Sign Out"})}),I="primary-search-account-menu-mobile",q=Object(w.jsxs)(Te.a,{anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},id:I,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:O,children:[Object(w.jsxs)(Pe.a,{children:[Object(w.jsx)(Y.a,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:Object(w.jsx)(De.a,{badgeContent:4,color:"error",children:Object(w.jsx)(Ee.a,{})})}),Object(w.jsx)("p",{children:"Messages"})]}),Object(w.jsxs)(Pe.a,{children:[Object(w.jsx)(Y.a,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:Object(w.jsx)(De.a,{badgeContent:17,color:"error",children:Object(w.jsx)(Fe.a,{})})}),Object(w.jsx)("p",{children:"Notifications"})]}),Object(w.jsxs)(Pe.a,{onClick:f,children:[Object(w.jsx)(Y.a,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(w.jsx)(Ne.a,{})}),Object(w.jsx)("p",{children:"Profile"})]})]});return Object(w.jsxs)(m.a,{sx:{flexGrow:1},children:[Object(w.jsx)($.a,{position:"fixed",sx:{width:"calc(100% - ".concat(240,"px)"),mr:"".concat(240,"px")},color:"default",children:Object(w.jsxs)(_.a,{children:[Object(w.jsx)(m.a,{sx:{flexGrow:1}}),Object(w.jsx)(m.a,{sx:{display:{xs:"none",md:"flex"}},children:Object(w.jsxs)(Y.a,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":k,"aria-haspopup":"true",onClick:f,color:"inherit",children:[Object(w.jsx)(Ne.a,{}),Object(w.jsx)(g.a,{sx:{ml:1},children:r})]})}),Object(w.jsx)(m.a,{sx:{display:{xs:"flex",md:"none"}},children:Object(w.jsx)(Y.a,{size:"large","aria-label":"show more","aria-controls":I,"aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},color:"inherit",children:Object(w.jsx)(We.a,{})})})]})}),q,S]})}var Re=n(272),Ge=n(288),He=n(289),Je=n(135),Le=n.n(Je);function Ve(e){var t=e.children,n=e.title;e.active;return Object(w.jsx)("div",{children:Object(w.jsxs)(Re.a,{elevation:0,sx:{bgcolor:"rgba(31, 160, 132, 0.03)",borderRadius:0},defaultExpanded:!0,children:[Object(w.jsx)(Ge.a,{expandIcon:Object(w.jsx)(Le.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(w.jsx)(g.a,{style:{fontWeight:"bold"},children:n})}),Object(w.jsx)(He.a,{children:t})]})})}var Ye=n(261),Qe=n(262),Ke=n(263),Xe=n(264);function Ze(e){var t,n,r=e.children,c=e.routes,i=a.useContext(C).userData,o=3===(null!==(t=null===i||void 0===i||null===(n=i.user)||void 0===n?void 0:n.role)&&void 0!==t?t:3),l=a.useState(1),d=Object(v.a)(l,2),p=d[0],j=d[1],h=Object(s.g)(),b=function(e,t){return 0===e?0===t?Object(w.jsx)(Ye.a,{}):1===t?Object(w.jsx)(Qe.a,{}):Object(w.jsx)(Ke.a,{}):Object(w.jsx)(Xe.a,{})};return Object(w.jsxs)(m.a,{sx:{display:"flex"},children:[Object(w.jsx)(u.a,{}),Object(w.jsx)(Me,{}),Object(w.jsx)(m.a,{component:"main",sx:{display:"flex",width:window.innerWidth-240,height:window.innerHeight-64,mt:8},children:r}),Object(w.jsxs)(we.a,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box",bgcolor:"#D1E8E4"}},variant:"permanent",anchor:"right",children:[Object(w.jsx)(_.a,{style:{justifyContent:"center"},children:Object(w.jsx)("img",{src:y,alt:"",style:{width:120,height:60}})}),c.map((function(e,t){return(null===e||void 0===e?void 0:e.layout)?null:Object(w.jsx)(Ve,{active:0===t,title:null===e||void 0===e?void 0:e.name,children:Object(w.jsx)(Ce.a,{children:null===e||void 0===e?void 0:e.views.map((function(e,n){return o&&"Issue Goods"===e.name?null:o||"Store Indent"!==e.name?Object(w.jsxs)(Se.a,{button:!0,selected:p===e.layout+e.path,onClick:function(){return function(e){j(e),h.push(e)}(e.layout+e.path)},children:[Object(w.jsx)(Ie.a,{children:b(t,n)}),Object(w.jsx)(qe.a,{primary:null===e||void 0===e?void 0:e.name})]},null===e||void 0===e?void 0:e.name):null}))})},t)}))]})]})}var $e=function(){return Object(w.jsx)(Ze,{routes:ye,children:"/Pharma/full-screen-maps"!==window.location.pathname?Object(w.jsxs)(s.d,{children:[function e(t){return t.map((function(t,n){return t.state?e(t.views):"/Pharma"===t.layout?Object(w.jsx)(s.b,{path:t.layout+t.path,component:t.component},n):null}))}(ye),Object(w.jsx)(s.a,{from:"/Pharma",to:"/Pharma/Products"})]}):null})},_e=(n(196),n(136)),et=n(276),tt=function(e){var t=e.children,n=Object(_e.a)({palette:{primary:{light:"#757ce8",main:"#1FA084",dark:"#D1E8E4",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#D1E8E4",dark:"#ba000d",contrastText:"#000"}}});return Object(w.jsx)(et.a,{theme:n,children:t})};var nt=function(){return Object(w.jsx)(tt,{children:Object(w.jsx)(o.a,{children:Object(w.jsx)(s.d,{children:Object(w.jsxs)(S,{children:[Object(w.jsx)(s.b,{path:"/auth",component:ke}),Object(w.jsx)(s.b,{path:"/pharma",component:$e}),Object(w.jsx)(s.a,{from:"/",to:"/pharma/Store/Products"})]})})})})},at=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,296)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(nt,{})}),document.getElementById("root")),at()}},[[197,1,2]]]);
//# sourceMappingURL=main.70ec75ea.chunk.js.map