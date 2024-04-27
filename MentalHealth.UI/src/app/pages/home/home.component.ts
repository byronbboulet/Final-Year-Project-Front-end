import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post } from '../../../models/post';
import { MentalHealthPostService } from '../../services/mental-health-post.service';
import { CommonModule } from '@angular/common'; // Add this import
import { EditPostComponent } from '../../components/edit-post/edit-post.component'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, EditPostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'MentalHealth.UI';
  posts: Post[] = []; 
  postToEdit?: Post;

  constructor(private mentalHealthPostServices:  MentalHealthPostService) {}

  //retrieves posts from sql server using .NET Web api
  ngOnInit(): void {
    this.mentalHealthPostServices.getMentalHealthPost().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  // creates new post look at line 1 in app.component.html
  initNewPost() {
    this.postToEdit = new Post();
  }

  updatePostList(posts: Post[]) {
    this.posts = posts;
  }

  editPost(post: Post) { 
    this.postToEdit = post;
  }
}
