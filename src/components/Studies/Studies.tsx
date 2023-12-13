import { SectionTitle } from '../SectionTitle'
import styled from 'styled-components'
import { theme, AppSection } from '../../styles'
import { studies } from '../../content/studies'

// Styled components

const StudiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-left: 1px solid ${theme.green};
`

const StudyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const Study = styled.div`
  min-width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 2rem;
`

const StudyDate = styled.span`
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize3};
  color: ${theme.slate};
`

const StudieTitle = styled.h2`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize5};
  color: ${theme.white};
`

const StudySchool = styled.h3`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize4};
  color: ${theme.lightSlate};
`

const StudyDescription = styled.p`
  height: 100%;
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize4};
  color: ${theme.lightestSlate};
  background-color: ${theme.lightNavy};
  border-radius: 0.5rem;
  padding: 1.5rem;
`

/**
 * Renders the Studies component.
 *
 * @returns The rendered Studies component.
 */
export function Studies() {
  return (
    <AppSection id="studies">
      <SectionTitle number={1} text="Studies" />
      <StudiesContainer>
        {studies.map((study, index) => (
          <StudyWrapper key={index}>
            <Study>
              <StudyDate>{study.date}</StudyDate>
              <StudieTitle>{study.title}</StudieTitle>
              <StudySchool>{study.school}</StudySchool>
            </Study>
            <StudyDescription>{study.description}</StudyDescription>
          </StudyWrapper>
        ))}
      </StudiesContainer>
    </AppSection>
  )
}
