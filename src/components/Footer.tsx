import accredLogo from "../assets/images/fire-accreditation.png";

const Footer = () => {
  return (
    <footer className="bg-[#555] w-full text-white border-t border-gray-200 py-20">
      {/* Main content */}
      <div className="flex max-w-[70rem] mx-auto gap-8">
        {/* Logo Column */}
        <div className="flex-[1.6] flex flex-col  justify-center">
          <a href="#" className="mb-4">
            <img
              src={accredLogo}
              alt="WP Fire logo"
              className="h-[14vh] w-auto object-contain"
            />
          </a>
        </div>

        {/* Navigation Column */}
        <div className="flex-1 flex flex-col items-start">
          <p className="text-white text-2xl font-medium mb-4">Company</p>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                About WP Fire
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                For Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition-colors">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="flex-1 flex flex-col items-start">
          <p className="text-white text-2xl font-medium mb-4">Contact Us</p>
          <a
            href="tel:07516 774 472"
            className="text-red-500 hover:text-red-600 mb-2 transition-colors"
          >
            07516 774 472
          </a>
          <a
            href="mailto:info@wpfire.co.uk"
            className="text-red-500 hover:text-red-600 transition-colors"
          >
            info@wpfire.co.uk
          </a>

          {/* Social Icons */}
          <ul className="flex gap-4 mt-4">
            <li>
              <a href="#">
                <ion-icon
                  name="logo-instagram"
                  style={{ fontSize: "2rem", color: "#e53935" }}
                ></ion-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon
                  name="logo-facebook"
                  style={{ fontSize: "2rem", color: "#e53935" }}
                ></ion-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon
                  name="logo-twitter"
                  style={{ fontSize: "2rem", color: "#e53935" }}
                ></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
