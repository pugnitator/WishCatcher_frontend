import { useRef, useState } from 'react';
import styled from 'styled-components';
import ImageButton from '../6_shared/ui/buttons/ImageButton';
import searchIcon from '../assets/icons/searchIcon.svg';
import closeIcon from '../assets/icons/closeIcon.svg';

interface SearchBarProps {
  onSearch: (arg: string) => void;
  onCancelSearch: () => void;
  placeholder?: string;
}

export default function SearchBar({
  onSearch,
  onCancelSearch,
  placeholder = 'Поиск...',
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  const handleSearch = () => {
    if (value) {
      onSearch(value);
    }
  };

  const handleCancelSearch = () => {
    setValue('');
    onCancelSearch();
  };

  return (
    <StyledSearchBar>
      <SearchInput
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ImageButton onClick={handleSearch}>
        <img 
          src={searchIcon}
          alt="Начать поиск"
          width="32" height="32" loading="lazy"
        />
      </ImageButton>
      <ImageButton onClick={handleCancelSearch}>
        <img 
          src={closeIcon}
          alt="Отменить поиск"
          width="29" height="29" loading="lazy"
        />
      </ImageButton>
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 40px;

  padding: 0 10px 0 0;

  border: var(--border);
  border-radius: var(--border-radius-small);
`;

const SearchInput = styled.input`
  display: inline-flex;
  height: 40px;

  flex-grow: 1;

  background-color: transparent;
  border: none;

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: var(--color-light);
  }
`;
