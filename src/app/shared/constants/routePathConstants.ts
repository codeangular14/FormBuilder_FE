export const UserManagementRoutes = {
  LOGIN: 'login',
  FORGOT_PASSWORD: 'forgot-password',
  RESET_PASSWORD: 'reset-password',
  USER_LIST: 'user-list',
  USER_ADD_EDIT: 'user-add-edit',
};

export const DashBoardRoute = {
  DASHBOARD: 'dashboard',
};

export const SharedRoute = {
  PAGE_NOT_FOUND: 'page-not-found',
};

export const BEFORE_LOGIN_ROUTE_PATH_LIST = [
  '/',
  UserManagementRoutes.LOGIN,
  SharedRoute.PAGE_NOT_FOUND,
];
