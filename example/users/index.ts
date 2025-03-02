import { GEngineClient, UserRole } from '../../src';

/**
 * Пример работы с пользователями
 */
async function usersExample() {
  // Создаем экземпляр клиента
  const client = new GEngineClient();

  try {
    // Аутентификация
    const token = await client.auth.login({
      login: 'example_user',
      password: 'secure_password'
    });
    console.log('Успешная аутентификация!');

    // Получаем информацию о текущем пользователе
    const currentUser = await client.users.getCurrentUser();
    console.log('Информация о текущем пользователе:');
    console.log(`Логин: ${currentUser.login}`);
    console.log(`Имя: ${currentUser.name}`);
    console.log(`Роль: ${currentUser.role}`);
    console.log(`Баланс: ${currentUser.balance}`);
    console.log(`Активен: ${currentUser.is_active}`);

    // Получаем баланс пользователя
    const balance = await client.users.getUserBalance();
    console.log('\nБаланс пользователя:');
    
    if (Array.isArray(balance)) {
      // Если пользователь имеет роль Observer, возвращается массив балансов
      balance.forEach((item, index) => {
        console.log(`Пользователь ${index + 1}:`);
        console.log(`  ID: ${item.id}`);
        console.log(`  Логин: ${item.login}`);
        console.log(`  Валюта: ${item.currency}`);
        console.log(`  Баланс: ${item.balance}`);
        console.log(`  Кэшбэк: ${item.cashback}`);
      });
    } else {
      // Для обычного пользователя возвращается объект с балансом
      console.log(`Валюта: ${balance.currency}`);
      console.log(`Баланс: ${balance.balance}`);
      console.log(`Кэшбэк: ${balance.cashback}`);
    }

    // Если пользователь имеет роль Observer или выше, получаем список пользователей
    if (currentUser.role === UserRole.Observer || 
        currentUser.role === UserRole.Administrator || 
        currentUser.role === UserRole.Boss_Of_This_Gym) {
      
      console.log('\nСписок пользователей:');
      const users = await client.users.getUsers({
        limit: 10,
        offset: 0,
        sort_by: 'created_at',
        sort_order: 'desc'
      });

      users.forEach((user, index) => {
        console.log(`Пользователь ${index + 1}:`);
        console.log(`  ID: ${user.id}`);
        console.log(`  Логин: ${user.login}`);
        console.log(`  Имя: ${user.name}`);
        console.log(`  Роль: ${user.role?.name}`);
        console.log(`  Баланс: ${user.balance}`);
        console.log(`  Дата создания: ${user.created_at}`);
      });
    }

  } catch (error) {
    console.error('Ошибка при работе с пользователями:', error);
  }
}

// Запускаем пример
usersExample().catch(console.error); 