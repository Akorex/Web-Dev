import { CaronaCard } from "../components/home/carona-card"

export const HomePage = () => {
    return (
        <div 
        style={{
            fontFamily: "Poppins",
        }}
        className="homepage">

            <section className="px-6 mt-16 lg md:flex md:flex-wrap md:justify-between max-w-[1200px] mx-auto">
                <CaronaCard
                title="Carona Go"
                subtitle="Book a ride on our available routes"/>
            </section>
        </div>
    )
}