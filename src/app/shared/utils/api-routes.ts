import { environment } from "src/environments/environment"

export class ApiRoutes {

    public static BASE_URL = environment.hostUrl + '/admin';

    // AUTHENTICATION MODULE ROUTES
    public static ADMIN_LOGIN = this.BASE_URL + '/auth/login-web'
    public static GET_ADMIN = this.BASE_URL + '/auth'
    public static UPDATE_ADMIN = this.BASE_URL + '/auth'
    public static CHANGE_PASSWORD = this.BASE_URL + '/auth/changePassword-web'
    public static SEND_OTP_TO_EMAIL = this.BASE_URL + '/auth/sendOtpToEmail-web'
    public static VERIFY_OTP = this.BASE_URL + '/auth/verifyOtp-web'
    public static SET_NEW_PASSWORD = this.BASE_URL + '/auth/newPassword-web'


    // USERS MODULE ROUTES
    public static GET_ALL_USERS= this.BASE_URL + '/auth/newPassword-web'
    public static UPDATE_USER_STATUS= this.BASE_URL + '/auth/updateUserStatus-web'

}
