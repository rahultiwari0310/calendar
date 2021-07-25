(this.webpackJsonpcalendar_firebase=this.webpackJsonpcalendar_firebase||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),c=n(16),i=n.n(c),s=(n(36),n(37),n(9)),d=n(13),l=n(2);function o(e){var t=e.onClick,n=e.icon;return Object(l.jsx)("button",{onClick:t,type:"button",className:"calendar-nav-button btn btn-primary ",children:Object(l.jsx)("i",{className:"fas fa-angle-".concat(n)})})}var u=n(30),j=n(18),b=n(11),f=n.n(b),h="DD MMM YYYY",O="hh:mm A",v="".concat(h," ").concat(O),m=function(e,t){return Math.max(Math.min(e.endDate,t.endDate)-Math.max(e.startDate,t.startDate),0)>0},x=function(e,t,n,a){var r=a.startOf("day").$d.getTime(),c=a.endOf("day").$d.getTime(),i=Math.max(e.startDate,r),s=(Math.min(e.endDate,c)-i)/18e5*20+"px",d=(i-a.startOf("day").$d.getTime())/18e5*20+"px",l=100/(t.length+1)*n+"%";return{width:100/(t.length+1)+"%",top:d,height:s,left:l}},g=function(e){var t=f()().add(e,"week").startOf("week");return new Array(7).fill(t).map((function(e,t){return e.add(t,"day")}))},p=n(26);function D(e){var t=e.eventId,n=e.title,a=e.owner,r=e.startDate,c=e.endDate,i=e.theme;return Object(l.jsxs)(p.a,{id:t,effect:"solid",clickable:!0,offset:{top:0,left:0},children:[Object(l.jsxs)("p",{children:["Title: ",n]}),Object(l.jsxs)("p",{children:["Owner: ",a]}),Object(l.jsxs)("p",{children:["Time: ",f()(r).format(v)," -"," ",f()(c).format(v)]}),i?Object(l.jsxs)("p",{children:["Theme: ",i]}):null]})}function E(e){var t=e.event;return Object(l.jsxs)("div",{className:"event-content",children:[Object(l.jsx)("div",{className:"event-title",children:t.title}),Object(l.jsxs)("div",{className:"event-time",children:[f()(t.startDate).format("hh:mm")," -"," ",f()(t.endDate).format(O)]})]})}function y(e){var t=e.date,n=e.addOrEditEvent,a=e.event,r=(0,e.checkForExistingMeetings)(a,a.eventId,!0),c=[].concat(Object(u.a)(r),[a.eventId]).sort((function(e,t){return e.localeCompare(t)})).indexOf(a.eventId);return Object(l.jsxs)("div",{className:"event-in-day",style:x(a,r,c,t),"data-for":a.eventId,"data-tip":!0,onClick:function(e){return n(Object(s.a)({},a))},children:[Object(l.jsx)(j.Draggable,{type:"event",data:a.eventId,children:Object(l.jsx)(E,{event:a})}),Object(l.jsx)(D,Object(s.a)({},a))]})}function k(e){var t=e.slot,n=e.isFirstDay,a=e.addOrEditEvent,r=e.handleDrop,c=e.idx;return Object(l.jsx)(j.Droppable,{types:["event"],onDrop:function(e){r(t,e.event)},children:Object(l.jsx)("div",{className:"half-hour half-hour-".concat(c%2),onClick:function(e){return a({slot:t})},children:!n||c%2?null:Object(l.jsx)("span",{className:"half-hour-time",children:t.format(O)})})})}function N(e){var t=e.date;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"day-heading",children:t.format(h)}),Object(l.jsx)("div",{className:"day-heading",children:t.format("dddd")})]})}function w(e){var t=e.date,n=e.isFirstDay,a=e.addOrEditEvent,r=e.eventsInDay,c=e.handleDrop,i=e.checkForExistingMeetings;return Object(l.jsxs)("div",{className:"col border",children:[Object(l.jsx)(N,{date:t}),Object(l.jsxs)("div",{className:"half-hours",children:[new Array(48).fill(1).map((function(e,r){var i=t.startOf("day").add(30*r,"minutes");return Object(l.jsx)(k,{slot:i,idx:r,isFirstDay:n,handleDrop:c,addOrEditEvent:a},i.$d.getTime())})),r.map((function(e){return Object(l.jsx)(y,{event:e,date:t,checkForExistingMeetings:i,addOrEditEvent:a},e.eventId)}))]})]})}var M=n(29).a.initializeApp({apiKey:"AIzaSyDE8yPkLomMyYrLnu3f_t37CFd_eptOCo8",authDomain:"calendar-firebase-e3f9f.firebaseapp.com",databaseURL:"https://calendar-firebase-e3f9f-default-rtdb.firebaseio.com",projectId:"calendar-firebase-e3f9f",storageBucket:"calendar-firebase-e3f9f.appspot.com",messagingSenderId:"534820117922",appId:"1:534820117922:web:00d0ec4ef1d0eb7b0ae6fb",measurementId:"G-9P678RTSDQ"}).database().ref(),C=function(e,t){t?M.child("events/".concat(t)).set(e,F):M.child("events").push(e,F)},F=function(e){e&&(console.log("Error:",e),window.alert(e.toString()))};function I(e){var t=e.selectedWeek,n=e.addOrEditEvent,a=e.allEvents,r=e.checkForExistingMeetings;return Object(l.jsx)("div",{className:"row col-md-10 g-0",children:g(t).map((function(e,t){return Object(l.jsx)(w,{addOrEditEvent:n,date:e,isFirstDay:!t,eventsInDay:(c=e,i=a,Object.keys(i).filter((function(e){return m(i[e],{startDate:c.$d.getTime(),endDate:c.endOf("day").$d.getTime()})})).map((function(e){return Object(s.a)(Object(s.a)({},i[e]),{},{eventId:e})}))||[]),handleDrop:T(a,r),checkForExistingMeetings:r},e.$d.getTime());var c,i}))})}var T=function(e,t){return function(n,a){var r=e[a],c=r.startDate,i=r.endDate;r.startDate=n.$d.getTime(),r.endDate=r.startDate+(i-c),t(r,a),C(r,a)}};function S(e){var t=e.changeWeek,n=e.selectedWeek,a=e.addOrEditEvent,r=e.checkForExistingMeetings,c=e.allEvents;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{onClick:function(e){return t(n-1)},icon:"left"}),Object(l.jsx)(I,{selectedWeek:n,addOrEditEvent:a,allEvents:c,checkForExistingMeetings:r}),Object(l.jsx)(o,{onClick:function(e){return t(n+1)},icon:"right"})]})}function $(e){var t=e.addOrEditEvent,n=f()();return Object(l.jsx)("div",{className:"create-event",children:Object(l.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(e){return t({slot:n.get("minutes")>30?n.add(1,"hour").startOf("hour"):n.set("minute",30)})},children:"+ Create Event"})})}function A(e){var t=e.addOrEditEvent;return Object(l.jsxs)("div",{className:"app-head",children:[Object(l.jsxs)("h1",{children:[Object(l.jsx)("i",{className:"fas fa-calendar-alt"})," Weekly Calendar"]}),Object(l.jsx)($,{addOrEditEvent:t})]})}var W=n(31),L=n(27),P=n.n(L);function q(e){var t=e.label,n=e.labelFor;return Object(l.jsx)("label",{labelfor:n,className:"form-label",children:t})}function Y(e){var t=e.startDate,n=e.endDate,a=e.onChange;return Object(l.jsxs)("div",{className:"field mb-3",children:[Object(l.jsx)(q,{label:"Select date and time"}),Object(l.jsx)(P.a,{onChange:a,pickerClassName:"pickers",className:"date-time-input",startDate:t,endDate:n})]})}function _(e){var t=e.placeholder,n=e.value,a=e.onChange,r=e.name,c=e.label,i=e.required;return Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(q,{label:c,labelFor:r}),Object(l.jsx)("input",{type:"text",className:"form-control",required:i,placeholder:t,value:n,onChange:function(e){return a(e.currentTarget.value)},id:r})]})}function B(e){var t=e.slot,n=e.closeModal,r=e.startDate,c=e.endDate,i=e.title,o=e.owner,u=e.theme,j=e.eventId,b=e.checkForExistingMeetings,f=Object(a.useState)({startDate:new Date(r||t.$d),endDate:new Date(c||t.add(1,"hour").$d),title:i,theme:u,owner:o}),h=Object(d.a)(f,2),O=h[0],v=h[1],m=function(e){return v(Object(s.a)(Object(s.a)({},O),e))};return Object(l.jsxs)("div",{className:"form-fields",children:[Object(l.jsx)("h3",{className:"event-form-heading",children:"Event"}),Object(l.jsx)("div",{className:"event-actions",children:Object(l.jsx)("i",{onClick:function(){return function(e,t){window.confirm("Are you sure you want to delete this event ?")&&(M.child("events/".concat(e)).remove(F),t&&t())}(j,n)},className:"fas fa-trash delete-event"})}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=O.startDate,a=O.endDate,r=Object(s.a)(Object(s.a)({},O),{},{theme:O.theme||null,startDate:t.getTime(),endDate:a.getTime()});b(r,j),C(r,j),n()},children:[Object(l.jsx)(Y,{startDate:O.startDate,endDate:O.endDate,onChange:function(e){return m({endDate:e.end,startDate:e.start})}}),Object(l.jsx)(_,{placeholder:"Enter event title",value:O.title,onChange:function(e){return m({title:e})},label:"Title",name:"title",required:!0}),Object(l.jsx)(_,{placeholder:"Enter owner name",value:O.owner,onChange:function(e){return m({owner:e})},label:"Owner",name:"owner",required:!0}),Object(l.jsx)(_,{placeholder:"Enter theme",value:O.theme,onChange:function(e){return m({theme:e})},label:"Theme",name:"theme"}),Object(l.jsx)("button",{type:"submit",className:"btn btn-info",children:"Save"})]})]})}var R=n(28),z=n.n(R);function J(e){var t=e.children,n=e.modalIsOpen,a=e.closeModal,r=e.title;return Object(l.jsx)(z.a,{isOpen:n,onRequestClose:a,contentLabel:r,style:{content:G},children:t})}var G={width:"50%",height:"70vh",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},K=["isOpen","slot"];function Q(e){var t=e.closeModal,n=e.checkForExistingMeetings,a=e.modalPayload,r=a.isOpen,c=a.slot,i=Object(W.a)(a,K);return Object(l.jsx)(J,{modalIsOpen:r,closeModal:t,title:"Enter event details",children:Object(l.jsx)(B,Object(s.a)(Object(s.a)({checkForExistingMeetings:n,slot:c},i),{},{closeModal:t}))})}function U(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),i=Object(d.a)(c,2),o=i[0],u=i[1],j=Object(a.useState)({}),b=Object(d.a)(j,2),h=b[0],O=b[1],x=function(e){u(Object(s.a)({isOpen:!0},e))};Object(a.useEffect)((function(){return e=O,void M.child("events").on("value",(function(t){var n=t.val();n&&e(Object(s.a)({},n))}));var e}),[]);var g=function(e,t,n){return function(e,t,n,a){var r=Object.keys(t).filter((function(a){var r=t[a];return m(e,r)&&a!==n}));if(r.length){var c=t[r[0]];!a&&window.alert('There is already a meeting "'.concat(c.title,'" starting at ').concat(f()(c.startDate).format(v)))}return r}(e,h,t,n)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(A,{addOrEditEvent:x}),Object(l.jsxs)("div",{className:"calendar-container row",children:[Object(l.jsx)(S,{changeWeek:r,addOrEditEvent:x,allEvents:h,checkForExistingMeetings:g,selectedWeek:n}),Object(l.jsx)(Q,{closeModal:function(e){return u(Object(s.a)(Object(s.a)({},o),{},{isOpen:!o.isOpen}))},checkForExistingMeetings:g,modalPayload:o})]})]})}var H=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(U,{})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(H,{})}),document.getElementById("root")),V()}},[[60,1,2]]]);
//# sourceMappingURL=main.332da680.chunk.js.map