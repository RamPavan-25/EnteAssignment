import {Navigate, useNavigate} from 'react-router-dom'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import './index.css'
import { Component,React } from 'react'
class Memes extends Component {
  state={
    arr:[],
    after:""
  }

   async componentDidMount(){
        let response=await fetch("https://www.reddit.com/r/memes.json")
        let res=await response.json();
        this.setState({arr:res.data.children,after:res.data.after});
        document.addEventListener('scroll', this.trackScrolling);
   }

   componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }
  
  trackScrolling = async() => {
    const wrappedElement = document.getElementById('header');
    if (this.isBottom(wrappedElement)) {
      let response=await fetch(`https://www.reddit.com/r/memes.json?after=${this.state.after}`);
      let res=await response.json();
      let temp=this.state.arr;
      temp=temp.concat(res.data.children);
      this.setState({arr:temp,after:res.data.after})
    }
  };

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

   render(){
    let temp=this.state.arr
    let x=0;
    return(<>
           <div id="header" className='meme-background'>
            <h1 className='meme-heading'>Agent your Misson: Take a break to have fun </h1>
            <Gallery >
                    {temp.map((el)=>{
                        x++ 
                        return(<Item
                        original={el.data.url_overridden_by_dest}
                        thumbnail={el.data.thumbnail}
                        width="790"
                        height="550"
                        key={x}
                        >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} src={el.data.url_overridden_by_dest} className='meme-img-size'/>
                        )}
                        </Item>)
                    })}
                </Gallery>
           </div>
        </>)
   }
}

export default (props)=>{
  const navigate=useNavigate();
  return(<Memes {...props} navigate={navigate}/>)
}