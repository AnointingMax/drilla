import {
   Dialog,
   DialogContent,
   DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib";
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/components/ui/tabs"
import { EquipmentForm, OperatorForm } from "@/components";

type Props = {
   className?: string;
}

const EquipmentOperator = ({ className }: Props) => {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant="none" className={cn(className)}>List your equipment</Button>
         </DialogTrigger>
         <DialogContent>
            <Tabs>
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