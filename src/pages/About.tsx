import { About as AboutImage } from "@/assets"

const About = () => {
   return (
      <>
         <div className="grid gap-10 md:grid-cols-2 max-sm:text-center">
            <div className="grid">
               <h1 className="mt-auto text-5xl font-bold max-sm:mt-14 text-dark-text font-Archivo">About Us</h1>
               <p className="text-base font-medium text-sub-text">
                  The uber for construction equipments
               </p>
            </div>
            <img src={AboutImage} className="object-contain max-h-[700px]" alt="" />
         </div>
         <div className="max-w-[1000px] text-dark-text grid gap-2 font-medium mb-24 max-sm:text-center">
            <h2 className="mb-2 text-3xl font-bold max-sm:mt-14">What we Envision?</h2>
            <p>
               At Drilla, we are transforming the construction industry by providing easy access to high-quality equipment rentals and skilled operators.
               Founded on the belief that every project deserves reliable solutions, we are dedicated to
               simplifying the construction process for contractors, builders, and DIY enthusiasts alike.
            </p>
            <p>
               Our platform bridges the gap between top-notch construction equipment and skilled professionals,
               ensuring that you have everything you need to complete your projects efficiently and effectively.
               Whether you're working on a small renovation or a large-scale development, we are your trusted partner for seamless operations.
            </p>
            <p>
               With a commitment to excellence, affordability, and convenience, we aim to empower individuals and businesses to build confidently.
               Our user-friendly online system allows you to search, compare, and rent equipment or hire operators with just a few clicks
            </p>
            <p>
               Join us as we continue to revolutionize construction solutions, providing reliable tools and expert support to help you bring your
               vision to life. Together, we're not just building structures - we're building a better future.
            </p>
         </div>
      </>
   )
}

export default About