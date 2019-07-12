define(["jquery","common/regexhelper/regexhelper","common/api/api.guid","libs/jquery/plugins/jquery.xDomainRequest"],function(e,s,i){function t(t,n,a,o,r){var l,u,m,c,d,h,f,v,p=this,b="form-button-disabled",g="form-value-invalid";this.cacheSelectors=function(){u=e("div#"+n),l=e("div#"+t),m=l.find('input[type="submit"]'),c=l.find('input[name="name"]'),d=l.find('input[name="email"]'),h=l.find('input[name="subject"]'),f=l.find('textarea[name="message"]'),v=l.find('input[name="opt-in"]')},this.isMobileView=function(){{var s="#mobile-site-view";e(s)}return e(s).length>0},this.hideSuccessMessage=function(){u.hide()},this.showSuccessMessage=function(){u.show(),u.parent().css("overflow","auto")},this.hideForm=function(){l.children(".form-body").hide()},this.showForm=function(){l.show()},this.wireUpClickEvent=function(){m.click(p.onSubmitClick)},this.removeInvalidCssFromInputs=function(){c.removeClass(g),d.removeClass(g),h.removeClass(g),f.removeClass(g)},this.addInvalidCssToInput=function(e){var s;switch(e){case"message":s=f;break;case"name":s=c;break;case"email":s=d;break;case"subject":s=h}s&&s.addClass(g)},this.getCurrentFormValues=function(){return{name:e.trim(c.val()),email:e.trim(d.val()),subject:e.trim(h.val()),message:e.trim(f.val()),optIn:v.is(":checked")}},this.validateFormValues=function(e){var i=!0;return 0===e.name.length&&(i=!1,p.addInvalidCssToInput("name")),0===e.email.length?(i=!1,p.addInvalidCssToInput("email")):s.validateEmailAddress(e.email)||(i=!1,p.addInvalidCssToInput("email")),0===e.subject.length&&(i=!1,p.addInvalidCssToInput("subject")),0===e.message.length&&(i=!1,p.addInvalidCssToInput("message")),i},this.isButtonDisabled=function(){return m.hasClass(b)},this.toPascalCase=function(e){return null!=e&&void 0!=e&&(e=e.replace(/\w\S*/g,function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()})),e},this.sendFormPost=function(s){var t=[],n={name:"input",email:"email",subject:"input",message:"paragraph",optIn:"checkbox"};e.each(s,function(e,s){null!=n[e]&&t.push({label:p.toPascalCase(e),value:s,type:n[e]})});var a={domainName:r.domainName,resellerId:r.resellerId,elementId:i.toLegacyIdString(r.elementId),subject:r.subject,emailHashList:r.emailHashList,formFields:t,hostPageUrl:encodeURIComponent(window.location.href)},o=r.mailerUrl,l={type:"POST",url:o,crossDomain:!0,data:JSON.stringify(a),dataType:"json"};if(r.gemSubmit&&1==r.resellerId){var u=!0;s.optIn&&(u=!1);var m=(s.name||"").split(" "),c=m[0],d=m.slice(1).join(" "),h={email:s.email,first_name:c,last_name:d,suppressed:u},f=[r.gemSubmitUrl,r.orionId,r.domainName].join("/"),v={type:"POST",url:f,crossDomain:!0,data:h,dataType:"json"};e.when(e.ajax(l),e.ajax(v)).then(p.onSubmitSuccess).fail(p.onSubmitFailure)}else e.when(e.ajax(l)).then(p.onSubmitSuccess).fail(p.onSubmitFailure)},this.setWindowLocation=function(e){window.location=e},this.onLoad=function(){p.cacheSelectors(),p.hideSuccessMessage(),p.showForm(),p.wireUpClickEvent()},this.onSubmitClick=function(){p.removeInvalidCssFromInputs();var e=p.getCurrentFormValues();p.validateFormValues(e)&&(p.isButtonDisabled()||(m.addClass(b),p.sendFormPost(e)))},this.onSubmitSuccess=function(){0===a?(p.hideForm(),p.showSuccessMessage()):p.setWindowLocation(o)},this.onSubmitFailure=function(s){m.removeClass(b);var i=r.sendErrorMessage,t=r.errorTitle,n="error";429===s.status&&r.tooManyRequestsErrorMessage&&(i=r.tooManyRequestsErrorMessage,r.tooManyRequestsErrorTitle&&(t=r.tooManyRequestsErrorTitle),n="warning"),p.isMobileView()?alert(i):e("<div></div>").sfGrowl({title:t||"",content:i,icon:n,fadetime:3e3})},this.init=function(){e(document).ready(p.onLoad)}}return t});
//# sourceMappingURL=form.js.map