exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('Rating', function (table) {
      table.increments().primary();
      table.string('author').notNullable();
      table.decimal('rating', 1).notNullable();
      table.string('review').notNullable();
      table.timestamp('created_on').defaultTo(knex.fn.now());
      table.timestamp('modified_on').defaultTo(knex.fn.now());

      table.integer('product_id').unsigned().notNullable();
      table.foreign('product_id').references('Product.id');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('Rating')
  ]);
};