import React,{useContext, useState} from 'react'
import { BookContext } from '../context/BookContext'


export default function BookForm() {
   
    const[title,setTitle]=useState('')
    const[author,setAuthor]=useState('')
    const{dispatch} =useContext(BookContext)
   const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch({type:'ADD_BOOK',book:{title,author}})
    setTitle(' ')
    setAuthor(' ')
   }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={title} required onChange={(e)=>setTitle(e.target.value)} placeholder="book title"/>
        <input type="text" value={author} required onChange={(e)=>setAuthor(e.target.value)} placeholder="book author"/>
        <input type="submit" value="add book"/>
    </form>
   
  )
}
