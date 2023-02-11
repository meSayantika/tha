import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { filter, map, pairwise } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.css']
})
export class ViewHotelComponent implements OnInit {
  displayedColumns: string[] = ['id','menu_name', 'section_name','sec_img','delete'];
  displayedColumns1: string[] = ['id','menu_name','item_name','delete'];
  displayedColumns2: string[] = ['id','menu_name','item_name','item_price','delete'];
 
  // dataSource = ELEMENT_DATA;
  userData:any;
  dataSource= new MatTableDataSource();
  dataSource1= new MatTableDataSource();
  dataSource2= new MatTableDataSource();


  @ViewChild('MatPaginator1',{static:true}) MatPaginator1!: MatPaginator;
  @ViewChild('datasort1',{static:true}) datasort1!: MatSort;

  @ViewChild('MatPaginator2',{static:true}) MatPaginator2!: MatPaginator;
  @ViewChild('datasort2',{static:true}) datasort2!: MatSort;


  @ViewChild('MatPaginator3',{static:true}) MatPaginator3!: MatPaginator;
  @ViewChild('datasort3',{static:true}) datasort3!: MatSort;
  hide_sp_content=true;
  show_zoom=true;
  file_qr:any;
  disable_sp=false;
  check_sp=true;
  file_qr_name:any;
  htmlContent='';
  disablediv:any;
  copyurl=true;
  copybitlyurl=true;
  config1: AngularEditorConfig = {
    editable: false,
    spellcheck: true,
    showToolbar:false,
  
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['link',
      'unlink',
      'insertImage',
      'insertVideo']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  bit_ly:any;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['link',
      'unlink',
      'insertImage',
      'insertVideo']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
    html:any;
    dynamic:any;
    vcard:any;
    // bitlydata:any;
    // bitlyData:any;
    laguna_fun:any;
    dynamic_name:any;
    vcard_name:any;
    laguna_fun_name:any;
    storevalue: any=[];
    specialData:any;
    crop_width:any;
    crop_height:any;
    menufordesc: any;
    back: any;
    show_special_date=true;
    concatdatalength1=0
    top_file:any;
    idforcreatesection:any;
    value_font: boolean=false;
     value_background=true;
    value_Headertitle= true;
    menu_place: any;
    fileUrl: any;
    logo_file1: any;
    img_cover: any;
    img_name:any;
    concatheaderlength=0;
    concatnoticelength=0;
    el: any;
    everyweekadi:any;
    spdesc_text_readonly='';
    sectionname:any;
    show_section=false;
    show_logo=true;
   show_tab='tab1'
   pos_id:any;
   menuid_special_breakfast=0;
   menuid_special_lunch=0;
   menuid_special_dinner=0;
   menuid_special_brunch=0
   pos:any;
   image_getelement:any;
   veh_mon=0;
   veh_tue=0;
   veh_wed=0;
   spdescData:any;
   veh_thur=0;
   veh_fri=0;
   veh_sat=0;
   veh_sun=0;
   veh_all=0;
   hidesection=true;
   reloadval=false;
   get_section_for_item:any=[];
   tab_el:any;
   cropround=false;
   logo_img:any;
   z1:any
   createsecval='';
   day_array:any=[];
   idata:any;
   special_month_day:any;
   logoname:any;
   topname:any;
   covername:any;
   section:any;
   i_data:any;
   break_cov:any;
   sectionimage:any;
   break_top:any;
   mncdata:any;
   lunch_cov:any;
   lunch_top:any;
   brunch_cov:any;
   brunch_top:any;
   dinner_cov:any;
   ide='';
   ipr='';
   ino='';
   exclusive_addition:any;
   specialcontent:any;
   dinner_top:any;
   menuData:any;
   starttime:any;
   endtime:any;
   itemData:any;
   mid2:any;
   sectionitem:any;
   secData:any;
   bkmenuid:any;
   datetimeData:any;
   daycheck:any;
   k:any;
   hs:any;
   radid:any;
   mid1:any;
   z:any;
   half_logopath:any;
   spData:any;
   concatdatalength2=0;
   sec_post_data:any;
   m='';
   menuData1:any=[];
   old_menu:any
   new_menu:any;
   menudata2:any=[];
   itemdesc:any;
   m_id:any;
   st_img:any=[];
   menuid='';
   cover_file:any;
   aboutusData1:any;
   aboutusData:any;
   about_text_readonly:any;
   x:any;
   get_section_for_item1:any
   menu_item:any;
   sid:any;
   week:any;
   secval1:any;
   sp_menuid:any;
   openstockimages:any
   sp_posid:any;
   sp_back:any;
   sp_font:any;
   sp_head:any;
   sp_notice:any;
   r_id:any;
   menuid_lunch_addition=0;
   menuid_breakfast_addition=0;
   menuid_dinner_addition=0;
   menuid_brunch_addition=0
   pick:any;
   ht:any;
   delsecData:any;
   delitemData:any;
   delpriceData:any;
   secid:any;
   imgcat:any;
   dashboardData:any;
   rest_nm:any;
   rest_contact:any;
   rest_phone:any;
   rest_em:any;
   rest_web:any;
   rest_add:any;
   logo_file:any;
   rest_monthly:any;
   rest_setup:any;
   sec_value='';
   eid2:any;
   pp:any;
   hh:any;
   q:any;
   sid2:any;
   apiurlset=environment.api_url+'/';
   i_value='';
   submit_show2=false;
   descriptionData:any;
   submit_show=false;
   iid:any;
   setTimedata:any;
   menu_url_data:any;
   menulength:any;
   ab_us_text:any;
   url_nm:any;
   rad:any;
   filesection:any;
   item_i:any;
   veh1:any;
   mon:any=0;
   tue:any=0;
   wed:any=0;
   thur:any=0;
   fri:any=0;
   sat:any=0;
   sun:any=0;
   excl:any;
   inad:any;
   veh2:any;
   veh3:any;
   veh4:any;
   veh5:any;
   logopath:any;
   veh6:any;
   veh7:any;
   veh8:any;
   dayflag:any;
   regularmenuflag:any
   show_button3=false;
   exclusive_time:any=[]
   url1=environment.api_url;
   url2='';
   sendpathdata="assets/the_cliff_logo.png";
   getimagepath=environment.api_url+'/';
   getimageDynamic=environment.api_url+'/';
   getimageVCard=environment.api_url+'/';
   getimageLagunaFun=environment.api_url+'/';
   imgcheck:any;
   exckusive_time:any=[];
   idfordesc:any;
   common_for_special_menu:any;
   mail_data:any;
   imgel:any;
   show_spinner=false;
   concatdata='';
   concatdatalength=0;
   menuchoiceData:any;
   logospin=true;
   coverspin=true;
   topspin=true;
   secspin=true;
   excleveryweek:any;
   exclspecific:any;
   //Image Cropper
   img_break_section:any;
   scale = 1;
   previous_id:any;
   see_photo:any;
   transform: ImageTransform = {};
   showCropper = false;
   hide=false;
   valu = true;
   start_time:any;
   end_time:any;
   Zoomout = true;
   spstockImg:any;
   ZoomIn = true;
   modal = true;
   croppedImage:any ;
   Modal:any;
   additem_menu_el:any;
   additem_section_el:any;
   additem_item_el:any;
   preview_for_section:any;
   desc_menu_el:any;
   desc_section_el:any;
   desc_item_el:any;
   desc_el:any;
   stockImg1:any;
   desc_price:any;
   desc_notes:any;
   specific_excl:any;
   menu_frm_dt:any;
   menu_to_dt:any;
    modal_close_oncrop:any;
    bx:any;
    bx2:any;
  fileDiv:any;
    kk:any
    create_a:any;
    download_section_zip:any;
    download_logo_top_cover_zip:any;
    category_name:any=[];
    del_section_var:any;
    del_item_var:any;
    del_price_var:any
    menu_radio:any;
    qrData:any;
    dynURLDiv:any;
    createURlDiv:any;
    urlDiv:any;
    add_note='#FFFFFF'
    add_note_back='#000000'
    bitlyData:any;
    getVenues:any;
    venueid:any;
    getMenus:any;
    compose_url:any;
    crop_min_height:any;
    crop_min_width:any;
    aspect_ratio:any;
    maintain_asp_rat:any;
    contain_within_aspect_ratio=true;
    width:any;
    height:any;
    show_alert=true
    resize_to_width:any;
    resize_to_height:any;
    isSave=true;
    category=''
    newMid:any
    menubodCol = '#ffffff'
  menutextCol = '#ffffff';
  greettextCol = '#ffffff'
  get_configData:any
  editorText = '';
  configData:any
  constructor(private dialog:MatDialog, private sanitizer: DomSanitizer,private activatedRoute:ActivatedRoute, private msg:MessageService, private dataServe:DataService) { }

  ngOnInit(): void {
    // this.editor=new Editor(
     
    // );  
    this.getimageDynamic="";
    this.getimageVCard="";
    this.getimageLagunaFun="";
    this.url1=environment.api_url;
    this.compose_url=''
    this.menuData1.length=0;
    this.r_id=this.activatedRoute.snapshot.params['id'];
    this.r_id=atob(this.r_id);
    console.log(this.r_id);

  this.dataServe.global_service(0,'/category_list','').subscribe(data=>{
    console.log(data);
    this.category_name=data;
    this.category_name=this.category_name.msg;
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
// get image for special menu
    this.dataServe.global_service(0,'/stock_img','').subscribe(data=>{
      console.log(data);
      this.st_img=data;

      this.st_img=this.st_img.msg;
      console.log(this.st_img);

    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

    )
//     this.dataServe.global_service(0,'/res_menu',`id=${this.r_id}`).subscribe(data=>{console.log(data)

//     this.menuchoiceData=data;
   
//     this.menuchoiceData=this.menuchoiceData.msg;
//     console.log(this.menuchoiceData)
//     console.log(this.mncdata)
//     this.get_menu(this.mncdata);
//     }
// ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
//     )
    // fetch qr code for dynamic menus, vcard and dynamic
//     this.dataServe.global_service(0,'/get_url',`id=${this.r_id}&srv_id=${this.mncdata}`).subscribe(data=>{console.log(data)
//       this.menu_url_data=data;
//       this.menu_url_data=this.menu_url_data.msg;
//       console.log(this.menu_url_data[0].image);
//       this.getimagepath=this.menu_url_data[0].image? this.getimagepath+this.menu_url_data[0].image : this.getimagepath;
//       this.getimageDynamic=this.menu_url_data[0].dynamic_img? this.getimageDynamic+this.menu_url_data[0].dynamic_img : this.getimageDynamic;
//       this.getimageVCard=this.menu_url_data[0].v_card_img? this.getimageVCard+this.menu_url_data[0].v_card_img : this.getimageVCard;
//       this.getimageLagunaFun=this.menu_url_data[0].fun_directory_img? this.getimageLagunaFun+this.menu_url_data[0].fun_directory_img : this.getimageLagunaFun;
//       console.log(this.getimagepath)
//       this.imgcheck=this.menu_url_data[0].image ? true : false;
//       console.log("imgcheck="+this.imgcheck);
//       this.menulength=this.menu_url_data.length;
//       console.log("length="+this.menulength)
//     }
// ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
//     )
    this.dataServe.global_service(0,'/get_special_data',`id=${this.r_id}&menu_id=5`).subscribe(data=>{console.log(data)
    
    this.spdescData=data;
    this.spdescData=this.spdescData.msg
    this.spdesc_text_readonly=this.spdescData[0]?.menu_desc;
    this.stockImg1=this.spdescData[0]?.img_path;
    this.spstockImg=environment.api_url+'/stock/'+ this.spdescData[0]?.img_path;
    this.imgcat=this.spdescData[0]?.img_catg
    console.log(this.spstockImg);
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
    // fetch data for a specific restaurant
//     this.dataServe.global_service(0,'/res_details',`id=${this.r_id}`).subscribe(data=>{console.log(data)
//     this.dashboardData=data;
//     // this.show_spinner=true;
//     this.dashboardData=this.dashboardData.msg;
//     this.rest_nm=this.dashboardData[0].restaurant_name;
//     this.url_nm=this.rest_nm.replace(/ /g,'_');
//     this.url1=this.url1+this.url_nm+'/'+btoa(this.r_id);
//     this.url2=this.dashboardData[0].bitly_url;
//     console.log(this.url1+" "+this.url2)
//     this.rest_contact=this.dashboardData[0].contact_name;
//     this.rest_phone=this.dashboardData[0].phone_no;
//     this.rest_em=this.dashboardData[0].email;
//     this.rest_web=this.dashboardData[0].website;
//     this.rest_monthly=this.dashboardData[0].monthly_fee;
//     this.rest_setup=this.dashboardData[0].setup_fee;
//     this.dashboardData[0].addr_line2=this.dashboardData[0].addr_line2?this.dashboardData[0].addr_line2:''

//     this.rest_add=this.dashboardData[0].addr_line1+" "+this.dashboardData[0].addr_line2+" "+this.dashboardData[0].zip+" "+this.dashboardData[0].city+", "+this.dashboardData[0].country
//     }
// ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
//     )
    // fetch bitly url
//     this.dataServe.global_service(0,'/get_url',`id=${this.r_id}&srv_id=${this.mncdata}`).subscribe(data=>{console.log(data)

//       this.bit_ly=data;
//       this.url2=this.bit_ly[0]?.bitly_url;
    
//     }
// ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
//     )
    // fetch data for special notice
//     this.dataServe.global_service(0,'/notice',`hotel_id=${this.r_id}&id={this.mnc}`).subscribe(data=>{console.log(data)
//     this.specialData=data;
//     this.specialData=this.specialData.msg;
//     this.sp_menuid=this.specialData[0].menu_id;
//     this.sp_posid=this.specialData[0].position_id;
//     this.sp_back=this.specialData[0].back_color;
//     this.sp_font=this.specialData[0].font_color;
//     this.sp_head=this.specialData[0].header_title;
//     this.concatheaderlength=this.sp_head?this.sp_head.length:0;
//     this.sp_notice=this.specialData[0].notice_content;
//     this.concatnoticelength=this.sp_notice?this.sp_notice.length:0;
//     }
// ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
//     ) // to be checked
    // fetch data for about us
//     this.dataServe.global_service(0,'/aboutus',`id=${this.r_id}`).subscribe(data=>{console.log(data)
//     this.aboutusData=data;
//       this.about_text_readonly=this.aboutusData.msg[0].about_us;
//     }
// ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
//     ) to be checked
    
  // fetch section data
    this.dataServe.global_service(0,'/section_image',`id=${this.r_id}&menu_id=${this.mncdata}`).subscribe(data=>{console.log(data)
      this.secData=data;
      this.secData=this.secData.msg;
      console.log(this.mncdata)
      this.get_sec_img(this.mncdata);
      
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )

    console.log("mnc"+this.mncdata)
//     this.dataServe.global_service(0,'/menu_setup',`id=${this.r_id}&menu_id=${this.mncdata}`).subscribe(data=>{console.log(data)
//     this.menudata2=data;
//     this.old_menu=this.menudata2.menu_dt[0]?.menu_id
    
//     for(let i=1;i<this.menudata2.menu_dt.length;i++){
      
//         if(this.old_menu!=this.menudata2.menu_dt[i].menu_id){
//           this.menuData1[i]=this.menudata2.menu_dt[i];
//            this.old_menu=this.menudata2.menu_dt[i].menu_id
//         }
        
//     }
//     // this.menuData1=this.menuData1.menu_dt;

//     }
// ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
//     ) //to be checked later
    // this.tab_el=document.getElementById('defaultOpen');
    // this.tab_el.style.background='#3F51B5'
    // this.tab_el.style.color="white";
 
  // })
  this.getConfigMenu()
  }
  getCat(){
    
      this.dataServe.global_service(0,'/cust_menu_list',`hotel_id=${this.r_id}`).subscribe((data:any)=>{
        console.log(data,this.category);
        this.getVenues=data;
        if(this.category=='R'){
          this.getVenues=this.getVenues.msg.restaurant
        }
        else{
          this.getVenues=this.getVenues.msg.service

        }
        // this.mncdata=this.getVenues.msg[0].id; //to be changed
    
        // this.putdata(this.getVenues.msg);
      }
    ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
    

}
  open_venue(id:any){
    // this.getMenus.length=0;

    this.getimageDynamic="";
    this.getimageVCard="";
    this.getimageLagunaFun="";
    this.mncdata=id
    // this.url1=environment.Redirect_url+this.url_nm+'/'+btoa(this.r_id);
    this.url1=environment.routeUrl+'user/user_menu'+'/'+encodeURIComponent(btoa(this.r_id))+'/'+encodeURIComponent(btoa(this.mncdata))
    // this.compose_url=''
    this.show_logo=id?false:true
    this.get_section_for_item.length=0;
    this.menuData1.length=0;
     this.mon=0;
         this.tue=0;
         this.wed=0;
         this.thur=0;
         this.fri=0;
         this.sat=0;
         this.sun=0;
         this.starttime='';
      this.endtime='';
      this.veh1=document.getElementById('vehicle1')
      this.veh2=document.getElementById('vehicle2')
      this.veh3=document.getElementById('vehicle3')
      this.veh4=document.getElementById('vehicle4')
      this.veh5=document.getElementById('vehicle5')
      this.veh6=document.getElementById('vehicle6')
      this.veh7=document.getElementById('vehicle7')
      this.veh8=document.getElementById('vehicle8')
if(this.veh1){
      this.veh1.checked=false;
      this.veh2.checked=false;
      this.veh3.checked=false;
      this.veh4.checked=false;
      this.veh5.checked=false;
      this.veh6.checked=false;
      this.veh7.checked=false;
      this.veh8.checked=false;
}
      this.hidesection=true;
      this.get_section_for_item.length=0;
      this.putdata(this.get_section_for_item);
      // alert(id);
    // this.venueid='';
    // alert("hello")
    // this.venueid=id;
    // this.dataServe.get_venue_menu(this.decoded_rest_id, null, id).subscribe(data=>{
    //   console.log(data);
    //   this.getMenus=data;
    //   this.getMenus=this.getMenus.msg
     
  
    // })
    this.venueid=id;
    // this.m_id=v;
    // this.radid=v;
  this.getMenus=this.getVenues.filter((x:any)=>x.id==id)[0]
   
    console.log(this.venueid)
    
    if(this.venueid!=''){
      // var tb_id = id > 0 ? id : '';
      var v_id = id > 0 ? id : 0;
      // return this.http.get(url_set.api_url+'/venue_menu?res_id=' + res_id + '&id=' + tb_id + '&venu_id=' + v_id)
//     this.dataServe.global_service(0, '/venue_menu', `res_id=${this.r_id}&venu_id=${v_id}`).subscribe(data=>{
//       console.log(data);
//       this.getMenus=data;
//       this.getMenus=this.getMenus.msg
     
  
//     }
// ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
//     )
    var venue = this.venueid > 0 ? '&venue_id='+this.venueid : '';
//     this.dataServe.global_service(0,'/res_details',`id=${this.r_id}`).subscribe(data=>{console.log(data)
//     this.dashboardData=data;
//     // this.show_spinner=true;
//     this.dashboardData=this.dashboardData.msg;
//     this.rest_nm=this.dashboardData[0].restaurant_name;
//     this.url_nm=this.rest_nm.replace(/ /g,'_');
//     this.url1=this.url1+this.url_nm+'/'+btoa(this.r_id);
//     this.url2=this.dashboardData[0].bitly_url;
//     console.log(this.url1+" "+this.url2)
//     this.rest_contact=this.dashboardData[0].contact_name;
//     this.rest_phone=this.dashboardData[0].phone_no;
//     this.rest_em=this.dashboardData[0].email;
//     this.rest_web=this.dashboardData[0].website;
//     this.rest_monthly=this.dashboardData[0].monthly_fee;
//     this.rest_setup=this.dashboardData[0].setup_fee;
//     this.dashboardData[0].addr_line2=this.dashboardData[0].addr_line2?this.dashboardData[0].addr_line2:''

//     this.rest_add=this.dashboardData[0].addr_line1+" "+this.dashboardData[0].addr_line2+" "+this.dashboardData[0].zip+" "+this.dashboardData[0].city+", "+this.dashboardData[0].country
//     }
// ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
//     )
    // this.dataServe.global_service(0,'/menu_setup',`id=${this.r_id}${venue}`).subscribe((data)=>{console.log(data)
    this.dataServe.global_service(0,'/get_menu_service_dt',`hotel_id=${this.r_id}&flag=${this.category}&srv_res_id=${this.mncdata}`).subscribe((data)=>{console.log(data)

      this.menuData1=data;
      this.menuData1=this.menuData1.menu_dt
    
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
    // var venue = id > 0 ? '&venue_id='+id : '';
  // return this.http.get(url_set.api_url+'/menu_setup?id='+res_id + '&menu_id=' + menu_id + venue)
    this.dataServe.global_service(0,'/get_menu_service_dt',`hotel_id=${this.r_id}&flag=${this.category}&srv_res_id=${this.mncdata}`).subscribe((data)=>{console.log(data)

      this.menuData=data;
      console.log(this.menuData)
      this.logo_img=this.menuData.logo_dt.length>0?this.menuData.logo_dt[0].logo_url:null;
      this.logopath=this.menuData.logo_dt.length>0?this.menuData.logo_dt[0].logo_path:null;
      this.half_logopath=this.logopath;
      this.logopath=this.menuData.logo_dt.length>0?environment.api_url+'/'+this.logopath:null;
     
     //  const data = 'some text';
     this.imgel=document.createElement('img');
     this.imgel.src=this.logopath
       const blob = new Blob([this.imgel], { type: 'application/octet-stream' });
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
      
      
      console.log(this.logopath)
     this.menuData=this.menuData.oth_dt;
     }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
     
     )
//      this.dataServe.global_service(0,'/get_url',`id=${this.r_id}&srv_id=${this.mncdata}`).subscribe(data=>{console.log(data)
//       this.menu_url_data=data;
//       this.menu_url_data=this.menu_url_data.msg;
//       console.log(this.menu_url_data[0].image);
//       this.getimagepath=this.menu_url_data[0].image? this.getimagepath+this.menu_url_data[0].image : this.getimagepath;
//       this.getimageDynamic=this.menu_url_data[0].dynamic_img? this.getimageDynamic+this.menu_url_data[0].dynamic_img : this.getimageDynamic;
//       this.getimageVCard=this.menu_url_data[0].v_card_img? this.getimageVCard+this.menu_url_data[0].v_card_img : this.getimageVCard;
//       this.getimageLagunaFun=this.menu_url_data[0].fun_directory_img? this.getimageLagunaFun+this.menu_url_data[0].fun_directory_img : this.getimageLagunaFun;
//       console.log(this.getimagepath)
//       this.imgcheck=this.menu_url_data[0].image ? true : false;
//       console.log("imgcheck="+this.imgcheck);
//       this.menulength=this.menu_url_data.length;
//       console.log("length="+this.menulength)
//     }
// ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
//     )
     this.dataServe.global_service(0,'/get_url',`id=${this.r_id}&srv_id=${this.mncdata}`).subscribe(data=>{console.log(data)

      this.bit_ly=data;
      this.url2=this.bit_ly[0]?.bitly_url;
    
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
     this.venueid=id;
     var v_id = id > 0 ? id : 0;
//      this.dataServe.global_service(0,'/venue_menu',`res_id=${this.r_id}&venu_id=${v_id}`).subscribe(data=>{
//         console.log(data);
//         this.getMenus=data;
//         this.getMenus=this.getMenus.msg
       
    
//       }
// ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
//       )
      console.log(this.venueid)
      console.log(btoa(this.r_id+'/'+this.venueid))
     this.getimageDynamic=environment.api_url+'/';
this.getimageVCard=environment.api_url+'/';
this.getimageLagunaFun=environment.api_url+'/';
     this.compose_url=this.url1.replace(this.url1.split('/')[6],btoa(this.r_id+'/'+this.venueid))
     console.log(this.compose_url)
     this.dataServe.global_service(0,'/get_url',`id=${this.r_id}&srv_id=${this.mncdata}`).subscribe(data=>{console.log(data)

      this.menu_url_data=data;
      this.menu_url_data=this.menu_url_data.msg;
      // console.log(this.menu_url_data[0].image);
      this.getimageDynamic=this.menu_url_data[0]?.dynamic_img? this.getimageDynamic+this.menu_url_data[0]?.dynamic_img : this.getimageDynamic;
      this.getimageVCard=this.menu_url_data[0]?.v_card_img? this.getimageVCard+this.menu_url_data[0]?.v_card_img : this.getimageVCard;
      this.getimageLagunaFun=this.menu_url_data[0]?.fun_directory_img? this.getimageLagunaFun+this.menu_url_data[0]?.fun_directory_img : this.getimageLagunaFun;
      console.log(this.getimagepath+" "+this.getimageDynamic+" "+this.getimageVCard+" "+this.getimageLagunaFun)
      this.imgcheck=this.menu_url_data[0]?.image ? true : false;
      console.log("imgcheck="+this.imgcheck);
      this.menulength=this.menu_url_data?.length;
      console.log("length="+this.menulength)
      this.file_qr='';
      this.file_qr_name='';
      // this.fileDiv=document.getElementById('myFile');
      // this.fileDiv.value=null
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
    }
  }
  // opening window for previewing menu
  open_popup_window(){
//     this.dataServe.global_service(0,'/date_time',`id=${this.r_id}&menu_id=${i_menu}`).subscribe(data=>{
//       console.log(data)
//       this.datetimeData=data;
//       this.starttime=this.datetimeData.msg[0].start_time;
//       this.endtime=this.datetimeData.msg[0].end_time;
//     window.open(environment.Redirect_url+this.rest_nm+'/'+btoa(this.r_id+'/'+this.starttime+'/'+this.endtime+'/'+i_menu),'popup','width=400,height=500')

//     }
// ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
//     )
    // this.dataServe.get_menu_by_time()
    console.log(this.mncdata,this.r_id)
    window.open(environment.routeUrl+'user/user_menu'+'/'+encodeURIComponent(btoa(this.r_id))+'/'+encodeURIComponent(btoa(this.mncdata)),'popup','width=400,height=500')
    // window.open('https://custom.shoplocal-lagunabeach.com/#/'+'user/user_menu'+'/'+encodeURIComponent(btoa(this.r_id))+'/'+encodeURIComponent(btoa(this.mncdata)),'popup','width=400,height=500')
    // window.open('http://localhost:4200/#/main/admin/adminlogin','popup','width=400,height=500')
    
  }
  // function for generating qrcode
  gen_code(){
    //this.spinner.show();
    this.getimagepath=environment.api_url+'/';
    var dt={url: this.url1, res_id: this.r_id, img: this.half_logopath}
    this.dataServe.global_service(1,'/generate_qr',dt).subscribe(data=>{console.log(data)
      this.menu_url_data=data;
      console.log({dt: this.menu_url_data});
      
      this.menu_url_data=this.menu_url_data.msg;
      console.log(this.menu_url_data);
      // this.getimagepath=this.getimagepath+this.menu_url_data[0].image
      // this.imgcheck=this.menu_url_data[0].image ? true : false;

      this.menulength=this.menu_url_data.length;
      console.log("length="+this.menulength)
      this.dataServe.global_service(0,'/get_url',`id=${this.r_id}&venue_id=${this.venueid}`).subscribe(data1=>{console.log(data1)
        this.menu_url_data=data1;
        this.menu_url_data=this.menu_url_data.msg;
        this.getimagepath=this.getimagepath+this.menu_url_data[0].image
        this.imgcheck=this.menu_url_data[0].image ? true : false;
        console.log("imgcheck="+this.imgcheck);
        this.menulength=this.menu_url_data.length;
        console.log("length="+this.menulength)
        ////this.spinner.hide();
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  }
  // fetching data for section
  fetchdata(id:any){
    
    this.dataServe.global_service(0,'/section',`hotel_id=${this.r_id}&id=${this.mncdata}&menu_id=${id}`).subscribe(data=>{console.log(data)
      this.get_section_for_item=data;
      this.get_section_for_item=this.get_section_for_item.msg;
      this.putdata(this.get_section_for_item);
      })
  }
  putdata(v:any){
    this.dataSource= new MatTableDataSource(v);
    this.dataSource.paginator=this.MatPaginator1;
    this.dataSource.sort=this.datasort1;
  }
  putdata2(v:any){
    this.dataSource2= new MatTableDataSource(v);
    this.dataSource2.paginator=this.MatPaginator3;
     this.dataSource2.sort=this.datasort2;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.MatPaginator1;
    this.dataSource.sort = this.datasort1;

    this.dataSource1.paginator = this.MatPaginator2
    this.dataSource1.sort = this.datasort2;

    this.dataSource2.paginator = this.MatPaginator3;
    this.dataSource2.sort = this.datasort3;
  }
  // post details for about us
  send_about_us(v:any){
    if(v!=''){
      var dt={
        hotel_id:this.r_id,
        aboutus:v,
        restaurant_id:this.mncdata
      }
   this.dataServe.global_service(1,'/aboutus',dt).subscribe(data=>{console.log(data)
    this.aboutusData1=data;
    if(this.aboutusData1.suc==1)
    {this.m="Update Successful";
    this.ab_us_text=document.getElementById('ab_us');
    this.ab_us_text.value='';
    this.concatdatalength2=0;

    this.msg.successMsg('SU')
    this.dataServe.global_service(0,'/aboutus',`id=${this.r_id}`).subscribe(data=>{console.log(data)
      this.aboutusData=data;
        this.about_text_readonly=this.aboutusData.msg[0].about_us;
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}


  )


  }
    else{
      this.msg.errorMsg('EU')
    }
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

  )
}
else{
  this.msg.globalError('Empty field not allowed!')
}
  }
  // fetching data when the row is clicked for editing
  get_sec_id(mid:any,v:any,v1:any,v2:any,id:any,ip:any,inote:any,not_col:any,backcol:any){
    // alert(not_col)
    this.show_button3=true;
    this.secid=v1;
    console.log(mid);
    this.item_i=v2
    this.ide=id;
    this.concatdatalength=this.ide.length
    this.add_note=not_col?not_col:'#FFFFFF'
    this.add_note_back=backcol?backcol:'#000000'
    this.ipr=ip;
    this.ino=inote;
    this.concatdatalength1=this.ino.length
    this.mid1=mid;
    this.idfordesc=v;
    console.log(this.ide+" "+this.ino+" "+this.ipr)
    // this.z=document.getElementById('b'+mid)
    // this.z.checked=true;
    console.log(this.z)
    this.submit_show=true;
    this.sec_value=v1;
    this.dataServe.global_service(0,'/section',`hotel_id=${this.r_id}&id=${this.mncdata}&menu_id=${id}`).subscribe(data=>{console.log(data)
      this.get_section_for_item1=data;
      this.get_section_for_item1=this.get_section_for_item1.msg;
      
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
      this.dataServe.global_service(0,'/items',`hotel_id=${this.r_id}&flag=${this.category}&srv_res_id=${this.mncdata}&menu_id=${this.menufordesc}&sec_id=${this.sid}`).subscribe(data=>{

        console.log(data)
        this.idata=data;
        this.idata=this.idata.msg;
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )    
    console.log("menu_id="+mid+" section_id="+this.secid+" res_id="+this.r_id+" item_id="+this.item_i+" id="+this.idfordesc)
    // alert(v)
  window.scrollTo(0, 0)

  }
  // update section data
  update_section(v:any){
    //this.spinner.show();
    this.sec_value=v;
    // this.createsecval=''
    // for(let i=0;i<this.menuchoiceData.length-1;i++)
    // {
    //   this.q=document.getElementById('b'+(i+1))
    //   ;
    //   if(this.q.checked==true)
    //   this.m_id=this.q.value
    // }
    this.menu_radio = document.getElementsByName('bkmenu');
              
    for(let i = 0; i < this.menu_radio.length; i++) {
        if(this.menu_radio[i].checked)
        this.m_id = this.menu_radio[i].value;
        // document.getElementById("result").innerHTML
        //         = "Gender: "+ele[i].value;
    }
    // console.log("menu_id="+this.mid1+" section_id="+this.secid+" section_name="+this.sec_value+" res_id="+this.r_id)
    console.log(this.m_id+" "+v);
    if(v!=''&&this.m_id!=''&&this.m_id!=undefined&&this.m_id!=null){
    var dt={
      "restaurant_id" : this.r_id,
    "menu_id":this.m_id,
    "sec_name":this.sec_value,
    "id":this.idforcreatesection,
    "venue_id":this.venueid
    }
    const formdata=new FormData();
  
  formdata.append('restaurant_id',dt.restaurant_id);
  formdata.append('menu_id',dt.menu_id);
  formdata.append('sec_name',dt.sec_name);
  formdata.append('sec_img',this.img_cover,);
  formdata.append('id',dt.id > 0 ? dt.id :0);
  formdata.append('filename',this.sectionname);
  formdata.append("venue_id",dt.venue_id)
    this.dataServe.global_service(1,'/section',formdata).subscribe(data=>{console.log(data)
    this.sec_post_data=data;
    if(this.sec_post_data.suc==1)
    {
    ////this.spinner.hide();
      this.m="Update Successful";
      // setTimeout(()=>{
      //   location.reload();
      // },3000)
      this.reload_section();
      this.createsecval=''
    this.submit_show=false;

    this.msg.successMsg('SU')
    this.fetchdata(this.m_id);
    setTimeout(()=>{
      // this.show_tab='tab4'
      // this.ngOnInit();
    //  this.openCity('tab4');
     
    },3000)
    this.rad=document.getElementById('b'+this.m_id);
    console.log(this.rad)
    // this.rad.checked=false;
    
    }
    else{
    // this.secspin=true;
    ////this.spinner.hide()
this.msg.errorMsg('EU')
    }
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  }
  else{
    this.msg.globalError('Empty field not allowed!')
  }
  }
  // update item data
  update_add_item(m:any,e:any,s:any,k:any){
    this.mid2=m;
    this.eid2=e;
    this.sid2=s;
    this.iid=k;
    this.i_value=s
    console.log(this.eid2)
    this.submit_show2=true;
    window.scrollTo(0, 0)

  }
  // assigning radio button data
  store_menu(v:any){
    this.m_id=v;
    // this.show_section=true;
    console.log(this.m_id)
    this.hidesection=false;
    this.fetchdata(this.m_id)
    // if(this.submit_show==false)
    //  {
    //    this.secval1=document.getElementById('secval');
    //    this.secval1.value='';
    //  }
    // alert("store "+v)
    //alert(v);
    // this.fetchdata(v)
  }
  // create section
  create_section(v:any){
    // this.secspin=false
    //this.spinner.show();
    console.log(this.m_id+" "+v);
    if(v!=''&&this.m_id!=''&&this.m_id!=null&&this.m_id!=undefined){
    var dt={
      "restaurant_id" : this.r_id,
    "menu_id":this.m_id,
    "sec_name":v,
    "id":'',
    "venue_id":this.venueid
    }
    const formdata=new FormData();
  
  formdata.append('hotel_id',dt.restaurant_id);
  formdata.append('menu_id',dt.menu_id);
  formdata.append('sec_name',dt.sec_name);
  formdata.append('sec_img',this.img_cover);
  formdata.append('id','0');
  formdata.append('filename',this.img_name);
  formdata.append("venue_id",dt.venue_id)
  formdata.append("srv_res_id",this.mncdata)
  
    this.dataServe.global_service(1,'/section',formdata).subscribe(data=>{console.log(data)
    this.sec_post_data=data;
    if(this.sec_post_data.suc==1)
    {
      this.reload_section();
      this.createsecval=''
      this.m="Update Successful";
    this.msg.successMsg('SU')

    // this.secspin=true;
    ////this.spinner.hide();
    this.fetchdata(this.m_id);
    
    }
    else{
      ////this.spinner.hide()
      this.m="Failed to update"
    // this.secspin=true;

      this.msg.errorMsg('EU')
    }
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  }
  else{
    // this.secspin=true;
    ////this.spinner.hide();
this.msg.globalError('Empty field not allowed!')
  }
  }
  // select section based on menu
  select_section_with_menu(v:any){
    this.menu_item=v;
    this.dataServe.global_service(0,'/section',`hotel_id=${this.r_id}&id=${this.mncdata}&menu_id=${v}`).subscribe(data=>{console.log(data)
    this.get_section_for_item=data;
    this.get_section_for_item=this.get_section_for_item.msg;
    
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  }
  // update the item data
  update_send_item(v1:any,v2:any,v:any){
    // this.mid2=m;
    // this.eid2=e;
    // this.sid2=s;
    // this.i_value=s
    this.submit_show2=false;
    console.log(this.mid2+" "+this.eid2+" "+this.i_value+" "+this.iid)
    if(v1!=''&&v2!=''&&v!=''){
    var dt={
      "hotel_id" : this.r_id,
      "menu_id":v1,
      "sec_id":v2,
      "item_name":v,
      "id":this.iid,
      "venue_id":this.venueid
      // "break_check" : 'Y',
      // "month_day": [{"dt":mon},{"dt":tue},{"dt":wed},{"dt":thur},{"dt":fri},{"dt":sat},{"dt":sun}],
      // "start_time" : st,
      // "end_time" : end
    }
    this.dataServe.global_service(1,'/items',dt).subscribe(data=>{console.log(data)
    this.itemData=data;
    if(this.itemData.suc==1){
      this.reset_add_item(); 
      this.mid2='';
      this.eid2='';
      this.i_value='';
      this.submit_show2=false;
      this.m="Update Successful";
      this.msg.successMsg('SU')
      this.fetchdata1(v1,v2);
      setTimeout(()=>{
        this.ngOnInit();
        this.openCity('tab5')
      
      },3000)
      
      // location.reload();
      // this.pick=document.getElementById('pickup_place');
      // this.pick.value='';
      // this.ht=document.getElementById('headtitle');
      // this.ht.value='';
    }
    else{
     this.msg.errorMsg('EU')
    }
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )}
    else{
      this.msg.globalError('Empty field not allowed!')
    }
  }
  // get section and items
  get_section_item(v:any){
   this.sectionitem=v;
   console.log(this.r_id+" "+this.menufordesc+" "+this.sid);
   this.fetchdata1(this.menu_item,this.sectionitem)
  
  }
// fetch data for item datatable
  fetchdata1(id:any,secid:any){
    this.dataServe.global_service(0,'/items',`hotel_id=${this.r_id}&menu_id=${id}&sec_id=${secid}`).subscribe(data=>{console.log(data)
      this.idata=data;
      this.idata=this.idata.msg;
      this.putdata1(this.idata);
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      
      )
  }
  // submit item data
  send_item(v:any){
    console.log(this.menu_item+" "+this.sectionitem+" "+v)
    if(this.menu_item!=''&&this.sectionitem!=''&&v!=''){
    var dt={
      "hotel_id" : this.r_id,
      "menu_id":this.menu_item,
      "sec_id":this.sectionitem,
      "item_name":v,
      "venue_id":this.venueid,
      // "srv_res_flag":this.category,
      // "break_check" : 'Y',
      // "month_day": [{"dt":mon},{"dt":tue},{"dt":wed},{"dt":thur},{"dt":fri},{"dt":sat},{"dt":sun}],
      // "start_time" : st,
      // "end_time" : end
    }
    console.log(dt)
    this.dataServe.global_service(1,'/items',dt).subscribe(data=>{console.log(data)
    this.itemData=data;
    if(this.itemData.suc==1){
      this.reset_add_item(); 
      this.mid2='';
      this.eid2='';
      this.i_value='';
      this.submit_show2=false;
      this.m="Update Successful";
     this.msg.successMsg('SU')
      this.fetchdata1(this.menu_item,this.sectionitem)
    }
    else{
      this.msg.errorMsg('EU')
    }
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  }
  else{
    this.msg.globalError('Empty field not allowed!')
  }
  }
  // 
  select_for_desc_menu(v:any){
    this.menufordesc=v
    this.dataServe.global_service(0,'/section',`hotel_id=${this.r_id}&id=${this.mncdata}&menu_id=${v}`).subscribe(data=>{console.log(data)
      this.get_section_for_item1=data;
      this.get_section_for_item1=this.get_section_for_item1.msg;
      
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
  }
  get_item_select(v:any){
    
    this.sid=v;
    this.dataServe.global_service(0,'/items',`hotel_id=${this.r_id}&flag=${this.category}&srv_res_id=${this.mncdata}&menu_id=${this.menufordesc}&sec_id=${this.sid}`).subscribe(data=>{console.log(data)

      console.log(data)
    this.idata=data;
    this.idata=this.idata.msg;
    
    })
  }
  putdata1(v:any){
    this.dataSource1= new MatTableDataSource(v);
    this.dataSource1.paginator=this.MatPaginator2;
    // this.dataSource1.sort=this.matsort1;
  }
  get_item_select1(v:any){
    this.i_data=v;
    this.fetchdata2(this.menufordesc,this.sid,this.i_data)

  }
  submit_price_desc(p:any,d:any,a:any,col:any,backcol:any)
  {
    console.log(this.sid+" "+this.menufordesc+" "+this.i_data+" "+col)
    if(this.sid!=''&&this.menufordesc!=''&&p!=''&&d!=''){
    var dt={
      "restaurant_id" : this.r_id,
      "menu_id":this.menufordesc,
      "sec_id": this.sid,
      "item_id": this.i_data,
      "item_price" : p,
      "item_desc" : d,
      "item_note" : a,
      "note_color":col,
      "note_back_color":backcol,
      "venue_id":this.venueid
    }
    this.dataServe.global_service(1,'/item_price',dt).subscribe(data=>{console.log(data)
     this.itemdesc=data;
     if(this.itemdesc.suc==1){
      this.reset_desc();
      this.secid='';
      this.item_i='';
      this.mid1='';
      this.ipr='';
      this.ide='';
      this.ino='';
      this.show_button3=false;
     this.m="Update Successful";
     this.msg.successMsg('SU')
     this.fetchdata2(this.menufordesc,this.sid,this.i_data)
   }
   else{
    this.msg.errorMsg('EU')
   }
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  }
  else{
    this.msg.globalError('Empty field not allowed')
  }
  }
  fetchdata2(mid:any,sid:any,iid:any){
    this.dataServe.global_service(0,'/item_price',`item_id=${iid}&menu_id=${mid}`).subscribe(data=>{console.log(data)
      this.descriptionData=data;
      this.descriptionData=this.descriptionData.msg
    this.putdata2(this.descriptionData)
    
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  }
submitup(mon:any,tue:any,wed:any,thur:any,fri:any,sat:any,sun:any,st:any,end:any){
  this.storevalue.length=0;
  this.veh1=document.getElementById('vehicle1')
  this.veh2=document.getElementById('vehicle2')
  this.veh3=document.getElementById('vehicle3')
  this.veh4=document.getElementById('vehicle4')
  this.veh5=document.getElementById('vehicle5')
  this.veh6=document.getElementById('vehicle6')
  this.veh7=document.getElementById('vehicle7')
  this.veh8=document.getElementById('vehicle8')
  
  if(this.veh2.checked)
  this.mon=2
  if(this.veh3.checked)
  this.tue=3
  if(this.veh4.checked)
  this.wed=4
  if(this.veh5.checked)
  this.thur=5
  if(this.veh6.checked)
  this.fri=6
  if(this.veh7.checked)
  this.sat=7
  if(this.veh8.checked)
  this.sun=8
  if(st<end){
    console.log(this.venueid)
  if(this.menuid!=''&&st!=''&&end!=''){
  console.log(this.mon+" "+this.tue+" "+this.wed+" "+this.thur+" "+this.fri+" "+this.sat+" "+this.sun+" ")
  this.storevalue.push({
    "restaurant_id" : this.r_id,
    "menu_id":this.menuid,
    "active_flag" : 'Y',
    "month_day": [{"dt":this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thur},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}],
    "start_time" : st,
    "end_time" : end,
    "venue_id":this.venueid

  })
  this.dataServe.global_service(1,'/date_time',this.storevalue).subscribe(data=>{console.log(data)
  this.setTimedata=data;
  console.log(this.setTimedata)
  if(this.setTimedata.suc==1){
    this.m="Update Successful";
   this.msg.successMsg('SU')
    // this.fetchdata2()
  }
  else{
   this.msg.errorMsg('EU')
  }
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
}
  else{
   this.msg.globalError('Empty field not allowed!')
  }
}
else{
  this.msg.globalError('Start time should not exceed end time!')

}
}
checkbrunchday(e:any,day:any){
  if(day=='everyday'){
  if(e.target.checked){
    this.veh1=document.getElementById('vehicle1')
    this.veh2=document.getElementById('vehicle2')
    this.veh3=document.getElementById('vehicle3')
    this.veh4=document.getElementById('vehicle4')
    this.veh5=document.getElementById('vehicle5')
    this.veh6=document.getElementById('vehicle6')
    this.veh7=document.getElementById('vehicle7')
    this.veh8=document.getElementById('vehicle8')
    this.veh2.checked=true;
    this.veh3.checked=true;
    this.veh4.checked=true;
    this.veh5.checked=true;
    this.veh6.checked=true;
    this.veh7.checked=true;
    this.veh8.checked=true;
    this.mon=2;
    this.tue=3;
    this.wed=4;
    this.thur=5;
    this.fri=6;
    this.sat=7;
    this.sun=8;
  }
  else
  {
    this.veh1=document.getElementById('vehicle1')
    this.veh2=document.getElementById('vehicle2')
    this.veh3=document.getElementById('vehicle3')
    this.veh4=document.getElementById('vehicle4')
    this.veh5=document.getElementById('vehicle5')
    this.veh6=document.getElementById('vehicle6')
    this.veh7=document.getElementById('vehicle7')
    this.veh8=document.getElementById('vehicle8')
    this.veh2.checked=false;
    this.veh3.checked=false;
    this.veh4.checked=false;
    this.veh5.checked=false;
    this.veh6.checked=false;
    this.veh7.checked=false;
    this.veh8.checked=false;
    this.mon=0;
    this.tue=0;
    this.wed=0;
    this.thur=0;
    this.fri=0;
    this.sat=0;
    this.sun=0;
  }
   
  //  this.veh1.checked=true;
  }
  else if(day=='monday'){
    if(e.target.checked){
      this.veh2=document.getElementById('vehicle2')
      this.veh2.checked=true;
      this.mon=2;
    }
    else
    { this.mon=0;
    this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else if(day=='tuesday'){
    if(e.target.checked){
      this.veh3=document.getElementById('vehicle3')
      this.veh3.checked=true;
      this.tue=3;
    }
    else
    { this.tue=0;
     this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else if(day=='wednesday'){
    if(e.target.checked){
      this.veh4=document.getElementById('vehicle4')
      this.veh4.checked=true;
      this.wed=4;
    }
    else
     {this.wed=0;
     this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else if(day=='thursday'){
    if(e.target.checked){
      this.veh5=document.getElementById('vehicle5')
      this.veh5.checked=true;
      this.thur=5;
    }
    else
     {this.thur=0;
     this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else if(day=='friday'){
    if(e.target.checked){
      this.veh6=document.getElementById('vehicle6')
      this.veh6.checked=true;
      this.fri=6;
    }
    else
     {this.fri=0;
     this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else if(day=='saturday'){
    if(e.target.checked){
      this.veh7=document.getElementById('vehicle7')
      this.veh7.checked=true;
      this.sat=7;
    }
    else
     {this.sat=0;
     this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else if(day=='sunday'){
    if(e.target.checked){
      this.veh8=document.getElementById('vehicle8')
      this.veh8.checked=true;
      this.sun=8;
    }
    else
    { this.sun=0;
     this.veh1=document.getElementById('vehicle1')
     this.veh1.checked=false;}
  }
  else{}
}
pickup_place(v:any){
  this.menu_place=v;
  // this.specialData.length=0;
  console.log(this.menu_place)
  this.dataServe.global_service(0,'/notice',`id=${this.mncdata}&menu_id=${this.menu_place}&hotel_id=${this.r_id}`).subscribe(data=>{console.log(data)
    this.specialData=data;
    this.specialData=this.specialData.msg;
    if(this.specialData.length>0){
      this.sp_menuid=this.specialData[0].menu_id;
      this.sp_posid=this.specialData[0].position_id;
      this.sp_back=this.specialData[0].back_color;
      this.sp_font=this.specialData[0].font_color;
      this.sp_head=this.specialData[0].header_title;
      this.concatheaderlength=this.sp_head?this.sp_head.length:0
      this.sp_notice=this.specialData[0].notice_content;
      this.concatnoticelength=this.sp_notice?this.sp_notice.length:0
    }
    else
    {
      // alert("hello")
      // this.sp_menuid=this.specialData[0].menu_id;
      this.sp_posid='';
      this.sp_back='';
      this.sp_font='';
      this.sp_head='';
      this.sp_notice='';
      this.pos_id=document.getElementById('pos');
      this.pos_id.value='';
      this.hs=document.getElementById('headTitle_special');
      this.hs.value='';
      this.bx=document.getElementById('box');
      this.bx.value='';
      this.bx2=document.getElementById('box2');
      this.bx.value='';
      this.concatheaderlength=this.sp_head?this.sp_head.length:0
      this.concatnoticelength=this.sp_notice?this.sp_notice.length:0


    }
  
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  
}
getposition(e:any){
  this.pos=e
}
submit_special(m:any,p:any,h:any,c1:any,c2:any,notice:any){
  this.menu_place=m;
  this.pos=p;
  if(m!=''&&p!=''&&h!=''){
  var dt = {
    "menu":this.menu_place,notice_flag: 'Y', position: this.pos,headertitle:h,fontcolor:c1,back_color:c2,notice:notice,hotel_id:this.r_id,id:this.mncdata,venue_id:this.venueid};
    this.dataServe.global_service(1,'/notice',dt).subscribe(data=>{console.log(data)
      this.spData=data;
      if(this.spData.suc==1){
        this.m="Update successful"
        this.msg.successMsg('SU')
        this.show_tab='tab8';
        this.openCity('tab8')
      }
      else{
       this.msg.errorMsg('EU')
      }
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  }
  else{
    this.msg.globalError('Empty field not allowed!')
  }
}
  myFunction() {
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(()=>{ this.x.className = this.x.className.replace("show", ""); }, 3000);
  }
  //retrieve date and time for set date and time tab
  menu_set_date_time(v:any){
    this.menuid=v;
     this.mon=0;
         this.tue=0;
         this.wed=0;
         this.thur=0;
         this.fri=0;
         this.sat=0;
         this.sun=0;
    if(v==5)
    {
      this.show_special_date=false;
    }
    else{
      this.show_special_date=true;
    }
    // alert(v);
    for(this.k=1;this.k<=8;this.k++)
    {
      this.daycheck=document.getElementById('vehicle'+this.k);
      this.daycheck.checked=false;
    }
    if(v==''){
      this.starttime='';
      this.endtime='';
    }
    if(v!=5){
      this.dataServe.global_service(0,'/res_date_time_dt',`hotel_id=${this.r_id}&menu_id=${v}&srv_res_id=${this.mncdata}&flag=${this.category}`).subscribe(data=>{console.log(data)
        this.datetimeData=data;
        if(this.datetimeData.msg.length>0)
        {this.starttime=this.datetimeData.msg[0].start_time;
        this.endtime=this.datetimeData.msg[0].end_time;}
        else{
          this.starttime='';
      this.endtime='';
        }
        
        this.datetimeData=this.datetimeData.msg;
        if(this.datetimeData.length==7){
        this.veh1=document.getElementById('vehicle1')
         this.veh1.checked=true;
        //  this.mon=2;
        //  this.tue=3;
        //  this.wed=4;
        //  this.thur=5;
        //  this.fri=6;
        //  this.sat=7;
        //  this.sun=8;
        }
        for(let i=0;i<this.datetimeData.length;i++)
        {
          this.daycheck=document.getElementById('vehicle'+this.datetimeData[i].month_day);
          this.daycheck.checked=true;
          this.veh1=document.getElementById('vehicle1')
          this.veh2=document.getElementById('vehicle2')
          this.veh3=document.getElementById('vehicle3')
          this.veh4=document.getElementById('vehicle4')
          this.veh5=document.getElementById('vehicle5')
          this.veh6=document.getElementById('vehicle6')
          this.veh7=document.getElementById('vehicle7')
          this.veh8=document.getElementById('vehicle8')
          if(this.veh2.checked)
          this.mon=2
          if(this.veh3.checked)
          this.tue=3
          if(this.veh4.checked)
          this.wed=4
          if(this.veh5.checked)
          this.thur=5
          if(this.veh6.checked)
          this.fri=6
          if(this.veh7.checked)
          this.sat=7
          if(this.veh8.checked)
          this.sun=8
          
        }
        
        }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
        
        )
      
    }
   else{
    this.disablediv=document.getElementById('disable_check');
    this.disablediv.checked=true;
    this.disable_sp=false;
    this.dataServe.global_service(0,'/date_time',`id=${this.r_id}& menu_id=${v}`).subscribe(data=>{console.log(data)
      this.datetimeData=data;
     
      this.datetimeData=this.datetimeData.msg;
      console.log(this.datetimeData)
      this.regularmenuflag=this.datetimeData[0].regular_menu_flag;
      this.dayflag=this.datetimeData[0].day_flag;
      
      this.excl=document.getElementById('exclusively');
      this.inad=document.getElementById('inAddition')
      if(this.regularmenuflag=='E')
      {this.excl.checked=true;
        this.hide_sp_content=false
       this.exclusive_addition='E'
       this.excleveryweek=document.getElementById('everyWeek');
       this.exclspecific=document.getElementById('specificWeek');
       if(this.dayflag=='E')
       {this.excleveryweek.checked=true;
        this.week='E';
        for(let i=0;i<this.datetimeData.length;i++){
          console.log(this.datetimeData[i].month_day)
              
       this.daycheck=document.getElementById('vehicle_s'+this.datetimeData[i].month_day);
       this.daycheck.checked=true;
       if(this.datetimeData[i].month_day==2)
         this.mon=2
        else if(this.datetimeData[i].month_day==3)
         this.tue=3 
        else if(this.datetimeData[i].month_day==4)
         this.wed=4
        else if(this.datetimeData[i].month_day==5)
         this.thur=5
        else if(this.datetimeData[i].month_day==6)
         this.fri=6
        else if(this.datetimeData[i].month_day==7)
         this.sat=7
        else if(this.datetimeData[i].month_day==8)
         this.sun=8
                 
        }
        if( this.mon==2 && this.tue==3  && this.wed==4 &&  this.thur==5 && this.fri==6 && this.sat==7 && this.sun==8){
          this.daycheck=document.getElementById('vehicle_se');
          this.daycheck.checked=true;
        }
      }
       else
       {this.exclspecific.checked=true;
        this.week='S';
        var datePipe = new DatePipe('en-US');
        this.specific_excl=datePipe.transform(this.datetimeData[0].menu_date, 'yyyy-MM-dd');
        this.menu_frm_dt=datePipe.transform(this.datetimeData[0].menu_frm_dt, 'yyyy-MM-dd');
        this.menu_to_dt=datePipe.transform(this.datetimeData[0].menu_to_dt, 'yyyy-MM-dd');
         console.log(this.specific_excl)
      
      }
       for(let i=0;i<this.datetimeData.length;i++){

        this.daycheck=document.getElementById('menu'+this.datetimeData[i].regular_menu_id);
        this.daycheck.checked=true;
        if(this.datetimeData[i].regular_menu_id==1)
        this.menuid_special_breakfast=1;
        else if(this.datetimeData[i].regular_menu_id==2)
        this.menuid_special_lunch=2;
        else if(this.datetimeData[i].regular_menu_id==3)
        this.menuid_special_dinner=3;
        else
        this.menuid_special_brunch=4
      }
this.get_special_time(this.r_id,this.menuid_special_breakfast,this.menuid_special_lunch,this.menuid_special_dinner,this.menuid_special_brunch)       

//taking day data

// for(let i=0;i<this.datetimeData.length;i++){

//   this.daycheck=document.getElementById('vehicle_s'+this.datetimeData[i].menu_date);
//   this.daycheck.checked=true;
// }
      
      }
      else
   {   this.inad.checked=true;
      this.exclusive_addition='A'
      this.hide_sp_content=true
    this.excleveryweek=document.getElementById('everyWeekAddi');
    this.exclspecific=document.getElementById('specificWeekAddi');
    if(this.dayflag=='E')
    {this.excleveryweek.checked=true;
      this.week='E';
     for(let i=0;i<this.datetimeData.length;i++){
       console.log(this.datetimeData[i].month_day)
           
    this.daycheck=document.getElementById('inad'+this.datetimeData[i].month_day);
    this.daycheck.checked=true;
    if(this.datetimeData[i].month_day==2)
    this.veh_mon=2
   else if(this.datetimeData[i].month_day==3)
    this.veh_tue=3 
   else if(this.datetimeData[i].month_day==4)
    this.veh_wed=4
   else if(this.datetimeData[i].month_day==5)
    this.veh_thur=5
   else if(this.datetimeData[i].month_day==6)
    this.veh_fri=6
   else if(this.datetimeData[i].month_day==7)
    this.veh_sat=7
   else if(this.datetimeData[i].month_day==8)
    this.veh_sun=8

     }
     if( this.veh_mon==2 && this.veh_tue==3  && this.veh_wed==4 &&  this.veh_thur==5 && this.veh_fri==6 && this.veh_sat==7 && this.veh_sun==8){
      this.daycheck=document.getElementById('inad1');
      this.daycheck.checked=true;
    }
   }
   
    else
    {this.exclspecific.checked=true;
      this.week='S';
     var datePipe = new DatePipe('en-US');
     
     this.specific_excl=datePipe.transform(this.datetimeData[0].menu_date, 'yyyy-MM-dd');
     this.menu_frm_dt=datePipe.transform(this.datetimeData[0].menu_frm_dt, 'yyyy-MM-dd');
     this.menu_to_dt=datePipe.transform(this.datetimeData[0].menu_to_dt, 'yyyy-MM-dd');
     console.log(this.specific_excl)
   
   }
  
   for(let i=0;i<this.datetimeData.length;i++){

    this.daycheck=document.getElementById('addimenu'+this.datetimeData[i].regular_menu_id);
    this.daycheck.checked=true;
    if(this.datetimeData[i].regular_menu_id==1)
    this.menuid_breakfast_addition=1;
    else if(this.datetimeData[i].regular_menu_id==2)
    this.menuid_lunch_addition=2;
    else if(this.datetimeData[i].regular_menu_id==3)
    this.menuid_dinner_addition=3;
    else
    this.menuid_brunch_addition=4
  }
this.get_special_time(this.r_id,this.menuid_breakfast_addition,this.menuid_lunch_addition,this.menuid_dinner_addition,this.menuid_brunch_addition)       

  
  }
    
    })
   }
  }
  get_special_time(res_id:any, v1:any, v2:any, v3:any, v4:any){
    // //this.spinner.show();
   this.storevalue.length=0;
    this.storevalue.push({
      "restaurant_id":res_id,
      "reg_menu_id": [{"menu_id":v1},{"menu_id":v2},{"menu_id":v3},{"menu_id":v4}]
      })   

      console.log(this.exclusive_addition)
    this.dataServe.global_service(1,'/special_start_end',this.storevalue).subscribe(data=>{
      console.log(data);
      this.exclusive_time=data;
      console.log(this.exclusive_time);
      if(this.exclusive_addition=='E'){
      this.Modal=document.getElementById('start_exclusive');
      this.Modal.value=this.exclusive_time.msg[0].start_time;
      this.start_time=this.exclusive_time.msg[0].start_time;
      this.Modal=document.getElementById('end_exclusive');
      this.Modal.value=this.exclusive_time.msg[0].end_time;
      this.end_time=this.exclusive_time.msg[0].end_time;
      // ////this.spinner.hide();
     }
     else{
       
      this.Modal=document.getElementById('start_addition');
      this.Modal.value=this.exclusive_time.msg[0].start_time;
      this.start_time=this.exclusive_time.msg[0].start_time;
      this.Modal=document.getElementById('end_addition');
      this.Modal.value=this.exclusive_time.msg[0].end_time;
      this.end_time=this.exclusive_time.msg[0].end_time;
      // ////this.spinner.hide();/
     }
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
    console.log(this.start_time,this.end_time);
    
  }

  get_menu(v:any){
    console.log(v);
    // this.m_id=v;
    // this.radid=v;
    // this.dataServe.get_menu_urls(this.r_id, null,v).subscribe((data)=>{console.log(data)
    //   this.menuData1=data;
    //   this.menuData1=this.menuData1.menu_dt
    
    // })
  }
  //retrieve section image
  get_sec_img(v:any){
  //  alert(v);
  this.m_id=v;
  this.radid=v;
  this.dataServe.global_service(0,'/section_image',`id=${this.r_id}&menu_id=${v}`).subscribe(data=>{console.log(data)
    this.secData=data;
    this.secData=this.secData.msg;
    console.log(this.secData)
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
  }
  //opening respective tabs
  openCity(v:any){
  //   if(v=='tab_sp'){
  //     this.tab_el=document.getElementById('defaultOpen_sp');
  //     this.tab_el.style.background='#3F51B5'
  //     this.tab_el.style.color="white";
  //     this.tab_el=document.getElementById('defaultOpen1');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     // this.tab_el=document.getElementById('defaultOpen2');
  //     // this.tab_el.style.background='white'
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen33');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen4');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen5');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen6');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen7');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen8');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen9');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen10');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpenmenu');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //   }
  //   if(v=='tab1'){
  //     this.tab_el=document.getElementById('defaultOpen');
  //     this.tab_el.style.background='#3F51B5'
  //     this.tab_el.style.color="white";
  //     this.tab_el=document.getElementById('defaultOpen1');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     // this.tab_el=document.getElementById('defaultOpen2');
  //     // this.tab_el.style.background='white'
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen33');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen4');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen5');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen6');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen7');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen8');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen9');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpenmenu');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen_sp');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen10');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";

  //   }
  //   if(v=='tab2'){
  //     this.tab_el=document.getElementById('defaultOpen');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen_sp');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen1');
  //     this.tab_el.style.background='#3F51B5'
  //     this.tab_el.style.color="white";
  //     // this.tab_el=document.getElementById('defaultOpen2');
  //     // this.tab_el.style.background='white'
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen33');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen4');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen5');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen6');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen7');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen8');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen9');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpenmenu');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen10');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";

  //   }
  //   if(v=='tab3'){
  //     this.tab_el=document.getElementById('defaultOpen');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen_sp');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen1');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     // this.tab_el=document.getElementById('defaultOpen2');
  //     // this.tab_el.style.background='#3F51B5'
  //     // this.tab_el.style.color="white";
  //     this.tab_el=document.getElementById('defaultOpen33');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen4');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen5');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen6');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen7');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen8');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen9');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpenmenu');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen10');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";

  //   }
  //   if(v=='tab33'){
  //     this.tab_el=document.getElementById('defaultOpen');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen_sp');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen1');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     // this.tab_el=document.getElementById('defaultOpen2');
  //     // this.tab_el.style.background='white'
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen33');
  //     this.tab_el.style.background='#3F51B5'
  //     this.tab_el.style.color="white";
  //     this.tab_el=document.getElementById('defaultOpen4');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen5');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen6');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen7');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen8');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen9');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpenmenu');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen10');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";

  //   }
  //   if(v=='tab4'){
  //     this.tab_el=document.getElementById('defaultOpen');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen1');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen_sp');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     // this.tab_el=document.getElementById('defaultOpen2');
  //     // this.tab_el.style.background='white'
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen33');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen4');
  //     this.tab_el.style.background='#3F51B5'
  //     this.tab_el.style.color="white";
  //     this.tab_el=document.getElementById('defaultOpen5');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen6');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen7');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen8');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen9');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpenmenu');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen10');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";

  //   }
  //   if(v=='tab5'){
  //     this.tab_el=document.getElementById('defaultOpen');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen1');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     // this.tab_el=document.getElementById('defaultOpen2');
  //     // this.tab_el.style.background='white'
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen_sp');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen33');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen4');
  //     this.tab_el.style.background=''
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen5');
  //     this.tab_el.style.background='#3F51B5'
  //     this.tab_el.style.color="white";
  //     this.tab_el=document.getElementById('defaultOpen6');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen7');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen8');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen9');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpenmenu');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen10');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";

  //   }
  //   if(v=='tab6'){
  //     this.tab_el=document.getElementById('defaultOpen');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen1');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     // this.tab_el=document.getElementById('defaultOpen2');
  //     // this.tab_el.style.background='white'
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen_sp');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen33');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen4');
  //     this.tab_el.style.background=''
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen5');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen6');
  //     this.tab_el.style.background='#3F51B5'
  //     this.tab_el.style.color="white";
  //     this.tab_el=document.getElementById('defaultOpen7');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen8');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen9');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpenmenu');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen10');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";

  //   }
    
  //   if(v=='tab7'){
  //     this.tab_el=document.getElementById('defaultOpen');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen1');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     // this.tab_el=document.getElementById('defaultOpen2');
  //     // this.tab_el.style.background='white'
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen_sp');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen33');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen4');
  //     this.tab_el.style.background=''
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen5');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen6');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen7');
  //     this.tab_el.style.background='#3F51B5'
  //     this.tab_el.style.color="white";
  //     this.tab_el=document.getElementById('defaultOpen8');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen9');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpenmenu');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen10');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";

  //   }
  //   if(v=='tab8'){
  //     this.tab_el=document.getElementById('defaultOpen');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen1');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     // this.tab_el=document.getElementById('defaultOpen2');
  //     // this.tab_el.style.background='white'
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen33');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen_sp');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen4');
  //     this.tab_el.style.background=''
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen5');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen6');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen7');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen8');
  //     this.tab_el.style.background='#3F51B5'
  //     this.tab_el.style.color="white";
  //     this.tab_el=document.getElementById('defaultOpen9');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpenmenu');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen10');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";

  //   }
  //   if(v=='tab9'){
  //     this.tab_el=document.getElementById('defaultOpen');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen1');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     // this.tab_el=document.getElementById('defaultOpen2');
  //     // this.tab_el.style.background='white'
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen33');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen4');
  //     this.tab_el.style.background=''
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen_sp');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen5');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen6');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen7');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen8');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen9');
  //     this.tab_el.style.background='#3F51B5'
  //     this.tab_el.style.color="white";
  //     this.tab_el=document.getElementById('defaultOpenmenu');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen10');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";

  //   }
  //   if(v=='tab_menu'){
  //     this.tab_el=document.getElementById('defaultOpen');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen1');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     // this.tab_el=document.getElementById('defaultOpen2');
  //     // this.tab_el.style.background='white'
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen_sp');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen33');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen4');
  //     this.tab_el.style.background=''
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen5');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen6');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen7');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen8');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen9');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpenmenu');
  //     this.tab_el.style.background='#3F51B5'
  //     this.tab_el.style.color="white";
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen10');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";

  //   }
  //   if(v=='tab10'){
  //     this.tab_el=document.getElementById('defaultOpen');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen1');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     // this.tab_el=document.getElementById('defaultOpen2');
  //     // this.tab_el.style.background='white'
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen_sp');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen33');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen4');
  //     this.tab_el.style.background=''
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen5');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen6');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen7');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen8');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen9');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpen10');
  //     this.tab_el.style.background='#3F51B5'
  //     this.tab_el.style.color="white";
  //     // this.tab_el.style.color="black";
  //     this.tab_el=document.getElementById('defaultOpenmenu');
  //     this.tab_el.style.background='white'
  //     this.tab_el.style.color="black";
  //   }
  //  this.show_tab=v;
   
  }

  checkvalidity(event:any){
    console.log(event)
    if(event.target.id=='headTitle'){
      if(event.target.value!=''){
        this.value_Headertitle=false;
        }
        else{
        this.value_Headertitle=true;
          
        }
    }}
    changecolor(event:any,e:any){
      if(e=='back'){
      this.back=document.getElementById('box');
      this.back.value=event.target.value;
      this.value_font=false;
      }
      else if(e=='font'
      ){
       this.back=document.getElementById('box2');
       this.back.value=event.target.value;
       this.value_background=false;
      }
      console.log(event.target.value);
 }
 applyFilter(event: Event) {
   console.log(event)
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  this.dataSource1.filter = filterValue.trim().toLowerCase();
  this.dataSource2.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
  // if (this.dataSource1.paginator) {
  //   this.dataSource.paginator.firstPage();
  // }
  // if (this.dataSource2.paginator) {
  //   this.dataSource.paginator.firstPage();
  // }
}
send_mail()
{ //this.spinner.show()
  console.log(this.r_id)
 this.dataServe.global_service(0,'/approve_menu',`id=${this.r_id}&venue_id=${this.venueid}`).subscribe(data=>{console.log(data)
  this.mail_data=data;
  if(this.mail_data.suc==1)
 {
   ////this.spinner.hide()
   this.msg.globalSuccess('The email has been sent')
  }
  else{
   ////this.spinner.hide()
this.msg.globalError('Problem sending the email')
  }
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)
}
update_logo(){
  // alert("hello")
  //this.spinner.show()
  console.log(this.rest_nm+" "+this.r_id+" "+this.logo_img+" "+this.img_cover);
  if(this.logo_file!=undefined){
    const formdata=new FormData();
  formdata.append('hotel_id',this.r_id);
  formdata.append('restaurant_name',this.rest_nm);
  formdata.append('logo',this.logo_img)
  formdata.append('logo_img',this.img_cover);
  formdata.append('filename',this.logoname);
  formdata.append('venue_id',this.venueid)
  formdata.append('srv_res_flag',this.category)
    formdata.append('srv_res_id',this.mncdata)
  this.dataServe.global_service(1,'/logo',formdata).subscribe(data=>{console.log(data)
    var venue = this.venueid > 0 ? '&venue_id='+this.venueid : '';
    this.dataServe.global_service(0,'/menu_setup',`id=${this.r_id}${venue}`).subscribe((data)=>{console.log(data)
      this.menuData=data;
      this.logo_img=this.menuData.logo_dt[0].logo_url;
      this.logopath=this.menuData.logo_dt[0].logo_path;
      this.half_logopath=this.logopath
      this.logopath=environment.api_url+'/'+this.logopath;
      // this.logospin=true;
      ////this.spinner.hide();
     //  const data = 'some text';
     this.imgel=document.createElement('img');
     this.imgel.src=this.logopath
       const blob = new Blob([this.imgel], { type: 'application/octet-stream' });
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
      
      
      console.log(this.logopath)
     this.menuData=this.menuData.oth_dt;
     }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
     
     )
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
}
  else
  {
    ////this.spinner.hide();
    this.msg.globalError('Please select an image before you update')
  }
}
upload_logo(e:any){
  this.show_zoom=false;
  this.cropround=true;
  this.show_alert=true
  // this.crop_width=200;
// this.crop_height=130;
this.crop_width=1800;
 this.crop_height=2560;
 this.crop_min_height=0
 this.crop_min_width=0
 this.aspect_ratio="";
  this.Zoomout = false;
  this.ZoomIn = false;
  this.resize_to_height=0;
  this.resize_to_width=0;
  this.contain_within_aspect_ratio=false
  console.log(this.crop_width+" "+this.crop_height)
  // const URL = window.URL || window.webkitURL;
  // const Img = new Image();

  // const filesToUpload = (e.target.files);
  // Img.src = URL.createObjectURL(filesToUpload[0]);

  // Img.onload = (e: any) => {
  //   const height = e.path[0].height;
  //   const width = e.path[0].width;

  //   console.log(height,width);
    // if(height<this.crop_height && width <this.crop_width)
    // this.show_alert=false
    // else
    // this.show_alert=true;}



  console.log(this.cropround)
  console.log(e.target.files[0])
  this.logoname=e.target.files[0].name;
  this.img_name=this.logoname
  this.logo_file=e.target.files[0];
  this.img_cover=e;
  this.logo_file1=document.getElementById('logo_crop');
  this.logo_file1.click();
  console.log("hello")
  this.isSave=false
}
update_price_desc(menid:any,sectionid:any,itemid:any,pr:any,de:any,ad:any,col:any,backcol:any){
  // alert(col)
  if(menid!=''&&sectionid!=''&&itemid!=''&&pr!=''&&de!=''){
  var dt={
    "restaurant_id" : this.r_id,
    "menu_id":menid,
    "sec_id": sectionid,
    "item_id": itemid,
    "item_price" : pr,
    "item_desc" : de,
    "item_note" : ad,
    "id":this.idfordesc,
    "note_color":col,
    "note_back_color":backcol,
    "venue_id":this.venueid


  }
  this.dataServe.global_service(1,'/item_price',dt).subscribe(data=>{console.log(data)
    this.itemdesc=data;
    if(this.itemdesc.suc==1){
      this.reset_desc();
      this.secid='';
      this.item_i='';
      this.mid1='';
      this.ipr='';
      this.ide='';
      this.ino='';
      this.show_button3=false;
    this.m="Update Successful";
    this.ide='';
    this.concatdatalength=0
    this.concatdatalength1=0
    this.ino='';

    setTimeout(()=>{
      this.ngOnInit();
      // this.openCity('tab6')
    },3000)
    this.msg.successMsg('SU')
    this.show_button3=false;
    this.fetchdata2(menid,sectionid,itemid);
    
   
  }
  else{
    this.msg.errorMsg('SU')
  }
   }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
   
   )
  }
  else{
    this.msg.globalError('Empty field not allowed!')
  }
}
get_sec_id1(menid:any,id:any,val:any,k:any){
  console.log(menid+" "+id+" "+val);
  this.hidesection=false;

  this.submit_show=true;
  this.idforcreatesection=id;
  this.preview_for_section=k;
  this.newMid=menid
  // this.z1=document.getElementById('b'+menid)
  // this.z1.checked=true;
  this.createsecval=val;
  console.log(this.createsecval)
  window.scrollTo(0, 0);
  
}
upload_cover(e:any){
  this.isSave=false
  // alert("hello");
  console.log(e)
  this.crop_width=1800;
  this.crop_height=2400;
  const URL = window.URL || window.webkitURL;
    let Img:any = '';
    Img = new Image();

    const filesToUpload = (e.target.files);
    Img.src = URL.createObjectURL(filesToUpload[0]);

    Img.onload = (e: any) => {
      const height = e.path[0].height;
      const width = e.path[0].width;
     
      console.log(height,width);
      // if(height<this.crop_height && width <this.crop_width)
      // {this.show_alert=false
      //   this.isSave=true;
       
      // }
      // else
      // {this.show_alert=true; this.isSave=false}

  }

  this.show_zoom=false
 this.crop_width=1800;
 this.crop_height=2400;
 this.crop_min_height=1800
 this.crop_min_width=2400
 this.aspect_ratio="4/3";
 console.log(this.width+" "+this.height)
 this.Zoomout = true;
  this.ZoomIn = true;
  this.contain_within_aspect_ratio=false;
 console.log(this.crop_width+" "+this.crop_height)

  this.cropround=false
  console.log(this.cropround)

  this.covername=e.target.files[0].name;
  this.img_name=this.covername;
  this.cover_file=e;
  this.img_cover=this.cover_file
  console.log(this.cover_file);
  this.logo_file1=document.getElementById('logo_crop');
  this.logo_file1.click();
}
update_cover(v:any,v_menu:any,v1:any){
  // this.coverspin=false;
  //this.spinner.show();
  if(this.cover_file!=undefined)

  {
    const formdata=new FormData();
  formdata.append('id',v);
  formdata.append('menu_id',v_menu)
  formdata.append('hotel_id',this.r_id);
  formdata.append('restaurant_name',this.rest_nm);
  formdata.append('cov_url',this.img_cover)
  formdata.append('cov_img',v1);
  formdata.append('filename',this.covername)
  formdata.append('venue_id',this.venueid)
  formdata.append('srv_res_flag',this.category)
  formdata.append('srv_res_id',this.mncdata)
    console.log(v+" "+this.rest_nm+" "+this.r_id+" "+this.cover_file+" "+v1)
   this.dataServe.global_service(1,'/cover_save',formdata).subscribe(data=>{console.log(data)
    var venue = this.venueid > 0 ? '&venue_id='+this.venueid : '';
  
    this.dataServe.global_service(0,'/menu_setup',`id=${this.r_id}&{Venue}`).subscribe((data)=>{console.log(data)
      this.menuData=data;
      this.logo_img=this.menuData.logo_dt[0].logo_url;
      this.logopath=this.menuData.logo_dt[0].logo_path;
      this.half_logopath=this.logopath
      this.logopath=environment.api_url+'/'+this.logopath;
     //  const data = 'some text';
    //  this.coverspin=true
    ////this.spinner.hide();
     this.imgel=document.createElement('img');
     this.imgel.src=this.logopath
       const blob = new Blob([this.imgel], { type: 'application/octet-stream' });
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
      
      
      console.log(this.logopath)
     this.menuData=this.menuData.oth_dt;
     }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
     
     )
  
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
   
}
  else{
    ////this.spinner.hide();
    this.msg.errorMsg('Please select an image!')
  }
}
upload_top(e:any){
  this.show_zoom=false;
  this.cropround=false;
  // this.crop_width=200;
  // this.crop_height=130;
  this.crop_width=1800;
 this.crop_height=2560;
 this.aspect_ratio="4/4"
  this.Zoomout = false;
  this.ZoomIn = false;
  console.log(this.crop_width+" "+this.crop_height)
  this.contain_within_aspect_ratio=false;
  console.log(this.cropround)
  const URL = window.URL || window.webkitURL;
  let Img:any = '';
  Img = new Image();

  const filesToUpload = (e.target.files);
  Img.src = URL.createObjectURL(filesToUpload[0]);

  Img.onload = (e: any) => {
    const height = e.path[0].height;
    const width = e.path[0].width;
    this.resize_to_height=0;
    this.resize_to_width=0;
    console.log(height,width);
    if(height<this.crop_height && width <this.crop_width)
    this.show_alert=false
    else
    this.show_alert=true;

}
  this.topname=e.target.files[0].name
  this.img_name=this.topname;
  this.top_file=e;
  this.img_cover=this.top_file;
  this.logo_file1=document.getElementById('logo_crop');
  this.logo_file1.click();

  this.isSave=false
  
}
update_top(v:any,vmenu:any,v1:any){
  // this.topspin=false;
  //this.spinner.show()
  if(this.top_file!=undefined)
  {console.log(v+" "+this.rest_nm+" "+this.r_id+" "+this.top_file+" "+v1)
 const formdata=new FormData()
  formdata.append('id',v);
  formdata.append('menu_id',vmenu)
  formdata.append('hotel_id',this.r_id);
  formdata.append('restaurant_name',this.rest_nm);
  formdata.append('top_url',v1)
  formdata.append('top_img',this.img_cover);
  formdata.append('filename',this.topname)
  formdata.append('venue_id',this.venueid)
  formdata.append('srv_res_flag',this.category)
  formdata.append('srv_res_id',this.mncdata)
    this.dataServe.global_service(1,'/top_save',formdata).subscribe(data=>{console.log(data)
     var  venue = this.venueid > 0 ? '&venue_id='+this.venueid : '';
      
      this.dataServe.global_service(0,'/menu_setup',`id=${this.r_id}&{venue}`).subscribe((data)=>{console.log(data)
        this.menuData=data;
        this.logo_img=this.menuData.logo_dt[0].logo_url;
        this.logopath=this.menuData.logo_dt[0].logo_path;
        this.half_logopath=this.logopath
        this.logopath=environment.api_url+'/'+this.logopath;
       //  const data = 'some text';
      //  this.topspin=true;
      ////this.spinner.hide();
       this.imgel=document.createElement('img');
       this.imgel.src=this.logopath
         const blob = new Blob([this.imgel], { type: 'application/octet-stream' });
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
        
        
        console.log(this.logopath)
       this.menuData=this.menuData.oth_dt;
       }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
       
       )
    
    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

    )

}

  else{
    ////this.spinner.hide();
   this.msg.globalError('Please select an image!')
  }
  
}

section_img_upload(e:any){
  this.cropround=false;
  console.log(this.cropround)
  // this.crop_width=1800;
  this.crop_width=1800;
  this.aspect_ratio="3/2";
  this.contain_within_aspect_ratio=false
   
  // this.crop_height=500;
  this.crop_height=1200;
  this.crop_min_height=1200;
  this.crop_min_width=1800;
  const URL = window.URL || window.webkitURL;
  const Img = new Image();

  const filesToUpload = (e.target.files);
  Img.src = URL.createObjectURL(filesToUpload[0]);

  Img.onload = (e: any) => {
    const height = e.path[0].height;
    const width = e.path[0].width;
   
    console.log(height,width);
    if(height<this.crop_height && width <this.crop_width)
    { 
     this.show_alert=false
     this.isSave=true;
    }
    else
    {
     this.show_alert=true;
     this.isSave=false
    }
  }
  console.log(this.crop_width+" "+this.crop_height)
  this.sectionname=e.target.files[0].name
  this.img_name=this.sectionname;
   this.sectionimage=e;
  
  this.img_cover=this.sectionimage;
  this.logo_file1=document.getElementById('logo_crop');
  this.logo_file1.click();
  console.log(this.img_cover)
}
// restricting the characters of description 
restrict(e:any){
  this.concatdatalength=e.target.value.length;
  console.log(this.concatdatalength)
}
// restricting the characters of additional notes 
restrict1(e:any){
  this.concatdatalength1=e.target.value.length;
  console.log(this.concatdatalength1)
}
// restrict the number of characters of about us
restrict2(e:any){
  this.concatdatalength2=e.target.value.length;
  console.log(this.concatdatalength2)
}
//restrict price field only to number and decimal
isNumberKey(evt:any)
{
   var charCode = (evt.which) ? evt.which : evt.keyCode;
   if (charCode != 46 && charCode > 31 
     && (charCode < 48 || charCode > 57))
      return false;

   return true;
}
// refresh the section 
reload_section(){
  
  // if(v=='tab4')
  // this.ngOnInit();
  // this.fetchdata(null)
  this.concatdatalength=0;
  this.rad=document.getElementById('b'+this.m_id);
  console.log(this.rad)
  if(this.rad)
  this.rad.checked=false;
  this.pp=document.getElementById('secval');
  this.pp.value='';
  this.preview_for_section=''
  this.filesection=document.getElementById('files_section');
  this.filesection.value='';
  this.img_cover=''
// this.openCity('tab4');  // this.ngOnInit();
   this.submit_show=false;
   this.hidesection=true;
}

//Image Cropper
// zooming option
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
  if(this.show_tab=='tab4')
  this.preview_for_section=this.croppedImage
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
      const imageName = this.img_name;
      const imageBlob = this.dataURItoBlob( this.croppedImage);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      console.log({imageFile, imageBlob});
      this.img_cover=imageFile;
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
// open cropper
open_crop_modal(){
  this.el=document.getElementById('id01');
  this.el.style.display='block'

}
// resetting item on addition
reset_add_item(){
  this.additem_item_el=document.getElementById('headTitle_item');
  this.additem_item_el.value=''
  this.additem_menu_el=document.getElementById('pickup_place_menu');
  this.additem_menu_el.value='';
  this.additem_section_el=document.getElementById('pickup_place_section');
  this.additem_section_el.value='';
}
// resetting item price and description
reset_desc(){
  this.desc_menu_el=document.getElementById('pickup_place_menu_desc');
  this.desc_section_el=document.getElementById('pickup_place_section_desc');
  this.desc_item_el=document.getElementById('pickup_place_item_desc');
  this.desc_price=document.getElementById('headTitlePrice')
  this.desc_menu_el.value='';
  this.desc_section_el.value='';
  this.desc_item_el.value='';
  this.desc_price.value=''
  this.concatdatalength1=0;
  this.concatdatalength=0;
  
}
// close the cropper
close_modal_on_crop(){
  this.modal_close_oncrop=document.getElementById('id01');
  this.modal_close_oncrop.style.display='none'
}
// restrict characters for header
restrict_header(e:any){
  
  this.concatheaderlength=e.target.value.length;
  // alert(this.concatheaderlength)
}
// restrict characters for notice
restrict_notice(e:any){
  this.concatnoticelength=e.target.value.length;
  // alert(this.concatnoticelength)
}
// download pdf for section data
download_section(){
  console.log(this.radid+" "+this.r_id)
  this.dataServe.downloadsection(this.r_id,this.radid).subscribe(data=>{console.log(data)
  this.download_section_zip=data;
  console.log(this.download_section_zip)
  // this.download_section_zip=this.download_section_zip.msg.data;
  var a = document.createElement('a');
var blob = new Blob([this.download_section_zip], {'type':"application/octet-stream"});
a.href = URL.createObjectURL(blob);
a.download = this.rest_nm+"_section_images_"+Date.now()+".zip";
a.click();
  }  
  )
}
// download all button
download_top_cover_logo(){
  console.log(this.r_id);
  this.dataServe.downloadlogotopcover(this.r_id).subscribe(data=>{console.log(data)
    this.download_logo_top_cover_zip=data;
    console.log(this.download_logo_top_cover_zip)
    // this.download_section_zip=this.download_section_zip.msg.data;
    var a = document.createElement('a');
  var blob = new Blob([ this.download_logo_top_cover_zip], {'type':"application/octet-stream"});
  a.href = URL.createObjectURL(blob);
  a.download = this.rest_nm+"_logo_top_cover_images_"+Date.now()+".zip";
  a.click();
  
  })
}
// check days of the week for displaying special menu
check_every_day(e:any,v1:any,v2:any){
  if(v1=='exclusive')
{
 if(v2=='every_week' && e.target.checked){

     this.week='E';
  }
  else if(v2=='SPECIFIC_DATE' && e.target.checked){
    this.week='S'
  }
}
else{

}
}
enable_exclusive_inaddition(e:any,v:any){
  if(v=='exclusive'){
           this.exclusive_addition='E';
           this.hide_sp_content=false;
  }
  else{
     this.exclusive_addition='A';
     this.hide_sp_content=true

  }
}
checkspecialday(e:any,v:any,v1:any){
if(v1=='exclusive') {
  if(v=='everyday'){
    if(e.target.checked){
      this.veh1=document.getElementById('vehicle_se')
      this.veh2=document.getElementById('vehicle_s2')
      this.veh3=document.getElementById('vehicle_s3')
      this.veh4=document.getElementById('vehicle_s4')
      this.veh5=document.getElementById('vehicle_s5')
      this.veh6=document.getElementById('vehicle_s6')
      this.veh7=document.getElementById('vehicle_s7')
      this.veh8=document.getElementById('vehicle_s8')
      this.veh2.checked=true;
      this.veh3.checked=true;
      this.veh4.checked=true;
      this.veh5.checked=true;
      this.veh6.checked=true;
      this.veh7.checked=true;
      this.veh8.checked=true;
      this.mon=2;
      this.tue=3;
      this.wed=4;
      this.thur=5;
      this.fri=6;
      this.sat=7;
      this.sun=8;
    }
    else
    {
      this.mon=0;
      this.tue=0;
      this.wed=0;
      this.thur=0;
      this.fri=0;
      this.sat=0;
      this.sun=0;
    }
     
    //  this.veh1.checked=true;
    }
    else if(v=='monday'){
      if(e.target.checked){
        this.veh2=document.getElementById('vehicle_s2')
        this.veh2.checked=true;
        this.mon=2;
      }
      else
      { this.mon=0;
      this.veh1=document.getElementById('vehicle_se')
       this.veh1.checked=false;}
    }
    else if(v=='tuesday'){
      if(e.target.checked){
        this.veh3=document.getElementById('vehicle_s3')
        this.veh3.checked=true;
        this.tue=3;
      }
      else
      { this.tue=0;
       this.veh1=document.getElementById('vehicle_Se')
       this.veh1.checked=false;}
    }
    else if(v=='wednesday'){
      if(e.target.checked){
        this.veh4=document.getElementById('vehicle_s4')
        this.veh4.checked=true;
        this.wed=4;
      }
      else
       {this.wed=0;
       this.veh1=document.getElementById('vehicle_se')
       this.veh1.checked=false;}
    }
    else if(v=='thursday'){
      if(e.target.checked){
        this.veh5=document.getElementById('vehicle_s5')
        this.veh5.checked=true;
        this.thur=5;
      }
      else
       {this.thur=0;
       this.veh1=document.getElementById('vehicle_se')
       this.veh1.checked=false;}
    }
    else if(v=='friday'){
      if(e.target.checked){
        this.veh6=document.getElementById('vehicle_s6')
        this.veh6.checked=true;
        this.fri=6;
      }
      else
       {this.fri=0;
       this.veh1=document.getElementById('vehicle_se')
       this.veh1.checked=false;}
    }
    else if(v=='saturday'){
      if(e.target.checked){
        this.veh7=document.getElementById('vehicle_s7')
        this.veh7.checked=true;
        this.sat=7;
      }
      else
       {this.sat=0;
       this.veh1=document.getElementById('vehicle_se')
       this.veh1.checked=false;}
    }
    else if(v=='sunday'){
      if(e.target.checked){
        this.veh8=document.getElementById('vehicle_s8')
        this.veh8.checked=true;
        this.sun=8;
      }
      else
      { this.sun=0;
       this.veh1=document.getElementById('vehicle_se')
       this.veh1.checked=false;}
    }
    else{}
  }
  else{

    if(v=='everyday'){
      if(e.target.checked){
        this.veh1=document.getElementById('inad1')
        this.veh2=document.getElementById('inad2')
        this.veh3=document.getElementById('inad3')
        this.veh4=document.getElementById('inad4')
        this.veh5=document.getElementById('inad5')
        this.veh6=document.getElementById('inad6')
        this.veh7=document.getElementById('inad7')
        this.veh8=document.getElementById('inad8')
        this.veh2.checked=true;
        this.veh3.checked=true;
        this.veh4.checked=true;
        this.veh5.checked=true;
        this.veh6.checked=true;
        this.veh7.checked=true;
        this.veh8.checked=true;
        this.veh_mon=2;
        this.veh_tue=3;
        this.veh_wed=4;
        this.veh_thur=5;
        this.veh_fri=6;
        this.veh_sat=7;
        this.veh_sun=8;
      }
      else
      {
        this.veh_mon=0;
        this.veh_tue=0;
        this.veh_wed=0;
        this.veh_thur=0;
        this.veh_fri=0;
        this.veh_sat=0;
        this.veh_sun=0;
      }
       
      //  this.veh1.checked=true;
      }
      else if(v=='monday'){
        if(e.target.checked){
          this.veh2=document.getElementById('inad2')
          this.veh2.checked=true;
          this.veh_mon=2;
        }
        else
        { this.veh_mon=0;
        this.veh1=document.getElementById('inad1')
         this.veh1.checked=false;}
      }
      else if(v=='tuesday'){
        if(e.target.checked){
          this.veh3=document.getElementById('inad3')
          this.veh3.checked=true;
          this.veh_tue=3;
        }
        else
        { this.veh_tue=0;
         this.veh1=document.getElementById('inad1')
         this.veh1.checked=false;}
      }
      else if(v=='wednesday'){
        if(e.target.checked){
          this.veh4=document.getElementById('inad4')
          this.veh4.checked=true;
          this.veh_wed=4;
        }
        else
         {this.veh_wed=0;
         this.veh1=document.getElementById('inad1')
         this.veh1.checked=false;}
      }
      else if(v=='thursday'){
        if(e.target.checked){
          this.veh5=document.getElementById('inad5')
          this.veh5.checked=true;
          this.veh_thur=5;
        }
        else
         {this.veh_thur=0;
         this.veh1=document.getElementById('inad1')
         this.veh1.checked=false;}
      }
      else if(v=='friday'){
        if(e.target.checked){
          this.veh6=document.getElementById('inad6')
          this.veh6.checked=true;
          this.veh_fri=6;
        }
        else
         {this.veh_fri=0;
         this.veh1=document.getElementById('inad1')
         this.veh1.checked=false;}
      }
      else if(v=='saturday'){
        if(e.target.checked){
          this.veh7=document.getElementById('inad7')
          this.veh7.checked=true;
          this.veh_sat=7;
        }
        else
         {this.veh_sat=0;
         this.veh1=document.getElementById('inad1')
         this.veh1.checked=false;}
      }
      else if(v=='sunday'){
        if(e.target.checked){
          this.veh8=document.getElementById('inad8')
          this.veh8.checked=true;
          this.veh_sun=8;
        }
        else
        { this.veh_sun=0;
         this.veh1=document.getElementById('inad1')
         this.veh1.checked=false;}
      }
      else{}
    
  }


}
// check whether the special menu is in addition to the special menu
check_addition(e:any,v1:any,v2:any){
  if(v2=='exclusive'){
    if(v1=='break'){
      if(e.target.checked)
    this.menuid_special_breakfast=1;
     else
     this.menuid_special_breakfast=0;
    }
    else if(v1=='lunch' && e.target.checked){
      if(e.target.checked)
      this.menuid_special_lunch=2;
      else
      this.menuid_special_lunch=0;
    }
    else if(v1=='dinner'){
      
      if(e.target.checked)
      this.menuid_special_dinner=3
     else
     this.menuid_special_dinner=0
    }
    else if(v1=='brunch'){
      
       if(e.target.checked)
      this.menuid_special_brunch=4
      else
      this.menuid_special_brunch=0;
    }
  // fetch time for special menu
this.get_special_time(this.r_id,this.menuid_special_breakfast,this.menuid_special_lunch,this.menuid_special_dinner,this.menuid_special_brunch)       

  }

  if(v2=='addition'){
    if(v1=='break' ){
      if(e.target.checked){
        this.menuid_breakfast_addition=1;

      }
      else{

        this.menuid_breakfast_addition=0;

      }

    }

    else if(v1=='lunch'){
      if(e.target.checked)
      this.menuid_lunch_addition=2;
      else
      this.menuid_lunch_addition=0;
    }
    else if(v1=='dinner'){
      if(e.target.checked)
      this.menuid_dinner_addition=3;
      else
      this.menuid_brunch_addition=0;
    
    }
    else if(v1=='brunch'){
      
      if(e.target.checked)
      this.menuid_brunch_addition=4;
      else
      this.menuid_brunch_addition=0;
    }
this.get_special_time(this.r_id,this.menuid_breakfast_addition,this.menuid_lunch_addition,this.menuid_dinner_addition,this.menuid_brunch_addition)       

  }

}
// submit data for special menu
submit_special_menu(){
  this.day_array.length=0
  this.day_array.push({
    "menu_id": this.menuid ,
    "break_check":'Y',
    "restaurant_id":this.r_id,
    "regular_menu_flag":this.exclusive_addition,
    "day_flag":this.week,
    // "menu_date":this.week=='S'?this.date_time:'',
    // "menu_date":this.exclusive_addition=='E'? (this.week=='S'? this.specific_excl:''): (this.week=='S' ? this.specific_excl:''),
    "menu_frm_dt":this.exclusive_addition=='E'? (this.week=='S'? this.menu_frm_dt:''): (this.week=='S' ? this.menu_frm_dt:''),
    "menu_to_dt":this.exclusive_addition=='E'? (this.week=='S'? this.menu_to_dt:''): (this.week=='S' ? this.menu_to_dt:''),
    "start_time": this.start_time,
    "end_time" :this.end_time ,
    "reg_menu_id":this.exclusive_addition=='E' ? [{"menu_id":this.menuid_special_breakfast},{"menu_id":this.menuid_special_lunch},{"menu_id":this.menuid_special_dinner},{"menu_id":this.menuid_special_brunch}] :  [{"menu_id":this.menuid_breakfast_addition},{"menu_id":this.menuid_lunch_addition},{"menu_id":this.menuid_dinner_addition},{"menu_id":this.menuid_brunch_addition}],
    "month_day":this.exclusive_addition=='E' ? [{"dt": this.mon},{"dt":this.tue},{"dt":this.wed},{"dt":this.thur},{"dt":this.fri},{"dt":this.sat},{"dt":this.sun}] : [{"dt": this.veh_mon},{"dt":this.veh_tue},{"dt":this.veh_wed},{"dt":this.veh_thur},{"dt":this.veh_fri},{"dt":this.veh_sat},{"dt":this.veh_sun}] 
  })
  console.log(this.day_array,this.specific_excl);
 this.dataServe.global_service(1,'/special_date_time',this.day_array).subscribe(data=>{console.log(data)
this.specialcontent=data;
if(this.specialcontent.suc==1)
{this.msg.successMsg('SU')}
else
{
 this.msg.errorMsg('EU')
}


}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)
}
// adding from date to special menu
get_frm_date(e:any){
  if(e.target.id=='special_from_dt'){
    this.menu_frm_dt=e.target.value;
 }
 else{
   this.menu_to_dt=e.target.value;
    
 }
} 
// adding to date to special menu
get_to_date(e:any){
  if(e.target.id=='special_to_dt'){
    this.menu_to_dt=e.target.value;
 }
 else{
   this.menu_to_dt=e.target.value;
    
 }
}
get_date(e:any){
  if(e.target.id=='special_exc'){
     this.specific_excl=e.target.value;
  }
  else{
    this.specific_excl=e.target.value;
     
  }
}
// posting menu and image for special menu
send_special_desc(){
  // console.log(txt);
  //this.spinner.show();
  var dt={
    "restaurant_id":this.mncdata,
    "menu_id":'S',
    "img_path":this.stockImg1,
    "img_catg":this.imgcat,
    "menu_desc":this.htmlContent,

  }
  this.dataServe.global_service(1,'/get_special_data',dt).subscribe(data=>{console.log(data)
    this.dataServe.global_service(0,'/get_special_data',`id=${this.mncdata}&menu_id=S`).subscribe(data=>{console.log(data)
    
      this.spdescData=data;
      this.spdescData=this.spdescData.msg
      this.spdesc_text_readonly=this.spdescData[0].menu_desc;
      this.stockImg1=this.spdescData[0].img_path;
      this.spstockImg=environment.api_url+'/stock/'+ this.spdescData[0].img_path;
      this.imgcat=this.spdescData[0].img_catg
      console.log(this.spstockImg);
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
      this.htmlContent=''
  ////this.spinner.hide();
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
}
openstockmodal(){
  this.openstockimages=document.getElementById('id02');
  this.openstockimages.style.display='block'
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
// select image from the modal containing the library
selectedimage(index:any,image_path:any,catg:any,length:any){

  this.previous_id=catg;
  this.imgcat=catg;
  this.stockImg1=image_path;
    // this.spstockImg=environment.api_url+'/stock/'+ image_path;
  this.common_for_special_menu=image_path;
  for(let i=0;i<length;i++){
    this.image_getelement=document.getElementById('image_'+i);
    this.image_getelement.style.border='';
  }
  this.image_getelement=document.getElementById('image_'+index);
 this.image_getelement.style.border='3px solid #00477e';
}
// save the image after cropping
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

  }
  this.openstockimages=document.getElementById('id02');
  this.openstockimages.style.display='none'
}
// opening section data in a pdf
openpdf(e:any){
console.log(e);
this.img_break_section=e;
// console.log(e);

var iframe="<iframe width='100%' height='100%' src='" +this.img_break_section+"' ></iframe>";
var xx=window.open(iframe,"_blank");
xx?.document.open();
xx?.document.write(iframe);
xx?.document.close();
}
// assigning the variable before deleting the section data
del_sec(sec_id:any,menu_id:any){
  this.del_section_var=sec_id;
  console.log(sec_id+" "+menu_id+" "+this.r_id)
  const dialogRef = this.dialog.open(DialogBoxComponent, {
    // width: '250px',
    data: { flag: 'delete', content: null }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result == 1) {
      this.delete_section()
    }})
}
// assign the ID before deleting the item
del_item(item_id:any,menu_id:any,section_id:any){
  this.del_item_var=item_id
  console.log(item_id+" "+" "+menu_id+" "+section_id+" "+this.r_id)
  const dialogRef = this.dialog.open(DialogBoxComponent, {
    // width: '250px',
    data: { flag: 'delete', content: null }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result == 1) {
      this.delete_item()
    }})
}
// assign the ID before deleting the price
del_price(item_id:any,menu_id:any,section_id:any){
  this.del_price_var=item_id
  console.log(item_id+" "+" "+menu_id+" "+section_id+" "+this.r_id)
  const dialogRef = this.dialog.open(DialogBoxComponent, {
    // width: '250px',
    data: { flag: 'delete', content: null }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result == 1) {
      this.delete_price()
    }})
}
// delete section data
delete_section(){
 console.log(this.del_section_var);
 this.dataServe.global_service(0,'/delete_sec',`id=${this.del_section_var}`).subscribe(data=>{console.log(data)
   this.delsecData=data;
   if(this.delsecData.suc==1){
     this.fetchdata(this.m_id);
     this.reload_section()
     this.createsecval=''
     this.rad=document.getElementById('b'+this.m_id);
     this.rad.checked=true;
     this.msg.successMsg('SD')
   }
   else{
     this.msg.errorMsg('ED')
   }
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)
}
// delete items
delete_item(){
console.log(this.del_item_var);
this.dataServe.global_service(0,'/delete_item',`id=${this.del_item_var}`).subscribe(data=>{console.log(data)
  this.delitemData=data;
  if(this.delitemData.suc==1){
    this.fetchdata1(this.menu_item,this.sectionitem);
    this.reset_add_item();
    this.mid2='';
    this.eid2='';
    this.i_value='';
    this.submit_show2=false;
    this.msg.successMsg('SD')
  }
  else{
    this.msg.errorMsg('ED')
  }
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)
 
}
// delete description and price 
delete_price(){
console.log(this.del_price_var);
this.dataServe.global_service(0,'/delete_price_desc',`id=${this.del_price_var}`).subscribe(data=>{console.log(data)
  this.delpriceData=data;
  if(this.delpriceData.suc==1){
    this.fetchdata2(this.menufordesc,this.sid,this.i_data);
    this.reset_desc();
    this.secid='';
    this.item_i='';
    this.mid1='';
    this.ipr='';
    this.ide='';
    this.ino='';
    this.show_button3=false;
    this.msg.successMsg('SD')
  }
  else{
   this.msg.errorMsg('ED')
  }
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)
}
onChange(html: object){
  console.log(this.html)
}
// change event when a qr code is chosen
change_qr(e:any,flag:any){
if(flag==0){
  this.dynamic=e.target.files[0];
  this.dynamic_name=this.dynamic.name;
}
else if(flag==1){
  this.vcard=e.target.files[0];
  this.vcard_name=this.vcard.name;
}
else{
  this.laguna_fun=e.target.files[0];
  this.laguna_fun_name=this.laguna_fun.name;
}
}
// upload qr code for vcard, dynamic menu and laguna fun beach directory
upload_qr(flag:any){
  //this.spinner.show();
 this.getimageDynamic=environment.api_url+'/';
 this.getimageVCard=environment.api_url+'/';
 this.getimageLagunaFun=environment.api_url+'/';
  if(flag==0){
    if(this.dynamic_name)
 {  this.file_qr=this.dynamic;
    this.file_qr_name=this.dynamic_name}
    else{
    ////this.spinner.hide();

     this.msg.globalError('Please choose a file')
    }
    // this.dynamic=e.target.files[0];
    // this.dynamic_name=this.dynamic.name;
    
  }
  else if(flag==1){
    if(this.vcard)
    {this.file_qr=this.vcard;
    this.file_qr_name=this.vcard_name}
    else{
      ////this.spinner.hide();
      this.msg.globalError('Please choose a file')

      }
  }
  else{
    if(this.laguna_fun)
    {this.file_qr=this.laguna_fun;
    this.file_qr_name=this.laguna_fun_name}
    else{

      ////this.spinner.hide();
  
      this.msg.globalError('Please choose a file')

      }
  }
  const formdata = new FormData();
  formdata.append('img',this.file_qr);
  formdata.append('flag',flag);
  formdata.append('res_id',this.r_id);
  formdata.append('venue_id',this.venueid);
  formdata.append("menu_url",this.compose_url);
  formdata.append("bitly_url",this.url2)
  this.dataServe.global_service(1,'/save_other_qr',formdata).subscribe(data=>{console.log(data)
  this.qrData=data;
  if(this.qrData.suc==1)
 {  ////this.spinner.hide();
   this.dataServe.global_service(0,'/get_url',`id=${this.r_id}&venue_id=${this.venueid}`).subscribe(data=>{console.log(data)
    this.menu_url_data=data;
    this.menu_url_data=this.menu_url_data.msg;
    // console.log(this.menu_url_data[0].image);
    this.getimageDynamic=this.menu_url_data[0].dynamic_img? this.getimageDynamic+this.menu_url_data[0].dynamic_img : this.getimageDynamic;
    this.getimageVCard=this.menu_url_data[0].v_card_img? this.getimageVCard+this.menu_url_data[0].v_card_img : this.getimageVCard;
    this.getimageLagunaFun=this.menu_url_data[0].fun_directory_img? this.getimageLagunaFun+this.menu_url_data[0].fun_directory_img : this.getimageLagunaFun;
    console.log(this.getimagepath+" "+this.getimageDynamic+" "+this.getimageVCard+" "+this.getimageLagunaFun)
    this.imgcheck=this.menu_url_data[0].image ? true : false;
    console.log("imgcheck="+this.imgcheck);
    this.menulength=this.menu_url_data.length;
    console.log("length="+this.menulength)
    this.file_qr='';
    this.file_qr_name='';
    this.fileDiv=document.getElementById('myFile');
    this.fileDiv.value=null
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
}
  else{
   this.msg.errorMsg('EU')
  }
  }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
  
  )
}
// copying the dynamic url
copy_URL(dyn_url:any){
  this.createURlDiv=document.createElement('input');
  this.urlDiv=document.getElementById('url_div');
  this.urlDiv.appendChild(this.createURlDiv);
  this.createURlDiv.value=dyn_url
  this.createURlDiv.select();
  document.execCommand('copy');
  this.createURlDiv.remove()
  this.m="URL Copied!"
  this.msg.globalSuccess(this.m)
  this.copyurl=false;
  setTimeout(()=>{

    this.copyurl=true;
  },3000)
  }
  // copying bitly url
  copy_bitlyURL(dyn_url:any){
    this.createURlDiv=document.createElement('input');
    this.urlDiv=document.getElementById('url_div_bitly');
    this.urlDiv.appendChild(this.createURlDiv);
    this.createURlDiv.value=dyn_url
    this.createURlDiv.select();
    document.execCommand('copy');
    this.createURlDiv.remove()
    this.m="URL Copied!"
    this.msg.globalSuccess(this.m)
    // this.copyurl=false;
    this.copybitlyurl=false;

    debugger
    setTimeout(()=>{
  
      this.copybitlyurl=true;
    },3000)
    }
    // generate bitly url
  gen_bitly(dyn_url:any){
    //this.spinner.show();
    var dt={
      "url": dyn_url,
      "res_id":this.r_id
    }
      this.dataServe.global_service(1,'/create_bitly_url',dt).subscribe(data=>{console.log(data)
      this.bitlyData=data;
      this.url2=this.bitlyData.msg
      ////this.spinner.hide()
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
    }
    // disable the special menu on clicking on the check box
    disabled_sp_menu(){
      this.disablediv=document.getElementById('disable_check');
      console.log(this.disablediv)
      if(this.disablediv.checked){
        this.check_sp=true;
        this.disable_sp=false;
      }
      else{
        this.check_sp=false
        this.disable_sp=true;
      }
      console.log(this.disable_sp)
    }
    open_venue_qr(id:any){
//            this.venueid=id;
//            this.dataServe.get_venue_menu(this.r_id, null, id).subscribe(data=>{
//               console.log(data);
//               this.getMenus=data;
//               this.getMenus=this.getMenus.msg
             
          
//             })
//            this.getimageDynamic=environment.api_url+'/';
//  this.getimageVCard=environment.api_url+'/';
//  this.getimageLagunaFun=environment.api_url+'/';
//            this.compose_url=this.url1.replace(this.url1.split('/')[6],btoa(this.r_id+'/'+this.venueid))
//            console.log(this.compose_url)
//            this.dataServe.get_menu_url(this.r_id,id).subscribe(data=>{console.log(data)
//             this.menu_url_data=data;
//             this.menu_url_data=this.menu_url_data.msg;
//             // console.log(this.menu_url_data[0].image);
//             this.getimageDynamic=this.menu_url_data[0].dynamic_img? this.getimageDynamic+this.menu_url_data[0].dynamic_img : this.getimageDynamic;
//             this.getimageVCard=this.menu_url_data[0].v_card_img? this.getimageVCard+this.menu_url_data[0].v_card_img : this.getimageVCard;
//             this.getimageLagunaFun=this.menu_url_data[0].fun_directory_img? this.getimageLagunaFun+this.menu_url_data[0].fun_directory_img : this.getimageLagunaFun;
//             console.log(this.getimagepath+" "+this.getimageDynamic+" "+this.getimageVCard+" "+this.getimageLagunaFun)
//             this.imgcheck=this.menu_url_data[0].image ? true : false;
//             console.log("imgcheck="+this.imgcheck);
//             this.menulength=this.menu_url_data.length;
//             console.log("length="+this.menulength)
//             this.file_qr='';
//             this.file_qr_name='';
//             this.fileDiv=document.getElementById('myFile');
//             this.fileDiv.value=null
//           })
          
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
          openPreview(v:any){
            const dialogRef = this.dialog.open(DialogBoxComponent, {
              // width: '250px',
              data: { flag: 'imgPrev', content: v }
            });
          }
 get_about_us(v:any){
  this.dataServe.global_service(0,'/aboutus',`hotel_id=${this.r_id}&id=${v}`).subscribe(data=>{console.log(data)
        this.aboutusData=data;
          this.about_text_readonly=this.aboutusData.msg[0].about_us;
        })

 } 
 getConfigMenu() {
  this.dataServe.global_service(0, '/config_menu', '').subscribe(data => {
    console.log(data)
    this.get_configData = data; //api call to fetch footer color, greeting color and navigation bar
    this.get_configData = this.get_configData.msg;
    this.menubodCol = this.get_configData[0].footer_color;
    this.menutextCol = this.get_configData[0].text_color;
    this.greettextCol = this.get_configData[0].greet_text_color;
    this.editorText = this.get_configData[0].footer_content

  },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
} 
post_style(bodcol: any, txtcol: any, greetcol: any) {
  // alert(bodcol+" "+txtcol+" "+this.editorText+" "+greetcol)
  var dt = {
    "foo_col": bodcol,
    "foo_con": this.editorText,
    "txt_col": txtcol,
    "greet_col": greetcol
  }

  this.dataServe.global_service(1, '/config_menu', dt).subscribe(data => {
    console.log(data)
    this.configData = data;
    if (this.configData.suc == 1) {
      this.dataServe.global_service(0, '/config_menu', '').subscribe(data => {
        console.log(data)
        this.get_configData = data;
        this.get_configData = this.get_configData.msg
        this.menubodCol = this.get_configData[0].footer_color;
        this.menutextCol = this.get_configData[0].text_color;
        this.greettextCol = this.get_configData[0].greet_text_color;
        this.editorText = this.get_configData[0].footer_content
        this.msg.successMsg('SS')

      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
    }
    else {
      this.msg.errorMsg('ES')
    }

  },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
}      
}
