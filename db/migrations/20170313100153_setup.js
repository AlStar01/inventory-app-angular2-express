
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('Category', function(table) {
        table.increments();
        table.string('name').notNull();
        table.string('description').notNull();
        table.timestamp('created_on').defaultTo(knex.fn.now());
        table.timestamp('modified_on').defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('Category')
  ]);
};
