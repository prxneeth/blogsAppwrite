import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="p-6 flex justify-center bg-black">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
