type Props = {
    title: string;
    paragraph: string;
    parentStyles?: sting;
    headingStyles?: sting;
    paragraphStyles?: sting;
};

const HeroText = ({ title, paragraph, parentStyles,  headingStyles , paragraphStyles}: Props) => {
    return (
        <div className={"grid gap-4 " + parentStyles}>
            <h1 className={" text-3xl sms:text-4xl font-boing " + headingStyles}>
                {title}
            </h1>
            <p className={" font-graph font-light opacity-90 " + paragraphStyles}>{paragraph}</p>
     </div >
    );
};

export default HeroText;
