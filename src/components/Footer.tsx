import { FacebookIcon, InstagramIcon, LogoInverted, XIcon, YoutubeIcon } from "@/assets"
import { Link } from "react-router-dom"

const Footer = () => {
   return (
      <>
         <footer className="py-12 grid gap-12 px-20 bg-[#231B15] rounded-2xl">
            <div className="flex flex-wrap items-start justify-between gap-8">
               <img src={LogoInverted} alt="" />
               <div className="flex flex-wrap gap-x-16 gap-y-6">
                  <div className="grid gap-1 text-white">
                     <p className="text-sm font-bold">For Customers</p>
                     <ul className="grid gap-2 text-sm font-light">
                        <li>Join Waitlist</li>
                        <li>FAQs</li>
                        <li>
                           <Link to="/about">About Us</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="grid gap-1 text-white">
                     <p className="text-sm font-bold">For Owners</p>
                     <ul className="grid gap-2 text-sm font-light">
                        <li>List Equipments</li>
                        <li>FAQs</li>
                        <li>
                           <Link to="/about">About Us</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="grid gap-1 text-white">
                     <p className="text-sm font-bold">Operators</p>
                     <ul className="grid gap-2 text-sm font-light">
                        <li>Register Now</li>
                        <li>FAQs</li>
                        <li>
                           <Link to="/about">About Us</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="grid gap-1 text-white">
                     <p className="text-sm font-bold">Contact</p>
                     <ul className="grid gap-2 text-sm font-light">
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
         <div className="flex flex-wrap-reverse items-center justify-between gap-5 py-6">
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