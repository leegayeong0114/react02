import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Table, Button, Stack } from 'react-bootstrap'

const List = (props) => {

  const [contents, setContents] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    getBoardList()
  }, [])

  const getBoardList = () => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/board/api/select-board-list`)
      .then((resp) => {
        setContents(resp.data)
      })
  }

  const handleRegistClick = () => {
    navigate('/ax/regist')
  }

  return (
    <>
      {/* table area */}
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>no</th>
            <th>title</th>
            <th>content</th>
          </tr>
        </thead>
        <tbody>
          {contents && contents.map((item, i) => (
            <tr key={i}>
              <td>{item.boardNo}</td> 
              <td>
                <Link to={`/ax/${item.boardNo}`}>
                  {item.boardTitle} 
                </Link>
              </td>
              <td>{item.boardContent}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* buttion area */}
      <Stack direction="horizontal">
        <Button className="ms-auto" variant='secondary' size="sm" onClick={handleRegistClick}>regist</Button>
      </Stack>
    </>
  )
}

export default List