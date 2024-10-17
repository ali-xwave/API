"use client";
const MyPost = ({ data }) => {
  return (
    <>
      {/* <button onClick={() => alert("Hello")}>click</button> */}
      <button onClick={() => alert(data)}>
        click
      </button>
    </>
  );
};

export default MyPost;
