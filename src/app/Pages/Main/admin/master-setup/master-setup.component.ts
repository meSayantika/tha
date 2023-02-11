import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
import { environment } from 'src/environments/environment';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
@Component({
  selector: 'app-master-setup',
  templateUrl: './master-setup.component.html',
  styleUrls: ['./master-setup.component.css']
})
export class MasterSetupComponent implements OnInit {
  categories: any
  imageData: any
  dispCross: any;
  select_div: any;
  file_div: any
  emailbodyData: any
  deleteId: any
  emailtype: any
  editorText3 = ''
  menuchoiceData: any
  menubodCol = '#ffffff'
  menutextCol = '#ffffff';
  greettextCol = '#ffffff'
  emailType: any
  emailbodyreadonly = ''
  concatdatalength3: any
  editorText = '';
  getData: any
  Zoomout = true;
  ZoomIn = true;
  modal = true;
  stockImageName: any
  croppedImage: any;
  Modal: any;
  crop_height: any;
  crop_width: any;
  stock_file1: any;
  modal_close_oncrop: any;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter the footer content...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
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
  config2: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter event instructions...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
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
  config3: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter email body...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
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
  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter birthday instructions...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
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
  img_cover: any;
  selectemail: any;
  menuInsData: any
  selectemailbody: any;
  concatdatalength2: any;
  menu_instruction = '';
  laguna: any;
  menuchoiceData1: any;
  get_configData: any;
  gethelpText: any;
  menu_readonly: any;
  calendar_readonly: any;
  qrcs_readonly: any;
  bdad_readonly: any;
  circ_readonly: any;
  editorText1: any;
  editorText2: any;
  event_img: any;
  cover_img: any;
  conf_text_readonly: any;
  configData: any;
  helpData: any;
  insbody: any;
  postConfData: any;
  helpTextId: any;
  el: any;
  scale = 1;
  // transform: any;
  transform: ImageTransform = {};
  showCropper = false;
  // menuchoiceData:any;
  hide = false;
  valu = true;
  coverImageName:any
  constructor(private dataServe: DataService, private msg: MessageService, public dialog: MatDialog) { }
  url1 = environment.api_url + '/stock/'
  ngOnInit() {
    this.getCategoryList()
    this.getImages('');
    this.getEmails()
    this.getAllMenus()
    this.getConfigMenu()
    this.getHelpSection()
  }
  show_cross() {
    this.dispCross = false;
  }
  hide_cross() {
    this.dispCross = true
  }
  deleteImg(v: any) {
    console.log(v)
    this.deleteId = v;
    this.openDialog('delete', v)
  }
  pic_select(v: any) {
    this.imageData.length = 0;
    console.log(v);
    this.getImages(v)
  }
  getHelpSection() {
    this.dataServe.global_service(0, '/help_text', '').subscribe(data => {
      console.log(data)
      this.gethelpText = data; //api call to fetch help section, menu instructions, calendar, birthday, default cover image, default event image
      this.gethelpText = this.gethelpText.msg;
      console.log({ id: this.gethelpText });

      this.helpTextId = this.gethelpText.length > 0 ? this.gethelpText[0].id : 0;
      console.log(this.helpTextId);

      this.menu_readonly = this.gethelpText[0].menu_help;
      this.calendar_readonly = this.gethelpText[0].calender_help;
      this.qrcs_readonly = this.gethelpText[0].qr_help;
      this.bdad_readonly = this.gethelpText[0].birthday_help;
      this.circ_readonly = this.gethelpText[0].cantact_info_help;
      this.editorText1 = this.gethelpText[0].birthday_body;
      this.editorText2 = this.gethelpText[0].event_body;
      this.event_img = environment.api_url + '/' + this.gethelpText[0].event_img
      this.cover_img = environment.api_url + '/' + this.gethelpText[0].cover_img

      this.conf_text_readonly = this.gethelpText[0].order_conf

    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
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
  em_select(v: any) {
    this.emailbodyreadonly = ''
    this.emailType = v
    this.dataServe.global_service(0, '/email_body', `id=${v}`).subscribe(data => {
      console.log(data)
      this.emailbodyData = data;
      // this.emailbodyreadonly=this.emailbodyData.msg[0].email_body
      this.editorText3 = this.emailbodyData.msg[0].email_body
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

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
  cat_select() { }
  getEmails() {
    this.dataServe.global_service(0, '/get_email_type', '').subscribe(data => {
      console.log(data)
      this.emailtype = data;  //api call to fetch email categories
      this.emailtype = this.emailtype.msg
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  cover_image_change(e: any) {this.crop_width=1800;
    this.crop_height=500;
    console.log(this.crop_width+" "+this.crop_height)
    this.coverImageName=e.target.files[0].name;
    // console.log(this.cropround)
    console.log(e.target.files[0])
    // this.logoname=e.target.files[0].name;
    // this.logo_file=e.target.files[0];
    this.img_cover=e;
    this.stock_file1=document.getElementById('logo_crop');
    this.stock_file1.click(); }
  getCategoryList() {
    this.dataServe.global_service(0, '/category_list', '').subscribe(data => {
      this.categories = data;
      this.categories = this.categories.msg
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  restrict3(e: any) {
    this.concatdatalength3 = e.target.value.length;
    console.log(this.concatdatalength2)
  }
  getImages(id: any) {
    this.dataServe.global_service(0, '/stock_img', `cat_id=${id}`).subscribe(data => {
      console.log(data);
      this.imageData = data;
      this.imageData = this.imageData.msg
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  reset_stock() {
    this.select_div = document.getElementById('pickup_place_stock_img');
    this.file_div = document.getElementById('headTitle_stock');
    this.select_div.value = '';
    this.file_div.value = null;
  }
  post_em_body(type: any) {
    console.log(this.editorText3)
    if (type) {
      var dt = {
        "email_type": type,
        "body": this.editorText3,
        "user": "admin@gmail.com"
      }
      this.dataServe.global_service(1, '/email_body', dt).subscribe(data => {
        console.log(data)
        this.em_select(type);
        this.getData = data
        if (this.getData.suc > 0)
          this.msg.successMsg('SS')
        else
          this.msg.errorMsg('ES')

        this.concatdatalength2 = 0;
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
    }
    else {
      this.msg.globalError('Category cannot be blank!')
    }

  }
  post_ins_body(v1: any, v2: any) {
    if (v1) {
      var dt = {
        "info": v2,
        "id": v1,
        "user": "admin@gmail.com"
      }
      this.dataServe.global_service(1, '/get_menu_dtls', dt).subscribe(data => {
        console.log(data)
        this.menuInsData = data;
        if (this.menuInsData.suc == 1) {
          this.menu_sel(v1)
          this.msg.successMsg('SS')
          this.reset_ins()

        }
        else {
          this.msg.errorMsg('ES')
        }

      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
    }
    else {
      this.msg.globalError('Menu cannot be blank!')
    }
  }
  reset_ins() {
    this.selectemail = document.getElementById('pickup_place_menu_ins');
    this.selectemail.value = '';
    this.selectemailbody = document.getElementById('em_ins');
    this.selectemailbody.value = '';
    this.emailbodyreadonly = '';
    this.concatdatalength3 = 0
  }
  reset_email_body() {
    this.selectemail = document.getElementById('pickup_place_email_body');
    this.selectemail.value = '';
    // this.selectemailbody=document.getElementById('em_bd');
    // this.selectemailbody.value='';
    this.emailbodyreadonly = '';
    this.concatdatalength2 = 0
    this.editorText3 = ''
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
  post_help(menu: any, cal: any, qr: any, bdad: any, contact_info: any) {
    var dt = {
      "id": this.helpTextId,
      "menu_help": menu,
      "cal_help": cal,
      "qr_help": qr,
      "bir_help": bdad,
      "con_help": contact_info,
      "user": "admin@gmail.com"
    }
    this.dataServe.global_service(1, '/help_text', dt).subscribe(data => {
      console.log(data)
      this.helpData = data;
      if (this.helpData.suc == 1) {
        this.dataServe.global_service(0, '/help_text', '').subscribe(data => {
          console.log(data)
          this.gethelpText = data;
          this.gethelpText = this.gethelpText.msg;
          this.menu_readonly = this.gethelpText[0].menu_help;
          this.calendar_readonly = this.gethelpText[0].calender_help;
          this.qrcs_readonly = this.gethelpText[0].qr_help;
          this.bdad_readonly = this.gethelpText[0].birthday_help;
          this.circ_readonly = this.gethelpText[0].cantact_info_help;
          this.editorText1 = this.gethelpText[0].birthday_body;
          this.editorText2 = this.gethelpText[0].event_body
          this.conf_text_readonly = this.gethelpText[0].order_conf
          this.msg.successMsg('SS')
        },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
      }
      else {
        this.msg.errorMsg('ES')
      }
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  post_ev_ins() { //for uploading events for instruction concerning birthdays and events
    // alert(this.editorText1+" "+this.editorText2)
    var dt = {
      "bir_text": this.editorText1,
      "event_text": this.editorText2,
      "user": "admin@gmail.com"
    }
    this.dataServe.global_service(1, '/other_text', dt).subscribe(data => {
      console.log(data)
      this.insbody = data;
      if (this.insbody.suc == 1) {
        this.msg.successMsg('SS')
        this.dataServe.global_service(0, '/help_text', '').subscribe(data => {
          console.log(data)
          this.gethelpText = data;
          this.gethelpText = this.gethelpText.msg;

          this.editorText1 = this.gethelpText[0].birthday_body;
          this.editorText2 = this.gethelpText[0].event_body
        },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

      }
      else {
        this.msg.errorMsg('ES')

      }
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  post_conf_msg(v: any) {
    // alert(v);
    var dt = { "order_conf": v, "user": "admin@gmail.com" };
    this.dataServe.global_service(1, '/order_conf', dt).subscribe(data => {
      console.log(data)
      this.postConfData = data;
      if (this.postConfData.suc == 1) {
        this.msg.successMsg('SS')

      }
      else {
        this.msg.errorMsg('ES')

      }
      this.dataServe.global_service(0, '/help_text', '').subscribe(data => {
        console.log(data)
        this.gethelpText = data;
        this.gethelpText = this.gethelpText.msg;

        this.conf_text_readonly = this.gethelpText[0].order_conf

      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  getAllMenus() {
    var v = 0
    this.dataServe.global_service(0, '/get_menu_dtls', `id=${v}`).subscribe(data => {
      console.log(data)
      this.menuchoiceData = data;
      this.menuchoiceData = this.menuchoiceData.msg
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  menu_sel(v: any) {
    console.log(v)
    this.menu_instruction = ''
    this.dataServe.global_service(0, '/get_menu_dtls', `id=${v}`).subscribe(data => {
      console.log(data)

      this.menuchoiceData1 = data;

      this.menuchoiceData1 = this.menuchoiceData1.msg;
      this.menu_instruction = this.menuchoiceData1[0].info
      this.concatdatalength3 = this.menu_instruction.length
      console.log(this.menuchoiceData1, this.menu_instruction)

    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  openDialog(f: any, v: any) {
    // const dialogRef = this.dialog.open(DialogBoxComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    console.log(f, v)
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '250px',
      data: { flag: f, content: v }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, f)
      if (f == 'delete' && result == 1 && f != 'imgPrev') {
        debugger;
        console.log(this.deleteId);
        this.dataServe.global_service(1, '/del_stock_img', `id=${this.deleteId}`).subscribe(data => {
          console.log(data)
          this.getData = data;
          if (this.getData.suc > 0)
            this.getImages('')
          else
            this.msg.errorMsg('ED')
        }, error => {
        this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)
      })
        }
      // });
    })
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
  close_modal_on_crop() {
    this.modal_close_oncrop = document.getElementById('id01');
    this.modal_close_oncrop.style.display = 'none'
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
  // function called when the image is cropped
  imageCropped(event: ImageCroppedEvent) {
    console.log('imagecropped');
    // event.width=this.crop_width;
    // event.width=this.crop_height;
    console.log("width:" + event.width);
    console.log("height:" + event.height)
    this.croppedImage = event.base64;
    // this.preview_for_stock=this.croppedImage
    console.log(this.croppedImage);
  }
  cropperReady(sourceImageDimensions: Dimensions) {
    console.log('Cropper ready', sourceImageDimensions);
    console.log("cropper ready CROPPED IMAGE:" + this.croppedImage);
  }
  loadImageFailed() {
    console.log('Load failed');
  }
  stock_image_change(e: any) {
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
    console.log("hello")
  }
  // clicking on the save button after cropping the image
  click_it() {
    // this.cover_change=true;
    this.valu = true;
    this.img_cover = this.croppedImage;
    console.log("Cropped Image:" + this.croppedImage);
    // this.Breakfast_cover_preview=false;
    this.el.style.display = 'none'
  }
  close_it() {
    this.valu = true;
    this.Modal = document.getElementById('myfile');
    this.Modal.value = null;

  }
  submit_cover_image(){
     
    if(this.img_cover){
      const formdata = new FormData();
  formdata.append('cover_img', this.img_cover);
  formdata.append('cover_filename', this.coverImageName);
 
      this.dataServe.global_service(1,'/dif_cov_img_save',formdata).subscribe(data=>{console.log(data)
        this.getData=data
        if(this.getData.suc>0)
        this.getHelpSection()
        else
        this.msg.errorMsg('ES')
         
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)
}
   )
      
      
     
    //  this.selectStock.value='';
   
    }
    else{
     this.msg.globalError('Blank input not allowed!')
    }

  }
  submit_stock_image(v: any) {

    if (v && this.img_cover) {
      console.log("Submitted" + " " + this.stockImageName);
      console.log(this.img_cover);
      const formdata = new FormData();
      formdata.append('stock_img', this.img_cover);
      formdata.append('stock_filename', this.stockImageName);
      formdata.append('cat_id', v);
      this.dataServe.global_service(1, '/stock_img', formdata).subscribe(data => {
        console.log(data)
        this.getData = data
        if (this.getData.suc > 0)
          this.getImages('')
        else
          this.msg.errorMsg('ES')

      }, error => { this.msg.globalError(error) })

      //  this.selectStock.value='';

    }
    else {
      this.msg.globalError('Blank input not allowed!')
      // console.log("Empty Field")
    }

  }
  submit_event_image() {
    if (this.img_cover) {
      console.log("Submitted" + " " + this.stockImageName);
      console.log(this.img_cover);
      const formdata = new FormData();
      formdata.append('dif_img', this.img_cover);
      formdata.append('filename', this.stockImageName);
      formdata.append('user', 'admin@gmail.com');
      this.dataServe.global_service(1, '/dif_img_save', formdata,).subscribe(data => {
        console.log(data)
        this.getData = data
        if (this.getData.suc > 0)
          this.getHelpSection()
        else
          this.msg.errorMsg('ES')

      }, error => { this.msg.globalError(error) })
    }
    else {
      this.msg.globalError('Blank input not allowed!')
    }

  }
}
