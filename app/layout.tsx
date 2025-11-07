import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

// Load Opaque font
const opaque = localFont({
  src: [
    {
      path: '../public/fonts/opaque/rropaguetrial-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/opaque/rropaguetrial-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/opaque/rropaguetrial-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-opaque',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Préstamos Personales Rápidos en Panamá | RapiCredit - Aprobación en Minutos',
  description: 'Obtén préstamos personales rápidos desde B/.500 hasta B/.10,000 en Panamá. Aprobación en minutos, dinero en 24 horas. Sin garantía ni aval. ¡Solicita online ahora!',
  keywords: 'préstamos personales panamá, crédito rápido, dinero urgente, préstamos online panamá, financiera rapicredit',
  authors: [{ name: 'RapiCredit' }],
  creator: 'RapiCredit',
  publisher: 'RapiCredit',
  robots: 'index, follow',
  openGraph: {
    title: 'Préstamos Personales Rápidos en Panamá | RapiCredit',
    description: 'Aprobación en minutos, dinero en 24 horas. Desde B/.500 hasta B/.10,000. Sin garantía ni aval.',
    url: 'https://rapicredit.com',
    siteName: 'RapiCredit',
    locale: 'es_PA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Préstamos Personales Rápidos | RapiCredit Panamá',
    description: 'Aprobación en minutos, dinero en 24 horas. Sin garantía ni aval.',
    creator: '@rapicredit',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3446F1',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${opaque.variable} scroll-smooth`}>
      <head>
        {/* Geotargeting for Panama */}
        <meta name="geo.region" content="PA" />
        <meta name="geo.position" content="8.983333;-79.516667" />
        <meta name="ICBM" content="8.983333, -79.516667" />
        
        {/* Hreflang for Spanish Panama */}
        <link rel="alternate" hrefLang="es-pa" href="https://rapicredit.com/" />
        
        {/* Favicon Configuration */}
        <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dp3gvxyft/image/upload/c_scale,w_32,h_32,f_ico/v1762490150/Logo_fondo_solido-06_deoxql.jpg" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/dp3gvxyft/image/upload/c_scale,w_16,h_16,f_png/v1762490150/Logo_fondo_solido-06_deoxql.jpg" sizes="16x16" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/dp3gvxyft/image/upload/c_scale,w_32,h_32,f_png/v1762490150/Logo_fondo_solido-06_deoxql.jpg" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/dp3gvxyft/image/upload/c_scale,w_64,h_64,f_png/v1762490150/Logo_fondo_solido-06_deoxql.jpg" sizes="64x64" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/dp3gvxyft/image/upload/c_scale,w_128,h_128,f_png/v1762490150/Logo_fondo_solido-06_deoxql.jpg" sizes="128x128" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/dp3gvxyft/image/upload/c_scale,w_256,h_256,f_png/v1762490150/Logo_fondo_solido-06_deoxql.jpg" sizes="256x256" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dp3gvxyft/image/upload/c_scale,w_180,h_180,f_png/v1762490150/Logo_fondo_solido-06_deoxql.jpg" sizes="180x180" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dp3gvxyft/image/upload/c_scale,w_152,h_152,f_png/v1762490150/Logo_fondo_solido-06_deoxql.jpg" sizes="152x152" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dp3gvxyft/image/upload/c_scale,w_120,h_120,f_png/v1762490150/Logo_fondo_solido-06_deoxql.jpg" sizes="120x120" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/dp3gvxyft/image/upload/c_scale,w_192,h_192,f_png/v1762490150/Logo_fondo_solido-06_deoxql.jpg" sizes="192x192" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/dp3gvxyft/image/upload/c_scale,w_512,h_512,f_png/v1762490150/Logo_fondo_solido-06_deoxql.jpg" sizes="512x512" />
        
        {/* Windows Tile */}
        <meta name="msapplication-TileImage" content="https://res.cloudinary.com/dp3gvxyft/image/upload/c_scale,w_144,h_144,f_png/v1762490150/Logo_fondo_solido-06_deoxql.jpg" />
        <meta name="msapplication-TileColor" content="#3446F1" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FinancialService',
              name: 'RapiCredit',
              description: 'Préstamos personales rápidos y seguros en Panamá',
              url: 'https://rapicredit.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'PA',
                addressLocality: 'Ciudad de Panamá'
              },
              offers: {
                '@type': 'LoanOrCredit',
                name: 'Préstamo Personal',
                description: 'Préstamos personales desde B/.500 hasta B/.10,000',
                amount: {
                  '@type': 'MonetaryAmount',
                  currency: 'USD',
                  minValue: 500,
                  maxValue: 10000
                }
              },
              areaServed: {
                '@type': 'Country',
                name: 'Panama'
              }
            })
          }}
        />
      </head>
      <body className={`${opaque.className} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}