import './Pointers.css'

export default function Pointer()
{
    return <div className='pointer-body'>
        <h4>Title</h4>
        <input type='text'/>
        <h4>Content</h4>
        <div className='content-options'>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Insert</span>
            <span>Format</span>
            <span>Tools</span>
            <span>Table</span>
            <span>Help</span>
            <br/>
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            <i class="fa-solid fa-maximize"></i>
            <span className='bg-grey'>Paragraph</span>
            <i class="fa-solid fa-ellipsis"></i>
        </div>
        <textarea className='content-input'></textarea>
    </div>
}