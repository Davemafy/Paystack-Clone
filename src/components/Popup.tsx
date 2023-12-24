type Props = {
    children?: ReactNode;
    sticky: Boolean;
};

const Popup = ({ children, sticky }: Props) => {
    const styles =
        "bg-prussianBlue text-white font-sans text-center leading-5 text-[.8rem] p-3 pt-2";
    return (
        <div className={styles}>
            <a href="#" className="w-full  h-full">
                🎉 New: Paystack Virtual Terminal — accept blazing fast
                in-person payments at scale, with ZERO hardware <br></br> costs.
            </a>
        </div>
    );
};

export default Popup;
