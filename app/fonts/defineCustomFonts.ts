import localFont from "next/font/local"

const grotezk = localFont({
  src: [
    {
      path: 'ApfelGrotezk-Regular.woff2',
      weight: '400'
    },
    {
      path: 'ApfelGrotezk-Brukt.woff2',
      weight: '300'
    },
    {
      path: 'ApfelGrotezk-Fett.woff2',
      weight: '600'
    },
    {
      path: 'ApfelGrotezk-Mittel.woff2',
      weight: '500'
    },
    {
      path: 'ApfelGrotezk-Satt.woff2',
      weight: '700'
    }
  ],
  variable: '--font-grotezk'
})

export const customFontsVariables = [grotezk.variable].join(" ");