import React from 'react';

const EXPERIENCE = [
    { year: "2020", role: "Software Engineer", company: "Company A", technology: ['Javascript', 'React', 'Next.js', 'MongoDB'] },
    { year: "2021", role: "Web Developer", company: "Company B", technology: ['Javascript', 'React', 'Next.js', 'MongoDB'] },
    { year: "2022", role: "App Developer", company: "Company C", technology: ['Javascript', 'React', 'Next.js', 'MongoDB'] },
    { year: "2023", role: "Backend Developer", company: "Company D", technology: ['Javascript', 'React', 'Next.js', 'MongoDB'] },
    // Add more experiences as needed
];

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Experience</h1>
            <div className="flex flex-col items-center">
                {EXPERIENCE.map((experience, index) => (
                    <div key={index} className="mb-8 w-full max-w-4xl flex flex-wrap justify-center lg:justify-start">
                        <div className="w-full lg:w-1/4 text-center lg:text-left">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </div>
                        <div className="w-full lg:w-3/4">
                            <h6 className="mb font-semibold text-center lg:text-left">
                                {experience.role} -{" "}
                                <span className="text-sm text-purple-100">{experience.company}</span>
                            </h6>
                            <p className='mb-4 text-neutral-400 text-center lg:text-left'>
                                When using the map function to generate JSX elements, you need to return the JSX from the function. In your code, the map function does not have a return statement, so nothing is rendered.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start">
                                {experience.technology.map((tech, index) => (
                                    <span key={index} className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white'>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
