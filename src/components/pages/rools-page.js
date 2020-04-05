import React from 'react';
import { RoolsItems } from './initial-pages';
import { withRouter } from 'react-router-dom'

const RoolsPage = ({ history }) => {
  return(
    <RoolsItems
      onItemDetails={(itemId) => {
        history.push(`/rools/${itemId}`);
      }} />
  );
};

export default withRouter(RoolsPage);
