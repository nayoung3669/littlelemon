import { Box, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import './Homepage.css'
import mainPhoto from "../../images/restauranfood.jpg";


export default function HeroSection() {

    return (
        <div className="heroSection">
            <Box className="heroSection_description" display='flex' flexDirection="column" alignItems='baseline'>
                <Text className="heading" fontSize="6xl" color="#F4CE14">Little Lemon</Text>
                <Text className="subheading" fontSize='xl' mb="30px">Chicago</Text>
                <Text className="description" pr={30}> Lorem ipsum dolor sit amet consecipisicingent dignissimos, in officiis suscipit saepe perspiciatis sapiente sequi non illum? Veritatis, eos ab!</Text>
                <Button className="reserve_button" rightIcon={<ArrowForwardIcon />} bgColor="#F4CE14">Reserve a table</Button>
            </Box>
            <Box className="heroSection_image">
                <img src={mainPhoto} alt="main"></img>
            </Box>
        </div>
    )
}