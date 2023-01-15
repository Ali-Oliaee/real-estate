import {
  CheckCircleOutlined,
  HomeOutlined,
  PlusCircleOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons"

export const managerMenuItems = [
  {
    key: "/states",
    label: "املاک",
    icon: <HomeOutlined />,
  },
  {
    key: "/people",
    label: "اشخاص",
    icon: <UsergroupAddOutlined />,
  },
  {
    key: "/profile",
    icon: <UserOutlined />,
    label: "حساب کاربری",
  },
]

export const adminMenuItems = [
  {
    key: "/commits",
    label: "تایید ها",
    icon: <CheckCircleOutlined />,
  },
  {
    key: "/states",
    label: "املاک",
    icon: <HomeOutlined />,
  },
  {
    key: "/users",
    label: "کاربران",
    icon: <UsergroupAddOutlined />,
  },
]

export const advisorMenuItems = [
  {
    key: "/add-state",
    label: "ثبت ملک",
    icon: <PlusCircleOutlined />,
  },
  {
    key: "/profile",
    icon: <UserOutlined />,
    label: "حساب کاربری",
  },
]

export const userMenuItems = [
  {
    key: "/states",
    label: "ثبت ملک",
    icon: <PlusCircleOutlined />,
  },
  {
    key: "/profile",
    icon: <UserOutlined />,
    label: "حساب کاربری",
  },
]
