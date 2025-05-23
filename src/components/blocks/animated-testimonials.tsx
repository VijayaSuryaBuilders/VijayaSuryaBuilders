/* eslint-disable */
// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface AnimatedTestimonialsProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  testimonials?: Testimonial[];
  autoRotateInterval?: number;
  trustedCompanies?: string[];
  trustedCompaniesTitle?: string;
  className?: string;
}

// Sample testimonials data for demo
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,

    name: "Rahul Sharma",

    role: "Villa Owner, Kudroli",

    company: "Mangalore",

    content:
      "Vijayasurya Builders transformed my dream home into reality. Their attention to detail and commitment to quality is unmatched. I couldn't be happier with the results!",

    rating: 5,

    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    id: 2,

    name: "Priya Nayak",

    role: "Commercial Project",

    company: "Mangalore",

    content:
      "Professional, reliable, and efficient! Vijayasurya Builders delivered our commercial project on time and within budget. Their team is knowledgeable and easy to work with.",

    rating: 4,

    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },

  {
    id: 3,

    name: "Suresh Kamath",

    role: "Villa Client",

    company: "Kotekar",

    content:
      "The team at Vijayasurya Builders is exceptional. They guided us through every step of the construction process, ensuring our vision was realized. Highly recommend!",

    rating: 5,

    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const defaultTrustedCompanies = [];

export default function AnimatedTestimonials({
  title = "Built on Trust and Quality",
  subtitle = "Don't just take our word for it. See what homeowners, architects, and builders have to say about our craftsmanship and service.",
  badgeText = "Trusted by Homeowners & Builders",
  testimonials = defaultTestimonials,
  autoRotateInterval = 6000,
  trustedCompanies = defaultTrustedCompanies,
  trustedCompaniesTitle = "Chosen by industry leaders and satisfied families",
  className = "",
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto rotate testimonials
  useEffect(() => {
    if (!isAutoRotating || autoRotateInterval <= 0 || testimonials.length <= 1)
      return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, autoRotateInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRotateInterval, testimonials.length, isAutoRotating]);

  const handlePrevious = () => {
    setIsAutoRotating(false);
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setIsAutoRotating(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoRotating(false);
    setActiveIndex(index);
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className={`py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          {badgeText && (
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-100 text-teal mb-6">
              <Star className="mr-2 h-4 w-4  fill-amber-500 text-amber-500" />
              <span>{badgeText}</span>
            </div>
          )}

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none z-20">
            <button
              onClick={handlePrevious}
              className="pointer-events-auto -ml-4 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto -mr-4 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Testimonial Cards Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-8 py-12"
                >
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative">
                      {/* Quote Icon */}
                      <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-100" />

                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-16 w-16 rounded-full object-cover border-4 border-blue-100"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=3b82f6&color=fff&size=64`;
                          }}
                        />
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-teal"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trusted Companies */}
        {trustedCompanies.length > 0 && (
          <div className="mt-20 text-center">
            <h3 className="text-sm font-medium text-gray-500 mb-8 uppercase tracking-wider">
              {trustedCompaniesTitle}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {trustedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="text-xl font-semibold text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
