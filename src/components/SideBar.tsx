import { Button } from '../components/Button';
import { Logotipo } from '../components/Logotipo';
import { useSideBar } from '../hooks/useSideBar';

export function SideBar() {
  const { selectedGenreId, genres, handleClickButton } = useSideBar();
  
  return (
    <nav className="sidebar">
      <Logotipo />

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}