
//<![CDATA[
var Page_Validators =  new Array(document.getElementById("ContentPlaceHolder1_LoginView1_vUserName"), document.getElementById("ContentPlaceHolder1_LoginView1_vUserPass"));
//]]>

//<![CDATA[
var ContentPlaceHolder1_LoginView1_vUserName = document.all ? document.all["ContentPlaceHolder1_LoginView1_vUserName"] : document.getElementById("ContentPlaceHolder1_LoginView1_vUserName");
ContentPlaceHolder1_LoginView1_vUserName.controltovalidate = "ContentPlaceHolder1_LoginView1_txtUserName";
ContentPlaceHolder1_LoginView1_vUserName.errormessage = "*";
ContentPlaceHolder1_LoginView1_vUserName.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
ContentPlaceHolder1_LoginView1_vUserName.initialvalue = "";
var ContentPlaceHolder1_LoginView1_vUserPass = document.all ? document.all["ContentPlaceHolder1_LoginView1_vUserPass"] : document.getElementById("ContentPlaceHolder1_LoginView1_vUserPass");
ContentPlaceHolder1_LoginView1_vUserPass.controltovalidate = "ContentPlaceHolder1_LoginView1_txtUserPass";
ContentPlaceHolder1_LoginView1_vUserPass.errormessage = "*";
ContentPlaceHolder1_LoginView1_vUserPass.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
ContentPlaceHolder1_LoginView1_vUserPass.initialvalue = "";
//]]>

//<![CDATA[

var Page_ValidationActive = false;
if (typeof(ValidatorOnLoad) == "function") {
    ValidatorOnLoad();
}

function ValidatorOnSubmit() {
    if (Page_ValidationActive) {
        return ValidatorCommonOnSubmit();
    }
    else {
        return true;
    }
}
        
document.getElementById('ContentPlaceHolder1_LoginView1_vUserName').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('ContentPlaceHolder1_LoginView1_vUserName'));
}

document.getElementById('ContentPlaceHolder1_LoginView1_vUserPass').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('ContentPlaceHolder1_LoginView1_vUserPass'));
}
Sys.Application.add_init(function() {
    $create(Sys.UI._UpdateProgress, {"associatedUpdatePanelId":null,"displayAfter":500,"dynamicLayout":true}, null, null, $get("ContentPlaceHolder1_RelationsControl_UpdateProgress1"));
});
//]]>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['form1'];
if (!theForm) {
    theForm = document.form1;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>

<script type="text/javascript">
//<![CDATA[
Sys.Services._ProfileService.DefaultWebServicePath = 'Profile_JSON_AppService.axd';
//]]>
</script>

//<![CDATA[
    function WebForm_OnSubmit() {
        if (typeof(ValidatorOnSubmit) == "function" && ValidatorOnSubmit() == false) return false;
        return true;
        }
        //]]>
        </script>