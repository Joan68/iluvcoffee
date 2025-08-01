import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule.register({
      // 👈 passing in dynamic values
      type: 'postgres',
      host: 'localhost',
      port: 5436,
      username: 'postgres',
      password: 'pass123',
    }),
    CoffeesModule,
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
