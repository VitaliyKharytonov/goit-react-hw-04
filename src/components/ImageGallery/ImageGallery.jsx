import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'


export default function ImageGallery({images, onOpen, onImageUrl}) {
    return (
        <ul className={css.list}>
            {images.map((image) =>(<li key={image.id} className={css.item}>
                <ImageCard image={image} onOpen={onOpen} onImageUrl={onImageUrl} />
                </li>)
            )}
    </ul>
)}