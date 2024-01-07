import {useState, createContext} from 'react';
import {vehicles} from '../vehicles';

export const FavoritesContext = createContext();

function FavoritesContextProvider({children}) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = vehicle => {
    setFavorites([...favorites, vehicle]);
  };

  const removeFavorites = vehicle => {
    setFavorites([...favorites.filter(x => x.id !== vehicle.id)]);
  };

  return (
    <FavoritesContext.Provider
      value={{favorites, addToFavorites, removeFavorites}}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
