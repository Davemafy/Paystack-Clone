import Dominos from "../assets/images/Dominos-Plain.svg";
import Mtn from "../assets/images/mtn-group-grayscale.svg";
import Bolt from "../assets/images/Bolt-Stack-Blue_200304_153027.svg";

const ReviewSection = () => {
    return (
        <section className="bg-honeydew p-6 sms:p-4  sms:pt-10 grid ">
            <div className="grid pb-8 border-b" >
                <h3 className="text-[.8rem] mb-3">Trusted by over 200,000 businesses</h3>
                <div className="flex gap-4 h-[1.115rem]">
                    <img className=""  src={Dominos} alt="Dominos"/>
                    <img className="" src={Mtn} alt="Mtn"/>
                    <img className="" src={Bolt} alt="Bolt"/>
                </div>
            </div>
            <div className="py-8 pb-8 text-[.9rem]">
                <p className="leading-relaxed">
                    Watch MTN Chief Transformation Officer, Olubayo Adekanmbi,
                    discuss working with Paystack
                </p>
                <button className="py-4 text-ceruleanlh "> Play Video</button>
            </div>
        </section>
    );
};

export default ReviewSection;
