import FirstSection from "@/components/FirstSection";
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
        </div>
    );
}