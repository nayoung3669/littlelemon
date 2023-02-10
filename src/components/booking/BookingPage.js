import React, { useReducer } from 'react'
import BookingForm from './BookingForm'
import { useNavigate } from 'react-router-dom'
import {submitAPI, fetchAPI} from './APIs'

const ACTIONS = {
    ADD_BOOKING: "ADD_BOOKING",
}

function updateTimes(availableTimes, action) {
    console.log("===update===")
    switch (action.type) {
        case ACTIONS.ADD_BOOKING :
            return [...availableTimes,availableTimes.pop(action.payload)];
        default :
            return availableTimes;
    };
};

function BookingPage() {
    const date= new Date();
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(date));
    const navigate = useNavigate();

    function submitForm(formData) {
        if (submitAPI(formData)) {
            console.log("===submit===")
            console.log(formData.time);
            navigate("confirmation");
            dispatch({ type: ACTIONS.ADD_BOOKING, payload: formData.time})
        }
    }

    function initializeTimes(date) {
        return fetchAPI(date);
    }

    return (
        <div>
            <BookingForm availableTimes={[...availableTimes]} submitForm={submitForm} dispatch={dispatch} />
        </div>
    )
}


export default BookingPage;