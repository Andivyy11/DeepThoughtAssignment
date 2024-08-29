import './Jboard.css'
import {data} from  '../../journeyBoardData.js'
import { useState } from 'react'

export default function Jboard(){


    const [isOpen , setOpen] = useState(false)

    return <div className='board' style={{left:isOpen? "0":"-200px"}}>
        <div className='j-Top'>
            <h3>Journey Borad</h3>
            <i className={isOpen? "fa-solid fa-arrow-left" : "fa-solid fa-arrow-right"} onClick={()=>{ setOpen((prev) => !prev)}}></i>
        </div>
        <div className='j-Bottom'>
            <div className='j-Bottom-content' style={{opacity:isOpen?"1":"0"}}>
            {
                data.map((l, index) => 
                    <ul key={index}>
                        <li className='list-title'>{l.title}</li>
                        {l.items.map((item, idx) => 
                            <li key={idx} className='list-item'>{item}</li>
                        )}
                    </ul>
                )
            }
            </div>
            <div className='j-Bottom-list-count' style={{opacity:isOpen?"0":"1"}}>
                {data.length}
            </div>
        </div>
    </div>
}
