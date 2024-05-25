import Link from "next/link";

const EcoHero = () => {
    return(
        <section className="w-full flex justify-center items-center gap-3 px-5 py-36">
           <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-2 justify-center items-center gap-10 w-[80vw]">
            <div className="flex flex-col justify-center items-center gap-3 col-span-1">
            <h1 className="text-5xl font-semibold text-slate-200 text-center">Ainrzy Network Ecosystem</h1>
            <h2 className="font-medium text-slate-300 text-center">Ainrzy Network is a decentralized AI development ecosystem open to all by gathering developers, GPUs, resources for development, and creator-based data in one place. It represents the future of ‘collaborative AI’ to realize AI for everyone.</h2>
            <Link href="" className="bg-sky-600 hover:bg-sky-700 transition ease-in-out px-5 py-3 font-medium text-xl text-slate-200 rounded-full">Join Our Community</Link>
            </div>
            <div className="flex justify-center items-center col-span-1">
                <img src="/ecohero.png" alt="" className="max-h-[450px]"/>
            </div>
           </div>
        </section>
    )
}

export default EcoHero;