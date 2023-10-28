var bingBuyNum = [];
var ttNum = [];
var disnone=$(".fruit-sale").text();
$('.fruit-sale').each(function () {
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
    $("#Cqty").text(Calculateqtyfruit())
    $("#amt").text(Calculatefruit())
  });
});

$('.fruit-color').each(function () {
  $(this).click(function () {
    $(this).toggleClass('b-active')
    if ($(this).hasClass('b-active')) {
      ttNum.push(($(this).text()=="ក្រហម")?1:($(this).text()=="ខ្មៅ")?2:3);
      
    } else {
      var index = ttNum.indexOf(($(this).text()=="ក្រហម")?1:($(this).text()=="ខ្មៅ")?2:3);
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
    $("#Cqty").text(Calculateqtyfruit())
    $("#amt").text(Calculatefruit())
  });
});
$('.inner-cart').on('click', '.item-add1', function () {
  $(this).closest('li').remove();
  var Remaining = parseInt($("#TotalAmount").text()) - parseInt(($(this).siblings(".b-buy-detail").text()).slice(2, -1))
  $("#TotalAmount").text(Remaining);
});

var arrIcon = [];
var cartArray=[];
$('.buyBCart').click(function () {
  if ($("#qty").text() == "") {
    $("#qty").text(1);
  }
  if ($("#hprice").text() == "") {
    $("#hprice").text(1);
  }
    if (bingBuyNum.length !== 0) {
      $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + bingBuyNum.join('+') + ` |FRUIT-ZX|SPC|</span><span class="re_calu">`+parseInt($("#qty").text())*parseInt($("#hprice").text())*bingBuyNum.length+`000R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
        cartArray.push($(this))
        $('.fruit-sale').removeClass('b-active')
        bingBuyNum = []

    }

    if (ttNum.length !== 0) {
      $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + ttNum.join('+') + ` |COLOR-ZX|SPC|</span><span class="re_calu">`+parseInt($("#qty").text())*parseInt($("#hprice").text())*ttNum.length+`000R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
        cartArray.push($(this))
        $('.fruit-color').removeClass('b-active')
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
function Calculatefruit() {
  if ((bingBuyNum.length !== 0) || (ttNum.length !== 0)) {
    return parseInt($("#qty").text()) * parseInt($("#hprice").text()) * (parseInt(bingBuyNum.length) + parseInt(ttNum.length));
  } else {
    return 0;
  }
}
function Calculateqtyfruit(){
  if ((bingBuyNum.length !== 0) || (ttNum.length !== 0)) {
    return (parseInt(bingBuyNum.length) + parseInt(ttNum.length))*parseInt($("#qty").text());
  } else {
    return 0;
  }
}

//easynum qty
function FunQtyfruit() {
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
  $("#Cqty").text(Calculateqtyfruit)
  $('#amt').text(Calculatefruit);
}

//del qty
function easy_numpad_del_qtyfruit() {
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
  $("#Cqty").text(Calculateqtyfruit)
  $('#amt').text(Calculatefruit);
}
///////////////////
//easynum price
function pricefruit() {
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
      $('#amt').text(Calculatefruit);
  } else {
      $('#hprice').append();
      numArrayPrice.push();
  }
}
//del price
function easy_numpad_del_pricefruit() {
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
  $('#amt').text(Calculatefruit);
}