import { CaronaCard } from "../components/home/carona-card"
import { Navbar } from "../components/shared/navbar"
import heroImage from "../assets/images/hero-image.png"
import { Link } from "react-router-dom"



export const HomePage = () => {
    return (
        <div 
        style={{
            fontFamily: "Poppins",
        }}
        className="homepage">
            
        <Navbar />
        <section className="min-h-[100vh] md:min-h-[800px] hero-bg rounded-3xl relative -top-8 text-white p-6 md:flex md:items-center md:justify-center">
        <div className="md:flex md:items-center">
          <img
            src={heroImage}
            className="mx-auto block w-[80%] pt-[100px] max-w-[300px] lg:max-w-[400px] md:pt-0 md:mr-4 md:mx-0"
          />
          <div className="max-w-[620px]">
            <div className="bg-[#F3FDF8] inline-block p-6 py-2 rounded-full mt-12">
              <div className="h-[10px] w-[10px] rounded-full bg-[#319A64] inline-block mr-4" />
              <p className="capitalize text-[#377631] text-lg inline-block">
                the perfect ride awaits
              </p>
            </div>
            <h1 className="text-[36px] capitalize mt-4 leading-[38px]">
              Get where you need to go, safely and affordably
            </h1>
            <p className="mt-4 text-[16px]">
              With Carona, you get to share the ride with people going your way,
              enjoy a more comfortable commute, and maybe even make a few new
              friends along the way.
            </p>
            <div className="flex justify-between md:justify-normal items-center mt-6">
              <Link
                to="/login"
                className="bg-[#319A64] border-[#319A64] border-2 p-4 rounded-xl text-lg md:mr-4"
              >
                Book Your Ride
              </Link>
              <button className="bg-transparent border-white border-2 p-4 rounded-xl text-lg">
                Learn More
              </button>
            </div>
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