import HowitWorks from "@/components/Token/HowitWorks"
import Purchase from "@/components/Token/Purchase"
import Relationship from "@/components/Token/Realtionship"
import TokenHero from "@/components/Token/TokenHero"

const TokenHome = () => {
    return(
        <section>
            <TokenHero />
            {/* <HowitWorks /> */}
            <Relationship />
            <Purchase />
        </section>
    )
}

export default TokenHome