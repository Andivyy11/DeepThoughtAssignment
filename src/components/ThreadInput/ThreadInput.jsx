import './ThreadInput.css'

export default function ThreadInput({text , type})
{
    return <div className='sub-thread' style={{width: type == 'summary' ? '100%' : '47%'}}>
    <span>{text}</span>
    <textarea className='sub-thread-input' placeholder='Enter Text Here'>

    </textarea>
</div>
}