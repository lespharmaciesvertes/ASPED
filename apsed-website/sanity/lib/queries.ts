import { groq } from 'next-sanity';

/* ------------------------- ÉVÉNEMENTS ------------------------- */

export const allEventsQuery = groq`
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    location,
    excerpt,
    coverImage,
    status
  }
`;

export const upcomingEventsQuery = groq`
  *[_type == "event" && date >= now()] | order(date asc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    date,
    location,
    excerpt,
    coverImage
  }
`;

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    date,
    location,
    excerpt,
    coverImage,
    body,
    status
  }
`;

export const eventSlugsQuery = groq`
  *[_type == "event" && defined(slug.current)][].slug.current
`;

/* ------------------------- ACTUALITÉS ------------------------- */

export const allNewsQuery = groq`
  *[_type == "newsPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    coverImage
  }
`;

export const latestNewsQuery = groq`
  *[_type == "newsPost"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    coverImage
  }
`;

export const newsBySlugQuery = groq`
  *[_type == "newsPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    coverImage,
    body
  }
`;

export const newsSlugsQuery = groq`
  *[_type == "newsPost" && defined(slug.current)][].slug.current
`;
