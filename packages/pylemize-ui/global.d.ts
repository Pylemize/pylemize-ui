import type * as components from "./components"

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    PButton: typeof components.PButton
    PSpace: typeof components.PSpace
  }
}

export {}
