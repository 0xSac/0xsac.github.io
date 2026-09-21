import { getCollection } from 'astro:content';
import { contentPath } from '../utils/content-path';

const site = 'https://0xsac.github.io';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET() {
  const [exercises, briefings] = await Promise.all([
    getCollection('exercises'),
    getCollection('briefings'),
  ]);

  const urls = [
    '/',
    '/exercises/',
    ...exercises.map((exercise) => `/exercises/${contentPath(exercise.id)}/`),
    '/briefings/',
    ...briefings.map((briefing) => `/briefings/${contentPath(briefing.id)}/`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${escapeXml(`${site}${url}`)}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
