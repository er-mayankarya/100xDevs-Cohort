
// Understanding useState() hook => Add Post Like LinkedIn 

import React, { useState, useEffect } from "react";
import { PostComponent } from "./Post";

function App() {

  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post =>
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      description={post.description}
      time={post.time}
      image={post.image}
    />

  )

  function addPost() {

    setPosts([...posts, {
      name: "100xDevs",
      subtitle: "20000 Followers",
      description: "What to win big ! Follow for more updates....",
      time: "20m ago",
      image: "https://tinyurl.com/4e645a7k"
    }]);
  }


  return (
    <>
      <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
        <button onClick={addPost}>Add Posts</button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Counter/>
            <ToggleMessage />
            {postComponents}
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

//Conditional re-rendering
const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
};


//useEffect() Hook , dependencies array , cleanup code

const Counter = () => {
  const [count, setCount] = useState(1);

  useEffect(function () {
    const interval = setInterval(() => {
      setCount(currentValue => currentValue + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [])

  return <div>
    Counter : {count}
  </div>
};

export default App;
