import { Button } from '../../ui/Button'
import styled from 'styled-components'
import { theme } from '../../styles'

// Types

type ProjectProps = {
  title: string
  description: string
  link: string
  technologies: string[]
}

// Styled components

const ProjectWrapper = styled.div`
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

/**
 * Renders a project component.
 *
 * @param {ProjectProps} props - The props for the project component.
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - The description of the project.
 * @param {string} props.link - The link to the project repository.
 * @param {string[]} props.technologies - The technologies used in the project.
 *
 * @returns The rendered project component.
 */
export function Project({
  title,
  description,
  link,
  technologies,
}: ProjectProps) {
  return (
    <ProjectWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLink href={link} target="_blank">
        <Button>Repository</Button>
      </ProjectLink>
      <ProjectTechnologies>
        {technologies.map((technology, index) => (
          <ProjectTechnology key={index}>{technology}</ProjectTechnology>
        ))}
      </ProjectTechnologies>
    </ProjectWrapper>
  )
}
