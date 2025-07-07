import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1751878813167 } from 'src/migrations/1751878813167-CoffeeRefactor';
import { SchemaSync1751879241648 } from 'src/migrations/1751879241648-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5436,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1751878813167, SchemaSync1751879241648],
});
