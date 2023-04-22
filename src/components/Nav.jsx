import {useState} from 'react'
import navLinks from './Constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="nav">
        <div className="wrapper">
        <a href="#top" className="logo">
          <h3 className="logo__title">unbuild.</h3>
          <p className="logo__subtitle">демонтаж зданий</p>
        </a>
        <ul className="nav__list">
          {
            navLinks.map( nav => (
              <li key={nav.id} className="nav__item">
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))
          }
        </ul>

        <div className="nav--mobile">
          <FontAwesomeIcon className="nav__toggle" icon={toggle ? faXmark : faBars} 
            onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`nav__list--container ${toggle ? 'flex' : 'hidden'}`}>
            <ul className="nav__list--mobile">
              {
                navLinks.map( nav => (
                  <li key={nav.id} className="nav__item" onClick={() => setToggle((prev) => !prev)}>
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>         
    </nav>
  )
}

export default Nav