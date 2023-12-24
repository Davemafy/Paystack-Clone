import HeroText from "./HeroText";
import Card from "./Card.tsx";
import InterImgSrc from "../assets/images/For-International-Businesses_180823_165939.svg";
import EnterpreImgSrc from "../assets/images/For-Entrepreneurs_180823_165709.svg";
import LargeCopImgSrc from "../assets/images/For-Large-Corporations_180823_165502.svg";

const TestimonialsSection = () => {
    return (
        <section className="p-4 py-10 grid gap-6 bg-aliceBlue">
            <HeroText
                title="Trusted by 200,000+ businesses"
                paragraph="Thousands of organizations of all sizes trust Paystack to grow their business."
                headingStyles=""
            />
            <div className="grid gap-8">
                <Card
                    img={InterImgSrc}
                    title="Paystack for Global Brands"
                    paragraph="We help global brands accept payments from across Africa"
                />
                <Card
                    img={EnterpreImgSrc}
                    title="Paystack for Entrepreneurs"
                    paragraph="From startup to scale-up, we can support you at every stage of your businesses’ growth"
                />
                <Card
                    img={LargeCopImgSrc}
                    title="Paystack for Large Organizations"
                    paragraph="Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely."
                />
            </div>
        </section>
    );
};

export default TestimonialsSection;
