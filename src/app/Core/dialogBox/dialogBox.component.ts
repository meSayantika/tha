import { Component, OnInit,Inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/Services/data.service';
import { environment } from 'src/environments/environment';
import { MessageService } from 'src/app/Services/message.service';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms'
import { IDropdownSettings} from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-dialogBox',
  templateUrl: './dialogBox.component.html',
  styleUrls: ['./dialogBox.component.css']
})
export class DialogBoxComponent implements OnInit {
  @ViewChild('emailQ')emailQ!:ElementRef;
  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;
  regForm!: FormGroup;
  searchForm!: FormGroup;
  addVipForm!:FormGroup
  countryData: any;
  countries:any
  timezone:any
  regData:any
  email_data:any
  exist:any
  exist_number=false
  emailAddr:any
  getData:any
  urlSet=environment.api_url+'/'
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  sectionData:any
  audFilePlay:any;
  audPath=new Audio();
  filteredFruits: Observable<string[]> | undefined;
  vipData:any
  VIP: string[] = ['Cindy'];
  // allVIP: string[] = ['Cindy', 'Brian', 'Shubham', 'Tanmoy', 'Somnath', 'Sayantika Babuni'];
  allVIP:any
  showError=false
  m:any
  getVIPList:any
  // 
  // dropdownList = [];
  // selectedItems = [];
  // dropdownSettings = {};

dropdownList = [
    { item_id: 1, item_text: 'Mumbai' },
    { item_id: 2, item_text: 'Bangaluru' },
    { item_id: 3, item_text: 'Pune' },
    { item_id: 4, item_text: 'Navsari' },
    { item_id: 5, item_text: 'New Delhi' }
  ];
  // selectedItems = [
  //   { item_id: 3, item_text: 'Pune' },
  //   { item_id: 4, item_text: 'Navsari' }
  // ];
  selectedItems=[]
  dropdownSettings:IDropdownSettings = {
    // singleSelection: false,
    // idField: 'item_id',
    // textField: 'item_text',
    // selectAllText: 'Select All',
    // unSelectAllText: 'UnSelect All',
    // itemsShowLimit: 3,
    // allowSearchFilter: true
    //singleSelection: false,
    idField: 'id',
    textField: 'user_name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  // 
  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, private msg:MessageService,
    @Inject(MAT_DIALOG_DATA) public data: any,private formBuilder: FormBuilder,private dataServe:DataService) { 
      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allVIP.slice())),
      );
    }

  ngOnInit() {
    console.log(this.data)
    // this.m=this.data.content
    if(this.data.flag=='menuPrev'){
   this.sectionData = Object.keys( this.data.content?.arr[this.data.content?.key])
  //  this.sectionData = this.data.content.arr[this.data.content.key]
  console.log(this.sectionData)
   //  console.log(section)
    // console.log(this.data.content.arr, this.data.);
    }
    // console.log(Object.keys(this.data.content?.arr[this.data.content?.key]))
    // for(let sec of this.sectionData){
    //     for(let m of  this.data.content?.arr[this.data.content?.key][sec].res){
    //         console.log(m);
    //     }
    // console.log(sec)
    // }
    // }
   
    if(this.data.flag=='msgPrev')
    this.urlSet=environment.api_url+'/'+this.data.content?.path
    this.regForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      mail: ['', [Validators.required,Validators.email]],
      addr1: ['', [Validators.required]],
      addr2: ['', [Validators.required]],
      cityState: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      country: ['', [Validators.required]],
      website: ['', [Validators.required]],
      timeZone: ['', [Validators.required]],

    });
    this.addVipForm=this.formBuilder.group({
     
      vipStruct:this.formBuilder.array([]),
    })
    this.addVip()
    this.searchForm=this.formBuilder.group({
      from:['',Validators.required],
      to:['',Validators.required]
    })
    this.dataServe.global_service(0,'/country','').pipe(map((x: any) => x.msg)).subscribe(data=>{
      this.countryData=data;
      console.log(this.countryData);

    })
    this.dataServe.local_service(environment.timezoneUrl).subscribe(data=>{
      console.log(data);
      this.timezone=data;
    })
   if(this.data.flag=='singleVIP'){
    console.log(this.data.content)
    this.dataServe.global_service(0,'/guest_user',`hotel_id=${this.data.content.hotel_id}&flag=${this.data.content.flag}`).subscribe(data=>{
      console.log(data);
      this.allVIP=data
      this.selectedItems=this.data.content.audience
      console.log(this.selectedItems)
    })
   }
  // if(this.data.flag=='addVIP'){
  //   this.selectedItems=this.data.content.audience
  //   console.log(this.selectedItems)
  // }
  //  
  
  // 
  }
  get vip() {
    return this.addVipForm.controls.vipStruct as FormArray;
  }
  addVip(){
    const vipForm = this.formBuilder.group({
      name:['',Validators.required],
      phone:['',Validators.required],
      check_in:['',Validators.required],
      check_out:['',Validators.required],
  });
  this.vip.push(vipForm);
  // console.log(this.rest_dtls)
  }
  removeVip(i:any){
  
    this.vip.removeAt(i)
    // if(id>0){
    //   this.dataServe.global_service(0,'/proposal_dtls_del',`id=${id}`).subscribe(data=>{
    //     console.log(data)
    //   },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

    // }
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.VIP.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.VIP.indexOf(fruit);

    if (index >= 0) {
      this.VIP.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.VIP.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allVIP.filter((fruit:any) => fruit.toLowerCase().includes(filterValue.toLowerCase()))
  }
  ngAfterViewInit(){
    this.emailAddr=this.emailQ
    this.emailAddr.nativeElement.value=this.data.content
  }
  get f(){
    // if(this.data.flag=='registration')
    return this.regForm?.controls}

  onClose(v:any): void {
    this.dialogRef.close(v);
  }
  check_mail(e:any){
    console.log(e.target.value);
    if(e.target.id=='em'){

    
    this.dataServe.global_service(0,'/email_check',`Email=${e.target.value}`).subscribe(data=>{
      console.log(data)
    this.email_data=data;
    if(this.email_data.suc==2)
     {
      this.msg.globalWarning('This email already exists')
    }
    else if(this.email_data.suc==1)
     {

      //  this.show_msg=false;
      }
    else
    {}
 
    })
  }
  // check if the telephone number is an existing one
  else if(e.target.id=='tel'){
    this.dataServe.global_service(0,'/mobile_check',`no=${e.target.value}`).subscribe(data=>{

      console.log(data);
      this.exist=data;
      if(this.exist.suc==2){
        this.exist_number=true;
          this.msg.globalWarning('This number already exists');
       
      }
      else{
        this.exist_number=false;
      }
    })
  }
  }
  regSubmit(){
   var dt={
    "Name":this.f.name.value,
    "Contact":this.f.contact.value,
    "Telephone":this.f.phone.value,
    "Email":this.f.mail.value,
    "Address1":this.f.addr1.value,
    "Address2":this.f.addr2.value,
    "cityState":this.f.cityState.value,
    "zip":this.f.zip.value,
    "country":this.f.country.value,
    "Website":this.f.website.value,
    "time_zone":this.f.timeZone.value
    
   }
   this.dataServe.global_service(1,'/registration',dt).subscribe(data=>{
     this.regData=data;
     if(this.regData.suc>0)
     {this.onClose(1); this.msg.successMsg('SS')}
      else
      { this.onClose(0); this.msg.errorMsg('ES')}
   },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

  }
  sendmail(){
    console.log(this.emailAddr.nativeElement.value)
    var dt={
      "email":this.emailAddr.nativeElement.value,
      "hotel_id":localStorage.getItem('rid'),
      "user":"admin@gmail.com"
    }
    this.dataServe.global_service(1,'/send_quest',dt).subscribe(data=>{
      this.getData=data
      if(this.getData.suc>0)
       this.msg.globalSuccess('Email sent successfully!')
      else
       this.msg.globalError('Problem sending the email!')
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
    this.onClose(1)
  }
  search_dates(){
    if(this.searchForm?.controls.from.value<this.searchForm?.controls.to.value)
    {this.onClose({from:this.searchForm?.controls.from.value,to:this.searchForm?.controls.to.value}); this.showError=false}
    else
    this.showError=true
  }
  playAudio(){
    this.audFilePlay= this.audFilePlay=environment.api_url+'/'+this.data.content.data.sound_path
    this.audPath.src = this.audFilePlay
    this.audPath.load();
    this.audPath.play();
  }
  stopAudio(){
   
    this.audPath.pause();
  }
updateVip(){
  console.log(this.addVipForm)
  console.log(this.data.content.hotel_id,this.data.content.user)
  var dt={
    user:this.data.content.user,
    hotel_id:this.data.content.hotel_id,
    user_type:'V',
    user_dt:this.addVipForm.value.vipStruct
  }
  this.dataServe.global_service(1,'/add_vip',dt).subscribe(data=>{
    console.log(data)
  this.vipData=data
  if(this.vipData.suc>0)
    {
      this.msg.successMsg('SS')
      this.onClose(1)

    }
  else{
    this.msg.successMsg('ES')

  }

},error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  console.log(dt)
}

onItemSelect(item: any) {
  console.log(item);
  console.log(this.selectedItems)

}
onSelectAll(items: any) {
  console.log(items);
  console.log(this.selectedItems)

}
showVipList(){
  console.log(this.selectedItems)
  this.onClose(this.selectedItems)
}

}
