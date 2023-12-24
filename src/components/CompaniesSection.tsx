import HeroText from "./HeroText";

const CompaniesSection = () => {
    return (
        <section className="p-4 py-10 grid gap-6 ">
            <HeroText
                title="Powering growth for amazing businesses"
                paragraph="Paystack is a growth engine for a new generation of innovative, forward-looking organizations operating in Africa."
            />
            <ul className="flex flex-wrap "></ul>
        </section>
    );
};

export default CompaniesSection;
