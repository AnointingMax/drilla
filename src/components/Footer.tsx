import { FacebookIcon, InstagramIcon, LogoInverted, XIcon, YoutubeIcon } from "@/assets"


const Footer = () => {
   return (
      <>
         <footer className="py-12 grid gap-12 px-20 bg-[#231B15] rounded-2xl">
            <div className="flex flex-wrap items-start gap-8 justify-between">
               <img src={LogoInverted} alt="" />
               <div className="flex gap-x-16 gap-y-6 flex-wrap">
                  <div className="text-white grid gap-1">
                     <p className="font-bold text-sm">For Customers</p>
                     <ul className="font-light text-sm grid gap-2">
                        <li>Join Waitlist</li>
                        <li>FAQs</li>
                        <li>About Us</li>
                     </ul>
                  </div>
                  <div className="text-white grid gap-1">
                     <p className="font-bold text-sm">For Owners</p>
                     <ul className="font-light text-sm grid gap-2">
                        <li>List Equipments</li>
                        <li>FAQs</li>
                        <li>About Us</li>
                     </ul>
                  </div>
                  <div className="text-white grid gap-1">
                     <p className="font-bold text-sm">Operators</p>
                     <ul className="font-light text-sm grid gap-2">
                        <li>Register Now</li>
                        <li>FAQs</li>
                        <li>About Us</li>
                     </ul>
                  </div>
                  <div className="text-white grid gap-1">
                     <p className="font-bold text-sm">Contact</p>
                     <ul className="font-light text-sm grid gap-2">
                        <li>+234 00903390</li>
                        <li>+233 049994040</li>
                        <li>Drilla@gmail.com</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
               <ul className="flex flex-wrap items-center gap-5 text-xs">
                  <li className="bg-white rounded-sm w-[24px] aspect-square grid place-items-center">
                     <a href="#"><FacebookIcon className="size-4" /></a>
                  </li>
                  <li className="bg-white rounded-sm w-[24px] aspect-square grid place-items-center">
                     <a href="#"><XIcon className="size-4" /></a>
                  </li>
                  <li className="bg-white rounded-sm w-[24px] aspect-square grid place-items-center">
                     <a href="#"><YoutubeIcon className="size-4" /></a>
                  </li>
                  <li className="bg-white rounded-sm w-[24px] aspect-square grid place-items-center">
                     <a href="#"><InstagramIcon className="size-4" /></a>
                  </li>
               </ul>
            </div>
         </footer>
         <div className="flex flex-wrap-reverse items-center justify-between py-6 gap-5">
            <p className="text-xs font-light">© {new Date().getFullYear()} All Rights Reserved</p>
            <ul className="flex flex-wrap items-center gap-5 text-xs">
               <li><a href="#">Privacy Policy</a></li>
               <li><a href="#">Terms of Use</a></li>
               <li><a href="#">Sales and Refunds</a></li>
               <li><a href="#">Legal</a></li>
               <li><a href="#">Site Map</a></li>
            </ul>
         </div>
      </>
   )
}

export default Footer