(this["webpackJsonpsqi-schedule"]=this["webpackJsonpsqi-schedule"]||[]).push([[0],{35:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var s=a(3),l=a.n(s),c=a(7),i=a.n(c),n=(a(35),a(36),a(37),a(38),a(45),a(46),a(12)),o=a(23),d=a(24),r=a(28),h=a(26),p=a(27),m=a(10),j=a(29),b=a(30),u=(a(14),a(50),a(51),a(53),a(54),a(55),a(56),a(57),a(58),a(2)),x=a.n(u),O=a(6),A=a.n(O),f=a(25),v=a.n(f),N=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SQISCHEDULE_DATABASE_URL,g=v.a.create({baseURL:N}),C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAXklEQVQoz2NgQAfqQEgAzGD4D4QzsElpMqxn2A+Eh4AKZgLhfyALxF8PlIGD9WD9EAhRBIPrEYr2Iwmjwv3oivIZHJBgPgWKBrd18ylURMC69TgVrceMYHSIEsHUAABsgZgPq7GFAAAAAABJRU5ErkJggg==",y=a(1),S=function(e){Object(r.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).getScheduleById=function(e){g.get("/sqi-schedule/get-scheduleById/"+e).then((function(e){console.log(e.data),s.setState({id:e.data.id,task:e.data.task,app:e.data.app,fromDate:e.data.fromDate,fromTime:e.data.fromTime,toDate:e.data.toDate,toTime:e.data.toTime,color:e.data.color})}))},s.deleteSchedule=function(e){g.delete("/sqi-schedule/delete-schedule/"+e).then((function(e){A.a.fire({icon:"success",title:"Success",text:"Your Task Has Been Deleted",confrimButtonText:"OK"}).then((function(e){e.isConfirmed&&window.location.reload()}))}))},s.updateSchedule=function(e){var t={task:s.state.task,app:s.state.app[1],fromDate:s.state.fromDate,fromTime:s.state.toTime,toDate:s.state.toDate,toTime:s.state.toTime,color:s.state.app[0]};console.log(t),s.handleUpdateValidation()?g.put("/sqi-schedule/update-schedule/"+e,t).then((function(e){A.a.fire({icon:"success",title:"Success",text:"Your Data Has Been Update",confirmButtonText:"OK"}).then((function(e){e.isConfirmed&&window.location.reload()}))})):A.a.fire({icon:"warning",title:"Sorry !",text:"You Must Fill The Requirement !",confirmButtonText:"OK"}).then((function(e){e.isConfirmed}))},s.handleUpdateSchedule=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.handleUpdateApp=function(e){console.log(e),s.setState(Object(n.a)({},e.target.name,e.target.value.split(",")))},s.handleEvent=function(e){g.get("/sqi-schedule/get-schedule").then((function(t){var a=e.target.value,l=(t.data,s.state.temp);s.setState({temporary:[]});var c=[];l.map((function(e){"CRM Halo"===a&&"CRM Halo"===e.app&&(c.push(e),console.log(c),s.setState({temporary:c})),"Halo Lite"===a&&"Halo Lite"===e.app&&(c.push(e),console.log(c),s.setState({temporary:c})),"Halo Apps"===a&&"Halo Apps"===e.app&&(c.push(e),console.log(c),s.setState({temporary:c}),console.log(s.state.title)),"Specta"===a&&"Specta"===e.app&&(c.push(e),console.log(c),s.setState({temporary:c})),"Telephony"===a&&"Telephony"===e.app&&(c.push(e),console.log(c),s.setState({temporary:c})),"SOSMED"===a&&"SOSMED"===e.app&&(c.push(e),console.log(c),s.setState({temporary:c})),"Chain"===a&&"Chain"===e.app&&(c.push(e),console.log(c),s.setState({temporary:c})),"MQA"===a&&"MQA"===e.app&&(c.push(e),console.log(c),s.setState({temporary:c})),"WA Client"===a&&"WA Client"===e.app&&(c.push(e),console.log(c),s.setState({temporary:c})),"Halo Toolkit"===a&&"Halo Toolkit"===e.app&&(c.push(e),console.log(c),s.setState({temporary:c})),"Winters"===a&&"Winters"===e.app&&(c.push(e),console.log(c),s.setState({temporary:c})),"All"===a&&s.setState({temporary:l})}))}))},s.resetModal=function(){var e=s.state.fields;e.task="",e.app="",e.fromDate="",e.fromTime="",e.toDate="",e.toTime="";var t={task:"",app:"",fromDate:"",fromTime:"",toDate:"",toTime:""};s.setState({fields:e,errors:t})},s.state={fields:{},errors:{},schedule:[],number:1,fileName:"CTS-D Schedule",title:[],start:[],end:[],color:[],temp:[],temporary:[]},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(e){this.getSchedule(),this.getCalendar()}},{key:"getSchedule",value:function(){var e=this;g.get("/sqi-schedule/get-schedule").then((function(t){var a=t.data;e.setState({schedule:a}),x()(".filter").each((function(e){var t=x()("#example thead th").eq(x()(this).index()).text();"application"===t?x()(this).html('<button type="text" placeholder="Search '+t+'" data-index="'+e+'" />'):x()(this).html('<input type="text" placeholder="Search '+t+'" data-index="'+e+'" />')}));var s=x()("#example").DataTable({scrollY:"300px",scrollX:!0,scrollCollapse:!0,paging:!0,fixedColumns:!0,responsive:!0,dom:"Bfrtip",buttons:["excel","pdf"]});x()(s.table().container()).on("keyup",".filter input",(function(){s.column(x()(this).data("index")).search(this.value).draw()}))}))}},{key:"handleValidation",value:function(){var e=this.state.fields,t={},a=!0;return e.task||(a=!1,t.task="Task can't be empty"),e.app||(a=!1,t.app="Application can't be empty"),e.fromDate||(a=!1,t.fromDate="Date can't be empty"),e.fromTime||(a=!1,t.fromTime="Time can't be empty"),e.toDate||(a=!1,t.toDate="Date can't be empty"),e.toTime||(a=!1,t.toTime="Time can't be empty"),this.setState({errors:t}),a}},{key:"submitTask",value:function(e){e.preventDefault();var t=this.state.fields;if(this.handleValidation()){var a={task:t.task,app:t.app[1],fromDate:t.fromDate,toDate:t.toDate,fromTime:t.fromTime,toTime:t.toTime,color:t.app[0]};console.log(a),g.post("/sqi-schedule/add-schedule",a).then((function(e){A.a.fire({icon:"success",title:"Success",text:"Your Task Has Been Added",confrimButtonText:"OK"}).then((function(e){e.isConfirmed&&window.location.reload()}))}))}else A.a.fire({icon:"warning",title:"Sorry !",text:"You Must Fill The Requirement !",confirmButtonText:"OK"}).then((function(e){e.isConfirmed}))}},{key:"handleUpdateValidation",value:function(){var e={},t=!0;return""===this.state.task&&(t=!1,e.task="Task cannot be empty"),this.setState({errors:e}),t}},{key:"handleChange",value:function(e,t){var a=this.state.fields;a[e]=t.target.value,this.setState({fields:a})}},{key:"handleChangeApp",value:function(e,t){var a=this.state.fields;a[e]=t.target.value.split(","),this.setState({fields:a})}},{key:"getCalendar",value:function(){var e=this;g.get("/sqi-schedule/get-schedule").then((function(t){var a=t.data;e.setState({temp:a});var s=e.state.temp;e.setState({temporary:s})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.schedule,s=t.temporary,l=this.state.number;return Object(y.jsxs)("div",{className:"content contentSection",children:[Object(y.jsx)("section",{className:"titleSection",children:Object(y.jsx)("div",{className:"titleWeb",children:Object(y.jsxs)("h3",{children:[Object(y.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAA2UlEQVRIx+3VvQ3CMBCG4VdCTMASFBTMgJQ+y1BE/LimRGICoGEKRmAMCpiA5ijiCCWcLdsxBYi78rMepYj9wQfHYDCJaWsEQRLT3FBBhbFHjWObtKJwMXt7KHwPGjOLZgTRvmqeBFXv0CIJUn6E5a9DJuIifQ20CoBKTgz7QyUPhE1fqGYujPpBXSYYGrBl7GE80LoV7BCultKYYGjK3VI6Eww11M3BREANpTNRUE3pjAfSg4mDiYYS7lo2qEIQzs4+6+7Z9fgXueoIjnkK8lXZYeup7P/o8wTnrKxnm+eoNgAAAABJRU5ErkJggg=="}),"CTS-D Calendar"]})})}),Object(y.jsx)("section",{className:"contentSection",children:Object(y.jsxs)("button",{type:"button",className:"btn btn-primary addTask contentSection","data-bs-toggle":"modal","data-bs-target":"#addTaskModal",children:[Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:C})}),"Add Task"]})}),Object(y.jsx)("section",{className:"contentSection",children:Object(y.jsx)("div",{className:"modal fade",id:"addTaskModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(y.jsx)("div",{className:"modal-dialog",children:Object(y.jsxs)("div",{className:"modal-content",children:[Object(y.jsxs)("div",{className:"modal-header",children:[Object(y.jsx)("img",{src:C}),Object(y.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Add Your Task"}),Object(y.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(y.jsxs)("form",{onSubmit:this.submitTask.bind(this),children:[Object(y.jsx)("div",{className:"modal-body",children:Object(y.jsx)("div",{className:"card-body",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-sm-12",children:Object(y.jsx)("div",{className:"form-group",children:Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"task col-sm-6",children:Object(y.jsx)("label",{children:"Your Task"})}),Object(y.jsxs)("div",{className:"task col-md-12",children:[Object(y.jsx)("input",{name:"task",className:"col-md-12",placeholder:"-- Enter Your Task --",onChange:this.handleChange.bind(this,"task"),value:this.state.fields.task}),Object(y.jsx)("span",{style:{color:"red",fontSize:"15px"},children:this.state.errors.task})]})]})})}),Object(y.jsx)("div",{className:"col-sm-12",children:Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("div",{className:"application col-sm-6",children:Object(y.jsx)("label",{children:"Your Application"})}),Object(y.jsxs)("div",{className:"col-sm-12",children:[Object(y.jsxs)("select",{className:" application col-sm-12",name:"app",onChange:this.handleChangeApp.bind(this,"app"),value:this.state.fields.app,children:[Object(y.jsx)("option",{value:"null",children:"-- Choose Application --"}),Object(y.jsx)("option",{className:"selectApp",id:"crmHalo",value:"#62A1F3,CRM Halo",children:"CRM Halo"}),Object(y.jsx)("option",{className:"selectApp",id:"haloLite",value:"#71E263,Halo Lite",children:"Halo Lite"}),Object(y.jsx)("option",{className:"selectApp",id:"haloApps",value:"#F8D49D,Halo Apps",children:"Halo Apps"}),Object(y.jsx)("option",{className:"selectApp",id:"specta",value:"#F8C957,Specta",children:"Specta"}),Object(y.jsx)("option",{className:"selectApp",id:"telephony",value:"#E18FF0,Telephony",children:"Telephony"}),Object(y.jsx)("option",{className:"selectApp",id:"sosmed",value:"#FFAAA5,SOSMED",children:"SOSMED"}),Object(y.jsx)("option",{className:"selectApp",id:"chain",value:"#BAC7A7,Chain",children:"Chain"}),Object(y.jsx)("option",{className:"selectApp",id:"mqa",value:"#D8854F,MQA",children:"MQA"}),Object(y.jsx)("option",{className:"selectApp",id:"waClient",value:"#5EAAA8,WA Client",children:"WA Client"}),Object(y.jsx)("option",{className:"selectApp",id:"haloToolkit",value:"#839B97,Halo Toolkit",children:"Halo Toolkit"}),Object(y.jsx)("option",{className:"selectApp",id:"winters",value:"#70AF85,Winters",children:"Winters"})]}),Object(y.jsx)("span",{style:{color:"red",fontSize:"15px"},children:this.state.errors.app})]})]})}),Object(y.jsx)("div",{className:"col-sm-12",children:Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("div",{className:"date col-sm-6",children:Object(y.jsx)("label",{children:"From"})}),Object(y.jsxs)("div",{className:"chooseDate",children:[Object(y.jsx)("input",{className:"fromDate col-sm-6",type:"date",name:"fromDate",placeholder:"Start",onChange:this.handleChange.bind(this,"fromDate"),value:this.state.fields.fromDate}),Object(y.jsx)("input",{type:"time",className:"fromTime col-sm-3",name:"fromTime",onChange:this.handleChange.bind(this,"fromTime"),value:this.state.fields.fromTime})]}),Object(y.jsx)("span",{className:"col-sm-6",style:{color:"red",fontSize:"15px"},children:this.state.errors.fromDate}),Object(y.jsx)("span",{className:"col-sm-3",style:{color:"red",fontSize:"15px",paddingLeft:"125px"},children:this.state.errors.fromTime})]})}),Object(y.jsx)("div",{className:"col-sm-12",children:Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("div",{className:"date col-sm-6",children:Object(y.jsx)("label",{children:"To"})}),Object(y.jsxs)("div",{className:"chooseDate",children:[Object(y.jsx)("input",{className:"toDate col-sm-6",type:"date",name:"toDate",placeholder:"Finish",onChange:this.handleChange.bind(this,"toDate"),value:this.state.fields.toDate}),Object(y.jsx)("input",{type:"time",className:"fromTime col-sm-3",name:"toTime",onChange:this.handleChange.bind(this,"toTime"),value:this.state.fields.toTime})]}),Object(y.jsx)("span",{className:"col-sm-6",style:{color:"red",fontSize:"15px"},children:this.state.errors.toDate}),Object(y.jsx)("span",{className:"col-sm-3",style:{color:"red",fontSize:"15px",paddingLeft:"125px"},children:this.state.errors.toTime})]})})]})})}),Object(y.jsxs)("div",{className:"modal-footer",children:[Object(y.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:this.resetModal,children:"Cancel"}),Object(y.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})]})]})})})}),Object(y.jsx)("section",{className:"contentSection",children:Object(y.jsx)("div",{className:"modal fade",id:"deleteTaskModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(y.jsx)("div",{className:"modal-dialog",children:Object(y.jsxs)("div",{className:"modal-content",children:[Object(y.jsxs)("div",{className:"modal-header",children:[Object(y.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Delete Task"}),Object(y.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(y.jsx)("div",{className:"modal-body",children:"Are you sure to delete this event?"}),Object(y.jsxs)("div",{className:"modal-footer",children:[Object(y.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(y.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.deleteSchedule(e.state.id)},children:"Delete"})]})]})})})}),Object(y.jsx)("section",{className:"contentSection",children:Object(y.jsx)("div",{className:"modal fade",id:"updateTaskModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(y.jsx)("div",{className:"modal-dialog",children:Object(y.jsxs)("div",{className:"modal-content",children:[Object(y.jsxs)("div",{className:"modal-header",children:[Object(y.jsx)("img",{src:C}),Object(y.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:" Edit Your Task"}),Object(y.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(y.jsxs)("form",{children:[Object(y.jsx)("div",{className:"modal-body",children:Object(y.jsx)("div",{className:"card-body",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-sm-12",children:Object(y.jsx)("div",{className:"form-group",children:Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"task col-sm-6",children:Object(y.jsx)("label",{children:"Your Task"})}),Object(y.jsxs)("div",{className:"task col-md-12",children:[Object(y.jsx)("input",{name:"task",className:"col-md-12",placeholder:"-- Enter Your Task --",onChange:this.handleUpdateSchedule,value:this.state.task}),Object(y.jsx)("span",{style:{color:"red",fontSize:"15px"},children:this.state.errors.task})]})]})})}),Object(y.jsx)("div",{className:"col-sm-12",children:Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("div",{className:"application col-sm-6",children:Object(y.jsx)("label",{children:"Your Application"})}),Object(y.jsxs)("div",{className:"col-sm-12",children:[Object(y.jsxs)("select",{className:" application col-sm-12",name:"app",onChange:this.handleUpdateApp,value:this.state.app,children:[Object(y.jsx)("option",{className:"selectApp",style:{color:"gray"},value:"null",children:"-- Choose Application --"}),Object(y.jsx)("option",{className:"selectApp",value:"#62A1F3,CRM Halo",children:"CRM Halo"}),Object(y.jsx)("option",{className:"selectApp",value:"#71E263,Halo Lite",children:"Halo Lite"}),Object(y.jsx)("option",{className:"selectApp",value:"#F8D49D,Halo Apps",children:"Halo Apps"}),Object(y.jsx)("option",{className:"selectApp",value:"#F8C957,Specta",children:"Specta"}),Object(y.jsx)("option",{className:"selectApp",value:"#E18FF0,Telephony",children:"Telephony"}),Object(y.jsx)("option",{className:"selectApp",value:"#FFAAA5,SOSMED",children:"SOSMED"}),Object(y.jsx)("option",{className:"selectApp",value:"#BAC7A7,Chain",children:"Chain"}),Object(y.jsx)("option",{className:"selectApp",value:"#D8854F,MQA",children:"MQA"}),Object(y.jsx)("option",{className:"selectApp",value:"#5EAAA8,WA Client",children:"WA Client"}),Object(y.jsx)("option",{className:"selectApp",value:"#839B97,Halo Toolkit",children:"Halo Toolkit"}),Object(y.jsx)("option",{className:"selectApp",value:"#70AF85,Winters",children:"Winters"})]}),Object(y.jsx)("span",{style:{color:"red",fontSize:"15px"},children:"Please fill again !"}),Object(y.jsx)("span",{style:{color:"red",fontSize:"15px"},children:this.state.errors.app})]})]})}),Object(y.jsx)("div",{className:"col-sm-12",children:Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("div",{className:"date col-sm-6",children:Object(y.jsx)("label",{children:"From"})}),Object(y.jsxs)("div",{className:"chooseDate",children:[Object(y.jsx)("input",{className:"fromDate col-sm-6",type:"date",name:"fromDate",placeholder:"Start",onChange:this.handleUpdateSchedule,value:this.state.fromDate}),Object(y.jsx)("input",{type:"time",className:"fromTime col-sm-3",name:"fromTime",onChange:this.handleUpdateSchedule,value:this.state.fromTime})]})]})}),Object(y.jsx)("div",{className:"col-sm-12",children:Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("div",{className:"date col-sm-6",children:Object(y.jsx)("label",{children:"To"})}),Object(y.jsxs)("div",{className:"chooseDate",children:[Object(y.jsx)("input",{className:"toDate col-sm-6",type:"date",name:"toDate",placeholder:"Finish",onChange:this.handleUpdateSchedule,value:this.state.toDate}),Object(y.jsx)("input",{type:"time",className:"fromTime col-sm-3",name:"toTime",onChange:this.handleUpdateSchedule,value:this.state.toTime})]})]})})]})})}),Object(y.jsxs)("div",{className:"modal-footer",children:[Object(y.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:this.resetModal,children:"Cancel"}),Object(y.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.updateSchedule(e.state.id)},children:"Save changes"})]})]})]})})})}),Object(y.jsx)("section",{className:"filterSection contentSection",children:Object(y.jsxs)("div",{className:"col-lg-12",children:[Object(y.jsx)("label",{htmlFor:"calendar_view",children:"Filter Applications :"}),Object(y.jsxs)("div",{className:"custom-control custom-checkbox","data-filter":!0,children:[Object(y.jsx)("label",{className:"checkbox-inline filterCalendar"}),Object(y.jsx)("input",{className:"filterApp",id:"all",name:"apps",type:"radio",value:"All",onChange:this.handleEvent}),"All",Object(y.jsx)("label",{className:"checkbox-inline filterCalendar"}),Object(y.jsx)("input",{className:"filterApp",id:"crmhalo",name:"apps",type:"radio",value:"CRM Halo",onChange:this.handleEvent}),"CRM Halo",Object(y.jsx)("label",{className:"checkbox-inline filterCalendar"}),Object(y.jsx)("input",{className:"filterApp",id:"halolite",name:"apps",type:"radio",value:"Halo Lite",onChange:this.handleEvent}),"Halo Lite",Object(y.jsx)("label",{className:"checkbox-inline filterCalendar"}),Object(y.jsx)("input",{className:"filterApp",id:"haloapps",name:"apps",type:"radio",value:"Halo Apps",onChange:this.handleEvent}),"Halo Apps",Object(y.jsx)("label",{className:"checkbox-inline filterCalendar"}),Object(y.jsx)("input",{className:"filterApp",id:"specta",name:"apps",type:"radio",value:"Specta",onChange:this.handleEvent}),"Specta",Object(y.jsx)("label",{className:"checkbox-inline filterCalendar"}),Object(y.jsx)("input",{className:"filterApp",id:"telephony",name:"apps",type:"radio",value:"Telephony",onChange:this.handleEvent}),"Telephony",Object(y.jsx)("label",{className:"checkbox-inline filterCalendar"}),Object(y.jsx)("input",{className:"filterApp",id:"sosmed",name:"apps",type:"radio",value:"SOSMED",onChange:this.handleEvent}),"SOSMED",Object(y.jsx)("label",{className:"checkbox-inline filterCalendar"}),Object(y.jsx)("input",{className:"filterApp",id:"chain",name:"apps",type:"radio",value:"Chain",onChange:this.handleEvent}),"Chain",Object(y.jsx)("label",{className:"checkbox-inline filterCalendar"}),Object(y.jsx)("input",{className:"filterApp",id:"mqa",name:"apps",type:"radio",value:"MQA",onChange:this.handleEvent}),"MQA",Object(y.jsx)("label",{className:"checkbox-inline filterCalendar"}),Object(y.jsx)("input",{className:"filterApp",id:"waClient",name:"apps",type:"radio",value:"WA Client",onChange:this.handleEvent}),"WA Client",Object(y.jsx)("label",{className:"checkbox-inline filterCalendar"}),Object(y.jsx)("input",{className:"filterApp",id:"haloToolkit",name:"apps",type:"radio",value:"Halo Toolkit",onChange:this.handleEvent}),"Halo Toolkit",Object(y.jsx)("label",{className:"checkbox-inline filterCalendar"}),Object(y.jsx)("input",{className:"filterApp",id:"winters",name:"apps",type:"radio",value:"Winters",onChange:this.handleEvent}),"Winters"]})]})}),Object(y.jsx)("section",{className:"contentSection",children:Object(y.jsx)(p.a,{id:"calendar",plugins:[m.b,j.a,b.a],initialView:"dayGridMonth",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},events:s.map((function(e){return{title:"".concat(e.task," - ").concat(e.app),start:"".concat(e.fromDate,"T").concat(e.fromTime),end:"".concat(e.toDate,"T").concat(e.toTime),color:e.color,risk:e.app}}))})}),Object(y.jsx)("section",{id:"dataTables",className:"contentSection",children:Object(y.jsxs)("table",{id:"example",className:"row-border hover stripe display nowrap",responsive:!0,striped:!0,style:{width:"100%",border:"3px solid #FAF8F7"},children:[Object(y.jsxs)("thead",{children:[Object(y.jsxs)("tr",{id:"filtering",children:[Object(y.jsx)("th",{className:"filter",children:"No."}),Object(y.jsx)("th",{className:"filter",children:"Application"}),Object(y.jsx)("th",{className:"filter",children:"Task"}),Object(y.jsx)("th",{className:"filter",children:"From Date"}),Object(y.jsx)("th",{className:"filter",children:"To Date"}),Object(y.jsx)("th",{className:"filter",children:"Action"})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{className:"header",children:"No."}),Object(y.jsx)("th",{className:"header",children:"Application"}),Object(y.jsx)("th",{className:"header",children:"Task"}),Object(y.jsx)("th",{className:"header",children:"From Date"}),Object(y.jsx)("th",{className:"header",children:"To Date"}),Object(y.jsx)("th",{className:"header",children:"Action"})]})]}),Object(y.jsx)("tbody",{children:a.map((function(t){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"data",children:l++}),Object(y.jsx)("td",{children:t.app}),Object(y.jsx)("td",{children:t.task}),Object(y.jsx)("td",{className:"data",children:"".concat(t.fromDate)}),Object(y.jsx)("td",{className:"data",children:"".concat(t.toDate)}),Object(y.jsx)("td",{children:Object(y.jsxs)("div",{className:"actionBtn",children:[Object(y.jsx)("button",{type:"button",className:"btn btn-warning action","data-bs-toggle":"modal","data-bs-target":"#updateTaskModal",onClick:function(){return e.getScheduleById(t.id)},children:Object(y.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAiUlEQVRIx+3SPRJAMBCG4fcW9HIAnMARjLNQKVw4uYAmCiMTP43dUOXb/pn9g5wvYpio9EyLw2NpUjBeS5WBUVNzBHksRjJU/0CNkt2sDBfKve3oWPGZcrTSS8WUiompQsfsVC9/v7jUQ2UmMz8ydRoGljTMEyRi7pCQuUJi5gwpGOhYQtXkfJAN38TzM4XAhmYAAAAASUVORK5CYII=",style:{width:"25px",height:"30px"}})}),Object(y.jsx)("button",{type:"button",className:"btn btn-danger action","data-bs-toggle":"modal","data-bs-target":"#deleteTaskModal",onClick:function(){return e.getScheduleById(t.id)},children:Object(y.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAYUlEQVRIx2NgGAWUABaGYoZ6JFgMFCHLmNUM/9HgauKNqsfQjAvWDzWDqArqiYBEAWI8NmrQqEGjBo0aNMwMek+cQdcJGtRNnEHuQBvxu0eF2OKfgyEeZ7GfzyDDMArIAgCSncAZtxGeoQAAAABJRU5ErkJggg==",style:{width:"25px",height:"30px"}})})]})})]})}))})]})})]})}}]),a}(s.Component);var T=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(S,{})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,s=t.getFID,l=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),l(e),c(e),i(e)}))};i.a.render(Object(y.jsx)(l.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root")),k()}},[[77,1,2]]]);
//# sourceMappingURL=main.ac2769af.chunk.js.map