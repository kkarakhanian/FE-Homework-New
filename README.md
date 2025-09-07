
Ви маєте функцію `fetchUserData(userId)`, яка повертає проміс із даними користувача (емуляція запиту до API).
Потрібно написати функцію `getUsersData(userIds)`, яка:

* Приймає масив userIds.
* Повертає проміс, що резолвиться в масив об’єктів користувачів.
* Якщо хоча б один запит завершується з помилкою — у результаті має повернутись масив успішних відповідей і масив помилок.

Приклад виклику:

const userIds = [1, 2, 3, 4, 5];

getUsersData(userIds).then((result) => {

"✅ Success:", result.success);
console.log("❌ Errors:", result.errors);
});

Підказки:
* Використати Promise.allSettled.
* Розділити результати на fulfilled і rejected.