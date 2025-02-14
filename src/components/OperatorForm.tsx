import { ALLOWED_MIME_TYPES, MAX_FILE_SIZE } from "@/lib";
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
import { Button } from "./ui/button";
import { EmailIcon, PhoneIcon, UserIcon } from "@/assets";

const imageSchema = z
   .instanceof(File, { message: "A file is required" })
   .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must not exceed 10MB",
   })
   .refine((file) => ALLOWED_MIME_TYPES.includes(file.type), {
      message: "Only JPEG, PNG, GIF, and WEBP images are allowed",
   });

const formSchema = z.object({
   fullName: z.string().nonempty("This field is required"),
   email: z.string().email().nonempty("This field is required"),
   phone: z.string().nonempty("This field is required"),
   rentRate: z.number().positive(),
   operatorQualification: imageSchema,
   operatorImage: imageSchema,
})

const OperatorForm = () => {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         fullName: "",
         phone: "",
         email: "",
         rentRate: 0
      },
   })

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 sm:max-w-[450px] mb-auto">
            <FormField
               control={form.control}
               name="fullName"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Full name</FormLabel>
                     <FormControl className="border-[#D3D3D4]">
                        <Input placeholder="Full name" {...field} icon={<UserIcon className="text-[#666666]" />} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Email</FormLabel>
                     <FormControl className="border-[#D3D3D4]">
                        <Input placeholder="@example.com" {...field} icon={<EmailIcon className="text-[#666666]" />} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="phone"
               render={({ field }) => (
                  <FormItem className="mb-10">
                     <FormLabel>Phone number</FormLabel>
                     <FormControl className="border-[#D3D3D4]">
                        <Input placeholder="+234" {...field} icon={<PhoneIcon className="text-[#666666]" />} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <Button type="button" className="h-10">Continue</Button>
         </form>
      </Form>
   )
}

export default OperatorForm