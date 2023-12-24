import { useState } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

interface Props {
    position?: "sticky top-0" | "fixed auto";
    
}

function Header({ position }: Props) {
    const style = "p-4 px-4  flex justify-between  border-b-[0.3px]  ";

    const [stick, setStick] = useState(false);

    const handleClick = () => {
        if (stick) {
            setStick(false);
        } else {
            setStick(true);
        }
    };

    return (
        <header className={"sticky top-0 z-10 bg-[#f0fff0f2] h-16"}>
            <div
                className={
                    stick &&
                    "absolute  right-0 left-0 top-0 " + " z-10 bg-[#f0fff0f2] "
                }
            >
                <div className={style}>
                    <Logo />
                    <MenuButton onClick={handleClick} />
                </div>
                {stick && <Menu />}
            </div>
        </header>
    );
}

export default Header;
