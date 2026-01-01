export const SET_ALL_ROLES = "set all roles";
export const SET_CURRENT_ROLE = "set current role";
export const SET_DISTRICTS = "set districts";
export const SET_MASTER_CONFIGS = "set master configs";
export const SET_MENU_LIST = "set menu list";
export const SET_CURRENT_ROLE_USER = "set current role user";
export const SET_SOD_MATRIX = "set sodmatrix";
export class SetAllRoles {
    readonly type = SET_ALL_ROLES;
    constructor(public payload?: { roles: {} }) {
    }
}
export class SetCurrentRole {
    readonly type = SET_CURRENT_ROLE;
    constructor(public payload?: { currentRole: {} }) {
    }
}

export class SetCurrentRoleUser {
    readonly type = SET_CURRENT_ROLE_USER;
    constructor(public payload?: { selectedRoleUser: {} }) {
    }
}

export class SetDistrictsAction {
    readonly type = SET_DISTRICTS;
    constructor(public payload?: { districts: {} }) { }
} 

export class SetMasterConfigAction {
    readonly type = SET_MASTER_CONFIGS;
    constructor(public payload?: { masterConfigs: {} }) { }
} 

// export class SetFYListAction {
//     readonly type = SET_FY_LIST;
//     constructor(public payload?: { fyList: [] }) { }
// } 

export class SetMenuAction {
    readonly type = SET_MENU_LIST;
    constructor(public payload?: { menus: {} }) { }
} 

export class SetSodMatrixAction {
    readonly type = SET_SOD_MATRIX;
    constructor(public payload?: { sodmatrix: {} }) { }
} 
