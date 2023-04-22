import React from 'react'
import Button from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faTree } from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    id: "service-1",
    title: "Lorem ipsum",
    desc: "Pellentesque vulputate placerat tortor at molestie. Nam et arcu ante. "+
    "Nulla posuere in risus ac condimentum. Nulla facilisi. Praesent eleifend.",
    icon: <FontAwesomeIcon icon={faHouse} />
  },
  {
    id: "service-2",
    title: "Dolor",
    desc: "In vitae erat augue. Sed rutrum dolor pretium turpis elementum.",
    icon: <FontAwesomeIcon icon={faUser} />
  },
  {
    id: "service-3",
    title: "Sit amet",
    desc: "Etiam venenatis mi eget elit tincidunt auctor. Suspendisse potenti. Donec placerat, ligula ac pellentesque molestie.",
    icon: <FontAwesomeIcon icon={faTree} />
  }
];

const Info = () => {
  return (
    <div className='info' id="info">
      <div className="wrapper">
        <div className='layer layer--transition'></div>  
        <h2 className='info__title'>
            Услуги
        </h2>
        
        <ul className="services cards">
          {
            services.map( serv => (
              <li key={serv.id} className="service card">
                <h3 className='service__title card__title'>
                  {serv.icon} {serv.title}
                </h3>
                <p className='service__desc'>
                  {serv.desc}
                </p>
              </li>
            ))
          }
        </ul>
        <Button />
      </div>  
    </div>
  )
}

export default Info