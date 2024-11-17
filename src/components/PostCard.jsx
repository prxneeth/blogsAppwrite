import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function Postcard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-40 h-60 bg-white rounded-xl p-2 ">
        <div className="flex h-auto justify-center ">
          <img
            src={appwriteService.filePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-40 h-40"
          />
        </div>{" "}
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default Postcard;
