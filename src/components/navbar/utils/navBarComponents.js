import {
  ArrowLeftOnRectangleIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  Cog8ToothIcon,
  PencilSquareIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";

export const navLinks = [
  {
    id: 0,
    title: "Dashboard",
    icon: <RectangleGroupIcon className="nav-icon" />,
    route: "",
  },
  {
    id: 1,
    title: "Market",
    icon: <CalendarDaysIcon className="nav-icon" />,
    route: "",
  },
  {
    id: 2,
    title: "Notes",
    icon: <PencilSquareIcon className="nav-icon" />,
    route: "",
  },
  {
    id: 3,
    title: "Payments",
    icon: <BanknotesIcon className="nav-icon" />,
    route: "",
  },
  {
    id: 4,
    title: "Settings",
    icon: <Cog8ToothIcon className="nav-icon" />,
    route: "",
  },
  {
    id: 5,
    title: "LogOut",
    icon: <ArrowLeftOnRectangleIcon className="nav-icon" />,
    route: "",
  },
];
