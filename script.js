const container = document.querySelector('.container')
const count = document.getElementById('count')
const amount = document.getElementById('amount')
const select = document.getElementById('movie')
const seats = document.querySelectorAll('.seat:not(.reserved)')

// container.addEventListener('click',function(){
//   console.log(this)
// })

get_from_locale_storage()
calcTotal()

container.addEventListener('click',function(e){
  if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved') ){
    e.target.classList.toggle('selected')
    calcTotal()
  }
})

select.addEventListener('change',function(){
  calcTotal()
})


function calcTotal(){
  const selected_seats = container.querySelectorAll('.seat.selected')
  const selected_seats_count = selected_seats.length
  
  const selected_seats_array = []
  const seats_array = []

  selected_seats.forEach(seat => selected_seats_array.push(seat))
  seats.forEach(seat => seats_array.push(seat))

  let selected_seats_indexz = selected_seats_array.map(seat => seats_array.indexOf(seat))

  count.innerHTML  = selected_seats_count
  amount.textContent = select.value * selected_seats_count
  save_to_locale_storage(selected_seats_indexz)
}

function get_from_locale_storage(){
  const selected_seats = JSON.parse(localStorage.getItem('selected_seats'))
  if(selected_seats != null && selected_seats.length > 0){
    seats.forEach((seat, index) => {
      if(selected_seats.indexOf(index) > -1){
        seat.classList.add('selected')
      }
      
    })
  }

  const selected_movie_index = JSON.parse(localStorage.getItem("selected_movie_index"))
  if(selected_movie_index != null){
    select.selectedIndex = selected_movie_index
  }
}



function save_to_locale_storage(index){
  localStorage.setItem("selected_seats",JSON.stringify(index))
  localStorage.setItem("selected_movie_index",select.selectedIndex)
}