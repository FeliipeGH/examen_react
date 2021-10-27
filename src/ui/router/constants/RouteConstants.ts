export class RouteConstants {
    static MAIN_PAGE: string = "/";
    static AUTH_PAGE: string = "/auth";
    static LOGIN_PAGE: string = `${this.AUTH_PAGE}/login`;

    static DASHBOARD_ROOT: string = "/dashboard";
    static DASHBOARD_MAIN: string = `${this.DASHBOARD_ROOT}/main`;

    static EMPLOYEES_PAGE: string = `${this.DASHBOARD_ROOT}/employees`;
    static UPLOAD_PAGE: string = `${this.DASHBOARD_ROOT}/upload`;
}