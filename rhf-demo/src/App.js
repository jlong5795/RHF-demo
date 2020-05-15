import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data)
    console.log(errors)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" ref={register({ required: true, minLength:3 })}/>
        
        <input name="email" type='email' ref={register({ required: true })}/>
        {errors.email && <p>This is a required field</p>}
        <input name="password" type='password' ref={register}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
