import { Action } from "../actions";
import { SET_ALL_ROLES, SET_CURRENT_ROLE, SET_CURRENT_ROLE_USER, SET_DISTRICTS, SET_MENU_LIST, SET_MASTER_CONFIGS, SET_SOD_MATRIX } from "../actions/common-action";


export interface CommonReducerState {
    roles: [],
    currentRole: { [key: string]: any },
    selectedRoleUser: Array<{ [key: string]: any }>,
    districts: Array<{ [key: string]: any }>,
    masterConfigs: Array<{ [key: string]: any }>,
    menus: Array<{ [key: string]: any }>,
    sodmatrix: Array<{ [key: string]: any }>
}

const initialState: CommonReducerState = {
    roles: [],
    currentRole: {},
    selectedRoleUser: [],
    districts: [],
    masterConfigs: [],
    menus: [],
    sodmatrix: []
}

export function CommonReducer(state = initialState, action: Action): CommonReducerState {
    switch (action.type) {
        case SET_ALL_ROLES: {
            const { roles } = action.payload;
            return { ...state, roles }
        }
        case SET_CURRENT_ROLE: {
            const { currentRole } = action.payload;
            return { ...state, currentRole }
        }
        case SET_DISTRICTS: {
            const { districts } = action.payload;
            return { ...state, districts }
        }
        case SET_MASTER_CONFIGS: {
            const { masterConfigs } = action.payload;
            return { ...state, masterConfigs }
        }
        case SET_MENU_LIST: {
            const { menus } = action.payload;
            return { ...state, menus }
        }
        case SET_CURRENT_ROLE_USER: {
            const { selectedRoleUser } = action.payload;
            return { ...state, selectedRoleUser }
        }
        case SET_SOD_MATRIX: {
            const { sodmatrix } = action.payload;
            return { ...state, sodmatrix }
        }
        default: {
            return state;
        }
    }
}
//selectors
export const getCommonRoles = (state: CommonReducerState) => state.roles;
export const getCurrentRole = (state: CommonReducerState) => state.currentRole;
export const getDistricts = (state: CommonReducerState) => state.districts;
export const getMasterConfigs = (state: CommonReducerState) => state.masterConfigs;
export const getAllMenuList = (state: CommonReducerState) => state.menus;
export const getAllSelectedUserRole = (state: CommonReducerState) => state.selectedRoleUser;
export const getSodMatrixList = (state: CommonReducerState) => state.sodmatrix;
