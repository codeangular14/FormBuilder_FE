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


export const DashboardRoutes = {
  DASHBOARD: 'dashboard',
};

export const SharedRoute = {
  PAGE_NOT_FOUND: 'page-not-found',
};



export const BEFORE_LOGIN_ROUTE_PATH_LIST = [
  '/',
  UserManagementRoutes.LOGIN,
  SharedRoute.PAGE_NOT_FOUND,
  UserManagementRoutes.SCREEN_READER,

];
