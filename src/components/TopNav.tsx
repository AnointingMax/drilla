import { Logo, MenuIcon } from "@/assets"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EquipmentOperator, JoinWaitlist } from "@/portals"

const TopNav = () => {
   return (
      <div className='flex items-center justify-between my-6'>
         <Link to="/">
            <img src={Logo} alt="" />
         </Link>
         <ul className="items-center hidden lg:flex">
            <li>
               <EquipmentOperator
                  defaultTab="heavy-equipment"
                  trigger={<Button variant="none" className="font-medium hover:underline">List your equipment</Button>}
               />
            </li>
            <li>
               <EquipmentOperator
                  defaultTab="operators"
                  trigger={<Button variant="none" className="font-medium hover:underline">Operators</Button>}
               />
            </li>
            <li>
               <Button variant="none" className="font-medium hover:underline">
                  <a href="/#faqs">FAQs</a>
               </Button>
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
            <li>
               <Button variant="none" className="font-medium hover:underline">
                  <a href="/#faqs" target="_blank">DrillaVest</a>
               </Button>
            </li>
         </ul>
         <JoinWaitlist trigger={<Button className="hidden lg:flex">Join Waitlist</Button>} />
         <DropdownMenu>
            <DropdownMenuTrigger className="lg:hidden">
               <MenuIcon className="w-[32px] h-[32px]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-48">
               <DropdownMenuItem asChild>
                  <EquipmentOperator
                     trigger={<span className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-base outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">List your equipment</span>}
                     defaultTab="heavy-equipment"
                  />
               </DropdownMenuItem>
               <DropdownMenuItem asChild>
                  <EquipmentOperator
                     defaultTab="operators"
                     trigger={<span className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-base outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">Operators</span>}
                  />
               </DropdownMenuItem>
               <DropdownMenuItem><a href="/#faqs">FAQs</a></DropdownMenuItem>
               <DropdownMenuItem asChild>
                  <Link to="/contact">Contact</Link>
               </DropdownMenuItem>
               <DropdownMenuItem asChild>
                  <Link to="/about">About</Link>
               </DropdownMenuItem>
               <DropdownMenuItem><a href="/#faqs" target="_blank">DrillaVest</a></DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   )
}

export default TopNav