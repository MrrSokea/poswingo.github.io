

$(".key-print").click(function(){
    if(($("#TotalAmount").text()=="")||(parseInt($("#TotalAmount").text())<1000)){
        $(this).removeAttr("data-target");
    }else{
        $(this).attr("data-target","#staticBackdrop");
        $("#addRow").html(getRow());
        function getRow(){
            var tr=""
            for(var i=0;i<$(".list-group-item").length;i++){
                tr+=`<tr><td>`+$(".txt-f-arr1").eq(i).text()+`</td><td>`+$(".re_calu").eq(i).text()+`</td></tr>`
            }
            return tr;
        }
        $("#pri-result").text($("#TotalAmount").text()+"R");
    }
})