import type * as components from "./pylemize-ui"

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    PButton: typeof components.PButton
  }
}

export {}
