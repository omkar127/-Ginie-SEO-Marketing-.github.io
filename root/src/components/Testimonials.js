import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      quote: "Ginie transformed our SEO strategy!",
      client: "John Doe",
      image: "path-to-image.jpg" // Optional client image
    },
    {
      quote: "Incredible results within just a few weeks!",
      client: "Jane Smith",
      image: "path-to-image.jpg"
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      {testimonialsData.length > 0 ? (
        testimonialsData.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            {testimonial.image && (
              <img
                src={testimonial.image}
                alt={`Photo of ${testimonial.client}`}
                className="testimonial-image"
              />
            )}
            <p>"{testimonial.quote}"</p>
            <p>- {testimonial.client}</p>
          </div>
        ))
      ) : (
        <p>No testimonials available at the moment.</p>
      )}
    </section>
  );
};

export default Testimonials;


