import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
   
    <header className="shadow z-50">
      <h1 className="text-sm bg-blue-500 py-2 text-white leading-tight text-center">
        Hi, Welcome to Labridge Healthcare
      </h1>
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm gap-6">
        {/* Logo Section */}
        <Link to="/" className="shrink-0 flex items-center">
          <img
            src="https://labridge.in/images/labridge-logo.png"
            alt="Labridge Healthcare"
            className="h-15 w-auto mx-3"

          />
        </Link>

        {/* Navigation Menu Section */}
        <div className="hidden md:flex grow justify-end text-gray-800 font-medium">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:font-bold hover:text-blue-700 lg:p-0 ${isActive ? 'text-blue-700' : 'text-gray-700'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:font-bold hover:text-blue-700 lg:p-0 ${isActive ? 'text-blue-700' : 'text-gray-700'}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Advantage"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:font-bold hover:text-blue-700 lg:p-0 ${isActive ? 'text-blue-700' : 'text-gray-700'}`
                }
              >
                Advantage of Working With us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/partner"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:font-bold hover:text-blue-700 lg:p-0 ${isActive ? 'text-blue-700' : 'text-gray-700'}`
                }
              >
                Partner With Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:font-bold hover:text-blue-700 lg:p-0 ${isActive ? 'text-blue-700' : 'text-gray-700'}`
                }
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:font-bold hover:text-blue-700 lg:p-0 ${isActive ? 'text-blue-700' : 'text-gray-700'}`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Action Button Section */}
        <div className="shrink-0">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap">
            Partner Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
