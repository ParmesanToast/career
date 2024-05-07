export async function generateContent(userInput) {
    const request = {
      contents: [{role: 'user', parts: [{text: userInput}]}],
    };
    const result = await generativeModel.generateContent(request);
    const response = result.response;
    console.log('Response: ', JSON.stringify(response));
  };
  
  generateContent();