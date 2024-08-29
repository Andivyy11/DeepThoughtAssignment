import './ThreadBuilder.css'
import ThreadInput from '../ThreadInput/ThreadInput'
import { useState } from 'react'

export default function ThreadBuilder()
{
    const [open ,setOpen] =useState(true)
    return <div className='thread-container'>
        <div className='thread-name'>
            <i className={open ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up"} onClick={()=> setOpen((prev) => !prev)}></i>
            <h3>ThreadA</h3>
        </div>
        <div className='thread-body' style={{display: open ? 'block':'none'}}>
            <div className='sub-thread-container'>
                <ThreadInput text="Sub Thread 1"/>
                <ThreadInput text="Sub Interpretation 1"/>
            </div>
        <div className='thread-options'>
            <i class="fa-solid fa-lightbulb"></i>
            <i class="fa-solid fa-message"></i>
            <i class="fa-solid fa-clipboard-question"></i>
            <i class="fa-solid fa-spa"></i>
            <button>Select Categ<i className="fa-solid fa-angle-down"></i></button>
            <button>Select process<i className="fa-solid fa-angle-down"></i></button>
        </div>
        <button className='blue-btn'>+ Sub Thread</button>
        <ThreadInput text='Summary for Thread A'  type='summary'/>
        </div>
    </div>
}