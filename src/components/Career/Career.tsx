import { SectionTitle } from '../SectionTitle'
import {
  ContentContainer,
  ContentWrapper,
  Content,
  ContentDate,
  ContentTitle,
  ContentSubtitle,
  ContentDescription,
} from '../LinearContent'
import { useRef, RefObject, useLayoutEffect, createRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { theme, AppSection } from '../../styles'
import { career } from '../../content/linearContent'

// Register scroll trigger plugin

gsap.registerPlugin(ScrollTrigger)

/**
 * Renders the Career component.
 *
 * @returns The rendered Career component.
 */
export function Career() {
  const sectionTitleRef = useRef<HTMLDivElement>(null)
  const studiesRef = useRef<HTMLDivElement>(null)
  const studyRefs: RefObject<HTMLDivElement>[] = Array.from(
    { length: career.length },
    () => createRef()
  )

  useLayoutEffect(() => {
    if (sectionTitleRef.current) {
      gsap.fromTo(
        sectionTitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: sectionTitleRef.current,
        }
      )
    }

    if (studiesRef.current) {
      gsap.fromTo(
        studiesRef.current,
        { borderLeftWidth: '1px', borderLeftColor: 'rgba(0, 0, 0, 0)' },
        {
          borderLeftColor: theme.green,
          duration: 0.5,
          scrollTrigger: studiesRef.current,
        }
      )
    }

    studyRefs.forEach(studyRef => {
      if (studyRef.current) {
        gsap.fromTo(
          studyRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, scrollTrigger: studyRef.current }
        )
      }
    })
  }, [studyRefs])

  return (
    <AppSection id="career">
      <SectionTitle number={2} text="Career" ref={sectionTitleRef} />
      <ContentContainer ref={studiesRef}>
        {career.map((study, index) => (
          <ContentWrapper key={index} ref={studyRefs[index]}>
            <Content>
              <ContentDate>{study.date}</ContentDate>
              <ContentTitle>{study.title}</ContentTitle>
              <ContentSubtitle>{study.subtitle}</ContentSubtitle>
            </Content>
            <ContentDescription>{study.description}</ContentDescription>
          </ContentWrapper>
        ))}
      </ContentContainer>
    </AppSection>
  )
}
