import * as React from 'react';
import { connect } from 'react-redux';

import CommitDescription from '../components/CommitDescription';
import CommitWeb3 from '../components/CommitWeb3';
import './Commit.scss';

interface CommitComponentProps {
  weCanSendTransaction: boolean;
}

const CommitComponent: React.SFC<CommitComponentProps> = ({ weCanSendTransaction }) => (
  <div className="commit">
    <h1>Hello, Its great that you are interested in committing in our ICO!</h1>
    {weCanSendTransaction ?
      <CommitWeb3 />
      :
      <CommitDescription />
    }
  </div>);

const mapStateToProps = (state: any) => ({ // @todo fix state
  weCanSendTransaction: state.myStats.addressFromWeb3 === true,
});

export default connect(mapStateToProps)(CommitComponent);
