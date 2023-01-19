import {
  CheckCircleOutlined,
  DatabaseOutlined,
  FileSearchOutlined,
  HomeOutlined,
  PlusCircleOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons"

export const managerMenuItems = [
  {
    key: "/estates",
    label: "املاک",
    icon: <HomeOutlined />,
  },
  {
    key: "/users",
    label: "اشخاص",
    icon: <UsergroupAddOutlined />,
  },
  {
    key: "/archives",
    label: "آرشیو املاک",
    icon: <FileSearchOutlined />,
  },
  {
    key: "/profile",
    icon: <UserOutlined />,
    label: "حساب کاربری",
  },
  {
    key: "/import-data",
    icon: <DatabaseOutlined />,
    label: "بارگذاری اطلاعات",
  },
]

export const assistantMenuItems = [
  {
    key: "/estates",
    label: "املاک",
    icon: <HomeOutlined />,
  },
  {
    key: "/users",
    label: "اشخاص",
    icon: <UsergroupAddOutlined />,
  },
  {
    key: "/archives",
    label: "آرشیو املاک",
    icon: <FileSearchOutlined />,
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
    key: "/estates",
    label: "املاک",
    icon: <HomeOutlined />,
  },
  {
    key: "/profile",
    icon: <UserOutlined />,
    label: "حساب کاربری",
  },
]

export const advisorMenuItems = [
  {
    key: "/add-estate",
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
    key: "/estates",
    label: "املاک",
    icon: <HomeOutlined />,
  },
  {
    key: "/profile",
    icon: <UserOutlined />,
    label: "حساب کاربری",
  },
]
