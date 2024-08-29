import './Video.css'

export default function Video({video_url})
{
    return <div className="videoContainer">
    <iframe
      width="100%"
      src={`${video_url}`}
      title="youtube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    </div>
}