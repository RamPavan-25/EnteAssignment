import {Navigate, useNavigate} from 'react-router-dom'
import './index.css'
const Genre = (props) => {
  let count=0;
  let arr=[false,false,false,false,false,false,false,false];
  let GenreFun=(id)=>{
      if(arr[id-1]==false)
      {
        arr[id-1]=true;
        let x=`Genre${id}`;
        document.getElementById(x).classList.toggle('genreChangeBorder');
        count++;
      }
      else
      {
        arr[id-1]=false;
        let x=`Genre${id}`;
        document.getElementById(x).classList.toggle('genreChangeBorder');
        count--;
      }
      if(count===3)
      {
        const navigate = props.navigate
        navigate('/memes', { replace: true })
      }  
  }
  return(<>
    <div className='genre-full-background'>
        <div className='genre-second-background'>
            <h1 className='genre-heading'>CHOOSE ANY THREE PREFERABLE GENRE AGENT</h1>
            <div className='genre-third-background'>
                <div className='genre-fourth-background'>
                    <div className='card-background' onClick={()=>GenreFun(1)} id="Genre1">
                        <img src='https://i.postimg.cc/9QYZ13M8/Untitled.png' className='genre-card-img'/>
                        <h1 className='card-heading'>Anime</h1>
                    </div>
                    <div className='card-background' onClick={()=>GenreFun(2)} id="Genre2">
                        <img src='https://i.postimg.cc/Wb2zKyhD/Oppenheimer.avif' className='genre-card-img'/>
                        <h1 className='card-heading'>Boys</h1>
                    </div>
                    <div className='card-background' onClick={()=>GenreFun(3)} id="Genre3">
                        <img src='https://i.postimg.cc/1ts4Q7JY/blackcatzoningout-meme.jpg' className='genre-card-img'/>
                        <h1 className='card-heading'>Cats & Dogs</h1>
                    </div>
                    <div className='card-background' onClick={()=>GenreFun(4)} id="Genre4">
                        <img src='https://i.postimg.cc/SRsDsrgm/pexels-photo-1954524.jpg' className='genre-card-img'/>
                        <h1 className='card-heading'>Life Style</h1>
                    </div>
                </div>
                <div className='genre-fifth-background'>
                    <div className='card-background' onClick={()=>GenreFun(5)} id="Genre5">
                        <img src='https://i.postimg.cc/85YRzV9z/komar-fototapeten-marvel.jpg' className='genre-card-img'/>
                        <h1 className='card-heading'>Fantasy</h1>
                    </div>
                    <div className='card-background' onClick={()=>GenreFun(6)} id="Genre6">
                        <img src='https://i.postimg.cc/fy61Xptw/download-1.jpg' className='genre-card-img'/>
                        <h1 className='card-heading'>Girls</h1>
                    </div>
                    <div className='card-background' onClick={()=>GenreFun(7)} id="Genre7">
                        <img src='https://i.postimg.cc/D0dYJ0Tc/maxresdefault.jpg' className='genre-card-img'/>
                        <h1 className='card-heading'>Money</h1>
                    </div>
                    <div className='card-background' onClick={()=>GenreFun(8)} id="Genre8">
                        <img src='https://i.postimg.cc/MGqHVrVb/einstein.webp' className='genre-card-img'/>
                        <h1 className='card-heading'>Studies</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>)
}

export default (props)=>{
  const navigate=useNavigate();
  return(<Genre {...props} navigate={navigate}/>)
}