"use strict";(self.webpackChunkng_web_apis=self.webpackChunkng_web_apis||[]).push([[87],{5646:(q,f,i)=>{i.r(f),i.d(f,{HomePageModule:()=>ge});var e=i(4788);const M=new e.OlP("Web Audio API support",{providedIn:"root",factory:()=>!!AudioContext});var l=i(2608);const T=new e.OlP("An abstraction over window.navigator.geolocation object",{factory:()=>(0,e.f3M)(l.s5).geolocation}),u=(new e.OlP("Token for an additional position options",{factory:()=>({})}),new e.OlP("Is Geolocation API supported?",{factory:()=>!!(0,e.f3M)(T)}));new e.OlP("Root element for IntersectionObserver");new e.OlP("rootMargin for IntersectionObserver",{providedIn:"root",factory:()=>"0px 0px 0px 0px"}),new e.OlP("threshold for IntersectionObserver",{providedIn:"root",factory:()=>0});const H=new e.OlP("Intersection Observer API support",{providedIn:"root",factory:()=>!!(0,e.f3M)(l.m9).IntersectionObserver});var U=i(9517),y=i(4581),k=i(4945),z=i(7980),J=i(5975),K=i(1860),O=i(1528),Q=i(7969),j=i(1927),X=i(5086),C=i(815);const ee=new e.OlP("Require sysex MIDI access",{providedIn:"root",factory:()=>!1}),g=new e.OlP("Promise for MIDIAccess object",{providedIn:"root",factory:()=>{const t=(0,e.f3M)(l.s5),r=(0,e.f3M)(ee);return t.requestMIDIAccess?t.requestMIDIAccess({sysex:r}):Promise.reject(new Error("Web MIDI API is not supported"))}});function B(t){return(0,U.D)((0,e.f3M)(g).catch(()=>null)).pipe((0,O.w)(r=>r?(0,y.R)(r,"statechange").pipe((0,Q.U)(()=>[...r[t].values()]),(0,j.O)([...r[t].values()])):(0,k.of)([])),(0,X.d)(1))}new e.OlP("MIDIInput object"),new e.OlP("Array of MIDI inputs",{factory:()=>B("inputs")}),new e.OlP("All incoming MIDI messages stream",{providedIn:"root",factory:()=>(0,U.D)((0,e.f3M)(g).catch(t=>t)).pipe((0,O.w)(t=>t instanceof Error?function(t,r){const n=(0,J.m)(t)?t:()=>t,o=s=>s.error(n());return new z.y(o)}(t):(0,y.R)(t,"statechange").pipe((0,j.O)(null),(0,O.w)(()=>(0,K.T)(...Array.from(t.inputs).map(([r,n])=>(0,y.R)(n,"midimessage")))))),(0,C.B)())}),new e.OlP("MIDIOutput object"),new e.OlP("Array of MIDI inputs",{factory:()=>B("outputs")});const te=new e.OlP("Web MIDI API support",{factory:()=>!!(0,e.f3M)(l.s5).requestMIDIAccess});new e.OlP("MIDIInput object id or name"),new e.OlP("MIDIOutput object id or name"),Math.pow(2,1/12),i(3568),i(4970);const R=new e.OlP("The methods used by Request Payment API",{factory:()=>[{supportedMethods:"basic-card"}]}),E=new e.OlP("Additional data requests from payer",{factory:()=>({})}),_=new e.OlP("Is Payment Request Api supported?",{factory:()=>!!(0,e.f3M)(l.m9).PaymentRequest});class p{constructor(r,n,o){this.supported=r,this.paymentMethods=n,this.paymentOptions=o}request(r,n=this.paymentMethods,o=this.paymentOptions){if(!this.supported)return Promise.reject(new Error("Payment Request is not supported in your browser"));const s=new PaymentRequest(n,r,o);return s.canMakePayment().then(a=>a?s.show():Promise.reject(new Error("Payment Request cannot make the payment")))}}p.\u0275fac=function(r){return new(r||p)(e.LFG(_),e.LFG(R),e.LFG(E))},p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p.ngInjectableDef=(0,e.Ez6)({factory:function(){return new p((0,e.f3M)(_),(0,e.f3M)(R),(0,e.f3M)(E))},token:p,providedIn:"root"});const pe=new e.OlP("An abstraction over window.navigator.permissions object",{factory:()=>(0,e.f3M)(l.s5).permissions}),le=new e.OlP("Is Permissions API supported?",{factory:()=>!!(0,e.f3M)(pe)});var ve=i(5285),de=i(63),Y=i(5674);const S=function(t){return["/",t]};let fe=(()=>{class t{constructor(n,o,s,a,m,v,d){this.paymentRequestSupport=n,this.geolocationSupport=o,this.intersectionSupport=s,this.resizeSupport=a,this.midiSupport=m,this.audioSupport=v,this.permissionsSupport=d,this.link=de.x}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_),e.Y36(u),e.Y36(H),e.Y36(ve.vU),e.Y36(te),e.Y36(M),e.Y36(le))},t.\u0275cmp=e.Xpm({type:t,selectors:[["home-page"]],decls:125,vars:26,consts:[[1,"link",3,"routerLink"],["src","assets/images/common.svg","width","64","height","64","alt","Common utils logo",1,"icon"],["src","assets/images/universal.svg","width","64","height","64","alt","Universal logo",1,"icon"],["src","assets/images/audio.svg","width","64","height","64","alt","Web Audio API logo",1,"icon"],["href","https://github.com/ng-web-apis/canvas","target","_blank",1,"link"],["src","assets/images/canvas.svg","width","64","height","64","alt","Canvas API logo",1,"icon"],["href","https://github.com/ng-web-apis/geolocation","target","_blank",1,"link"],["src","assets/images/geolocation.svg","width","64","height","64","alt","Geolocation API logo",1,"icon"],["href","https://github.com/ng-web-apis/intersection-observer","target","_blank",1,"link"],["src","assets/images/intersection-observer.svg","width","64","height","64","alt","Intersection Observer API logo",1,"icon"],["href","https://github.com/ng-web-apis/midi","target","_blank",1,"link"],["src","assets/images/midi.svg","width","64","height","64","alt","Web MIDI API logo",1,"icon"],["href","https://github.com/ng-web-apis/mutation-observer","target","_blank",1,"link"],["src","assets/images/mutation-observer.svg","width","64","height","64","alt","Mutation Observer API logo",1,"icon"],["href","https://github.com/ng-web-apis/payment-request","target","_blank",1,"link"],["src","assets/images/payment-request.svg","width","64","height","64","alt","Payment Request API logo",1,"icon"],["href","https://github.com/ng-web-apis/permissions","target","_blank",1,"link"],["src","assets/images/permissions.svg","width","64","height","64","alt","Permissions API logo",1,"icon"],["src","assets/images/resize-observer.svg","width","64","height","64","alt","Resize Observer API logo",1,"icon"],["href","https://github.com/ng-web-apis/speech","target","_blank",1,"link"],["src","assets/images/speech.svg","width","64","height","64","alt","Web Speech API logo",1,"icon"],["href","https://github.com/ng-web-apis/storage","target","_blank",1,"link"],["src","assets/images/storage.svg","width","64","height","64","alt","Web Storage API logo",1,"icon"],["href","https://github.com/ng-web-apis/workers","target","_blank",1,"link"],["src","assets/images/workers.svg","width","64","height","64","alt","Worker API logo",1,"icon"]],template:function(n,o){1&n&&(e.TgZ(0,"a",0),e.TgZ(1,"div"),e.TgZ(2,"h2"),e._uU(3,"Common"),e.qZA(),e._uU(4," A set of common utils for consuming "),e.TgZ(5,"strong"),e._uU(6,"Web APIs"),e.qZA(),e._uU(7," with Angular "),e.qZA(),e._UZ(8,"img",1),e.qZA(),e.TgZ(9,"a",0),e.TgZ(10,"div"),e.TgZ(11,"h2"),e._uU(12,"Universal"),e.qZA(),e._uU(13," A set of fallbacks to seamlessly use "),e.TgZ(14,"strong"),e._uU(15,"Web APIs"),e.qZA(),e._uU(16," with Angular Universal "),e.qZA(),e._UZ(17,"img",2),e.qZA(),e.TgZ(18,"a",0),e.TgZ(19,"div"),e.TgZ(20,"h2"),e._uU(21,"Audio"),e.qZA(),e._uU(22," A library for declarative use of "),e.TgZ(23,"strong"),e._uU(24,"Web Audio API"),e.qZA(),e._uU(25," with Angular "),e.qZA(),e._UZ(26,"img",3),e.qZA(),e.TgZ(27,"a",4),e.TgZ(28,"div"),e.TgZ(29,"h2"),e._uU(30,"Canvas"),e.qZA(),e._uU(31," A library for declarative use of "),e.TgZ(32,"strong"),e._uU(33,"Canvas API"),e.qZA(),e._uU(34," with Angular "),e.qZA(),e._UZ(35,"img",5),e.qZA(),e.TgZ(36,"a",6),e.TgZ(37,"div"),e.TgZ(38,"h2"),e._uU(39,"Geolocation"),e.qZA(),e._uU(40," An Observable based abstraction to use "),e.TgZ(41,"strong"),e._uU(42,"Geolocation API"),e.qZA(),e._uU(43," with Angular "),e.qZA(),e._UZ(44,"img",7),e.qZA(),e.TgZ(45,"a",8),e.TgZ(46,"div"),e.TgZ(47,"h2"),e._uU(48,"Intersection Observer"),e.qZA(),e._uU(49," A library for declarative use of "),e.TgZ(50,"strong"),e._uU(51,"Intersection Observer API"),e.qZA(),e._uU(52," with Angular "),e.qZA(),e._UZ(53,"img",9),e.qZA(),e.TgZ(54,"a",10),e.TgZ(55,"div"),e.TgZ(56,"h2"),e._uU(57,"MIDI"),e.qZA(),e._uU(58," An Observable based library for the use of "),e.TgZ(59,"strong"),e._uU(60,"Web MIDI API"),e.qZA(),e._uU(61," with Angular "),e.qZA(),e._UZ(62,"img",11),e.qZA(),e.TgZ(63,"a",12),e.TgZ(64,"div"),e.TgZ(65,"h2"),e._uU(66,"Mutation Observer"),e.qZA(),e._uU(67," A library for declarative use of "),e.TgZ(68,"strong"),e._uU(69,"Mutation Observer API"),e.qZA(),e._uU(70," with Angular "),e.qZA(),e._UZ(71,"img",13),e.qZA(),e.TgZ(72,"a",14),e.TgZ(73,"div"),e.TgZ(74,"h2"),e._uU(75,"Payment Request"),e.qZA(),e._uU(76," A library for declarative use of "),e.TgZ(77,"strong"),e._uU(78,"Payment Request API"),e.qZA(),e._uU(79," with Angular "),e.qZA(),e._UZ(80,"img",15),e.qZA(),e.TgZ(81,"a",16),e.TgZ(82,"div"),e.TgZ(83,"h2"),e._uU(84,"Permissions"),e.qZA(),e._uU(85," A library for Observable-based use of "),e.TgZ(86,"strong"),e._uU(87,"Permissions API"),e.qZA(),e.qZA(),e._UZ(88,"img",17),e.qZA(),e.TgZ(89,"a",0),e.TgZ(90,"div"),e.TgZ(91,"h2"),e._uU(92,"Resize Observer"),e.qZA(),e._uU(93," A library for declarative use of "),e.TgZ(94,"strong"),e._uU(95,"Resize Observer API"),e.qZA(),e._uU(96," with Angular "),e.qZA(),e._UZ(97,"img",18),e.qZA(),e.TgZ(98,"a",19),e.TgZ(99,"div"),e.TgZ(100,"h2"),e._uU(101,"Speech"),e.qZA(),e._uU(102," A library for comfortable use of "),e.TgZ(103,"strong"),e._uU(104,"Web Speech API"),e.qZA(),e._uU(105," with Angular "),e.qZA(),e._UZ(106,"img",20),e.qZA(),e.TgZ(107,"a",21),e.TgZ(108,"div"),e.TgZ(109,"h2"),e._uU(110,"Storage"),e.qZA(),e._uU(111," A library for comfortable use of "),e.TgZ(112,"strong"),e._uU(113,"Web Storage API"),e.qZA(),e._uU(114," with Angular "),e.qZA(),e._UZ(115,"img",22),e.qZA(),e.TgZ(116,"a",23),e.TgZ(117,"div"),e.TgZ(118,"h2"),e._uU(119,"Workers"),e.qZA(),e._uU(120," A library for use of "),e.TgZ(121,"strong"),e._uU(122,"Web Workers"),e.qZA(),e._uU(123," as RxJS Observables with Angular "),e.qZA(),e._UZ(124,"img",24),e.qZA()),2&n&&(e.Q6J("routerLink",e.VKq(18,S,o.link.CommonPage)),e.xp6(9),e.Q6J("routerLink",e.VKq(20,S,o.link.UniversalPage)),e.xp6(9),e.ekj("not_supported",!o.audioSupport),e.Q6J("routerLink",e.VKq(22,S,o.link.AudioPage)),e.xp6(18),e.ekj("not-supported",!o.geolocationSupport),e.xp6(9),e.ekj("not-supported",!o.intersectionSupport),e.xp6(9),e.ekj("not-supported",!o.midiSupport),e.xp6(18),e.ekj("not-supported",!o.paymentRequestSupport),e.xp6(9),e.ekj("not-supported",!o.permissionsSupport),e.xp6(8),e.ekj("not-supported",!o.resizeSupport),e.Q6J("routerLink",e.VKq(24,S,o.link.ResizeObserverPage)))},directives:[Y.yS],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;align-content:flex-start;justify-content:center}"],changeDetection:0}),t})(),ge=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[Y.Bz.forChild([{path:"",component:fe}])]]}),t})()},2147:(q,f,i)=>{i.d(f,{x:()=>T});var e=i(8330),M=i(2085),l=i(8499);function T(u,h=e.y){return u=null!=u?u:N,(0,M.e)((F,I)=>{let D,Z=!0;F.subscribe(new l.Q(I,b=>{const w=h(b);(Z||!u(D,w))&&(Z=!1,D=w,I.next(b))}))})}function N(u,h){return u===h}},2069:(q,f,i)=>{i.d(f,{l:()=>e});const e={now:()=>(e.delegate||Date).now(),delegate:void 0}}}]);