import css from './ImageCard.module.css'


export default function ImageCard({ image, onOpen, onImageUrl }) {
    const {alt_description, likes, urls: { small ,regular} } = image;
    
    return (
        <div onClick={() => { onOpen(true); onImageUrl(regular) }} className={css.container}>
            <img src={small} alt={alt_description} className={css.image} />
            <p className={css.description}>Likes: {likes}</p>
        </div>
)}