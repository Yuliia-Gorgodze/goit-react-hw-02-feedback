(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(3),i=n.n(a),s=(n(14),n(4)),o=n(5),b=n(6),j=n(9),u=n(8),d=n(0),l=function(t){var e=t.options,n=t.procentFetback,c=Object.keys(e);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),Object(d.jsx)("ul",{children:c.map((function(t){return Object(d.jsxs)("li",{children:[t," : ",e[t]]},t)}))}),Object(d.jsxs)("span",{children:["\u041f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u044b\u0435 \u043e\u0442\u0437\u044b\u0432\u044b: ",n()]})]})},h=function(t){var e=t.message;return Object(d.jsx)("span",{children:e})};var f=function(t){var e=t.title,n=t.children;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:e}),n]})},O=n(7),p=n.n(O),k=function(t){var e=t.options,n=t.incriment;return console.log(n),Object.keys(e).map((function(t){return Object(d.jsx)("button",{class:p.a.butoon_fetback,onClick:function(){return n(t)},children:t},t)}))},x=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={good:0,neutral:0,bad:0},t.incrimentFetback=function(e){t.setState((function(t){return Object(s.a)({},e,t[e]+1)}))},t.procentFetback=function(){var e=t.state.good/(t.state.good+t.state.bad)*100;return isNaN(e)?"\u043d\u0443\u0436\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u043e\u0442\u0437\u044b\u0432\u043e\u0432":"".concat(e,"%")},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad;return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{title:"Please leave feedback",children:Object(d.jsx)(k,{options:this.state,incriment:this.incrimentFetback})}),e>0||n>0||c>0?Object(d.jsx)("div",{children:Object(d.jsx)(l,{options:this.state,procentFetback:this.procentFetback})}):Object(d.jsx)(h,{message:"No feetback given"})]})}}]),n}(c.Component);n(16);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={butoon_fetback:"fetback_butoon_fetback__36s1X"}}},[[17,1,2]]]);
//# sourceMappingURL=main.d4dc18f4.chunk.js.map