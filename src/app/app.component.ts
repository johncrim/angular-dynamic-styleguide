import { Component } from '@angular/core';
import { TemplateExamplesService, TemplateExample } from './examples/template-examples.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(private _examplesService: TemplateExamplesService) { }

  ngOnInit() {
    this._examplesService.getExamples().then((result) => this.examples = result);
  }

  public examples?: Map<string, TemplateExample>;
}
