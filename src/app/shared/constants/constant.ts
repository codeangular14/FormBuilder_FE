import { environment } from "../../../environments/environment";

export const placeholder = {
    pleaseEnter: "Please enter",
    pleaseSelect: "Please select"
}

export const placehoder = {
    pleaseEnter: "Please enter",
    pleaseSelect: "Please select"
}

export const commonMessage = {
    resetForm: "Are you sure you want to reset this form?",
    deleteMessage: "Are you sure you want to delete",
    snackBarDuration: 10000,
    mobileNumber: "Please enter 10 digit mobile number only",
    activateDeactivateHeading: "Activate / Deactivate",
    email: "Please enter valid Email id",
    submit: "Are you sure you want to submit?",
    otpMessage: "Otp send successfully",
}

export const dropdownSettingsConfig = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
}

export function getDropdownSettingsConf(dynamicIdField: string = "", dynamicTextField: string = "") {
    return {
        singleSelection: false,
        idField: dynamicIdField || 'id',
        textField: dynamicTextField || 'name',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
    };
}

export const dateFormate = {
    ddMMyyyy: 'dd-MM-yyyy'
}

export const IS_USER_LOGIN_KEY = (environment.production) ? window.btoa("is#user#login") : "is#user#login";
export const TEMP_USER_TOKEN_KEY = (environment.production) ? window.btoa("logged*user*temp*token") : "logged*user*temp*token";
export const LOGGED_USER_ROLE = (environment.production) ? window.btoa("logged*user*role") : "logged*user*role";
export const SELECTD_MENU_CODE = (environment.production) ? window.btoa("selected*menu*code") : "selected*menu*code";
export const SELECTD_MENU_ID = (environment.production) ? window.btoa("selected*menu*id") : "selected*menu*id";
export const TOKEN_MISSING = "token missing";
export const HINDI_LANG = "hi";
export const ENG_LANG = "en";
export const DEFAULT_LANG = HINDI_LANG;


export const ACTION_BUTTON_NAME = {
    CREATE: "Create",
    VIEW: "View",
    UPDATE: "Update",
    DELETE: "Delete",
    BACK: "Back",
    RESET: "Reset",
    SAVE_PROCEED: "Save & Proceed",
    GENERATE_OTP: "Generate OTP",
    SUBMIT: "Submit",
    DISCARD: "Discard",
    PROCEED: "Proceed",
    ADD_MORE: "Add More",
    SEARCH: "Search",
    SAVE_AS_DRAFT: "Save As Draft",
    UPDATE_AS_DRAFT: "Update As Drat",
    CHANGE_PASSWORD: "Change Password",
    UPDATE_CONTINUE: "Update and Continue",
    SAVE_CONTINUE: 'Save and Continue',
    APPROVE: "Approve",
    REJECT: "Reject",
    NEXT: "Next",
}

export const MUTLTI_SELECT_DD_ACTION = {
    SINGLE_ITEM_SELECT: "onItemSelect",
    SELECT_ALL_ITEM: "onSelectAll",
    SINGLE_ITEM_DESLECT: "onItemDeSelect",
    DESELECT_ALL_ITEM: "onItemDeSelectAll",
}

export const REGION_COMP_DD_INPUT_ID = {
    DISTRICT_INP_ID: "district",
    TEHSIL_INP_ID: "tehsil",
    BLOCK_INP_ID: "block",
    VILLAGE_INP_ID: "village"
}

export const REGION_COMP_DD_BIND_ID = {
    DISTRICT_BIND_ID: "districtId",
    TEHSIL_BIND_ID: "tehsilId",
    BLOCK_BIND_ID: "blockId",
    VILLAGE_BIND_ID: "villageId",
}

export const GLOBAL_COLUMN_NAMES = {
    SERIAL_NUMBER: "GLOBAL_SERIAL_NO",
    SR_NO: "GLOBAL_SR_NO",
}

export const loadedLangMenuCodeData: { [key: string]: any } = {};

export const ADD_EDIT_MODULE_NAV_ACTION = {
    CREATE_ACTION: "onCreateAction",
    UPDATE_ACTION: "onUpdateAction",
    RESET_ACTION: "onResetAction",
    BACK_ACTION: "onBackAction",
    SUBMIT_ACTION: "onSubmitAction",
    SAVE_CONTINUE_ACTION: "onSaveContinueAction",
    SAVE_AS_DRAFT_ACTION: "onSaveDraftAction",
    UPDATE_AS_DRAFT_ACTION: "onUpdateDraftAction",
    FINAL_SUBMIT_ACTION: "onFinalSubmitAction",
    APPROVE: 'APPROVE',
    REJECT: 'REJECT',
    PREVIEW: 'PREVIEW',
    DELETE_ACTION: "onDeleteAction",
    NEXT_ACTION: "onNextAction",
}

export const FILE_UPLOAD_ALLOWED_TYPES = {
    PDF: ".pdf",
    JPG_JPEG_PNG: ".jpg, .png, .jpeg",
    JPG_JPEG_PNG_PDF: ".jpg, .png, .jpeg, .pdf",
    VDO: ".mp4, .webm, .avi, .mkv, .wmv, .mov, .flv, 3gp, .mpeg, .ogv",
    EXCEL: ".xlsx,.xls"
}
export const OTP_CONST = {
    TEMPLATE_ID: "LOGIN_OTP",
    // NOTIFICATION_TYPE: ["EMAIL", "SMS"]
    NOTIFICATION_TYPE: ["SMS"]
}

export const LANGUAGE_CODE_CONST = {
    GLOBAL: "GLOBAL",
    FARMER_REGISTRATION: "FARMER_REGISTRATION"
}
export const API_SAVE_STATUS = {
    DELETE: 0,
    DRAFT: 1,
    SUBMIT: 2,
    APPROVED: 3,
    REJECTED: 4,
}

export const SYMBOL = {
    RUPEE: "₹"
}

export const CONDITION_CONSTANT = {
    VIEW: "view",
    EDIT: "edit",
}

export const SHOW_NAVIGATION_CONST = {
    CREATE: "create",
    SUBMIT: "submit",
}

export const OTP_Timer: number = 60;

export const LANGUAGE_CONSTANTS = {
    ENGLISH: "English",
    HINDI: "हिंदी",
    ENGLISH_en: "en",
    HINDI_hi: "hi",
}

export const PASSWORD_LENGTH = {
    maxlength: 20,
    minlength: 8
}

export const LOADER = {
    loadingText: 'Loading...'
}

export const ROLE_NAMES = {
    SUPER_ADMIN: "SUPER_ADMIN",
   
};

export const TABLE_COLUMN_CONFIG = [ 
    { "name": "Court Id", "dataKey": [ "courtId" ], "position": "left", "isSortable": true },
     { "name": "Case Id", "dataKey": [ "caseId" ], "position": "left", "isSortable": true }, 
     { "name": "Claimant Name", "dataKey": [ "claimantName" ], "position": "left", "isSortable": true }, 
     { "name": "Claimant  Unique ID", "dataKey": [ "claimantUniqueId" ], "position": "left", "isSortable": true }, 
     { "name": "Respondent Name", "dataKey": [ "respondentName" ], "position": "left", "isSortable": true }, 
     { "name": "Demand Amount", "dataKey": [ "amount" ], "position": "left", "isSortable": true },
     { "name": "Payment Received", "dataKey": [ "paymentReceived" ], "position": "left", "isSortable": true }, 
     { "name": "Action Date", "dataKey": [ "actionOn" ], "position": "left", "isSortable": true }, 

      { "name": "Payment Mode", "dataKey": [ "paymentMode" ], "position": "left", "isSortable": true }, 
    //  { "name": "Beneficiary Account Number", "dataKey": [ "beneficiaryAccountNumber" ], "position": "left", "isSortable": true }, 
    //  { "name": "Amount to be Release", "dataKey": [ "amountToBeReleased" ], "position": "left", "isSortable": true }, 
    //  { "name": "FD number", "dataKey": [ "fixedDepositNo" ], "position": "left", "isSortable": true },
    //  { "name": "FD Interest Rate", "dataKey": [ "fixedDepositInterestRate" ], "position": "left", "isSortable": true }, 
    //  { "name": "Fixed deposite time period", "dataKey": [ "fixedDepositTimePeriod" ], "position": "left", "isSortable": true }, 
    //  { "name": "Principal Amount", "dataKey": [ "principalAmount" ], "position": "left", "isSortable": true },
     { "name": "Status", "dataKey": [ "workflowStatusDescription" ], "position": "left", "isSortable": true }
 
]

