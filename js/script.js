'use strict';

function demonstrateVarLetConst() {
    for (let i = 0; i < 1; i++) {
        var varVariable = "var inside the loop";
        let letVariable = "let inside the loop";
        const constVariable = "const inside the loop";

        console.log("Inside the loop:");
        console.log("varVariable:", varVariable);
        console.log("letVariable:", letVariable);
        console.log("constVariable:", constVariable);
    }

    console.log("\nOutside the loop:");
    console.log("varVariable:", varVariable); // ✅ Accessible (var has function scope)

    // ❌ Not accessible – will throw an error, so we wrap in try...catch
    try {
        console.log("letVariable:", letVariable);
    } catch (error) {
        console.log("letVariable: not accessible outside the block (error)");
    }

    try {
        console.log("constVariable:", constVariable);
    } catch (error) {
        console.log("constVariable: not accessible outside the block (error)");
    }
}

demonstrateVarLetConst();