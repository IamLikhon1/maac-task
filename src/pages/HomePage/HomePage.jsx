import Awards from "./Awards";
import Banner from "./Banner";
import FAQSection from "./FAQSection";
import ImagesSection from "./ImagesSection";
import SponsorShip from "./SponsorShip";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <ImagesSection/>
            <FAQSection/>
            <Awards/>
            <SponsorShip/>
            
        </div>
    );
};

export default HomePage;