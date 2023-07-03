import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div id='divbtn'>
      {gotoPrevPage &&  <button id='btns' className='btn1' onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button id='btns' className='btn2' onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
