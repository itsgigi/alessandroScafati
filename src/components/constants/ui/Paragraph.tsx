import React from 'react'

type ParagraphProps = {
  children: React.ReactNode
}

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <div className='text-md font-lato font-light text-gold'>
      {children}
    </div>
  )
}

export default Paragraph
