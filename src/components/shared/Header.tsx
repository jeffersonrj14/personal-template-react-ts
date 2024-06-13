import removeTrailingSlash from '../../utils/removeTrailingSlash'

function Header() {
  const pathname = removeTrailingSlash(window.location.pathname)

  return (
    <header className='z-40 mx-auto my-8 flex max-w-[872px] flex-col gap-2 px-4 text-jefferson-light md:flex-row md:justify-between'>
      <a href='/'>
        <span className='hover:text-jefferson-main'>Template</span>
        <span>・</span>
        <span className='text-jefferson-main hover:text-jefferson-light'>RJJ</span>
      </a>
      <nav role='navigation'>
        <ul className='flex flex-row gap-2'>
          <li>
            <a
              href='/'
              className={`hover:text-jefferson-main ${pathname === '/' ? 'text-jefferson-light' : ''}`}
            >
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a
              href='https://github.com/username'
              target='_blank'
              rel='noreferrer'
              className={`hover:text-jefferson-main ${pathname === 'https://github.com/username' ? 'text-jefferson-light' : ''}`}
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
