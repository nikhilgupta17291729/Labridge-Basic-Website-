import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const milestones = [
    {
      year: '2022',
      title: 'Foundation & Vision',
      description:
        'Founded by Rajnish Jha (CEO) and Kanhaiya Jha to empower independent pathology labs through a collaborative, tech-enabled ecosystem. Labridge (Labridge Technology Solutions Private Limited) is an Indian B2B healthtech startup that provides a unified technology platform for the diagnostics sector. The company was founded in July 2022 and officially incorporated in India on December 13, 2023.',
      tag: 'Foundation',
    },
    {
      year: '2023',
      title: 'Hyper-Growth & Financial Scale',
      description:
        'Achieved an average 30% YoY revenue growth rate, successfully crossing ₹1 Crore in Monthly Recurring Revenue (MRR).',
      tag: 'Scale',
    },
    {
      year: '2026',
      achievements: [
        {
          title: 'Partner Network Expansion',
          description:
            'Built a scalable digitally integrated system uniting over 3,400 partner labs across 25+ cities.',
          tag: 'Success',
        },
        {
          title: 'Next-Gen B2B Platform Deployment',
          description:
            'Rolled out a robust, automated digital infrastructure enabling real-time collaboration and seamless transactions across 3,400+ diagnostic nodes.',
          tag: 'Innovation',
        },
        {
          title: 'Operational Efficiency & Regional Growth',
          description:
            'Streamlined cross-city diagnostics by integrating independent labs onto a single cohesive operational framework, setting new industry benchmarks.',
          tag: 'Optimization',
        },
      ],
    },
  ];

  
  const handleTabChange = (index) => {
    setActiveTab(index);
    setActiveSubTab(0); 
  };


  const currentMilestone = milestones[activeTab];
  const hasMultipleAchievements = !!currentMilestone.achievements;

  const displayData = hasMultipleAchievements
    ? currentMilestone.achievements[activeSubTab]
    : currentMilestone;

  return (
    <section className="py-8 bg-gray-50 min-h-screen bg-linear-to-l from-blue-100 to-purple-100">
      <div className="max-w-4xl mx-auto px-4">
       
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-4xl">
            About Labridge Journey
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Labridge is a pioneering B2B service solution transforming the
            diagnostics landscape. Our platform bridges the gap between
            diagnostic players, simplifying interactions and transactions. We
            are setting new benchmarks in efficiency, collaboration, and
            innovation in the diagnostics industry.
          </p>
        </div>

       
        <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12">
        
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-gray-200 pb-4 md:pb-0 md:pl-4 min-w-37.5 scrollbar-none">
            {milestones.map((item, index) => (
              <button
                key={item.year}
                onClick={() => handleTabChange(index)}
                className={`shrink-0 text-left px-4 py-3 text-lg font-bold transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 md:-ml-4.5 ${
                  activeTab === index
                    ? 'border-blue-600 text-blue-600 md:pl-6'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          
          <div className="flex-1 min-h-50 flex flex-col justify-center transition-all duration-300 transform">
            
            {hasMultipleAchievements && (
              <div className="flex flex-wrap gap-2 mb-4 border-b pb-3 border-gray-100">
                {currentMilestone.achievements.map((subItem, subIndex) => (
                  <button
                    key={subIndex}
                    onClick={() => setActiveSubTab(subIndex)}
                    className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
                      activeSubTab === subIndex
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {subItem.tag}
                  </button>
                ))}
              </div>
            )}

            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 w-max mb-3">
              {displayData.tag}
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {displayData.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {displayData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
