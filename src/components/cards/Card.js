import React from 'react';
import { Text, Box} from '@chakra-ui/react'
import "./Card.css"

export default function Card({ imgSrc, name, price, description, urlForDelivery }) {

    return (
        <div className='card'>
            <img width="100px" src={imgSrc} alt={name}/>
                <div className='cardHeading'>
                    <h1 className='name'>{name}</h1>
                    <Text className='price'>{price}</Text>
                </div>
                <Text className='description'>{description}</Text>
            <a href="#" className='orderADelivery'><Text>Order a delivery</Text></a>
        </div>
    )
}