(this["webpackJsonpstock-chart"]=this["webpackJsonpstock-chart"]||[]).push([[7],{1487:function(t,e,c){"use strict";c.r(e);var n=c(1488),a=c(1489),i=c(1486),r=c(1491),o=c(5);e.default=function(t){var e=t.tickers;console.log(t.watchlist);var c=Array.from(t.watchlist).map((function(c){return Object(o.jsx)(n.a.Item,{action:!0,as:"li",onClick:function(){return t.updateTicker(c)},children:e[c]})}));return Object(o.jsxs)("div",{children:[Object(o.jsx)(a.a,{overlay:Object(o.jsx)(i.a,{id:"tooltip-disabled",children:"    Click to copy watchlist!"}),children:Object(o.jsx)(n.a.Item,{className:"buttonnormalize",action:!0,style:{textAlign:"center"},variant:"Primary",onClick:function(){var c=document.createElement("input");c.type="text",c.value=Array.from(t.watchlist).map((function(t){return e[t]})).join(" "),document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c)},children:"Watchlist"})}),Object(o.jsxs)(r.a,{children:[Object(o.jsx)(r.a.Prev,{className:"buttonnormalize",onClick:function(){t.addToWatchlist(t.current)},children:"Add"}),Object(o.jsx)(r.a.Next,{className:"buttonnormalize",onClick:function(){t.removeFromWatchlist(t.current)},children:"Remove"})]}),Object(o.jsx)(n.a,{className:"list",vertical:!0,children:c})]})}}}]);
//# sourceMappingURL=7.81f5c986.chunk.js.map