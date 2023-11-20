
var close = $(".close-bt")
var fucus = $(".ip-bet");
var result = $('#result');
var keypad = $('#keypad');
var numberButtons = $('.number-key');
var deleteButton = $('#delete');
var clearButton = $('#clear');
var postArr = [];
var numbet = []
var cartArray = []

$('.post').each(function () {
    if ($(this).hasClass('active-bt')) {
        postArr.push($(this).text());
    }
    $(this).click(function () {
        $(this).toggleClass('active-bt')
        if ($(this).hasClass('active-bt')) {
            postArr.push($(this).text());
            if (postArr.length == 5) {
                $('.post-all').addClass('active-bt');
            }
        } else {
            var index = postArr.indexOf($(this).text());
            if (index > -1) {
                postArr.splice(index, 1);
                $('.post-all').removeClass('active-bt');
                if (postArr.length == 0) {
                    $(this).addClass('active-bt')
                    postArr.push($(this).text());

                }
            }
        }
    });
});

$('.post-all').click(function () {
    postArr = []
    $(this).toggleClass('active-bt')
    var btn = $('.post');
    btn.toggleClass('active-bt');
    if (btn.hasClass('active-bt')) {
        btn.addClass('active-bt');
    }

    btn.each(function () {
        if ($(this).hasClass('active-bt')) {
            postArr.push($(this).text());

        } else {
            if (postArr.length == 0) {
                postArr.push("Group A");
            }
            $('.post:first').addClass('active-bt');
        }
    });

});

$('.num-bet').each(function () {
    if ($(this).hasClass('active-bt')) {
        numbet.push($(this).text());
    }
    $(this).click(function () {
        $(this).toggleClass('active-bt')
        if ($(this).hasClass('active-bt')) {
            numbet.push($(this).text());
        } else {
            var index = numbet.indexOf($(this).text());
            if (index > -1) {
                numbet.splice(index, 1);
            }
        }
    });
});

$('.numbet-row').each(function () {
    $(this).click(function () {
        var btn = $(this).siblings();
        btn.toggleClass('active-bt');
        if (btn.hasClass('active-bt')) {
            btn.addClass('active-bt');
        }

        btn.each(function () {
            if ($(this).hasClass('active-bt')) {
                numbet.push($(this).text());
                numbet=Array.from(new Set(numbet));
            } else {
                var index = numbet.indexOf($(this).text());
                if (index > -1) {
                    numbet.splice(index, 1);
                }
            }
        });
    });
    
})

$(".in-200").each(function () {
    $(this).click(function () {
        $(this).toggleClass("active-bt")
        if ($(this).hasClass("active-bt")) {
            $(this).siblings().removeClass("active-bt")
            result.text($(this).text())
        } else {
            result.text("100")
        }

    })
})
fucus.on("click", function () {
    result.text("")
    keypad.removeClass("d-none")
})
close.on("click", function () {
    keypad.addClass("d-none")
})

numberButtons.click(function () {
    var number = $(this).text();
    var currentResult = result.text().replace(/,/g, '');
    var newResult = parseInt(currentResult + number);

    // Limit to 10,000,000
    newResult = Math.min(newResult, 10000000);

    // Format with commas
    result.text(newResult.toLocaleString());

});

deleteButton.click(function () {
    var currentResult = result.text();
    result.text(currentResult.slice(0, -1));
});
function calculateTotalamount() {
    var eleAmount = $(".re_calu");
    var element = 0;
    for (var i = 0; i < eleAmount.length; i++) {
        element += parseInt(eleAmount.eq(i).text())
    }
    $("#TotalAmount").text(element);
}
clearButton.click(function () {
    result.text('');
});
$('.inner-cart').on('click', '.item-add1', function () {
    $(this).closest('li').remove();
    var Remaining = parseInt($("#TotalAmount").text()) - parseInt(($(this).siblings(".b-buy-detail").text()).slice(2, -1))
    $("#TotalAmount").text(Remaining);
});
$("#selected").on("click", function () {
    
    if (result.text() !== "" > 99 && numbet.length !== 0) {
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + numbet.join('+') + ` |Super1/99-ZX|SPC|</span><span class="re_calu">` + (parseInt(result.text().replace(/,/g, ''))) * postArr.length * numbet.length + `R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
        $(".num-bet").removeClass("active-bt")
        result.text("100")
        numbet.length = 0;
        $(".in-200").removeClass("active-bt")

    }
    calculateTotalamount()
})
