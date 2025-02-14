import { Logo, MenuIcon } from "@/assets"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EquipmentOperator } from "@/portals"

const TopNav = () => {
   return (
      <div className='flex items-center justify-between my-6'>
         <Link to="/">
            <img src={Logo} alt="" />
         </Link>
         <ul className="items-center hidden lg:flex">
            <li>
               <EquipmentOperator className="font-medium hover:underline" />
            </li>
            <li>
               <Button variant="none" className="font-medium hover:underline">Operators</Button>
            </li>
            <li>
               <Button variant="none" className="font-medium hover:underline">FAQs</Button>
            </li>
            <li>
               <Button variant="none" className="font-medium hover:underline" asChild>
                  <Link to="/contact">
                     Contact
                  </Link>
               </Button>
            </li>
            <li>
               <Button variant="none" className="font-medium hover:underline" asChild>
                  <Link to="/about">
                     About
                  </Link>
               </Button>
            </li>
         </ul>
         <Button className="hidden lg:flex">Join Waitlist</Button>
         <DropdownMenu>
            <DropdownMenuTrigger className="lg:hidden">
               <MenuIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-48">
               <DropdownMenuItem asChild>
                  <EquipmentOperator />
               </DropdownMenuItem>
               <DropdownMenuItem>Operators</DropdownMenuItem>
               <DropdownMenuItem>FAQs</DropdownMenuItem>
               <DropdownMenuItem asChild>
                  <Link to="/contact">Contact</Link>
               </DropdownMenuItem>
               <DropdownMenuItem asChild>
                  <Link to="/about">About</Link>
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   )
}

export default TopNav