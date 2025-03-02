import { GEngineClient } from '../../src';

/**
 * Пример аутентификации пользователя
 */
async function authExample() {
  // Создаем экземпляр клиента
  const client = new GEngineClient();

  try {
    // Выполняем вход в систему
    const token = await client.auth.login({
      login: 'example_user',
      password: 'secure_password'
    });

    console.log('Успешная аутентификация!');
    console.log('Токен доступа:', token.access_token);
    console.log('Тип токена:', token.token_type);

    // Получаем информацию о текущем пользователе
    const currentUser = await client.users.getCurrentUser();
    console.log('Информация о пользователе:', currentUser);

    // Выход из системы
    client.auth.logout();
    console.log('Выход из системы выполнен');
  } catch (error) {
    console.error('Ошибка аутентификации:', error);
  }
}

// Запускаем пример
authExample().catch(console.error); 