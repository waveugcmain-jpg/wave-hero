CREATE TABLE `campaign` (
	`id` text PRIMARY KEY NOT NULL,
	`version` integer NOT NULL,
	`head` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `snapshots` (
	`id` text PRIMARY KEY NOT NULL,
	`parent` text,
	`payload` text NOT NULL,
	`created_at` text NOT NULL
);
