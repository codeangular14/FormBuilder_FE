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
    ifsc: "Invalid IFSC code",
    otpMessage: "Otp send successfully",
    LGDcode: "Miniumum 3 length is required",
    VillageLGDCode: "Miniumum 6 length is required",
    cinNumber: "Invalid CIN Number",
    claimantIdMsg: "Please enter valid Claimant Unique Id.",
    utrNoMsg : "Please enter valid UTR no."
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

export const LGD_CONSTANT = {
    STATE: "STATE",
    DISTRICT: "DISTRICT",
    TEHSIL: "TEHSIL",
    BLOCK: "BLOCK",
    VILLAGE: "VILLAGE"
}

export const FUNCTIONAL_RIGHTS = {
    CREATE: "RIGHT_CODE_CREATE",
    VIEW: "RIGHT_CODE_VIEW",
    EDIT: "RIGHT_CODE_EDIT",
    DELETE: "RIGHT_CODE_DELETE"
}

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
    VERIFY: "Verify",
    AGREE: 'Agree',
    DECLINE: 'Decline',
    FINAL_SUBMIT: "Final Submit",
    PREVIEW: "Preview",
    SUBMIT_FOR_APPROVAL: "Submit For Approval",
    NEXT: "Next",
    PAY_NOW: "Pay Now",
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
    ADD: 100
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

export const UPLOAD_TYPE = {
    PRIVATE: 'private'
}

export const OTP_Timer: number = 60;

export const USER_TYPES = {
    Scheme_Related_Users: 'Scheme Related Users',
    Help_Desk_Scheme_Related: 'Help Desk (Scheme Related)',
    Non_Scheme_Related_Users: 'Non Scheme Related Users',
    Help_Desk: 'Help Desk'
}

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

export const PAYMENT_STATUS = {
    SUCCESS: "SUCCESS",
    FAIL: "FAIL",
}

export const ROLE_NAMES = {
    SUPER_ADMIN: "SUPER_ADMIN",
    HIGH_COURT_ADMIN: "HIGH_COURT_ADMIN",
    DISTRICT_JUDICIARY_ADMIN: "DISTRICT_JUDICIARY_ADMIN",
    DISTRICT_JUDICIARY_USER: "DISTRICT_JUDICIARY_USER",
    JUDICIARY_OFFICER: "JUDICIARY_OFFICER",
    COURT_STAFF_ADMIN: "COURT_STAFF_ADMIN",
    RESPONDENT_USER: "RESPONDENT_USER",
    BANK_BRANCH_MANAGER: "BANK_BRANCH_MANAGER",
    BANK_BRANCH_USER: "BANK_BRANCH_USER",
    BENEFICIARY: "BENEFICIARY",
    RESPONDENT_ADMIN: "RESPONDENT_ADMIN",
    COURT_STAFF_USER: 'COURT_STAFF_USER',
    JUDICIARY_OFFICER_USER: 'JUDICIARY_OFFICER_USER',
    AUDITORS: 'AUDITORS',
    DISTRICT_COURT_STAFF_MAKER: "DISTRICT_COURT_STAFF_MAKER",  
    DISTRICT_JUDICIAL_OFFICER_CHECKER: "DISTRICT_JUDICIAL_OFFICER_CHECKER",
    DISTRICT_ADMIN: "DISTRICT_ADMIN",
    BANK_SUPER_ADMIN:"BANK_SUPER_ADMIN",
    HIGH_COURT_SUPER_ADMIN:"HIGH_COURT_SUPER_ADMIN",
};

export const ROLES =
    [
        {
            loggedInRole: ROLE_NAMES.SUPER_ADMIN,
            allowedRoles: [ROLE_NAMES.BANK_SUPER_ADMIN, ROLE_NAMES.HIGH_COURT_SUPER_ADMIN]
        },
        // {
        //     loggedInRole: ROLE_NAMES.SUPER_ADMIN,
        //     allowedRoles: [ROLE_NAMES.HIGH_COURT_ADMIN, ROLE_NAMES.BANK_BRANCH_MANAGER]
        // },
        {
            loggedInRole: ROLE_NAMES.BANK_SUPER_ADMIN,
            allowedRoles: [ROLE_NAMES.BANK_BRANCH_MANAGER]
        },
        {
            loggedInRole: ROLE_NAMES.HIGH_COURT_SUPER_ADMIN,
            allowedRoles: [ROLE_NAMES.HIGH_COURT_ADMIN]
        },
        {
            loggedInRole: ROLE_NAMES.HIGH_COURT_ADMIN,
            allowedRoles: [ROLE_NAMES.DISTRICT_ADMIN, ROLE_NAMES.DISTRICT_JUDICIARY_ADMIN]
        },
        {
            loggedInRole: ROLE_NAMES.DISTRICT_ADMIN,
            allowedRoles: [ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
                ROLE_NAMES.RESPONDENT_ADMIN
            ]
        },
        {
            loggedInRole: ROLE_NAMES.RESPONDENT_ADMIN,
            allowedRoles: [ROLE_NAMES.RESPONDENT_USER]
        },
        {
            loggedInRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
            allowedRoles: [ROLE_NAMES.BANK_BRANCH_USER, ROLE_NAMES.AUDITORS]
        },
        {
            loggedInRole: ROLE_NAMES.COURT_STAFF_ADMIN,
            allowedRoles: [ROLE_NAMES.COURT_STAFF_USER]
        },
        {
            loggedInRole: ROLE_NAMES.JUDICIARY_OFFICER,
            allowedRoles: [ROLE_NAMES.JUDICIARY_OFFICER_USER]
        },

    ]

export const HIGHCOURTS = {
    BHC: 'BHC',
    MHC: 'MHC',
}

export const MASTER_TYPE = {
    DISTRICT_JUDICIARY_TYPE: 'DISTRICT_JUDICIARY_TYPE',
    RESPONDENT_TYPE: 'RESPONDENT_TYPE',
    COURT_TYPE: 'COURT_TYPE',
    CASE_TYPE: 'CASE_TYPE',
    PAYMENT_MODE: 'PAYMENT_MODE',
    MATURITY_INSTRUCTIONS: 'MATURITY_INSTRUCTIONS',
}

export const PAYMENT_MODE = {
    FULL_SETTLEMENT_OF_PAYMENT: 'FULL_SETTLEMENT_OF_PAYMENT',
    FD_CREATION: 'FD_CREATION',
    FD_CREATION_MODE : 'FD Creation',
    FULL_SETTLEMENT_OF_PAYMENT_MODE : 'Full Settlement of Payment',
    HYBRID_MODE : 'HYBRID',
    HYBRID : 'Hybrid',
    INSTALLMENT_MODE : 'PAYMENT_IN_INSTALLMENT',
    INSTALLMENT : 'Payment in Installment',
}

// Define roles configuration
export const SHOW_BUTTON_ROLE_WISE = [
    {
        loggedInRole: ROLE_NAMES.SUPER_ADMIN,
        showButton: [ACTION_BUTTON_NAME.BACK, ACTION_BUTTON_NAME.RESET, ACTION_BUTTON_NAME.CREATE],
        accessRights: []
    },
    {
        loggedInRole: ROLE_NAMES.DISTRICT_JUDICIARY_ADMIN,
        showButton: [ACTION_BUTTON_NAME.BACK, ACTION_BUTTON_NAME.NEXT, ACTION_BUTTON_NAME.SAVE_CONTINUE],
        accessRights: [FUNCTIONAL_RIGHTS.VIEW, FUNCTIONAL_RIGHTS.EDIT]
    },
    {
        loggedInRole: ROLE_NAMES.RESPONDENT_ADMIN,
        showButton: [ACTION_BUTTON_NAME.BACK, ACTION_BUTTON_NAME.NEXT, ACTION_BUTTON_NAME.PAY_NOW,],
        accessRights: [FUNCTIONAL_RIGHTS.VIEW]
    },
    {
        loggedInRole: ROLE_NAMES.COURT_STAFF_ADMIN,
        showButton: [ACTION_BUTTON_NAME.BACK, ACTION_BUTTON_NAME.NEXT,
        ],
        accessRights: [FUNCTIONAL_RIGHTS.VIEW,]
    },
    {
        loggedInRole: ROLE_NAMES.JUDICIARY_OFFICER,
        showButton: [ACTION_BUTTON_NAME.BACK, ACTION_BUTTON_NAME.NEXT
        ],
        accessRights: [FUNCTIONAL_RIGHTS.VIEW]
    },
    {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_USER,
        showButton: [ACTION_BUTTON_NAME.BACK, ACTION_BUTTON_NAME.NEXT, ACTION_BUTTON_NAME.SUBMIT,
        ],
        accessRights: [FUNCTIONAL_RIGHTS.VIEW,]
    },
    {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
        showButton: [ACTION_BUTTON_NAME.BACK, ACTION_BUTTON_NAME.NEXT, ACTION_BUTTON_NAME.SUBMIT,
        ],
        accessRights: [FUNCTIONAL_RIGHTS.VIEW,]
    },
    {
        loggedInRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
        showButton: [ACTION_BUTTON_NAME.BACK, ACTION_BUTTON_NAME.SAVE_CONTINUE],
        accessRights: [FUNCTIONAL_RIGHTS.VIEW, FUNCTIONAL_RIGHTS.EDIT]
    },
    {
        loggedInRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
        showButton: [ACTION_BUTTON_NAME.BACK, ACTION_BUTTON_NAME.NEXT
        ],
        accessRights: [FUNCTIONAL_RIGHTS.VIEW]
    },
];

export const COMPONENT_NAME = {
    COURT_DETAILS: 'COURT_DETAILS',
    CASE_DETAILS: 'CASE_DETAILS',
    CASE_RESPONDENT_DETAILS: 'CASE_RESPONDENT_DETAILS',
    CASE_PAYMENT_DETAILS: 'CASE_PAYMENT_DETAILS',
    CASE_PAYMENT_INFORMATION: 'CASE_PAYMENT_INFORMATION',

}

export const CASE_WORKFLOW_MESSAGE = {
    PENDING_AT_RESPONDENT: 'Pending at Respondent for Payment',
    APPROVED_BY_RESPONDENT: 'Demand Paid By Respondent',
    APPROVED_BY_RESPONDENT_AND_PENDING_AT_DISTRICT_COURT_STAFF_MAKER: 'Demand Paid By Respondent, Pending At Court Staff (Maker) ',
    APPROVED_BY_RESPONDENT_AND_PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER: 'Demand Paid By Respondent, Pending At Judiciary Officer (Checker) ',
    APPROVED_BY_COURT_STAFF_ADMIN: 'Approved By Court Staff Admin',
    PENDING_AT_COURT_STAFF: 'Pending At Court Staff Admin',
    PENDING_AT_JUDICIARY_OFFICER: 'Pending at Judiciary Officer',
    APPROVED_BY_JUDICIARY_OFFICER: 'Approved By Judiciary Officer',
    PENDING_AT_BANK_BRANCH_USER: 'Pending at Bank Branch User',
    PENDING_AT_BANK_BRANCH_MANAGER: 'Pending at Bank Branch Manager',
    SENT_TO_BANK_BRANCH_MANAGER_FOR_APPROVAL: 'e-Mandate Sent to Branch Manager for Approval',
    APPROVED_BY_BANK_BRANCH_USER: 'Approved By Bank Branch User',
    REJECTED_BY_BANK_BRANCH_MANAGER: 'Rejected By Bank Branch Manager',
    REJECTED_BY_BANK_BRANCH_USER: 'e-Mandate Rejected By Bank Branch User',
    REJECTED_BY_JUDICIARY_OFFICER: 'Rejected By Judiciary Officer',
    REJECTED_BY_RESPONDENT_ADMIN: 'Rejected By Respondent Admin',
    PENDING_AT_DISTRICT_JUDICIARY_ADMIN: 'Pending at District Judiciary Admin',
    APPROVED_BY_BANK_BRANCH_MANAGER: 'e-Mandate Approved By Branch Manager',
    SUBMITTED_BY_DISTRICT_JUDICIARY_ADMIN: 'Submitted By District Judiciary Admin',

    SUBMITTED_BY_DISTRICT_COURT_STAFF_MAKER: 'Submitted By Court Staff Maker',

    RE_SUBMITTED_BY_DISTRICT_JUDICIARY_ADMIN: 'Re-Submitted By District Judiciary Admin',
    RE_SUBMITTED_BY_DISTRICT_COURT_STAFF_MAKER: 'Re-Submitted By Court Staff (Maker)',
    PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER: 'Pending at Judicial Officer (Checker)',
    APPROVED_BY_DISTRICT_JUDICIAL_OFFICER_CHECKER: 'Approved By Judicial Officer (Checker)',
    PENDING_AT_DISTRICT_COURT_STAFF_MAKER: 'Pending At Court Staff (Maker)',
    APPROVED_BY_DISTRICT_COURT_STAFF_MAKER: 'Approved By Court Staff (Maker)',
    REJECTED_BY_JUDICIAL_OFFICER_CHECKER: 'Rejected By Judicial Officer (Checker)',
    EMENDATE_BY_DISTRICT_COURT_STAFF_MAKER : 'e-Mandate generated by Court Staff (Maker).',
    EMENDATE_SEND_FOR_APPROVAL_BY_DISTRICT_COURT_STAFF_MAKER : 'e-Mandate send for Approval by Court Staff (Maker).',
    EMENDATE_PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER : 'e-Mandate generated by Court Staff (Maker), Pending at Judicial Officer (Checker) ',
    EMENDATE_PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER_FOR_APPROVAL : 'e-Mandate send for approval by Court Staff (Maker), Pending at Judicial Officer (Checker) ',
    EMENDATE_APPROVED_DISTRICT_JUDICIAL_OFFICER_CHECKER : 'e-Mandate Approved By Judicial Officer (Checker) ',
    EMENDATE_REJECTED_DISTRICT_JUDICIAL_OFFICER_CHECKER : 'e-Mandate Rejected By Judicial Officer (Checker) ',
    FINAL_SETTLEMENT_BANK_BRANCH_USER : 'Payment Settled/Fixed Deposit Created By The Bank.',
    FINAL_SETTLEMENT_PENDING_AT_BANK_BRANCH_MANAGER : 'Payment Settled/Fixed Deposit Created By The Bank User, Pending for Approval At Bank Checker',
    FINAL_SETTLEMENT_APPROVED_BY_BANK_BRANCH_MANAGER : 'Payment Settled/Fixed Deposit Approved By The Bank Manager.',
    FINAL_SETTLEMENT_REJECTED_BY_BANK_BRANCH_MANAGER : 'Payment Settled/Fixed Deposit Rejected By The Bank Manager.',    
    PERMANENTLY_REJECTED_BY_JUDICIARY_OFFICER : 'Permanently Rejected by Judicial Officer Checker'    
}

export const WORKFLOW_STATUS = {
    PENDING:1,
    APPROVED:2,
    REJECTED:3,
    RE_SUBMIT:4,
}

export const TICKET_STATUS = {
    PENDING:"Pending",
    RESOLVED:'Resolved',
    REJECTED:'Rejected'
}


export const CASE_WORKFLOW_CONFIG = [
    {
        loggedInUserRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
        nextLevelRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
        previousLevelRole: ''
    },
    {
        loggedInUserRole:ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
        nextLevelRole: ROLE_NAMES.RESPONDENT_ADMIN,
        previousLevelRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER
    },
    {
        loggedInUserRole: ROLE_NAMES.RESPONDENT_ADMIN,
        nextLevelRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
        previousLevelRole:ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER
    },
    {
        loggedInUserRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
        nextLevelRole: ROLE_NAMES.BANK_BRANCH_USER,
        previousLevelRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER
    },
    {
        loggedInUserRole: ROLE_NAMES.BANK_BRANCH_USER,
        nextLevelRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
        previousLevelRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
    },
    {
        loggedInUserRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
        nextLevelRole:ROLE_NAMES.BANK_BRANCH_USER,
        previousLevelRole: ROLE_NAMES.BANK_BRANCH_USER,
    }
]


export const CASE_WORKFLOW_CONFIG_EMENDATE = [

    {
        loggedInUserRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
        nextLevelRole: ROLE_NAMES.BANK_BRANCH_USER,
        previousLevelRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER
    },

]

export const FINAL_SETTLEMENT_WORKFLOW_CONFIG = [

    {
        loggedInUserRole: ROLE_NAMES.BANK_BRANCH_USER,
        nextLevelRole: '',
        previousLevelRole: ''
    },
]

export const TAB_STATUS = {
    PENDING: 'PENDING',
    DRAFT: 'DRAFT',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    SUBMITTED: 'SUBMITTED',
    CURRENT_STATUS: 'CURRENT_STATUS',
    PAY_NOW: 'PAY'
}

export const REJECT_CASE_PAYLOAD_ROLE_WISE = [
    {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
        action:WORKFLOW_STATUS.REJECTED,
        payload:{
            workflowStatus:WORKFLOW_STATUS.REJECTED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.REJECTED_BY_BANK_BRANCH_MANAGER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_BANK_BRANCH_USER
        }
    },
    {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_USER,
        action:WORKFLOW_STATUS.REJECTED,
        payload:{
            workflowStatus:WORKFLOW_STATUS.REJECTED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.REJECTED_BY_BANK_BRANCH_USER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER
        }
    },
    {
        loggedInRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
        action:WORKFLOW_STATUS.REJECTED,
        payload:{
            workflowStatus:WORKFLOW_STATUS.REJECTED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.REJECTED_BY_JUDICIAL_OFFICER_CHECKER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_DISTRICT_COURT_STAFF_MAKER
        }
    },
    {
        loggedInRole: ROLE_NAMES.RESPONDENT_ADMIN,
        action:WORKFLOW_STATUS.REJECTED,
        payload:{
            workflowStatus:WORKFLOW_STATUS.REJECTED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.REJECTED_BY_RESPONDENT_ADMIN,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER
        }
    },
]

export const EMENDATE_CASE_PAYLOAD_ROLE_WISE =[
    {
        loggedInRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
        action:WORKFLOW_STATUS.APPROVED,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.EMENDATE_BY_DISTRICT_COURT_STAFF_MAKER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.EMENDATE_PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER
        }
    },
    {
        loggedInRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
        action:WORKFLOW_STATUS.APPROVED,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.EMENDATE_APPROVED_DISTRICT_JUDICIAL_OFFICER_CHECKER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_BANK_BRANCH_USER
        }
    }
]

export const FINAL_CASE_PAYLOAD_ROLE_WISE = [
    {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_USER,
        action:WORKFLOW_STATUS.APPROVED,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.FINAL_SETTLEMENT_BANK_BRANCH_USER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.FINAL_SETTLEMENT_BANK_BRANCH_USER
        }
    },
]


export const APPROVE_CASE_PAYLOAD_ROLE_WISE = [
    
    {
        loggedInRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
        action:WORKFLOW_STATUS.RE_SUBMIT,
        payload:{
            workflowStatus:WORKFLOW_STATUS.RE_SUBMIT,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.RE_SUBMITTED_BY_DISTRICT_COURT_STAFF_MAKER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER
        }
    },

    {
        loggedInRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
        action:WORKFLOW_STATUS.APPROVED,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.APPROVED_BY_DISTRICT_JUDICIAL_OFFICER_CHECKER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_RESPONDENT
        }
    },

    {
        loggedInRole: ROLE_NAMES.RESPONDENT_ADMIN,
        action:WORKFLOW_STATUS.APPROVED,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.APPROVED_BY_RESPONDENT,
            // nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.APPROVED_BY_RESPONDENT_AND_PENDING_AT_DISTRICT_COURT_STAFF_MAKER
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.APPROVED_BY_RESPONDENT_AND_PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER
        }
    },
    {
        loggedInRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
        action:WORKFLOW_STATUS.APPROVED,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.APPROVED_BY_DISTRICT_COURT_STAFF_MAKER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER
        }
    },
    
    {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_USER,
        action:WORKFLOW_STATUS.APPROVED,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.SENT_TO_BANK_BRANCH_MANAGER_FOR_APPROVAL,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_BANK_BRANCH_MANAGER
        }
    },
    {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
        action:WORKFLOW_STATUS.APPROVED,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.APPROVED_BY_BANK_BRANCH_MANAGER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_BANK_BRANCH_USER
        }
    },
]

export const ACTION_TYPES_NEW = {
    DEMAND_AND_E_MANDATE_GENERATED_BY_COURT_STAFF_MAKER: 1,
    DEMAND_AND_E_MANDATE_RE_SUBMITTED_BY_COURT_STAFF_MAKER: 2,
    DEMAND_AND_E_MANDATE_APPROVED_BY_JUDICIAL_OFFICER_CHECKER: 3,
    DEMAND_AND_E_MANDATE_REJECTED_BY_JUDICIAL_OFFICER_CHECKER: 4,
    DEMAND_PAID_BY_RESPONDENT: 5,
    DEMAND_REJECTED_BY_RESPONDENT: 6,
    DEMAND_AND_E_MANDATE_SEND_FOR_APPROVAL_BY_COURT_STAFF_MAKER: 7,
    E_MANDATE_APPROVED_BY_JUDICIAL_OFFICER_CHECKER: 8,    
    E_MANDATE_REQUEST_FOR_APPROVAL_BY_BANK_MAKER: 9,
    E_MANDATE_REJECTED_BY_BANK_MAKER: 10,
    E_MANDATE_APPROVED_BY_BANK_CHECKER: 11,
    E_MANDATE_REJECTED_BY_BANK_CHECKER: 12,
    PAYMENT_INFO_GENERATED_BY_BANK_MAKER: 13,
    PAYMENT_INFO_RE_GENERATED_BY_BANK_MAKER: 14,
    PAYMENT_INFO_APPROVED_BY_BANK_CHECKER: 15,
    PAYMENT_INFO_REJECTED_BY_BANK_CHECKER: 16,
    E_MANDATE_REJECTED_BY_JUDICIAL_OFFICER_CHECKER: 17,

    // ⭐ NEW ACTION TYPE (PERMANENT REJECTION)
    DEMAND_AND_E_MANDATE_PERMANENTLY_REJECTED_BY_JUDICIAL_OFFICER_CHECKER: 18,
}

export const WORKFLOW_PAYLOAD = [
    
    {
        loggedInRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
        action:WORKFLOW_STATUS.PENDING,
        actionType:ACTION_TYPES_NEW.DEMAND_AND_E_MANDATE_GENERATED_BY_COURT_STAFF_MAKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.PENDING,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER,
            loggedInUserRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
            nextLevelRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
            previousLevelRole: ''
        }
    },

    {
        loggedInRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
        action:WORKFLOW_STATUS.REJECTED,
        actionType:ACTION_TYPES_NEW.DEMAND_AND_E_MANDATE_REJECTED_BY_JUDICIAL_OFFICER_CHECKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.REJECTED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.REJECTED_BY_JUDICIAL_OFFICER_CHECKER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_DISTRICT_COURT_STAFF_MAKER,
            loggedInUserRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
            nextLevelRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
            previousLevelRole: ''
        }
    },

     {
        loggedInRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
        action:WORKFLOW_STATUS.RE_SUBMIT,
        actionType:ACTION_TYPES_NEW.DEMAND_AND_E_MANDATE_RE_SUBMITTED_BY_COURT_STAFF_MAKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.RE_SUBMIT,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.RE_SUBMITTED_BY_DISTRICT_COURT_STAFF_MAKER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER,
            loggedInUserRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
            nextLevelRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
            previousLevelRole: ''
        }
    },

    {
        loggedInRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
        action:WORKFLOW_STATUS.APPROVED,
        actionType:ACTION_TYPES_NEW.DEMAND_AND_E_MANDATE_APPROVED_BY_JUDICIAL_OFFICER_CHECKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.APPROVED_BY_DISTRICT_JUDICIAL_OFFICER_CHECKER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_RESPONDENT,
            loggedInUserRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
            nextLevelRole: ROLE_NAMES.RESPONDENT_ADMIN,
            previousLevelRole: ''
        }
    },

    {
        loggedInRole: ROLE_NAMES.RESPONDENT_ADMIN,
        action:WORKFLOW_STATUS.APPROVED,
        actionType:ACTION_TYPES_NEW.DEMAND_PAID_BY_RESPONDENT,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.APPROVED_BY_RESPONDENT,
            // nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.APPROVED_BY_RESPONDENT_AND_PENDING_AT_DISTRICT_COURT_STAFF_MAKER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.APPROVED_BY_RESPONDENT_AND_PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER,
            loggedInUserRole: ROLE_NAMES.RESPONDENT_ADMIN,
            // nextLevelRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
            nextLevelRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
            previousLevelRole: ''
        }
    },

    {
        loggedInRole: ROLE_NAMES.RESPONDENT_ADMIN,
        action:WORKFLOW_STATUS.REJECTED,
        actionType:ACTION_TYPES_NEW.DEMAND_REJECTED_BY_RESPONDENT,
        payload:{
            workflowStatus:WORKFLOW_STATUS.REJECTED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.REJECTED_BY_RESPONDENT_ADMIN,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER,
            loggedInUserRole: ROLE_NAMES.RESPONDENT_ADMIN,
            nextLevelRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
            previousLevelRole: ''
        }
    },

    {
        loggedInRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
        action:WORKFLOW_STATUS.APPROVED,
        actionType:ACTION_TYPES_NEW.DEMAND_AND_E_MANDATE_SEND_FOR_APPROVAL_BY_COURT_STAFF_MAKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.EMENDATE_SEND_FOR_APPROVAL_BY_DISTRICT_COURT_STAFF_MAKER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.EMENDATE_PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER_FOR_APPROVAL,
            loggedInUserRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
            nextLevelRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
            previousLevelRole: ''
        }
    },

     {
        loggedInRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
        action:WORKFLOW_STATUS.APPROVED,
        actionType:ACTION_TYPES_NEW.E_MANDATE_APPROVED_BY_JUDICIAL_OFFICER_CHECKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.EMENDATE_APPROVED_DISTRICT_JUDICIAL_OFFICER_CHECKER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_BANK_BRANCH_USER,
            loggedInUserRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
            nextLevelRole: ROLE_NAMES.BANK_BRANCH_USER,
            previousLevelRole: ''
        }
    },

    {
        loggedInRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
        action:WORKFLOW_STATUS.REJECTED,
        actionType:ACTION_TYPES_NEW.E_MANDATE_REJECTED_BY_JUDICIAL_OFFICER_CHECKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.REJECTED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.EMENDATE_REJECTED_DISTRICT_JUDICIAL_OFFICER_CHECKER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_DISTRICT_COURT_STAFF_MAKER,
            loggedInUserRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
            nextLevelRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
            previousLevelRole: ''
        }
    },

     {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_USER,
        action:WORKFLOW_STATUS.APPROVED,
        actionType:ACTION_TYPES_NEW.E_MANDATE_REQUEST_FOR_APPROVAL_BY_BANK_MAKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.SENT_TO_BANK_BRANCH_MANAGER_FOR_APPROVAL,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_BANK_BRANCH_MANAGER,
            loggedInUserRole: ROLE_NAMES.BANK_BRANCH_USER,
            nextLevelRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
            previousLevelRole: ''
        }
    },

    {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_USER,
        action:WORKFLOW_STATUS.REJECTED,
        actionType:ACTION_TYPES_NEW.E_MANDATE_REJECTED_BY_BANK_MAKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.REJECTED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.REJECTED_BY_BANK_BRANCH_USER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_DISTRICT_JUDICIAL_OFFICER_CHECKER,
            loggedInUserRole: ROLE_NAMES.BANK_BRANCH_USER,
            nextLevelRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
            previousLevelRole: ''
        }
    },

     {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
        action:WORKFLOW_STATUS.APPROVED,
        actionType:ACTION_TYPES_NEW.E_MANDATE_APPROVED_BY_BANK_CHECKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.APPROVED_BY_BANK_BRANCH_MANAGER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_BANK_BRANCH_USER,
            loggedInUserRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
            nextLevelRole: ROLE_NAMES.BANK_BRANCH_USER,
            previousLevelRole: ''
        }
    },

    {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
        action:WORKFLOW_STATUS.REJECTED,
        actionType:ACTION_TYPES_NEW.E_MANDATE_REJECTED_BY_BANK_CHECKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.REJECTED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.REJECTED_BY_BANK_BRANCH_MANAGER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_BANK_BRANCH_USER,
            loggedInUserRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
            nextLevelRole: ROLE_NAMES.BANK_BRANCH_USER,
            previousLevelRole: ''
        }
    },

    {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_USER,
        action:WORKFLOW_STATUS.APPROVED,
        actionType:ACTION_TYPES_NEW.PAYMENT_INFO_GENERATED_BY_BANK_MAKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.FINAL_SETTLEMENT_BANK_BRANCH_USER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.FINAL_SETTLEMENT_PENDING_AT_BANK_BRANCH_MANAGER,
            loggedInUserRole: ROLE_NAMES.BANK_BRANCH_USER,
            nextLevelRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
            previousLevelRole: ''
        }
    },

    {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
        action:WORKFLOW_STATUS.APPROVED,
        actionType:ACTION_TYPES_NEW.PAYMENT_INFO_APPROVED_BY_BANK_CHECKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.APPROVED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.FINAL_SETTLEMENT_APPROVED_BY_BANK_BRANCH_MANAGER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.FINAL_SETTLEMENT_APPROVED_BY_BANK_BRANCH_MANAGER,
            loggedInUserRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
            nextLevelRole: '',
            previousLevelRole: ''
        }
    },

    {
        loggedInRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
        action:WORKFLOW_STATUS.REJECTED,
        actionType:ACTION_TYPES_NEW.PAYMENT_INFO_REJECTED_BY_BANK_CHECKER,
        payload:{
            workflowStatus:WORKFLOW_STATUS.REJECTED,
            workflowStatusDescription:CASE_WORKFLOW_MESSAGE.FINAL_SETTLEMENT_REJECTED_BY_BANK_BRANCH_MANAGER,
            nextWorkflowStatusDescription:CASE_WORKFLOW_MESSAGE.PENDING_AT_BANK_BRANCH_USER,
            loggedInUserRole: ROLE_NAMES.BANK_BRANCH_MANAGER,
            nextLevelRole: ROLE_NAMES.BANK_BRANCH_USER,
            previousLevelRole: ''
        }
    },

    {
        loggedInRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
        action: WORKFLOW_STATUS.REJECTED,
        actionType: ACTION_TYPES_NEW.DEMAND_AND_E_MANDATE_PERMANENTLY_REJECTED_BY_JUDICIAL_OFFICER_CHECKER,
        payload: {
            workflowStatus: WORKFLOW_STATUS.REJECTED,
            // workflowStatusDescription: "Permanently Rejected by Judicial Officer Checker",
            workflowStatusDescription: CASE_WORKFLOW_MESSAGE.PERMANENTLY_REJECTED_BY_JUDICIARY_OFFICER,
            nextWorkflowStatusDescription: "",
            loggedInUserRole: ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
            nextLevelRole: ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,       // No further workflow
            previousLevelRole: ""    // No return workflow
        }
    }


    
]


export const ROLE_WISE_ROUTING = [
    ROLE_NAMES.DISTRICT_COURT_STAFF_MAKER,
    ROLE_NAMES.DISTRICT_JUDICIAL_OFFICER_CHECKER,
    ROLE_NAMES.RESPONDENT_ADMIN,
    ROLE_NAMES.BANK_BRANCH_USER,
    ROLE_NAMES.BANK_BRANCH_MANAGER,
  ];

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

export const INSTALLMENT_FREQUENCY = [
    { "name": "Monthly", "value": 'monthly'},
    { "name": "Quarterly", "value": 'quarterly'}, 
    { "name": "Half-Yearly", "value": 'halfYearly'}, 
    { "name": "Annually", "value": 'annually'}, 
]

export const PAYMENT_TYPE = [
//   { id: 'AMOUNT', value: 'Payment Amount' },
  { id: 'PERCENTAGE', value: 'Payment Percentage' }
];


export const ACTION_TYPES = {
    DEMAND_GENERATED_BY_COURT_STAFF_MAKER: 1,
    DEMAND_RE_SUBMITTED_BY_COURT_STAFF_MAKER: 2,
    DEMAND_APPROVED_BY_JUDICIAL_OFFICER_CHECKER: 3,
    DEMAND_REJECTED_BY_JUDICIAL_OFFICER_CHECKER: 4,
    DEMAND_PAID_BY_RESPONDENT: 5,
    DEMAND_REJECTED_BY_RESPONDENT: 6,
    E_MANDATE_GENERATED_BY_COURT_STAFF_MAKER: 7,
    E_MANDATE_RE_SUBMITTED_BY_COURT_STAFF_MAKER: 8,
    E_MANDATE_APPROVED_BY_JUDICIAL_OFFICER_CHECKER: 9,
    E_MANDATE_REJECTED_BY_JUDICIAL_OFFICER_CHECKER: 10,
    E_MANDATE_REQUEST_FOR_APPROVAL_BY_BANK_MAKER: 11,
    E_MANDATE_REJECTED_BY_BANK_MAKER: 12,
    E_MANDATE_APPROVED_BY_BANK_CHECKER: 13,
    E_MANDATE_REJECTED_BY_BANK_CHECKER: 14,
    PAYMENT_INFO_GENERATED_BY_BANK_MAKER: 15,
    PAYMENT_INFO_RE_GENERATED_BY_BANK_MAKER: 16,
    PAYMENT_INFO_APPROVED_BY_BANK_CHECKER: 17,
    PAYMENT_INFO_REJECTED_BY_BANK_CHECKER: 18,
}

