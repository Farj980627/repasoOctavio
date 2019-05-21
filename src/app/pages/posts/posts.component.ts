import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsRemote: any ;

  posts=[
    {
      titulo:'Titulo 1',
      cuerpo:'No ha habido actividad desde hace 1440 o más segundos; inicie sesión nuevamente.'
  },
  {
    titulo:'Titulo 2',
    cuerpo:'No ha habido actividad desde hace 1440 o más segundos; inicie sesión nuevamente.'
},
{
  titulo:'Titulo 3',
  cuerpo:'No ha habido actividad desde hace 1440 o más segundos; inicie sesión nuevamente.'
}
  ];
  
  
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.postsRemote = this.dataService.getPosts();
   // this.dataService.getPosts()
    //.subscribe(posts=>{
      //this.postsRemote=posts;
     // console.log(posts);
    //});
  }

  onClickPadre(id) {
console.log(id)
  }
}
