'use client';

import { useRef, useState } from 'react';

import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectEmpty,
  MultiSelectList,
  type MultiSelectOption,
  MultiSelectSearch,
  MultiSelectTrigger,
  MultiSelectValue,
  renderMultiSelectOptions,
} from '@/components/ui/multi-select';
import { ALL_ITEMS, group, search } from '@/lib/utils';

export function SearchFilter() {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<MultiSelectOption[]>(() =>
    group(ALL_ITEMS),
  );

  const indexRef = useRef(0);

  const handleSearch = async (keyword?: string) => {
    const index = ++indexRef.current;
    setLoading(true);
    const newOptions = await search(keyword);
    if (indexRef.current === index) {
      setOptions(newOptions);
      setLoading(false);
    }
  };

  return (
    <MultiSelect onSearch={handleSearch}>
      <MultiSelectTrigger className="h-12 px-8 lg:w-1/2">
        <MultiSelectValue placeholder="Filter By Support, UI & Dependecies." />
      </MultiSelectTrigger>
      <MultiSelectContent>
        <MultiSelectSearch />
        <MultiSelectList>
          {loading ? null : renderMultiSelectOptions(options)}
          <MultiSelectEmpty>
            {loading ? 'Loading...' : 'No results found'}
          </MultiSelectEmpty>
        </MultiSelectList>
      </MultiSelectContent>
    </MultiSelect>
  );
}
