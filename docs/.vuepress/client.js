import {defineClientConfig} from "@vuepress/client";
import {addIcons} from "oh-vue-icons";
import {
  CoGit,
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  FaPaw,
  OiGitCompare,
  OiRocket,
  RiBilibiliLine,
  RiBook2Fill,
  RiGithubLine,
  RiSailboatLine,
  RiVuejsLine,
  CoNotion
} from "oh-vue-icons/icons";

addIcons(
  RiBilibiliLine,
  FaFortAwesome,
  FaTag,
  FaPaw,
  FaSatelliteDish,
  RiBook2Fill,
  RiVuejsLine,
  CoGit,
  RiGithubLine,
  OiGitCompare,
  OiRocket,
  RiSailboatLine,
  CoNotion
);

export default defineClientConfig({});
