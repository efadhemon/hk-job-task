import { MdOutlineFace } from "react-icons/md";
import { MenuProps } from "antd";
import {
  AiOutlineLogout,
  AiOutlineSafety,
  AiOutlineUser,
} from "react-icons/ai";
import { Paths } from "@shared/constant";
import { Link } from "react-router-dom";
import { _, storage } from "@shared/utils";

const welcomeMenu: MenuProps["items"] = [
  {
    key: "Profile",
    icon: <AiOutlineUser />,
    label: "Profile",
  },
  {
    key: "Security",
    icon: <AiOutlineSafety />,
    label: "Security",
  },
  {
    key: "Logout",
    icon: <AiOutlineLogout />,
    label: "Logout",
    onClick: () => {
      storage.removeToken();
      window.location.reload();
    },
  },
];

// main menu items
const mainMenu: MenuProps["items"] = [
  {
    key: Paths.userList,
    icon: <MdOutlineFace />,
    label: <Link to={_.appendPagination(Paths.userList)}>Users</Link>,
  },
  {
    key: Paths.sectorList,
    icon: <MdOutlineFace />,
    label: <Link to={_.appendPagination(Paths.sectorList)}>Sectors</Link>,
  },
  {
    key: Paths.distributionList,
    icon: <MdOutlineFace />,
    label: (
      <Link to={_.appendPagination(Paths.distributionList)}>Distributions</Link>
    ),
  },
];

const menuItems = {
  welcomeMenu,
  mainMenu,
};

export default menuItems;