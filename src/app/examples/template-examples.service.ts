import { Compiler, Component, Inject, Injectable, ModuleWithComponentFactories, NgModule, NgModuleFactory, Type } from '@angular/core';
import { TEMPLATE_EXAMPLES, UncompiledTemplateExamples } from './template-examples';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/** A component + template text from one of the @see exampleTemplates. */
export class TemplateExample {
  public moduleFactory?: NgModuleFactory<any>;

  constructor(public readonly id: string,
    public readonly template: string,
    public readonly component: Type<any>) { }
}

/**
 * Provides all the @see templateExamples compiled into a new module. This approach is necessary to provide
 * both template source code, as well as live components.
 *
 * @see templateExamples
 */
@Injectable({
  providedIn: 'root'
})
export class TemplateExamplesService {

  constructor(private _compiler: Compiler,
    @Inject(TEMPLATE_EXAMPLES) private _templateExamples: UncompiledTemplateExamples) {
  }

  private _compilePromise?: Promise<void>;
  private _examples?: Map<string, TemplateExample> = undefined;
  private _compiledModule?: ModuleWithComponentFactories<any>;

  /**
   * Creates and compiles example components.
   *
   * 2 sources describing how this is done:
   * https://github.com/apoterenko/ngx-dynamic-template/
   * https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e
   */
  private async createAndCompileComponents(): Promise<void> {
    const examples = new Map<string, TemplateExample>();

    const components = Object.entries(this._templateExamples).map(
      ([id, value]) => {
        let template: string;
        let component: Type<any>;
        template = value;
        // Create a new angular Component from each template
        component = Component({ template: template })(class { });
        examples.set(id, new TemplateExample(id, template, component));
        return component;
      }
    );

    const tmpModule = NgModule({
      declarations: [components],
      exports: [components],
      entryComponents: [components],
      imports: [MatButtonModule, MatIconModule]
    })(class TemplateExamplesModule {
    });

    this._compiledModule = await this._compiler.compileModuleAndAllComponentsAsync(tmpModule);

    // Store the ngModuleFactory in each example for easy access
    if (this._compiledModule) {
      examples.forEach((example: TemplateExample, id: string) => {
        example.moduleFactory = this._compiledModule.ngModuleFactory;
      });
    }

    this._examples = examples;
  }

  public async getExample(id: string): Promise<TemplateExample | undefined> {
    if (!this._compilePromise) {
      this._compilePromise = this.createAndCompileComponents();
    }

    await this._compilePromise;

    return this._examples && this._examples.get(id);
  }


  public async getExamples(): Promise<Map<string, TemplateExample> | undefined> {
    if (!this._compilePromise) {
      this._compilePromise = this.createAndCompileComponents();
    }

    await this._compilePromise;
    return this._examples;
  }

}
