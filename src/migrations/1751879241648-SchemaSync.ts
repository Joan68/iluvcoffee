import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1751879241648 implements MigrationInterface {
  name = 'SchemaSync1751879241648';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
  }
}
