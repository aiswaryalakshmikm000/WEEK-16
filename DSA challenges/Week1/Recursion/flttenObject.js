function flattenObject(obj, parentKey = '', result = {}){
    for(let key in obj) {
        let newKey = parentKey ? parentKey + '.' + key : key
        
        if(typeof obj[key] === 'object' && obj[key] !== null){
            flattenObject(obj[key], newKey, result)
        } else {
            result[newKey] = obj[key]  
        }
    }
    return result
}


const nested = {
  name: "John",
  address: {
    city: "New York",
    pin: 10001,
    location: { lat: 40.71, lng: -74.01 }
  },
  contact: { phone: 1234 }
};

console.log(flattenObject(nested));