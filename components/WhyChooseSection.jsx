const WhyChooseSection = () => {
    return (
        <div className="max-w-6xl mx-auto px-2 text-sm md:text-base text-gray-700 leading-relaxed">

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
                Why Choose iExplain Education for Studying Abroad?
            </h2>

            {/* Content with wrapped image */}
            <div className="space-y-4">

                {/* Floating Image */}
                <img
                    src="https://www.iexplaineducation.com/wp-content/uploads/2023/04/Logo-2-scaled-e1684926432756-768x307.jpg"
                    alt="iExplain Education Logo"
                    className="w-28 h-28 object-contain rounded-md float-left mr-4 mb-2 border border-gray-300 p-1 bg-white shadow-sm"
                />

                {/* Text */}
                <p className="text-justify">
                    At iExplain Education, we bring years of expertise in guiding students
                    toward successful international education journeys. Our experienced
                    counselors provide personalized support, helping students make informed
                    decisions based on accurate and up-to-date information.
                </p>

                <p className="text-justify">
                    Whether you need help with university selection, application processes,
                    visa guidance, or career counseling, we ensure a smooth and stress-free
                    experience. Our goal is to empower students to achieve their academic
                    ambitions and build a strong global career.
                </p>

                {/* Clear float */}
                <div className="clear-both"></div>
            </div>

            {/* Milestones Section */}
            <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
                    Milestones Achieved by iExplain Education
                </h3>

                <ul className="list-disc pl-5 space-y-2">
                    <li>Proven track record of successful student placements worldwide.</li>
                    <li>Personalized counseling tailored to individual goals.</li>
                    <li>High visa success rate with expert guidance.</li>
                    <li>Strong partnerships with top international universities.</li>
                    <li>End-to-end support from application to departure.</li>
                    <li>Helping students discover the right career path.</li>
                </ul>
            </div>

        </div>
    );
};

export default WhyChooseSection;