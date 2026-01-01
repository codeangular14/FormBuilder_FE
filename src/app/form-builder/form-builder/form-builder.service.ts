import { Injectable } from '@angular/core';
import { ApiHelper } from '../../shared/helpers/api.helper';
import { FormBuilderApis } from '../../shared/constants/apiEndPointPathName';
import { SAMPLE_SURVEY_TEMPLATE } from '../../mock-data/sample-survey-template';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {

  constructor(private apiHelper:ApiHelper) {}

  saveUser(payload: any) {
    const endpoint = FormBuilderApis.SAVE_FORM_API
    return this.apiHelper.post<any>(endpoint, payload)
  }
  saveTemplate(payload: any) {
    const endpoint = FormBuilderApis.SAVE_FORM_API
    return this.apiHelper.post<any>(endpoint, payload)
  }
  saveResponse(payload: any) {
    const endpoint = FormBuilderApis.SAVE_FORM_API
    return this.apiHelper.post<any>(endpoint, payload)
  }
   getTemplateById(id: string) {
    // Simulate backend response
    return SAMPLE_SURVEY_TEMPLATE;
  }
  
  
}
