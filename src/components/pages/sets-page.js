import React from 'react';
import { SetsItems } from './initial-pages';
import { withRouter } from 'react-router-dom'

const SetsPage = ({ history }) => {
  return(
    <SetsItems
      onItemDetails={(itemId) => {
        history.push(`/sets/${itemId}`);
      }} />
  );
};

export default withRouter(SetsPage);
