import { Injectable } from '@angular/core';
import { Post } from '../../models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MentalHealthPostService {
  private url = 'MentalHealthPost';

  constructor(private http: HttpClient) { }

  public getMentalHealthPost(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://localhost:7036/api/MentalHealthPost`);
  }

  // Create Post (Backend): MentalHealthPostService sends a POST request to the backend, 
  // which creates the new post in the database and returns the updated list of posts.
  //returns results
  public createPost(post: Post): Observable<Post[]> {
    console.log(post);
    return this.http.post<Post[]>(
      `https://localhost:7036/api/MentalHealthPost`,
      post
    );
  }

  public updatePost(post: Post): Observable<Post[]> {
    return this.http.put<Post[]>(
      `https://localhost:7036/api/MentalHealthPost`,
      post
    );
  }
  public deletePost(post: Post): Observable<Post[]> {
    return this.http.delete<Post[]>(
      `https://localhost:7036/api/MentalHealthPost/${post.id}`
    );
  }
}
