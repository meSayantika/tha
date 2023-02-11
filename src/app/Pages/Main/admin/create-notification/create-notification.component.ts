import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/Services/data.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'src/app/Services/message.service';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.css']
})
export class CreateNotificationComponent implements OnInit {
  msgForm!: FormGroup;
  hide=false;
  scale = 1;

  img_cover: any;
  crop_width:any;
  crop_height:any;
  showCropper = false;
  transform: ImageTransform = {};
  Zoomout = true;
  spstockImg:any;
  ZoomIn = true;
  modal = true;
  croppedImage:any ;
  Modal:any;
  img_name:any;

  type=''
  msg_time=''
  time_period=''
  aud=''
  openstockimages:any
  st_img:any=[];
  category_name:any=[];
  apiurlset=environment.api_url+'/';
  imgcat:any;
  common_for_special_menu:any;
  previous_id:any;
  stockImg1:any;
  image_getelement:any
  see_photo:any;
  hotel_id:any;
  id:any;
  msgCenterData:any;
  getmsgData:any
  el:any
  valu = true;
  preview_for_section:any
  stock_file1: any;
  stockImageName: any;
  selectedVIPs:any
  selectedAudience:any
  bitly_url=''
  getVenues:any
  bitlyData:any;
  url2:any
  constructor(public dialog: MatDialog,private activatedRoute:ActivatedRoute,private msg:MessageService, private router: Router,private dataServe:DataService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.hotel_id=this.activatedRoute.snapshot.params['hotel_id'];
    this.hotel_id=atob(this.hotel_id);
    this.id=this.activatedRoute.snapshot.params['id'],
    this.id=atob(this.id)
    this.getStockimageonselectcategory('')
    this.msgForm=this.formBuilder.group({
      msg_type:[''],
      audience:[''],
      language:[''],
      link:[''],
      msg_img:[''],
      gallery:[''],
      msg_body:[''],
      msg_title:[''],
      msg_sub_title:[''],
      trans_msg_body:[''],
      trans_msg_title:[''],
      trans_msg_sub_title:[''],
      dept_link:[''],
      serv_link:[''],
      send_msg:[''],
      send_msg_from:[''],
      send_msg_to:[''],
      fire_msg:[''],
      once_dt:[''],
      once_time:[''],
      daily_time:[''],
      weekly_day:[''],
      weekly_time:[''],
      monthly_date:[''],
      monthly_time:[''],
      save_message:[''],
      bitlyUrl:['']
      // dept_name:[''],
      // dept_mng_name:[''],
      // dept_phone:[''],
      // dept_email:[''],
      // dept_language:[''],
      // dept_subject_line:[''],
      // dept_text:[''],
      // mon:[''],
      // tue:[''],
      // wed:[''],
      // thu:[''],
      // fri:[''],
      // sat:[''],
      // sun:[''],
      // mon_off:[''],
      // tue_off:[''],
      // wed_off:[''],
      // thu_off:[''],
      // fri_off:[''],
      // sat_off:[''],
      // sun_off:[''],
      // mon_start_time:[''],
      // tue_start_time:[''],
      // wed_start_time:[''],
      // thu_start_time:[''],
      // fri_start_time:[''],
      // sat_start_time:[''],
      // sun_start_time:[''],
      // mon_end_time:[''],
      // tue_end_time:[''],
      // wed_end_time:[''],
      // thu_end_time:[''],
      // fri_end_time:[''],
      // sat_end_time:[''],
      // sun_end_time:[''],
      // schedule:[],
      // date_time:[],
      // extend:[]
    })
    this.getCategories()
    if(this.id!='0')
     this.getMessage()
    this.dataServe.global_service(0,'/message_center',`id=${this.id}`).subscribe(data=>{
      console.log(data)
      this.selectedAudience=data;
      this.selectedAudience=this.selectedAudience.msg[0].audience_dt

    })
    this.getService()
  }
  openstockmodal(){
    this.openstockimages=document.getElementById('id02');
    this.openstockimages.style.display='block'
  }
  getCategories(){
    this.dataServe.global_service(0,'/category_list','').subscribe(data=>{
      console.log(data);
      this.category_name=data;
      this.category_name=this.category_name.msg;
    }
  ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  }
  // display stock images based on the category
  getStockimageonselectcategory(cat_id:any){
    //  For getting Image on load
    this.dataServe.global_service(0,'/stock_img',`cat_id=${cat_id}`).subscribe(data=>{
      console.log(data);
      this.st_img=data;
      this.st_img=this.st_img.msg;
    })
  }
  get m(){
    return this.msgForm.controls;
  }
  getService(){
    this.dataServe.global_service(0,'/cust_menu_list',`hotel_id=1`).subscribe((data:any)=>{
      // console.log(data,this.category);
      console.log(data)
      this.getVenues=data;
      this.getVenues=this.getVenues.msg.service
    })
  }
  selectedimage(index:any,image_path:any,catg:any,length:any){

    this.previous_id=catg;
    this.imgcat=catg;
    this.stockImg1=image_path;
      this.spstockImg=environment.api_url+'/stock/'+ image_path;
    this.common_for_special_menu=image_path;
    for(let i=0;i<length;i++){
      this.image_getelement=document.getElementById('image_'+i);
      this.image_getelement.style.border='';
    }
    this.image_getelement=document.getElementById('image_'+index);
   this.image_getelement.style.border='3px solid #00477e';
  }
  save_it(e:any){
    if(e=='close'){
      this.see_photo=true;
      this.common_for_special_menu='';
      // this.previous_id='';
      this.imgcat=''
   }
    else{
      this.see_photo=false;
      
      this.common_for_special_menu=environment.api_url+'/stock/'+this.common_for_special_menu;
      this.spstockImg= this.common_for_special_menu;
      // this.msgForm.controls.msg_img.setValue(this.stockImg1)
    }
    this.openstockimages=document.getElementById('id02');
    this.openstockimages.style.display='none'
  }
  sendMessage(){
    console.log(this.msgForm.controls)
    console.log(this.selectedVIPs)
      const formData = new FormData()
      formData.append("id",this.id,)
      formData.append("hotel_id",this.hotel_id)
      formData.append("message_center_type",this.m.msg_type.value)
      formData.append("audience",this.m.audience.value)
      formData.append("user_dt",JSON.stringify(this.selectedVIPs))
      formData.append("language",this.m.language.value)
      formData.append("img_path",this.stockImg1)
      formData.append("img",this.img_cover)
      formData.append("msg_title",this.m.msg_title.value)
      formData.append("msg_subtitle",this.m.msg_sub_title.value)
      formData.append("msg_body",this.m.msg_body.value)
      formData.append("dept_link",this.m.dept_link.value)
      formData.append("msg_snt_frm_time",this.m.send_msg_from.value)
      formData.append("msg_snt_to_time",this.m.send_msg_to.value)
      formData.append("msg_snt_type",this.m.fire_msg.value)
      formData.append("msg_snt_dt",this.m.fire_msg.value=='O'?this.m.once_dt.value:this.m.monthly_date.value)
      formData.append("msg_snt_day",this.m.weekly_day.value)
      formData.append("msg_snt_time",this.m.fire_msg.value=='O'?this.m.once_time.value:(this.m.fire_msg.value=='W'?this.m.weekly_time.value:(this.m.fire_msg.value=='M'?this.m.monthly_time.value:this.m.daily_time.value)))
      formData.append("time_period_msg",this.m.send_msg.value)
      formData.append("msg_lifetime",this.m.save_message.value)
      formData.append("user","admin@gmail.com")
      console.log(formData.getAll("user_dt"))
      debugger;
     this.dataServe.global_service(1,'/message_center',formData).subscribe(data=>{
      console.log(data)
      this.msgCenterData=data;
      if(this.msgCenterData.suc>0){
        if(this.id=='0')
        this.msg.successMsg('SS')
        else
        this.msg.successMsg('SU')
      }
       
      else{
        if(this.id=='0')
        this.msg.errorMsg('ES')
        else
        this.msg.errorMsg('EU')
      }
       
      } ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
       )
  }
  getMessage(){
    this.dataServe.global_service(0,'/message_center',`hotel_id=${this.hotel_id}&id=${this.id}`).subscribe(data=>{console.log(data)
    this.getmsgData=data;
    this.msg_time=this.getmsgData.msg[0].msg_snt_type
    this.spstockImg=this.apiurlset+this.getmsgData.msg[0].img_path
    this.stockImg1=this.getmsgData.msg[0].img_path
    this.aud=this.getmsgData.msg[0].audience
    console.log(this.stockImg1)
    this.msgForm.patchValue({
      audience:+this.getmsgData.msg[0].audience.trim(),
      language:this.getmsgData.msg[0].language,
      msg_type:this.getmsgData.msg[0].message_center_type,
      msg_title:this.getmsgData.msg[0].msg_title,
      msg_sub_title:this.getmsgData.msg[0].msg_subtitle,
      msg_body:this.getmsgData.msg[0].msg_body,
    
      dept_link:this.getmsgData.msg[0].dept_link,
      fire_msg:this.getmsgData.msg[0].msg_snt_type,
      once_dt:this.getmsgData.msg[0].msg_snt_dt.substr(0,10),
      once_time:this.getmsgData.msg[0].msg_snt_time,
      daily_time:this.getmsgData.msg[0].msg_snt_time,
      weekly_day:this.getmsgData.msg[0].msg_snt_day,
      weekly_time:this.getmsgData.msg[0].msg_snt_time,
      monthly_date:this.getmsgData.msg[0].msg_snt_dt.substr(0,10),
      monthly_time:this.getmsgData.msg[0].msg_snt_time,
      save_message:this.getmsgData.msg[0].msg_lifetime,
      send_msg:this.getmsgData.msg[0].time_period_msg=='Y'?true:false,
      send_msg_from:this.getmsgData.msg[0].msg_snt_frm_time,
      send_msg_to:this.getmsgData.msg[0].msg_snt_to_time
    })
    console.log(this.msgForm.controls.audience.value)
  } ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)
})
  }
  openDialog(f: any, v: any) {
    
    console.log(f, v)
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '250px',
      data: { flag: f, content: v }
    });
  }
  open_crop_modal() { //to open the modal for cropping
    this.el = document.getElementById('id01');
    this.el.style.display = 'block'

  }
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
  // fired when the image to be cropped is loaded
  imageLoaded() {
    console.log("image loaded")
    this.showCropper = true;
    this.modal = false;
    this.hide = false;
    this.valu = false;
    // this.Zoomout = false;
    // this.ZoomIn = false;
  }
  // fired when the image is cropped
  imageCropped(event: ImageCroppedEvent) {
    console.log('imagecropped');
    // event.width=this.crop_width;
    // event.width=this.crop_height;
    console.log("width:" + event.width);
    console.log("height:" + event.height);
   
    this.croppedImage = event.base64;
    // if(this.show_tab=='tab4')
    this.preview_for_section=this.croppedImage
    this.spstockImg=this.croppedImage
    console.log(this.croppedImage);
  }
  cropperReady(sourceImageDimensions: Dimensions) {
   console.log('Cropper ready', sourceImageDimensions);
    console.log("cropper ready CROPPED IMAGE:" + this.croppedImage);
  }
  // fired when the image load fails
  loadImageFailed() {
    console.log('Load failed');
  }
  // save the cropped image
  click_it(){
    // this.cover_change=true;
      this.valu = true;
      this.img_cover=this.croppedImage;
      console.log("Cropped Image:" +this.croppedImage);
      // CONVERT BASE64 TO IMAGE FILE //
      const base64 = this.croppedImage;
        const imageName = `msgImg_${Math.random()}.jpg`;
        const imageBlob = this.dataURItoBlob( this.croppedImage);
        const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
        console.log({imageFile, imageBlob});
        this.img_cover=imageFile;
        // this.spstockImg=URL.createObjectURL(imageFile)
        this.spstockImg=this.croppedImage
        // this.stockImg1=URL.createObjectURL(imageFile)
        // END //
      // this.Breakfast_cover_preview=false;
      this.el.style.display='none'
  }
  // close cropper
  close_it(){
    this.valu=true;
    this.Modal=document.getElementById('myfile');
    this.Modal.value=null;
  
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
  event_image_change(e: any) {
    this.crop_width = 1800;
    this.crop_height = 500;
    console.log(this.crop_width + " " + this.crop_height)
    this.stockImageName = e.target.files[0].name;
    // console.log(this.cropround)
    console.log(e.target.files[0])
    // this.logoname=e.target.files[0].name;
    // this.logo_file=e.target.files[0];
    this.img_cover = e;
    this.stock_file1 = document.getElementById('logo_crop');
    this.stock_file1.click();
  }
  go_prev_page(){
    this.router.navigate(['main/admin/manage_hotel_account',btoa(this.hotel_id)]).catch(data=>{
      this.msg.globalError(data);
    })
  }
  change_aud(){
    if(this.aud=='4'){
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '350px',
      height:'200px',

      data: { flag: 'singleVIP', content:{'hotel_id':this.hotel_id,'flag':'V' ,audience:this.selectedAudience}  }
    });
    dialogRef.afterClosed().subscribe(result => {
     console.log(result)
     this.selectedVIPs=result

    })

  }
}
add_vip(){
 
  const dialogRef = this.dialog.open(DialogBoxComponent, {
    // width: '250px',
    height: '350px',
    width: '650px',
      autoFocus: false,
    data: { flag: 'addVIP', content:{'hotel_id':this.hotel_id,'user':'admin@gmail.com'}  }
  });
  dialogRef.afterClosed().subscribe(result => {
   
  })

}
gen_bitly(){
  //this.spinner.show();
  var dt={
    "url":'http://localhost:4200/#/main/admin/create_notification/MQ%3D%3D/MA%3D%3D',
    "res_id":this.hotel_id
  }
    this.dataServe.global_service(1,'/create_bitly_url',dt).subscribe(data=>{console.log(data)
    this.bitlyData=data;
    this.url2=this.bitlyData.msg
    // this.msgForm.controls.bitlyUrl.setValue(this.url2)
    this.msgForm.controls.bitlyUrl.setValue('https://bit.ly/calendar')
    ////this.spinner.hide()
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  }
}
