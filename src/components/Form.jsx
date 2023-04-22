import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${name} | ${number} | ${email}`);
  }

  return (
    <div className='wrapper'>
    <form className="form" id="form" onSubmit={handleSubmit}>
      <h2 className="form__title">Оставить заявку</h2>
      <label className='form__label'>
        <span className="form__span">Ваше имя: </span>
        <input 
        className="form__input" 
        value={name}
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Иван" 
        required
        />
      </label> 
      <label className='form__label'>
        <span className="form__span">Ваш номер телефона: </span>
        <input 
        className="form__input"
        value={number} 
        type="text" 
        required 
        onChange={(e) => setNumber(e.target.value)} 
        placeholder="+78891234222"
        />
      </label> 
      <label className='form__label'>
        <span className="form__span">Ваш E-mail: </span>
        <input 
        className="form__input" 
        value={email}
        type="e-mail" 
        id="commentInput" 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="ivan@mail.com" 
        required/>
      </label>     
      <button type="submit" className="button form__button">
        Отправить 
      </button>
    </form>
    </div>
    
  )
}

export default Form