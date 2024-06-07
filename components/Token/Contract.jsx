import Link from "next/link";

const Contract = () => {

    const models = [
        {
            name: "View Smart Contract",
            url: "https://cardona-zkevm.polygonscan.com/token/0x5bf8db72bba16403c4e34377f9c42057637830f8",
        },
    ]

    return (
        <section className="w-full flex flex-col justify-center items-center gap-5 px-7 py-20 sextion">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">AiNrzy Smart Contract</h1>
            <h1 className="text-xl font-medium text-slate-300 text-center">AiNrzy is a custom ERC-20 token on Polygon for secure and efficient blockchain transactions.</h1>
            <div className="flex flex-wrap justify-center items-center gap-5">
                {models.map((model, index) => (
                    <Link key={index} href={model.url} target="blank" className="rounded-lg flex flex-col justify-center items-center gap-3 px-5 py-3 border-2 border-sky-600 hover:bg-sky-600 transition ease-in-out">
                        <p className="text-xl font-medium text-slate-300">{model.name}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Contract;