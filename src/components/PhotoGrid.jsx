import AppFooter from "../layout/AppFooter";
const PhotoGrid = () => {
  const photos = [
    {
      src: "https://via.placeholder.com/150/0000FF/808080?text=Buddha+Image",
      alt: "Buddha Image",
    },
    {
      src: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Menu+2024",
      alt: "Menu 2024",
    },
    {
      src: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Intern+Software+Engineer",
      alt: "Intern Software Engineer",
    },
    {
      src: "https://via.placeholder.com/150/FFFF00/000000?text=Softmint+Logo",
      alt: "Softmint Logo",
    },
    {
      src: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Marketing+&+Business",
      alt: "Marketing & Business",
    },
    {
      src: "https://via.placeholder.com/150/00FFFF/000000?text=Sales+&+Marketing+Manager",
      alt: "Sales & Marketing Manager",
    },
    {
      src: "https://via.placeholder.com/150/808080/000000?text=Digital+Marketing+Intern",
      alt: "Digital Marketing Intern",
    },
    {
      src: "https://via.placeholder.com/150/000080/FFFFFF?text=Project+Manager+Intern",
      alt: "Project Manager Intern",
    },
    {
      src: "https://via.placeholder.com/150/800080/FFFFFF?text=Intern+UI/UX+Designer",
      alt: "Intern UI/UX Designer",
    },
  ];

  return (
    <>
      <>
        <div className="bg-white border rounded-lg shadow p-4 mt-4 ">
          <h2 className="text-xl font-bold mb-2">Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {photos.map((photo, index) => (
              <div key={index} className="relative">
                <img
                  src={photo.src}
                  alt={photo.alt}
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
