import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface ContextFormat {
    selectedGenreId: number;
    genres: GenreResponseProps[];
    handleClickButton(id: number): void;
}

interface ChildrenProps { children: ReactNode; }

// create Context
const SideBarContext = createContext<ContextFormat>({} as ContextFormat);

// create Provider
export const SideBarProvider = ({ children }: ChildrenProps) => {
    const [selectedGenreId, setSelectedGenreId] = useState(1);

    const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  
    useEffect(() => {
      api.get<GenreResponseProps[]>('genres').then(response => {
        setGenres(response.data);
      });
    }, []);
  
    function handleClickButton(id: number) {
      setSelectedGenreId(id);
    }

    return (
        <SideBarContext.Provider value={{ selectedGenreId, genres, handleClickButton }}>
            {children}
        </SideBarContext.Provider>
    )
}

// create hook
export const useSideBar = () => {
    const context = useContext(SideBarContext);

    return context;
}