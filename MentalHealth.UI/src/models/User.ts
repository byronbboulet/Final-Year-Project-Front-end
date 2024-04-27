export class User {
    id?: number;
    username?: string;
    email?: string;
    passwordHash?: string;
    profileImage?: string;

    constructor(id: number, username: string, email: string, password: string, profileImage: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.passwordHash = password;
        this.profileImage = profileImage;
    }
}
