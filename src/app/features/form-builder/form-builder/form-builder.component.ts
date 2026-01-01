import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SurveyCreatorModel } from 'survey-creator-core';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { Model } from 'survey-core';
import { FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [SurveyCreatorModule, CommonModule],
  templateUrl: './form-builder.component.html'
})

export class FormBuilderComponent implements OnDestroy {

  creator!: SurveyCreatorModel;
  isBrowser = false;
  payload: { [key: string]: any } = {};
  static FormBuilderComponent: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private formBuilderService: FormBuilderService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) {
      return; // ⛔ SSR guard
    }

    this.creator = new SurveyCreatorModel({
      showLogicTab: true,
      showThemeTab: true,
      showTranslationTab: true,
      showJSONEditorTab: true,
      isAutoSave: false
    });

    this.creator.JSON = {
      title: 'Employee Form',
      elements: [
        { type: 'text', name: 'name', title: 'Employee Name', isRequired: true },
        { type: 'text', name: 'email', title: 'Employee Email', isRequired: true }
      ]
    };

    this.creator.onSurveyInstanceCreated.add((sender, options) => {
      if (options.area === 'preview-tab') {
        const previewSurvey: Model = options.survey;
        previewSurvey.onComplete.add((survey) => {
          this.payload = survey.data;
          this.saveSurveyValue();
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.creator?.dispose();
  }

  saveSurveyValue() {
    console.log(this.payload);
    this.formBuilderService.saveUser(this.payload).subscribe({
      next: (response) => {
        console.log('Survey saved successfully:', response);
      },
      error: (error) => {
        console.error('Error saving survey:', error);
      }
    });
  }


  saveTemplate() {
    const surveyJson = this.creator.JSON;
    console.log('Saving survey template:', surveyJson);

    const payload = {
      id: 'SURVEY_001',
      name: 'Customer Feedback Survey',
      version: 1,
      json: surveyJson
    };
    localStorage.setItem('TEMPLATE', JSON.stringify(payload));

    this.formBuilderService.saveTemplate({
      name: 'Customer Feedback',
      json: surveyJson
    }).subscribe(() => {
      alert('Survey template saved successfully');
    });
  }
}
