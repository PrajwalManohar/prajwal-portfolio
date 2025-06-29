import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

const publications = [
  {
    title: "Speech Activated Object Detection with Visual Recognition",
    venue: "IJIRCCE",
    year: "2021",
    type: "Conference Paper",
    description: "This paper describes an AI-powered assistive system designed to aid visually impaired individuals by detecting and describing objects, people, and text from the surrounding environment. Leveraging deep learning and computer vision techniques such as MobileNet SSD and Convolutional Neural Networks (CNNs), the system performs real-time image segmentation and scene analysis. The processed image content is then translated into natural speech, allowing users to hear contextual descriptions through speakers or earphones.",
    link: "https://drive.google.com/file/d/1zOmoYlA33B9VZW4qYOmvoOwFPqWBD4WT/view?usp=sharing",
    tags: ["Deep Learning", "Computer Vision", "MobileNet SSD", "CNNs", "Real-Time Speech Synthesis"],
    featured: true
  },
  {
    title: "Chest X-Ray Medical Diagnosis with Deep Learning",
    venue: "IJIRSET",
    year: "2020",
    type: "Review Paper",
    description: "Developed a deep learning model for automated chest X-ray diagnosis using the NIH ChestX-ray8 dataset, addressing the challenge of multi-label classification across 14 thoracic diseases. Leveraged the DenseNet architecture in Keras to improve diagnostic accuracy while maintaining model efficiency. Integrated Grad-CAM to visualize class-specific activation regions, enhancing interpretability for medical professionals. This approach demonstrated significant potential to accelerate radiological workflows, improve early disease detection, and support clinical decision-making in resource-constrained settings.",
    link: "https://drive.google.com/file/d/1GCkF2mTw3n6b9f9moM9rNmAuMVP_uZ_S/view?usp=sharing",
    tags: ["Literature Review", "Keras", "DenseNet", "ChestX-ray8", "Grad-CAM", "Multi-Label Classification", "Medical Imaging", "Survey"],
    featured: false
  }
];

export const Publication = () => {
  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-32 right-32 w-72 h-72 bg-gradient-to-br from-blue-400/8 to-indigo-400/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-tr from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/6 to-blue-400/6 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
      </div>

      <section id='publication' className='min-h-screen py-20 px-4'>
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto">
            
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform rotate-12">
                  <span className="text-white text-xl">📚</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Publications
                </h2>
              </div>
             
              {/* Stats */}
              {/* <div className="flex justify-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{publications.length}</div>
                  <div className="text-gray-600 text-sm font-medium">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">2024</div>
                  <div className="text-gray-600 text-sm font-medium">Latest Year</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">IEEE</div>
                  <div className="text-gray-600 text-sm font-medium">Publisher</div>
                </div>
              </div> */}
            </div>

            {/* Publications Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50 ${
                    pub.featured ? 'ring-2 ring-blue-400/30 shadow-blue-100/50' : ''
                  }`}
                >
                  {/* Featured Badge */}
                  {pub.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Featured
                    </div>
                  )}

                  {/* Publication Type Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold">
                      📄 {pub.type}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {pub.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {pub.title}
                  </h3>

                  {/* Venue */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">📖</span>
                    </div>
                    <span className="text-lg font-semibold text-indigo-600">
                      {pub.venue} {pub.year}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {pub.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pub.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-lg transform hover:scale-105"
                    >
                      <span>📖 Read Paper</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>

                    {/* Citation Info */}
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Peer Reviewed</div>
                    </div>
                  </div>

                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                </div>
              ))}
            </div>

            {/* Research Areas */}
            <div className="mt-20">
              <div className="text-center mb-12">
                 <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Research Areas
                </h2>
                <p className="text-gray-600 text-lg">Key domains of research focus and expertise</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: "🤖", title: "Machine Learning", desc: "Deep learning models and algorithms" },
        
                 { icon: "🧠", title: "Large Language Models", desc: "Text understanding, generation, and reasoning" },
{ icon: "✨", title: "Generative AI", desc: "AI-powered content creation and automation" },

                  { icon: "📝", title: "Natural Language Processing", desc: "Text analysis and understanding" }
                ].map((area, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100/50">
                    <div className="text-4xl mb-3">{area.icon}</div>
                    <h4 className="font-bold text-gray-800 mb-2">{area.title}</h4>
                    <p className="text-gray-600 text-sm">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  I'm always open to discussing research opportunities, collaborations, or sharing insights on AI and machine learning projects.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span>💬 Let's Connect</span>
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};