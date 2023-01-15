import {
  ApiOutlined,
  CommentOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MobileOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons"

export const AdminMenuItems = [
  {
    key: "/users",
    label: "املاک",
    icon: <UsergroupAddOutlined />,
  },
  {
    key: "/operators",
    label: "پشتیبان ها",
    icon: <UserSwitchOutlined />,
  },
  {
    key: "/damage-reports",
    label: "گزارشات خرابی",
    icon: <ApiOutlined />,
  },
  {
    key: "/damage-types",
    label: "نوع خسارت",
    icon: <InfoCircleOutlined />,
  },
  {
    key: "/suggestions",
    label: "پیشنهادات",
    icon: <CommentOutlined />,
  },
  {
    key: "/payment",
    label: "تراکنش ها",
    icon: <MobileOutlined />,
  },
]

export const OperatorMenuItems = [
  {
    key: "/profile",
    label: "حساب کاربری",
    icon: <UserOutlined />,
  },
  {
    key: "/users",
    label: "کاربران",
    icon: <UsergroupAddOutlined />,
  },
  {
    key: "/damage-reports",
    label: "گزارشات خرابی",
    icon: <ApiOutlined />,
  },
]

export const UserMenuItems = [
  {
    key: "/damage-reports",
    label: "املاک",
    icon: <HomeOutlined />,
  },
  {
    key: "/profile",
    icon: <UserOutlined />,
    label: "حساب کاربری",
  },
]
