let gameChoices = document.querySelectorAll('img')
let total = 0
let wins = 0
let losses = 0
let moneyWon = 0
let moneyLost = 0
console.log("you are on roulette")

gameChoices.forEach( poke => poke.addEventListener('click', (e)=>{
    let aiChoice = Math.floor(Math.random() * 3) // 0, 1, or 2
    let pokemon = ['bulbasaur', 'shuppet', 'charizard']
    let amountBet = parseInt(document.querySelector('#bet').value)
    console.log("You bet " + amountBet)
    console.log("You chose: " + e.target.id)
    console.log(pokemon[aiChoice])
    // if computer chooses 0
    // then console will show bulbasaur
    // check if player chose bulbasaur or something else

    // win conditions
    // loss conditions
    if(e.target.id === pokemon[aiChoice]){
      moneyWon += amountBet // adds total money won
      console.log(Number.isInteger(moneyWon, amountBet), ' , sadly not a number')
      total += amountBet // adds total of money you can bet
      wins++
      console.log(`you won ${amountBet}`)
      document.querySelector('.youWon').innerText = `you won ${amountBet}`
      setTimeout(function clearResults(){
        document.querySelector('.youLost').innerText = ''
        document.querySelector('.youWon').innerText = ''
        document.querySelector('.yourTotal').innerText = `what you got all together ${total}`
      
        console.log(total)
      }, 2000) 
    }
    else{
      //create a separate function using the set timeout function so then it pastes
      moneyLost += amountBet
      console.log(moneyLost)
      console.log(Number.isInteger(moneyLost, amountBet), ' , sadly not a number')
      total -= amountBet //because they are string like elements, I need to convert them back to numbers for add/subtract purposes?
      losses++
      console.log(`you lost ${amountBet}`)
      document.querySelector('.youLost').innerText = `you lost ${amountBet}`
      setTimeout(function clearResults(){
        document.querySelector('.youLost').innerText = ''
        document.querySelector('.youWon').innerText = ''
        document.querySelector('.yourTotal').innerText = `what you got all together ${total}`
      
        console.log(total)
      }, 2000) 
    }
    // fetch
    // send win, loss, money won, money loss to profile
    fetch('updateOverallStats', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'wins': wins,
        'losses': losses,
        'total': total,
        'moneyWon': moneyWon,
        'moneyLost': moneyLost
      })
    })
  }) 
) 



var trash = document.getElementsByClassName("fa-dumpster")

Array.from(trash).forEach(function(element) {
  
  element.addEventListener('click', function(){
    
    console.log(element.id)
    fetch('deletePlayerInfo', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id" : element.id
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});


///function to clear the winners placements 










//only allows the admin to log in, so we have to think about that
//game logic
//create a whole game board (cssgrid)
//randomly place color into the boxes (green reds and blacks)
//function that allows the group to place their bet 
//hve an array with images, and then from math.random we randomly place those images into the sections on the dom? 
  //




// params (on profile): win, loss, how much they bet
// after a round: the difference- how much they won, how much they lost