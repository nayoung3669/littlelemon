import HeroSection from "./HeroSection";
import Hightlights from "./Highlights";
import CustomersSay from "./CustomersSay";

export default function Homepage() {
    
    return(
    <div className="main">
        <HeroSection />
        <Hightlights />
        <CustomersSay />
    </div>

    )
}