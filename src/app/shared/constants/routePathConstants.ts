export const DashBoardRoute = 'dashboard';
export const UserManagementRoutes = {
  LOGIN: 'login',
  FORGOT_PASSWORD: 'forgot-password',
  RESET_PASSWORD: 'reset-password',
  DESIGNATION: 'designation-master',
  ADD_DESIGNATION: 'add-designation',
  LIST_DESIGNATION: 'list-designation',
  LIST_USER: 'list-user',
  ADD_EDIT_USER: 'add-edit-user',
  VIEW_USER: 'view-user',
  CHANGE_PASSWORD: 'change-password',
  LIST_LANGUAGE: 'list-language',
  ADD_EDIT_LANGUAGE: 'add-edit-language',
  DASHBOARD : 'dashboard',
  PROFILE: 'profile',
  SCREEN_READER: 'screen-reader'
};

export const RoleManagementRoutes = {
  ADDED_ROLES_LIST: 'added-role-list',
  ADD_ROLES: 'add-roles',
};

export const DashboardRoutes = {
  DASHBOARD: 'dashboard',
};

export const SharedRoute = {
  PAGE_NOT_FOUND: 'page-not-found',
};



export const LgdManagementRoutes = {
  LIST_BLOCK: 'list-block',
  ADD_EDIT_BLOCK: 'add-edit-block',
  LIST_TEHSIL: 'list-tehsil',
  ADD_EDIT_TEHSIL: 'add-edit-tehsil',
  LIST_DISTRICT: 'list-district',
  ADD_EDIT_DISTRICT: 'add-edit-district',
  LIST_VILLAGE: 'list-village',
  ADD_EDIT_VILLAGE: 'add-edit-village',
};

export const claimManagementRoutes = {
  CLAIM_DETAILS: 'claim-details',
  CLAIM_DETAILS_LIST: 'claim-details-list',
  CLAIM_DETAILS_PREVIEW: 'claim-details-preview',
  COURT_DETAILS: 'court-details',
  WORKFLOW_HISTORY: 'workflow-history',
  PAYMENT_SUCCESS:'payment-success',
  PAYMENT_FAILURE:'payment-failure',
  CASE_PAYMENT_INFORMATION:'case-payment-information',

};

export const masterManagementRoutes = {
  BANK_BRANCH_ADD_EDIT: 'bank-branch-add-edit',
  BANK_BRANCH_LIST: 'bank-branch-list',
  DISTRICT_JUDICIARY_ADD_EDIT: 'district-judiciary-add-edit',
  DISTRICT_JUDICIARY_LIST: 'district-judiciary-list',
  RESPONDENT_ADD_EDIT: 'respondent-add-edit',
  RESPONDENT_LIST: 'respondent-list',
  TICKET_ADD_EDIT: 'ticket-add-edit',
  TICKET_LIST: 'ticket-master-list',
  PENDING_TICKET_LIST:'pending-ticket-list',
  DISTRICT_COURT_ADD_EDIT: 'district-Court-add-edit',
  DISTRICT_COURT_LIST: 'district-court-list',
  CDAN_ADD_EDIT:'cdan-add-edit',
  CDAN_LIST:'cdan-list',

};

export const BEFORE_LOGIN_ROUTE_PATH_LIST = [
  '/',
  UserManagementRoutes.LOGIN,
  SharedRoute.PAGE_NOT_FOUND,
  UserManagementRoutes.SCREEN_READER,
  claimManagementRoutes.PAYMENT_FAILURE,
  claimManagementRoutes.PAYMENT_SUCCESS,
  claimManagementRoutes.CASE_PAYMENT_INFORMATION,

];
