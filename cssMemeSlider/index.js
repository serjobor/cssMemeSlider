//документ загружен
document.addEventListener("DOMContentLoaded", function(){
    let ScrollInSliderContainer = document.querySelector(".slider-container");
    let ScrollInTextrContainer = document.querySelector(".text-container");

    let oneBtn      = document.getElementById("btnOne"  );
    let btnTwo      = document.getElementById("btnTwo"  );
    let btnThree    = document.getElementById("btnThree");
    let btnFour     = document.getElementById("btnFour" );
    let btnFive     = document.getElementById("btnFive" );

    let count = 1;

    // document.querySelector(".btn-style").style.backgroundColor = "inherit";

    function ClickOnBtn(button) {
        button.addEventListener('click', ()=> {
        // document.getElementById(count).style.backgroundColor = "#3da6f1";
        // document.getElementById(count).style.borderColor = "#3da6f1";

        console.log("начальная позиция count: " + count);
            if(button.value >= count ){
                ScrollInSliderContainer.style.scrollBehavior = "smooth";
                ScrollInSliderContainer.scrollLeft += 610 * (button.value - count);
    
                ScrollInTextrContainer.style.scrollBehavior = "smooth";
                ScrollInTextrContainer.scrollLeft += 440 * (button.value - count);
    
                count = button.value;
                // document.getElementById(count).style.backgroundColor = "inherit";

            }else {
                ScrollInSliderContainer.style.scrollBehavior = "smooth";
                ScrollInSliderContainer.scrollLeft -= 610 * (count - button.value);
    
                ScrollInTextrContainer.style.scrollBehavior = "smooth";
                ScrollInTextrContainer.scrollLeft -= 440 * (count - button.value);
    
                count = button.value;
                // document.getElementById(count).style.backgroundColor = "inherit";
            }
        console.log("конечная позиция count: " + count);
        });
    }

    ClickOnBtn(oneBtn);
    ClickOnBtn(btnTwo);
    ClickOnBtn(btnThree);
    ClickOnBtn(btnFour);
    ClickOnBtn(btnFive);

});