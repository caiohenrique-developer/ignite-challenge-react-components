import { useContent } from '../hooks/useContent';

export const HeaderContent = () => {
    const { selectedGenre } = useContent();

    return (
        <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    )
}