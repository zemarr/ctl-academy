'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image, { StaticImageData } from 'next/image'

const ImageCarousel = ({ data }: { data: StaticImageData[] }) => {
  return (
    <div>
      <Carousel
        className='w-full mb-12'
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 10000,
            stopOnInteraction: true,
            stopOnMouseEnter: true
          })
        ]}
      >
        <CarouselContent>
          {data.map((img: StaticImageData) => (
            <CarouselItem key={img.blurDataURL}>
              <div className="relative mx-auto rounded-xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.blurDataURL!}
                  width={100}
                  height={80}
                  sizes='100vw'
                  className='w-full h-full object-contain aspect-square rounded-xl'
                />
              </div>
            </CarouselItem>
          ))
          }
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  )
}

export default ImageCarousel