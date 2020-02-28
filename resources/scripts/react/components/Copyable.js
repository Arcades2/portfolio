import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      children: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const Copyable = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const copyText = () => {
    if (!Array.isArray(children.props.children)) {
      const tempInput = document.createElement('input');
      tempInput.value = children.props.children;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      setCopied(true);
      document.body.removeChild(tempInput);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div tabIndex={0} role="button" onKeyDown={(e) => { if (e.keyCode === 13) copyText(); }} onClick={copyText}>
      <OverlayTrigger placement="top" overlay={
        <Tooltip>
          {copied ? 'Copié dans le presse-papier' : 'Cliquez pour copier'}
        </Tooltip>
      }>
        {children}
      </OverlayTrigger>
    </div>
  );
};

Copyable.propTypes = propTypes;

export default Copyable;
