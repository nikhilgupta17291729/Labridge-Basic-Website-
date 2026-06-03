import { useGSAPCounter } from './Hooks/useGSAPCounter';

const Stats = () => {
  const pathologists = useGSAPCounter({ target: 500 });
  const tests = useGSAPCounter({ target: 100 });
  const samples = useGSAPCounter({ target: 100 });
  const performed = useGSAPCounter({ target: 200 });
  const cities = useGSAPCounter({ target: 8 });


   const icons = [
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
       class="lucide lucide-users w-8 h-8 text-blue-500 group-hover:animate-pulse"
     >
       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
       <circle cx="9" cy="7" r="4"></circle>
       <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
       <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
     </svg>,
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
       class="lucide lucide-test-tube w-8 h-8 text-green-500 group-hover:animate-pulse"
     >
       <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"></path>
       <path d="M8.5 2h7"></path>
       <path d="M14.5 16h-5"></path>
     </svg>,
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
       class="lucide lucide-flask-conical w-8 h-8 text-purple-500 group-hover:animate-pulse"
     >
       <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path>
       <path d="M8.5 2h7"></path>
       <path d="M7 16h10"></path>
     </svg>,

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
       class="lucide lucide-activity w-8 h-8 text-orange-500 group-hover:animate-pulse"
     >
       <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
     </svg>,

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
       class="lucide lucide-building2 w-8 h-8 text-cyan-500 group-hover:animate-pulse"
     >
       <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
       <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
       <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
       <path d="M10 6h4"></path>
       <path d="M10 10h4"></path>
       <path d="M10 14h4"></path>
       <path d="M10 18h4"></path>
     </svg>,
   ];

  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          {/* Card 1 */}
          <div className="bg-blue-200 p-6 rounded-xl shadow-lg">
             
            <div className="flex justify-center mb-4">{icons[0]}</div>

            <h2 className="text-4xl font-bold text-blue-400">
              {pathologists}+
            </h2>
            <p className="text-gray-600 text-sm mt-2 font-semibold">
              Pathology Partner Served
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-green-100 p-6 rounded-xl shadow-lg">
            <div className="flex justify-center mb-4">{icons[1]}</div>
            <h2 className="text-4xl font-bold text-green-400">{tests}+</h2>
            <p className="text-gray-600 text-sm mt-2 font-semibold">
              Test and Profiles
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-purple-100 p-6 rounded-xl shadow-lg">
            <div className="flex justify-center mb-4">{icons[2]}</div>
            <h2 className="text-4xl font-bold text-purple-400">{samples}K+</h2>
            <p className="text-gray-600 text-sm mt-2 font-semibold">
              Sample Collected
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-orange-100 p-6 rounded-xl shadow-lg">
            <div className="flex justify-center mb-4">{icons[3]}</div>
            <h2 className="text-4xl font-bold text-orange-300">
              {performed}K+
            </h2>
            <p className="text-gray-600 text-sm mt-2 font-semibold">
              Test Performed
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-cyan-100 p-6 rounded-xl shadow-lg">
            <div className="flex justify-center mb-4">{icons[4]}</div>
            <h2 className="text-4xl font-bold text-cyan-400">{cities}+</h2>
            <p className="text-gray-600 text-sm mt-2 font-semibold">
              Presence in Cities
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
