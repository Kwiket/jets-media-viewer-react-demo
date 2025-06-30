export interface PanoDataItem {
  file: string;
  rawFile: string;
  thumb: string;
  thumbSize: { w: number; h: number };
  description: string;
}

export interface PhotoDataItem {
  file: string;
  size: { w: number; h: number };
  thumb: string;
  thumbSize: { w: number; h: number };
  description: string;
}

export interface JetsMediaViewerConfig {
  panoData?: PanoDataItem[];
  photoData?: PhotoDataItem[];
  title?: string;
  pagination?: {
    enabled: boolean;
    activeBulletColor?: string;
  };
  navigation?: {
    enabled: boolean;
    leftIcon?: string;
    rightIcon?: string;
    color?: string;
  };
  styles?: {
    modal?: {
      width?: number;
      height?: number;
      border?: string;
      borderRadius?: number;
    };
    slides?: {
      width?: number;
      height?: number;
    };
    thumbnails?: {
      width?: number;
      height?: number;
    };
  };
  onClose?: () => void;
}

export type JMVSlideType = 'photo' | 'pano';

export const JMVSlideImageType = {
  PHOTO: 'photo' as JMVSlideType,
  PANO: 'pano' as JMVSlideType,
} as const;
