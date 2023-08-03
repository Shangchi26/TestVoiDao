import React, { useState } from "react";
import avatar from "../assets/avatar-1577909_960_720.png";

const Profile = () => {
  const [activeMenu, setActiveMenu] = useState(0);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };
  return (
    <section className="grid grid-cols-[250px_auto] m-40 font-Josefin">
      <div className="w-full border-r">
        <div className="w-full flex items-center gap-3">
          <img
            src={avatar}
            alt=""
            className="w-14 h-14 object-cover rounded-full"
          />
          <h3 className="font-bold">User.name</h3>
        </div>
        <ul className="flex flex-col items-start my-8">
          <li
            onClick={() => setActiveMenu(0)}
            className={`cursor-pointer p-2 hover:pl-4 duration-500 font-semibold border-b w-full ${
              activeMenu === 0 ? "text-teal-400" : ""
            }`}
          >
            Profile
          </li>
          <li
            onClick={() => setActiveMenu(1)}
            className={`cursor-pointer p-2 hover:pl-4 duration-500 font-semibold border-b w-full ${
              activeMenu === 1 ? "text-teal-400" : ""
            }`}
          >
            Address
          </li>
          <li
            onClick={() => setActiveMenu(2)}
            className={`cursor-pointer p-2 hover:pl-4 duration-500 font-semibold border-b w-full ${
              activeMenu === 2 ? "text-teal-400" : ""
            }`}
          >
            Change Password
          </li>
        </ul>
      </div>
      <div className="">
        {showProfile()}
        <div className={`w-full ${activeMenu === 1 ? "block" : "hidden"}`}>
          2
        </div>
        <div className={`w-full ${activeMenu === 2 ? "block" : "hidden"}`}>
          3
        </div>
      </div>
    </section>
  );

  function showProfile() {
    return (
      <div className={`w-full ${activeMenu === 0 ? "block" : "hidden"}`}>
        <div className="border-b px-16">
          <h3 className="font-bold">My Profile</h3>
          <span className="font-semibold">
            Manage profile information for account security
          </span>
        </div>
        <div className="flex mx-16 mt-5">
          <form action="" className="min-w-[400px] w-[600px]">
            <table>
              <tr>
                <td className="w-36 font-semibold text-end pr-5 pt-3">Email</td>
                <td className="w-auto text-start pl-5 pt-3">User.email</td>
              </tr>
              <tr>
                <td className="w-36 font-semibold text-end pr-5 pt-3">Name</td>
                <td className="w-auto text-start pl-5 pt-3">User.name</td>
              </tr>
              <tr>
                <td className="w-36 font-semibold text-end pr-5 pt-3">Phone</td>
                <td className="w-auto text-start pl-5 pt-3">User.phone</td>
              </tr>
              <tr>
                <td className="w-36 font-semibold text-end pr-5 pt-3">Phone</td>
                <td className="w-auto text-start pl-5 pt-3">User.phone</td>
              </tr>
              <tr>
                <td className="w-36 font-semibold text-end pr-5 pt-3">
                  Gender
                </td>
                <td className="w-auto text-start pl-5 pt-3">
                  <div className="flex">
                    <div className="pr-3">
                      <input type="radio" name="gender" value="male" />{" "}
                      <label>Male</label>
                    </div>
                    <div className="pr-3">
                      <input type="radio" name="gender" value="female" />{" "}
                      <label>Female</label>
                    </div>
                    <div className="pr-3">
                      <input type="radio" name="gender" value="another" />{" "}
                      <label>Another</label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="w-auto text-start pl-5 pt-3">
                  <button
                    type="submit"
                    className="bg-teal-400 text-white hover:bg-teal-300 font-semibold duration-500 px-4 py-1 rounded-md"
                  >
                    Save
                  </button>
                </td>
              </tr>
            </table>
          </form>
          <div className="flex flex-col justify-center items-center w-full">
            <img
              src={avatar}
              alt=""
              className="w-32 h-32 object-cover rounded-full"
            />
            <label htmlFor="inputFile" className="cursor-pointer text-white bg-teal-400 hover:bg-teal-300 duration-500 px-3 py-1 rounded-md mt-3">
              Choose PNG File{" "}
              <input type="file" id="inputFile" accept="image/png" className="hidden"/>
            </label>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
