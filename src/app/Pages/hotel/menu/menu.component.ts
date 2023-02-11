import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Calendar } from '@fullcalendar/core'; //to be uncommented
// import { CalendarOptions } from '@fullcalendar/angular'; //to be uncommented
// 
// import interactionPlugin from '@fullcalendar/interaction'; // for selectable
// import dayGridPlugin from '@fullcalendar/daygrid';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// 
// import listPlugin from '@fullcalendar/list';  //to be uncommented
// import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { AngularEditorConfig } from '@kolkov/angular-editor';
// import tippy from 'tippy.js'; //to be uncommented
import { TooltipComponent } from '@angular/material/tooltip';
// import { ConnectionService } from 'connection-service';
// import { ConnectionService } from 'ngx-connection-service';
import { ThisReceiver } from '@angular/compiler';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
// export interface event {
//   id: any;
//   title: string;
//   date: any;
//   Time: any;
//   headliner: any,
//   tkt_url: any,
//   description: any,
//   imageUrl: any;
//   allDay: boolean,
//   event_title: any,
//   backgroundColor: any,
//   borderRadius: any,
//   start:any;

// }
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[DatePipe]
})
export class MenuComponent implements OnInit {
  calId: any;
  config1: AngularEditorConfig = {
    editable: false,
    spellcheck: true,
    showToolbar: false,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold'], ['link',
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
  event_img1: any;
  sp_menuid: any;
  u_event_name: any;
  u_event_date: any;
  u_event_time: any;
  u_event_url: any;
  bgcol = 'red';
  u_event_email: any;
  show_anim = true;
  tp = "pacman";
  sp_posid: any;
  sp_back: any;
  sp_font: any;
  sp_notice: any;
  sp_head: any;
  promoq1: any;
  promoq2: any;
  promoq3: any;
  greet: any;
  button_show = true;
  moremenu: any;
  promo_flag: any;
  promo_intro: any;
  promo_img: any;
  promo_q1: any;
  err_flag = 0;
  userData: any;
  promo_q2: any;
  promo_q3: any;
  authdiv: any;
  ev_dt: any;
  ev_dt1: any;
  promo_pop_title: any;
  promo_pop_body: any;
  fname: any;
  lname: any;
  email: any;
  logomenu: any;
  bdate: any;
  adate: any;
  mobile: any;
  pq1val: any;
  pq2val: any;
  pq3val: any;
  event_flag: any;
  hasNetworkConnection: any;
  hasInternetAccess: any;
  status: string = '';

  rest_name: any;
  rest_id: any;
  modalopen: any;
  modalopen1: any;
  modalopen2: any;
  t: any;
  hiddeneventid: any;
  sp_only = false;
  start: any;
  arrayk1: any = [];
  end: any;
  rid: any;
  arrayMenu: any = [];
  openevent: any;
  myArr: any = [];
  divCal: any;
  menuData: any = [];
  l:any;
  sec_array: any = [];
  item_array: any = [];
  item_array1 = [];
  cal_flag = 1;
  menu_id: any;
  c = 1;
  modal4: any;
  emptymenu: any;
  m = '';
  arrayK: any = [];
  x: any;
  authdt = '';
  secData: any;
  topimage: any;
  secData_mod: any;
  coverimage: any;
  url1 = environment.api_url
  menuImages: any;
  cov: any;
  keyData: any = [];
  overlapData: any;
  overlap: any;
  ueventData: any;
  specialData: any = [];
  spdescData: any;
  spdesc_text_readonly = ''
  stockImg1: any;
  cat_name: any;
  spstockImg: any;
  special_flag: any;
  menu_show = 'A';
  geteve: any = [];
  geteve1: any = [];
  img_prop: any;
  mod: any;
  moddo: any;
  title = 'myproject';
  start_date: any;
  inp: any
  event_name: any = '';
  desc: any = '';
  Url: any = '';
  headliner: any = '';
  today = new Date();
  time: any;
  is_more = 'N';
  more_overlap = false;
  more_menu_id: any;
  more_st_time: any;
  more_end_time: any;
  get_configData: any;
  menubodCol: any;
  menutextCol: any;
  greettextCol: any;
  editorText: any;
  privacy = '';
  auth = '';
  col: any;
  f_col = 'rgb(255, 255, 255)';
  template_spinner = "<img height='200' width='200' style='margin-top: -70%;' src='/assets/images/sll-logo.png'>"
  // template_spinner=''
  bgspinner = 'rgb(0,0,0)'
  gethelpText: any;
  event_img: any;
  show_type = false;
  olddt: any = 1;
  venueid: any;
  getVenues: any = [];
  // Event1: event[] = []; //to be uncommented
  // Event: event[] = [  //to be uncommented

    // { title: 'event 1', start: '2021-09-22',end: '2021-09-30'},
    // { title: 'event 2', start: '2021-06-30',end:'2021-07-01' }
  // ];  // to be uncommented
  r: any;
  footertextid: any
  promoData: any;
  // calendarOptions!: CalendarOptions; //to be uncommented
  venuid: any;
  eveTime: any;
  serve_id:any
  restaurant_id:any
  colors_arr = ['#ff0206', '#196d17', '#17256d', '#e1ff02', '#000000']
  constructor(private datePipe: DatePipe,private router: Router, private activatedRoute: ActivatedRoute, private admin_data: DataService,private msg:MessageService) {
    // const name = Calendar.name;  // to be uncommented
    
    //   }
    // });

  }
  ngOnInit(): void {
    // ngAfterViewInit(): void {
    // 
    this.t = "Loading..."
    // fetching promotional data
    this.admin_data.global_service(0,'/adm_promo_dt','').subscribe(data => {
      console.log(data)
      this.promoData = data;
      this.promoData = this.promoData.msg
      this.privacy = this.promoData[0].privacy;
      this.auth = this.promoData[0].authorization;
      this.col = this.promoData[0].back_color;
      // this.reset_priv()
    })
    // this.rest_name = this.activatedRoute.snapshot.params['rname'];
    this.serve_id= atob( this.activatedRoute.snapshot.params['serve_id'])
    this.restaurant_id= atob( this.activatedRoute.snapshot.params['rid'])
    this.admin_data.global_service(0,'/static_menu',`hotel_id=${this.restaurant_id}&res_id=${this.serve_id}`).subscribe(data=>console.log(data))
    this.r = this.rest_id
    console.log(this.router.url)
    localStorage.setItem('menu_url', environment.Redirect_url + this.router.url.split('/menu/')[1])
    console.log(localStorage.getItem('menu_url'))
    // this.rest_name = this.activatedRoute.snapshot.params['rname'];
    // this.rest_id = this.activatedRoute.snapshot.params['rid'];
    console.log(atob(this.rest_id))
    // fetching data from url
    // this.r = this.rest_name + '/' + this.rest_id
    console.log(this.r)
    this.rest_id = atob(this.rest_id);
   
    this.myArr = this.rest_id.split('/');
    this.rid = this.myArr[0];
    this.venuid = this.myArr[1];

    this.start = this.myArr[2];
    this.end = this.myArr[3];
    this.menu_id = this.myArr[4];
    this.special_flag = this.menu_id != 5 ? 'N' : 'Y';
    console.log(this.menu_id);

    this.greet = this.menu_id == 1 ? 1 : (this.menu_id == 2 ? 2 : (this.menu_id == 5 ? 5 : 3))
    console.log(this.greet);
    //  fetching calendar details
    // calender_dtls(res_id:any,venueid:any, flag:any, date:any){
    //   var date_flag = date ? `&date=${date}` : '';
    //   return this.http.get(environment.api_url+'/calender_dtls?id='+res_id+'&venue_id='+venueid+'&flag='+flag + date_flag);
    // }
    this.admin_data.global_service(0,'/calender_dtls',`id=${this.rid}&venue_id=${this.venuid}&flag=1`).subscribe(data => {
      // console.log(data);

      // ////this.spinner.hide()
      console.log(data);
      this.geteve = data;
      // for(let i=0;i<this.geteve.msg.length;i++){
      //  this.Event= this.Event.concat({
      //   id:this.geteve.msg[i].id>0?this.geteve.msg[i].id:0,
      //   event_title:this.geteve.msg[i].event_name,
      //   title:'',
      //        date:this.geteve.msg[i].event_date,
      //        Time:this.geteve.msg[i].event_time,
      //        headliner:this.geteve.msg[i].event_title,
      //        tkt_url:this.geteve.msg[i].tkt_url,
      //        description:this.geteve.msg[i].description,
      //    imageUrl:this.geteve.msg[i].img_path ? this.geteve.msg[i].img_path : '',
      //    backgroundColor:'#188038',

      //        allDay:true
      //      })
      // }
      // this.l = 1;
      
      // alert(this.geteve.msg.length)
      for (let i = 0; i < this.geteve.msg.length; i++) {
        // this.l= new Date(this.geteve1.msg[i].event_date.setDate(this.geteve1.msg[i].event_date.getDate()+1));
        var d = new Date(this.geteve.msg[i].event_date);
        var dd = this.datePipe.transform(d,"yyyy-MM-dd");
        console.log(this.datePipe.transform(d,"yyyy-MM-dd"));
        
        console.log(new Date(new Date(this.geteve.msg[i].event_date).getDate()+1));
        // this.Event = this.Event.concat({
        //   id: this.geteve.msg[i].id > 0 ? this.geteve.msg[i].id : 0,
        //   event_title: this.geteve.msg[i].event_name,
        //   title: this.geteve.msg[i].event_name,
        //   date: this.geteve.msg[i].event_date,
        //   Time: this.geteve.msg[i].event_time,
        //   start: dd + 'T' +this.geteve.msg[i].event_time,
        //   headliner: this.geteve.msg[i].event_title,
        //   tkt_url: this.geteve.msg[i].tkt_url,
        //   description: this.geteve.msg[i].description,
        //   imageUrl: this.geteve.msg[i].img_path ? this.geteve.msg[i].img_path : '',
        //   backgroundColor: this.geteve.msg[i].event_col?this.geteve.msg[i].event_col:'#5F9EA0',
        //   // backgroundColor:'white',
        //   borderRadius: '50%',
        //   allDay: false
        // }) //to be uncommented
        this.olddt = this.geteve.msg[i].event_date
      }
      // console.log(this.Event.length)
    })
    // setInterval(() => {
    // this.calendarOptions = {
    //   initialView: 'listMonth',
    //   timeZone: 'local',
    //   weekends: true,
    //   eventDurationEditable: true,
    //   eventStartEditable: true,
    //   aspectRatio: 3.25,
    //   displayEventTime: true,
    //   eventDisplay: 'list-item',
    //   // dayMaxEventRows: true,
    //   // views: {
    //   //   timeGrid: {
    //   //     dayMaxEventRows: 2
    //   //   }
    //   // },
    //   // plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    //   // plugins: [dayGridPlugin, interactionPlugin],
    //   // initialView: 'dayGridDay',
    //   // initialView: 'listWeek',
    //   validRange: {
    //     start: this.today,
    //   },
    //   // headerToolbar: {
    //   //   center: 'dayGridMonth,timeGridFourDay' // buttons for switching between views
    //   // },
    //   // views: {
    //   //   timeGridFourDay: {
    //   //     type: 'timeGrid',
    //   //     duration: { days: 4 },
    //   //     buttonText: '4 day'
    //   //   }
    //   // },
    //   // initialView: 'dayGridWeek',
    //   // headerToolbar: {
    //   //   left: 'prev,next',
    //   //   center: 'title',
    //   //   right: 'dayGridDay,dayGridWeek'
    //   // },
    //   headerToolbar: {
    //     end: 'prev,next today',
    //     center: 'title',
    //     start: 'listMonth'

    //   },


    //   eventClick: this.eventclick.bind(this),
    //   droppable: false,
    //   themeSystem: 'material',
    //   selectable: true,
    //   navLinks: true,
    //   editable: false,
    //   dateClick: this.opendate.bind(this),
    //   events: this.Event,
    //   height: 700
    // };
    // this.calendarOptions = {
    //   initialView: 'listMonth',
    //   timeZone: 'local',
    //   weekends: true,
    //   eventDurationEditable: true,
    //   eventStartEditable: true,
    //   aspectRatio: 3.25,
    //   displayEventTime: true,
    //   eventDisplay: 'list-item',
    //   // dayMaxEventRows: true,
    //   // views: {
    //   //   timeGrid: {
    //   //     dayMaxEventRows: 2
    //   //   }
    //   // },
    //   validRange: {
    //     start: this.today,
    //   },
    //   headerToolbar: {
    //     end: 'prev,next today',
    //     center: 'title',
    //     start: 'listMonth'

    //   },
    //   eventClick: this.eventclick.bind(this),
    //   droppable: false,
    //   themeSystem: 'material',
    //   selectable: true,
    //   navLinks: true,
    //   editable: false,
    //   dateClick: this.opendate.bind(this),
    //   // events: this.Event,
    //   events: this.Event,
    //   height: 700
    // }; //to be uncommented
    // }, 100)
    // clearInterval(interval);
    // setInterval(() => {
    // this.calendarOptions = {
    //   initialView: 'listWeek',
    //   headerToolbar: {
    //     left: 'prev,next today',
    //     center: 'title',
    //     right: 'dayGridMonth,listWeek'
    //   },
    //   dayMaxEvents: true, // allow "more" link when too many events
    //   events: [
    //     { title: 'event 1', date: '2022-02-02' },
    //     { title: 'event 1', date: '2022-02-02' },
    //     { title: 'event 1', date: '2022-02-02' },
    //     { title: 'event 1', date: '2022-02-03' },
    //     { title: 'event 1', date: '2022-02-03' },
    //     { title: 'event 1', date: '2022-02-03' },
    //     { title: 'event 1', date: '2022-02-01' },
    //     { title: 'event 1', date: '2022-02-01' },
    //     { title: 'event 1', date: '2022-02-01' },
    //     { title: 'event 2', date: '2022-02-04' },
    //   ],
    //   height: 700
    // };
    // }, 500)




    // this.greet=this.menu_id==1?'Good Morning':(this.menu_id==2?'Good Afternoon':'Good Evening')
    console.log(this.menu_id)
    // fetching special menu data
    this.admin_data.global_service(0,'/get_special_data',`id=${this.rid}&menu_id=${this.menu_id}`).subscribe(data => {
      console.log(data)

      this.spdescData = data;
      this.spdescData = this.spdescData.msg
      this.spdesc_text_readonly = this.spdescData[0].menu_desc;
      this.stockImg1 = this.spdescData[0].img_path;
      this.cat_name = this.spdescData[0].cat_name
      this.spstockImg = environment.api_url + '/stock/' + this.spdescData[0].img_path;
      // this.imgcat=this.spdescData[0].img_catg
      console.log(this.spstockImg);
    })

    // fetching data for special notice
    this.admin_data.global_service(0,'/notice',`id=${this.rid}&menu_id=${this.menu_id}`).subscribe(data => {
      console.log(data)
      this.specialData = data;
      this.specialData = this.specialData.msg;
      this.sp_menuid = this.specialData[0].menu_id;
      this.sp_posid = this.specialData[0].position_id;
      this.sp_back = this.specialData[0].back_color;
      this.sp_font = this.specialData[0].font_color;
      this.sp_head = this.specialData[0].header_title;
      this.sp_notice = this.specialData[0].notice_content;
    })
    var dt = {
      "id": this.rid,
      "st_time": this.start,
      "end_time": this.end,
      "menu_id": this.menu_id,
      "flag": 0
    }
    // static menu preview
    if (this.start) {
      this.is_more = 'N'

      this.admin_data.global_service(0,'/check_menu',`id=${dt.id}&st_time=${dt.st_time}&end_time=${dt.end_time}&menu_id=${dt.menu_id}&flag=${dt.flag}`).subscribe(data => {
        console.log(data)
        this.overlapData = data
        this.overlapData = this.overlapData.msg
        console.log(this.overlapData.length)


        if (this.menu_id != 5)
        //when the menu is not special menu and there is no overlap
        {
          if (this.overlapData.length == 1) {
            this.overlap = false;
  //           var menu_id = m_id > 0 ? m_id : '',
  // venue = v_id > 0 ? '&venue_id='+v_id : '';
  // return this.http.get(environment.api_url+'/menu_setup?id='+res_id + '&menu_id=' + menu_id + venue)
            this.admin_data.global_service(0,'/menu_setup',`id=${this.rid}&menu_id=${this.menu_id}`).subscribe(data => {
              console.log(data)
              this.menuImages = data;
              this.logomenu = data;
              this.logomenu = this.menuImages.logo_dt
              this.menuImages = this.menuImages.oth_dt;
              for (let i = 0; i < this.menuImages.length; i++) {
                if (this.menuImages[i].menu_id == this.menu_id) {
                  // fetching logo
                  this.topimage = this.url1 + '/' + this.logomenu[i].logo_path

                  // this.topimage=this.menuImages[i].top_image_img? this.url1+'/'+this.menuImages[i].top_image_img : ''
                  //  fetching cover image
                  this.cov = this.menuImages[i].cover_page_img ? this.url1 + '/' + this.menuImages[i].cover_page_img : this.url1 + '/' + this.menuImages[i].dif_img
                  console.log(this.cov)
                  console.log(this.menuImages[i].cover_page_img)
                }
              }
            }

            )
            this.admin_data.global_service(0,'/section',`id=${this.rid}&menu_id=${this.menu_id}`).subscribe(data => {
              console.log(data)
              this.secData = data;
              this.secData = this.secData.msg;


            })
            console.log(this.rid + " " + this.start + " " + this.end)
            var dt = {
              "id": this.rid,
              "st_time": this.start,
              "end_time": this.end,
              "menu_id": this.menu_id
            }
            // get promotions data and embed in the form
            // return this.http.get(environment.api_url+'/preview_menu?id='+ dt.id + '&st_time=' + dt.st_time + '&end_time=' + dt.end_time+'&menu_id='+dt.menu_id);
            this.admin_data.global_service(0,'/preview_menu',`id=${dt.id}&st_time=${dt.st_time}&end_time=${dt.end_time}&menu_id=${dt.menu_id}`).subscribe(data => {
              console.log(data)
              this.menuData = data;
              this.promo_intro = this.menuData.promo_dt.intro;
              this.promo_img = environment.api_url + '/stock/' + this.menuData.promo_dt.image;
              this.promo_pop_title = this.menuData.promo_dt.pop_up_offer_title;
              this.promo_pop_body = this.menuData.promo_dt.pop_up_offer_body;
              this.promo_flag = this.menuData.promo_flag;
              this.event_flag = this.menuData.event_flag;
              this.promo_q1 = this.menuData.promo_dt.questions1;
              this.promo_q2 = this.menuData.promo_dt.questions2;
              this.promo_q3 = this.menuData.promo_dt.questions3;
              this.menuData = this.menuData.res;
              if (this.menuData.length < 1)
                this.emptymenu = true;
              else
                this.emptymenu = false;
              this.arrayMenu.push(this.menuData)
              // console.log(this.arrayMenu)
              //  console.log(this.menuData['AÇAÍ'])



              var dt = new Array();
              for (let i = 0; i < this.secData.length; i++) {
                if (this.menuData[this.secData[i].section_name] != undefined) {
                  dt[this.secData[i].section_name] = this.menuData[this.secData[i].section_name]
                  this.arrayK[i] = dt[this.secData[i].section_name];
                  this.arrayk1[i] = this.secData[i].section_name
                }
              }
              console.log(dt);
              console.log(this.arrayK);
              console.log(this.arrayk1)
              for (let i = 0; i < this.arrayK.length; i++) {

                console.log(this.arrayK[i]);

              }
              let j = 0;
              //  dt = Object.keys(this.menuData).map((key) => {
              //   return {
              //    id: key,
              //    name: this.menuData[key]
              //   }
              //  })
              //  composing data for menus and sections
              for (const [key, value] of Object.entries(this.menuData)) {
                // dt[key] = value;
                this.keyData.push({ sec: key, itm: this.menuData[key].res, img: this.menuData[key].sec_img })
                // console.log(key, value);
              }
              console.log(this.keyData)

              //  this.arrayMenu.push(JSON.parse(this.keyData));
              //  console.log(this.arrayMenu)


            })
          }
          else if (this.overlapData.length > 1) {
            //  when there is an overlap of menus
            this.overlap = true;
            this.admin_data.global_service(0,'/menu_setup',`id=${this.rid}&menu_id=${this.menu_id}`).subscribe(data => {
              console.log(data)
              this.menuImages = data;
              this.topimage = this.url1 + '/' + this.menuImages.logo_path
              this.menuImages = this.menuImages.logo_dt;
              console.log(this.menuImages)


              console.log(this.topimage);
              // this.cov=this.menuImages[i].cover_page_img? this.url1+'/'+this.menuImages[i].cover_page_img : ''
              // console.log(this.cov)
              // console.log(this.menuImages[i].cover_page_img)


            }

            )
            //open an empty modal when no data is found
            this.open_modal2()
          }
          else {
            // alert("hello")
            this.overlap = false;
            this.emptymenu = true;
            // when there is no data
            this.open_menu(this.menu_id, this.start, this.end)
          }
        } else {
          //when it is special menu
          this.admin_data.global_service(0,'/menu_setup',`id=${this.rid}&menu_id=${this.menu_id}`).subscribe(data => {

            console.log(data)
            this.menuImages = data;
            this.logomenu = data;
            this.logomenu = this.menuImages.logo_dt;
            this.topimage = this.url1 + '/' + this.logomenu[0].logo_path;
            this.cov = this.url1 + '/' + this.menuImages.dif_img[0].dif_img
          })

          this.emptymenu = true;
          this.overlap = true;
          this.admin_data.global_service(0,'/check_special_overlap',`id=${this.rid}`).subscribe(data => {
            console.log(data)
            this.overlapData = data;
            this.overlapData = this.overlapData.msg

          })
        }
      })
    }
    // static preview ends
    // dynamic menu preview
    else {
      // alert("else")

    }
      this.admin_data.global_service(0,'/venue_data',`id=${this.rid}&venue_id=${this.venuid}`).subscribe(data => {
        console.log(data)
        this.menuImages = data;
        // fetching default cover image if there is none
        var dif_cov = this.menuImages.dif_img ? this.url1 + '/' + this.menuImages.dif_img : undefined;
        console.log(dif_cov)

        console.log(this.url1 + '/' + this.menuImages.dif_img);

        // checking whether there are additional menus
        this.is_more = this.menuImages.more_flag == 'Y' ? 'Y' : 'N'
        this.greet = this.menuImages.greet;
        this.overlapData = this.menuImages.menu_check;
        this.moremenu = this.is_more != 'N' ? this.menuImages.more_menu : '';
        // to check whether there are multiple additional menus
        this.more_overlap = this.is_more != 'N' ? (this.moremenu.length > 1 ? true : false) : false;
        if (!this.more_overlap && Array.isArray(this.moremenu)) {
          this.more_menu_id = this.moremenu[0].menu_id;
          this.more_st_time = this.moremenu[0].start_time;
          this.more_end_time = this.moremenu[0].end_time;
        } else {
          this.more_menu_id = 0
          this.more_st_time = 0
          this.more_end_time = 0
        }
        //fetching promo data for dynamic menu
        console.log(this.moremenu)
        this.menu_show = this.menuImages.menu_active_flag == 'Y' ? (this.menuImages.reg_menu_flag == 'A' ? 'A' : 'E') : 'A';
        this.special_flag = this.menuImages.menu_active_flag == 'Y' ? 'Y' : 'N';
        this.spdescData = this.menuImages.sp_menu;
        this.promo_intro = this.menuImages.promo_dt.intro;
        this.promo_img = environment.api_url + '/stock/' + this.menuImages.promo_dt.image;
        this.promo_pop_title = this.menuImages.promo_dt.pop_up_offer_title;
        this.promo_pop_body = this.menuImages.promo_dt.pop_up_offer_body;
        this.promo_flag = this.menuImages.promo_flag;
        this.event_flag = this.menuImages.event_flag;
        this.promo_q1 = this.menuImages.promo_dt.questions1;
        this.promo_q2 = this.menuImages.promo_dt.questions2;
        this.promo_q3 = this.menuImages.promo_dt.questions3;
        // this.privacy=this.menuImages.promo_dt.privacy;
        // this.auth=this.menuImages.promo_dt.authorization;
        // this.col=this.menuImages.prmo_dt.back_color
        console.log(this.menu_show)
        if (this.menu_show == 'E') { this.cov = undefined; }
        console.log(this.cov)
        // this.spdescData=this.spdescData.msg
        this.spdesc_text_readonly = this.spdescData.menu_desc;
        this.stockImg1 = this.spdescData.img_path;
        this.cat_name = this.spdescData.cat_name
        this.spstockImg = environment.api_url + '/stock/' + this.spdescData.img_path;
        console.log(this.overlapData);
        //when there is no overlapping data
        if (this.overlapData.length == 1) {
          this.overlap = false;
          //special menu
          if (this.menuImages.menu_check[0].menu_id == 5) {
            this.sp_only = true;
            this.emptymenu = false;
            this.admin_data.global_service(0,'/menu_setup',`id=${this.rid}&menu_id=${this.menu_id}`).subscribe(data => {
              console.log(data)
              this.menuImages = data;
              this.menuImages = this.menuImages.logo_dt;
              console.log(this.menuImages)

              this.topimage = this.url1 + '/' + this.menuImages[0].logo_path
              console.log(this.topimage);
              // this.cov=this.menuImages[i].cover_page_img? this.url1+'/'+this.menuImages[i].cover_page_img : ''
              // console.log(this.cov)
              // console.log(this.menuImages[i].cover_page_img)


            }

            )

            // this.topimage=this.url1+'/'+this.menuImages.logo_path
            this.overlap = false;
            console.log(this.url1 + '/' + this.menuImages);

            this.cov = this.menuImages.cov_img ? this.url1 + '/' + this.menuImages.cov_img : dif_cov;
            this.topimage = this.url1 + '/' + this.menuImages.logo_path

            // this.topimage=this.menuImages.top_img? this.url1+'/'+this.menuImages.top_img : ''

            console.log(this.sp_only)
            // this.cov='';
            console.log(this.cov)
          }
          // regular menus other than special menu
          else {
            // for crossover situation
            this.admin_data.global_service(0,'/menu_setup',`id=${this.rid}`).subscribe(data => {
              console.log(data)
              this.menuImages = data;
              this.logomenu = data;
              this.logomenu = this.menuImages.logo_dt
              this.topimage = this.url1 + '/' + this.logomenu[0].logo_path;
              console.log(this.topimage)
            })
            this.sp_only = false;
            this.cov = this.menuImages.cov_img ? this.url1 + '/' + this.menuImages.cov_img : dif_cov;
            console.log(this.menuImages.cov_img);
            console.log(dif_cov)
            console.log(this.cov)

          }
          // fetching special notice
          this.admin_data.global_service(0,'/notice',`id=${this.rid}&menu_id=${this.overlapData[0].menu_id}`).subscribe(data => {
            console.log(data)
            this.specialData = data;
            this.specialData = this.specialData.msg;
            this.sp_menuid = this.specialData[0].menu_id;
            this.sp_posid = this.specialData[0].position_id;
            this.sp_back = this.specialData[0].back_color;
            this.sp_font = this.specialData[0].font_color;
            this.sp_head = this.specialData[0].header_title;
            this.sp_notice = this.specialData[0].notice_content;
          })

          console.log(this.menuImages.cov_img);
          this.topimage = this.url1 + '/' + this.menuImages.logo_path

          // this.topimage=this.menuImages.top_img? this.url1+'/'+this.menuImages.top_img : ''
          console.log(this.topimage + " " + this.cov)
          if (this.menu_show == 'E' && this.special_flag == 'Y')
            this.cov = dif_cov;
          else
            this.cov = this.menuImages.cov_img ? this.url1 + '/' + this.menuImages.cov_img : dif_cov;
          console.log(this.cov)
          console.log(this.menuImages.res);
          // check if there is no menu
          if (Object.entries(this.menuImages.res).length === 0 && this.menuImages.res.constructor === Object) {
            this.emptymenu = false;

            console.log(this.topimage + " " + this.cov)
          }
          else
            this.emptymenu = false;
          for (const [key, value] of Object.entries(this.menuImages.res)) {
            // dt[key] = value;
            this.keyData.push({ sec: key, itm: this.menuImages.res[key].res, img: this.menuImages.res[key].sec_img })
            // console.log(key, value);
          }
          console.log(this.keyData)
          // for overlapping of menu
        } else if (this.overlapData.length > 1) {
          this.overlap = true;
          // fetching data for menus (top and logo images)
          this.admin_data.global_service(0,'/menu_setup',`id=${this.rid}`).subscribe(data => {
            console.log(data)
            this.menuImages = data;
            this.menuImages = this.menuImages.logo_dt;
            console.log(this.menuImages)
            this.cov = this.menuImages.cov_img ? this.url1 + '/' + this.menuImages.cov_img : dif_cov;

            console.log(dif_cov)
            this.topimage = this.url1 + '/' + this.menuImages[0].logo_path
            console.log(this.topimage);



          }

          )
          this.open_modal2();
        }
        else {
          this.emptymenu = true;
          this.overlap = false;
          console.log(this.url1 + '/' + this.menuImages.dif_img)
          this.topimage = this.url1 + '/' + this.menuImages.logo_path
          // fetching only the images when there is no menu
          // this.topimage=this.menuImages.top_img? this.url1+'/'+this.menuImages.top_img : ''
          this.cov = this.menuImages.cov_img ? this.url1 + '/' + this.menuImages.cov_img : this.url1 + '/' + this.menuImages.dif_img;
          // this.topimage=this.url1+'/'+this.menuImages[0].logo_path
          this.admin_data.global_service(0,'/menu_setup',`id=${this.rid}&menu_id=${this.menu_id}`).subscribe(data => {
            console.log(data)
            this.menuImages = data;
            this.menuImages = this.menuImages.logo_dt;
            console.log(this.menuImages)

            this.topimage = this.url1 + '/' + this.menuImages[0].logo_path
            console.log(this.topimage);
            // this.cov=this.menuImages[i].cover_page_img? this.url1+'/'+this.menuImages[i].cover_page_img : ''
            // console.log(this.cov)
            // console.log(this.menuImages[i].cover_page_img)


          })
          // this.cov=undefined;
        }
      })
    
    // dynamic menu preview ends
    //     this.admin_data.get_menu_urls(this.rid).subscribe(data=>{console.log(data)
    //        this.menuImages=data;
    //        this.menuImages=this.menuImages.oth_dt;
    //        for(let i=0;i<this.menuImages.length;i++)
    //        {
    //          if(this.menuImages[i].menu_id==this.menu_id)
    //          {
    //            this.topimage=this.menuImages[i].top_image_img? this.url1+'/'+this.menuImages[i].top_image_img : ''
    //            this.cov=this.menuImages[i].cover_page_img? this.url1+'/'+this.menuImages[i].cover_page_img : ''
    //          }
    //        }
    //     }

    //     )
    //    this.admin_data.get_section_data(this.rid,this.menu_id).subscribe(data=>{console.log(data)
    //    this.secData=data;
    //    this.secData=this.secData.msg;


    //   })
    //     console.log(this.rid+" "+this.start+" "+this.end)
    //     var dt={
    //       "id":this.rid,
    //       "st_time":this.start,
    //       "end_time":this.end
    //     }

    //     this.admin_data.get_menu_by_time(dt).subscribe(data=>{console.log(data)
    //     this.menuData=data;
    //      this.menuData=this.menuData.res;
    //      if(Object.entries(this.menuData).length === 0 && this.menuData.constructor === Object)
    //        this.emptymenu=true;
    //      else
    //        this.emptymenu=false;
    //       this.arrayMenu.push(this.menuData)
    //       // console.log(this.arrayMenu)
    //     console.log(this.menuData['AÇAÍ'])



    // var dt = new Array();
    //     for(let i=0;i<this.secData.length;i++){
    //     if(this.menuData[this.secData[i].section_name] != undefined){
    //           dt[this.secData[i].section_name] = this.menuData[this.secData[i].section_name]
    //           this.arrayK[i]=dt[this.secData[i].section_name];
    //           this.arrayk1[i]=this.secData[i].section_name
    //     }   
    //      }
    //      console.log(dt);
    //      console.log(this.arrayK);
    //      console.log(this.arrayk1)
    //      for(let i=0;i<this.arrayK.length;i++){

    //          console.log(this.arrayK[i]);

    //      }
    //      let j = 0;
    //     //  dt = Object.keys(this.menuData).map((key) => {
    //     //   return {
    //     //    id: key,
    //     //    name: this.menuData[key]
    //     //   }
    //     //  })
    //      for (const [key, value] of Object.entries(this.menuData)) {
    //       // dt[key] = value;
    //        this.keyData.push({sec: key, itm: this.menuData[key].res, img: this.menuData[key].sec_img})
    //       // console.log(key, value);
    //     }
    //     console.log(this.keyData)

    //     //  this.arrayMenu.push(JSON.parse(this.keyData));
    //     //  console.log(this.arrayMenu)


    //     })
    //fetching footer contents
    this.admin_data.global_service(0,'/config_menu','').subscribe(data => {
      console.log(data)
      this.get_configData = data;
      this.get_configData = this.get_configData.msg
      this.menubodCol = this.get_configData[0].footer_color;
      this.menutextCol = this.get_configData[0].text_color;
      this.greettextCol = this.get_configData[0].greet_text_color;
      this.editorText = this.get_configData[0].footer_content
      // this.footertextid=document.getElementsByName('footer_id');

      // this.footertextid.innerHTML=this.editorText;
      // console.log(this.footertextid)
    })
    // this.footertextid=document.getElementsByName('footer_id');
    // console.log(this.footertextid)

    // this.footertextid.innerHTML=this.editorText
    // console.log(this.editorText)
    setTimeout(() => {
      ////this.spinner.hide()

    }, 4000)
  }

open_modal() {
  this.modalopen = document.getElementById('id01')
  this.modalopen.style.display = 'block'
  if (this.overlap == true)
    this.overlap = true;
}
modalclose() {
  this.modalopen.style.display = 'none'
  if (this.overlap == true)
    this.overlap = true;
  console.log(this.overlap)
  // location.reload()

}
// single menu modal code ends here

// no-menu modal opens
open_modal1() {
  this.modalopen1 = document.getElementById('id02')
  this.modalopen1.style.display = 'block'
  // if(this.overlap==true)
  // this.overlap=true;
}
modalclose1() {
  this.modalopen1.style.display = 'none'
  // if(this.overlap=true)
  // this.overlap=true;
}
// no-menu modal code ends here

// overlap menu modal
open_modal2() {
  // this.overlap=true;
  console.log(this.overlap)
  this.modalopen2 = document.getElementById('id03')
  this.modalopen2.style.display = 'block'

}
modalclose2() {
  this.modalopen2.style.display = 'none'
  this.overlap = true;
  console.log(this.overlap)
  // this.ngOnInit();
}
open_menu(menuid: any, st: any, end: any) {
  console.log(menuid);
  this.greet = menuid == 1 ? 1 : (menuid == 2 ? 2 : (menuid == 5 ? 5 : 3))
  console.log(this.greet);

  this.admin_data.global_service(0,'/notice',`id=${this.rid}&menu_id=${menuid}`).subscribe(data => {
    console.log(data)
    this.specialData = data;
    this.specialData = this.specialData.msg;
    this.sp_menuid = this.specialData[0].menu_id;
    this.sp_posid = this.specialData[0].position_id;
    this.sp_back = this.specialData[0].back_color;
    this.sp_font = this.specialData[0].font_color;
    this.sp_head = this.specialData[0].header_title;
    this.sp_notice = this.specialData[0].notice_content;
  })
  if (this.overlap == true)
    this.overlap = true;
  this.keyData.length = 0;
  this.arrayk1.length = 0;
  this.arrayK.length = 0;
  console.log(menuid + " " + st + " " + end)

  this.admin_data.global_service(0,'/menu_setup',`id=${this.rid}&menu_id=${menuid}`).subscribe(data => {
    console.log(data)
    this.menuImages = data;
    this.logomenu = data;
    this.logomenu = this.logomenu.logo_dt;
    this.menuImages = this.menuImages.oth_dt;
    let i = 0;
    console.log(this.url1 + '/' + this.menuImages.dif_img);

    // for(let i=0;i<this.menuImages.length;i++)
    // {
    if (this.menu_id) {
      //   if(this.menuImages[i].menu_id==this.menu_id)
      //   {
      this.topimage = this.url1 + '/' + this.logomenu[i].logo_path

      // this.topimage=this.menuImages[i].top_image_img? this.url1+'/'+this.menuImages[i].top_image_img : ''
      this.cov = this.menuImages[i].cover_page_img ? this.url1 + '/' + this.menuImages[i].cover_page_img : this.url1 + '/' + this.menuImages[i].dif_img
      console.log(this.cov);
      //   }
    }
    else {
      if (this.menuImages[i].menu_id == menuid) {
        this.topimage = this.url1 + '/' + this.logomenu[i].logo_path

        // this.topimage=this.menuImages[i].top_image_img? this.url1+'/'+this.menuImages[i].top_image_img : ''
        this.cov = this.menuImages[i].cover_page_img ? this.url1 + '/' + this.menuImages[i].cover_page_img : this.url1 + '/' + this.menuImages[i].dif_img
      }
    }

  }
    //  }

  )
  this.admin_data.global_service(0,'/section',`id=${this.rid}&menu_id=${menuid}`).subscribe(data => {
    console.log(data)
    this.secData = data;
    this.secData = this.secData.msg;


  })
  console.log(this.rid + " " + this.start + " " + this.end)
  var dt = {
    "id": this.rid,
    "st_time": st,
    "end_time": end,
    "menu_id": menuid
  }
  // return this.http.get(environment.api_url+'/preview_menu?id='+ dt.id + '&st_time=' + dt.st_time + '&end_time=' + dt.end_time+'&menu_id='+dt.menu_id);
  this.admin_data.global_service(0,'/preview_menu',`id=${dt.id}&st_time=${dt.st_time}&end_time=${dt.end_time}&menu_id=${dt.menu_id}`).subscribe(data => {
    console.log(data)

    this.menuData = data;
    this.menuData = this.menuData.res;
    if (this.menuData.length < 1)
      this.emptymenu = true;
    else { this.emptymenu = false; }
    this.arrayMenu.push(this.menuData)
    // console.log(this.arrayMenu)
    //  console.log(this.menuData['AÇAÍ'])



    var dt = new Array();
    for (let i = 0; i < this.secData.length; i++) {
      if (this.menuData[this.secData[i].section_name] != undefined) {
        dt[this.secData[i].section_name] = this.menuData[this.secData[i].section_name]
        this.arrayK[i] = dt[this.secData[i].section_name];
        this.arrayk1[i] = this.secData[i].section_name
      }
    }
    console.log(dt);
    console.log(this.arrayK);
    console.log(this.arrayk1)
    for (let i = 0; i < this.arrayK.length; i++) {

      console.log(this.arrayK[i]);

    }
    let j = 0;
    //  dt = Object.keys(this.menuData).map((key) => {
    //   return {
    //    id: key,
    //    name: this.menuData[key]
    //   }
    //  })
    for (const [key, value] of Object.entries(this.menuData)) {
      // dt[key] = value;
      this.keyData.push({ sec: key, itm: this.menuData[key].res, img: this.menuData[key].sec_img })
      // console.log(key, value);
    }
    console.log(this.keyData)

    //  this.arrayMenu.push(JSON.parse(this.keyData));
    //  console.log(this.arrayMenu)
    if (this.emptymenu == false) {

      this.open_modal();
    }

  })
  // //this.spinner.hide()
}
openmodal4() {
  this.modal4 = document.getElementById('id04');
  this.modal4.style.display = 'block'
}
closemodal4() {
  this.modal4 = document.getElementById('id04');
  this.modal4.style.display = 'none'
}
open_calendar() {

  // this.calendarOptions = {
  //   initialView: 'listMonth',
  //   timeZone: 'local',
  //   weekends: true,
  //   eventDurationEditable: true,
  //   eventStartEditable: true,
  //   aspectRatio: 3.25,
  //   displayEventTime: true,
  //   eventDisplay: 'list-item',
  //   // dayMaxEventRows: true,
  //   // views: {
  //   //   timeGrid: {
  //   //     dayMaxEventRows: 2
  //   //   }
  //   // },
  //   // plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
  //   // plugins: [dayGridPlugin, interactionPlugin],
  //   // initialView: 'dayGridDay',
  //   // initialView: 'listWeek',
  //   validRange: {
  //     start: this.today,
  //   },
  //   // headerToolbar: {
  //   //   center: 'dayGridMonth,timeGridFourDay' // buttons for switching between views
  //   // },
  //   // views: {
  //   //   timeGridFourDay: {
  //   //     type: 'timeGrid',
  //   //     duration: { days: 4 },
  //   //     buttonText: '4 day'
  //   //   }
  //   // },
  //   // initialView: 'dayGridWeek',
  //   // headerToolbar: {
  //   //   left: 'prev,next',
  //   //   center: 'title',
  //   //   right: 'dayGridDay,dayGridWeek'
  //   // },
  //   headerToolbar: {
  //     end: 'prev,next,today',
  //     center: 'title',
  //     start: 'listMonth'

  //   },


  //   eventClick: this.eventclick.bind(this),
  //   droppable: false,
  //   themeSystem: 'material',
  //   selectable: true,
  //   navLinks: true,
  //   editable: false,
  //   dateClick: this.opendate.bind(this),
  //   events: this.Event,
  //   height: 700
  // };

  this.openevent = document.getElementById('id05');
  this.openevent.style.display = 'block'

}
closemodal5() {
  this.openevent = document.getElementById('id05');
  this.openevent.style.display = 'none'
}
// eventclick(id: any) {
//   console.log(id.event._def.publicId)
//   // alert("hello")
//   this.hiddeneventid = id.event._def.publicId;
//   console.log(this.hiddeneventid + " " + this.rid)
//   // this.router.navigate(['/user_calendar',this.rid,1])
//   this.router.navigate(['/user_cal_dtls', btoa(this.hiddeneventid), btoa(this.rid),btoa(this.venuid),1])


// }
// handleDateClick(arg: any) {
//   console.log(arg)
//   // console.log(arg.changeView('dayGridDay'))
//   // this.calId=document.getElementById('cal');
//   // this.calId.changeView('dayGridDay', '2022-06-01');
//   console.log(this.calId)
//   // $('#calendar').fullCalendar('changeView', 'agendaDay', '2017-06-0events:1');
//   this.admin_data.calender_dtls(this.rid, this.venuid, 1, null).subscribe(data => {
//     // console.log(data);

//     // //this.spinner.hide()
//     console.log(data);
//     this.geteve = data;
//     for (let i = 0; i < this.geteve.msg.length; i++) {
//       this.Event = this.Event.concat({
//         id: this.geteve.msg[i].id > 0 ? this.geteve.msg[i].id : 0,
//         event_title: this.geteve.msg[i].event_name,
//         title: '',

//         date: this.geteve.msg[i].event_date,
//         Time: this.geteve.msg[i].event_time,
//         start: this.geteve.msg[i].event_date.split('Z')[0],

//         headliner: this.geteve.msg[i].event_title,
//         tkt_url: this.geteve.msg[i].tkt_url,
//         description: this.geteve.msg[i].description,
//         imageUrl: this.geteve.msg[i].img_path ? this.geteve.msg[i].img_path : '',
//         backgroundColor: 'white',
//         //  backgroundColor:'#188038',
//         borderRadius: '50%',
//         allDay: true
//       })
//     }
//   })
//   setInterval(() => {
//     this.calendarOptions = {
//       initialView: 'listWeek',
//       weekends: true,
//       eventDurationEditable: true,
//       eventStartEditable: true,
//       aspectRatio: 3.25,
//       // initialView: 'dayGridDay',
//       displayEventTime: false,
//       eventDisplay: 'list-item',

//       dayMaxEventRows: true,
//       views: {
//         timeGrid: {
//           dayMaxEventRows: 2
//         }
//       },

//       validRange: {
//         start: this.today,
//       },
//       headerToolbar: {
//         start: 'prev,next today',
//         center: 'title',
//         end: 'listWeek'
//       },

//       eventClick: this.eventclick.bind(this),
//       droppable: false,
//       themeSystem: 'material',
//       selectable: true,
//       navLinks: true,
//       editable: false,
//       // plugins: [interactionPlugin, dayGridPlugin],
//       eventDidMount: (info) => {
//         tippy(info.el, {

//           content: info.event._def.extendedProps.event_title + ": " + info.event._def.extendedProps.description,
//         })
//       },
//       dateClick: this.handleDateClick.bind(this),
//       // dateClick:this.handleDateClick(ThisReceiver),
//       events: this.Event,
//       height: 700
//     };
//   }, 500)

// }

openmodal6() {
  this.openevent = document.getElementById('id06');
  this.openevent.style.display = 'block'
}
openuserevent() {
  this.openevent = document.getElementById('usereventmodal');
  this.openevent.style.display = 'block'
}
closemodal7() {
  this.openevent = document.getElementById('usereventmodal');
  this.openevent.style.display = 'none'
}
closemodal6() {
  this.openevent = document.getElementById('id06');
  this.openevent.style.display = 'none'
}
auth_click() {
  // alert("hello")
  this.authdiv = document.getElementById('auth');

  if (this.authdiv.checked)
    this.button_show = false;
  else
    this.button_show = true;
}
opendate(arg: any) {
  this.divCal = document.getElementById('cal')
  this.divCal.setAttribute('initialView', 'dayGridDay')
  console.log(arg)
  // this.calendarOptions.changeView('timeGridDay', '2017-06-01');

  // this.calendarOptions.changeView();
  this.admin_data.global_service(0,'/help_text','').subscribe(data => {
    console.log(data)
    this.gethelpText = data;
    this.gethelpText = this.gethelpText.msg;

    this.event_img1 = this.gethelpText[0].event_img
    console.log(this.event_img1)
  })
  this.ev_dt = arg.dateStr;
  // alert(Number(this.ev_dt.split('-')[2])-1)
  // calender_dtls(res_id:any,venueid:any, flag:any, date:any){
  //   var date_flag = date ? `&date=${date}` : '';
  //   return this.http.get(url_set.api_url+'/calender_dtls?id='+res_id+'&venue_id='+venueid+'&flag='+flag + date_flag);
  // }
  
  this.admin_data.global_service(0,'/calender_dtls',`id=${this.rid}&venue_id=${this.venuid}&flag=${1+this.ev_dt}`).subscribe(data => {
    console.log(data);
    // this.Event.length=0;
   // this.Event1.length = 0 //to be uncommented
    // //this.spinner.hide()
    this.l = Number(this.ev_dt.split('-')[2]) - 1
    this.ev_dt1 = this.ev_dt.replace(this.ev_dt.split('-')[2], this.l.toString())
    console.log(data);
    this.geteve1 = data;
    let date = new Date();
   
    for (let i = 0; i < this.geteve1.msg.length; i++) {
      const d = new Date(this.geteve1.msg[i].event_date.setDate(this.geteve1.msg[i].event_date.getDate()+1));
      console.log(d);
      
      // alert("hello")
      // alert((this.geteve.msg[i].event_date).split('T')[0])
      // this.Event1 = this.Event1.concat({
      //   id: this.geteve1.msg[i].id > 0 ? this.geteve1.msg[i].id : 0,
      //   event_title: this.geteve1.msg[i].event_name,
      //   title: '',

      //   date: this.geteve1.msg[i].event_date,
      //   Time: this.geteve1.msg[i].event_time,
       

      //   start: this.geteve.msg[i].event_date.split('T')[0]+this.geteve1.msg[i].event_time,

      //   headliner: this.geteve1.msg[i].event_title,
      //   tkt_url: this.geteve1.msg[i].tkt_url,
      //   description: this.geteve1.msg[i].description,
      //   imageUrl: this.geteve1.msg[i].img_path ? this.geteve1.msg[i].img_path : this.event_img1,
      //   backgroundColor: '#188038',
      //   borderRadius: '50%',
      //   allDay: true
      // }) //to be uncommented


    }
  })

  // calendar

  this.open_ev_dtls()
}
myFunction() {
  this.x = document.getElementById("snackbar");
  this.x.className = "show";
  setTimeout(() => { this.x.className = this.x.className.replace("show", ""); }, 3000);
}
submit_promo_data() {
  // alert('Hello')
  this.err_flag = 0
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  this.fname = document.getElementById('fn')
  this.lname = document.getElementById('ln')
  this.email = document.getElementById('em')
  this.mobile = document.getElementById('mb')
  this.bdate = document.getElementById('bdate');
  this.adate = document.getElementById('adate')
  this.authdiv = document.getElementById('auth');
  if (this.authdiv.checked)
    this.authdt = 'Y'
  else
    this.authdt = 'N'
  if (this.fname.value == '') {
    this.err_flag = 1;
    this.m = "First Name is mandatory"
    this.msg.globalError(this.m)
    

  }
  else if (this.lname.value == '') {
    this.err_flag = 1;
    this.m = "Last Name is mandatory"
    this.msg.globalError(this.m)


  }
  else if (this.email.value == '') {
    this.err_flag = 1;
    this.m = "Email is mandatory"
    this.msg.globalError(this.m)



  }
  else if (!this.email.value.match(mailformat)) {
    this.err_flag = 1;
    this.m = "The email you've provided isn't valid"
    this.msg.globalError(this.m)

  }
  else if (!this.bdate.value && !this.adate.value) {
    this.err_flag = 1;
    this.m = "You need to provide atleast one date"
    this.msg.globalError(this.m)


  }

  else
    this.err_flag = 0


  if (this.promo_q1) {
    this.pq1val = document.getElementById('p_q1')
    this.promoq1 = this.pq1val.value
  }
  else
    this.promoq1 = ''
  if (this.promo_q2) {
    this.pq2val = document.getElementById('p_q2')
    this.promoq2 = this.pq2val.value
  }
  else
    this.promoq2 = ''
  if (this.promo_q3) {
    this.pq3val = document.getElementById('p_q3')
    this.promoq3 = this.pq3val.value;
  }
  else
    this.pq3val = ''



  if (this.err_flag == 0) {
    this.tp = "ball-newton-cradle"
    this.template_spinner = "<img height='200' width='200' style='margin-top: -70%;' src='/assets/images/addcalendar.gif'>"

    // this.bgspinner='rgb(108,151,161)'
    this.bgspinner = 'rgb(117,152,161)'
    this.f_col = 'rgb(212,227,237)'
    this.t = "Hold your breath, " + this.fname.value + " ! We are adding your dates..."
    //this.spinner.show();
    //   // alert("inside submit")
    //   console.log("First Name:"+this.fname.value)
    // console.log("Last Name:"+this.lname.value)
    // console.log("Email:"+this.email.value)
    // console.log("Question1:"+this.pq1val.value)
    // console.log("Question2:"+this.pq2val.value)
    // console.log("Question3:"+this.pq3val.value)
    // console.log("Mobile:"+this.mobile.value)
    // console.log("Birthday:"+this.bdate.value)
    // console.log("Anniversary:"+this.adate.value)
    var dt = {
      "res_id": this.rid,
      "f_name": this.fname.value,
      "l_name": this.lname.value,
      "birth_dt": this.bdate.value,
      "anni_dt": this.adate.value,
      "auth": this.authdt,
      "mob_no": this.mobile.value,
      "q_1": this.promoq1,
      "q_2": this.promoq2,
      "q_3": this.promoq3,
      "user": this.email.value,
      "email": this.email.value,
      "venue_id": this.venuid
    }
    console.log(dt);

    this.admin_data.global_service(1,'/promo_save',dt).subscribe(data => {
      console.log(data)
      this.userData = data;
      if (this.userData.suc == 1) {
        setTimeout(() => {
          //this.spinner.hide();
        }, 3000);
        setTimeout(() => {
          this.m = "Now that we have your date(s), we'll celebrate together! Let's have fun!"
          this.msg.globalWarning(this.m)
          this.reset_userform();
          this.show_anim = false;
          setTimeout(() => {
            this.show_anim = true;
          }, 5000);
        }, 3000);

      }
      else {
        //this.spinner.hide();

        this.m = "There was a problem while saving your data"
        this.msg.errorMsg('ES')
      }
    }, error => {
      //this.spinner.hide();

      this.m = "There was a problem while saving your data"
    })
  }

}
reset_userform() {
  this.fname = document.getElementById('fn')
  this.lname = document.getElementById('ln')
  this.email = document.getElementById('em')
  this.mobile = document.getElementById('mb')
  this.bdate = document.getElementById('bdate');
  this.adate = document.getElementById('adate')
  this.authdiv = document.getElementById('auth');
  this.pq1val = document.getElementById('p_q1');
  this.pq2val = document.getElementById('p_q2');
  this.pq3val = document.getElementById('p_q3')
  if (this.promo_q1)
    this.pq1val.value = '';
  if (this.promo_q2)
    this.pq2val.value = '';
  if (this.promo_q3)
    this.pq3val.value = '';

  this.fname.value = '';
  this.lname.value = '';
  this.email.value = '';
  this.mobile.value = '';
  this.adate.value = '';
  this.bdate.value = '';
  this.authdiv.checked = false;
}
submit_user_event() {
  this.template_spinner = "<img height='200' width='200' style='margin-top: -70%;' src='/assets/images/addevent.gif'>"
  this.t = "Processing... once we receive your request, it will soon be reviewed";
  this.tp = "ball-newton-cradle"
  this.bgspinner = 'rgb(254,183,60)'
  this.f_col = 'rgb(0,71,98)'
  //this.spinner.show()
  this.u_event_name = document.getElementById('en')
  this.u_event_date = document.getElementById('edt')
  this.u_event_email = document.getElementById('uem')
  this.u_event_url = document.getElementById('uurl')
  this.u_event_time = document.getElementById('etm')
  var dt = {
    "event_name": this.u_event_name.value,
    "event_date": this.u_event_date.value,
    "event_time": this.u_event_time.value,
    "event_title": '',
    "tkt_url": this.u_event_url.value,
    "description": '',
    "res_id": this.rid,
    "user": this.u_event_email.value,
    "id": 0,
    "user_type": 'U',
    "approval_flag": 'N',
    "venue_id": this.venuid

  }
  this.admin_data.global_service(dt,'','').subscribe(data => {
    console.log(data)
    this.ueventData = data;
    if (this.ueventData.suc == 1) {
      // {

      setTimeout(() => {

        //this.spinner.hide()
      }, 5000)
      
        this.m = "We might have a new event once it is approved!"
        this.msg.globalSuccess(this.m)
     


      // this.myFunction()
      this.closemodal7();

      this.u_event_name.value = '';
      this.u_event_date.value = '';
      this.u_event_time.value = '';
      this.u_event_url.value = '';
      this.u_event_email.value = '';
    }
    else {
      this.m = "Failure while submitting"
      this.msg.errorMsg('ES')
    }
  })

}
open_more() {
  this.openevent = document.getElementById('more_modal');
  this.openevent.style.display = 'block'

}
close_more() {
  this.openevent = document.getElementById('more_modal');
  this.openevent.style.display = 'none'
}
open_ev_dtls() {
  this.openevent = document.getElementById('ev_dtls_modal');
  this.openevent.style.display = 'block'
}
close_ev_dtls() {
  this.openevent = document.getElementById('ev_dtls_modal');
  this.openevent.style.display = 'none'
}
go_to_user_cal() {
  this.router.navigate(['/laguna_fun',this.venuid, this.rid])
  localStorage.setItem('rid', this.rid);
  //  this.router.navigate(['/user_calendar',this.rid,0])

}

}

