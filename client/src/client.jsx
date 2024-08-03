import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'pgcckzck',
  dataset: 'production',
  apiVersion: '2024-01-14',
  useCdn: true,
  token: 'skEbIlQCZsTbbBu9ZYL7EYP6ovIZAKW0WyolliM5bKJpX1upiovhmUaSMwV4eGc5lME4vMrrwIG16vrKhliSCXPurpVDdnm6aqKtSFWcbpIJ5ZpNqusPa6WsVfZ3FXgTl5XollA61SHgToVRUHJ7f1WyTgl6K9klz3TcrX1fWJoVGMsxJKMj',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
