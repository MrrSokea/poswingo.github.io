
var close = $(".close-bt")
var fucus = $(".ip-bet");
var result = $('#result');
var keypad = $('#keypad');
var numberButtons = $('.number-key');
var deleteButton = $('#delete');
var clearButton = $('#clear');
var betani = []

$('.bet-bt').each(function () {
    var data=$(this).find(".get-text").text()
    if ($(this).hasClass('active-bt')) {
        betani.push(data);
    }
    $(this).click(function () {
        $(this).toggleClass('active-bt')
        if ($(this).hasClass('active-bt')) {
            betani.push(data);
        } else {
            var index = betani.indexOf(data);
            if (index > -1) {
                betani.splice(index, 1);
            }
        }
        console.log(betani)
    });
    
});

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
    if (result.text() !== "" > 99 && betani.length !== 0) {
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span class="txt-f-arr1"> ` + betani.join('+') + ` |Fortune-ZX|SPC|</span><span class="re_calu">` + (parseInt(result.text().replace(/,/g, ''))) * betani.length + `R</span><a class="item-add" href="#"><img src="./img/close.webp" alt="" height="20px"></a></li>`);
        $(".bet-bt").removeClass("active-bt")
        result.text("100")
        betani.length = 0;
        $(".in-200").removeClass("active-bt")

    }
    calculateTotalamount()
})
