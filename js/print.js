function gotPrint(){
    $("#addRow").html(getRow());
    function getRow() {
        var tr = ""
        for (var i = 0; i < $(".list-group-item").length; i++) {
            tr += `<tr><td>` + $(".txt-f-arr1").eq(i).text() + `</td><td>` + $(".re_calu").eq(i).text() + `</td></tr>`
        }
        return tr;
    }
    $("#pri-result").text($("#TotalAmount").text() + "R");
}
$(".buyBCart").on("click", function () {
   gotPrint()
})

$("#randFive637").on("click", function () {
   gotPrint()
})

$(".buyTwoD").on("click", function () {
   gotPrint()
})

$(".buySigle").on("click", function () {
   gotPrint()
})
$(".buySingle").on("click", function () {
   gotPrint()
})
$(".buy-key-rang").on("click", function () {
   gotPrint()
})

$(".buyArrang").on("click", function () {
   gotPrint()
})

$(".buyThreeD").on("click", function () {
   gotPrint()
})

$("#srandOne").on("click", function () {
   gotPrint()
})

$("#srandFive").on("click", function () {
   gotPrint()
})
$(".buyArrang3d").on("click", function () {
   gotPrint()
})

$(".key-print").click(function () {
   // window.android.printerJson(jsondata)
   var jsondata = "[\n" +
   "  {\"code\": \"7 |6/37-ZX|SPC|\", \"value\": \"1000R\"},\n" +
   "  {\"code\": \"7 |6/37-ZX|SPC|\", \"value\": \"1000R\"},\n" +
   "  {\"code\": \"22 |6/37-ZX|SPC|\", \"value\": \"1000R\"},\n" +
   "  {\"code\": \"37 |6/37-ZX|SPC|\", \"value\": \"1000R\"},\n" +
   "  {\"code\": \"9 |6/37-ZX|SPC|\", \"value\": \"1000R\"}\n" +
   "]";
   window.android.printerString(jsondata);
   //  if (($("#TotalAmount").text() == "") || (parseInt($("#TotalAmount").text()) < 1000)) {
   //      $(this).removeAttr("data-target");
   //  } else {
   //      window.print()
   //  }

})