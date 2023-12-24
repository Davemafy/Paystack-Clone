import HeroText from "./HeroText";
import ArrowLink from "./ArrowLink";
import ImgSrc from "../assets/video/hand.gif";
import CheckImgSrc from "../assets/images/check.svg";
import RobustImgSrc from "../assets/images/Robust-Suite-of-APIs-Opt.png";

const CheckedList = ({ items, ulStyles }) => {
    return (
        <ul className={"grid gap-0.5 " + ulStyles}>
            {items.map((item, index) => (
                <li
                    key={index}
                    className="h-10 flex text-[0.9rem] items-center "
                >
                    <img
                        className="h-full aspect-square p-0 py-3.5 rounded pe-2 w-8 bg-honeydew "
                        src={CheckImgSrc}
                        alt="check"
                    />
                    <p className="translate-x-[-0.5rem]">{item}</p>
                </li>
            ))}
        </ul>
    );
};



const FeatureSection = () => {
    const items = [
        [
            "Card",
            "Bank Account",
            "Bank Transfer",
            "USSD",
            "Apple Pay",
            "Visa QR",
            "Mobile Money",
            "POS"
        ],
        [
            "Collect one-time and recurring payments from your app or website",
            "Make instant transfers",
            "Retrieve all your transaction and customer data",
            "Verify the identity of customers"
        ]
    ];
    return (
        <section className="p-6 sms:p-4 pt-6">
            <section className="pt-8 grid gap-8">
                <HeroText
                    title="Simple, easy payments"
                    paragraph="Building a business is hard. Getting paid shouldn't be."
                />
                <img src={ImgSrc} loading="lazy" alt="gif.svg" />
            </section>
            <section className="pt-10 grid gap-8">
                <HeroText
                    title="Delight customers with a seamless payments experience"
                    paragraph="Give your customers the gift of modern, frictionless, painless payments. Integrate Paystack once and let your customers pay you however they want. "
                    headingStyles="sms:text-[1.6rem] sms:leading-tight"
                    paragraphStyles="sms:text-md   "
                />
                <CheckedList items={items[0]} />
            </section>
            <section className="pt-10 grid gap-10">
                <HeroText
                    title="Enjoy phenomenal transaction success rates"
                    paragraph="We automatically route payments through the most optimal channels, ensuring the highest transaction success rates in the market. "
                    headingStyles="sms:text-[1.6rem] sms:leading-tight"
                    paragraphStyles="sms:text-md  "
                />
                <ArrowLink
                    href="#"
                    text="Find out how we achieve high success rates"
                />
                <img src={RobustImgSrc} loading="lazy" alt="Robust Suite of APIs Opt" />
            </section>
            <section className="pt-10 grid gap-8">
                <HeroText
                    title="Build custom payments experiences with well-documented APIs"
                    paragraph="Developers love our thorough, well-documented APIs that let you to build everything from simple weekend projects, to complex financial products serving hundreds of thousands of customers. If you can imagine it, you can build it with Paystack."
                    headingStyles="sms:text-[1.6rem] sms:leading-tight"
                    paragraphStyles="sms:text-[1rem] opacity-[80%]    "
                />
                <CheckedList items={items[1]} ulStyles="gap-2" />
                <ArrowLink
                    href="#"
                    text=" Paystack API Quickstart"
                />
            </section>
            <section className="py-14 grid gap-14">
              <HeroText
                    title="Protect yourself and your customers with advanced fraud detection"
                    paragraph="Paystack’s combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims."
                    headingStyles="sms:text-[1.6rem] sms:leading-tight"
                    paragraphStyles="sms:text-[1rem] opacity-[80%]   "
                />
              <HeroText
                    title="Detailed reporting for accounting, reconciliation, and audits"
                    paragraph="Understand your customers’ purchase patterns and do easy reconciliations with a robust data Dashboard and easy exports."
                    headingStyles="sms:text-[1.6rem] sms:leading-tight"
                    paragraphStyles="sms:text-[1rem] opacity-[80%]    "
                />
            </section>
        </section>
    );
};

export default FeatureSection;
