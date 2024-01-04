import {
  CustomFlowbiteTheme,
  Footer as FlowbiteFooter,
  FooterIcon as FlowbiteFooterIcon,
  FooterLink as FlowbiteFooterLink,
  FooterLinkGroup as FlowbiteFooterLinkGroup,
  FooterTitle as FlowbiteFooterTitle,
  FooterDivider,
} from "flowbite-react"
import Link from "next/link"
import type { FC } from "react"
import { FaFacebook, FaInstagram, FaPinterest, FaX } from "react-icons/fa6"
import Logo from "./Logo"
import Typography from "./Typography"

const footerTheme: CustomFlowbiteTheme["footer"] = {
  title: {
    base: "text-[#274C5B] font-bold text-xl",
  },
  groupLink: {
    base: "space-y-6 text-gray-500",
  },
  divider: {
    base: "h-full mt-3 w-0.5 bg-neutral-100",
  },
  root: {
    base: "flex justify-center gap-x-12 h-72",
  },
  icon: {
    base: "block bg-[#EFF6F1] hover:bg-[#c3f9d2] grid place-content-center w-14 h-14 rounded-full",
    size: "w-6 h-6 fill-[#274C5B] hover:fill-[#13769d]",
  },
}

const Footer: FC = () => {
  return (
    <FlowbiteFooter theme={footerTheme}>
      <div className="space-y-8 text-end">
        <FlowbiteFooterTitle theme={footerTheme.title} title="Contact Us" />

        <div className="text-end">
          <span className="block text-lg font-black text-gray-600">Email</span>
          <Typography variant="description">
            info@organickcompany.com
          </Typography>
        </div>

        <div className="text-end">
          <span className="block text-lg font-black text-gray-600">Phone</span>
          <Typography variant="description">+1 (555) 123-4567</Typography>
        </div>

        <div className="text-end">
          <span className="block text-lg font-black text-gray-600">
            Address
          </span>
          <Typography variant="description">
            123 Main Street, NY, 12345, USA
          </Typography>
        </div>
      </div>
      <FooterDivider theme={footerTheme.divider} />

      <div className="max-w-[500px] space-y-7 text-center">
        <Logo />
        <Typography variant="description" className="text-center">
          Organick offers pure, organic goodness – a store dedicated to natural,
          wholesome food choices.
        </Typography>
        <div className="flex justify-center gap-x-4">
          <FlowbiteFooterIcon
            target="_blank"
            href="https://instagram.com"
            theme={footerTheme.icon}
            icon={FaInstagram}
          />
          <FlowbiteFooterIcon
            target="_blank"
            href="https://facebook.com"
            theme={footerTheme.icon}
            icon={FaFacebook}
          />
          <FlowbiteFooterIcon
            target="_blank"
            href="https://twitter.com"
            theme={footerTheme.icon}
            icon={FaX}
          />
          <FlowbiteFooterIcon
            target="_blank"
            href="https://www.pinterest.ca/"
            theme={footerTheme.icon}
            icon={FaPinterest}
          />
        </div>
      </div>
      <FooterDivider theme={footerTheme.divider} />
      <div className="space-y-7">
        <FlowbiteFooterTitle theme={footerTheme.title} title="Utility Pages" />
        <FlowbiteFooterLinkGroup theme={footerTheme.groupLink} col>
          <FlowbiteFooterLink as={Link} href="/">
            Style Guide
          </FlowbiteFooterLink>
          <FlowbiteFooterLink as={Link} href="/404">
            404 Not Found
          </FlowbiteFooterLink>
          <FlowbiteFooterLink as={Link} href="/">
            Password Protected
          </FlowbiteFooterLink>
          <FlowbiteFooterLink as={Link} href="/">
            License
          </FlowbiteFooterLink>
          <FlowbiteFooterLink as={Link} href="/">
            Changelog
          </FlowbiteFooterLink>
        </FlowbiteFooterLinkGroup>
      </div>
    </FlowbiteFooter>
  )
}
export default Footer
