import { buildUrl, } from 'cloudinary-build-url';

export const url = (imageId: string, blur?: boolean, fileName: string = 'e-commerce') =>
  buildUrl(`${fileName}/${imageId}`, {
    cloud: {
      cloudName: 'drgaknas1',

    },
    ...(blur ? {
      transformations: {
        effect: {
          name: "blur:1000"
        },
        quality: 1
      }
    } : {}),
  });