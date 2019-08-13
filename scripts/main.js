function wordSmash(){
  let word = document.querySelector('.word')
  let wordTab = document.querySelectorAll('.word span')
  let tab = []
  let wordTrigger = true
  let spanTrigger = true
  let hoverTrigger = true
  let goBack = true

  let letter
  let staggerFrom
  wordTab.forEach(function(e) {
    tab.push(e.innerHTML)
    e.addEventListener('mouseover',function(){
        if(spanTrigger == true && hoverTrigger == true){
            spanTrigger = false
            letter = e.innerHTML
            staggerFrom = tab.indexOf(letter)
            setTimeout(function(){
                spanTrigger = true
            },1000)
        }
    })
  })
  word.addEventListener('mouseover',function(){
    if(Math.abs(event.movementY*4)>screen.height/1.6){
      console.log("oui")
      goBack = false
    }
    let cursor = document.querySelector('.cursor')
    if(wordTrigger == true && hoverTrigger == true){
        wordTrigger = false
        TweenMax.to(cursor,0,{opacity:0})
        setTimeout(function(){
            wordTrigger = true
            TweenMax.to(cursor,1,{opacity:1})
        },1000)

        TweenMax.staggerTo(wordTab, 0.5, {
            y: event.movementY*4,
            x: event.movementX*4,
            color: "#FFFFFF",
            ease: Power1.easeInOut,
            stagger: {
                from: staggerFrom,
                amount: 0.4
            }
        });
        setTimeout(
          function(){
            if (goBack == true) {
              TweenMax.staggerTo(wordTab, 0.5, {
                  y: 0,
                  x: 0,
                  color: "#000000",
                  ease: Power1.easeInOut,
                  stagger: {
                      from: staggerFrom,
                      amount: 0.4
                  }
              })
            }
            else{
              setTimeout(function(){
                word.style.display = "none"
              },200)
            }
          }
        ,500)
      }
  })
}
wordSmash()

function customCursor(){
  let cursor = document.querySelector('.cursor')
  window.addEventListener('mousemove', function(){
    cursor.style.left = event.clientX+"px"
    cursor.style.top = event.clientY+"px"
  })
}
customCursor()
