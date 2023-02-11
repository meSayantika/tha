import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dimensions, ImageCroppedEvent, ImageTransform,base64ToFile  } from 'ngx-image-cropper';//For Image Cropper
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
@Component({
  selector: 'app-menu-setup',
  templateUrl: './menu-setup.component.html',
  styleUrls: ['./menu-setup.component.css']
})
export class MenuSetupComponent implements OnInit {
  chk_dt:any=[];
  day_val:any = []

  see_photo:boolean=true;
  add_date:any='';
  Breakfast_check:boolean=false;
  Breakfast_cover_preview:boolean=true;
  Breakfast_top_preview:boolean=true;
  Breakfast_menu_preview:boolean=true;
  Breakfast_section_preview:boolean=true;

  Launch_check:boolean=false;
  Launch_cover_preview:boolean=true;
  Launch_top_preview:boolean=true;
  Launch_menu_preview:boolean=true;
  Launch_section_preview:boolean=true;

  Dinner_check:boolean=false;
  Dinner_cover_preview:boolean=true;
  Dinner_top_preview:boolean=true;
  Dinner_menu_preview:boolean=true;
  Dinner_section_preview:boolean=true;

  Brunch_check:boolean=false;
  Brunch_cover_preview:boolean=true;
  Brunch_top_preview:boolean=true;
  Brunch_menu_preview:boolean=true;
  Brunch_section_preview:boolean=true;


count:any=0;
  Show:boolean=true;
  for_timing_problem:any="Error!! Start time must be greater then end time"
  break_dt:any=[];
  breakfast_end:any='';
  breakfast_start:any='';
  launch_end:any='';
  launch_start:any='';
  dinner_end:any='';
   dinner_start:any='';
 Brunch_end:any='';
  Brunch_start:any='';
  stor:any=[];
  comma:any;
  com:any=[];

  londondefault:any;
  lagunadefault:any;
   tokyodefault:any;
   parisdefault:any;
   break_menu:any;
   launch_menu:any;
   dinner_menu:any;
  brunch_menu:any;

    arr_brak_check:any=[];
  check_break:any;
  check_launch:any;
  check_dinner:any;
  check_brunch:any;

   name:any;
   menu_sec:any
   launch_sec:any;
   dinner_sec:any;
   brunch_sec:any;
   break_cover:any;
   launch_cover:any;

   dinner_cover:any;
   brunch_cover:any;
   break_top:any;
   launch_top:any;

   dinner_top:any;
   brunch_top:any;

   url_reg = environment.api_url;

   break_sec:any=[];
   cove_top:any=[];
  //For checking null in breakfast
  b_url:boolean=true;
  bc_url:boolean=true;
  bt_url:boolean=true;
  bm_url:boolean=true;
  bs_url:boolean=true;
  bstart_url:boolean=true;
  bend_url:boolean=true;
  //For checking null in breakfast
  lcc_url:boolean=true;
  lc_url:boolean=true;
  lt_url:boolean=true;
  lm_url:boolean=true;
  ls_url:boolean=true;
  lstart_url:boolean=true;
  lend_url:boolean=true;
  //For checking null in breakfast
  d_url:boolean=true;
  dc_url:boolean=true;
  dt_url:boolean=true;
  dm_url:boolean=true;
  ds_url:boolean=true;
  dstart_url:boolean=true;
  dend_url:boolean=true;
  //For checking null in breakfast
  br_url:boolean=true;
  brc_url:boolean=true;
  brt_url:boolean=true;
  brm_url:boolean=true;
  brs_url:boolean=true;
  brstart_url:boolean=true;
  brend_url:boolean=true;
  coc:any;


  l_url:boolean=true;

  PACK: any;
  BIRTH: any;
  ENTER: any;
  WALL: any;
  WIND: any;
  Packages: any = false;
  birth: any = true;
  entertainmen: any = true;
  wall: any = true;
  window: any = true;

  launch_url=true;


  london: any;
  paris: any;
  Tokyo: any;
  Laguna: any;
  tab6:any=false;
  tab1: any = false;
  tab2: any = true;
  tab3: any = true;
  tab4: any = true;
  tab5: any = true;
  t1: any = '';
  t2: any = '';
  t3: any = '';
  t4: any = '';
  t5: any = '';
  resid:any=localStorage.getItem('Restaurant_id');
  break_check:any;
  launch_check:any;
  brunch_check:any
  dinner_check:any
  storevalue: any = [];
  success:any;
  x:any;
  bkmenu:any;
  // For London
  mon:any=0;;
  tue:any=0;
  wed:any=0;
  thu:any=0;
  fri:any=0;
  sat:any=0;
  sun:any=0;
  every:any;

  mon_special:any=0;;
  tue_special:any=0;
  wed_special:any=0;
  thu_special:any=0;
  fri_special:any=0;
  sat_special:any=0;
  sun_special:any=0;



  error_msg:any="Please Update your package";
  //For Paris
  mon_launch:any=0;;
  tue_launch:any=0;
  wed_launch:any=0;
  thu_launch:any=0;
  fri_launch:any=0;
  sat_launch:any=0;
  sun_launch:any=0;

  // For Tokyo
  mon_dinner:any=0;;
  tue_dinner:any=0;
  wed_dinner:any=0;
  thu_dinner:any=0;
  fri_dinner:any=0;
  sat_dinner:any=0;
  sun_dinner:any=0;

  // For Laguna
  mon_brunch:any=0;;
  tue_brunch:any=0;
  wed_brunch:any=0;
  thu_brunch:any=0;
  fri_brunch:any=0;
  sat_brunch:any=0;
  sun_brunch:any=0;

  mon_check:any;
  tue_check:any;
  wed_check:any;
  thu_check:any;
  fri_check:any;
  sat_check:any;
  sun_check:any;
  // mon_check:any;
  every_break:any;
  every_launch:any;

  every_dinner:any;

  every_brunch:any;

   brunch_start:any;
   brunch_end:any;

  breakfastcoverimage: any;
  breakfasttopimage: any;
  breakfastmenuimage: any;
  breakfastsectionimage:any=[];

  v:any=0;

  launchcoverimage: any;
  launchtopimage: any;
  launchmenuimage: any=[];
  launchsectionimage:any=[];


  branchsectionimage:any=[];
  branchcoverimage:any;
  branchtopimage:any
  branchmenuimage:any=[];
   positions=0;
   posDiv:any
  dinnersectionimage:any=[];
  dinnercoverimage:any;
 dinnertopimage:any
  dinnermenuimage:any=[];
  multipleImages:any=[];
  check:any=[];
  check_it:any;
  img_cover:any;
  img_top:any;
  img_menu_break:any=[];
  img_section_break:any=[];
  img_launch_cover:any;
  img_launch_top:any;
  img_launch_menu:any=[];
  img_launch_section:any=[];

  img_dinner_cover:any;
  img_dinner_top:any;
  img_dinner_menu:any=[];
  img_dinner_section:any=[];

  img_brunch_cover:any;
  img_brunch_top:any;
  img_brunch_menu:any=[];
  img_brunch_section:any=[];

  b_check:any;
  l_check:any;
  d_check:any;
  br_check:any;


  val_break_cov_img:any='';
  break_button:boolean=false;
  launch_button:boolean=false;
  special_button:boolean=true;
  dinner_button:boolean=false;
 design:any;
  brunch_button:boolean=false;
 img_showing=environment.api_url;
 img_url=environment.api_url+'/stock/';
 id:any;
 load_section:any;
 res_name:any=localStorage.getItem('Restaurant_name');
common_image:any;
common:any;
lunch_top_name:any;
lunch_cover_name:any;
brunch_top_name:any;
brunch_cover_name:any;
dinner_top_name:any;
dinner_cover_name:any;
breakfast_top_name:any;
breakfast_cover_name:any;
enable_exclusive:boolean=true;
enable_addition:boolean=true;
res_bar_flag:any
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
 crop_width:any;
 crop_height:any;
  common_break_menu:any;
  pdfSource:any;
  show_name:any;
  img_break_section:any;
  show_toast:boolean=true;
  common_remove_div:any;
  lunch_Cover:boolean=true;
  dinner_Cover:boolean=true;
  break_Cover:boolean=true;
  brunch_Cover:boolean=true;
  lunch_Top:boolean=true;
  dinner_Top:boolean=true;
  break_Top:boolean=true;
  brunch_Top:boolean=true;

  Special_menu:any;
  special_url:any=''
  category_name:any=[];
  stock_img:any=[];
  special_img:any=[];
  img_special:any=[];
  special_check:any;
  special_section_preview:boolean=true;
  special_disabled:boolean=false;
  enable_days:boolean=true;
  special:any=5;
  exclusive:any;
  week:any;
  exclusive_specific_date:any;
  break_Special=0;
  lunch_special=0;
  dinner_Special=0;
  brunch_Special=0;
  x1:any;
  coordinates:any;
  date_time:any;
  image_getelement:any;
  previous_id:any;
  enable_date_specific:boolean=true;
  getVenues:any;

  reg_menu_id:any;
  month_day_special:any;
  enable_days_addition:boolean=true;
  enable_specific_date_addition:boolean=true;
  mon_special_add:any;
  tue_special_add:any;
   sun_special_add:any;
  wed_special_add:any;
  thu_special_add:any;
  fri_special_add:any;
  sat_special_add:any;
  break_Special_add=0;
  lunch_special_add=0;
   dinner_Special_add=0;
    brunch_Special_add=0;
 check_every_week_check:any;
 check_specific_date_check:any;
 common_for_special_menu:any;
 get_special_menu:any=[];
 STOCK_IMG:any=[];
 daycheck:any;
 suc_special:any;
 exclusive_time:any=[];
arr:any=[];
sec_img:any=[];
start_time:any;
end_time:any;
menu_no:any;
get_menu_id:any=0;
get_menu_text:any='';
get_createmenu:any=[];
get_top_url:any='';
get_cover_url:any='';
get_menu_url:any='';
get_top_img:any='';
get_img_top:any;
get_cover_img:any='';
cover_name:any;
top_name:any;
get_cov:boolean=true;
get_top:boolean=true;
get_img_cover:any;
get_menu_img:any=[];
img_menu_others:any=[];
menu_check:any='Y';
temp:any=[];
START_time:any;
END_time:any;
check_date:any;
check_button:boolean=true;
menu_img_show:boolean=true;
breakfast_ins='';
lunch_ins='';
dinner_ins='';
brunch_ins='';
special_ins='';
menuchoiceData:any;
menu_frm_dt:any;
 menu_to_dt:any;
 getMenus:any;
 getMenus1:any;
 posTab:any;
 venueid:any;
 get_menu:any='';
 crop_min_height:any;
  crop_min_width:any;
  aspect_ratio:any;
  maintain_asp_rat:any;
  contain_within_aspect_ratio=false;
  lotsOfTabs:any=[]
  serviceId:any
  // name:any=localStorage.getItem('Restaurant_name');
 
  show_alert=true
  constructor(private router:Router,private _data: DataService,private http: HttpClient, private msg:MessageService) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }
  ngOnInit(): void {
    this.lotsOfTabs =['tab1','tab2','tab3']

    this.menu_no=localStorage.getItem('No_of_menu');
    //For getting cretaed menus for unlimited
  //for retrieving instructions
  // this._data.global_service(0,'/venue',`res_id=${this.resid}`).subscribe((data:any)=>{
  //   console.log(data);
  //   this.getVenues=data;

  //   this.open_venue(this.getVenues.msg[0].id,0);
  // }
  this._data.global_service(0,'/cust_menu_list',`hotel_id=${this.resid}`).subscribe((data:any)=>{
    console.log(data);
    this.getVenues=data;

    this.open_venue(this.getVenues.msg[0].id,0,'');
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
  var v = 0;
  this._data.global_service(0,'/get_menu_dtls',`id=${v}`).subscribe(data=>{console.log(data)

    this.menuchoiceData=data;
   
    this.menuchoiceData=this.menuchoiceData.msg;
    this.breakfast_ins=this.menuchoiceData[0].info;
    this.lunch_ins=this.menuchoiceData[1].info;
    this.dinner_ins=this.menuchoiceData[2].info;
    this.brunch_ins=this.menuchoiceData[3].info;
    this.special_ins=this.menuchoiceData[4].info;
    // this.mncdata=this.menuchoiceData[0].menu_id;
    console.log(this.menuchoiceData)
    // console.log('bkmenu'+this.menuchoiceData[0].menu_id)
    // this.bkmenuid=document.getElementById('bkmenu'+this.menuchoiceData[0].menu_id);
    // console.log(this.bkmenuid)
   // this.bkmenuid.checked=true;
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

    )
  //  For getting category Id
   this._data.global_service(0,'/category_list','').subscribe(data=>{
     console.log(data);
     this.category_name=data;
     this.category_name=this.category_name.msg;
   }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
   
   )
    //  For getting Image on load
    this._data.global_service(0,'/stock_img','').subscribe(data=>{
      console.log(data);
      this.stock_img=data;

      this.stock_img=this.stock_img.msg;
      console.log(this.stock_img);

    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
   if("value" in localStorage){
      this.v=localStorage.getItem('value');
  } else {
    }
   this.arr_brak_check.length=0;
    this.brunch_start='';
    this.brunch_end='';
    // return this.http.get(url_set.api_url+'/menu_setup?id='+res_id + '&menu_id=' + menu_id + venue)
    this._data.global_service(0, '/menu_setup', `id=${this.resid}`).subscribe(data=>{
      this.cove_top.length=0;
      console.log(data);
      this.cove_top=data;
      // if(this.cove_top.length!=0){


      for(let i=0;i<this.cove_top.menu_dt.length;i++){
        // console.log(this.cove_top.menu_dt[i].menu_id);
        if(this.cove_top.menu_dt.length!=0){
          if(this.cove_top.menu_dt[i].menu_id==1){

            console.log("sadasda1");

                if(this.cove_top.menu_dt[i].menu_img!='' && this.cove_top.menu_dt[i].menu_img!=null){
                  this.Breakfast_menu_preview=false
                 this.img_menu_break.push({id: this.cove_top.menu_dt[i].id, img_path: this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});
                    this.multipleImages.push(this.cove_top.menu_dt[i].menu_img);

                }


                 this.break_menu=this.cove_top.menu_dt[i].menu_url;

                 console.log(this.break_menu);


               if(this.cove_top.menu_dt[i].active_flag=='Y'){
                  this.check_break=document.getElementById('bkmenu');
                  this.check_break.checked=true;
                  this.break_check='Y';
                  this.b_url=false;
               }
               else {
                this.check_break=document.getElementById('bkmenu');
                this.check_break.checked=false;
                this.break_check='N';
                this.b_url=true
               }
            }
            else if(this.cove_top.menu_dt[i].menu_id==2){

              console.log("sadasda3");
              if(this.cove_top.menu_dt[i].menu_img!='' && this.cove_top.menu_dt[i].menu_img!=null){
                this.Launch_menu_preview=false
                this.launchmenuimage.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});
                this.img_launch_menu.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});

              }
                // this.launch_cover=this.cove_top.msg[i].cover_page_url;
                // this.launch_top=this.cove_top.msg[i].top_img_url;
                this.launch_menu=this.cove_top.menu_dt[i].menu_url;
                // console.log(this.launch_top,this.launch_cover);


              if(this.cove_top.menu_dt[i].active_flag=='Y'){
                this.check_launch=document.getElementById('paris');
                this.check_launch.checked=true;
                this.launch_check='Y'
                this.lcc_url=false;
             }
             else {
              this.check_launch=document.getElementById('paris');
              this.check_launch.checked=false;
              this.launch_check='N';
              this.lcc_url=true;

             }
           }
           else if(this.cove_top.menu_dt[i].menu_id==3){
            console.log("sadasda2");

            if(this.cove_top.menu_dt[i].menu_img!='' && this.cove_top.menu_dt[i].menu_img!=null){
              this.Dinner_menu_preview=false
              this.branchmenuimage.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});
              this.img_dinner_menu.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});

            }
              // this.dinner_cover=this.cove_top.menu_dt[i].cover_page_url;
              // this.dinner_top=this.cove_top.menu_dt[i].top_img_url;
              this.dinner_menu=this.cove_top.menu_dt[i].menu_url;
            if(this.cove_top.menu_dt[i].active_flag=='Y'){
              this.check_dinner=document.getElementById('tokyo');
              this.check_dinner.checked=true;
              this.brunch_check='Y';
              this.d_url=false;
           }
           else {
            this.check_dinner=document.getElementById('tokyo');
            this.check_dinner.checked=false;
            this.brunch_check='N';
            this.d_url=true;

           }
           }
           else if(this.cove_top.menu_dt[i].menu_id==4){

            console.log("sadasda4");


            if(this.cove_top.menu_dt[i].menu_img!='' && this.cove_top.menu_dt[i].menu_img!=null){
              this.Brunch_menu_preview=false
              this.dinnermenuimage.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});
              this.img_brunch_menu.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});

            }

              this.brunch_menu=this.cove_top.menu_dt[i].menu_url;

            if(this.cove_top.menu_dt[i].active_flag=='Y'){
              this.check_brunch=document.getElementById('laguna');
              this.check_brunch.checked=true;
              this.dinner_check='Y';
              this.br_url=false;
           }
           else {
            this.check_brunch=document.getElementById('laguna');
            this.check_brunch.checked=false;
            this.dinner_check='N';
            this.br_url=true;

           }
         }
         else if(this.cove_top.menu_dt[i].menu_id==5){
         this.special_url=this.cove_top.menu_dt[i].menu_url;
          if(this.cove_top.menu_dt[i].menu_img!='' && this.cove_top.menu_dt[i].menu_img!=null){
            // this.Brunch_menu_preview=false
            this.special_section_preview=false;
            this.special_img.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});
            this.img_special.push({id:this.cove_top.menu_dt[i].id,img_path:this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});
            }

         }

        }



      }
      for(let i=0;i<this.cove_top.oth_dt.length;i++){
        console.log(this.cove_top.oth_dt[i].active_flag);

        if(this.cove_top.oth_dt.length!=0){
          if(this.cove_top.oth_dt[i].menu_id==1){

            console.log("sadasda1");

                 this.break_cover=this.cove_top.oth_dt[i].cover_page_url;
                 this.break_top=this.cove_top.oth_dt[i].top_img_url;


               if(this.cove_top.oth_dt[i].cover_page_img!=''){


                this.break_Cover=false;
                 this.Breakfast_cover_preview=false;
                 this.breakfastcoverimage=this.img_showing +'/' +this.cove_top.oth_dt[i].cover_page_img;
                 this.breakfast_cover_name=this.cove_top.oth_dt[i].cover_page_img;
                 console.log(this.breakfastcoverimage);

                 this.img_cover =this.breakfastcoverimage;
                }
                if(this.cove_top.oth_dt[i].top_image_img!=''){
                this.break_Top=false;

                     this.Breakfast_top_preview=false;
                 this.breakfasttopimage=this.img_showing +'/' +this.cove_top.oth_dt[i].top_image_img;
                 this.img_top=this.breakfasttopimage;
                 this.breakfast_top_name=this.cove_top.oth_dt[i].top_image_img;
               }


                //  this.break_menu=this.cove_top.menu_dt[i].menu_url;



               if(this.cove_top.oth_dt[i].active_flag=='Y'){
                  this.check_break=document.getElementById('bkmenu');
                  this.check_break.checked=true;
                  this.break_check='Y';
                  this.b_url=false;
               }
               else {
                this.check_break=document.getElementById('bkmenu');
                this.check_break.checked=false;
                this.break_check='N';
                this.b_url=true
               }
            }
            else if(this.cove_top.oth_dt[i].menu_id==2){

              console.log("sadasda3");
              if(this.cove_top.oth_dt[i].top_image_img!=''){
                this.img_launch_top=this.img_showing +'/' +this.cove_top.oth_dt[i].top_image_img;
                this.launchtopimage= this.img_launch_top;
                this.Launch_top_preview=false;
                this.lunch_Top=false;
                this.lunch_top_name=this.cove_top.oth_dt[i].top_image_img;


              }

              if(this.cove_top.oth_dt[i].cover_page_img!=''){
                this.lunch_Cover=false;

                this.img_launch_cover=this.img_showing +'/' +this.cove_top.oth_dt[i].cover_page_img;
                this.launchcoverimage= this.img_launch_cover;
                this.Launch_cover_preview=false;
                this.lunch_cover_name=this.cove_top.oth_dt[i].cover_page_img;

              }
                this.launch_cover=this.cove_top.oth_dt[i].cover_page_url;
                this.launch_top=this.cove_top.oth_dt[i].top_img_url;



              if(this.cove_top.oth_dt[i].active_flag=='Y'){
                this.check_launch=document.getElementById('paris');
                this.check_launch.checked=true;
                this.launch_check='Y'
                this.lcc_url=false;
             }
             else {
              this.check_launch=document.getElementById('paris');
              this.check_launch.checked=false;
              this.launch_check='N';
              this.lcc_url=true;

             }
           }
           else if(this.cove_top.oth_dt[i].menu_id==3){
            console.log("sadasda2");



            if(this.cove_top.oth_dt[i].top_image_img!=''){
              this.img_dinner_top=this.img_showing +'/' +this.cove_top.oth_dt[i].top_image_img;
              // this.branchtopimage= this.img_launch_top;
              this.branchtopimage=this.img_dinner_top;


              this.dinner_Top=false;
              this.Dinner_top_preview=false;
              this.dinner_top_name=this.cove_top.oth_dt[i].top_image_img;


            }

            if(this.cove_top.oth_dt[i].cover_page_img!=''){
              this.img_dinner_cover=this.img_showing +'/' +this.cove_top.oth_dt[i].cover_page_img;
              this.branchcoverimage=this.img_dinner_cover;
              this.dinner_Cover=false;

              this.Dinner_cover_preview=false;
              this.dinner_cover_name=this.cove_top.oth_dt[i].cover_page_img;

            }
              this.dinner_cover=this.cove_top.oth_dt[i].cover_page_url;
              this.dinner_top=this.cove_top.oth_dt[i].top_img_url;
              // this.dinner_menu=this.cove_top.oth_dt[i].menu_url;
            if(this.cove_top.oth_dt[i].active_flag=='Y'){
              console.log('tokyo');

              this.check_dinner=document.getElementById('tokyo');
              this.check_dinner.checked=true;
              this.brunch_check='Y';
              this.d_url=false;
           }
           else {
            console.log('tokyo_disabled');

            this.check_dinner=document.getElementById('tokyo');
            this.check_dinner.checked=false;
            this.brunch_check='N';
            this.d_url=true;


           }
           }
           else if(this.cove_top.oth_dt[i].menu_id==4){

            console.log("sadasda4");


            if(this.cove_top.oth_dt[i].top_image_img!=''){
              this.img_brunch_top=this.img_showing +'/' +this.cove_top.oth_dt[i].top_image_img;
              this.dinnertopimage= this.img_brunch_top;
              this.brunch_Top=false;

              this.Brunch_top_preview=false;
              this.brunch_top_name=this.cove_top.oth_dt[i].top_image_img;
            }

            if(this.cove_top.oth_dt[i].cover_page_img!=''){
              this.img_brunch_cover=this.img_showing +'/' +this.cove_top.oth_dt[i].cover_page_img;
              this.dinnercoverimage= this.img_brunch_cover;
              this.brunch_Cover=false;
              this.Brunch_cover_preview=false;
              this.brunch_cover_name=this.cove_top.oth_dt[i].cover_page_img;


            }

              this.brunch_cover=this.cove_top.oth_dt[i].cover_page_url;
              this.brunch_top=this.cove_top.oth_dt[i].top_img_url;

             if(this.cove_top.oth_dt[i].active_flag=='Y'){
              this.check_brunch=document.getElementById('laguna');
              this.check_brunch.checked=true;
              this.dinner_check='Y';
              this.br_url=false;
           }
           else {
            this.check_brunch=document.getElementById('laguna');
            this.check_brunch.checked=false;
            this.dinner_check='N';
            this.br_url=true;

           }
         }


        }
      }

      console.log( this.multipleImages);
      console.log( this.img_menu_break);

    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    
    )
    //For breakfast section url
    this._data.global_service(0,'/section_image',`id=${this.resid}&menu_id=1`).subscribe(data=>{
      console.log(data);
      this.break_sec=data
      for(let i=0;i<this.break_sec.msg.length;i++)
      {
        if(this.break_sec.msg[i].menu_id==1){
          this.menu_sec=this.break_sec.msg[i].sec_url;
          if(this.break_sec.msg[i].sec_img!=null && this.break_sec.msg[i].sec_img!=""){
            // this.sec_img=this.break_sec.msg[i].sec_img;
              this.Breakfast_section_preview=false;
            this.img_section_break.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});
            this.breakfastsectionimage.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});    
          
          }



         }
      }


    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    
    )
    //For launch section url
    this._data.global_service(0,'/section_image',`id=${this.resid}&menu_id=2`).subscribe(data=>{

      console.log(data);
      this.break_sec=data
      if(this.break_sec.msg.length!=0){


      for(let i=0;i<this.break_sec.msg.length;i++)
      {
           if(this.break_sec.msg[i].menu_id==2){
               if(this.break_sec.msg[i].sec_img!='' && this.break_sec.msg[i].sec_img!=null)
               {
                this.Launch_section_preview=false;
                 this.img_launch_section.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});
                 this. launchsectionimage.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});


               }

          if(this.break_sec.msg[i].sec_url!=''){
          this.launch_sec=this.break_sec.msg[i].sec_url
         }
         else{
          this.launch_sec="";

         }
        }
      }
    }

    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

    
    )
    //For dinner section url
    this._data.global_service(0,'/section_image',`id=${this.resid}&menu_id=3`).subscribe(data=>{

      console.log(data);
      this.break_sec=data
      if(this.break_sec.msg.length!=0){
      for(let i=0;i<this.break_sec.msg.length;i++)
      {

        if(this.break_sec.msg[i].sec_img!='' && this.break_sec.msg[i].sec_img!=null )
               {
                this.Dinner_section_preview=false;
                 this.img_dinner_section.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});
                 this. branchsectionimage.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});


               }
        if(this.break_sec.msg[i].sec_url!=''){
          this.dinner_sec=this.break_sec.msg[i].sec_url
         }
         else{
          this.dinner_sec="";

         }
      }
    }

    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
    //For brunch section url
    this._data.global_service(0,'/section_image',`id=${this.resid}&menu_id=5`).subscribe(data=>{

      console.log(data);
      this.break_sec=data
      if(this.break_sec.msg.length!=0){


      for(let i=0;i<this.break_sec.msg.length;i++)
      {
       
          if(this.break_sec.msg[i].sec_img!='' && this.break_sec.msg[i].sec_img!=null)
               {
                this.Brunch_section_preview=false;
                 this.img_brunch_section.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});
                 this.dinnersectionimage.push({id:this.break_sec.msg[i].id,img_path:this.img_showing+ '/' +this.break_sec.msg[i].sec_img});


               }
               if(this.break_sec.msg[i].sec_url!=''){
               this.brunch_sec=this.break_sec.msg[i].sec_url
              }
            else{
          this.brunch_sec="";

         }
      }
    }

    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )


// For Getting special menu details
this._data.global_service(0,'/section_image',`id=${this.resid}&menu_id=5`).subscribe(data=>{

 console.log(data);
    this.get_special_menu=data;
    this.exclusive=this.get_special_menu.msg[0].regular_menu_flag;
    this.week=this.get_special_menu.msg[0].day_flag;
    var datePipe = new DatePipe('en-US');

    this.menu_frm_dt=datePipe.transform(this.get_special_menu.msg[0].menu_frm_dt, 'yyyy-MM-dd');
    this.menu_to_dt=datePipe.transform(this.get_special_menu.msg[0].menu_to_dt, 'yyyy-MM-dd');
     if(this.get_special_menu.msg[0].active_flag=='Y'){
       this.daycheck=document.getElementById('special_bkmenu');
       this.daycheck.checked=true;
       this.special_button=false;
     }
    if(this.exclusive=='E'){
      this.daycheck=document.getElementById('exclusively');
      this.daycheck.checked=true;
      this.enable_exclusive=false;
      //for exclusive breakfast lunch dinner and brunch

      for(let i=0;i<this.get_special_menu.msg.length;i++){
        if(this.get_special_menu.msg[i].regular_menu_id==1){
          this.daycheck=document.getElementById('break');
          this.daycheck.checked=true;
          this.break_Special=1;
        }
        else if(this.get_special_menu.msg[i].regular_menu_id==2){
          this.daycheck=document.getElementById('lunch');
          this.daycheck.checked=true;
          this.lunch_special=2;
        }
        else if(this.get_special_menu.msg[i].regular_menu_id==3){
          this.daycheck=document.getElementById('dinner');
          this.daycheck.checked=true;
          this.dinner_Special=3;
        }
        else if(this.get_special_menu.msg[i].regular_menu_id==4){
          this.daycheck=document.getElementById('brunch');
          this.daycheck.checked=true;
          this.brunch_Special=4;
        }
      }
      this.get_special_time(this.resid, this.break_Special, this.lunch_special, this.dinner_Special, this.brunch_Special)
    // For checking exclusive every week
     if(this.week=='E'){
      this.enable_days=false;
      this.daycheck=document.getElementById('everyWeek');
      this.daycheck.checked=true;
      for(let i=0;i<this.get_special_menu.msg.length;i++){
        if(this.get_special_menu.msg[i].month_day==2){
          this.daycheck=document.getElementById('vehicle_s2');
          this.daycheck.checked=true;
          this.mon_special=2;
          }
          else if(this.get_special_menu.msg[i].month_day==3){
            this.daycheck=document.getElementById('vehicle_s3');
            this.daycheck.checked=true;
            this.tue_special=3;
          }
          else if(this.get_special_menu.msg[i].month_day==4){
            this.daycheck=document.getElementById('vehicle_s4');
            this.daycheck.checked=true;
            this.wed_special=4;
          } 
          else if(this.get_special_menu.msg[i].month_day==5){
            this.daycheck=document.getElementById('vehicle_s5');
            this.daycheck.checked=true;
            this.thu_special=5;
          }
          else if(this.get_special_menu.msg[i].month_day==6){
            this.daycheck=document.getElementById('vehicle_s6');
            this.daycheck.checked=true;
            this.fri_special=6;
             }
          else if(this.get_special_menu.msg[i].month_day==7){
            this.daycheck=document.getElementById('vehicle_s7');
            this.daycheck.checked=true;
            this.sat_special=7;
          }
          else if(this.get_special_menu.msg[i].month_day==8){
            this.daycheck=document.getElementById('vehicle_s8');
            this.daycheck.checked=true;
            this.sun_special=8;
          }
        
      }
         if( this.mon_special==2 && this.tue_special==3  && this.wed_special==4 &&  this.thu_special==5 && this.fri_special==6 && this.sat_special==7 && this.sun_special==8){
            this.daycheck=document.getElementById('vehicle_se');
            this.daycheck.checked=true;
          
            
          }
    }
    // For checking exclusive specific date
    else{
      this.daycheck=document.getElementById('specificWeek');
      this.daycheck.checked=true;
      this.enable_date_specific=false;
   this.date_time=this.get_special_menu.msg[0].menu_date;
     console.log(this.date_time);
     
    }

   
    }
    else{
      //for addition breakfast lunch dinner and brunch
      for(let i=0;i<this.get_special_menu.msg.length;i++){
        if(this.get_special_menu.msg[i].regular_menu_id==1){
          this.daycheck=document.getElementById('specials_breakfast');
          this.daycheck.checked=true;
          this.break_Special_add=1;
        }
        else if(this.get_special_menu.msg[i].regular_menu_id==2){
          this.daycheck=document.getElementById('specials_lunch');
          this.daycheck.checked=true;
          this.lunch_special_add=2;
        }
        else if(this.get_special_menu.msg[i].regular_menu_id==3){
          this.daycheck=document.getElementById('specials_dinner');
          this.daycheck.checked=true;
          this.dinner_Special_add=3;
        }
        else if(this.get_special_menu.msg[i].regular_menu_id==4){
          this.daycheck=document.getElementById('specials_brunch');
          this.daycheck.checked=true;
          this.brunch_Special_add=4;
        }
      }
      this.get_special_time(this.resid, this.break_Special_add, this.lunch_special_add, this.dinner_Special_add, this.brunch_Special_add)

      this.daycheck=document.getElementById('inAddition');
      this.daycheck.checked=true;
      this.enable_addition=false;
    // For checking addition every week
    if(this.week=='E'){
      this.enable_days_addition=false;
      this.enable_specific_date_addition=true;
     this.daycheck=document.getElementById('everyWeekAddi');
      this.daycheck.checked=true;
    for(let i=0;i<this.get_special_menu.msg.length;i++){
      // this.daycheck=document.getElementById('vehicle_sa'+this.get_special_menu.msg[i].month_day);
      // this.daycheck.checked=true;
      if(this.get_special_menu.msg[i].month_day==2){
      this.daycheck=document.getElementById('vehicle_sa1');
      this.daycheck.checked=true;
      this.mon_special_add=2;
      }
      else if(this.get_special_menu.msg[i].month_day==3){
        this.daycheck=document.getElementById('vehicle_sa2');
        this.daycheck.checked=true;
      this.tue_special_add=3;

      }
      else if(this.get_special_menu.msg[i].month_day==4){
        this.daycheck=document.getElementById('vehicle_sa3');
        this.daycheck.checked=true;
         this.wed_special_add=4;

      } 
      else if(this.get_special_menu.msg[i].month_day==5){
        this.daycheck=document.getElementById('vehicle_sa4');
        this.daycheck.checked=true;
        this.thu_special_add=5;

      }

      else if(this.get_special_menu.msg[i].month_day==6){
        this.daycheck=document.getElementById('vehicle_sa5');
        this.daycheck.checked=true;
        this.fri_special_add=6;

      }
      else if(this.get_special_menu.msg[i].month_day==7){
        this.daycheck=document.getElementById('vehicle_sa6');
        this.daycheck.checked=true;
        this.sat_special_add=7;

      }
      else if(this.get_special_menu.msg[i].month_day==8){
        this.daycheck=document.getElementById('vehicle_sa7');
        this.daycheck.checked=true;
        this.sun_special_add=8;

      }
    }

    if( this.mon_special_add==2 && this.tue_special_add==3  && this.wed_special_add==4 &&  this.thu_special_add==5 && this.fri_special_add==6 && this.sat_special_add==7 && this.sun_special_add==8){
      this.daycheck=document.getElementById('vehicle_sa');
      this.daycheck.checked=true;
    }
    }
    // For checking addition specific date
   else{
      this.daycheck=document.getElementById('specificWeekAddi');
      this.daycheck.checked=true;
      this.enable_specific_date_addition=false;
      this.enable_days_addition=true;
    this.add_date=this.get_special_menu.msg[0].menu_date;
    var datePipe = new DatePipe('en-US');

    // this.menu_frm_dt=datePipe.transform(this.get_special_menu[0].menu_frm_dt, 'yyyy-MM-dd');
    // this.menu_to_dt=datePipe.transform(this.get_special_menu[0].menu_to_dt, 'yyyy-MM-dd');

    }
    }
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)
//For Getting Stock Image
this._data.global_service(0,'/get_special_data',`id=${this.resid}&menu_id=5`).subscribe(data=>{
  console.log(data);
this.STOCK_IMG=data;
if(this.STOCK_IMG.msg!=''){
this.STOCK_IMG=this.STOCK_IMG.msg;
 
this.common_for_special_menu=this.STOCK_IMG[0].img_path;
console.log(this.common_for_special_menu);

this.previous_id=this.STOCK_IMG[0].img_catg;
  this.see_photo=false;
}
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)
//For Checking approval flag is on or not
this._data.global_service(0,'/check_activity',`id=${this.resid}`).subscribe(data=>{
  console.log(data);
  this.check=data;
  console.log(this.check.msg[0].approval_flag);
  
  if(this.check.msg[0].approval_flag=='A'){
    this.show_toast=true;
    this.b_url=false;
  }
  else{
    this.show_toast=false;
    this.b_url=true;
    // this.lcc_url=true;
    // this.d_url=true;
    // this.br_url=true;
    // this.break_button=true;
    // this.launch_button=true;
    // this.dinner_button=true;
    // this.brunch_button=true;
    // //SPecial disabled
    // this.special_button=true;
    // this.enable_exclusive=true;
    // this.enable_days=true;
    // this.enable_date_specific=true
    // this.enable_addition=true;
    //  this.enable_specific_date_addition=true;
    //  this.enable_days_addition=true;
    //  this.enable_addition=true;
    //  this.enable_days_addition=true;
    // this.check_button=true;

  }
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)


}
open_venue(id:any,pos:any,flag:any){
  // alert(id);
  console.log(id)
  this.res_bar_flag=flag
  this.serviceId=id
  // this.posTab=document.getElementById('rest'+pos)
  // this.posTab.classList.add('active')
  console.log(this.getVenues.msg.restaurant.filter((x:any)=>x.id==id)[0])
  this.getMenus=this.getVenues.msg.restaurant.filter((x:any)=>x.id==id)[0]
  this.cove_top.length=0;
  this.multipleImages.length=0;
  this.Breakfast_cover_preview=true;
  this.Breakfast_top_preview=true;
  this.img_menu_break.length=0;
  this.arr_brak_check.length=0;
  this.img_cover=''
  // for(let i=0;i<this.arr_brak_check.msg.length;i++){
  //   this.daycheck=document.getElementById('vehicle'+this.arr_brak_check.msg[i].month_day);
  //   this.daycheck.checked=false;
  // }
  this.breakfast_start='';
  this.breakfast_end=''
  this.break_menu=''
  this.break_cover=''
  this.break_top='';
  this.venueid='';
  this.venueid=id;

  var v_id = id > 0 ? id : 0;
  // return this.http.get(url_set.api_url+'/venue_menu?res_id=' + res_id + '&id=' + tb_id + '&venu_id=' + v_id)
  this._data.global_service(0, '/venue_menu', `res_id=${this.resid}&venu_id=${v_id}`).subscribe(data=>{
    console.log(data);
    this.getMenus1=data;
    this.getMenus1=this.getMenus1.msg
    if(Array.isArray(this.getMenus1)){
    this.getMenus=this.getMenus1
    // for(let i=0;i<this.getMenus.length;i++){
    //   if(i!=pos){
    //     this.posDiv=document.getElementById('venue'+i);
    //     this.posDiv.classList.remove("active");
    //     this.posDiv.style.background ='#f1f1f1';
    //     this.posDiv.style.color = 'black';  
    //   }
    //   else{
    //     // console.log("match");
    //     this.posDiv=document.getElementById('venue'+pos);
    //     this.posDiv.classList.add("active");
    //     this.posDiv.style.background ='';
    //     this.posDiv.style.color = ''; 
    //   }
    // }
  }
  else
  this.getMenus.length=0;
  // for(let i=0;i<this.getMenus1.length;i++){
  //   if(i!=pos){
  //     this.posDiv=document.getElementById('venue'+i);
  //     this.posDiv.classList.remove("active");
  //     this.posDiv.style.background ='#f1f1f1';
  //     this.posDiv.style.color = 'black';  
  //   }
  //   else{
  //     // console.log("match");
  //     this.posDiv=document.getElementById('venue'+pos);
  //     this.posDiv.classList.add("active");
  //     this.posDiv.style.background ='';
  //     this.posDiv.style.color = ''; 
  //   }
  // }

  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
}
  //For changing the tab
  openCity(e: any,v1:any) {
    console.log("val:",this.v)
    if (e == 'London'){
      this.brunch_start='';
      this.brunch_end='';
      this.arr_brak_check.length=0;
      this.cove_top.length=0;
      this.break_sec.length=0;
      this._data.global_service(0,'/menu_setup',`id=${this.resid}`).subscribe(data=>{
        this.cove_top.length=0;
        console.log(data);
        this.cove_top=data;
        // if(this.cove_top.length!=0){
    for(let i=0;i<this.cove_top.menu_dt.length;i++){
          // console.log(this.cove_top.menu_dt[i].menu_id);
          if(this.cove_top.menu_dt.length!=0){
            if(this.cove_top.menu_dt[i].menu_id==1){
              console.log("sadasda1");
              this.break_menu=this.cove_top.menu_dt[i].menu_url;
                   console.log(this.break_menu);
                  if(this.cove_top.menu_dt[i].active_flag=='Y'){
                    this.check_break=document.getElementById('bkmenu');
                    this.check_break.checked=true;
                    this.break_check='Y';
                    this.b_url=false;
                 }
                 else {
                  this.check_break=document.getElementById('bkmenu');
                  this.check_break.checked=false;
                  this.break_check='N';
                  this.b_url=true
                 }
              }
            }
     }
        for(let i=0;i<this.cove_top.oth_dt.length;i++){
        if(this.cove_top.oth_dt.length!=0){
          if(this.cove_top.oth_dt[i].menu_id==1){

                 this.break_cover=this.cove_top.oth_dt[i].cover_page_url;
                 this.break_top=this.cove_top.oth_dt[i].top_img_url;
                 console.log(this.break_cover, this.break_top);

                 this.break_menu=this.cove_top.menu_dt[i].menu_url;
              // if(this.cove_top.oth_dt[i].active_flag=='Y'){
              //     this.check_break=document.getElementById('bkmenu');
              //     this.check_break.checked=true;
              //     this.break_check='Y';
              //     this.b_url=false;
              //  }
              //  else {
              //   this.check_break=document.getElementById('bkmenu');
              //   this.check_break.checked=false;
              //   this.break_check='N';
              //   this.b_url=true
              //  }
            }



        }
      }


        //For Checking approval flag is on or not
  this._data.global_service(0,'/check_activity',`id=${this.resid}`).subscribe(data=>{
    console.log(data);
    this.check=data;
    if(this.check.msg[0].approval_flag=='U'){

    }
    else{
      if(localStorage.getItem('breakfast')==''){
        this.londondefault=false;

      }
      if(localStorage.getItem('launch')==''){
        this.parisdefault=false;

      }
      if(localStorage.getItem('dinner')==''){
        this.tokyodefault=false;

      }
      if(localStorage.getItem('brunch')==''){
        this.lagunadefault=false;

      }
      this.b_url=true;
      this.lcc_url=true;
      this.d_url=true;
      this.br_url=true;
      this.break_button=true;
      this.launch_button=true;
      this.dinner_button=true;
      this.brunch_button=true;
      console.log(this.b_url,this.lcc_url,this.d_url,this.br_url)

    }
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
      this._data.global_service(0,'/section_image',`id=${this.resid}&menu_id=1`).subscribe(data=>{
        console.log(data);
        this.break_sec=data
        if(this.break_sec.msg.length!=0){


        for(let i=0;i<this.break_sec.msg.length;i++)
        {

            if(this.break_sec.msg[i].sec_url!=''){
                 this.menu_sec=this.break_sec.msg[i].sec_url


           }
           else{
            this.menu_sec="";
           }
        }

      }
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
       if((localStorage.getItem('No_of_menu')=='O')){
        if((localStorage.getItem('No_of_menu')=='O')&&(this.v==1)){

            if(localStorage.getItem('breakfast')==''){
              this.tab1 = false;
              this.tab2 = true;
              this.tab3 = true;
              this.tab4 = true;
              this.tab5=true;
              this.tab6=true;
           
             
            this.Special_menu = document.getElementById('defaultOpen4');
            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';   
         
              this.paris = document.getElementById('London');
              this.paris.className = 'active tabcontent m-1';
              this.PACK = document.getElementById('defaultOpen2');
              // this.PACK.className = 'active';
              this.PACK.style.background = '#f1f1f1';
              this.PACK.style.color = 'black';
              this.BIRTH = document.getElementById('defaultOpen1');
              // this.PACK.className = 'active';
              this.BIRTH.style.background = '#f1f1f1';
              this.BIRTH.style.color = 'black';
              this.ENTER = document.getElementById('defaultOpen3');
              // this.PACK.className = 'active';
              this.ENTER.style.background = '#f1f1f1';
              this.ENTER.style.color = 'black';

              if(localStorage.getItem('No_of_menu')=='U'){
              this.ENTER = document.getElementById('defaultOpen5');
              // this.PACK.className = 'active';
              this.ENTER.style.background = '#f1f1f1';
              this.ENTER.style.color = 'black';}
              this.WALL = document.getElementById('defaultOpen');
                // this.PACK.className = 'active';
                this.WALL.style.background = '#00477e';
                this.WALL.style.color = 'white';

                //For Getting the value of day and time

                this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe((data:any)=>{
                  this.arr_brak_check=data;
                  if(this.arr_brak_check.msg.length!=0){


                  this.breakfast_start=this.arr_brak_check.msg[0].start_time;
                  this.breakfast_end=this.arr_brak_check.msg[0].end_time;
                  this.brunch_start=this.breakfast_start;
                  this.brunch_end=this.breakfast_end;
                  for(let i=0;i<this.arr_brak_check.msg.length;i++){
                    if(this.arr_brak_check.msg[i].month_day==2){
                      this.mon_check=document.getElementById('vehicle2');
                      this.mon_check.checked=true;
                      this.mon=2;

                    }
                    if(this.arr_brak_check.msg[i].month_day==3){
                      this.tue_check=document.getElementById('vehicle3');
                      this.tue_check.checked=true;
                      this.tue=3;

                    }
                    if(this.arr_brak_check.msg[i].month_day==4){
                      this.wed_check=document.getElementById('vehicle4');
                      this.wed_check.checked=true;
                      this.wed=4;

                    }
                if(this.arr_brak_check.msg[i].month_day==5){
                      this.thu_check=document.getElementById('vehicle5');
                      this.thu_check.checked=true;
                      this.thu=5;

                    }
                    if(this.arr_brak_check.msg[i].month_day==6){
                      this.fri_check=document.getElementById('vehicle6');
                      this.fri_check.checked=true;
                      this.fri=6;

                    }
                    if(this.arr_brak_check.msg[i].month_day==7){
                      this.sat_check=document.getElementById('vehicle7');
                      this.sat_check.checked=true;
                      this.sat=7;

                    }
                  if(this.arr_brak_check.msg[i].month_day==8){
                      this.sun_check=document.getElementById('vehicle8');
                      this.sun_check.checked=true;
                      this.sun=8;
                    }
                    if(this.arr_brak_check.msg.length==7) {
                      this.every=document.getElementById('vehicle1');
                      this.every.checked=true;

                      this.mon_check=document.getElementById('vehicle2');
                      this.mon_check.checked=true;
                      this.tue_check=document.getElementById('vehicle3');
                      this.tue_check.checked=true;
                      this.wed_check=document.getElementById('vehicle4');
                      this.wed_check.checked=true;
                      this.thu_check=document.getElementById('vehicle5');
                      this.thu_check.checked=true;
                      this.fri_check=document.getElementById('vehicle6');
                      this.fri_check.checked=true;
                      this.sat_check=document.getElementById('vehicle7');
                      this.sat_check.checked=true;
                      this.sun_check=document.getElementById('vehicle8');
                      this.sun_check.checked=true;
                      this.mon=2;
                      this.tue=3;
                      this.wed=4;
                      this.thu=5;
                      this.fri=6;
                      this.sat=7;
                      this.sun=8;
                     }
                }
              }
            }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
            
            )
            }
            else{
            this.msg.globalError('Please update your package');
            }
          //Snackbar

        }
        else if(localStorage.getItem('No_of_menu')=='O'&&this.v!=1){
          this.tab1 = false;
          this.tab2 = true;
          this.tab3 = true;
          this.tab4 = true;
          this.tab5=true;
          this.tab6=true;
            this.Special_menu = document.getElementById('defaultOpen4');
            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';
          this.paris = document.getElementById('London');
          this.paris.className = 'active';
          this.PACK = document.getElementById('defaultOpen2');
          // this.PACK.className = 'active';
          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
          this.BIRTH = document.getElementById('defaultOpen1');
          // this.PACK.className = 'active';
          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';
              
          if(localStorage.getItem('No_of_menu')=='U'){
          this.ENTER = document.getElementById('defaultOpen5');
          // this.PACK.className = 'active';
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';}

          this.ENTER = document.getElementById('defaultOpen3');
          // this.PACK.className = 'active';
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
          this.WALL = document.getElementById('defaultOpen');
            // this.PACK.className = 'active';
            this.WALL.style.background = '#00477e';
            this.WALL.style.color = 'white';

            //For Getting the value of day and time

            this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe((data:any)=>{
              this.arr_brak_check=data;
              if(this.arr_brak_check.msg.length!=0){


              this.breakfast_start=this.arr_brak_check.msg[0].start_time;
              this.breakfast_end=this.arr_brak_check.msg[0].end_time;
              this.brunch_start=this.breakfast_start;
              this.brunch_end=this.breakfast_end;
              for(let i=0;i<this.arr_brak_check.msg.length;i++){
                if(this.arr_brak_check.msg[i].month_day==2){
                  this.mon_check=document.getElementById('vehicle2');
                  this.mon_check.checked=true;
                  this.mon=2;

                }
                if(this.arr_brak_check.msg[i].month_day==3){
                  this.tue_check=document.getElementById('vehicle3');
                  this.tue_check.checked=true;
                  this.tue=3;

                }
                if(this.arr_brak_check.msg[i].month_day==4){
                  this.wed_check=document.getElementById('vehicle4');
                  this.wed_check.checked=true;
                  this.wed=4;

                }
            if(this.arr_brak_check.msg[i].month_day==5){
                  this.thu_check=document.getElementById('vehicle5');
                  this.thu_check.checked=true;
                  this.thu=5;

                }
                if(this.arr_brak_check.msg[i].month_day==6){
                  this.fri_check=document.getElementById('vehicle6');
                  this.fri_check.checked=true;
                  this.fri=6;

                }
                if(this.arr_brak_check.msg[i].month_day==7){
                  this.sat_check=document.getElementById('vehicle7');
                  this.sat_check.checked=true;
                  this.sat=7;

                }
              if(this.arr_brak_check.msg[i].month_day==8){
                  this.sun_check=document.getElementById('vehicle8');
                  this.sun_check.checked=true;
                  this.sun=8;
                }
                if(this.arr_brak_check.msg.length==7) {
                  this.every=document.getElementById('vehicle1');
                  this.every.checked=true;

                  this.mon_check=document.getElementById('vehicle2');
                  this.mon_check.checked=true;
                  this.tue_check=document.getElementById('vehicle3');
                  this.tue_check.checked=true;
                  this.wed_check=document.getElementById('vehicle4');
                  this.wed_check.checked=true;
                  this.thu_check=document.getElementById('vehicle5');
                  this.thu_check.checked=true;
                  this.fri_check=document.getElementById('vehicle6');
                  this.fri_check.checked=true;
                  this.sat_check=document.getElementById('vehicle7');
                  this.sat_check.checked=true;
                  this.sun_check=document.getElementById('vehicle8');
                  this.sun_check.checked=true;
                  this.mon=2;
                  this.tue=3;
                  this.wed=4;
                  this.thu=5;
                  this.fri=6;
                  this.sat=7;
                  this.sun=8;
                 }
            }
          }
        }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
        
        )
}

       }
       else if(localStorage.getItem('No_of_menu')=='T'){
        if((localStorage.getItem('No_of_menu')=='T')&&(this.v==2)){
          //Snackbar
          if(localStorage.getItem('breakfast')==''){
            this.tab1 = false;
            this.tab2 = true;
            this.tab3 = true;
            this.tab4 = true;
            this.tab5=true;
            this.tab6=true;
            this.Special_menu = document.getElementById('defaultOpen4');
            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';
            this.paris = document.getElementById('London');
            this.paris.className = 'active  tabcontent m-1';
            this.PACK = document.getElementById('defaultOpen2');
            // this.PACK.className = 'active';
            this.PACK.style.background = '#f1f1f1';
            this.PACK.style.color = 'black';
            this.BIRTH = document.getElementById('defaultOpen1');
            // this.PACK.className = 'active';
            this.BIRTH.style.background = '#f1f1f1';
            this.BIRTH.style.color = 'black';
            if(localStorage.getItem('No_of_menu')=='U'){
              this.ENTER = document.getElementById('defaultOpen5');
              // this.PACK.className = 'active';
              this.ENTER.style.background = '#f1f1f1';
              this.ENTER.style.color = 'black';}
            this.ENTER = document.getElementById('defaultOpen3');
            // this.PACK.className = 'active';
            this.ENTER.style.background = '#f1f1f1';
            this.ENTER.style.color = 'black';
            this.WALL = document.getElementById('defaultOpen');
              // this.PACK.className = 'active';
              this.WALL.style.background = '#00477e';
              this.WALL.style.color = 'white';

              //For Getting the value of day and time

              this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe((data:any)=>{
                this.arr_brak_check=data;
                if(this.arr_brak_check.msg.length!=0){


                this.breakfast_start=this.arr_brak_check.msg[0].start_time;
                this.breakfast_end=this.arr_brak_check.msg[0].end_time;
                this.brunch_start=this.breakfast_start;
                this.brunch_end=this.breakfast_end;
                for(let i=0;i<this.arr_brak_check.msg.length;i++){
                  if(this.arr_brak_check.msg[i].month_day==2){
                    this.mon_check=document.getElementById('vehicle2');
                    this.mon_check.checked=true;
                    this.mon=2;

                  }
                  if(this.arr_brak_check.msg[i].month_day==3){
                    this.tue_check=document.getElementById('vehicle3');
                    this.tue_check.checked=true;
                    this.tue=3;

                  }
                  if(this.arr_brak_check.msg[i].month_day==4){
                    this.wed_check=document.getElementById('vehicle4');
                    this.wed_check.checked=true;
                    this.wed=4;

                  }
              if(this.arr_brak_check.msg[i].month_day==5){
                    this.thu_check=document.getElementById('vehicle5');
                    this.thu_check.checked=true;
                    this.thu=5;

                  }
                  if(this.arr_brak_check.msg[i].month_day==6){
                    this.fri_check=document.getElementById('vehicle6');
                    this.fri_check.checked=true;
                    this.fri=6;

                  }
                  if(this.arr_brak_check.msg[i].month_day==7){
                    this.sat_check=document.getElementById('vehicle7');
                    this.sat_check.checked=true;
                    this.sat=7;

                  }
                if(this.arr_brak_check.msg[i].month_day==8){
                    this.sun_check=document.getElementById('vehicle8');
                    this.sun_check.checked=true;
                    this.sun=8;
                  }
                  if(this.arr_brak_check.msg.length==7) {
                    this.every=document.getElementById('vehicle1');
                    this.every.checked=true;

                    this.mon_check=document.getElementById('vehicle2');
                    this.mon_check.checked=true;
                    this.tue_check=document.getElementById('vehicle3');
                    this.tue_check.checked=true;
                    this.wed_check=document.getElementById('vehicle4');
                    this.wed_check.checked=true;
                    this.thu_check=document.getElementById('vehicle5');
                    this.thu_check.checked=true;
                    this.fri_check=document.getElementById('vehicle6');
                    this.fri_check.checked=true;
                    this.sat_check=document.getElementById('vehicle7');
                    this.sat_check.checked=true;
                    this.sun_check=document.getElementById('vehicle8');
                    this.sun_check.checked=true;
                    this.mon=2;
                    this.tue=3;
                    this.wed=4;
                    this.thu=5;
                    this.fri=6;
                    this.sat=7;
                    this.sun=8;
                   }
              }
            }
          }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
          
          )
          }
          else{
          this.msg.globalError('Please update your package')
          }
        //Snackbar
        }
        else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
          this.tab1 = false;
          this.tab2 = true;
          this.tab3 = true;
          this.tab4 = true;
          this.tab5 = true;
          this.tab6=true;
          this.Special_menu = document.getElementById('defaultOpen4');
          this.Special_menu.style.background ='#f1f1f1';
          this.Special_menu.style.color = 'black';
          this.paris = document.getElementById('London');
          this.paris.className = 'active  tabcontent m-1';
          this.PACK = document.getElementById('defaultOpen2');
          // this.PACK.className = 'active';
          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
          this.BIRTH = document.getElementById('defaultOpen1');
          // this.PACK.className = 'active';
          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';

          if(localStorage.getItem('No_of_menu')=='U'){
            this.ENTER = document.getElementById('defaultOpen5');
            // this.PACK.className = 'active';
            this.ENTER.style.background = '#f1f1f1';
            this.ENTER.style.color = 'black';}

          this.ENTER = document.getElementById('defaultOpen3');
          // this.PACK.className = 'active';
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
          this.WALL = document.getElementById('defaultOpen');
            // this.PACK.className = 'active';
            this.WALL.style.background = '#00477e';
            this.WALL.style.color = 'white';
            this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=1`).subscribe((data:any)=>{
              this.arr_brak_check=data;
              if(this.arr_brak_check.msg.length!=0){


              this.breakfast_start=this.arr_brak_check.msg[0].start_time;
              this.breakfast_end=this.arr_brak_check.msg[0].end_time;
              this.brunch_start=this.breakfast_start;
              this.brunch_end=this.breakfast_end;
              for(let i=0;i<this.arr_brak_check.msg.length;i++){
                if(this.arr_brak_check.msg[i].month_day==2){
                  this.mon_check=document.getElementById('vehicle2');
                  this.mon_check.checked=true;
                  this.mon=2;

                }
               if(this.arr_brak_check.msg[i].month_day==3){
                  this.tue_check=document.getElementById('vehicle3');
                  this.tue_check.checked=true;
                  this.tue=3;

                }
                if(this.arr_brak_check.msg[i].month_day==4){
                  this.wed_check=document.getElementById('vehicle4');
                  this.wed_check.checked=true;
                  this.wed=4;

                }
                if(this.arr_brak_check.msg[i].month_day==5){
                  this.thu_check=document.getElementById('vehicle5');
                  this.thu_check.checked=true;
                  this.thu=5;

                }
                if(this.arr_brak_check.msg[i].month_day==6){
                  this.fri_check=document.getElementById('vehicle6');
                  this.fri_check.checked=true;
                  this.fri=6;

                }
              if(this.arr_brak_check.msg[i].month_day==7){
                  this.sat_check=document.getElementById('vehicle7');
                  this.sat_check.checked=true;
                  this.sat=7;

                }
              if(this.arr_brak_check.msg[i].month_day==8){
                  this.sun_check=document.getElementById('vehicle8');
                  this.sun_check.checked=true;
                  this.sun=8;
                }
                if(this.arr_brak_check.msg.length==7){
                  this.every=document.getElementById('vehicle1');
                  this.every.checked=true;

                  this.mon_check=document.getElementById('vehicle2');
                  this.mon_check.checked=true;
                  this.tue_check=document.getElementById('vehicle3');
                  this.tue_check.checked=true;
                  this.wed_check=document.getElementById('vehicle4');
                  this.wed_check.checked=true;
                  this.thu_check=document.getElementById('vehicle5');
                  this.thu_check.checked=true;
                  this.fri_check=document.getElementById('vehicle6');
                  this.fri_check.checked=true;
                  this.sat_check=document.getElementById('vehicle7');
                  this.sat_check.checked=true;
                  this.sun_check=document.getElementById('vehicle8');
                  this.sun_check.checked=true;
                  this.mon=2;
                  this.tue=3;
                  this.wed=4;
                  this.thu=5;
                  this.fri=6;
                  this.sat=7;
                  this.sun=8;
                 }
            }
          }
            })



        }
       }
       else if(localStorage.getItem('No_of_menu')=='U'){
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = true;
        this.tab4 = true;
        this.tab5=true;
        this.tab6=true;
        this.Special_menu = document.getElementById('defaultOpen4');
        this.Special_menu.style.background ='#f1f1f1';
        this.Special_menu.style.color = 'black';
        this.paris = document.getElementById('London');
        this.paris.className = 'active  tabcontent m-1';
        this.PACK = document.getElementById('defaultOpen2');

        this.PACK.style.background = '#f1f1f1';
        this.PACK.style.color = 'black';
        this.BIRTH = document.getElementById('defaultOpen1');

        this.BIRTH.style.background = '#f1f1f1';
        this.BIRTH.style.color = 'black';
        this.ENTER = document.getElementById('defaultOpen5');
        // this.PACK.className = 'active';
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';


        this.ENTER = document.getElementById('defaultOpen3');
        // this.PACK.className = 'active';
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';
        this.WALL = document.getElementById('defaultOpen');
          // this.PACK.className = 'active';
          this.WALL.style.background = '#00477e';
          this.WALL.style.color = 'white';
          this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=1`).subscribe((data:any)=>{
            this.arr_brak_check=data;
            if(this.arr_brak_check.msg.length!=0){


            this.breakfast_start=this.arr_brak_check.msg[0].start_time;
              this.breakfast_end=this.arr_brak_check.msg[0].end_time;
              this.brunch_start=this.breakfast_start;
              this.brunch_end=this.breakfast_end;
            for(let i=0;i<this.arr_brak_check.msg.length;i++){
              if(this.arr_brak_check.msg[i].month_day==2){
                this.mon_check=document.getElementById('vehicle2');
                this.mon_check.checked=true;
                this.mon=2;

              }
              if(this.arr_brak_check.msg[i].month_day==3){
                this.tue_check=document.getElementById('vehicle3');
                this.tue_check.checked=true;
                this.tue=3;

              }
            if(this.arr_brak_check.msg[i].month_day==4){
                this.wed_check=document.getElementById('vehicle4');
                this.wed_check.checked=true;
                this.wed=4;

              }
            if(this.arr_brak_check.msg[i].month_day==5){
                this.thu_check=document.getElementById('vehicle5');
                this.thu_check.checked=true;
                this.thu=5;

              }
            if(this.arr_brak_check.msg[i].month_day==6){
                this.fri_check=document.getElementById('vehicle6');
                this.fri_check.checked=true;
                this.fri=6;

              }
            if(this.arr_brak_check.msg[i].month_day==7){
                this.sat_check=document.getElementById('vehicle7');
                this.sat_check.checked=true;
                this.sat=7;

              }
            if(this.arr_brak_check.msg[i].month_day==8){
                this.sun_check=document.getElementById('vehicle8');
                this.sun_check.checked=true;
                this.sun=8;
              }
              if(this.arr_brak_check.msg.length==7) {
                this.every=document.getElementById('vehicle1');
                this.every.checked=true;

                this.mon_check=document.getElementById('vehicle2');
                this.mon_check.checked=true;
                this.tue_check=document.getElementById('vehicle3');
                this.tue_check.checked=true;
                this.wed_check=document.getElementById('vehicle4');
                this.wed_check.checked=true;
                this.thu_check=document.getElementById('vehicle5');
                this.thu_check.checked=true;
                this.fri_check=document.getElementById('vehicle6');
                this.fri_check.checked=true;
                this.sat_check=document.getElementById('vehicle7');
                this.sat_check.checked=true;
                this.sun_check=document.getElementById('vehicle8');
                this.sun_check.checked=true;
                this.mon=2;
                this.tue=3;
                this.wed=4;
                this.thu=5;
                this.fri=6;
                this.sat=7;
                this.sun=8;
               }
          }
        }
          }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
          
          )


       }
      }
    else if (e == 'Paris'){
     this.brunch_start='';
      this.brunch_end='';
      this.arr_brak_check.length=0;
        console.log(this.v);
        this.break_sec.length=0;
      this.cove_top.length=0;
      this._data.global_service(0,'/menu_setup',`id=${this.resid}`).subscribe(data=>{
        this.cove_top.length=0;
        console.log(data);
        this.cove_top=data;
        // if(this.cove_top.length!=0){


        for(let i=0;i<this.cove_top.menu_dt.length;i++){
          // console.log(this.cove_top.menu_dt[i].menu_id);
          if(this.cove_top.menu_dt.length!=0){

              if(this.cove_top.menu_dt[i].menu_id==2){
                  this.launch_menu=this.cove_top.menu_dt[i].menu_url;
                if(this.cove_top.menu_dt[i].active_flag=='Y'){
                  this.check_launch=document.getElementById('paris');
                  this.check_launch.checked=true;
                  this.launch_check='Y'
                  this.lcc_url=false;
               }
               else {
                this.check_launch=document.getElementById('paris');
                this.check_launch.checked=false;
                this.launch_check='N';
                this.lcc_url=true;

               }
             }


          }
        }
        for(let i=0;i<this.cove_top.oth_dt.length;i++){
         if(this.cove_top.oth_dt.length!=0){

             if(this.cove_top.oth_dt[i].menu_id==2){

                console.log("sadasda3");

                  this.launch_cover=this.cove_top.oth_dt[i].cover_page_url;
                  this.launch_top=this.cove_top.oth_dt[i].top_img_url;
            }
          }

        }

                //For Checking approval flag is on or not
                this._data.global_service(0,'/check_activity',`id=${this.resid}`).subscribe(data=>{
                  console.log(data);
                  this.check=data;
                  if(this.check.msg[0].approval_flag=='U'){

                  }
                  else{
                    if(localStorage.getItem('breakfast')==''){
                      this.londondefault=false;

                    }
                    if(localStorage.getItem('launch')==''){
                      this.parisdefault=false;

                    }
                    if(localStorage.getItem('dinner')==''){
                      this.tokyodefault=false;

                    }
                    if(localStorage.getItem('brunch')==''){
                      this.lagunadefault=false;

                    }
                    this.b_url=true;
                    this.lcc_url=true;
                    this.d_url=true;
                    this.br_url=true;
                    this.break_button=true;
                    this.launch_button=true;
                    this.dinner_button=true;
                    this.brunch_button=true;
                    console.log(this.b_url,this.lcc_url,this.d_url,this.br_url)

                  }
                }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
                
                )
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )

      this._data.global_service(0,'/section_image',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
        console.log(data);
        this.break_sec=data
        if(this.break_sec.msg.length!=0){


        for(let i=0;i<this.break_sec.msg.length;i++)
        {

            if(this.break_sec.msg[i].sec_url!=''){
            this.launch_sec=this.break_sec.msg[i].sec_url
           }
           else{
            this.launch_sec="";

           }

        }
      }

      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )

     if(localStorage.getItem('No_of_menu')=='O'){
      if((localStorage.getItem('No_of_menu')=='O')&&(this.v==1)){
        //Snackbar
        // this.msg.globalError('Please update your package')
        if(localStorage.getItem('launch')==''){
          this.tab1 = true;
       this.tab2 = false;
       this.tab3 = true;
       this.tab4 = true;
       this.tab5=true;
       this.tab6=true;
            this.Special_menu = document.getElementById('defaultOpen4');
            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';
       this.paris = document.getElementById('Paris');
       this.paris.className = 'active  tabcontent m-1';
       this.PACK = document.getElementById('defaultOpen2');
       // this.PACK.className = 'active';
       this.PACK.style.background = '#f1f1f1';
       this.PACK.style.color = 'black';

       this.BIRTH = document.getElementById('defaultOpen');
       // this.PACK.className = 'active';
       this.BIRTH.style.background = '#f1f1f1';
       this.BIRTH.style.color = 'black';

       if(localStorage.getItem('No_of_menu')=='U'){
        this.ENTER = document.getElementById('defaultOpen5');
        // this.PACK.className = 'active';
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';}
       this.ENTER = document.getElementById('defaultOpen3');
       // this.PACK.className = 'active';
       this.ENTER.style.background = '#f1f1f1';
       this.ENTER.style.color = 'black';
       this.WALL = document.getElementById('defaultOpen1');
       // this.PACK.className = 'active';
       this.WALL.style.background = '#00477e';
       this.WALL.style.color = 'white';
       this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
         this.arr_brak_check=data;
         if(this.arr_brak_check.msg.length!=0){

          this.launch_start=this.arr_brak_check.msg[0].start_time;
              this.launch_end=this.arr_brak_check.msg[0].end_time;
              // this.brunch_start=this.launch_start;
              // this.brunch_end=this.launch_end;
        for(let i=0;i<this.arr_brak_check.msg.length;i++){
          if(this.arr_brak_check.msg[i].month_day==2){
            this.mon_check=document.getElementById('vehicle22');
            this.mon_check.checked=true;
            this.mon_launch=2;

          }
           if(this.arr_brak_check.msg[i].month_day==3){
            this.tue_check=document.getElementById('vehicle32');
            this.tue_check.checked=true;
            this.tue_launch=3;

          }
          if(this.arr_brak_check.msg[i].month_day==4){
            this.wed_check=document.getElementById('vehicle42');
            this.wed_check.checked=true;
            this.wed_launch=4;

          }
          if(this.arr_brak_check.msg[i].month_day==5){
            this.thu_check=document.getElementById('vehicle52');
            this.thu_check.checked=true;
            this.thu_launch=5;

          }
          if(this.arr_brak_check.msg[i].month_day==6){
            this.fri_check=document.getElementById('vehicle62');
            this.fri_check.checked=true;
            this.fri_launch=6;

          }
           if(this.arr_brak_check.msg[i].month_day==7){
            this.sat_check=document.getElementById('vehicle72');
            this.sat_check.checked=true;
            this.sat_launch=7;

          }
         if(this.arr_brak_check.msg[i].month_day==8){
            this.sun_check=document.getElementById('vehicle82');
            this.sun_check.checked=true;
            this.sun_launch=8;
          }
          if(this.arr_brak_check.msg.length==7){
            this.every=document.getElementById('vehicle12');
            this.every.checked=true;
            this.mon_check=document.getElementById('vehicle22');
            this.mon_check.checked=true;
            this.tue_check=document.getElementById('vehicle32');
            this.tue_check.checked=true;
            this.wed_check=document.getElementById('vehicle42');
            this.wed_check.checked=true;
            this.thu_check=document.getElementById('vehicle52');
            this.thu_check.checked=true;
            this.fri_check=document.getElementById('vehicle62');
            this.fri_check.checked=true;
            this.sat_check=document.getElementById('vehicle72');
            this.sat_check.checked=true;
            this.sun_check=document.getElementById('vehicle82');
            this.sun_check.checked=true;
            this.mon_launch=2;
            this.tue_launch=3;
            this.wed_launch=4;
            this.thu_launch=5;
            this.fri_launch=6;
            this.sat_launch=7;
            this.sun_launch=8;
           }
    }
  }

      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      
      )

        }
        else{
        this.msg.globalError('Please update your package')

        }

      }
     else if((localStorage.getItem('No_of_menu')=='O')&&(this.v!=1)){
       this.tab1 = true;
       this.tab2 = false;
       this.tab3 = true;
       this.tab4 = true;
       this.tab5=true;
       this.tab6=true;
       if(localStorage.getItem('No_of_menu')=='U'){
        this.ENTER = document.getElementById('defaultOpen5');
        // this.PACK.className = 'active';
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';}
            this.Special_menu = document.getElementById('defaultOpen4');
            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';
       this.paris = document.getElementById('Paris');
       this.paris.className = 'active  tabcontent m-1';
       this.PACK = document.getElementById('defaultOpen2');
       // this.PACK.className = 'active';
       this.PACK.style.background = '#f1f1f1';
       this.PACK.style.color = 'black';

       this.BIRTH = document.getElementById('defaultOpen');
       // this.PACK.className = 'active';
       this.BIRTH.style.background = '#f1f1f1';
       this.BIRTH.style.color = 'black';


       this.ENTER = document.getElementById('defaultOpen3');
       // this.PACK.className = 'active';
       this.ENTER.style.background = '#f1f1f1';
       this.ENTER.style.color = 'black';
       this.WALL = document.getElementById('defaultOpen1');
       // this.PACK.className = 'active';
       this.WALL.style.background = '#00477e';
       this.WALL.style.color = 'white';
       this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
         this.arr_brak_check=data;
         if(this.arr_brak_check.msg.length!=0){

          this.launch_start=this.arr_brak_check.msg[0].start_time;
              this.launch_end=this.arr_brak_check.msg[0].end_time;
              // this.brunch_start=this.launch_start;
              // this.brunch_end=this.launch_end;
        for(let i=0;i<this.arr_brak_check.msg.length;i++){
          if(this.arr_brak_check.msg[i].month_day==2){
            this.mon_check=document.getElementById('vehicle22');
            this.mon_check.checked=true;
            this.mon_launch=2;

          }
           if(this.arr_brak_check.msg[i].month_day==3){
            this.tue_check=document.getElementById('vehicle32');
            this.tue_check.checked=true;
            this.tue_launch=3;

          }
          if(this.arr_brak_check.msg[i].month_day==4){
            this.wed_check=document.getElementById('vehicle42');
            this.wed_check.checked=true;
            this.wed_launch=4;

          }
          if(this.arr_brak_check.msg[i].month_day==5){
            this.thu_check=document.getElementById('vehicle52');
            this.thu_check.checked=true;
            this.thu_launch=5;

          }
          if(this.arr_brak_check.msg[i].month_day==6){
            this.fri_check=document.getElementById('vehicle62');
            this.fri_check.checked=true;
            this.fri_launch=6;

          }
           if(this.arr_brak_check.msg[i].month_day==7){
            this.sat_check=document.getElementById('vehicle72');
            this.sat_check.checked=true;
            this.sat_launch=7;

          }
         if(this.arr_brak_check.msg[i].month_day==8){
            this.sun_check=document.getElementById('vehicle82');
            this.sun_check.checked=true;
            this.sun_launch=8;
          }
          if(this.arr_brak_check.msg.length==7){
            this.every=document.getElementById('vehicle12');
            this.every.checked=true;
            this.mon_check=document.getElementById('vehicle22');
            this.mon_check.checked=true;
            this.tue_check=document.getElementById('vehicle32');
            this.tue_check.checked=true;
            this.wed_check=document.getElementById('vehicle42');
            this.wed_check.checked=true;
            this.thu_check=document.getElementById('vehicle52');
            this.thu_check.checked=true;
            this.fri_check=document.getElementById('vehicle62');
            this.fri_check.checked=true;
            this.sat_check=document.getElementById('vehicle72');
            this.sat_check.checked=true;
            this.sun_check=document.getElementById('vehicle82');
            this.sun_check.checked=true;
            this.mon_launch=2;
            this.tue_launch=3;
            this.wed_launch=4;
            this.thu_launch=5;
            this.fri_launch=6;
            this.sat_launch=7;
            this.sun_launch=8;
           }
    }
  }

      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )

     }

     }
    else if(localStorage.getItem('No_of_menu')=='T'){
     if((localStorage.getItem('No_of_menu')=='T')&&(this.v==2)){
       
        if(localStorage.getItem('launch')==''){
          this.tab1 = true;
       this.tab2 = false;
       this.tab3 = true;
       this.tab4 = true;
       this.tab5=true;
       this.tab6=true;
       if(localStorage.getItem('No_of_menu')=='U'){
        this.ENTER = document.getElementById('defaultOpen5');
        // this.PACK.className = 'active';
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';}

            this.Special_menu = document.getElementById('defaultOpen4');
            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';
       this.paris = document.getElementById('Paris');
       this.paris.className = 'active  tabcontent m-1';
       this.PACK = document.getElementById('defaultOpen2');
       // this.PACK.className = 'active';
       this.PACK.style.background = '#f1f1f1';
       this.PACK.style.color = 'black';

       this.BIRTH = document.getElementById('defaultOpen');
       // this.PACK.className = 'active';
       this.BIRTH.style.background = '#f1f1f1';
       this.BIRTH.style.color = 'black';


       this.ENTER = document.getElementById('defaultOpen3');
       // this.PACK.className = 'active';
       this.ENTER.style.background = '#f1f1f1';
       this.ENTER.style.color = 'black';
       this.WALL = document.getElementById('defaultOpen1');
       // this.PACK.className = 'active';
       this.WALL.style.background = '#00477e';
       this.WALL.style.color = 'white';
       this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
         this.arr_brak_check=data;
         if(this.arr_brak_check.msg.length!=0){

          this.launch_start=this.arr_brak_check.msg[0].start_time;
              this.launch_end=this.arr_brak_check.msg[0].end_time;
              // this.brunch_start=this.launch_start;
              // this.brunch_end=this.launch_end;
        for(let i=0;i<this.arr_brak_check.msg.length;i++){
          if(this.arr_brak_check.msg[i].month_day==2){
            this.mon_check=document.getElementById('vehicle22');
            this.mon_check.checked=true;
            this.mon_launch=2;

          }
           if(this.arr_brak_check.msg[i].month_day==3){
            this.tue_check=document.getElementById('vehicle32');
            this.tue_check.checked=true;
            this.tue_launch=3;

          }
          if(this.arr_brak_check.msg[i].month_day==4){
            this.wed_check=document.getElementById('vehicle42');
            this.wed_check.checked=true;
            this.wed_launch=4;

          }
          if(this.arr_brak_check.msg[i].month_day==5){
            this.thu_check=document.getElementById('vehicle52');
            this.thu_check.checked=true;
            this.thu_launch=5;

          }
          if(this.arr_brak_check.msg[i].month_day==6){
            this.fri_check=document.getElementById('vehicle62');
            this.fri_check.checked=true;
            this.fri_launch=6;

          }
           if(this.arr_brak_check.msg[i].month_day==7){
            this.sat_check=document.getElementById('vehicle72');
            this.sat_check.checked=true;
            this.sat_launch=7;

          }
         if(this.arr_brak_check.msg[i].month_day==8){
            this.sun_check=document.getElementById('vehicle82');
            this.sun_check.checked=true;
            this.sun_launch=8;
          }
          if(this.arr_brak_check.msg.length==7){
            this.every=document.getElementById('vehicle12');
            this.every.checked=true;
            this.mon_check=document.getElementById('vehicle22');
            this.mon_check.checked=true;
            this.tue_check=document.getElementById('vehicle32');
            this.tue_check.checked=true;
            this.wed_check=document.getElementById('vehicle42');
            this.wed_check.checked=true;
            this.thu_check=document.getElementById('vehicle52');
            this.thu_check.checked=true;
            this.fri_check=document.getElementById('vehicle62');
            this.fri_check.checked=true;
            this.sat_check=document.getElementById('vehicle72');
            this.sat_check.checked=true;
            this.sun_check=document.getElementById('vehicle82');
            this.sun_check.checked=true;
            this.mon_launch=2;
            this.tue_launch=3;
            this.wed_launch=4;
            this.thu_launch=5;
            this.fri_launch=6;
            this.sat_launch=7;
            this.sun_launch=8;
           }
    }
  }

      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )

        }
        else{
        this.msg.globalError('Please update your package')

        }

        }
        else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
          this.tab1 = true;
          this.tab2 = false;
          this.tab3 = true;
          this.tab4 = true;
          this.tab5=true;
          this.tab6=true;
          if(localStorage.getItem('No_of_menu')=='U'){
            this.ENTER = document.getElementById('defaultOpen5');
            // this.PACK.className = 'active';
            this.ENTER.style.background = '#f1f1f1';
            this.ENTER.style.color = 'black';}
            this.Special_menu = document.getElementById('defaultOpen4');

            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';
          this.paris = document.getElementById('Paris');
          this.paris.className = 'active  tabcontent m-1';
          this.PACK = document.getElementById('defaultOpen2');
          // this.PACK.className = 'active';
          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';

          this.BIRTH = document.getElementById('defaultOpen');
          // this.PACK.className = 'active';
          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';


          this.ENTER = document.getElementById('defaultOpen3');
          // this.PACK.className = 'active';
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
          this.WALL = document.getElementById('defaultOpen1');
          // this.PACK.className = 'active';
          this.WALL.style.background = '#00477e';
          this.WALL.style.color = 'white';

          this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
            console.log(data);
            this.arr_brak_check=data;
            if(this.arr_brak_check.msg.length!=0){

            this.launch_start=this.arr_brak_check.msg[0].start_time;
              this.launch_end=this.arr_brak_check.msg[0].end_time;
              // this.brunch_start=this.launch_start;
              // this.brunch_end=this.launch_end;
            for(let i=0;i<this.arr_brak_check.msg.length;i++){
              if(this.arr_brak_check.msg[i].month_day==2){
                this.mon_check=document.getElementById('vehicle22');
                this.mon_check.checked=true;
                this.mon_launch=2;

              }
               if(this.arr_brak_check.msg[i].month_day==3){
                this.tue_check=document.getElementById('vehicle32');
                this.tue_check.checked=true;
                this.tue_launch=3;

              }
               if(this.arr_brak_check.msg[i].month_day==4){
                this.wed_check=document.getElementById('vehicle42');
                this.wed_check.checked=true;
                this.wed_launch=4;

              }
            if(this.arr_brak_check.msg[i].month_day==5){
                this.thu_check=document.getElementById('vehicle52');
                this.thu_check.checked=true;
                this.thu_launch=5;

              }
               if(this.arr_brak_check.msg[i].month_day==6){
                this.fri_check=document.getElementById('vehicle62');
                this.fri_check.checked=true;
                this.fri_launch=6;

              }
              if(this.arr_brak_check.msg[i].month_day==7){
                this.sat_check=document.getElementById('vehicle72');
                this.sat_check.checked=true;
                this.sat_launch=7;

              }
             if(this.arr_brak_check.msg[i].month_day==8){
                this.sun_check=document.getElementById('vehicle82');
                this.sun_check.checked=true;
                this.sun_launch=8;
              }
              if(this.arr_brak_check.msg.length==7) {
                this.every=document.getElementById('vehicle12');
                this.every.checked=true;
                this.mon_check=document.getElementById('vehicle22');
                this.mon_check.checked=true;
                this.tue_check=document.getElementById('vehicle32');
                this.tue_check.checked=true;
                this.wed_check=document.getElementById('vehicle42');
                this.wed_check.checked=true;
                this.thu_check=document.getElementById('vehicle52');
                this.thu_check.checked=true;
                this.fri_check=document.getElementById('vehicle62');
                this.fri_check.checked=true;
                this.sat_check=document.getElementById('vehicle72');
                this.sat_check.checked=true;
                this.sun_check=document.getElementById('vehicle82');
                this.sun_check.checked=true;
                this.mon_launch=2;
                this.tue_launch=3;
                this.wed_launch=4;
                this.thu_launch=5;
                this.fri_launch=6;
                this.sat_launch=7;
                this.sun_launch=8;
               }
        }
      }
          }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
          
          )

        }
      }
      else if(localStorage.getItem('No_of_menu')=='U'){
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = true;
        this.tab4 = true;
        this.tab5=true;
        this.tab6=true;
        this.ENTER = document.getElementById('defaultOpen5');
        // this.PACK.className = 'active';
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';
            this.Special_menu = document.getElementById('defaultOpen4');

            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';
        this.paris = document.getElementById('Paris');
        this.paris.className = 'active  tabcontent m-1';
        this.PACK = document.getElementById('defaultOpen2');

        this.PACK.style.background = '#f1f1f1';
        this.PACK.style.color = 'black';

        this.BIRTH = document.getElementById('defaultOpen');

        this.BIRTH.style.background = '#f1f1f1';
        this.BIRTH.style.color = 'black';


        this.ENTER = document.getElementById('defaultOpen3');

        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';
        this.WALL = document.getElementById('defaultOpen1');

        this.WALL.style.background = '#00477e';
        this.WALL.style.color = 'white';
        this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
          this.arr_brak_check=data;
          if(this.arr_brak_check.msg.length!=0){
             this.launch_start=this.arr_brak_check.msg[0].start_time;
          this.launch_end=this.arr_brak_check.msg[0].end_time;
          // this.brunch_start=this.launch_start;
          // this.brunch_end=this.launch_end;
          for(let i=0;i<this.arr_brak_check.msg.length;i++){
            if(this.arr_brak_check.msg[i].month_day==2){
              this.mon_check=document.getElementById('vehicle22');
              this.mon_check.checked=true;
              this.mon_launch=2;

            }
           if(this.arr_brak_check.msg[i].month_day==3){
              this.tue_check=document.getElementById('vehicle32');
              this.tue_check.checked=true;
              this.tue_launch=3;

            }
           if(this.arr_brak_check.msg[i].month_day==4){
              this.wed_check=document.getElementById('vehicle42');
              this.wed_check.checked=true;
              this.wed_launch=4;

            }
            if(this.arr_brak_check.msg[i].month_day==5){
              this.thu_check=document.getElementById('vehicle52');
              this.thu_check.checked=true;
              this.thu_launch=5;

            }
            if(this.arr_brak_check.msg[i].month_day==6){
              this.fri_check=document.getElementById('vehicle62');
              this.fri_check.checked=true;
              this.fri_launch=6;

            }
           if(this.arr_brak_check.msg[i].month_day==7){
              this.sat_check=document.getElementById('vehicle72');
              this.sat_check.checked=true;
              this.sat_launch=7;

            }
           if(this.arr_brak_check.msg[i].month_day==8){
              this.sun_check=document.getElementById('vehicle82');
              this.sun_check.checked=true;
              this.sun_launch=8;
            }
            if(this.arr_brak_check.msg.length==7) {
              this.every=document.getElementById('vehicle12');
              this.every.checked=true;
              this.mon_check=document.getElementById('vehicle22');
              this.mon_check.checked=true;
              this.tue_check=document.getElementById('vehicle32');
              this.tue_check.checked=true;
              this.wed_check=document.getElementById('vehicle42');
              this.wed_check.checked=true;
              this.thu_check=document.getElementById('vehicle52');
              this.thu_check.checked=true;
              this.fri_check=document.getElementById('vehicle62');
              this.fri_check.checked=true;
              this.sat_check=document.getElementById('vehicle72');
              this.sat_check.checked=true;
              this.sun_check=document.getElementById('vehicle82');
              this.sun_check.checked=true;
              this.mon_launch=2;
              this.tue_launch=3;
              this.wed_launch=4;
              this.thu_launch=5;
              this.fri_launch=6;
              this.sat_launch=7;
              this.sun_launch=8;
             }
      }
    }
        }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
        
        
        )
      }

    }
    else if (e == 'Tokyo'){
      this.break_sec.length=0;
      this.cove_top.length=0;
      this.arr_brak_check.length=0;
      this.brunch_start='';
        this.brunch_end='';
        this._data.global_service(0,'/menu_setup',`id=${this.resid}`).subscribe(data=>{
          this.cove_top.length=0;
          console.log(data);
          this.cove_top=data;
          for(let i=0;i<this.cove_top.menu_dt.length;i++){
            if(this.cove_top.menu_dt.length!=0){
              if(this.cove_top.menu_dt[i].menu_id==3){
                  this.dinner_menu=this.cove_top.menu_dt[i].menu_url;
                if(this.cove_top.menu_dt[i].active_flag=='Y'){
                  this.check_dinner=document.getElementById('tokyo');
                  this.check_dinner.checked=true;
                  this.brunch_check='Y';
                  this.d_url=false;
               }
               else {
                this.check_dinner=document.getElementById('tokyo');
                this.check_dinner.checked=false;
                this.brunch_check='N';
                this.d_url=true;

               }
               }


            }
           }
           for(let i=0;i<this.cove_top.oth_dt.length;i++){
            if(this.cove_top.oth_dt.length!=0){
              if(this.cove_top.oth_dt[i].menu_id == 3){
                console.log("sadasda2");
                  this.dinner_cover=this.cove_top.oth_dt[i].cover_page_url;
                  this.dinner_top=this.cove_top.oth_dt[i].top_img_url;
                  // this.dinner_menu=this.cove_top.oth_dt[i].menu_url;
              //   if(this.cove_top.oth_dt[i].active_flag=='Y'){
              //     this.check_dinner=document.getElementById('tokyo');
              //     this.check_dinner.checked=true;
              //     this.brunch_check='Y';
              //     this.d_url=false;
              //  }
              //  else {
              //   this.check_dinner=document.getElementById('tokyo');
              //   this.check_dinner.checked=false;
              //   this.brunch_check='N';
              //   this.d_url=true;

              //  }
               }



            }
           }
                //For Checking approval flag is on or not
            this._data.global_service(0,'/check_Activity',`id=${this.resid}`).subscribe(data=>{
    console.log(data);
    this.check=data;
    if(this.check.msg[0].approval_flag=='U'){

    }
    else{
      if(localStorage.getItem('breakfast')==''){
        this.londondefault=false;

      }
      if(localStorage.getItem('launch')==''){
        this.parisdefault=false;

      }
      if(localStorage.getItem('dinner')==''){
        this.tokyodefault=false;

      }
      if(localStorage.getItem('brunch')==''){
        this.lagunadefault=false;

      }
      this.b_url=true;
      this.lcc_url=true;
      this.d_url=true;
      this.br_url=true;
      this.break_button=true;
      this.launch_button=true;
      this.dinner_button=true;
      this.brunch_button=true;
      console.log(this.b_url,this.lcc_url,this.d_url,this.br_url)

    }
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
        }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
        
        )
        this._data.global_service(0,'/section_image',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
        console.log(data);
        this.break_sec=data
        if(this.break_sec.msg.length!=0){
        for(let i=0;i<this.break_sec.msg.length;i++)
        {
          if(this.break_sec.msg[i].sec_url!=''){
            this.dinner_sec=this.break_sec.msg[i].sec_url
           }
           else{
            this.dinner_sec="";

           }
        }
      }

      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
    if(localStorage.getItem('No_of_menu')=='O'){
          if((localStorage.getItem('No_of_menu')=='O')&&(this.v==1)){
          //Snack Bar
          // this.msg.globalError('Please update your package')
          if(localStorage.getItem('dinner')==''){
            this.tab1 = true;
            this.tab2 = true;
            this.tab3 = false;
            this.tab4 = true;
            this.tab5=true;
            this.tab6=true;
            if(localStorage.getItem('No_of_menu')=='U'){
              this.ENTER = document.getElementById('defaultOpen5');
              // this.PACK.className = 'active';
              this.ENTER.style.background = '#f1f1f1';
              this.ENTER.style.color = 'black';}
            this.Special_menu = document.getElementById('defaultOpen4');

            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';
            this.paris = document.getElementById('Tokyo');
            this.paris.className = 'active  tabcontent m-1';

            this.PACK = document.getElementById('defaultOpen1');

            this.PACK.style.background = '#f1f1f1';
            this.PACK.style.color = 'black';
            this.BIRTH = document.getElementById('defaultOpen');

            this.BIRTH.style.background = '#f1f1f1';
            this.BIRTH.style.color = 'black';


            this.ENTER = document.getElementById('defaultOpen3');

            this.ENTER.style.background = '#f1f1f1';
            this.ENTER.style.color = 'black';
            this.WALL = document.getElementById('defaultOpen2');

            this.WALL.style.background = '#00477e';
            this.WALL.style.color = 'white';
            this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
              this.arr_brak_check=data;
              if(this.arr_brak_check.msg.length!=0){


              this.dinner_start=this.arr_brak_check.msg[0].start_time;
              this.dinner_end=this.arr_brak_check.msg[0].end_time;
              // this.brunch_start=this.dinner_start;
              //   this.brunch_end=this.dinner_end;
              for(let i=0;i<this.arr_brak_check.msg.length;i++){
                if(this.arr_brak_check.msg[i].month_day==2){
                  this.mon_check=document.getElementById('vehicle23');
                  this.mon_check.checked=true;
                  this.mon_dinner=2;

                }
                if(this.arr_brak_check.msg[i].month_day==3){
                  this.tue_check=document.getElementById('vehicle33');
                  this.tue_check.checked=true;
                  this.tue_dinner=3;

                }
                if(this.arr_brak_check.msg[i].month_day==4){
                  this.wed_check=document.getElementById('vehicle43');
                  this.wed_check.checked=true;
                  this.wed_dinner=4;

                }
                if(this.arr_brak_check.msg[i].month_day==5){
                  this.thu_check=document.getElementById('vehicle53');
                  this.thu_check.checked=true;
                  this.thu_dinner=5;

                }
                if(this.arr_brak_check.msg[i].month_day==6){
                  this.fri_check=document.getElementById('vehicle63');
                  this.fri_check.checked=true;
                  this.fri_dinner=6;

                }
                if(this.arr_brak_check.msg[i].month_day==7){
                  this.sat_check=document.getElementById('vehicle73');
                  this.sat_check.checked=true;
                  this.sat_dinner=7;

                }
               if(this.arr_brak_check.msg[i].month_day==8){
                  this.sun_check=document.getElementById('vehicle83');
                  this.sun_check.checked=true;
                  this.sun_dinner=8;
                }
                if(this.arr_brak_check.msg.length==7) {
                  this.every=document.getElementById('vehicle13');
                  this.every.checked=true;
                  this.mon_check=document.getElementById('vehicle23');
                  this.mon_check.checked=true;
                  this.tue_check=document.getElementById('vehicle33');
                  this.tue_check.checked=true;
                  this.wed_check=document.getElementById('vehicle43');
                  this.wed_check.checked=true;
                  this.thu_check=document.getElementById('vehicle53');
                  this.thu_check.checked=true;
                  this.fri_check=document.getElementById('vehicle63');
                  this.fri_check.checked=true;
                  this.sat_check=document.getElementById('vehicle73');
                  this.sat_check.checked=true;
                  this.sun_check=document.getElementById('vehicle83');
                  this.sun_check.checked=true;
                  this.mon_dinner=2;
                  this.tue_dinner=3;
                  this.wed_dinner=4;
                  this.thu_dinner=5;
                  this.fri_dinner=6;
                  this.sat_dinner=7;
                  this.sun_dinner=8;
                 }
          }
        }
            }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
            
            )

          }
          else{
          this.msg.globalError('Please update your package')

          }

          }
          else if((localStorage.getItem('No_of_menu')=='O')&&(this.v!=1)){
            this.tab1 = true;
            this.tab2 = true;
            this.tab3 = false;
            this.tab4 = true;
            this.tab5=true;
            this.tab6=true;
            if(localStorage.getItem('No_of_menu')=='U'){
              this.ENTER = document.getElementById('defaultOpen5');
              // this.PACK.className = 'active';
              this.ENTER.style.background = '#f1f1f1';
              this.ENTER.style.color = 'black';}
            this.Special_menu = document.getElementById('defaultOpen4');

            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';
            this.paris = document.getElementById('Tokyo');
            this.paris.className = 'active  tabcontent m-1';

            this.PACK = document.getElementById('defaultOpen1');

            this.PACK.style.background = '#f1f1f1';
            this.PACK.style.color = 'black';
            this.BIRTH = document.getElementById('defaultOpen');

            this.BIRTH.style.background = '#f1f1f1';
            this.BIRTH.style.color = 'black';


            this.ENTER = document.getElementById('defaultOpen3');

            this.ENTER.style.background = '#f1f1f1';
            this.ENTER.style.color = 'black';
            this.WALL = document.getElementById('defaultOpen2');

            this.WALL.style.background = '#00477e';
            this.WALL.style.color = 'white';
            this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
              this.arr_brak_check=data;
              if(this.arr_brak_check.msg.length!=0){


              this.dinner_start=this.arr_brak_check.msg[0].start_time;
              this.dinner_end=this.arr_brak_check.msg[0].end_time;
              // this.brunch_start=this.dinner_start;
              //   this.brunch_end=this.dinner_end;
              for(let i=0;i<this.arr_brak_check.msg.length;i++){
                if(this.arr_brak_check.msg[i].month_day==2){
                  this.mon_check=document.getElementById('vehicle23');
                  this.mon_check.checked=true;
                  this.mon_dinner=2;

                }
                if(this.arr_brak_check.msg[i].month_day==3){
                  this.tue_check=document.getElementById('vehicle33');
                  this.tue_check.checked=true;
                  this.tue_dinner=3;

                }
                if(this.arr_brak_check.msg[i].month_day==4){
                  this.wed_check=document.getElementById('vehicle43');
                  this.wed_check.checked=true;
                  this.wed_dinner=4;

                }
                if(this.arr_brak_check.msg[i].month_day==5){
                  this.thu_check=document.getElementById('vehicle53');
                  this.thu_check.checked=true;
                  this.thu_dinner=5;

                }
                if(this.arr_brak_check.msg[i].month_day==6){
                  this.fri_check=document.getElementById('vehicle63');
                  this.fri_check.checked=true;
                  this.fri_dinner=6;

                }
                if(this.arr_brak_check.msg[i].month_day==7){
                  this.sat_check=document.getElementById('vehicle73');
                  this.sat_check.checked=true;
                  this.sat_dinner=7;

                }
               if(this.arr_brak_check.msg[i].month_day==8){
                  this.sun_check=document.getElementById('vehicle83');
                  this.sun_check.checked=true;
                  this.sun_dinner=8;
                }
                if(this.arr_brak_check.msg.length==7) {
                  this.every=document.getElementById('vehicle13');
                  this.every.checked=true;
                  this.mon_check=document.getElementById('vehicle23');
                  this.mon_check.checked=true;
                  this.tue_check=document.getElementById('vehicle33');
                  this.tue_check.checked=true;
                  this.wed_check=document.getElementById('vehicle43');
                  this.wed_check.checked=true;
                  this.thu_check=document.getElementById('vehicle53');
                  this.thu_check.checked=true;
                  this.fri_check=document.getElementById('vehicle63');
                  this.fri_check.checked=true;
                  this.sat_check=document.getElementById('vehicle73');
                  this.sat_check.checked=true;
                  this.sun_check=document.getElementById('vehicle83');
                  this.sun_check.checked=true;
                  this.mon_dinner=2;
                  this.tue_dinner=3;
                  this.wed_dinner=4;
                  this.thu_dinner=5;
                  this.fri_dinner=6;
                  this.sat_dinner=7;
                  this.sun_dinner=8;
                 }
          }
        }
            }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
            
            )

          }
        }
        else if(localStorage.getItem('No_of_menu')=='T')
         {
          if((localStorage.getItem('No_of_menu')=='T')&&(this.v==2)){
            if(localStorage.getItem('dinner')==''){
              this.tab1 = true;
              this.tab2 = true;
              this.tab3 = false;
              this.tab4 = true;
              this.tab5=true;
              this.tab6=true;
              if(localStorage.getItem('No_of_menu')=='U'){
                this.ENTER = document.getElementById('defaultOpen5');
                // this.PACK.className = 'active';
                this.ENTER.style.background = '#f1f1f1';
                this.ENTER.style.color = 'black';}
            this.Special_menu = document.getElementById('defaultOpen4');

            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';
              this.paris = document.getElementById('Tokyo');
              this.paris.className = 'active  tabcontent m-1';

              this.PACK = document.getElementById('defaultOpen1');

              this.PACK.style.background = '#f1f1f1';
              this.PACK.style.color = 'black';
              this.BIRTH = document.getElementById('defaultOpen');

              this.BIRTH.style.background = '#f1f1f1';
              this.BIRTH.style.color = 'black';


              this.ENTER = document.getElementById('defaultOpen3');

              this.ENTER.style.background = '#f1f1f1';
              this.ENTER.style.color = 'black';
              this.WALL = document.getElementById('defaultOpen2');

              this.WALL.style.background = '#00477e';
              this.WALL.style.color = 'white';
              this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id={v1}`).subscribe(data=>{
                this.arr_brak_check=data;
                if(this.arr_brak_check.msg.length!=0){


                this.dinner_start=this.arr_brak_check.msg[0].start_time;
                this.dinner_end=this.arr_brak_check.msg[0].end_time;
                // this.brunch_start=this.dinner_start;
                //   this.brunch_end=this.dinner_end;
                for(let i=0;i<this.arr_brak_check.msg.length;i++){
                  if(this.arr_brak_check.msg[i].month_day==2){
                    this.mon_check=document.getElementById('vehicle23');
                    this.mon_check.checked=true;
                    this.mon_dinner=2;

                  }
                  if(this.arr_brak_check.msg[i].month_day==3){
                    this.tue_check=document.getElementById('vehicle33');
                    this.tue_check.checked=true;
                    this.tue_dinner=3;

                  }
                  if(this.arr_brak_check.msg[i].month_day==4){
                    this.wed_check=document.getElementById('vehicle43');
                    this.wed_check.checked=true;
                    this.wed_dinner=4;

                  }
                  if(this.arr_brak_check.msg[i].month_day==5){
                    this.thu_check=document.getElementById('vehicle53');
                    this.thu_check.checked=true;
                    this.thu_dinner=5;

                  }
                  if(this.arr_brak_check.msg[i].month_day==6){
                    this.fri_check=document.getElementById('vehicle63');
                    this.fri_check.checked=true;
                    this.fri_dinner=6;

                  }
                  if(this.arr_brak_check.msg[i].month_day==7){
                    this.sat_check=document.getElementById('vehicle73');
                    this.sat_check.checked=true;
                    this.sat_dinner=7;

                  }
                 if(this.arr_brak_check.msg[i].month_day==8){
                    this.sun_check=document.getElementById('vehicle83');
                    this.sun_check.checked=true;
                    this.sun_dinner=8;
                  }
                  if(this.arr_brak_check.msg.length==7) {
                    this.every=document.getElementById('vehicle13');
                    this.every.checked=true;
                    this.mon_check=document.getElementById('vehicle23');
                    this.mon_check.checked=true;
                    this.tue_check=document.getElementById('vehicle33');
                    this.tue_check.checked=true;
                    this.wed_check=document.getElementById('vehicle43');
                    this.wed_check.checked=true;
                    this.thu_check=document.getElementById('vehicle53');
                    this.thu_check.checked=true;
                    this.fri_check=document.getElementById('vehicle63');
                    this.fri_check.checked=true;
                    this.sat_check=document.getElementById('vehicle73');
                    this.sat_check.checked=true;
                    this.sun_check=document.getElementById('vehicle83');
                    this.sun_check.checked=true;
                    this.mon_dinner=2;
                    this.tue_dinner=3;
                    this.wed_dinner=4;
                    this.thu_dinner=5;
                    this.fri_dinner=6;
                    this.sat_dinner=7;
                    this.sun_dinner=8;
                   }
            }
          }
              }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
              
              )

            }
            else{
            this.msg.globalError('Please update your package')

            }



            }
            else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
              this.tab1 = true;
              this.tab2 = true;
              this.tab3 = false;
              this.tab4 = true;
              this.tab5=true;
              this.tab6=true;
              if(localStorage.getItem('No_of_menu')=='U'){
                this.ENTER = document.getElementById('defaultOpen5');
                // this.PACK.className = 'active';
                this.ENTER.style.background = '#f1f1f1';
                this.ENTER.style.color = 'black';}
              this.Special_menu = document.getElementById('defaultOpen4');
  
              this.Special_menu.style.background ='#f1f1f1';
              this.Special_menu.style.color = 'black';
              this.paris = document.getElementById('Tokyo');
              this.paris.className = 'active';

              this.PACK = document.getElementById('defaultOpen1');

              this.PACK.style.background = '#f1f1f1';
              this.PACK.style.color = 'black';
              this.BIRTH = document.getElementById('defaultOpen');

              this.BIRTH.style.background = '#f1f1f1';
              this.BIRTH.style.color = 'black';


              this.ENTER = document.getElementById('defaultOpen3');

              this.ENTER.style.background = '#f1f1f1';
              this.ENTER.style.color = 'black';
              this.WALL = document.getElementById('defaultOpen2');

              this.WALL.style.background = '#00477e';
              this.WALL.style.color = 'white';
              this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id={v1}`).subscribe(data=>{
              this.arr_brak_check=data;
              console.log(data);
              if(this.arr_brak_check.msg.length!=0){


              this.dinner_start=this.arr_brak_check.msg[0].start_time;
              this.dinner_end=this.arr_brak_check.msg[0].end_time;
              // this.brunch_start=this.dinner_start;
              // this.brunch_end=this.dinner_end;
                for(let i=0;i<this.arr_brak_check.msg.length;i++){
                  if(this.arr_brak_check.msg[i].month_day==2){
                    this.mon_check=document.getElementById('vehicle23');
                    this.mon_check.checked=true;
                    this.mon_dinner=2;

                  }
                  if(this.arr_brak_check.msg[i].month_day==3){
                    this.tue_check=document.getElementById('vehicle33');
                    this.tue_check.checked=true;
                    this.tue_dinner=3;

                  }
                   if(this.arr_brak_check.msg[i].month_day==4){
                    this.wed_check=document.getElementById('vehicle43');
                    this.wed_check.checked=true;
                    this.wed_dinner=4;

                  }
                   if(this.arr_brak_check.msg[i].month_day==5){
                    this.thu_check=document.getElementById('vehicle53');
                    this.thu_check.checked=true;
                    this.thu_dinner=5;

                  }
                  if(this.arr_brak_check.msg[i].month_day==6){
                    this.fri_check=document.getElementById('vehicle63');
                    this.fri_check.checked=true;
                    this.fri_dinner=6;

                  }
                  if(this.arr_brak_check.msg[i].month_day==7){
                    this.sat_check=document.getElementById('vehicle73');
                    this.sat_check.checked=true;
                    this.sat_dinner=7;

                  }
                  if(this.arr_brak_check.msg[i].month_day==8){
                    this.sun_check=document.getElementById('vehicle83');
                    this.sun_check.checked=true;
                    this.sun_dinner=8;
                  }
                  if(this.arr_brak_check.msg.length==7) {
                    this.every=document.getElementById('vehicle13');
                    this.every.checked=true;
                    this.mon_check=document.getElementById('vehicle23');
                    this.mon_check.checked=true;
                    this.tue_check=document.getElementById('vehicle33');
                    this.tue_check.checked=true;
                    this.wed_check=document.getElementById('vehicle43');
                    this.wed_check.checked=true;
                    this.thu_check=document.getElementById('vehicle53');
                    this.thu_check.checked=true;
                    this.fri_check=document.getElementById('vehicle63');
                    this.fri_check.checked=true;
                    this.sat_check=document.getElementById('vehicle73');
                    this.sat_check.checked=true;
                    this.sun_check=document.getElementById('vehicle83');
                    this.sun_check.checked=true;
                    this.mon_dinner=2;
                    this.tue_dinner=3;
                    this.wed_dinner=4;
                    this.thu_dinner=5;
                    this.fri_dinner=6;
                    this.sat_dinner=7;
                    this.sun_dinner=8;
                   }
            }
          }
              }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
              
              )

            }
         }
         else if(localStorage.getItem('No_of_menu')=='U'){
          this.tab1 = true;
          this.tab2 = true;
          this.tab3 = false;
          this.tab4 = true;
          this.tab5=true;
          this.tab6=true;
          this.ENTER = document.getElementById('defaultOpen5');
          // this.PACK.className = 'active';
          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
            this.Special_menu = document.getElementById('defaultOpen4');

            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';
          this.paris = document.getElementById('Tokyo');
          this.paris.className = 'active  tabcontent m-1';

          this.PACK = document.getElementById('defaultOpen1');

          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
          this.BIRTH = document.getElementById('defaultOpen');

          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';


          this.ENTER = document.getElementById('defaultOpen3');

          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';
          this.WALL = document.getElementById('defaultOpen2');

          this.WALL.style.background = '#00477e';
          this.WALL.style.color = 'white';
          this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id={v1}`).subscribe(data=>{
            this.arr_brak_check=data;
            if(this.arr_brak_check.msg.length!=0){


            this.dinner_start=this.arr_brak_check.msg[0].start_time;
            this.dinner_end=this.arr_brak_check.msg[0].end_time;
            // this.brunch_start=this.dinner_start;
            // this.brunch_end=this.dinner_end;
            for(let i=0;i<this.arr_brak_check.msg.length;i++){
              if(this.arr_brak_check.msg[i].month_day==2){
                this.mon_check=document.getElementById('vehicle23');
                this.mon_check.checked=true;
                this.mon_dinner=2;

              }
             if(this.arr_brak_check.msg[i].month_day==3){
                this.tue_check=document.getElementById('vehicle33');
                this.tue_check.checked=true;
                this.tue_dinner=3;

              }
              if(this.arr_brak_check.msg[i].month_day==4){
                this.wed_check=document.getElementById('vehicle43');
                this.wed_check.checked=true;
                this.wed_dinner=4;

              }
             if(this.arr_brak_check.msg[i].month_day==5){
                this.thu_check=document.getElementById('vehicle53');
                this.thu_check.checked=true;
                this.thu_dinner=5;

              }
              if(this.arr_brak_check.msg[i].month_day==6){
                this.fri_check=document.getElementById('vehicle63');
                this.fri_check.checked=true;
                this.fri_dinner=6;

              }
             if(this.arr_brak_check.msg[i].month_day==7){
                this.sat_check=document.getElementById('vehicle73');
                this.sat_check.checked=true;
                this.sat_dinner=7;

              }
             if(this.arr_brak_check.msg[i].month_day==8){
                this.sun_check=document.getElementById('vehicle83');
                this.sun_check.checked=true;
                this.sun_dinner=8;
              }
              if(this.arr_brak_check.msg.length==7) {
                this.every=document.getElementById('vehicle13');
                this.every.checked=true;
                this.mon_check=document.getElementById('vehicle23');
                this.mon_check.checked=true;
                this.tue_check=document.getElementById('vehicle33');
                this.tue_check.checked=true;
                this.wed_check=document.getElementById('vehicle43');
                this.wed_check.checked=true;
                this.thu_check=document.getElementById('vehicle53');
                this.thu_check.checked=true;
                this.fri_check=document.getElementById('vehicle63');
                this.fri_check.checked=true;
                this.sat_check=document.getElementById('vehicle73');
                this.sat_check.checked=true;
                this.sun_check=document.getElementById('vehicle83');
                this.sun_check.checked=true;
                this.mon_dinner=2;
                this.tue_dinner=3;
                this.wed_dinner=4;
                this.thu_dinner=5;
                this.fri_dinner=6;
                this.sat_dinner=7;
                this.sun_dinner=8;
               }
        }
      }
          }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
          
          )

         }
this._data.global_service(0,'/check_activity',`id=${this.resid}`).subscribe(data=>{
  console.log(data);
  this.check=data;
  if(this.check.msg[0].approval_flag=='U'){

  }
  else{
    if(localStorage.getItem('breakfast')==''){
      this.londondefault=false;

    }
    if(localStorage.getItem('launch')==''){
      this.parisdefault=false;

    }
    if(localStorage.getItem('dinner')==''){
      this.tokyodefault=false;

    }
    if(localStorage.getItem('brunch')==''){
      this.lagunadefault=false;

    }
    this.b_url=true;
    this.lcc_url=true;
    this.d_url=true;
    this.br_url=true;
    this.break_button=true;
    this.launch_button=true;
    this.dinner_button=true;
    this.brunch_button=true;
    console.log(this.b_url,this.lcc_url,this.d_url,this.br_url)

  }
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)


    }
    else if (e == 'Laguna'){
      this.break_sec.length=0;
      this.cove_top.length=0;
      this.arr_brak_check.length=0;
      this._data.global_service(0,'/menu_setup',`id=${this.resid}`).subscribe(data=>{
        this.cove_top.length=0;
        console.log(data);
        this.cove_top=data;
        // if(this.cove_top.length!=0){


        for(let i=0;i<this.cove_top.menu_dt.length;i++){

          if(this.cove_top.menu_dt.length!=0){
            if(this.cove_top.menu_dt[i].menu_id==4){

              console.log("sadasda4");

                this.brunch_menu=this.cove_top.menu_dt[i].menu_url;


              if(this.cove_top.menu_dt[i].active_flag=='Y'){
                this.check_brunch=document.getElementById('laguna');
                this.check_brunch.checked=true;
                this.dinner_check='Y';
                this.br_url=false;
             }
             else {
              this.check_brunch=document.getElementById('laguna');
              this.check_brunch.checked=false;
              this.dinner_check='N';
              this.br_url=true;

             }
           }

          }
        }
        for(let i=0;i<this.cove_top.oth_dt.length;i++){
         if(this.cove_top.oth_dt.length!=0){
            if(this.cove_top.oth_dt[i].menu_id==4){

              console.log("sadasda4");

                this.brunch_cover=this.cove_top.oth_dt[i].cover_page_url;
                this.brunch_top=this.cove_top.oth_dt[i].top_img_url;

            //   if(this.cove_top.oth_dt[i].active_flag=='Y'){
            //     this.check_brunch=document.getElementById('laguna');
            //     this.check_brunch.checked=true;
            //     this.dinner_check='Y';
            //     this.br_url=false;
            //  }
            //  else {
            //   this.check_brunch=document.getElementById('laguna');
            //   this.check_brunch.checked=false;
            //   this.dinner_check='N';
            //   this.br_url=true;

            //  }
           }

          }
          }

          //For Checking approval flag is on or not
          this._data.global_service(0,'/check_activity',`id=${this.resid}`).subscribe(data=>{
            console.log(data);
            this.check=data;
            if(this.check.msg[0].approval_flag=='U'){

            }
            else{
              if(localStorage.getItem('breakfast')==''){
                this.londondefault=false;

              }
              if(localStorage.getItem('launch')==''){
                this.parisdefault=false;

              }
              if(localStorage.getItem('dinner')==''){
                this.tokyodefault=false;

              }
              if(localStorage.getItem('brunch')==''){
                this.lagunadefault=false;

              }
              this.b_url=true;
              this.lcc_url=true;
              this.d_url=true;
              this.br_url=true;
              this.break_button=true;
              this.launch_button=true;
              this.dinner_button=true;
              this.brunch_button=true;
              console.log(this.b_url,this.lcc_url,this.d_url,this.br_url)

            }
          }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
          
          )


      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )

      this._data.global_service(0,'/section_image',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
        console.log(data);
        this.break_sec=data
        if(this.break_sec.msg.length!=0){


        for(let i=0;i<this.break_sec.msg.length;i++)
        {
          if(this.break_sec.msg[i].sec_url!=''){
            this.brunch_sec=this.break_sec.msg[i].sec_url
           }
           else{
            this.brunch_sec="";

           }
        }
      }

      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
      console.log(this.v);
      if(localStorage.getItem('No_of_menu')=='O'){
          if((localStorage.getItem('No_of_menu')=='O')&&(this.v==1)){
            //Snackbar
           if(localStorage.getItem('brunch')==''){
            this.tab1 = true;
            this.tab2 = true;
            this.tab3 = true;
            this.tab4 = false;
            this.tab5=true;
            this.tab6=true;
            if(localStorage.getItem('No_of_menu')=='U'){
              this.ENTER = document.getElementById('defaultOpen5');
              // this.PACK.className = 'active';
              this.ENTER.style.background = '#f1f1f1';
              this.ENTER.style.color = 'black';}
            this.Special_menu = document.getElementById('defaultOpen4');

            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';
      
         

            this.paris = document.getElementById('Laguna');
            this.paris.className = 'active  tabcontent m-1';
            this.PACK = document.getElementById('defaultOpen2');

            this.PACK.style.background = '#f1f1f1';
            this.PACK.style.color = 'black';
            this.BIRTH = document.getElementById('defaultOpen1');

            this.BIRTH.style.background = '#f1f1f1';
            this.BIRTH.style.color = 'black';
            this.ENTER = document.getElementById('defaultOpen');

            this.ENTER.style.background = '#f1f1f1';
            this.ENTER.style.color = 'black';


            this.WALL = document.getElementById('defaultOpen3');

            this.WALL.style.background = '#00477e';
            this.WALL.style.color = 'white';
            this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
              this.arr_brak_check=data;
              if(this.arr_brak_check.msg.length!=0){
              this.Brunch_start=this.arr_brak_check.msg[0].start_time;
              this.Brunch_end=this.arr_brak_check.msg[0].end_time;
              // this.brunch_start=this.Brunch_start;
              // this.brunch_end=this.Brunch_end;
              for(let i=0;i<this.arr_brak_check.msg.length;i++){
                if(this.arr_brak_check.msg[i].month_day==2){
                  this.mon_check=document.getElementById('vehicle24');
                  this.mon_check.checked=true;
                  this.mon_brunch=2;

                }
                if(this.arr_brak_check.msg[i].month_day==3){
                  this.tue_check=document.getElementById('vehicle34');
                  this.tue_check.checked=true;
                  this.tue_brunch=3;

                }
                if(this.arr_brak_check.msg[i].month_day==4){
                  this.wed_check=document.getElementById('vehicle44');
                  this.wed_check.checked=true;
                  this.wed_brunch=4;

                }
              if(this.arr_brak_check.msg[i].month_day==5){
                  this.thu_check=document.getElementById('vehicle54');
                  this.thu_check.checked=true;
                  this.thu_brunch=5;

                }
             if(this.arr_brak_check.msg[i].month_day==6){
                  this.fri_check=document.getElementById('vehicle64');
                  this.fri_check.checked=true;
                  this.fri_brunch=6;

                }
             if(this.arr_brak_check.msg[i].month_day==7){
                  this.sat_check=document.getElementById('vehicle74');
                  this.sat_check.checked=true;
                  this.sat_brunch=7;

                }
              if(this.arr_brak_check.msg[i].month_day==8){
                  this.sun_check=document.getElementById('vehicle84');
                  this.sun_check.checked=true;
                  this.sun_brunch=8;
                }
                if(this.arr_brak_check.msg.length==7) {
                  this.every=document.getElementById('vehicle14');
                  this.every.checked=true;
                  this.mon_check=document.getElementById('vehicle24');
                  this.mon_check.checked=true;
                  this.tue_check=document.getElementById('vehicle34');
                  this.tue_check.checked=true;
                  this.wed_check=document.getElementById('vehicle44');
                  this.wed_check.checked=true;
                  this.thu_check=document.getElementById('vehicle54');
                  this.thu_check.checked=true;
                  this.fri_check=document.getElementById('vehicle64');
                  this.fri_check.checked=true;
                  this.sat_check=document.getElementById('vehicle74');
                  this.sat_check.checked=true;
                  this.sun_check=document.getElementById('vehicle84');
                  this.sun_check.checked=true;
                  this.mon_brunch=2;
                  this.tue_brunch=3;
                  this.wed_brunch=4;
                  this.thu_brunch=5;
                  this.fri_brunch=6;
                  this.sat_brunch=7;
                  this.sun_brunch=8;
                 }
          }
        }
            }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
            
            )

           }
           else{
           this.msg.globalError('Please update your package')
           }

          }
         else if((localStorage.getItem('No_of_menu')=='O')&&(this.v!=1)){
          this.tab1 = true;
          this.tab2 = true;
          this.tab3 = true;
          this.tab4 = false;
          this.tab5=true;
          this.tab6=true;
          if(localStorage.getItem('No_of_menu')=='U'){
            this.ENTER = document.getElementById('defaultOpen5');
            // this.PACK.className = 'active';
            this.ENTER.style.background = '#f1f1f1';
            this.ENTER.style.color = 'black';}
            this.Special_menu = document.getElementById('defaultOpen4');

            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';

          this.paris = document.getElementById('Laguna');
          this.paris.className = 'active  tabcontent m-1';
          this.PACK = document.getElementById('defaultOpen2');

          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
          this.BIRTH = document.getElementById('defaultOpen1');

          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';
          this.ENTER = document.getElementById('defaultOpen');

          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';


          this.WALL = document.getElementById('defaultOpen3');

          this.WALL.style.background = '#00477e';
          this.WALL.style.color = 'white';
          this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
            this.arr_brak_check=data;
            if(this.arr_brak_check.msg.length!=0){
            this.Brunch_start=this.arr_brak_check.msg[0].start_time;
            this.Brunch_end=this.arr_brak_check.msg[0].end_time;
            // this.brunch_start=this.Brunch_start;
            // this.brunch_end=this.Brunch_end;
            for(let i=0;i<this.arr_brak_check.msg.length;i++){
              if(this.arr_brak_check.msg[i].month_day==2){
                this.mon_check=document.getElementById('vehicle24');
                this.mon_check.checked=true;
                this.mon_brunch=2;

              }
              if(this.arr_brak_check.msg[i].month_day==3){
                this.tue_check=document.getElementById('vehicle34');
                this.tue_check.checked=true;
                this.tue_brunch=3;

              }
              if(this.arr_brak_check.msg[i].month_day==4){
                this.wed_check=document.getElementById('vehicle44');
                this.wed_check.checked=true;
                this.wed_brunch=4;

              }
            if(this.arr_brak_check.msg[i].month_day==5){
                this.thu_check=document.getElementById('vehicle54');
                this.thu_check.checked=true;
                this.thu_brunch=5;

              }
           if(this.arr_brak_check.msg[i].month_day==6){
                this.fri_check=document.getElementById('vehicle64');
                this.fri_check.checked=true;
                this.fri_brunch=6;

              }
           if(this.arr_brak_check.msg[i].month_day==7){
                this.sat_check=document.getElementById('vehicle74');
                this.sat_check.checked=true;
                this.sat_brunch=7;

              }
            if(this.arr_brak_check.msg[i].month_day==8){
                this.sun_check=document.getElementById('vehicle84');
                this.sun_check.checked=true;
                this.sun_brunch=8;
              }
              if(this.arr_brak_check.msg.length==7) {
                this.every=document.getElementById('vehicle14');
                this.every.checked=true;
                this.mon_check=document.getElementById('vehicle24');
                this.mon_check.checked=true;
                this.tue_check=document.getElementById('vehicle34');
                this.tue_check.checked=true;
                this.wed_check=document.getElementById('vehicle44');
                this.wed_check.checked=true;
                this.thu_check=document.getElementById('vehicle54');
                this.thu_check.checked=true;
                this.fri_check=document.getElementById('vehicle64');
                this.fri_check.checked=true;
                this.sat_check=document.getElementById('vehicle74');
                this.sat_check.checked=true;
                this.sun_check=document.getElementById('vehicle84');
                this.sun_check.checked=true;
                this.mon_brunch=2;
                this.tue_brunch=3;
                this.wed_brunch=4;
                this.thu_brunch=5;
                this.fri_brunch=6;
                this.sat_brunch=7;
                this.sun_brunch=8;
               }
        }
      }
          }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
          
          )
         }
        }
      else if(localStorage.getItem('No_of_menu')=='T'){
      if((localStorage.getItem('No_of_menu')=='T')&&(this.v==2)){
         //Snackbar
         if(localStorage.getItem('brunch')==''){
          this.tab1 = true;
          this.tab2 = true;
          this.tab3 = true;
          this.tab4 = false;
          this.tab5=true;
          this.tab6=true;
          if(localStorage.getItem('No_of_menu')=='U'){
            this.ENTER = document.getElementById('defaultOpen5');
            // this.PACK.className = 'active';
            this.ENTER.style.background = '#f1f1f1';
            this.ENTER.style.color = 'black';}
            this.Special_menu = document.getElementById('defaultOpen4');

            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';
          
          this.paris = document.getElementById('Laguna');
          this.paris.className = 'active  tabcontent m-1';
          this.PACK = document.getElementById('defaultOpen2');

          this.PACK.style.background = '#f1f1f1';
          this.PACK.style.color = 'black';
          this.BIRTH = document.getElementById('defaultOpen1');

          this.BIRTH.style.background = '#f1f1f1';
          this.BIRTH.style.color = 'black';
          this.ENTER = document.getElementById('defaultOpen');

          this.ENTER.style.background = '#f1f1f1';
          this.ENTER.style.color = 'black';


          this.WALL = document.getElementById('defaultOpen3');

          this.WALL.style.background = '#00477e';
          this.WALL.style.color = 'white';
          this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
            this.arr_brak_check=data;
            if(this.arr_brak_check.msg.length!=0){
            this.Brunch_start=this.arr_brak_check.msg[0].start_time;
            this.Brunch_end=this.arr_brak_check.msg[0].end_time;
            // this.brunch_start=this.Brunch_start;
            // this.brunch_end=this.Brunch_end;
            for(let i=0;i<this.arr_brak_check.msg.length;i++){
              if(this.arr_brak_check.msg[i].month_day==2){
                this.mon_check=document.getElementById('vehicle24');
                this.mon_check.checked=true;
                this.mon_brunch=2;

              }
              if(this.arr_brak_check.msg[i].month_day==3){
                this.tue_check=document.getElementById('vehicle34');
                this.tue_check.checked=true;
                this.tue_brunch=3;

              }
              if(this.arr_brak_check.msg[i].month_day==4){
                this.wed_check=document.getElementById('vehicle44');
                this.wed_check.checked=true;
                this.wed_brunch=4;

              }
            if(this.arr_brak_check.msg[i].month_day==5){
                this.thu_check=document.getElementById('vehicle54');
                this.thu_check.checked=true;
                this.thu_brunch=5;

              }
           if(this.arr_brak_check.msg[i].month_day==6){
                this.fri_check=document.getElementById('vehicle64');
                this.fri_check.checked=true;
                this.fri_brunch=6;

              }
           if(this.arr_brak_check.msg[i].month_day==7){
                this.sat_check=document.getElementById('vehicle74');
                this.sat_check.checked=true;
                this.sat_brunch=7;

              }
            if(this.arr_brak_check.msg[i].month_day==8){
                this.sun_check=document.getElementById('vehicle84');
                this.sun_check.checked=true;
                this.sun_brunch=8;
              }
              if(this.arr_brak_check.msg.length==7) {
                this.every=document.getElementById('vehicle14');
                this.every.checked=true;
                this.mon_check=document.getElementById('vehicle24');
                this.mon_check.checked=true;
                this.tue_check=document.getElementById('vehicle34');
                this.tue_check.checked=true;
                this.wed_check=document.getElementById('vehicle44');
                this.wed_check.checked=true;
                this.thu_check=document.getElementById('vehicle54');
                this.thu_check.checked=true;
                this.fri_check=document.getElementById('vehicle64');
                this.fri_check.checked=true;
                this.sat_check=document.getElementById('vehicle74');
                this.sat_check.checked=true;
                this.sun_check=document.getElementById('vehicle84');
                this.sun_check.checked=true;
                this.mon_brunch=2;
                this.tue_brunch=3;
                this.wed_brunch=4;
                this.thu_brunch=5;
                this.fri_brunch=6;
                this.sat_brunch=7;
                this.sun_brunch=8;
               }
        }
      }
          }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
          
          )

         }
         else{
         this.msg.globalError('Please update your package')

         }

      }
     else if((localStorage.getItem('No_of_menu')=='T')&&(this.v!=2)){
      this.tab1 = true;
      this.tab2 = true;
      this.tab3 = true;
      this.tab4 = false;
      this.tab6=true;
      if(localStorage.getItem('No_of_menu')=='U'){
        this.ENTER = document.getElementById('defaultOpen5');
        // this.PACK.className = 'active';
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';}
      this.paris = document.getElementById('Laguna');
      this.paris.className = 'active  tabcontent m-1';
      this.PACK = document.getElementById('defaultOpen2');

      this.PACK.style.background = '#f1f1f1';
      this.PACK.style.color = 'black';
      this.BIRTH = document.getElementById('defaultOpen1');

      this.BIRTH.style.background = '#f1f1f1';
      this.BIRTH.style.color = 'black';
      this.ENTER = document.getElementById('defaultOpen');

      this.ENTER.style.background = '#f1f1f1';
      this.ENTER.style.color = 'black';


      this.WALL = document.getElementById('defaultOpen3');

      this.WALL.style.background = '#00477e';
      this.WALL.style.color = 'white';
      this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
        this.arr_brak_check=data;
        console.log(data);
        if( this.arr_brak_check.msg.length!=0){

        this.Brunch_start=this.arr_brak_check.msg[0].start_time;
        this.Brunch_end=this.arr_brak_check.msg[0].end_time;
        // this.brunch_start=this.Brunch_start;
        // this.brunch_end=this.Brunch_end;
        for(let i=0;i<this.arr_brak_check.msg.length;i++){
          if(this.arr_brak_check.msg[i].month_day==2){
            this.mon_check=document.getElementById('vehicle24');
            this.mon_check.checked=true;
            this.mon_brunch=2;

          }
          if(this.arr_brak_check.msg[i].month_day==3){
            this.tue_check=document.getElementById('vehicle34');
            this.tue_check.checked=true;
            this.tue_brunch=3;

          }
          if(this.arr_brak_check.msg[i].month_day==4){
            this.wed_check=document.getElementById('vehicle44');
            this.wed_check.checked=true;
            this.wed_brunch=4;

          }
        if(this.arr_brak_check.msg[i].month_day==5){
            this.thu_check=document.getElementById('vehicle54');
            this.thu_check.checked=true;
            this.thu_brunch=5;

          }
          if(this.arr_brak_check.msg[i].month_day==6){
            this.fri_check=document.getElementById('vehicle64');
            this.fri_check.checked=true;
            this.fri_brunch=6;

          }
         if(this.arr_brak_check.msg[i].month_day==7){
            this.sat_check=document.getElementById('vehicle74');
            this.sat_check.checked=true;
            this.sat_brunch=7;

          }
       if(this.arr_brak_check.msg[i].month_day==8){
            this.sun_check=document.getElementById('vehicle84');
            this.sun_check.checked=true;
            this.sun_brunch=8;
          }
          if(this.arr_brak_check.msg.length==7) {
            this.every=document.getElementById('vehicle14');
            this.every.checked=true;
            this.mon_check=document.getElementById('vehicle24');
            this.mon_check.checked=true;
            this.tue_check=document.getElementById('vehicle34');
            this.tue_check.checked=true;
            this.wed_check=document.getElementById('vehicle44');
            this.wed_check.checked=true;
            this.thu_check=document.getElementById('vehicle54');
            this.thu_check.checked=true;
            this.fri_check=document.getElementById('vehicle64');
            this.fri_check.checked=true;
            this.sat_check=document.getElementById('vehicle74');
            this.sat_check.checked=true;
            this.sun_check=document.getElementById('vehicle84');
            this.sun_check.checked=true;
            this.mon_brunch=2;
            this.tue_brunch=3;
            this.wed_brunch=4;
            this.thu_brunch=5;
            this.fri_brunch=6;
            this.sat_brunch=7;
            this.sun_brunch=8;
           }
    }

  }
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )

     }
       }
       else if(localStorage.getItem('No_of_menu')=='U'){
        this.tab1 = true;
        this.tab2 = true;
        this.tab3 = true;
        this.tab4 = false;
        this.tab5=true;
        this.tab6=true;
        this.ENTER = document.getElementById('defaultOpen5');
        // this.PACK.className = 'active';
        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';
            this.Special_menu = document.getElementById('defaultOpen4');

            this.Special_menu.style.background ='#f1f1f1';
            this.Special_menu.style.color = 'black';

        this.paris = document.getElementById('Laguna');
        this.paris.className = 'active  tabcontent m-1';
        this.PACK = document.getElementById('defaultOpen2');

        this.PACK.style.background = '#f1f1f1';
        this.PACK.style.color = 'black';
        this.BIRTH = document.getElementById('defaultOpen1');

        this.BIRTH.style.background = '#f1f1f1';
        this.BIRTH.style.color = 'black';
        this.ENTER = document.getElementById('defaultOpen');

        this.ENTER.style.background = '#f1f1f1';
        this.ENTER.style.color = 'black';


        this.WALL = document.getElementById('defaultOpen3');

        this.WALL.style.background = '#00477e';
        this.WALL.style.color = 'white';
        this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v1}`).subscribe(data=>{
          this.arr_brak_check=data;
          this.Brunch_start=this.arr_brak_check.msg[0].start_time;
            this.Brunch_end=this.arr_brak_check.msg[0].end_time;
            // this.brunch_start=this.Brunch_start;
            // this.brunch_end=this.Brunch_end;
          for(let i=0;i<this.arr_brak_check.msg.length;i++){
            if(this.arr_brak_check.msg[i].month_day==2){
              this.mon_check=document.getElementById('vehicle24');
              this.mon_check.checked=true;
              this.mon_brunch=2;

            }
          if(this.arr_brak_check.msg[i].month_day==3){
              this.tue_check=document.getElementById('vehicle34');
              this.tue_check.checked=true;
              this.tue_brunch=3;

            }
             if(this.arr_brak_check.msg[i].month_day==4){
              this.wed_check=document.getElementById('vehicle44');
              this.wed_check.checked=true;
              this.wed_brunch=4;

            }
          if(this.arr_brak_check.msg[i].month_day==5){
              this.thu_check=document.getElementById('vehicle54');
              this.thu_check.checked=true;
              this.thu_brunch=5;

            }
         if(this.arr_brak_check.msg[i].month_day==6){
              this.fri_check=document.getElementById('vehicle64');
              this.fri_check.checked=true;
              this.fri_brunch=6;

            }
          if(this.arr_brak_check.msg[i].month_day==7){
              this.sat_check=document.getElementById('vehicle74');
              this.sat_check.checked=true;
              this.sat_brunch=7;

            }
            if(this.arr_brak_check.msg[i].month_day==8){
              this.sun_check=document.getElementById('vehicle84');
              this.sun_check.checked=true;
              this.sun_brunch=8;
            }
            if(this.arr_brak_check.msg.length==7) {
              this.every=document.getElementById('vehicle14');
              this.every.checked=true;
              this.mon_check=document.getElementById('vehicle24');
              this.mon_check.checked=true;
              this.tue_check=document.getElementById('vehicle34');
              this.tue_check.checked=true;
              this.wed_check=document.getElementById('vehicle44');
              this.wed_check.checked=true;
              this.thu_check=document.getElementById('vehicle54');
              this.thu_check.checked=true;
              this.fri_check=document.getElementById('vehicle64');
              this.fri_check.checked=true;
              this.sat_check=document.getElementById('vehicle74');
              this.sat_check.checked=true;
              this.sun_check=document.getElementById('vehicle84');
              this.sun_check.checked=true;
              this.mon_brunch=2;
              this.tue_brunch=3;
              this.wed_brunch=4;
              this.thu_brunch=5;
              this.fri_brunch=6;
              this.sat_brunch=7;
              this.sun_brunch=8;
             }
      }
        }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
        
        )
       }
    }
    else if(e=='Shrewsbury'){
    this.tab1=true;
    this.tab2=true;
    this.tab3=true;
    this.tab4=true;
    this.tab5=false;
    this.tab6=true;
    if(localStorage.getItem('No_of_menu')=='U'){
      this.ENTER = document.getElementById('defaultOpen5');
      // this.PACK.className = 'active';
      this.ENTER.style.background = '#f1f1f1';
      this.ENTER.style.color = 'black';}
    this.PACK = document.getElementById('defaultOpen2');
    this.PACK.style.background = '#f1f1f1';
    this.PACK.style.color = 'black';
    this.BIRTH = document.getElementById('defaultOpen1');
     this.BIRTH.style.background = '#f1f1f1';
    this.BIRTH.style.color = 'black';
    this.ENTER = document.getElementById('defaultOpen');
     this.ENTER.style.background = '#f1f1f1';
    this.ENTER.style.color = 'black';
     this.WALL = document.getElementById('defaultOpen3');
    this.WALL.style.background = '#f1f1f1';
    this.WALL.style.color = 'black';
    this.Special_menu=document.getElementById('Shrewsbury');
    this.Special_menu.className="active tabcontent"
    this.Special_menu = document.getElementById('defaultOpen4');
    this.Special_menu.style.background = '#00477e';
    this.Special_menu.style.color = 'white';
    }
    else{
      this._data.global_service(0,'/add_menu',`res_id=${localStorage.getItem('Restaurant_id')}`).subscribe(data=>{
        console.log(data);
        this.get_createmenu=data;
        this.get_createmenu=this.get_createmenu.msg
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

      )
      this.tab1=true;
    this.tab2=true;
    this.tab3=true;
    this.tab4=true;
    this.tab5=true;
    this.tab6=false;
    this.ENTER = document.getElementById('defaultOpen4');
    // this.PACK.className = 'active';
    this.ENTER.style.background = '#f1f1f1';
    this.ENTER.style.color = 'black';
    this.PACK = document.getElementById('defaultOpen2');
    this.PACK.style.background = '#f1f1f1';
    this.PACK.style.color = 'black';
    this.BIRTH = document.getElementById('defaultOpen1');
     this.BIRTH.style.background = '#f1f1f1';
    this.BIRTH.style.color = 'black';
    this.ENTER = document.getElementById('defaultOpen');
     this.ENTER.style.background = '#f1f1f1';
    this.ENTER.style.color = 'black';
     this.WALL = document.getElementById('defaultOpen3');
    this.WALL.style.background = '#f1f1f1';
    this.WALL.style.color = 'black';
    this.Special_menu=document.getElementById('others');
    this.Special_menu.className="active tabcontent"
    this.Special_menu = document.getElementById('defaultOpen5');
    this.Special_menu.style.background ='#00477e';
    this.Special_menu.style.color = 'white';
    }
  }
  // For submitting data of Breakfast tab
  opensecondtab(e: any) {
    if (e == 'London') {
      this.Packages = true;
      this.PACK = document.getElementById('Tokyo');
      this.PACK.className = 'active';
      this.birth = false;
      this.entertainmen = true;
      this.wall = true;
      this.window = true

      // this.PACK=document.getElementById('packages');
      // this.PACK.className='active';

    }
    else if (e == 'Tokyo') {
      console.log('asdasd');
      this.Packages = true;

      this.birth = false;
      this.entertainmen = true;
      this.wall = true;
      this.window = true

      this.BIRTH = document.getElementById('Laguna');
      this.BIRTH.className = 'active';
    }
    else if (e == 'Laguna') {
      this.Packages = true;

      this.birth = true;
      this.entertainmen = false;
      this.wall = false;
      this.window = true

      this.ENTER = document.getElementById('Shrewsbury');
      this.ENTER.className = 'active';
    }
    //   else if(e=='wallSignHolder'){
    //     this.Packages=true;

    // this.birth=true;
    // this.entertainmen=true;
    // this.wall=false;
    // this.window=true

    //     this.PACK=document.getElementById('windowCling');
    //     this.PACK.className='active';
    //   }
    //   else if(e=='windowCling'){
    //     this.Packages=true;

    // this.birth=true;
    // this.entertainmen=true;
    // this.wall=true;
    // this.window=false;

    // this.PACK=document.getElementById('packages');
    // this.PACK.className='active';
    // }
  }

  checkbreakfast(event:any){
    if(event.target.checked){
              this.break_check='Y';
              this.b_url=false;
    }
    else{
      this.break_check='N';
      this.b_url=true;
    }
  }
  opennextab(COVERPAGEURL: any, TOPIMAGEURL: any,MENUURL:any,v1:any,v2:any) {
    // console.log(this.breakfastcoverimage,MENUURL,this.breakfasttopimage,this.multipleImages,COVERPAGEURL,TOPIMAGEURL)


      // console.log(this.get_menu,this.venueid);
      const formData = new FormData();
      formData.append('coverurl', COVERPAGEURL);
      formData.append('cov_filename', this.breakfast_cover_name);
      formData.append('top_filename', this.breakfast_top_name);
     formData.append('topurl', TOPIMAGEURL);
      formData.append('cov_img',this.breakfastcoverimage);
      formData.append('top_img', this.breakfasttopimage);
       formData.append('hotel_id',this.resid);
       formData.append('menu_id',this.get_menu);
       formData.append('break_check',this.break_check);
       formData.append('restaurant_name',this.res_name);
       formData.append('venue_id',this.venueid);
        formData.append('active_flag',"Y");
        formData.append('srv_res_flag',this.res_bar_flag)
        formData.append('srv_res_id',this.serviceId)
        debugger;
      console.log(this.multipleImages)
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) =>{ console.log(res)
    });
    const frmDt_1 = new FormData();
  
      frmDt_1.append('MenuUrl', MENUURL);
       frmDt_1.append('hotel_id',this.resid);
       frmDt_1.append('menu_id',this.get_menu);
       frmDt_1.append('venue_id',this.venueid);
       frmDt_1.append('break_check',this.break_check);
       frmDt_1.append('restaurant_name',this.res_name);
       frmDt_1.append('active_flag',"Y");
       frmDt_1.append('srv_res_flag',this.res_bar_flag)
       frmDt_1.append('srv_res_id',this.serviceId)

      for (let img of this.multipleImages) {
        frmDt_1.append('menu_img', img);
      }
    this.http.post<any>(this.url_reg+'/menu_file_testing', frmDt_1).subscribe(
     (res) =>{console.log(res);
       this.msg.successMsg('SU')
   }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
   
   );
  
          this.storevalue.length=0;
          this.storevalue.push({
            "srv_res_flag":this.res_bar_flag,
            "srv_res_id":this.serviceId,
     
          "hotel_id":this.resid,
          "venue_id":this.venueid,
          "menu_id":this.get_menu,
          "break_check":this.break_check,
           "active_flag":"Y",
          "start_time":v1,
          "end_time":v2,
          "month_day": [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thu},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}]
        });
            this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{
           console.log(data);
         
  
         })
}
change_menu(v:any)
{
  console.log(v);
  this.img_menu_break.length=0;
  this.get_menu='';
  this.get_menu=v;
  //For Getting 
  if(v!=''){
  // this._data.global_service(0,'/menu_setup',`id=${this.resid}&menu_id=${v}`).subscribe(data=>{
    this._data.global_service(0,'/get_menu_service_dt',`hotel_id=${this.resid}&menu_id=${v}&flag=${this.res_bar_flag}&srv_res_id=${this.serviceId}`).subscribe(data=>{
    console.log(data);
    debugger;
    this.cove_top.length=0;
    this.cove_top=data;
    for(let i=0;i<this.cove_top.menu_dt.length;i++){
      if(this.cove_top.menu_dt.length!=0){
        // if(this.cove_top.menu_dt[i].menu_id==1){
        if(this.cove_top.menu_dt[i].menu_img!='' && this.cove_top.menu_dt[i].menu_img!=null){
                 this.Breakfast_menu_preview=false
                 this.img_menu_break.push({id: this.cove_top.menu_dt[i].id, img_path: this.img_showing+"/"+this.cove_top.menu_dt[i].menu_img});
                  this.multipleImages.push(this.cove_top.menu_dt[i].menu_img);

              }
               this.break_menu=this.cove_top.menu_dt[i].menu_url;
               
          // }

      }
    }
    for(let i=0;i<this.cove_top.oth_dt.length;i++){
      if(this.cove_top.oth_dt.length!=0){
        // if(this.cove_top.oth_dt[i].menu_id==1){
               this.break_cover=this.cove_top.oth_dt[i].cover_page_url;
               this.break_top=this.cove_top.oth_dt[i].top_img_url;
             if(this.cove_top.oth_dt[i].cover_page_img!=''){
              this.break_Cover=false;
               this.Breakfast_cover_preview=false;
               this.breakfastcoverimage=this.img_showing +'/' +this.cove_top.oth_dt[i].cover_page_img;
               this.breakfast_cover_name=this.cove_top.oth_dt[i].cover_page_img;
               this.img_cover =this.breakfastcoverimage;
              }
              if(this.cove_top.oth_dt[i].top_image_img!=''){
              this.break_Top=false;

                   this.Breakfast_top_preview=false;
               this.breakfasttopimage=this.img_showing +'/' +this.cove_top.oth_dt[i].top_image_img;
               this.img_top=this.breakfasttopimage;
               this.breakfast_top_name=this.cove_top.oth_dt[i].top_image_img;
             }
          // }

      }
    }

    console.log( this.multipleImages);
    console.log( this.img_menu_break);

  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
  // this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${v}`).subscribe((data:any)=>{
    this._data.global_service(0,'/res_date_time_dt',`hotel_id=${this.resid}&menu_id=${v}&flag=${this.res_bar_flag}&srv_res_id=${this.serviceId}`).subscribe((data:any)=>{
    // this.count=0;
    console.log(data);
    
    this.arr_brak_check.length=0;
    this.arr_brak_check=data;
    this.breakfast_start=this.arr_brak_check.msg[0].start_time;
    this.breakfast_end=this.arr_brak_check.msg[0].end_time;

    this.brunch_start= this.breakfast_start;
    this.brunch_end=this.breakfast_end;
    for(let i=0;i<this.arr_brak_check.msg.length;i++){
      this.daycheck=document.getElementById('vehicle'+this.arr_brak_check.msg[i].month_day);
      this.daycheck.checked=true;
      if(this.arr_brak_check.msg[i].month_day==2){
       this.mon=this.arr_brak_check.msg[i].month_day;
      }
      else if(this.arr_brak_check.msg[i].month_day==3){
       this.tue=this.arr_brak_check.msg[i].month_day;

      }
      else if(this.arr_brak_check.msg[i].month_day==4){
       this.wed=this.arr_brak_check.msg[i].month_day;

      }
      else if(this.arr_brak_check.msg[i].month_day==5){
       this.thu=this.arr_brak_check.msg[i].month_day;

      }
      else if(this.arr_brak_check.msg[i].month_day==6){
       this.fri=this.arr_brak_check.msg[i].month_day;

      }
      else if(this.arr_brak_check.msg[i].month_day==7){
       this.sat=this.arr_brak_check.msg[i].month_day;

      }
      else if(this.arr_brak_check.msg[i].month_day==8){
       this.sun=this.arr_brak_check.msg[i].month_day;

      }
     }
     if(this.arr_brak_check.msg.length == 7)
     {
       this.daycheck=document.getElementById('vehicle1');
       this.daycheck.checked=true;
     } 
     else{
      this.daycheck=document.getElementById('vehicle1');
      this.daycheck.checked=false;
     }
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
}
  else{
    // alert("else")
    this.cove_top.length=0;
    this.multipleImages.length=0;
    this.Breakfast_cover_preview=true;
    this.Breakfast_top_preview=true;
    this.img_menu_break.length=0;
    this.arr_brak_check.length=0;
    this.img_cover=''
    for(let i=0;i<this.arr_brak_check.msg.length;i++){
      this.daycheck=document.getElementById('vehicle'+this.arr_brak_check.msg[i].month_day);
      this.daycheck.checked=false;
    }
    this.breakfast_start='';
    this.breakfast_end=''
    this.break_menu=''
    this.break_cover=''
    this.break_top='';

  }
  
}
  // For Submitting the data of Dinner
  opennextab2(e: any,v2:any,v3:any,v4:any,v5:any,v6:any,v7:any) {
    //this.spinner.show();
  console.log(this.brunch_check);
  if(this.brunch_check=='N'){
    this.londondefault=false;
    this.lagunadefault=false;
    this.parisdefault=false;
    this.tokyodefault=false;
    localStorage.setItem('dinner','active');
    if(this.v==1){
      this.v=0
      const formData = new FormData();
      formData.append('coverurl', v4);
      formData.append('topurl',  v3);
      formData.append('cov_filename', this.dinner_cover_name);
    formData.append('top_filename', this.dinner_top_name);
      formData.append('cov_img',this.branchcoverimage);
      formData.append('top_img', this.branchtopimage);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v5);
       formData.append('break_check',this.brunch_check);
       formData.append('restaurant_name',this.res_name);
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) => {console.log(res)
        });
        /////////////////////////////////////////// TEST ////////////////////////////////////
        const formData1 = new FormData();
        formData1.append('MenuUrl', v2);
         formData1.append('restaurant_id',this.resid);
         formData1.append('menu_id',v5);
         formData1.append('break_check',this.brunch_check);
         formData1.append('restaurant_name',this.res_name);
        for (let img of this.branchmenuimage) {
          formData1.append('menu_img', img);
        }
this.http.post<any>(this.url_reg+'/menu_file_testing', formData1).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide(); this.myFunction_update();
   this.msg.successMsg('SU')
});

// UPLOAD SECTION FILE //
// const formData2 = new FormData();
// formData2.append('SectionUrl',v1);
//  formData2.append('restaurant_id',this.resid);
//  formData2.append('menu_id',v5);
//  formData2.append('break_check',this.brunch_check);
//  formData2.append('restaurant_name',this.res_name);
// for(let img1 of this.branchsectionimage){
//   formData2.append('section_img', img1);
// }
// this.http.post<any>(this.url_reg+'/sec_file_testing', formData2).subscribe(
//   (res) =>{console.log(res);
//   //this.spinner.hide();
//   this.myFunction_update();
// });
////////////////////////////////////////////END ////////////////////////////////////

      this.storevalue.length=0;
      this.storevalue.push({

            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]

          });
      this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{
        console.log(data);
        

      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )

    }
    else if(this.v==2){
      this.v=1;
      const formData = new FormData();
      formData.append('coverurl', v4);
      formData.append('topurl',  v3);
      formData.append('cov_filename', this.dinner_cover_name);
    formData.append('top_filename', this.dinner_top_name);
      formData.append('cov_img',this.branchcoverimage);
      formData.append('top_img', this.branchtopimage);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v5);
       formData.append('break_check',this.brunch_check);
       formData.append('restaurant_name',this.res_name);
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) => {console.log(res)
        });
        /////////////////////////////////////////// TEST ////////////////////////////////////
        const formData1 = new FormData();
        formData1.append('MenuUrl', v2);
         formData1.append('restaurant_id',this.resid);
         formData1.append('menu_id',v5);
         formData1.append('break_check',this.brunch_check);
         formData1.append('restaurant_name',this.res_name);
        for (let img of this.branchmenuimage) {
          formData1.append('menu_img', img);
        }
this.http.post<any>(this.url_reg+'/menu_file_testing', formData1).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
    this.msg.successMsg('SU')
});

// UPLOAD SECTION FILE //
// const formData2 = new FormData();
// formData2.append('SectionUrl',v1);
//  formData2.append('restaurant_id',this.resid);
//  formData2.append('menu_id',v5);
//  formData2.append('break_check',this.brunch_check);
//  formData2.append('restaurant_name',this.res_name);
// for(let img1 of this.branchsectionimage){
//   formData2.append('section_img', img1);
// }
// this.http.post<any>(this.url_reg+'/sec_file_testing', formData2).subscribe(
//   (res) =>{console.log(res);
//     //this.spinner.hide();
//   this.myFunction_update();
// });
////////////////////////////////////////////END ////////////////////////////////////

          

      this.storevalue.length=0;
      this.storevalue.push({

            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]

          });
          this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

        console.log(data);
        // //this.spinner.hide();
        // this.myFunction_update();

      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )

    }
  }
  else{
    if(v6<v7){
     if( localStorage.getItem('dinner')==''){
      this.storevalue.length=0;
      const formData = new FormData();
      formData.append('coverurl', v4);
      formData.append('topurl',  v3);
      formData.append('cov_filename', this.dinner_cover_name);
    formData.append('top_filename', this.dinner_top_name);
      formData.append('cov_img',this.branchcoverimage);
      formData.append('top_img', this.branchtopimage);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v5);
       formData.append('break_check',this.brunch_check);
       formData.append('restaurant_name',this.res_name);
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) => {console.log(res)
        });
        /////////////////////////////////////////// TEST ////////////////////////////////////
        const formData1 = new FormData();
        formData1.append('MenuUrl', v2);
         formData1.append('restaurant_id',this.resid);
         formData1.append('menu_id',v5);
         formData1.append('break_check',this.brunch_check);
         formData1.append('restaurant_name',this.res_name);
        for (let img of this.branchmenuimage) {
          formData1.append('menu_img', img);
        }
this.http.post<any>(this.url_reg+'/menu_file_testing', formData1).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
    this.msg.successMsg('SU')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //

// const formData2 = new FormData();
// formData2.append('SectionUrl',v1);
//  formData2.append('restaurant_id',this.resid);
//  formData2.append('menu_id',v5);
//  formData2.append('break_check',this.brunch_check);
//  formData2.append('restaurant_name',this.res_name);
// for(let img1 of this.branchsectionimage){
//   formData2.append('section_img', img1);
// }
// this.http.post<any>(this.url_reg+'/sec_file_testing', formData2).subscribe(
//   (res) =>{console.log(res);
//         //this.spinner.hide();
//         this.myFunction_update();
// });
////////////////////////////////////////////END ////////////////////////////////////
        this.storevalue.length=0;
      this.storevalue.push({
            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]

          });
          this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

        console.log(data);
        // //this.spinner.hide();
        // this.myFunction_update();

      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )

            // this.myFunction();
  }
    else{
    localStorage.setItem('dinner','');
    if(localStorage.getItem('No_of_menu')=='O'){
      if(this.v==0){
      this.v=1;
        this.storevalue.length=0;
          const formData = new FormData();
      formData.append('coverurl', v4);
      formData.append('topurl',  v3);
      formData.append('cov_filename', this.dinner_cover_name);
    formData.append('top_filename', this.dinner_top_name);
      formData.append('cov_img',this.branchcoverimage);
      formData.append('top_img', this.branchtopimage);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v5);
       formData.append('break_check',this.brunch_check);
       formData.append('restaurant_name',this.res_name);
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) => {console.log(res)
        });
        /////////////////////////////////////////// TEST ////////////////////////////////////
        const formData1 = new FormData();
        formData1.append('MenuUrl', v2);
         formData1.append('restaurant_id',this.resid);
         formData1.append('menu_id',v5);
         formData1.append('break_check',this.brunch_check);
         formData1.append('restaurant_name',this.res_name);
        for (let img of this.branchmenuimage) {
          formData1.append('menu_img', img);
        }
this.http.post<any>(this.url_reg+'/menu_file_testing', formData1).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
    this.msg.successMsg('SS')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);
// UPLOAD SECTION FILE //
// const formData2 = new FormData();
// formData2.append('SectionUrl',v1);
//  formData2.append('restaurant_id',this.resid);
//  formData2.append('menu_id',v5);
//  formData2.append('break_check',this.brunch_check);
//  formData2.append('restaurant_name',this.res_name);
// for(let img1 of this.branchsectionimage){
//   formData2.append('section_img', img1);
// }
// this.http.post<any>(this.url_reg+'/sec_file_testing', formData2).subscribe(
//   (res) =>{console.log(res);
//   //this.spinner.hide();
//   this.myFunction();
// });
////////////////////////////////////////////END ////////////////////////////////////


        this.storevalue.length=0;
      this.storevalue.push({

            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]

          });
          this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

        console.log(data);
        // //this.spinner.hide();
        this.msg.successMsg('SS');

      }
      
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
)
  }
      else{
        //SnackBar
        //this.spinner.hide();
        this.msg.globalError('Please update your package')

      }
    }
    else if(localStorage.getItem('No_of_menu')=='T'){
         if(this.v==0){
           this.v=1;
           this.storevalue.length=0;

           const formData = new FormData();
           formData.append('coverurl', v4);
           formData.append('topurl',  v3);
           formData.append('cov_filename', this.dinner_cover_name);
         formData.append('top_filename', this.dinner_top_name);
           formData.append('cov_img',this.branchcoverimage);
           formData.append('top_img', this.branchtopimage);
            formData.append('restaurant_id',this.resid);
            formData.append('menu_id',v5);
            formData.append('break_check',this.brunch_check);
            formData.append('restaurant_name',this.res_name);
           this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
             (res) => {console.log(res);
             });
             /////////////////////////////////////////// TEST ////////////////////////////////////
             const formData1 = new FormData();
             formData1.append('MenuUrl', v2);
              formData1.append('restaurant_id',this.resid);
              formData1.append('menu_id',v5);
              formData1.append('break_check',this.brunch_check);
              formData1.append('restaurant_name',this.res_name);
             for (let img of this.branchmenuimage) {
               formData1.append('menu_img', img);
             }
this.http.post<any>(this.url_reg+'/menu_file_testing', formData1).subscribe(
       (res) =>{console.log(res);
             //this.spinner.hide();
       this.msg.successMsg('SS')
     }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
);
     
     // UPLOAD SECTION FILE //
    //  const formData2 = new FormData();
    //  formData2.append('SectionUrl',v1);
    //   formData2.append('restaurant_id',this.resid);
    //   formData2.append('menu_id',v5);
    //   formData2.append('break_check',this.brunch_check);
    //   formData2.append('restaurant_name',this.res_name);
    //  for(let img1 of this.branchsectionimage){
    //    formData2.append('section_img', img1);
    //  }
    //  this.http.post<any>(this.url_reg+'/sec_file_testing', formData2).subscribe(
    //    (res) =>{console.log(res);
    //    //this.spinner.hide();
    //    this.myFunction();
    //  });
     ////////////////////////////////////////////END ////////////////////////////////////

           this.storevalue.length=0;
      this.storevalue.push({

            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]

          });
          this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

        console.log(data);
        // //this.spinner.hide();
        // this.myFunction();
        this.msg.successMsg('SS')

      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )




         }
         else if(this.v==1){
           this.v=2;
           this.storevalue.length=0;
           const formData = new FormData();
           formData.append('coverurl', v4);
           formData.append('topurl',  v3);
           formData.append('cov_filename', this.dinner_cover_name);
         formData.append('top_filename', this.dinner_top_name);
           formData.append('cov_img',this.branchcoverimage);
           formData.append('top_img', this.branchtopimage);
            formData.append('restaurant_id',this.resid);
            formData.append('menu_id',v5);
            formData.append('break_check',this.brunch_check);
            formData.append('restaurant_name',this.res_name);
           this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
             (res) => {console.log(res);
             });
             /////////////////////////////////////////// TEST ////////////////////////////////////
             const formData1 = new FormData();
             formData1.append('MenuUrl', v2);
              formData1.append('restaurant_id',this.resid);
              formData1.append('menu_id',v5);
              formData1.append('break_check',this.brunch_check);
              formData1.append('restaurant_name',this.res_name);
             for (let img of this.branchmenuimage) {
               formData1.append('menu_img', img);
             }
this.http.post<any>(this.url_reg+'/menu_file_testing', formData1).subscribe(
       (res) =>{console.log(res);
             //this.spinner.hide();
       this.msg.successMsg('SS')
     }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
);
     
     // UPLOAD SECTION FILE //
    //  const formData2 = new FormData();
    //  formData2.append('SectionUrl',v1);
    //   formData2.append('restaurant_id',this.resid);
    //   formData2.append('menu_id',v5);
    //   formData2.append('break_check',this.brunch_check);
    //   formData2.append('restaurant_name',this.res_name);
    //  for(let img1 of this.branchsectionimage){
    //    formData2.append('section_img', img1);
    //  }
    //  this.http.post<any>(this.url_reg+'/sec_file_testing', formData2).subscribe(
    //    (res) =>{console.log(res);
    //    //this.spinner.hide();
    //    this.myFunction();
    //  });
     ////////////////////////////////////////////END ////////////////////////////////////

           this.storevalue.length=0;
      this.storevalue.push({

            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]

          });
          this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

        console.log(data);
        // //this.spinner.hide();
        // this.myFunction();
        this.msg.successMsg('SS')

      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )





         }
         else {
          //this.spinner.hide();
          this.msg.globalError('Please update your package')
         //SnackBar
         }
    }
    else {
       this.v=3;
       this.storevalue.length=0;
           const formData = new FormData();
           formData.append('coverurl', v4);
           formData.append('topurl',  v3);
           formData.append('cov_filename', this.dinner_cover_name);
          formData.append('top_filename', this.dinner_top_name);
           formData.append('cov_img',this.branchcoverimage);
           formData.append('top_img', this.branchtopimage);
            formData.append('restaurant_id',this.resid);
            formData.append('menu_id',v5);
            formData.append('break_check',this.brunch_check);
            formData.append('restaurant_name',this.res_name);
           this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
             (res) => {console.log(res);
             });
             /////////////////////////////////////////// TEST ////////////////////////////////////
             const formData1 = new FormData();
             formData1.append('MenuUrl', v2);
              formData1.append('restaurant_id',this.resid);
              formData1.append('menu_id',v5);
              formData1.append('break_check',this.brunch_check);
              formData1.append('restaurant_name',this.res_name);
             for (let img of this.branchmenuimage) {
               formData1.append('menu_img', img);
             }
       this.http.post<any>(this.url_reg+'/menu_file_testing', formData1).subscribe(
       (res) =>{console.log(res);
             //this.spinner.hide();
       this.msg.successMsg('SS')
     }
     
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
     
     );
     
     // UPLOAD SECTION FILE //
    //  const formData2 = new FormData();
    //  formData2.append('SectionUrl',v1);
    //   formData2.append('restaurant_id',this.resid);
    //   formData2.append('menu_id',v5);
    //   formData2.append('break_check',this.brunch_check);
    //   formData2.append('restaurant_name',this.res_name);
    //  for(let img1 of this.branchsectionimage){
    //    formData2.append('section_img', img1);
    //  }
    //  this.http.post<any>(this.url_reg+'/sec_file_testing', formData2).subscribe(
    //    (res) =>{console.log(res);
    //    //this.spinner.hide();
    //    this.myFunction();
    //  });
     ////////////////////////////////////////////END ////////////////////////////////////

       this.storevalue.length=0;
      this.storevalue.push({
            "restaurant_id":this.resid,
            "menu_id":v5,
            "break_check":this.brunch_check,
            "start_time":v6,
        "end_time":v7,
        "month_day": [{"dt": this.mon_dinner},{"dt":this.tue_dinner},{"dt":this.wed_dinner},{"dt":this.thu_dinner},{"dt":this.fri_dinner},{"dt":this.sat_dinner},{"dt":this.sun_dinner}]
          });
          this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

        console.log(data);
        // //this.spinner.hide();
        // this.myFunction();
        this.msg.successMsg('SS')
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
console.log(this.storevalue);

    }
      }
     }
    else{
    //this.spinner.hide();
     this.msg.globalWarning('Start time should be less than end time!')
    }
  }
  localStorage.setItem('value',this.v)
}

  launchchaked(event:any){
       if(event.target.checked){
         this.launch_check='Y';
         this.lcc_url=false;

       }
       else{
        this.launch_check='N';
        this.lcc_url=true;


       }
  }

// Fot Submitting data of Launch Tab
  opennextab1(e: any, v1: any, v2: any,v4:any,v6:any,v7:any,v8:any) {
    console.log(this.lunch_cover_name, this.lunch_top_name);

    //this.spinner.show();
 if(this.launch_check=='N'){
  this.londondefault=false;
  this.lagunadefault=false;
  this.parisdefault=false;
  this.tokyodefault=false;
  localStorage.setItem('launch','active');

    if(this.v==1){
      this.v=0;

      const formData = new FormData();
      formData.append('coverurl', v1);
      formData.append('topurl',  v2);
      formData.append('cov_img',this.launchcoverimage);
      formData.append('top_img',this.launchtopimage);
      formData.append('cov_filename', this.lunch_cover_name);
       formData.append('top_filename', this.lunch_top_name);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v6);
       formData.append('break_check',this.launch_check);
       formData.append('restaurant_name',this.res_name);
      console.log(this.launchmenuimage)
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) =>{console.log(res);
    });
 /////////////////////////////////////////// TEST ////////////////////////////////////


 const formData3 = new FormData();
 formData3.append('MenuUrl', v4);
  formData3.append('restaurant_id',this.resid);
  formData3.append('menu_id',v6);
  formData3.append('break_check',this.launch_check);
  formData3.append('restaurant_name',this.res_name);
 for (let img of this.launchmenuimage) {
   formData3.append('menu_img', img);
 }
 this.http.post<any>(this.url_reg+'/menu_file_testing', formData3).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
    this.msg.successMsg('SU')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //
// const formData1 = new FormData();
// formData1.append('SectionUrl',v5);
//  formData1.append('restaurant_id',this.resid);
//  formData1.append('menu_id',v6);
//  formData1.append('break_check',this.launch_check);
//  formData1.append('restaurant_name',this.res_name);
// for(let img1 of this.launchsectionimage){
//   formData1.append('section_img', img1);
// }
// this.http.post<any>(this.url_reg+'/sec_file_testing', formData1).subscribe(
//   (res) =>{console.log(res);
//     //this.spinner.hide();
//     this.myFunction_update();
// });
////////////////////////////////////////////END ////////////////////////////////////

      this.storevalue.length=0;
      this.storevalue.push({

      "restaurant_id":this.resid,
      "menu_id":v6,
      "break_check":this.launch_check,
      "start_time":v7,
  "end_time":v8,
  "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

    });
  console.log(this.storevalue);

  this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

console.log(data);
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)
}
  else if(this.v==2){
      this.v=1;
      const formData = new FormData();
       formData.append('coverurl', v1);
      formData.append('topurl',  v2);
      formData.append('cov_img',this.launchcoverimage);
      formData.append('top_img',this.launchtopimage);
      formData.append('cov_filename', this.lunch_cover_name);
       formData.append('top_filename', this.lunch_top_name);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v6);
       formData.append('break_check',this.launch_check);
       formData.append('restaurant_name',this.res_name);
      console.log(this.launchmenuimage)
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) =>{console.log(res);
    });
 /////////////////////////////////////////// TEST ////////////////////////////////////
 const formData3 = new FormData();
 formData3.append('MenuUrl', v4);
  formData3.append('restaurant_id',this.resid);
  formData3.append('menu_id',v6);
  formData3.append('break_check',this.launch_check);
  formData3.append('restaurant_name',this.res_name);
 for (let img of this.launchmenuimage) {
   formData3.append('menu_img', img);
 }
 this.http.post<any>(this.url_reg+'/menu_file_testing', formData3).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
    this.msg.successMsg('EU')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //
// const formData1 = new FormData();
// formData1.append('SectionUrl',v5);
//  formData1.append('restaurant_id',this.resid);
//  formData1.append('menu_id',v6);
//  formData1.append('break_check',this.launch_check);
//  formData1.append('restaurant_name',this.res_name);
// for(let img1 of this.launchsectionimage){
//   formData1.append('section_img', img1);
// }
// this.http.post<any>(this.url_reg+'/sec_file_testing', formData1).subscribe(
//   (res) =>{console.log(res);
//   //this.spinner.hide();
//   this.myFunction_update();
// });
////////////////////////////////////////////END ////////////////////////////////////
      this.storevalue.length=0;
      this.storevalue.push({
      "restaurant_id":this.resid,
      "menu_id":v6,
      "break_check":this.launch_check,
      "start_time":v7,
  "end_time":v8,
  "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

    });
  console.log(this.storevalue);

  this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

console.log(data);
// //this.spinner.hide();
this.msg.successMsg('SU')

}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)
    }
 }
 else{
if(v7<v8){
   if(localStorage.getItem('launch')==''){
    const formData = new FormData();
    formData.append('coverurl', v1);
    formData.append('topurl',  v2);
    formData.append('cov_img',this.launchcoverimage);
    formData.append('top_img',this.launchtopimage);
    formData.append('cov_filename', this.lunch_cover_name);
     formData.append('top_filename', this.lunch_top_name);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v6);
     formData.append('break_check',this.launch_check);
     formData.append('restaurant_name',this.res_name);
    console.log(this.launchmenuimage)
    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) =>{console.log(res);
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  );
/////////////////////////////////////////// TEST ////////////////////////////////////
const formData3 = new FormData();
formData3.append('MenuUrl', v4);
formData3.append('restaurant_id',this.resid);
formData3.append('menu_id',v6);
formData3.append('break_check',this.launch_check);
formData3.append('restaurant_name',this.res_name);
for (let img of this.launchmenuimage) {
 formData3.append('menu_img', img);
}
this.http.post<any>(this.url_reg+'/menu_file_testing', formData3).subscribe(
(res) =>{console.log(res);
  //this.spinner.hide();
  this.msg.successMsg('SU')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //
// const formData1 = new FormData();
// formData1.append('SectionUrl',v5);
// formData1.append('restaurant_id',this.resid);
// formData1.append('menu_id',v6);
// formData1.append('break_check',this.launch_check);
// formData1.append('restaurant_name',this.res_name);
// for(let img1 of this.launchsectionimage){
// formData1.append('section_img', img1);
// }
// this.http.post<any>(this.url_reg+'/sec_file_testing', formData1).subscribe(
// (res) =>{console.log(res);
//   //this.spinner.hide();
//   this.myFunction_update();
// });
////////////////////////////////////////////END ////////////////////////////////////

      this.storevalue.length=0;
      this.storevalue.push({
       "restaurant_id":this.resid,
      "menu_id":v6,
      "break_check":this.launch_check,
      "start_time":v7,
  "end_time":v8,
  "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

    });
  console.log(this.storevalue);

  this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

console.log(data);
// //this.spinner.hide();
this.msg.successMsg('SU')

}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)

          // this.myFunction();


        this.success=0;
        console.log(this.storevalue);

    }
    else{
     localStorage.setItem('launch','');
    if(localStorage.getItem('No_of_menu')=='O'){
      if(this.v==0){
           this.v=1
           this.storevalue.length=0;
           const formData = new FormData();
      formData.append('coverurl', v1);
      formData.append('topurl',  v2);
      formData.append('cov_img',this.launchcoverimage);
      formData.append('top_img',this.launchtopimage);
      formData.append('cov_filename', this.lunch_cover_name);
       formData.append('top_filename', this.lunch_top_name);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v6);
       formData.append('break_check',this.launch_check);
       formData.append('restaurant_name',this.res_name);
      console.log(this.launchmenuimage)
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) =>{console.log(res);
    });
 /////////////////////////////////////////// TEST ////////////////////////////////////
 const formData3 = new FormData();
 formData3.append('MenuUrl', v4);
  formData3.append('restaurant_id',this.resid);
  formData3.append('menu_id',v6);
  formData3.append('break_check',this.launch_check);
  formData3.append('restaurant_name',this.res_name);
 for (let img of this.launchmenuimage) {
   formData3.append('menu_img', img);
 }
 this.http.post<any>(this.url_reg+'/menu_file_testing', formData3).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
   this.msg.successMsg('SS')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //
// const formData1 = new FormData();
// formData1.append('SectionUrl',v5);
//  formData1.append('restaurant_id',this.resid);
//  formData1.append('menu_id',v6);
//  formData1.append('break_check',this.launch_check);
//  formData1.append('restaurant_name',this.res_name);
// for(let img1 of this.launchsectionimage){
//   formData1.append('section_img', img1);
// }
// this.http.post<any>(this.url_reg+'/sec_file_testing', formData1).subscribe(
//   (res) =>{console.log(res);
//   //this.spinner.hide();
//   this.myFunction();
// });
////////////////////////////////////////////END ////////////////////////////////////
           this.storevalue.length=0;
           this.storevalue.push({

           "restaurant_id":this.resid,
           "menu_id":v6,
           "break_check":this.launch_check,
           "start_time":v7,
       "end_time":v8,
       "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

         });
       console.log(this.storevalue);

       this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

     console.log(data);
  //  //this.spinner.hide();
 this.msg.successMsg('SS')

   }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
   
   )

      //      this.storevalue.push({
      //     "coverurl": v1,
      //     "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
      //     "restaurant_id":this.resid,
      //     "menu_id":v6,
      //     "break_check":this.launch_check,
      //     "start_time":this.brunch_start,
      // "end_time":this.brunch_end,
      // "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

      //   });
        // this.success=0;
        // console.log(this.storevalue);
        // this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
        //   console.log(data);
        //   this.success=data;
        //   if(this.success.suc==1){
        //     this.myFunction();

        //   }
        // })

      }
      else{
   //Snackbar
   //this.spinner.hide();
   this.msg.globalError('Please update your package')
      }
    }
    else if(localStorage.getItem('No_of_menu')=='T'){
         if(this.v==0){
           this.v=1
           this.storevalue.length=0;
           const formData = new FormData();
      formData.append('coverurl', v1);
      formData.append('topurl',  v2);
      formData.append('cov_img',this.launchcoverimage);
      formData.append('top_img',this.launchtopimage);
      formData.append('cov_filename', this.lunch_cover_name);
       formData.append('top_filename', this.lunch_top_name);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v6);
       formData.append('break_check',this.launch_check);
       formData.append('restaurant_name',this.res_name);
      console.log(this.launchmenuimage)
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) =>{console.log(res);
    });
 /////////////////////////////////////////// TEST ////////////////////////////////////
 const formData3 = new FormData();
 formData3.append('MenuUrl', v4);
  formData3.append('restaurant_id',this.resid);
  formData3.append('menu_id',v6);
  formData3.append('break_check',this.launch_check);
  formData3.append('restaurant_name',this.res_name);
 for (let img of this.launchmenuimage) {
   formData3.append('menu_img', img);
 }

 this.http.post<any>(this.url_reg+'/menu_file_testing', formData3).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
   this.msg.successMsg('SS')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //
// const formData1 = new FormData();
// formData1.append('SectionUrl',v5);
//  formData1.append('restaurant_id',this.resid);
//  formData1.append('menu_id',v6);
//  formData1.append('break_check',this.launch_check);
//  formData1.append('restaurant_name',this.res_name);
// for(let img1 of this.launchsectionimage){
//   formData1.append('section_img', img1);
// }
// this.http.post<any>(this.url_reg+'/sec_file_testing', formData1).subscribe(
//   (res) =>{console.log(res);
//     //this.spinner.hide();
//     this.myFunction();
// });
////////////////////////////////////////////END ////////////////////////////////////
           this.storevalue.length=0;
           this.storevalue.push({
           "restaurant_id":this.resid,
           "menu_id":v6,
           "break_check":this.launch_check,
           "start_time":v7,
       "end_time":v8,
       "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

         });
       console.log(this.storevalue);
       this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

     console.log(data);
   }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
   
   )

      //      this.storevalue.push({
      //     "coverurl": v1,
      //     "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
      //     "restaurant_id":this.resid,
      //     "menu_id":v6,
      //     "break_check":this.launch_check,
      //     "start_time":this.brunch_start,
      //     "end_time":this.brunch_end,
      // "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

      //   });
        // this.success=0;
        // console.log(this.storevalue);
        // this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
        //   console.log(data);
        //   this.success=data;
        //   if(this.success.suc==1){
        //     this.myFunction();

        //   }
        // })

          }
          else if(this.v==1){
             this.v=2;
             this.storevalue.length=0;
             const formData = new FormData();
      formData.append('coverurl', v1);
      formData.append('topurl',  v2);
      formData.append('cov_img',this.launchcoverimage);
      formData.append('top_img',this.launchtopimage);
      formData.append('cov_filename', this.lunch_cover_name);
       formData.append('top_filename', this.lunch_top_name);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v6);
       formData.append('break_check',this.launch_check);
       formData.append('restaurant_name',this.res_name);
      console.log(this.launchmenuimage)
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) =>{console.log(res);
    });
 /////////////////////////////////////////// TEST ////////////////////////////////////
 const formData3 = new FormData();
 formData3.append('MenuUrl', v4);
  formData3.append('restaurant_id',this.resid);
  formData3.append('menu_id',v6);
  formData3.append('break_check',this.launch_check);
  formData3.append('restaurant_name',this.res_name);
 for (let img of this.launchmenuimage) {
   formData3.append('menu_img', img);
 }
 this.http.post<any>(this.url_reg+'/menu_file_testing', formData3).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
    this.msg.successMsg('SS')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //
// const formData1 = new FormData();
// formData1.append('SectionUrl',v5);
//  formData1.append('restaurant_id',this.resid);
//  formData1.append('menu_id',v6);
//  formData1.append('break_check',this.launch_check);
//  formData1.append('restaurant_name',this.res_name);
// for(let img1 of this.launchsectionimage){
//   formData1.append('section_img', img1);
// }
// this.http.post<any>(this.url_reg+'/sec_file_testing', formData1).subscribe(
//   (res) =>{console.log(res);
//     //this.spinner.hide();
//     this.myFunction();
// });
////////////////////////////////////////////END ////////////////////////////////////


             this.storevalue.length=0;
             this.storevalue.push({

             "restaurant_id":this.resid,
             "menu_id":v6,
             "break_check":this.launch_check,
             "start_time":v7,
         "end_time":v8,
         "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

           });
         console.log(this.storevalue);

         this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

       console.log(data);
    //  //this.spinner.hide();
    //  this.myFunction();
    this.msg.successMsg('SS')

     }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
     
     )

      //     this.storevalue.push({
      //     "coverurl": v1,
      //     "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
      //     "restaurant_id":this.resid,
      //     "menu_id":v6,
      //     "break_check":this.launch_check,
      //     "start_time":this.brunch_start,
      // "end_time":this.brunch_end,
      // "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

      //   });
        // this.success=0;
        // console.log(this.storevalue);
        // this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
        //   console.log(data);
        //   this.success=data;
        //   if(this.success.suc==1){
        //     this.myFunction();

        //   }
        // })

          }
         else{
             //SnackBar
             //this.spinner.hide();
           this.msg.globalError('Please update your package')
          }
    }
    else {
      this.v=3;
      this.storevalue.length=0;
      const formData = new FormData();
      formData.append('coverurl', v1);
      formData.append('topurl',  v2);
      formData.append('cov_img',this.launchcoverimage);
      formData.append('top_img',this.launchtopimage);
      formData.append('cov_filename', this.lunch_cover_name);
       formData.append('top_filename', this.lunch_top_name);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v6);
       formData.append('break_check',this.launch_check);
       formData.append('restaurant_name',this.res_name);
      console.log(this.launchmenuimage)
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) =>{console.log(res);
    });
 /////////////////////////////////////////// TEST ////////////////////////////////////
 const formData3 = new FormData();
 formData3.append('MenuUrl', v4);
  formData3.append('restaurant_id',this.resid);
  formData3.append('menu_id',v6);
  formData3.append('break_check',this.launch_check);
  formData3.append('restaurant_name',this.res_name);
 for (let img of this.launchmenuimage) {
   formData3.append('menu_img', img);
 }
 this.http.post<any>(this.url_reg+'/menu_file_testing', formData3).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
   this.msg.successMsg('SS')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //
// const formData1 = new FormData();
// formData1.append('SectionUrl',v5);
//  formData1.append('restaurant_id',this.resid);
//  formData1.append('menu_id',v6);
//  formData1.append('break_check',this.launch_check);
//  formData1.append('restaurant_name',this.res_name);
// for(let img1 of this.launchsectionimage){
//   formData1.append('section_img', img1);
// }
// this.http.post<any>(this.url_reg+'/sec_file_testing', formData1).subscribe(
//   (res) =>{console.log(res);
//     //this.spinner.hide();
//     this.myFunction();
// });
////////////////////////////////////////////END ////////////////////////////////////
      this.storevalue.length=0;
      this.storevalue.push({
      "restaurant_id":this.resid,
      "menu_id":v6,
      "break_check":this.launch_check,
      "start_time":v7,
  "end_time":v8,
  "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]
 });
  console.log(this.storevalue);
  this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

console.log(data);
// //this.spinner.hide();
// this.myFunction();
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)

  //     this.storevalue.push({
  //     "coverurl": v1,
  //     "topurl": v2,"MenuUrl":v4,"SectionUrl":v5,
  //     "restaurant_id":this.resid,
  //     "menu_id":v6,
  //     "break_check":this.launch_check,
  //     "start_time":this.brunch_start,
  //     "end_time":this.brunch_end,
  // "month_day": [{"dt": this.mon_launch},{"dt":this.tue_launch},{"dt":this.wed_launch},{"dt":this.thu_launch},{"dt":this.fri_launch},{"dt":this.sat_launch},{"dt":this.sun_launch}]

  //   });
    // this.success=0;
    // console.log(this.storevalue);
    // this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
    //   console.log(data);
    //   this.success=data;
    //   if(this.success.suc==1){
    //     this.myFunction();

    //   }
    // })

    }
  }
}
else{
  //this.spinner.hide();
  this.msg.globalWarning('Start time should be less then end time!')
 }
}
  localStorage.setItem('value',this.v)
}
checkbrunch(event:any){
    if(event.target.checked){
      this.brunch_check='Y';
      this.d_url=false;
    }
    else{
     this.brunch_check='N';
     this.d_url=true;

    }
  }
  checkdinner(event:any){

    if(event.target.checked){
      this.dinner_check='Y';
      this.br_url=false;
    }
    else{
     this.dinner_check='N';
     this.br_url=true;


    }
  }
  // For Submitting the data of Brunch
 opennextab3(e: any,v1:any,v2:any,v3:any,v5:any,v6:any,v7:any) {
  //this.spinner.show();
  // console.log(this.v,e,v1,v2,v3,v4,v5,v6,v7);

  if(this.dinner_check=='N'){
    this.londondefault=false;
    this.lagunadefault=false;
    this.parisdefault=false;
    this.tokyodefault=false;
   localStorage.setItem('brunch','active');

    if(this.v==1){
      this.v=0;
      // this.storevalue.length=0;
    const formData = new FormData();
    formData.append('coverurl', v3);
    formData.append('topurl',  v2);
    formData.append('cov_filename', this.brunch_cover_name);
    formData.append('top_filename', this.brunch_top_name);
    formData.append('cov_img',this.dinnercoverimage);
    formData.append('top_img',this.dinnertopimage);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v5);
     formData.append('break_check',this.dinner_check);
     formData.append('restaurant_name',this.res_name);
    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) => {console.log(res);
    });
     /////////////////////////////////////////// TEST ////////////////////////////////////
     const formData2 = new FormData();
     formData2.append('MenuUrl', v1);
      formData2.append('restaurant_id',this.resid);
      formData2.append('menu_id',v5);
      formData2.append('break_check',this.dinner_check);
      formData2.append('restaurant_name',this.res_name);
     for (let img of this.dinnermenuimage) {
       formData2.append('menu_img', img);
     }
this.http.post<any>(this.url_reg+'/menu_file_testing', formData2).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
    this.msg.successMsg('SU')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //
// const formData3 = new FormData();

// formData3.append('coverurl', v3);
// formData3.append('topurl',  v2);

// formData3.append('SectionUrl',v4);

//  formData3.append('restaurant_id',this.resid);
//  formData3.append('menu_id',v5);
//  formData3.append('break_check',this.dinner_check);

//  formData3.append('restaurant_name',this.res_name);
//  for(let img1 of this.dinnersectionimage){
//       formData3.append('section_img', img1);
//     }

// this.http.post<any>(this.url_reg+'/sec_file_testing', formData3).subscribe(
//   (res) =>{console.log(res);
//     //this.spinner.hide();
//     this.myFunction_update();
// });
////////////////////////////////////////////END ////////////////////////////////////
      this.storevalue.length=0;
     this.storevalue.push({
         "restaurant_id":this.resid,
          "menu_id":v5,
          "break_check":this.dinner_check,
          "start_time":v6,
          "end_time":v7,
          "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
     console.log(this.storevalue);

     this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

      console.log(data);
    //   //this.spinner.hide();
    //  this.myFunction_update();
   }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
   
   )
     }
     else if(this.v==2){
       this.v=1;
         // this.storevalue.length=0;
    const formData = new FormData();
    formData.append('coverurl', v3);
    formData.append('topurl',  v2);
    formData.append('cov_filename', this.brunch_cover_name);
    formData.append('top_filename', this.brunch_top_name);
    formData.append('cov_img',this.dinnercoverimage);
    formData.append('top_img',this.dinnertopimage);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v5);
     formData.append('break_check',this.dinner_check);
     formData.append('restaurant_name',this.res_name);
    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) => {console.log(res);
    });
     /////////////////////////////////////////// TEST ////////////////////////////////////
     const formData2 = new FormData();
     formData2.append('MenuUrl', v1);
      formData2.append('restaurant_id',this.resid);
      formData2.append('menu_id',v5);
      formData2.append('break_check',this.dinner_check);
      formData2.append('restaurant_name',this.res_name);
     for (let img of this.dinnermenuimage) {
       formData2.append('menu_img', img);
     }
this.http.post<any>(this.url_reg+'/menu_file_testing', formData2).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
    this.msg.successMsg('SU')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //
// const formData3 = new FormData();

// formData3.append('coverurl', v3);
// formData3.append('topurl',  v2);

// formData3.append('SectionUrl',v4);

//  formData3.append('restaurant_id',this.resid);
//  formData3.append('menu_id',v5);
//  formData3.append('break_check',this.dinner_check);

//  formData3.append('restaurant_name',this.res_name);
//  for(let img1 of this.dinnersectionimage){
//       formData3.append('section_img', img1);
//     }

// this.http.post<any>(this.url_reg+'/sec_file_testing', formData3).subscribe(
//   (res) =>{console.log(res);
//     //this.spinner.hide();
//     this.myFunction_update();
// });
////////////////////////////////////////////END ////////////////////////////////////
       this.storevalue.length=0;
     this.storevalue.push({
         "restaurant_id":this.resid,
          "menu_id":v5,
          "break_check":this.dinner_check,
          "start_time":v6,
          "end_time":v7,
          "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
     console.log(this.storevalue);

     this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

      console.log(data);
      // //this.spinner.hide();
      // this.myFunction_update();

    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
     }
  }
  else{
 if(v6<v7){
  if(localStorage.getItem('brunch')==''){
      // this.storevalue.length=0;
      const formData = new FormData();
      formData.append('coverurl', v3);
      formData.append('topurl',  v2);
      formData.append('cov_filename', this.brunch_cover_name);
      formData.append('top_filename', this.brunch_top_name);
      formData.append('cov_img',this.dinnercoverimage);
      formData.append('top_img',this.dinnertopimage);
       formData.append('restaurant_id',this.resid);
       formData.append('menu_id',v5);
       formData.append('break_check',this.dinner_check);
       formData.append('restaurant_name',this.res_name);
      this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
        (res) => {console.log(res);
      });
       /////////////////////////////////////////// TEST ////////////////////////////////////
       const formData2 = new FormData();
       formData2.append('MenuUrl', v1);
        formData2.append('restaurant_id',this.resid);
        formData2.append('menu_id',v5);
        formData2.append('break_check',this.dinner_check);
        formData2.append('restaurant_name',this.res_name);
       for (let img of this.dinnermenuimage) {
         formData2.append('menu_img', img);
       }
  this.http.post<any>(this.url_reg+'/menu_file_testing', formData2).subscribe(
    (res) =>{console.log(res);
      //this.spinner.hide();
      this.msg.successMsg('SU')
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  );
  
  // UPLOAD SECTION FILE //
  // const formData3 = new FormData();
  
  // formData3.append('coverurl', v3);
  // formData3.append('topurl',  v2);
  
  // formData3.append('SectionUrl',v4);
  
  //  formData3.append('restaurant_id',this.resid);
  //  formData3.append('menu_id',v5);
  //  formData3.append('break_check',this.dinner_check);
  
  //  formData3.append('restaurant_name',this.res_name);
  //  for(let img1 of this.dinnersectionimage){
  //       formData3.append('section_img', img1);
  //     }
  
  // this.http.post<any>(this.url_reg+'/sec_file_testing', formData3).subscribe(
  //   (res) =>{console.log(res);
  //     //this.spinner.hide();
  //     this.myFunction_update();
  // });
  ////////////////////////////////////////////END ////////////////////////////////////

    this.storevalue.length=0;
     this.storevalue.push({
         "restaurant_id":this.resid,
          "menu_id":v5,
          "break_check":this.dinner_check,
          "start_time":v6,
          "end_time":v7,
          "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
     console.log(this.storevalue);

     this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

      console.log(data);
  // //this.spinner.hide();
 this.msg.successMsg('SU')

    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
        // this.myFunction();

  }
  else{
  localStorage.setItem('brunch','');
  console.log(v6,v7);
    if(localStorage.getItem('No_of_menu')=='O'){
       if(this.v==0){
         this.v=1;
           // this.storevalue.length=0;
    const formData = new FormData();
    formData.append('coverurl', v3);
    formData.append('topurl',  v2);
    formData.append('cov_filename', this.brunch_cover_name);
    formData.append('top_filename', this.brunch_top_name);
    formData.append('cov_img',this.dinnercoverimage);
    formData.append('top_img',this.dinnertopimage);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v5);
     formData.append('break_check',this.dinner_check);
     formData.append('restaurant_name',this.res_name);
    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) => {console.log(res);
    });
     /////////////////////////////////////////// TEST ////////////////////////////////////
     const formData2 = new FormData();
     formData2.append('MenuUrl', v1);
      formData2.append('restaurant_id',this.resid);
      formData2.append('menu_id',v5);
      formData2.append('break_check',this.dinner_check);
      formData2.append('restaurant_name',this.res_name);
     for (let img of this.dinnermenuimage) {
       formData2.append('menu_img', img);
     }
this.http.post<any>(this.url_reg+'/menu_file_testing', formData2).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
   this.msg.successMsg('SS')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //
// const formData3 = new FormData();

// formData3.append('coverurl', v3);
// formData3.append('topurl',  v2);

// formData3.append('SectionUrl',v4);

//  formData3.append('restaurant_id',this.resid);
//  formData3.append('menu_id',v5);
//  formData3.append('break_check',this.dinner_check);

//  formData3.append('restaurant_name',this.res_name);
//  for(let img1 of this.dinnersectionimage){
//       formData3.append('section_img', img1);
//     }

// this.http.post<any>(this.url_reg+'/sec_file_testing', formData3).subscribe(
//   (res) =>{console.log(res);
//     //this.spinner.hide();
//     this.myFunction_update();
// });
////////////////////////////////////////////END ////////////////////////////////////

    this.storevalue.length=0;
     this.storevalue.push({
         "restaurant_id":this.resid,
          "menu_id":v5,
          "break_check":this.dinner_check,
          "start_time":v6,
          "end_time":v7,
          "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
     console.log(this.storevalue);

     this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

      console.log(data);
  // //this.spinner.hide();
  this.msg.successMsg('SS')

    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )

        //  this.storevalue.push({
        //   "coverurl": v3,
        //   "topurl": v2,"MenuUrl":v1,"SectionUrl":v4,
        //   "restaurant_id":this.resid,
        //   "menu_id":v5,
        //   "break_check":this.dinner_check,
        //   "start_time":this.brunch_start,
        //   "end_time":this.brunch_end,
        //   "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]

        // });
        // console.log(this.storevalue);
        // this.success=0
        // this._data.submit_breakfast_menu_setup(this.storevalue).subscribe(data=>{
        //   console.log(data);
        //   this.success=data;
        //   if(this.success.suc==1){
        //     this.myFunction();

        //   }
        // })

       }
       else if(this.v==1){
         //snackBar 
         //this.spinner.hide();
         this.msg.globalError('Please update your package')
      }
    }
    else if(localStorage.getItem('No_of_menu')=='T'){
      if(this.v==0){
        this.v=1;
          // this.storevalue.length=0;
    const formData = new FormData();
    formData.append('coverurl', v3);
    formData.append('topurl',  v2);
    formData.append('cov_filename', this.brunch_cover_name);
    formData.append('top_filename', this.brunch_top_name);
    formData.append('cov_img',this.dinnercoverimage);
    formData.append('top_img',this.dinnertopimage);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v5);
     formData.append('break_check',this.dinner_check);
     formData.append('restaurant_name',this.res_name);
    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) => {console.log(res);
    });
     /////////////////////////////////////////// TEST ////////////////////////////////////
     const formData2 = new FormData();
     formData2.append('MenuUrl', v1);
      formData2.append('restaurant_id',this.resid);
      formData2.append('menu_id',v5);
      formData2.append('break_check',this.dinner_check);
      formData2.append('restaurant_name',this.res_name);
     for (let img of this.dinnermenuimage) {
       formData2.append('menu_img', img);
     }
this.http.post<any>(this.url_reg+'/menu_file_testing', formData2).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
    this.msg.successMsg('SS')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //
// const formData3 = new FormData();

// formData3.append('coverurl', v3);
// formData3.append('topurl',  v2);

// formData3.append('SectionUrl',v4);

//  formData3.append('restaurant_id',this.resid);
//  formData3.append('menu_id',v5);
//  formData3.append('break_check',this.dinner_check);

//  formData3.append('restaurant_name',this.res_name);
//  for(let img1 of this.dinnersectionimage){
//       formData3.append('section_img', img1);
//     }

// this.http.post<any>(this.url_reg+'/sec_file_testing', formData3).subscribe(
//   (res) =>{console.log(res);
//     //this.spinner.hide();
//     this.myFunction_update();
// });
////////////////////////////////////////////END ////////////////////////////////////

    this.storevalue.length=0;
    this.storevalue.push({
        "restaurant_id":this.resid,
         "menu_id":v5,
         "break_check":this.dinner_check,
         "start_time":v6,
         "end_time":v7,
         "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
    console.log(this.storevalue);

    this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

     console.log(data);
//  //this.spinner.hide();
this.msg.successMsg('SS')

   }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
   
   )
  }
      else if(this.v==1){
        this.v=2;
        this.storevalue.length=0;
           // this.storevalue.length=0;
    const formData = new FormData();
    formData.append('coverurl', v3);
    formData.append('topurl',  v2);
    formData.append('cov_filename', this.brunch_cover_name);
    formData.append('top_filename', this.brunch_top_name);
    formData.append('cov_img',this.dinnercoverimage);
    formData.append('top_img',this.dinnertopimage);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v5);
     formData.append('break_check',this.dinner_check);
     formData.append('restaurant_name',this.res_name);
    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) => {console.log(res);
    });
     /////////////////////////////////////////// TEST ////////////////////////////////////
     const formData2 = new FormData();
     formData2.append('MenuUrl', v1);
      formData2.append('restaurant_id',this.resid);
      formData2.append('menu_id',v5);
      formData2.append('break_check',this.dinner_check);
      formData2.append('restaurant_name',this.res_name);
     for (let img of this.dinnermenuimage) {
       formData2.append('menu_img', img);
     }
this.http.post<any>(this.url_reg+'/menu_file_testing', formData2).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
    this.msg.successMsg('SS')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //
// const formData3 = new FormData();

// formData3.append('coverurl', v3);
// formData3.append('topurl',  v2);

// formData3.append('SectionUrl',v4);

//  formData3.append('restaurant_id',this.resid);
//  formData3.append('menu_id',v5);
//  formData3.append('break_check',this.dinner_check);

//  formData3.append('restaurant_name',this.res_name);
//  for(let img1 of this.dinnersectionimage){
//       formData3.append('section_img', img1);
//     }

// this.http.post<any>(this.url_reg+'/sec_file_testing', formData3).subscribe(
//   (res) =>{console.log(res);
//     //this.spinner.hide();
//     this.myFunction_update();
// });
////////////////////////////////////////////END ////////////////////////////////////
    this.storevalue.length=0;
    this.storevalue.push({
        "restaurant_id":this.resid,
         "menu_id":v5,
         "break_check":this.dinner_check,
         "start_time":v6,
         "end_time":v7,
         "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
    console.log(this.storevalue);

    this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

     console.log(data);
//  //this.spinner.hide();
this.msg.successMsg('SS')

   }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
   
   )
 }
      else{
        //Snackbar
        //this.spinner.hide();
        this.msg.globalError('Please update your package')

      }
    }
    else {
      this.v=3;
          // this.storevalue.length=0;
    const formData = new FormData();
    formData.append('coverurl', v3);
    formData.append('topurl',  v2);
    formData.append('cov_filename', this.brunch_cover_name);
    formData.append('top_filename', this.brunch_top_name);
    formData.append('cov_img',this.dinnercoverimage);
    formData.append('top_img',this.dinnertopimage);
     formData.append('restaurant_id',this.resid);
     formData.append('menu_id',v5);
     formData.append('break_check',this.dinner_check);
     formData.append('restaurant_name',this.res_name);
    this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
      (res) => {console.log(res);
    });
     /////////////////////////////////////////// TEST ////////////////////////////////////
     const formData2 = new FormData();
     formData2.append('MenuUrl', v1);
      formData2.append('restaurant_id',this.resid);
      formData2.append('menu_id',v5);
      formData2.append('break_check',this.dinner_check);
      formData2.append('restaurant_name',this.res_name);
     for (let img of this.dinnermenuimage) {
       formData2.append('menu_img', img);
     }
this.http.post<any>(this.url_reg+'/menu_file_testing', formData2).subscribe(
  (res) =>{console.log(res);
    //this.spinner.hide();
    this.msg.successMsg('SS')
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);

// UPLOAD SECTION FILE //
// const formData3 = new FormData();

// formData3.append('coverurl', v3);
// formData3.append('topurl',  v2);

// formData3.append('SectionUrl',v4);

//  formData3.append('restaurant_id',this.resid);
//  formData3.append('menu_id',v5);
//  formData3.append('break_check',this.dinner_check);

//  formData3.append('restaurant_name',this.res_name);
//  for(let img1 of this.dinnersectionimage){
//       formData3.append('section_img', img1);
//     }

// this.http.post<any>(this.url_reg+'/sec_file_testing', formData3).subscribe(
//   (res) =>{console.log(res);
//     //this.spinner.hide();
//     this.myFunction_update();
// });
////////////////////////////////////////////END ////////////////////////////////////
    this.storevalue.length=0;
    this.storevalue.push({
        "restaurant_id":this.resid,
         "menu_id":v5,
         "break_check":this.dinner_check,
         "start_time":v6,
         "end_time":v7,
         "month_day": [{"dt": this.mon_brunch},{"dt":this.tue_brunch},{"dt":this.wed_brunch},{"dt":this.thu_brunch},{"dt":this.fri_brunch},{"dt":this.sat_brunch},{"dt":this.sun_brunch}]});
    console.log(this.storevalue);

    this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{

     console.log(data);
   }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
)

    }
  }
  }
  else{
    //this.spinner.hide();
   this.msg.globalWarning('Start time should be less than end time!')
  }
   }
  localStorage.setItem('value',this.v)
}
//Breakfast cover image
  Breakfast(event: any) {
    console.log(event,event.target.files[0].name,event.target.files[0].type);

    if(event.target.files[0].size>2097152 ){
      this.myFunction_file_Size_error();
      console.log("asdasd");
      this.common_break_menu=document.getElementById('mycoverfile');
      this.common_break_menu.value='';
    }
    else{
     this.breakfast_cover_name=event.target.files[0].name;
    this.common_image = event;
    this.break_Cover=false;
    // this.breakfastcoverimage=event.target.files[0];

    const URL = window.URL || window.webkitURL;
    let Img:any = '';
    Img = new Image();

    const filesToUpload = (event.target.files);
    Img.src = URL.createObjectURL(filesToUpload[0]);

    Img.onload = (e: any) => {
      const height = e.path[0].height;
      const width = e.path[0].width;

      console.log(height,width);
      if(height<this.crop_height && width <this.crop_width)
      this.show_alert=false
      else
      this.show_alert=true;

  }

  // this.show_zoom=false
 this.crop_width=1800;
 this.crop_height=2400;
 this.crop_min_height=1800
 this.crop_min_width=2400
 this.aspect_ratio="4/3";
  console.log("sadasasas");
  this.Modal=document.getElementById('hid');
  this.Modal.click();
  this.common_value="breakfast_cover";

  }

  }
  // For breakfasttop image
  changeBreak(event: any) {
    console.log(event.target.files[0].name,event.target.files[0].type);
    if(event.target.files[0].size>2097152 ){
      this.myFunction_file_Size_error();
      console.log("asdasd");
      this.common_break_menu=document.getElementById('mytopfile');
      this.common_break_menu.value='';
    }
    else{
    if(event.target.files.length!=0){
    this.breakfast_top_name=event.target.files[0].name;
   this.crop_width=1800;
 this.crop_height=2560;
      this.common_image=event;
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="breakfast_top";
    this.breakfasttopimage = event.target.files[0];
    // console.log(this.breakfasttopimage);
    this.break_Top=false;
    // this.Breakfast_top_preview=false;
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.img_top= reader.result as string;



    // reader.readAsDataURL(this.breakfasttopimage)

    // }

    }
    else{
      this.Breakfast_top_preview=true;
    }
 console.log(this.breakfasttopimage);
     }
  }
  //For breakfastmenuimage
  changeBreakmenubreak(event: any) {

   if (event.target.files.length > 0) {
    this.multipleImages= event.target.files;
    this.Breakfast_menu_preview=false;


      for (let i = 0; i < event.target.files.length; i++) {
      //   if(event.target.files[i].size>2097152){
      //    console.log("asasasas");


      //      this.myFunction_file_Size_error();


      //  }
      //  else{


        this.img_menu_break.push({id:'',img_path:URL.createObjectURL(this.multipleImages[i])});



        // }


        }




    }
    else{
      this.Breakfast_menu_preview=true;

    }
    console.log(this.img_menu_break, this.multipleImages);
    console.log('LENGTH:' , this.multipleImages.length)


  }
  // For breakfast section image
  changeBreakmenubreak1(event:any){
    // this.breakfastsectionimage=event.target.files;
    if (event.target.files.length > 0) {
      this.breakfastsectionimage = event.target.files;
      this.Breakfast_section_preview=false;

      for (let i = 0; i < event.target.files.length; i++) {
        this.img_section_break.push({id:'',img_path:URL.createObjectURL(this.breakfastsectionimage[i])});
      }
    }
    else{
      this.Breakfast_section_preview=true;

    }

  }
// Event of launch cover image
  changelaunchcoverpage(event: any) {
    if(event.target.files[0].size>2097152){
      this.myFunction_file_Size_error();
      console.log("asdasd");
      this.common_break_menu=document.getElementById('mylunchcoverfile');
      this.common_break_menu.value='';
    }
    else{

    console.log(event.target.files[0]);
    if(event.target.files.length!=0){
      this.crop_width=1800;
      this.crop_height=2560;
       this.lunch_cover_name=event.target.files[0].name;
      this.common_image=event;
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="lunch_cover";

      this.launchcoverimage = event.target.files[0];
      // console.log(this.launchcoverimage);
      // this.Launch_cover_preview=false;
      // const reader = new FileReader();
      // reader.onload = () => {
      //   this.img_launch_cover = reader.result as string;

      // }

      // reader.readAsDataURL(this.launchcoverimage)
    }
    else{
      this.Launch_cover_preview=true;

    }

  }


  }
// Event of launch top image
  changelaunchtopimage(event: any) {
    if(event.target.files[0].size>2097152 ){
      this.myFunction_file_Size_error();
      console.log("asdasd");
      this.common_break_menu=document.getElementById('mylunchtopfile');
      this.common_break_menu.value='';
    }
    else{

    if(event.target.files.length!=0){
      this.lunch_top_name=event.target.files[0].name;
      this.crop_width=1800;
      this.crop_height=2560;
      this.common_image = event;
      console.log("sadasasas");
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="lunch_top";
      this.lunch_Top=false;
    // console.log(event.target.files[0]);
    // this.launchtopimage = event.target.files[0];
    // this.Launch_top_preview=false;

    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.img_launch_top = reader.result as string;

    // }

    // reader.readAsDataURL(this.launchtopimage)
    }
    else{
      this.Launch_top_preview=true;

    }

  }
  }
  // Event of launch menu image
  changelaunchtmenuimage(event: any) {
    if(event.target.files.length>0){
      this.launchmenuimage = event.target.files;
      this.Launch_menu_preview=false;
      for (let i = 0; i < event.target.files.length; i++) {
          this.img_launch_menu.push({id:'',img_path:URL.createObjectURL(this.launchmenuimage[i])});
      }
       }
    else{
      this.Launch_menu_preview=true;
    }
    console.log( this.launchmenuimage);
  }
// Event of launch section image
  changelaunchsectionbreak1(event:any){
   console.log(event.target.files);
    if(event.target.files.length>0){
      this.launchsectionimage = event.target.files;
      this.Launch_section_preview=false;
      for (let i = 0; i < event.target.files.length; i++) {
            this.img_launch_section.push({id:'',img_path:URL.createObjectURL(this.launchsectionimage[i])});
      }
   }
  else{
      this.Launch_section_preview=true;
    }
  }
  // Event of dinner section image
  changebrunchsectionbreak1(event:any){
    if(event.target.files.length>0){
      this.branchsectionimage=event.target.files;
      this.Dinner_section_preview=false;
      for (let i = 0; i < event.target.files.length; i++) {
          this.img_dinner_section.push({id:'',img_path:URL.createObjectURL(this.branchsectionimage[i])});
      }
    }
    else{
      this.Dinner_section_preview=true;
    }
    console.log(this.branchsectionimage)
  }
// Event of dinner menu image
  changebrunchmenubreak1(event:any){
    if(event.target.files.length > 0){
      this.branchmenuimage=event.target.files;
      this.Dinner_menu_preview=false;
      for (let i = 0; i < event.target.files.length; i++) {
        this.img_dinner_menu.push({id:'',img_path:URL.createObjectURL(this.branchmenuimage[i])});
      }
    }
    else{
      this.Dinner_menu_preview=true;
    }
  }
    // Event of dinner top image
  brunchtopimage(event:any){
    if(event.target.files[0].size>2097152){
      this.myFunction_file_Size_error();
      this.common_break_menu=document.getElementById('mydinnertopfile');
      this.common_break_menu.value='';
    }
    else{
    if(event.target.files.length!=0){
      this.crop_width=1800;
      this.crop_height=2560;
      this.dinner_top_name=event.target.files[0].name;
      this.common_image = event;
      console.log("sadasasas");
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="dinner_top";
    }
    else{
    this.Dinner_top_preview=true;
    }
   }
  }
    // Event of dinner cover image
  brunchcoverimage(event:any){
    if(event.target.files[0].size>2097152){
      this.myFunction_file_Size_error();
      console.log("asdasd");
      this.common_break_menu=document.getElementById('mydinnercoverfile');
      this.common_break_menu.value='';
    }
    else{
    if(event.target.files.length!=0){
      this.dinner_cover_name=event.target.files[0].name;
      this.crop_width=1800;
      this.crop_height=2560;
      this.common_image = event;
      console.log("sadasasas");
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="dinner_cover";
    }
    else{
     this.Dinner_cover_preview=true;

    }
  }
  }
   // Event of brunch section image
  changedinnersectionimage(event:any){
    if(event.target.files.length>0){
      this.dinnersectionimage=event.target.files;
      this.Brunch_section_preview=false;
      for (let i = 0; i < event.target.files.length; i++) {
        this.img_brunch_section.push({id:'',img_path:URL.createObjectURL(this.dinnersectionimage[i])});
        }
     }
    else{
      this.Brunch_section_preview=true;
    }
  }
    // Event of brunch cover image
  dinnerchangecoverimage(event:any){
    if(event.target.files[0].size>2097152  ){
      this.myFunction_file_Size_error();
      this.common_break_menu=document.getElementById('mybrunchcoverfile');
      this.common_break_menu.value='';
    }
    else{
    if(event.target.files.length!=0){
      this.brunch_cover_name=event.target.files[0].name;
      this.crop_width=1800;
      this.crop_height=2560;
      this.common_image=event;
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="brunch_cover";
}
else{
  this.Brunch_cover_preview=true;
}
    }
  }
    // Event of brunch top image
  dinnerchangetopimage(event:any){
    if(event.target.files[0].size>2097152 ){
      this.myFunction_file_Size_error();
      this.common_break_menu=document.getElementById('mybrunchtopfile');
      this.common_break_menu.value='';
    }
    else{
    if(event.target.files.length!=0){
      this.crop_width=1800;
      this.crop_height=2560;
      this.brunch_top_name=event.target.files[0].name;
      this.common_image=event;
      this.Modal=document.getElementById('hid');
      this.Modal.click();
      this.common_value="brunch_top";
    }
    else{
   this.Brunch_top_preview=true;
   }

  }
  }
  // Event of brunch menu image
  changedinnermenuimage(event:any){
    if(event.target.files.length>0){
      this.dinnermenuimage=event.target.files;
      this.Brunch_menu_preview=false;
     for (let i = 0; i < event.target.files.length; i++) {
          this.img_brunch_menu.push({id:'',img_path:URL.createObjectURL(this.dinnermenuimage[i])});
      }
    }
    else{
      this.Brunch_menu_preview=true;
    }
  }
  // For Breakfastmenu display day and time
  checkday(event:any,e:any){
    if(e=='monday'){
        this.mon_check=document.getElementById('vehicle2');
      if(event.target.checked){
        this.mon=2;
        console.log(this.mon);
      }
      else{
        this.mon=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
  else if(e=='tuesday'){  
      this.tue_check=document.getElementById('vehicle3');
      if(event.target.checked){
        this.tue=3;
      }
      else{
        this.tue=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
     else if(e=='wednesday'){
      this.wed_check=document.getElementById('vehicle4');
      if(event.target.checked){
        this.wed=4;
      }
      else{
        this.wed=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
     else if(e=='thursday'){
      this.thu_check=document.getElementById('vehicle5');
      if(event.target.checked){
        this.thu=5
      }
      else{
        this.thu=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
    else if(e=='friday'){
      this.fri_check=document.getElementById('vehicle6');
      if(event.target.checked){
        this.fri=6;
      }
      else{
        this.fri=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
     else if(e=='sat'){
     this.sat_check=document.getElementById('vehicle7');
     if(event.target.checked){
      this.sat=7;
     }
     else{
       this.sat=0;
       this.every=document.getElementById('vehicle1');
       this.every.checked=false;
     }

    }
   else if(e=='sun'){
      this.sun_check=document.getElementById('vehicle8');
      if(event.target.checked){
               this.sun=8;
      }
      else{
        this.sun=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
   else if(e=='everyday'){
      this.every=document.getElementById('vehicle1');
      if(event.target.checked){
      this.mon_check=document.getElementById('vehicle2');
      this.mon_check.checked=true;
      this.tue_check=document.getElementById('vehicle3');
      this.tue_check.checked=true;
      this.wed_check=document.getElementById('vehicle4');
      this.wed_check.checked=true;
      this.thu_check=document.getElementById('vehicle5');
      this.thu_check.checked=true;
      this.fri_check=document.getElementById('vehicle6');
      this.fri_check.checked=true;
      this.sat_check=document.getElementById('vehicle7');
      this.sat_check.checked=true;
      this.sun_check=document.getElementById('vehicle8');
      this.sun_check.checked=true;
      this.mon=2;
      this.tue=3;
      this.wed=4;
      this.thu=5;
      this.fri=6;
      this.sat=7;
      this.sun=8
      }
       else{
        this.mon_check=document.getElementById('vehicle2');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle3');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle4');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle5');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle6');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle7');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle8');
        this.sun_check.checked=false;
        this.mon=0;
        this.tue=0;
        this.wed=0;
        this.thu=0;
        this.fri=0;
        this.sat=0;
        this.sun=0;
       }

    }
  }
//For Launch day time check
  checkeveday(event:any,e:any){
    if(e ==='monday'){
        this.mon_check=document.getElementById('vehicle22');
      if(event.target.checked){
        this.mon_launch=2;
        console.log(this.mon);
      }
      else{
        this.mon_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }

    }
  else if(e ==='tuesday'){

      console.log("this.mon");
      this.tue_check=document.getElementById('vehicle32');
      if(event.target.checked){
        this.tue_launch=3;
      }
      else{
        this.tue_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    }
     else if(e ==='wednesday'){

      console.log(".mon");
      this.wed_check=document.getElementById('vehicle42');
      if(event.target.checked){
        this.wed_launch=4;
      }
      else{
        this.wed_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    }
     else if(e==='thursday'){

      console.log(".mon");
      this.thu_check=document.getElementById('vehicle52');
      if(event.target.checked){
        this.thu_launch=5
      }
      else{
        this.thu_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    }
    else if(e==='friday'){

      console.log(".mon");
      this.fri_check=document.getElementById('vehicle62');
      if(event.target.checked){
        this.fri_launch=6;
      }
      else{
        this.fri_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }
    }
     else if(e==='sat'){

     console.log(".mon");
     this.sat_check=document.getElementById('vehicle72');
     if(event.target.checked){
      this.sat_launch=7;
     }
     else{
       this.sat_launch=0;
       this.every=document.getElementById('vehicle12');
       this.every.checked=false;
     }

    }
   else if(e==='sun'){

      console.log(".mon");
      this.sun_check=document.getElementById('vehicle82');
      if(event.target.checked){
               this.sun_launch=8;
      }
      else{
        this.sun_launch=0;
        this.every=document.getElementById('vehicle12');
        this.every.checked=false;
      }

    }
   else if(e ==='everyday'){
      this.every=document.getElementById('vehicle12');
      if(event.target.checked){
        console.log("asdsadad")

      this.mon_check=document.getElementById('vehicle22');
      this.mon_check.checked=true;
      this.tue_check=document.getElementById('vehicle32');
      this.tue_check.checked=true;
      this.wed_check=document.getElementById('vehicle42');
      this.wed_check.checked=true;
      this.thu_check=document.getElementById('vehicle52');
      this.thu_check.checked=true;
      this.fri_check=document.getElementById('vehicle62');
      this.fri_check.checked=true;
      this.sat_check=document.getElementById('vehicle72');
      this.sat_check.checked=true;
      this.sun_check=document.getElementById('vehicle82');
      this.sun_check.checked=true;
      this.mon_launch=2;
      this.tue_launch=3;
      this.wed_launch=4;
      this.thu_launch=5;
      this.fri_launch=6;
      this.sat_launch=7;
      this.sun_launch=8
      }
       else{
        console.log("asdsadadfailed")
        this.mon_check=document.getElementById('vehicle22');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle32');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle42');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle52');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle62');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle72');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle82');
        this.sun_check.checked=false;
        this.mon_launch=0;
        this.tue_launch=0;
        this.wed_launch=0;
        this.thu_launch=0;
        this.fri_launch=0;
        this.sat_launch=0;
        this.sun_launch=0;
       }

    }
  }
checklaunch(event:any,e:any){
    if(e=='monday'){
        this.mon_check=document.getElementById('vehicle2');
      // this.mon_check.checked=true;
      if(this.mon_check.checked){
        this.mon=2;
        console.log(this.mon);
      }
      else{
        this.mon=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }

    }
 if(e=='tuesday'){

      console.log("this.mon");
      this.tue_check=document.getElementById('vehicle3');
      if(this.tue_check.checked){
        this.tue=3;
      }
      else{
        this.tue=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
    if(e=='wednesday'){

      console.log(".mon");
      this.wed_check=document.getElementById('vehicle4');
      if(this.wed_check.checked){
        this.wed=4;
      }
      else{
        this.wed=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
     if(e=='thursday'){

      console.log(".mon");
      this.thu_check=document.getElementById('vehicle5');
      if(this.thu_check.checked){
        this.thu=5
      }
      else{
        this.thu=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
   if(e=='friday'){

      console.log(".mon");
      this.fri_check=document.getElementById('vehicle6');
      if(this.fri_check.checked){
        this.fri=6;
      }
      else{
        this.fri=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }
    }
    if(e=='sat'){

     console.log(".mon");
     this.sat_check=document.getElementById('vehicle7');
     if(this.sat_check.checked){
      this.sat=7;
     }
     else{
       this.sat=0;
       this.every=document.getElementById('vehicle1');
       this.every.checked=false;
     }

    }
  if(e=='sun'){
        this.sun=8
      console.log(".mon");
      this.sun_check=document.getElementById('vehicle8');
      if(this.sun_check.checked){
               this.sun=8;
      }
      else{
        this.sun=0;
        this.every=document.getElementById('vehicle1');
        this.every.checked=false;
      }

    }
    if(e=='everyday'){
      this.every=document.getElementById('vehicle1');
      if(this.every.checked){


      this.mon_check=document.getElementById('vehicle2');
      this.mon_check.checked=true;
      this.tue_check=document.getElementById('vehicle3');
      this.tue_check.checked=true;
      this.wed_check=document.getElementById('vehicle4');
      this.wed_check.checked=true;
      this.thu_check=document.getElementById('vehicle5');
      this.thu_check.checked=true;
      this.fri_check=document.getElementById('vehicle6');
      this.fri_check.checked=true;
      this.sat_check=document.getElementById('vehicle7');
      this.sat_check.checked=true;
      this.sun_check=document.getElementById('vehicle8');
      this.sun_check.checked=true;
      this.mon=2;
      this.tue=3;
      this.wed=4;
      this.thu=5;
      this.fri=6;
      this.sat=7;
      this.sun=8
      }
       else{
        this.mon_check=document.getElementById('vehicle2');
        this.mon_check.checked=false;
        this.tue_check=document.getElementById('vehicle3');
        this.tue_check.checked=false;
        this.wed_check=document.getElementById('vehicle4');
        this.wed_check.checked=false;
        this.thu_check=document.getElementById('vehicle5');
        this.thu_check.checked=false;
        this.fri_check=document.getElementById('vehicle6');
        this.fri_check.checked=false;
        this.sat_check=document.getElementById('vehicle7');
        this.sat_check.checked=false;
        this.sun_check=document.getElementById('vehicle8');
        this.sun_check.checked=false;
        this.mon=0;
        this.tue=0;
        this.wed=0;
        this.thu=0;
        this.fri=0;
        this.sat=0;
        this.sun=0;
       }

    }
   console.log(this.mon,this.tue,this.wed,this.thu,this.fri,this.sat,this.sun)
  }
  //For dinner day and time
  checkdinnerday(event:any,e:any){
    if(e ==='monday'){
      this.mon_check=document.getElementById('vehicle23');

    if(event.target.checked){
      this.mon_dinner=2;
      console.log(this.mon);
    }
    else{
      this.mon_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }

  }
else if(e ==='tuesday'){

    console.log("this.mon");
    this.tue_check=document.getElementById('vehicle33');
    if(event.target.checked){
      this.tue_dinner=3;
    }
    else{
      this.tue_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  }
   else if(e ==='wednesday'){

    console.log(".mon");
    this.wed_check=document.getElementById('vehicle43');
    if(event.target.checked){
      this.wed_dinner=4;
    }
    else{
      this.wed_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  }
   else if(e==='thursday'){

    console.log(".mon");
    this.thu_check=document.getElementById('vehicle53');
    if(event.target.checked){
      this.thu_dinner=5
    }
    else{
      this.thu_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  }
  else if(e==='friday'){

    console.log(".mon");
    this.fri_check=document.getElementById('vehicle63');
    if(event.target.checked){
      this.fri_dinner=6;
    }
    else{
      this.fri_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }
  }
   else if(e==='sat'){

   console.log(".mon");
   this.sat_check=document.getElementById('vehicle73');
   if(event.target.checked){
    this.sat_dinner=7;
   }
   else{
     this.sat_dinner=0;
     this.every=document.getElementById('vehicle13');
     this.every.checked=false;
   }

  }
 else if(e==='sun'){

    console.log(".mon");
    this.sun_check=document.getElementById('vehicle83');
    if(event.target.checked){
             this.sun_dinner=8;
    }
    else{
      this.sun_dinner=0;
      this.every=document.getElementById('vehicle13');
      this.every.checked=false;
    }

  }
 else if(e ==='everyday'){
    this.every=document.getElementById('vehicle13');
    if(event.target.checked){
      console.log("asdsadad")

    this.mon_check=document.getElementById('vehicle23');
    this.mon_check.checked=true;
    this.tue_check=document.getElementById('vehicle33');
    this.tue_check.checked=true;
    this.wed_check=document.getElementById('vehicle43');
    this.wed_check.checked=true;
    this.thu_check=document.getElementById('vehicle53');
    this.thu_check.checked=true;
    this.fri_check=document.getElementById('vehicle63');
    this.fri_check.checked=true;
    this.sat_check=document.getElementById('vehicle73');
    this.sat_check.checked=true;
    this.sun_check=document.getElementById('vehicle83');
    this.sun_check.checked=true;
    this.mon_dinner=2;
    this.tue_dinner=3;
    this.wed_dinner=4;
    this.thu_dinner=5;
    this.fri_dinner=6;
    this.sat_dinner=7;
    this.sun_dinner=8
    }
     else{
      console.log("asdsadadfailed")
      this.mon_check=document.getElementById('vehicle23');
      this.mon_check.checked=false;
      this.tue_check=document.getElementById('vehicle33');
      this.tue_check.checked=false;
      this.wed_check=document.getElementById('vehicle43');
      this.wed_check.checked=false;
      this.thu_check=document.getElementById('vehicle53');
      this.thu_check.checked=false;
      this.fri_check=document.getElementById('vehicle63');
      this.fri_check.checked=false;
      this.sat_check=document.getElementById('vehicle73');
      this.sat_check.checked=false;
      this.sun_check=document.getElementById('vehicle83');
      this.sun_check.checked=false;
      this.mon_dinner=0;
      this.tue_dinner=0;
      this.wed_dinner=0;
      this.thu_dinner=0;
      this.fri_dinner=0;
      this.sat_dinner=0;
      this.sun_dinner=0;
     }

  }
 console.log(this.mon_dinner,this.tue_dinner,this.wed_dinner,this.thu_dinner,this.fri_dinner,this.sat_dinner,this.sun_dinner)
  }
  //For brunch day and time
  checkbrucnhday(event:any,e:any){
    if(e ==='monday'){
      this.mon_check=document.getElementById('vehicle24');

    if(event.target.checked){
      this.mon_brunch=2;
      // console.log(this.mon);
    }
    else{
      this.mon_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }

  }
else if(e ==='tuesday'){

    console.log("this.mon");
    this.tue_check=document.getElementById('vehicle34');
    if(event.target.checked){
      this.tue_brunch=3;
    }
    else{
      this.tue_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  }
   else if(e ==='wednesday'){

    console.log(".mon");
    this.wed_check=document.getElementById('vehicle44');
    if(event.target.checked){
      this.wed_brunch=4;
    }
    else{
      this.wed_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  }
   else if(e==='thursday'){

    console.log(".mon");
    this.thu_check=document.getElementById('vehicle54');
    if(event.target.checked){
      this.thu_brunch=5
    }
    else{
      this.thu_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  }
  else if(e==='friday'){

    console.log(".mon");
    this.fri_check=document.getElementById('vehicle64');
    if(event.target.checked){
      this.fri_brunch=6;
    }
    else{
      this.fri_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }
  }
   else if(e==='sat'){

   console.log(".mon");
   this.sat_check=document.getElementById('vehicle74');
   if(event.target.checked){
    this.sat_brunch=7;
   }
   else{
     this.sat_brunch=0;
     this.every=document.getElementById('vehicle14');
     this.every.checked=false;
   }

  }
 else if(e==='sun'){

    console.log(".mon");
    this.sun_check=document.getElementById('vehicle84');
    if(event.target.checked){
             this.sun_brunch=8;
    }
    else{
      this.sun_brunch=0;
      this.every=document.getElementById('vehicle14');
      this.every.checked=false;
    }

  }
 else if(e ==='everyday'){
    this.every=document.getElementById('vehicle14');
    if(event.target.checked){
      console.log("asdsadad")

    this.mon_check=document.getElementById('vehicle24');
    this.mon_check.checked=true;
    this.tue_check=document.getElementById('vehicle34');
    this.tue_check.checked=true;
    this.wed_check=document.getElementById('vehicle44');
    this.wed_check.checked=true;
    this.thu_check=document.getElementById('vehicle54');
    this.thu_check.checked=true;
    this.fri_check=document.getElementById('vehicle64');
    this.fri_check.checked=true;
    this.sat_check=document.getElementById('vehicle74');
    this.sat_check.checked=true;
    this.sun_check=document.getElementById('vehicle84');
    this.sun_check.checked=true;
    this.mon_brunch=2;
    this.tue_brunch=3;
    this.wed_brunch=4;
    this.thu_brunch=5;
    this.fri_brunch=6;
    this.sat_brunch=7;
    this.sun_brunch=8
    }
     else{
      console.log("asdsadadfailed")
      this.mon_check=document.getElementById('vehicle24');
      this.mon_check.checked=false;
      this.tue_check=document.getElementById('vehicle34');
      this.tue_check.checked=false;
      this.wed_check=document.getElementById('vehicle44');
      this.wed_check.checked=false;
      this.thu_check=document.getElementById('vehicle54');
      this.thu_check.checked=false;
      this.fri_check=document.getElementById('vehicle64');
      this.fri_check.checked=false;
      this.sat_check=document.getElementById('vehicle74');
      this.sat_check.checked=false;
      this.sun_check=document.getElementById('vehicle84');
      this.sun_check.checked=false;
      this.mon_brunch=0;
      this.tue_brunch=0;
      this.wed_brunch=0;
      this.thu_brunch=0;
      this.fri_brunch=0;
      this.sat_brunch=0;
      this.sun_brunch=0;
     }

  }
 console.log(this.mon_brunch,this.tue_brunch,this.wed_brunch,this.thu_brunch,this.fri_brunch,this.sat_brunch,this.sun_brunch)
  }

  // For success snackbar
  myFunction() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    this.x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
  }



  // For success update snackbar
  myFunction_update() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar3");

    // Add the "show" class to DIV
    this.x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
  }
   // For Error snackbar
   myFunction_forerror() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar1");

    // Add the "show" class to DIV
    this.x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
  }
//For special menu exist check
  myFunction_existspecial() {
    // Get the snackbar DIV
    this.x = document.getElementById("snackbar6");

    // Add the "show" class to DIV
    this.x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
  }

    // For Timing Error snackbar
    myFunction_fortime() {
      // Get the snackbar DIV
      this.x = document.getElementById("snackbar2");

      // Add the "show" class to DIV
      this.x.className = "show";

      // After 3 seconds, remove the show class from DIV
      setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 5000);
    }
  //Previous button
  goprev(e:any){
    if(e=='paris'){
      this.tab1=false;
      this.tab2=true;
      this.tab3=true;
      this.tab4=true;
      this.paris = document.getElementById('London');
      this.paris.className = 'active';
    }
    else if(e=='tokyo'){
      this.tab1=true;
      this.tab2=false;
      this.tab3=true;
      this.tab4=true;
      this.paris = document.getElementById('Paris');
      this.paris.className = 'active';
    }
    else if(e=='laguna'){
      this.tab1=true;
      this.tab2=true;
      this.tab3=false;
      this.tab4=true;
      this.paris = document.getElementById('Tokyo');
      this.paris.className = 'active';
    }
  }

  // For Checking null
  checkvalidity(event:any,e:any){
    //For Checking null in breakfast  Tab
    if(event.target.id=="url"){
        if(event.target.value==''){
          this.launch_url=true;
          this.bc_url=true;
        }
        else{
          this.launch_url=false;
          this.bc_url=false;

        }
    }
    else if(event.target.id=="url_top"){

      if(event.target.value==''){
        this.launch_url=true;
        this.bt_url=true;
      }
      else{
        this.launch_url=false;
        this.bt_url=false;

      }
    }
    else if(event.target.id=="url_menu"){
      if(event.target.value==''){
        this.launch_url=true;
        this.bm_url=true;
      }
      else{
        this.launch_url=false;
        this.bm_url=false;

      }
    }
    else if(event.target.id=="Url_section"){
      if(event.target.value==''){
        this.launch_url=true;
        this.bs_url=true;
      }
      else{
        this.launch_url=false;
        this.bs_url=false;

      }
    }
      //For Checking null in Launch Tab
    else if(e=='lc_url'){

      if(event.target.value==''){
         this.lc_url=true;
      }
      else{
        this.lc_url=false;
      }
    }
    else if(e=='ls_url'){
      if(event.target.value==''){
         this.ls_url=true;
      }
      else{
        this.ls_url=false;

      }
    }

    else if(e=='lm_url'){
      if(event.target.value==''){
        this.lm_url=true;
      }
      else{
        this.lm_url=false;

      }
    }
    else if(e=='lt_url'){
      if(event.target.value==''){
        this.lt_url=true;

      }
      else{
        this.lt_url=false;

      }
    }
    else if(e=='lstart'){
      if(event.target.value==''){
        this.lend_url=true;

      }
      else{
        this.lend_url=false;

      }
    }
    else if(e=='lend'){
      if(event.target.value==''){
      this.lstart_url=true;

      }
      else{
        this.lstart_url=false;


      }
    }
     //For Checking null in dinner Tab
     else if(e=='dc_url'){

      if(event.target.value==''){
         this.dc_url=true;
      }
      else{
        this.dc_url=false;
      }
    }
    else if(e=='ds_url'){
      if(event.target.value==''){
         this.ds_url=true;
      }
      else{
        this.ds_url=false;

      }
    }

    else if(e=='dm_url'){
      if(event.target.value==''){
        this.dm_url=true;
      }
      else{
        this.dm_url=false;

      }
    }
    else if(e=='dt_url'){
      if(event.target.value==''){
        this.dt_url=true;

      }
      else{
        this.dt_url=false;

      }
    }
    else if(e=='dstart'){
      if(event.target.value==''){
        this.dend_url=true;

      }
      else{
        this.dend_url=false;

      }
    }
    else if(e=='dend'){
      if(event.target.value==''){
      this.dstart_url=true;

      }
      else{
        this.dstart_url=false;


      }
    }
   //For checking null in Brunch tab
   else if(e=='brs_url'){

    if(event.target.value==''){
       this.brs_url=true;
    }
    else{
      this.brs_url=false;
    }
  }
  else if(e=='brc_url'){
    if(event.target.value==''){
       this.brc_url=true;
    }
    else{
      this.brc_url=false;

    }
  }

  else if(e=='brt_url'){
    if(event.target.value==''){
      this.brt_url=true;
    }
    else{
      this.brt_url=false;

    }
  }
  else if(e=='brm_url'){
    if(event.target.value==''){
      this.brm_url=true;

    }
    else{
      this.brm_url=false;

    }
  }


  }
  //For setting brunch start time
  checkstart(e:any){
    if(e.target.value!=''){
      this.brunch_start=e.target.value;
      this.brstart_url=false;

      }
      else{
      this.brstart_url=true;

      }


  console.log(this.brunch_start);

}
  //For setting brunch end time
  checksend(e:any){
      if(e.target.value!=''){
      this.brunch_end=e.target.value;
      this.brend_url=false;

      }
      else{
      this.brend_url=true;

      }

  console.log(  this.brunch_end);

  }
  //For srtting breakfast time
  checkbreakend(e:any,v:any){
    if(v=='start'){
      if(e.target.value!=''){
      this.brunch_start=e.target.value;
         this.bstart_url=false;
      }
      else {
         this.bstart_url=true;

      }
    }
    else if(v=='end'){
      if(e.target.value!=''){
        this.brunch_end=e.target.value;
           this.bend_url=false;
        }
        else {
           this.bend_url=true;

        }


    }

    console.log(this.brunch_end,this.brunch_start)
  }
  // For setting launch time
   checkblaunch(e:any,v:any){

    if(v=='start'){
      this.brunch_start=e.target.value;
    }
    else if(v=='end'){
      this.brunch_end=e.target.value;

    }

    console.log(this.brunch_end,this.brunch_start)
  }
  // For setting dinner time
  checkdinnertime(e:any,v:any){
    if(v=='start'){
      if(e.target.value!=''){
        this.brunch_start=e.target.value;
        this.dstart_url=false;

      }
      else {
        this.dstart_url=true;
      }

    }
    else if(v=='end'){
      if(e.target.value!=''){
        this.brunch_end=e.target.value;
        this.dend_url=false;

      }
      else {
        this.dend_url=true;
      }

    }

    console.log(this.brunch_end,this.brunch_start)
  }
 //For delete photo
 deletephoto(e:any){

   if(e=='lunch_cover'){
     this.img_launch_cover='';
  this.Launch_cover_preview=true;
  this.launchcoverimage='';
  this.Modal=document.getElementById('mylunchcoverfile');
   this.Modal.value=null;
  //  this.common_remove_div=document.getElementById('Lunch_Cover');
  //  this.common_remove_div.className='';
  this.lunch_Cover=true;


   }

  else if(e=='lunch_top'){
    this.Launch_top_preview=true;
    this.launchtopimage='';
    this.img_launch_top='';
    this.Modal=document.getElementById('mylunchtopfile');
    this.Modal.value=null;
  this.lunch_Top=true;

    // this.common_remove_div=document.getElementById('Lunch_Top');
    // this.common_remove_div.className='';


  }
  else if(e=='breakfast_cover'){
    this.Breakfast_cover_preview=true;
    this.breakfastcoverimage='';
    this.img_cover='';
    this.Modal=document.getElementById('mycoverfile');
   this.Modal.value=null;
  this.break_Cover=true;

  //  this.common_remove_div=document.getElementById('break_cover');
  //  this.common_remove_div.className='';
  }
  else if(e=='breakfast_top'){
    this.breakfasttopimage='';
    this.img_top='';
    this.Breakfast_top_preview=true;
    this.Modal=document.getElementById('mytopfile');
   this.Modal.value=null;
  this.break_Top=true;

  //  this.common_remove_div=document.getElementById('break_top');
  //  this.common_remove_div.className='';


  }
  else if(e=='dinner_cover'){
    this.img_dinner_cover='';
    this.branchcoverimage='';
    this.Dinner_cover_preview=true;
    this.Modal=document.getElementById('mydinnercoverfile');
    this.Modal.value=null;
    this.dinner_Cover=true;
   }
   else if(e=='dinner_top'){
     this.img_dinner_top='';
     this.branchtopimage='';
     this.Dinner_top_preview=true;
     this.Modal=document.getElementById('mydinnertopfile');
     this.Modal.value=null;
  this.dinner_Top=true;

    //  this.common_remove_div=document.getElementById('dinner_top');
    // this.common_remove_div.className='';

   }
   else if(e=='brunch_cover'){
     this.Brunch_cover_preview=true;
     this.img_brunch_cover='';
     this.dinnercoverimage='';
     this.Modal=document.getElementById('mybrunchcoverfile');
     this.Modal.value=null;
  this.brunch_Cover=true;

    //  this.common_remove_div=document.getElementById('brunch_cov');
    //  this.common_remove_div.className='';

   }
   else if(e=='brunch_top'){
     this.img_brunch_top='';
     this.dinnertopimage='';
     this.Brunch_top_preview=true;
     this.Modal=document.getElementById('mybrunchtopfile');
     this.Modal.value=null;
  this.brunch_Top=true;

    //  this.common_remove_div=document.getElementById('brunch_top');
    //  this.common_remove_div.className='';

   }
   else if(e=='special'){
    this.common_for_special_menu='';
    this.previous_id='';
    this.see_photo=true;
    this.Modal=document.getElementById('')
   }
   else if(e=='other_cover'){
     this.get_cov=true;
     this.get_cover_img='';
     this.get_img_cover='';
     this.Modal=document.getElementById('myothercoverfile');
     this.Modal.value=null;
   }
   else if(e=='other_top'){
    this.get_top=true;
    this.get_top_img='';
    this.get_img_top='';
    this.Modal=document.getElementById('myothertopfile');
    this.Modal.value=null;
  }
 }
 deletemultiple(e:any,index:any,id:any){
  if(id > 0){

var x = confirm("Are you sure you want to delete permanently?");
  if (x){
    console.log(id);
    this._data.global_service(0,'/del_menu',`id=${id}&res_id=${this.resid}`).subscribe(data=>{
      console.log(data);
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )

  if(e=='lunch_menu'){
    this.img_launch_menu.splice(index,1);
    this.launchmenuimage.splice(index,1);
    if(this.launchmenuimage.length!=0){
      this.common_remove_div=document.getElementById('')
    }
    console.log(this.img_launch_menu.length)
   }

   else if(e=='breakfast_menu'){
    this.img_menu_break.splice(index,1);
     this.multipleImages.splice(index,1);
    console.log(this.img_menu_break.length)

   }

  else if(e=='dinner_menu'){
   this.img_dinner_menu.splice(index,1);
   this.branchmenuimage.splice(index,1);
  }

  else if(e=='brunch_menu'){
    this.img_brunch_menu.splice(index,1);
    this.dinnermenuimage.splice(index,1);
  }
  else if(e=='other_menu'){
    this.img_menu_others.splice(index,1);
    this.get_menu_img.splice(index,1);
   }
}
}
else{

  if(e=='lunch_menu'){
    this.img_launch_menu.splice(index,1);
    this.launchmenuimage.splice(index,1);
    if(this.launchmenuimage.length!=0){
      this.common_remove_div=document.getElementById('')
    }
    console.log(this.img_launch_menu.length)
   }

   else if(e=='breakfast_menu'){
    this.img_menu_break.splice(index,1);
     this.multipleImages.splice(index,1);
    console.log(this.img_menu_break.length)

   }

  else if(e=='dinner_menu'){
   this.img_dinner_menu.splice(index,1);
   this.branchmenuimage.splice(index,1);
  }

  else if(e=='brunch_menu'){
    this.img_brunch_menu.splice(index,1);
    this.dinnermenuimage.splice(index,1);
  }
  else if(e=='other_menu'){
    this.img_menu_others.splice(index,1);
      this.get_menu_img.splice(index,1);
   }

}




 }
 deletemultiplelunchsection(name:any,e:any,id:any){
  if(id > 0){
  var x = confirm("Are you sure you want to delete permanently?");
  if (x){
    console.log(id);
    this._data.global_service(0,'/del_sec',`id=${id}&res_id=${this.resid}`).subscribe(data=>{
      console.log(data);
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )

   if(name=='lunch_section'){
    this.img_launch_section.splice(e,1);
   this.launchsectionimage.splice(e,1);

   }
   else if(name=='dinner_section'){
     this.img_dinner_section.splice(e,1);
     this.branchsectionimage.splice(e,1);

   }
   else if(name=='breakfast_section'){
     this.img_section_break.splice(e,1);
     this.breakfastsectionimage.splice(e,1);
   }
   else if(name=='brunch_section'){
     this.img_brunch_section.splice(e,1);
     this.dinnersectionimage.splice(e,1);
   }
   else if(name=='special_section'){
    this.img_special.splice(e,1);
    this.special_img.splice(e,1);
  console.log("special1");

   }
  }
}
   else{
  // console.log("False");
  if(name=='lunch_section'){
    this.img_launch_section.splice(e,1);
   this.launchsectionimage.splice(e,1);

   }
   else if(name=='dinner_section'){
     this.img_dinner_section.splice(e,1);
     this.branchsectionimage.splice(e,1);

   }
   else if(name=='breakfast_section'){
     this.img_section_break.splice(e,1);
     this.breakfastsectionimage.splice(e,1);
   }
   else if(name=='brunch_section'){
     this.img_brunch_section.splice(e,1);
     this.dinnersectionimage.splice(e,1);
   }
   else if(name=='special_section'){
    this.img_special.splice(e,1);
    this.special_img.splice(e,1);
  console.log("special");
   }
 
   }
   console.log(this.special_img);


}


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
  this.Zoomout = false;
  this.ZoomIn = false;
}
imageCropped(event: ImageCroppedEvent) {
  console.log('imagecropped');
  console.log("width:" + event.width);
  console.log("height:" + event.height)
  this.croppedImage = event.base64;

  console.log({ file: base64ToFile(this.croppedImage), event});
  
  console.log(this.croppedImage);
}
cropperReady(sourceImageDimensions: Dimensions) {
 console.log('Cropper ready', sourceImageDimensions);
  console.log("cropper ready CROPPED IMAGE:" + this.croppedImage);
}
loadImageFailed() {
  console.log('Load failed');
}
click_it(e:any){
  // this.cover_change=true;
  this.common_for_all=document.getElementById('id01');
  this.common_for_all.style.display='none';
    this.valu = true;
    // console.log('encoede::' +encodeURIComponent(this.croppedImage));

    if(e=='breakfast_cover'){
      // CONVERT BASE64 TO IMAGE FILE //
    const base64 = this.croppedImage;
      const imageName = this.breakfast_cover_name;
      const imageBlob = this.dataURItoBlob( this.croppedImage);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_cover=imageFile;
      // END //
      // PREVIEW IMAGE //
    const reader=new FileReader();
    reader.onload = () => {
      this.img_cover = reader.result as string;

    }
    reader.readAsDataURL(this.img_cover)
    // END //
    // this.img_cover=this.croppedImage;
    this.breakfastcoverimage=this.img_cover;
   this.Breakfast_cover_preview=false;
   console.log(this.breakfastcoverimage);

    }
    else if(e=='breakfast_top'){

      const base64 = this.croppedImage;
      const imageName = this.breakfast_top_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});

      this.img_top=imageFile;
    const reader=new FileReader();
    reader.onload = () => {
      this.img_top = reader.result as string;

    }
    reader.readAsDataURL(this.img_top)
      // this.img_top=this.croppedImage;
      this.breakfasttopimage=this.img_top;
      this.Breakfast_top_preview=false;
    }
    else if(e=='lunch_cover'){
      const base64 = this.croppedImage;
      const imageName =this.lunch_cover_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_launch_cover=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.img_launch_cover = reader.result as string;

      }
      reader.readAsDataURL(this.img_launch_cover)

      this.launchcoverimage=this.img_launch_cover;
      this.Launch_cover_preview=false;
    }
    else if(e=='lunch_top'){
        console.log("Lunch_Top");
      const base64 = this.croppedImage;
      const imageName =this.lunch_top_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_launch_top=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.img_launch_top = reader.result as string;

      }
      reader.readAsDataURL(this.img_launch_top)

      // this.img_launch_top=this.croppedImage;
      this.launchtopimage= this.img_launch_top;
      this.Launch_top_preview=false;
         console.log(this.Launch_top_preview);

      console.log(this.img_launch_top)
    }
    else if(e=='dinner_cover'){

      const base64 = this.croppedImage;
      const imageName = this.dinner_cover_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_dinner_cover=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.img_dinner_cover = reader.result as string;

      }
      reader.readAsDataURL( this.img_dinner_cover)

    //  this.img_dinner_cover=this.croppedImage;
     this.branchcoverimage= this.img_dinner_cover;
     this.Dinner_cover_preview=false;
    }
    else if(e=='dinner_top'){
      const base64 = this.croppedImage;
      const imageName =this.dinner_top_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_dinner_top=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.img_dinner_top = reader.result as string;

      }
      reader.readAsDataURL(this.img_dinner_top)
      // this.img_dinner_top=this.croppedImage;
     this.branchtopimage=this.img_dinner_top;
     this.Dinner_top_preview=false;
    }
    else if(e=='brunch_cover'){
      const base64 = this.croppedImage;
      const imageName = this.brunch_cover_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_brunch_cover=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.img_brunch_cover = reader.result as string;

      }
      reader.readAsDataURL(this.img_brunch_cover)
      // this.img_brunch_cover=this.croppedImage;
      this.dinnercoverimage=this.img_brunch_cover;
      this.Brunch_cover_preview=false;
    }
    else if(e=='brunch_top'){

      const base64 = this.croppedImage;
      const imageName =this.brunch_top_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_brunch_top=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.img_brunch_top = reader.result as string;

      }
      reader.readAsDataURL(this.img_brunch_top)
      // this.img_brunch_top=this.croppedImage;
      this.dinnertopimage= this.img_brunch_top;
      this.Brunch_top_preview=false;

    }
    else if(e=='other_cover'){
      const base64 = this.croppedImage;
      const imageName =this.brunch_top_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.get_img_cover=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.get_img_cover = reader.result as string;

      }
      reader.readAsDataURL(this.get_img_cover)
      // this.img_brunch_top=this.croppedImage;
      this.get_cover_img= this.get_img_cover;
      this.get_cov=false;
    }
    else if(e=='other_top'){
      const base64 = this.croppedImage;
      const imageName =  this.top_name;
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.get_img_top=imageFile;

      const reader=new FileReader();
      reader.onload = () => {
        this.get_img_top = reader.result as string;

      }
      reader.readAsDataURL(this.get_img_top)
      // this.img_brunch_top=this.croppedImage;
      this.get_top_img= this.get_img_top;
      this.get_top=false;
    }

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


close_it(e:any){
  this.valu=true;
  this.common_for_all=document.getElementById('id01');
  this.common_for_all.style.display='none';
  if(e=='breakfast_cover'){
    this.Modal=document.getElementById('mycoverfile');
    this.Modal.value=null;
  }
  else if(e=='breakfast_top'){
    this.Modal=document.getElementById('mytopfile');
    this.Modal.value=null;
  }
  else if(e=='lunch_cover'){
   this.Modal=document.getElementById('mylunchcoverfile');
    this.Modal.value=null;
  }
  else if(e=='lunch_top'){
    this.Modal=document.getElementById('mylunchtopfile');
    this.Modal.value=null;
  }
  else if(e=='dinner_cover'){
    this.Modal=document.getElementById('mydinnercoverfile');
    this.Modal.value=null;
  }
  else if(e=='dinner_top'){
    this.Modal=document.getElementById('mydinnertopfile');
    this.Modal.value=null;
  }
  else if(e=='brunch_cover'){
    this.Modal=document.getElementById('mybrunchcoverfile');
    this.Modal.value=null;
  }
  else if(e=='brunch_top'){
    this.Modal=document.getElementById('mybrunchtopfile');
    this.Modal.value=null;
  }
  else if(e=='other_cover'){
    this.Modal=document.getElementById('myothercoverfile');
    this.Modal.value=null;
  }
  else if(e=='other_top'){
    this.Modal=document.getElementById('myothertopfile');
    this.Modal.value=null;
  }
  



}

open_crop_modal(){
  this.Modal=document.getElementById('id01');
  this.Modal.style.display='block';
}
openpdf(e:any){
  console.log(e);
  this.img_break_section=e;
// console.log(e);

 var iframe="<iframe width='100%' height='100%' src='" +this.img_break_section+"' ></iframe>";
var xx=window.open(iframe,"_blank");
xx?.document.open();
xx?.document.write(iframe);
xx?.document.close();
// document.location.href=this.img_break_section;
}

 // For success update snackbar
 myFunction_file_Size_error() {
  // Get the snackbar DIV
  this.x = document.getElementById("snackbar4");

  // Add the "show" class to DIV
  this.x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
}
//For checking null of special url
check_special(){
 console.log(this.special_url);

}
//For getting special image
getstock_imege(event:any){
  if(event.target.files.length>0){
   for (let i = 0; i < event.target.files.length; i++) {
    this.special_img=event.target.files;
    this.img_special.push({id:'',img_path:URL.createObjectURL(event.target.files[i])});
    this.special_section_preview=false;
  }
  }
  else{
    this.special_section_preview=true;

  }
 console.log(this.special_img,this.img_special);

}
// For Selecting the image base on category id
getStockimageonselectcategory(e:any){
  console.log(e);

  //  For getting Image on load
  this._data.global_service(0,'/stock_img',`cat_id=${e}`).subscribe(data=>{
    console.log(data);
    this.stock_img=data;
    this.stock_img=this.stock_img.msg;
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
}
// For disabled or enable the field base on special menu checkvalue
enableordisablefields(event:any){
if(event.target.checked){
  console.log("checked");
 this.special_check='Y';
 this.special_button=false;
 if(this.exclusive=='E' ){
  this.enable_addition=true;

 this.enable_exclusive=false;
  if(this.week=='E'){
    this.enable_days=false;
   this.enable_date_specific=true;

  }
  else{
   this.enable_date_specific=false;
   this.enable_days=true;
  }

}
else if(this.exclusive=='A'){
  this.enable_addition=false;
  this.enable_exclusive=true;
if(this.week=='E'){
         this.enable_days_addition=false;
    this.enable_specific_date_addition=true;
  }
  else{
    this.enable_specific_date_addition=false;
    this.enable_days_addition=true;
  }
}
else{
 this.special_button=false;
}
 
  // this.special_disabled=false;
  // this.special_button=true;
  //   this.enable_exclusive=false;
  //   this.enable_days=false;
  //   this.enable_date_specific=false
  //   this.enable_addition=false;
  //    this.enable_specific_date_addition=false;
  //    this.enable_days_addition=false;
  //    this.enable_addition=false;
  //    this.enable_days_addition=false;
}
else {
 this.special_check='N';
 this.enable_exclusive=true;
    this.enable_days=true;
    this.enable_date_specific=true
    this.enable_addition=true;
     this.enable_specific_date_addition=true;
     this.enable_days_addition=true;
 this.special_disabled=true;
this.special_button=true;

}
}
get_frm_date(e:any){
  if(e.target.id=='special_from_dt'){
    this.menu_frm_dt=e.target.value;
 }
 else{
   this.menu_to_dt=e.target.value;
    
 }
}
get_to_date(e:any){
  if(e.target.id=='special_to_dt'){
    this.menu_to_dt=e.target.value;
 }
 else{
   this.menu_to_dt=e.target.value;
    
 }
}
//For submitting final data
save_special(){
  //this.spinner.show();
  this.storevalue.length=0;
 console.log(this.resid,this.special,{"menu_id":this.break_Special_add},{"menu_id":this.lunch_special_add},{"menu_id":this.dinner_Special_add},{"menu_id":this.brunch_Special_add});
  console.log(this.special_url,this.special_img,this.common_for_special_menu,this.previous_id,this.special_check);
   this.storevalue.push({
    "menu_id": this.special,
    "break_check":this.special_check,
    "restaurant_id":this.resid,
    "regular_menu_flag":this.exclusive,
    "day_flag":this.week,
    "menu_frm_dt":this.exclusive=='E'? (this.week=='S'? this.menu_frm_dt:''): (this.week=='S' ? this.menu_frm_dt:''),
    "menu_to_dt":this.exclusive=='E'? (this.week=='S'? this.menu_to_dt:''): (this.week=='S' ? this.menu_to_dt:''),
    // "menu_date":this.exclusive=='E'? (this.week=='S'? this.date_time:''): (this.week=='S' ? this.add_date:''),
    "img_catg":this.previous_id,
    "img_path":this.common_for_special_menu,
    "reg_menu_id":this.exclusive=='E' ? [{"menu_id":this.break_Special},{"menu_id":this.lunch_special},{"menu_id":this.dinner_Special},{"menu_id":this.brunch_Special}] :  [{"menu_id":this.break_Special_add},{"menu_id":this.lunch_special_add},{"menu_id":this.dinner_Special_add},{"menu_id":this.brunch_Special_add}],
    "month_day":this.exclusive=='E' ? [{"dt": this.mon_special},{"dt":this.tue_special},{"dt":this.wed_special},{"dt":this.thu_special},{"dt":this.fri_special},{"dt":this.sat_special},{"dt":this.sun_special}] : [{"dt": this.mon_special_add},{"dt":this.tue_special_add},{"dt":this.wed_special_add},{"dt":this.thu_special_add},{"dt":this.fri_special_add},{"dt":this.sat_special_add},{"dt":this.sun_special_add}],
    "start_time": this.start_time,
    "end_time" :this.end_time 
  })
  this.http.post<any>(this.url_reg+'/special_date_time', this.storevalue).subscribe(data=>{
    console.log(data);
   }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
   
   )
  // For Common 
  const formdata=new FormData();
  formdata.append('special_url',this.special_url);
  for(let img of this.special_img){
    formdata.append('special_img',img);
  }
  formdata.append("break_check",'Y');
  formdata.append('restaurant_id',this.resid);
  formdata.append('menu_id',this.special);
  this.http.post<any>(this.url_reg+'/special_save', formdata).subscribe(data=>{
    console.log(data);
    //this.spinner.hide();
    this.myFunction_for_special();

    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )

this.router.navigate(['/logo-setup']);

}
myFunction_for_special(){
  this.x = document.getElementById("snackbar5");

    // Add the "show" class to DIV
    this.x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 3000);
}
// For checking which Pack is selected in Special mennu
enable_exclusive_inaddition(event:any,menu_name:any){
  if(menu_name=='addition'){
    if(event.target.checked){
      //For unchecking the everyweek and days in anddition when click on addition
      this.daycheck=document.getElementById('everyWeek');
      this.daycheck.checked=false;
      this.daycheck=document.getElementById('vehicle_se');
      this.daycheck.checked=false;
      for(let i=2;i<=8;i++){
        this.daycheck=document.getElementById('vehicle_s'+i);
        this.daycheck.checked=false;
      }
     this.daycheck=document.getElementById('specificWeek');
     this.daycheck.checked=false;
    //  this.daycheck=document.getElementById('special_exc');
    //  this.daycheck.value=' ';
     this.daycheck=document.getElementById('break');
     this.daycheck.checked=false;
     this.daycheck=document.getElementById('lunch');
     this.daycheck.checked=false;
     this.daycheck=document.getElementById('dinner');
     this.daycheck.checked=false;
     this.daycheck=document.getElementById('brunch');
     this.daycheck.checked=false;
    this.break_Special=0;
    this.lunch_special=0;
    this.dinner_Special=0;
     this.brunch_Special=0;
     this.daycheck=document.getElementById('start_exclusive');
     this.daycheck.value='';
     this.daycheck=document.getElementById('end_exclusive');
     this.daycheck.value='';
     this.start_time='';
     this.end_time='';

      this.enable_addition=false;
      this.enable_days=true;
      this.enable_exclusive=true;
      this.enable_date_specific=true;
       this.exclusive='A';
       this.check_every_week_check=document.getElementById('everyWeekAddi');
       if(this.check_every_week_check.checked){
         this.enable_days_addition=false;
       }
       this.check_specific_date_check=document.getElementById('specificWeekAddi');
       if( this.check_specific_date_check.checked){
         this.enable_specific_date_addition=false;
       }
    }
    else{
     this.enable_addition=true;
    }
  }
  else{
    if(event.target.checked){
      this.daycheck=document.getElementById('everyWeekAddi');
      this.daycheck.checked=false;
      this.daycheck=document.getElementById('vehicle_sa');
      this.daycheck.checked=false;
      for(let i=1;i<=7;i++){
        this.daycheck=document.getElementById('vehicle_sa'+i);
        this.daycheck.checked=false;
      }
     this.daycheck=document.getElementById('specificWeekAddi');
     this.daycheck.checked=false;
    //  this.daycheck=document.getElementById('special');
    //  this.daycheck.value=' ';
     this.daycheck=document.getElementById('specials_breakfast');
     this.daycheck.checked=false;
     this.daycheck=document.getElementById('specials_lunch');
     this.daycheck.checked=false;
     this.daycheck=document.getElementById('specials_dinner');
     this.daycheck.checked=false;
     this.daycheck=document.getElementById('specials_brunch');
     this.daycheck.checked=false;
      this.break_Special_add=0;
      this.lunch_special_add=0;
     this.dinner_Special_add=0;
      this.brunch_Special_add=0;
     this.daycheck=document.getElementById('start_addition');
     this.daycheck.value='';
     this.daycheck=document.getElementById('end_addition');
     this.daycheck.value='';
     this.start_time='';
     this.end_time='';

      this.enable_exclusive=false;
      this.enable_addition=true;
      this.enable_days_addition=true;
      this.enable_specific_date_addition=true;

      this.exclusive='E';
      this.check_every_week_check=document.getElementById('everyWeek');
        if(this.check_every_week_check.checked){
          this.enable_days=false;
        }
        this.check_specific_date_check=document.getElementById('specificWeek');
        if( this.check_specific_date_check.checked){
          this.enable_date_specific=false;
        }
    }
    else{
      this.enable_exclusive=true;
    }
  }
  

}

// For checking which Pack is selected in Special menu Exclusive or Addition
enable_everyweek(event:any,e:any,pack:any){
  if(pack=='exclusive'){
 if(e=='every_week'){
  if(event.target.checked){
    this.enable_days=false;
    this.enable_date_specific=true;
    this.week='E';
  // this.daycheck=document.getElementById('special_exc');
  // this.daycheck.value='';
  this.date_time='';
  }
  else{
    // this.week='';
    this.enable_days=true;

  }

}
else{

   if(event.target.checked){
    this.enable_date_specific=false;
    this.enable_days=true;
     this.week='S';
     this.daycheck=document.getElementById('vehicle_se');
     this.daycheck.checked=false;
     for(let i=2;i<=8;i++){
      this.daycheck=document.getElementById('vehicle_s'+i);
      this.daycheck.checked=false;
      
     }
     this.mon_special=0;
     this.tue_special=0;
     this.wed_special=0;
     this.thu_special=0;
     this.fri_special=0;
     this.sat_special=0;
     this.sun_special=0;

   }
   else{
    this.enable_date_specific=true;
    //  this.week='';
   }


}
}
else{
  if(e=='every_week_addition'){
    if(event.target.checked){
      this.enable_days_addition=false;
      this.enable_specific_date_addition=true;
      // this.daycheck=document.getElementById('special');
      // this.daycheck.value=' ';
      this.add_date=''
      this.week='E';
    }
    else{
      // this.week='';
      this.enable_days_addition=true;
    }
  
  }
  else{
     if(event.target.checked){
      this.enable_specific_date_addition=false;
     this.enable_days_addition=true;
     this.daycheck=document.getElementById('vehicle_sa');
     this.daycheck.checked=false;
     for(let i=1;i<=7;i++){
      this.daycheck=document.getElementById('vehicle_sa'+i);
      this.daycheck.checked=false;
      
     }
     this.mon_special_add=0;
     this.tue_special_add=0;
     this.wed_special_add=0;
     this.thu_special_add=0;
     this.fri_special_add=0;
     this.sat_special_add=0;
     this.sun_special_add=0;
       
      this.week='S';
     }
     else{
      this.enable_specific_date_addition=true;
      //  this.week='';
     }
  
  
  }
}


}
// For checking checkbox below the specific date
checkregularid(event:any,e:any,v:any){
  // this.storevalue.length=0;
   if(e=='break'){
    if(event.target.checked){
     
      this._data.global_service(0,'/check_menu_special',`id=${this.resid}&menu_id=${v}`).subscribe(data=>{
        console.log(data);
         this.suc_special=data;
         console.log(this.break_Special);
         if(this.suc_special.suc==2){
          this.break_Special=0;
         console.log({msg: this.suc_special.suc});
          
          this.suc_special=this.suc_special.msg;
          this.myFunction_existspecial();
         console.log(this.break_Special);

        }
        else{
            this.break_Special=1;
         console.log({msg: this.break_Special});
         this.get_special_time(this.resid, this.break_Special, this.lunch_special, this.dinner_Special, this.brunch_Special)
        }
     }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
     
     )
   }
   
    else{
      this.break_Special=0;
      this.get_special_time(this.resid, this.break_Special, this.lunch_special, this.dinner_Special, this.brunch_Special);
    }

  }
  else if(e=='lunch'){
        console.log(this.break_Special);

    if(event.target.checked){
      this._data.global_service(0,'/check_menu_special',`id=${this.resid}&menu_id=${v}`).subscribe(data=>{
      console.log(data);
       this.suc_special=data;
       if(this.suc_special.suc>1){
      this.lunch_special=0;

        this.suc_special=this.suc_special.msg;
        this.myFunction_existspecial();
      }
      
      
      else{
    this.lunch_special=2;
    this.get_special_time(this.resid, this.break_Special, this.lunch_special, this.dinner_Special, this.brunch_Special)
    

      }
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
    }
    else{
    this.lunch_special=0
    this.get_special_time(this.resid, this.break_Special, this.lunch_special, this.dinner_Special, this.brunch_Special)

    }
  }
  else if(e=='dinner'){
    if(event.target.checked){
      this._data.global_service(0,'/check_menu_special',`id=${this.resid}&menu_id=${v}`).subscribe(data=>{
        console.log(data);
         this.suc_special=data;
         if(this.suc_special.suc>1){
      this.dinner_Special=0;

          this.suc_special=this.suc_special.msg;
          this.myFunction_existspecial();
        }
        else{
      this.dinner_Special=3;
      this.get_special_time(this.resid, this.break_Special, this.lunch_special, this.dinner_Special, this.brunch_Special)
      
        }
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
    }
    else{
      this.dinner_Special=0;
      this.get_special_time(this.resid, this.break_Special, this.lunch_special, this.dinner_Special, this.brunch_Special);
    }
  }
  else if(e=='brunch'){
    if(event.target.checked){
      this._data.global_service(0,'/check_menu_special',`id=${this.resid}&menu_id=${v}`).subscribe(data=>{
          console.log(data);
           this.suc_special=data;
           if(this.suc_special.suc>1){
            this.brunch_Special=0;

            this.suc_special=this.suc_special.msg;
            this.myFunction_existspecial();
          }
          else{
            this.brunch_Special=4;
         this.get_special_time(this.resid, this.break_Special, this.lunch_special, this.dinner_Special, this.brunch_Special)
           
          }
        }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
        
        )
    }
    else{
      this.brunch_Special=0;
      this.get_special_time(this.resid, this.break_Special, this.lunch_special, this.dinner_Special, this.brunch_Special)

   }
   }
}

get_special_time(res_id:any, v1:any, v2:any, v3:any, v4:any){
  //this.spinner.show();
 this.storevalue.length=0;
  this.storevalue.push({
    "restaurant_id":res_id,
    "reg_menu_id": [{"menu_id":v1},{"menu_id":v2},{"menu_id":v3},{"menu_id":v4}]
    })   
  this._data.global_service(0,'/special_date_time',this.storevalue).subscribe(data=>{
    console.log(data);
    this.exclusive_time=data;
    console.log(this.exclusive_time);
    if(this.exclusive=='E'){
    this.Modal=document.getElementById('start_exclusive');
    this.Modal.value=this.exclusive_time.msg[0].start_time;
    this.start_time=this.exclusive_time.msg[0].start_time;
    this.Modal=document.getElementById('end_exclusive');
    this.Modal.value=this.exclusive_time.msg[0].end_time;
    this.end_time=this.exclusive_time.msg[0].end_time;
    //this.spinner.hide();
   }
   else{
     
    this.Modal=document.getElementById('start_addition');
    this.Modal.value=this.exclusive_time.msg[0].start_time;
    this.start_time=this.exclusive_time.msg[0].start_time;
    this.Modal=document.getElementById('end_addition');
    this.Modal.value=this.exclusive_time.msg[0].end_time;
    this.end_time=this.exclusive_time.msg[0].end_time;
    //this.spinner.hide();
   }
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
  console.log(this.start_time,this.end_time);
  
}
//for checking day for specialmenu everyday
checkspecialday(event:any,e:any){
  if(e=='monday'){
    this.mon_check=document.getElementById('vehicle_s2');

  if(event.target.checked){
    this.mon_special=2;
    console.log(this.mon_special);
  }
  else{
    this.mon_special=0;
    this.every=document.getElementById('vehicle_se');
   
    this.every.checked=false;
  }

  // else{
  //   this.mon_special=0;
  //   this.every=document.getElementById('vehicle_s2');
  //   this.every.checked=false;
  // }

}
else if(e=='tuesday'){

  console.log("this.mon");
  this.tue_check=document.getElementById('vehicle_s3');
  if(event.target.checked){
    this.tue_special=3;
  }
  else{
    this.tue_special=0;
    this.every=document.getElementById('vehicle_se');
   
    this.every.checked=false;
  }

  // else{
  //   this.tue=0;
  //   this.every=document.getElementById('vehicle_s3');
  //   this.every.checked=false;
  // }
}
 else if(e=='wednesday'){

  console.log(".mon");
  this.wed_check=document.getElementById('vehicle_s4');
  if(event.target.checked){
    this.wed_special=4;
  }
  else{
    this.wed_special=0;
    this.every=document.getElementById('vehicle_se');
   
    this.every.checked=false;
    // this.wed=0;
    // this.every=document.getElementById('vehicle1');
    // this.every.checked=false;
  }
}
 else if(e=='thursday'){


  this.thu_check=document.getElementById('vehicle_s5');
  if(event.target.checked){
    this.thu_special=5
  }
  else{
    this.thu_special=0;
    this.every=document.getElementById('vehicle_se');
   
    this.every.checked=false;
    // this.every=document.getElementById('vehicle1');
    // this.every.checked=false;
  }
}
else if(e=='friday'){

  console.log(".mon");
  this.fri_check=document.getElementById('vehicle_s6');
  if(event.target.checked){
    this.fri_special=6;
  }
  else{
    this.fri_special=0;
    this.every=document.getElementById('vehicle_se');
   
    this.every.checked=false;
    // this.every=document.getElementById('vehicle1');
    // this.every.checked=false;
  }
}
 else if(e=='sat'){


 this.sat_check=document.getElementById('vehicle_s7');
 if(event.target.checked){
  this.sat_special=7;
 }
 else{
   this.sat_special=0;
  //  this.every=document.getElementById('vehicle1');
  //  this.every.checked=false;
  this.every=document.getElementById('vehicle_se');
   
    this.every.checked=false;
 }

}
else if(e=='sun'){

  console.log(".mon");
  this.sun_check=document.getElementById('vehicle_s8');
  if(event.target.checked){
           this.sun_special=8;
  }
  else{
    this.sun_special=0;
    this.every=document.getElementById('vehicle_se');
   
    this.every.checked=false;

  }

}
else if(e=='everyday'){
  this.every=document.getElementById('vehicle_se');
  if(event.target.checked){
    console.log("asdsadad")

  this.mon_check=document.getElementById('vehicle_s2');
  this.mon_check.checked=true;
  this.tue_check=document.getElementById('vehicle_s3');
  this.tue_check.checked=true;
  this.wed_check=document.getElementById('vehicle_s4');
  this.wed_check.checked=true;
  this.thu_check=document.getElementById('vehicle_s5');
  this.thu_check.checked=true;
  this.fri_check=document.getElementById('vehicle_s6');
  this.fri_check.checked=true;
  this.sat_check=document.getElementById('vehicle_s7');
  this.sat_check.checked=true;
  this.sun_check=document.getElementById('vehicle_s8');
  this.sun_check.checked=true;
  this.mon_special=2;
  this.tue_special=3;
  this.wed_special=4;
  this.thu_special=5;
  this.fri_special=6;
  this.sat_special=7;
  this.sun_special=8
  }
   else{
    console.log("asdsadadfailed")
    this.mon_check=document.getElementById('vehicle_s2');
    this.mon_check.checked=false;
    this.tue_check=document.getElementById('vehicle_s3');
    this.tue_check.checked=false;
    this.wed_check=document.getElementById('vehicle_s4');
    this.wed_check.checked=false;
    this.thu_check=document.getElementById('vehicle_s5');
    this.thu_check.checked=false;
    this.fri_check=document.getElementById('vehicle_s6');
    this.fri_check.checked=false;
    this.sat_check=document.getElementById('vehicle_s7');
    this.sat_check.checked=false;
    this.sun_check=document.getElementById('vehicle_s8');
    this.sun_check.checked=false;
    this.mon_special=0;
  this.tue_special=0;
  this.wed_special=0;
  this.thu_special=0;
  this.fri_special=0;
  this.sat_special=0;
  this.sun_special=0;
   }

}
console.log(this.mon_special,this.tue_special,this.wed_special,this.thu_special,this.fri_special,this.sat_special,this.sun_special)
}
//for checking day for specialmenu everyday in addition
check_everyday_addition(event:any,e:any){
  if(e=='mon'){
    this.mon_check=document.getElementById('vehicle_sa1');

  if(event.target.checked){
    this.mon_special_add=2;
    console.log(this.mon_special);
  }
  else{
    this.mon_special_add=0;
    this.every=document.getElementById('vehicle_sa');
   
    this.every.checked=false;
  }

  // else{
  //   this.mon_special=0;
  //   this.every=document.getElementById('vehicle_s2');
  //   this.every.checked=false;
  // }

}
else if(e=='tue'){

  this.tue_check=document.getElementById('vehicle_sa2');
  if(event.target.checked){
    this.tue_special_add=3;
  }
  else{
    this.tue_special_add=0;
    this.every=document.getElementById('vehicle_sa');
   
    this.every.checked=false;
  }

  // else{
  //   this.tue=0;
  //   this.every=document.getElementById('vehicle_s3');
  //   this.every.checked=false;
  // }
}
 else if(e=='wed'){

  this.wed_check=document.getElementById('vehicle_sa3');
  if(event.target.checked){
    this.wed_special_add=4;
  }
  else{
    this.wed_special_add=0;
    this.every=document.getElementById('vehicle_sa');
   
    this.every.checked=false;
    // this.wed=0;
    // this.every=document.getElementById('vehicle1');
    // this.every.checked=false;
  }
}
 else if(e=='thu'){


  this.thu_check=document.getElementById('vehicle_sa4');
  if(event.target.checked){
    this.thu_special_add=5
  }
  else{
    this.thu_special_add=0;
    this.every=document.getElementById('vehicle_sa');
   
    this.every.checked=false;
    // this.every=document.getElementById('vehicle1');
    // this.every.checked=false;
  }
}
else if(e=='fri'){

  this.fri_check=document.getElementById('vehicle_sa5');
  if(event.target.checked){
    this.fri_special_add=6;
  }
  else{
    this.fri_special_add=0;
    this.every=document.getElementById('vehicle_sa');
   
    this.every.checked=false;
    // this.every=document.getElementById('vehicle1');
    // this.every.checked=false;
  }
}
 else if(e=='sat'){


 this.sat_check=document.getElementById('vehicle_sa6');
 if(event.target.checked){
  this.sat_special_add=7;
 }
 else{
   this.sat_special_add=0;
  //  this.every=document.getElementById('vehicle1');
  //  this.every.checked=false;
  this.every=document.getElementById('vehicle_sa');
   
    this.every.checked=false;
 }

}
else if(e=='sun'){

  this.sun_check=document.getElementById('vehicle_sa7');
  if(event.target.checked){
           this.sun_special_add=8;
  }
  else{
    this.sun_special_add=0;
    this.every=document.getElementById('vehicle_sa');
   
    this.every.checked=false;

  }

}
else if(e=='everyday'){
  this.every=document.getElementById('vehicle_sa');
  if(event.target.checked){
  this.mon_check=document.getElementById('vehicle_sa1');
  this.mon_check.checked=true;
  this.tue_check=document.getElementById('vehicle_sa2');
  this.tue_check.checked=true;
  this.wed_check=document.getElementById('vehicle_sa3');
  this.wed_check.checked=true;
  this.thu_check=document.getElementById('vehicle_sa4');
  this.thu_check.checked=true;
  this.fri_check=document.getElementById('vehicle_sa5');
  this.fri_check.checked=true;
  this.sat_check=document.getElementById('vehicle_sa6');
  this.sat_check.checked=true;
  this.sun_check=document.getElementById('vehicle_sa7');
  this.sun_check.checked=true;
  this.mon_special_add=2;
  this.tue_special_add=3;
  this.wed_special_add=4;
  this.thu_special_add=5;
  this.fri_special_add=6;
  this.sat_special_add=7;
  this.sun_special_add=8
  }
   else{
    console.log("asdsadadfailed")
    this.mon_check=document.getElementById('vehicle_sa1');
    this.mon_check.checked=false;
    this.tue_check=document.getElementById('vehicle_sa2');
    this.tue_check.checked=false;
    this.wed_check=document.getElementById('vehicle_sa3');
    this.wed_check.checked=false;
    this.thu_check=document.getElementById('vehicle_sa4');
    this.thu_check.checked=false;
    this.fri_check=document.getElementById('vehicle_sa5');
    this.fri_check.checked=false;
    this.sat_check=document.getElementById('vehicle_sa6');
    this.sat_check.checked=false;
    this.sun_check=document.getElementById('vehicle_sa7');
    this.sun_check.checked=false;
    this.mon_special_add=0;
  this.tue_special_add=0;
  this.wed_special_add=0;
  this.thu_special_add=0;
  this.fri_special_add=0;
  this.sat_special_add=0;
  this.sun_special_add=0;
   }

}
}
// For checking checkbox below the specific date in addition

check_addition(event:any,e:any,v:any){

  if(e=='break'){
    if(event.target.checked){
      this._data.global_service(0,'/check_menu_special',`id=${this.resid}&menu_id=${v}`).subscribe(data=>{
        console.log(data);
         this.suc_special=data;
         console.log(this.break_Special);
         if(this.suc_special.suc==2){
          this.break_Special_add=0;  
          this.suc_special=this.suc_special.msg;
          this.myFunction_existspecial();
        }
        else{
          this.break_Special_add=1;
         console.log({msg: this.break_Special});
         this.get_special_time(this.resid, this.break_Special_add, this.lunch_special_add, this.dinner_Special_add, this.brunch_Special_add);
        }
      

      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
    }
    else{
      this.break_Special_add=0;
      this.get_special_time(this.resid, this.break_Special_add, this.lunch_special_add, this.dinner_Special_add, this.brunch_Special_add)

    }

  }
  else if(e=='lunch'){
    if(event.target.checked){
    // this.lunch_special_add=2
    this._data.global_service(0,'/check_menu_special',`id=${this.resid}&menu_id=${v}`).subscribe(data=>{

      console.log(data);
       this.suc_special=data;
      if(this.suc_special.suc==2){
       
        this.lunch_special_add=0;
       console.log({msg: this.suc_special.suc});
        
        this.suc_special=this.suc_special.msg;
        this.myFunction_existspecial();


      }
      else{
        this.lunch_special_add=2;
       console.log({msg: this.break_Special});
       this.get_special_time(this.resid, this.break_Special_add, this.lunch_special_add, this.dinner_Special, this.brunch_Special_add)
      }
    

    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
    }
    else{
    this.lunch_special_add=0
    this.get_special_time(this.resid, this.break_Special_add, this.lunch_special_add, this.dinner_Special, this.brunch_Special_add)

    }
  }
  else if(e=='dinner'){
    if(event.target.checked){
      // this.dinner_Special_add=3;
      this._data.global_service(0,'/check_menu_special',`id=${this.resid}&menu_id=${v}`).subscribe(data=>{

        console.log(data);
         this.suc_special=data;
        if(this.suc_special.suc==2){
         
            this.dinner_Special_add=0;

         console.log({msg: this.suc_special.suc});
          
          this.suc_special=this.suc_special.msg;
          this.myFunction_existspecial();
  
  
        }
        else{
          this.dinner_Special_add=3;
         console.log({msg: this.break_Special});
         this.get_special_time(this.resid, this.break_Special_add, this.lunch_special_add, this.dinner_Special_add, this.brunch_Special_add)
        
  
  
        }
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
    }
    else{
      this.dinner_Special_add=0;
      this.get_special_time(this.resid, this.break_Special_add, this.lunch_special_add, this.dinner_Special, this.brunch_Special_add)

    }
  }
  else if(e=='brunch'){
    if(event.target.checked){
        // this.brunch_Special_add=4;
        this._data.global_service(0,'/check_menu_special',`id=${this.resid}&menu_id=${v}`).subscribe(data=>{

          console.log(data);
           this.suc_special=data;
          if(this.suc_special.suc==2){
           
            this.brunch_Special_add=0;
  
           console.log({msg: this.suc_special.suc});
            
            this.suc_special=this.suc_special.msg;
            this.myFunction_existspecial();
    
    
          }
          else{
           this.brunch_Special_add=4;
           console.log({msg: this.break_Special});
           this.get_special_time(this.resid, this.break_Special_add, this.lunch_special_add, this.dinner_Special_add, this.brunch_Special_add)
          }
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
    }
    else{
      this.brunch_Special_add=0;
      this.get_special_time(this.resid, this.break_Special_add, this.lunch_special_add, this.dinner_Special, this.brunch_Special_add)

   }
   }
}

//For making border on selecting image 
selectedimage(e:any,image:any,id:any,length:any){
  this.previous_id=id;
  this.common_for_special_menu=image;
  console.log(this.common_for_special_menu); 
  for(let i=0;i<length;i++){
    this.image_getelement=document.getElementById('image_'+i);
    this.image_getelement.style.border='';
  }
  this.image_getelement=document.getElementById('image_'+e);
 this.image_getelement.style.border='3px solid #00477e';
}
// Afetr Selecting the image from stock
save_it(e:any){
  console.log(this.common_for_special_menu);
  console.log(this.previous_id);
   if(e=='close'){
    // this.see_photo=true;
    // this.common_for_special_menu='';
    // this.previous_id='';
    if(this.common_for_special_menu!=''){
    this.see_photo=false;
    // this.common_for_special_menu=this.url_reg+'/stock/'+this.common_for_special_menu;
    }
    else{
    this.see_photo=true;

    }
 }
  else{
    this.see_photo=false;
    this.common_for_special_menu=this.url_reg+'/stock/'+this.common_for_special_menu;
  }
  console.log(this.common_for_special_menu);
  
}
// For change the specific date
changedate(e:any,pack:any){
if(pack=='exclusive_specific_date'){
   this.date_time=e; 
  }
  else{
       this.add_date=e
  }
}

selectmenu(event:any){
  this.Modal=document.getElementById('myothercoverfile');
  this.Modal.value=null;
  this.Modal=document.getElementById('myothertopfile');
  this.Modal.value=null;
  this.Modal=document.getElementById('othermenufile');
  this.Modal.value=null;
 this.get_menu_id=document.getElementById('getmenu');
 console.log(this.get_menu_id.options[this.get_menu_id.selectedIndex].text);
 this.get_menu_text=this.get_menu_id.options[this.get_menu_id.selectedIndex].text;
 this.get_menu_id=this.get_menu_id.options[this.get_menu_id.selectedIndex].value;
 console.log(this.get_menu_id);
 
 if(this.get_menu_id!=''){
  this.get_cover_url='';
  this.get_top_url='';
  this.get_cov=true;
  this.get_top=true;
  this.get_menu_url='';
  this.menu_img_show=true;
  this.Modal=document.getElementById('start_other');
  this.Modal.value='';
  this.Modal=document.getElementById('end_other');
  this.Modal.value='';
  this.chk_dt = document.getElementsByName('vehicle[]');
  var len = this.chk_dt.length;
  for(let i = 0; i<len; i++){
 this.chk_dt[i].checked=false;}
  this.check_button=false;
 this._data.global_service(0,'/menu_setup',`id=${this.resid}&menu_id=${this.get_menu_id}`).subscribe(data=>{
   console.log(data);
   this.temp=data;
   if(this.temp.oth_dt.length!=0){
  this.get_cover_url=this.temp.oth_dt[0].cover_page_url;
  this.get_top_url=this.temp.oth_dt[0].top_img_url;
    this.get_top_img=this.img_showing+'/'+this.temp.oth_dt[0].top_image_img;
    this.get_img_top=this.get_top_img;
    this.get_top=this.temp.oth_dt[0].top_image_img ? false:true;
    this.get_cover_img=this.img_showing+'/'+this.temp.oth_dt[0].cover_page_img;
    this.get_img_cover=this.get_cover_img;
    this.get_cov=this.temp.oth_dt[0].cover_page_img ? false:true;
}
  else{
    this.get_cover_url='';
    this.get_top_url='';
    this.get_top_img='';
    this.get_cover_img='';
  }
 this.get_menu_img.length=0;
 this.img_menu_others.length=0;
  if(this.temp.menu_dt.length!=0)
  {
 for(let i=0;i<this.temp.menu_dt.length;i++){
      if(this.temp.menu_dt[i].menu_img!='' && this.temp.menu_dt[i].menu_img!=null){
        this.menu_img_show=false;
      this.img_menu_others.push({id: this.temp.menu_dt[i].id, img_path: this.img_showing+"/"+this.temp.menu_dt[i].menu_img});
      this.get_menu_img.push(this.temp.menu_dt[i].menu_img);    
    }
    }
    this.get_menu_url=this.temp.menu_dt[0].menu_url;
  }
  else
  this.get_menu_url='';
 }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

 )
 this._data.global_service(0,'/date_time',`id=${this.resid}&menu_id=${this.get_menu_id}`).subscribe(data=>{console.log(data)
  this.temp='';
  this.temp=data;
  this.day_val.length=0;
    this.chk_dt = document.getElementsByName('vehicle[]');
  var len = this.chk_dt.length;
  for(let i = 0; i<len; i++){
 this.chk_dt[i].checked=false;
    }
  for(let i=0;i<this.temp.msg.length;i++){
  this.check_date=document.getElementById('vehicle_other_'+this.temp.msg[i].month_day);
  this.check_date.checked=true;
  }
  this.Modal=document.getElementById('vehicle_other_all');
  this.Modal.checked=this.temp.msg.length=='7'?true:false;
  this.check_date=document.getElementById('end_other');
 this.check_date.value=this.temp.msg[0].end_time;
 this.check_date=document.getElementById('start_other');
 this.check_date.value=this.temp.msg[0].start_time;
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

);  
}
else{
  this.check_button=true;
  this.get_cover_url='';
  this.get_top_url='';
  this.get_cov=true;
  this.get_top=true;
  this.get_menu_url='';
  this.menu_img_show=true;
  this.Modal=document.getElementById('start_other');
  this.Modal.value='';
  this.Modal=document.getElementById('end_other');
  this.Modal.value='';
  this.chk_dt = document.getElementsByName('vehicle[]');
  var len = this.chk_dt.length;
  for(let i = 0; i<len; i++){
 this.chk_dt[i].checked=false;

    }
    // this.day_val.length=0;
  }
 
}
othertab(event:any,v:any){
 switch (v){
   case 'cover':
     this.cover_name=event.target.files[0].name;
      this.common_image=event;
      this.crop_width=1800;
      this.crop_height=2560;
    console.log("sadasasas");
    this.Modal=document.getElementById('hid');
    this.Modal.click();
    this.common_value="other_cover";
     break;
     case 'top':
     this.top_name=event.target.files[0].name;
     this.common_image=event;
     this.crop_width=200;
     this.crop_height=130;
   console.log("sadasasas");
   this.Modal=document.getElementById('hid');
   this.Modal.click();
   this.common_value="other_top";
     break;
     case 'menu':
      if (event.target.files.length > 0) {
        this.get_menu_img= event.target.files;
        this.menu_img_show=false;
          for (let i = 0; i < event.target.files.length; i++) {

             this.img_menu_others.push({id:'',img_path:URL.createObjectURL(this.get_menu_img[i])});
            }
        }
        else{
          this.menu_img_show=true;
        }
     break;
    
 }
}
//Submit the othermenus
sendothersmenuvalues(){
  //this.spinner.show();
  const formData = new FormData();
  formData.append('coverurl', this.get_cover_url);
  formData.append('topurl', this.get_top_url);
  formData.append('cov_img', this.get_cover_img);
  formData.append('top_img', this.get_top_img);
   formData.append('hotel_id',this.resid);
   formData.append('menu_id', this.get_menu_id);
   formData.append('break_check',this.menu_check);
   formData.append('restaurant_name',this.res_name);
   formData.append('srv_res_flag',this.res_bar_flag)
   formData.append('srv_res_id',this.serviceId)
   console.log(formData)
 debugger;
  console.log(this.multipleImages)
  this.http.post<any>(this.url_reg+'/testing', formData).subscribe(
    (res) =>{ console.log(res);
 
 }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
 
 );
 
/////////////////////////////////////
 const frmDt_1 = new FormData();
  frmDt_1.append('MenuUrl', this.get_menu_url);
   frmDt_1.append('restaurant_id',this.resid);
   frmDt_1.append('menu_id', this.get_menu_id);
   frmDt_1.append('break_check',this.menu_check);
   frmDt_1.append('restaurant_name',this.res_name);
  for (let img of  this.get_menu_img) {
    frmDt_1.append('menu_img', img);
  }
 this.http.post<any>(this.url_reg+'/menu_file_testing', frmDt_1).subscribe(
 (res) =>{console.log(res);
   //this.spinner.hide();
   this.myFunction_for_special();
 }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
 
 );
 this.day_val.length=0;
this.chk_dt = document.getElementsByName('vehicle[]');
var len = this.chk_dt.length;
for(let i = 0; i<len; i++){
  if(this.chk_dt[i].checked){
    this.day_val.push({dt: this.chk_dt[i].value})
  }else{
    this.day_val.push({dt: 0})
  }
}
 this.storevalue.length=0;
 this.START_time=document.getElementById('start_other');
 this.END_time=document.getElementById('end_other');
 this.storevalue.push({
 "restaurant_id":this.resid,
 "menu_id": this.get_menu_id,
 "break_check":this.break_check,
 "start_time":this.START_time.value,
 "end_time":this.END_time.value,
 "month_day":this.day_val
 });
   console.log(this.storevalue);
   this._data.global_service(1,'/date_time',this.storevalue).subscribe(data=>{
  console.log(data);
 })
}

//getcheck value of othertab
getcheckedmenu(event:any){
if(event.targrt.checked){
  this.menu_check='Y';
}
else{
  this.menu_check='N'
}
}

//check everyday
checkeveryday(event:any){
  if(event.target.checked){
  this.chk_dt = document.getElementsByName('vehicle[]');
  var len = this.chk_dt.length;
  for(let i = 0; i<len; i++){
 this.chk_dt[i].checked=true;  
 this.day_val.push({dt: this.chk_dt[i].value})
}
}
else{
  this.chk_dt = document.getElementsByName('vehicle[]');
  var len = this.chk_dt.length;
  for(let i = 0; i<len; i++){
 this.chk_dt[i].checked=false; 
 this.day_val.push({dt: 0})
}
}
    
}
CheckDay(){
  this.count=0;
  this.chk_dt = document.getElementsByName('vehicle[]');
  var len = this.chk_dt.length;
  console.log(this.chk_dt);
  
 for(let i = 0; i<len; i++){
    if(this.chk_dt[i].checked){
    this.count=this.count+1;
    }else{
     
    }
}
console.log(this.count);
this.Modal=document.getElementById('vehicle_other_all');
this.Modal.checked= this.count==7?true:false;
}


}
