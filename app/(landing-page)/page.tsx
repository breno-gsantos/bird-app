import EighthSection from "@/components/Home/EighthSection";
import FifthSection from "@/components/Home/FifthSection";
import FirstSection from "@/components/Home/FirstSection";
import Footer from "@/components/Home/Footer";
import FourthSection from "@/components/Home/FourthSection";
import Navbar from "@/components/Home/Navbar/navbar";
import SecondSection from "@/components/Home/SecondSection";
import SeventhSection from "@/components/Home/SeventhSection";
import SixthSection from "@/components/Home/SixthSection/SixthSection";
import ThirdSection from "@/components/Home/ThirdSection";


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