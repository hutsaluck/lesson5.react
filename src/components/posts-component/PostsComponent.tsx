import React, {FC, useEffect} from 'react';
import {IPost} from "../../models/IPost";
import './posts-component.css'
import PostComponent from "../post-component/PostComponent";
import {postService} from "../../services/api.service";

interface IProps {
    posts: IPost[]
    setPosts: (posts: IPost[]) => void
}

const PostsComponent: FC<IProps> = ({posts, setPosts}) => {

    useEffect(() => {
        postService.getAllPosts().then((posts: IPost[]) => setPosts([...posts]));
    }, []);

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

