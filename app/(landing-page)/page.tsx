import FirstSection from "@/components/FirstSection";
import FourthSection from "@/components/FourthSection";
import Navbar from "@/components/Navbar/navbar";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";


export default function LandingPage() {
    return (
        <div>
             <Navbar />
             <FirstSection />
             <SecondSection />
             <ThirdSection />
             <FourthSection />
        </div>
    );
}