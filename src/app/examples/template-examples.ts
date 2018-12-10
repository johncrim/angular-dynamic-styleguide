import { Type, InjectionToken } from '@angular/core';

/**
 * Examples are defined by a template string, which is compiled at runtime.
 */
export interface UncompiledTemplateExamples { [id: string]: string };

/** Injection token for examples that are compiled by @see TemplateExamplesService. */
export const TEMPLATE_EXAMPLES = new InjectionToken<UncompiledTemplateExamples>('Template examples');

/** Define all the template examples that are compiled by @see TemplateExamplesService. */
export const templateExamples: UncompiledTemplateExamples =
{
  'icon':
    `<mat-icon>add</mat-icon>`,

  'round-icon-button':
    `<button color="primary"></button>`,

  'rectangle-button':
    `<button color="primary">Primary</button>`,

  // 'ng-class':
  //   `<div [ngClass]="first second">Div with ngClass</div>`
};
