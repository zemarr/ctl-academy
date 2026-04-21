'use client'

import Image from "next/image"
import WorkshopTicket from "./workshop-ticket"
import suzan from '@/public/suzan-img.jpeg'

const WorkshopBookingCard = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 rounded-sm md:max-w-[80vw] w-full mx-auto relative overflow-hidden shadow-md">
      <div className="border-r-foreground/30 max-h-210 h-full">
        <Image src={suzan} alt="Suzan's image" className="w-full h-full object-fill aspect-auto" />
      </div>
      <div className="h-full">
        <WorkshopTicket />
      </div>
    </div>
  )
}

export default WorkshopBookingCard