import { ButtonWithIcon } from '../../ui/Button'
import { Github } from '../../icons/GitHub'
import { Resume } from '../../icons/Resume'
import styled from 'styled-components'
import { theme, AppSection } from '../../styles'

// Styled components

const WelcomeContainer = styled.main`
  max-width: 70rem;
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

const WelcomeTitle = styled.h1`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize10};
  font-weight: 900;
  text-align: center;
  color: ${theme.white};
  margin-bottom: 2rem;
  line-height: 1;
`

const WelcomeDescription = styled.p`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize4};
  text-align: center;
  color: ${theme.slate};
  margin-bottom: 3rem;
`

const HighlightedPart = styled.span`
  font-weight: 900;
  color: ${theme.green};
`

const WelcomeButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

/**
 * Renders the Welcome component.
 *
 * @returns The rendered Welcome component.
 */
export function Welcome() {
  return (
    <AppSection>
      <WelcomeContainer>
        <WelcomeTitle>
          I'm Sergio Peña and I'm a full stack developer
        </WelcomeTitle>
        <WelcomeDescription>
          Hi! I'm Sergio Peña and I'm a{' '}
          <HighlightedPart>full stack developer</HighlightedPart>. Welcome to my
          portfolio where you will find everything you need to know about me
          professionally. Software development is my{' '}
          <HighlightedPart>profession</HighlightedPart> and my{' '}
          <HighlightedPart>passion</HighlightedPart>. Backend, frontend, machine
          learning, scripting, automation, open source... Everything that has to
          do with coding is welcome.{' '}
          <HighlightedPart>Let's work together?</HighlightedPart>
        </WelcomeDescription>
        <WelcomeButtonsContainer>
          <a href="https://github.com/sergiopmdeveloper" target="_blank">
            <ButtonWithIcon text="GitHub" Icon={Github} />
          </a>
          <a>
            <ButtonWithIcon text="Resume" Icon={Resume} />
          </a>
        </WelcomeButtonsContainer>
      </WelcomeContainer>
    </AppSection>
  )
}
