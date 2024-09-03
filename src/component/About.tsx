import connect from '../assets/images/online connect.svg'
import smarter from '../assets/icons/Brainstorm Skill.svg'
import personal from '../assets/icons/More Info.svg'

const About = () => {
  return (
    <section className='flex items-center   flex-wrap'>
        <div className='ml-10'>
          <img src={connect} alt="Online connnect" height={700} width={700}/>
        </div>
        <div className='text-center'>
            <h3 className='text-2xl font-bold '>
            Connect with <br />
            multiple Sponsors <br />
             and Alumni, <br />
            learn interact and grow <br />
            </h3>
            <p className='mt-4 leading-5 placeholder: font-medium'>
            Tora is a social media app designed for struggling <br/>
            students. Tora seemllesly connect needy students <br/>
            with alumnus willing  to help through mentorship <br />
            or other various means. <br />
            </p>
            <div className='flex mt-10 flex-row gap-6  items-center  justify-center'>
               <div className='border-light-pink border-2  rounded text-center'>
                 <div className='border-light-pink border relative bottom-8  left-16 flex items-center justify-center rounded-full h-16 w-16'>
                   <img src={smarter} alt="Brainstorm" />
                 </div>

                  <div className='p-4 '>
                  <h3 className='font-bold relative bottom-7 '>SMARTER</h3>
                   <p className='leading-6 font-medium'>
                    Tora matches you <br />
                    with the right alumni <br/>
                    based on your <br/>
                    interest.
                   </p>
                  </div>
               </div>
               <div className='border-light-pink border-2  rounded text-center'>
                 <div className='border-light-pink border relative bottom-8  left-16 flex items-center justify-center rounded-full h-16 w-16'>
                    <img src={personal} alt="More info" />
                 </div>
                 <div className='p-4 '>
                    <h3 className='font-bold relative bottom-7'>
                       PERSONAL
                    </h3>
                   <p className='leading-6b pb-4 font-medium'>
                    We take your<br/>
                    personal development <br/>
                    seriously.
                   </p>
                 </div>
               </div>
            </div>
        </div>
    </section>

  )
}

export default About
