function CoverPic({ coverPhoto }) {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-white  flex flex-col justify-center items-center  ">
      <div className=" md:w-7/12  bg-gray-200 relative">
        <img
          src={coverPhoto}
          alt="Cover Photo"
          className="object-cover shadow-2xl   md:rounded-3xl w-full h-full"
        />
      </div>
    </div>
  );
}

export default CoverPic;
