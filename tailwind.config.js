/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["nunito"],
				title: ["kanit"],
				subTitle: ["varela round"],
				text: ["nunito"],
			},
			colors: {
				gradientfrom: "#1f2749",
				gradientmiddle: "#493c94",
				gradientto: "#9a39ab",
				navbg: "#212329",
				homeColor: "#3C1F7B",
				planesColor: "#007F7F",
				mapColor: "#C95A3A",
				settingColor: "#4C5171",
				accPink: "#C68AFF",
			},
		},
	},
	plugins: [],
};
