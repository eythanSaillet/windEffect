word = document.querySelector('.word')
wordTab = document.querySelectorAll('.word span')
let tab = []
let wordTrigger = true
let spanTrigger = true
let letter
let staggerFrom
wordTab.forEach(function(e) {
    tab.push(e.innerHTML)
    e.addEventListener('mouseover',function(){
        if(spanTrigger == true){
            spanTrigger = false
            letter = e.innerHTML
            staggerFrom = tab.indexOf(letter)
            console.log(staggerFrom)
            setTimeout(function(){
                spanTrigger = true
            },1000)
        }
    })
  })
word.addEventListener('mouseover',function(){
    if(wordTrigger == true){
        wordTrigger = false
        setTimeout(function(){
            wordTrigger = true
        },1000)
        
        TweenMax.staggerTo(wordTab, 0.5, {
            y: event.movementY*3.5,
            x: event.movementX*3.5,
            color: "#FFFFFF",
            ease: Power1.easeInOut,
            stagger: {
                from: staggerFrom,
                amount: 0.4
            }
        });
        setTimeout(
            function(){
                TweenMax.staggerTo(wordTab, 0.5, {
                    y: 0,
                    x: 0,
                    color: "#000000",
                    ease: Power1.easeInOut,
                    stagger: {
                        from: staggerFrom,
                        amount: 0.4
                    }
                });
            }
            ,500
        )
    } 
})