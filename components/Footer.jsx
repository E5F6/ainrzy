import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {

    const socials = [
        {
            name: "Twitter",
            icon: <FaXTwitter />,
            url: ""
        },
        {
            name: "Telegram",
            icon: <FaTelegram />,
            url: ""
        },
        {
            name: "Discord",
            icon: <FaDiscord />,
            url: ""
        },
        {
            name: "Github",
            icon: <FaGithub />,
            url: ""
        },
        {
            name: "Youtube",
            icon: <FaYoutube />,
            url: ""
        }
    ]

    return (
        <footer className="w-full px-5 py-10 flex flex-col justify-center items-center footer">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 items-center w-full lg:w-[80vw] text-slate-200 text-center">
                    <div className="flex flex-col justify-start items-center gap-2">
                    <h1 className="text-2xl font-medium">AINRZY</h1>
                    <p className="text-xl font-medium">Bringing AI To Web3</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                    <Link href="" className="text-xl font-medium hover:underline">Home</Link>
                    <Link href="" className="text-xl font-medium hover:underline">Ecosystem</Link>
                    <Link href="" className="text-xl font-medium hover:underline">Token</Link>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-3">
                        <h1 className="text-2xl font-medium">Follow Us On</h1>
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            {socials.map((social, index) => (
                                <div key={index} className="">
                                    <Link href={social.url}>
                                        <h1 className="text-3xl">{social.icon}</h1>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
            </section>
        </footer>
    )
}

export default Footer;