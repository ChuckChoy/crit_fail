//This is for the Design page
$(function() {
    //var sub1 = document.getElementById("subCol1").innerHTML;
    //var sub2 = document.getElementById("subCol2").innerHTML;
    function mediaCheck(){
        //grab the contents between indicated element with id
       
        if (window.matchMedia('(min-width: 768px)').matches) {
            //Changes when we reach the min-width (md size and up for bootstrap4)
            
                //changes only if the specific element isn't a div already
                //$('#subCol1').replaceWith($('<div class="col-md-4 col-lg-4 col-xl-4" id="subCol1">' + sub1 + '</div>'));
                //$('#subCol2').replaceWith($('<div class="col-md-8 col-lg-8 col-xl-8" id="subCol2">' + sub2 + '</div>'));
                //$('#subCol1').replaceWith($(sub1).contents().wrap('<div class="col-md-4 col-lg-4 col-xl-4" id="subCol1"></div>'));
                //$('#subCol2').replaceWith($(sub2).contents().wrap('<div class="col-md-8 col-lg-8 col-xl-8" id="subCol2"></div>'));
                //$('#designRow').empty().append('<div class="col-md-4 col-lg-4 col-xl-4" id="subCol1">' + sub1 + '</div>' + 
                //'<div class="col-md-8 col-lg-8 col-xl-8" id="subCol2">' + sub2 + '</div>')
                //$('#designRow').each().html('<div class="col-md-4 col-lg-4 col-xl-4" id="subCol1">' + sub1 + '</div>' + '<div class="col-md-8 col-lg-8 col-xl-8" id="subCol2">' + sub2 + '</div>')
                //$('.designRow').each(function(){
                var list = document.getElementsByClassName("designRow");
                for(var i = 0; i < list.length; i++){
                    //var sub1 = document.getElementById("subCol1").innerHTML;
                    //var sub2 = document.getElementById("subCol2").innerHTML;
                    var sub1 = $('#subCol1',list[i]).html();
                    var sub2 = $('#subCol2',list[i]).html();
                    if($('#subCol1').not("div")){
                        $(list[i]).html('<div id="subCol1" class="col-md-4 col-lg-4 col-xl-4" >' + sub1 + '</div>' + '<div id="subCol2" class="col-md-8 col-lg-8 col-xl-8" >' + sub2 + '</div>');
                    }
                }
            
        } 
        if(window.matchMedia('(max-width: 767px)').matches) {
            //changes as long as width is below a ceertain point (just below md and down for bootstrap)
            $('.designRow').each(function(){
                var sub1 = $('#subCol1',this).html();
                var sub2 = $('#subCol2',this).html();
                if($('#subCol1').not("p")){
                    $(this).parent().html('<p id="subCol1">' + sub1 + '</p>' + '<p id="subCol2">' + sub2 + '</p>');
                }
            });
        }
        /*
        else {
            if($('#subCol1').not("p")){
                //changes onlly if specific element isn't a <p> element already
                //$('#subCol1').replaceWith($('<p id="subCol1">' +sub1 + '</p>'));
                //$('#subCol2').replaceWith($('<p id="subCol2">' + sub2 + '</p>')); 
                //$('#subCol1').replaceWith($(sub1).contents().wrap('<p id="subCol1"></p>'));
                //$('#subCol2').replaceWith($(sub2).contents().wrap('<p id="subCol2"></p>')); 
                //$('#designRow').empty().append('<p id="subCol1">' + sub1 + '</p>' + '<p id="subCol2">' + sub2 + '</p>')
                $('.designRow').each(function(){
                    $(this).html('<p id="subCol1">' + sub1 + '</p>' + '<p id="subCol2">' + sub2 + '</p>');
                });
            }
        }
        */
    }

    //run the function on page start
    mediaCheck();

    //add event listening to continue to call the function
    window.addEventListener('resize',mediaCheck,false);
});
/*
function mediaCheck() {
    var x = document.getElementById("subCol1");
    var y = document.getElementById("subCol2")
    if (window.matchMedia("(max-width: 700px)").matches) {
      x.innerHTML = "The screen is less than, or equal to, 700 pixels wide.";
    } else {
      x.innerHTML = "The screen is at least 700 pixels wide.";
    }
  }
  */
 $(document).ready(function(){
    $('.carousel').carousel();
    });    
 