import React from 'react'
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../Constants';
const Testimonials = () => {

    
    return (
        <section className="py-16 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                        Trusted by Healthcare Professionals
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See what our partners say about their experience working with MediCare <br />Surgical
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials