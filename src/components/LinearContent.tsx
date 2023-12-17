import styled from 'styled-components'
import { theme } from '../styles'

// Styled components

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-left: 1px solid ${theme.green};

  @media (width <= ${theme.tablet}) {
    gap: 3rem;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (width <= ${theme.tablet}) {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }
`

export const Content = styled.div`
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

export const ContentDate = styled.span`
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

export const ContentTitle = styled.h2`
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

export const ContentSubtitle = styled.h3`
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

export const ContentDescription = styled.p`
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
