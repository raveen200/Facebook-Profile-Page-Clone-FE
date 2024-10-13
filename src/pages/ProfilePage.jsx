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

function ProfilePage() {
  const coverPhoto =
    "https://scontent.fcmb12-1.fna.fbcdn.net/v/t39.30808-6/241347091_393449245508798_5701947529629634859_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHn2NFyS2YP1KERi9irRzDUWkK-gpVEeQpaQr6ClUR5Co7UyCt3X9jJJFof1nL1QiqoIffKBkn9NqnzWxWEUuN-&_nc_ohc=lQmIRbDIGpMQ7kNvgG5A1xt&_nc_zt=23&_nc_ht=scontent.fcmb12-1.fna&_nc_gid=AmUSKMiW7PcvdrKnyF7xna2&oh=00_AYAAa_oXRObt6iY9hgaTfzi3cNfAJVIHlYIZjURu05rGEw&oe=670FD925";

  const name = "Softmint Software Solutions";
  const likesAndFollowers = "2.5K likes • 2.5K followers";
  const dp =
    "https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-1/359829030_840907010940842_6896240233597166038_n.png?stp=dst-png_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeEYp-NkwIWEuyP4jXERFEwPWQGWNmQO_XNZAZY2ZA79c24UAX19mrQ0fyGsU2cmq0wLWOudOxPsKFPjQY3jLaPT&_nc_ohc=xrlDFM4-OFkQ7kNvgHS0Xxq&_nc_ht=scontent.fcmb11-1.fna&_nc_gid=Ay5EKk1Q3d3QLylLq10YnxT&oh=00_AYC5wdqIhXOf7zgH7rCl-oJaB0QqTGj_z73B_vCScIQD2A&oe=670FF62E";

  const profileDetails = {
    introDetails:
      "We are a boutique digital transformation consultancy and software development company that provides...",
    address:
      "No 310/1/1, Kaduwela Road, Koswatte Junction, Battaramulla, Sri Lanka",
    phone: "077 726 1026",
    email: "hello@softmint.net",
    website: "softmint.net",
    availability: "Always open",
    reviews: "Not yet rated (0 reviews)",
    company: "Software company",
  };

  const postCardData = [
    {
      name: "Raveen Samudika",
      time: "5m",
      title: "Delicious Meal",
      description:
        "This is a delicious-looking meal with a fried egg, salad, and meat covered in gravy. Perfect for a great dinner!",
      image:
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/wikipedia_logo_icon_169796.png",
    },
    {
      name: "John Doe",
      time: "10m",
      title: "Morning Coffee",
      description:
        "Enjoying a cup of freshly brewed coffee to start the day. Nothing beats the aroma of coffee in the morning!",
      image:
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/wikipedia_logo_icon_169796.png",
    },
    {
      name: "Jane Smith",
      time: "15m",
      title: "Sunset View",
      description:
        "Captured this beautiful sunset while on a walk. The colors were absolutely stunning!",
      image:
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/wikipedia_logo_icon_169796.png",
    },
    {
      name: "Alice Johnson",
      time: "20m",
      title: "New Recipe",
      description:
        "Tried out a new recipe today and it turned out great! Can't wait to share it with everyone.",
      image:
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/wikipedia_logo_icon_169796.png",
    },
    {
      name: "Bob Brown",
      time: "25m",
      title: "Workout Routine",
      description:
        "Just finished my workout for the day. Feeling energized and ready to tackle the rest of the day!",
      image:
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/wikipedia_logo_icon_169796.png",
    },
  ];

  const [profileDetailss, setProfileDetailss] = useState({});

  console.log(profileDetailss);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setProfileDetailss(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  });

  return (
    <div>
      <CoverPic coverPhoto={coverPhoto} />
      <ContactSection
        name={name}
        likesAndFollowers={likesAndFollowers}
        dp={dp}
      />

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
            {postCardData.map((postCardData, index) => (
              <PostCard key={index} postCardData={postCardData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
