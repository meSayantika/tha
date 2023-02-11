import { Component, OnInit } from '@angular/core';
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
  selector: 'app-pca',
  templateUrl: './pca.component.html',
  styleUrls: ['./pca.component.css']
})
export class PcaComponent implements OnInit {
  openstockimages: any;
  category_name: any;
  st_img: any;
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
  spstockImg: any;
  hide=false;
  scale = 1;

  img_cover: any;
  crop_width:any;
  crop_height:any;
  showCropper = false;
  transform: ImageTransform = {};
  Zoomout = true;
  ZoomIn = true;
  modal = true;
  croppedImage:any ;
  Modal:any;
  img_name:any;
  getAvatarData:any
  constructor(public dialog: MatDialog,private activatedRoute:ActivatedRoute,private msg:MessageService, private router: Router,private dataServe:DataService,private formBuilder: FormBuilder) { }
  pcaForm!: FormGroup;
  getVoiceData:any;
  ngOnInit() {

    this.hotel_id=this.activatedRoute.snapshot.params['id'];
    console.log(this.hotel_id)
    this.hotel_id=atob(this.hotel_id);
    // alert('hi')

    // console.log(this.hotel_id,'in pca')
    // this.getStockimageonselectcategory('')
    this.pcaForm=this.formBuilder.group({
      av_name:[''],
      av_img_path:[''],
     
    })

    this.getCategories()
    this.getStockimageonselectcategory('')
    this.getAvatar()

  }
  getAvatar(){
    this.dataServe.global_service(0,'/pc_avatar',`hotel_id=${this.hotel_id}`).subscribe(data=>{
      console.log(data)
      this.getAvatarData=data;
      this.id=this.getAvatarData.msg[0]?.id
      this.spstockImg=environment.api_url+'/'+this.getAvatarData.msg[0]?.img_path
      this.pcaForm.patchValue({
        av_name:this.getAvatarData.msg[0]?.avt_name,

      })
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
      )
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
  get p(){
    return this.pcaForm.controls;
  }
  getStockimageonselectcategory(cat_id:any){
    //  For getting Image on load
    this.dataServe.global_service(0,'/stock_img',`cat_id=${cat_id}`).subscribe(data=>{
      console.log(data);
      this.st_img=data;
      this.st_img=this.st_img.msg;
     } ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    )
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
        const imageName = `avImg_${Math.random()}.jpg`;
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

  saveAvatar(){
    console.log(this.p)
    this.id=this.id || 0
      const formData = new FormData()
      formData.append("hotel_id",this.hotel_id)
      formData.append("id",this.id)
      formData.append("avt_name",this.p.av_name.value)
      formData.append("img_path",'stock/'+this.stockImg1)
      formData.append("img",this.img_cover)
      formData.append("user","admin@gmail.com")
      this.dataServe.global_service(1,'/pc_avatar',formData).subscribe(data=>{
        console.log(data)
        this.getVoiceData=data;
        if(this.getVoiceData.suc>0)
          this.msg.successMsg('SS')
        else
          this.msg.errorMsg('ES')
       } ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      )
  }
}
