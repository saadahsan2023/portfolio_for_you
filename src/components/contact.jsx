import { EMAIL } from '../../index';

function Contact() {
    return (

        <>
            <div className="border-b border-neutral-900 pb-4">
                <h1 className="my-20 text-center text-4xl">Contact</h1>

                <div className='text-center tracking-tighter'>
                    <p className='my-4'>{EMAIL.email}</p>
                    <a href='#' className='border-b'>{EMAIL.contact}</a>
                    <p className='my-4'>{EMAIL.name}</p>


                </div>
            </div>




        </>
    )

}

export default Contact
