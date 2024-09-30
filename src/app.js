exports.handler = async (event) => {
    const path = event.requestContext.http.path;
    const method = event.requestContext.http.method;
  
    let response;
    switch (path) {
      case '/path1':
        response = handlePath1(method, event);
        break;
      case '/path2':
        response = handlePath2(method, event);
        break;
      case '/path3':
        response = handlePath3(method, event);
        break;
      default:
        response = {
          statusCode: 404,
          body: JSON.stringify({ message: 'Not Found' })
        };
    }
  
    return response;
  };
  
  function handlePath1(method, event) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Handling Path 1 - GET' })
    };
  }
  
  function handlePath2(method, event) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Handling Path 2 - POST' })
    };
  }
  
  function handlePath3(method, event) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Handling Path 3 - PUT' })
    };
  }