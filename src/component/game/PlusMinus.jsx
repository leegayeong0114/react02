import { React, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const PlusMinus = (props) => {

  const [ number, setNumber ] = useState(0)

  const plusMinusNumber = (_type) => {
    if(_type === 'plus') {
      setNumber(number + 1) 
    } 
    else if(_type === 'minus') {
      setNumber(number - 1)
    }
    else if(_type === 'init'){
      setNumber(0)
    }
  }

  return (
    <>
      <Button variant="outline-danger" onClick={() => plusMinusNumber('init')}>init</Button>
      <span> {number} </span>
      <ButtonGroup>
        <Button variant="outline-success" onClick={() => plusMinusNumber('plus')}>+</Button>
        <Button variant="outline-success" onClick={() => plusMinusNumber('minus')}>-</Button>
      </ButtonGroup>
    </>
  )
}

export default PlusMinus
