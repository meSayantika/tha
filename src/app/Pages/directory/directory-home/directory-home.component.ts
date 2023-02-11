import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-directory-home',
  templateUrl: './directory-home.component.html',
  styleUrls: ['./directory-home.component.css']
})
export class DirectoryHomeComponent implements OnInit {
 getVenues:any
  getVenuesRest:any;
 getVenuesServe:any;
 msgData:any
 getEmData:any
 getvoiceData:any
 audFilePlay:any;
  audPath=new Audio();
  hotel_id: any;
  getAvatarData: any;
  id: any;
  spstockImg: any;
  pcaForm: any;
  guestRoomService:any
  constructor(public dialog: MatDialog,private msg:MessageService,private dataServe:DataService) { }

  ngOnInit() {
    this.getCat()
    this.getAvatar()
  }
  getCat(){
    
    this.dataServe.global_service(0,'/cust_menu_list',`hotel_id=1`).subscribe((data:any)=>{
      // console.log(data,this.category);
      console.log(data)
      this.getVenues=data;
      // if(this.category=='R'){
        this.getVenuesRest=this.getVenues.msg.restaurant
        this.guestRoomService=this.getVenues.msg.restaurant.filter((e:any)=>e.hotel_type=='S')[0]
      // }
      // else{
        this.getVenuesServe=this.getVenues.msg.service

      // }
      // this.mncdata=this.getVenues.msg[0].id; //to be changed
  
      // this.putdata(this.getVenues.msg);
    }
  ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  

}
open_popup_window(v:any){
  
      // console.log(this.mncdata,this.r_id)
      // window.open('https://custom.shoplocal-lagunabeach.com/#/'+'user/user_menu'+'/'+encodeURIComponent(btoa('1'))+'/'+encodeURIComponent(btoa(v)),'popup','width=400,height=500')
      window.open(environment.routeUrl+'user/user_menu'+'/'+encodeURIComponent(btoa('1'))+'/'+encodeURIComponent(btoa(v)),'popup','width=400,height=500')
      // window.open('http://localhost:4200/#/main/admin/adminlogin','popup','width=400,height=500')
      
    }
openMessageCenter(){
  this.dataServe.global_service(0,'/message_center',`hotel_id=1`).subscribe(data=>{
    console.log(data)
    this.msgData=data
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '250px',
      height: '600px',
        width: '350px',
        autoFocus: false,
      data: { flag: 'msgCenter', content:this.msgData.msg}
    });
    dialogRef.afterClosed().subscribe(result => {})
  // }

  },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
}
openEmergencyMessages(){
  this.dataServe.global_service(0,'/emergency_repo','').subscribe(data=>{
    console.log(data)
    this.getEmData=data;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '250px',
      height: '600px',
      width: '350px',
        autoFocus: false,
      data: { flag: 'emergencyMessage', content:this.getEmData.msg}
    });
    dialogRef.afterClosed().subscribe(result => {})
  })
}
openAbout(){
  this.dataServe.global_service(0,'/pc_avatar',`hotel_id=1`).subscribe(data=>{
    console.log(data)
    this.getAvatarData=data;
    // this.id=this.getAvatarData.msg[0]?.id
    this.spstockImg=environment.api_url+'/'+this.getAvatarData.msg[0]?.img_path
  this.dataServe.global_service(0,'/pc_voice',`hotel_id=1&srv_res_id=0`).subscribe(data=>{
    console.log(data)
    this.getvoiceData=data;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '250px',
      height: '600px',
      width: '650px',
        autoFocus: false,
      data: { flag: 'aboutPCA', content:{data:this.getvoiceData.msg[0],image:this.spstockImg}}
    });
    dialogRef.afterClosed().subscribe(result => {})
  })
})

}
getAvatar(){
  
  this.dataServe.global_service(0,'/pc_avatar',`hotel_id=1`).subscribe(data=>{
    console.log(data)
    this.getAvatarData=data;
    // this.id=this.getAvatarData.msg[0]?.id
    this.spstockImg=environment.api_url+'/'+this.getAvatarData.msg[0]?.img_path
  
  },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
    )
}

}



