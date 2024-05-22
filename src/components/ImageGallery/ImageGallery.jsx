import ImageCard from '../ImageCard/ImageCard'


export default function ImageGallery({images, onOpen, onImageUrl}) {
    return (
        <ul>
            {images.map((image) =>(<li key={image.id}>
                <ImageCard image={image} onOpen={onOpen} onImageUrl={onImageUrl} />
                </li>)
            )}
    </ul>
)}