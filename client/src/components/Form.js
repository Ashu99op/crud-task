import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function Form() {

    const [name,setName] = useState('');
    const [favColor,setColor] = useState('');

    const handleSubmit= (event) => {
        event.preventDefault();
        
        Axios.post("http://localhost:3001/insert",{
            name: name,
            favColor: favColor,
        });
    };

  return (
    <div className='container my-5'>
       <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
        </div> 
        <div className="form-group">
          <select className="form-control" onChange={(e)=>setColor(e.target.value)}>
            <option hidden>Select Your Favorite Color</option>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Black</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
     </form>
    </div>
  );
}
