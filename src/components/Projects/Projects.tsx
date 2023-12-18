import SectionTitle from '../SectionTitle'
import { Button } from '../../ui/Button'
import styled from 'styled-components'
import { theme, AppSection } from '../../styles'
import { projects } from '../../content/projects'

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

const Project = styled.div`
  position: relative;
  min-width: 32.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.lightNavy};
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 1.5rem;

  @media (width <= ${theme.smallLaptop}) {
    min-width: 25rem;
  }

  @media (width <= ${theme.tablet}) {
    min-width: 22.5rem;
  }

  @media (width <= ${theme.largeMobile}) {
    min-width: 20rem;
  }

  @media (width <= ${theme.smallMobile}) {
    min-width: 100%;
  }
`

const ProjectTitle = styled.h2`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize6};
  color: ${theme.white};

  @media (width <= ${theme.smallLaptop}) {
    font-size: ${theme.fontSize5};
  }

  @media (width <= ${theme.tablet}) {
    font-size: ${theme.fontSize4};
  }
`

const ProjectDescription = styled.p`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize4};
  color: ${theme.lightSlate};

  @media (width <= ${theme.smallLaptop}) {
    font-size: ${theme.fontSize3};
  }

  @media (width <= ${theme.tablet}) {
    font-size: ${theme.fontSize2};
  }
`

const ProjectLink = styled.a`
  width: min-content;
`

const ProjectTechnologies = styled.div`
  position: absolute;
  display: flex;
  gap: 0.5rem;
  bottom: 1rem;
  right: 1rem;

  @media (width <= ${theme.largeMobile}) {
    position: initial;
  }
`

const ProjectTechnology = styled.span`
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize1};
  color: ${theme.slate};
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

export function Projects() {
  return (
    <AppSection>
      <SectionTitle number={3} text="Projects" />
      <ProjectsContainer>
        {projects.map((project, index) => (
          <Project key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank">
              <Button>Repository</Button>
            </ProjectLink>
            <ProjectTechnologies>
              {project.technologies.map((technology, index) => (
                <ProjectTechnology key={index}>{technology}</ProjectTechnology>
              ))}
            </ProjectTechnologies>
          </Project>
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
