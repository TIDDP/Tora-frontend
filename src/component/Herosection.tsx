import hero from '../assets/images/Hero-section.svg'

const Herosection = () => {
  return (
    <section className='flex flex-row flex-wrap items-center justify-center'>
        <div>
        <h1 className=' text-5xl font-bold leading-30'>
        <span className='text-logo-color'>Convenient</span><br />
        Way For Alumni <br />
        And Students <br />
        To Connect <br />
        </h1>
        </div>
        <div>
            <img src={hero} alt="Hero-section" />
        </div>

    </section>
  )
}

export default Herosection
