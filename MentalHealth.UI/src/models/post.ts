export class Post {
    id?: number;
    userId?: number;
    username = "";
    profileImage = "";
    postTitle = "";
    postLabel = "";
    postMediaUri = "";
    postTime = new Date();
    likes = 0;
    comments = 0;
}
