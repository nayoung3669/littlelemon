import { Heading, Box, Text } from "@chakra-ui/react";
import './Main.css'

export default function HeroSection() {
    return (
        <div className="heroSection">
            <Box className="heroSection_description">
                <Text mb={4} fontSize="5xl" >Little Lemon</Text>
                <Text fontSize='xl'>Chicago</Text>
            </Box>
        </div>
    )
}