import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit{
  id!:number;
  post!:Post;
  editForm!:FormGroup;

  constructor(
    private postService:PostService,
    private router:Router,
    private activeRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
      this.id = Number(this.activeRoute.snapshot.params['postId']);
      this.postService.findById(this.id).subscribe((data:Post)=>{
        this.post = data;
      })
  }

}
