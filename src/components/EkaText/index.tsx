import * as React from 'react';
import { ReactNode } from 'react';
import { Text } from './style';

interface EkaTextProps {
  children?: ReactNode;
}

export const EkaText: React.FC<EkaTextProps> = ({ children = null }) => {

  const getContents = (): ReactNode[] | null => {
    if (
      typeof children === 'string'
      || React.isValidElement(children)
    ) {
      return [children];
    }

    if (
      Array.isArray(children)
      && children.length > 0
      && children.every((contentItem) => (
        typeof contentItem === 'string'
        || React.isValidElement(contentItem)
      ))
    ) {
      return children;
    }

    return null;
  };

  const contents = getContents();

  return (
    <>
      {contents?.map((contentItem, index) => (
        <Text key={`text-item-${index}`}>
          {contentItem}
        </Text>
      ))}
    </>
  );
};
