export default function ImageLoader({ src }) {
  const cmsDomain = 'https://cmsadmin.techforing.com/';

  if (src.startsWith(cmsDomain)) {
    return src;
  }

  return `https://main.techforing.com/${src}`;
}
