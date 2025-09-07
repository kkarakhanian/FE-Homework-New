"use strict";


function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.7) {
                reject(new Error(`Failed to load user ${userId}`));
            } else {
                resolve({ id: userId, name: `User ${userId}` });
            }
        }, 300);
    });
}

function getUsersData(userIds) {
    const promises = userIds.map((id) => fetchUserData(id));

    return Promise.allSettled(promises).then((results) => {
        const success = [];
        const errors = [];

        results.forEach((res, idx) => {
            if (res.status === "fulfilled") {
                success.push(res.value);
            } else {
                errors.push({ id: userIds[idx], error: res.reason.message });
            }
        });

        return { success, errors };
    });
}

// Example of usage
const userIds = [1, 2, 3, 4, 5];

getUsersData(userIds).then((result) => {
    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
});



