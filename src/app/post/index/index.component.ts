import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit{

  posts:Post[]=[];

  constructor(private postService:PostService){}

  ngOnInit(): void {
      this.postService.getPosts().subscribe((data:any)=>{
        this.posts = data;
        console.log(this.posts);
      })
  }

}
