# G-Engine API Client

TypeScript клиент для работы с G-Engine API.

[![Тестирование](https://github.com/yakoshiq/g-engine-nodejs-lib/actions/workflows/tests.yml/badge.svg)](https://github.com/yakoshiq/g-engine-nodejs-lib/actions/workflows/tests.yml)
[![Документация](https://github.com/yakoshiq/g-engine-nodejs-lib/actions/workflows/docs.yml/badge.svg)](https://yakoshiq.github.io/g-engine-nodejs-lib/)

Официальный сайт проекта: [G-Engine](https://g-engine.net/)

## Документация

Полная документация API доступна на [GitHub Pages](https://yakoshiq.github.io/g-engine-nodejs-lib/).

### Основные разделы

- [Модули](https://yakoshiq.github.io/g-engine-nodejs-lib/index.html) - главная страница документации
- [Классы](https://yakoshiq.github.io/g-engine-nodejs-lib/classes/GEngineClient.html) - документация по классам
- [Интерфейсы](https://yakoshiq.github.io/g-engine-nodejs-lib/types/Token.html) - описание типов и интерфейсов

### Локальная генерация документации

```bash
# Сгенерировать документацию
npm run docs

# Запустить документацию локально
npm run docs:serve

# Автоматическая генерация при изменениях
npm run docs:watch
```

## Установка

```bash
npm install g-engine-api
```

## Использование

### Инициализация клиента

```typescript
import { GEngineClient } from 'g-engine-api';

// Создание клиента без токена
const client = new GEngineClient();

// Создание клиента с токеном
const client = new GEngineClient('https://b2b-api.ggsel.com', 'your-token');
```

### Аутентификация

```typescript
// Авторизация
const token = await client.auth.login({
  login: 'your-login',
  password: 'your-password',
});

// Установка токена
client.setToken(token.access_token);

// Выход
client.auth.logout();
```

### Работа с пользователями

```typescript
// Получение данных текущего пользователя
const currentUser = await client.users.getCurrentUser();

// Получение баланса пользователя
const balance = await client.users.getUserBalance();

// Получение списка пользователей (только для Observer)
const users = await client.users.getUsers({
  limit: 10,
  offset: 0,
  sort_by: 'created_at',
  sort_order: 'desc',
});
```

### Работа с платежами

```typescript
import { generateTransactionId } from 'g-engine-api';

// Генерация уникального идентификатора транзакции
const transactionId = generateTransactionId();
console.log(`Сгенерированный transaction_id: ${transactionId}`);

// Создание и верификация платежа
const paymentVerification = await client.payments.verifyPayment({
  transaction_id: transactionId,
  service_id: 1,
  account: 'user123',
  amount: 100,
  currency: 'USD',
});
```

### Работа с транзакциями

```typescript
// Получение списка транзакций
const transactions = await client.transactions.getTransactions({
  limit: 10,
  offset: 0,
  sort_by: 'date',
  sort_order: 'desc',
});
```

### Работа с валютами

```typescript
// Получение курса валюты
const currencyRate = await client.currencies.getCurrencyRate(
  RateSource.cb_rf,
  CurrencyPair.USD_RUB
);
```

### Утилиты

Библиотека предоставляет набор полезных утилит:

```typescript
import { generateTransactionId, isValidTransactionId } from 'g-engine-api';

// Генерация уникального идентификатора транзакции
const transactionId = generateTransactionId();
console.log(`Сгенерированный transaction_id: ${transactionId}`);

// Проверка валидности идентификатора транзакции
const isValid = isValidTransactionId(transactionId);
console.log(`Идентификатор транзакции валиден: ${isValid}`);
```

## Типы данных

Библиотека экспортирует все необходимые типы данных и перечисления:

```typescript
import {
  UserRole,
  StatusCode,
  RateSource,
  CurrencyPair,
  UserMe,
  UserBalance,
  PaymentResponse,
  TransactionRead,
  // и другие...
} from 'g-engine-api';
```

## Разработка

```bash
# Установка зависимостей
npm install

# Запуск тестов
npm test

# Запуск линтера
npm run lint

# Сборка проекта
npm run build
```

## Лицензия

MIT

## Контакты

По всем вопросам, связанным с библиотекой, вы можете связаться с автором:

- Telegram: [@yakosher](https://t.me/yakosher)
