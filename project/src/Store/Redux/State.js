const  init_state ={
  user:[]
}
export default function Reduceru(state = init_state,action){
      switch(action.type){
        case "add" :
          const newArr = [...state.user];
          newArr.unshift(action.payload);
          return{
          user:newArr
          }
        case "supprimer" : 
        const newArr2 = [...state.user];
          newArr2.splice(action.payload,1);
          return{
            user:newArr2
            }
            case "afficher" :
            case "update":
              const newArr3 = [...state.user];
              newArr3.splice(action.payload.id,1);
              newArr3.splice(action.payload.id,0,action.payload);
               return{
                user:newArr3
                }
            default: return state;
    }
    }
   

    
