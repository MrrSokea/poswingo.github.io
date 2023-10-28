var bingBuyNum = [];
var ttNum = [];

$('.s-num').each(function () {
  $(this).click(function () {
    $(this).toggleClass('b-active')
    if ($(this).hasClass('b-active')) {
      bingBuyNum.push($(this).text());
    } else {
      var index = bingBuyNum.indexOf($(this).text());
      if (index > -1) {
        bingBuyNum.splice(index, 1);
      }
    }
    if ($("#qty").text() == "") {
      $("#qty").text(1);
    }
    if ($("#hprice").text() == "") {
      $("#hprice").text(1);
    }
    $("#Cqty").text(Calculateqty637())
    $("#amt").text(Calculate637())
  });
});

$('.t-num').each(function () {
  $(this).click(function () {
    $(this).toggleClass('b-active')
    if ($(this).hasClass('b-active')) {
      ttNum.push($(this).children(':eq(0)').text());
    } else {
      var index = ttNum.indexOf($(this).children(':eq(0)').text());
      if (index > -1) {
        ttNum.splice(index, 1);
      }
    }
    if ($("#qty").text() == "") {
      $("#qty").text(1);
    }
    if ($("#hprice").text() == "") {
      $("#hprice").text(1);
    }
    $("#Cqty").text(Calculateqty637())
    $("#amt").text(Calculate637())
  });
});
$('.inner-cart').on('click', '.item-add1', function () {
  $(this).closest('li').remove();
  var Remaining = parseInt($("#TotalAmount").text()) - parseInt(($(this).siblings(".b-buy-detail").text()).slice(2, -1))
  $("#TotalAmount").text(Remaining);
});
$('#randFive637').click(function () {
  var arrNum = [];
  var numberRandom = 1;
  var x = 0,
    i = 0;
  var listItem = [
    [],
    [],
    [],
    [],
    []
  ];
  for (x = 0; x < 5; x++) {
    arrNum = [];
    for (i = 0; i < numberRandom; i++) {
      randNum = Math.floor((Math.random() * 37) + 1);
      arrNum.push(randNum);
    }
    listItem[x].push(arrNum.join('+'));
  }
  listItem.forEach(function (v) {
    $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + v + ` |6/37-ZX|SPC|</span><span class="re_calu">` + parseInt($("#qty").text()) * parseInt($("#hprice").text()) + `000R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
  });
  calculateTotalamount()

})
var arrIcon = [];
var cartArray = [];
$('.buyBCart').click(function () {
  if ($("#qty").text() == "") {
    $("#qty").text(1);
  }
  if ($("#hprice").text() == "") {
    $("#hprice").text(1);
  }
  if (bingBuyNum.length !== 0) {
    $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + bingBuyNum.join('+') + ` |6/37-ZX|SPC|</span><span class="re_calu">` + parseInt($("#qty").text()) * parseInt($("#hprice").text()) * bingBuyNum.length + `000R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
    cartArray.push($(this))
    $('.s-num').removeClass('b-active')
    bingBuyNum = []

  }

  if (ttNum.length !== 0) {
    $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + ttNum.join('+') + ` |6/37-ZX|SM|</span><span class="re_calu">` + parseInt($("#qty").text()) * parseInt($("#hprice").text()) * ttNum.length + `000R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
    cartArray.push($(this))
    $('.t-num').removeClass('b-active')
    ttNum = []

  }
  calculateTotalamount()
  $("#qty").text(1);
  $('#hprice').text(1);
  $('#amt').text(0);
  $('#Cqty').text(0);
  // }


})
function calculateTotalamount() {
  var eleAmount = $(".re_calu");
  var element = 0;
  for (var i = 0; i < eleAmount.length; i++) {
    element += parseInt(eleAmount.eq(i).text())
  }
  $("#TotalAmount").text(element);
}
function Calculate637() {
  if ((bingBuyNum.length !== 0) || (ttNum.length !== 0)) {
    return parseInt($("#qty").text()) * parseInt($("#hprice").text()) * (parseInt(bingBuyNum.length) + parseInt(ttNum.length));
  } else {
    return 0;
  }
}
function Calculateqty637() {
  if ((bingBuyNum.length !== 0) || (ttNum.length !== 0)) {
    return (parseInt(bingBuyNum.length) + parseInt(ttNum.length))*parseInt($("#qty").text());
  } else {
    return 0;
  }
}

//easynum qty
function FunQty637() {
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
  } else {
    $('#qty').append();
    numArrayQty.push();
  }
  $('#Cqty').text(Calculateqty637);
  $('#amt').text(Calculate637);
}

//del qty
function easy_numpad_del_qty637() {
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
  $('#Cqty').text(Calculateqty637);
  $('#amt').text(Calculate637);
}
///////////////////
//easynum price
function price637() {
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
    $('#amt').text(Calculate637);
  } else {
    $('#hprice').append();
    numArrayPrice.push();
  }
}
//del price
function easy_numpad_del_price637() {
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
  $('#amt').text(Calculate637);
}