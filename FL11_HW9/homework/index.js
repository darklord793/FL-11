// 0. This function returns array of numbers from string parameter.
function getNumbers (userString) {
  let result = [];
  let begin = 0;
    for(let i=begin;i<userString.length;i++){
       if (!isNaN(+userString[i])){
         result [result.length]=+parseInt(userString[i]);
         begin++;
       }
   }
  return result;
}

// 1. This function returns array of data types.
function findTypess(...args){
  let result={};
  for(let i = 0; i < args.length; i++){
    let type = typeof args[i];
    if (! (type in result)){
      result[type]=1;
    } else {
      result[type]+=1;
    }
  }
  return result;
}

// 2. This function returns array with function element.
function executeForEach (data, funct) {
  let result={};
  for (let i = 0; i < data.length; i++) {
    result+=funct(data[i]);
  }
  return result;
}

// 3. This function returns transformed array based on function. With reusing function from task 2.
function mapArray (data, functionCall) {
  let result = [];
  executeForEach(data, function(el) {
    let tempToArray = functionCall(el);
    result.push(tempToArray);
  });
  return result;
}

// 4. This function returns filtered array based on function. With reusing function from task 2.
function filterArray (data, functionCall) {
  let result = [];
  executeForEach(data, function(el) {
    if (functionCall(el)) {
      result.push(el);
    }
  });
  return result;
}

// 5. This function returns formatted date.
function showFormattedDate (dateFormatInfo) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
  let month = months[dateFormatInfo.getMonth()];
  let day = dateFormatInfo.getDate();
  let year = dateFormatInfo.getFullYear();
  return `Date: ${month} ${day} ${year}`;
}

// 6. This function returns Boolean value converted to valid date.
function canConvertToDate (dateFormatInfo) {
  let date = new Date(dateFormatInfo);
  return !isNaN(Date.parse(date));
}


// 7. This function returns difference between two dates in days
function daysBetween (firstDate, secondDate) {
  let seconds = 1000;
  let minutes = 60;
  let houers = 24;
  let days = 60;
  let result = Math.abs((firstDate - secondDate) / (seconds * minutes * houers * days));
  return Math.round(result);
}

// 8. This function returns amount of people, whose age is more than 18. Reuse function from task 4,7
function getAmountOfAdultPeople (ageDataFunc) {
  let days = 6574;
  let result = [];
  result = filterArray(ageDataFunc, function (el) {
    if (daysBetween(Date.now(), new Date(el[' birthday '])) > days) {
      return true;
    }
  });
  return result.length;
}

let personalDataInfo = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      " birthday ": '2016-03-18T00:00:00',
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      " birthday ": '1991-02-11T00:00:00',
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      " birthday ": '1984-04-17T00:00:00',
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {

      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      " birthday ": '1994-04-17T00:00:00',
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
  ];

// 9. This function returns array of object.
function keys (functionObject) {
  let result = [];
  for (let object in functionObject) {
    if (functionObject.hasOwnProperty(object)) {
      result.push(object);
    }
  }
  return result;
}

// 10. This function returns array of values.
function values (functionObject) {
  let result = [];
  for (let object in functionObject) {
    if (functionObject.hasOwnProperty(object)) {
      result.push(functionObject[object]);
    }
  }
  return result;
}
