const ArrowLink = ({ href, text , textColor="text-greenPantone" }) => {
    return (
        <a href={href} className="flex items-center gap-2 ps-1">
            <img src={""} className={"bg-greenPantone w-5 h-5 rounded-full " } />
            <p className={"text-sm " + textColor}>{text}</p>
        </a>
    );
};

export default ArrowLink;
