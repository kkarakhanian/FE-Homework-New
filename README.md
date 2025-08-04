
1. **Map: Статистика обʼєктів за складними ключами**

   Реалізуйте функцію groupByCategory(items), яка приймає масив товарів, де кожен товар має складний обʼєкт як категорію, і групує товари по цих категоріях.

const electronics = { name: 'Electronics' };
const books = { name: 'Books' };

const items = [
{ name: 'Laptop', category: electronics },
{ name: 'Phone', category: electronics },
{ name: 'Book A', category: books },
];

const result = groupByCategory(items);
// Map {
// electronics => [ { name: 'Laptop', ... }, { name: 'Phone', ... } ],
// books => [ { name: 'Book A', ... } ]
// }

2. **Set: Виявлення унікальних обʼєктів без повторної обробки**

   Створіть функцію filterUniqueByReference(arr), яка повертає масив лише унікальних обʼєктів за посиланням.
   const obj1 = { name: "a" };
   const obj2 = { name: "a" };

const input = [obj1, obj1, obj2, obj2, obj1];

const result = filterUniqueByReference(input);
// => [obj1, obj2]

3. **WeakMap: Привʼязка метаданих до обʼєктів без витоку памʼяті**

   Створіть createMetadataStorage(), яка дозволяє "прикріпити" додаткову інформацію до будь-якого об’єкта без зміни самого об'єкта. Ці об’єкти можуть зникнути з памʼяті — і метаінформація теж автоматично зникне.
   У JavaScript не можна безпечно додати поле до стороннього об’єкта, якщо не ви його створили. Наприклад:
   
   const user = { name: "Іван" };
   user.__tag = "важливий"; // Погано: змінює структуру, конфлікти з іншими системами

Але за допомогою WeakMap ми можемо зберігати додаткову інформацію зовнішньо, не торкаючись самого обʼєкта.

Приклад використання

const storage = createMetadataStorage();

const user1 = { name: "Анна" };
const user2 = { name: "Олег" };

storage.setMetadata(user1, { role: "admin" });
storage.setMetadata(user2, { role: "user" });

console.log(storage.getMetadata(user1)); // { role: "admin" }
console.log(storage.hasMetadata(user2)); // true

**Завдання 4 — WeakSet: Відстеження вже оброблених об’єктів**

Створіть клас ObjectTracker, який дозволяє перевірити, чи вже певний обʼєкт був "помічений" або оброблений. Клас має методи:
mark(obj) — позначити обʼєкт як оброблений
wasProcessed(obj) → true | false — чи обʼєкт уже був оброблений

Контекст:
У багатьох сценаріях (наприклад, обході графу, DOM-дерева, глибокої перевірки) потрібно знати, чи цей обʼєкт уже оброблявся, щоб не повторювати дію.
Поведінка

const tracker = new ObjectTracker();

const obj = { name: "A" };

console.log(tracker.wasProcessed(obj)); // false
tracker.mark(obj);
console.log(tracker.wasProcessed(obj)); // true


