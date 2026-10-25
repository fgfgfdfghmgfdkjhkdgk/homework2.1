import { useRef } from 'react';
import SearchButton from './components/SearchButton.jsx';
import SearchInput from './components/SearchInput.jsx';

export default function App() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <nav>
        <SearchButton onClick={handleClick} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}