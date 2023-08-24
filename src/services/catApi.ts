async function fetchRandomCatPhotoUrl(): Promise<string> {
    try {
      const apiKey = process.env.CAT_API_KEY;
      const apiUrl = ' https://api.thecatapi.com/v1/images/search';
      const backupApiUrl = 'https://api.thecatapi.com/v1/images/search';
  
      const response = await fetch(apiKey ? apiUrl : backupApiUrl, {
        headers: apiKey ? { 'x-api-key': apiKey } : undefined,
      });
  
      if (!response.ok) {
        throw new Error('API request failed.');
      }
  
      const data = await response.json();
      const imageUrl = data[0]?.url || '';
  
      return imageUrl;
    } catch (error) {
      console.error('Error fetching cat photo:', error);
      throw error;
    }
  }
  
  export const catApiService = {
    fetchRandomCatPhotoUrl,
  };
  