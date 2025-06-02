import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { MdAgriculture, MdEngineering, MdHandyman } from 'react-icons/md';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "Kwame Mensah",
        role: "Smallholder Farmer",
        location: "Ashanti Region",
        image: "/images/customer1.jpg",
        text: "The maize planter from Fabri-Tech has transformed my farming. It's well-built, easy to use, and perfect for my small farm. The local materials used make maintenance simple.",
        rating: 5
    },
    {
        id: 2,
        name: "Abena Owusu",
        role: "Agricultural Cooperative Leader",
        location: "Kumasi",
        image: "/images/customer2.jpg",
        text: "Rita and her team at Fabri-Tech understand farmers' needs. Their machinery is durable and their training programs have helped many women in our cooperative learn valuable skills.",
        rating: 5
    },
    {
        id: 3,
        name: "John Addo",
        role: "Business Owner",
        location: "Ayigya",
        image: "/images/customer3.jpg",
        text: "The quality of their metal fabrication work is outstanding. From gates to industrial equipment, Fabri-Tech delivers exceptional craftsmanship every time.",
        rating: 5
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        });
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div 
                    className="text-center mb-16" 
                    data-aos="fade-down"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Community Impact Stories
                    </h2>
                    <p className="text-gray-600">Empowering farmers and craftswomen across Ghana</p>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <MdEngineering className="text-4xl text-blue-600 mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Local Fabrication</h3>
                        <p className="text-sm text-gray-600">Made with sustainable materials</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <MdAgriculture className="text-4xl text-blue-600 mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Farm Solutions</h3>
                        <p className="text-sm text-gray-600">Designed for African agriculture</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <MdHandyman className="text-4xl text-blue-600 mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Skills Training</h3>
                        <p className="text-sm text-gray-600">Empowering local women</p>
                    </div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div 
                        className="bg-white rounded-lg shadow-xl p-8 md:p-12"
                        data-aos="fade-up"
                    >
                        <FaQuoteLeft className="text-5xl text-blue-600 opacity-20 mb-8" />
                        
                        <div className="text-center">
                            <img 
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                            />
                            
                            <p className="text-gray-600 text-lg mb-8">
                                {testimonials[currentIndex].text}
                            </p>

                            <div className="flex justify-center gap-1 mb-4">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" />
                                ))}
                            </div>

                            <h4 className="text-xl font-semibold text-gray-800">
                                {testimonials[currentIndex].name}
                            </h4>
                            <p className="text-gray-600">
                                {testimonials[currentIndex].role}
                            </p>
                            <p className="text-gray-500 text-sm">
                                {testimonials[currentIndex].location}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all"
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft/>
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all"
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
