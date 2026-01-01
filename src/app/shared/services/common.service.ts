import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { Observable, forkJoin } from 'rxjs';
import { SetAllRoles, SetCurrentRole, SetCurrentRoleUser, SetDistrictsAction, SetMenuAction, SetMasterConfigAction, SetSodMatrixAction } from '../../store/actions/common-action';
import { FlushTheReduxState } from '../../store/actions/redux-flush-action';
import { RootReducerState, getCurrentRoleData, getLoginData } from '../../store/reducers';
import { environment } from '../../../environments/environment';
import {
	IS_USER_LOGIN_KEY,
	LOGGED_USER_ROLE,
	MUTLTI_SELECT_DD_ACTION,
	SELECTD_MENU_CODE,
	SELECTD_MENU_ID,
	TEMP_USER_TOKEN_KEY,
	TOKEN_MISSING,
	commonMessage
} from '../constants/constant';
import { SOMETHING_WENT_WRONG } from '../constants/messagesConstant';
import {
	BEFORE_LOGIN_ROUTE_PATH_LIST,
	DashBoardRoute,
	UserManagementRoutes
} from '../constants/routePathConstants';

// import * as CryptoJS from 'crypto-js';
// import html2canvas from 'html2canvas';
// import * as html2pdf from 'html2pdf.js';
// import * as jspdf from 'jspdf';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})

export class CommonService {
	loggedUserTempToken: string = "";
	matSnakDuration: any = commonMessage.snackBarDuration;
	userRolesList: Array<{ [key: string]: any }> = [];
	rolesDDList: Array<{ [key: string]: any }> = [];
	selectedRights: Array<{ [key: string]: any }> = [];
	isView: boolean = false;
	isDelete: boolean = false;
	isEdit: boolean = false;
	isCreate: 	boolean = false;
	secreatKey = 'L5p6BfrRTAy1/WT/rjq3MhQ7sOnMukC/LICGP0T1CR4=';
	loginData: any;

	constructor(
		private snackBar: MatSnackBar,
		private store: Store<RootReducerState>,
		private router: Router
	) {
	}

	// HTTP Failure
	showErrorMessage(error: string, p_bAutoHide: boolean = true) {
		this.snackBar.open(error || "", 'X', {
			duration: p_bAutoHide ? this.matSnakDuration : commonMessage.snackBarDuration,
			panelClass: ['red-snackbar'],
		});
	}

	// Http Success
	showSuccessMessage(success: string, p_bAutoHide: boolean = true) {
		const message = success || "";
		let icon : any
		let panelClass = 'green-snackbar';
		if (message.toLowerCase().includes('info:')) {
			panelClass = 'blue-snackbar';
			icon =  'ℹ️';
		  } else if (message.toLowerCase().includes('success:')) {
			panelClass = 'green-snackbar';
			icon =  '✔️';
		  }
		  else if(message.toLowerCase().includes('error:')){
			panelClass = 'red-snackbar';
			icon =  '❌';
		  }
		  const messageToDisplay = message?.split(':')[1]?.trim();
		  this.snackBar.open(messageToDisplay,icon, {
			duration: p_bAutoHide ? this.matSnakDuration : commonMessage.snackBarDuration,
			panelClass: [panelClass],
		  });
	}

	 getAccessToken() {
		let token: string = TOKEN_MISSING;
		this.store.select(getLoginData).subscribe((data:any) => {
			token = _.get(data, "token", "") || sessionStorage.getItem(TEMP_USER_TOKEN_KEY) || TOKEN_MISSING;
			if (token !== TOKEN_MISSING) {
				this.loggedUserTempToken = token;
			}
		})
		return token;
	}

	// Set Token in header to use in API calling
	getTokenHeader() {
		let header: any
		header = {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer Bearer ' + this.getAccessToken()
		}
		return header;
	}

	getTokenHeaderMultiPart() {
		let header: any
		header = {
			'Authorization': this.getAccessToken()
		}
		return header;
	}

	getTokenHeaderMultiPartWithoutAuth() {
		let header: any
		header = {
			'Content-Type': 'multipart/form-data',
		}
		return header;
	}

	// Set content type in header
	getHeaderContentTypeOnly() {
		let header: any;
		header = {
			'Content-Type': 'application/json'
		}
		return header;
	}

	callCommonAPIAfterLogin = (p_aServiceObjList: any, loginObj: any, successCallBack: any = null, failureCallBack: any = null) => {
		//let apiOne = p_aServiceObjList[0].getRoles();
		let apiDistrict = p_aServiceObjList[0].getAllDistricts();
		let apiMasterConfig = p_aServiceObjList[0].getMasterConfig();
		let apiMenuList = p_aServiceObjList[0].getAllMenus();
		let apiSodMatrix = p_aServiceObjList[0].getAllSodMatrix();

		forkJoin({ apiDistrict, apiMasterConfig, apiMenuList, apiSodMatrix}).subscribe(
			{
				next: (response: { [key: string]: any }) => {
					//const { apiOne } = response || {};
					const { apiDistrict } = response || {};
					const encryptedDecryptedApiDistrict = this.getEncryptedOrDecryptedData(apiDistrict,loginObj?.isEncrypted);
					const District = { data: encryptedDecryptedApiDistrict };

					const { apiMasterConfig } = response || {};
					const encryptedDecryptedMasterConfig = this.getEncryptedOrDecryptedData(apiMasterConfig,loginObj?.isEncrypted);
					const masterConfig = { data: encryptedDecryptedMasterConfig };


					const { apiMenuList } = response || {};
					const { apiSodMatrix } = response || {};
				//	this.store.dispatch(new SetAllRoles({ roles: this.getAPIDataNode(apiOne) }));
					this.store.dispatch(new SetDistrictsAction({ districts: this.getAPIDataNode(District) }));
					this.store.dispatch(new SetMasterConfigAction({ masterConfigs: this.getAPIDataNode(masterConfig) }));
					this.store.dispatch(new SetMenuAction({ menus: this.getAPIDataNode(apiMenuList) }));
					this.store.dispatch(new SetSodMatrixAction({ sodmatrix: this.getAPIDataNode(apiSodMatrix) }));
					successCallBack && successCallBack(response);
					this.setUserLoggedFlagInSession();
				},
				error: (error) => {
					failureCallBack && failureCallBack(this.getAPIErrorMSG(error));
				},
				complete: () => {

				}
			}
		);
	}
	getAPIErrorMSG = (p_oError: any) => {
		if (_.isObject(p_oError)) {
			return _.get(p_oError, "error.error", SOMETHING_WENT_WRONG)
		}
		return p_oError;
	}
	getAPIDataNode = (p_oData: any) => {
		return _.get(p_oData, "data.content", (_.get(p_oData, "data", null)))
	}
	flushAllSessionStorage = () => {
		sessionStorage.clear();
	}

	setUserLoggedFlagInSession() {
		sessionStorage.setItem(IS_USER_LOGIN_KEY, ((environment.production) ? window.btoa("user_successfully_login") : "1"));
	}

	isUserLogged() {
		return (sessionStorage.getItem(IS_USER_LOGIN_KEY)) ? true : false;
	}

	flushAllDateAfterLogOut() {
		this.loggedUserTempToken = "";
		this.flushAllSessionStorage();
		this.store.dispatch(new FlushTheReduxState());
	}

	goOnLoginScreen() {
		this.router.navigateByUrl(`/${UserManagementRoutes.LOGIN}`);
	}

	goOnHomeScreen() {
		// this.router.navigateByUrl(CmsRoutes.HOME);
	}

	goOnDashBoard() {
		this.router.navigateByUrl(DashBoardRoute);
	}

	isBeforeLoginRoute = () => {
		return BEFORE_LOGIN_ROUTE_PATH_LIST.includes(window.location.pathname)
	}

	// Sorting Data on column
	sortData<T>(data: T[], sortParameters: Sort): T[] {
		const keyName: keyof T = sortParameters.active[0] as keyof T;
		if (typeof data[0][keyName] === 'string') {
			if (sortParameters.direction === 'asc') {
				return [...data].sort((a: T, b: T) => (a[keyName] as unknown as string).localeCompare(b[keyName] as unknown as string));
			} else if (sortParameters.direction === 'desc') {
				return [...data].sort((a: T, b: T) => (b[keyName] as unknown as string).localeCompare(a[keyName] as unknown as string));
			} else {
				return data;
			}
		} else if (typeof data[0][keyName] === 'number') {
			if (sortParameters.direction === 'asc') {
				return [...data].sort((a: T, b: T) => (a[keyName] as unknown as number) >= ((b[keyName]) as unknown as number) ? 1 : -1);
			} else if (sortParameters.direction === 'desc') {
				return [...data].sort((a: T, b: T) => (a[keyName] as unknown as number) >= ((b[keyName]) as unknown as number) ? -1 : 1);
			} else {
				return data;
			}
		} else {
			return data;
		}
	}

	setCurrentRoleInState(p_sCurrRole: { [key: string]: any }) {
		this.store.dispatch(new SetCurrentRole({ currentRole: p_sCurrRole }));
		this.setUserRoleInSession(p_sCurrRole);
	}

	setSelectedUserInState(p_sCurrRole: { [key: string]: any }) {
		this.store.dispatch(new SetCurrentRoleUser({ selectedRoleUser: p_sCurrRole }));
	}

	private setUserRoleInSession(p_sCurrRole: { [key: string]: any }) {
		sessionStorage.setItem(LOGGED_USER_ROLE, ((environment.production) ? window.btoa(JSON.stringify(p_sCurrRole)) : JSON.stringify(p_sCurrRole)));
	}

	getUserRoleFromSession() {
		let currRole = sessionStorage.getItem(LOGGED_USER_ROLE);
		if (currRole) {
			currRole = (environment.production) ? window.atob(JSON.stringify(currRole)) : currRole;
			return JSON.parse(currRole);
		}
		return {};
	}

	setMenuCodeInSession(p_sMenuCode: string) {
		if (p_sMenuCode) {
			sessionStorage.setItem(SELECTD_MENU_CODE, ((environment.production) ? window.btoa(p_sMenuCode) : p_sMenuCode));
		} else {
			sessionStorage.removeItem(SELECTD_MENU_CODE);
		}
	}

	getMenuCodeInSession() {
		const menuCode = sessionStorage.getItem(SELECTD_MENU_CODE) || "";
		if (menuCode && environment.production) {
			return window.atob(menuCode)
		}
		return menuCode;
	}

	setMenuIdInSession(p_sMenuId: string) {
		if (p_sMenuId) {
			sessionStorage.setItem(SELECTD_MENU_ID, ((environment.production) ? window.btoa(p_sMenuId) : p_sMenuId));
		} else {
			sessionStorage.removeItem(SELECTD_MENU_ID);
		}
	}

	getMenuIdInSession() {
		const menuId = sessionStorage.getItem(SELECTD_MENU_ID) || "";
		if (menuId && environment.production) {
			return window.atob(menuId);
		}
		return menuId
	}

	getFunctionalRights(p_sFunctionalRightsList: Array<{ [key: string]: any }>) {
		return new Observable((observer) => {
			if (p_sFunctionalRightsList) {
				const menuCode = this.getMenuCodeInSession();
				this.store.select(getLoginData).subscribe((p_oLoginData) => {
					const _userRolesList: Array<{ [key: string]: any }> = _.get(p_oLoginData, "roles", []);

					this.store.select(getCurrentRoleData).subscribe((p_sCurrRole) => {
						const currRoleID: string = _.get(p_sCurrRole, "id", "");

						const currentRoleObj:any = _.find(_userRolesList, function (item:any) {
							return item?.roleId === currRoleID
						})

						const currentMenuRights:any = _.find(((currentRoleObj && currentRoleObj?.menuRights) || []), function (item) {
							return item.menuCode === menuCode
						});

						p_sFunctionalRightsList.forEach((el:any) => {
							const currentSelectedRights = _.find(((currentMenuRights && currentMenuRights.selectedRights) || []), function (item) {
								return item.rightCode === el?.rightsName
							});
							if (!_.isEmpty(currentSelectedRights)) {
								el["rightsFlag"] = 1;
							}
						})
						observer.next(p_sFunctionalRightsList);
					});
				});
			}
		});
	}

	transformData(inputData: any, keyMapping: any): any {
		const outputData: any = {};
		Object.keys(keyMapping).forEach(outputKey => {
			const inputKey = keyMapping[outputKey];
			if (inputData[inputKey]) {
				outputData[outputKey] = { [`${outputKey}Id`]: inputData[inputKey] };
			}
		});

		return outputData;
	}
	// Function to clean spaces in object properties
	cleanSpacesInObject(input: any): any {
		const cleanedObject: any = {};
		for (const key in input) {
			if (input.hasOwnProperty(key)) {
				cleanedObject[key] = typeof input[key] === 'string' ? input[key].trim().replace(/\s+/g, ' ') : input[key];
			}
		}
		return cleanedObject;
	}

	noWhitespaceValidator(control: any) {
		const isWhitespace = (control.value || '').trim().length === 0;
		const isValid = !isWhitespace;
		return isValid ? null : { 'whitespace': true };
	}

	getSelectedRole(menuCode?: string) {
		this.store.select(getLoginData).subscribe((p_oLoginData) => {
			this.loginData = p_oLoginData;
		  });
         return this.loginData;		
	}

	// Function to filter selectedRights based on menuCode
	filterRightsByMenuCode(menuCode: string): any[] {
		return this.selectedRights.filter((right: any) => right.menuCode === menuCode);
	}

	getSelectedRight(menuCode: string) {
		const filteredRights = this.filterRightsByMenuCode(menuCode);
		if (filteredRights.length > 0) {
			const selectedMenuRight: any = filteredRights[0].selectedRights
			this.isView = selectedMenuRight.some((right: any) => right.rightCode === "RIGHT_CODE_VIEW");
			this.isDelete = selectedMenuRight.some((right: any) => right.rightCode === "RIGHT_CODE_DELETE");
			this.isEdit = selectedMenuRight.some((right: any) => right.rightCode === "RIGHT_CODE_EDIT");
			this.isCreate = selectedMenuRight.some((right: any) => right.rightCode === "RIGHT_CODE_CREATE");
		}
	}

	noDoubleZerosAtStartValidator(): ValidatorFn {
		const pattern = /^(?!00)/;
		return (control: AbstractControl): { [key: string]: any } | null => {
			const value = control.value;
			if (!pattern.test(value)) {
				return { 'noDoubleZerosAtStart': true };
			}
			return null;
		};
	}

	noTripleZerosAtStartValidator(): ValidatorFn {
		const pattern = /^(?!000)/;
		return (control: AbstractControl): { [key: string]: any } | null => {
			const value = control.value;
			if (!pattern.test(value)) {
				return { 'noTripleZerosAtStart': true };
			}
			return null;
		};
	}

	convertArrToString = (p_aList: Array<{ [key: string]: any }>, p_sBindID: string) => {
		if (p_aList && p_aList.length) {
			let allIDsList = _.map(p_aList, p_sBindID);
			if (allIDsList && allIDsList.length) { return _.toString(allIDsList); }
		}
		return "";
	}

	setSelectedData = (p_sType: string, p_aSelectedArr: Array<{ [key: string]: any }>, p_oItem: any, p_sBindID: string) => {
		switch (p_sType) {
			case MUTLTI_SELECT_DD_ACTION.SINGLE_ITEM_SELECT:
				p_aSelectedArr.push(p_oItem)
				break;
			case MUTLTI_SELECT_DD_ACTION.SINGLE_ITEM_DESLECT:
				p_aSelectedArr = p_aSelectedArr.filter((el) => {
					return el[p_sBindID] !== p_oItem[p_sBindID]
				})
				break;
			case MUTLTI_SELECT_DD_ACTION.SELECT_ALL_ITEM:
				p_aSelectedArr = _.clone(p_oItem);
				break;
			case MUTLTI_SELECT_DD_ACTION.DESELECT_ALL_ITEM:
				p_aSelectedArr = [];
				break;
			default:
				break;
		}
		return p_aSelectedArr;
	}

	generatePDF(elementId: string, fileName: string) {
		const element: HTMLElement | null = document.getElementById(elementId);
		if (!element) {
			console.error("Element not found");
			return;
		}

		// html2canvas(element).then((canvas) => {
		// 	const imgData = canvas.toDataURL('image/png');
		// 	const pdf = new jspdf.jsPDF();
		// 	const imgWidth = 210;
		// 	const imgHeight = canvas.height * imgWidth / canvas.width;
		// 	pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
		// 	pdf.save(fileName + '.pdf');
		// });
	}

	downloadPdf(elementId: string, name: string, orientation: string) {
		const element: HTMLElement | null = document.getElementById(elementId);
		let opt = {
			margin: 0,
			filename: name,
			image: { type: 'jpeg', quality: 0.98 },
			html2canvas: { scale: 2 },
			jsPDF: { unit: 'in', format: 'letter', orientation: orientation }
		};
		//html2pdf().set(opt).from(element).save();
	}

	// decrypt(encryptedText: string): string {
	// 	const decodedKey = CryptoJS.enc.Base64.parse(this.secreatKey);
	// 	const bytes = CryptoJS.AES.decrypt(encryptedText, decodedKey, {
	// 		mode: CryptoJS.mode.ECB,
	// 		padding: CryptoJS.pad.Pkcs7
	// 	});
	// 	return bytes.toString(CryptoJS.enc.Utf8);
	// }

	// encrypt(data: any): string {
	// 	const jsonString = typeof data === 'string' ? data : JSON.stringify(data);
	// 	const parsedKey = CryptoJS.enc.Base64.parse(this.secreatKey);
	// 	const encrypted = CryptoJS.AES.encrypt(jsonString, parsedKey, {
	// 		mode: CryptoJS.mode.ECB,
	// 		padding: CryptoJS.pad.Pkcs7
	// 	});
	// 	return encrypted.toString();
	// }


	getLimitedText(text: string, maxCharacter?: number): string {
		const maxLength = maxCharacter || 100;
		if (text && text.length > maxLength) {
			return text.substring(0, maxLength) + '...'; // Display ellipsis for truncated text
		} else {
			return text;
		}
	}

	replaceCommasWithNumbers(input: string): string {
		const items = input.split(',');
		let result = '';
		items.forEach((item, index) => {
			result += `<br> <strong>${index + 1}. </strong> ${item} `;
		});
		return result.trim();
	}

	checkResponseType(response: any) {
		
		if (Array.isArray(response)) {
		   return _.get(response, "data.content", (_.get(response, "data", null)))
		 // return response;
		} else if (response !== null && typeof response === 'object') {
			if(typeof response.data === 'string'){
				// let decriptedData = this.decrypt(response.data);
				//let decriptedData = this.decrypt(_.get(response, "data.content", (_.get(response, "data", null))));

				//const decryptedData:any = JSON.parse(decriptedData);
				//return decryptedData;
			}else {
				// return response.data;
				 return _.get(response, "data.content", (_.get(response, "data", null)))
			}
		} else {
			// return response;
			return _.has(response, "data") 
			? _.get(response, "data.content", _.get(response, "data", null)) 
			: response;
		}
	}


	formatDateTimeToddMMyyyy(dateStr: string): string {
		const date = new Date(dateStr);
		const pad = (n: number) => n < 10 ? '0' + n : n;
		const dd = pad(date.getDate());
		const mm = pad(date.getMonth() + 1); // Months are 0-based
		const yyyy = date.getFullYear();
		const hh = pad(date.getHours());
		const min = pad(date.getMinutes());
		const ss = pad(date.getSeconds());
		return `${dd}-${mm}-${yyyy} ${hh}:${min}`;
	  }


	getEncryptedOrDecryptedData(data: any, isEncrypted: boolean): any {
		let respData;
		if (isEncrypted) {
		  respData = JSON.parse(this.checkResponseType(data));
		  console.log(respData)
		  return respData?.data;
		} else {
		  respData = this.checkResponseType(data);
		  return respData;
		}
	  }


	// checkRoleForEdit(roles: any[], roleCode:string): boolean {
	// 	// Check if any role in the roles array has the roleCode "DISTRICT_JUDICIARY_ADMIN"
	// 	return roles.some(role => role.roleCode === roleCode);
	//   }

}
