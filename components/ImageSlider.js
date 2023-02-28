import { useState } from "react"
import imageSliderStyles from "../styles/ImageSlider.module.css"

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        let newIndex
        if (currentIndex === 0) {
            newIndex = slides.length - 1
        } else {
            newIndex = currentIndex - 1
        }

        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        let newIndex
        if (currentIndex === slides.length - 1) {
            newIndex = 0
        } else {
            newIndex = currentIndex + 1
        }

        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    const image = `../images/${slides[currentIndex]}`

    return (
        <div className={imageSliderStyles.container}>
            <div  className={imageSliderStyles.card} style={{
                backgroundImage: `url(${image})`, 
                backgroundPosition: "center", 
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"}}>
                <div className={imageSliderStyles.arrow} onClick={goToPrevious}>{"<"}</div>
                <div className={imageSliderStyles.arrow} onClick={goToNext}>{">"}</div>
            </div>
            <div>
                <div className={imageSliderStyles.dot} >
                    {slides.map((slide, slideIndex) => (
                        <div style={currentIndex===slideIndex ? {color: "black"} : null} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                            ●
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageSlider
