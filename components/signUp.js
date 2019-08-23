import React from 'react';

const SignUp = ({ subscriptionLink }) => (
  <a
    href={subscriptionLink}
    className="btn btn--white w-100 text-center"
    title="Inscreva-se agora"
    target="_blank"
    rel="noopener noreferrer"
  >
    Inscreva-se agora
  </a>
);

export default SignUp;
