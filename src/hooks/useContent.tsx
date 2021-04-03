import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useSideBar } from "./useSideBar";

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}

interface ContextFormat {
    movies: MovieProps[];
    selectedGenre: GenreResponseProps;
}

interface ChildrenProps { children: ReactNode; }

// create Context
const ContentContext = createContext<ContextFormat>({} as ContextFormat);

// create Provider
export const ContentProvider = ({ children }: ChildrenProps) => {
    const { selectedGenreId } = useSideBar();

    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

    useEffect(() => {
        api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
        setMovies(response.data);
        });

        api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
        setSelectedGenre(response.data);
        })
    }, [selectedGenreId]);

    return (
        <ContentContext.Provider value={{ movies, selectedGenre }}>
            {children}
        </ContentContext.Provider>
    )
}

// create hook
export const useContent = () => {
    const context = useContext(ContentContext);

    return context;
}