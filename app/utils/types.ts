export interface BachelorBoi {
  name: string;
  nickname: string;
  interests: string[];
  about: string;
  imagePath: string;
  status: string;
  currentLocation: string;
  category: string;
}
export type BOI_ORIGIN_CATEGORY =
  | "ottawa-bois"
  | "toronto-bois"
  | "family"
  | "all";
