import {
   Dialog,
   DialogContent,
   DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { z } from "zod";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { EmailIcon, UserIcon } from "@/assets";
import { ReactNode } from "react";

type Props = {
   trigger: ReactNode
}

const formSchema = z.object({
   firstName: z.string().nonempty("This field is required"),
   lastName: z.string().nonempty("This field is required"),
   email: z.string().email().nonempty("This field is required"),
})

const JoinWaitlist = ({ trigger }: Props) => {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         firstName: "",
         lastName: "",
         email: "",
      },
   })

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
   }

   return (
      <Dialog>
         <DialogTrigger asChild>
            {trigger}
         </DialogTrigger>
         <DialogContent>
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 mb-auto w-full">
                  <h1 className="font-semibold text-3xl text-center">Join Waitlist</h1>
                  <FormField
                     control={form.control}
                     name="firstName"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>First name</FormLabel>
                           <FormControl className="border-[#D3D3D4]">
                              <Input placeholder="Full name" {...field} icon={<UserIcon className="text-[#666666]" />} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="lastName"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>First name</FormLabel>
                           <FormControl className="border-[#D3D3D4]">
                              <Input placeholder="+234" {...field} icon={<UserIcon className="text-[#666666]" />} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem className="mb-10">
                           <FormLabel>Email</FormLabel>
                           <FormControl className="border-[#D3D3D4]">
                              <Input placeholder="@example.com" {...field} icon={<EmailIcon className="text-[#666666]" />} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <Button type="submit" className="h-10">Submit</Button>

               </form>
            </Form>
         </DialogContent>
      </Dialog>
   )
}

export default JoinWaitlist