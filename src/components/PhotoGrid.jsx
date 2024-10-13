import AppFooter from "../layout/AppFooter";
import { useContext } from "react";
import { ProfileDataContext } from "@/context/ProfileContext";

const PhotoGrid = () => {
  const { profileData } = useContext(ProfileDataContext);

  return (
    <>
      <>
        <div className="bg-white border rounded-lg shadow p-4 mt-4 ">
          <h2 className="text-xl font-bold mb-2">Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {profileData?.posts.map((post, index) => (
              <div key={index} className="relative">
                <img
                  src={`http://127.0.0.1:8000/images/posts/${post.image}`}
                  alt={`Post ${index}`}
                  className="object-cover  w-full h-full "
                />
              </div>
            ))}
          </div>
        </div>
      </>
      <>
        <AppFooter />
      </>
    </>
  );
};

export default PhotoGrid;
