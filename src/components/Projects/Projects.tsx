import SectionTitle from '../SectionTitle'
import styled from 'styled-components'
import { theme, AppSection } from '../../styles'

// Styled components

const ProjectsContainer = styled.div`
  height: 20rem;
  display: flex;
  gap: 2rem;
  padding-bottom: 1rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.green};
    border-radius: 20px;
  }
`

const Project = styled.div`
  min-width: 30rem;
  height: 100%;
  background-color: ${theme.lightNavy};
  border-radius: 0.5rem;
`

const SeeMore = styled.a`
  height: 100%;
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
    background-color: ${theme.lightNavy};
    color: ${theme.green};
    transition:
      background-color 0.2s,
      color 0.2s;
  }

  &:active {
    background-color: ${theme.lightNavy};
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
        <Project />
        <Project />
        <Project />
        <Project />
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
