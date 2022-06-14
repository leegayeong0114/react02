import { React, useState } from 'react'
import '../../../asset/css/game/landmine.css'
import LandMineDiv from './LandMineDiv'

const LandMine = () => {

  const [modeNum, setModeNum] = useState(3)

  const changeModeNum = (mode_num) => {
    setModeNum(mode_num)
  }

  return (
    <div>
      <button type="button" onClick={() => changeModeNum(3)}>3 X 3</button>
      <button type="button" onClick={() => changeModeNum(4)}>4 X 4</button>
      <button type="button" onClick={() => changeModeNum(5)}>5 X 5</button>
      <LandMineDiv modeNum={modeNum}></LandMineDiv>
    </div>
  )
}

export default LandMine
