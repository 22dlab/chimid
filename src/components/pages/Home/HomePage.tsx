import Hero from "./Hero"
import About from "./About"
import { Legacy } from "@/components/common"
import Explore from "./Explore"

export default function HomePage() {
  return (
    <div className='bg-primary text-primary'>
      <Hero />
      <About />
      <Legacy />
      <Explore />
    </div>
  )
}
