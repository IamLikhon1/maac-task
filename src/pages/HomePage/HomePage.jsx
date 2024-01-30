import Awards from "./Awards";
import Banner from "./Banner";
import FAQSection from "./FAQSection";
import Features from "./Features";
import ImagesSection from "./ImagesSection";
import SponsorShip from "./SponsorShip";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <ImagesSection/>
            <Features/>
            <Awards/>
            <FAQSection/>
            <SponsorShip/>
            
        </div>
    );
};

export default HomePage;