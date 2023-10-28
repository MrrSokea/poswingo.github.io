
var postArr = []
var firstRowArr = [];
var secondRowArr = [];
var numArray = []
var numArrayEnd = []
var numArrayQty = []
var numArrayQtysingle = []
var numArrayPrice = []
var numArrayPricesingle = []
var numArrayQtyrang = []
var numArrayPricerang = []
var numArrayQtyarrange = []
var numArrayPricearrange = []
var spBtn = [];
var bigSmallBtn = [];
var thirtyBtn = [];
//buttom post click
$('.btn-post').each(function () {
    if ($(this).hasClass('btn-active')) {
        postArr.push($(this).text());
    }
    $(this).click(function () {
        $(this).toggleClass('btn-active')
        if ($(this).hasClass('btn-active')) {
            postArr.push($(this).text());
            if (postArr.length == 4) {
                $('#btn-all').addClass('btn-active');
            }
        } else {
            var index = postArr.indexOf($(this).text());
            if (index > -1) {
                postArr.splice(index, 1);
                $('#btn-all').removeClass('btn-active');
                if (postArr.length == 0) {
                    $(this).addClass('btn-active')
                    postArr.push($(this).text());

                }
            }
        }
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }
        if ($("#hpricearrange").text() == "") {
            $("#hpricearrange").text(1);
        }
        if ($("#qtyarrange").text() == "") {
            $("#qtyarrange").text(1);
        }
        $('#amt').text(Calculate);
        $('#Cqty').text(CalculateQty);
        $('#amtsingle').text(Calculatesingle);
        $('#amtrang').text(Calculaterang());
        $("#Cqtyrang").text(Calculateqtyrang);
        $('#amtarrange').text(Calculatearrange());
        $("#Cqtyarrange").text(Calculateqtyarrange());
    });
});
//all button post
$('#btn-all').click(function () {
    postArr = []
    var btn = $('.btn-post');
    btn.toggleClass('btn-active');
    if (btn.hasClass('btn-active')) {
        btn.addClass('btn-active');
    }

    btn.each(function () {
        if ($(this).hasClass('btn-active')) {
            postArr.push($(this).text());

        } else {
            if (postArr.length == 0) {
                postArr.push("A");
            }
            $('.btn-post:first').addClass('btn-active');
        }
    });

    if (postArr.length == 4) {
        $('#btn-all').addClass('btn-active');
    } else {
        $('#btn-all').removeClass('btn-active');
    }
    if ($("#qty").text() == "") {
        $("#qty").text(1);
    }
    if ($("#hprice").text() == "") {
        $("#hprice").text(1);
    }
    if ($("#hpricearrange").text() == "") {
        $("#hpricearrange").text(1);
    }
    if ($("#qtyarrange").text() == "") {
        $("#qtyarrange").text(1);
    }
    $('#amt').text(Calculate);
    $('#amtsingle').text(Calculatesingle);
    $('#amtrang').text(Calculaterang());
    $("#Cqtyrang").text(Calculateqtyrang);
    $('#amtarrange').text(Calculatearrange());
    $("#Cqtyarrange").text(Calculateqtyarrange());

});
//=================================//
// Ball sellection
//================================//

$('.ball').each(function () {
    $(this).click(function () {

        // Handle select removing value
        if (firstRowArr.find(element => parseInt(element) == parseInt($(this).text()))) {
            $(this).toggleClass('active-ball');
            firstRowArr.remove($(this).text());


            if (firstRowArr.remove($(this).text()) && firstRowArr.length == 1) {
                $('#rowTwo').removeClass('disable-btn');
                $('#rowThree').removeClass('disable-btn');
            }

        } else {
            // Handle selection all group (1st, 2nd, 3rd)
            if ((secondRowArr.length >= 2) && firstRowArr.length >= 1) {
                if (parseInt(firstRowArr[0]) == parseInt($(this).text())) {
                    $(this).toggleClass('active-ball');
                    firstRowArr.remove($(this).text());

                } else {
                    //alert("Not allowed!!");
                }


            } else {
                $(this).toggleClass('active-ball');
                firstRowArr.push($(this).text());

                if (firstRowArr.length >= 2) {
                    $('#rowTwo').addClass('disable-btn');
                    $('#rowThree').addClass('disable-btn');
                }

            }
        }
        if (firstRowArr.length !== 0 && secondRowArr.length !== 0) {
            $("#amt").text(Calculate);
            $('#Cqty').text(CalculateQty);
        } else {
            $("#amt").text(0);
            $('#Cqty').text(0);
        }
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }
    });

});
$('.ball-second').each(function () {
    $(this).click(function () {
        // Handle select removing value

        if (secondRowArr.find(element => parseInt(element) == parseInt($(this).text()))) {
            $(this).toggleClass('active-ball');
            secondRowArr.remove($(this).text());


            if (secondRowArr.remove($(this).text()) && secondRowArr.length == 1) {
                $('#rowOne').removeClass('disable-btn');
                $('#rowThree').removeClass('disable-btn');
            }

        } else {
            // Handle selection all group (1st, 2nd, 3rd)
            if ((firstRowArr.length >= 2) && secondRowArr.length >= 1) {
                if (parseInt(secondRowArr[0]) == parseInt($(this).text())) {
                    $(this).toggleClass('active-ball');
                    secondRowArr.remove($(this).text());


                } else {
                    //alert("Not allowed!!");
                }

            } else {
                $(this).toggleClass('active-ball');
                secondRowArr.push($(this).text());

                if (secondRowArr.length >= 2) {
                    $('#rowOne').addClass('disable-btn');
                    $('#rowThree').addClass('disable-btn');
                }

            }
        }
        if (firstRowArr.length !== 0 && secondRowArr.length !== 0) {
            $("#amt").text(Calculate);
            $('#Cqty').text(CalculateQty);
        } else {
            $("#amt").text(0);
            $('#Cqty').text(0);
        }
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }
    });
});
// Arrow function to handle removing item from array
Array.prototype.remove = function () {
    var what, a = arguments,
        L = a.length,
        ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
//BUTTON ALL fist secone and third

//Calulate Total price
function Calculate() {
    if (firstRowArr.length !== 0 && secondRowArr.length !== 0) {
        if ($("#qtyrang").text() !== "" && $("#hpricerang").text() !== "") {
            $("#Cqty").text(CalculateQty())
            return ((firstRowArr.length > 1) ? firstRowArr.length : secondRowArr.length) * parseInt($('#qty').text()) * parseInt($('#hprice').text()) * postArr.length;
        } else {
            return 0;
        }
    } else {
        return 0;
    }


}

//=======================block Caculate=========================//
//Calculate Qty
function CalculateQty() {
    if (firstRowArr.length !== 0 && secondRowArr.length !== 0) {
        return ((firstRowArr.length > 1) ? firstRowArr.length : secondRowArr.length) * postArr.length*parseInt($("#qty").text());
    } else {
        return 0;
    }

}
//single calculate
function Calculatesingle() {
    if ($("#qtysingle").text() !== "" && $("#hpricesingle").text() !== "") {
        if (numArray.length == 2) {
            $("#Cqtysingle").text(postArr.length * 2*parseInt($("#qtysingle").text()))
            return parseInt($("#qtysingle").text()) * parseInt($("#hpricesingle").text()) * parseInt(postArr.length) * 2;
        }
    } else {
        return 0;
    }
}
//Calculate amt rang
function Calculaterang() {
    if ($("#qtyrang").text() !== "" && $("#hpricerang").text() !== "") {
        if (numArray.length == 2 && numArrayEnd.length == 2) {
            if (parseInt($("#rangeEnd").text()) > parseInt($("#rangeStart").text())) {
                return parseInt($("#qtyrang").text()) * parseInt($("#hpricerang").text()) * (parseInt($("#rangeEnd").text()) - parseInt($("#rangeStart").text()) + 1) * postArr.length;
            } else {
                return 0
            }
        } else {
            return 0;
        }
    } else {
        return 0;
    }

}
//Calculate qty rang
function Calculateqtyrang() {
    if ($("#qtyrang").text() !== "" && $("#hpricerang").text() !== "") {
        if (numArray.length == 2 && numArrayEnd.length == 2) {
            if (parseInt($("#rangeEnd").text()) > parseInt($("#rangeStart").text())) {
                return (parseInt($("#rangeEnd").text()) - parseInt($("#rangeStart").text()) + 1) * postArr.length*parseInt($("#qtyrang").text());
            } else {
                return 0
            }
        } else {
            return 0;
        }
    } else {
        return 0;
    }

}
//Calculate amt arrang
function Calculatearrange() {
    if (numArray.length == 2) {
        if (numArray[0] == numArray[1]) {
            return parseInt($("#qtyarrange").text()) * parseInt($("#hpricearrange").text()) * 1 * postArr.length;
        } else {
            return parseInt($("#qtyarrange").text()) * parseInt($("#hpricearrange").text()) * 2 * postArr.length;
        }

    } else {
        return 0;
    }

}
//Calculate aty arrang
function Calculateqtyarrange() {
    if (numArray.length == 2) {
        if (numArray[0] == numArray[1]) {
            return 1 * postArr.length*parseInt($("#qtyarrange").text());
        } else {
            return 2 * postArr.length*parseInt($("#qtyarrange").text());
        }

    } else {
        return 0;
    }
}
//Calculate amt normal 5/35
function Calculate535() {
    if (thirtyBtn.length == 5) {
        addDisableFive();
        $("#Cqty").text(1);
        return parseInt($("#qty").text()) * parseInt($("#hprice").text()) * 1;
    } else {
        $("#Cqty").text(0);
        return 0;
    }
}
//Calculate sp 5/35
function CalculateSp() {
    if (spBtn.length !== 0) {
        $("#Cqtysp").text(spBtn.length);
        return parseInt($("#qtysp").text()) * parseInt($("#hpricesp").text()) * spBtn.length;
    } else {
        $("#Cqtysp").text(0);
        return 0;
    }
}
//Calculate amt Big and small
function CalculateBs() {
    if (bigSmallBtn.length !== 0) {
        $("#Cqtybs").text(bigSmallBtn.length);
        return parseInt($("#qtybs").text()) * parseInt($("#hpricebs").text()) * bigSmallBtn.length;
    } else {
        $("#Cqtybs").text(0);
        return 0;
    }

}
//Calculate all total amount
function calculateTotalamount() {
    var eleAmount = $(".re_calu");
    var element = 0;
    for (var i = 0; i < eleAmount.length; i++) {
        element += parseInt(eleAmount.eq(i).text())
    }
    $("#TotalAmount").text(element);
}
//===============================block Click===================================//
//==========remove items============//
$('.inner-cart').on('click', '.item-add', function () {
    $(this).closest('li').remove();
    var Remaining = parseInt($("#TotalAmount").text()) - parseInt(($(this).siblings(".re_calu").text()).slice(0, -1))
    $("#TotalAmount").text(Remaining);

});
//when click now tab
$('.nav-link').click(function () {
    $('.key').removeClass('disable-key');
    $('.input > p').empty();
    $('.ball-bingo').removeClass('btn-active');
    $('.ball-bingo').removeClass('btn-active');
    $('.big-small').removeClass('active-big');

    $('.ball-bingo').removeClass('disable-btn');

    qty = 0;
    amt = 0;
    numArray = [];
    numArrayEnd = [];

    firstRowArr = [];
    secondRowArr = [];

    $('#rangeStart').empty();
    $('#rangeEnd').empty();
    $('#singebet').empty();

    // $('#rangStartKey').removeClass('d-none');
    // $('#rangEndKey').addClass('d-none');

    $('.ball').removeClass('disable-btn');
    $('.ball').removeClass('active-ball');

    $('.ball-second').removeClass('disable-btn');
    $('.ball-second').removeClass('active-ball');

    $('#rowOne,#rowTwo').removeClass('disable-btn');

    // $('#qtyKeybord').removeClass('d-none');
    // $('#priceKeybord').addClass('d-none');


});
//=================single sp 5/35==============//
$('.ball-bingo').each(function () {
    $(this).click(function () {
        $(this).toggleClass('btn-active')
        if ($(this).hasClass('btn-active')) {
            spBtn.push($(this).text());

            if (spBtn.length == 7) {
                addDisableSp();
            }

        } else {
            var index = spBtn.indexOf($(this).text());
            if (index > -1) {
                spBtn.splice(index, 1);
                removeDisableSp();
            }
        }
        if ($("#qtysp").text() == "") {
            $("#qtysp").text(1);
        }
        if ($("#hpricesp").text() == "") {
            $("#hpricesp").text(1);
        }
        $("#amtsp").text(CalculateSp());
    });
});
$('.buySp').click(function () {
    if ($("#qtysp").text() == "") {
        $("#qtysp").text(1);
    }
    if ($("#hpricesp").text() == "") {
        $("#hpricesp").text(1);
    }
    if (spBtn.length !== 0) {
        $('.ball-bingo').removeClass('btn-active');
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + spBtn.join('+') + `BINGO-ZX|SP|</span><span class="re_calu">` + CalculateSp() + `000R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);

    }
    calculateTotalamount()
    $("#qtysp").text(1);
    $("#hpricesp").text(1);
    $("#amtsp").text(0);
    $("#Cqtysp").text(0);
    removeDisableSp();
    spBtn = [];

})
$('#randOne').click(function () {
    if ($("#qtysp").text() == "") {
        $("#qtysp").text(1);
    }
    if ($("#hpricesp").text() == "") {
        $("#hpricesp").text(1);
    }
    randNum = Math.floor((Math.random() * 35) + 1);
    $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + randNum + ` BINGO-ZX|SP|</span><span class="re_calu">` + parseInt($("#qtysp").text()) * parseInt($("#hpricesp").text()) + `000R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
    calculateTotalamount()
    $("#qtysp").text(1);
    $("#hpricesp").text(1);
})
$('#randFive').click(function () {
    if ($("#qtysp").text() == "") {
        $("#qtysp").text(1);
    }
    if ($("#hpricesp").text() == "") {
        $("#hpricesp").text(1);
    }
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
            randNum = Math.floor((Math.random() * 35) + 1);
            arrNum.push(randNum);
        }
        listItem[x].push(arrNum.join('+'));
    }
    listItem.forEach(function (v) {
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + v + ` BINGO-ZX|SP|</span><span class="re_calu">` + parseInt($("#qtysp").text()) * parseInt($("#hpricesp").text()) + `000R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
    });
    $("#qtysp").text(1);
    $("#hpricesp").text(1);

})
$('#qtysp').click(function () {
    if ($("#hpricesp").text() == "") {
        $("#hpricesp").text(1);
    }
    $(this).css("border", "1px solid #ffd700");
    $("#pricesp").css("border", "none");
    $('#pricespKeybord').addClass('d-none')
    $('#qtyspKeybord').removeClass('d-none')
    if (numArrayQty.length == 0) {
        $("#qtysp").empty();
    }
    if (numArray.length != 5) {
        $('#qtyspKeybord').find('.key').removeClass('disable-key')

    }

});
$('#pricesp').click(function () {
    if ($("#qtysp").text() == "") {
        $("#qtysp").text(1);
    }
    $('#qtyspKeybord').addClass('d-none')
    $('#pricespKeybord').removeClass('d-none')
    $(this).css("border", "1px solid #ffd700");
    $("#qtysp").css("border", "none");
    if (numArrayPrice.length == 0) {
        $("#hpricesp").empty();
    }
    if (numArray.length != 5) {
        $('#pricespKeybord').find('.key').removeClass('disable-key')

    }

});
//================= end single sp 5/35==============//

//========bing and small 5/35 click========//
$('.big-small').each(function () {
    $(this).click(function () {
        $(this).toggleClass('active-big')
        if ($(this).hasClass('active-big')) {
            bigSmallBtn.push($(this).val());

        } else {
            var index = bigSmallBtn.indexOf($(this).val());
            if (index > -1) {
                bigSmallBtn.splice(index, 1);

            }
        }
        if ($("#qtybs").text() == "") {
            $("#qtybs").text(1);
        }
        if ($("#hpricebs").text() == "") {
            $("#hpricebs").text(1);
        }
        $("#amtbs").text(CalculateBs());
    });
});
$('.buyBs').click(function () {
    if ($("#qtybs").text() == "") {
        $("#qtybs").text(1);
    }
    if ($("#hpricebs").text() == "") {
        $("#hpricebs").text(1);
    }
    if (bigSmallBtn.length !== 0) {
        $('.big-small').removeClass('active-big');
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + bigSmallBtn.join('+') + ` BINGO-ZX|P|</span><span class="re_calu">` + parseInt($("#qtybs").text()) * parseInt($("#hpricebs").text()) * bigSmallBtn.length + `000R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
    }
    calculateTotalamount()
    bigSmallBtn = [];
})
$('#qtybs').click(function () {
    if ($("#hpricebs").text() == "") {
        $("#hpricebs").text(1);
    }
    $(this).css("border", "1px solid #ffd700");
    $("#pricebs").css("border", "none");
    $('#pricebsKeybord').addClass('d-none')
    $('#qtybsKeybord').removeClass('d-none')
    if (numArrayQty.length == 0) {
        $("#qtybs").empty();
    }
    if (numArray.length != 5) {
        $('#qtybsKeybord').find('.key').removeClass('disable-key')

    }

});
$('#pricebs').click(function () {
    if ($("#qtybs").text() == "") {
        $("#qtybs").text(1);
    }
    $('#qtybsKeybord').addClass('d-none')
    $('#pricebsKeybord').removeClass('d-none')
    $(this).css("border", "1px solid #ffd700");
    $("#qtybs").css("border", "none");
    if (numArrayPrice.length == 0) {
        $("#hpricebs").empty();
    }
    if (numArray.length != 5) {
        $('#pricebsKeybord').find('.key').removeClass('disable-key')

    }

});
//======== end bing and small click========//

//===========normal 5/35 click===================//
$('.ball-five').each(function () {
    $(this).click(function () {
        $(this).toggleClass('btn-active')
        if ($(this).hasClass('btn-active')) {
            thirtyBtn.push($(this).text());
        } else {
            var index = thirtyBtn.indexOf($(this).text());
            if (index > -1) {
                thirtyBtn.splice(index, 1);
                removeDisableFive();
            }
        }
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }
        $("#amtnr").text(Calculate535());
    });
});
$('.buyFive').click(function () {
    if ($("#qty").text() == "") {
        $("#qty").text(1);
    }
    if ($("#hprice").text() == "") {
        $("#hprice").text(1);
    }
    if (thirtyBtn.length == 5) {
        $('.ball-five').removeClass('btn-active');
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + thirtyBtn.join('+') + ` 5/35-ZX|N|</span><span class="re_calu">` + Calculate535() + `000R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
        calculateTotalamount()
        $('.ball-five').removeClass('disable-btn');
        thirtyBtn = [];
        $("#qty").text(1)
        $("#hprice").text(1)
        $("#amtnr").text(0)
        $("#Cqty").text(0)

    }
});
$('#nrandOne').click(function () {
    if ($("#qty").text() == "") {
        $("#qty").text(1);
    }
    if ($("#hprice").text() == "") {
        $("#hprice").text(1);
    }
    var arrNum = [];
    var numberRandom = 5;
    var x = 0,
        i = 0;
    var listItem = [
        []
    ];
    for (x = 0; x < 1; x++) {
        arrNum = [];
        for (i = 0; i < numberRandom; i++) {
            randNum = Math.floor((Math.random() * 35) + 1);
            arrNum.push(randNum);
        }
        listItem[x].push(arrNum.join('+'));
    }
    listItem.forEach(function (v) {
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + v + ` 5/35-ZX|N|</span><span class="re_calu">` + parseInt($("#qty").text()) * parseInt($("#hprice").text()) + `000R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
    });
    calculateTotalamount()
    $("#hprice").text(1);
    $("#qty").text(1);

});
$('#nrandFive').click(function () {
    if ($("#qty").text() == "") {
        $("#qty").text(1);
    }
    if ($("#hprice").text() == "") {
        $("#hprice").text(1);
    }
    var arrNum = [];
    var numberRandom = 5;
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
            randNum = Math.floor((Math.random() * 35) + 1);
            arrNum.push(randNum);
        }
        listItem[x].push(arrNum.join('+'));
    }
    listItem.forEach(function (v) {
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + v + ` 5/35-ZX|N|</span><span class="re_calu">` + parseInt($("#qty").text()) * parseInt($("#hprice").text()) + `000R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
    });
    calculateTotalamount()
    $("#hprice").text(1);
    $("#qty").text(1);
});
//===========end normall 5/35 click===========//

//===========2d Single(S)
$('.buySigle').on('click', () => {
    if ($("#qtysingle").text() == "") {
        $("#qtysingle").text(1);
    }
    if ($("#hpricesingle").text() == "") {
        $("#hpricesingle").text(1);
    }
    if (numArray.length == 2) {
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + numArray.join('') + ` 2D-` + postArr.sort().join('') + `-ZX|S|</span><span class="re_calu"> ` + Calculatesingle() + `00R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
    }
    calculateTotalamount()
    numArray = []
    $('#singebet').empty();
    $('.key').removeClass('disable-key')
    $('#qtysingle').text(1);
    $('#hpricesingle').text(1);
    $('#amtsingle').text(0);
    $('#Cqtysingle').text(0);

});
$('#srandOne').on('click', () => {
    if ($("#qtysingle").text() == "") {
        $("#qtysingle").text(1);
    }
    if ($("#hpricesingle").text() == "") {
        $("#hpricesingle").text(1);
    }
    srandNum = Math.floor((Math.random() * 100) + 1);
    $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + srandNum + ` 2D-` + postArr.sort().join('') + `-ZX|S|</span><span class="re_calu">` + parseInt($("#qtysingle").text()) * parseInt($("#hpricesingle").text()) * postArr.length + `00R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
    calculateTotalamount();
    $('#qtysingle').text(1);
    $('#hpricesingle').text(1);
    $('#amtsingle').text(0);
    $('#Cqtysingle').text(0);
});
$('#srandFive').click(function () {
    if ($("#qtysingle").text() == "") {
        $("#qtysingle").text(1);
    }
    if ($("#hpricesingle").text() == "") {
        $("#hpricesingle").text(1);
    }
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
            randNum = Math.floor((Math.random() * 100) + 1);
            arrNum.push(randNum);
        }
        listItem[x].push(arrNum.join('+'));
    }

    listItem.forEach(function (v) {
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + v + ` 2D-` + postArr.sort().join('') + `-ZX|S|</span><span class="re_calu">` + parseInt($("#qtysingle").text()) * parseInt($("#hpricesingle").text()) * postArr.length + `00R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
        calculateTotalamount();
    });

});
//=========2d Range============//
$('#rangeEnd').click(function () {
    if ($("#hpricerang").text() == "") {
        $("#hpricerang").text(1);
    }
    if ($("#qtyrang").text() == "") {
        $("#qtyrang").text(1);
    }
    $('#rangeEnd').css("border", "1px solid #ffd700")
    $('#rangeStart').css("border", "none")
    $('#rangStartKey').addClass('d-none')
    $('#rangEndKey').removeClass('d-none')
    $('#qtyrangKeybord').addClass('d-none')
    $('#pricerangKeybord').addClass('d-none')
    $("#qtyrang").css("border", "none")
    $("#pricerang").css("border", "none")
    if (numArrayEnd.length != 2) {

        $('#rangEndKey').find('.key').removeClass('disable-key')

    }

});
$('#rangeStart').click(function () {
    if ($("#hpricerang").text() == "") {
        $("#hpricerang").text(1);
    }
    if ($("#qtyrang").text() == "") {
        $("#qtyrang").text(1);
    }
    $('#rangeEnd').css("border", "none")
    $('#rangeStart').css("border", "1px solid #ffd700")
    $("#qtyrang").css("border", "none")
    $("#pricerang").css("border", "none")
    $('#rangStartKey').removeClass('d-none')
    $('#rangEndKey').addClass('d-none')
    $('#qtyrangKeybord').addClass('d-none')
    $('#pricerangKeybord').addClass('d-none')
    //$('#rangStartKey').find('.key').removeClass('disable-key')
    if (numArray.length != 2) {
        $('#rangStartKey').find('.key').removeClass('disable-key')

    }
});
$('#qtyrang').click(function () {
    if ($("#hpricerang").text() == "") {
        $("#hpricerang").text(1);
    }
    $('#rangeStart').css("border", "none")
    $("#qtyrang").css("border", "1px solid #ffd700")
    $("#pricerang").css("border", "none")
    $('#rangStartKey').addClass('d-none')
    $('#rangEndKey').addClass('d-none')
    $('#qtyrangKeybord').removeClass('d-none')
    $('#pricerangKeybord').addClass('d-none')
    $('#rangeEnd').css("border", "none")
    if (numArrayQtyrang.length == 0) {
        $("#qtyrang").empty();
    }
    //$('#rangStartKey').find('.key').removeClass('disable-key')
    if (numArray.length != 2) {
        $('#rangStartKey').find('.key').removeClass('disable-key')

    }
});
$('#pricerang').click(function () {
    if ($("#qtyrang").text() == "") {
        $("#qtyrang").text(1);
    }
    $('#rangeStart').css("border", "none")
    $('#rangeEnd').css("border", "none")
    $("#pricerang").css("border", "1px solid #ffd700")
    $("#qtyrang").css("border", "none")
    $('#rangStartKey').addClass('d-none')
    $('#rangEndKey').addClass('d-none')
    $('#qtyrangKeybord').addClass('d-none')
    $('#pricerangKeybord').removeClass('d-none')
    if (numArrayPricerang.length == 0) {
        $("#hpricerang").empty();
    }
    //$('#rangStartKey').find('.key').removeClass('disable-key')
    if (numArray.length != 2) {
        $('#rangStartKey').find('.key').removeClass('disable-key')

    }
});
$('.buy-key-rang').on('click', () => {
    if ($("#qtyrang").text() == "") {
        $("#qtyrang").text(1);
    }
    if ($("#hpricerang").text() == "") {
        $("#hpricerang").text(1);
    }
    var arrayOne = numArray.join('');
    var arrayTwo = numArrayEnd.join('');
    if (numArray.length == 2 && numArrayEnd.length == 2) {
        if (parseInt(arrayOne) < parseInt(arrayTwo)) {
            $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + numArray.join('') + `:` + numArrayEnd.join('') + ` 2D-` + postArr.sort().join('') + `-ZX|R|</span><span class="re_calu">` + Calculaterang() + `00R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
            calculateTotalamount();
            numArray = [];
            numArrayEnd = [];

            $('#rangeStart').empty();
            $('#rangeEnd').empty();
            $('.key').removeClass('disable-key');
            $('#qtyrang').text(1);
            $('#hpricerang').text(1);
            $('#amtrang').text(0);
            $('#Cqtyrang').text(0);

            // $('#rangStartKey').removeClass('d-none');
            // $('#rangEndKey').addClass('d-none');
        }


    }

});
//===========2d Arrange==========//
$('#arrangeBet').click(function () {
    if ($("#hpricearrange").text() == "") {
        $("#hpricearrange").text(1);
    }
    if ($("#qtyarrange").text() == "") {
        $("#qtyarrange").text(1);
    }
    $(this).css("border", "1px solid #ffd700")
    $("#qtyarrange").css("border", "none")
    $("#pricearrange").css("border", "none")
    $("#qtyarrangeKeybord").addClass("d-none")
    $("#pricearrangeKeybord").addClass("d-none")
    $("#arrangeKeybord").removeClass("d-none")
})
$('#qtyarrange').click(function () {
    if ($("#hpricearrange").text() == "") {
        $("#hpricearrange").text(1);
    }
    $(this).css("border", "1px solid #ffd700")
    $("#arrangeBet").css("border", "none")
    $("#pricearrange").css("border", "none")
    $("#qtyarrangeKeybord").removeClass("d-none")
    $("#pricearrangeKeybord").addClass("d-none")
    $("#arrangeKeybord").addClass("d-none")
    if (numArrayQtyarrange.length == 0) {
        $("#qtyarrange").empty();
    }
})
$('#pricearrange').click(function () {
    if ($("#qtyarrange").text() == "") {
        $("#qtyarrange").text(1);
    }
    $(this).css("border", "1px solid #ffd700")
    $("#qtyarrange").css("border", "none")
    $("#arrangeBet").css("border", "none")
    $("#qtyarrangeKeybord").addClass("d-none")
    $("#pricearrangeKeybord").removeClass("d-none")
    $("#arrangeKeybord").addClass("d-none")
    if (numArrayPricearrange.length == 0) {
        $("#hpricearrange").empty();
    }
})
$('.buyArrang').on('click', () => {
    if ($("#qtyarrange").text() == "") {
        $("#qtyarrange").text(1);
    }
    if ($("#hpricearrange").text() == "") {
        $("#hpricearrange").text(1);
    }
    if (numArray.length == 2) {
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + numArray.join(':') + ` 2D-` + postArr.sort().join('') + `-ZX|A|</span><span class="re_calu">` + Calculatearrange() + `00R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
        calculateTotalamount()
        $('#arrangeBet').empty();
        $('#qtyarrange').text(1)
        $("#hpricearrange").text(1)
        $("#Cqtyarrange").text(0)
        $("#amtarrange").text(0)
        numArray = [];
        $('.key').removeClass('disable-key');

    }

});
//////////////////////////////
//=======2d  Normal===========//
$('#rowOne').click(function () {
    firstRowArr = [];
    var btn = $('#firstRow').find('.ball');
    btn.toggleClass('active-ball');
    if (btn.hasClass('active-ball')) {
        btn.addClass('active-ball');
    }
    btn.each(function () {

        if ($(this).hasClass('active-ball')) {

            firstRowArr.push($(this).text());
            $('#rowTwo').addClass('disable-btn');
            $('#rowThree').addClass('disable-btn');


        } else {
            firstRowArr = [];
            $('#rowTwo').removeClass('disable-btn');
            $('#rowThree').removeClass('disable-btn');

        }
    });
    $('#amt').text(Calculate);
    $('#Cqty').text(CalculateQty);
});
$('#rowTwo').click(function () {
    secondRowArr = [];
    var btn = $('#secondRow').find('.ball-second');
    btn.toggleClass('active-ball');
    if (btn.hasClass('active-ball')) {
        btn.addClass('active-ball');
    }
    btn.each(function () {
        if ($(this).hasClass('active-ball')) {
            secondRowArr.push($(this).text());
            $('#rowOne').addClass('disable-btn');
            $('#rowThree').addClass('disable-btn');

        } else {
            secondRowArr = [];
            $('#rowOne').removeClass('disable-btn');
            $('#rowThree').removeClass('disable-btn');
        }
    });
    $('#amt').text(Calculate);
    $('#Cqty').text(CalculateQty);


});
$('.buyTwoD').click(function () {
    var first;
    var second;
    var third;
    if (firstRowArr.length >= 2) {
        first = '(' + firstRowArr.join('+') + ')';
    } else {
        first = firstRowArr;
    }
    if (secondRowArr.length >= 2) {
        second = '(' + secondRowArr.join('+') + ')';
    } else {
        second = secondRowArr;
    }

    lOne = firstRowArr.length;
    lTwo = secondRowArr.length;
    if (lOne !== 0 && lTwo !== 0) {
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }

        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + first + `:` + second + ` 2D-` + postArr.sort().join('') + `-ZX|N|` + `</span>` + `<span class="re_calu">` + Calculate() + `00R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
        calculateTotalamount()
        $('.ball').removeClass('disable-btn');
        $('.ball').removeClass('active-ball');

        $('.ball-second').removeClass('disable-btn');
        $('.ball-second').removeClass('active-ball');

        $('.ball-third').removeClass('disable-btn');
        $('.ball-third').removeClass('active-ball');
        $('#rowOne,#rowTwo').removeClass('disable-btn');
        $("#qty").text(1);
        $("#hprice").text(1);
        $("#Cqty").text(0);
        $("#amt").text(0);

        firstRowArr = [];
        secondRowArr = [];
    }

});
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
////////////////////////////////
//single bet 
$("#singebet").click(function () {
    if ($("#hpricesingle").text() == "") {
        $("#hpricesingle").text(1);
    }
    if ($("#qtysingle").text() == "") {
        $("#qtysingle").text(1);
    }
    $("#pricesingle").css("border", "none");
    $("#qtysingle").css("border", "none");
    $('#singlepriceKeybord').addClass('d-none')
    $('#singleqtyKeybord').addClass('d-none')
    $('#singleKeybord').removeClass('d-none')
})
$('#qtysingle').click(function () {
    if ($("#hpricesingle").text() == "") {
        $("#hpricesingle").text(1);
    }
    $(this).css("border", "1px solid #ffd700");
    $("#pricesingle").css("border", "none");
    $('#singlepriceKeybord').addClass('d-none')
    $('#singleKeybord').addClass('d-none')
    $('#singleqtyKeybord').removeClass('d-none')
    $('#singleKeybord').addClass('d-none')
    if (numArrayQtysingle.length == 0) {
        $("#qtysingle").empty();
    }
    if (numArray.length != 5) {
        $('#qtyKeybord').find('.key').removeClass('disable-key')

    }

});
$('#pricesingle').click(function () {
    if ($("#qtysingle").text() == "") {
        $("#qtysingle").text(1);
    }
    $('#singleqtyKeybord').addClass('d-none')
    $('#singleKeybord').addClass('d-none')
    $('#singlepriceKeybord').removeClass('d-none')
    $('#singleKeybort').addClass('d-none')
    $(this).css("border", "1px solid #ffd700");
    $("#qtysingle").css("border", "none");
    if (numArrayPricesingle.length == 0) {
        $("#hpricesingle").empty();
    }
    if (numArray.length != 5) {
        $('#priceKeybord').find('.key').removeClass('disable-key')

    }

});

//=========================block disable===========================//
function addDisableSp() {
    $('.ball-bingo').each(function () {
        if (!$(this).hasClass('btn-active')) {
            $(this).addClass('disable-btn');
        }
    });
}
function removeDisableSp() {
    $('.ball-bingo').each(function () {
        $(this).removeClass('disable-btn');
    });
}
function addDisableFive() {
    $('.ball-five').each(function () {
        if (!$(this).hasClass('btn-active')) {
            $(this).addClass('disable-btn');
        }
    });
}
function removeDisableFive() {
    $('.ball-five').each(function () {
        $(this).removeClass('disable-btn');
    });
}
//========================= end block disable===========================//


//=========================block function works with keybord===========================//
function easynum() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArray.length < 2) {
        $('#singebet').append(easy_num_value);
        numArray.push(easy_num_value);
    } else {
        //some code
    }
    if (numArray.length == 2) {
        $("#Cqtysingle").text(1);
        $('#amtsingle').text(Calculatesingle);
    } else {
        $('#amtsingle').text(0);
        $("#Cqtysingle").text(0);
    }

}
function easy_numpad_del() {
    event.preventDefault();
    var easy_numpad_output_val = $('#singebet').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#singebet').text(easy_numpad_output_val_deleted);
    numArray.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    $('#amtsingle').text(0);
    $("#Cqtysingle").text(0);

}
function rangenumStart() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArray.length < 2) {
        $('#rangeStart').append(easy_num_value);
        numArray.push(easy_num_value);
        if (numArrayEnd.length == 2 && numArray.length == 2) {
            $("#amtrang").text(Calculaterang);
            $("#Cqtyrang").text(Calculateqtyrang);
        } else {
            $("#amtrang").text(0);
            $("#Cqtyrang").text(0);
        }
    }
}
function easy_numpad_del_rangeStart() {
    event.preventDefault();
    var easy_numpad_output_val = $('#rangeStart').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#rangeStart').text(easy_numpad_output_val_deleted);
    numArray.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayEnd.length == 2 && numArray.length == 2) {
        $("#amtrang").text(Calculaterang);
        $("#Cqtyrang").text(Calculateqtyrang);
    } else {
        $("#amtrang").text(0);
        $("#Cqtyrang").text(0);
    }
}
function rangenumEnd() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayEnd.length < 2) {
        $('#rangeEnd').append(easy_num_value);
        numArrayEnd.push(easy_num_value);
    }
    if (numArrayEnd.length == 2 && numArray.length == 2) {
        $("#amtrang").text(Calculaterang);
        $("#Cqtyrang").text(Calculateqtyrang);
    } else {
        $("#amtrang").text(0);
        $("#Cqtyrang").text(0);
    }
}
function easy_numpad_del_rangeEnd() {
    event.preventDefault();
    var easy_numpad_output_val = $('#rangeEnd').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#rangeEnd').text(easy_numpad_output_val_deleted);
    numArrayEnd.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayEnd.length == 2 && numArray.length == 2) {
        $("#amtrang").text(Calculaterang);
        $("#Cqtyrang").text(Calculateqtyrang);
    } else {
        $("#amtrang").text(0);
        $("#Cqtyrang").text(Calculateqtyrang);
    }
}
function numarrange() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArray.length < 2) {
        $('#arrangeBet').append(easy_num_value);
        numArray.push(easy_num_value);
    }
    $('#amtarrange').text(Calculatearrange());
    $("#Cqtyarrange").text(Calculateqtyarrange());

}
function del_arrange() {
    event.preventDefault();
    var easy_numpad_output_val = $('#arrangeBet').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#arrangeBet').text(easy_numpad_output_val_deleted);
    numArray.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    $("#Cqtyarrange").text(Calculateqtyarrange())
    $("#amtarrange").text(Calculatearrange())
}
function FunQty() {
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
        $("#amtnr").text(Calculate535());
        $('#amt').text(Calculate);
    } else {
        $('#qty').append();
        numArrayQty.push();
    }
}
function easy_numpad_del_qty() {
    event.preventDefault();
    var easy_numpad_output_val = $('#qty').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#qty').text(easy_numpad_output_val_deleted);
    numArrayQty.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayQty.length == 0 && numArrayQty[0] !== "1") {
        $('#qty').text(1);
    }
    $("#amtnr").text(Calculate535());
    $('#amt').text(Calculate);
}
function price() {
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
        $("#amtnr").text(Calculate535());
        $('#amt').text(Calculate);
    } else {
        $('#hprice').append();
        numArrayPrice.push();
    }
}
function easy_numpad_del_price() {
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
    $("#amtnr").text(Calculate535());
    $('#amt').text(Calculate);
}
function FunQtysingle() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayQtysingle.length < 3) {
        $('#qtysingle').append(easy_num_value);
        numArrayQtysingle.push(easy_num_value);
        if (parseInt($('#qtysingle').text()) >= 100) {
            $('#qtysingle').text(100);
        }
        $('#amtsingle').text(Calculatesingle);
    } else {
        $('#qtysingle').append();
        numArrayQtysingle.push();
    }
}
function easy_numpad_del_qtysingle() {
    event.preventDefault();
    var easy_numpad_output_val = $('#qtysingle').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#qtysingle').text(easy_numpad_output_val_deleted);
    numArrayQtysingle.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayQtysingle.length == 0 && numArrayQtysingle[0] !== "1") {
        $('#qtysingle').text(1);
    } else {

    }

    $('#amtsingle').text(Calculatesingle);
}
function pricesingle() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayPricesingle.length < 5) {
        $('#hpricesingle').append(easy_num_value);
        numArrayPricesingle.push(easy_num_value);

    } else {
        $('#hpricesingle').append();
        numArrayPricesingle.push();
    }
    $('#amtsingle').text(Calculatesingle);
}
function easy_numpad_del_pricesingle() {
    event.preventDefault();
    var easy_numpad_output_val = $('#hpricesingle').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#hpricesingle').text(easy_numpad_output_val_deleted);

    numArrayPricesingle.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayPricesingle.length == 0 && numArrayPricesingle[0] !== "1") {
        $('#hpricesingle').text(1);
    } else {

    }
    $('#amtsingle').text(Calculatesingle);
}
function Qtyrang() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayQtyrang.length < 3) {
        $('#qtyrang').append(easy_num_value);
        numArrayQtyrang.push(easy_num_value);
        if (parseInt($('#qtyrang').text()) >= 100) {
            $('#qtyrang').text(100);
        }

        
    } else {
        $('#qtyrang').append();
        numArrayQtyrang.push();
    }
    $('#Cqtyrang').text(Calculateqtyrang());
    $('#amtrang').text(Calculaterang());
}
function easy_numpad_del_qty_rang() {
    event.preventDefault();
    var easy_numpad_output_val = $('#qtyrang').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#qtyrang').text(easy_numpad_output_val_deleted);
    numArrayQtyrang.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayQtyrang.length == 0 && numArrayQtyrang[0] !== "1") {
        $('#qtyrang').text(1);
    } else {

    }

    $('#amtrang').text(Calculaterang());
}
function pricerang() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayPricerang.length < 5) {
        $('#hpricerang').append(easy_num_value);
        numArrayPricerang.push(easy_num_value);

    } else {
        $('#hpricerang').append();
        numArrayPricerang.push();
    }
    $('#amtrang').text(Calculaterang());
}
function easy_numpad_del_price_rang() {
    event.preventDefault();
    var easy_numpad_output_val = $('#hpricerang').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#hpricerang').text(easy_numpad_output_val_deleted);

    numArrayPricerang.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayPricerang.length == 0 && numArrayPricerang[0] !== "1") {
        $('#hpricerang').text(1);
    } else {

    }
    $('#amtrang').text(Calculaterang());
}
function FunQtyarrange() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayQtyarrange.length < 3) {
        $('#qtyarrange').append(easy_num_value);
        numArrayQtyarrange.push(easy_num_value);
        if (parseInt($('#qtyarrange').text()) >= 100) {
            $('#qtyarrange').text(100);
        }
    } else {
        $('#qtyarrange').append();
        numArrayQtyarrange.push();
    }
    $('#Cqtyarrange').text(Calculateqtyarrange());
    $('#amtarrange').text(Calculatearrange());
}
function easy_numpad_del_qty_arrange() {
    event.preventDefault();
    var easy_numpad_output_val = $('#qtyarrange').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#qtyarrange').text(easy_numpad_output_val_deleted);
    numArrayQtyarrange.pop(easy_numpad_output_val_deleted);
    $('.keyarrange').removeClass('disable-key')
    if (numArrayQtyarrange.length == 0 && numArrayQtyarrange[0] !== "1") {
        $('#qtyarrange').text(1);
    } else {

    }

    $('#amtarrange').text(Calculatearrange());
}
function pricearrange() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayPricearrange.length < 5) {
        $('#hpricearrange').append(easy_num_value);
        numArrayPricearrange.push(easy_num_value);

    } else {
        $('#hpricearrange').append();
        numArrayPricearrange.push();
    }
    $('#amtarrange').text(Calculatearrange());
}
function easy_numpad_del_price_arrange() {
    event.preventDefault();
    var easy_numpad_output_val = $('#hpricearrange').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#hpricearrange').text(easy_numpad_output_val_deleted);

    numArrayPricearrange.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayPricearrange.length == 0 && numArrayPricearrange[0] !== "1") {
        $('#hpricearrange').text(1);
    } else {

    }
    $('#amtarrange').text(Calculate);
}
function FunQtysp() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayQty.length < 3) {
        $('#qtysp').append(easy_num_value);
        numArrayQty.push(easy_num_value);
        if (parseInt($('#qtysp').text()) >= 100) {
            $('#qtysp').text(100);
        }
        $("#amtsp").text(CalculateSp());
    } else {
        $('#qtysp').append();
        numArrayQty.push();
    }
}
function easy_numpad_del_qtysp() {
    event.preventDefault();
    var easy_numpad_output_val = $('#qtysp').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#qtysp').text(easy_numpad_output_val_deleted);
    numArrayQty.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayQty.length == 0 && numArrayQty[0] !== "1") {
        $('#qtysp').text(1);
    } else {

    }
    $("#amtsp").text(CalculateSp());
}
function pricesp() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayPrice.length < 5) {
        $('#hpricesp').append(easy_num_value);
        numArrayPrice.push(easy_num_value);
        $("#amtsp").text(CalculateSp());
    } else {
        $('#hpricesp').append();
        numArrayPrice.push();
    }
}
function easy_numpad_del_pricesp() {
    event.preventDefault();
    var easy_numpad_output_val = $('#hpricesp').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#hpricesp').text(easy_numpad_output_val_deleted);

    numArrayPrice.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayPrice.length == 0 && numArrayPrice[0] !== "1") {
        $('#hpricesp').text(1);
    } else {

    }
    $("#amtsp").text(CalculateSp());
}
function FunQtybs() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayQty.length < 3) {
        $('#qtybs').append(easy_num_value);
        numArrayQty.push(easy_num_value);
        if (parseInt($('#qtybs').text()) >= 100) {
            $('#qtybs').text(100);
        }
        $("#amtbs").text(CalculateBs());
    } else {
        $('#qtybs').append();
        numArrayQty.push();
    }
}
function easy_numpad_del_qtybs() {
    event.preventDefault();
    var easy_numpad_output_val = $('#qtybs').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#qtybs').text(easy_numpad_output_val_deleted);
    numArrayQty.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayQty.length == 0 && numArrayQty[0] !== "1") {
        $('#qtybs').text(1);
    } else {

    }
    $("#amtbs").text(CalculateBs());
}
function pricebs() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayPrice.length < 5) {
        $('#hpricebs').append(easy_num_value);
        numArrayPrice.push(easy_num_value);
        $("#amtbs").text(CalculateBs());

    } else {
        $('#hpricebs').append();
        numArrayPrice.push();
    }
}
function easy_numpad_del_pricebs() {
    event.preventDefault();
    var easy_numpad_output_val = $('#hpricebs').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#hpricebs').text(easy_numpad_output_val_deleted);

    numArrayPrice.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    if (numArrayPrice.length == 0 && numArrayPrice[0] !== "1") {
        $('#hpricebs').text(1);
    } else {

    }
    $("#amtbs").text(CalculateBs());

}
function easy_numpad_clear() {
    event.preventDefault();
    $('#easy-numpad-output').text("");
}
function easy_numpad_cancel() {
    event.preventDefault();
    $('#easy-numpad-frame').remove();
}

function easy_numpad_done() {
    event.preventDefault();
    var easy_numpad_output_val = $('#easy-numpad-output').text();
    $('.easy-put').val(easy_numpad_output_val);
    easy_numpad_close();
}

function easy_numpad_close() {
    $('#easy-numpad-frame').remove();
}