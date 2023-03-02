import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideNavigation = trigger('slideNavigation', [
  state('collapsed', style({width: "{{ width_collapsed }}" }),
    { params: { width_collapsed: '*' }}),
  state('expanded', style({width: "{{ width_expanded }}" }),
    { params: { width_expanded: '*' }}),
  transition('collapsed<=>expanded', animate('500ms ease'))
])
