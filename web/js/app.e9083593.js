(function(t){function e(e){for(var i,o,a=e[0],c=e[1],u=e[2],h=0,d=[];h<a.length;h++)o=a[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("8a23"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=(n("d3b7"),n("bc3a")),s=n.n(r),o={baseURL:Object({NODE_ENV:"production",VUE_APP_API:"http://157.245.120.30",VUE_APP_WS:"ws://157.245.120.30/ws",BASE_URL:"/"}).baseURL||Object({NODE_ENV:"production",VUE_APP_API:"http://157.245.120.30",VUE_APP_WS:"ws://157.245.120.30/ws",BASE_URL:"/"}).apiUrl||""},a=s.a.create(o);a.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),a.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=a,window.axios=a,Object.defineProperties(t.prototype,{axios:{get:function(){return a}},$axios:{get:function(){return a}}})},i["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",{style:{overflowX:"scroll"}},[n("drawer",{ref:"drawer",on:{draw:function(e){return t.progressUp()}}})],1),n("colorpicker",{on:{change:t.setColor}}),n("progress-bar",{attrs:{blocked:t.blocked,progress:t.progress}})],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brush-settings"},[n("v-color-picker",{attrs:{"canvas-height":"70",flat:"","background-color":"aliceblue","dot-size":"25","hide-inputs":""},on:{input:t.setColor},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)},h=[],d=(n("13d5"),n("a9e3"),n("b680"),n("b64b"),{data:function(){return{current:"#000000"}},computed:{color:{get:function(){return this.current},set:function(t){this.current=t}},getColor:function(){var t=this;return"string"===typeof this.color?this.color:JSON.stringify(Object.keys(this.color).reduce((function(e,n){return e[n]=Number(t.color[n].toFixed(2)),e}),{}),null,2)}},methods:{setColor:function(){this.$emit("change",this.getColor)}}}),f=d,p=(n("c5e7"),n("2877")),g=n("6544"),_=n.n(g),v=n("03a4"),w=Object(p["a"])(f,l,h,!1,null,null,null),b=w.exports;_()(w,{VColorPicker:v["a"]});var y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress-bar"},[n("div",{staticClass:"bar-fill",style:{height:t.dynamicHeight}}),n("div",{staticClass:"bar-status"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"bar-status-label"},[t._v(" "+t._s(t.blocked?"Restoring":t.dynamicHeight)+" ")]),t.blocked?n("v-col",{staticClass:"bar-status-gif"},[n("v-img",{attrs:{height:"20px",width:"20px",src:t.loadingImage}})],1):t._e()],1)],1)])},k=[],m={props:{blocked:Boolean,progress:Number},data:function(){return{max:240,loadingImage:n("bc1e")}},computed:{dynamicHeight:function(){var t=100-parseInt(this.progress/this.max*100,10)+"%";return t}}},x=m,P=(n("aa09"),n("62ad")),C=n("adda"),O=n("0fd9"),L=Object(p["a"])(x,y,k,!1,null,null,null),j=L.exports;_()(L,{VCol:P["a"],VImg:C["a"],VRow:O["a"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{attrs:{id:"can",width:"700",height:"700"}})},E=[],A=(n("d81d"),n("d4ec")),q=n("bee2"),S=(n("ace4"),n("84c3"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),function(){function t(e,n){Object(A["a"])(this,t),this._x=e,this._y=n}return Object(q["a"])(t,[{key:"getX",value:function(){return this._x}},{key:"getY",value:function(){return this._y}},{key:"getAngleAndDistance",value:function(t){return{angle:Math.atan2(t.getY()-this._y,t.getX()-this._x)*(180/Math.PI),distance:Math.sqrt(Math.pow(t.getY()-this._y,2)+Math.pow(t.getX()-this._x,2))}}},{key:"getEndPoint",value:function(e,n){var i=e/(180/Math.PI);return new t(Math.cos(i)*n+this._x,Math.sin(i)*n+this._y)}},{key:"getEncodedPoint",value:function(){return new Uint16Array([parseInt(this._x,10),parseInt(this._y,10)])}}],[{key:"calcNewPoint",value:function(t,e,n){var i=n-e.distance;return t=t.getEndPoint(e.angle,i<0?n:e.distance),{point:t,distance:i}}}]),t}()),I=function(){function t(e,n){Object(A["a"])(this,t),this._points=e||[],this._color=n||"#000000"}return Object(q["a"])(t,[{key:"getColor",value:function(){return this._color}},{key:"setColor",value:function(t){return this._color=t||"#000000",this}},{key:"addPoint",value:function(t){return this._points.push(t),this}},{key:"shift",value:function(){return this._points.shift(),this}},{key:"unshift",value:function(t){return this._points.unshift(t),this}},{key:"length",value:function(){return this._points.length}},{key:"clearLine",value:function(){return this._points=[],this}},{key:"getDrawIteration",value:function(){return this.isEnded()?null:{A:this._points[0],B:this._points[1],color:this._color}}},{key:"isEnded",value:function(){return this._points.length<2}},{key:"serialize",value:function(){var t={points:[],color:this._color};return this._points.map((function(e){t.points.push([e.getX(),e.getY()])})),JSON.stringify(t)}}]),t}(),M=function(){function t(e,n){var i=this;Object(A["a"])(this,t),this._socket=new WebSocket("ws://".concat(e,"/ws")),this._socket.onmessage=function(t){var e=JSON.parse(t.data);n(e.data)},this._timer=setInterval((function(){i._stack.length>0&&(i.send(),i._stack=[])}),1e3),this._stack=[]}return Object(q["a"])(t,[{key:"sendLine",value:function(t){return this._stack.push(t),this}},{key:"send",value:function(){var t=this;return this._stack.map((function(e){var n='{"id": 1, "data": '.concat(e,"}");t._socket.readyState==t._socket.OPEN&&t._socket.send(n)})),!0}}]),t}(),N=(n("4de4"),function(){function t(e,n){var i=this;Object(A["a"])(this,t),this.start=0,this._speed=n,this._context=e.getContext("2d"),this._query=[],this._ownLine=new I,window.requestAnimationFrame((function(t){i.render(t)}))}return Object(q["a"])(t,[{key:"addQuery",value:function(t){this._query.push(t)}},{key:"addToLine",value:function(t,e){this._ownLine.addPoint(t),e&&this._ownLine.setColor(e)}},{key:"render",value:function(t){var e=this;if(window.requestAnimationFrame((function(t){e.render(t)})),this.start){var n=this._speed*(t-this.start),i=10*(t-this.start);this.start=t,this._query=this._query.map((function(t){return t.isEnded()?t:e.drawDistance(t,n)})).filter((function(t){return!t.isEnded()})),this._ownLine.isEnded()||this.drawDistance(this._ownLine,i)}else this.start=t}},{key:"clearLine",value:function(t){if(!this._ownLine.isEnded()){var e=this._ownLine;this._query.push(e)}this._ownLine=new I([],t||"#000000")}},{key:"drawDistance",value:function(t,e){var n=t.getDrawIteration();t.shift();var i=n.A.getAngleAndDistance(n.B),r=S.calcNewPoint(n.A,i,e),s=r.point;return this._context.beginPath(),this._context.strokeStyle=t.getColor(),this._context.lineWidth=5,this._context.lineCap="round",this._context.moveTo(s.getX(),s.getY()),this._context.lineTo(n.A.getX(),n.A.getY()),this._context.stroke(),this._context.closePath(),r.distance>0&&!t.isEnded()?t=this.drawDistance(t,r.distance):r.distance<0&&t.unshift(s),t}}]),t}()),T=function(){function t(e,n,i){var r=this;Object(A["a"])(this,t),this._speed=e,this._isDrawing=!1,this._blocked=!1,this._drawCallback=i,this.x=0,this.y=0,this.line=new I,this._canvas=document.querySelector("#can"),this._qDrawer=new N(this._canvas,e),this.connect=new M(n,(function(t){var e=new I(t.points.map((function(t){return new S(t[0],t[1])})),t.color);r._qDrawer.addQuery(e)})),this.initialize()}return Object(q["a"])(t,[{key:"setColor",value:function(t){return this.line.setColor(t),this.cut(),this}},{key:"cut",value:function(){if(this._isDrawing){var t=new S(this.x,this.y);this.connect.sendLine(this.line.serialize()),this.line=new I([],this.line.getColor()),this._qDrawer.clearLine(this.line.getColor()),this.drawPoint(t)}return this}},{key:"block",value:function(){this._isDrawing&&(this.x=0,this.y=0,this._isDrawing=!1,this._qDrawer.clearLine(this.line.getColor()),this.connect.sendLine(this.line.serialize()),this.line=new I([],this.line.getColor())),this._blocked=!0}},{key:"unblock",value:function(){this._blocked=!1}},{key:"drawPoint",value:function(t,e){return e?(this.line.setColor(e),this._qDrawer.addToLine(t,e)):this._qDrawer.addToLine(t),this.line.addPoint(t),this.line.length()>20&&this.cut(),this._drawCallback(),t}},{key:"initialize",value:function(){var t=this;this._canvas.width=5e3,this._canvas.height=5e3,this._canvas.addEventListener("mousedown",(function(e){if(!t._blocked){console.log(t._canvas.offsetLeft),console.log(t._canvas.offsetTop),console.log(e.pageX),console.log(e.pageY);var n=new S(e.pageX-t._canvas.offsetLeft,e.pageY-t._canvas.offsetTop);t.x=n.getX(),t.y=n.getY(),t.drawPoint(n,t.line.getColor()),t._isDrawing=!0}})),this._canvas.addEventListener("mousemove",(function(e){if(t._isDrawing&&!t._blocked){var n=new S(e.pageX-t._canvas.offsetLeft,e.pageY-t._canvas.offsetTop);t.x=n.getX(),t.y=n.getY(),t.drawPoint(n)}}),!1),this._canvas.addEventListener("mouseup",(function(){t._isDrawing&&(t.x=0,t.y=0,t._isDrawing=!1,t._qDrawer.clearLine(t.line.getColor()),t.connect.sendLine(t.line.serialize()),t.line=new I([],t.line.getColor()))}))}}]),t}(),U=null,V={data:function(){return{speed:2}},mounted:function(){var t=this;U=new T(2,location.host,(function(){t.$emit("draw")})),window.scrollTo(2500-window.innerWidth/2,2500-window.innerHeight/2)},methods:{blockBrush:function(){U.block()},unblockBrush:function(){U.unblock()},setColor:function(t){U.setColor(t)}}},X=V,Y=Object(p["a"])(X,D,E,!1,null,null,null),$=Y.exports,B={name:"App",components:{Drawer:$,Colorpicker:b,ProgressBar:j},data:function(){return{progress:0,blocked:!1,timer:null}},created:function(){var t=this;this.timer=setInterval((function(){t.progressDown()}),200)},methods:{setColor:function(t){this.$refs.drawer.setColor(t)},progressUp:function(){this.progress++,this.progress>=240&&(this.$refs.drawer.blockBrush(),this.blocked=!0)},progressDown:function(){this.blocked&&(this.progress-=10,this.progress<1&&(this.$refs.drawer.unblockBrush(),this.blocked=!1),this.progress=this.progress<0?0:this.progress)}}},z=B,R=(n("034f"),n("7496")),J=n("a75b"),W=Object(p["a"])(z,c,u,!1,null,null,null),H=W.exports;_()(W,{VApp:R["a"],VContent:J["a"]});var F=n("f309");i["a"].use(F["a"]);var Q=new F["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:Q,render:function(t){return t(H)}}).$mount("#app")},"5b91":function(t,e,n){},"7e56":function(t,e,n){},"8a23":function(t,e,n){},aa09:function(t,e,n){"use strict";var i=n("5b91"),r=n.n(i);r.a},bc1e:function(t,e,n){t.exports=n.p+"img/refresh.b82577a0.gif"},c5e7:function(t,e,n){"use strict";var i=n("7e56"),r=n.n(i);r.a}});
//# sourceMappingURL=app.e9083593.js.map