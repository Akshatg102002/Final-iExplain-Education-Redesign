import React, { useState } from "react";
import { StudyAbroadDetailData } from "../types";
import WhyChooseSection from "./WhyChooseSection";
import KnowYourDestination from "./KnowYourDestination";

import {
  FaBookOpen,
  FaBriefcase,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

interface StudyAbroadDetailPageProps {
  data: StudyAbroadDetailData;
}

const StudyAbroadDetailPage: React.FC<StudyAbroadDetailPageProps> = ({ data }) => {
  const country = data.title.replace("Study in ", "");
  const [openFAQ, setOpenFAQ] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  const CTAButtons = () => (
    <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center my-6">
      <button className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm w-full md:w-auto">
        WhatsApp
      </button>
      <button className="bg-blue-900 text-white px-5 py-2.5 rounded-lg font-semibold text-sm w-full md:w-auto">
        Enquire Now
      </button>
      <button className="bg-red-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm w-full md:w-auto">
        Call Now
      </button>
    </div>
  );

  return (
    <div className="bg-white">

      {/* HERO */}
      <section>
        <picture>
          <source media="(max-width: 768px)" srcSet={data.heroImageMobile} />
          <img
            src={data.heroImage}
            alt={data.title}
            className="w-full h-[400px] object-cover"
          />
        </picture>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-10 text-sm md:text-base text-gray-700 leading-relaxed">

        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center">
            Study in {country}
          </h2>

          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: data.intro.text }}
          />
        </section>

        {/* Why Study */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            Why Study in {country}?
          </h2>

          <ul className="space-y-2">
            {data.whyStudy.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaArrowRight className="text-lg mt-1 text-green-600 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Qualifications */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            Types of Qualification
          </h2>

          <ul className="space-y-2">
            {data.qualifications.map((q, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaBookOpen className="text-lg mt-1 text-blue-500 flex-shrink-0" />
                <span>
                  <strong>{q.name}</strong> ({q.duration}) - {q.description}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <CTAButtons />

        {/* Course Streams */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            Top Course Streams
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">Stream</th>
                  <th className="p-3 border">Courses</th>
                  <th className="p-3 border">Career Options</th>
                </tr>
              </thead>
              <tbody>
                {data.courseStreams.map((stream, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="p-3 border font-semibold">{stream.stream}</td>
                    <td className="p-3 border">{stream.courses.join(", ")}</td>
                    <td className="p-3 border">{stream.careers.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-6">

          <a
            href="#/study-abroad/usa"
            className="bg-blue-800 text-white px-5 py-2 rounded-md text-sm font-medium w-4/5 md:w-auto text-center hover:opacity-90 transition"
          >
            Study Abroad in USA
          </a>

          <a
            href="#/study-abroad/uk"
            className="bg-green-600 text-white px-5 py-2 rounded-md text-sm font-medium w-4/5 md:w-auto text-center hover:opacity-90 transition"
          >
            Study Abroad in UK
          </a>

          <a
            href="#/study-abroad/canada"
            className="bg-yellow-400 text-black px-5 py-2 rounded-md text-sm font-medium w-4/5 md:w-auto text-center hover:opacity-90 transition"
          >
            Study Abroad in Canada
          </a>

          <a
            href="#/study-abroad/australia"
            className="bg-red-500 text-white px-5 py-2 rounded-md text-sm font-medium w-4/5 md:w-auto text-center hover:opacity-90 transition"
          >
            Study Abroad in Australia
          </a>

        </div>

        {/* Top Universities */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            Top Universities to {data.title}
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">University</th>
                  <th className="border px-4 py-2">Location</th>
                  <th className="border px-4 py-2">Description</th>
                </tr>
              </thead>

              <tbody>
                {data.topUniversities.map((uni, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">
                      <strong>{uni.name}</strong>
                    </td>
                    <td className="border px-4 py-2">{uni.location}</td>
                    <td className="border px-4 py-2">{uni.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Part Time Work */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            Part-Time Work
          </h2>

          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <FaBriefcase className="text-lg mt-1 text-yellow-600 flex-shrink-0" />
              <span>Work up to {data.partTimeWork.hoursPerWeek}</span>
            </li>

            {data.partTimeWork.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaBriefcase className="text-lg mt-1 text-yellow-600 flex-shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Post Study Work */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            Post Study Work
          </h2>

          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <FaGraduationCap className="text-lg mt-1 text-purple-500 flex-shrink-0" />
              <span>
                <strong>{data.postStudyWork.program}</strong> -{" "}
                {data.postStudyWork.duration}
              </span>
            </li>

            <li className="flex items-start gap-2">
              <FaGraduationCap className="text-lg mt-1 text-purple-500 flex-shrink-0" />
              <span>{data.postStudyWork.description}</span>
            </li>
          </ul>
        </section>

        {/* Documents Required */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            Documents Required to {data.title}
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">#</th>
                  <th className="border px-4 py-2">Document</th>
                </tr>
              </thead>

              <tbody>
                {data.documentsRequired.map((doc, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{i + 1}</td>
                    <td className="border px-4 py-2">{doc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Intakes */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            Intakes to {data.title}
          </h2>

          <table className="w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Intake</th>
                <th className="border px-4 py-2">Duration</th>
                <th className="border px-4 py-2">Details</th>
              </tr>
            </thead>

            <tbody>
              {data.intakes.map((intake, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">{intake.intake}</td>
                  <td className="border px-4 py-2">{intake.months}</td>
                  <td className="border px-4 py-2">{intake.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Cost */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            Cost to {data.title}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">Items</th>
                  <th className="p-3 border">Cost</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-3 border">Tuition Fees</td>
                  <td className="p-3 border">{data.cost.tuitionFees}</td>
                </tr>

                <tr>
                  <td className="p-3 border">Living Expenses</td>
                  <td className="p-3 border">{data.cost.livingExpenses}</td>
                </tr>

                {data.cost.additionalCosts && (
                  <tr>
                    <td className="p-3 border">Additional Costs</td>
                    <td className="p-3 border">{data.cost.additionalCosts}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <WhyChooseSection />
        <KnowYourDestination />


        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
            FAQs
          </h2>

          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <div key={i} className="border rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold bg-gray-100 hover:bg-gray-200"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl">{openFAQ === i ? "−" : "+"}</span>
                </button>

                <div
                  className={`px-4 overflow-hidden transition-all duration-300 ${openFAQ === i ? "max-h-40 py-3" : "max-h-0"
                    }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default StudyAbroadDetailPage;