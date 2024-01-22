import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-get-otp',
  templateUrl: './get-otp.component.html',
  styleUrls: ['./get-otp.component.css']
})
export class GetOtpComponent {

  otpForm!:FormGroup;
  taskId:any;
  showLoader!: boolean;
  logindata:any
  userdatabyno:any
  userID:any;
  ID:any;
    constructor(private router: Router,private route:ActivatedRoute,
    private snackBar: MatSnackBar,
      private _of:FormBuilder ,private reg:RegisterService){
        this.taskId = route.snapshot.params["ID"];
        console.log("this is taskId value = "+ this.taskId);
      
      this.otpForm=this._of.group({
        mobileno:['',[ Validators.required,
          Validators.pattern("^[0-9]*$"),
          ]]
      })
   
      
        
     
    }
    get mobno(){  
      return this.otpForm.controls;  
    } 
    ngOnInit() {
     
    }
  nav(){
    this.router.navigate(['/verification'])
  }
  
  
  async sendOTP(){
  
    //need to handle error
    //1. if otp failed
    //2.if network issue.
    const data = this.otpForm.value;
   
    let datad= await this.getuserbymobileno()
  
    console.log(datad)
    if(this.userdatabyno){
      data.otp=this.userdatabyno.OTP
    }
   
    this.reg.sendsms(data).subscribe((res:any)=>{
  //if verfied success then savec mobileno to localstoragte.
  //after logged in success moved to home page
  // this.loaderService.display(true);
      console.log(res)
      if(res.status){
       
        this.snackBar.open(JSON.stringify(res.message));
        this.router.navigate(['/verification'])   
      }
      else{
        this.snackBar.open(JSON.stringify(res.message));
  
      }
      })
    }
  
  getuserbymobileno():Promise<any>{
   return this.reg.getbymobileno(this.otpForm.value.mobileno).toPromise()}
  
}
