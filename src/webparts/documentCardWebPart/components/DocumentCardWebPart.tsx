import {
    DocumentCard,
    DocumentCardPreview,
    DocumentCardTitle,
    DocumentCardActivity,
    IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';

import * as React from 'react';
import { css } from 'office-ui-fabric-react';

import styles from '../DocumentCardWebPart.module.scss';
import { IDocumentCardWebPartWebPartProps } from '../IDocumentCardWebPartWebPartProps';

export interface IDocumentCardWebPartProps extends IDocumentCardWebPartWebPartProps {
}

export default class DocumentCardWebPart extends React.Component<IDocumentCardWebPartProps, {}> {
  public render(): JSX.Element {
    const previewProps: IDocumentCardPreviewProps = {
    previewImages: [
        {
        previewImageSrc: require('document-preview.png'),
        iconSrc: require('icon-ppt.png'),
        width: 318,
        height: 196,
        accentColor: '#ce4b1f'
        }
    ],
    };

    return (
        <DocumentCard onClickHref='http://bing.com'>
        <DocumentCardPreview { ...previewProps } />
        <DocumentCardTitle title='Revenue stream proposal fiscal year 2016 version02.pptx'/>
        <DocumentCardActivity
            activity='Created Sep 2, 2016'
            people={
            [
                { name: 'Kat Hudson', profileImageSrc: require('avatar-kat.png') }
            ]
            }
        />
        </DocumentCard>
    );
}
}
