import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faVideo,
  faSmile,
  faLocationDot,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { IoMdClose } from "react-icons/io";

function CreatePost({ setOpenModal, openModal }) {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Post text:", postText);
    console.log("Image:", image);
    console.log("Video:", video);
  };

  return (
    <>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
          <div className="bg-white md:w-3/5 mt-4 p-6 rounded-lg ">
            <div className="flex items-center mb-4">
              <img
                src="profile-picture.jpg"
                alt="Profile picture"
                className="w-10 h-10 rounded-full mr-2"
              />
              <h3 className="text-lg font-semibold">Raveen Samudika</h3>
              <div className="ml-auto flex items-center">
                <button className="text-gray-500 hover:text-gray-700 ml-2">
                  Edit Post
                </button>
                <button
                  onClick={() => setOpenModal(false)}
                  className="text-gray-500 hover:text-gray-700 ml-2"
                >
                  <IoMdClose size={32} />
                </button>
              </div>
            </div>
            <textarea
              className="w-full border rounded-lg p-2"
              placeholder="What's on your mind?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
            <div className="flex items-center mt-4">
              <label
                htmlFor="image-upload"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 mr-2"
              >
                <FontAwesomeIcon icon={faImage} className="text-gray-500" />
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />
              </label>
              <label
                htmlFor="video-upload"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 mr-2"
              >
                <FontAwesomeIcon icon={faVideo} className="text-gray-500" />
                <input
                  type="file"
                  id="video-upload"
                  accept="video/*"
                  onChange={handleVideoChange}
                  hidden
                />
              </label>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 mr-2">
                <FontAwesomeIcon icon={faSmile} className="text-gray-500" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 mr-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-500"
                />
              </button>

              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                <FontAwesomeIcon icon={faEllipsisH} className="text-gray-500" />
              </button>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setOpenModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreatePost;
