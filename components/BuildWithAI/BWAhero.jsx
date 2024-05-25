import Link from "next/link"

const BwaHero = () => {

    const heading = "Projects Build Using Ai Api's"
    const description = "Explore our creations powered by AI APIs. Dive into innovative projects leveraging AI technology to enhance functionality and user experience."

    const projects = [
        {
            name: "Project 1",
            desc: "Description about project",
            link: "/buildwithai/cryptoprice",
            image: "",
        },
        {
            name: "Project 2",
            desc: "Description about project",
            link: "/buildwithai/texttoimage",
            image: "",
        },
        {
            name: "Project 3",
            desc: "Description about project",
            link: "/buildwithai/chatbot",
            image: "",
        },
    ]

    return (
        <section className="w-full flex justify-center items-center px-5 py-36">
            <div className="flex flex-col justify-center items-center gap-3 w-[80vw] md:w-[60vw]">
                <h1 className="text-5xl font-semibold text-slate-200 text-center">{heading}</h1>
                <h2 className="font-medium text-slate-300 text-center">{description}</h2>
                <div className="flex flex-wrap justify-center items-stretch gap-5 mt-7">
                    {projects.map((project, index) => (
                        <div className="flex flex-col justify-center items-center gap-3 text-center max-w-[300px] px-3 py-5 border-2 border-sky-600 rounded-lg" key={index}>
                            <img src={project.image} alt="" className="h-[200px] w-full object-cover"/>
                            <h1 className="text-2xl text-slate-200">{project.name}</h1>
                            <h2 className="text-xl font-semibold text-slate-100">{project.desc}</h2>
                            <Link href={project.link}><h4 className="text-slate-200 underline hover:text-sky-600">See Project</h4></Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BwaHero;