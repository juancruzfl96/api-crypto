(this["webpackJsonpapi-crypto"]=this["webpackJsonpapi-crypto"]||[]).push([[0],{37:function(e,c,t){},38:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t.n(a),s=t(13),r=t.n(s),i=t(4),o=t(14),l=t.n(o),p=(t(37),t(38),t(0)),j=function(e){var c=e.name,t=e.image,a=e.symbol,n=e.price,s=e.volume,r=e.priceChange,i=e.marketcap;return Object(p.jsx)("div",{className:"coin-container",children:Object(p.jsxs)("div",{className:"coin-row",children:[Object(p.jsxs)("div",{className:"coin",children:[Object(p.jsx)("img",{src:t,alt:"crypto"}),Object(p.jsx)("h1",{children:c}),Object(p.jsx)("p",{className:"coin-symbol",children:a})]}),Object(p.jsxs)("div",{className:"coin-data",children:[Object(p.jsxs)("p",{className:"coin-price",children:["$",n]}),Object(p.jsxs)("p",{className:"coin-volume",children:["$",s.toLocaleString()]}),r<0?Object(p.jsxs)("p",{className:"coin-percent red",children:[r.toFixed(2),"%"]}):Object(p.jsxs)("p",{className:"coin-percent green",children:[r.toFixed(2),"%"]}),Object(p.jsxs)("p",{className:"coin-marketcap",children:["Mkt cap: $",i.toLocaleString()]})]})]})})};var m=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],m=r[1];Object(a.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){n(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(o.toLocaleLowerCase())}));return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsxs)("div",{className:"coin-search",children:[Object(p.jsx)("h1",{className:"text",children:"SEARCH A CURRENCY"}),Object(p.jsx)("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:function(e){m(e.target.value)}})]}),d.map((function(e){return Object(p.jsx)(j,{name:e.name,image:e.image,symbol:e.symbol,volume:e.total_volume,price:e.current_price,priceChange:e.price_change_percentage_24h,marketcap:e.market_cap},e.id)}))]})};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5517370b.chunk.js.map