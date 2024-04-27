import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../models/post';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MentalHealthPostService } from '../../services/mental-health-post.service';
@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})

/* When a post is created, updated, or deleted, EditPostComponent 
emits an updated list of posts via this event. AppComponent then 
updates its posts array with the new list, reflecting the changes. */
export class EditPostComponent {
@Input() post?: Post | undefined;
// postUpdated is returned to the parent component you can find it in line 33 in app.component.html,
@Output() postUpdated = new EventEmitter<Post[]>();

  constructor(private postService: MentalHealthPostService) { }

  ngOnInit(): void {
  }

  updatePost(post: Post) {
    //backend call to update post look at services\mental-health-post.service.ts 
    //then updates postUpdated in line 33 in home.component.html in pages directory
    this.postService
      .updatePost(post)
      .subscribe((posts: Post[])  => this.postUpdated.emit(posts)
      );
  }

  deletePost(post: Post) {
    //backend call to delete post then updates front end look at services\mental-health-post.service.ts 
    //then updates postUpdated in line 33 in home.component.html pages directory
    this.postService
      .deletePost(post)
      .subscribe((posts: Post[]) => this.postUpdated.emit(posts));
  }

  createPost(post: Post) {
    //backend call to create post look at services\mental-health-post.service.ts 
    //then updates postUpdated in line 33 in home.component.html pages directory
    console.log('createPost', post);
    let data = localStorage.getItem('userData');
    console.log('localStorage => ', data);
    post.profileImage = JSON.parse(data!).profileImage;
    post.username = JSON.parse(data!).username;
    post.userId = JSON.parse(data!).userId;
    this.postService.createPost(post)
      .subscribe((posts: Post[]) => this.postUpdated.emit(posts));
  }
}
