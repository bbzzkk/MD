import React from 'react';

import Others from './Others';
import Toolbar from './Toolbar';

import S from './style';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = props => {
  return (
    <>
      <HideOnScroll {...props}>
        <S.Header>
          <S.Container>
            <Toolbar></Toolbar>

            <Others />
          </S.Container>
        </S.Header>
      </HideOnScroll>
    </>
  );
};

export default Header;
