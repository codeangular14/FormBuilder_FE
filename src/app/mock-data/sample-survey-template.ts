export const SAMPLE_SURVEY_TEMPLATE = {
  id: 'SURVEY_001',
  name: 'Customer Feedback Survey',
  version: 1,
  json: {
  "title": "Employee Form",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "name",
          "title": "Employee Name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "email",
          "title": "Employee Email",
          "isRequired": true
        }
      ]
    }
  ]
}
};
