import { roboto } from './fonts'
// import './globals.css'
import ThemeRegistry from './ThemeRegistry'
import { AppBar } from '../components'
import {QueryProvider} from '../providers'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={roboto.className}>
      
      
      <ThemeRegistry options={{ key: 'mui' }}>
        
        <QueryProvider>
        <AppBar />
        
        {children}
        </QueryProvider>
        
        </ThemeRegistry>
      
      </body>
    </html>
  )
}
