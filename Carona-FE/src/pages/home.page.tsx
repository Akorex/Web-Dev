import { CaronaCard } from "../components/home/carona-card"
import { Navbar } from "../components/shared/navbar"
import heroImage from "../assets/images/hero-image.png"



export const HomePage = () => {
    return (
        <div 
        style={{
            fontFamily: "Poppins",
        }}
        className="homepage">

            <Navbar />
            <section className="min-h-[100vh] md:min-h-[800px] hero-bg rounded-3xl relative -top-8 text-white p-6 md:flex md:items-center md:justify-center">
                <img src= {heroImage}
                className="mx-auto block w-[80%] pt-[100px] max-w-[300px] lg:max-w-[400px] md:pt-0 md:mr-4 md:mx-0"
                />
            </section>

            <section className="px-6 mt-16 lg md:flex md:flex-wrap md:justify-between max-w-[1200px] mx-auto">
                <CaronaCard
                title="Carona Go"
                subtitle="Book a ride on our available routes"/>
            </section>
        </div>
    )
}