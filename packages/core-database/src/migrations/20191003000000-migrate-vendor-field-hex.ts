import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateVendorFieldHex20191003000000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            UPDATE transactions SET vendor_field_hex = ('\\x' || ENCODE(vendor_field_hex, 'escape'))::BYTEA;
            ALTER TABLE transactions RENAME vendor_field_hex TO vendor_field;
        `);
    }

    async down(queryRunner: QueryRunner): Promise<any> {}
}
