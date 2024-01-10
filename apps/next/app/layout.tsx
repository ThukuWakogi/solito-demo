import { Provider } from 'app/provider'
import 'raf/polyfill'
import 'setimmediate'
import './globals.css'
import { StylesProvider } from './styles-provider'

export const metadata = {
  title: 'Create Solito App',
  description: 'Generated by create Solito app',
}

interface IRootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <StylesProvider>{children}</StylesProvider>
        </Provider>
      </body>
    </html>
  )
}
