import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit {

  id!: number;
  post!: Post

  constructor(
    private postService: PostService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.activeRoute.snapshot.params['postId']);
    this.postService.findById(this.id).subscribe((res: Post) => {
      this.post = res;
    })
  }

}
