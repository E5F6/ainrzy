import Link from "next/link";

const HowitWorks = () => {

    const steps = [
        {
            stepno: "Resource Providers Contribute GPUs to AI Network and get rewarded with $AIN token",
        },
        {
            stepno: "Developers Contribute open source code to AI Network and get rewarded with either $AIN token or computing resources",
        },
        {
            stepno: "Creators Utilize GPUs and open source to transform their AI creations into AINFTs.",
        },
    ]

    return(
        <section className="w-full flex justify-center items-center px-7 py-20 sextion">
            <div className="flex flex-col justify-center items-center gap-5 w-[80vw]">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">How It Works</h1>
            <div className="grid grid-cols-1 justify-center items-center gap-5 mt-3">
                {steps.map((step , index) => (
                    <div key={index} className="flex flex-col justify-center items-center gap-3 text-center w-full">
                        <h1 className="text-xl font-medium text-slate-200 mt-0 px-5 py-2 rounded-full bg-sky-600">{step.stepno}</h1>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default HowitWorks;