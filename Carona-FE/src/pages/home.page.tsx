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

                <div className="max-w-[620px]">
                    <div className="bg-[#F3FDF8] inline-block p-6 py-2 rounded-full mt-12">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#319A64] inline-block mr-4">
                            <p className="capitalize text-[#377631] text-lg inline-block">
                                the perfect ride awaits
                            </p>
                        </div>

                        <h1 className="ttext-[36px] capitalize mt-4 leading-[38px]">
                            Get where you need to go, safely and affordably
                        </h1>
                    </div>
                </div>
            </section>

            <section className="px-6 mt-16 lg md:flex md:flex-wrap md:justify-between max-w-[1200px] mx-auto">
                <CaronaCard
                title="Carona Go"
                subtitle="Book a ride on our available routes"/>
            </section>
        </div>
    )
}