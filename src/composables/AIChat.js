import {generativeModel} from './VertexAI.js'

export async function streamChat(chatInput) {
    const chat = generativeModel.startChat();
    const result = await chat.sendMessageStream(chatInput);
    for await (const item of result.stream) {
        console.log("Stream chunk: ", item.candidates[0].content.parts[0].text);
    }
    const aggregatedResponse = await result.response;
    console.log('Aggregated response: ', JSON.stringify(aggregatedResponse));
    
    return aggregatedResponse
  }
  
