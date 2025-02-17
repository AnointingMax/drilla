import { Contact as ContactImage } from "@/assets"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
   email: z.string().email().nonempty("This field is required"),
   phone: z.string().nonempty("This field is required"),
   message: z.string().nonempty("This field is required"),
})

const Contact = () => {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         phone: "",
         message: "",
         email: "",
      },
   })

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
   }

   return (
      <div className="grid md:grid-cols-2 gap-10 min-h-[70vh] mb-24">
         <div className="grid">
            <h1 className="mt-auto text-2xl font-bold text-dark-text font-Archivo">Contact Us</h1>
            <p className="text-sub-text font-medium text-sm max-w-[250px]">
               Send us a message, or put a call
               through we are glad to hear from you
            </p>
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 sm:max-w-[450px] mb-auto">
                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl className="border-[#D3D3D4]">
                              <Input placeholder="@example.com" {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="phone"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Phone number</FormLabel>
                           <FormControl className="border-[#D3D3D4]">
                              <Input placeholder="+234" {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="message"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Message</FormLabel>
                           <FormControl className="border-[#D3D3D4]">
                              <Textarea
                                 placeholder="Type Message"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <Button type="submit" className="h-10">Send Message</Button>
               </form>
            </Form>
         </div>
         <div className="bg-contain hidden relative bg-no-repeat text-[#F4EEEE] text-sm font-medium md:flex">
            <img src={ContactImage} className="absolute inset-0 w-full h-full -z-1" alt="" />
            <div className="z-10 flex flex-col px-6 pb-8 mt-auto gradient h-2/3">
               <p className="mt-auto mb-4">
                  Thank you for being part of our journey to redefine construction solutions with ease and
                  efficiency. Your trust not only powers seamless projects but also supports reliability and
                  quality in every rental. Together, we’re building a better future.</p>
               <p className="">
                  Adam Cols
                  <br />
                  <span className="text-[12px] font-normal">Founder & CEO</span>
               </p>
            </div>
         </div>
      </div>
   )
}

export default Contact