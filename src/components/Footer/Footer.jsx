import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-blue-900 border-y">
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Left Section*/}
          <div className="max-w-sm">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src="https://labridge.in/images/labridge-logo.png"
                  className="mr-3 h-16"
                  alt="Logo"
                />
              </Link>

              <div className="flex flex-col mt-2 space-y-2">
                <p className="text-white font-medium leading-tight">
                  1011, D Wing, 1st Floor, Akshar Business Park,
                  <span className="block font-semibold">Sector 25, Vashi</span>
                  Navi Mumbai, Maharashtra 400703
                </p>
                <p className="text-white font-medium  leading-tight">
                  Email:{' '}
                  <a
                    href="mailto:info@labridge.in"
                    className="text-white hover:text-gray-900"
                  >
                    info@labridge.in
                  </a>
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex mt-4 space-x-4 items-center">
                <a
                  href="#"
                  className="text-white hover:text-gray-900"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-7 h-7"
                  >
                    <circle cx="24" cy="24" r="22" fill="#1877F2" />

                    <path
                      fill="#FFFFFF"
                      d="M29.5 24h-3.5v12h-5V24h-3v-4.5h3v-3c0-4.1 1.7-6.5 6.2-6.5h3.8v4.5h-2.4c-1.9 0-2.1.7-2.1 2v3h4.5l-.5 4.5z"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white" aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-7 h-7"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <circle cx="24" cy="24" r="22" fill="#1DA1F2" />

                    <path
                      fill="#FFFFFF"
                      d="M36.5 15.5c-1 .4-2 .7-3 .8 1.1-.7 2-1.7 2.4-3-1 .6-2.2 1-3.4 1.3-1-1.1-2.4-1.8-4-1.8-3.1 0-5.6 2.5-5.6 5.6 0 .4 0 .9.1 1.3-4.7-.2-8.8-2.5-11.6-5.9-.5.8-.7 1.8-.7 2.8 0 1.9 1 3.7 2.5 4.7-.9 0-1.8-.3-2.6-.7v.1c0 2.7 1.9 5 4.5 5.5-.5.1-1 .2-1.5.2-.4 0-.7 0-1.1-.1.7 2.2 2.7 3.8 5.1 3.9-1.9 1.5-4.2 2.4-6.8 2.4-.4 0-.9 0-1.3-.1 2.4 1.6 5.3 2.5 8.4 2.5 10.1 0 15.6-8.4 15.6-15.6l-.01-.7c1.1-.8 2-1.8 2.8-2.9z"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white" aria-label="LinkedIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="12" fill="#0077B5" />

                    <path
                      d="M9.1 17H6.7V9.4h2.4V17z M7.9 8.4c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4z M17.3 17h-2.4v-3.8c0-.9 0-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2v3.9H9.7V9.4h2.3v1h.03c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6V17z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 w-full md:ml-60">
            <div>
              <h2 className="mb-5 text-sm font-bold text-white uppercase">
                Quick Links
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/advantage" className="hover:underline">
                    Advantage of Working With Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/partner" className="hover:underline">
                    Partner With Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-5 text-sm font-bold text-white uppercase">
                Department
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-2">
                  <Link to="#" className="hover:underline">
                    Pathology
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">
                    Neurology
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">
                    Dental Care
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">
                    Ophthalmology
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">
                    Cardiology
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-5 text-sm font-bold text-white uppercase">
                Learn More
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-2">
                  <Link to="#" className="hover:underline">
                    Privacy and Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">
                    Disclaimer
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">
                    Refund Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">
                    Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300  sm:text-center">
            Copyright © 2024
            <a href="https://labridge.in/" className="hover:underline">
              {' '}
              Labridge
            </a>{' '}
            All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
