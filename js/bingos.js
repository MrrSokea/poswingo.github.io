var bingBuyNum = [];
var bingoNum = [];
var bingBuyColor = [];
var bingBuyOE = [];
var bingBuyCard = [];

var cartArray = [];

$('.b-num').each(function () {
    $(this).click(function () {
        $(this).toggleClass('b-active')
        if ($(this).hasClass('b-active')) {
            bingBuyNum.push($(this).text());
            if ($("#qty").text() == "") {
                $("#qty").text(1);
            }
            if ($("#hprice").text() == "") {
                $("#hprice").text(1);
            }
        } else {
            var index = bingBuyNum.indexOf($(this).text());
            if (index > -1) {
                bingBuyNum.splice(index, 1);
                num = parseInt($(".cart-notification").text());
            }
        }
        $('#amtbingo').text(CalculateBingo);
        $("#Cqtybingo").text(CalculateqtyBingo)
    });
});
$('.inner').each(function () {
    $(this).click(function () {
        $(this).toggleClass('b-active')
        if ($(this).hasClass('b-active')) {
            bingoNum.push($(this).text());
            if ($("#qty").text() == "") {
                $("#qty").text(1);
            }
            if ($("#hprice").text() == "") {
                $("#hprice").text(1);
            }
        } else {

            var index = bingoNum.indexOf($(this).text());
            if (index > -1) {
                bingoNum.splice(index, 1);
                num = parseInt($(".cart-notification").text());

            }

        }
        $('#amtbingo').text(CalculateBingo);
        $("#Cqtybingo").text(CalculateqtyBingo)
    });
});
$('.b-color').each(function () {
    $(this).click(function () {
        $(this).toggleClass('b-active')
        if ($(this).hasClass('b-active')) {

            bingBuyColor.push($(this).val());
            num = parseInt($(".cart-notification").text());

        } else {

            var index = bingBuyColor.indexOf($(this).val());
            console.log(index)
            if (index > -1) {
                bingBuyColor.splice(index, 1);
                num = parseInt($(".cart-notification").text());

            }
        }
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }
        $('#amtbingo').text(CalculateBingo);
        $("#Cqtybingo").text(CalculateqtyBingo)
    });
});
$('.b-oe').each(function () {
    $(this).click(function () {
        $(this).toggleClass('b-active')
        if ($(this).hasClass('b-active')) {
            bingBuyOE.push($(this).val());

        } else {
            var index = bingBuyOE.indexOf($(this).val());
            if (index > -1) {
                bingBuyOE.splice(index, 1);
            }
        }
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }
        $('#amtbingo').text(CalculateBingo);
        $("#Cqtybingo").text(CalculateqtyBingo)
    });
});
$('.b-card').each(function () {
    $(this).click(function () {
        $(this).toggleClass('b-active')
        if ($(this).hasClass('b-active')) {
            bingBuyCard.push($(this).val());
        } else {
            var index = bingBuyCard.indexOf($(this).val());
            if (index > -1) {
                bingBuyCard.splice(index, 1);
            }
        }
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }
        $('#amtbingo').text(CalculateBingo);
        $("#Cqtybingo").text(CalculateqtyBingo)

    });

});
$('.inner-cart').on('click', '.item-add1', function () {
    $(this).closest('li').remove();
    var Remaining = parseInt($("#TotalAmount").text()) - parseInt(($(this).siblings(".b-buy-detail").text()).slice(2, -1))
    $("#TotalAmount").text(Remaining);
});
var arrIcon = []
$('.buyBCart').click(function () {
    if ($("#hprice").text() == "") {
        $("#hprice").text(1);
    }
    if ($("#qty").text() == "") {
        $("#qty").text(1);
    }

    if (bingBuyNum.length !== 0) {
        $('.inner-cart').prepend(`<li class="list-group-item d-flex justify-content-between">
            <div class="b-buy-game txt-f-arr1">` + bingBuyNum.join('+') + `</div>
            <div class="b-buy-detail">FD<br><span class="re_calu">` + (parseInt($("#qty").text()) * parseInt($("#hprice").text()) * bingBuyNum.length) + `000R</span></div>
            <a class="item-add1" href="#"><img src="./img/close.webp" alt="" height="20px"></i></a></li>`);
        cartArray.push($(this))
        $('.b-num').removeClass('b-active')
        bingBuyNum = []

    }

    if (bingoNum.length !== 0) {
        $('.inner-cart').prepend(`<li class="list-group-item d-flex justify-content-between">
            <div class="b-buy-game txt-f-arr1">` + bingoNum.join(',') + `</div>
            <div class="b-buy-detail">FB<br><span class="re_calu">` + (parseInt($("#qty").text()) * parseInt($("#hprice").text()) * bingoNum.length) + `000R</span></div>
            <a class="item-add1" href="#"><img src="./img/close.webp" alt="" height="20px"></i></a></li>`);
        cartArray.push($(this))
        $('.inner').removeClass('b-active')
        bingoNum = []

    }

    if (bingBuyColor.length !== 0) {
        $('.inner-cart').prepend(`<li class="list-group-item d-flex justify-content-between">
            <div class="b-buy-game txt-f-arr1">` + bingBuyColor.join(',') + `</div>
            <div class="b-buy-detail">RB<br><span class="re_calu">` + (parseInt($("#qty").text()) * parseInt($("#hprice").text()) * bingBuyColor.length) + `000R</span></div>
            <a class="item-add1" href="#"><img src="./img/close.webp" alt="" height="20px"></i></a></li>`);
        cartArray.push($(this))
        $('.b-color').removeClass('b-active')
        bingBuyColor = []

    }


    if (bingBuyOE.length !== 0) {
        $('.inner-cart').prepend(`<li class="list-group-item d-flex justify-content-between">
            <div class="b-buy-game txt-f-arr1">` + bingBuyOE.join(',') + `</div>
            <div class="b-buy-detail">OE<br><span class="re_calu">` + (parseInt($("#qty").text()) * parseInt($("#hprice").text()) * bingBuyOE.length) + `000R</span></div>
            <a class="item-add1" href="#"><img src="./img/close.webp" alt="" height="20px"></i></a></li>`);
        cartArray.push($(this))
        $('.b-oe').removeClass('b-active')
        bingBuyOE = []
    }

    if (bingBuyCard.length !== 0) {

        $('.inner-cart').prepend(`<li class="list-group-item d-flex justify-content-between">
            <div class="b-buy-game txt-f-arr1">` + bingBuyCard.join(',') + `</div>
            <div class="b-buy-detail">DC<br><span class="re_calu">` + (parseInt($("#qty").text()) * parseInt($("#hprice").text()) * bingBuyCard.length) + `000R</span></div>
            <a class="item-add1" href="#"><img src="./img/close.webp" alt="" height="20px"></i></a></li>`);
        cartArray.push($(this))
        $('.b-card').removeClass('b-active')
        bingBuyCard = []
    }
    calculateTotalamount();
    $("#qty").text(1);
    $('#hprice').text(1);
    $('#amtbingo').text(0);
    $('#Cqtybingo').text(0);
    // }


})

var numArrayQty = []
var numArrayPrice = []
$('#qty').click(function () {
    if ($("#hprice").text() == "") {
        $("#hprice").text(1);
    }
    $(this).css("border", "1px solid #ffd700");
    $("#price").css("border", "none");
    $('#priceKeybord').addClass('d-none')
    $('#qtyKeybord').removeClass('d-none')
    if (numArrayQty.length == 0) {
        $("#qty").empty();
    }
    if (numArray.length != 5) {
        $('#qtyKeybord').find('.key').removeClass('disable-key')

    }

});

$('#price').click(function () {
    if ($("#qty").text() == "") {
        $("#qty").text(1);
    }
    $('#qtyKeybord').addClass('d-none')
    $('#priceKeybord').removeClass('d-none')
    $(this).css("border", "1px solid #ffd700");
    $("#qty").css("border", "none");
    if (numArrayPrice.length == 0) {
        $("#hprice").empty();
    }
    if (numArray.length != 5) {
        $('#priceKeybord').find('.key').removeClass('disable-key')

    }

});

function calculateTotalamount() {
    var eleAmount = $(".re_calu");
    var element = 0;
    for (var i = 0; i < eleAmount.length; i++) {
        element += parseInt(eleAmount.eq(i).text())
    }
    $("#TotalAmount").text(element);
}

function CalculateBingo() {
    var calcu = parseInt($("#qty").text()) * parseInt($("#hprice").text()) * (bingBuyNum.length + bingoNum.length + bingBuyColor.length + bingBuyOE.length + bingBuyCard.length);
    return calcu;
}

function CalculateqtyBingo() {
    var calcuqty = (bingBuyNum.length + bingoNum.length + bingBuyColor.length + bingBuyOE.length + bingBuyCard.length);
    return calcuqty;
}

function FunQtyBingo() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayQty.length < 3) {
        $('#qty').append(easy_num_value);
        numArrayQty.push(easy_num_value);
        if (parseInt($('#qty').text()) >= 100) {
            $('#qty').text(100);
        }

        $('#amtbingo').text(CalculateBingo);
    } else {
        $('#qty').append();
        numArrayQty.push();
    }
}

function easy_numpad_del_qtyBingo() {
    event.preventDefault();
    var easy_numpad_output_val = $('#qty').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#qty').text(easy_numpad_output_val_deleted);
    numArrayQty.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayQty.length == 0 && numArrayQty[0] !== "1") {
        $('#qty').text(1);
    } else {

    }

    $('#amtbingo').text(CalculateBingo);
}
///////////////////
//easynum price
function priceBingo() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayPrice.length < 5) {
        $('#hprice').append(easy_num_value);
        numArrayPrice.push(easy_num_value);
        $('#amtbingo').text(CalculateBingo);
    } else {
        $('#hprice').append();
        numArrayPrice.push();
    }
}
//del price
function easy_numpad_del_priceBingo() {
    event.preventDefault();
    var easy_numpad_output_val = $('#hprice').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#hprice').text(easy_numpad_output_val_deleted);

    numArrayPrice.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayPrice.length == 0 && numArrayPrice[0] !== "1") {
        $('#hprice').text(1);
    } else {

    }
    $('#amtbingo').text(CalculateBingo);
}