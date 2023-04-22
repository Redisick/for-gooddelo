
import { Parallax } from 'react-scroll-parallax';



const Hero = () => {

  return (
    <div className="hero" id="hero">
      <div className="layers">
        <Parallax className='layer layers__base' speed={-40}>
        </Parallax>
        <Parallax className='layer layers__back' speed={-30}>
          <div className="wrapper">
            <h1 className="layers__caption">
              Освободим участок <br />
              для новых построек.
            </h1>
          </div>         
        </Parallax>
        <Parallax className='layer layers__mid' speed={-20}>
        </Parallax>
        <div className='layer layers__front'>
          <div className="wrapper">
            <img className="house" src="/house.png" alt=""/>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default Hero