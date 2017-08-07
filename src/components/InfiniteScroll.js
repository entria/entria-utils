import { Component } from 'react';
import PropTypes from 'prop-types';

class InfiniteScroll extends Component {
  static defaultProps = {
    offset: 25,
    children: null,
  };

  static propTypes = {
    onScroll: PropTypes.func.isRequired,
    offset: PropTypes.number,
    children: PropTypes.node,
  };

  constructor(props) {
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
      const toReach = document.body.scrollHeight - this.props.offset;

      if (visibleArea >= toReach) {
        this.props.onScroll();
      }
    }, 100);
  }

  render() {
    return this.props.children;
  }
}

export default InfiniteScroll;
