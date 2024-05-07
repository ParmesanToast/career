import axios from 'axios';

const baseUrl = 'https://us-central1-aiplatform.googleapis.com/'; // Vertex AI API 엔드포인트로 바꿔주세요

export async function generateText(projectId, location, modelId, textInput) {
    const url = `${baseUrl}/projects/${projectId}/locations/${location}/models/${modelId}:generate`;5
    const data = {
        inputs: [{ text: textInput }],
    };

    const response = await axios.post(url, data, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjYXBzdG9uQG1ldGFsLW11c2ljLTQxOTExMi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImNhcHN0b25AbWV0YWwtbXVzaWMtNDE5MTEyLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwiYXVkIjoiaHR0cHM6Ly92ZXJ0ZXguZ29vZ2xlYXBpcy5jb20vIiwiZXhwIjoxNzEzODgyNjA1LCJpYXQiOjE3MTM4NzkwMDV9.alIUT1BJZQZuB3bZuxRwBH8TXsjPdiLt52Fwh6fMJIlLXu1yF5E8zxVX3nZRHm8zGtD5tOgR6k9B_4H7XJG3s0nCbC1KOdXCFrClEwHyAk2rLiGsxUEoJk9Ie6yC09nP9rgrqwRbFW6kWt78dGqBmXn_xYvoIGJx-3T00tRFB0QBvsgpMl5mQ-k0bzd1TiIGfvsdoGOQxbB33V3I2TBMOyijd8UOXTQtj5MfmJQabxe8EUeXsO-uu6-Q6BVBA72Eiet9YRUTvGHjXrvIziV6Kv-VqAIXskTdGoPokVKtictIrx69WhaUo5mFYS8wsYPe60oiSfD1N_a3TWMnS2-AEA` // 액세스 토큰 검색 로직으로 바꿔주세요
        },
    });

    return response.data;
}
