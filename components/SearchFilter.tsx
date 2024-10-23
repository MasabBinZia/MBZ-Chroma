'use client';

import { useRef, useState } from 'react';

import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectEmpty,
  MultiSelectList,
  type MultiSelectOption,
  type MultiSelectOptionGroup,
  MultiSelectSearch,
  MultiSelectTrigger,
  MultiSelectValue,
  renderMultiSelectOptions,
} from '@/components/ui/multi-select';

const ALL_ITEMS = [
  { value: 'react', label: 'React', group: 'Support' },
  { value: 'next', label: 'Next.js', group: 'Support' },
  { value: 'vue', label: 'Vue', group: 'Support' },
  { value: 'nuxt', label: 'Nuxt', group: 'Support' },
  { value: 'angular', label: 'Angular', group: 'Support' },
  { value: 'svelte', label: 'Svelte', group: 'Support' },
  { value: 'solid', label: 'SolidJS', group: 'Support' },
  { value: 'remix', label: 'Remix', group: 'Support' },
  { value: 'astro', label: 'Astro', group: 'Support' },
  { value: 'qwik', label: 'Qwik', group: 'Support' },

  { value: 'tailwind', label: 'Tailwind CSS', group: 'UI' },
  { value: 'bootstrap', label: 'Bootstrap', group: 'UI' },
  { value: 'mui', label: 'Material UI', group: 'UI' },
  { value: 'chakra', label: 'Chakra UI', group: 'UI' },

  { value: 'framer-motion', label: 'Framer Motion', group: 'Dependency' },
  { value: 'react-spring', label: 'React Spring', group: 'Dependency' },
  { value: 'radix', label: 'Radix', group: 'Dependency' },
  { value: 'aria', label: 'Aria', group: 'Dependency' },
];

function group(
  options: (typeof ALL_ITEMS)[number][],
): MultiSelectOptionGroup[] {
  return options.reduce((acc, item) => {
    const group = acc.find((g) => g.heading === item.group);
    if (group) group.children.push(item);
    else acc.push({ heading: item.group, children: [item] });

    return acc;
  }, [] as MultiSelectOptionGroup[]);
}

async function search(keyword?: string) {
  if (!keyword) return group(ALL_ITEMS);
  await new Promise((resolve) => setTimeout(resolve, 500));
  const lowerKeyword = keyword.toLowerCase();
  const filtered = ALL_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(lowerKeyword),
  );
  return group(filtered);
}

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
