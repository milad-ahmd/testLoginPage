export class Memory {
  public static userId: string;
  public static agencyId: string;
  public static url: string = 'https://api.tsetab.com/api';
  public static company_name: string;
  public static members: Array<any> = [];
  public static loading: boolean = false;


  public static getToken() {
    let token = localStorage.getItem('porpaa.token');
    return token;
  }
  public static clearToken() {
    localStorage.removeItem('porpaa.token');
  }
  public static setToken(token:string) {
    localStorage.setItem('porpaa.token',token);
  }


  public static getUrl() {
    return this.url;
  }

  public static getUserIdStorage() {
    let id = localStorage.getItem('porpaa.user_id');
    return id;
  }

  public static setUserId(userId: string) {
    this.userId = userId;
  }

  public static setLoading(loading) {
    this.loading = loading;
  }


}
