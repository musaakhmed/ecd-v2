import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export interface TextWithImageOverlapProps {
  title: string
  content: ReactNode
  image?: ReactNode
  imagePosition?: 'left' | 'right'
  className?: string
  cardClassName?: string
  imageWrapperClassName?: string
}

export function TextWithImageOverlap({
  title,
  content,
  image,
  imagePosition = 'right',
  className = '',
  cardClassName = '',
  imageWrapperClassName = '',
}: TextWithImageOverlapProps) {
  const isImageLeft = imagePosition === 'left'
  const imageOffsetX = isImageLeft ? -36 : 36

  return (
    <section className={`w-full bg-[#ebebeb] py-12 md:py-16 ${className}`.trim()}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: imageOffsetX, y: -16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className={`pointer-events-none absolute top-0 -mt-48  z-0 hidden h-[230px] w-[300px] items-center justify-center rounded-[28px] bg-[#ff1a1a] text-center text-3xl font-medium text-black md:flex lg:h-[260px] lg:w-[340px] ${
              isImageLeft ? 'left-0' : 'right-0'
            } ${imageWrapperClassName}`.trim()}
          >
            {image ?? <span>IMAGE</span>}
          </motion.div>

          <motion.article
            initial={{ opacity: 0, x: isImageLeft ? 24 : -24, y: 12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
            className={`relative z-10 mt-20 rounded-[16px] border border-black/30 bg-[#221d62] px-6 py-8 text-slate-100 shadow-[0_10px_0_rgba(0,0,0,0.35)] md:mt-28 md:rounded-[20px] md:px-10 md:py-10 lg:px-12 lg:py-12 ${
              isImageLeft ? 'md:ml-36 lg:ml-48' : 'md:mr-36 lg:mr-48'
            } ${cardClassName}`.trim()}
          >
            <h2 className="mb-6 text-4xl leading-tight font-light tracking-tight text-slate-100 md:mb-8 md:text-6xl">
              {title}
            </h2>
            <div className="max-w-2xl text-lg text-slate-200/90 ">{content}</div>
          </motion.article>

          <div className="mt-4 flex md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className={`flex h-[200px] w-full items-center justify-center overflow-hidden rounded-[20px] bg-[#ff1a1a] text-center font-medium text-black ${imageWrapperClassName}`.trim()}
            >
              {image ?? <span>IMAGE</span>}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
