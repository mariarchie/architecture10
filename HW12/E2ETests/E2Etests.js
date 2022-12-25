// E2E Тестирование
// jest-puppeteer - библиотека для тестирования с открытым исходным кодом


// Пример теста для формы регистрации:

test('Submit form with valid data', async () => {
  // Переходим на форму регистрации
  await page.click('[href="/signin"]');

  // Ждём загрузки формы
  await page.waitForSelector('form');
  // Вводим логин
  await page.type('#name', 'Marianna');

  // Вводим пароль
  await page.type('#password', 'Grujjoih7');
  // Вводим потверждение пароля
  await page.type('#repeat_password', 'Grujjoih7');

  // Отправляем форму
  await page.click('[type="submit"]');
  // Ждем завершения отправки
  await page.waitForSelector('.success');
  // Получаем содержимое сообщения
  const html = await page.$eval('.success', (el) => el.innerHTML);

  // Проверяем сообщение
  expect(html).toBe('Successfully signed up!');
});

const user = { name: 'Marianna', robotNumber: 7756 };
const result = await page.evaluate((user) => {
  window.myApp.use(user);
}, user); 

// Работа с асинхронностью
// Есть несколько событий, которые мы ожидаем:

// загрузка страницы
// изменения на странице (изменения в DOM-дереве)
// запросы
// кастомные ожидания

// Ожидание загрузки страницы

// Переходим на страницу
driver.get('http://localhost:3000');
driver.wait(function() {
  return driver
    // Запускаем скрипт
    .executeScript('return document.readyState')
    .then(function(readyState) {
      // Проверяем что все в порядке
      return readyState === 'complete';
    });
});

// Ожидания изменений на странице
// Ожидание эелмента
driver.wait(until.elementLocated(By.id('#form-feedback')), 4000);

// Ожидание элемента с определенным контентом
const el = driver.wait(until.elementLocated(By.id('#form-feedback')), 4000);
wait.until(ExpectedConditions.textToBePresentInElement(el, 'Success'));

// Ожидание кастомных изменений
// Мы хотим дождаться, пока глобальной переменной user не будет присвоено значение Marianna
browser.executeAsyncScript(`
  window.setTimeout(function() {
    if(window.user === 'Marianna') {
      arguments[arguments.length - 1]();
    }
  }, 300);
`);


test('can logout', async () => {
  await page.click('[data-testid="userMenuButton"]');
  await page.waitForSelector('[data-testid="userMenuOpen"]');
  await page.click('[data-testid="logoutLink"]');
});