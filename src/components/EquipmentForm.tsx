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
import { CardIcon, EmailIcon, ExportIcon, GalleryIcon, PhoneIcon, UserIcon } from "@/assets";
import { useState } from "react";
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
   rentRate: z.number().positive(),
   truckRegistration: imageSchema,
   truckImages: z
      .array(imageSchema)
      .nonempty({ message: "At least one image is required" })
});

const formSchema = stepOneSchema.merge(stepTwoSchema)
export type equipmentFormSchema = z.infer<typeof formSchema>

const EquipmentForm = () => {
   const [step, setStep] = useState<"one" | "two">("one");

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         fullName: "",
         phone: "",
         email: "",
         rentRate: 0,
         truckImages: []
      },
   })

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
   }
   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 mb-auto w-full">
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
      <div className="grid gap-3">
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
      <div className="grid gap-3">
         <FormField
            control={form.control}
            name="rentRate"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Rent rate per hour</FormLabel>
                  <FormControl className="border-[#D3D3D4]">
                     <Input
                        placeholder="N"
                        {...field}
                        type="number"
                        icon={<CardIcon className="text-[#666666]" />}
                        onChange={(e) => field.onChange(e.target.value ? e.target.valueAsNumber : 0)}
                     />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
            control={form.control}
            name="truckRegistration"
            render={() => (
               <FormItem>
                  <FormLabel>Upload Truck Registration</FormLabel>
                  <Dropzone<equipmentFormSchema> name="truckRegistration" icon={<ExportIcon className="text-[#666666]" />} />
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
            control={form.control}
            name="truckImages"
            render={() => (
               <FormItem className="mb-10">
                  <FormLabel>Upload Truck Images</FormLabel>
                  <Dropzone<equipmentFormSchema> name="truckImages" multiple icon={<GalleryIcon className="text-[#666666]" />} />
                  <FormMessage />
               </FormItem>
            )}
         />
         <Button type="button" variant="outline" className="h-10" onClick={() => setStep("one")}>Previous</Button>
         <Button type="submit" className="h-10">Done</Button>
      </div>
   )
}

export default EquipmentForm