"use strict";(self.webpackChunkng_web_apis=self.webpackChunkng_web_apis||[]).push([[423],{65423:(j,m,s)=>{s.r(m),s.d(m,{WorkersPageModule:()=>R});var t=s(74788),x=s(87241),w=s(9018),C=s(21860),d=s(14581),f=s(9359),h=s(98168),T=s(13528),Z=s(65598);class p extends x.y{constructor(n,o){let r,a;try{r=new Worker(n,o)}catch(i){a=i}super(i=>{let k=w.E;a?i.error(a):this.destroy$.isStopped?i.complete():r&&(k=(0,C.T)((0,d.R)(r,"message").pipe((0,h.b)(u=>i.next(u))),(0,d.R)(r,"error").pipe((0,h.b)(u=>i.error(u)))).pipe((0,T.R)(this.destroy$))),k.subscribe().add(i)}),this.worker=r,this.url=n,this.destroy$=new f.x}static fromFunction(n,o){return new p(p.createFnUrl(n),o)}static execute(n,o){const r=p.fromFunction(n),a=r.pipe((0,Z.q)(1)).toPromise();return r.postMessage(o),a.then(i=>(r.terminate(),i))}static createFnUrl(n){const r=new Blob([`(\nfunction(fn){\n    function isFunction(type){\n        return type === 'function';\n    }\n\n    self.addEventListener('message', function(e) {\n        var result = fn.call(null, e.data);\n        if (result && [typeof result.then, typeof result.catch].every(isFunction)){\n            result\n                .then(postMessage)\n                .catch(function(error) {\n                    setTimeout(function(){throw error}, 0)\n                })\n        } else {\n            postMessage(result);\n        }\n    })\n}\n)(${n});`],{type:"text/javascript"});return URL.createObjectURL(r)}terminate(){this.destroy$.isStopped||(this.worker&&this.worker.terminate(),URL.revokeObjectURL(this.url),this.destroy$.next(),this.destroy$.complete())}postMessage(n){this.worker&&this.worker.postMessage(n)}}var l=s(27969),c=s(12057),M=s(18946);let $=(()=>{class e{constructor(){this.date$=(0,M.H)(0,1e3).pipe((0,l.U)(()=>Date.now()))}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-clock"]],decls:3,vars:6,template:function(o,r){1&o&&(t._uU(0),t.ALo(1,"date"),t.ALo(2,"async")),2&o&&t.hij(" ",t.xi3(1,1,t.lcZ(2,4,r.date$),"mediumTime")," ")},pipes:[c.uU,c.Ov],encapsulation:2,changeDetection:0}),e})();var g=s(12628),v=s(60885);function F(e,n){if(1&e){const o=t.EpF();t.ynx(0),t._UZ(1,"app-clock"),t.TgZ(2,"div",1),t.TgZ(3,"button",2),t.NdJ("click",function(){return t.CHM(o),t.oxw().workerThread.postMessage()}),t._uU(4," Run in worker process "),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.ALo(7,"async"),t.qZA(),t.TgZ(8,"tui-notification"),t._uU(9," This would be calculated in several seconds in a background thread "),t.qZA(),t.qZA(),t.TgZ(10,"div",1),t.TgZ(11,"button",2),t.NdJ("click",function(){return t.CHM(o),t.oxw().emitter.next()}),t._uU(12," Run in main process "),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.ALo(15,"async"),t.qZA(),t.TgZ(16,"tui-notification"),t._uU(17," This would freeze your main thread for several seconds "),t.qZA(),t.qZA(),t.BQk()}if(2&e){const o=t.oxw();t.xp6(6),t.hij("Execution time: ",t.lcZ(7,2,o.workerData$),""),t.xp6(8),t.hij("Execution time: ",t.lcZ(15,4,o.result$),"")}}function y(){const e=performance.now();return Array.from({length:16e3}).forEach((n,o)=>Array.from({length:o}).reduce(r=>r+1,0)),performance.now()-e}let P=(()=>{class e{constructor(o){this.platformId=o,this.isBrowser=(0,c.NF)(this.platformId),this.workerThread=p.fromFunction(y),this.workerData$=this.workerThread.pipe((0,l.U)(({data:e})=>e)),this.emitter=new f.x,this.result$=this.emitter.pipe((0,l.U)(y))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(t.Lbi))},e.\u0275cmp=t.Xpm({type:e,selectors:[["workers-page"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"example"],["tuiButton","","appearance","secondary",3,"click"]],template:function(o,r){1&o&&t.YNc(0,F,18,6,"ng-container",0),2&o&&t.Q6J("ngIf",r.isBrowser)},directives:[c.O5,$,g.v0,v.Ls],pipes:[c.Ov],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}.example[_ngcontent-%COMP%]{min-width:360px;border-top:1px solid gainsboro;margin-top:16px;padding-top:16px}"],changeDetection:0}),e})();var L=s(23327);let W=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({}),e})(),R=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,W,g.fN,v.Hi,L.Bz.forChild([{path:"",component:P}])]]}),e})()}}]);