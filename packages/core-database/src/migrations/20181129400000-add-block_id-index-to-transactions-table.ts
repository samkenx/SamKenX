import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBlockIdIndexToTransactionsTable20181129400000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE INDEX "transactions_block_id" ON transactions ("block_id");
        `);
    }

    async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            DROP INDEX "transactions_block_id";
        `);
    }
}
