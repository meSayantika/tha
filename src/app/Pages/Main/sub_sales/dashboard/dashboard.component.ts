import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  subprofileInfo!: FormGroup;

  constructor(private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder,private router:Router,private dataserve:DataService,private msg: MessageService,public dialog: MatDialog) { }

  ngOnInit() {

    this.subprofileInfo = this.formBuilder.group({
      agent_name: ['',Validators.required],
      address: ['',Validators.required],
      phone: ['',Validators.required],
      whatsapp: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
    });

  }
  get f() { return this.subprofileInfo.controls }
  
}
