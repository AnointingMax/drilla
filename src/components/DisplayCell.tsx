import { Display } from "@/assets"

type Props = {
   // TODO MAKE COMPULSORY
   image?: string;
   text?: string
}

const DisplayCell = ({ image = Display, text = "Excavator" }: Props) => {
   return (
      <div>
         <img src={image} className="w-full" alt="" />
         <p className="mt-3 text-lg font-bold text-dark-text">{text}</p>
      </div>
   )
}

export default DisplayCell