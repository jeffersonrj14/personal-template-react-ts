import CustomLink from './CustomLink'

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className='mx-auto my-8 max-w-[872px] bottom-0 px-4 text-stone-300 md:px-0'>
      <p>
        &copy; {year}&nbsp;
        <a
          className='text-jefferson-light hover:text-jefferson-light'
          href='https://github.com/jeffersonrj14/personal-template-react-ts'
        >
          RJ Jefferson
        </a>
      </p>
      <nav role='navigation'>
        <ul className='flex flex-row justify-center gap-2'>
          Built with
          <li>
            <CustomLink href='https://vitejs.dev/' label='Vite' />
          </li>
          +
          <li>
            <CustomLink href='https://react.dev/' label='React' />
          </li>
          +
          <li>
            <CustomLink href='https://www.typescriptlang.org/docs/' label='TypeScript' />
          </li>
          +
          <li>
            <CustomLink href='https://tailwindcss.com/' label='Tailwind' />
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
