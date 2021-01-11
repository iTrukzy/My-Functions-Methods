const william = {}
william.myEach = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i)
    }
}

william.myFilter = (array, fn) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if(fn(array[i], i, array)) {
        newArray.push(array[i])
        }
    }
    return newArray
}
william.myMap = (array, fn) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]));
    }
    return newArray
}


william.myFind = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        if(fn(array[i]), i) {
            return array[i]
        }
    }
}


william.myFindIdex = (array, index) => {
    let plus = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] == index) {
            plus.push(i)
        }
    }
    return plus
}

william.myContains = (array, value, fromIndex) => {
    for(fromIndex = 0; fromIndex < array.length; fromIndex++) {
        if(array[fromIndex] == value) {
            return true
        }
    }
    return false
}
william.myPluck = (array, key) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
            newArray.push(array[i][key])
    }
    return newArray
}

william.myWithout = (array, elemnt1, element2) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] != elemnt1 && array[i] != element2) {
            result.push(array[i])
        }
    }
        
    return result
    
}



const arr = [1, 45, 6, 70]
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

william.myEach(arr, () => console.log('hola'))

const filterArr = william.myFilter(arr, (element) => element > 6);
console.log(filterArr)

const mapArr = william.myMap(arr, (element) => element + 4)
console.log(mapArr)

const findArr = william.myFind(arr, (element) => element)
console.log(findArr)

const findIdexArr = william.myFindIdex(arr, 6)
console.log(findIdexArr)

const containsArr = william.myContains(arr, 6);
console.log(containsArr)

const pluckArr = william.myPluck(stooges, 'name');
console.log(pluckArr)

const withoutArr = william.myWithout(arr, 1, 70)
console.log(withoutArr)

