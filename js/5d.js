var numArray = []
var numArrayEnd = []
var numArrayQty = []
var numArrayPrice = []
var numArrayQtysingle = []
var numArrayPricesingle = []
var numArrayPricerang = []
var numArrayQtyrang = []
var numArrayQtyarrange = []
var numArrayPricearrange = []
var postArr = []
var firstRowArr = [];
var secondRowArr = [];
var thirdRowArr = [];
var fourtRowArr = [];
var fiveRowArr = [];
$('.inner-cart').on('click', '.item-add', function () {
    $(this).closest('li').remove();
    var Remaining = parseInt($("#TotalAmount").text()) - parseInt(($(this).siblings(".re_calu").text()).slice(0, -1))
    $("#TotalAmount").text(Remaining);
});

$('.ball').each(function () {
    $(this).click(function () {
        // Handle select removing value
        if (firstRowArr.find(element => parseInt(element) == parseInt($(this).text()))) {
            $(this).toggleClass('active-ball');
            firstRowArr.remove($(this).text());
            //console.log(firstRowArr)
            if (firstRowArr.remove($(this).text()) && firstRowArr.length == 1) {
                $('#rowTwo').removeClass('disable-btn');
                $('#rowThree').removeClass('disable-btn');
                $('#rowFour').removeClass('disable-btn');
                $('#rowFive').removeClass('disable-btn');
            }

        } else {
            // Handle selection all group (1st, 2nd, 3rd)
            if ((secondRowArr.length >= 2 || thirdRowArr.length >= 2) && firstRowArr.length >= 1) {
                if (parseInt(firstRowArr[0]) == parseInt($(this).text())) {
                    $(this).toggleClass('active-ball');
                    firstRowArr.remove($(this).text());
                } else {
                    //alert("Not allowed!!");
                }


            } else {
                $(this).toggleClass('active-ball');
                firstRowArr.push($(this).text());
                //console.log(firstRowArr)
                if (firstRowArr.length >= 2) {
                    $('#rowTwo').addClass('disable-btn');
                    $('#rowThree').addClass('disable-btn');
                    $('#rowFour').addClass('disable-btn');
                    $('#rowFive').addClass('disable-btn');
                }

            }
        }
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }
        $('#amt').text(Calculate);
        $('#Cqty').text(CalculateQty);
    });

});
$('.ball-second').each(function () {
    $(this).click(function () {

        // Handle select removing value
        if (secondRowArr.find(element => parseInt(element) == parseInt($(this).text()))) {
            $(this).toggleClass('active-ball');
            secondRowArr.remove($(this).text());
            //console.log(secondRowArr)
            if (secondRowArr.remove($(this).text()) && secondRowArr.length == 1) {
                $('#rowOne').removeClass('disable-btn');
                $('#rowThree').removeClass('disable-btn');
                $('#rowFour').removeClass('disable-btn');
                $('#rowFive').removeClass('disable-btn');
            }

        } else {
            // Handle selection all group (1st, 2nd, 3rd)
            if ((firstRowArr.length >= 2 || thirdRowArr.length >= 2) && secondRowArr.length >= 1) {
                if (parseInt(secondRowArr[0]) == parseInt($(this).text())) {
                    $(this).toggleClass('active-ball');
                    secondRowArr.remove($(this).text());
                } else {
                    //alert("Not allowed!!");
                }

            } else {
                $(this).toggleClass('active-ball');
                secondRowArr.push($(this).text());
                //console.log(secondRowArr)
                if (secondRowArr.length >= 2) {
                    $('#rowOne').addClass('disable-btn');
                    $('#rowThree').addClass('disable-btn');
                    $('#rowFour').addClass('disable-btn');
                    $('#rowFive').addClass('disable-btn');
                }

            }
        }
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }
        $('#amt').text(Calculate);
        $('#Cqty').text(CalculateQty);
    });
});
$('.ball-third').each(function () {
    $(this).click(function () {

        // Handle select removing value
        if (thirdRowArr.find(element => parseInt(element) == parseInt($(this).text()))) {
            $(this).toggleClass('active-ball');
            thirdRowArr.remove($(this).text());
            //console.log(thirdRowArr)
            if (thirdRowArr.remove($(this).text()) && thirdRowArr.length == 1) {
                $('#rowTwo').removeClass('disable-btn');
                $('#rowOne').removeClass('disable-btn');
                $('#rowFour').removeClass('disable-btn');
                $('#rowFive').removeClass('disable-btn');
            }
        } else {
            // Handle selection all group (1st, 2nd, 3rd)
            if ((firstRowArr.length >= 2 || secondRowArr.length >= 2) && thirdRowArr.length >= 1) {
                if (parseInt(thirdRowArr[0]) == parseInt($(this).text())) {
                    $(this).toggleClass('active-ball');
                    thirdRowArr.remove($(this).text());
                    // console.log(thirdRowArr)
                } else {
                    //alert("Not allowed!!");
                }

            } else {
                $(this).toggleClass('active-ball');
                thirdRowArr.push($(this).text());
                //console.log(thirdRowArr)
                if (thirdRowArr.length >= 2) {
                    $('#rowTwo').addClass('disable-btn');
                    $('#rowOne').addClass('disable-btn');
                    $('#rowFour').addClass('disable-btn');
                    $('#rowFive').addClass('disable-btn');
                }
            }
        }
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }
        $('#amt').text(Calculate);
        $('#Cqty').text(CalculateQty);
    });
});
$('.ball-fourt').each(function () {
    $(this).click(function () {

        // Handle select removing value
        if (fourtRowArr.find(element => parseInt(element) == parseInt($(this).text()))) {
            $(this).toggleClass('active-ball');
            fourtRowArr.remove($(this).text());
            //console.log(fourtRowArr)
            if (fourtRowArr.remove($(this).text()) && fourtRowArr.length == 1) {
                $('#rowTwo').removeClass('disable-btn');
                $('#rowThree').removeClass('disable-btn');
                $('#rowOne').removeClass('disable-btn');
                $('#rowFive').removeClass('disable-btn');
            }
        } else {
            // Handle selection all group (1st, 2nd, 3rd)
            if ((firstRowArr.length >= 2 || secondRowArr.length >= 2) && fourtRowArr.length >= 1) {
                if (parseInt(fourtRowArr[0]) == parseInt($(this).text())) {
                    $(this).toggleClass('active-ball');
                    fourtRowArr.remove($(this).text());
                    // console.log(fourtRowArr)
                } else {
                    //alert("Not allowed!!");
                }

            } else {
                $(this).toggleClass('active-ball');
                fourtRowArr.push($(this).text());
                //console.log(fourtRowArr)
                if (fourtRowArr.length >= 2) {
                    $('#rowTwo').addClass('disable-btn');
                    $('#rowThree').addClass('disable-btn');
                    $('#rowOne').addClass('disable-btn');
                    $('#rowFive').addClass('disable-btn');
                }
            }
        }
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }
        $('#amt').text(Calculate);
        $('#Cqty').text(CalculateQty);
    });
});
$('.ball-5th').each(function () {
    $(this).click(function () {

        // Handle select removing value
        if (fiveRowArr.find(element => parseInt(element) == parseInt($(this).text()))) {
            $(this).toggleClass('active-ball');
            fiveRowArr.remove($(this).text());
            //console.log(fiveRowArr)
            if (fiveRowArr.remove($(this).text()) && fiveRowArr.length == 1) {
                $('#rowTwo').removeClass('disable-btn');
                $('#rowThree').removeClass('disable-btn');
                $('#rowFour').removeClass('disable-btn');
                $('#rowOne').removeClass('disable-btn');
            }
        } else {
            // Handle selection all group (1st, 2nd, 3rd)
            if ((firstRowArr.length >= 2 || secondRowArr.length >= 2) && fiveRowArr.length >= 1) {
                if (parseInt(fiveRowArr[0]) == parseInt($(this).text())) {
                    $(this).toggleClass('active-ball');
                    fiveRowArr.remove($(this).text());
                    // console.log(fiveRowArr)
                } else {
                    //alert("Not allowed!!");
                }

            } else {
                $(this).toggleClass('active-ball');
                fiveRowArr.push($(this).text());
                //console.log(fiveRowArr)
                if (fiveRowArr.length >= 2) {
                    $('#rowTwo').addClass('disable-btn');
                    $('#rowThree').addClass('disable-btn');
                    $('#rowFour').addClass('disable-btn');
                    $('#rowOne').addClass('disable-btn');
                }
            }
        }
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }
        $('#amt').text(Calculate);
        $('#Cqty').text(CalculateQty);
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
            $('#rowFour').addClass('disable-btn');
            $('#rowFive').addClass('disable-btn');
            //console.log(firstRowArr)

        } else {
            firstRowArr = [];
            $('#rowTwo').removeClass('disable-btn');
            $('#rowThree').removeClass('disable-btn');
            $('#rowFour').removeClass('disable-btn');
            $('#rowFive').removeClass('disable-btn');
            //console.log(firstRowArr)
        }
    });;
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
            $('#rowFour').addClass('disable-btn');
            $('#rowFive').addClass('disable-btn');
            //console.log(secondRowArr)
        } else {
            secondRowArr = [];
            $('#rowOne').removeClass('disable-btn');
            $('#rowThree').removeClass('disable-btn');
            $('#rowFour').removeClass('disable-btn');
            $('#rowFive').removeClass('disable-btn');
        }
    });
    $('#amt').text(Calculate);
    $('#Cqty').text(CalculateQty);
});
$('#rowThree').click(function () {
    thirdRowArr = [];
    var btn = $('#thirdRow').find('.ball-third');
    btn.toggleClass('active-ball');
    if (btn.hasClass('active-ball')) {
        btn.addClass('active-ball');
    }
    btn.each(function () {
        if ($(this).hasClass('active-ball')) {
            thirdRowArr.push($(this).text());
            $('#rowTwo').addClass('disable-btn');
            $('#rowOne').addClass('disable-btn');
            $('#rowFour').addClass('disable-btn');
            $('#rowFive').addClass('disable-btn');
            //console.log(thirdRowArr)
        } else {
            thirdRowArr = [];
            $('#rowTwo').removeClass('disable-btn');
            $('#rowOne').removeClass('disable-btn');
            $('#rowFour').removeClass('disable-btn');
            $('#rowFive').removeClass('disable-btn');
        }
    });
    $('#amt').text(Calculate);
    $('#Cqty').text(CalculateQty);
});
$('#rowFour').click(function () {
    fourtRowArr = [];
    var btn = $('#fourtRow').find('.ball-fourt');
    btn.toggleClass('active-ball');
    if (btn.hasClass('active-ball')) {
        btn.addClass('active-ball');
    }
    btn.each(function () {
        if ($(this).hasClass('active-ball')) {
            fourtRowArr.push($(this).text());
            $('#rowTwo').addClass('disable-btn');
            $('#rowThree').addClass('disable-btn');
            $('#rowOne').addClass('disable-btn');
            $('#rowFive').addClass('disable-btn');
            //console.log(thirdRowArr)
        } else {
            fourtRowArr = [];
            $('#rowTwo').removeClass('disable-btn');
            $('#rowThree').removeClass('disable-btn');
            $('#rowOne').removeClass('disable-btn');
            $('#rowFive').removeClass('disable-btn');
        }
    });
    $('#amt').text(Calculate);
    $('#Cqty').text(CalculateQty);
});
$('#rowFive').click(function () {
    fiveRowArr = [];
    var btn = $('#fiveRow').find('.ball-5th');
    btn.toggleClass('active-ball');
    if (btn.hasClass('active-ball')) {
        btn.addClass('active-ball');
    }
    btn.each(function () {
        if ($(this).hasClass('active-ball')) {
            fiveRowArr.push($(this).text());
            $('#rowTwo').addClass('disable-btn');
            $('#rowThree').addClass('disable-btn');
            $('#rowFour').addClass('disable-btn');
            $('#rowOne').addClass('disable-btn');
            //console.log(fiveRowArr)
        } else {
            fiveRowArr = [];
            $('#rowTwo').removeClass('disable-btn');
            $('#rowThree').removeClass('disable-btn');
            $('#rowFour').removeClass('disable-btn');
            $('#rowOne').removeClass('disable-btn');
        }
    });
    $('#amt').text(Calculate);
    $('#Cqty').text(CalculateQty);
});
$('.buyThreeD').click(function () {
    var first;
    var second;
    var third;
    var four;
    var five;
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
    if (thirdRowArr.length >= 2) {
        third = '(' + thirdRowArr.join('+') + ')';
    } else {
        third = thirdRowArr;
    }
    if (fourtRowArr.length >= 2) {
        four = '(' + fourtRowArr.join('+') + ')';
    } else {
        four = fourtRowArr;
    }
    if (fiveRowArr.length >= 2) {
        five = '(' + fiveRowArr.join('+') + ')';
    } else {
        five = fiveRowArr;
    }
    lOne = firstRowArr.length;
    lTwo = secondRowArr.length;
    lThree = thirdRowArr.length;
    lFour = fourtRowArr.length;
    lFive = fiveRowArr.length;
    if (lOne !== 0 && lTwo !== 0 && lThree !== 0 && lFour !== 0 && lFive !== 0) {
        if ($("#hprice").text() == "") {
            $("#hprice").text(1);
        }
        if ($("#qty").text() == "") {
            $("#qty").text(1);
        }

        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + first + `:` + second + `:` + third + `:` + four + `:` + five + ` 5D` + `-ZX|N|</span><span class="re_calu">` + Calculate() + `00R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
        calculateTotalamount();
        $('.ball').removeClass('disable-btn');
        $('.ball').removeClass('active-ball');

        $('.ball-second').removeClass('disable-btn');
        $('.ball-second').removeClass('active-ball');

        $('.ball-third').removeClass('disable-btn');
        $('.ball-third').removeClass('active-ball');

        $('.ball-fourt').removeClass('disable-btn');
        $('.ball-fourt').removeClass('active-ball');

        $('.ball-5th').removeClass('disable-btn');
        $('.ball-5th').removeClass('active-ball');

        $('#rowOne,#rowTwo,#rowThree,#rowFour,#rowFive').removeClass('disable-btn');

        firstRowArr = [];
        secondRowArr = [];
        thirdRowArr = [];
        $("#qty").text(1);
        $("#hprice").text(1);
        $("#Cqty").text(0);
        $("#amt").text(0);

    }


});
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

    $('#rangeStart').empty();
    $('#rangeEnd').empty();
    $('#singebet').empty();

    $('#rangStartKey').removeClass('d-none');
    $('#rangEndKey').addClass('d-none');

    $('.ball').removeClass('disable-btn');
    $('.ball').removeClass('active-ball');

    $('.ball-second').removeClass('disable-btn');
    $('.ball-second').removeClass('active-ball');

    $('.ball-third').removeClass('disable-btn');
    $('.ball-third').removeClass('active-ball');

    $('#rowOne,#rowTwo,#rowThree').removeClass('disable-btn');

    firstRowArr = [];
    secondRowArr = [];
    thirdRowArr = [];


});
//qty Normall
$('#qty').click(function () {
    if ($("#hprice").text() == "") {
        $("#hprice").text(1);
    }
    $(this).css("border", "1px solid #ffd700");
    $("#price").css("border", "none");
    $('#3dpriceKeybord').addClass('d-none')
    $('#3dqtyKeybord').removeClass('d-none')
    if (numArrayQty.length == 0) {
        $("#qty").empty();
    }
    if (numArray.length != 5) {
        $('#3dqtyKeybord').find('.key').removeClass('disable-key')

    }

});
//price Normall
$('#price').click(function () {
    if ($("#qty").text() == "") {
        $("#qty").text(1);
    }
    $('#3dqtyKeybord').addClass('d-none')
    $('#3dpriceKeybord').removeClass('d-none')
    $(this).css("border", "1px solid #ffd700");
    $("#qty").css("border", "none");
    if (numArrayPrice.length == 0) {
        $("#hprice").empty();
    }
    if (numArray.length != 5) {
        $('#3dpriceKeybord').find('.key').removeClass('disable-key')

    }

});
//////////////////////////////////////////
// Range
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
    $('#3dqtyrangKeybord').addClass('d-none')
    $('#3dpricerangKeybord').addClass('d-none')
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
    $('#3dqtyrangKeybord').addClass('d-none')
    $('#3dpricerangKeybord').addClass('d-none')
    //$('#rangStartKey').find('.key').removeClass('disable-key')
    if (numArray.length != 3) {
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
    $('#3dqtyrangKeybord').removeClass('d-none')
    $('#3dpricerangKeybord').addClass('d-none')
    $('#rangeEnd').css("border", "none")
    if (numArrayQtyrang.length == 0) {
        $("#qtyrang").empty();
    }
    //$('#rangStartKey').find('.key').removeClass('disable-key')
    if (numArray.length != 3) {
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
    $('#3dqtyrangKeybord').addClass('d-none')
    $('#3dpricerangKeybord').removeClass('d-none')
    if (numArrayPricerang.length == 0) {
        $("#hpricerang").empty();
    }
    //$('#rangStartKey').find('.key').removeClass('disable-key')
    if (numArray.length != 2) {
        $('#rangStartKey').find('.key').removeClass('disable-key')

    }
});
//////////////////////////////////////////////
// Single(S)
$('.buySingle').on('click', () => {
    if ($("#hpricesingle").text() == "") {
        $("#hpricesingle").text(1);
    }
    if ($("#qtysingle").text() == "") {
        $("#qtysingle").text(1);
    }
    if (numArray.length == 5) {
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + numArray.join('') + ` 3D` + `-ZX|S|</span><span class="re_calu">` + Calculatesingle() + `00R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
        calculateTotalamount()
        numArray = []
        $('#singebet').empty();
        $('.key').removeClass('disable-key')
        $("#Cqtysingle").text(0)
        $("#amtsingle").text(0)
        $("#qtysingle").text(1)
        $("#hpricesingle").text(1)

    }

});
$("#singebet").click(function () {
    if ($("#hpricesingle").text() == "") {
        $("#hpricesingle").text(1);
    }
    if ($("#qtysingle").text() == "") {
        $("#qtysingle").text(1);
    }
    $("#pricesingle").css("border", "none");
    $("#qtysingle").css("border", "none");
    $('#3dsinglepriceKeybord').addClass('d-none')
    $('#3dsingleqtyKeybord').addClass('d-none')
    $('#3dsingleKeybord').removeClass('d-none')
})
$('#qtysingle').click(function () {
    if ($("#hpricesingle").text() == "") {
        $("#hpricesingle").text(1);
    }
    $(this).css("border", "1px solid #ffd700");
    $("#pricesingle").css("border", "none");
    $('#3dsinglepriceKeybord').addClass('d-none')
    $('#3dsingleqtyKeybord').removeClass('d-none')
    $('#3dsingleKeybord').addClass('d-none')
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
    $('#3dsingleqtyKeybord').addClass('d-none')
    $('#3dsingleKeybord').addClass('d-none')
    $('#3dsinglepriceKeybord').removeClass('d-none')
    $('#3dsingleKeybort').addClass('d-none')
    $(this).css("border", "1px solid #ffd700");
    $("#qtysingle").css("border", "none");
    if (numArrayPricesingle.length == 0) {
        $("#hpricesingle").empty();
    }
    if (numArray.length != 5) {
        $('#priceKeybord').find('.key').removeClass('disable-key')

    }

});
$('#srandOne').on('click', () => {
    //srandNum = Math.floor((Math.random() * 100) + 1);
    srandNum = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
    $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + srandNum + ` 3D-` + postArr.sort().join('') + ` ZX|S|</span><span class="re_calu">` + parseInt($("#qtysingle").text()) * parseInt($("#hpricesingle").text()) + `00R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
    calculateTotalamount()
});
$('#srandFive').click(function () {
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
            randNum = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
            arrNum.push(randNum);
        }
        listItem[x].push(arrNum.join('+'));
    }

    listItem.forEach(function (v) {
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + v + ` 3D-` + postArr.sort().join('') + ` ZX|S|</span><span class="re_calu">` + parseInt($("#qtysingle").text()) * parseInt($("#hpricesingle").text()) + `00R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);

    });
    calculateTotalamount()
    $("#qtysingle").text(1)
    $("#hpricesingle").text(1)

});
// Range(R)
$('.buy-key-rang').on('click', () => {
    if ($("#hpricerang").text() == "") {
        $("#hpricerang").text(1);
    }
    if ($("#qtyrang").text() == "") {
        $("#qtyrang").text(1);
    }
    var arrayOne = numArray.join('');
    var arrayTwo = numArrayEnd.join('');
    if (numArray.length == 5 && numArrayEnd.length == 5) {
        if (parseInt(arrayOne) < parseInt(arrayTwo)) {
            $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + numArray.join('') + `:` + numArrayEnd.join('') + ` 3D` + `-ZX|R|</span><span class="re_calu">` + Calculaterang() + `00R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
            calculateTotalamount()
            numArray = [];
            numArrayEnd = [];

            $('#rangeStart').empty();
            $('#rangeEnd').empty();
            $('.key').removeClass('disable-key');

            // $('#rangStartKey').removeClass('d-none');
            // $('#rangEndKey').addClass('d-none');
            $("#qtyrang").text(1)
            $("#hpricerang").text(1)
            $("#Cqtyrang").text(0)
            $("#amtrang").text(0)
        }


    }

});
////////////////////////////////
// Arrange
$('.buyArrang3d').on('click', () => {
    if ($("#hpricearrange").text() == "") {
        $("#hpricearrange").text(1);
    }
    if ($("#qtyarrange").text() == "") {
        $("#qtyarrange").text(1);
    }
    if (numArray.length == 5) {
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + numArray.join(':') + ` 2D-` + postArr.sort().join('') + `-ZX|A|</span><span class="re_calu">` + Calculatearrange() + `00R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
        calculateTotalamount()
        $('#arrangeBet').empty();
        numArray = [];
        $('.key').removeClass('disable-key');
        $("#qtyarrange").text(1)
        $("#hpricearrange").text(1)
        $("#Cqtyarrange").text(0)
        $("#amtarrange").text(0)

    }
});
// Arrange
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
    $("#3dqtyarrangeKeybord").addClass("d-none")
    $("#3dpricearrangeKeybord").addClass("d-none")
    $("#3darrangeKeybord").removeClass("d-none")
})
$('#qtyarrange').click(function () {
    if ($("#hpricearrange").text() == "") {
        $("#hpricearrange").text(1);
    }
    $(this).css("border", "1px solid #ffd700")
    $("#arrangeBet").css("border", "none")
    $("#pricearrange").css("border", "none")
    $("#3dqtyarrangeKeybord").removeClass("d-none")
    $("#3dpricearrangeKeybord").addClass("d-none")
    $("#3darrangeKeybord").addClass("d-none")
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
    $("#3dqtyarrangeKeybord").addClass("d-none")
    $("#3dpricearrangeKeybord").removeClass("d-none")
    $("#3darrangeKeybord").addClass("d-none")
    if (numArrayPricearrange.length == 0) {
        $("#hpricearrange").empty();
    }
})
function Calculate() {
    if ((firstRowArr.length !== 0) && (secondRowArr.length !== 0) && (thirdRowArr.length !== 0) && (fourtRowArr.length !== 0) && (fiveRowArr.length !== 0)) {
        return ((firstRowArr.length > 1) ? firstRowArr.length : (secondRowArr.length > 1) ? secondRowArr.length : (thirdRowArr.length > 1) ? thirdRowArr.length : (fourtRowArr.length > 1) ? fourtRowArr.length : fiveRowArr.length) * parseInt($('#qty').text()) * parseInt($('#hprice').text());
    } else {
        return 0;
    }

}
function CalculateQty() {
    if (firstRowArr.length !== 0 && secondRowArr.length !== 0 && thirdRowArr.length !== 0 && fourtRowArr.length !== 0 && fiveRowArr.length !== 0) {
        return ((firstRowArr.length > 1) ? firstRowArr.length : (secondRowArr.length > 1) ? secondRowArr.length : (thirdRowArr.length > 1) ? thirdRowArr.length : (fourtRowArr.length > 1) ? fourtRowArr.length : fiveRowArr.length) * parseInt($("#qty").text());
    } else {
        return 0;
    }

}
//single calculate
function Calculatesingle() {
    if (numArray.length == 5) {
        $("#Cqtysingle").text(Calculatesingleqty());
        return parseInt($("#qtysingle").text()) * parseInt($("#hpricesingle").text());
    } else {
        $("#Cqtysingle").text(0);
        return 0;
    }

}
function Calculatesingleqty() {
    return 1 * parseInt($("#qtysingle").text());
}
function Calculaterang() {
    if ((numArray.length == 5 && numArrayEnd.length == 5) && (parseInt($("#rangeEnd").text())) > parseInt($("#rangeStart").text())) {
        $("#Cqtyrang").text(Calculateqtyrang());
        return parseInt($("#qtyrang").text()) * parseInt($("#hpricerang").text()) * (parseInt($("#rangeEnd").text()) - parseInt($("#rangeStart").text()) + 1);
    } else {
        $("#Cqtyrang").text(0);
        return 0;
    }

}
function Calculateqtyrang() {
    if ((numArray.length == 5 && numArrayEnd.length == 5) && (parseInt($("#rangeEnd").text())) > parseInt($("#rangeStart").text())) {
        return ((parseInt($("#rangeEnd").text()) - parseInt($("#rangeStart").text()) + 1) * parseInt($("#qtyrang").text()));
    } else {
        return 0;
    }

}

function generatePermutations(input) {
    const inputStr = input.toString();
    const digits = inputStr.split('').map(Number);
    const permutations = [];

    function backtrack(index) {
        if (index === digits.length) {
            permutations.push(digits.slice().join(''));
            return;
        }

        const used = new Set();
        for (let i = index; i < digits.length; i++) {
            if (used.has(digits[i])) continue;
            used.add(digits[i]);

            [digits[index], digits[i]] = [digits[i], digits[index]]; // Swap
            backtrack(index + 1);
            [digits[index], digits[i]] = [digits[i], digits[index]]; // Revert the swap
        }
    }

    backtrack(0);
    return permutations;
}




function Calculatearrange() {
    if (numArray.length == 5) {
        const number = parseInt($("#arrangeBet").text());
        const permutations = generatePermutations(number);
        return parseInt($("#qtyarrange").text()) * parseInt($("#hpricearrange").text()) * permutations.length;
    } else {
        return 0;
    }
}
function Calculateqtyarrange() {
    if (numArray.length == 5) {
        const number = parseInt($("#arrangeBet").text());
        const permutations = generatePermutations(number);
        return parseInt($("#qtyarrange").text()) * parseInt($("#hpricearrange").text()) * permutations.length;
    } else {
        return 0;
    }
}
function calculateTotalamount() {
    var eleAmount = $(".re_calu");
    var element = 0;
    for (var i = 0; i < eleAmount.length; i++) {
        element += parseInt(eleAmount.eq(i).text())
    }
    $("#TotalAmount").text(element);
}
// easynum singlebet

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


    } else {
        $('#qty').append();
        numArrayQty.push();
    }
    $('#Cqty').text(CalculateQty);
    $('#amt').text(Calculate);
    //    console.log(numArrayQty.pop()) ;
    //     // limit_numqty();
}
//del qty
function easy_numpad_del_qty() {
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
    $('#Cqty').text(CalculateQty);
    $('#amt').text(Calculate);
}
//easynum price
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
        $('#amt').text(Calculate);
    } else {
        $('#hprice').append();
        numArrayPrice.push();
    }
}
//del price
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
    $('#amt').text(Calculate);
}
//single qtysingle
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
    //    console.log(numArrayQty.pop()) ;
    //     // limit_numqty();
}
//del qtysingle
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
//price single
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
//del price
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
//qty range
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

        $('#amtrang').text(Calculaterang());
    } else {
        $('#qtyrang').append();
        numArrayQtyrang.push();
    }
    //    console.log(numArrayQty.pop()) ;
    //     // limit_numqty();
}
//Qty del
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
//Price rang
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
//Price del
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
//single bet
function easynum() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArray.length < 5) {
        $('#singebet').append(easy_num_value);
        numArray.push(easy_num_value);
    }
    $("#amtsingle").text(Calculatesingle());
    // limit_num()
}
//del single bet
function easy_numpad_del() {
    event.preventDefault();
    var easy_numpad_output_val = $('#singebet').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#singebet').text(easy_numpad_output_val_deleted);
    numArray.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    $("#amtsingle").text(Calculatesingle());
}
// easynum range Start
function rangenumStart() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArray.length < 5) {
        $('#rangeStart').append(easy_num_value);
        numArray.push(easy_num_value);
    }
    $("#amtrang").text(Calculaterang())
    // limit_num()
}
//del range start
function easy_numpad_del_rangeStart() {
    event.preventDefault();
    var easy_numpad_output_val = $('#rangeStart').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#rangeStart').text(easy_numpad_output_val_deleted);
    numArray.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    $("#amtrang").text(Calculaterang())
}
// easynum range End
function rangenumEnd() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArrayEnd.length < 5) {
        $('#rangeEnd').append(easy_num_value);
        numArrayEnd.push(easy_num_value);
    }
    $("#amtrang").text(Calculaterang())

    // limit_numEnd()
}
//del rangend
function easy_numpad_del_rangeEnd() {
    event.preventDefault();
    var easy_numpad_output_val = $('#rangeEnd').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#rangeEnd').text(easy_numpad_output_val_deleted);
    numArrayEnd.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    $("#amtrang").text(Calculaterang())
}
// easynum arrange
function numarrange() {
    event.preventDefault();
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }

    var easy_num_button = $(event.target);
    var easy_num_value = easy_num_button.val();
    if (numArray.length < 5) {
        $('#arrangeBet').append(easy_num_value);
        numArray.push(easy_num_value);
        $("#amtarrange").text(Calculatearrange())
        $("#Cqtyarrange").text(Calculateqtyarrange())
    }



}
//del arrange
function del_arrange() {
    event.preventDefault();
    var easy_numpad_output_val = $('#arrangeBet').text();
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    $('#arrangeBet').text(easy_numpad_output_val_deleted);
    numArray.pop(easy_numpad_output_val_deleted);
    $('.key').removeClass('disable-key')
    $("#amtarrange").text(Calculatearrange())
    $("#Cqtyarrange").text(Calculateqtyarrange())
}
//Qty arrange
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
    //    console.log(numArrayQty.pop()) ;
    //     // limit_numqty();
}
//del qty arrange
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
    $('#Cqtyarrange').text(Calculateqtyarrange());
    $('#amtarrange').text(Calculatearrange());
}
//price arrange
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
//del price
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
    $('#amtarrange').text(Calculatearrange());
}
/// for use next time
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