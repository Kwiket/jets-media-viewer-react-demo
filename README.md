# Jets Media Viewer React Demo

A modern, responsive React component for displaying photos and panoramas in a modal viewer with synchronized thumbnails.

## Features

- Media viewer with a clean, modern UI
- Support for both photos and panoramas
- Synchronized main view and thumbnail navigation
- Responsive design with customizable dimensions
- Touch-friendly interface
- Built with TypeScript for type safety
- Uses Swiper.js for smooth sliding functionality
- Customizable pagination and navigation controls

## Installation

```bash

npm install

```

## Usage

```tsx
import JetsMediaViewer from 'jets-media-viewer-react-demo';

const config = {
  title: 'Aircraft Gallery',
  photoData: [
    {
      file: 'photo-url.jpg',
      size: { w: 1920, h: 1080 },
      thumb: 'thumb-url.jpg',
      thumbSize: { w: 200, h: 150 },
      description: 'Center of Business class cabin. Left side',
    },
  ],
  panoData: [
    {
      file: 'pano-url.html',
      rawFile: 'raw-url.jpg',
      thumb: 'pano-thumb-url.jpg',
      thumbSize: { w: 200, h: 150 },
      description: '360° panorama view',
    },
  ],
  pagination: {
    enabled: true,
    activeBulletColor: '#007bff',
  },
  navigation: {
    enabled: true,
    leftIcon: 'https://example.com/left-arrow.svg',
    rightIcon: 'https://example.com/right-arrow.svg',
    color: '#ffffff',
  },
  styles: {
    modal: {
      width: 760,
      borderRadius: 20,
    },
    slides: {
      width: 300,
      height: 1000,
    },
    thumbnails: {
      width: 100,
      height: 100,
    },
  },
  onClose: () => console.log('Modal closed'),
};

function App() {
  return <JetsMediaViewer config={config} />;
}
```

## Configuration

The component accepts a configuration object with the following properties:

### `title` (optional)

- Type: `string`
- Default: "Aircraft gallery"
- Description: The title displayed at the top of the modal

### `photoData` (optional)

- Type: `Array<PhotoDataItem>`
- Description: Array of photo items to display
- Properties for each photo:
  - `file`: URL of the full-size image
  - `size`: Object containing `width` and `height` of the image
  - `thumb`: URL of the thumbnail image
  - `thumbSize`: Object containing `width` and `height` of the thumbnail
  - `description`: Image description/caption

### `panoData` (optional)

- Type: `Array<PanoDataItem>`
- Description: Array of panorama items to display
- Properties for each panorama:
  - `file`: URL of the panorama viewer HTML file
  - `rawFile`: URL of the raw panorama image
  - `thumb`: URL of the panorama thumbnail
  - `thumbSize`: Object containing `width` and `height` of the thumbnail
  - `description`: Panorama description/caption

### `pagination` (optional)

- Type: `object`
- Description: Pagination configuration for slide indicators
- Properties:
  - `enabled`: Boolean to enable/disable pagination dots
  - `activeBulletColor`: CSS color value for the active pagination bullet

### `navigation` (optional)

- Type: `object`
- Description: Navigation configuration for previous/next buttons
- Properties:
  - `enabled`: Boolean to enable/disable navigation arrows
  - `leftIcon`: URL of the custom left arrow icon (optional - shows default if not provided)
  - `rightIcon`: URL of the custom right arrow icon (optional - shows default if not provided)
  - `color`: CSS color value for navigation arrows (optional - works only with default navigation controls)

### `styles` (optional)

- Type: `object`
- Description: Custom styling options
- Properties:
  - `overlay`: {
    - `backgroundColor`: Color of underlaying backgroung
    - `opacity`: opacity level
  - `modal`: Modal container styles
    - `width`: Modal width in pixels
    - `height`: Modal height in pixels
    - `border`: Border CSS property
    - `borderRadius`: Border radius in pixels
    - `padding`: Padding
    - `backgroundColor`: Background color of modal
  - `slides`: Main slide styles
    - `width`: Slide width in pixels
    - `height`: Slide height in pixels
  - `thumbnails`: Thumbnail styles
    - `width`: Thumbnail width in pixels
    - `height`: Thumbnail height in pixels

### `onClose` (optional)

- Type: `() => void`
- Description: Callback function called when the close button is clicked

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the project
npm run build
```

## License

Apache 2.0
