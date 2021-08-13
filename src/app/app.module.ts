import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { TemplateExamplesService } from './examples/template-examples.service';
import { TEMPLATE_EXAMPLES, templateExamples } from './examples/template-examples';
import { RuntimeCompilerModule } from './examples/runtime-compiler.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RuntimeCompilerModule
  ],
  providers: [
    { provide: TEMPLATE_EXAMPLES, useValue: templateExamples },
    TemplateExamplesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
