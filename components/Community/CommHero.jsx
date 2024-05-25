const CommunityHero = () => {

    const heading = "AiNrzy Community"
    const description = "Welcome to our AI Open Source Dev Community! Join us in shaping the future of technology as we collaborate, innovate, and contribute to open-source projects. Whether you're a seasoned developer or just starting out, there's a place for you here. Let's harness the power of AI to build a better tomorrow, together."

    return(
        <section className="w-full flex flex-col justify-center items-center gap-3 px-5 py-36">
            <h1 className="text-5xl font-semibold text-slate-200 text-center max-w-[500px]">{heading}</h1>
            <h2 className="font-medium text-slate-300 text-center max-w-[900px]">{description}</h2>
        </section>
    )
}

export default CommunityHero;