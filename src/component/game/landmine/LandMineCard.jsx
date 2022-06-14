import { React } from 'react'

let isOver = false
const LandMineCard = (props) => {

  const clickCard = (index, e) => {

    let background = 'blue'
    let innerHTML = 'pass'

    if(!isOver) {
      if(index === 0) {
        isOver = true
        background = 'red'
        innerHTML = 'fail'
        alert('fail')
      }
      e.target.style.background = background
      e.target.innerHTML = innerHTML
    }
    
  }

  return (
    <div className="card" index={props.index} onClick={clickCard.bind(this, props.ggwang)}>
      {props.index}
    </div>
  )
}

export default LandMineCard
