import {integer, pgEnum, pgTable, serial, text, varchar} from 'drizzle-orm/pg-core';
import {drizzle} from 'drizzle-orm/node-postgres';

export const typesEnum = pgEnum('type', ['Arabica', 'Robusta', 'Liberica', 'Ekselsa']);
export const coffeeProcessing = pgEnum('processing', ['Washed', 'Natural', 'Honey', 'Hybrid', 'Semi-washed', 'Pulped natural', 'Miel', 'Anaerobic', 'Aerobic', 'Carbonic Maceration', 'Monsooned', 'Decaffeinated', 'Lactic']);
export const coffeeNotesEnum = pgEnum('notes', [
    'Citrus',
    'Berry',
    'StoneFruit',
    'TropicalFruit',
    'Jasmin',
    'Rose',
    'Chamomile',
    'Lavender',
    'Almond',
    'Hazelnut',
    'Walnut',
    'Pecan',
    'Chocolate',
    'Caramel',
    'Honey',
    'Vanilla',
    'BrownSugar',
    'Cinnamon',
    'Nutmeg',
    'BlackPepper',
    'Clove',
    'Herbal',
    'Woody',
    'Tobacco',
    'Leather',
    'Butter',
    'Umami',
    'Roasted',
    'Smoky',
    'Winey',
    'Fermented',
    'Bright',
    'Acidic',
]);

export const usersTable = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    phone: varchar('phone', {length: 256})
});

export const itemsTable = pgTable('items', {
    id: serial('id').primaryKey(),
    coffeeName: text('name'),
    processing: coffeeProcessing('processing'),
    type: typesEnum('type'),
    price: text('price'),
    description: text('description'),
});

export const coffeeNotesTable = pgTable('coffee_notes', {
    id: serial('id').primaryKey(),
    itemsId: integer('items_id').references(() => itemsTable.id),
    notes: coffeeNotesEnum('notes')
});