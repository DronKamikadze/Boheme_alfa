import React from 'react';
import styles from '../../styles/Sidebar.module.css';

// Определяем тип для пропсов
interface SidebarProps {
  collections: string[];
  style: string[];
  view: string[];
  color: string[];
  onFilterChange: (filterType: 'collection' | 'style' | 'view' | 'color', value: string, isChecked: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collections, style, view, color, onFilterChange }) => {
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
      <div>
        <h4>Вид</h4>
        {view.map((view: string) => (
          <label key={view} className={styles.header}>
            <input
              type="checkbox"
              value={view}
              onChange={(e) => onFilterChange('view', e.target.value, e.target.checked)}
            />
            {view}
          </label>
        ))}
      </div>

      <div>
        <h4>Цвет</h4>
        {color.map((color: string) => (
          <label key={color} className={styles.header}>
            <input
              type="checkbox"
              value={color}
              onChange={(e) => onFilterChange('color', e.target.value, e.target.checked)}
            />
            {color}
          </label>
        ))}
      </div>
      
    </div>
  );
};

export default Sidebar;
