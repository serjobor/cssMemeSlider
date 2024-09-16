//документ загружен
document.addEventListener("DOMContentLoaded", function(){
    let ScrollInSliderContainer = document.querySelector(".slider-container");
    let ScrollInTextrContainer = document.querySelector(".text-container");

    let oneBtn      = document.getElementById("btnOne");
    let btnTwo      = document.getElementById("btnTwo");
    let btnThree    = document.getElementById("btnThree");
    let btnFour     = document.getElementById("btnFour");
    let btnFive     = document.getElementById("btnFive");

    let count = 0;

    const arrButtons = [oneBtn, btnTwo, btnThree, btnFour, btnFive];

    oneBtn.classList.add("active-btn");

    const screenWidth = window.innerWidth;

    function addHoleInBtn(){
        for(let i in arrButtons){
            if(i === count){
                arrButtons[i].classList.remove("active-btn");
            }
        }
    }

    function ClickOnBtn(button) {
        button.addEventListener('click', ()=> {
            // console.log("начальная позиция count: " + count);

            oneBtn.classList.remove("active-btn");

            addHoleInBtn();
            button.classList.add("active-btn");

            if(button.value >= count ){
                if(screenWidth > 650){
                    ScrollInSliderContainer.style.scrollBehavior = "smooth";
                    ScrollInSliderContainer.scrollLeft += 610 * (button.value - count);
                    
                    ScrollInTextrContainer.style.scrollBehavior = "smooth";
                    ScrollInTextrContainer.scrollLeft += 440 * (button.value - count);
                }else if (screenWidth > 500) {
                    ScrollInSliderContainer.style.scrollBehavior = "smooth";
                    ScrollInSliderContainer.scrollLeft += 460 * (button.value - count);
        
                    ScrollInTextrContainer.style.scrollBehavior = "smooth";
                    ScrollInTextrContainer.scrollLeft += 440 * (button.value - count);
                } else {
                    ScrollInSliderContainer.style.scrollBehavior = "smooth";
                    ScrollInSliderContainer.scrollLeft += 410 * (button.value - count);
        
                    ScrollInTextrContainer.style.scrollBehavior = "smooth";
                    ScrollInTextrContainer.scrollLeft += 410 * (button.value - count);
                }
                count = button.value;

            }else {
                if(screenWidth > 650){
                    ScrollInSliderContainer.style.scrollBehavior = "smooth";
                    ScrollInSliderContainer.scrollLeft -= 610 * (count - button.value);
        
                    ScrollInTextrContainer.style.scrollBehavior = "smooth";
                    ScrollInTextrContainer.scrollLeft -= 440 * (count - button.value);
                }else if (screenWidth > 500) {
                    ScrollInSliderContainer.style.scrollBehavior = "smooth";
                    ScrollInSliderContainer.scrollLeft -= 460 * (count - button.value);
        
                    ScrollInTextrContainer.style.scrollBehavior = "smooth";
                    ScrollInTextrContainer.scrollLeft -= 440 * (count - button.value);
                } else {
                    ScrollInSliderContainer.style.scrollBehavior = "smooth";
                    ScrollInSliderContainer.scrollLeft -= 410 * (count - button.value);
        
                    ScrollInTextrContainer.style.scrollBehavior = "smooth";
                    ScrollInTextrContainer.scrollLeft -= 410 * (count - button.value);
                }
                count = button.value;
            }
        // console.log("конечная позиция count: " + count);
        });
    }

    if(screenWidth < 650){
        // location.reload();
    }

    window.addEventListener('resize', () => {
        if(screenWidth <= 650){
            location.reload();
        }

        if(screenWidth > 650){
            location.reload();
        }
    });

    ClickOnBtn(oneBtn);
    ClickOnBtn(btnTwo);
    ClickOnBtn(btnThree);
    ClickOnBtn(btnFour);
    ClickOnBtn(btnFive);

});