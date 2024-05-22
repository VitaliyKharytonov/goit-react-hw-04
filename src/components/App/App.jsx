
import {useState,useEffect} from 'react'
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from '../ImageGallery/ImageGallery'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import ImageModal from '../ImageModal/ImageModal'

import { getImages } from '../../images-api'
import { Circles } from 'react-loader-spinner'
import css from './App.module.css'



export default function App() {

    const [images, setImeges] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        if (searchQuery.trim() === "") {
            return;
        }

        async function fetchImages() {
            try {
            setIsLoading(true);
            setIsError(false);
            const data = await getImages(searchQuery, page);
            setImeges((prevState) => [...prevState, ...data.results]);
            } catch {
            setIsError(true);
            } finally {
            setIsLoading(false);
            }
        }

        fetchImages();
    }, [page, searchQuery]);
    

    const handleSearch = async (query) => {
        setSearchQuery(query);
        setPage(1);
        setImeges([]);
    };
    
    const handleLoadMore = async() => {
        setPage(page+1)
    };



    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {isError && <p>Oops! There was an error! Try again!</p>}
            {images.length > 0 && <ImageGallery images={images} onOpen={setIsModalOpen} onImageUrl={setImageUrl} />}
            <ImageModal onOpen={isModalOpen} onClose={setIsModalOpen}> <img src={imageUrl} alt="" /> </ImageModal>
            <Circles
                height="40"
                width="40" 
                color="#150b9e"
                ariaLabel="circles-loading"
                wrapperClass={css.loader}
                visible={isLoading}
            />
            {images.length > 0 && !isLoading && (
                <LoadMoreBtn onLoadMore={handleLoadMore} />
                )
            }
        </>
    )
}
