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
import { addPost } from "../service/FbService";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ProfileDataContext } from "@/context/ProfileContext";
import { getProfile } from "@/service/FbService";

function CreatePost({ setOpenModal, openModal }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: "",
      postText: "",
    },
  });

  const { profileData } = useContext(ProfileDataContext);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("postContent", data.postText);
      formData.append("image", data.image[0]);
      const response = await addPost(formData);
      if (response) {
        setOpenModal(false);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {openModal && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
            <div className="bg-white md:w-3/5 mt-4 p-6 rounded-lg ">
              <div className="flex items-center mb-4">
                <img
                  src={profileData.user.profile_image}
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <h3 className="text-lg font-semibold">
                  {profileData.user.name}
                </h3>
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
                {...register("postText")}
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
                    {...register("image")}
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
                    {...register("video")}
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
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    className="text-gray-500"
                  />
                </button>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setOpenModal(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
                >
                  Cancel
                </button>
                <button
                  type="onSubmit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default CreatePost;
