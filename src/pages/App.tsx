import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
import { HeadTags } from '../utils/types/HeadTags'
import NotFound from './404'

function App() {
  const seoProps: HeadTags = {
    title: "RJ Jefferson's",
    description: "RJ Jefferson's React Personal Template",
    og: {
      title: "RJ Jefferson's",
      description: "RJ Jefferson's React Personal Template",
      alt: 'Template'
    },
    noindex: false
  }
  const NotFoundPage: HeadTags = {
    title: '404: Not Found',
    description: 'page not found',
    og: {
      title: '404: Not Found',
      description: 'page not found',
      alt: '404'
    },
    noindex: false
  }

  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route
          path='/'
          element={
            <DefaultLayout seoProps={seoProps}>
              <div className='grid grid-cols-[repeat(auto-fit,_16.666666%)] m-auto p-24 justify-center text-white/80 font-mono'>
                React Personal Template
              </div>
            </DefaultLayout>
          }
        />
        {/* 404 Not Found Page */}
        <Route
          path='*'
          element={
            <DefaultLayout seoProps={NotFoundPage}>
              <NotFound />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
