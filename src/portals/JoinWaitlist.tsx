import {
   Dialog,
   DialogContent,
   DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib";

type Props = {
   className?: string;
}

const JoinWaitlist = ({ className }: Props) => {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant="none" className={cn(className)}>Join</Button>
         </DialogTrigger>
         <DialogContent className="max-w-[700px] px-24">
            <h1>Hello</h1>
         </DialogContent>
      </Dialog>
   )
}

export default JoinWaitlist