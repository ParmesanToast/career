export {
    const {
    FunctionDeclarationSchemaType,
    HarmBlockThreshold,
    HarmCategory,
    VertexAI
  } = require('@google-cloud/vertexai');
  
  const project = 'your-cloud-project';
  const location = 'us-central1';
  const textModel =  'gemini-1.0-pro';
  const visionModel = 'gemini-1.0-pro-vision';
  
  const vertexAI = new VertexAI({project: project, location: location});
  
  // Instantiate Gemini models
  const generativeModel = vertexAI.getGenerativeModel({
      model: textModel,
      // The following parameters are optional
      // They can also be passed to individual content generation requests
      safetySettings: [{category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE}],
      generationConfig: {maxOutputTokens: 256},

      
    });
  
  return generativeModel
}