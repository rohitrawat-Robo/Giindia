// src/utils/event.js
//
// Central event data source. All event/image info is derived automatically
// from src/utils/eventsManifest.json, which the Vite plugin
// (vite-plugins/events-manifest-plugin.js) generates by scanning
// public/events/ on disk. Nothing here is typed in by hand.

import manifest from './eventsManifest.json';

const SUPPORTED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif'];

// Pulls a rough category/location/date/year out of a folder name like:
//   "SRM University, AP (11 May 2026- 13 May 2026)"
//   "NVIDIA GEN AI 5-STAR PARTNER AWARD"
function parseEventMeta(folderName) {
  const parenMatch = folderName.match(/\(([^)]+)\)/);
  const dateRaw = parenMatch ? parenMatch[1].trim() : '';

  const location = parenMatch
    ? folderName.slice(0, parenMatch.index).trim().replace(/,\s*$/, '')
    : folderName.trim();

  const years = folderName.match(/\b(19|20)\d{2}\b/g) || [];
  const year = years.length ? years[years.length - 1] : '';

  const lower = folderName.toLowerCase();
  let category = 'Event';
  if (lower.includes('award')) {
    category = 'Award';
  } else if (lower.includes('orientation')) {
    category = 'Orientation';
  } else if (lower.includes('installation') || lower.includes('training')) {
    category = 'Training';
  } else if (
    lower.includes('conclave') ||
    lower.includes('summit') ||
    lower.includes('conference') ||
    lower.includes('seminar') ||
    lower.includes('sparx')
  ) {
    category = 'Conference';
  } else if (
    lower.includes('university') ||
    lower.includes('college') ||
    lower.includes('institute') ||
    lower.includes('school')
  ) {
    category = 'University Visit';
  }

  const date = dateRaw || year || '';
  const description = date
    ? `${category} at ${location} (${date})`
    : `${category} at ${location}`;

  return { location, date, year, category, description };
}

// Folder name -> URL slug. Folder name itself is never changed.
export function createEventSlug(name) {
  return name
    .toLowerCase()
    .replace(/[(),&]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Builds the public URL for one image inside an event's real folder.
export function getEventImage(event, imageName) {
  return `/events/${event.folder}/${imageName}`;
}

function pickRandom(list) {
  if (!list || list.length === 0) return null;
  return list[Math.floor(Math.random() * list.length)];
}

// Random preview image for a given event (e.g. if you want to reroll it
// somewhere outside of the data-build step below).
export function getRandomEventImage(event) {
  return pickRandom(event?.gallery);
}

const folderNames = Object.keys(manifest);

const eventsData = folderNames.map((folder, index) => {
  const images = (manifest[folder] || []).filter((name) =>
    SUPPORTED_EXTENSIONS.includes(name.split('.').pop().toLowerCase())
  );
  const meta = parseEventMeta(folder);
  const slug = createEventSlug(folder);
  const gallery = images.map((imageName) => getEventImage({ folder }, imageName));

  // Picked ONCE when this module loads (i.e. once per page load), not on
  // every render -> stays stable while searching/filtering/paginating.
  const previewImage = pickRandom(gallery);

  return {
    id: index + 1,
    title: folder,
    folder,
    slug,
    category: meta.category,
    year: meta.year,
    location: meta.location,
    date: meta.date,
    description: meta.description,
    images, // raw filenames
    gallery, // full public URLs, all images
    image: previewImage, // full public URL, one random image (or null)
    photos: images.length,
  };
});

export default eventsData;
