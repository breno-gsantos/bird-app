import EighthSection from "@/components/EighthSection";
import FifthSection from "@/components/FifthSection";
import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import FourthSection from "@/components/FourthSection";
import Navbar from "@/components/Navbar/navbar";
import SecondSection from "@/components/SecondSection";
import SeventhSection from "@/components/SeventhSection";
import SixthSection from "@/components/SixthSection/SixthSection";
import ThirdSection from "@/components/ThirdSection";


export default function LandingPage() {
    return (
        <div>
             <Navbar />
             <FirstSection />
             <SecondSection />
             <ThirdSection />
             <FourthSection />
             <FifthSection />
             <SixthSection />
             <SeventhSection />
             <EighthSection />
             <Footer />
        </div>
    );
}