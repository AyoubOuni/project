import React, { Component } from 'react'
import {connect} from 'react-redux'
import Logo from './logo.png'
import { Link } from "react-router-dom";

 class Home extends Component {
  render() {

    return (
      <>
       {(this.props.user.length === 0)?<div className=" d-flex justify-content-center"><div className="card w-25  border-dark  text-center h5  p-3 mt-4">There is no User !</div></div> :""}
<div className="container">
  <div className="row g-0">
   
       { this.props.user.map((elements,index) => {
            return(<span key={index} className=" col-4  ">
                <div  className="card w-75">
                    <div  className="card-header h4 text-center bg-primary text-white text-nowrap">
                    {elements.nom}</div>
                    <div  className="card-body h6 text-center py-3 ">
                    
                    Prenom:{elements.prenom}
                    <br />
                    <br />
                   Email: {elements.email}
                   <div className="mt-3 dropdown d-flex justify-content-end">
  <button type="button" className="btn btn-secondary btn-sm " id="dropdownSmall" data-bs-toggle="dropdown" aria-expanded="false"><img src={Logo} alt="Logo" width="16" height="16" /></button>
  <div className="dropdown-menu" aria-labelledby="dropdownSmall">
    <Link to={{pathname:`show/${index}`}} className="dropdown-item"  >afficher details</Link>
  

    <Link to={{pathname:`update/${index}`}} className="dropdown-item"  onClick={() => this.props.modifier(elements)}>modifier</Link>

    <a href="#" className="dropdown-item"  onClick={()=>this.props.supprimer(index)}>supprimer</a>
  </div>
</div>
                    </div>
                </div>
                <br />
             
                </span>
                
               
            )
            })}
   </div>  
   </div> 
      </> )
  }
}

function mapState(state){
    return{
        user:state.user
    }
}
function mapdispatch (dispatch){
  
  return { 
    supprimer:(index)=>
  dispatch({
       type: "supprimer",
       payload:index
       
     })
     ,
     modifier:(user)=>
     dispatch({type:"modifier", payload:user})
    }
  }
export default connect(mapState,mapdispatch)(Home);
