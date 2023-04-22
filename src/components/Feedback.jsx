import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

const testimonials = [
  {
    id: "t-1",
    name: "Jane",
    title: "Posuere in risus ac condimentum.",
    text: "In vulputate placerat tortor at molestie. Nam et arcu ante. "+
    "Nulla posuere in risus ac condimentum. Nulla facilisi. Praesent eleifend."
  },
  {
    id: "t-2",
    name: "Jonh",
    title: "Sed rutrum dolor pretium turpis elementum!",
    text: "Pellentesque vulputate placerat tortor at molestie. Nam et arcu ante. "+
    "Nulla posuere in risus ac condimentum. Nulla facilisi. Praesent eleifend. " +
    "In vitae erat augue. Sed rutrum dolor pretium turpis elementum!"
  },
  {
    id: "t-3",
    name: "Julie",
    title: "Suspendisse potenti.",
    text: "Etiam venenatis mi eget elit tincidunt auctor. Suspendisse potenti. Donec placerat, ligula ac pellentesque molestie."
  }
];


const Feedback = () => {
  return (
    <div className="feedback" id="feedback">
      <div className='wrapper'>   
      <h2 className='feedback__title'>Отзывы клиентов</h2>
        <ul className="testimonials cards">
          {
            testimonials.map( t => (
              <li key={t.id} className="testimonial card">
                <h3 className='testimonial__title card__title'>
                  {t.title}
                </h3>
                <p className='testimonial__text'>
                  {t.text}
                </p>
                <p className='testimonial__name'>
                  - {t.name} <FontAwesomeIcon className="testimonial__icon" icon={faUser} />
                </p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Feedback