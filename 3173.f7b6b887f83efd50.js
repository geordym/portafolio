"use strict";(self.webpackChunkproject_portafolio=self.webpackChunkproject_portafolio||[]).push([[3173],{3173:(j,f,a)=>{a.r(f),a.d(f,{EmittersCircleShapeGenerator:()=>g});var S=a(467),v=a(1194),u=a(1033);const I=2*Math.PI;class b extends v.B{constructor(t,s,e,i){super(t,s,e,i)}init(){return(0,S.A)(function*(){})()}randomPosition(){const t=this.size,s=this.fill,e=this.position,[C,E]=[.5*t.width,.5*t.height],d=((n,o)=>{const h=.25*(0,u.G0)(),l=Math.atan(o/n*Math.tan(I*h)),p=(0,u.G0)();return p<.25?l:p<.5?Math.PI-l:p<.75?Math.PI+l:-l})(C,E),G=(h=d,(n=C)*(o=E)/Math.sqrt((o*Math.cos(h))**2+(n*Math.sin(h))**2)),P=s?G*Math.sqrt((0,u.G0)()):G;var n,o,h;return{position:{x:e.x+P*Math.cos(d),y:e.y+P*Math.sin(d)}}}}class g{generate(t,s,e,i){return new b(t,s,e,i)}}}}]);