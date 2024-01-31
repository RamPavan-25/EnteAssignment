import {Navigate, useNavigate} from 'react-router-dom'
import './index.css'
const Choice = (props) => {
 let choicefun=()=>{
    const navigate = props.navigate
    navigate('/genre', { replace: true })
 }
  return(<>
    <div className='choice-full-background'>
        <div className='choice-second-background'>
            <img src='https://i.postimg.cc/bvgxr44t/spider-man-venom-logo-superhero-clip-art-spider-man-cliparts-transparent-e1cf8c1f32dd5ff99a1a3793762.png' className='choice-img'/>
            <h1 className='choice-heading'>WELCOME AGENT</h1>
            <button className='choice-button' onClick={choicefun}>Enter</button>
            <p className='choice-para'>Think twice agent there is no coming back</p>
        </div>
    </div>
  </>)
}

export default (props)=>{
  const navigate=useNavigate();
  return(<Choice {...props} navigate={navigate}/>)
}