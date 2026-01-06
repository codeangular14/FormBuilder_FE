export const SOMETHING_WENT_WRONG = "Something went wrong";
export const CommonMessages = {
    API_STATUS_SUCCESS: 'success'
}
export const SELECT_AT_LEAST_ONE_ROLE = "Please Select at least one role";
export const ROLE_ID_MISSING = "Role ID Missing!";
export const ID_MISSING = "ID Missing!";
export const WANT_TO_RESET = "Are you sure you want to reset?";
export const WANT_TO_REMOVE = "Are you sure you want to delete *?";

export const WANT_TO_DELETE = "Are you sure you want to deactivate *?"
export const WANT_TO_ACTIVATE = "Are you sure you want to activate *?"
export const WANT_TO_BOOK_SCHEME = "Are you sure you want to book scheme?"
export const WANT_TO_DEACTIVATE = "Are you sure you want to deactivate *?"
export const STATUS_MISSING = "Status Missing!"
export const WANT_TO_LOCK = "Are you sure you want to lock *?"
export const WANT_TO_UNLOCK = "Are you sure you want to unlock *?"
export const WANT_TO_DELETE_MSG = "Are you sure you want to delete?"
export const WANT_TO_APPROVE = "Are you sure you want to approve?";
export const WANT_TO_PAY = "Are you sure you want to pay?";
export const WANT_TO_SUBMIT = "Are you sure you want to submit?";


export const ActionConstant = {
    DELETE_ACTION: "delete_action",
    EDIT_ACTION: "edit_action",
    VIEW_ACTION: "view_action",
    VIEW_TICKET_ACTION: "view_ticket_action",
    STATUS_TOGGLE_ACTION: "status_toggle_action",
    DEACTIVATE_ACTION: "deactivate_action",
    ACTIVATE_ACTION:"activate_action",
    REORDER_TOGGLE_ACTION:"reorder_action",
    DOWN:"DOWN",
    UP:"UP",
    LOCK_UNLOCK_ACTION: "lock_unlock_action",
    LOCK_ACTION: "lock_action",
    UNLOCK_ACTION:"lock_unlock_action",
    MANAGE_MATERIAL_ACTION:"manage_material_action",
    MANAGE_MATERIAL_DIST_ACTION:"manage_material_dist_action",
    EDIT_DBT: "edit_dbt",
    HISTORY : 'history',
    BOOK_NOW:'book_now'
}

export const PaginationConstant = {
    PAGE_NUMBER: 0,
    PAGE_SIZE: 100,
    SORT_BY: "id",//createdAt
    SORT_DIR: "desc",
    SEARCH_STR:""
}

export const IconConstant = {
    DELETE_ICON: "delete",
    EDIT_ICON: "edit",
    VIEW_ICON: "remove_red_eye",
    ACTIVATE_ICON: "check_circle",
    DEACTIVATE_ICON: "block",
    UP_ICON: "arrow_upward",
    LOCK_ICON: "lock",
    UNLOCK_ICON: "lock_open",
    MANAGE_MATERIAL_ICON:"list",
    HISTORY :'history',
    BOOK_NOW:'book_now'
}

export const PageModeConstant = {
    EDIT_MODE: "edit",
    VIEW_MODE: "view",
    MANAGE_MODE: "manage",
    VIEW_BLOCK_MODE: "viewBlockInventory",
    VIEW_DIST_BLOCK_MODE: "viewDistBlockInventory",
}
