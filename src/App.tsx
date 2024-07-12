import React, {useState} from 'react';
import './App.css';
import FormComponent from "./components/form-component/FormComponent";
import PostsComponent from "./components/posts-component/PostsComponent";
import {IPost} from "./models/IPost";

const App = () => {
    const [posts, setPosts] = useState<IPost[]>([])

  return (
      <div>
        <FormComponent posts={posts} setPosts={setPosts}/>
        <PostsComponent posts={posts} setPosts={setPosts}/>
      </div>
  );
}

export default App;