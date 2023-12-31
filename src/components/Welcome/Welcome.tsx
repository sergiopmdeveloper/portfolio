import { ButtonWithIcon } from '../../ui/Button'
import { Github } from '../../icons/GitHub'
import { Resume } from '../../icons/Resume'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
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

  @media (width <= ${theme.largeMobile}) {
    height: calc(100vh - 5rem);
    justify-content: flex-start;
    margin-top: 3rem;
  }
`

const WelcomeTitle = styled.h1`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize11};
  font-weight: 900;
  text-align: center;
  color: ${theme.white};
  margin-bottom: 3rem;
  line-height: 1;

  @media (width <= ${theme.tablet}) {
    font-size: ${theme.fontSize10};
  }

  @media (width <= ${theme.largeMobile}) {
    font-size: ${theme.fontSize8};
    text-align: left;
  }

  @media (width <= ${theme.smallMobile}) {
    font-size: ${theme.fontSize7};
  }
`

const WelcomeDescription = styled.p`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize4};
  text-align: center;
  color: ${theme.slate};
  margin-bottom: 3rem;

  @media (width <= ${theme.tablet}) {
    font-size: ${theme.fontSize3};
  }

  @media (width <= ${theme.largeMobile}) {
    font-size: ${theme.fontSize2};
    text-align: left;
  }
`

const HighlightedPart = styled.span`
  font-weight: 900;
  color: ${theme.green};
`

const WelcomeButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (width <= ${theme.largeMobile}) {
    width: 100%;
    flex-direction: column;
  }
`

/**
 * Renders the Welcome component.
 *
 * @returns The rendered Welcome component.
 */
export function Welcome() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (titleRef.current && descriptionRef.current && buttonsRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.3,
        }
      )

      gsap.fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.4,
        }
      )

      gsap.fromTo(
        buttonsRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
        }
      )
    }
  }, [])

  return (
    <AppSection>
      <WelcomeContainer>
        <WelcomeTitle ref={titleRef}>
          I'm Sergio Peña and I'm a full stack developer
        </WelcomeTitle>
        <WelcomeDescription ref={descriptionRef}>
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
        <WelcomeButtonsContainer ref={buttonsRef}>
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
