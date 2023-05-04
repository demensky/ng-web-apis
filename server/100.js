"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=100,exports.ids=[100],exports.modules={45100:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WorkersPageModule:()=>WorkersPageModule});var core=__webpack_require__(74788),cjs=__webpack_require__(72921),operators=__webpack_require__(57192);class WebWorker extends cjs.Observable{constructor(url,options){let worker,error;try{worker=new Worker(url,options)}catch(e){error=e}super(subscriber=>{let eventStream$=cjs.EMPTY;error?subscriber.error(error):this.destroy$.isStopped?subscriber.complete():worker&&(eventStream$=(0,cjs.merge)((0,cjs.fromEvent)(worker,"message").pipe((0,operators.bw)(event=>subscriber.next(event))),(0,cjs.fromEvent)(worker,"error").pipe((0,operators.bw)(event=>subscriber.error(event)))).pipe((0,operators.Rs)(this.destroy$))),eventStream$.subscribe().add(subscriber)}),this.worker=worker,this.url=url,this.destroy$=new cjs.Subject}static fromFunction(fn,options){return new WebWorker(WebWorker.createFnUrl(fn),options)}static execute(fn,data){const worker=WebWorker.fromFunction(fn),promise=worker.pipe((0,operators.qn)(1)).toPromise();return worker.postMessage(data),promise.then(result=>(worker.terminate(),result))}static createFnUrl(fn){const blob=new Blob([`(\nfunction(fn){\n    function isFunction(type){\n        return type === 'function';\n    }\n\n    self.addEventListener('message', function(e) {\n        var result = fn.call(null, e.data);\n        if (result && [typeof result.then, typeof result.catch].every(isFunction)){\n            result\n                .then(postMessage)\n                .catch(function(error) {\n                    setTimeout(function(){throw error}, 0)\n                })\n        } else {\n            postMessage(result);\n        }\n    })\n}\n)(${fn});`],{type:"text/javascript"});return URL.createObjectURL(blob)}terminate(){this.destroy$.isStopped||(this.worker&&this.worker.terminate(),URL.revokeObjectURL(this.url),this.destroy$.next(),this.destroy$.complete())}postMessage(value){this.worker&&this.worker.postMessage(value)}}function toData(){return(0,operators.UI)(({data})=>data)}__name(WebWorker,"WebWorker"),__name(toData,"toData");class WorkerPipe{transform(value,fn){return this.fn!==fn&&(this.terminateWorker(),this.initNewWorker(fn)),this.worker.postMessage(value),this.observer}ngOnDestroy(){this.terminateWorker()}terminateWorker(){this.worker&&this.worker.terminate()}initNewWorker(fn){this.fn=fn,this.worker=WebWorker.fromFunction(fn),this.observer=this.worker.pipe(toData())}}__name(WorkerPipe,"WorkerPipe"),WorkerPipe.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:WorkerPipe,deps:[],target:core.\u0275\u0275FactoryTarget.Pipe}),WorkerPipe.\u0275pipe=core.\u0275\u0275ngDeclarePipe({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:WorkerPipe,name:"waWorker"}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:WorkerPipe,decorators:[{type:core.Pipe,args:[{name:"waWorker"}]}]});class WorkerModule{}__name(WorkerModule,"WorkerModule"),WorkerModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:WorkerModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),WorkerModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:WorkerModule,declarations:[WorkerPipe],exports:[WorkerPipe]}),WorkerModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:WorkerModule}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:WorkerModule,decorators:[{type:core.NgModule,args:[{declarations:[WorkerPipe],exports:[WorkerPipe]}]}]});var common=__webpack_require__(12057);class ClockComponent{constructor(){this.date$=(0,cjs.timer)(0,1e3).pipe((0,operators.UI)(()=>Date.now()))}}function startCompute(){const start=performance.now();return Array.from({length:16e3}).forEach((_,index)=>Array.from({length:index}).reduce(sum=>sum+1,0)),performance.now()-start}__name(ClockComponent,"ClockComponent"),ClockComponent.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:ClockComponent,deps:[],target:core.\u0275\u0275FactoryTarget.Component}),ClockComponent.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.15",type:ClockComponent,selector:"app-clock",ngImport:core,template:"\n        {{ date$ | async | date: 'mediumTime' }}\n    ",isInline:!0,pipes:{date:common.uU,async:common.Ov},changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:ClockComponent,decorators:[{type:core.Component,args:[{selector:"app-clock",template:"\n        {{ date$ | async | date: 'mediumTime' }}\n    ",changeDetection:core.ChangeDetectionStrategy.OnPush}]}]}),__name(startCompute,"startCompute");class WorkersPageComponent{constructor(platformId){this.platformId=platformId,this.isBrowser=(0,common.NF)(this.platformId),this.workerThread=WebWorker.fromFunction(startCompute),this.workerData$=this.workerThread.pipe(toData()),this.emitter=new cjs.Subject,this.result$=this.emitter.pipe((0,operators.UI)(startCompute))}}__name(WorkersPageComponent,"WorkersPageComponent"),WorkersPageComponent.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:WorkersPageComponent,deps:[{token:core.PLATFORM_ID}],target:core.\u0275\u0275FactoryTarget.Component}),WorkersPageComponent.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.15",type:WorkersPageComponent,selector:"workers-page",ngImport:core,template:'<ng-container *ngIf="isBrowser">\n    <app-clock></app-clock>\n\n    <div class="example">\n        <button (click)="workerThread.postMessage()">\n            Run in worker process\n        </button>\n        <p>Execution time: {{ workerData$ | async }}</p>\n    </div>\n    <div class="example">\n        <button (click)="emitter.next()">Run in main process</button>\n        <p>Execution time: {{ result$ | async }}</p>\n    </div>\n</ng-container>\n',styles:[":host{perspective:150vw;user-select:none;flex-direction:column;align-items:center}.example{min-width:360px;border-top:1px solid gainsboro;margin-top:16px;padding-top:16px}\n"],components:[{type:ClockComponent,selector:"app-clock"}],directives:[{type:common.O5,selector:"[ngIf]",inputs:["ngIf","ngIfThen","ngIfElse"]}],pipes:{async:common.Ov},changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:WorkersPageComponent,decorators:[{type:core.Component,args:[{selector:"workers-page",templateUrl:"./workers-page.component.html",styleUrls:["./workers-page.component.less"],changeDetection:core.ChangeDetectionStrategy.OnPush}]}],ctorParameters:function(){return[{type:void 0,decorators:[{type:core.Inject,args:[core.PLATFORM_ID]}]}]}});var router=__webpack_require__(3984);class WorkersPageModule{}__name(WorkersPageModule,"WorkersPageModule"),WorkersPageModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:WorkersPageModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),WorkersPageModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:WorkersPageModule,declarations:[WorkersPageComponent,ClockComponent],imports:[common.ez,WorkerModule,router.Bz]}),WorkersPageModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:WorkersPageModule,imports:[[common.ez,WorkerModule,router.Bz.forChild([{path:"",component:WorkersPageComponent}])]]}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:WorkersPageModule,decorators:[{type:core.NgModule,args:[{imports:[common.ez,WorkerModule,router.Bz.forChild([{path:"",component:WorkersPageComponent}])],declarations:[WorkersPageComponent,ClockComponent]}]}]})}};