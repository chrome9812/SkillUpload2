import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {FileStatus} from '../models/file-status'
const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit {
  title = 'app';
fileStatus1: FileStatus = {};
fileStatus2: FileStatus = {};


  fileStatusHistory = [this.fileStatus1,this.fileStatus2];

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
    this.fileStatus1.fileName="xyz";
    this.fileStatus1.status="zzz";
    this.fileStatus2.fileName="xxxxx";
    this.fileStatus2.status="FAIL";

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
 }
}
