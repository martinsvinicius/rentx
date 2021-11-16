import { hash } from 'bcrypt';
import { getConnection } from 'typeorm';
import { v4 } from 'uuid';

export async function seedAdminUser() {
  const connection = getConnection();

  const id = v4();
  const password = await hash('admin', 10);

  await connection.query(`
    INSERT INTO users (id, name, email, password, is_admin, created_at)
    VALUES ('${id}', 'admin', '${password}', true, NOW())
  `);
}
