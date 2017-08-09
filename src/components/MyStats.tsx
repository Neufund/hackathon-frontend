import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import AddressForm from './AddressForm';
import './MyStats.scss';
import getAccount from '../web3/getAccount';
import { setUserAddress } from '../actions/myStatsActions';

interface MyStatsComponentProps {
  address: string;
  loading: boolean;
  neumarkAmmount: number;
  ethAmmount: number;
  refreshLoggedUser: () => {};
}

class MyStatsComponent extends React.Component<MyStatsComponentProps> {
  componentDidMount() {
    this.props.refreshLoggedUser();
  }

  render() {
    const { address, loading, neumarkAmmount, ethAmmount, refreshLoggedUser } = this.props;
    return (
      <div className="my-stats">
        {address ?
          <h3>Hello, you provided us with following eth address: {address}</h3>
          :
          <div>
            <h3>We were not able to automatically obtain your ETH address.</h3>
            <p>You can unlock your metamask, attach ledger etc and we can try again</p>
            <RaisedButton
              label="Rescan"
              onTouchTap={refreshLoggedUser}
            />
            <p>Or you can pass it into following field</p>
            <AddressForm />
          </div>
        }
        {loading &&
        <div className="spinner">
          <CircularProgress />
          <div className="caption">Obtaining data from smartcontract!</div>
        </div>
        }

        {ethAmmount !== null &&
        <p className="neumarks">You commited <b>{ethAmmount}</b> ETH</p>
        }

        {neumarkAmmount !== null &&
        <p className="neumarks">Currently you own <b>{neumarkAmmount}</b> NeuMarks</p>
        }
      </div>);
  }
}

const MapStateToProps = (state: any) => ({ // @todo fix state
  address: state.myStats.address,
  loading: state.myStats.loading,
  neumarkAmmount: state.myStats.neumarkAmmount,
  ethAmmount: state.myStats.weiAmmount === null ? null : state.myStats.weiAmmount / (10 ** 18),
});

const MapDispatchToProps = (dispatch: Dispatch<any>) => ({
  refreshLoggedUser: () => {
    getAccount().then((account) => {
      if (account !== undefined) {
        // eslint-disable-next-line no-console
        console.log(`got account from web3: ${account} `);
        dispatch(setUserAddress(account, true));
      } else {
        // eslint-disable-next-line no-console
        console.log('didn\'t get any account from web3');
      }
    });
  },
});

export default connect(MapStateToProps, MapDispatchToProps)(MyStatsComponent);
