import './Card.css'
import Video from '../VideoFrame/Video'
import ThreadBuilder from '../ThreadBuilder/ThreadBuilder'
import Pointer from '../Pointers/Pointers'
import MethodSummary from '../MethodSummary/MethodSummary'

export default function Card({data})
{
    return <div className='card'>
        <div className='card-top'>
            {data.asset_title}
        </div>
        <div className='card-bottom'>
            <div className='desc-box'>
               <span className='desc'>Description :</span>
               <span>{data.asset_description}</span>
            </div>
            {
                data.asset_content_type === 'video' && <Video video_url={data.asset_content}/>
            }
            {
                data.asset_content_type === 'threadbuilder' && <ThreadBuilder/>
            }
            {
                data.asset_content_type === 'article' && data.asset_type === 'input_asset' && <Pointer/>
            }
            {
                data.asset_content_type === 'article' && data.asset_type === 'display_asset' && <MethodSummary/>
            }
        </div>
    </div>
}