import { BusIcon, Hero, UserIcon } from "@/assets"
import { DisplayCell } from "@/components"
import { Button } from "@/components/ui/button"

const Home = () => {
   return (
      <>
         <section className="pb-28">
            <div className="grid lg:grid-cols-2">
               <div className="grid py-8 max-lg:order-1 md:py-16">
                  <div className="grid items-center gap-3 my-auto text-left md:text-center lg:text-left">
                     <h1 className='font-Archivo font-bold text-3xl lg:text-5xl max-w-[665px] sm:mx-auto lg:mx-0'>Rent Construction Equipments & Hire Skilled Operators</h1>
                     <p className="max-w-[600px] text-base lg:text-xl text-sub-text font-medium mb-6 sm:mx-auto lg:mx-0 sm:text-center lg:text-left">
                        Providing affordable and reliable solutions for your construction
                        projects rent high-quality equipment and hire skilled operators
                        to get the job done efficiently and professionally
                     </p>
                     <Button className="md:max-w-md h-13 sm:mx-auto lg:mx-0">Join Waitlist</Button>
                  </div>
               </div>
               <img src={Hero} className="max-lg:order-3" alt="" />
               <div className="grid grid-cols-2 gap-4 max-lg:order-2">
                  <div className="grid gap-2">
                     <BusIcon className="size-8 md:size-10" />
                     <p className="text-xl font-semibold">HEAVY EQUIPMENTS</p>
                     <p className="text-base text-sub-text">
                        Get the heavy-duty equipment you need, when you need it – reliable rentals for every construction project
                     </p>
                  </div>
                  <div className="grid gap-2">
                     <UserIcon className="size-8 md:size-10" />
                     <p className="text-xl font-semibold">OPERATORS</p>
                     <p className="text-base text-sub-text">
                        Find and hire skilled operators to get the job done right  experienced professionals ready to power your projects!
                     </p>
                  </div>
               </div>
            </div>
         </section>
         <section className="pb-28">
            <h2 className="mb-4 text-3xl font-semibold lg:text-5xl">Heavy Equipment</h2>
            <p className="mb-8 text-xl">We list all forms of heavy equipments</p>
            <div className="grid gap-x-8 gap-y-8 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
               {Array(8).fill("").map((_, index) => <DisplayCell key={index} />)}
            </div>
            <Button className="sm:max-w-[250px] w-full h-13 mt-12 mx-auto block">Join Waitlist</Button>
         </section>
         <section className="pb-28">
            <h2 className="mb-4 text-3xl font-semibold lg:text-5xl">Hire all Kinds of Operators</h2>
            <p className="mb-8 text-xl max-w-[450px]">We help you list out skilled operators across all
               sectors to handle your equipments</p>
            <div className="grid gap-x-8 gap-y-8 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
               {Array(8).fill("").map((_, index) => <DisplayCell key={index} />)}
            </div>
            <Button className="sm:max-w-[250px] w-full h-13 mt-12 mx-auto block">Join Waitlist</Button>
         </section>
         <section className="pb-28">
            <h2 className="mb-4 text-3xl font-semibold lg:text-5xl">How Renting Works?</h2>
            <p className="mb-8 text-xl text-sub-text max-w-[450px]">Discover how easy it is to rent with us a simple, step-by-step process
               to get the equipment and operators you need, right when you need them!</p>

         </section>
      </>
   )
}

export default Home