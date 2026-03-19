import { IconType } from "react-icons";
import { createElement } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { McpServerIcon } from "@hugeicons/core-free-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiSupabase,
  SiPython,
  SiTypescript,
  SiAmazonwebservices,
  SiReact,
  SiThreedotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGooglecloud,
  SiVercel,
} from "react-icons/si";

import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa6";

const McpIcon: IconType = (props) =>
  createElement(HugeiconsIcon, { icon: McpServerIcon, ...props } as any);

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  python: SiPython,
  typescript: SiTypescript,
  aws: SiAmazonwebservices,
  react: SiReact,
  threejs: SiThreedotjs,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  gcp: SiGooglecloud,
  vercel: SiVercel,
  devto: FaDev,
  mcp: McpIcon,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
