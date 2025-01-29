import axios from "axios";

export default async function BlogPage( {params} : any){
    const postId = (await params).blogId;

    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = res.data;
    
    return <div>
       Blog Post {postId}
       <br/>
       title = {data.title}
    </div>
}