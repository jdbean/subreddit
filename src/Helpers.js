import React from 'react';
import PostCard from './components/Post-Card'

// Construct a PostCard component with the appropriate props
export const makePostCard = (post, type, toggleFavorite, isFavorite) => {
  let relativeTime = (type) => {
    switch (type) {
      case "main":
        return true;
      case "favorites":
        return false;
      default:
        return true;
    }
  }
  return (
    <PostCard
      relativeTime={relativeTime(type)}
      key={post.id}
      toggleFavorite={toggleFavorite}
      isFavorite={isFavorite}
      post={post}
      type={type}
    />
  );
}

// Rough process to select optimal image url.
// Preference: reddit source > thumbnail source > placeholder
export const pickImage = (data) => {
  if (data.url.startsWith('https://i.redd.it/')) {
    return data.url;
  } else if (data.thumbnail && data.thumbnail !== '') {
    return data.thumbnail;
  } else {
    return '/img.png';
  }
}

// Takes JS date obj and returns string in mm/dd/yy formate
export const mmddyy = (date) => {
  const mm = date.getMonth() + 1 //JS Months are indexed a 0
  const dd = date.getDay();
  const yyyy = date.getFullYear();

  return [mm, dd, yyyy % 100].join('/');
}