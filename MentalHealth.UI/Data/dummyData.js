import Post from './models/post'

const POSTS = [
    {
        id: 1,
        userId: "user123",
        username: "HopefulJourney",
        profileImage: "profileImageUri1.jpg",
        postTitle: "Finally Reached a Milestone!",
        postLabel: "Victory",
        postMediaUri: "postImageUri1.jpg",
        postTime: new Date("2024-02-10T10:00:00"),
        likes: 150,
        comments: 45
    },
    {
        id: 2,
        userId: "user456",
        username: "AnxiousExplorer",
        profileImage: "profileImageUri2.png",
        postTitle: "Need Advice on Managing Anxiety",
        postLabel: "Help",
        postMediaUri: "",
        postTime: new Date("2024-02-10T12:30:00"),
        likes: 75,
        comments: 30
    },
    {
        id: 3,
        userId: "user789",
        username: "SunnyThoughts",
        profileImage: "profileImageUri3.jpeg",
        postTitle: "Daily Dose of Positivity",
        postLabel: "Inspiration",
        postMediaUri: "postImageUri3.jpg",
        postTime: new Date("2024-02-10T08:00:00"),
        likes: 200,
        comments: 60
    },
    {
        id: 4,
        userId: "user101",
        username: "StrugglingSoul",
        profileImage: "profileImageUri4.svg",
        postTitle: "Having a Tough Week",
        postLabel: "Support",
        postMediaUri: "",
        postTime: new Date("2024-02-10T15:45:00"),
        likes: 125,
        comments: 50
    }
]

export default POSTS;