import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../src/actions';

export class SearchComponent extends React.Component {

  static propTypes = {
    searchTerm: React.PropTypes.string,
    updateSearchTerm: React.PropTypes.func,
    executeSearch: React.PropTypes.func,
  };

  render() {
    const { searchTerm, updateSearchTerm, executeSearch } = this.props;
    return (
      <div>
        <div className="search-box">
          Search titles:
          <input type="text" value={searchTerm} onChange={(evt) => updateSearchTerm(evt.target.value)} />
        </div>
        <button className="search-button" onClick={() => executeSearch(searchTerm)}>
        FIND MY MOVIES
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(SearchComponent);
