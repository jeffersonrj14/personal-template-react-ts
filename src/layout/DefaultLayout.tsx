import { ReactNode } from 'react'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import SEO from '../components/SEO/SEO'
import { HeadTags } from '../utils/types/HeadTags'

interface DefaultLayoutProps {
  children: ReactNode
  seoProps: HeadTags
}

const DefaultLayout = ({ children, seoProps }: DefaultLayoutProps) => {
  return (
    <>
      <SEO {...seoProps} />
      <Header />
      <div className='mx-auto my-8 max-w-3xl px-4 md:px-0'>
        <main>{children}</main>
      </div>
      <div className='text-center'>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
