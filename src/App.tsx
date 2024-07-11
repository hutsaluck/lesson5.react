import React, {useState} from 'react';
import './App.css';
import FormComponent from "./components/form-component/FormComponent";
import PostsComponent from "./components/posts-component/PostsComponent";

const App = () => {
    const [trigger, setTrigger] = useState<boolean>(false)

  return (
      <div>
        <FormComponent setTrigger={setTrigger}/>
        <PostsComponent trigger={trigger}/>
      </div>
  );
}

export default App;