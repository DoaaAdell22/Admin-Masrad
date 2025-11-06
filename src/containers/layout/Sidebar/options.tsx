import {
  AppstoreOutlined,
  UserOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { FormattedMessage } from "react-intl";

import { FaBoxOpen, FaCodeBranch, FaListUl, FaUser } from "react-icons/fa6";

import { IoIosSettings } from "react-icons/io";

import { FaBuilding, FaBriefcase } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";

import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

import { CgMoreO } from "react-icons/cg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

// Registrations

interface MenuItem {
  key: string;
  to?: string;
  icon?: any;
  label: any;
  onClick?: () => void;
  hidden?: boolean;
  disabled?: boolean;
  children?: MenuItem[];
}
const getMenuItems: (profile) => MenuItem[] = (profile) => {
  return [
    {
      key: "home",
      to: "home",
      label: <FormattedMessage id="home" />,
      icon: <IoHomeSharp className="!text-xl" />,
      disabled: false,
    },

    {
      key: "video-main",
      to: "video-main",
      label: <FormattedMessage id="video-home-0" />,
      icon: <FaVideo className="!text-xl" />,
      disabled: false,
    },
    {
      key: "char-page",
      to: "char-page",
      label: <FormattedMessage id="char" />,
      icon: <FaTag className="!text-xl" />,
      disabled: false,
      hidden: false,
    },
    {
      key: "build-page",
      to: "build-page",
      label: <FormattedMessage id="build" />,
      icon: <FaBuilding className="!text-xl" />,
      disabled: false,
      hidden: false,
    },

    {
      key: "job-page",
      to: "job-page",
      label: <FormattedMessage id="masrad-jobs" />,
      icon: <MdOutlineWork className="!text-xl" />,
      disabled: false,
      hidden: false,
    },
    {
      key: "about-page",
      to: "about-page",
      label: <FormattedMessage id="about" />,
      icon: <CgMoreO className="!text-xl" />,
      disabled: false,
      hidden: false,
    },
    {
      key: "video-about",
      to: "video-about",
      label: <FormattedMessage id="video-about" />,
      icon: <MdOutlineSlowMotionVideo className="!text-xl" />,
      disabled: false,
    },
    {
      key: "settings",
      to: "settings",
      label: <FormattedMessage id="settings" />,
      icon: <IoIosSettings className="!text-xl" />,
      disabled: false,
      hidden: false,
    },
    {
      key: "contacts",
      to: "contacts",
      label: <FormattedMessage id="contacts" />,
      icon: <MdContactPhone className="!text-xl" />,
      disabled: false,
      hidden: false,
    },

    // {
    //   key: "offers-group",
    //   label: <FormattedMessage id={"offers"} />,
    //   icon: <IoMdSettings className="!text-xl" />,
    //   disabled: false,
    //   children: [
    //     {
    //       key: "offers",
    //       to: "offers",
    //       label: <FormattedMessage id="offers" />,
    //       icon: <MdPolicy className="!text-xl" />,
    //       disabled: false,
    //       hidden: false,
    //     },
    //     {
    //       key: "voucher",
    //       to: `voucher`,
    //       label: <FormattedMessage id="voucher" />,
    //       icon: <AppstoreOutlined />,
    //       disabled: false,
    //       // hidden: !getPermissions("permissions", "Get", profile),
    //     },
    //   ],
    // },
  ];
};
export default getMenuItems;
