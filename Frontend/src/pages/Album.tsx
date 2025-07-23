import { useParams } from "react-router-dom"

const Album = () => {
  const {slugAndId} = useParams();
  if (!slugAndId) {
    return <div>Invalid album URL</div>;
  }
  const albumId = slugAndId.split('-').splice(-1)[0];

  console.log(albumId)
  
  return (
    <div>
      hello
    </div>
  )
}

export default Album
