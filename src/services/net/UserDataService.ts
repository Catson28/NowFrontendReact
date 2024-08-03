import http from "./base/http-common";
import IUserData from "../types/users.type";

class UserDataService {
  getAll() {
    return http.get<Array<IUserData>>("api/users/list/");
  }

  get(id: string) {
    return http.get<IUserData>(`api/users/read/${id}/`);
  }

  uploadImg(
    file: File,
    contentType: string,
    objectId: number,
    userId: number,
    onUploadProgress: any
  ) {
    let formData = new FormData();
    formData.append("Path", file);
    formData.append("content_type", contentType);
    formData.append("object_id", objectId.toString());
    formData.append("user_id", userId.toString());

    return http.post<any>("api/images/upload-image/user/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  // Additional Routes
  admin() {
    return http.get<any>(`admin/`);
  }

  customLogin(data: any) {
    return http.post<any>(`auth/login`, data);
  }

  tokenRefresh() {
    return http.post<any>(`auth/refresh/`);
  }

  protectedView() {
    return http.get<any>(`protected-view/`);
  }

  supportLogin(data: any) {
    return http.post<any>(`support/auth/login`, data);
  }

  supportTokenRefresh() {
    return http.post<any>(`support/auth/refresh/`);
  }

  supportProtectedView() {
    return http.get<any>(`support/protected-view/`);
  }

  patientLogin(data: any) {
    return http.post<any>(`patient/auth/login`, data);
  }

  patientTokenRefresh() {
    return http.post<any>(`patient/auth/refresh/`);
  }

  patientProtectedView() {
    return http.get<any>(`patient/protected-view/`);
  }

  adminLogin(data: any) {
    return http.post<any>(`admin/auth/login`, data);
  }

  adminTokenRefresh() {
    return http.post<any>(`admin/auth/refresh/`);
  }

  adminProtectedView() {
    return http.get<any>(`admin/protected-view/`);
  }

  staffLogin(data: any) {
    return http.post<any>(`staff/auth/login`, data);
  }

  staffTokenRefresh() {
    return http.post<any>(`staff/auth/refresh/`);
  }

  staffProtectedView() {
    return http.get<any>(`staff/protected-view/`);
  }

  logout() {
    return http.post<any>(`auth/logout/`);
  }

  async postUsers(data: IUserData) {
    // postUsers(data: IUserData) { // Sem a correcao anteriormente era assim
    // return http.post<IUserData>("users", data); // Sem a correcao anteriormente era assim
    /*
    
    */
    try {
      const response = await http.post<IUserData>("users", data);
      console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error("Error posting user data", error);
      throw error; // opcionalmente, você pode lançar o erro novamente para que ele possa ser tratado em outro lugar
    }
  }

  createPermissionForRole(data: any) {
    return http.post<any>(`create-permission-for-role/`, data);
  }

  assignPermissionToRole(data: any) {
    return http.post<any>(`assign-permission-to-role/`, data);
  }

  someView() {
    return http.get<any>(`someview`);
  }
}

// export default new UserDataService();
const UserDataServiceInstance = new UserDataService();
export default UserDataServiceInstance;
