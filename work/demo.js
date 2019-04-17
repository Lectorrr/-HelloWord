



function Login(){
    var username=$.trim($("#account").val());//获取用户名trim是去掉空格
    var password=$.trim($("#password").val());//获取密码
    if(username==""||password==""){
        layer.alert("用户名或者密码不能为空!",{
        title:"提示",
        icon:5, 
        });
    }
}
