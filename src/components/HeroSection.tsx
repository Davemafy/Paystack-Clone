import { useState, useEffect } from "react";
import React from "react";

const HeroSection = () => {
    const [offset, setOffset] = useState(true);
    useEffect(() => {
        setOffset(false);
    }, []);

    const styles = offset
        ? " translate-y-[16%] opacity-0 " + " transition duration-[300ms] will-change-transform "
        : " transition duration-[300ms] will-change-transform ";

    return (
        <section
            className={
                
                "bg-honeydew p-6 sms:p-4 pt-6 grid gap-3 transition duration-[1000ms] "
            }
        >
            <h1 className={styles + " delay-150 text-3xl sms:text-4xl font-boing "}>
                Modern online and offline payments for Africa
            </h1>
            <p className={styles + " font-graph pb-4 "}>
                Paystack helps businesses in Africa get paid by anyone, anywhere
                in the world
            </p>
            <div className={" flex flex-wrap gap-4 gap-y-2 "}>
                <a
                    href="#"
                    className={
                        styles + " bg-greenPantone text-white p-3 px-4 transition-opacity rounded"
                    }
                >
                    Create a free account
                </a>
                <a
                    href="#"
                    className={" text-mediumSeagreen p-3 px-4 rounded "}
                >
                    or Contact Sales
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
