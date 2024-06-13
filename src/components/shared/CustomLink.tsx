import React from 'react'

type CustomLinkProps = {
  href: string
  label: string
  isUnderline?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

function CustomLink({ href, label, isUnderline, ...props }: CustomLinkProps) {
  return (
    <a
      href={href}
      className={`cursor-pointer text-gray-400 hover:text-jefferson-main active:text-[#8855FF] ${isUnderline ? 'underline decoration-dashed underline-offset-8' : ''}`}
      {...props}
      rel='noreferrer'
      target='_blank'
    >
      {label}
      <span className='sr-only'>{label} link</span>
    </a>
  )
}

export default CustomLink
