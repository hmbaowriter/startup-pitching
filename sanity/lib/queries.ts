import { defineQuery } from "next-sanity";

// https://www.sanity.io/docs/live-content-guide for more information
export const STARTUPS_QUERY =
  defineQuery(`
  *[_type=="startup" && defined(slug.current) && !defined($search) 
    || title match $search 
    || category match $search 
    || author->name match $search 
    | order(_createdAt desc)
  ] {
    _id, 
    title,
    slug, 
    _createdAt, 
    author -> { _id, name, image, bio },
    views,
    description, 
    category, 
    image
  }
`); 