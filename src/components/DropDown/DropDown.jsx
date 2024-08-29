import { useState } from 'react'
import './DropDown.css'

export default function DropDown({data})
{
    const [open , setOpen] =useState(true)
    return <div className='dropdown-container'>
            <h4><i className={open ? "fa-solid fa-angle-up" : "fa-solid fa-angle-up"} onClick={()=> setOpen((prev) => !prev)}></i> {data.title}</h4>
        <div style={{display:open? 'flex' : 'none'}}>
            <p>{data.content}</p>
            <a href='#'>See More</a>
            {
                data.examples !== undefined && <div>{
                    (data.examples).map((e) => <div className='example-container'>
                        <h4>{e.example_title}</h4>
                        <p>{e.example_content}</p>
                  </div>)
                }</div>
            }
        </div>
    </div>
}