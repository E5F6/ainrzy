import Link from "next/link";

const Ecosystem = () => {

    const hellox = [
        {
            image: "/eco1.png",
            title: "Bring GPUs to Web3",
            text: "Become a captain and get rewards",
            link: "",
            button: "Become a captain",
        },
        {
            image: "/eco2.png",
            title: "Bring AI Models to Web3",
            text: "Gain access to GPUs for open source AI projects",
            link: "",
            button: "Build on AINRZY",
        },
        {
            image: "/eco3.png",
            title: "Bring NFTs to Life",
            text: "Utilize GPUs and open source to transform creations into AINFTs",
            link: "",
            button: "Mint your intelligence",
        },
    ]

    return(
        <section className="w-full flex flex-col justify-center items-center">
            <div className="w-full lg:w-[80vw] flex flex-col justify-center items-center gap-3 px-7 py-20">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">AI Network Ecosystem</h1>
            <h2 className="font-medium text-slate-300 text-center max-w-[900px]">AI Network is a decentralized AI development ecosystem open to all by gathering developers, GPUs, resources for development, and creator-based data in one place. It represents the future of collaborative AI to realize AI for everyone.</h2>
            <div className="flex flex-wrap justify-center items-center gap-5">
                <button className="bg-sky-600 hover:bg-sky-700 transition ease-in-out px-5 py-3 font-medium text-xl text-slate-200 rounded-full">Discover More</button>
                <button className="bg-sky-600 hover:bg-sky-700 transition ease-in-out px-5 py-3 font-medium text-xl text-slate-200 rounded-full">Join Discord</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5 mt-7">
            {hellox.map((hello,index)=>(
                <div key={index} className="flex flex-col justify-center items-center gap-3 text-center">
                    <img src={hello.image} alt="" className="max-h-[300px]"/>
                    <h1 className="text-2xl font-semibold text-slate-200">{hello.title}</h1>
                    <h2 className="text-sm font-medium text-slate-300">{hello.text}</h2>
                    <Link href={hello.link} className="text-slate-200 underline font-medium">{hello.button}</Link>
                </div>
            ))}
            </div>
            </div>
        </section>
    )
}

export default Ecosystem;