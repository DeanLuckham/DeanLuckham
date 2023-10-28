"use strict";(self.webpackChunkdeanluckham_dev=self.webpackChunkdeanluckham_dev||[]).push([[790],{790:(T,d,c)=>{c.r(d),c.d(d,{OdinRoutes:()=>w});var s=c(814),m=c(385),o=c(946);let k=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=o.Xpm({type:e,selectors:[["app-library"]],hostAttrs:[1,"flex-col","flex","flex-grow"],standalone:!0,features:[o.jDz],decls:5,vars:0,consts:[["id","content",1,"text-white","flex","flex-grow","justify-center","items-center"],[1,"flex","flex-col","flex-grow","justify-center","items-center","p-20","w-full","max-w-6xl"],[1,"text-gray-300","font-extrabold","text-7xl","w-fit"]],template:function(r,n){1&r&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),o._uU(3,"Coming Soon"),o.qZA(),o._UZ(4,"router-outlet"),o.qZA()())},dependencies:[s.ez,m.lC]})}return e})(),y=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=o.Xpm({type:e,selectors:[["app-odin"]],hostAttrs:[1,"flex-col","flex","flex-grow"],standalone:!0,features:[o.jDz],decls:4,vars:0,consts:[["id","content",1,"text-white","flex","flex-grow","justify-center","items-center"],[1,"flex","flex-col","justify-center","items-center","p-20","w-full","max-w-6xl"],[1,"text-gray-300","font-extrabold","text-7xl","w-fit"]],template:function(r,n){1&r&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),o._uU(3,"Odin Project"),o.qZA()()())},dependencies:[s.ez]})}return e})(),b=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=o.Xpm({type:e,selectors:[["app-book-detail"]],standalone:!0,features:[o.jDz],decls:2,vars:0,template:function(r,n){1&r&&(o.TgZ(0,"p"),o._uU(1,"book-detail works!"),o.qZA())},dependencies:[s.ez]})}return e})(),g=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=o.Xpm({type:e,selectors:[["app-book"]],inputs:{book:"book"},standalone:!0,features:[o.jDz],decls:2,vars:0,template:function(r,n){1&r&&(o.TgZ(0,"p"),o._uU(1,"book works!"),o.qZA())},dependencies:[s.ez]})}return e})();function h(e,i,t,r,n,p,l){try{var u=e[p](l),a=u.value}catch(C){return void t(C)}u.done?i(a):Promise.resolve(a).then(r,n)}function f(e){return function(){var i=this,t=arguments;return new Promise(function(r,n){var p=e.apply(i,t);function l(a){h(p,r,n,l,u,"next",a)}function u(a){h(p,r,n,l,u,"throw",a)}l(void 0)})}}class v{constructor(){this.books=[]}addBook(i){this.isInLibrary(i)||this.books.push(i)}removeBook(i){this.books=this.books.filter(t=>t.title!==i)}getBook(i){var t=this;return f(function*(){return t.books.find(r=>r.title===i)})()}getBooks(){var i=this;return f(function*(){return i.books})()}isInLibrary(i){return this.books.some(t=>t.title===i.title)}}let x=(()=>{class e{addBook(t){this.library.addBook(t)}removeBook(t){this.library.removeBook(t)}getBook(t){var r=this;return f(function*(){return yield r.library.getBook(t)})()}getBooks(){var t=this;return f(function*(){return yield t.library.getBooks()})()}constructor(){this.library=new v}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function B(e,i){1&e&&o._UZ(0,"app-book",2),2&e&&o.Q6J("book",i.$implicit)}const w=[{path:"",component:y,title:"Odin Project"},{path:"library",component:k,children:[{path:"",component:(()=>{class e{constructor(t){this.libraryService=t,this.books=[],this.filteredBooks=[]}ngOnInit(){this.getBooks()}getBooks(){this.libraryService.getBooks().then(t=>{this.books=t,this.filteredBooks=t})}filterBooks(t){t||(this.filteredBooks=this.books),this.filteredBooks=this.books.filter(r=>r.title.toLowerCase().includes(t.toLowerCase()))}addBook(t){this.libraryService.addBook(t),this.getBooks()}removeBook(t){this.libraryService.removeBook(t.title)}static#t=this.\u0275fac=function(r){return new(r||e)(o.Y36(x))};static#e=this.\u0275cmp=o.Xpm({type:e,selectors:[["app-library-dash"]],standalone:!0,features:[o.jDz],decls:4,vars:1,consts:[["id","books-grid",1,"h-full","w-full"],[3,"book",4,"ngFor","ngForOf"],[3,"book"]],template:function(r,n){1&r&&(o.TgZ(0,"div"),o._uU(1,"Library Dash"),o.qZA(),o.TgZ(2,"div",0),o.YNc(3,B,1,1,"app-book",1),o.qZA()),2&r&&(o.xp6(3),o.Q6J("ngForOf",n.filteredBooks))},dependencies:[s.ez,s.sg,g],styles:["#books-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,12rem);grid-template-rows:repeat(auto-fit,24rem)}"]})}return e})(),title:"Library"},{path:"detail/:title",component:b,title:"Library"},{path:"**",redirectTo:""}]},{path:"**",redirectTo:""}]}}]);