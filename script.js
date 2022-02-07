////02 SignUp////

$("#pwd1").keyup(
    function check() {
        var pwd1 = $(this).val();
        if (pwd1.length < 8) {
            $("#output1").text("密碼長度太短(至少8位)");
            $("#output1").attr("class", "alertTxtW")
        } else {
            $("#output1").text("此密碼可使用");
            $("#output1").attr("class", "alertTxt")
        }
    }
);

$("#pwd2").keyup(
    function check() {
        var pwd1 = $("#pwd1").val();
        var pwd2 = $(this).val();
        if (pwd1 === pwd2) {
            $("#output2").text("密碼兩次輸入一致");
            $("#output2").attr("class", "alertTxt")
        } else {
            $("#output2").text("密碼兩次輸入不一致");
            $("#output2").attr("class", "alertTxtW")
        }
    }
);

function accountCheck() {
    var realname = $("#realname").val();
    var username = $("#username").val();
    var email = $("#email").val();
    var pwd1 = $("#pwd1").val();
    var pwd2 = $("#pwd2").val();


    if (realname == "") {
        alert("請輸入真實姓名");
        return false;
    }
    else if (username == "") {
        alert("請輸入帳號名稱");
        return false;
    }
    else if (pwd1.length < 8) {
        alert("密碼長度不得小於8");
        return false;
    }
    else if (pwd1 !== pwd2) {
        alert("密碼兩次輸入不一致");
        return false;
    }
    else {
        alert("註冊成功! 將跳轉購買頁面");
        console.log("success");
        $.cookie("realname", realname, { path: "/" });
        $.cookie("username", username, { path: "/" });
        $.cookie("email", email, { path: "/" });
        window.location.replace("Order.html");
    }
}
