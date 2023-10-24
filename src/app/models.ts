export interface Post {
    id: number;
    text: string;
    liked: boolean;
}

export interface News {
    id: number;
    title: string;
    content: string;
    author: string;
}

export const posts = [
    {
        id: 1,
        text: "Post 1",
        liked: true
    },
    {
        id: 2,
        text: "Post 2",
        liked: false
    },
    {
        id: 3,
        text: "Post 3",
        liked: false
    },
    {
        id: 4,
        text: "Post 4",
        liked: false
    },
    {
        id: 5,
        text: "Post 5",
        liked: false
    },
    {
        id: 6,
        text: "Post 6",
        liked: false
    },
    {
        id: 7,
        text: "Post 7",
        liked: true
    },
    {
        id: 8,
        text: "Post 8",
        liked: true
    },
    {
        id: 9,
        text: "Post 9",
        liked: false
    },
    {
        id: 10,
        text: "Post 10",
        liked: true
    }
]