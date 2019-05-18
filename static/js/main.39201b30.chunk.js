(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){var r=n(19),o=n(20),a=function(){"use strict";function e(t){r(this,e),this.vectors=t}return o(e,[{key:"transform",value:function(t){return new e(this.vectors.map(function(e){return e.transform(t)}))}},{key:"map",value:function(t){return new e(this.vectors.map(t))}}]),e}();e.exports={Contour:a}},14:function(e,t,n){var r=n(18),o=n(44).EPSILON;e.exports={areEqual:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;return Math.abs(e-t)<n},toDegrees:function(e){return 180*e/Math.PI},toRadians:function(e){return e*Math.PI/180},sum:function(e){return e.reduce(function(e,t){return e+t},0)},withoutElementAtIndex:function(e,t){return[].concat(r(e.slice(0,t)),r(e.slice(t+1)))}}},2:function(e,t,n){var r=n(25),o=n(18),a=n(19),c=n(20),i=n(14),u=i.areEqual,l=i.toDegrees,m=i.sum,s=function(){"use strict";function e(){a(this,e);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.components=n}return c(e,[{key:"add",value:function(t){var n=this,a=t.components;return r(e,o(a.map(function(e,t){return n.components[t]+e})))}},{key:"subtract",value:function(t){var n=this,a=t.components;return r(e,o(a.map(function(e,t){return n.components[t]-e})))}},{key:"scaleBy",value:function(t){return r(e,o(this.components.map(function(e){return e*t})))}},{key:"length",value:function(){return Math.hypot.apply(Math,o(this.components))}},{key:"dotProduct",value:function(e){var t=this;return e.components.reduce(function(e,n,r){return e+n*t.components[r]},0)}},{key:"normalize",value:function(){return this.scaleBy(1/this.length())}},{key:"haveSameDirectionWith",value:function(e){var t=this.normalize().dotProduct(e.normalize());return u(t,1)}},{key:"haveOppositeDirectionTo",value:function(e){var t=this.normalize().dotProduct(e.normalize());return u(t,-1)}},{key:"isPerpendicularTo",value:function(e){var t=this.normalize().dotProduct(e.normalize());return u(t,0)}},{key:"crossProduct",value:function(t){var n=t.components;return new e(this.components[1]*n[2]-this.components[2]*n[1],this.components[2]*n[0]-this.components[0]*n[2],this.components[0]*n[1]-this.components[1]*n[0])}},{key:"angleBetween",value:function(e){return l(Math.acos(this.dotProduct(e)/(this.length()*e.length())))}},{key:"negate",value:function(){return this.scaleBy(-1)}},{key:"withLength",value:function(e){return this.normalize().scaleBy(e)}},{key:"projectOn",value:function(e){var t=e.normalize();return t.scaleBy(this.dotProduct(t))}},{key:"equalTo",value:function(e){var t=this;return e.components.every(function(e,n){return u(e,t.components[n])})}},{key:"transform",value:function(t){var n=this,a=t.columns();if(a.length!==this.components.length)throw new Error("Matrix columns length should be equal to vector components length.");var c=a.map(function(e,t){return e.map(function(e){return e*n.components[t]})}),i=c[0].map(function(e,t){return m(c.map(function(e){return e[t]}))});return r(e,o(i))}}]),e}();e.exports={Vector:s}},34:function(e,t,n){e.exports=n(63)},4:function(e,t,n){var r=n(25),o=n(18),a=n(19),c=n(20),i=n(14),u=i.sum,l=i.withoutElementAtIndex,m=function(){"use strict";function e(){a(this,e);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.rows=n}return c(e,[{key:"columns",value:function(){var e=this;return this.rows[0].map(function(t,n){return e.rows.map(function(e){return e[n]})})}},{key:"componentWiseOperation",value:function(t,n){var a=this,c=n.rows.map(function(e,n){return e.map(function(e,r){return t(a.rows[n][r],e)})});return r(e,o(c))}},{key:"add",value:function(e){return this.componentWiseOperation(function(e,t){return e+t},e)}},{key:"subtract",value:function(e){return this.componentWiseOperation(function(e,t){return e-t},e)}},{key:"scaleBy",value:function(t){var n=this.rows.map(function(e){return e.map(function(e){return e*t})});return r(e,o(n))}},{key:"multiply",value:function(t){if(this.rows[0].length!==t.rows.length)throw new Error("The number of columns of this matrix is not equal to the number of rows of the given matrix.");var n=t.columns(),a=this.rows.map(function(e){return n.map(function(t){return u(e.map(function(e,n){return e*t[n]}))})});return r(e,o(a))}},{key:"transpose",value:function(){return r(e,o(this.columns()))}},{key:"determinant",value:function(){var t=this;if(this.rows.length!==this.rows[0].length)throw new Error("Only matrices with the same number of rows and columns are supported.");if(2===this.rows.length)return this.rows[0][0]*this.rows[1][1]-this.rows[0][1]*this.rows[1][0];var n=this.rows[0].map(function(n,a){var c=t.rows.slice(1).map(function(e){return[].concat(o(e.slice(0,a)),o(e.slice(a+1)))}),i=n*r(e,o(c)).determinant();return a%2===0?i:-i});return u(n)}},{key:"toDimension",value:function(t){var n=this,a=new Array(t).fill(0),c=a.map(function(e,t){return a.map(function(e,r){return n.rows[t]&&void 0!==n.rows[t][r]?n.rows[t][r]:t===r?1:0})});return r(e,o(c))}},{key:"components",value:function(){return this.rows.reduce(function(e,t){return[].concat(o(e),o(t))},[])}},{key:"map",value:function(t){return r(e,o(this.rows.map(function(e,n){return e.map(function(e,r){return t(e,n,r)})})))}},{key:"minor",value:function(t,n){var a=l(this.rows,t).map(function(e){return l(e,n)});return r(e,o(a)).determinant()}},{key:"cofactor",value:function(e,t){return Math.pow(-1,e+t)*this.minor(e,t)}},{key:"adjugate",value:function(){var e=this;return this.map(function(t,n,r){return e.cofactor(n,r)}).transpose()}},{key:"inverse",value:function(){var e=this.determinant();if(0===e)throw new Error("Determinant can't be  zero.");return this.adjugate().scaleBy(1/e)}}]),e}();e.exports={Matrix:m}},44:function(e,t){e.exports={EPSILON:1e-8}},63:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(13),c=n.n(a),i=n(3),u=n(1),l={color:{background:"#2c3e50",mainText:"#FFFFFF",secondaryText:"#bdc3c7",green:"#2ecc71",blue:"#3498db",purple:"#9b59b6",yellow:"#f1c40f",orange:"#e67e22",red:"#e74c3c"}},m=n(7),s=n(8),f=n(11),h=n(9),p=n(10),d=n(2),v=n(6),w=n(16);function E(){var e=Object(i.a)(["\n  stroke-width: ",";\n  stroke: ",";\n"]);return E=function(){return e},e}var x=u.c.line(E(),function(e){return e.main?"1px":"0.4px"},function(e){return e.main?e.theme.color.mainText:e.theme.color.secondaryText}),b=function(e){var t=e.start,n=e.end,r=e.main,a=void 0!==r&&r;return o.a.createElement(x,{main:a,x1:t.components[0],y1:t.components[1],x2:n.components[0],y2:n.components[1]})};function j(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return j=function(){return e},e}var g=u.c.div(j()),y=function(e){var t=e.width,n=e.height;return Math.min(t,n)-20},O=function(e,t){var n=e.width,r=e.height;return y({width:n,height:r})/2/t},k=function(e){function t(){var e,n;Object(m.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).updateProject=function(e,t){var r=O(e,t);n.props.updateProject(function(t){var n=t.scaleBy(r),o=new d.Vector(n.components[0],-n.components[1]),a=y(e)/2;return o.add(new d.Vector(a,a))})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.size,n=e.children,r=e.cells,a=y(t),c=a/2,i=c/r,u=new Array(Math.floor(c/i)).fill(0).reduce(function(e,t,n){return[].concat(Object(v.a)(e),[i*(n+1),-i*(n+1)])},[]);return o.a.createElement(g,null,o.a.createElement("svg",{width:a,height:a},o.a.createElement("g",null,o.a.createElement(b,{main:!0,start:new d.Vector(c,0),end:new d.Vector(c,a)}),o.a.createElement(b,{main:!0,start:new d.Vector(0,c),end:new d.Vector(a,c)}),o.a.createElement(function(){return u.map(function(e,t){return o.a.createElement(b,{key:t,start:new d.Vector(c+e,0),end:new d.Vector(c+e,a)})})},null),o.a.createElement(function(){return u.map(function(e,t){return o.a.createElement(b,{key:t,start:new d.Vector(0,c+e),end:new d.Vector(a,c+e)})})},null)),n))}},{key:"componentWillReceiveProps",value:function(e){var t=e.size,n=e.cells;this.props.updateProject&&(O(t,n)!==O(this.props.size,n)&&this.updateProject(t,n))}},{key:"componentDidMount",value:function(){this.props.updateProject&&this.updateProject(this.props.size,this.props.cells)}}]),t}(o.a.Component),M=Object(w.withSize)({monitorHeight:!0})(k);function V(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  flex-direction: row;\n  position: relative;\n"]);return V=function(){return e},e}var A=u.c.div(V());function C(){var e=Object(i.a)(["\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n"]);return C=function(){return e},e}var F=u.c.div(C()),B=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={project:void 0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.project,n=this.props,r=n.renderInformation,a=n.renderGridContent,c=n.cells,i=void 0===c?10:c;return o.a.createElement(A,null,o.a.createElement(M,{cells:i,updateProject:function(t){return e.setState({project:t})}},o.a.createElement(function(){return t&&a?a({project:t}):null},null)),o.a.createElement(F,null,o.a.createElement(function(){return r?r():null},null)))}}]),t}(o.a.Component);function I(){var e=Object(i.a)(["\n  font-size: 26px;\n  fill: ",";\n"]);return I=function(){return e},e}function z(){var e=Object(i.a)(["\n  fill: ",";\n"]);return z=function(){return e},e}function P(){var e=Object(i.a)(["\n  stroke-width: 2px;\n  stroke: ",";\n"]);return P=function(){return e},e}var T=u.c.line(P(),function(e){return e.color}),D=u.c.polygon(z(),function(e){return e.color}),S=u.c.text(I(),function(e){return e.color}),G=function(e){var t=e.vector,n=e.text,r=e.color,a=e.project,c=t.normalize(),i=c.scaleBy(t.length()-.6),u=new d.Vector(c.components[1],-c.components[0]).scaleBy(.2),l=[i.add(u),i.subtract(u),t].map(a).map(function(e){return e.components}),m=a(new d.Vector(0,0)),s=a(t);return o.a.createElement("g",null,o.a.createElement(T,{color:r,x1:m.components[0],y1:m.components[1],x2:s.components[0],y2:s.components[1]}),o.a.createElement(D,{color:r,points:l}),o.a.createElement(function(){if(!n)return null;var e=a(t.withLength(t.length()+.2)).components;return o.a.createElement(S,{color:r,x:e[0],y:e[1]},n)},null))};function W(){var e=Object(i.a)(["\n  color: ",";\n  margin-right: ",";\n"]);return W=function(){return e},e}var q=u.c.p(W(),function(e){return e.color},function(e){return e.noMargin?"0px":"6px"});function L(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: ",";\n  margin: 10px;\n  font-size: 24px;\n"]);return L=function(){return e},e}var R=u.c.div(L(),function(e){return e.color}),U=Object(u.d)(function(e){var t=e.children,n=e.theme,r=e.color,a=void 0===r?n.color.mainText:r;return o.a.createElement(R,null,o.a.createElement(function(){return t.reduce(function(e,n,r){return r===t.length-1?[].concat(Object(v.a)(e),[n]):[].concat(Object(v.a)(e),[n,o.a.createElement(q,{key:r,color:a}," ","="," ")])},[])},null))});function H(){var e=Object(i.a)(["\n  border-right: 1px solid ",";\n"]);return H=function(){return e},e}function N(){var e=Object(i.a)(["\n  border-left: 1px solid ",";\n"]);return N=function(){return e},e}function J(){var e=Object(i.a)(["\n  width: 8px;\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n"]);return J=function(){return e},e}function $(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-right: 6px;\n"]);return $=function(){return e},e}function K(){var e=Object(i.a)(["\n  color: ",";\n  margin: 4px;\n"]);return K=function(){return e},e}function Q(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n"]);return Q=function(){return e},e}var X=u.c.div(Q()),Y=u.c.p(K(),function(e){return e.color}),Z=u.c.div($()),_=u.c.div(J(),function(e){return e.color},function(e){return e.color}),ee=Object(u.c)(_)(N(),function(e){return e.color}),te=Object(u.c)(_)(H(),function(e){return e.color}),ne=function(e){var t=e.color,n=e.columns;return o.a.createElement(Z,null,o.a.createElement(ee,{color:t}),o.a.createElement(function(){return n.map(function(e,n){return o.a.createElement(X,{key:n},e.map(function(e,n){return o.a.createElement(Y,{color:t,key:n},Number.isInteger(e)?e:e.toFixed(2))}))})},null),o.a.createElement(te,{color:t}))},re=function(e){var t=e.columns,n=e.name,r=e.color;return o.a.createElement(U,{color:r},o.a.createElement(q,{color:r},n),o.a.createElement(ne,{columns:t,color:r}))};function oe(){var e=Object(i.a)(["\n  color: ",";\n  margin-right: 6px;\n"]);return oe=function(){return e},e}var ae=u.c.p(oe(),function(e){return e.color}),ce=function(e){var t=e.left,n=e.right,r=e.color;return o.a.createElement(U,{color:r},o.a.createElement(ae,null,t),o.a.createElement(ae,null,n))},ie=Object(u.d)(function(e){var t=e.theme,n=new d.Vector(0,5),r=t.color.green,a=new d.Vector(6,2),c=t.color.red,i={renderInformation:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(re,{columns:[n.components],name:"v\u20d7",color:r}),o.a.createElement(ce,{left:"||".concat("v\u20d7","||"),right:n.length().toFixed(2)}),o.a.createElement(re,{columns:[a.components],name:"w\u20d7",color:c}),o.a.createElement(ce,{left:"||".concat("w\u20d7","||"),right:a.length().toFixed(2)}))},renderGridContent:function(e){var t=e.project;return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{project:t,vector:n,text:"v\u20d7",color:r}),o.a.createElement(G,{project:t,vector:a,text:"w\u20d7",color:c}))}};return o.a.createElement(B,i)}),ue=Object(u.d)(function(e){var t=e.theme,n=new d.Vector(2,4),r=t.color.green,a=n.scaleBy(.5),c="".concat(.5).concat("v\u20d7"),i=t.color.red,u=n.scaleBy(-2),l="".concat(-2).concat("v\u20d7"),m=t.color.blue,s={renderInformation:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(re,{columns:[n.components],name:"v\u20d7",color:r}),o.a.createElement(re,{columns:[a.components],name:c,color:i}),o.a.createElement(re,{columns:[u.components],name:l,color:m}))},renderGridContent:function(e){var t=e.project;return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{project:t,vector:n,text:"v\u20d7",color:r}),o.a.createElement(G,{project:t,vector:a,text:c,color:i}),o.a.createElement(G,{project:t,vector:u,text:l,color:m}))}};return o.a.createElement(B,s)}),le=Object(u.d)(function(e){var t=e.theme,n=new d.Vector(0,5),r=new d.Vector(6,2),a=t.color.green,c=t.color.red,i=n.add(r),u=t.color.blue,l="".concat("v\u20d7"," + ").concat("w\u20d7"),m={renderInformation:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(re,{columns:[n.components],name:"v\u20d7",color:a}),o.a.createElement(re,{columns:[r.components],name:"w\u20d7",color:c}),o.a.createElement(re,{columns:[i.components],name:l,color:u}))},renderGridContent:function(e){var t=e.project;return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{project:t,vector:n,text:"v\u20d7",color:a}),o.a.createElement(G,{project:t,vector:r,text:"w\u20d7",color:c}),o.a.createElement(G,{project:t,vector:i,text:l,color:u}))}};return o.a.createElement(B,m)}),me=Object(u.d)(function(e){var t=e.theme,n=new d.Vector(0,5),r=new d.Vector(6,2),a=t.color.green,c=t.color.red,i=n.subtract(r),u=t.color.blue,l="".concat("v\u20d7"," - ").concat("w\u20d7"),m={renderInformation:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(re,{columns:[n.components],name:"v\u20d7",color:a}),o.a.createElement(re,{columns:[r.components],name:"w\u20d7",color:c}),o.a.createElement(re,{columns:[i.components],name:l,color:u}))},renderGridContent:function(e){var t=e.project;return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{project:t,vector:n,text:"v\u20d7",color:a}),o.a.createElement(G,{project:t,vector:r,text:"w\u20d7",color:c}),o.a.createElement(G,{project:t,vector:i,text:l,color:u}))}};return o.a.createElement(B,m)}),se=Object(u.d)(function(e){var t=e.theme,n=new d.Vector(0,5),r=new d.Vector(6,2),a=t.color.green,c=t.color.red,i=n.dotProduct(r).toFixed(2),u={renderInformation:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(re,{columns:[n.components],name:"v\u20d7",color:a}),o.a.createElement(re,{columns:[r.components],name:"w\u20d7",color:c}),o.a.createElement(ce,{left:"v\u20d7 \xb7 w\u20d7",right:i}))},renderGridContent:function(e){var t=e.project;return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{project:t,vector:n,text:"v\u20d7",color:a}),o.a.createElement(G,{project:t,vector:r,text:"w\u20d7",color:c}))}};return o.a.createElement(B,u)}),fe=Object(u.d)(function(e){var t=e.theme,n=new d.Vector(1,0),r=new d.Vector(0,1),a=n.scaleBy(2).add(r.scaleBy(5)),c=t.color.green,i=t.color.red,u="v\u20d7 = ".concat(2).concat("i\u20d7"," + ").concat(5).concat("j\u20d7"),l=t.color.blue,m={renderInformation:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(re,{columns:[n.components],name:"i\u20d7",color:c}),o.a.createElement(re,{columns:[r.components],name:"j\u20d7",color:i}),o.a.createElement(re,{columns:[a.components],name:u,color:l}))},renderGridContent:function(e){var t=e.project;return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{project:t,vector:n,text:"i\u20d7",color:c}),o.a.createElement(G,{project:t,vector:r,text:"j\u20d7",color:i}),o.a.createElement(G,{project:t,vector:a,text:u,color:l}))}};return o.a.createElement(B,m)}),he=n(4),pe=n(12);function de(){var e=Object(i.a)(["\n  fill: ",";\n  opacity: 0.2;\n"]);return de=function(){return e},e}var ve=u.c.polygon(de(),function(e){return e.color}),we=function(e){var t=e.contour,n=e.color,r=e.project,a=t.map(r).vectors.map(function(e){return e.components});return o.a.createElement(ve,{points:a,color:n})},Ee=new pe.Contour([new d.Vector(0,0),new d.Vector(0,4),new d.Vector(4,4),new d.Vector(4,0)]),xe=Object(u.d)(function(e){var t=e.theme,n=e.matrix,r=t.color.blue,a={renderInformation:function(){return o.a.createElement(re,{name:"T",columns:n.columns(),color:r})},renderGridContent:function(e){var a=e.project,c=Ee.transform(n);return o.a.createElement(o.a.Fragment,null,o.a.createElement(we,{contour:Ee,color:t.color.red,project:a}),o.a.createElement(we,{contour:c,color:r,project:a}))}};return o.a.createElement(B,a)}),be=new he.Matrix([-1,0],[0,1]),je=new he.Matrix([3,0,0],[0,3,0],[0,0,3]),ge=n(14),ye=Object(ge.toRadians)(45),Oe=new he.Matrix([Math.cos(ye),-Math.sin(ye)],[Math.sin(ye),Math.cos(ye)]),ke=new he.Matrix([1,.5],[0,1]),Me=new pe.Contour([new d.Vector(0,0),new d.Vector(0,4),new d.Vector(4,4),new d.Vector(4,0)]),Ve=Object(u.d)(function(e){var t=e.firstMatrix,n=e.secondMatrix,r=e.reversed,a=void 0!==r&&r,c=e.theme,i=c.color.red,u=c.color.blue,l=c.color.green,m=c.color.yellow,s=a?t.multiply(n):n.multiply(t),f=function(){var e=[o.a.createElement(q,{key:"A",color:u},"A"),o.a.createElement(q,{key:"B",color:l},"B")];return a?e.reverse():e},h=function(){var e=[o.a.createElement(ne,{key:"A",color:u,columns:t.columns()}),o.a.createElement(ne,{key:"B",color:l,columns:n.columns()})];return a?e.reverse():e},p={renderInformation:function(){return o.a.createElement(U,null,o.a.createElement(q,{color:m},"C"),o.a.createElement(f,null),o.a.createElement(h,null),o.a.createElement(ne,{color:m,columns:s.columns()}))},renderGridContent:function(e){var t=e.project,n=Me.transform(s);return o.a.createElement(o.a.Fragment,null,o.a.createElement(we,{contour:Me,color:i,project:t}),o.a.createElement(we,{contour:n,color:m,project:t}))}};return o.a.createElement(B,p)}),Ae=new he.Matrix([-1,0],[0,1]),Ce=new he.Matrix([1,.5],[0,1]),Fe=new he.Matrix([-1,0],[0,1]),Be=new he.Matrix([1,.5],[0,1]),Ie=new pe.Contour([new d.Vector(0,0),new d.Vector(0,1),new d.Vector(1,1),new d.Vector(1,0)]),ze=Object(u.d)(function(e){var t=e.theme,n=e.matrix,r=e.cells,a=e.withVectors,c=void 0!==a&&a,i=t.color.red,u=t.color.blue,l=Ie.transform(n),m={cells:r,renderInformation:function(){return o.a.createElement(U,null,o.a.createElement(R,null,o.a.createElement(q,null,"det("),o.a.createElement(ne,{color:u,columns:n.columns()}),o.a.createElement(q,null,")")),o.a.createElement(q,null,n.determinant()))},renderGridContent:function(e){var t=e.project;return o.a.createElement(o.a.Fragment,null,o.a.createElement(we,{contour:Ie,color:i,project:t}),o.a.createElement(we,{contour:l,color:u,project:t}),o.a.createElement(function(){if(!c)return null;var e=new d.Vector(1,0),r=new d.Vector(0,1);return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{project:t,vector:e,text:"i\u20d7",color:i}),o.a.createElement(G,{project:t,vector:r,text:"j\u20d7",color:i}),o.a.createElement(G,{project:t,vector:e.transform(n),text:"i\u20d7",color:u}),o.a.createElement(G,{project:t,vector:r.transform(n),text:"j\u20d7",color:u}))},null))}};return o.a.createElement(B,m)}),Pe=new he.Matrix([3,0],[0,2]),Te=n(17),De=n(5),Se=function(e){return e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return"#"+t+t+n+n+r+r}).substring(1).match(/.{2}/g).map(function(e){return parseInt(e,16)})},Ge=function(e,t,n){var r,o=Se(e),a=Se(t),c=o.map(function(e,t){var n=a[t];return e<=n?n-e:255-e+n});return function(){r||(r=Date.now());var e=Date.now()-r;if(e>n)return t;var a=e/n,i=o.map(function(e,t){var n=c[t]*a;return Math.round((e+n)%255)});return function(e,t,n){return"#"+[e,t,n].map(function(e){return e.toString(16).padStart(2,"0")}).join("")}.apply(void 0,Object(v.a)(i))}},We=function(e,t,n){var r,o=t.subtract(e);return function(){r||(r=Date.now());var a=Date.now()-r;if(a>n)return t;var c=a/n;return e.map(function(e,t,n){return e+o.rows[t][n]*c})}},qe=n(31),Le=function(e){var t=new De.Matrix4;return t.set.apply(t,Object(v.a)(e.components())),t},Re=function(e){var t=e.toArray(),n=new Array(4).fill(0).map(function(e,n){return t.slice(4*n,4*(n+1))});return Object(qe.a)(he.Matrix,Object(v.a)(n))},Ue=n(32),He=n.n(Ue);function Ne(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n"]);return Ne=function(){return e},e}var Je=u.c.div(Ne()),$e=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={width:0,height:0,scene:void 0,camera:void 0,renderer:void 0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Je,{ref:function(t){return e.view=t}}),o.a.createElement(function(){var t=e.props.renderView,n=e.state,r=n.scene,o=n.camera,a=n.renderer;return r?t({scene:r,camera:o,renderer:a}):null},null))}},{key:"componentDidMount",value:function(){var e=this.props,t=e.size,n=t.width,r=t.height,o=e.theme,a=new De.Scene,c=new De.PerspectiveCamera(100,n/r);c.position.set(1,1,4);var i=new De.WebGLRenderer({antialias:!0});i.setClearColor(o.color.background),i.setSize(n,r),this.view.appendChild(i.domElement),new He.a(c),this.setState({width:n,height:r,scene:a,camera:c,renderer:i})}},{key:"componentWillUnmount",value:function(){var e=this.state.renderer;e&&this.view.removeChild(e.domElement)}},{key:"componentWillReceiveProps",value:function(e){var t=e.size,n=t.width,r=t.height;this.state.width===n&&this.state.height===r||(this.setState({width:n,height:r}),this.renderer.setSize(n,r),this.camera.aspect=n/r,this.camera.updateProjectionMatrix())}}]),t}(o.a.Component),Ke=Object(u.d)(Object(w.withSize)({monitorHeight:!0})($e)),Qe=function(e){function t(){var e,n;Object(m.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).animate=function(){var e=n.props,t=e.scene,r=e.camera,o=e.renderer,a=n.getAnimatedTransformation(),c=Le(a);n.cube.material.color.set(n.getAnimatedColor()),n.objects.forEach(function(e){var t;return(t=e.matrix).set.apply(t,Object(v.a)(c.toArray()))}),o.render(t,r),n.frameId=window.requestAnimationFrame(n.animate)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return null}},{key:"componentDidMount",value:function(){var e=this.props,t=e.matrix,n=e.theme,r=e.scene,o=new De.AxesHelper(4),a=n.color.red,c=new De.BoxGeometry(1,1,1);this.segments=new De.LineSegments(new De.EdgesGeometry(c),new De.LineBasicMaterial({color:n.color.mainText})),this.cube=new De.Mesh(c,new De.MeshBasicMaterial({color:a})),this.objects=[this.cube,this.segments],this.objects.forEach(function(e){return e.matrixAutoUpdate=!1}),r.add(this.cube,o,this.segments),this.getAnimatedColor=Ge(a,n.color.blue,5e3);var i=Re(this.cube.matrix),u=t.toDimension(4);this.getAnimatedTransformation=We(i,u,5e3),this.frameId=requestAnimationFrame(this.animate)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.frameId)}}]),t}(o.a.Component),Xe=Object(u.d)(function(e){var t=e.matrix,n=e.renderInformation,r=e.theme;return o.a.createElement(A,null,o.a.createElement(Ke,{renderView:function(e){var n=Object(Te.a)({},e,{matrix:t,theme:r});return o.a.createElement(Qe,n)}}),o.a.createElement(F,null,o.a.createElement(function(){return n?n({transformedColor:r.color.blue}):null},null)))}),Ye=function(e){var t=e.matrix;return o.a.createElement(Xe,{renderInformation:function(e){var n=e.transformedColor;return o.a.createElement(U,null,o.a.createElement(R,null,o.a.createElement(q,null,"det("),o.a.createElement(ne,{color:n,columns:t.columns()}),o.a.createElement(q,null,")")),o.a.createElement(q,null,t.determinant()))},matrix:t})},Ze=new he.Matrix([3,0,0],[0,3,0],[0,0,3]),_e=new he.Matrix([1,.5],[0,1]),et=new he.Matrix([2,1],[-1,-2]),tt=new he.Matrix([4,2],[2,1]),nt=new he.Matrix([1,0,1],[.5,1,1.5],[1,0,1]),rt=new he.Matrix([1,2,0],[0,1,0],[0,0,1]);function ot(){var e=Object(i.a)(["\n  color: ",";\n"]);return ot=function(){return e},e}var at=3e3,ct=function(e){function t(){var e,n;Object(m.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).animate=function(){var e=n.props,t=e.theme,r=e.scene,o=e.camera,a=e.renderer,c=Date.now();if(n.animationStart||(n.animationStart=c,n.animationChange=c),c-n.animationChange>at){n.animationChange=c;var i=c-n.animationStart;Math.round(i/at)%2?(n.getAnimatedColor=Ge(t.color.blue,t.color.red,at),n.getAnimatedTransformation=We(n.finalMatrix,n.initialMatrix,at)):(n.getAnimatedColor=Ge(t.color.red,t.color.blue,at),n.getAnimatedTransformation=We(n.initialMatrix,n.finalMatrix,at))}var u=n.getAnimatedTransformation(),l=Le(u);n.cube.material.color.set(n.getAnimatedColor()),n.objects.forEach(function(e){var t;return(t=e.matrix).set.apply(t,Object(v.a)(l.toArray()))}),a.render(r,o),n.frameId=window.requestAnimationFrame(n.animate)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return null}},{key:"componentDidMount",value:function(){var e=this.props,t=e.matrix,n=e.theme,r=e.scene,o=new De.AxesHelper(4),a=n.color.red,c=new De.BoxGeometry(1,1,1);this.segments=new De.LineSegments(new De.EdgesGeometry(c),new De.LineBasicMaterial({color:n.color.mainText})),this.cube=new De.Mesh(c,new De.MeshBasicMaterial({color:a})),this.objects=[this.cube,this.segments],this.objects.forEach(function(e){return e.matrixAutoUpdate=!1}),r.add(this.cube,o,this.segments),this.getAnimatedColor=Ge(a,n.color.blue,at),this.initialMatrix=Re(this.cube.matrix),this.finalMatrix=t.toDimension(4),this.getAnimatedTransformation=We(this.initialMatrix,this.finalMatrix,at),this.frameId=requestAnimationFrame(this.animate)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.frameId)}}]),t}(o.a.Component),it=u.c.sup(ot(),function(e){return e.color}),ut=Object(u.d)(function(e){var t=e.matrix,n=e.theme;return o.a.createElement(A,null,o.a.createElement(Ke,{renderView:function(e){var r=Object(Te.a)({},e,{matrix:t,theme:n});return o.a.createElement(ct,r)}}),o.a.createElement(F,null,o.a.createElement(function(){var e=t.inverse(),r=n.color.blue,a=n.color.red;return o.a.createElement(o.a.Fragment,null,o.a.createElement(U,null,o.a.createElement(q,{color:r},"A"),o.a.createElement(ne,{color:r,columns:t.columns()})),o.a.createElement(U,null,o.a.createElement(q,{color:a},"A",o.a.createElement(it,{color:a},"-1")),o.a.createElement(ne,{color:a,columns:e.columns()})))},null)))}),lt=new he.Matrix([1,2,0],[0,1,0],[0,0,1]),mt=new he.Matrix([3,0,0],[0,3,0],[0,0,3]),st={"vectors: addition":le,"vectors: subtraction":me,"vectors: length":ie,"vectors: scale":ue,"vectors: dot product":se,"vectors: linear combination":fe,"linear transformation: reflection":function(){return o.a.createElement(xe,{matrix:be})},"linear transformation: scale":function(){return o.a.createElement(xe,{matrix:je})},"linear transformation: rotation":function(){return o.a.createElement(xe,{matrix:Oe})},"linear transformation: shear":function(){return o.a.createElement(xe,{matrix:ke})},"linear transformation: shear 3D":function(){return o.a.createElement(Xe,{renderInformation:function(e){var t=e.transformedColor;return o.a.createElement(re,{name:"T",columns:rt.columns(),color:t})},matrix:rt})},"matrix-matrix multiplication: AB":function(){return o.a.createElement(Ve,{firstMatrix:Ae,secondMatrix:Ce})},"matrix-matrix multiplication: BA":function(){return o.a.createElement(Ve,{firstMatrix:Fe,secondMatrix:Be,reversed:!0})},"determinant: scale transformation":function(){return o.a.createElement(ze,{cells:4,matrix:Pe})},"determinant: scale transformation 3D":function(){return o.a.createElement(Ye,{matrix:Ze})},"determinant: shear transformation":function(){return o.a.createElement(ze,{cells:4,matrix:_e})},"determinant: negative":function(){return o.a.createElement(ze,{withVectors:!0,cells:4,matrix:et})},"determinant: zero":function(){return o.a.createElement(ze,{withVectors:!0,cells:5,matrix:tt})},"determinant: zero 3D":function(){return o.a.createElement(Ye,{matrix:nt})},"inverse: shear 3D":function(){return o.a.createElement(ut,{matrix:lt})},"inverse: scale 3D":function(){return o.a.createElement(ut,{matrix:mt})}};function ft(){var e=Object(i.a)(["\n  cursor: pointer;\n  margin: 10px;\n  color: ",";\n  transition: 0.35s ease-in-out;\n  &:hover {\n    color: ",";\n  }\n"]);return ft=function(){return e},e}var ht=u.c.p(ft(),function(e){return e.selected?e.theme.color.mainText:e.theme.color.secondaryText},function(e){return e.theme.color.mainText}),pt=function(e){var t=e.text,n=e.onClick,r=e.selected;return o.a.createElement(ht,{onClick:n,selected:r},t)};function dt(){var e=Object(i.a)(["\n  position: absolute;\n  top: 40px;\n  right: 40px;\n"]);return dt=function(){return e},e}function vt(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  flex-direction: row;\n  position: relative;\n"]);return vt=function(){return e},e}var wt=u.c.div(vt()),Et=u.c.div(dt()),xt=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={view:Object.keys(st)[0]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.view,n=st[t],r=Object.keys(st);return o.a.createElement(wt,null,o.a.createElement(n,null),o.a.createElement(Et,null,o.a.createElement(function(){return r.map(function(n){return o.a.createElement(pt,{key:n,selected:n===t,text:n,onClick:function(){return e.setState({view:n})}})})},null)))}}]),t}(o.a.Component);function bt(){var e=Object(i.a)(["\n  html {\n    height: 100%;\n  }\n  body {\n    height: 100%;\n    background-color: ",";\n  }\n  #root {\n    height: 100%;\n  }\n\n  * {\n    margin: 0;\n    outline: none;\n    box-sizing: border-box;\n    font-family: sans-serif;\n    color: ",";\n  }\n"]);return bt=function(){return e},e}var jt=Object(u.b)(bt(),function(e){return e.theme.color.background},function(e){return e.theme.color.mainText});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(function(){return o.a.createElement(u.a,{theme:l},o.a.createElement(o.a.Fragment,null,o.a.createElement(jt,null),o.a.createElement(xt,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.39201b30.chunk.js.map