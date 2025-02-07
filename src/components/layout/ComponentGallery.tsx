import React from 'react';
import { IoSettingsOutline, IoWalletOutline } from 'react-icons/io5';
import { 
  PostButton, 
  SearchForm, 
  SideActionButton, 
  SwapActionButton,
  ViewSwapActionButton,
  Tab,
  Chanel,
  Profile 
} from '..';
import '../../styles/ComponentGallery.css';

const ComponentGallery: React.FC = () => {
  return (
    <div className="component-gallery">
      <h1 className="gallery-title">
        Component Gallery
      </h1>

      {/* PostButton */}
      <div className="gallery-section">
        <h2 className="section-title">PostButton</h2>
        <PostButton />
      </div>

      {/* Profile */}
      <div className="gallery-section">
        <h2 className="section-title">Profile</h2>
        <Profile />
      </div>

      {/* SearchForm */}
      <div className="gallery-section">
        <h2 className="section-title">SearchForm</h2>
        <SearchForm />
      </div>

      {/* SideActionButton */}
      <div className="gallery-section">
        <h2 className="section-title">SideActionButton</h2>
        <SideActionButton />
      </div>

      {/* SwapActionButton */}
      <div className="gallery-section">
        <h2 className="section-title">SwapActionButton</h2>
        <SwapActionButton />
      </div>

      {/* ViewSwapActionButton */}
      <div className="gallery-section">
        <h2 className="section-title">ViewSwapActionButton</h2>
        <ViewSwapActionButton />
      </div>

      {/* Tab */}
      <div className="gallery-section">
        <h2 className="section-title">Tab</h2>
        <Tab
          items={[
            { id: '0', label: 'Tab 1', icon: <IoSettingsOutline size={20} /> },
            { id: '1', label: 'Tab 2', icon: <IoWalletOutline size={20} /> }
          ]}
        />
      </div>

      {/* Chanel */}
      <div className="gallery-section">
        <h2 className="section-title">Chanel</h2>
        <Chanel />
      </div>
    </div>
  );
};

export default ComponentGallery; 