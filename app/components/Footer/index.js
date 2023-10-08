import React from "react";
import { FiPhone } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { SlLocationPin } from "react-icons/sl";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className=" w-full bg-footer_bg flex justify-between flex-col py-8">
      <div className="max-w-widthmax w-full m-auto py-8 px-2 flex justify-between flex-wrap gap-6">
        <div className="max-w-xs ">
          <h1 className="text-lightgreen text-2xl">ED REVIEWS</h1>
          <p className="text-base font-normal text-white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantiu.Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantiu.
          </p>
        </div>
       
        <div>
          <h3 className="text-lightgreen text-base font-medium mb-2">
            Company
          </h3>
          <ul className="flex flex-col gap-3 text-base font-normal text-white">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Referal Program</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Press & media</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lightgreen text-base font-medium mb-2">
            Support
          </h3>
          <ul className="flex flex-col gap-3 text-base font-normal text-white">
            <li>
              <a href="#">Support Portal</a>
            </li>
            <li>
              <a href="#">List of charges</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Referal Program</a>
            </li>
            <li>
              <a href="#">Download Resources</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lightgreen text-base font-medium mb-2">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-3 text-base font-normal text-white">
            <li className="flex items-center gap-2">
              <FiPhone className="w-5 h-5 text-green" />
              +91 33555 6778
            </li>
            <li className="flex items-center gap-2">
              <CgMail className="w-5 h-5 text-green" />
              JohnDoe@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <SlLocationPin className="w-5 h-5 text-green" />
              Street 34 Sector 12 B Mumbai India
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lightgreen text-base font-medium mb-2">
            Connect with us
          </h3>
          <ul className="flex gap-4 items-center text-white ">
            <li className="flex justify-center items-center bg-green w-6 h-6 rounded-full">
              <BiLogoFacebook />
            </li>
            <li className="flex justify-center items-center bg-green w-6 h-6 rounded-full">
              <BiLogoInstagram />
            </li>
            <li className="flex justify-center items-center bg-green w-6 h-6 rounded-full">
              <BiLogoTwitter />
            </li>
            <li className="flex justify-center items-center bg-green w-6 h-6 rounded-full">
              <BiLogoLinkedin />
            </li>
            <li className="flex justify-center items-center bg-green w-6 h-6 rounded-full">
              <BiLogoYoutube />
            </li>
          </ul>
        </div>
      </div>

      <h3 className="mt-8 text-center text-base text-white font-normal">
        Design & Developed by <span className=" text-green">ZySoftec</span>
      </h3>
    </div>
  );
};

export default Footer;
