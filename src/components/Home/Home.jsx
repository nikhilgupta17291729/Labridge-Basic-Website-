
import SearchBox from "../SearchBox/SearchBox";
export default function Home() {
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
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
              alt="Healthcare"
              className="rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-600">500+</h2>
            <p className="text-gray-600 mt-2">Healthcare Partners</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600">1M+</h2>
            <p className="text-gray-600 mt-2">Patients Served</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600">99.9%</h2>
            <p className="text-gray-600 mt-2">System Uptime</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600">24/7</h2>
            <p className="text-gray-600 mt-2">Support Available</p>
          </div>
        </div>
      </section>

      {/* Search Box */}
        <SearchBox /> 

      {/* Services */}
      <section id="services" className="bg-gray-50 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Healthcare Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl text-blue-600 font-semibold mb-3">
                AI Diagnostics
              </h3>
              <p className="text-gray-600">
                Advanced AI tools to assist doctors with accurate disease
                detection and clinical decision support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl text-blue-600 font-semibold mb-3">
                Electronic Health Records
              </h3>
              <p className="text-gray-600">
                Secure and centralized patient records for seamless healthcare
                management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl text-blue-600 font-semibold mb-3">
                Telemedicine
              </h3>
              <p className="text-gray-600">
                Connect patients and doctors remotely through secure virtual
                consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Vision */}

      <div
        className="text-neutral-950  leading-normal sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-6 lg:px-8 w-full mx-auto px-4 disabled:cursor-default"
        id="component"
      >
        <div className="lg:grid-cols-2 grid grid-cols-1 items-center gap-y-12 gap-x-12">
          <div className="md:block relative hidden overflow-x-hidden overflow-y-hidden rounded-2xl shadow-sm group">
            <div className="relative overflow-x-hidden overflow-y-hidden rounded-2xl bg-white p-8">
              <img
                alt="Our Vision Illustration"
                loading="lazy"
                width="500"
                decoding="async"
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
      <section id="benefits" className="bg-blue-600 text-white py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose Labridge Healthcare?
          </h2>

          <p className="text-lg mb-10">
            Delivering smarter healthcare through innovation, security, and
            patient-centric technology.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Secure</h3>
              <p>HIPAA-ready security and data protection standards.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Scalable</h3>
              <p>Built for clinics, hospitals, and healthcare networks.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Intelligent</h3>
              <p>AI-powered insights to improve patient outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-4xl font-bold mb-4">Transform Healthcare Today</h2>

        <p className="text-gray-600 mb-8 text-lg">
          Join leading healthcare organizations using Labridge Healthcare.
        </p>

        <button className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700">
          Schedule a Demo
        </button>
      </section>
    </div>
  );
}
