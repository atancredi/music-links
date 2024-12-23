import localFont from "next/font/local"

const haas = localFont({
  src: [
    {
      path: 'AlteHaasGroteskBold.woff2',
      weight: '700'
    }
  ],
  variable: '--font-haas'
})

export const customFontsVariables = [haas.variable].join(" ");