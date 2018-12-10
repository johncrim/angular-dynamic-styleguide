import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { TemplateExamplesService } from './examples/template-examples.service';
import { TEMPLATE_EXAMPLES, templateExamples } from './examples/template-examples';
import { RUNTIME_COMPILER_PROVIDERS } from './examples/runtime-compiler.providers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [
    { provide: TEMPLATE_EXAMPLES, useValue: templateExamples },
    TemplateExamplesService,
    ...RUNTIME_COMPILER_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
