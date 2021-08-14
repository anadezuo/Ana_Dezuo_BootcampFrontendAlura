import React from 'react';
import PropTypes from 'prop-types';
import CardImage from '../commons/CardImage';
import CardTitle from '../commons/CardTitle';
import CardMainWrapper from './styles';
import CardText from '../commons/CardText';

export default function CardMain({
  title, imageUrl, link, text,
}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <CardMainWrapper>
        <CardImage imageUrl={imageUrl} main />
        <CardMainWrapper.Test>
          <CardTitle title={title} />
          <CardMainWrapper.Text>
            <CardText text={text} />
          </CardMainWrapper.Text>
        </CardMainWrapper.Test>
      </CardMainWrapper>
    </a>
  );
}

CardMain.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
};

CardMain.defaultProps = {
  text: '',
};
