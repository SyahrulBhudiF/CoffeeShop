DO $$ BEGIN
 CREATE TYPE "public"."notes" AS ENUM('Citrus', 'Berry', 'StoneFruit', 'TropicalFruit', 'Jasmin', 'Rose', 'Chamomile', 'Lavender', 'Almond', 'Hazelnut', 'Walnut', 'Pecan', 'Chocolate', 'Caramel', 'Honey', 'Vanilla', 'BrownSugar', 'Cinnamon', 'Nutmeg', 'BlackPepper', 'Clove', 'Herbal', 'Woody', 'Tobacco', 'Leather', 'Butter', 'Umami', 'Roasted', 'Smoky', 'Winey', 'Fermented', 'Bright', 'Acidic');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."processing" AS ENUM('Washed', 'Natural', 'Honey', 'Hybrid', 'Semi-washed', 'Pulped natural', 'Miel', 'Anaerobic', 'Aerobic', 'Carbonic Maceration', 'Monsooned', 'Decaffeinated', 'Lactic');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."type" AS ENUM('Arabica', 'Robusta', 'Liberica', 'Ekselsa');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "coffee_notes" (
	"id" serial PRIMARY KEY NOT NULL,
	"items_id" integer,
	"notes" "notes"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "items" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"processing" "processing",
	"type" "type",
	"price" text,
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"phone" varchar(256)
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "coffee_notes" ADD CONSTRAINT "coffee_notes_items_id_items_id_fk" FOREIGN KEY ("items_id") REFERENCES "public"."items"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
