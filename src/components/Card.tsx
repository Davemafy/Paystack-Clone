import HeroText from "./HeroText";
import ArrowLink from "./ArrowLink";

const Card = ({img, title, paragraph, headingStyles, paragraphStyles }) => {
    return (
        <div className="bg-white rounded p-6 py-8 min-h-[15rem] outline outline-1 outline-slate-100">
            <figure className="grid gap-8">
                <picture>
                    <img
                        className="h-24 w-fit  "
                        height="100%"
                        width="100%"
                        loading="lazy"
                        src={img}
                    />
                </picture>
                <figcaption>
                    <HeroText
                        title={title}
                        paragraph={paragraph}
                        headingStyles={"sms:text-[1.5rem] sms:leading-tight text-graph " + headingStyles}
                        paragraphStyles={"sms:text-[1rem] " + paragraphStyles}
                    />
                </figcaption>
                <ArrowLink
                    href=""
                    text="Learn More"
                    textColor="text-oxfordBlue"
                />
            </figure>
        </div>
    );
};

export default Card;
