import React  from 'react';
import { useRef,useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {connect} from 'react-redux'
import {nomvalidation,prenomvalidation,emailvalidation,telvalidation,cinvalidation} from './../Validation/Validation'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/bootstrap/dist/js/bootstrap.min.js';

export default function Form (props) {
    let history = useNavigate();
    const dispatch=useDispatch();
    var [Users,setuser]=useState({
        nom:"",
        prenom:"",
        email:"",
        cin:"",
        tel:"",
        nissance:""
    })
//Les ref de l'input 
    const name = useRef();
    const prenom = useRef();
    const email = useRef();
    const cin = useRef();
    const tel = useRef();
    const date_nissance = useRef();
    
//pour validation des input avec plugin yup
const [nameIsValid, setnameIsValid] = useState(null);
const [prenomIsValid, setprenomIsValid] = useState(null);
const [emailIsValid, setemailIsValid] = useState(null);
const [telIsValid, settelIsValid] = useState(null);
const [cinIsValid, setcinIsValid] = useState(null);
const [nissanceIsValid, setnissanceIsValid] = useState(null);
// pour get les valeurs de l'input 
const changer=(e)=>{
        setuser({
        ...Users,
        nom:name.current.value,
        prenom:prenom.current.value,
        email:email.current.value,
        cin:cin.current.value,
        tel:tel.current.value,
        nissance:date_nissance.current.value
                })    
                    };
//valider le formulaire avec plugin yup
const test=async()=>{
        const name_valide=  await nomvalidation.isValid(Users)
        setnameIsValid(name_valide)
        const prenom_valide=  await prenomvalidation.isValid(Users)
        setprenomIsValid(prenom_valide)
        const email_valide=  await emailvalidation.isValid(Users)
        setemailIsValid(email_valide)
        const tel_valide=  await telvalidation.isValid(Users)
        settelIsValid(tel_valide)
        const cin_valide=  await cinvalidation.isValid(Users)
        setcinIsValid(cin_valide)
        //pour valider date (il faut qui il est inferieur a date  d'aujourd'hui)
        var today = new Date()
        var year = today.getFullYear();
        var month =today.getMonth()+1;
        (month<10)?month='0'+month:month=month
        var jour=today.getDate();
        (jour<10)?jour='0'+jour:jour=jour
        var date=year+'-'+month+'-'+jour;
(date<Users.nissance||Users.nissance==="")?setnissanceIsValid(false):setnissanceIsValid(true)
};
//pour ajouter user
const valider=(e)=>{
e.preventDefault();
test()
if(nameIsValid&&prenomIsValid&&emailIsValid&&telIsValid&&cinIsValid&&nissanceIsValid){
dispatch({
        type: "add",
        payload:Users
     })
history('/');
} 
};
   return (
    <div>
        <br />
        <br />
    <div className="d-flex justify-content-center">
        <form className="needs-validation card w-50" noalidate="">
        <fieldset>
      <legend className="text-primary  card-header text-center h2 ">Inscription</legend>
      <div id="cardbody" className="card-body">
      <div className="row d-flex justify-content-center">
      <label className="col-sm-3 text-center mt-1 h5" htmlFor="nom">Nom</label>
      <span className="col-sm-4" >
              <input ref={name} onChange={changer} type="text" className=" form-control  " required="" id="nom" placeholder="ecrire votre nom"></input>
              {(nameIsValid===false)?<div style={{marginTop:'6px'}} className="text-danger h-6 text-nowrap">Invalide name</div>:""}
              </span>
          
   
      </div>
      <br />
      <div className="row d-flex justify-content-center">
      <label className="col-sm-3 text-center mt-1 h5" htmlFor="prenom">Prenom</label>
      <span className="col-sm-4" >
              <input ref={prenom}  onChange={changer} type="text" className=" form-control "  id="prenom" placeholder="ecrire votre prenom"></input>
              {(prenomIsValid===false)?<div style={{marginTop:'6px'}} className="text-danger h-6 text-nowrap">Invalide prenom</div>:""}
              </span>
      </div>
      <br />
      <div className="row d-flex justify-content-center">
      <label className="col-sm-3 text-center mt-1 h5" htmlFor="email">Email</label>
      <span className="col-sm-4" >
              <input ref={email} onChange={changer} type="email" className=" form-control "  id="email" placeholder="ecrire votre email"></input>
              {(emailIsValid===false)?<div style={{marginTop:'6px'}} className="text-danger h-6 text-nowrap">Invalide email</div>:""}
              </span>
      </div>
      <br />
      <div className="row d-flex justify-content-center">
      <label className="col-sm-3 text-center mt-1 h5" htmlFor="cin">N°Cin</label>
      <span className="col-sm-4" >
              <input ref={cin}  onChange={changer} type="text" className=" form-control "  id="cin" placeholder="ecrire votre numero de cin"></input>
              {(cinIsValid===false)?<div style={{marginTop:'6px'}} className="text-danger h-6 text-nowrap">Invalide N°Cin (must Contain 8 number !)</div>:""}
        </span>
      </div>
      <br />
      <div className="row d-flex justify-content-center">

      <label className="col-sm-3 text-center mt-1 h5" htmlFor="tel">N°Tel</label>
      <span className="col-sm-4" >
      <div className="input-group">
  <span className="input-group-text" id="before">+216</span>
              <input ref={tel} onChange={changer} type="tel" className=" form-control "  id="tel" placeholder="ecrire votre numero de telephone"></input>
              {(telIsValid===false)?<div style={{marginTop:'6px'}} className="text-danger h-6 text-nowrap">Invalide N°Tel (must Contain 8 number !)</div>:""}
             </div>
              </span>
      </div>
      <br />
      <div className="row d-flex justify-content-center">
      <label className="col-sm-3 mt-1  text-nowrap h5" htmlFor="datenissance">Date de nissance</label>
      <span className="col-sm-4" >
              <input  ref={date_nissance} onChange={changer} type="date" className=" form-control "  id="datenissance" ></input>
              {(nissanceIsValid===false)?<div style={{marginTop:'6px'}} className="text-danger h-6 text-nowrap">Invalide date de nissance</div>:""}
              </span>

      </div>
      <br />
      <br />

      <span className="d-flex justify-content-center">
      <button type="submit" onClick={valider} className="btn btn-primary ">Valider</button>
      </span>
      </div>
      </fieldset>
      

</form>

    </div>
    <br />
    </div>
  )
}


