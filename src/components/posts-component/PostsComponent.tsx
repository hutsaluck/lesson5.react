import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import './posts-component.css'
import PostComponent from "../post-component/PostComponent";
import {postService} from "../../services/api.service";

interface IProps {
    trigger: boolean
    newPost: IPost | null
}

const PostsComponent: FC<IProps> = ({trigger, newPost}) => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        postService.getAllPosts().then((posts: IPost[]) => {
            const listPosts: IPost[] = newPost ? [newPost, ...posts] : [...posts]
            setPosts([...listPosts])
        });
    }, [trigger]);

    return (
        <div>
            <h2>{posts.length ? `Posts` : ``}</h2>
            <div className="wrap-posts">
                {
                    posts.map(post => <PostComponent key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export default PostsComponent

