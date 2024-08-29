import './MethodSummary.css'
import DropDown from '../DropDown/DropDown'

export default function MethodSummary()
{
    const dropdown = [ 
        { 
            title : "Introduction" ,
            content:"The 4SA Method. How to bring an idea into progress?"
        },
        {
            title:"Thread A",
            content:"How are you going to develop your strategy ? Which method are you going to use to develop this strategy ? What if the project is lengthy",
            examples:[
                {
                    example_title:"Example 1",
                    example_content:"You have a concept how will you put it into progress?"
                }
            ]
        }
    ]
    return <div className='method-container'>
    {
        dropdown.map((d,key)=> <DropDown key={key} data={d} />)
    }
    </div>
}