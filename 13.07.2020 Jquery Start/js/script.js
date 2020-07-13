$(document).ready(function(){
   
    // $("#list li").click(function(){
    //     $(this).hide();

    // })
    // let test=document.querySelectorAll("#list li");
  
    // $(document).on("click","#list li",function(){
    //     $(this).hide();
    // })

    // $(document).on("click","#Add",function(){
        //  let li=$("<li class='red'>New Li</li>");
    //     $("ul#list").append(li)
    // })

    // $(document).on("click","#stop",function(){
    //     $(".test").stop();
    // })
    
    // $(document).on("click","#Add",function(){
    //     // $(".test").toggle(1000)
    //     // .css({
    //     //     "border-radius":"50%",
    //     //     "background":"yellow"
    //     // });
    //     // $(".test").toggle(1000)
    //     // let self=$(this);
    //     // $(".test").fadeToggle(3000,function(){
    //     //     self.css("color","red")
    //     // })

    //     $(".test").slideToggle(1000);
    // })

    // let count=1;
    // $(document).on("click","#list li",function(){
    //     $(this).html(`<b>${count}</b>`)
    //     count++;
    // })

    // $(document).on("focus","#name",function(){
    //     $(this).val("Ulvi")
    // })

    // let count=1;
    // $(document).on("click","#Add",function(e){
    //     // e.preventDefault();
    //     // let li=$(`<li>${count}</li>`);
    //     // $("#list").after(li);
    //     // count++;
    //     // $("#list").remove();
    //     $("#list").empty();
    // })
    // console.log($("#p").parentsUntil("ul"))

    // console.log($("#list").find("#third").css("color","green"))

    // AJAX
    $(document).on("click","#getApi",function(){
        $.ajax({
            url:"http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=4&year=2017",
            type:"Get",
            success:function(res){
                console.log(res)
                for (const item of res.data) {
                    console.log(item.timings)
                }
            }
        })
    })

});

// window.onload=function(){

// }