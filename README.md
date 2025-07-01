
Напишіть функцію findValuesByKey(obj, targetKey), яка:
* Приймає довільний вкладений об'єкт obj.
* Повертає масив усіх значень, що відповідають ключу targetKey (ключ може з’являтися на будь-якому рівні вкладеності, й кілька разів).

Приклад
const data = {
id: 1,
name: "root",
meta: {
id: 2,
parent: {
id: 3,
name: "leaf",
},
},
array: [
{ id: 4 },
{ name: "node", children: [{ id: 5 }] },
],
};

findValuesByKey(data, "id");
// ➜ [1, 2, 3, 4, 5]
