import connect from '../assets/images/online connect.svg'

const Features = () => {
  return (
    <section className='flex items-center gap-3 justify-center md:flex-row sm:flex-col'>
        <div className='ml-10'>
          <img src={connect} alt="Online connnect" height={700} width={700}/>
        </div>
        <div className=''>
            <h3 className='text-3xl font-bold '>
            Connect with <br />
            multiple Sponsors <br />
             and Alumni, <br />
            learn interact and grow <br />
            </h3>
            <p className='mt-4 leading-5 font-medium'>
            Tora is a social media app designed for struggling students. <br />
            Tora seemllesly connect needy students with alumnus willing <br />
            to help through sponsorship, mentorship or other various means. <br />
            Tora is a dream come true for students, and an avenue for generous givers. <br />
            </p>
            <div className='flex flex-row items-center justify-center'>

            </div>
        </div>
    </section>
  )
}

export default Features
