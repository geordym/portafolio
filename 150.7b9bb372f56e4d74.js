"use strict";(self.webpackChunkproject_portafolio=self.webpackChunkproject_portafolio||[]).push([[150],{2583:(O,f,r)=>{r.r(f),r.d(f,{downloadSvgImage:()=>g,loadImage:()=>u,replaceImageColor:()=>l});var c=r(467),a=r(1033);const h=0,I=1,y=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;function u(e){return n.apply(this,arguments)}function n(){return(n=(0,c.A)(function*(e){return new Promise(t=>{e.loading=!0;const s=new Image;e.element=s,s.addEventListener("load",()=>{e.loading=!1,t()}),s.addEventListener("error",()=>{e.element=void 0,e.error=!0,e.loading=!1,(0,a.tZ)().error(`${a.dI} loading image: ${e.source}`),t()}),s.src=e.source})})).apply(this,arguments)}function g(e){return o.apply(this,arguments)}function o(){return(o=(0,c.A)(function*(e){if("svg"!==e.type)return void(yield u(e));e.loading=!0;const t=yield fetch(e.source);t.ok?e.svgData=yield t.text():((0,a.tZ)().error(`${a.dI} Image not found`),e.error=!0),e.loading=!1})).apply(this,arguments)}function l(e,t,s,i){const m=function v(e,t,s){const{svgData:i}=e;if(!i)return"";const m=(0,a.LC)(t,s);if(i.includes("fill"))return i.replace(y,()=>m);const d=i.indexOf(">");return`${i.substring(h,d)} fill="${m}"${i.substring(d)}`}(e,s,i.opacity?.value??I),d={color:s,gif:t.gif,data:{...e,svgData:m},loaded:!1,ratio:t.width/t.height,replaceColor:t.replaceColor,source:t.src};return new Promise(P=>{const w=new Blob([m],{type:"image/svg+xml"}),E=URL||window.URL||window.webkitURL||window,C=E.createObjectURL(w),p=new Image;p.addEventListener("load",()=>{d.loaded=!0,d.element=p,P(d),E.revokeObjectURL(C)});const R=function(){var U=(0,c.A)(function*(){E.revokeObjectURL(C);const L={...e,error:!1,loading:!0};yield u(L),d.loaded=!0,d.element=L.element,P(d)});return function(){return U.apply(this,arguments)}}();p.addEventListener("error",()=>{R()}),p.src=C})}},150:(O,f,r)=>{r.r(f),r.d(f,{loadImageShape:()=>v});var c=r(467),a=r(2583),h=r(1033);const I=3;function v(n){return u.apply(this,arguments)}function u(){return u=(0,c.A)(function*(n,g=!0){!function y(n){n.loadImage||(n.loadImage=function(){var g=(0,c.A)(function*(o){if(!o.name&&!o.src)throw new Error(`${h.dI} no image source provided`);if(n.images||(n.images=[]),!n.images.find(l=>l.name===o.name||l.source===o.src))try{const l={gif:o.gif??!1,name:o.name??o.src,source:o.src,type:o.src.substring(o.src.length-I),error:!1,loading:!0,replaceColor:o.replaceColor,ratio:o.width&&o.height?o.width/o.height:void 0};let e;if(n.images.push(l),o.gif){const{loadGifImage:t}=yield r.e(2076).then(r.bind(r,9175));e=t}else e=o.replaceColor?a.downloadSvgImage:a.loadImage;yield e(l)}catch{throw new Error(`${h.dI} ${o.name??o.src} not found`)}});return function(o){return g.apply(this,arguments)}}())}(n);const{ImagePreloaderPlugin:o}=yield r.e(9082).then(r.bind(r,9082)),{ImageDrawer:l}=yield Promise.all([r.e(2076),r.e(8578)]).then(r.bind(r,8578)),e=new o(n);yield n.addPlugin(e,g),yield n.addShape(["image","images"],new l(n),g)}),u.apply(this,arguments)}}}]);