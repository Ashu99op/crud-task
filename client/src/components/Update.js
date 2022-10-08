// import React, { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function Form() {

   
    // const [list,setList] = useState([]);
    const [newName,setNewName] = useState();
    const [newColor,setNewColor] = useState();

    const updateData = (id) => {
        Axios.put("http://localhost:3001/update",{
          id: id, 
          newName: newName,
          newFavColor:newColor
        });  
    };

    // useEffect(()=>{
    //     Axios.get("http://localhost:3001/read")
    //     .then((res)=>{
    //       // console.log(res.data)
    //         setList(res.data);
    //     });
    // }, [])

  return (
    <div className='container my-5'>
      <h1>Edit your data</h1>
       <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" onChange={(e)=>setNewName(e.target.value)} placeholder="Enter New name" />
        </div> 
        <div className="form-group">
          <select className="form-control" onChange={(e)=>setNewColor(e.target.value)}>
            <option hidden>Select Your Favorite Color</option>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Black</option>
          </select>
        </div>
        <button onClick={() => updateData()} className="btn btn-primary">Update</button>
     </form>
    </div>
  );
}
