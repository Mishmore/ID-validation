const postJSON = (url, parameter) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState > 3 && xhr.status == 201) {
        console.log(xhr.responseText);
        console.log('comment created');
      }
    };
  
    xhr.open('POST', url , true);
  
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(parameter));
    console.log(xhr.response);
  }

  export {
    postJSON
  }