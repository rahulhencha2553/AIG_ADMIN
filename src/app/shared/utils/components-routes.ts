export class ComponentsRoutes {


  public static ADMIN_HOME = 'Admin';

  //Dashboard Components Routes
  public static DASHBOARD = 'Dashboard'

  /***************************************************************************************** */

  // User Component Routes
  public static USERS = 'Users';

  /*WITHOUT BASE URL*/
  public static USER_LIST = 'user-list';
  public static USER_TRANSACTION = 'user-transaction';
  public static USER_ADDRESS = 'user-address';
  public static USER_ANALYTICS = 'user-analytics';

  /*WITH BASE URL*/
  public static USER_LIST_BASE= this.USERS + '/' + this.USER_LIST;
  public static USER_TRANSACTION_BASE = this.USERS + '/' + this.USER_TRANSACTION;
  public static USER_ADDRESS_BASE = this.USERS + '/' + this.USER_ADDRESS;
  public static USER_ANALYTICS_BASE = this.USERS + '/' + this.USER_ANALYTICS;

  /***************************************************************************************** */

  //Verification Officer Components Routes
  public static VERIFICATION_OFFICER = 'Verification-Officer';

  /*WITHOUT BASE URL*/
  public static VERIFICATION_OFFICER_LIST= 'officer-list';
  public static VERI_OFFI_ADDRESS_VERIFICATION_REQ = 'address-verification-requests';

  /*WITH BASE URL*/
  public static VERIFICATION_OFFICER_LIST_BASE= this.VERIFICATION_OFFICER + '/' + this.VERIFICATION_OFFICER_LIST ;
  public static VERI_OFFI_ADDRESS_VERIFICATION_REQ_BASE = this.VERIFICATION_OFFICER + '/' + this.VERI_OFFI_ADDRESS_VERIFICATION_REQ;

  /***************************************************************************************** */

  //Verification Portal Components Routes
  public static VERIFICATION_PORTAL = 'Verification-Portal';

  
  /***************************************************************************************** */

  //Emergency Components  Routes
  public static EMERGENCY = 'Emergency';

  /*WITHOUT BASE URL*/
  public static EMERGENCY_REQUESTS = 'emergency-requests';
  public static LIST_OF_EMERGENCY_OPERATORS = 'emergency-operators';

  /*WITH BASE URL*/
  public static EMERGENCY_REQUESTS_BASE = this.EMERGENCY + '/' + this.EMERGENCY_REQUESTS;
  public static LIST_OF_EMERGENCY_OPERATORS_BASE = this.EMERGENCY + '/' + this.LIST_OF_EMERGENCY_OPERATORS;


  /***************************************************************************************** */

  //API Documentation Components Routes
  public static API_DOCUMENTATION = 'Api-Documentation';

  /*WITHOUT BASE URL*/
  public static API_DOC_USERS = 'users';
  public static API_DOC_PARTNERS = 'partners';
  public static API_DOC_PLANS = 'plans';
  public static API_DOC_ANALYTICS = 'analytics';

  /*WITH BASE URL*/
  public static API_DOC_USERS_BASE = this.API_DOCUMENTATION + '/' + this.API_DOC_USERS;
  public static API_DOC_PARTNERS_BASE = this.API_DOCUMENTATION + '/' + this.API_DOC_PARTNERS;
  public static API_DOC_PLANS_BASE = this.API_DOCUMENTATION + '/' + this.API_DOC_PLANS;
  public static API_DOC_ANALYTICS_BASE = this.API_DOCUMENTATION + '/' + this.API_DOC_ANALYTICS;


  /***************************************************************************************** */


}
