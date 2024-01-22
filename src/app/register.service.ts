import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl:any=environment.apiurl;
  constructor(private http:HttpClient) { }
  signup(data:any):Observable<any>{
    return this.http.post(this.baseUrl+`members`,data)
  }
  getsignup(data:any):Observable<any>{
    return this.http.get(this.baseUrl+`members`,data)
  }
  sendsms(data:any):Observable<any>{
    return this.http.post(this.baseUrl+`sendsms`,data)
  }
  
  // verifyOTP(otp:string):Observable<any>{
  //   return this.http.post(this.baseUrl+`sendsms`,{otp})
  // }
  signin(data:any):Observable<any>{
    return this.http.post(`https://172.188.80.209:8443/auth/login`,data)
  }
  //dummy
 getProduct(data:any):Observable<any>{
    return this.http.post(`https://api.publicapis.org/entries`,data)
  }
  uploadFile(file: File, userId: string, fileType: string):Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userid', userId);
    formData.append('filetype', fileType);

    return this.http.post<any>(this.baseUrl+'upload/'+fileType, formData);
  }
  // sendOtp(data:any):Observable<any>{
    
  //   return this.http.post(`https://2factor.in/API/V1/${this.api_key}/SMS/+91${data}/AUTOGEN`,data,this.httpOptions);
  // }

  getbymobileno(mobileno:any){
    return this.http.get(this.baseUrl+`getbymobileno/`+mobileno);
  }
}
