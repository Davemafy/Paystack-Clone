import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import { useState, useEffect } from "react";

function Menu() {
    const items = [
        "Why Paystack ",
        "Customers",
        "Pricing",
        "Learn",
        "Developers",
        "Support",
        "Login"
    ];

    const [offset, setOffset] = useState(true);
    useEffect(() => {
        setOffset(false);
    }, []);

    const styles = offset
        ? " translate-[-2%]  opacity-0 "
        : " transition  duration-[400ms] will-change-transform ";

    const style =
        "  p-6 sms:p-4 pt-6 min-h-[100vmax]  flex justify-between overflow-hidden outline outline-slate-100 ";

    return (
        <nav className={styles + style}>
            <ul className="grid w-full h-fit gap-2 text-sm">
                {items.map((item, index) => (
                    <li key={index} className="h-full">
                        <a
                            href="#"
                            className={
                                index === items.length - 1
                                    ? "text-mediumSeagreen py-1.5  block w-full "
                                    : "block w-full py-1.5"
                            }
                        >
                            {item}
                        </a>
                    </li>
                ))}
                <button className="bg-greenPantone w-full text-white p-3 px-4 rounded">
                    Create free account
                </button>
            </ul>
        </nav>
    );
}

export default Menu;
