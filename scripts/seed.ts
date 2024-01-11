import { VercelPoolClient, db } from '@vercel/postgres'
import { websiteData } from '../fixtures/data.ts';

async function seedWebsiteData(client: VercelPoolClient) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "website" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS website (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        page TEXT NOT NULL UNIQUE,
        field TEXT NOT NULL UNIQUE,
        content TEXT NOT NULL UNIQUE
      );
    `;

    console.log(`Created "website" table`);

    // Insert data into the "website" table
    const insertedWebsiteData = await Promise.all(
      websiteData.map(async (data) => {
        return client.sql`
        INSERT INTO website (id, page, field, content)
        VALUES (${data.id}, ${data.page}, ${data.field}, ${data.content})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedWebsiteData.length} pages`);

    return {
      createTable,
      data: insertedWebsiteData,
    };
  } catch (error) {
    console.error('Error seeding pages:', error);
    throw error;
  }
}

async function main() {
  console.log({
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING
});
  const client = await db.connect();

  await seedWebsiteData(client);

  await client.release();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});