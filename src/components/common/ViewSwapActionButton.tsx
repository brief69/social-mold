import React, { useState } from 'react';
import { IoList, IoGrid } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/animations.css';

const ViewSwapActionButton: React.FC = () => {
  const theme = useTheme();
  const [isListView, setIsListView] = useState(true);

  const handleViewSwap = () => {
    setIsListView(!isListView);
    // TODO: ビュー切り替えの処理を実装
    // - コンテンツのレイアウト変更
    // - アニメーション効果
    // - 表示状態の永続化
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    width: '64px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.primary,
    cursor: 'pointer',
  };

  return (
    <button
      className="tap-animation"
      onClick={handleViewSwap}
      style={buttonStyle}
      title={isListView ? "Switch to Grid View" : "Switch to List View"}
      aria-label={isListView ? "Switch to Grid View" : "Switch to List View"}
    >
      {isListView ? (
        <IoGrid size={48} />
      ) : (
        <IoList size={48} />
      )}
    </button>
  );
};

export default ViewSwapActionButton;
