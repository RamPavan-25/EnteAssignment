import {Component} from 'react'
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import Choice from './Choice'
import Genre from './genre'
import Memes from './Meme'
class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <Routes>
          <Route exact path="/genre" element={<Genre/>} />
          <Route exact path="/" element={<Choice/>}/> 
          <Route exact path="/memes" element={<Memes/>}/>  
          {/* <Route path="*" element={<NotFound/>} /> */}
          </Routes>
        </BrowserRouter>)
  }
}

export default App
