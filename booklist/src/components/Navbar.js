import {useContext} from 'react'
import { BookContext } from '../context/BookContext'

export default function Navbar() {
   const{books} =useContext(BookContext)
  return (
    <div>
     <h1>List of book</h1>
     <p>you currently have {books.length} books to get through... </p>
    </div>
  )
}
