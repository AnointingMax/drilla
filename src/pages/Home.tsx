import { BusIcon, Hero, UserIcon } from "@/assets"
import { Button } from "@/components/ui/button"

const Home = () => {
   return (
      <>
         <section>
            <div className="grid lg:grid-cols-2">
               <div className="grid py-8 md:py-16">
                  <div className="grid items-center my-auto gap-3 text-left md:text-center lg:text-left">
                     <h1 className='font-Archivo font-bold text-xl md:text-3xl lg:text-5xl max-w-[665px] sm:mx-auto lg:mx-0'>Rent Construction Equipments & Hire Skilled Operators</h1>
                     <p className="max-w-[600px] text-base lg:text-xl text-sub-text font-medium mb-6 sm:mx-auto lg:mx-0 sm:text-center lg:text-left">
                        Providing affordable and reliable solutions for your construction
                        projects rent high-quality equipment and hire skilled operators
                        to get the job done efficiently and professionally
                     </p>
                     <Button className="md:max-w-md h-13 sm:mx-auto lg:mx-0">Join Waitlist</Button>
                  </div>
               </div>
               <img src={Hero} alt="" />
               <div className="grid gap-4 grid-cols-2">
                  <div className="grid gap-2">
                     <BusIcon className="size-8 md:size-10" />
                     <p className="font-semibold text-xl">HEAVY EQUIPMENTS</p>
                     <p className="text-sub-text text-base">
                        Get the heavy-duty equipment you need, when you need it – reliable rentals for every construction project
                     </p>
                  </div>
                  <div className="grid gap-2">
                     <UserIcon className="size-8 md:size-10" />
                     <p className="font-semibold text-xl">OPERATORS</p>
                     <p className="text-sub-text text-base">
                        Find and hire skilled operators to get the job done right  experienced professionals ready to power your projects!
                     </p>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <h2 className="text-xl md:text-3xl lg:text-5xl">Heavy Equipment</h2>
         </section>
      </>
   )
}

export default Home