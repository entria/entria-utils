// @flow
import { Component } from 'react';

type Props = {
  title: string | Array<string>,
};
class DocumentTitle extends Component<Props> {
  static defaultProps = {
    title: [],
  };

  componentDidMount() {
    this.update(this.props.title);
  }

  componentWillReceiveProps({ title }: Props) {
    this.update(title);
  }

  shouldComponentUpdate() {
    return false;
  }

  update(title: string | Array<string>) {
    let documentTitle = [];

    if (typeof title !== typeof undefined) {
      if (Array.isArray(title)) {
        documentTitle = documentTitle.concat(title);
      } else {
        documentTitle.push(title);
      }
    }

    document.title = documentTitle.join(' - ');
  }

  render() {
    return null;
  }
}

export default DocumentTitle;
