import { React } from 'react'
import styled from 'styled-components'
import LandMineCard from './LandMineCard'

const Cards = styled.div`
  margin: 30px auto;
  width: 60%;
  display: grid;
  grid-template-columns: repeat(${props => props.cardOrder}, 1fr); 
`
const LandMineDiv = (props) => {
  
  const arrNumber = []
  for (let i = 0; i < props.modeNum * props.modeNum; i++) {
    arrNumber.push(i)  
  }
  arrNumber.sort(()=> Math.random() - 0.5)
  
  const cardList = []
  for (let i = 0; i < props.modeNum * props.modeNum; i++) {
    cardList.push(
      <LandMineCard key={i} index={i + 1} ggwang={arrNumber[i]} modeNum={props.modeNum}></LandMineCard>
      )
    }
    
  return (
    <Cards cardOrder={props.modeNum}>{cardList}</Cards>
  )
}

export default LandMineDiv
