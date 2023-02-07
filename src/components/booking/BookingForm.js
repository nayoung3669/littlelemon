import React, { useState } from 'react';
import './Booking.css'
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Heading, Input, FormControl, FormLabel, FormErrorMessage, Select, VStack } from '@chakra-ui/react';


function BookingForm({availableTimes}) {
    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: "",
            occasion: "",
        },
        onSubmit: (values, actions) => {
            console.log(values)
            alert(JSON.stringify(values, null, 2))
            actions.resetForm();
        },
        validationSchema: yup.object({
            date: yup.date().required("Date is required."),
            time: yup.string().required("Time is required."),
            guests: yup.number().required().positive().integer(),
        }),
    });
    const {getFieldProps} = formik;

    return (
        <div className='booking'>
            <form onSubmit={formik.handleSubmit}>
                <VStack spacing={12}>
                    <Heading padding={33} className='heading'>Reserve a table</Heading>
                    <FormControl isInvalid={formik.errors.date && formik.touched.date}>
                        <FormLabel htmlFor="res-date">Choose date</FormLabel>
                        <Input type="date" id="res-date" value={formik.values.date} onChange={formik.handleChange} {...getFieldProps("date")} border="2px solid #495e57"/>
                        <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.errors.time && formik.touched.time}>
                        <FormLabel htmlFor="res-time">Choose time</FormLabel>
                        <Select id="res-time " value={formik.values.time} onChange={formik.handleChange} {...getFieldProps("time")} placeholder='Select time' border="2px solid #495e57">
                            {availableTimes.map((time) => {
                                return (<option value={time}>{time}</option>)
                            })}
                        </Select>
                        <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
                        <FormLabel htmlFor="guests">Number of guests</FormLabel>
                            <Input type="number" id="guest_number" value={formik.values.guests} onChange={formik.handleChange} {...getFieldProps("guests")} placeholder="Enter the number of guests" border="2px solid #495e57"/>
                        <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="occasion">Occasion</FormLabel>
                        <Select id="occasion" value={formik.values.occasion} onChange={formik.handleChange} {...getFieldProps("occasion")} border="2px solid #495e57" >
                            <option value="">Select an occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </Select>
                        <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                    </FormControl>
                    <button className='submitButton' type="submit">Make Your reservation</button>
                </VStack>
            </form>
        </div>
    )
}

export default BookingForm;