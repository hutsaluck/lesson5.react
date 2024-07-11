import React, {useState} from 'react';
import './App.css';
import FormComponent from "./components/form-component/FormComponent";
import PostsComponent from "./components/posts-component/PostsComponent";
import {IPost} from "./models/IPost";

const App = () => {
    const [trigger, setTrigger] = useState<boolean>(false)
    const [newPost, setNewPost] = useState<IPost|null>(null)

  return (
      <div>
        <FormComponent setTrigger={setTrigger} setNewPost={setNewPost}/>
        <PostsComponent trigger={trigger} newPost={newPost}/>
      </div>
  );
}

export default App;