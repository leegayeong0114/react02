import Main from './../component/main/Main'
import PlusMinus from './../component/game/PlusMinus';
import LandMine from './../component/game/landmine/LandMine'
import List from './../component/axios/List'
import Detail from './../component/axios/Detail'
import Regist from './../component/axios/Regist'
import Update from './../component/axios/Update'
import Error from './../error/Error';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Router = () => {
  return (
    <Container>
      <Routes>
        <Route path='/react02' element={<Main></Main>}></Route>
        <Route path='/react02/pm' element={<PlusMinus></PlusMinus>}></Route>
        <Route path='/react02/lm' element={<LandMine></LandMine>}></Route>
        <Route path='/react02/ax' element={<List></List>}></Route>
        <Route path='/react02/ax/:boardNo' element={<Detail></Detail>}></Route>
        <Route path='/react02/ax/regist' element={<Regist></Regist>}></Route>
        <Route path='/react02/ax/update/:boardNo' element={<Update></Update>}></Route>
        <Route path='/react02/*' element={<Error></Error>}></Route>
      </Routes>
    </Container>
  )
}

export default Router
