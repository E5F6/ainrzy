import Link from "next/link";

const Trymodels = () => {
    return(
        <section className="w-full flex flex-col justify-center items-center gap-5 px-7 py-20 sextion">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">Try Decentralized Large Models</h1>
            <div className="flex flex-wrap justify-center items-center gap-5">
                <Link href="" className="rounded-lg flex flex-col justify-center items-center gap-3 px-5 py-3 border-2 border-sky-600 hover:bg-sky-600 transition ease-in-out">
                    <p className="text-xl font-medium text-slate-300 self-start">DChatGPT</p>
                    <p className="text-xl font-medium text-slate-300">#gptravel-man</p>
                </Link>
                <Link href="" className="rounded-lg flex flex-col justify-center items-center gap-3 px-5 py-3 border-2 border-sky-600 hover:bg-sky-600 transition ease-in-out">
                    <p className="text-xl font-medium text-slate-300 self-start">DStableDiffusion</p>
                    <p className="text-xl font-medium text-slate-300">#text-to-art</p>
                </Link>
            </div>
        </section>
    )
}

export default Trymodels;