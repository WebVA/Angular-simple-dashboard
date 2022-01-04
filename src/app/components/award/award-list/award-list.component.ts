import { Component, OnInit } from '@angular/core';
import { Award } from '../../../shared/models/award';
import { Router } from '@angular/router';
import {DataSource} from '@angular/cdk/table';


const ELEMENT_DATA: Award[] = [
  { AwardCode: 'code1', AwardTitleAr: 'titleAr', AwardTitleEn: "titleEn", AwardDescAr: "descAr", AwardDescEn: "descEn", AwardShortNameAr: "shortAr", AwardShortNameEn: "shortEn" },
  { AwardCode: 'code2', AwardTitleAr: 'titleAr', AwardTitleEn: "titleEn", AwardDescAr: "descAr", AwardDescEn: "descEn", AwardShortNameAr: "shortAr", AwardShortNameEn: "shortEn" },
  { AwardCode: 'code3', AwardTitleAr: 'titleAr', AwardTitleEn: "titleEn", AwardDescAr: "descAr", AwardDescEn: "descEn", AwardShortNameAr: "shortAr", AwardShortNameEn: "shortEn" },
  { AwardCode: 'code4', AwardTitleAr: 'titleAr', AwardTitleEn: "titleEn", AwardDescAr: "descAr", AwardDescEn: "descEn", AwardShortNameAr: "shortAr", AwardShortNameEn: "shortEn" },
  { AwardCode: 'code5', AwardTitleAr: 'titleAr', AwardTitleEn: "titleEn", AwardDescAr: "descAr", AwardDescEn: "descEn", AwardShortNameAr: "shortAr", AwardShortNameEn: "shortEn" },
  { AwardCode: 'code6', AwardTitleAr: 'titleAr', AwardTitleEn: "titleEn", AwardDescAr: "descAr", AwardDescEn: "descEn", AwardShortNameAr: "shortAr", AwardShortNameEn: "shortEn" }

];
@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.css']
})
export class AwardListComponent implements OnInit {
  displayedColumns: string[] = ['AwardCode', 'AwardTitleEn', 'AwardDescEn', 'AwardShortNameEn'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: Award[] = ELEMENT_DATA;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  addAward() {
    this.router.navigate(['add-aword'])
  }
}
