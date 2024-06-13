import { Helmet } from 'react-helmet-async'

interface OpenGraphProps {
  title?: string
  type?: string
  image?: string
  alt?: string
  description?: string
}

interface SEOProps {
  title?: string
  description?: string
  noindex?: boolean
  og?: OpenGraphProps
}

const DEFAULT_TITLE_PAGE = 'RJ Jefferson React Template'
const DEFAULT_DESCRIPTION_PAGE = 'RJ Jefferson React Template'
const DEFAULT_URL_SITE = 'https://localhost:4173'

const SEO = ({ title, description, noindex, og }: SEOProps) => {
  const openGraph = {
    title: title || og?.title || DEFAULT_TITLE_PAGE,
    type: 'website',
    image: '/vite.svg',
    alt: og?.alt || 'RJ Jefferson React Template',
    url: DEFAULT_URL_SITE,
    description: og?.description || DEFAULT_DESCRIPTION_PAGE
  }

  return (
    <Helmet>
      <meta charSet='UTF-8' />
      <title>{title ? `${title} | RJ Jefferson's Projects` : DEFAULT_TITLE_PAGE}</title>
      <meta name='description' content={description || DEFAULT_DESCRIPTION_PAGE} />
      {noindex && <meta name='robots' content='noindex' />}
      <meta property='og:title' content={openGraph.title} />
      <meta property='og:type' content={openGraph.type} />
      <meta property='og:image' content={openGraph.image} />
      <meta property='og:description' content={openGraph.description} />
      <meta property='og:url' content={openGraph.url} />
      <meta name='twitter:creator' content='@jeffersonrj14' />
      <meta name='twitter:image' content={openGraph.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={openGraph.title} />
      <meta name='twitter:description' content={openGraph.description} />
      <meta name='twitter:site' content='@jeffersonrj14' />
      <link rel='icon' href='/vite.svg' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='generator' content='Vite' />
    </Helmet>
  )
}

export default SEO
