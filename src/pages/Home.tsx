import { Hero } from "@/assets"
import { Button } from "@/components/ui/button"

const Home = () => {
   return (
      <div>
         <div className="grid lg:grid-cols-2">
            <div className="grid items-center py-8 md:py-16">
               <div className="grid gap-3 text-left md:text-center lg:text-left">
                  <h1 className='font-Archivo font-bold text-xl md:text-3xl lg:text-5xl max-w-[665px] sm:mx-auto lg:mx-0'>Rent Construction Equipments & Hire Skilled Operators</h1>
                  <p className="max-w-[600px] text-base lg:text-xl text-sub-text font-medium mb-6 sm:mx-auto lg:mx-0 sm:text-center lg:text-left">
                     Providing affordable and reliable solutions for your construction
                     projects rent high-quality equipment and hire skilled operators
                     to get the job done efficiently and professionally
                  </p>
                  <Button className="md:max-w-md h-13 sm:mx-auto lg:mx-0">Join Waitlist</Button>
               </div>
            </div>
            <img src={Hero} alt="" className="hidden lg:block" />
         </div>
      </div>
   )
}

export default Home