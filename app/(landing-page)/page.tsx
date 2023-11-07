import FirstSection from "./FirstSection/page";
import Navbar from "./Navbar/navbar";
import SecondSection from "./SecondSection/page";

export default function LandingPage() {
    return (
        <div>
             <Navbar />
             <FirstSection />
             <SecondSection />
        </div>
    );
}