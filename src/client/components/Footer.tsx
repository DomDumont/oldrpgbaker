import * as React from 'react';

export interface FooterProps { compiler: string; framework: string; }

export class Footer extends React.Component<FooterProps, undefined> {
    render() {
        return <div>@DomDom</div>;
    }
}
