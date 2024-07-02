import { FaReact } from 'react-icons/fa'
import { SiVite, SiTypescript, SiTailwindcss } from 'react-icons/si'
import IconwLink from './IconwLink'

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className='mx-auto my-8 max-w-[872px] bottom-0 px-4 text-stone-300 md:px-0 font-mono'>
      <p>
        &copy; {year}&nbsp;
        <a
          className='text-jefferson-light hover:text-jefferson-light'
          href='https://github.com/jeffersonrj14'
        >
          RJ Jefferson
        </a>
      </p>
      <nav role='navigation'>
        <ul className='flex flex-row justify-center gap-2 mt-1 text-lg'>
          <li>
            <IconwLink href='https://vitejs.dev/' icon={<SiVite />} className='text-gray-400 hover:text-[#FBC02D] active:text-[#9575CD]' />
          </li>
          <li>
            <IconwLink href='https://react.dev/' icon={<FaReact />} className='text-gray-400 hover:text-[#80DEEA] active:text-[#00d8ff]' />
          </li>
          <li>
            <IconwLink href='https://www.typescriptlang.org/docs/' icon={<SiTypescript />} className='text-gray-400 hover:text-[#007acc] active:text-white/80' />
          </li>
          <li>
            <IconwLink href='https://tailwindcss.com/' icon={<SiTailwindcss />} className='text-gray-400 hover:text-[#06b6d4] active:text-[#6d28d9]' />
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
