import { React, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, FloatingLabel, Form } from 'react-bootstrap'

const Update = () => {

  const _boardNo = useParams().boardNo

  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    getBoardDetail()
  }, [])

  const getBoardDetail = () => {
    return axios
      .get(
        `${process.env.REACT_APP_API_URL}/board/api/select-board`,
        {
          params: {
            boardNo: _boardNo
          }
        }
      )
      .then((resp) => {
        setTitle(resp.data.boardTitle)
        setContent(resp.data.boardContent)
      })
  }

  const handleChangeInput = (e) => {
    console.log(e)
    setTitle(e.target.value)
    console.log(title)
  }

  const handleChangeText = (e) => {
    setContent(e.target.value)
  }

  const handleCancleClick = (e) => navigate(`/react02/ax/${_boardNo}`)

  const handleSubmitAction = (e) => {
    return axios
      .post(
        `${process.env.REACT_APP_API_URL}/board/api/update-board`, 
        null,
        {
          params: {
            boardNo: _boardNo,
            boardTitle: title,
            boardContent: content
          }
        }
      ).then((resp) => {
        navigate(`/react02/ax/${_boardNo}`)
      })
  }

  return (
    <>
      <Form>
        {/* title area */}
        <FloatingLabel className="mb-3" controlId="floatingInput" label={`title (${title.length})`}>
          <Form.Control type="text" placeholder='Leave title' onChange={handleChangeInput} value={title}></Form.Control>
        </FloatingLabel>

        {/* content area */}
        <FloatingLabel className="mb-3" controlId="floatingTextarea" label={`content (${content.length})`}>
          <Form.Control as="textarea" placeholder="Leave content" style={{ height: '100px' }} onChange={handleChangeText} value={content}></Form.Control>
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

export default Update