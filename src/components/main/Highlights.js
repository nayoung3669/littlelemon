import React from "react";
import { Text, Button, Box } from "@chakra-ui/react";
import greekSalad from "../../images/greek salad.jpg";
import bruchetta from "../../images/bruchetta.svg";
import lemonDessert from "../../images/lemon dessert.jpg";

import Card from "../cards/Card.js";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const specials = [
    {
        imgSrc: greekSalad,
        name: "Greek Salad",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicaho style feta cheese, garnished with crunchy garlic.",
        urlForDelivery: ""
    },
    {
        imgSrc: bruchetta,
        name: "Bruchetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        urlForDelivery: ""
    },
    {
        imgSrc: lemonDessert,
        name: "Lemon Dessert",
        price: "$5.99",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        urlForDelivery: ""
    },
];

const Highlights = () => {
    console.log("highlights")
    return (
        <div className="highlights">
            <div className="highlights_heading">
               <Text className="heading" fontSize="2xl" color="#333333">This weeks specials! </Text>
                <Button className="onlineMenu_button" bgColor="#F4CE14" fontSize="m" rightIcon={<ArrowForwardIcon />} >Online Menu </Button>
            </div>
            <div className="cards">
                {specials.map((special) => (
                    <Card
                        imgSrc={special.imgSrc}
                        name={special.name}
                        price={special.price}
                        description={special.description}
                        urlForDelivery={special.urlForDelivery}
                    />
                ))}
            </div>
        </div>
    );
};

export default Highlights;