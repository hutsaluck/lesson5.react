import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import './posts-component.css'
import PostComponent from "../post-component/PostComponent";
import {postService} from "../../services/api.service";

interface IProps {
    trigger: boolean
    newPost: IPost|null
}

const PostsComponent: FC<IProps> = ({trigger, newPost}) => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        postService.getAllPosts().then((posts: IPost[]) => setPosts([...posts]));
    }, [trigger]);

    return (
        <div>
            <h2>{posts.length ? `Posts` : ``}</h2>
            <div className="wrap-posts">
                {newPost && <PostComponent key={newPost.id} post={newPost}/>}
                {
                    posts.map(post => <PostComponent key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export default PostsComponent

