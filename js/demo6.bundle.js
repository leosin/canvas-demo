!function(n){function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=89)}({89:function(n,t,e){"use strict";function i(){function n(n){r.draw(n),r.x+=r.vx,r.y+=r.vy,r.vy*=.99,r.vy+=.2,(r.x+r.vx+r.radius>=i||r.x+r.vx<=r.radius)&&(r.vx=-r.vx),(r.y+r.vy+r.radius>=o||r.y+r.vy<=r.radius)&&(r.vy=-r.vy)}function t(n){n.fillStyle="rgba(255, 255, 255, 0.2)",n.fillRect(0,0,i,o)}function e(i){return function(){t(i),n(i),u=window.requestAnimationFrame(e(i))}}var i=0,o=0,u=null,a=!1;!function(n){var c=document.getElementById(n),d=c.getContext("2d");i=c.width,o=c.height,c.addEventListener("mousemove",function(n){a||(t(d),r.x=n.clientX,r.y=n.clientY,r.draw(d))}),c.addEventListener("click",function(){a||(u=window.requestAnimationFrame(e(d)),a=!0)}),c.addEventListener("mouseout",function(){window.cancelAnimationFrame(u),a=!1}),r.draw(d)}("canvas")}var r={x:250,y:20,vx:5,vy:2,radius:20,color:"#066",draw:function(n){n.fillStyle=this.color,n.beginPath(),n.arc(this.x,this.y,this.radius,0,2*Math.PI),n.fill()}};window.onload=i}});