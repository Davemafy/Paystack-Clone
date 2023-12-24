import { useState } from "react";
import MenuImgSrc from "../assets/images/menu.svg";
import CloseImgSrc from "../assets/images/close.svg";

type Props = {
    styles?: string;
    onClick: () => void;
};

const MenuButton = ({ styles, onClick }: Props) => {
    const [src, setSrc] = useState(MenuImgSrc);

    const handleClick = () => {
        if ((src === MenuImgSrc)) {
            setSrc(CloseImgSrc);
            onClick();
        } else {
            setSrc(MenuImgSrc);
            onClick();
        }
    };

    return (
        <button onClick={handleClick} className="w-6 aspect-square">
            <img src={src} onClick={handleClick} className={styles} alt="menu"/>
        </button>
    );
};

export default MenuButton;
