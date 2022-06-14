import { ReactInstance } from 'react'

declare module 'react-dom-instance' {
  export function findInstance (container: HTMLElement, { componentName: string, maxIteration: number }): ReactInstance
}
