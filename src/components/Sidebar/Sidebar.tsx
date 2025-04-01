import React from 'react';
import styles from '../../styles/Sidebar.module.css';

// Определяем тип для пропсов
interface SidebarProps {
  collections: string[];
  style: string[];
  onFilterChange: (filterType: 'collection' | 'style', value: string, isChecked: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collections, style, onFilterChange }) => {
  return (
    <div className={styles.sidebar}>
      
      <div>
        <h4>Коллекция</h4>
        {collections.map((collection: string) => (
          <label key={collection} className={styles.header}>
            <input
              type="checkbox"
              value={collection}
              onChange={(e) => onFilterChange('collection', e.target.value, e.target.checked)}
            />
            {collection}
          </label>
        ))}
      </div>
      <div>
        <h4>Стиль</h4>
        {style.map((style: string) => (
          <label key={style} className={styles.header}>
            <input
              type="checkbox"
              value={style}
              onChange={(e) => onFilterChange('style', e.target.value, e.target.checked)}
            />
            {style}
          </label>
        ))}
      </div>
      
    </div>
  );
};

export default Sidebar;
