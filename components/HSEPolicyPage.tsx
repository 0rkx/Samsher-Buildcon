import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const HSEPolicyPage: React.FC = () => {
    return (
        <div>


            <section className="py-16 lg:py-24 scroll-animate">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center space-y-4">
                         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">We Care</h2>
                         <p className="text-lg text-gray-700 leading-relaxed">
                           At SAMSHER BUILDCON, we believe that safety awareness is key to a thriving workplace. By prioritizing safe work practices, we reduce injuries and enhance productivity, demonstrating our commitment to the wellbeing of our employees.
                         </p>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 scroll-animate">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our QHSE Commitment</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckIcon className="w-6 h-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-900">Quality First</h4>
                                        <p className="text-gray-700">Delivering top-tier products and services to our clients and customers.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                     <CheckIcon className="w-6 h-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-900">Health & Safety</h4>
                                        <p className="text-gray-700">Prioritizing the wellbeing of our employees with no accidents and a healthy work environment.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                     <CheckIcon className="w-6 h-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-900">Environmental Care</h4>
                                        <p className="text-gray-700">Operating responsibly to protect the environment.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                     <CheckIcon className="w-6 h-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-900">Continual Improvement</h4>
                                        <p className="text-gray-700">Striving for excellence in all our activities through continuous improvement.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="/images/glenov-brankovic-DWp5nUqTn6E-unsplash-scaled.jpg" alt="Worker rappelling down a building, ensuring safety" className="rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 scroll-animate">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    <div className="space-y-6 bg-white/50 p-8 rounded-xl shadow-md border border-gray-200/80">
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">How We Achieve Our Goals</h3>
                        <ul className="space-y-3">
                            {[
                                { title: 'Clear Objectives', content: 'Setting and achieving defined QHSE goals.' },
                                { title: 'Robust Processes', content: 'Implementing effective QHSE processes, procedures, and responsibilities.' },
                                { title: 'Skilled Workforce', content: 'Providing the necessary resources, training, and consultations.' },
                                { title: 'Regular Monitoring', content: 'Conducting periodic performance measurements and assessments.' },
                                { title: 'Transparent Communication', content: 'Maintaining and communicating our QHSE policy to all stakeholders.' },
                                { title: 'Management Oversight', content: 'Regular reviews by senior management to ensure the effectiveness of our QHSE system.' },
                                { title: 'Employee Responsibility', content: 'Ensuring every team member is accountable for QHSE performance.' }
                            ].map(item => (
                                <li key={item.title} className="flex items-start">
                                    <CheckIcon className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="font-semibold text-gray-800">{item.title}:</strong>
                                        <span className="text-gray-700 ml-1">{item.content}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-6 bg-white/50 p-8 rounded-xl shadow-md border border-gray-200/80">
                         <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Safety Awareness</h3>
                         <p className="text-gray-700">Safety is at the heart of our operations. We foster a culture where every task is performed with safety in mind, supported by:</p>
                         <ul className="space-y-3">
                             {[
                                { title: 'Visible Safety Measures', content: 'Clear entryways, posters, banners, and signage.' },
                                { title: 'Engagement', content: 'Regular safety talks, surveys, and employee involvement.' },
                                { title: 'Proactive Goals', content: 'Setting and working towards proactive safety objectives.' },
                                { title: 'Personal Protective Equipment (PPE)', content: 'Ensuring the use of appropriate safety gear.' }
                             ].map(item => (
                                <li key={item.title} className="flex items-start">
                                    <CheckIcon className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="font-semibold text-gray-800">{item.title}:</strong>
                                        <span className="text-gray-700 ml-1">{item.content}</span>
                                    </div>
                                </li>
                             ))}
                         </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HSEPolicyPage;
