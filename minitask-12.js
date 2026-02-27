const url = 'https://jsonplaceholder.typicode.com/users'

;(async () => {
  try {
    const response = await fetch(url)
    if (!response.ok) throw response.status

    const res = await response.json()
    const data = res.map(value => {
      value.email = value.email.toLowerCase()
      return value
    })
    console.log(data)
  } catch (err) {
    console.log('Error', err);
  } finally {
    console.log("\n-------------------\n");
  }
})()

fetch(url)
  .then(response => {
    if (!response.ok) throw response.status

    return response.json()
  })
  .then(res => {
    const data = res.map(val => {
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

    console.log(data);
    
  })
  .catch(err => {
    console.log("error", err);
  })
