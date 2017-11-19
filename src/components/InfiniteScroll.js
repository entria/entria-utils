// @flow
import { Component } from 'react';

import type { Node } from 'react';

type Props = {
  onScroll: () => void,
  offset: number,
  children: Node,
};
class InfiniteScroll extends Component<Props> {
  static defaultProps = {
    offset: 25,
    children: null,
  };

  timeout: ?number;

  constructor(props: Props) {
    super(props);
    this.timeout = null;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);

    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      const visibleArea = window.scrollY + window.innerHeight;
      const toReach = document.body && document.body.scrollHeight ? document.body.scrollHeight - this.props.offset : 0;

      if (visibleArea >= toReach) {
        this.props.onScroll();
      }
    }, 100);
  };

  render() {
    return this.props.children;
  }
}

export default InfiniteScroll;
