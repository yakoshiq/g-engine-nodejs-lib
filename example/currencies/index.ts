import { GEngineClient, CurrencyPair, RateSource } from '../../src';

/**
 * Пример работы с валютами
 */
async function currenciesExample() {
  // Создаем экземпляр клиента
  const client = new GEngineClient();

  try {
    // Аутентификация
    const token = await client.auth.login({
      login: 'example_user',
      password: 'secure_password'
    });
    console.log('Успешная аутентификация!');

    // Получаем курс USD к RUB от Центрального Банка РФ
    const usdRubCbRate = await client.currencies.getCurrencyRate(
      RateSource.cb_rf,
      CurrencyPair.USD_RUB
    );

    console.log('Курс USD к RUB (ЦБ РФ):');
    if (usdRubCbRate.success && usdRubCbRate.data) {
      console.log(`Источник: ${usdRubCbRate.data.source}`);
      console.log(`Пара: ${usdRubCbRate.data.pair}`);
      console.log(`Курс: ${usdRubCbRate.data.currency_rate}`);
    } else {
      console.log(`Ошибка: ${usdRubCbRate.message}`);
    }

    // Получаем курс EUR к RUB от Центрального Банка РФ
    const eurRubCbRate = await client.currencies.getCurrencyRate(
      RateSource.cb_rf,
      CurrencyPair.EUR_RUB
    );

    console.log('\nКурс EUR к RUB (ЦБ РФ):');
    if (eurRubCbRate.success && eurRubCbRate.data) {
      console.log(`Источник: ${eurRubCbRate.data.source}`);
      console.log(`Пара: ${eurRubCbRate.data.pair}`);
      console.log(`Курс: ${eurRubCbRate.data.currency_rate}`);
    } else {
      console.log(`Ошибка: ${eurRubCbRate.message}`);
    }

    // Получаем курс USD к RUB от Steam
    const usdRubSteamRate = await client.currencies.getCurrencyRate(
      RateSource.steam,
      CurrencyPair.USD_RUB
    );

    console.log('\nКурс USD к RUB (Steam):');
    if (usdRubSteamRate.success && usdRubSteamRate.data) {
      console.log(`Источник: ${usdRubSteamRate.data.source}`);
      console.log(`Пара: ${usdRubSteamRate.data.pair}`);
      console.log(`Курс: ${usdRubSteamRate.data.currency_rate}`);
    } else {
      console.log(`Ошибка: ${usdRubSteamRate.message}`);
    }

    // Сравнение курсов из разных источников
    if (usdRubCbRate.success && usdRubCbRate.data && 
        usdRubSteamRate.success && usdRubSteamRate.data) {
      
      const cbRate = parseFloat(usdRubCbRate.data.currency_rate);
      const steamRate = parseFloat(usdRubSteamRate.data.currency_rate);
      const difference = Math.abs(cbRate - steamRate);
      const percentDifference = (difference / cbRate) * 100;
      
      console.log('\nСравнение курсов USD к RUB:');
      console.log(`ЦБ РФ: ${cbRate}`);
      console.log(`Steam: ${steamRate}`);
      console.log(`Разница: ${difference.toFixed(2)} (${percentDifference.toFixed(2)}%)`);
    }

  } catch (error) {
    console.error('Ошибка при работе с валютами:', error);
  }
}

// Запускаем пример
currenciesExample().catch(console.error); 