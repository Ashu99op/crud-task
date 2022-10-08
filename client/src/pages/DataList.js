import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function DataList() {

  const navigate = useNavigate();
    const [list,setList] = useState([]);
    


useEffect(()=>{
    axios.get("http://localhost:3001/read")
    .then((res)=>{
        setList(res.data);
    });
}, [])


  

 const deleteList = (id) =>{
  axios.delete(`http://localhost:3001/delete/${id}`)
  // console.log("oii");
 }
   
  return (
    <div className='container my-5'>
    <table class="table" style={{border:'1px solid gray'}}>
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Name</th>
      <th scope="col">Color</th>
      <th scope="col">Oprations</th>
    </tr>
  </thead>
  <tbody>
    {list.map((val,index)=>{
            return(
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{val.name}</td>
                  <td>{val.favColor}</td>
                  <td>
                    <button className='btn btn-primary mx-2' onClick={()=>navigate('/update')}>Edit</button>
                    <button className='btn btn-danger' onClick={() => deleteList(val._id)}>Delete</button>
                  </td>
                </tr>
                 );
    })}
  </tbody>
</table>
</div>
  );
}
