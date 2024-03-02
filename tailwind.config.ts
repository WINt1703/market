import Daisy from "daisyui"
import DaisyThemes from "daisyui/src/theming/themes"
import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/app-sections/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite-react/lib/**/*.js"
	],
	theme: {
		extend: {
			colors: {
				primary: {
					"100": "#5db0d1",
					"300": "#036c96",
					DEFAULT: "#274C5B"
				},
				secondary: "#EFD372",
				info: {
					"100": "#EFF6F1",
					"300": "#c3f9d2",
					DEFAULT: "#7EB693"
				}
			}
		}
	},
	plugins: [Daisy],
	daisyui: {
		themes: [
			{
				light: {
					...DaisyThemes.light,
					primary: "#274C5B",
					secondary: "#EFD372",
					info: "#7EB693"
				}
			}
		]
	}
}
export default config
