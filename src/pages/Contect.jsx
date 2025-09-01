import { useTheme } from "../components/Themetoggel/ThemeProvider";
import  { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
function Contect() {
    const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
   const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
    return (
        <>
            <section className={`${theme ? "text-black" : "text-white"} `}>

                <div
                    className={`w-full min-h-screen font-inter ${theme ? "text-black bg-portfolio-light" : "text-gray-300 bg-portfolio-dark"}`}
                >
                    <div className="container justify-center px-4  flex items-center   h-screen gap-10 py-20">
                        {/* Left Side */}
                        <div className="flex-1 flex flex-col gap-6 max-w-[400px] w-full ">
                            <h1 className="text-4xl font-semibold text-customTeal flex gap-[10px]">
                                Let’s Connect <iframe title="id" src="https://lottie.host/embed/a8c326ab-79af-4c6a-ae2e-44fce48336e3/CguXzoecsQ.lottie " className="w-[34px] h-[34px]"></iframe>
                            </h1>
                            <h2 className="text-2xl font-bold">
                                Let’s <span className="text-customTeal">Work Together!</span>
                            </h2>
                            <p className="text-lg leading-relaxed">
                                I’m always open to discussing new projects, creative ideas, or
                                opportunities to be part of your vision.
                            </p>

                            {/* Contact Info */}
                            <div className="flex flex-col gap-3">
                                <p className="flex items-center gap-2  z-0">
                                    <Mail className="text-customTeal" />
                                    <a href="mailto:ashishkuma8847@gmail.com" className=" hover:underline hover:text-customTeal">
                                        ashishkuma8847@gmail.com
                                    </a>
                                </p>

                                <p className="flex items-center gap-2 z-0">
                                    <Phone className="text-customTeal" />
                                    <a href="tel:+916284978409" className="hover:underline hover:text-customTeal">
                                        +91 6284978409
                                    </a>
                                </p>

                                <p className="flex items-center gap-2 z-0">
                                    <MapPin className="text-customTeal" />
                                    <a href="https://www.google.com/maps/place/Abohar,+Punjab,+India" target="_blank" className="hover:underline hover:text-customTeal">Abohar, Punjab, India</a>
                                </p>
                            </div>
                        </div>

                        {/* Right Side (Form) */}
                        <div className="flex-1 max-w-[500px] w-full">
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4 mt-6 bg-transparent "
                            >
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="bg-transparent border z-0 border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-customTeal"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="bg-transparent border z-0 border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-customTeal"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows="5"
                                    className="bg-transparent border z-0 border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-customTeal"
                                ></textarea>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-customTeal z-0 text-white font-semibold py-3 px-6 rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg disabled:opacity-50 mb-16 md:mb-0"
                                >
                                    {loading ? "Sending..." : "Send"} <Send className="inline w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contect