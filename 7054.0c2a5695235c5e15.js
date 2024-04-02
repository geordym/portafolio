"use strict";(self.webpackChunkproject_portafolio=self.webpackChunkproject_portafolio||[]).push([[7054],{7054:(yt,H,b)=>{b.r(H),b.d(H,{Container:()=>vt});var w=b(467),p=b(9478),_=b(6122),P=b(1838),z=b(5531);function K(u,t,n){const e=t[n];void 0!==e&&(u[n]=(u[n]??1)*e)}function X(u,t,n=!1){if(!t)return;if(!u)return;const i=u.style;if(i)for(const s in t){const o=t[s];o&&i.setProperty(s,o,n?"important":"")}}class tt{constructor(t){var n=this;this.container=t,this._applyPostDrawUpdaters=e=>{for(const i of this._postDrawUpdaters)i.afterDraw?.(e)},this._applyPreDrawUpdaters=(e,i,s,o,r,a)=>{for(const c of this._preDrawUpdaters){if(c.getColorStyles){const{fill:h,stroke:l}=c.getColorStyles(i,e,s,o);h&&(r.fill=h),l&&(r.stroke=l)}if(c.getTransformValues){const h=c.getTransformValues(i);for(const l in h)K(a,h,l)}c.beforeDraw?.(i)}},this._applyResizePlugins=()=>{for(const e of this._resizePlugins)e.resize?.()},this._getPluginParticleColors=e=>{let i,s;for(const o of this._colorPlugins)if(!i&&o.particleFillColor&&(i=(0,z.R5)(o.particleFillColor(e))),!s&&o.particleStrokeColor&&(s=(0,z.R5)(o.particleStrokeColor(e))),i&&s)break;return[i,s]},this._initCover=(0,w.A)(function*(){const i=n.container.actualOptions.backgroundMask.cover,s=i.color;if(s){const o=(0,z.BN)(s);if(o){const r={...o,a:i.opacity};n._coverColorStyle=(0,z.xx)(r,r.a)}}else yield new Promise((o,r)=>{if(!i.image)return;const a=document.createElement("img");a.addEventListener("load",()=>{n._coverImage={image:a,opacity:i.opacity},o()}),a.addEventListener("error",c=>{r(c.error)}),a.src=i.image})}),this._initStyle=()=>{const e=this.element,i=this.container.actualOptions;if(e){this._fullScreen?(this._originalStyle=(0,_.zw)({},e.style),this._setFullScreenStyle()):this._resetOriginalStyle();for(const s in i.style){if(!s||!i.style)continue;const o=i.style[s];o&&e.style.setProperty(s,o,"important")}}},this._initTrail=(0,w.A)(function*(){const i=n.container.actualOptions.particles.move.trail,s=i.fill;if(!i.enable)return;const r=1/i.length;if(s.color){const a=(0,z.BN)(s.color);if(!a)return;n._trailFill={color:{...a},opacity:r}}else yield new Promise((a,c)=>{if(!s.image)return;const h=document.createElement("img");h.addEventListener("load",()=>{n._trailFill={image:h,opacity:r},a()}),h.addEventListener("error",l=>{c(l.error)}),h.src=s.image})}),this._paintBase=e=>{this.draw(i=>(0,P.Sn)(i,this.size,e))},this._paintImage=(e,i)=>{this.draw(s=>(0,P.Md)(s,this.size,e,i))},this._repairStyle=()=>{const e=this.element;e&&(this._safeMutationObserver(i=>i.disconnect()),this._initStyle(),this.initBackground(),this._safeMutationObserver(i=>i.observe(e,{attributes:!0})))},this._resetOriginalStyle=()=>{const e=this.element,i=this._originalStyle;e&&i&&X(e,i)},this._safeMutationObserver=e=>{this._mutationObserver&&e(this._mutationObserver)},this._setFullScreenStyle=()=>{const e=this.element;e&&X(e,{position:"fixed",zIndex:this.container.actualOptions.fullScreen.zIndex.toString(10),top:"0",left:"0",width:"100%",height:"100%"},!0)},this.size={height:0,width:0},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){const t=this.container.actualOptions,n=t.particles.move.trail,e=this._trailFill;t.backgroundMask.enable?this.paint():n.enable&&n.length>0&&e?e.color?this._paintBase((0,z.xx)(e.color,e.opacity)):e.image&&this._paintImage(e.image,e.opacity):t.clear&&this.draw(s=>{(0,P.IU)(s,this.size)})}destroy(){this.stop(),this._generated?this.element?.remove():this._resetOriginalStyle(),this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(t){const n=this._context;if(n)return t(n)}drawAsync(t){const n=this._context;if(n)return t(n)}drawParticle(t,n){if(t.spawning||t.destroyed)return;const e=t.getRadius();if(e<=0)return;const s=t.getFillColor(),o=t.getStrokeColor()??s;let[r,a]=this._getPluginParticleColors(t);r||(r=s),a||(a=o),(r||a)&&this.draw(c=>{const h=this.container,l=h.actualOptions,f=t.options.zIndex,d=1-t.zIndexFactor,v=d**f.opacityRate,k=t.bubble.opacity??t.opacity?.value??1,I=k*v,E=(t.strokeOpacity??k)*v,T={},x={fill:r?(0,z.LC)(r,I):void 0};x.stroke=a?(0,z.LC)(a,E):x.fill,this._applyPreDrawUpdaters(c,t,e,I,x,T),(0,P.p0)({container:h,context:c,particle:t,delta:n,colorStyles:x,backgroundMask:l.backgroundMask.enable,composite:l.backgroundMask.composite,radius:e*d**f.sizeRate,opacity:I,shadow:t.options.shadow,transform:T}),this._applyPostDrawUpdaters(t)})}drawParticlePlugin(t,n,e){this.draw(i=>(0,P.Wb)(i,t,n,e))}drawPlugin(t,n){this.draw(e=>(0,P.e_)(e,t,n))}init(){var t=this;return(0,w.A)(function*(){t._safeMutationObserver(n=>n.disconnect()),t._mutationObserver=(0,_.tG)(n=>{for(const e of n)"attributes"===e.type&&"style"===e.attributeName&&t._repairStyle()}),t.resize(),t._initStyle(),yield t._initCover();try{yield t._initTrail()}catch(n){(0,_.tZ)().error(n)}t.initBackground(),t._safeMutationObserver(n=>{t.element&&n.observe(t.element,{attributes:!0})}),t.initUpdaters(),t.initPlugins(),t.paint()})()}initBackground(){const n=this.container.actualOptions.background,e=this.element;if(!e)return;const i=e.style;if(i){if(n.color){const s=(0,z.BN)(n.color);i.backgroundColor=s?(0,z.xx)(s,n.opacity):""}else i.backgroundColor="";i.backgroundImage=n.image||"",i.backgroundPosition=n.position||"",i.backgroundRepeat=n.repeat||"",i.backgroundSize=n.size||""}}initPlugins(){this._resizePlugins=[];for(const[,t]of this.container.plugins)t.resize&&this._resizePlugins.push(t),(t.particleFillColor??t.particleStrokeColor)&&this._colorPlugins.push(t)}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(const t of this.container.particles.updaters)t.afterDraw&&this._postDrawUpdaters.push(t),(t.getColorStyles??t.getTransformValues??t.beforeDraw)&&this._preDrawUpdaters.push(t)}loadCanvas(t){this._generated&&this.element&&this.element.remove(),this._generated=t.dataset&&p.eb in t.dataset?"true"===t.dataset[p.eb]:this._generated,this.element=t,this.element.ariaHidden="true",this._originalStyle=(0,_.zw)({},this.element.style),this.size.height=t.offsetHeight,this.size.width=t.offsetWidth,this._context=this.element.getContext("2d"),this._safeMutationObserver(n=>{this.element&&n.observe(this.element,{attributes:!0})}),this.container.retina.init(),this.initBackground()}paint(){const t=this.container.actualOptions;this.draw(n=>{t.backgroundMask.enable&&t.backgroundMask.cover?((0,P.IU)(n,this.size),this._coverImage?this._paintImage(this._coverImage.image,this._coverImage.opacity):this._coverColorStyle?this._paintBase(this._coverColorStyle):this._paintBase()):this._paintBase()})}resize(){if(!this.element)return!1;const t=this.container,n=t.retina.pixelRatio,e=t.canvas.size,i_width=this.element.offsetWidth*n,i_height=this.element.offsetHeight*n;if(i_height===e.height&&i_width===e.width&&i_height===this.element.height&&i_width===this.element.width)return!1;const s={...e};return this.element.width=e.width=this.element.offsetWidth*n,this.element.height=e.height=this.element.offsetHeight*n,this.container.started&&t.particles.setResizeFactor({width:e.width/s.width,height:e.height/s.height}),!0}stop(){this._safeMutationObserver(t=>t.disconnect()),this._mutationObserver=void 0,this.draw(t=>(0,P.IU)(t,this.size))}windowResize(){var t=this;return(0,w.A)(function*(){if(!t.element||!t.resize())return;const n=t.container,e=n.updateActualOptions();n.particles.setDensity(),t._applyResizePlugins(),e&&(yield n.refresh())})()}}var et=b(8994);function O(u,t,n,e,i){if(e){let s={passive:!0};(0,et.Lm)(i)?s.capture=i:void 0!==i&&(s=i),u.addEventListener(t,n,s)}else u.removeEventListener(t,n,i)}class it{constructor(t){var n=this;this.container=t,this._doMouseTouchClick=e=>{const i=this.container,s=i.actualOptions;if(this._canPush){const o=i.interactivity.mouse,r=o.position;if(!r)return;o.clickPosition={...r},o.clickTime=(new Date).getTime(),(0,_.wJ)(s.interactivity.events.onClick.mode,c=>this.container.handleClickMode(c))}"touchend"===e.type&&setTimeout(()=>this._mouseTouchFinish(),500)},this._handleThemeChange=e=>{const s=this.container,o=s.options,r=o.defaultThemes,a=e.matches?r.dark:r.light,c=o.themes.find(h=>h.name===a);c&&c.default.auto&&s.loadTheme(a)},this._handleVisibilityChange=()=>{const e=this.container,i=e.actualOptions;this._mouseTouchFinish(),i.pauseOnBlur&&(document&&document.hidden?(e.pageHidden=!0,e.pause()):(e.pageHidden=!1,e.animationStatus?e.play(!0):e.draw(!0)))},this._handleWindowResize=()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout);const e=function(){var i=(0,w.A)(function*(){yield n.container.canvas?.windowResize()});return function(){return i.apply(this,arguments)}}();this._resizeTimeout=setTimeout(()=>{e()},this.container.actualOptions.interactivity.events.resize.delay*p.Xu)},this._manageInteractivityListeners=(e,i)=>{const s=this._handlers,o=this.container,r=o.actualOptions,a=o.interactivity.element;if(!a)return;const h=o.canvas.element;h&&(h.style.pointerEvents=a===h?"initial":"none"),(r.interactivity.events.onHover.enable||r.interactivity.events.onClick.enable)&&(O(a,p.Rb,s.mouseMove,i),O(a,p.s7,s.touchStart,i),O(a,p.DG,s.touchMove,i),r.interactivity.events.onClick.enable?(O(a,p.Bp,s.touchEndClick,i),O(a,p.vo,s.mouseUp,i),O(a,p.ms,s.mouseDown,i)):O(a,p.Bp,s.touchEnd,i),O(a,e,s.mouseLeave,i),O(a,p.G3,s.touchCancel,i))},this._manageListeners=e=>{const i=this._handlers,s=this.container,r=s.actualOptions.interactivity.detectsOn,a=s.canvas.element;let c=p.Z0;"window"===r?(s.interactivity.element=window,c=p.sf):s.interactivity.element="parent"===r&&a?a.parentElement??a.parentNode:a,this._manageMediaMatch(e),this._manageResize(e),this._manageInteractivityListeners(c,e),document&&O(document,p.nK,i.visibilityChange,e,!1)},this._manageMediaMatch=e=>{const i=this._handlers,s=(0,_.lV)("(prefers-color-scheme: dark)");if(s){if(void 0!==s.addEventListener)return void O(s,"change",i.themeChange,e);void 0!==s.addListener&&(e?s.addListener(i.oldThemeChange):s.removeListener(i.oldThemeChange))}},this._manageResize=e=>{const s=this.container;if(!s.actualOptions.interactivity.events.resize)return;if(typeof ResizeObserver>"u")return void O(window,p.NF,this._handlers.resize,e);const r=s.canvas.element;this._resizeObserver&&!e?(r&&this._resizeObserver.unobserve(r),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&e&&r&&(this._resizeObserver=new ResizeObserver(a=>{a.find(h=>h.target===r)&&this._handleWindowResize()}),this._resizeObserver.observe(r))},this._mouseDown=()=>{const{interactivity:e}=this.container;if(!e)return;const{mouse:i}=e;i.clicking=!0,i.downPosition=i.position},this._mouseTouchClick=e=>{const i=this.container,s=i.actualOptions,{mouse:o}=i.interactivity;o.inside=!0;let r=!1;const a=o.position;if(a&&s.interactivity.events.onClick.enable){for(const[,c]of i.plugins)if(c.clickPositionValid&&(r=c.clickPositionValid(a),r))break;r||this._doMouseTouchClick(e),o.clicking=!1}},this._mouseTouchFinish=()=>{const e=this.container.interactivity;if(!e)return;const i=e.mouse;delete i.position,delete i.clickPosition,delete i.downPosition,e.status=p.Z0,i.inside=!1,i.clicking=!1},this._mouseTouchMove=e=>{const i=this.container,s=i.actualOptions,o=i.interactivity,r=i.canvas.element;if(!o?.element)return;let a;if(o.mouse.inside=!0,e.type.startsWith("pointer")){this._canPush=!0;const h=e;if(o.element===window){if(r){const l=r.getBoundingClientRect();a={x:h.clientX-l.left,y:h.clientY-l.top}}}else if("parent"===s.interactivity.detectsOn){const l=h.target,f=h.currentTarget;if(l&&f&&r){const m=l.getBoundingClientRect(),d=f.getBoundingClientRect(),v=r.getBoundingClientRect();a={x:h.offsetX+2*m.left-(d.left+v.left),y:h.offsetY+2*m.top-(d.top+v.top)}}else a={x:h.offsetX??h.clientX,y:h.offsetY??h.clientY}}else h.target===r&&(a={x:h.offsetX??h.clientX,y:h.offsetY??h.clientY})}else if(this._canPush="touchmove"!==e.type,r){const f=e.touches[e.touches.length-1],m=r.getBoundingClientRect(),d=0;a={x:f.clientX-(m.left??d),y:f.clientY-(m.top??d)}}const c=i.retina.pixelRatio;a&&(a.x*=c,a.y*=c),o.mouse.position=a,o.status=p.Rb},this._touchEnd=e=>{const s=Array.from(e.changedTouches);for(const o of s)this._touches.delete(o.identifier);this._mouseTouchFinish()},this._touchEndClick=e=>{const s=Array.from(e.changedTouches);for(const o of s)this._touches.delete(o.identifier);this._mouseTouchClick(e)},this._touchStart=e=>{const s=Array.from(e.changedTouches);for(const o of s)this._touches.set(o.identifier,performance.now());this._mouseTouchMove(e)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:e=>this._mouseTouchMove(e),mouseUp:e=>this._mouseTouchClick(e),touchStart:e=>this._touchStart(e),touchMove:e=>this._mouseTouchMove(e),touchEnd:e=>this._touchEnd(e),touchCancel:e=>this._touchEnd(e),touchEndClick:e=>this._touchEndClick(e),visibilityChange:()=>this._handleVisibilityChange(),themeChange:e=>this._handleThemeChange(e),oldThemeChange:e=>this._handleThemeChange(e),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}}var st=b(1056);class nt{constructor(t,n){this.container=n,this._engine=t,this._interactors=[],this._externalInteractors=[],this._particleInteractors=[]}externalInteract(t){for(const n of this._externalInteractors)n.isEnabled()&&n.interact(t)}handleClickMode(t){for(const n of this._externalInteractors)n.handleClickMode?.(t)}init(){var t=this;return(0,w.A)(function*(){t._interactors=yield t._engine.getInteractors(t.container,!0),t._externalInteractors=[],t._particleInteractors=[];for(const n of t._interactors){switch(n.type){case"external":t._externalInteractors.push(n);break;case"particles":t._particleInteractors.push(n)}n.init()}})()}particlesInteract(t,n){for(const e of this._externalInteractors)e.clear(t,n);for(const e of this._particleInteractors)e.isEnabled(t)&&e.interact(t,n)}reset(t){for(const n of this._externalInteractors)n.isEnabled()&&n.reset(t);for(const n of this._particleInteractors)n.isEnabled(t)&&n.reset(t)}}var G=b(9987),g=b(7353),rt=b(5715),Y=b(7084);const F=.5;function W(u){if(!(0,_.hn)(u.outMode,u.checkModes))return;const t=2*u.radius;u.coord>u.maxCoord-t?u.setCb(-u.radius):u.coord<t&&u.setCb(u.radius)}class ht{constructor(t,n){this.container=n,this._calcPosition=(e,i,s,o=0)=>{for(const[,d]of e.plugins){const v=void 0!==d.particlePosition?d.particlePosition(i,this):void 0;if(v)return G.p.create(v.x,v.y,s)}const a=(0,g.Nx)({size:e.canvas.size,position:i}),c=G.p.create(a.x,a.y,s),h=this.getRadius(),l=this.options.move.outModes,f=d=>{W({outMode:d,checkModes:["bounce"],coord:c.x,maxCoord:e.canvas.size.width,setCb:v=>c.x+=v,radius:h})},m=d=>{W({outMode:d,checkModes:["bounce"],coord:c.y,maxCoord:e.canvas.size.height,setCb:v=>c.y+=v,radius:h})};return f(l.left??l.default),f(l.right??l.default),m(l.top??l.default),m(l.bottom??l.default),this._checkOverlap(c,o)?this._calcPosition(e,void 0,s,o+1):c},this._calculateVelocity=()=>{const i=(0,g.$m)(this.direction).copy(),s=this.options.move;if("inside"===s.direction||"outside"===s.direction)return i;const o=(0,g.pu)((0,g.VG)(s.angle.value)),r=(0,g.pu)((0,g.VG)(s.angle.offset)),a={left:r-o*F,right:r+o*F};return s.straight||(i.angle+=(0,g.U4)((0,g.DT)(a.left,a.right))),s.random&&"number"==typeof s.speed&&(i.length*=(0,g.G0)()),i},this._checkOverlap=(e,i=0)=>{const s=this.options.collisions,o=this.getRadius();if(!s.enable)return!1;const r=s.overlap;if(r.enable)return!1;const a=r.retries;if(a>=0&&i>a)throw new Error(`${p.dI} particle is overlapping and can't be placed`);return!!this.container.particles.find(h=>(0,g.Yf)(e,h.position)<o+h.getRadius())},this._getRollColor=e=>{if(!e||!this.roll||!this.backColor&&!this.roll.alter)return e;const r=this.roll.horizontal?Math.PI*F:0;return Math.floor(((this.roll.angle??0)+r)/(Math.PI/(this.roll.horizontal&&this.roll.vertical?2:1)))%2?this.backColor?this.backColor:this.roll.alter?(0,P.yx)(e,this.roll.alter.type,this.roll.alter.value):e:e},this._initPosition=e=>{const i=this.container,s=(0,g.VG)(this.options.zIndex.value);switch(this.position=this._calcPosition(i,e,(0,g.qE)(s,0,i.zLayers)),this.initialPosition=this.position.copy(),this.moveCenter={...(0,_.E9)(this.options.move.center,i.canvas.size),radius:this.options.move.center.radius??0,mode:this.options.move.center.mode??"percent"},this.direction=(0,g.JY)(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case"inside":this.outType="inside";break;case"outside":this.outType="outside"}this.offset=G.M.origin},this._engine=t}destroy(t){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;const n=this.container,e=this.pathGenerator;n.shapeDrawers.get(this.shape)?.particleDestroy?.(this);for(const[,s]of n.plugins)s.particleDestroyed?.(this,t);for(const s of n.particles.updaters)s.particleDestroyed?.(this,t);e?.reset(this),this._engine.dispatchEvent("particleDestroyed",{container:this.container,data:{particle:this}})}draw(t){const n=this.container,e=n.canvas;for(const[,i]of n.plugins)e.drawParticlePlugin(i,this,t);e.drawParticle(this,t)}getFillColor(){return this._getRollColor(this.bubble.color??(0,z.O_)(this.color))}getMass(){return this.getRadius()**2*Math.PI*F}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??(0,z.O_)(this.strokeColor))}init(t,n,e,i){const s=this.container,o=this._engine;this.id=t,this.group=i,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType="normal",this.ignoresResizeRatio=!0;const r=s.retina.pixelRatio,c=(0,Y.y)(this._engine,s,s.actualOptions.particles),h=c.effect.type,l=c.shape.type,{reduceDuplicates:f}=c;this.effect=(0,_.TA)(h,this.id,f),this.shape=(0,_.TA)(l,this.id,f);const m=c.effect,d=c.shape;if(e){if(e.effect?.type){const L=(0,_.TA)(e.effect.type,this.id,f);L&&(this.effect=L,m.load(e.effect))}if(e.shape?.type){const L=(0,_.TA)(e.shape.type,this.id,f);L&&(this.shape=L,d.load(e.shape))}}this.effectData=function at(u,t,n,e){const i=t.options[u];if(i)return(0,_.zw)({close:t.close,fill:t.fill},(0,_.TA)(i,n,e))}(this.effect,m,this.id,f),this.shapeData=function ct(u,t,n,e){const i=t.options[u];if(i)return(0,_.zw)({close:t.close,fill:t.fill},(0,_.TA)(i,n,e))}(this.shape,d,this.id,f),c.load(e);const v=this.effectData;v&&c.load(v.particles);const C=this.shapeData;C&&c.load(C.particles);const k=new rt.k(o,s);k.load(s.actualOptions.interactivity),k.load(c.interactivity),this.interactivity=k,this.effectFill=v?.fill??c.effect.fill,this.effectClose=v?.close??c.effect.close,this.shapeFill=C?.fill??c.shape.fill,this.shapeClose=C?.close??c.shape.close,this.options=c;const S=this.options.move.path;this.pathDelay=(0,g.VG)(S.delay.value)*p.Xu,S.generator&&(this.pathGenerator=this._engine.getPathGenerator(S.generator),this.pathGenerator&&s.addPath(S.generator,this.pathGenerator)&&this.pathGenerator.init(s)),s.retina.initParticle(this),this.size=(0,_.Xs)(this.options.size,r),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(n),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=1-(0,g.VG)(this.options.move.decay);const E=s.particles;E.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/s.zLayers,this.sides=24;let T=s.effectDrawers.get(this.effect);T||(T=this._engine.getEffectDrawer(this.effect),T&&s.effectDrawers.set(this.effect,T)),T?.loadEffect&&T.loadEffect(this);let x=s.shapeDrawers.get(this.shape);x||(x=this._engine.getShapeDrawer(this.shape),x&&s.shapeDrawers.set(this.shape,x)),x?.loadShape&&x.loadShape(this);const J=x?.getSidesCount;J&&(this.sides=J(this)),this.spawning=!1,this.shadowColor=(0,z.BN)(this.options.shadow.color);for(const R of E.updaters)R.init(this);for(const R of E.movers)R.init?.(this);T?.particleInit?.(s,this),x?.particleInit?.(s,this);for(const[,R]of s.plugins)R.particleCreated?.(this)}isInsideCanvas(){const t=this.getRadius(),n=this.container.canvas.size,e=this.position;return e.x>=-t&&e.y>=-t&&e.y<=n.height+t&&e.x<=n.width+t}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(const t of this.container.particles.updaters)t.reset?.(this)}}class lt{constructor(t,n){this.position=t,this.particle=n}}var A=b(3037);const M=.5;class V{constructor(t,n){this.rectangle=t,this.capacity=n,this._subdivide=()=>{const{x:e,y:i}=this.rectangle.position,{width:s,height:o}=this.rectangle.size,{capacity:r}=this;for(let a=0;a<4;a++){const c=a%2;this._subs.push(new V(new A.M_(e+s*M*c,i+o*M*(Math.round(a*M)-c),s*M,o*M),r))}this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(t){return!!this.rectangle.contains(t.position)&&(this._points.length<this.capacity?(this._points.push(t),!0):(this._divided||this._subdivide(),this._subs.some(n=>n.insert(t))))}query(t,n){const e=[];if(!t.intersects(this.rectangle))return[];for(const i of this._points)!t.contains(i.position)&&(0,g.Yf)(t.position,i.position)>i.particle.getRadius()&&(!n||n(i.particle))||e.push(i.particle);if(this._divided)for(const i of this._subs)e.push(...i.query(t,n));return e}queryCircle(t,n,e){return this.query(new A.jl(t.x,t.y,n),e)}queryRectangle(t,n,e){return this.query(new A.M_(t.x,t.y,n.width,n.height),e)}}const Q=u=>{const{height:t,width:n}=u;return new A.M_(-.25*n,-.25*t,1.5*n,1.5*t)};class mt{constructor(t,n){this._addToPool=(...i)=>{for(const s of i)this._pool.push(s)},this._applyDensity=(i,s,o)=>{const r=i.number;if(!i.number.density?.enable)return void(void 0===o?this._limit=r.limit.value:r.limit&&this._groupLimits.set(o,r.limit.value));const a=this._initDensityFactor(r.density),c=r.value,f=Math.min(c,r.limit.value>0?r.limit.value:c)*a+s,m=Math.min(this.count,this.filter(d=>d.group===o).length);void 0===o?this._limit=r.limit.value*a:this._groupLimits.set(o,r.limit.value*a),m<f?this.push(Math.abs(f-m),void 0,i,o):m>f&&this.removeQuantity(m-f,o)},this._initDensityFactor=i=>{const s=this._container;if(!s.canvas.element||!i.enable)return 1;const r=s.canvas.element;return r.width*r.height/(i.height*i.width*s.retina.pixelRatio**2)},this._pushParticle=(i,s,o,r)=>{try{let a=this._pool.pop();a||(a=new ht(this._engine,this._container)),a.init(this._nextId,i,s,o);let c=!0;return r&&(c=r(a)),c?(this._array.push(a),this._zArray.push(a),this._nextId++,this._engine.dispatchEvent("particleAdded",{container:this._container,data:{particle:a}}),a):void 0}catch(a){(0,_.tZ)().warning(`${p.dI} adding particle: ${a}`)}},this._removeParticle=(i,s,o)=>{const r=this._array[i];if(!r||r.group!==s)return!1;const a=this._zArray.indexOf(r);return this._array.splice(i,1),this._zArray.splice(a,1),r.destroy(o),this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:r}}),this._addToPool(r),!0},this._engine=t,this._container=n,this._nextId=0,this._array=[],this._zArray=[],this._pool=[],this._limit=0,this._groupLimits=new Map,this._needsSort=!1,this._lastZIndex=0,this._interactionManager=new nt(t,n),this._pluginsInitialized=!1,this.quadTree=new V(Q(n.canvas.size),4),this.movers=[],this.updaters=[]}get count(){return this._array.length}addManualParticles(){const t=this._container,n=t.actualOptions;for(const e of n.manualParticles)this.addParticle(e.position?(0,_.E9)(e.position,t.canvas.size):void 0,e.options)}addParticle(t,n,e,i){const s=this._container.actualOptions.particles.number.limit,o=void 0===e?this._limit:this._groupLimits.get(e)??this._limit,r=this.count;if(o>0)if("delete"===s.mode){const l=r+1-o;l>0&&this.removeQuantity(l)}else if("wait"===s.mode&&r>=o)return;return this._pushParticle(t,n,e,i)}clear(){this._array=[],this._zArray=[],this._pluginsInitialized=!1}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}draw(t){const n=this._container,e=n.canvas;e.clear(),this.update(t);for(const[,i]of n.plugins)e.drawPlugin(i,t);for(const i of this._zArray)i.draw(t)}filter(t){return this._array.filter(t)}find(t){return this._array.find(t)}get(t){return this._array[t]}handleClickMode(t){this._interactionManager.handleClickMode(t)}init(){var t=this;return(0,w.A)(function*(){const n=t._container,e=n.actualOptions;t._lastZIndex=0,t._needsSort=!1,yield t.initPlugins();let i=!1;for(const[,s]of n.plugins)if(void 0!==s.particlesInitialization&&(i=s.particlesInitialization()),i)break;if(t.addManualParticles(),!i){const s=e.particles,o=s.groups;for(const r in o){const a=o[r];for(let c=t.count,h=0;h<a.number?.value&&c<s.number.value;c++,h++)t.addParticle(void 0,a,r)}for(let r=t.count;r<s.number.value;r++)t.addParticle()}})()}initPlugins(){var t=this;return(0,w.A)(function*(){if(t._pluginsInitialized)return;const n=t._container;t.movers=yield t._engine.getMovers(n,!0),t.updaters=yield t._engine.getUpdaters(n,!0),yield t._interactionManager.init();for(const[,e]of n.pathGenerators)e.init(n)})()}push(t,n,e,i){for(let s=0;s<t;s++)this.addParticle(n?.position,e,i)}redraw(){var t=this;return(0,w.A)(function*(){t.clear(),yield t.init(),t.draw({value:0,factor:0})})()}remove(t,n,e){this.removeAt(this._array.indexOf(t),void 0,n,e)}removeAt(t,n=1,e,i){if(t<0||t>this.count)return;let o=0;for(let r=t;o<n&&r<this.count;r++)this._removeParticle(r--,e,i)&&o++}removeQuantity(t,n){this.removeAt(0,t,n)}setDensity(){const t=this._container.actualOptions,n=t.particles.groups;for(const i in n)this._applyDensity(n[i],0,i);this._applyDensity(t.particles,t.manualParticles.length)}setLastZIndex(t){this._lastZIndex=t,this._needsSort=this._needsSort||this._lastZIndex<t}setResizeFactor(t){this._resizeFactor=t}update(t){const n=this._container,e=new Set;this.quadTree=new V(Q(n.canvas.size),4);for(const[,s]of n.pathGenerators)s.update();for(const[,s]of n.plugins)s.update?.(t);const i=this._resizeFactor;for(const s of this._array){i&&!s.ignoresResizeRatio&&(s.position.x*=i.width,s.position.y*=i.height,s.initialPosition.x*=i.width,s.initialPosition.y*=i.height),s.ignoresResizeRatio=!1,this._interactionManager.reset(s);for(const[,o]of this._container.plugins){if(s.destroyed)break;o.particleUpdate?.(s,t)}for(const o of this.movers)o.isEnabled(s)&&o.move(s,t);s.destroyed?e.add(s):this.quadTree.insert(new lt(s.getPosition(),s))}if(e.size){const s=o=>!e.has(o);this._array=this.filter(s),this._zArray=this._zArray.filter(s);for(const o of e)this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:o}});this._addToPool(...e)}this._interactionManager.externalInteract(t);for(const s of this._array){for(const o of this.updaters)o.update(s,t);!s.destroyed&&!s.spawning&&this._interactionManager.particlesInteract(s,t)}if(delete this._resizeFactor,this._needsSort){const s=this._zArray;s.sort((r,a)=>a.position.z-r.position.z||r.id-a.id),this._lastZIndex=s[s.length-1].position.z,this._needsSort=!1}}}class gt{constructor(t){this.container=t,this.pixelRatio=1,this.reduceFactor=1}init(){const t=this.container,n=t.actualOptions;this.pixelRatio=!n.detectRetina||(0,_.B9)()?1:window.devicePixelRatio,this.reduceFactor=1;const e=this.pixelRatio,i=t.canvas;if(i.element){const r=i.element;i.size.width=r.offsetWidth*e,i.size.height=r.offsetHeight*e}const s=n.particles;this.maxSpeed=(0,g.VG)(s.move.gravity.maxSpeed)*e,this.sizeAnimationSpeed=(0,g.VG)(s.size.animation.speed)*e}initParticle(t){const n=t.options,e=this.pixelRatio,i=n.move,s=i.distance,o=t.retina;o.moveDrift=(0,g.VG)(i.drift)*e,o.moveSpeed=(0,g.VG)(i.speed)*e,o.sizeAnimationSpeed=(0,g.VG)(n.size.animation.speed)*e;const r=o.maxDistance;r.horizontal=void 0!==s.horizontal?s.horizontal*e:void 0,r.vertical=void 0!==s.vertical?s.vertical*e:void 0,o.maxSpeed=(0,g.VG)(i.gravity.maxSpeed)*e}}function y(u){return u&&!u.destroyed}function D(u,t,...n){const e=new st.J(u,t);return(0,Y.Z)(e,...n),e}class vt{constructor(t,n,e){this._intersectionManager=i=>{if(y(this)&&this.actualOptions.pauseOnOutsideViewport)for(const s of i)s.target===this.interactivity.element&&(s.isIntersecting?this.play():this.pause())},this._nextFrame=i=>{try{if(!this._smooth&&void 0!==this._lastFrameTime&&i<this._lastFrameTime+p.Xu/this.fpsLimit)return void this.draw(!1);this._lastFrameTime??=i;const s=function _t(u,t=60,n=!1){return{value:u,factor:n?60/t:60*u/p.Xu}}(i-this._lastFrameTime,this.fpsLimit,this._smooth);if(this.addLifeTime(s.value),this._lastFrameTime=i,s.value>p.Xu)return void this.draw(!1);if(this.particles.draw(s),!this.alive())return void this.destroy();this.animationStatus&&this.draw(!1)}catch(s){(0,_.tZ)().error(`${p.dI} in animation loop`,s)}},this._engine=t,this.id=Symbol(n),this.fpsLimit=120,this._smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this._lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._sourceOptions=e,this._initialSourceOptions=e,this.retina=new gt(this),this.canvas=new tt(this),this.particles=new mt(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this._options=D(this._engine,this),this.actualOptions=D(this._engine,this),this._eventListeners=new it(this),this._intersectionObserver=(0,_.BR)(i=>this._intersectionManager(i)),this._engine.dispatchEvent("containerBuilt",{container:this})}get animationStatus(){return!this._paused&&!this.pageHidden&&y(this)}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(t){if(!y(this))return;const n=this.interactivity.element;if(!n)return;const e=(l,f,m)=>{if(!y(this))return;const d=this.retina.pixelRatio,C=this.particles.quadTree.queryCircle({x:f.x*d,y:f.y*d},m*d);t(l,C)};let c=!1,h=!1;n.addEventListener("click",l=>{y(this)&&e(l,{x:l.offsetX||l.clientX,y:l.offsetY||l.clientY},1)}),n.addEventListener("touchstart",()=>{y(this)&&(c=!0,h=!1)}),n.addEventListener("touchmove",()=>{y(this)&&(h=!0)}),n.addEventListener("touchend",l=>{if(y(this)){if(c&&!h){const m=1;let d=l.touches[l.touches.length-m];if(!d&&(d=l.changedTouches[l.changedTouches.length-m],!d))return;const v=this.canvas.element,C=v?v.getBoundingClientRect():void 0,k=0;e(l,{x:d.clientX-(C?C.left:k),y:d.clientY-(C?C.top:k)},Math.max(d.radiusX,d.radiusY))}c=!1,h=!1}}),n.addEventListener("touchcancel",()=>{y(this)&&(c=!1,h=!1)})}addLifeTime(t){this._lifeTime+=t}addPath(t,n,e=!1){return!(!y(this)||!e&&this.pathGenerators.has(t)||(this.pathGenerators.set(t,n),0))}alive(){return!this._duration||this._lifeTime<=this._duration}destroy(){if(!y(this))return;this.stop(),this.particles.destroy(),this.canvas.destroy();for(const[,i]of this.effectDrawers)i.destroy?.(this);for(const[,i]of this.shapeDrawers)i.destroy?.(this);for(const i of this.effectDrawers.keys())this.effectDrawers.delete(i);for(const i of this.shapeDrawers.keys())this.shapeDrawers.delete(i);this._engine.clearPlugins(this),this.destroyed=!0;const t=this._engine.dom(),n=t.findIndex(i=>i===this);n>=0&&t.splice(n,1),this._engine.dispatchEvent("containerDestroyed",{container:this})}draw(t){if(!y(this))return;let n=t;const e=i=>{n&&(this._lastFrameTime=void 0,n=!1),this._nextFrame(i)};this._drawAnimationFrame=requestAnimationFrame(i=>e(i))}export(t,n={}){var e=this;return(0,w.A)(function*(){for(const[,i]of e.plugins){if(!i.export)continue;const s=yield i.export(t,n);if(s.supported)return s.blob}(0,_.tZ)().error(`${p.dI} - Export plugin with type ${t} not found`)})()}handleClickMode(t){if(y(this)){this.particles.handleClickMode(t);for(const[,n]of this.plugins)n.handleClickMode?.(t)}}init(){var t=this;return(0,w.A)(function*(){if(!y(t))return;const n=t._engine.getSupportedEffects();for(const r of n){const a=t._engine.getEffectDrawer(r);a&&t.effectDrawers.set(r,a)}const e=t._engine.getSupportedShapes();for(const r of e){const a=t._engine.getShapeDrawer(r);a&&t.shapeDrawers.set(r,a)}yield t.particles.initPlugins(),t._options=D(t._engine,t,t._initialSourceOptions,t.sourceOptions),t.actualOptions=D(t._engine,t,t._options);const i=yield t._engine.getAvailablePlugins(t);for(const[r,a]of i)t.plugins.set(r,a);t.retina.init(),yield t.canvas.init(),t.updateActualOptions(),t.canvas.initBackground(),t.canvas.resize(),t.zLayers=t.actualOptions.zLayers,t._duration=(0,g.VG)(t.actualOptions.duration)*p.Xu,t._delay=(0,g.VG)(t.actualOptions.delay)*p.Xu,t._lifeTime=0,t.fpsLimit=t.actualOptions.fpsLimit>0?t.actualOptions.fpsLimit:120,t._smooth=t.actualOptions.smooth;for(const[,r]of t.effectDrawers)yield r.init?.(t);for(const[,r]of t.shapeDrawers)yield r.init?.(t);for(const[,r]of t.plugins)yield r.init?.();t._engine.dispatchEvent("containerInit",{container:t}),yield t.particles.init(),t.particles.setDensity();for(const[,r]of t.plugins)r.particlesSetup?.();t._engine.dispatchEvent("particlesSetup",{container:t})})()}loadTheme(t){var n=this;return(0,w.A)(function*(){y(n)&&(n._currentTheme=t,yield n.refresh())})()}pause(){if(y(this)&&(void 0!==this._drawAnimationFrame&&(cancelAnimationFrame(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(const[,t]of this.plugins)t.pause?.();this.pageHidden||(this._paused=!0),this._engine.dispatchEvent("containerPaused",{container:this})}}play(t){if(!y(this))return;const n=this._paused||t;if(!this._firstStart||this.actualOptions.autoPlay){if(this._paused&&(this._paused=!1),n)for(const[,e]of this.plugins)e.play&&e.play();this._engine.dispatchEvent("containerPlay",{container:this}),this.draw(n??!1)}else this._firstStart=!1}refresh(){var t=this;return(0,w.A)(function*(){if(y(t))return t.stop(),t.start()})()}reset(){var t=this;return(0,w.A)(function*(){if(y(t))return t._initialSourceOptions=void 0,t._options=D(t._engine,t),t.actualOptions=D(t._engine,t,t._options),t.refresh()})()}start(){var t=this;return(0,w.A)(function*(){!y(t)||t.started||(yield t.init(),t.started=!0,yield new Promise(n=>{const e=function(){var i=(0,w.A)(function*(){t._eventListeners.addListeners(),t.interactivity.element instanceof HTMLElement&&t._intersectionObserver&&t._intersectionObserver.observe(t.interactivity.element);for(const[,s]of t.plugins)yield s.start?.();t._engine.dispatchEvent("containerStarted",{container:t}),t.play(),n()});return function(){return i.apply(this,arguments)}}();t._delayTimeout=setTimeout(()=>{e()},t._delay)}))})()}stop(){if(y(this)&&this.started){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(const[,t]of this.plugins)t.stop?.();for(const t of this.plugins.keys())this.plugins.delete(t);this._sourceOptions=this._options,this._engine.dispatchEvent("containerStopped",{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];const t=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this._responsiveMaxWidth!==t&&(this._responsiveMaxWidth=t,!0)}}}}]);