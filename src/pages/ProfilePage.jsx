import ContactSection from "@/components/ContactSection";
import CoverPic from "@/components/CoverPic";
import IntroCard from "@/components/IntroCard";
import PhotoGrid from "@/components/PhotoGrid";
import SecondNavBar from "@/layout/SecondNavBar";
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

  return (
    <div>
      <CoverPic coverPhoto={coverPhoto} />
      <ContactSection
        name={name}
        likesAndFollowers={likesAndFollowers}
        dp={dp}
      />
      <SecondNavBar>
        <IntroCard profileDetails={profileDetails} />
        <PhotoGrid />
      </SecondNavBar>
    </div>
  );
}

export default ProfilePage;
