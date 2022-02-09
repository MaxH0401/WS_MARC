////01 index////


//紀錄購買類別
$('.typeTemp').val(0);
function typeCheck(item) {
    if ($('.typeTemp').val() == item) {
        $('.typeTemp').val(0);
        console.log($('.typeTemp').val());
    }
    else {
        $('.typeTemp').val(item);
        console.log($('.typeTemp').val());
    }

    switch (item) {
        case 1: {
            $('.mainItem').css('background-image', 'url(images/item01.jpg)')
            break;
        }
        case 2: {
            $('.mainItem').css('background-image', 'url(images/item02.jpg)')
            break;
        }
        case 3: {
            $('.mainItem').css('background-image', 'url(images/item03.jpg)')
            break;
        }
        case 4: {
            $('.mainItem').css('background-image', 'url(images/item04.jpg)')
            break;
        }
    }
}

//將數量類別傳入cookie
function buyNumCheck() {
    let buyNum = $('#buyNum').val();
    let buyItem = $('.typeTemp').val();

    if (buyItem === 0) {
        alert('請選擇產品類別');
        return false;
    }
    else if (buyNum == '') {
        alert('請選擇購買數量');
        return false;
    }
    else {
        $.cookie('buyNum', buyNum, { path: '/' });
        $.cookie('buyItem', buyItem, { path: '/' });
        window.location.replace('signUp.html');
    }
}


////02 signUp////

$('#pwd1').keyup(
    function check() {
        let pwd1 = $(this).val();
        if (pwd1.length < 8) {
            $('#output1').text('密碼長度太短(至少8位)');
            $('#output1').attr('class', 'alertTxtW')
        } else {
            $('#output1').text('此密碼可使用');
            $('#output1').attr('class', 'alertTxt')
        }
    }
);

$('#pwd2').keyup(
    function check() {
        let pwd1 = $('#pwd1').val();
        let pwd2 = $(this).val();
        if (pwd1 === pwd2) {
            $('#output2').text('密碼兩次輸入一致');
            $('#output2').attr('class', 'alertTxt')
        } else {
            $('#output2').text('密碼兩次輸入不一致');
            $('#output2').attr('class', 'alertTxtW')
        }
    }
);

function accountCheck() {
    let realname = $('#realname').val();
    let username = $('#username').val();
    let email = $('#email').val();
    let pwd1 = $('#pwd1').val();
    let pwd2 = $('#pwd2').val();


    if (realname == '') {
        alert('請輸入真實姓名');
        return false;
    }
    else if (username == '') {
        alert('請輸入帳號名稱');
        return false;
    }
    else if (pwd1.length < 8) {
        alert('密碼長度不得小於8');
        return false;
    }
    else if (pwd1 !== pwd2) {
        alert('密碼兩次輸入不一致');
        return false;
    }
    else {
        alert('註冊成功! 將跳轉購買頁面');
        console.log('success');
        $.cookie('realname', realname, { path: '/' });
        $.cookie('username', username, { path: '/' });
        $.cookie('email', email, { path: '/' });
        window.location.replace('order.html');
    }
}

////03 Order////

//jQuery Bind//
$('#buyNum').bind('input', function () {
    let totalPrize = $('#buyNum').val() * 1499;
    $('#totalPrize').text(totalPrize);
});

function buyCheck() {
    let receiverName = $('#realname').val();
    let address = $('#address').val();

    if (receiverName == '') {
        alert('請輸入收件人');
        return false;
    }
    else if (address == '') {
        alert('請輸入寄送地址');
        return false;
    }
    else {
        alert('成功送出訂單!');
        window.location.replace('index.html');
    }
}

