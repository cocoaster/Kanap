import React, { useState } from "react";
import rightArrow from "../assets/Rightarrow.png";
import leftArrow from "../assets/Leftarrow.png";

function Carousel({ apartments, selectedApartmentId }) {
    // Define states using the useState hook
    const [slidePosition, setSlidePosition] = useState(0);

    // Find the apartment with the matching ID from the URL
    const apartment = apartments.find(
        (apartment) => apartment.id === selectedApartmentId
    );

    // Get the pictures for the apartment or an empty array if there are none
    const apartmentPictures = apartment?.pictures || [];

    // Calculate the number of slides and whether there are any pictures to display
    const slideCount = apartmentPictures.length;
    const hasPictures = slideCount > 0;

    // Hide the previous and next buttons, and the slide counter if there is only one picture
    const showControls = slideCount > 1;

    // Handler functions for clicking the previous and next buttons
    const handlePrevClick = () => {
        setSlidePosition(
            slidePosition === 0 ? slideCount - 1 : slidePosition - 1
        );
    };

    const handleNextClick = () => {
        setSlidePosition(
            slidePosition === slideCount - 1 ? 0 : slidePosition + 1
        );
    };

    return (
        <div className="carousel-content">
            <div className="carousel" id="kasa-carousel">
                <div className="carousel-inner">
                    {/* Display the apartment pictures as slides */}
                    {hasPictures &&
                        apartmentPictures.map((picture, index) => (
                            <div
                                className={`carousel-item ${
                                    slidePosition === index ? "active" : ""
                                }`}
                                key={index}
                            >
                                <img
                                    className="imgCarousel"
                                    src={picture}
                                    alt={apartment?.title}
                                />
                            </div>
                        ))}
                </div>
                {/* Display the previous and next buttons, and the slide counter */}
                {showControls && (
                    <>
                        <button
                            type="button"
                            className="carousel-control-prev"
                            onClick={handlePrevClick}
                        >
                            <img
                                src={leftArrow}
                                alt="Previous"
                                className="carousel-control-icon"
                            />
                        </button>
                        <button
                            type="button"
                            className="carousel-control-next"
                            onClick={handleNextClick}
                        >
                            <img
                                src={rightArrow}
                                alt="Next"
                                className="carousel-control-icon"
                            />
                        </button>
                        <div className="carousel-counter">
                            {slidePosition + 1}/{slideCount}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Carousel;
