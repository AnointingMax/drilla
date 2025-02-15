import {
   Dialog,
   DialogContent,
   DialogTrigger,
} from "@/components/ui/dialog"
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/components/ui/tabs"
import { EquipmentForm, OperatorForm } from "@/components";
import { ReactNode } from "react";

type Props = {
   defaultTab?: "heavy-equipment" | "operators";
   trigger: ReactNode
}

const EquipmentOperator = ({ defaultTab, trigger }: Props) => {
   return (
      <Dialog>
         <DialogTrigger asChild>
            {trigger}
         </DialogTrigger>
         <DialogContent className="max-w-[700px] md:px-24">
            <Tabs defaultValue={defaultTab}>
               <TabsList className="grid w-full grid-cols-2 mb-10">
                  <TabsTrigger value="heavy-equipment">Heavy Equipments</TabsTrigger>
                  <TabsTrigger value="operators">Operators</TabsTrigger>
               </TabsList>
               <TabsContent value="heavy-equipment">
                  <EquipmentForm />
               </TabsContent>
               <TabsContent value="operators">
                  <OperatorForm />
               </TabsContent>
            </Tabs>
         </DialogContent>
      </Dialog>
   )
}

export default EquipmentOperator