import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit{
  postCreationForm!:FormGroup;

  constructor(
    private postService:PostService, 
    private router:Router){}

  ngOnInit(): void {
     this.InitializePostCreationForm();
  }

  InitializePostCreationForm(){
    this.postCreationForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('',Validators.required)
    })
  }

  get formControls(){
    return this.postCreationForm.controls;
  }

  submit(){
    console.log(this.postCreationForm.value);
    this.postService.createPosts(this.postCreationForm.value).subscribe((data:any)=>{
      alert("Post has been added successfully!!");
      this.router.navigateByUrl('post/index');
    })
    
  }

}
