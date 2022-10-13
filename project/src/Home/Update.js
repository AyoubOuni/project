import React from 'react'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState,useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {nomvalidation,prenomvalidation,emailvalidation,telvalidation,cinvalidation} from './../Validation/Validation'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Update() {
const user=useSelector(state => state.user);
let { id } = useParams();
let history = useNavigate();
const dispatch=useDispatch();
//pour validation des input avec plugin yup
const [nameIsValid, setnameIsValid] = useState(null);
const [prenomIsValid, setprenomIsValid] = useState(null);
const [emailIsValid, setemailIsValid] = useState(null);
const [telIsValid, settelIsValid] = useState(null);
const [cinIsValid, setcinIsValid] = useState(null);
const [nissanceIsValid, setnissanceIsValid] = useState(null);
var [Users,setuser]=useState({
        id:"",
        nom:"",
        prenom:"",
        email:"",
        cin:"",
        tel:"",
        nissance:""
    })
         
 useEffect(() => {
        user.map((elements,index) => {
            if(index==id){
                setuser({
                    ...Users,
                    id:index,
                    nom:elements.nom,
            prenom:elements.prenom,
            email:elements.email,
            cin:elements.cin,
            tel:elements.tel,
            nissance:elements.nissance
                 })}})
    },[])
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
    var today = new Date();
    var year = today.getFullYear();
    var month =today.getMonth()+1;
    (month<10)?month='0'+month:month=month
    var jour=today.getDate();
    (jour<10)?jour='0'+jour:jour=jour
    var date=year+'-'+month+'-'+jour;
    (date<Users.nissance||Users.nissance==="")?setnissanceIsValid(false):setnissanceIsValid(true)
};
//pour modifier user
const updater=(e)=>{
e.preventDefault(); 
test()
if(nameIsValid&&prenomIsValid&&emailIsValid&&telIsValid&&cinIsValid&&nissanceIsValid){
    dispatch({
        type: "update",
        payload:Users
     })    
 history('/')         
}};

    return (
      
    <div>
    <div>
        <br />
        <br />
    <div className="d-flex justify-content-center">
        <form className="needs-validation card w-50" noalidate="">
        <fieldset>
      <legend className="text-primary  card-header text-center h2 ">Update</legend>
      <div id="cardbody" className="card-body">
      <div className="row d-flex justify-content-center">
      <label className="col-sm-3 text-center mt-1 h5" htmlFor="nom">Nom</label>
      <span className="col-sm-4" >
              <input     value={Users.nom} onChange={(e)=>{ setuser({...Users,nom:e.target.value})}} type="text" className=" form-control  " required="" id="nom" placeholder="ecrire votre nom"></input>
              {(nameIsValid===false)?<div style={{marginTop:'6px'}} className="text-danger h-6 text-nowrap">Invalide name</div>:""}

              </span>
          
   
      </div>
      <br />
      <div className="row d-flex justify-content-center">
      <label className="col-sm-3 text-center mt-1 h5" htmlFor="prenom">Prenom</label>
      <span className="col-sm-4" >
              <input  value={Users.prenom} onChange={(e)=>{ setuser({...Users,prenom:e.target.value})}} type="text" className=" form-control "  id="prenom" placeholder="ecrire votre prenom"></input>
              {(prenomIsValid===false)?<div style={{marginTop:'6px'}} className="text-danger h-6 text-nowrap">Invalide prenom</div>:""}

              </span>
      </div>
      <br />
      <div className="row d-flex justify-content-center">
      <label className="col-sm-3 text-center mt-1 h5" htmlFor="email">Email</label>
      <span className="col-sm-4" >
              <input   value={Users.email} onChange={(e)=>{ setuser({...Users,email:e.target.value})}} type="email" className=" form-control "  id="email" placeholder="ecrire votre email"></input>
              {(emailIsValid===false)?<div style={{marginTop:'6px'}} className="text-danger h-6 text-nowrap">Invalide email</div>:""}

              </span>
      </div>
      <br />
      <div className="row d-flex justify-content-center">
      <label className="col-sm-3 text-center mt-1 h5" htmlFor="cin">N°Cin</label>
      <span className="col-sm-4" >
              <input    value={Users.cin} onChange={(e)=>{ setuser({...Users,cin:e.target.value})}} type="text" className=" form-control "  id="cin" placeholder="ecrire votre numero de cin"></input>
              {(cinIsValid===false)?<div style={{marginTop:'6px'}} className="text-danger h-6 text-nowrap">Invalide N°Cin(must Contain 8 number !)</div>:""}

        </span>
      </div>
      <br />
      <div className="row d-flex justify-content-center">

      <label className="col-sm-3 text-center mt-1 h5" htmlFor="tel">N°Tel</label>
      <span className="col-sm-4" >
      <div className="input-group">
  <span className="input-group-text" id="before">+216</span>
              <input   value={Users.tel} onChange={(e)=>{ setuser({...Users,tel:e.target.value})}} type="tel" className=" form-control "  id="tel" placeholder="ecrire votre numero de telephone"></input>
              {(telIsValid===false)?<div style={{marginTop:'6px'}} className="text-danger h-6 text-nowrap">Invalide N°Tel (must Contain 8 number !)</div>:""}

             </div>
              </span>
      </div>
      <br />
      <div className="row d-flex justify-content-center">
      <label className="col-sm-3 mt-1  text-nowrap h5" htmlFor="datenissance">Date de nissance</label>
      <span className="col-sm-4" >
              <input    value={Users.nissance} onChange={(e)=>{ setuser({...Users,nissance:e.target.value})}} type="date" className=" form-control "  id="datenissance" ></input>
                           {(nissanceIsValid===false)?<div style={{marginTop:'6px'}} className="text-danger h-6 text-nowrap">Invalide date de nissance</div>:""}

              </span>

      </div>
      <br />
      <br />

      <span className="d-flex justify-content-center">
      <button type="submit" onClick={updater} className="btn btn-primary ">Update</button>
      </span>
      </div>
      </fieldset>
</form>
    </div>
    <br />
    </div>
    </div>
  )}

export default  (Update)


