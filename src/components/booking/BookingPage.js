import { useReducer } from 'react'
import React from 'react'
import BookingForm from './BookingForm'
import { Heading } from '@chakra-ui/react'

const Confirmation = () => {
    return (
        <Heading>Thank you for reservation</Heading>
    )
}


const BookingPage = () => {
    const initialTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"]
    const [availableTimes, dispatch] = useReducer(updateTimes, [...initialTimes]);
    const mm= new Date().toLocaleString("en-US", { month: "long" });
    const dd = new Date().toLocaleString("en-US", { day : '2-digit'});

    function updateTimes(availableTimes, action) {
        if(action.type === "ADD_BOOKING") {
            return {
                ...availableTimes.pop()

            }
        };
    };

    function initializeTimes() {
    }

    console.log(mm);
    console.log(dd);

    return (  
        <div>
            <BookingForm availableTimes={availableTimes} />
        </div>
    )
}

export default BookingPage;