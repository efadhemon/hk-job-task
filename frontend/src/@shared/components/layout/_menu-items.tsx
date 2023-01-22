import { MdAddchart, MdCalendarViewDay } from "react-icons/md";
import { MenuProps } from "antd";

import { Paths } from "@shared/constant";
import { Link } from "react-router-dom";
import { _ } from "@shared/utils";

// main menu items
const menuItems: MenuProps["items"] = [
  {
    key: Paths.sectors,
    icon: <MdCalendarViewDay />,
    label: <Link to={_.appendPagination(Paths.sectors)}>Sectors</Link>,
  },
  {
    key: Paths.distributions,
    icon: <MdAddchart />,
    label: (
      <Link to={_.appendPagination(Paths.distributions)}>Distributions</Link>
    ),
  },
];

export default menuItems;
