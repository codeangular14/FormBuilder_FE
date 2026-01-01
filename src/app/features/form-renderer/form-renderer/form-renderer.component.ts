import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Model } from 'survey-core';
import { SurveyModule } from 'survey-angular-ui';
import { FormBuilderService } from '../../../services/form-builder.service';
@Component({
  selector: 'app-form-renderer',
  standalone: true,
  imports: [CommonModule, SurveyModule],
  templateUrl: './form-renderer.component.html'
})
export class FormRendererComponent implements OnInit {

  surveyModel!: Model;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private formBuilderService: FormBuilderService) { }

  ngOnInit(): void {

    //Mock approach
    // const template = this.formBuilderService.getTemplateById('SURVEY_001');
    // this.surveyModel = new Model(template.json);

    //Server approach

    // this.formBuilderService.getTemplateById('SURVEY_ID').subscribe(template => {
    //   this.surveyModel = new Model(template.json);

    //   this.surveyModel.onComplete.add(sender => {
    //     this.saveResponse(sender.data, template);
    //   });
    // });

    //Local Storage approach
    const template = localStorage.getItem('TEMPLATE');
    this.surveyModel = new Model(JSON.parse(template || '{}').json);
    this.surveyModel.onComplete.add(sender => {
      this.saveResponse(sender.data, template);
    });

  }

  saveResponse(data: any, template: any) {
    const templateObj = JSON.parse(template);
    this.formBuilderService.saveResponse({
      surveyId: templateObj.id,
      surveyVersion: templateObj.version,
      responseData: data
    }).subscribe(() => {
      alert('Survey submitted successfully');
    });
  }
}
