/**
 * @typeof {object} User
 * @property {number} id - ID pengguna.
 * @property {string} name - Nama Lengkap Pengguna
 * @property {string} email - Email Pengguna
 */

/**
 * Memfilter pengguna berdasarkan nama.
 *
 * @param {User[]} source - Array data pengguna
 * @param {string} query - Nama yang dicari
 * @returns {User[]} Array pengguna yang sesuai.
 */
export function filterUsers(source, query) {
  return source.filter((user) =>
    user.name.toLowerCase().includes(query.trim().toLowerCase()),
  );
}

/**
 * Mengambil seluruh data pengguna dari API.
 *
 * @returns {Promise<User[]>} Promise berisi array User.
 */

export async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error(`Request Gagal: ${response.status}`);
  }

  return response.json();
}
