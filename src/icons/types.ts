import { Ref } from 'react'

// Type to define the props of an icon component
export type IconProps = {
  className?: string
  onclick?: () => void
  ref?: Ref<SVGSVGElement>
}
