const IntroCard = ( {profileDetails} ) => {
  return (
    <div className="bg-white border rounded-lg shadow p-4 ">
      <h2 className="text-xl font-bold mb-2">Intro</h2>

      <p className="text-gray-600 text-center mb-4">
        {profileDetails.introDetails}
      </p>

      <hr className="my-2" />

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <img
            className="opacity-60"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png?_nc_eui2=AeHUlwSQA2AdQFqiao8I17F-u0ZhLjleVgW7RmEuOV5WBZ8Je9AiKdyLNEaTAt287mD0ghGfy11xy3Zx9w7UaIN7"
          />
          <i className="fas fa-info-circle text-gray-500"></i>
          <p className="text-gray-600 ">
            <b>Page </b>· {profileDetails.company}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <img
            className="opacity-60"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/8k_Y-oVxbuU.png?_nc_eui2=AeHYWl7I8mCuLn2xBr4tzPZMAMO_1wPOzQ4Aw7_XA87NDjGYxMKS8edc1xJPk2lCDDJ7OZ9A9Os6NEwNNu8BQivO"
            alt=""
          />
          <i className="fas fa-map-marker-alt text-gray-500"></i>
          <p className="text-gray-600">{profileDetails.address}</p>
        </div>

        <div className="flex items-center space-x-2">
          <img
            className="opacity-60"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/Dc7-7AgwkwS.png?_nc_eui2=AeGPk73ahE_OW55jViIsAd6-_Z8lwuqCx1f9nyXC6oLHV_WTJ_poVk0_1piXqoLURjC_EBYSW2KiwQzD-HnUEt_C"
            alt=""
          />
          <i className="fas fa-phone text-gray-500"></i>
          <p className="text-gray-600">{profileDetails.phone}</p>
        </div>

        <div className="flex items-center space-x-2">
          <img
            className="opacity-60"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/2PIcyqpptfD.png?_nc_eui2=AeEuDTif9RuAJxo3xx-bOpMxG5FnvESg51kbkWe8RKDnWX_VMw2rMh_aS-5BZo9psLrQXPGC4Dn9dWZjn2dvuixA"
            alt=""
          />
          <i className="fas fa-envelope text-gray-500"></i>
          <p className="text-gray-600">{profileDetails.email}</p>
        </div>

        <div className="flex items-center space-x-2">
          <img
            className="opacity-60"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/BQdeC67wT9z.png?_nc_eui2=AeHOw43YER3p3ZDBYoOYJGScC-BjLWjhL2AL4GMtaOEvYMqF9HHagVLfK8nhKFtwLk3AebV1A76jJ3PRyN1k5kce"
            alt=""
          />
          <i className="fas fa-globe text-gray-500"></i>
          <a href="#" className="text-blue-500 hover:underline">
            {profileDetails.website}
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <img
            className="opacity-60"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/mp_faH0qhrY.png?_nc_eui2=AeH-euVIvcT1x76-t9nfj5otnFrlaiZVSWecWuVqJlVJZ0XatXFu6M0DloJTptBU6e7Gr7g3pwTUTUkyImRjnBEN"
            alt=""
          />
          <i className="fas fa-clock text-gray-500"></i>
          <p className="text-green-500">{profileDetails.availability}</p>
        </div>

        <div className="flex items-center space-x-2">
          <img
            className="opacity-60"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/4Lea07Woawi.png?_nc_eui2=AeGAjk9LCBbzSIYhx_HnzM9h8OzBoTJTRvvw7MGhMlNG-_szB8u3MgqvDmDUd1-i_LBVVl0N4cTjGPRGnDuBhudy"
            alt=""
          />
          <i className="fas fa-star text-gray-500"></i>
          <p className="text-gray-600">{profileDetails.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
