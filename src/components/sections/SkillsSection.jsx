import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { Code, Cloud, Database, Brain, Wrench, Award, Server, Smartphone,Building2 } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-5 h-5" />,
    skills: ["Java", "Python", "JavaScript", "Node.js", "C", "SQL"],
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Web Technologies",
    icon: <Server className="w-5 h-5" />,
    skills: ["React", "Spring Boot", "Express.js", "REST APIs", "HTML", "CSS", "TailwindCSS"],
    color: "from-green-500 to-green-600"
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "Git"],
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SAP HANA", "Redis"],
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "AI/ML & Analytics",
    icon: <Brain className="w-5 h-5" />,
    skills: ["TensorFlow", "OpenAI", "LangChain",  "scikit-learn", "NLP", "Pandas", "Librosa", "NLTK"],
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "Development Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["IntelliJ IDEA", "VS Code", "Postman", "Maven", "Gradle", "Jira", "Microsoft Excel"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Specialized Tech",
    icon: <Smartphone className="w-5 h-5" />,
    skills: ["SAP S/4 HANA", "Kibana", "Kafka", "Apache Spark","OpenCV", "YOLO", "Flask"],
    color: "from-teal-500 to-teal-600"
  },
  {
    title: "Certifications",
    icon: <Award className="w-5 h-5" />,
    skills: ["SAP BTP Developer", "SAP Citizen Developer", "IBM AI Engineering"],
    color: "from-yellow-500 to-yellow-600"
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-blue-50 text-gray-800">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
           
          <h2 className="text-5xl md:text-6xl font-black text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Technical Skills
                </h2>
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, cloud computing, AI/ML, and enterprise technologies
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-gray-200 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-600 rounded-full px-3 py-1.5 text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="mt-4 flex justify-end">
                  <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                    {category.skills.length} skills
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Highlight */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Core Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-lg">★</span>
                </div>
                <h4 className="font-medium text-gray-800">Advanced</h4>
                <p className="text-sm text-gray-600">Java, Python, AWS, Spring Boot</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-lg">◆</span>
                </div>
                <h4 className="font-medium text-gray-800">Proficient</h4>
                <p className="text-sm text-gray-600">React, Docker, TensorFlow, MongoDB</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-lg">▲</span>
                </div>
                <h4 className="font-medium text-gray-800">Growing</h4>
                <p className="text-sm text-gray-600">LangChain, Kubernetes, GenAI</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};