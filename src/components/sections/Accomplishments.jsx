import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Accomplishments = () => {
  return (
    <section id="accomplishments" className="py-20 bg-blue-50 text-gray-800">
        <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Accomplishments & Leadership
        </h2>

        <div className="space-y-10 text-[17px] leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">🏅 Dr L H Hiranandani Award</h3>
            <p className="text-sm text-gray-600 mb-2">2024</p>
            <p>
              Received the *Best Girl Student – Patron Award* at I²IT for overall academic excellence and contributions to the institute.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">🌟 Special Award – I²IT Social</h3>
            <p className="text-sm text-gray-600 mb-2">2022</p>
            <p>
Honored with the Special Award for the social initiative, including volunteering with the Cancer Patients Aid Association (CPAA) during COVID-19 to support patient data collection.
             </p>
          </div>

          <div>
  <h3 className="text-xl font-semibold text-blue-700 mb-1">
    🎶 Visharad Pratham – Hindustani Classical Singing
  </h3>
  <p className="text-sm text-gray-600 mb-2">2021</p>
  <p>
    Earned the Visharad Pratham certification, equivalent to a bachelor's level in Hindustani classical music—demonstrating advanced vocal training and years of disciplined practice.
  </p>
</div>

<div>
  <h3 className="text-xl font-semibold text-blue-700 mb-1">
    💃 Madhyama – Bharatanatyam
  </h3>
  <p className="text-sm text-gray-600 mb-2">2018</p>
  <p>
    Completed Madhyama certification, an intermediate-level diploma in Bharatanatyam, reflecting formal training and deep cultural engagement in classical dance.
  </p>
</div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">🤝 Chair – Young Indians Committee</h3>
            <p className="text-sm text-gray-600 mb-2">2023 – 2024</p>
            <p>
              Led student-driven initiatives and organized impactful social events as part of the Young Indians movement under CII.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">💰 Treasurer – Computer Engineering Student Association</h3>
            <p className="text-sm text-gray-600 mb-2">2023 – 2024</p>
            <p>
              Managed budgeting, sponsorships, and finances for student association events, ensuring transparency and engagement.
            </p>
          </div>
        </div>
      </div></RevealOnScroll>
    </section>
  );
};
