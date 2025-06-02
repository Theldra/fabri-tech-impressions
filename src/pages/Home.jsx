import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-20">
                <h1 className="text-5xl font-bold" data-aos="fade-up">
                    Welcome to Fabri-Tech Impressions
                </h1>
                <p className="mt-4 text-xl max-w-2xl mx-auto" data-aos="fade-up">
                    Innovative metal fabrication solutions for agriculture, 
                    empowering local farmers with sustainable machinery and equipment
                </p>
                <Link
                    to="/products" 
                    className="mt-8 inline-block bg-white text-blue-600 py-3 px-8 rounded-full hover:bg-blue-50 transition-colors" 
                    data-aos="fade-up"
                >
                    Explore Products
                </Link>
            </header>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
                        Our Solutions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
                            <h3 className="text-xl font-semibold mb-4">Maize Planter</h3>
                            <p className="text-gray-600">Efficient and sustainable planting solution for local farmers.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
                            <h3 className="text-xl font-semibold mb-4">Cargo Quad-Cycle</h3>
                            <p className="text-gray-600">Innovative transportation solution (currently in testing phase).</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;