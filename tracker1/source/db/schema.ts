import { sqliteTable,text,integer } from 'drizzle-orm/sqlite-core';
export const campaign=sqliteTable('campaign',{id:text('id').primaryKey(),version:integer('version').notNull(),head:text('head').notNull()});
export const snapshots=sqliteTable('snapshots',{id:text('id').primaryKey(),parent:text('parent'),payload:text('payload').notNull(),createdAt:text('created_at').notNull()});
