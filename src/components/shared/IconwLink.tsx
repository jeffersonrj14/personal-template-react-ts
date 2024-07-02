import React from 'react'

type IconwLinkProps = {
  href: string
  icon: React.ReactNode
  isUnderline?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

function IconwLink({ href, icon, isUnderline, ...props }: IconwLinkProps) {
  return (
    <a
      href={href}
      className={`cursor-pointer ${isUnderline ? 'underline decoration-dashed underline-offset-8' : ''}`}
      {...props}
      rel='noreferrer'
      target='_blank'
    >
      {icon}
      <span className='sr-only'>Link</span>
    </a>
  )
}

export default IconwLink
