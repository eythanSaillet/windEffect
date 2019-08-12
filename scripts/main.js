ceramicTab = document.querySelectorAll('.ceramic span')
ceramicMid = Math.floor(ceramicTab.length/2)
console.log(ceramicTab,ceramicMid);

ceramic = document.querySelector('.ceramic')

let trigger = true
let staggerTranslateX = 0
let staggerTranslateY = 0
// let hey = new TimelineMax()
ceramic.addEventListener('mouseover',function(){
    console.log(event.movementY,event.movementX)
    if(trigger == true){
        trigger = false
        setTimeout(function(){
            trigger = true
        },00)
        TweenMax.staggerTo(ceramicTab, 0.5, {
            y: event.movementY*3,
            x: event.movementX*3,
            color: "#FFFFFF",
            ease: Power1.easeInOut,
            stagger: {
                from: ceramicMid,
                amount: 0.3
            }
        });
        setTimeout(
            function(){
                TweenMax.staggerTo(ceramicTab, 0.5, {
                    y: 0,
                    x: 0,
                    color: "#000000",
                    ease: Power1.easeInOut,
                    stagger: {
                        from: ceramicMid,
                        amount: 0.3
                    }
                });
            }
            ,400
        )
    } 
})