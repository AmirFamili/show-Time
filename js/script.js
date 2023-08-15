$(document).ready(function () {

    window.onscroll = (function () {
        const navbar = $(".navbar");
        if ($(this).scrollTop() > 30) {

            navbar.addClass('navbar-bg');
        } else {
            navbar.removeClass('navbar-bg');
        }

    });
function updateTime(){


    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const date=d.getDate();
    const month=d.getMonth()+1;
    const year=d.getFullYear();
   
    $("#time").html(hours+":"+minutes+ "<br>" +month+"/"+ date+"/"+year)
}
setInterval(updateTime,10000);



});