(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=a(1),l=function(){return r.a.createElement("header",{className:"app-header"},r.a.createElement("h3",null,"Battleship"),r.a.createElement("p",{className:"created-by"},"By Cory S."))},u=(a(9),function(e,t,a,n){var r=[],c=!1,o=function(){if(r.length===e)return c=!0,!0};return{length:e,sunkStatus:function(){return c},takeHit:function(){if(r.unshift("X"),o())return"sunk"},hits:r,getLocations:function(){var r=[];if("horizontal"===n)for(var c=0;c<e;c++)r.push([t+c,a]);return r},getHits:function(){return r}}}),s=function(e){var t=e,a=[];if(0===t.length)for(var n=0;n<10;n++){t.push([]);for(var r=0;r<10;r++)t[n].push("")}var c=function(e,t,a,n){var r=!0;if("horizontal"===n&&e+a>10||"vertical"===n&&t+a>10||e>9||t>9)r=!1;else if("horizontal"===n&&e+a<10)for(var c=0;c<a;c++){if(""!==o(e+c,t)&&(r=!1),!1===r)return}else if("vertical"===n&&t+a<10)for(var i=0;i<a;i++){if(""!==o(e,t+i)&&(r=!1),!1===r)return}return r},o=function(e,a){return t[a][e]},i=function(e,a,n,r){if("horizontal"===r)for(var c=0;c<n.length;c++)t[a][e+c]=n;else if("vertical"===r)for(var o=0;o<n.length;o++)t[a+o][e]=n;else null===r&&(t[a][e]=n)},l=function(){var e=[];return a.forEach((function(t){!0===t.sunkStatus()&&e.push(t)})),e.length===a.length};return{getGrid:function(){return t},getCoords:o,placeShip:function(e,t,n,r){if(c(e,t,n,r)){var o=u(n,e,t);return a.push(o),i(e,t,o,r),"placed"}},receiveAttack:function(e,t){var a=o(e,t);if(""===a)return i(e,t,"X",null),o(e,t);if(""!==a&&"X"!==a&&"XX"!==a){var n=o(e,t);if(i(e,t,"XX",null),"sunk"===n.takeHit())return console.log("ship: ".concat(n.getHits())),!0===l()?"Winner!":"sunk"}},getShips:function(){return a},checkShipLength:c,checkForWin:l}},h=[5,4,4,3,3,2,2,2,2],f=function(e,t,a){var n=[],r=function(e){var a=h[e],n=Math.floor(2*Math.random())>.5?"horizontal":"vertical",r=c(a,n),o=Object(i.a)(r,2),l=o[0],u=o[1];t.placeShip(l,u,a,n)},c=function(e,a){for(var n=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());!t.checkShipLength(n,r,e,a);)n=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());return[n,r]};return{type:e,getBoard:function(){return t},getEnemyBoard:function(){return a},cpuPlaceShips:function(){for(var e=0;e<h.length;e++)r(e)},makeRandomPlay:function e(){var t=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());if("X"===a.getCoords(t,r)||"XX"===a.getCoords(t,r))e();else{if("Winner!"===a.receiveAttack(t,r))return console.log("WINNER!!"),"win";n.push([t,r])}},getMoves:function(){return n}}};var d=function(){var e=Object(n.useState)(s([])),t=Object(i.a)(e,2),a=t[0],c=(t[1],Object(n.useState)(s([]))),o=Object(i.a)(c,2),u=o[0],d=o[1],p=Object(n.useState)(f("human",a,u)),v=Object(i.a)(p,2),m=v[0],g=(v[1],Object(n.useState)(f("cpu",u,a))),b=Object(i.a)(g,2),k=b[0],E=(b[1],Object(n.useState)([])),S=Object(i.a)(E,2),j=S[0],O=S[1],y=Object(n.useState)([]),N=Object(i.a)(y,2),M=N[0],X=N[1],C=Object(n.useState)(0),B=Object(i.a)(C,2),P=B[0],z=B[1],w=Object(n.useState)("horizontal"),W=Object(i.a)(w,2),A=W[0],H=W[1],I=Object(n.useState)("Place your ship (on the left board): 5 length"),R=Object(i.a)(I,2),F=R[0],G=R[1],L=function(e){var t=[parseInt(e.target.id[0]),parseInt(e.target.id[1])],n=t[0],r=t[1];if(m.getBoard().getShips().length<9&&h.length>0&&"placed"===a.placeShip(n,r,h[0],A))if(h.shift(),J(),h.length>0)G("Place your ship (on the left board): ".concat(h[0]," length"));else{var c=document.querySelector(".rotate-btn");c.parentNode.removeChild(c),G("Make guesses on the right board:"),k.cpuPlaceShips(),console.log(k.getBoard().getGrid()),d(k.getBoard()),x()}};Object(n.useEffect)((function(){J()}),[A]),Object(n.useEffect)((function(){k.cpuPlaceShips(),u.getGrid(),x()}),[]);var J=function(){for(var e=[],t=0;t<10;t++)for(var n=0;n<10;n++){var c=a.getCoords(n,t);""===c?e.push(r.a.createElement("div",{className:"cell",key:"p1 ".concat(n,", ").concat(t),id:n+""+t,onClick:L})):"X"===c?e.push(r.a.createElement("div",{className:"cell attacked",key:"p1 ".concat(n,", ").concat(t),id:n+""+t})):"XX"===c?e.push(r.a.createElement("div",{className:"cell hit",key:"p1 ".concat(n,", ").concat(t),id:n+""+t})):e.push(r.a.createElement("div",{className:"cell p1-ship",key:"p1 ".concat(n,", ").concat(t),id:n+""+t,onClick:L}))}O(e)},q=function(e){if(!(m.getBoard().getShips().length<9)){var t=e.target.id;t.split("");var a=[t[0],t[1]],n=a[0],r=a[1];"sunk"===u.receiveAttack(n,r)&&z((function(e){return e+1})),k.getBoard().checkForWin()?(x(),G("Player 1 wins!")):(x(),k.makeRandomPlay(),m.getBoard().checkForWin()&&G("CPU wins!"),J())}},x=function(){for(var e=[],t=0;t<10;t++)for(var a=0;a<10;a++){var n=u.getCoords(a,t);"X"===n?e.push(r.a.createElement("div",{className:"cell attacked",key:"p1 ".concat(a,", ").concat(t),id:a+""+t})):"XX"===n?e.push(r.a.createElement("div",{className:"cell hit",key:"p1 ".concat(a,", ").concat(t),id:a+""+t})):e.push(r.a.createElement("div",{className:"cell",key:"p1 ".concat(a,", ").concat(t),id:a+""+t,onClick:q}))}X(e)};return r.a.createElement("div",{className:"App"},r.a.createElement(l,null),r.a.createElement("div",{className:"instructions"},r.a.createElement("p",null,F),r.a.createElement("p",null,"Ships Sunk: ",P),r.a.createElement("button",{className:"rotate-btn",onClick:function(){H("horizontal"===A?"vertical":"horizontal")}},"Ship is: ",A,". Click to rotate."),r.a.createElement("br",null),r.a.createElement("button",{className:"reset-btn",onClick:function(){window.location.reload(!1)}},"Restart")),r.a.createElement("div",{className:"player-grids-container"},r.a.createElement("div",{className:"board-grid"},j),r.a.createElement("div",{className:"board-grid"},M)))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.3e512fe5.chunk.js.map