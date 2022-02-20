import React from 'react';
import { SlideWithHeader } from '../template/baseSlide';

export const ComposingTypes: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'Composing Types'}>
    <CodePane language={'typescript'}>
      {
        // Unions
        type Category = 'catA' | 'catB' | 'catC';

        // Intersection
        type CommonProperty = { a: string, b: number } & { a: string, c: boolean };

        // Extending interfaces
        interface IHasType {
          type: Category;
        }

        interface IMarketItem extends IHasType {
          name: string;
        }
      }
    </CodePane>
    <Notes> </Notes>
  </SlideWithHeader>
}