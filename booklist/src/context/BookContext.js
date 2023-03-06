import {useReducer,createContext,useEffect} from 'react'
import Bookreducer  from '../reducers/Bookreducer'
export const BookContext=createContext()
export default function BookContextProvider(props) {
const[books,dispatch]=useReducer(Bookreducer,[ ],()=>{
  const localData=localStorage.getItem('books')
  return localData?JSON.parse(localData):[]
})
useEffect(()=>{
 localStorage.setItem('books',JSON.stringify(books))
},[books])     
   

  return (
    
    <div>
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    </div>
  )
}
