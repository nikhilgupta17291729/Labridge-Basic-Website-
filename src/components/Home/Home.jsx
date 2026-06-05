
import SearchBox from "../SearchBox/SearchBox";
import BounceCards from './BounceCard/BounceCards';
import Stats from "../Stats/Stats";
export default function Home() {

  

  const images = [
    'https://images.apollo247.in/pd-cms/cms/2023-10/Shutterstock_1114244621.jpg',

    'https://plus.unsplash.com/premium_photo-1664301991683-83b39364ff04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://plus.unsplash.com/premium_photo-1661600601831-e7434ea25e4e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://plus.unsplash.com/premium_photo-1661779739047-c5c27cf8ebac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const transformStyles = [
    'rotate(5deg) translate(-150px)',
    'rotate(0deg) translate(-70px)',
    'rotate(-5deg)',
    'rotate(5deg) translate(70px)',
    'rotate(-5deg) translate(150px)',
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-cyan-50 to-blue-50 py-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 leading-tight">
              Revolutionizing Healthcare with{' '}
              <span className="text-blue-600">Technology & Expertise</span>
            </h1>

            <p className="mt-3 text-lg text-gray-600">
              India's Trusted Name in Diagnostic Excellence
            </p>
          </div>
          <div>
            
              <BounceCards
                className="custom-bounceCards"
                images={images}
                containerWidth={600}
                containerHeight={250}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                enableHover={true}
              />
            
          </div>
        </div>
      </section>
      ;{/* Stats */}
      <Stats />
      {/* Search Box */}
      <SearchBox />
      {/* Services */}
      <section
        id="services"
        className="bg-linear-to-r from-cyan-50 to-blue-100 py-20 px-8 "
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">
            Our Core Values
          </h2>

          <div className="text-center mb-12">
            <h3 className="text-lg bg-linear-to-r from-blue-500 to-green-500 text-transparent bg-clip-text font-bold mb-6 text-center">
              These fundamental principles guide everything we do, shaping our
              company culture and driving our
              <span className="inline-block bg-linear-to-r from-blue-500 to-green-500 text-transparent bg-clip-text font-bold">
                commitment to excellence in diagnostic services.
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-4 gap-8">
            
            <div className="bg-blue-200 p-8 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 hover:translate-x-5 transition-transform duration-300 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-lightbulb w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </div>
              <h3 className="text-xl text-black font-semibold mb-3 text-center">
                Innovation
              </h3>
              <p className="text-gray-600">
                Pioneering cutting-edge solutions that transform diagnostic
                excellence.
              </p>
            </div>

            <div className="bg-green-200 p-8 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 hover:translate-x-5 transition-transform duration-300 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-100 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-award w-10 h-10 text-green-600 group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <h3 className="text-xl text-black font-semibold mb-3 text-center">
                Quality
              </h3>
              <p className="text-gray-600">
                Unwavering commitment to precision and accuracy in every result
              </p>
            </div>

            <div className="bg-orange-200 p-8 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 hover:translate-x-5 transition-transform duration-300 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-zap w-10 h-10 text-orange-600 group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-black font-semibold mb-3 text-center">
                Efficiency
              </h3>
              <p className="text-gray-600">
                Streamlined processes delivering rapid results without
                compromise
              </p>
            </div>

            <div className="bg-purple-200 p-8 rounded-xl shadow-lg hover:shadow-lg hover:scale-105 hover:translate-x-5 transition-transform duration-300 group">

              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-users w-10 h-10 text-purple-600 group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>

              <h3 className="text-xl text-black font-semibold mb-3 text-center">
                Collaboration
              </h3>
              <p className="text-gray-600">
                Building strong partnerships that amplify healthcare impact
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*Vision */}
      <div className="text-neutral-950  leading-normal sm:max-w-screen-sm md:max-w-3xl lg:max-w-5xl xl:max-w-screen-7xl  md:px-6 lg:px-8 w-full mx-auto px-4 disabled:cursor-default">
        <div className="lg:grid-cols-2 grid grid-cols-1 items-center gap-y-12 gap-x-12">
          <div className="md:block relative hidden overflow-x-hidden overflow-y-hidden rounded-2xl shadow-sm group">
            <div className="relative overflow-x-hidden overflow-y-hidden rounded-2xl bg-white p-8">
              <img
                alt="Our Vision Illustration"
                loading="lazy"
                width="500"
                className="w-full cursor-pointer duration-700 [animation-duration:0.7s] ease-in-out  group-hover:scale-105 text-transparent"
                src="https://proxy.extractcss.dev/https://labridge.in/images/vision-1.svg"
              />
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(to_bottom_right,#3b82f60d,#06b6d40d)] opacity-0 ease-in-out duration-500 [animation-duration:0.5s] group-hover:opacity-100"></div>
              <div className="absolute inset-0 rounded-2xl shadow-sm ease-in-out duration-300 [animation-duration:0.3s]"></div>
            </div>
          </div>
          <div>
            <h2 className="md:text-4xl md:leading-10 text-3xl leading-9 font-bold text-gray-900">
              Our Vision
            </h2>
            <p className="leading-relaxed text-gray-600 mt-6">
              At Labridge, our vision is to bridge the diagnostic ecosystem by
              connecting the most advanced and trusted business partner for
              diagnostic services across India.
            </p>
          </div>
        </div>
      </div>
      {/* Benefits */}
      <section
        id="benefits"
        className="bg-gray-100 text-black py-20 px-8 mt-15"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-5 cursor-pointer">
            Our Core Services
          </h2>

          <p className="text-lg mb-10 bg-linear-to-r from-blue-500 to-green-500 text-transparent bg-clip-text font-bold">
            Comprehensive diagnostic solutions designed to meet the diverse
            needs of healthcare providers and patients across India.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-100 border-2 border-blue-300 p-6 rounded-lg shadow-md group h-105 flex flex-col hover:shadow-lg * hover:scale-105 hover:translate-y-1/16 transition-transform duration-300">
              <div className="relative p-8 z-10">
                <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-lightbulb w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
                <h3 className="text-lg  font-semibold ">Pathology Testing</h3>
                <p className="text-md text-gray-600 mt-2">
                  Comprehensive pathology services including clinical chemistry,
                  hematology, microbiology, and histopathology with
                  state-of-the-art equipment and expert analysis.
                </p>
              </div>
            </div>

            <div className="bg-green-100 border-2 border-green-300 p-6 rounded-lg shadow-md group h-105 flex flex-col hover:shadow-lg * hover:scale-105 hover:translate-y-5 transition-transform duration-300">
              <div className="relative p-8 z-10">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-green-200  transition-all duration-300 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-dna w-10 h-10 text-green-600 group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="m10 16 1.5 1.5"></path>
                    <path d="m14 8-1.5-1.5"></path>
                    <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path>
                    <path d="m16.5 10.5 1 1"></path>
                    <path d="m17 6-2.891-2.891"></path>
                    <path d="M2 15c6.667-6 13.333 0 20-6"></path>
                    <path d="m20 9 .891.891"></path>
                    <path d="M3.109 14.109 4 15"></path>
                    <path d="m6.5 12.5 1 1"></path>
                    <path d="m7 18 2.891 2.891"></path>
                    <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path>
                  </svg>
                </div>
                <h3 className="text-lg  font-semibold ">
                  Molecular & Genetic Testing
                </h3>
                <p className="text-md text-gray-600 mt-2">
                  Advanced molecular diagnostics, including PCR, genetic
                  sequencing, and personalized medicine solutions for precise
                  diagnosis and treatment planning.
                </p>
              </div>
            </div>

            <div className="bg-orange-100 border-2 border-orange-300 p-6 rounded-lg shadow-md group h-105 flex flex-col hover:shadow-lg * hover:scale-105 hover:translate-x-5 transition-transform duration-300">
              <div className="relative p-8 z-10">
                <div class="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-building w-10 h-10 text-orange-600 group-hover:scale-110 transition-transform duration-300"
                  >
                    <rect
                      width="16"
                      height="20"
                      x="4"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M8 14h.01"></path>
                  </svg>
                </div>
                <h3 className="text-lg  font-semibold ">
                  Corporate Health Check-ups
                </h3>
                <p className="text-md text-gray-600 mt-2">
                  Tailored health screening packages for corporate clients and
                  industrial workers, ensuring workplace wellness and regulatory
                  compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-4xl font-bold mb-4">Transform Healthcare Today</h2>

        <p className=" mb-8 text-lg bg-linear-to-r from-blue-500 to-green-500 text-transparent bg-clip-text font-bold">
          Join leading healthcare organizations using Labridge Healthcare.
        </p>

        <button className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700">
          Schedule a Demo
        </button>
      </section>
    </div>
  );
}
