import { animate, state, style, transition, trigger } from '@angular/animations'
// @ts-ignore
import * as tailwindConfig from 'tailwind.config'

export const slideNavigation = trigger('slideNavigation', [
  state('collapsed', style({width: "{{ width_collapsed }}" }),
    { params: { width_collapsed: '*' }}),
  state('expanded', style({width: "{{ width_expanded }}" }),
    { params: { width_expanded: '*' }}),
  transition('collapsed<=>expanded', animate('500ms ease'))
])

export const showHideLabel = trigger('showHideLabel', [
    state('expanded', style({ width: tailwindConfig.theme?.extend?.width.sideMenuLabelExpanded})),
    state('collapsed', style({ width: tailwindConfig.theme?.extend?.width.sideMenuCollapsed})),
    transition('collapsed => expanded', animate(500))
  ])
