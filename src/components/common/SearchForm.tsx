import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/animations.css';

const SearchForm: React.FC = () => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 検索処理を実装
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // TODO: 入力値の変更時の処理を実装（サジェストなど）
  };

  const containerStyle = {
    position: 'relative' as const,
    width: 'fit-content',
  };

  const formStyle = {
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    border: `2px solid ${theme.primary}`,
    borderRadius: '30px',
    padding: '8px 16px',
    transition: 'all 0.3s ease',
    minWidth: '200px',
    width: `${Math.max(200, 20 + inputValue.length * 12)}px`,
  };

  const inputStyle = {
    background: 'none',
    border: 'none',
    color: theme.primary,
    fontSize: '16px',
    outline: 'none',
    width: '100%',
    padding: '4px 8px',
    '::placeholder': {
      color: `${theme.primary}80`,
    },
  };

  const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.primary,
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={iconStyle}>
          <IoSearchOutline size={20} />
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleChange}
          style={inputStyle}
        />
      </form>
    </div>
  );
};

export default SearchForm; 