import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from '../Carousel/CarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../Carousel/StylesFromCarousel/Embla.module.css'


type PropType = {
    slides: string[] 
    options?: EmblaOptionsType
  }

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
            {slides.map((imageUrl, index) => (
            <div className={styles.embla__slide} key={index}>
                <img 
                    className={styles.embla__slide__img}
                    src={imageUrl}
                    alt={`Slide ${index + 1}`}
                />
            </div>
            ))}
      </div>
      <div className={styles.embla__controls}>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={styles.embla__dot.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
                
              )}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
