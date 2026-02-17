
export interface GameCardProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  onLaunch: (url: string) => void;
}

export enum PrivacyStatus {
  SECURE = 'SECURE',
  CLOAKED = 'CLOAKED',
  PUBLIC = 'PUBLIC'
}
