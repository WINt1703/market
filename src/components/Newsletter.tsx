import type { FC } from "react"
import Button from "./Button"
import Input from "./Input"
import Typography from "./Typography"

interface NewsletterProps {}

const Newsletter: FC<NewsletterProps> = () => {
  return (
    <div className="aspect-[4/1] w-[1000px] overflow-hidden rounded-3xl bg-[url(/news-letter.svg)] bg-cover">
      <div className="flex h-full items-center justify-around">
        <Typography variant="theme" className="max-w-[350px] text-white">
          Subscribe to our Newsletter
        </Typography>
        <div className="space-x-1 ">
          <Input type="email" placeholder="Your Email Address" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  )
}
export default Newsletter
