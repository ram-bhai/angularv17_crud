import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
      this.InitializePostCreationForm();
  }

  InitializePostCreationForm(){
    this.editForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('',Validators.required)
    })
  }

  get formControls(){
    return this.editForm.controls;
  }

  submit(){
    this.postService.update(this.id,this.editForm.value).subscribe((data:any)=>{
      alert("Post has been updated successfully!!");
      this.router.navigateByUrl('post/index');
    })
  }

}
