const apiKey = 'P9UW2J1p0p6HlOv8K5YrjyduKlTXA81GOatDGwI9';
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
        const sourceLanguage = 'en'; // Idioma original do texto
        const targetLanguage = 'pt'; // Idioma para tradução

        // Função para traduzir texto usando a API de tradução do Google
        async function translateText(text, sourceLang, targetLang) {
            const apiKeyTranslate = 'AIzaSyCUAZg_wpEnAucap6u6sXuFjsHgIAI1-XI';
            const translateUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKeyTranslate}`;

            const requestData = {
                q: text,
                source: sourceLang,
                target: targetLang
            };

            try {
                const response = await fetch(translateUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestData)
                });
                const data = await response.json();
                return data.data.translations[0].translatedText;
            } catch (error) {
                console.error('Erro ao traduzir texto:', error);
                return null;
            }
        }

        // Fazendo uma solicitação GET para a API APOD
        fetch(apiUrl)
        .then(response => response.json())
        .then(async data => {
            // Exibindo a imagem e informações na página
            document.getElementById('apod-image').src = data.url;
            
            // Traduzindo o título e a explicação
            const translatedTitle = await translateText(data.title, sourceLanguage, targetLanguage);
            const translatedExplanation = await translateText(data.explanation, sourceLanguage, targetLanguage);
            
            // Exibindo o título e a explicação traduzidos na página
            document.getElementById('apod-title').textContent = translatedTitle;
            document.getElementById('apod-explanation').textContent = translatedExplanation;
        })
        .catch(error => console.error('Erro ao recuperar os dados:', error));