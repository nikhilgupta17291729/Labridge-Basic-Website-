export default function About() {
  return (
    <section className="min-h-screen bg-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">About Labridge</h1>

      <p className="text-gray-600 max-w-3xl text-center text-lg leading-7">
        Labridge is a modern healthcare-focused platform dedicated to improving
        patient care through technology, innovation, and reliable medical
        solutions. We aim to bridge the gap between healthcare providers and
        patients with seamless digital experiences.
      </p>

      
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        <div className="p-6 shadow-md rounded-xl border">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To provide accessible, affordable, and efficient healthcare
            solutions powered by modern technology and user-friendly systems.
          </p>
        </div>

        <div className="p-6 shadow-md rounded-xl border">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To become a leading digital healthcare platform that transforms how
            people access and experience medical services worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
