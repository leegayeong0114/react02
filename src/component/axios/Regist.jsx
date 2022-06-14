import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

const Register = () => {

  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')

  const navigate = useNavigate()

  const handleChangeInput = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeText = (e) => {
    setContent(e.target.value)
  }

  const handleCancleClick = (e) => navigate(`/react02/ax`)

  const handleSubmitAction = (e) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/board/api/insert-board`, 
        null,
        {
          params: {
            boardTitle: title,
            boardContent: content
          }
        }
      ).then(resp => {
        navigate(`/react02/ax/${resp.data}`)
      })
  }



  return (
    <>
      <Modal>

      </Modal>
      <Form>
        {/* title area */}
        <FloatingLabel className="mb-3" controlId="floatingInput" label={`title (${title.length})`}>
          <Form.Control type="text" placeholder='Leave title' onChange={handleChangeInput} value={title}/>
        </FloatingLabel>

        {/* content area */}
        <FloatingLabel className="mb-3" controlId="floatingTextarea" label={`content (${content.length})`}>
          <Form.Control as="textarea" placeholder="Leave content" style={{ height: '100px' }} onChange={handleChangeText} value={content}/>
        </FloatingLabel>

        {/* button area */}
        <div className="d-grid gap-2">
          <Button variant='outline-danger' size="lg" onClick={handleCancleClick}>cancle</Button>
          <Button variant='secondary' size="lg" onClick={handleSubmitAction} disabled={title.length < 1 || content.length < 1}>save</Button>
        </div>
      </Form>
    </>
  )
}

export default Register