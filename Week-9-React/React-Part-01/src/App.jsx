function App() {
  return (
    <>
      <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
          <PostComponent 
          name = {"100xDevs"} 
          followerCount={20}
          description={"What to win big ! Follow for more updates...."}
          time={20}
          image={"https://tinyurl.com/4e645a7k"}/>
          </div>
        </div>
      </div>
    </>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  boderRadius: 50,
  boderColor: "gray",
  boderWidth: 1,
  padding: 23
};

function PostComponent({name , followerCount , time , image ,description}) {
  return <div style={style}>
    <div style={{ display: "flex" }}>
      <img src={image}
        style={{
          width: 35,
          height: 35,
          borderRadius : 20
        }} />
      <div style={{ fontSize: 10, marginLeft: 10 }}>
        <b>
          {name}
        </b>
        <div>{followerCount} Followers</div>
        <div>{time}m ago</div>
      </div>
    </div>
    <div style={{ fontSixe: 12 }}>{description}</div>
  </div>
}

export default App;
