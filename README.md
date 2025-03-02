# G-Engine API Client

TypeScript клиент для работы с G-Engine API.

Официальный сайт проекта: [G-Engine](https://g-engine.net/)

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
  password: 'your-password'
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
  sort_order: 'desc'
});
```

### Работа с платежами

```typescript
import { generateTransactionId } from 'g-engine-api';

// Генерация уникального идентификатора транзакции
const transactionId = generateTransactionId();
console.log(`Сгенерированный transaction_id: ${transactionId}`);

// Создание и верификация платежа
const verifyResult = await client.payments.verifyPayment({
  transaction_id: transactionId,
  service_id: 1,
  account: 'user-account',
  amount: 100,
  currency: 'RUB'
});

// Выполнение платежа
const executeResult = await client.payments.executePayment({
  transaction_id: transactionId
});

// Получение статуса платежа
const paymentStatus = await client.payments.getPaymentStatus(transactionId);
```

### Работа с транзакциями

```typescript
// Получение списка транзакций
const transactions = await client.transactions.getTransactions({
  limit: 10,
  offset: 0,
  sort_by: 'date',
  sort_order: 'desc'
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

## Лицензия

MIT 