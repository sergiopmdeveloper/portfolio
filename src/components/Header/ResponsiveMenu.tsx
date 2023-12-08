import { ResponsiveNav } from './ResponsiveNav'
import styled from 'styled-components'
import { theme } from '../../styles'

// Types

type ResponsiveMenuProps = {
  setActiveResponsiveMenu: (value: boolean) => void
}

// Styled components

const ResponsiveMenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;

  @media (width > ${theme.tablet}) {
    display: none;
  }
`

const OpaqueBlock = styled.div`
  height: 100%;
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.15);
`

const MenuContainer = styled.div`
  width: 300px;
  height: 100%;
  background-color: ${theme.lightNavy};
  display: flex;
  align-items: center;
  justify-content: center;
`

/**
 * Renders the responsive menu.
 *
 * @param {ResponsiveMenuProps} props - The properties passed to the component.
 * @param {(value: boolean) => void} props.setActiveResponsiveMenu - A function that sets the active state of the responsive menu.
 *
 * @returns The responsive menu.
 */
export function ResponsiveMenu({
  setActiveResponsiveMenu,
}: ResponsiveMenuProps) {
  return (
    <ResponsiveMenuContainer>
      <OpaqueBlock onClick={() => setActiveResponsiveMenu(false)} />
      <MenuContainer>
        <ResponsiveNav />
      </MenuContainer>
    </ResponsiveMenuContainer>
  )
}
