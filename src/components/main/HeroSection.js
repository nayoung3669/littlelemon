import { Heading, Box, Text } from "@chakra-ui/react";
import './main/'

export default function HeroSection() {
    return (
        <div className="heroSection">
            <Box className="heroSection_description">
                <Heading mb={4} >Little Lemon</Heading>
                <Text fontSize='xl'>Chicago</Text>
            </Box>
        </div>
    )
}