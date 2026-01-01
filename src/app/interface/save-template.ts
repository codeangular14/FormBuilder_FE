export interface FormTemplate {
    id: string;
    name: string;
    json: any;          // SurveyJS JSON
    version: number;
    createdBy: string;
    createdOn: Date;
}

export interface FormResponse {
    id: string;
    surveyId: string;
    surveyVersion: number;
    responseData: any;  // Filled form data
    submittedBy: string;
    submittedOn: Date;
}