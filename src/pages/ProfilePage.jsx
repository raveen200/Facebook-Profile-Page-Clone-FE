import ContactSection from "@/components/ContactSection";
import CoverPic from "@/components/CoverPic";
import CreatePost from "@/components/CreatePost";
import IntroCard from "@/components/IntroCard";
import PhotoGrid from "@/components/PhotoGrid";
import PostBox from "@/components/PostBox";
import PostCard from "@/components/PostCard";
import SecondNavBar from "@/layout/SecondNavBar";
import { useEffect, useState } from "react";
import { getProfile } from "@/service/FbService";
import Cookies from "js-cookie";
import { ProfileDataContext } from "@/context/ProfileContext";

function ProfilePage() {
  const coverPhoto =
    "https://t4.ftcdn.net/jpg/05/68/27/11/360_F_568271133_abLuLCUggrEHb7QBjTBLkb2gVtiIlQQP.jpg";
  const likesAndFollowers = "2.5K likes • 2.5K followers";

  const profileDetails = {
    introDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec libero ultricies ultricies. Sed ut purus eget sapi",
    address:
      "No 310/1/1, Kaduwela Road, Koswatte Junction, Battaramulla, Sri Lanka",
    phone: "077 726 1026",
    email: "hello@softmint.net",
    website: "softmint.net",
    availability: "Always open",
    reviews: "Not yet rated (0 reviews)",
    company: "Software company",
  };

 

  const [profileData, setProfileData] = useState(null);

  console.log(profileData);

  Cookies.set("profile_image", profileData?.user.profile_image);
  Cookies.set("name", profileData?.user.name);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setProfileData(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <ProfileDataContext.Provider value={{ profileData }}>
      <div>
        <CoverPic coverPhoto={coverPhoto} />
        {profileData && (
          <ContactSection
            name={profileData.user.name}
            likesAndFollowers={likesAndFollowers}
            dp={profileData.user.profile_image}
          />
        )}

        <SecondNavBar />
        <CreatePost />
        <div className="bg-slate-100 md:px-12 py-4">
          <div className="md:grid md:grid-cols-3 gap-2 ">
            <div className="">
              <IntroCard profileDetails={profileDetails} />
              <PhotoGrid />
            </div>
            <div className="col-span-2">
              <PostBox />

              {profileData?.posts.map((profileData, index) => (
                <PostCard key={index} profileData={profileData}
             />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ProfileDataContext.Provider>
  );
}

export default ProfilePage;
