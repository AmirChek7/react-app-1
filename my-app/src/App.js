import React, { useRef, useState } from 'react';
import Postlist from './components/Postlist';
import './styles/App.css';
// import Mybutton from './UI/buttons/MyButton';

function App() {
  const [title, setTitle] = useState("")
  const bodyInputRef = useRef();
  const [posts, setPosts] = useState([
   {id:"1", title:"Javascript",  body:"Description"},
   {id:"2", title:"Javascript",  body:"Description"},
   {id:"3", title:"Javascript",  body:"Description"},
  ])  
  function addNewPost(e){
    e.preventDefault()
    console.log(title);
    console.log(bodyInputRef.current);
  }
  return (
    <div className="App">
      <input 
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="text"
        placeholder='Название поста'
      />

    {/* <input
    type="text"
    ref={bodyInputRef}
    placeholder="Описание поста"
    /> */}

      <input 
      type="text"
      placeholder='Описание поста'
      />
      <button onClick={addNewPost}>Создать Пост</button>
      {/* <Mybutton>Click me</Mybutton> */}
      <Postlist posts={posts} title="Список 1"/>
    </div>
  );
}

export default App;
