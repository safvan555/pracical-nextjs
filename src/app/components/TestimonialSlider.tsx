"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Their communication and ability to deliver were the most impressive aspects.",
    role: "Director",
    company: "Travel Agency, Mauritius",
    flag: "\ud83c\uddf2\ud83c\uddfb",
  },
  {
    text: "Their communication was great.",
    role: "CEO",
    company: "Training & Consulting Company, India",
    flag: "\ud83c\uddee\ud83c\uddf3",
  },
  {
    text: "They have good experience in their field.",
    role: "Executive",
    company: "Goverdhan Sortex, India",
    flag: "\ud83c\uddee\ud83c\uddf3",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="w-full bg-white py-10">
      <h2 className="text-center text-2xl font-bold text-blue-700 mb-6">
        What People Say About Us
      </h2>
      <div className="overflow-hidden space-y-6">
        {/* First Row - Right to Left */}
        <div className="flex space-x-6 animate-slide-right">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] p-4 shadow-lg border rounded-lg bg-white"
            >
              <p className="text-gray-700">{item.text}</p>
              <div className="mt-2 font-semibold">{item.flag} {item.role}</div>
              <div className="text-gray-500 text-sm">{item.company}</div>
            </div>
          ))}
        </div>

        {/* Second Row - Left to Right */}
        <div className="flex space-x-6 animate-slide-left">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] p-4 shadow-lg border rounded-lg bg-white"
            >
              <p className="text-gray-700">{item.text}</p>
              <div className="mt-2 font-semibold">{item.flag} {item.role}</div>
              <div className="text-gray-500 text-sm">{item.company}</div>
            </div>
          ))}
        </div>

                {/* First Row - Right to Left */}
        <div className="flex space-x-6 animate-slide-right">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] p-4 shadow-lg border rounded-lg bg-white"
            >
              <p className="text-gray-700">{item.text}</p>
              <div className="mt-2 font-semibold">{item.flag} {item.role}</div>
              <div className="text-gray-500 text-sm">{item.company}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes slide-left {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }

        .animate-slide-right {
          display: flex;
          animation: slide-right 20s linear infinite;
        }

        .animate-slide-left {
          display: flex;
          animation: slide-left 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;