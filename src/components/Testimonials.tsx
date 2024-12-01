
import { FC } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Wade Warren",
    role: "Position, Company name",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    avatar: "/image/css1.png",
  },
  {
    name: "Mark Kipkemboi",
    role: "Scrum Master",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    avatar: "/image/css2.png",
  },
  {
    name: "Stephen Kerubo",
    role: "UI/UX Designer",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    avatar: "/image/css3.png",
  },
];

const Testimonials: FC = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">What Our Students Say</h2>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 md:w-12 md:h-12 rounded-full border"
                  width={80}
                  height={80}
                />
              </div>
              <div className="mb-4">
                <div className="flex justify-center mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots and Arrows for Mobile */}
        <div className="flex justify-between items-center mt-4 md:hidden">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
            &lt;
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`block w-2 h-2 rounded-full ${
                  i === 0 ? "bg-gray-800" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
