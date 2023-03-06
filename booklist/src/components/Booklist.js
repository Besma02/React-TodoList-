import {useContext} from 'react'
import { BookContext } from '../context/BookContext'

export default function Booklist() {
   const{books}=useContext(BookContext)
   const{dispatch}=useContext(BookContext)
  return books.length?(
    <div className='book-list'>
        <u>
            {books.map(book=>(<li key={book.id} onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}>
                <div className='title'>{book.title}</div>
                <div className='author'>{book.author}</div>
             </li>))}
        </u>
    </div>
  ):(
    <div className="empty">
        no book to read
        </div>
  )
}
