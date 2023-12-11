import { forwardRef } from 'react'
import { type IconProps } from './types'

/**
 * Renders a burger icon.
 *
 * @param {IconProps} props - The properties passed to the component.
 * @param {string} props.className - The class name to be applied to the icon.
 * @param {() => void} props.onclick - The click event handler for the icon.
 * @param {Ref<SVGSVGElement>} props.ref - The ref to be applied to the SVG element.
 *
 * @returns A burger icon.
 */
export const Burger = forwardRef<SVGSVGElement, IconProps>(
  ({ className, onclick }, ref) => {
    return (
      <svg
        className={className}
        onClick={onclick}
        ref={ref}
        viewBox="0 0 16 16"
      >
        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
      </svg>
    )
  }
)
