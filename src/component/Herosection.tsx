import hero from '../assets/images/Hero-section.svg'

const Herosection = () => {
  return (
    <section className='flex flex-row items-center justify-center'>
        <div>
        <h3 className='size-[65px] font-bold'>
        <span className='text-btn-color'>Convenient</span><br />
        Way For Alumni <br />
        And Students <br />
        To Connect <br />
        </h3>
        </div>
        <div>
            <img src={hero} alt="Hero-section" />
        </div>

    </section>
  )
}

export default Herosection
