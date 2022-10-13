import React from 'react'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
export default function Show(props) {
  const user=useSelector(state => state.user);
  let { id } = useParams();
 return(
  user.map((elements,index) => {
    if(index==id){
    return(

      <div key={index} className="d-flex justify-content-center mt-4">   
       <span  className="col-sm-3 ">
        <div  className="card ">
            <div  className="card-header h4 text-center bg-danger text-white">
          Details</div>
            <div  className="card-body h6 text-center py-3 ">
            ID :   {index}
            <br />
            <br />
            Nom: {elements.nom}
            <br />
            <br />
            Prenom: {elements.prenom}
            <br />
            <br />
           Email: {elements.email}
           <br />
            <br />
            Cin: {elements.cin}
            <br />
            <br />
            Tel: {elements.tel}
            <br />
            <br />
            Date de nissance: {elements.nissance}
           </div>
           </div>
           </span>
           </div>
)}
  }
  )
 )}
