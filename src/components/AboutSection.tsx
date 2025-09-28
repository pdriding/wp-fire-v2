import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about-section"
      className="pt-[10rem] pb-[5rem] bg-[#f5f5f5] mb-[1.25rem] w-screen"
    >
      <div className="max-w-[70rem] px-[0.8rem] mx-auto w-full">
        <span className="block text-[1rem]  font-medium uppercase tracking-[0.375px] text-red-500">
          Fire Protection Installation and Services
        </span>
        <h2 className="font-bold text-black tracking-[-0.25px] text-[2rem] leading-[1.2] mb-[3.5rem]">
          Welcome to WP Fire we are a leading fire alarm installation company
          operating in and around London and South East England.
        </h2>

        <div className="about-section-flex flex justify-around mb-[1.25rem]">
          <div className="about-section-texts w-1/2">
            <p className="about-section-text-1 leading-[2rem] pl-[1.25rem] mb-[1.25rem] text-[1.25rem] font-medium">
              So why do our clients choose WP Fire — and why do they return to
              us for new projects? The answer is simple: we put the customer
              first. Every system we design, install, commission, or maintain is
              tailored to the specific needs of the building and the people who
              rely on it.
            </p>
            <p className="about-section-text-2 font-light leading-[1.75rem] pl-[1.25rem] text-[1.25rem]">
              WP Fire was established in 2022 with a clear mission: to deliver
              reliable, compliant, and high-quality fire and security solutions
              that protect people, property, and businesses. In a short time, we
              have built strong relationships with local councils, developers,
              and main contractors, who trust us to handle projects of all sizes
              with professionalism and care.
            </p>
          </div>
          <div className="install-picture-container self-center">
            <img
              className="install-picture block w-[90%] pr-[1.25rem] pb-[5rem] pl-[5rem]"
              src="/src/assets/images/fire-alarm-install.jpg"
              alt="Man installing fire alarm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
