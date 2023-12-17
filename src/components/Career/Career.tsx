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
  const jobsRef = useRef<HTMLDivElement>(null)
  const jobRefs: RefObject<HTMLDivElement>[] = Array.from(
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

    if (jobsRef.current) {
      gsap.fromTo(
        jobsRef.current,
        { borderLeftWidth: '1px', borderLeftColor: 'rgba(0, 0, 0, 0)' },
        {
          borderLeftColor: theme.green,
          duration: 0.5,
          scrollTrigger: jobsRef.current,
        }
      )
    }

    jobRefs.forEach(jobRef => {
      if (jobRef.current) {
        gsap.fromTo(
          jobRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, scrollTrigger: jobRef.current }
        )
      }
    })
  }, [jobRefs])

  return (
    <AppSection id="career">
      <SectionTitle number={2} text="Career" ref={sectionTitleRef} />
      <ContentContainer ref={jobsRef}>
        {career.map((study, index) => (
          <ContentWrapper key={index} ref={jobRefs[index]}>
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
