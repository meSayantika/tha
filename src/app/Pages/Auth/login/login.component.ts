import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  v:any=0;
  message='';
  stor:any=[];
com:any=[];
comma:any;
show_alert:boolean=true;
   constructor(private dataServe:DataService,private router:Router,private msg:MessageService) { }
  logData:any;
  x:any;
  check_activity:any=[];
  confirm_modal:any;
  res=''
  encrypted_res_id:any;
  ngOnInit(): void {
    localStorage.clear();
    localStorage.setItem('isloggedin','false');
    this.confirm_modal=document.getElementById('change_pass_modal');
    this.confirm_modal.style.display='none'

   
  }
  // function for sending the login credentials
  logSubmit(v:any){
    this.dataServe.global_service(1,'/login',v).subscribe(data=>{
      console.log(data);
      
      this.logData=data;
      // console.log(this.logData.msg.restaurant_id);
      if(this.logData.suc>0){
      localStorage.setItem('Restaurant_id',this.logData.msg.restaurant_id);
      localStorage.setItem('Email',this.logData.msg.email_id)
      // alert("hii")

      localStorage.setItem('Restaurant_name',this.logData.msg.restaurant_name);
      localStorage.setItem('Restaurant_email',this.logData.msg.email_id);
      // this.router.navigate(['/menu_setup']).then(()=>{
      //   location.reload();
      //   });
         this.dataServe.global_service(0,'/check_active_status',`id=${this.logData.msg.restaurant_id}`).subscribe(data=>{
           console.log(data);
           this.check_activity=data;
           if(this.check_activity.msg[0].approval_flag=='A'){  
            // this.router.navigate(['/hotel/dashboard',btoa(this.logData.msg.restaurant_id)]);
            this.router.navigate(['/hotel/home']);
            localStorage.setItem('hotel_flag','A')
           }
           else{
         
                  // this.router.navigate(['/hotel/menu_setup']).then(()=>{
                  //   location.reload();
                  //   });
            this.router.navigate(['/hotel/home',btoa(this.check_activity.msg.restaurant_id)]);
            localStorage.setItem('hotel_flag','U')



            
              }
            })
        }
        else{
         this.msg.globalError('Please check your credentials!')
        }
    

    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  // snackbar
 
  // route to change password on clicking on the link
  go_to_change()
  {
    this.router.navigate(['/changepass'])
  }
  // shows up when there is any error while logging in
 

}
