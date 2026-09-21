import { getCollection } from 'astro:content';

const site = 'https://0xsac.github.io';

export async function GET() {
  const [exercises, briefings] = await Promise.all([
    getCollection('exercises'),
    getCollection('briefings'),
  ]);

  const urls = [
    '/',
    '/exercises/',
    ...exercises.map((exercise) => `/exercises/${exercise.id}/`),
    '/briefings/',
    ...briefings.map((briefing) => `/briefings/${briefing.id}/`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${site}${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
