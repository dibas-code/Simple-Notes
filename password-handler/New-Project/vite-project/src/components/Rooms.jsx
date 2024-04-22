import React from 'react'
import { useRef, useEffect } from 'react'

export default function Rooms() {
    const dibasRef = useRef(null);
    const roomsImages = useRef(null);
    let count = 1;
    let width = 800;


    const handlePreviousClick = () => {
        count--;
        let newPosition = 600 * count;
        if (count >= 0) {
            roomsImages.current.style.transform = `translateX(-${newPosition}px)`;
        } else {
            count = 0;
        }
    }
    const handleNextClick = () => {
        count++;
        let newPosition = width * count;
        if (count < roomsImages.current.children.length) {
            roomsImages.current.style.transform = `translateX(-${newPosition}px)`;
        } else {
            count = roomsImages.current.children.length - 1;
        }
    }
    return (
        <div className='Rooms'>
            <button onClick={handlePreviousClick}>previous</button>
            <div className='Rooms-image-container'>
                <div ref={roomsImages} className='Rooms-images'><img src="https://www.raiuniversity.edu/wp-content/uploads/Hostel-min.jpg" />
                    <img src="https://hostelgeeks.com/wp-content/uploads/2016/04/caravan-buenos-aires-hostel.jpg" />
                    <img src="https://www.gncon.in/wp-content/uploads/nursing-students-hostel-beds-studying-watermark.jpg" />
                    <img src="https://www.hiusa.org/wp-content/uploads/2023/03/hostellers-four-bed-dorm-HIUSA-640x360-min.jpg" />
                </div>
            </div>
            <button onClick={handleNextClick}>Next</button>
        </div>
    )
}
