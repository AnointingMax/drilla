import { BusIcon, Hero, Image1, Image2, UserIcon } from "@/assets"
import { DisplayCell } from "@/components"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
            <p className="mb-8 text-xl text-sub-text max-w-[600px]">Discover how easy it is to rent with us a simple, step-by-step process
               to get the equipment and operators you need, right when you need them!</p>
            <div className="counter-parent grid gap-8 md:gap-12 md:grid-cols-[2fr,3fr] items-center">
               <img src={Image1} className="max-md:order-2 w-full" alt="" />
               <div className="max-md:order-1 grid gap-6">
                  <div>
                     <p className="text-xl font-bold text-dark-text counter-element">Search Equipments</p>
                     <p className="text-sub-text text-base font-medium ml-[50px]">Find the perfect equipment for your project – browse our wide range of
                        construction tools and machinery to match your needs</p>
                  </div>
                  <div>
                     <p className="text-xl font-bold text-dark-text counter-element">Compare Prices</p>
                     <p className="text-sub-text text-base font-medium ml-[50px]">Get the best value for your project easily compare prices and choose the
                        most cost-effective option for your equipment rentals!</p>
                  </div>
                  <div>
                     <p className="text-xl font-bold text-dark-text counter-element">Rent Equipment Online</p>
                     <p className="text-sub-text text-base font-medium ml-[50px]">Convenient and hassle-free – rent construction equipment online anytime,
                        anywhere, and get it delivered to your site!</p>
                  </div>
               </div>
            </div>
         </section>
         <section className="pb-28">
            <h2 className="mb-4 text-3xl font-semibold lg:text-5xl">How Hiring Operator Works?</h2>
            <p className="mb-8 text-xl text-sub-text max-w-[600px]">Learn how simple it is to hire skilled operators – a quick and straightforward
               process to match you with the right professionals for your project!</p>
            <div className="counter-parent grid gap-8 md:gap-12 md:grid-cols-[3fr,2fr] items-center">
               <div className="grid gap-6">
                  <div>
                     <p className="text-xl font-bold text-dark-text counter-element">Search Operators</p>
                     <p className="text-sub-text text-base font-medium ml-[50px]">Find experienced operators for your project – explore our network of
                        skilled professionals to get the job done right!</p>
                  </div>
                  <div>
                     <p className="text-xl font-bold text-dark-text counter-element">Check Expertise</p>
                     <p className="text-sub-text text-base font-medium ml-[50px]">Evaluate operator expertise with ease – review qualifications and skills
                        to ensure you hire the best professional for your needs</p>
                  </div>
                  <div>
                     <p className="text-xl font-bold text-dark-text counter-element">Compare Wages</p>
                     <p className="text-sub-text text-base font-medium ml-[50px]">Make informed decisions – compare operator wages to find the perfect
                        balance between expertise and your budget</p>
                  </div>
               </div>
               <img src={Image2} className="w-full" alt="" />
            </div>
         </section>
         <section className="pb-28">
            <h2 className="mb-8 grid text-3xl font-medium lg:text-5xl text-center">Frequently Asked Questions</h2>
            <Accordion type="multiple" className="max-w-[750px] w-full grid gap-4 mx-auto">
               <AccordionItem value="item-1">
                  <AccordionTrigger>How long does my order take?</AccordionTrigger>
                  <AccordionContent>
                     Orders typically take 3-5 business days to process and ship, but delivery times may
                     vary based on your location and selected shipping method. You'll receive a tracking
                     number as soon as your order is on its way!
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-2">
                  <AccordionTrigger>How can i hire an operator</AccordionTrigger>
                  <AccordionContent>
                     Orders typically take 3-5 business days to process and ship, but delivery times may
                     vary based on your location and selected shipping method. You'll receive a tracking
                     number as soon as your order is on its way!
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-3">
                  <AccordionTrigger>How can i hire an operator</AccordionTrigger>
                  <AccordionContent>
                     Orders typically take 3-5 business days to process and ship, but delivery times may
                     vary based on your location and selected shipping method. You'll receive a tracking
                     number as soon as your order is on its way!
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-4">
                  <AccordionTrigger>How do i rent a tractor for my site</AccordionTrigger>
                  <AccordionContent>
                     Orders typically take 3-5 business days to process and ship, but delivery times may
                     vary based on your location and selected shipping method. You'll receive a tracking
                     number as soon as your order is on its way!
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-5">
                  <AccordionTrigger>How do i rent a tractor for my site</AccordionTrigger>
                  <AccordionContent>
                     Orders typically take 3-5 business days to process and ship, but delivery times may
                     vary based on your location and selected shipping method. You'll receive a tracking
                     number as soon as your order is on its way!
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
         </section>

      </>
   )
}

export default Home