import Link from "next/link";

const ContributeProjects = () => {
    const heading = "Projects You Can Contribute To"
    const description = "Explore meaningful projects awaiting your contributions. Dive into collaborative development, enhancing your skills while making a positive impact on various endeavors."

    const projects = [
        {
            name: "Project 1",
            desc: "Description about project",
            link: "https://github.com/ainrzy-org",
        },
        {
            name: "Project 2",
            desc: "Description about project",
            link: "https://github.com/ainrzy-org",
        },
        {
            name: "Project 3",
            desc: "Description about project",
            link: "https://github.com/ainrzy-org",
        },
    ]

    return(
        <section className="w-full flex justify-center items-center px-7 py-20 sextion">
            <div className="flex flex-col justify-center items-center gap-5 w-[80vw]">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">{heading}</h1>
            <h2 className="font-medium text-slate-300 text-center w-[80vw] md:w-[60vw]">{description}</h2>
            <div className="flex flex-wrap justify-center items-stretch gap-5 mt-7">
            {projects.map((project , index) => (
                <div className="flex flex-col justify-center items-center gap-3 text-center max-w-[300px] px-3 py-5 border-2 border-sky-600 rounded-lg" key={index}>
                    <h1 className="text-2xl text-slate-200">{project.name}</h1>
                    <h2 className="text-xl font-semibold text-slate-100">{project.desc}</h2>
                    <Link href = {project.link}><h4 className="text-slate-200 underline hover:text-sky-600">Click To Contribute</h4></Link>
                </div>
            ))}
            </div>
            </div>
        </section>
    )
}

export default ContributeProjects;