//This is for the Design page
$(function() {
    function mediaCheck(){
        if (window.matchMedia('(min-width: 768px)').matches) {
            //Changes when we reach the min-width (md size and up for bootstrap4)
            if($('#subCol1').not("div")){
                //changes only if the specific element isn't a div already
                $('#subCol1').replaceWith($('<div class="col-md-4 col-lg-4 col-xl-4" id="subCol1">' + this.innerHTML + '</div>'))
                $('#subCol2').replaceWith($('<div class="col-md-8 col-lg-8 col-xl-8" id="subCol2">' + this.innerHTML + '</div>'));
            }
        } 
        else {
            if($('subCol1').not("p")){
                //changes onlly if specific element isn't a <p> element alredy
                $('#subCol1').replaceWith($('<p id="subCol1">' + this.innerHTML + '</p>'))
                $('#subCol2').replaceWith($('<p id="subCol2">' + this.innerHTML + '</p>')); 
            }
        }
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
 