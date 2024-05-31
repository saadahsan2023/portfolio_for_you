import React from 'react';
import { PROJECT,} from '../../index';

function Project() {
    return (
        <>
            <div className="border-b border-neutral-900 pb-4">
                <h1 className="my-20 text-center text-4xl">Project</h1>
            </div>

            <div>
                {PROJECT.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <img
                                className='mb-6 rounded'
                                width={150}
                                height={150}
                                src={project.url}
                                alt={`Project ${index + 1}`}
                            />
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-350'>{project.description}</p>
                            {project.technology.map((tech, index) => (
                                <span key={index} className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium'>{tech}</span>

                            ))}

                        </div>






                    </div>
                ))}
            </div>
        </>
    );
}

export default Project;
