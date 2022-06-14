import './App.css';
import Header from './component/common/Header'
import Footer from './component/common/Footer'
import Router from './router/Router'
import { BrowserRouter, } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Router></Router>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
