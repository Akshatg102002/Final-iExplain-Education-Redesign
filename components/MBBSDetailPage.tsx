import React, { useState } from "react";
import { MBBSDetailData } from "../types";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  data: MBBSDetailData;
}

const MBBSDetailPage: React.FC<Props> = ({ data }) => {
  const country = data.quickFacts.country;
  const [openFAQ, setOpenFAQ] = useState<number>(0);

  const toggleFAQ = (i: number) => {
    setOpenFAQ(openFAQ === i ? -1 : i);
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
          {/* Mobile image */}
          <source
            media="(max-width: 768px)"
            srcSet={data.heroImageMobile}
          />

          {/* Desktop image (default fallback) */}
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
            {data.title}
          </h2>
          <p className="text-justify" dangerouslySetInnerHTML={{ __html: data.intro.text }} />
        </section>

        {/* Quick Facts */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            Quick Facts About {country}
          </h2>

          <table className="w-full border">
            <tbody>
              {Object.entries(data.quickFacts).map(([k, v], i) => (
                <tr key={i}>
                  <td className="border p-3 font-semibold capitalize">{k}</td>
                  <td className="border p-3">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            MBBS in {country} Overview
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">Category</th>
                  <th className="p-3 border">Details</th>
                </tr>
              </thead>

              <tbody>
                {Object.entries(data.quickOverview).map(([k, v], i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="p-3 border font-semibold capitalize">
                      {k.replace(/([A-Z])/g, " $1").trim()}
                    </td>
                    <td className="p-3 border">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <CTAButtons />

        {/* Benefits */}
        <ul className="space-y-2">
          {data.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Eligibility */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            Eligibility Criteria
          </h2>
          <ul className="space-y-2">
            {Object.entries(data.eligibility).map(([k, v], i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="text-green-500 mt-1" />
                <span>
                  <strong>{k}:</strong> {v}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Duration */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            Duration of MBBS in {country}
          </h2>

          <table className="w-full border">
            <tbody>
              <tr>
                <td className="border p-3">MBBS Course</td>
                <td className="border p-3">{data.duration.mbbs}</td>
              </tr>
              <tr>
                <td className="border p-3">Internship</td>
                <td className="border p-3">{data.duration.internship}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Documents */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            Documents Required
          </h2>

          <table className="w-full border">
            <tbody>
              {data.documents.map((doc, i) => (
                <tr key={i}>
                  <td className="border p-3">{i + 1}</td>
                  <td className="border p-3">{doc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* India vs Country */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            MBBS in India vs {country}
          </h2>

          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Feature</th>
                <th className="border p-3">India</th>
                <th className="border p-3">{country}</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data.indiaVsCountry).map(([k, v], i) => (
                <tr key={i}>
                  <td className="border p-3">{k}</td>
                  <td className="border p-3">{v.india}</td>
                  <td className="border p-3">{v.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Universities */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            Top Medical Universities in {country}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3">University</th>
                  <th className="border p-3">Established</th>
                  <th className="border p-3">Location</th>
                  <th className="border p-3">Tuition Fees</th>
                  <th className="border p-3">Hostel Fees</th>
                  <th className="border p-3">1st Year Package</th>
                  <th className="border p-3">Total Package</th>
                  <th className="border p-3">Recognition</th>
                  <th className="border p-3">Description</th>
                </tr>
              </thead>

              <tbody>
                {data.topUniversities.map((u, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border p-3 font-semibold">{u.name}</td>
                    <td className="border p-3">{u.established}</td>
                    <td className="border p-3">{u.location}</td>
                    <td className="border p-3">{u.tuitionFees}</td>
                    <td className="border p-3">{u.hostelFees}</td>
                    <td className="border p-3">{u.firstYearPackage}</td>
                    <td className="border p-3">{u.totalPackage}</td>
                    <td className="border p-3">{u.recognition}</td>
                    <td className="border p-3">{u.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-6">

          <a
            href="#/mbbs-abroad/russia"
            className="bg-blue-800 text-white px-5 py-2 rounded-md text-sm font-medium w-4/5 md:w-auto text-center hover:opacity-90 transition"
          >
            Study MBBS in Russia
          </a>

          <a
            href="#/mbbs-abroad/georgia"
            className="bg-green-600 text-white px-5 py-2 rounded-md text-sm font-medium w-4/5 md:w-auto text-center hover:opacity-90 transition"
          >
            Study MBBS in Georgia
          </a>

          <a
            href="#/mbbs-abroad/kazakhstan"
            className="bg-yellow-400 text-black px-5 py-2 rounded-md text-sm font-medium w-4/5 md:w-auto text-center hover:opacity-90 transition"
          >
            Study MBBS in Kazakhstan
          </a>

          <a
            href="#/mbbs-abroad/kyrgyzstan"
            className="bg-red-500 text-white px-5 py-2 rounded-md text-sm font-medium w-4/5 md:w-auto text-center hover:opacity-90 transition"
          >
            Study MBBS in Kyrgyzstan
          </a>

        </div>

        <section className="max-w-6xl mx-auto px-2 text-sm md:text-base text-gray-700 leading-relaxed">

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
            Why Choose IExplain Education for MBBS in {country}?
          </h2>

          <div className="space-y-4">

            {/* Floating Image */}
            <img
              src="https://www.iexplaineducation.com/wp-content/uploads/2023/04/Logo-2-scaled-e1684926432756-768x307.jpg"
              alt="IExplain Education Logo"
              className="w-28 h-28 object-contain rounded-md float-left mr-4 mb-2 border border-gray-300 p-1 bg-white shadow-sm"
            />

            {/* Intro Text */}
            <p className="text-justify">
              At IExplain Education, we specialize in helping students pursue MBBS
              abroad with complete confidence. Our experienced counselors guide you
              through every step — from choosing the right country and university
              to handling documentation and visa processes.
            </p>

            <p className="text-justify">
              We ensure that students receive accurate information, personalized
              counseling, and end-to-end support, making the journey of studying
              MBBS in {country} smooth, transparent, and stress-free.
            </p>

            {/* Clear float */}
            <div className="clear-both"></div>
          </div>

          {/* Points Section */}
          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
              What Makes Us Stand Out
            </h3>

            <ul className="space-y-3">
              {data.whyChooseUs.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-justify">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Quick Checklist Before Applying
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3">Things to Check</th>
                  <th className="border p-3">Required</th>
                </tr>
              </thead>

              <tbody>
                {data.checklist.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border p-3">{item.item}</td>
                    <td className="border p-3 font-semibold">
                      {item.required ? "YES" : "NO"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Hostel Facilities in {country} for Indian Students
          </h2>

          <p className="mb-4 text-justify">
            {data.hostelFacilities.intro}
          </p>

          <ul className="space-y-2">
            {data.hostelFacilities.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="text-purple-600 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Career Opportunities after MBBS in {country}
          </h2>

          <div className="space-y-3">

            <div>
              <strong>Medical Practice in India:</strong>
              <p>{data.careerOpportunities.practiceInIndia}</p>
            </div>

            <div>
              <strong>Postgraduate Studies:</strong>
              <p>{data.careerOpportunities.postgraduate}</p>
            </div>

            <div>
              <strong>Medical Research:</strong>
              <p>{data.careerOpportunities.research}</p>
            </div>

            <div>
              <strong>Healthcare Administration:</strong>
              <p>{data.careerOpportunities.administration}</p>
            </div>

            <div>
              <strong>Medical Teaching:</strong>
              <p>{data.careerOpportunities.teaching}</p>
            </div>

            <div>
              <strong>Practice Abroad:</strong>
              <p>{data.careerOpportunities.practiceAbroad}</p>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-4">FAQs</h2>

          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between px-4 py-3 bg-gray-100"
                >
                  <span>{faq.question}</span>
                  <span>{openFAQ === i ? "-" : "+"}</span>
                </button>

                {openFAQ === i && (
                  <div className="p-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default MBBSDetailPage;