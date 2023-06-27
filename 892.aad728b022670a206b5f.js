"use strict";(self.webpackChunkng_web_apis=self.webpackChunkng_web_apis||[]).push([[892],{47892:(A,c,i)=>{i.r(c),i.d(c,{PaymentRequestPageModule:()=>C});var l=i(61453),t=i(74788),g=i(41751),m=i(12057),d=i(75219),y=i(95087),f=i(16823);function v(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",8),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().addToShippintCard(s)}),t._UZ(1,"img",9),t.TgZ(2,"label",10),t._uU(3),t.qZA(),t.TgZ(4,"p",11),t._uU(5),t.qZA(),t.qZA()}if(2&n){const e=o.$implicit;t.xp6(1),t.Q6J("src",e.image,t.LSH),t.xp6(2),t.Oqu(e.label),t.xp6(2),t.hij("",e.price," \u20bd")}}function P(n,o){if(1&n&&(t.TgZ(0,"div",13),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.Q6J("paymentLabel",e.label)("paymentAmount",e.amount),t.xp6(1),t.lnq(" ",e.label," (",e.amount.value," ",e.amount.currency,") ")}}function _(n,o){if(1&n&&(t.ynx(0),t.YNc(1,P,2,5,"div",12),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.shippingCart)}}function b(n,o){1&n&&t._uU(0,"Nothing added")}class r{constructor(o,e,a){this.image=o,this.label=e,this.price=a}get amount(){return{currency:"RUB",value:String(this.price)}}}let w=(()=>{class n{constructor(){this.items=[new r("https://image.flaticon.com/icons/svg/1868/1868178.svg","Matryoshka",50),new r("https://image.flaticon.com/icons/svg/820/820158.svg","Balalaika",100),new r("https://image.flaticon.com/icons/svg/1868/1868169.svg","Ushanka",70),new r("https://image.flaticon.com/icons/svg/1868/1868226.svg","Kokoshnik",70),new r("https://image.flaticon.com/icons/svg/1868/1868276.svg","Borscht",10),new r("https://image.flaticon.com/icons/svg/1868/1868380.svg","Sputnik",1e3)],this.shippingCart=[]}get totalSum(){return this.shippingCart.reduce((e,a)=>e+a.price,0)}get total(){return{label:"Total",amount:{currency:"RUB",value:String(this.totalSum)}}}addToShippintCard(e){this.shippingCart=[...this.shippingCart,e]}onPayment(e){console.info("payment response:",e),this.clearShippingCart(),e.complete()}onPaymentError(e){console.info("payment error:",e),this.clearShippingCart()}clearShippingCart(){this.shippingCart=[]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shop"]],decls:15,vars:6,consts:[[1,"items"],["class","item",3,"click",4,"ngFor","ngForOf"],["waPayment","",1,"shopping-cart",3,"paymentTotal"],[1,"sticky"],[4,"ngIf","ngIfElse"],["noItems",""],[1,"total"],[1,"buy-button",3,"disabled","waPaymentSubmit","waPaymentError"],[1,"item",3,"click"],["width","64",1,"item-image",3,"src"],[1,"item-label"],[1,"item-price"],["waPaymentItem","","class","shopping-card-item",3,"paymentLabel","paymentAmount",4,"ngFor","ngForOf"],["waPaymentItem","",1,"shopping-card-item",3,"paymentLabel","paymentAmount"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,v,6,3,"div",1),t.qZA(),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h4"),t._uU(5,"Shopping Cart"),t.qZA(),t.YNc(6,_,2,1,"ng-container",4),t.YNc(7,b,1,0,"ng-template",null,5,t.W1O),t.TgZ(9,"div",6),t.TgZ(10,"b"),t._uU(11,"Total:"),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"button",7),t.NdJ("waPaymentSubmit",function(s){return a.onPayment(s)})("waPaymentError",function(s){return a.onPaymentError(s)}),t._uU(14," Buy "),t.qZA(),t.qZA(),t.qZA()),2&e){const p=t.MAs(8);t.xp6(1),t.Q6J("ngForOf",a.items),t.xp6(1),t.Q6J("paymentTotal",a.total),t.xp6(4),t.Q6J("ngIf",a.shippingCart.length>0)("ngIfElse",p),t.xp6(6),t.hij(" ",a.totalSum," \u20bd "),t.xp6(1),t.Q6J("disabled",0===a.shippingCart.length)}},directives:[m.sg,d.u,m.O5,y.x,f.j],styles:["[_nghost-%COMP%]{display:flex}.items[_ngcontent-%COMP%]{flex:2;display:flex;flex-wrap:wrap}@media (max-width: 800px){.items[_ngcontent-%COMP%]{max-width:50%;justify-content:flex-end}}.item[_ngcontent-%COMP%]{width:150px;margin:12px;padding:16px 16px 0;display:flex;flex-direction:column;align-items:center;border:1px solid gainsboro;border-radius:8px;cursor:pointer;transition:box-shadow .3s}.item[_ngcontent-%COMP%]:hover{box-shadow:0 12px 36px #0003}.item-label[_ngcontent-%COMP%]{cursor:inherit}.item-price[_ngcontent-%COMP%]{font-size:smaller}.item-image[_ngcontent-%COMP%]{margin-bottom:12px}.sticky[_ngcontent-%COMP%]{position:sticky;top:16px}.total[_ngcontent-%COMP%]{margin-top:16px}.shopping-card-item[_ngcontent-%COMP%]{margin-top:4px;margin-bottom:4px}.shopping-cart[_ngcontent-%COMP%]{flex:1;max-width:168px;background-color:#f0f0f0;padding:0 16px;border-radius:8px}.buy-button[_ngcontent-%COMP%]{width:100%;margin-top:20px;margin-bottom:8px;background-color:#fff;border:1px solid #ccc;border-radius:4px;padding:4px;cursor:pointer}.buy-button[_ngcontent-%COMP%]:disabled{cursor:default;opacity:.56}"],changeDetection:0}),n})(),x=(()=>{class n{constructor(){this.samples={service:"import {PaymentRequestService} from '@ng-web-apis/payment-request';\n\n// ...\n\nconstructor(private readonly paymentRequest: PaymentRequestService) {}\n\npay(details: PaymentDetailsInit) {\n    this.paymentRequest.request(details).then(\n        response => {\n            response.complete();\n        },\n        error => {},\n    );\n}",directives:'<div\n  waPayment\n  [paymentTotal]="total"\n>\n  <div\n    waPaymentItem\n    [paymentLabel]="label"\n    [paymentAmount]="amount"\n  >\n    {{label}} ({{amount}})\n  </div>\n  <button\n    (waPaymentSubmit)="onPayment($event)"\n    (waPaymentError)="onError($event)"\n  >\n    Buy\n  </button>\n</div>'}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["payment-request-page"]],features:[t._Bn([{provide:l.LM,useValue:[{supportedMethods:"https://apple.com/apple-pay",data:{version:3,merchantIdentifier:"merchant.com.example",merchantCapabilities:["supports3DS","supportsCredit","supportsDebit"],supportedNetworks:["amex","discover","masterCard","visa"],countryCode:"US"}},{supportedMethods:"basic-card"}]}])],decls:45,vars:3,consts:[[1,"wrapper"],["target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API"],[3,"highlight"],[1,"how-it-works"],[1,"how-it-works-text"],[1,"how-it-works-point"],["target","_blank","href","https://github.com/tinkoff/ng-web-apis/tree/main/libs/payment-request#wapayment"],["target","_blank","href","https://www.w3.org/TR/payment-request/#paymentitem-dictionary"],["target","_blank","href","https://github.com/tinkoff/ng-web-apis/tree/main/libs/payment-request#waPaymentItem"],["target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse"],["target","_blank","href","https://github.com/tinkoff/ng-web-apis/tree/main/libs/payment-request#waPaymentSubmit"],[1,"directive-sample"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"p"),t._uU(2," Angular does not have any abstractions over "),t.TgZ(3,"a",1),t._uU(4," PaymentRequest API "),t.qZA(),t._uU(5," . This library provides you two ways to use this API with Angular of 6+ version. "),t.qZA(),t.TgZ(6,"h3"),t._uU(7,"As an Angular service:"),t.qZA(),t.TgZ(8,"pre"),t.TgZ(9,"code",2),t._uU(10),t.qZA(),t.qZA(),t.TgZ(11,"h3"),t._uU(12,"As a set of directives:"),t.qZA(),t.TgZ(13,"p"),t._uU(14,"Click to add some items to a shopping cart:"),t.qZA(),t._UZ(15,"app-shop"),t.TgZ(16,"h4"),t._uU(17,"How it works:"),t.qZA(),t.TgZ(18,"div",3),t.TgZ(19,"div",4),t.TgZ(20,"p",5),t.TgZ(21,"a",6),t._uU(22," waPayment "),t.qZA(),t._uU(23," directive defines a scope for a\xa0new payment and needs "),t.TgZ(24,"a",7),t._uU(25," PaymentItem "),t.qZA(),t._uU(26," object with information about a label and a\xa0total sum of the payment "),t.qZA(),t.TgZ(27,"p",5),t._uU(28," Each item of the shipping cart is a\xa0 "),t.TgZ(29,"a",8),t._uU(30," waPaymentItem "),t.qZA(),t._uU(31," directive. It\xa0is\xa0a\xa0declarative "),t.TgZ(32,"a",7),t._uU(33," PaymentItem "),t.qZA(),t._uU(34," for your Payment "),t.qZA(),t.TgZ(35,"p",5),t._uU(36," Click on the button starts a\xa0PaymentRequest modal in your browser that returns "),t.TgZ(37,"a",9),t._uU(38," PaymentResponse "),t.qZA(),t._uU(39," or an error. It works due a\xa0 "),t.TgZ(40,"a",10),t._uU(41," waPaymentSubmit "),t.qZA(),t._uU(42," directive. "),t.qZA(),t.qZA(),t.TgZ(43,"pre",11),t._UZ(44,"code",2),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(9),t.Q6J("highlight",a.samples.service),t.xp6(1),t.hij("\n    ",a.samples.service,"\n"),t.xp6(34),t.Q6J("highlight",a.samples.directives))},directives:[g.y$,w],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}.wrapper[_ngcontent-%COMP%]{padding:0 10px}.how-it-works[_ngcontent-%COMP%]{position:relative;display:flex;flex-wrap:wrap}.how-it-works-point[_ngcontent-%COMP%]{margin-top:26px;margin-bottom:26px}.how-it-works-text[_ngcontent-%COMP%]{flex:1;min-width:300px;margin:8px}.directive-sample[_ngcontent-%COMP%]{display:block;flex:1;margin:8px;width:330px}.directive-sample-arrow[_ngcontent-%COMP%]{position:absolute;right:95px;top:-42px}"],changeDetection:0}),n})();var Z=i(23327);let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,g._l,l.th,Z.Bz.forChild([{path:"",component:x}])]]}),n})()}}]);