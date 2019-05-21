import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postRemote;

@Output() clickpost= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClickHijo(){
   // console.log(this.postRemote.id);
   this.clickpost.emit(this.postRemote.id);
  }

}
