'use client'
import { motion } from "framer-motion";
import Image from 'next/image';
import ctlBanner from '@/public/ctl-banner-img.webp'
import WorkshopBookingCard from "@/components/workshop-booking-card";


const AboutPage = () => {

  return (
    <div id="about-page" className='min-h-screen  bg-black py-32 md:pb-32 relative'>
      <div className="relative">
        <Image src={ctlBanner} alt="ctl banner image" className="w-full max-h-screen object-contain" />

        <h2 className="absolute md:bottom-20 bottom-10 left-0 w-full text-center text-5xl lg:text-7xl font-black tracking-tighter text-background mb-12 uppercase leading-none">
          ABOUT US
        </h2>
      </div>
      <motion.div className="mb-24 mx-auto px-6 lg:px-12 mt-8">
        <motion.div className="max-w-screen mx-auto">
          <div className="w-full">
            <p className="text-lg text-background leading-relaxed font-normal text-center mb-6">
              You already have something worth saying. You just haven't found the space to say it yet.
              <br /><br />
              My name is Suzan, and I know that feeling from the inside.<br />
              Growing up, I was heavily bullied. I learned to make myself small, overthink every word, and hold back the parts of me that most wanted to be heard. I wasn't quiet because I had nothing to say. I was quiet because I didn't feel safe saying it.
              <br /><br />
              Everything changed when I found acting. It gave me permission to take up space, speak with intention, and show up fully without apology.
              <br />
              I went on to study Applied Theatre at a leading drama school, deepening my understanding of communication, human connection, and the relationship between voice and identity.<br /><br />
              Today, the first thing people tell me is that they love my energy, my openness, and how easy I am to talk to. I say that not to impress you, but because I was the introverted girl who could barely speak up. And if that transformation is possible for me, it's possible for you.<br /><br />
              That's the foundation of Cue the Light Academy. A space for people who have more to say than they allow themselves to, whether you're held back by confidence, introversion, accent, a speech impediment, or the fear of being truly seen.<br /><br />
              You don't need to find a new voice. You just need the right space to finally use the one you already have.
              <br /><br />
            </p>
          </div>
          {/* <div className="">
            <ImageCarousel data={[suzan]} />
          </div> */}
        </motion.div>
        <br />
        <div className="mt-8">
          <h3 className="font-black text-center text-background text-3xl uppercase tracking-wide mb-6">In our sessions you will learn to</h3>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-12">
            <motion.div className="">
              <div className="bg-white p-6 h-full border-l-4 border-primary hover:border-l-8 transition-all duration-500 hover:shadow-xl">
                <p className="md:text-xl text-base font-medium text-foreground">
                  Speak clearly and confidently
                </p>
              </div>
            </motion.div>
            <motion.div className="">
              <div className="bg-white p-6 h-full border-l-4 border-primary hover:border-l-8 transition-all duration-500 hover:shadow-xl">
                <p className="md:text-xl text-base font-medium text-foreground">
                  Express yourself without overthinking
                </p>
              </div>
            </motion.div>
            <motion.div className="">
              <div className="bg-white p-6 h-full border-l-4 border-primary hover:border-l-8 transition-all duration-500 hover:shadow-xl">
                <p className="md:text-xl text-base font-medium text-foreground">
                  Improve your body language and presence
                </p>
              </div>
            </motion.div>
            <motion.div className="">
              <div className="bg-white p-6 h-full border-l-4 border-primary hover:border-l-8 transition-all duration-500 hover:shadow-xl">
                <p className="md:text-xl text-base font-medium text-foreground">
                  Communicate effectively in conversations, meetings, and presentations
                </p>
              </div>
            </motion.div>
            <motion.div className="">
              <div className="bg-white p-6 h-full border-l-4 border-primary hover:border-l-8 transition-all duration-500 hover:shadow-xl">
                <p className="md:text-xl text-base font-medium text-foreground">
                  Feel comfortable being seen and heard
                </p>
              </div>
            </motion.div>
          </div>
          <p className="text-lg text-background leading-relaxed font-normal text-center mb-6">
            <span className="italic">
              This isn't just about speaking…
              it's about becoming a more confident version of yourself.
            </span>
            <br /><br />
            Our workshops are interactive, practical, and designed to get you out of your head and into expression.
          </p>
        </div>
        <WorkshopBookingCard />

      </motion.div>
    </div>
  )
}

export default AboutPage