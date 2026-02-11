import Hero from "./Hero"
import About from "./About"
import { Legacy } from "@/components/common"
import Leadership from "./Leadership"

export default function WhoWeArePage() {
  return (
    <div className='bg-primary text-primary'>
      <Hero />
      <About />
      <Legacy />
      <Leadership />
    </div>
  )
}
