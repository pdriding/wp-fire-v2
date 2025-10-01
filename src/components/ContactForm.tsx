import React, { useEffect, useRef } from "react";

export default function Contact() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.innerText =
        "Map placeholder (initialize Google Maps here with your API key)";
    }
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.log("Contact form submitted", data);
    alert("Thanks! Form data logged to console (implement POST to backend)");
    e.currentTarget.reset();
  }

  return (
    <section
      id="contact-section"
      className="p-30 bg-gray-100 h-[100vh] flex flex-col justify-center items-center"
    >
      {/* Header */}
      <h2 className="text-3xl mb-6 text-center text-red-600 font-extralight ">
        Contact Us
      </h2>
      {/* Main container */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl py-8 gap-8">
        {/* Map */}
        {/* <div id="contact-map" ref={mapRef} className="w-[40vw] h-[25vh] border border-gray-300 rounded-md overflow-hidden self-center text-center text-sm flex items-center justify-center" ></div> */}
        {/* Contact Form */}
        <div className="flex flex-col w-full md:w-1/2 items-center">
          <form
            onSubmit={handleSubmit}
            className="text-gray-800 w-[80%] text-sm"
          >
            <p className="italic text-gray-500 mb-2">
              Fields marked with an <span className="text-red-600">*</span> are
              required.
            </p>
            {/* Row 1 */}
            <div className="flex justify-between mb-2 gap-2">
              <div className="flex-1 mr-1">
                <label htmlFor="name" className="block text-base">
                  Your Name:<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 text-base mt-1 border border-gray-300 rounded-sm bg-white"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="company" className="block text-base">
                  Company:
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full p-2 text-base mt-1 border border-gray-300 rounded-sm bg-white"
                />
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex justify-between mb-2 gap-2">
              <div className="flex-1 mr-1">
                <label htmlFor="email" className="block text-base ">
                  Your Email:<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2 text-base mt-1 border border-gray-300 rounded-sm bg-white"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="phone" className="block text-base">
                  Your Phone Number:<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  className="w-full p-2 text-base mt-1 border border-gray-300 rounded-sm bg-white"
                />
              </div>
            </div>
            {/* Message */}
            <div className="mb-2">
              <label htmlFor="message" className="block text-base">
                Message:<span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full p-2 text-base mt-1 border border-gray-300 rounded-sm h-28 bg-white"
              ></textarea>
            </div>
            {/* Button */}
            <button
              type="submit"
              className="px-4 py-2 text-base text-white bg-red-600 rounded-sm hover:bg-red-700 self-start mt-1"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Enquiries */}
        <div className="flex justify-center w-full md:w-1/2">
          <div className="flex flex-col gap-10 text-gray-800 w-[20vw] text-sm items-start">
            <h1 className="text-2xl font-light">General Enquiries</h1>
            <p className="text-lg font-light">
              020 7000 0000{" "}
              <span className="text-red-600 mt-1 block text-2xl">
                info@wpfire.co.uk
              </span>
            </p>
            <p className="leading-6 text-lg font-light">
              21 Downing Street, <br /> Westminster, <br /> London, <br /> L1
              2WZ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
