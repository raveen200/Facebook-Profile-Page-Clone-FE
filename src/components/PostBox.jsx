const PostBox = () => {
  return (
    <div className=" w-full  p-4 border rounded-lg bg-white shadow-sm">
      <div className="flex items-center  mb-4">
        <img
          src="https://avatars.githubusercontent.com/u/114682975?s=96&v=4"
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-grow max-w-xl py-2 px-4 rounded-full bg-gray-100 focus:outline-none"
        />
      </div>

      <div className="flex justify-between">
        <button className="flex items-center space-x-2 text-red-500 font-semibold hover:bg-gray-100 px-4 py-2 rounded-lg">
          <span role="img" aria-label="Live Video">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png?_nc_eui2=AeGGt78quM7NH27H9UgJyomhVnUPE18ZZ-dWdQ8TXxln538SNjM1rpSz7-rhrt_GG3HjnORB79BD2gAsN_dnKddU"
              alt=""
            />
          </span>
          <span>Live video</span>
        </button>
        <button className="flex items-center space-x-2 text-green-500 font-semibold hover:bg-gray-100 px-4 py-2 rounded-lg">
          <span role="img" aria-label="Photo/Video">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeEq1sM9mdWOA8jxiDHUpyNsPL4YoeGsw5I8vhih4azDknFT4klVlLUan0PACbi1fRCKVeWxY6VICKLemIA6YEIl"
              alt=""
            />
          </span>
          <span>Photo/video</span>
        </button>
        <button className="flex items-center space-x-2 text-blue-500 font-semibold hover:bg-gray-100 px-4 py-2 rounded-lg">
          <span role="img" aria-label="Life Event">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/pkbalDbTOVI.png?_nc_eui2=AeFhaObcmza41HLwsepCGmneMb31Au0h4oAxvfUC7SHigCandeyLlGuyuvXbMYvNBdfmdd5qnjwEdretJPgmwHPs"
              alt=""
            />
          </span>
          <span>Life event</span>
        </button>
      </div>
    </div>
  );
};

export default PostBox;
