import { render } from '@testing-library/react';
import React from 'react';

describe('Accessibility checks', () => {
  it('should render tree items with aria-selected', () => {
    const { getAllByRole } = render(
      <ul role="tree">
        <li role="treeitem" aria-selected="false">Item 1</li>
        <li role="treeitem" aria-selected="false">Item 2</li>
        <li role="treeitem" aria-selected="false">Item 3</li>
      </ul>
    );

    getAllByRole('treeitem').forEach(item => {
      expect(item).toHaveAttribute('aria-selected');
    });
  });
});
