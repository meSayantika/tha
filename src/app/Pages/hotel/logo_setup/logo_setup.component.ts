import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { Observable, Observer } from 'rxjs';
// import { url_set } from 'src/app/globalvar'; 
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
import { environment } from 'src/environments/environment';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
@Component({
  selector: 'app-logo_setup',
  templateUrl: './logo_setup.component.html',
  styleUrls: ['./logo_setup.component.css']
})
export class Logo_setupComponent implements OnInit {
  url_reg=environment.api_url+'/';

  constructor(private router:Router,private Logo:DataService,private dataServe:DataService, private msg:MessageService, private dialog:MatDialog) { }
  name:any=localStorage.getItem('Restaurant_name');
  base64Image: any;
  logo:any;
  clearvalue:any;
  log:any=[];
  log_url:any='';
  value_logo_url=false;
  x:any;
  check:any=[];
  break_button:boolean=false;
  logo_preview:boolean=true;
  img_logo:any;
  img_showing=environment.api_url;
  // resid=10;
  common:any;
  common_image:any;
  currentInput:any;
  resid:any=localStorage.getItem('Restaurant_id');

  //Image Cropper
 scale = 1;
 transform: ImageTransform = {};
 showCropper = false;
 hide=false;
 valu = true;
 Zoomout = true;
 ZoomIn = true;
 modal = true;
 croppedImage:any ;
 Modal:any;
 common_for_all:any;
 common_value:any;
 logo_fileName:any;
 logo_design:any;
//  width:any=200;
//  height:any=130;
width=1800;
 height=2560;
 common_size_check:any;
 show_toast:boolean=true;
 getVenues:any;
 venueid:any;
 serviceId:any;
 res_bar_flag:any
  ngOnInit(): void {
    this.dataServe.global_service(0,'/cust_menu_list',`hotel_id=${this.resid}`).subscribe((data:any)=>{
      console.log(data);
      this.getVenues=data;
      // this.putdata(this.getVenues.msg);
    })
              //For Checking approval flag is on or not
              this.dataServe.global_service(0,'/check_activity',`id=${this.resid}`).subscribe(data=>{
                console.log(data);
                this.check=data;
                if(this.check.msg[0].approval_flag=='A'){
                  this.show_toast=true;
              
                }
                else{
              
                   this.show_toast=false;
                  this.break_button=true;
                  this.value_logo_url=true;
              
                }
              }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

              )

    console.log( this.value_logo_url);




  }
  open_venue(id:any,flag:any){
    // alert(id);
    // this.venueid='';
    this.venueid=id;
    this.serviceId=id;
    this.res_bar_flag=flag
    console.log(this.venueid)
    this.img_logo='';
    this.log_url='';
    this.logo_preview=true
    if(this.venueid){
      var menu_id = '',
  venue = this.venueid > 0 ? '&venue_id='+this.venueid : '';
  // return this.http.get(url_set.api_url+'/menu_setup?id='+res_id + '&menu_id=' + menu_id + venue)
   
  // this.dataServe.global_service(0,'/menu_setup',`id=${this.resid}&menu_id=${menu_id}${venue}`).subscribe(data=>{
    this.dataServe.global_service(0,'/get_menu_service_dt',`hotel_id=${this.resid}&flag=${this.res_bar_flag}&srv_res_id=${this.serviceId}`).subscribe(data=>{
     
    console.log(data);
       this.log=data;
       if(this.log.logo_dt.length!=0){

       for(let i=0;i<this.log.logo_dt.length;i++){
          if(this.log.logo_dt[i].logo_path!=''){
           this.logo_preview=false;
           this.img_logo=this.img_showing+'/'+this.log.logo_dt[i].logo_path;
           this.logo=this.img_showing+'/'+this.log.logo_dt[i].logo_path;
          //  this.logo_design=document.getElementById('myfile');
           this.logo_fileName=this.log.logo_dt[i].logo_path;

          this.currentInput='1 file';
          //  console.log(this.logo_design);
         }
         if(this.log.logo_dt[i].logo_url!=null){

         this.logo=this.url_reg + this.log.logo_dt[i].logo_path;
         this.log_url=this.log.logo_dt[i].logo_url;
        //  this.value_logo_url=false;

         }
         else {
        //  this.value_logo_url=true;
         this.log_url='';
         }
       }


      }



    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

    )
  }
    // this.dataServe.get_venue_menu(this.resid, null, id).subscribe(data=>{
    //   console.log(data);
    //   this.getMenus=data;
    //   this.getMenus=this.getMenus.msg
    //   for(let i=0;i<this.getMenus.length;i++){
    //     if(i!=pos){
    //       this.posDiv=document.getElementById('venue'+i);
    //       this.posDiv.className="";
    //       this.posDiv.style.background ='#f1f1f1';
    //       this.posDiv.style.color = 'black';  
    //     }
    //     else{
    //       this.posDiv=document.getElementById('venue'+i);
    //       this.posDiv.className = 'active  tabcontent m-1';
  
    //     }
    //   }
  
    // })
  }
  // move to menudata page on successful update of logo
  goto_MenuDatapage(e:any){
    console.log(e,this.logo,this.resid,this.logo_fileName);
    const formdata=new FormData();
    formdata.append('logo',e);
    formdata.append('logo_img',this.logo);
    formdata.append('hotel_id',this.resid);
    formdata.append('restaurant_name',this.name);
    formdata.append('filename',this.logo_fileName);
    formdata.append('venue_id',this.venueid);
    formdata.append('srv_res_flag',this.res_bar_flag)
    formdata.append('srv_res_id',this.serviceId)
   this.Logo.global_service(1,'/logo',formdata).subscribe((data:any)=>{
     console.log(data);
     if(data.suc==1){
      this.msg.successMsg("SS")
     }
     else{
        this.msg.errorMsg('ES')
     }
   }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
   
   )

  }
  // change event triggered on selecting a particular image
  selectimage(event:any){
   if(event.target.files[0].size>2097152 ){
   this.common_size_check=document.getElementById('myfile');
   this.common_size_check.value='';
   this.msg.globalWarning('Please provide valid file format within given size');
   console.log("asdad");
  //  this.value_logo_url=true;
   }
   else{

   if(event.target.files.length!=0){
 this.logo_fileName=event.target.files[0].name;
    // this.logo=event.target.files[0];
    this.common_image=event;
    this.common=document.getElementById('id01');
 this.common.style.display='block';

    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.img_logo = reader.result as string;
    //  }
    // reader.readAsDataURL(this.logo)
    // this.logo_preview=false;
   }
   else{
    this.logo_preview=true;

   }

  }

 }
//  snackbar
openDialog(v:any){
  const dialogRef = this.dialog.open(DialogBoxComponent, {
    // width: '250px',
    data: { flag: 'imgPrev', content: v }
  });
}
checkvalidity(event:any){
  if(event.target.value!=''){
    // this.value_logo_url=false;
    this.log_url=event.target.value;

  }
  else{
    // this.value_logo_url=true;

  }
}
// delete the chosen photo
deletephoto(e:any){
  this.logo_preview=true;
  this.common=document.getElementById('myfile');
  this.common.value=null;
}

//For file size greater than 2mb

//Image Cropper

zoomOut() {
  this.scale -= .1;
  this.transform = {
    ...this.transform,
    scale: this.scale
  };
}

zoomIn() {
  this.scale += .1;
  this.transform = {
    ...this.transform,
    scale: this.scale
  };
}
imageLoaded() {
  console.log("image loaded")
  this.showCropper = true;
  this.modal = false;
  this.hide = false;
  this.valu = false;
  // this.Zoomout = false;
  // this.ZoomIn = false;
}
imageCropped(event: ImageCroppedEvent) {
  console.log('imagecropped');
  console.log("width:" + event.width);
  console.log("height:" + event.height)
  this.croppedImage = event.base64;
  console.log(this.croppedImage);
}
cropperReady(sourceImageDimensions: Dimensions) {
 console.log('Cropper ready', sourceImageDimensions);
  console.log("cropper ready CROPPED IMAGE:" + this.croppedImage);
}
loadImageFailed() {
  console.log('Load failed');
}
// clicking on save
click_it(e:any){
  // this.cover_change=true;
  this.common_for_all=document.getElementById('id01');
  this.common_for_all.style.display='none';
    this.valu = true;
    this.logo_preview=false;
    this.logo=this.croppedImage;
    this.img_logo=this.croppedImage;
    const base64 = this.croppedImage;
  const imageName = "logo_name";
  const imageBlob = this.dataURItoBlob( this.croppedImage);
  const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
  console.log({imageFile, imageBlob});
  this.logo=imageFile;
   console.log(this.logo);

}
dataURItoBlob(dataURI:any) {
  var byteString = atob(dataURI.toString().split(',')[1]);

      
      const array=[];
   
        for (var i = 0; i < byteString.length; i++) {
      
            array.push(byteString.charCodeAt(i));
        }
        
        return new Blob([new Uint8Array(array)],
        {
          type:'image/png'
        },
        );
}
// closing the modal after cropping
close_it(){
  this.valu=true;
  this.logo_preview=true;
    this.logo='';
    this.img_logo='';
    this.common_for_all=document.getElementById('myfile');
    this.common_for_all.value=''
  this.common_for_all=document.getElementById('id01');
  this.common_for_all.style.display='none';



}

openmodal(){
 this.common=document.getElementById('id01');
 this.common.style.display='block';
}
}
