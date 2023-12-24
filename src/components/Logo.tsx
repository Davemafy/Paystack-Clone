import ImgSrc from "/favicon.png";

type Props = {
    src?: string;
    name?: string;
};

const Logo = ({ src = ImgSrc, name = "paystack" }: Props) => {
    return (
        <div className="flex  items-center justify-between  gap-1 ">
            <img src={src} alt="logo.png" className="w-6  brightness-125 " />
            <h1 className="font-semibold  font-boing text-2xl ">{name}</h1>
        </div>
    );
};

export default Logo;
