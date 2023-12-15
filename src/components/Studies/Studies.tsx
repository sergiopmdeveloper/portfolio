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

  @media (width <= ${theme.tablet}) {
    gap: 3rem;
  }
`

const StudyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (width <= ${theme.tablet}) {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }
`

const Study = styled.div`
  min-width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 2rem;

  @media (width <= ${theme.smallLaptop}) {
    min-width: 20rem;
  }

  @media (width <= ${theme.tablet}) {
    min-width: auto;
    padding-left: 1.5rem;
  }

  @media (width <= ${theme.largeMobile}) {
    padding-left: 1rem;
  }
`

const StudyDate = styled.span`
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize3};
  color: ${theme.slate};

  @media (width <= ${theme.smallLaptop}) {
    font-size: ${theme.fontSize2};
  }

  @media (width <= ${theme.largeMobile}) {
    font-size: ${theme.fontSize1};
  }
`

const StudieTitle = styled.h2`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize5};
  color: ${theme.white};

  @media (width <= ${theme.smallLaptop}) {
    font-size: ${theme.fontSize4};
  }

  @media (width <= ${theme.largeMobile}) {
    font-size: ${theme.fontSize3};
  }
`

const StudySchool = styled.h3`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize4};
  color: ${theme.lightSlate};

  @media (width <= ${theme.smallLaptop}) {
    font-size: ${theme.fontSize3};
  }

  @media (width <= ${theme.largeMobile}) {
    font-size: ${theme.fontSize2};
  }
`

const StudyDescription = styled.p`
  height: 100%;
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize4};
  color: ${theme.lightestSlate};
  background-color: ${theme.lightNavy};
  border-radius: 0.5rem;
  padding: 1.5rem;

  @media (width <= ${theme.smallLaptop}) {
    font-size: ${theme.fontSize3};
  }

  @media (width <= ${theme.tablet}) {
    margin-left: 1.5rem;
  }

  @media (width <= ${theme.largeMobile}) {
    font-size: ${theme.fontSize2};
    margin-left: 1rem;
  }
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
