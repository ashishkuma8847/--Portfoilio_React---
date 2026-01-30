import { useTheme } from "../components/Themetoggel/ThemeProvider";
import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Contect() {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(false);
    const formRef = useRef();

    AOS.init({
        duration: 1200,
        once: false,
        offset: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            "service_u9z0c71",
            "template_wzh6j9m", 
            formRef.current,
            "PZY4wTEwD3-ix8O7f"
        )

            .then((result) => {
                console.log("Email sent successfully:", result.text);
               toast.success("Message sent successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setLoading(false);
                formRef.current.reset();
            }, (error) => {
                console.error("Email sending error:", error.text);
                 toast.error("Failed to send message.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setLoading(false);
            });
    };

    return (
        <section className={`${theme ? "text-black" : "text-white"}`}>
            <div className={`w-full min-h-screen pt-[70px] sm:pt-[100px] pb-[90px] lg:p-0 font-inter ${theme ? "text-black bg-portfolio-light" : "text-gray-300 bg-portfolio-dark"}`}>
            <ToastContainer/>
                <div className="container justify-center px-4 flex lg:flex-row flex-col items-center h-screen md:gap-10 gap-5 py-20">

                    {/* Left Side */}
                    <div data-aos="fade-right" data-aos-delay="200" className="flex-1 flex flex-col gap-2 md:gap-6 max-w-[400px] w-full">
                        <h1 data-aos="fade-right" className="md:text-4xl text-2xl font-semibold text-customTeal flex gap-[5px] md:gap-[10px]">
                            Let’s Connect
                        </h1>
                        <h2 data-aos="fade-right" data-aos-delay="400" className="md:text-2xl text-xl font-bold">
                            Let’s <span className="text-customTeal">Work Together!</span>
                        </h2>
                        <p data-aos="fade-right" data-aos-delay="600" className="text-lg leading-relaxed">
                            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="flex flex-col gap-3">
                            <p data-aos="fade-right" data-aos-delay="800" className="flex items-center gap-2 z-0">
                                <Mail className="text-customTeal" />
                                <a  rel="noopener noreferrer" href="mailto:ashishkuma8847@gmail.com" className="hover:underline hover:text-customTeal">
                                    ashishkuma8847@gmail.com
                                </a>
                            </p>
                            <p data-aos="fade-right" data-aos-delay="1000" className="flex items-center gap-2 z-0">
                                <Phone className="text-customTeal" />
                                <a  rel="noopener noreferrer" href="tel:+916284978409" className="hover:underline hover:text-customTeal">
                                    +91 6284978409
                                </a>
                            </p>
                            <p data-aos="fade-right" data-aos-delay="1200" className="flex items-center gap-2 z-0">
                                <MapPin className="text-customTeal" />
                                <a  rel="noopener noreferrer" href="https://www.google.com/maps/place/Abohar,+Punjab,+India" target="_blank" className="hover:underline hover:text-customTeal">
                                    Abohar, Punjab, India
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Right Side (Form) */}
                    <div className="flex-1 max-w-[500px] w-full">
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 bg-transparent">
                            <div data-aos="fade-down" data-aos-delay="800" className="flex flex-col w-full">
                            <input 
                                type="text"
                                name="from_name"
                                placeholder="Your Name"
                                required
                                className={`${theme ? " placeholder-black" :" placeholder-white"} bg-transparent pl border z-0 border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-customTeal`}
                            />
                            </div>
                                <div data-aos="fade-down" data-aos-delay="600" className="flex flex-col w-full">
                            <input 
                                type="email"
                                name="reply_to"
                                placeholder="Your Email"
                                required
                               className={`${theme ? " placeholder-black" :" placeholder-white"} bg-transparent pl border z-0 border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-customTeal`}
                            />
                            </div>
                            <div data-aos="fade-down" data-aos-delay="400" className="flex flex-col w-full">
                            <textarea 
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                required
                                className={`${theme ? " placeholder-black" :" placeholder-white"} bg-transparent pl border z-0 border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-customTeal`}
                            ></textarea>
                            </div>
                            <div data-aos="fade-down" data-aos-delay="200" className="flex flex-col w-full">
                            <button 
                                type="submit"
                                disabled={loading}
                                className="bg-customTeal z-0 text-white   font-semibold py-3 px-6 rounded-xl transform hover:scale-105 transition-transform duration-300 shadow-lg disabled:opacity-50 mb-16 md:mb-0"
                            >
                                {loading ? "Sending..." : "Send"} <Send className="inline w-5 h-5" />
                            </button></div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contect;
