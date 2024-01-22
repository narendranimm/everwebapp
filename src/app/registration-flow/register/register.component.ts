import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  showLoader!: boolean;
  message:any;
  UserID:any;
  duration:any
  constructor(
    private router: Router,private _snackBar: MatSnackBar,
    public dialog: MatDialog,private snackBar: MatSnackBar,  private route: ActivatedRoute, 
    private _rf: FormBuilder,  private reg: RegisterService, 
 ) {
   
    this.regForm = this._rf.group({
      FirstName: ['', Validators.compose([Validators.required,])],
      LastName: ['', Validators.compose([Validators.required])],
      EmailID: ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),Validators.email])],
      country: '+91',
      MobileNo: ['', [Validators.required,Validators.pattern("[0-9 ]{10}")]],
      DateofBirth: ['', Validators.compose([Validators.required])],
      Password: ['12345', Validators.compose([Validators.required])],
      MemberType: '1000',
      OTP: '146789',
      IsOTPSent: 'true',
      OTPSentDate: '2023-09-06T14:20:44.670Z',
      IsResendOTP: 'true',
      IsEmailVerified: 'true',
      IsOTPVerified: 'true',
      CreatedOn: '2023-09-06T01:50:47.117Z',
      Token: 'null',
      ParentID: '1000',
      IsRegisteredByMobile: 'true',
      ProfilePhoto:"test.png",
      userId: 0,
      Gender: 1000
    })
 
  }


  regForm!: FormGroup;
  data:any
  user: any;
  loggedIn: any;
  ngOnInit() {
  

   
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  // onSubmit(){
  //   if(this.regForm.valid){
  //  console.log(this.regForm.value)
  //   }
  // }

  register() {
  
    // this.regForm.value.ProfilePhoto.s
    const picname = this.regForm.get('FirstName')!.value +'_'+ this.regForm.get('LastName')!.value;
   
    const data = this.regForm.value;
    if(!this.regForm.valid) {
   

      this.regForm.markAllAsTouched();
      this.snackBar.open(" All fields are required ");
      return;
    }
 
    this.reg.signup(data).subscribe(
      (res: any) => {
        if(res.status == 'true'){
       
          console.log(res)
          this.data = res;
          this.snackBar.open(res.message.toString());
          this.router.navigate(['/login'])
        }else{
         

          this.snackBar.open(JSON.stringify(res.message));

          
        }
     
    })
    
   
  }
 

 
 
  submit() {

    if (this.regForm.valid) {
      // this.showLoader();

    
    }
    else {
      this.regForm.markAllAsTouched();
    }
  }
}
