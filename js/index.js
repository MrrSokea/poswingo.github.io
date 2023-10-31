$(document).ready(function () {
    let myArray = JSON.parse(localStorage.getItem('myArray')) || [];
    var username = $("#username");
    var pass = $("#password");
    var Type=$("#typeuser")
    $("#submit").on("click", function () {
        if (pass.val() == "" && username.val() == "") {
            alert("please input username and password")
        } else if (pass.val() != "" && username.val() == "") {
            alert("please input username and password")
        }else if (pass.val() == "" && username.val() != "") {
            alert("please input username and password")
        } else {
            if (myArray.length < 1) {
                Pushdata({ name: username.val(), pass: pass.val(),Type: Type.val() })
                window.location.href = "allGame.html";
            } else {
                if((username.val()==myArray[0].name && pass.val()==myArray[0].pass) && Type.val()==myArray[0].Type){
                    window.location.href = "allGame.html";
                }else{
                    alert("Invalid username and password!!! you gmail is: <<"+myArray[0].name+">> and password is: <<"+myArray[0].pass+">> and Type User is <<"+myArray[0].Type+">>")
                }
            }

        }
        username.val("");
        pass.val("");
    })
    function Pushdata(oject) {
        myArray.push(oject);
        localStorage.setItem('myArray', JSON.stringify(myArray));
    }

    console.log(myArray)

    if(myArray[0].Type=="User"){
        $(".key-print").addClass("d-none")
        $(".buy").removeClass("d-none")
        $(".type-user").text(myArray[0].Type)
    }else{
        $(".buy").addClass("d-none")
        $(".key-print").removeClass("d-none")
        $(".type-user").text("Agent")
    }
    $(".brain").on("click",function(){
        localStorage.clear();             
        window.location.href = "index.html";
    })
  $(".buy").on("click",function(){
    $(".inner-cart").empty()
  })
});
