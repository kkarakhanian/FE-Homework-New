'use strict';

function createDataBase() {
    const OBJECT_KEYS = ['firstName', 'lastName', 'phone'];
    let DB = [];

    function loadFromLocalStorage() {
        try {
            const serializedDB = localStorage.getItem(LOCAL_STORAGE_KEY);
            return serializedDB ? JSON.parse(serializedDB) : [];
        } catch (error) {
            console.error("Error loading from localStorage:", error);
            return [];
        }
    }

    function saveToLocalStorage() {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DB));
        } catch (error) {
            console.error("Error saving to localStorage:", error);
        }
    }

    const validateObject = (objectToValidate) => {
        if(typeof objectToValidate !== 'object') return false;
        const keysToValidate = Object.keys(objectToValidate);

        let isValid = true;

        for(let i = 0; i < OBJECT_KEYS.length; i++) {

            if(!keysToValidate.includes(OBJECT_KEYS[i])) {
                isValid = false
                break
            }

        }
        return isValid;
    }
    const getData = () => {
        return DB;
    }
    const setData = (data) => {

        // Object validation
        if(!data) return null;
        if(typeof data !== "object") return null;
        if(!validateObject(data)) return null;

        // Generate uniq ID
        let id = 1
        const currentData = getData();
        if(currentData.length > 0) {
            id = currentData[currentData.length-1].id + 1
        }

        // Save data to database;
        const dataToSave = {...data, id};
        DB.push(dataToSave);

        // return saved element
        return DB.at(-1);
    }
    const deleteData = ({id}) => {
        if(typeof id !== 'number') return null;
        const currentData = getData();

        const initialLength = DB.length;
        DB = DB.filter(singleUser => singleUser.id !== id);

        if (DB.length < initialLength) {
            saveToLocalStorage();
            return true;
        }
        return false;
    }

    return {
        getData,
        setData,
        deleteData,
    }
}

const dataBase = createDataBase();