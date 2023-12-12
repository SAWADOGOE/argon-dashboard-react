import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Index = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Remplacez l'URL par l'endroit où votre backend Django est en cours d'exécution
                const response = await axios.get('http://localhost:8000/api');
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Données provenant de l'API Django</h1>

            {loading && <p>Chargement en cours...</p>}

            {error && <p>Une erreur s'est produite : {error.message}</p>}

            {data && (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                        // Remplacez 'id' et 'name' par les champs de votre modèle Django
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Index;
