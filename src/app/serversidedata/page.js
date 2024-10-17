import MyPost from "./mypost";

async function getPost() {
  let postData = await fetch("https://dummyjson.com/users");
  postData = await postData.json();
  return postData.users;
}

const Users = async () => {
  let posts = await getPost();

  return (
    <>
      <h1>Users Fetch Data with Api in server Side componentt</h1>

      {posts.map((post) => (
        <>
          <h4 key={post.id}>{post.firstName}</h4>
          <MyPost data={post.id} />
        </>
      ))}
    </>
  );
};

export default Users;
