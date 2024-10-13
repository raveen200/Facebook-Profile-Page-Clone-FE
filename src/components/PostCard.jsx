import { Button } from "./ui/button";
import { CardFooter } from "./ui/card";
import Cookies from "js-cookie";

function PostCard({ profileData }) {
  const name = Cookies.get("name");
  const profile_image = Cookies.get("profile_image");



  return (
    <div className="w-full mt-4  border rounded-lg bg-white shadow-sm">
      <div className=" px-6 py-4 mt-6">
        <div className="flex  items-center">
          <img
            className="w-10 h-10 rounded-full mr-2"
            src={profile_image}
            alt="Profile"
          />

          <div>
            <div className="text-sm font-semibold">{name}</div>
            <div className="flex items-center text-xs text-gray-500">
              <span>{"5min"}</span>
              <span className="mx-1">·</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3.75a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zM21 12a9 9 0 01-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 ">
        <p className="text-gray-700 text-base">{profileData.postContent}</p>
      </div>
      <img
        className="w-full p-4 h-64 object-cover"
        src={`http://127.0.0.1:8000/images/posts/${profileData.image}`}
      />
      <hr className="my-2" />
      <CardFooter className="flex items-center  space-x-4">
        <Button variant="ghost">Like</Button>
        <Button variant="ghost">Comment</Button>
        <Button variant="ghost">Share</Button>
      </CardFooter>
    </div>
  );
}

export default PostCard;
