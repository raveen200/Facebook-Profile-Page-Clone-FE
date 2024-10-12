import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

function ContactSection({ name, likesAndFollowers, dp }) {
  return (
    <div className="flex justify-center">
      <div className="flex md:items-center justify-between md:w-7/12 p-4 bg-white border-b shadow-sm sm:justify-between ">
        <div className="flex items-center space-x-4">
          <img src={dp} alt={name} className="h-16 w-16 rounded-full" />

        
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="text-gray-500 hover:text-blue-500">
              {likesAndFollowers}
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center   space-x-4">
          <div className="space-x-2">
            <a
              href="#"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-flex items-center"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
            <a
              href="#"
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md border hover:bg-gray-200 inline-flex items-center"
            >
              <FaFacebookMessenger className="m-2" />
              Message
            </a>
            <a
              href="#"
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md border hover:bg-gray-200 inline-flex items-center"
            >
              <AiFillLike className="mr-2" />
              Like
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
