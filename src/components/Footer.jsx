import navLinks from './Constants';
import Button from './Button';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <ul className="footer__list">
          {
            navLinks.map( nav => (
              <li key={nav.id} className="footer__item">
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))
          }
          <li className="footer__item">
            <a className="name" target='_blank' href="https://redisick.github.io/portfolio-2-0/">Redisick</a>
          </li>
          <li className="footer__item">
              2023
          </li>
        </ul>
        <ul className='footer__list'>
        <li className="footer__item">Landscape by <a className="name" href="https://unsplash.com/@nngvandenberg" target="_blank">Nick van den Berg</a> </li>
        <li className="footer__item">House pictures by:</li>
        <li className="footer__item"><a className="name" href="https://unsplash.com/@thejohnnyme" target="_blank"> Nikola Johnny Mirkovic</a>,</li>
        <li className="footer__item"><a className="name" href="https://unsplash.com/@mejlivg" target="_blank"> Guillaume Didelet</a>,</li>
        <li className="footer__item"><a className="name" href="https://unsplash.com/@anniespratt" target="_blank"> Annie Spratt</a></li>
        
        </ul>
      </div> 
    </footer>
  )
}

export default Footer