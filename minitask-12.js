const data = 'https://jsonplaceholder.typicode.com/users'

;(async () => {
  try {
    const response = await fetch(data)
    if (!response.ok) throw response.status

    let res = await response.json()
    res.map((value) => value.email = value.email.toLowerCase())
    console.log(res)
  } catch (err) {
    console.log('Error', err);
  }
})()

fetch(data)
  .then(response => {
    if (!response.ok) throw response.status

    return response.json()
  })
  .then(res => {
    // console.log(res);
    res.map(val => {
      let result = '';
      let email = val.email
      for (let i = 0; i < email.length; i++) {
        let charCode = email.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
          result += String.fromCharCode(charCode + 32);
        } else {
          result += email[i];
        }
      }

      val.email = result
      return val;
    })

    console.log(res);
    
  })
  .catch(err => {
    console.log("error", err);
  })
  .finally(() => {
    console.log("\n-------------------\n");
  })
