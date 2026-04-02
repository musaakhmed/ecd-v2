import type { ReactNode } from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { TextWithImageOverlap } from '@/components/ui/TextWithImageOverlap'

export type AlternatingImageCardItem = {
  key?: string
  title: string
  content: ReactNode
  imageSrc: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
  cardClassName?: string
  imageWrapperClassName?: string
  imageClassName?: string
  imageWidth?: number
  imageHeight?: number
}

export type AlternatingImageCardsProps = {
  items: AlternatingImageCardItem[]
  /** Applied to each item wrapper (optional) */
  variants?: Variants
  /** Wrapper spacing between cards */
  gapClassName?: string
  /** Passed through to TextWithImageOverlap */
  className?: string
  /** Defaults for images */
  defaultImageWidth?: number
  defaultImageHeight?: number
}

export function AlternatingImageCards({
  items,
  variants,
  gapClassName = 'space-y-8',
  className = 'bg-transparent py-0 ',
  defaultImageWidth = 340,
  defaultImageHeight = 260,
}: AlternatingImageCardsProps) {
  const Wrapper: any = variants ? motion.div : 'div'
  const wrapperProps = variants ? { variants } : {}

  return (
    <div className={gapClassName}>
      {items.map((item, i) => {
        const position = item.imagePosition ?? (i % 2 === 0 ? 'right' : 'left')
        const width = item.imageWidth ?? defaultImageWidth
        const height = item.imageHeight ?? defaultImageHeight

        return (
          <Wrapper key={item.key ?? item.title ?? i} {...wrapperProps}>
            <TextWithImageOverlap
              title={item.title}
              imagePosition={position}
              className={className}
              cardClassName={item.cardClassName}
              imageWrapperClassName={item.imageWrapperClassName ?? 'p-0 overflow-hidden'}
              image={
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={width}
                  height={height}
                  className={item.imageClassName ?? 'h-full w-full object-cover object-center'}
                />
              }
              content={item.content}
            />
          </Wrapper>
        )
      })}
    </div>
  )
}
