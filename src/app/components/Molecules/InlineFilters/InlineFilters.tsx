import { FunctionComponent } from 'react';
import './InlineFilters.style.scss';
import FilterButton from '../../Atoms/FilterButton/FilterButton';
import { useTranslation } from 'react-i18next';

export const InlineFilters: FunctionComponent<any> = ({ filters, setActiveFilter, activeFilter }) => {
  const { t } = useTranslation();

  const onFilterClick = (filterCode) => {
    setActiveFilter(filterCode);
  };
  return (
    <div className="inline-filters">
      {filters.map((filterCode) => {
        return (
          <FilterButton
            key={filterCode}
            onClick={() => {
              onFilterClick(filterCode);
            }}
            isActive={filterCode === activeFilter}
          >
            {t(`knowledgesFilter.${filterCode}`)}
          </FilterButton>
        );
      })}
    </div>
  );
};

export default InlineFilters;
