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
import { useForm, UseFormReturn } from "react-hook-form"
import { Button } from "./ui/button";
import { BusIcon, CardIcon, EmailIcon, PhoneIcon, UserIcon } from "@/assets";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Dropzone from "./Dropzone";

const imageSchema = z
   .instanceof(File, { message: "A file is required" })
   .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must not exceed 10MB",
   })
   .refine((file) => ALLOWED_MIME_TYPES.includes(file.type), {
      message: "Only JPEG, PNG, GIF, and WEBP images are allowed",
   });

const stepOneSchema = z.object({
   fullName: z.string().nonempty("This field is required"),
   email: z.string().email().nonempty("This field is required"),
   phone: z.string().nonempty("This field is required"),
});

const stepTwoSchema = z.object({
   wageRate: z.number().positive(),
   machine: z.string().nonempty("This field is required"),
   operatorQualification: imageSchema,
   operatorImage: imageSchema,
});

const formSchema = stepOneSchema.merge(stepTwoSchema)
export type operatorFormSchema = z.infer<typeof formSchema>

const OperatorForm = () => {
   const [step, setStep] = useState<"one" | "two">("one");

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         fullName: "",
         phone: "",
         email: "",
         machine: "",
         wageRate: 0
      },
   })

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 sm:max-w-[450px] mb-auto">
            {step == "one" ?
               <StepOne setStep={setStep} form={form} /> :
               <StepTwo setStep={setStep} form={form} />
            }
         </form>
      </Form>
   )
}

type StepProps = {
   form: UseFormReturn<z.infer<typeof formSchema>>
   setStep: React.Dispatch<React.SetStateAction<"one" | "two">>
}

const StepOne = ({ form, setStep }: StepProps) => {
   const validateForm = () => {
      const values = form.getValues()
      const isValid = stepOneSchema.safeParse(values)

      if (isValid.success) {
         setStep("two")
      } else {
         form.trigger(["fullName", "email", "phone"])
      }
   }
   return (
      <div className="grid gap-2">
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
         <Button type="button" className="h-10" onClick={validateForm}>Continue</Button>
      </div>
   )
}

const StepTwo = ({ form, setStep }: StepProps) => {
   return (
      <div className="grid gap-2">
         <FormField
            control={form.control}
            name="machine"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Machine you drive/operate?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                     <FormControl>
                        <SelectTrigger>
                           <SelectValue icon={<BusIcon className="text-[#666666]" />} placeholder="Select machine" />
                        </SelectTrigger>
                     </FormControl>
                     <SelectContent>
                        <SelectItem value="tractor">Tractor</SelectItem>
                        <SelectItem value="Drill">Drill</SelectItem>
                        <SelectItem value="forklift">Forklift</SelectItem>
                     </SelectContent>
                  </Select>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
            control={form.control}
            name="wageRate"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Wage charge per hour </FormLabel>
                  <FormControl className="border-[#D3D3D4]">
                     <Input placeholder="N" {...field} icon={<CardIcon className="text-[#666666]" />} />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <Dropzone name="operatorQualification" />
         <Dropzone name="operatorImage" />
         <Button type="button" variant="outline" className="h-10" onClick={() => setStep("one")}>Previous</Button>
         <Button type="submit" className="h-10">Done</Button>
      </div>
   )
}

export default OperatorForm