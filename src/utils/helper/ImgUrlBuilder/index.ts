import { buildUrl } from 'cloudinary-build-url';

export const url = (imageId: string, fileName: string = 'e-commerce') =>
  buildUrl(`${fileName}/${imageId}`, {
    cloud: {
      cloudName: 'drgaknas1',
    },
  });