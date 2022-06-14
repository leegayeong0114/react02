import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Stack, Table } from 'react-bootstrap'

const Detail = () => {

  const _boardNo = useParams().boardNo
  const [content, setContent] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    getBoardDetail()
  }, )

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
        setContent(resp.data)
      })
  }

  const handleListClick = () => navigate('/react02/ax')
  const handleUpdateClick = () => navigate(`/react02/ax/update/${_boardNo}`)
  
  const handleDeleteAction = (e) => {
    return axios
      .post(
        `${process.env.REACT_APP_API_URL}/board/api/delete-board`, 
        null,
        {
          params: {
            boardNo: _boardNo,
          }
        }
      ).then(() => {
        navigate(`/react02/ax`)
      })
  }

  return (
    <>
      {/* table area */}
      {
        content ? 
          <Table striped bordered hover responsive size="sm">
            <thead>
              <tr>
                <th>no</th>
                <td>{content.boardNo}</td>
              </tr>
              <tr>
                <th>title</th>
                <td>{content.boardTitle}</td>
              </tr>
              <tr>
                <th>content</th>
                <td>{content.boardContent}</td>
              </tr>
            </thead>
          </Table>
        : ''
      }
      {/* buttion area */}
      <Stack direction="horizontal">
        <Button className="" variant='outline-secondary' size="sm" onClick={handleListClick}>list</Button>
        <Button className="ms-auto" variant='outline-primary' size="sm" onClick={handleUpdateClick}>update</Button>
        <Button variant='outline-danger' size="sm" onClick={handleDeleteAction}>delete</Button>
      </Stack>
    </>
  )
}

export default Detail