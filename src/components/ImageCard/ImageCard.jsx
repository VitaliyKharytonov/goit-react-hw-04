export default function ImageCard({image , onOpen, onImageUrl}) {
    const {alt_description, likes, urls: { small ,regular} } = image;
    
    return (
        <div onClick={() => { onOpen(true); onImageUrl(regular) }} >
            <img src={small} alt={alt_description} />
            <p>Likes: {likes}</p>
    </div>
)}