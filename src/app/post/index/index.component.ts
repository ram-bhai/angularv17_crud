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
      })
  }

  deletePost(id:number){
    this.postService.delete(id).subscribe((data:any)=>{
      this.posts = this.posts.filter((item)=> item.id !== id);
      alert("Post has been deleted successfully !!");
    })
  }

}
