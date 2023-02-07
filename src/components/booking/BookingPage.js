import { useState } from 'react'
import React from 'react'
import BookingForm from './BookingForm'
import { Heading } from '@chakra-ui/react'

const Confirmation = () => {
    return (
        <Heading>Thank you for reservation</Heading>
    )
}


const BookingPage = () => {
    const [availableTimes, setAvailavleTimes] = useState([
        "17:00","18:00","19:00","20:00","21:00","22:00"
    ]);

    return (  
        <div>
            <BookingForm availableTimes={availableTimes} setAvailavleTimes={setAvailavleTimes}/>
        </div>
  )
}

export default BookingPage;