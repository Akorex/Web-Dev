import { CaronaCard } from "../components/home/carona-card"
import { Navbar } from "../components/shared/navbar"
import heroImage from "../assets/images/hero-image.png"
import { Link } from "react-router-dom"
import checkmark from "../assets/svg/check.svg"
import shuttle from "../assets/images/shuttle.jpg"


const features = [
    "Easy-to-use web app",
    "Professional Drivers",
    "Clear and transparent prices",
    "Diverse vehicles for your needs",
  ];
  

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
                
                <CaronaCard
                title="Carona Share"
                subtitle="Carpool with other vetted riders" />
            </section>


    <section className="mt-24 px-6">
        <div className="lg:flex lg:items-center lg:justify-between max-w-[1200px] mx-auto">
            <div className="lg:w-[48%]">
                <h3 className="text-[#0B996F] text-4xl">
                    Make your travel experience as easy and stress-free as possible
                </h3>
                <p className="mt-4">
                At Carona, we make travel enjoyable and convenient. Our 
                user-friendly interface allows you to quickly find and connect 
                with carpool partners. Safety is our top priority, 
                with thorough verification of all drivers and passengers. 
                Enjoy a seamless, stress-free journey with us!
                </p>

            <div className="mt-4">
              {features.map((feature, idx) => (
                <div className="flex items-center mb-2" key={idx}>
                  <div className="inline-block mr-2 h-[28px] w-[28px] rounded-full bg-[#E2F4EA] relative">
                    <img
                      src={checkmark}
                      className="w-[10px] relative top-[50%] -translate-y-[50%] mx-auto"
                    />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
            </div>
            <img className="my-8 rounded-2xl lg:w-[48%]" src={shuttle} />
        </div>


        <div className="md:flex md:items-center md:justify-between md:my-16 max-w-[1000px] mx-auto">
            <div className="md:w-[48%] max-w-[480px]">
                <h3 className="text-[#0B996F] text-4xl">
                Ensuring your safety is guaranteed
                </h3>

                <p className="mt-4">
                Your safety is our top priority. We ensure all drivers and 
                passengers are thoroughly verified, and we offer in-app 
                features like real-time tracking and emergency support. 
                Travel with peace of mind knowing that we are committed 
                to your safety every step of the way.
                </p>


            </div>
        </div>

    </section>
        </div>
    )
}