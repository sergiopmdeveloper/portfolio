import SectionTitle from '../SectionTitle'
import { Project } from './Project'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'
import { theme, AppSection } from '../../styles'
import { projects } from '../../content/projects'

// Register scroll trigger plugin

gsap.registerPlugin(ScrollTrigger)

// Styled components

const ProjectsContainer = styled.div`
  height: 20rem;
  display: flex;
  gap: 2rem;
  padding-bottom: 1rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.green};
    border-radius: 20px;
  }

  scrollbar-width: thin;
  scrollbar-color: ${theme.green} rgba(0, 0, 0, 0.2);

  @media (width <= ${theme.smallLaptop}) {
    height: 17.5rem;
  }

  @media (width <= ${theme.tablet}) {
    height: 15rem;
  }

  @media (width <= ${theme.largeMobile}) {
    height: 20rem;
  }

  @media (width <= ${theme.smallMobile}) {
    height: 22.5rem;
  }
`

const SeeMore = styled.a`
  padding: 0 1rem;
  color: ${theme.lightestSlate};
  background-color: ${theme.lightestNavy};
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize4};
  border-radius: 0.5rem;
  text-align: center;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    background-color: ${theme.darkenedLightestNavy};
    color: ${theme.green};
    transition:
      background-color 0.2s,
      color 0.2s;
  }

  &:active {
    background-color: ${theme.darkenedLightestNavy};
    color: ${theme.green};
    transition:
      background-color 0.2s,
      color 0.2s;
  }
`

/**
 * Renders the Projects component.
 *
 * @returns The rendered Projects component.
 */
export function Projects() {
  const sectionTitleRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (sectionTitleRef.current && projectsRef.current) {
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

      gsap.fromTo(
        projectsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: projectsRef.current,
        }
      )
    }
  }, [])

  return (
    <AppSection>
      <SectionTitle number={3} text="Projects" ref={sectionTitleRef} />
      <ProjectsContainer ref={projectsRef}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
        <SeeMore
          href="https://github.com/sergiopmdeveloper?tab=repositories"
          target="_blank"
        >
          See more
        </SeeMore>
      </ProjectsContainer>
    </AppSection>
  )
}
