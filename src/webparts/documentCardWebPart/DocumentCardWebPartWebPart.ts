require('set-webpack-public-path!');

import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-client-preview';

import * as strings from 'documentCardWebPartStrings';
import DocumentCardWebPart, { IDocumentCardWebPartProps } from './components/DocumentCardWebPart';
import { IDocumentCardWebPartWebPartProps } from './IDocumentCardWebPartWebPartProps';

export default class DocumentCardWebPartWebPart extends BaseClientSideWebPart<IDocumentCardWebPartWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    const element: React.ReactElement<IDocumentCardWebPartProps> = React.createElement(DocumentCardWebPart, {
      description: this.properties.description
    });

    ReactDom.render(element, this.domElement);
  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
