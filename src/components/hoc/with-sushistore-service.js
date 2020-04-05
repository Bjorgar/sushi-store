import React from 'react';
import { SushistoreServiceConsumer } from '../sushistore-service-context';

const withSushistoreService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <SushistoreServiceConsumer>
        {
          (sushistoreService) => {
            const serviceProps = mapMethodsToProps(sushistoreService);
            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </SushistoreServiceConsumer>
    );
  }
};

export default withSushistoreService;
